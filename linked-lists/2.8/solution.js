module.exports = function(head) {
  var fast = head;
  var slow = head;

  if(head === null) {
    return null;
  }

  while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if(fast === slow) {
      break;
    }
  }

  if(fast !== slow) {
    return null;
  }

  slow = head;

  while(fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
};
