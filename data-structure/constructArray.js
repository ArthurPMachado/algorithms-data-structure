class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(operationIndex) {
    for (let index = operationIndex; index < this.length - 1; index++) {
      this.data[index] = this.data[index+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('test');
newArray.push('test2');
newArray.push('!');
newArray.push('!');
newArray.pop();
newArray.delete(1);
console.log(newArray);