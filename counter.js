
function getFixedCounter(k) {
    return {
        counter: k,
        value: 0,
        increment: function() {
            this.value+= this.counter;
        },
        decrement: function(k) {
            this.value-= this.counter;
        },
        getValue: function() {
            console.log(this)
            return this.value;
        }
    }
}

const counter = getFixedCounter(5);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue())