class MyArray {
  constructor() {
    this.legth = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.legth] = item;
    this.legth++;
    return item;
  }

  pop() {
    const lastItem = this.data[this.legth - 1];
    delete this.data[this.legth - 1];
    this.legth--;
    return lastItem;
  }

  delete(index) {
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.legth - 1; i++) {
      this.data[index] = this.data[index + 1];
    }

    delete this.data[this.legth - 1];
    this.legth--;
  }
}

const MyArr = new MyArray();

MyArr.push('hd');
MyArr.push('food');
MyArr.push('food2');
MyArr.push('food3');
MyArr.push('food4');
MyArr.push('food5');
MyArr.push('food6');
MyArr.push('food6');
MyArr.push('food9');
MyArr.delete(5);
console.log(MyArr.pop());

console.log(MyArr);

// give me some bubble sort code
