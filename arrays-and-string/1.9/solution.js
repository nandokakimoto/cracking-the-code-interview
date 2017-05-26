function isSubstring(str, substr) {
  return str.indexOf(substr) !== -1;
}

module.exports = function(s1, s2) {
  var i = 0;
  var j = 0;

  if(s1.length !== s2.length || s1 == s2) {
    return false;
  }

  // finds rotation index
  while(j < s2.length) {
    if(s1[i] === s2[j] && isSubstring(s1, s2.substring(j))) {
      break;
    }
    j++;
  }

  // return false if did not find any similar character
  if(j === s2.length) {
    return false;
  }

  // checks for all similar characters in the second half
  while(j < s2.length) {
    if(s1[i] !== s2[j]) {
      return false;
    }
    i++;
    j++;
  }

  j = 0;
  // checks for all similar characters for the first half
  while(i < s1.length) {
    if(s1[i] !== s2[j]) {
      return false;
    }
    i++;
    j++;
  }

  return true;
};
