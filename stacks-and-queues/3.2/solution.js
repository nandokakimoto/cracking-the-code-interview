class StackMinNode {
  constructor(value, min) {
    this.value = value;
    this.minimum = min || value;
    this.next = null;
  }
}

class StackMin {
  constructor() {
    this.top = null;
  }

  push(value) {
    let minimum = value;

    if (this.top !== null) {
      minimum = Math.min(value, this.top.minimum);
    }

    const node = new StackMinNode(value, minimum);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (this.top === null) {
      throw new Error('Empty Stack');
    }

    const value = this.top.value;
    this.top = this.top.next;

    return value;
  }

  min() {
    if (this.top === null) {
      throw new Error('Empty Stack');
    }

    return this.top.minimum;
  }
}

export default StackMin;
