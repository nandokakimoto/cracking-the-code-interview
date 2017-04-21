const isUnique = require('../solution1.js');
const assert = require('assert');

describe('isUnique', function() {
  it('should return true when all characteres are unique', function(){
    assert(isUnique('abcdef'));
    assert(isUnique('qwerty'));
    assert(isUnique('qazplmwsxoknedcijb'));
    assert(isUnique('123456abcdef7890'));
  });

  it('should return false when duplicated characteres exists', function() {
    assert(!isUnique('abccdef'));
    assert(!isUnique('qazxswedcvfrvtgbyhnujmiklop'));
    assert(!isUnique('123456789abcdefghij1klmnopq'));
  });
});
