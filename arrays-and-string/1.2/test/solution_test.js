const checkPermutation = require('../solution.js');
const assert = require('assert');

describe('check permutation', function() {
  it('should return true when string is permutation of the other', function(){
    assert(checkPermutation('casa', 'asca'));
    assert(checkPermutation('casa', 'saca'));
    assert(checkPermutation('casa', 'aasc'));
    assert(checkPermutation('casa', 'asca'));
    assert(checkPermutation('casa', 'caas'));
    assert(checkPermutation('casa', 'saac'));
    assert(checkPermutation('casa', 'csaa'));
  });

  it('should return false when duplicated characteres exists', function() {
    assert(!checkPermutation('', ''));
    assert(!checkPermutation('casa', 'casac'));
    assert(!checkPermutation('casa', 'cas'));
    assert(!checkPermutation('casa', 'caca'));
  });
});
