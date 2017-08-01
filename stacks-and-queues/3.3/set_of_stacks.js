import StackWithLimit from './stack_with_limit';

class SetOfStacks {
  constructor(limit) {
    this.limit = limit;
    this.stacks = [];
    this.addStack();
  }

  push(data) {
    try {
      this.currentStack.push(data);
    } catch (e) {
      this.addStack();
      this.push(data);
    }
  }

  pop() {
    return this.currentStack.pop();
  }

  stacksCount() {
    return this.stacks.length;
  }

  addStack() {
    const newStack = new StackWithLimit(this.limit);
    this.stacks.push(newStack);
    this.currentStack = newStack;
  }
}

export default SetOfStacks;
