var Node = require('./lib/node.js');

module.exports = function(head1, head2) {
  var head = new Node(0);
  var current = head;
  var previous = head;
  var data1 = 0;
  var data2 = 0;
  var sum;

  if(head1 === null && head2 === null) {
    return null;
  }

  while(head1 !== null || head2 !== null) {
    if(head1 !== null) {
      data1 = head1.data;
      head1 = head1.next;
    } else {
      data1 = 0;
    }

    if(head2 !== null) {
      data2 = head2.data;
      head2 = head2.next;
    } else {
      data2 = 0;
    }

    sum = data1 + data2;
    current.data += sum % 10;
    previous = current;

    if(sum > 10) {
      current.next = new Node(1);
    } else {
      current.next = new Node(0);
    }

    current = current.next;
  }

  if(previous.next.data === 0){
    previous.next = null;
  }

  return head;
};
