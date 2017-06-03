function kthToLast(head, k, node) {
  if(head === null) {
    node.toLast = -1;
    return;
  }

  kthToLast(head.next, k, node);
  node.toLast += 1;

  if (node.toLast === k) {
    node.data = head.data;
  }
}

module.exports = function(head, k) {
  var node = { data: null, toLast: -1 };

  if(head === null) {
    return -1;
  }

  kthToLast(head, k, node);

  if(node.data === null) {
    return -1;
  }

  return node.data;
};
