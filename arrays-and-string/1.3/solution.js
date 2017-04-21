module.exports = function(input, length) {
  var result = [];
  var index = 0;

  for(var i = 0; i < length; i++) {
    var current = input[i];

    if(current === ' ') {
      result[index++] = '%';
      result[index++] = '2';
      result[index++] = '0';
    } else {
      result[index++] = current;
    }
  }

  return result;
};
