// O(n)
export default function (input) {
  const bitVector = {};

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];

    if (bitVector[char]) {
      return false;
    }

    bitVector[char] = true;
  }

  return true;
}
