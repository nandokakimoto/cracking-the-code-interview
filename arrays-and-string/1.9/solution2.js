function isSubstring(str, substr) {
  return str.indexOf(substr) !== -1;
}

module.exports = function(s1, s2) {
  if(s1.length !== s2.length || s1 == s2) {
    return false;
  }

  return isSubstring(s1.concat(s1), s2);
};
