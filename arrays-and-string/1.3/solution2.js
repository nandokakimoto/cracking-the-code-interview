module.exports = function(input, length) {
  var index = input.length - 1;

  for(var i = length - 1; i >= 0; i--) {
    var current = input[i];

    if(current === ' ') {
      input[index--] = '0';
      input[index--] = '2';
      input[index--] = '%';
    } else {
      input[index--] = current;
    }
  }

  return input;
};
