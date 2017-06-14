function checkPalindrome(node, length, index) {
  // base case: middle of the list
  if(index === Math.ceil(length / 2)) {
    if(length % 2 !== 0) {
      return { palindrome: true, node: node.next };
    }

    var temp = node.data;
    node = node.next;
    return { palindrome: temp === node.data, node: node.next };
  }

  var previous = node;
  var result = checkPalindrome(node.next, length, index + 1);

  if(previous.data === result.node.data) {
    return { palindrome: result.palindrome, node: result.node.next };
  }

  return { palindrome: false, node: result.node.next };
}

module.exports = function(head, length) {
  if(length === 0) {
    return false;
  }

  if(length === 1) {
    return true;
  }

  return checkPalindrome(head, length, 1).palindrome;
};
