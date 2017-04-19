function isUnique(input, start, end, bitVector) {
  if (start === end) { // there is a single character
    var char = input[start];

    if (bitVector[char]) { // character already computed
      return false;

    } else {
      bitVector[char] = true; // mark character as computed
      return true;
    }
  } else {
    var middle = Math.floor((end - start) / 2);

    // recurse left and right of the array
    return isUnique(input, start, start + middle, bitVector) &&
      isUnique(input, start + middle + 1, end, bitVector);
  }
}

module.exports = function(input) {
  return isUnique(input, 0, input.length - 1, {});
}
