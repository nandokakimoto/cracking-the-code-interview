var Node = require('../lib/node.js');

function prependZeros(head, times) {
  for(var i = 0; i < times; i++) {
    if(head === null) {
      head = new Node(0);
    } else {
      head = head.prepend(0);
    }
  }
  return head;
}

function sumList(head1, head2, sum) {
  if(head1 === null && head2 === null) {
    return;
  }

  sumList(head1.next, head2.next, sum);

  var data = head1.data + head2.data + sum.carryDigit;
  var node = new Node(data % 10);
  node.next = sum.head;
  sum.head = node;
  sum.carryDigit = Math.floor(data / 10);
}

module.exports = function(head1, head2) {
  if(head1 === null && head2 === null) {
    return null;
  }

  var length1 = head1 ? head1.length() : 0;
  var length2 = head2 ? head2.length() : 0;
  var diff = Math.abs(length1 - length2);

  if(length1 < length2) {
    head1 = prependZeros(head1, diff);
  } else if(length2 < length1) {
    head2 = prependZeros(head2, diff);
  }

  var sum = { head: null, carryDigit: 0 };
  sumList(head1, head2, sum);

  if(sum.carryDigit > 0) {
    return sum.head.prepend(1);
  }

  return sum.head;
};
