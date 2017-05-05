var assert = require('assert');
var compress = require('../solution.js');

describe('String compression', function() {
  it('returns compressed string when it is are smaller than original', function() {
    assert.equal('a2b1c5a3', compress('aabcccccaaa'));
    assert.equal('a8', compress('aaaaaaaa'));
    assert.equal('a8b1c1d1', compress('aaaaaaaabcd'));
    assert.equal('a8A6', compress('aaaaaaaaAAAAAA'));
    assert.equal('a8b1a3', compress('aaaaaaaabaaa'));
    assert.equal('a1b8a1b1a1b1', compress('abbbbbbbbabab'));
  });

  it('returns original string when compression does not return smaller string', function() {
    assert.equal('abcd', compress('abcd'));
    assert.equal('aabbccdd', compress('aabbccdd'));
    assert.equal('abbcdd', compress('abbcdd'));
  });
});
