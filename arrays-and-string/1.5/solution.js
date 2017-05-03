function compare(bigger, smaller) {
  var i = 0;
  var j = 0;
  var diff = 0

  while(i < bigger.length && j < smaller.length && diff < 2) {
    if (bigger[i] === smaller[j]) {
      i += 1;
      j += 1;
    } else {
      if (bigger.length === smaller.length) {
        j += 1;
      }
      diff += 1;
      i += 1;
    }
  }

  return diff;
}

module.exports = function oneAway(input1, input2) {
  var lengthDiff = input1.length - input2.length;
  var diff = 0;

  // return false if more tha one character diff
  if (lengthDiff < -1 || lengthDiff > 1) {
    return false;
  }

  if (lengthDiff < 0) { // input2 is bigger
    diff = compare(input2, input1);
  } else { // input1 is bigger os similar
    diff = compare(input1, input2);
  }

  return diff < 2;
};
