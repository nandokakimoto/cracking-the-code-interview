// O(n)
module.exports = function(input) {
  var bitVector = {};

  for (var i = 0; i < input.length; i++) {
    var char = input[i];

    if (bitVector[char]) {
      return false;
    } else {
      bitVector[char] = true;
    }
  }
  return true;
};
