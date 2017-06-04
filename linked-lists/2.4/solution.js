module.exports = function(head, value){
  var newHead = head;

  if(head === null) {
    return null;
  }

  while(head.next !== null) {
    if(head.next.data < value) {
      var tmp = head.next;

      // remove node from the position
      head.next = head.next.next;

      // move node to the beginning
      tmp.next = newHead;
      newHead = tmp;
    } else {
      head = head.next;
    }
  }

  return newHead;
};
