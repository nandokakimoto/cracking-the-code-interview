class Tree {
  constructor(root) {
    this.root = root;
  }

  depth() {
    return this._depth(this.root);
  }

  _depth(node) {
    if (node === null) {
      return -1;
    }

    const left = 1 + this._depth(node.left);
    const right = 1 + this._depth(node.right);

    return Math.max(left, right);
  }
}

export default Tree;
