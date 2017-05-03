var assert = require('assert');
var oneAway = require('../solution.js');

describe('one away', function(){
  it('should return true when strings are zero edit away', function() {
    assert(oneAway('character', 'character'));
    assert(oneAway('This is a sentence', 'This is a sentence'));
  });

  it('should return true when strings are one edit away', function() {
    // beginning of string
    assert(oneAway('character', 'haracter'));
    assert(oneAway('character', 'xcharacter'));
    assert(oneAway('character', 'zharacter'));

    // end of string
    assert(oneAway('character', 'characte'));
    assert(oneAway('character', 'characters'));
    assert(oneAway('character', 'charactex'));

    // middle of string
    assert(oneAway('character', 'charcter'));
    assert(oneAway('character', 'charaacter'));
    assert(oneAway('character', 'charecter'));
  });

  it('should return false when strings are more than one edit away', function() {
    assert(!oneAway('cccharacter', 'character'));
    assert(!oneAway('character', 'characterrr'));
    assert(!oneAway('ccharacter', 'characterr'));
    assert(!oneAway('charaacter', 'characcter'));
  });
});
