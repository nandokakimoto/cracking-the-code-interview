function Node(data) {
  this.data = data;
  this.next = null;
}

Node.prototype.append = function(value) {
  var node = new Node(value);
  var temp = this;
  while(temp.next !== null) {
    temp = temp.next;
  }
  temp.next = node;
  return this;
};

Node.prototype.appendNode = function(node) {
  var current = this;
  while(current.next !== null) {
    current = current.next;
  }
  current.next = node;
  return this;
};

Node.prototype.prepend = function(value) {
  var node = new Node(value);
  node.next = this;
  return node;
};

Node.prototype.length = function() {
  var length = 0;
  var temp = this;
  while(temp.next !== null) {
    length += 1;
    temp = temp.next;
  }
  return length + 1;
};

Node.prototype.to_s = function() {
  var temp = this;
  var values = [];

  while(temp !== null) {
    values.push(temp.data);
    temp = temp.next;
  }

  return values.join('->');
};

module.exports = Node;
