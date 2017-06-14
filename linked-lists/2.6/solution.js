var Node = require('./lib/node.js');

module.exports = function(head) {
  if(head === null) {
    return false;
  }

  var node = head;
  var reverse = new Node(head.data);

  while(node.next !== null) {
    reverse = reverse.prepend(node.next.data);
    node = node.next;
  }

  while(head !== null && reverse !== null) {
    if(head.data !== reverse.data) {
      return false;
    }
    head = head.next;
    reverse = reverse.next;
  }

  return true;
};
