class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

// Browser Back/Forward - i'm not certain on this one

// String Reversal - stack lends itself to reverse
class StringReversal {
   constructor() {
      this.top = null;
   }

   //checking if is empty
   isEmpty() {
      return this.top === null;
   }

   //adding a value
   push(val) {
      let newNode = new Node(val);
      newNode.next = this.top;
      this.top = newNode;
   }

   //removing a value
   pop() {
      if (this.isEmpty()) {
         return null;
      }
      let holdVal = this.top;
      this.top = this.top.next;

      return holdVal.val;
   }

   //reverse a given word
   reverse(word) {
      //push each letter to the stack
      for (let char of word) {
         this.push(char);
      }
      let reversedWord = ''; //initialize the reversed word

      //pop each letter to form the reversed word
      while (!this.isEmpty()) {
         reversedWord += this.pop();
      }
      return reversedWord;
   }
}
const s = new StringReversal();

// Balance Brackets
class Balance {
   constructor() {
      this.stack = [];
      this.matching = {
         '(': ')',
         '{': '}',
         '[': ']',
      };
   }

   isBalanced(string) {
      // iterate through the string
      for (let char of string) {
         // if the character is an opening bracket, push to the stack
         if (this.matching[char]) {
            this.stack.push(char);
            // if the character is a closing bracket
         } else if (char === ')' || char === '}' || char === ']') {
            // if the stack is empty or the top of the stack does not match, return false
            if (
               this.stack.length === 0 ||
               this.matching[this.stack.pop()] !== char
            ) {
               return false;
            }
         }
      }
      return this.stack.length === 0;
   }
}
const b = new Balance();

// Josephus Survivor
class JosephusQueue {
   constructor() {
      this.survivor = 0;
   }

   josephus(people, count) {
      let queue = [];
      // spreading all the numbers from the provided poeple number
      for (let i = 1; i <= people; i++) {
         queue.push(i);
      }

      let index = 0; //start from the first number
      while (queue.length > 1) {
         console.log('people', queue);

         index = (index + count - 1) % queue.length; //using the mod symbol, we can simulate a circle
         queue.splice(index, 1); //remove the number at current index
      }
      this.survivor = queue[0];
      return this.survivor;
   }
}
const j = new JosephusQueue();

// Calculator - i don't know where to start with this
