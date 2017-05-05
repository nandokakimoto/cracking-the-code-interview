var assert = require('assert');
var compress = require('../solution.js');

describe('String compression', function() {
  it('should return compress strings when they are smaller', function() {
    assert.equal('a2b1c5a3', compress('aabbcccaa'));
  });

  it('should return original string when it is smaller', function() {
    assert.equal('abcd', compress('abcd'));
  });
});
