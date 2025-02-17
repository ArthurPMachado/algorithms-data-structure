class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash = (hash + key.charCodeAt(index) * index) % this.data.length
    }

    return hash
  } //O(1) due to being very fast, event with a for loop

  set(key, value) {
    const address = this._hash(key);

    if(!this.data[address]) {
      this.data[address] = [];
    } 
    
    this.data[address].push([key, value]);
    return this.data;
  } //O(1)

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    if(currentBucket) {
      for (let index = 0; index < currentBucket.length; index++) {
        if(currentBucket[index][0] === key) {
          return currentBucket[index][1];
        }
      }
    }

    return undefined;
  } //O(1) most of the times

  keys() {
    const keysArray = [];
    for (let index = 0; index < this.data.length; index++) {
      if(this.data[index]) {
        keysArray.push(this.data[index][0][0]);
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(20)
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
console.log(myHashTable.keys());