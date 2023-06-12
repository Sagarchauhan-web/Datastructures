class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const nodeToAdd = new Node(value);

    if (this.head === null) {
      this.head = nodeToAdd;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = nodeToAdd;
    }

    this.size++;
    return this;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      console.log('Index Enter is Wrong');
    } else {
      const nodeToAdd = new Node(value);

      if (index === 0) {
        nodeToAdd.next = this.head;
        this.head = nodeToAdd;
      } else {
        let prev;
        let curr = this.head;

        let indexTracker = 0;
        while (indexTracker < index) {
          indexTracker++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = nodeToAdd;
        nodeToAdd.next = curr;

        this.size++;
      }
    }
    return this;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log('Index Enter is Wrong');
    } else {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let prev;
        let curr = this.head;

        let indexTracker = 0;
        while (indexTracker < index) {
          indexTracker++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;

        this.size--;
      }
    }
    return this;
  }

  removeValue(value) {
    if (this.head === null) {
      console.log('list is Empty');
      return this;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev;
      let curr = this.head;
      let valueFound = false;

      for (let i = 1; i <= this.size; i++) {
        if (value === curr.value) {
          valueFound = true;
          prev.next = curr.next;
          this.size--;
          break;
        }

        prev = curr;
        curr = curr.next;
      }
      if (!valueFound) console.log('no value found');
    }

    return this;
  }

  indexOf(value) {
    if (this.head === null) {
      console.log('list is Empty');
      return this;
    }

    if (this.head.value === value) {
      console.log(0, 'indexTracker');
    } else {
      let prev;
      let curr = this.head;
      let indexTracker = 0;
      let valueFound = false;

      for (let i = 1; i <= this.size; i++) {
        if (value === curr.value) {
          valueFound = true;
          console.log(indexTracker, 'indexTracker');
          break;
        }

        indexTracker++;
        prev = curr;
        curr = curr.next;
      }
      if (!valueFound) console.log('no value found');
    }

    return this;
  }

  allValues() {
    let current = this.head;

    for (let i = 1; i <= this.size; i++) {
      console.log(current.value, 'value');
      current = current.next;
    }

    return this;
  }

  get sizeOfList() {
    console.log(this.size);
    return this.size;
  }
}

// reverse() {
//   if (this.head === null) {
//     console.log('list is Empty');
//     return this;
//   }

//   let prev = null;
//   let current = this.head;
//   let next = null;

//   while (current !== null) {
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
// }

// }

const linkList = new LinkedList();

linkList
  .add(2)
  .add(5)
  .add(7)
  .insertAt(3, 2)
  .removeFrom(2)
  .removeValue(24)
  .indexOf(7)
  .allValues().sizeOfList;
