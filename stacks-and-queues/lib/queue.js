class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  isEmpty() {
    return this.first === null;
  }

  add(data) {
    const node = new QueueNode(data);

    if (this.last !== null) {
      this.last.next = node;
    }

    this.last = node;

    if (this.first === null) {
      this.first = node;
    }
  }

  remove() {
    if (this.first === null) {
      throw new Error('Empty queue');
    }

    const data = this.first.data;
    this.first = this.first.next;

    return data;
  }

  peek() {
    if (this.first === null) {
      throw new Error('Empty queue');
    }

    return this.first.data;
  }
}

export default Queue;
