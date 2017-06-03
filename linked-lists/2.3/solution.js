module.exports = function(node) {
  while(node.next.next !== null) {
    node.data = node.next.data;
    node = node.next;
  }
  node.data = node.next.data;
  node.next = null;
};
