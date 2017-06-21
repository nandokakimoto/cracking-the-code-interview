var Node = require('../lib/node.js');

function sumList(head1, head2, carryDigit) {
  var data1 = 0;
  var data2 = 0;
  var sum = 0;
  var head = null;

  if(head1 === null && head2 === null) {
    if(carryDigit > 0) {
      return new Node(1);
    }
    return null;
  }

  if(head1 !== null) {
    data1 = head1.data;
    head1 = head1.next;
  }

  if(head2 !== null) {
    data2 = head2.data;
    head2 = head2.next;
  }

  sum = data1 + data2 + carryDigit;
  head = new Node(sum % 10);

  if(sum >= 10) {
    head.next = sumList(head1, head2, 1);
  } else {
    head.next = sumList(head1, head2, 0);
  }

  return head;
}

module.exports = function(head1, head2) {
  return sumList(head1, head2, 0);
};
