function append(input, char,  count) {
  return input + char + count.toString();
}

module.exports = function(input) {
  var char = input[0];
  var count = 1;
  var result = '';

  for(var i = 1; i < input.length; i++) {
    var current = input[i];
    if(char === current) {
      count += 1;
    } else {
      result = append(result, char, count);
      char = current;
      count = 1;
    }
  }

  result = append(result, char, count);
  return result.length < input.length ? result : input;
};
