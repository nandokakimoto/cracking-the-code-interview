class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(data) {
    const newTop = new StackNode(data);
    newTop.next = this.top;
    this.top = newTop;
  }

  pop() {
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }

  peek() {
    return this.top;
  }
}


export default Stack;
