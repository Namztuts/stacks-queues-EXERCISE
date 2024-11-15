/** Node: node for a queue. */
class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

/** Queue: chained-together nodes where you can | remove from the front or add to the back. */
class Queue {
   constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
   }

   /** enqueue(val): add new value to end of the queue. Returns undefined. */
   enqueue(val) {
      let newNode = new Node(val);
      //check if the list is empty
      if (!this.first) {
         this.first = newNode;
         this.last = newNode;
      } else {
         //if the list is NOT empty
         this.last.next = newNode; //makes the last.next = the new val
         this.last = newNode; //then updates the last (for future use) to be that new val
      }

      this.size++;
   }

   /** dequeue(): remove the node from the start of the queue and return its value. Should throw an error if the queue is empty. */
   dequeue() {
      if (!this.first)
         throw new Error('There is nothing in the queue to remove >:('); //throwing error if empty

      let holdVal = this.first; //capturing the value before removing it
      //checking if there is only one node
      if (this.first == this.last) {
         this.last = null;
      }
      this.first = this.first.next;
      this.size--;

      return holdVal.val;
   }

   /** peek(): return the value of the first node in the queue. */
   peek() {
      return this.first.val;
   }

   /** isEmpty(): return true if the queue is empty, otherwise false */
   isEmpty() {
      return this.size === 0;
   }
}

module.exports = Queue;
let q = new Queue();
