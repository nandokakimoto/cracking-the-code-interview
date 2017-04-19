const isUnique = require('../index.js');
const assert = require('assert');

describe('isUnique', function() {
  describe('iterative: O(N)', function (){
    it('should return true when all characteres are unique', function(){
      assert(isUnique.iterative('abcdef'));
      assert(isUnique.iterative('qwerty'));
      assert(isUnique.iterative('qazplmwsxoknedcijb'));
      assert(isUnique.iterative('123456abcdef7890'));
    });

    it('should return false when duplicated characteres exists', function() {
      assert(!isUnique.iterative('abccdef'));
      assert(!isUnique.iterative('qazxswedcvfrvtgbyhnujmiklop'));
      assert(!isUnique.iterative('123456789abcdefghij1klmnopq'));
    });
  });

  describe('recursive: O(N*log(N))', function (){
    it('should return true when all characteres are unique', function(){
      assert(isUnique.recursive('abcdef'));
      assert(isUnique.recursive('qwerty'));
      assert(isUnique.recursive('qazplmwsxoknedcijb'));
      assert(isUnique.recursive('123456abcdef7890'));
    });

    it('should return false when duplicated characteres exists', function() {
      assert(!isUnique.recursive('abccdef'));
      assert(!isUnique.recursive('qazxswedcvfrvtgbyhnujmiklop'));
      assert(!isUnique.recursive('123456789abcdefghij1klmnopq'));
    });
  });
});
