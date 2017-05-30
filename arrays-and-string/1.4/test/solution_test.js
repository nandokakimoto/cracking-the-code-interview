var assert = require('assert');
var palindromePermutation = require('../solution.js');

describe('palindrome permutation', function() {
  it('returns true when string is a palindrome', function(){
    assert(palindromePermutation('a'));
    assert(palindromePermutation('aa'));
    assert(palindromePermutation('aaaaaa'));
    assert(palindromePermutation('redivider'));
    assert(palindromePermutation('racecar'));
    assert(palindromePermutation('Was it a cat I saw?'));
    assert(palindromePermutation('Step on no pets'));
  });

  it('returns true when string is a palindrome permutation', function(){
    assert(palindromePermutation('viderredi'));
    assert(palindromePermutation('ceracar'));
    assert(palindromePermutation('it Was a saw? cat I'));
    assert(palindromePermutation('no Step pets on'));
  });

  it('returns false when string is not a palindrome permutation', function(){
    assert(!palindromePermutation('Sep on no pet'));
    assert(!palindromePermutation('Was it cat I saw?'));
    assert(!palindromePermutation('The quick brown fox jumps over the lazy dog'));
  });
});
