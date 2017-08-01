import StackWithLimit from './stack_with_limit';

class SetOfStacks {
  constructor(limit) {
    this.limit = limit;
    this.stacks = [];
    this.addStack();
  }

  push(data) {
    if (this.currentStack().isFull()) {
      this.addStack();
    }
    this.currentStack().push(data);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stacks are empty');
    }

    const result = this.currentStack().pop();

    if (this.currentStack().isEmpty()) {
      this.removeStack();
    }

    return result;
  }

  popAt(stackNumber) {
    if (stackNumber > this.stacks.length) {
      throw new Error('Provided stack does not exist');
    }

    const stack = this.getStack(stackNumber);
    const result = stack.pop();

    if (stack.isEmpty()) {
      this.removeStack(stackNumber);
    }

    return result;
  }

  isEmpty() {
    return this.stacks.length === 0;
  }

  stacksCount() {
    return this.stacks.length;
  }

  addStack() {
    const newStack = new StackWithLimit(this.limit);
    this.stacks.push(newStack);
  }

  removeStack(stackNumber) {
    if (stackNumber === undefined) {
      this.stacks.pop();
    } else {
      this.stacks.splice(stackNumber - 1, 1);
    }
  }

  currentStack() {
    return this.stacks[this.stacks.length - 1];
  }

  getStack(stackNumber) {
    return this.stacks[stackNumber - 1];
  }
}

export default SetOfStacks;
