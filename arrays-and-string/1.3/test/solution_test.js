var assert = require('assert');
var urlify = require('../solution.js');

describe('urlify', function() {
  describe('whitespace at the beginning', function() {
    it('replace whitespace with %20', function(){
      var input    = [' ', 'n', 'i', 'c', 'e', ' ', ' '];
      var expected = ['%', '2', '0', 'n', 'i', 'c', 'e'];
      assert.deepEqual(expected, urlify(input, 5));
    });
  });

  describe('whitespace in the middle', function() {
    it('replace whitespace with %20', function(){
      var input    = ['h', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', ' ', ' ', ' '];
      var expected = ['h', 'o', 'w', '%', '2', '0', 'a', 'r', 'e', '%', '2', '0', 'y', 'o', 'u'];
      assert.deepEqual(expected, urlify(input, 11));
    });
  });

  describe('whitespace in the end', function() {
    it('replace whitespace with %20', function(){
      var input    = ['w', 'e', 'l', 'c', 'o', 'm', 'e', ' ', ' ', ' '];
      var expected = ['w', 'e', 'l', 'c', 'o', 'm', 'e', '%', '2', '0'];
      assert.deepEqual(expected, urlify(input, 8));
    });
  });

  describe('more than one whitespace', function(){
    it('replace whitespace with %20', function(){
      var input    = [' ', 'w', 'e', 'l', ' ', 'c', 'o', 'm', 'e', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      var expected = ['%', '2', '0', 'w', 'e', 'l', '%', '2', '0', 'c', 'o', 'm', 'e', '%', '2', '0'];
      assert.deepEqual(expected, urlify(input, 10));
    });
  });
});
