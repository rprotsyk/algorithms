class LinkedList {
    head: ListNode;
    length: number;
    constructor() {
        this.head = null;
        this.length = 0;
    }

    unshift(data) {
        const newHead = new ListNode(data, this.head);
        this.length++;
        this.head = newHead;
    }

    shift() {
        if(!this.head) {
            return;
        }
        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        return oldHead;
    }

    pop() {
        if(!this.head) {
            return;
        }

        if(this.length === 1 ) {
            return this.shift();
        }
        const last = this.getLast();
        let current = this.head;
        while(current.next != last) {
            current = current.next;
        }
        current.next = null;
        this.length--;
        return last;
    }

    push(data) {
        if(this.head) {
            return this.unshift(data)
        }
        const last = this.getLast();
        last.next = new ListNode(data, null);
        this.length++;
    }

    get(index) {
        if(index >= this.length || index < 0) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(counter < index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, data) {
        const node = this.get(index);
        node.data = data;
        return true;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currentNode = this.head;
        while(currentNode && currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    remove(index) {
        if(!this.get(index)) {
            return false;
        }

        if(index = 0) {
            return this.shift();
        }
        
        const prevNode = this.get(index - 1);
        const nodeToRemove = this.get(index);
        prevNode.next = prevNode.next.next;
        this.length--;
        return nodeToRemove;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }
}

class ListNode {
    data;
    next;
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

let linkedList = new LinkedList();
linkedList.unshift(22);
linkedList.unshift(33);
linkedList.unshift(55);
linkedList.unshift(11);

console.log(linkedList.getFirst())
//linkedList.shift();
//linkedList.shift();
//linkedList.shift();

//linkedList.shift();
linkedList.pop();
console.log(linkedList.getFirst());
console.log(linkedList.getFirst());
linkedList.remove(1);
console.log(linkedList.getFirst());