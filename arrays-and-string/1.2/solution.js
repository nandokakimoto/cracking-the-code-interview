module.exports = function(input1, input2) {
  var charMap = {};
  var i;
  var char;

  if(input1.length !== input2.length) {
    return false;
  }

  if(input1.length === 0) {
    return false;
  }

  for(i = 0; i < input1.length; i++) {
    char = input1[i];
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

  for(i = 0; i < input2.length; i++) {
    char = input2[i];

    if(!charMap[char]) {
      return false;
    }

    charMap[char] -= 1;

    if (charMap[char] < 0) {
      return false;
    }
  }

  return true;
};
