module.exports = function(head, k) {
  var temp = head;

  if(head === null) {
    return -1;
  }

  while(temp !== null && k > 0) {
    k -= 1;
    temp = temp.next;
  }

  if (temp === null) {
    return -1;
  }

  while(temp.next !== null) {
    temp = temp.next;
    head = head.next;
  }

  return head.data;
};
