import Stack from '../lib/stack';

class StackOverflow extends Error { }

class StackWithLimit extends Stack {
  constructor(limit) {
    super();
    this.limit = limit;
    this.elementsCount = 0;
  }

  push(data) {
    if (this.elementsCount === this.limit) {
      throw new StackOverflow('Current stack is full');
    }

    super.push(data);
    this.elementsCount += 1;
  }

  isFull() {
    return this.elementsCount === this.limit;
  }
}

export default StackWithLimit;
