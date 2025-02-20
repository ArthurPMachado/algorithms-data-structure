// 10 -> 5 -> 16

// Objective: create a linked list that will give this result below
// const myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

// OBS: The value can be anything, can be even arrays and hash tables

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

const linkedList = new LinkedList(10);

linkedList.append(5);
linkedList.append(16);

console.log(linkedList)