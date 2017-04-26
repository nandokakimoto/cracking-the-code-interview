module.exports = function(input) {
  var array = input.split('');
  var charMap = {};
  var oddChars = 0;

  for(var i = 0; i < array.length; i++) {
    var current = array[i].toLowerCase();
    if (/\w/.test(current)) {
      if(charMap[current]) {
        charMap[current] += 1;
      } else {
        charMap[current] = 1;
      }
    }
  }

  for(key in charMap) {
    if(charMap.hasOwnProperty(key)) {
      if(charMap[key] % 2 !== 0) {
        oddChars += 1;
      }
    }
  }

  return oddChars <= 1;
}
