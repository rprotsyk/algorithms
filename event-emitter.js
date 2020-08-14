function EventEmitter() {
    
    const callbacks = new Map();
    
    function subscribe(event, callbackFunction) {
       const foundCallbacks = callbacks.get(event);
       if (foundCallbacks) {
          foundCallbacks.push(callbackFunction);
       } else {
          callbacks.set(event, [callbackFunction])
       }
      
       return () => {
          const foundCallbacks = callbacks.get(event);
          const foundIndex = foundCallbacks.findIndex(callbackFunction);
          foundCallbacks.splice(foundIndex, 1);
       }
    }
  
    function publish(event, payload) {
        const foundCallbacks = callbacks.get(event);
        
        for (const callback of foundCallbacks) {
            callback(payload);
        }
    }
    
    return {
      subscribe, publish
    }
}

const emitter = EventEmitter();

const EVENT_ONE = 'eventOne';
const EVENT_TWO = 'eventTwo';

const PAYLOAD = 'payload';

const unsubscribeOne = emitter.subscribe(EVENT_ONE, (data) => {
    console.log(EVENT_ONE, data);
});

const unsubscribeTwo = emitter.subscribe(EVENT_TWO, (data) => {
    console.log(EVENT_TWO, data);    
});


console.log('first wave:');
emitter.publish(EVENT_ONE, PAYLOAD);
emitter.publish(EVENT_TWO, PAYLOAD);

unsubscribeTwo();

console.log('second wave:');
emitter.publish(EVENT_ONE, PAYLOAD);
emitter.publish(EVENT_TWO, PAYLOAD);