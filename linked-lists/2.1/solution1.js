module.exports = function(head) {
  if(head === null) {
    return null;
  }

  while(head !== null) {
    var temp = head;

    while(temp.next !== null) {
      if(temp.next.data === head.data) {
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }

    head = head.next;
  }
};
