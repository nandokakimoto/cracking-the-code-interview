module.exports = function(input1, input2) {
  var bitVector = {};

  if(input1.length !== input2.length) {
    return false;
  }

  if(input1.length === 0) {
    return false;
  }

  for(var i = 0; i < input1.length; i++) {
    var char = input1[i];
    bitVector[char] = bitVector[char] ? bitVector[char] + 1 : 1;
  }

  for(var i = 0; i < input2.length; i++) {
    var char = input2[i];

    if(!bitVector[char]) {
      return false;
    }

    bitVector[char] -= 1;

    if (bitVector[char] < 0) {
      return false;
    }
  }

  return true;
};
