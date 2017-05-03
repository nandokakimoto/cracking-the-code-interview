var assert = require('assert');
var oneAway = require('../solution.js');

describe('one away', function(){
  it('should return true when strings are zero edit away', function() {
    assert(oneAway('character', 'character'));
    assert(oneAway('This is a sentence', 'This is a sentence'));
  });

  it('should return true when strings are one edit away', function() {
    // beginning of string
    assert(oneAway('character', 'haracter'));   // remove
    assert(oneAway('character', 'xcharacter')); // add
    assert(oneAway('character', 'zharacter'));  // replace

    // end of string
    assert(oneAway('character', 'characte'));   // remove
    assert(oneAway('character', 'characters')); // add
    assert(oneAway('character', 'charactex'));  // replace

    // middle of string
    assert(oneAway('character', 'charcter'));   //remove
    assert(oneAway('character', 'charaacter')); // add
    assert(oneAway('character', 'charecter'));  // replace
  });

  it('should return false when strings are more than one edit away', function() {
    assert(!oneAway('cccharacter', 'character'));
    assert(!oneAway('character', 'characterrr'));
    assert(!oneAway('ccharacter', 'characterr'));
    assert(!oneAway('character', 'charcater'));
    assert(!oneAway('This is a sentence', 'This is also a sentence'));
    assert(!oneAway('aaaaaaa', 'ccccccc'));
    assert(!oneAway('aaaaaaa', 'baaaaaaac'));
  });
});
