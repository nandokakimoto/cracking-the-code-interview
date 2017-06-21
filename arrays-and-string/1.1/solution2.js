function isUnique(input, start, end, bitVector) {
  if (start === end) { // there is a single character
    const char = input[start];

    if (bitVector[char]) { // character already computed
      return false;
    }

    // mark character as computed
    bitVector[char] = true; // eslint-disable-line no-param-reassign
    return true;
  }

  const middle = Math.floor((end - start) / 2);

  // recurse left and right of the array
  return isUnique(input, start, start + middle, bitVector) &&
    isUnique(input, start + middle + 1, end, bitVector);
}

// O(nlog(n))
export default function (input) {
  return isUnique(input, 0, input.length - 1, {});
}
