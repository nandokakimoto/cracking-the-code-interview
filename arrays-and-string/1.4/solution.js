function buildCharMap(input) {
  var array = input.split('');
  var charMap = {};

  for(var i = 0; i < array.length; i++) {
    var current = array[i].toLowerCase();

    // Maps any word character.
    if (/\w/.test(current)) {
      if(charMap[current]) {
        charMap[current] += 1;
      } else {
        charMap[current] = 1;
      }
    }
  }

  return charMap;
}

function isOddChars(charMap) {
  var oddChars = 0;

  for(var key in charMap) {
    if(charMap.hasOwnProperty(key)) {
      if(charMap[key] % 2 !== 0) {
        oddChars += 1;
      }
    }
  }

  return oddChars <= 1;
}

module.exports = function(input) {
  return isOddChars(buildCharMap(input));
};
