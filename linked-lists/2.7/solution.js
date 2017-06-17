function move(node, times) {
  for(var i = 0; i < times; i++) {
    node = node.next;
  }
  return node;
}

module.exports = function(head1, head2) {
  var node1 = head1;
  var node2 = head2;
  var length1 = 1;
  var length2 = 1;

  if(head1 === null || head2 === null) {
    return null;
  }

  while(head1.next !== null || head2.next !== null) {
    if(head1.next !== null) {
      head1 = head1.next;
      length1 += 1;
    }

    if(head2.next !== null) {
      head2 = head2.next;
      length2 += 1;
    }
  }

  if(head1 !== head2) {
    return null;
  }

  if(length1 > length2) {
    node1 = move(node1, length1 - length2);
  } else if(length2 > length1) {
    node2 = move(node2, length2 - length1);
  }

  while(node1.next !== null && node2.next !== null && node1 !== node2){
    node1 = node1.next;
    node2 = node2.next;
  }

  return node1;
};
