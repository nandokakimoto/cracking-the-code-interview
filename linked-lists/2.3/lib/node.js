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
