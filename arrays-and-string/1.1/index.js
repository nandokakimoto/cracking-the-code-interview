function isUniqueI(input) {
  var bitVector = {};

  for (var i = 0; i < input.length; i++) {
    var char = input[i];

    if (bitVector[char]) {
      return false;
    } else {
      bitVector[char] = true;
    }
  }
  return true;
}

function isUniqueR(input, start, end, bitVector) {
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
    return isUniqueR(input, start, start + middle, bitVector) &&
      isUniqueR(input, start + middle + 1, end, bitVector);
  }
}

module.exports = {
  iterative: isUniqueI,
  recursive: function(input) {
    return isUniqueR(input, 0, input.length - 1, {});
  }
}
