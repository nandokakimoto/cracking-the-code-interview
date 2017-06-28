class Stacks {
  constructor(limit1, limit2, limit3) {
    this.limit = [limit1, limit2, limit3];
    this.size = [0, 0, 0];
    this.offset = [0, limit1, limit1 + limit2];
    this.data = new Array(limit1 + limit2 + limit3);
  }

  findTop(stack) {
    const index = stack - 1;
    return this.offset[index] + this.size[index];
  }

  push(stack, value) {
    const index = stack - 1;

    if (this.size[index] >= this.limit[index]) {
      throw new Error(`Stack Overflow: ${stack}`);
    }

    const top = this.findTop(stack);
    this.data[top] = value;
    this.size[index] += 1;
  }

  pop(stack) {
    if (this.isEmpty(stack)) {
      throw new Error(`Empty Stack: ${stack}`);
    }

    const top = this.findTop(stack) - 1;
    const data = this.data[top];

    this.data[top] = undefined;
    this.size[stack - 1] -= 1;

    return data;
  }

  peek(stack) {
    if (this.isEmpty(stack)) {
      throw new Error(`Empty Stack: ${stack}`);
    }

    const top = this.findTop(stack);
    return this.data[top];
  }

  isEmpty(stack) {
    return this.size[stack - 1] === 0;
  }
}

export default Stacks;
