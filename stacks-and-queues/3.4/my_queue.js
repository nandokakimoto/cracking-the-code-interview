import Stack from '../lib/stack';

class MyQueue {
  constructor() {
    this.addStack = new Stack();
    this.removeStack = new Stack();
  }

  isEmpty() {
    return this.addStack.isEmpty() && this.removeStack.isEmpty();
  }

  add(data) {
    this.addStack.push(data);
  }

  remove() {
    if (this.isEmpty()) {
      throw new Error('Empty queue.');
    }

    if (this.removeStack.isEmpty()) {
      this.moveElementsFromAddToRemoveStack();
    }

    return this.removeStack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Empty queue.');
    }

    if (this.removeStack.isEmpty()) {
      this.moveElementsFromAddToRemoveStack();
    }

    return this.removeStack.peek();
  }

  moveElementsFromAddToRemoveStack() {
    while (!this.addStack.isEmpty()) {
      this.removeStack.push(this.addStack.pop());
    }
  }
}

export default MyQueue;
