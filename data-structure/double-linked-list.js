class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.size++;
    }
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  find(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (!current.next) return false;
      current = current.next;
    }
    return current;
  }

  setHead(index) {
    if (!this.head || index <= 0) return false;

    const current = this.find(index);
    current.prev = null;
    this.head = current;
    this.size -= index;
    return true;
  }

  access(index) {
    if (!this.head || index < 0) return false;

    const current = this.find(index);
    return current.value;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return true;
    }

    if (index === this.size - 1) {
      this.append(value);
      return true;
    }

    const current = this.find(index);
    const newNode = new Node(value, current.prev, current);
    current.prev.next = newNode;
    current.prev = newNode;
    return true;
  }

  removeHead() {
    if (!this.head) return false;

    this.head = this.head.next;
    this.head.prev = null;

    this.size--;
    return true;
  }

  removeTail() {
    if (!this.tail) return false;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;

    this.size--;
    return true;
  }

  remove(index) {
    if (index < 0) return false;
    if (index === this.size - 1) return this.removeTail();
    if (index === 0) return this.removeHead();

    const current = this.find(index);
    current.prev.next = current.next;
    current.next.prev = current.prev;

    this.size--;
    return true;
  }

  print() {
    let result = ''; // prettier-ignore
    let current = this.head;

    while (current.next !== null) {
      result += current.value;
      current = current.next;
    }
    result += current.value;
    console.log(result);
  }

  printInv() {
    let result = ''; // prettier-ignore
    let current = this.tail;

    while (current.prev !== null) {
      result += current.value;
      current = current.prev;
    }
    result += current.value;
    console.log(result);
  }
}

const list = new DoublyLinkedList();
console.log(list.isEmpty());
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);
list.append(2);
console.log(list);
// console.log(list.setHead(5));
// console.log(list);
console.log(list.access(4));
console.log(list.insert(4, 4));
console.log(list);
console.log(list.access(0));
list.print();
list.printInv();
list.remove(0); // remove head
list.print();
list.remove(4); // remove tail
list.print();
list.remove(2); // remove index 2
list.print();
