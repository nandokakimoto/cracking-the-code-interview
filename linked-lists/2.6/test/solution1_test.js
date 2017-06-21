var assert = require('assert');
var Node = require('../../lib/node.js');
var palindrome = require('../solution1.js');

describe('Palindrome', function() {
  describe('null list', function() {
    it('should return false', function() {
      assert(!palindrome(null));
    });
  });

  describe('single caracter list', function() {
    it('should always be true', function() {
      var node = new Node('a');
      assert(palindrome(node));

      node = new Node('z');
      assert(palindrome(node));
    });
  });

  describe('more than one character', function() {
    it('should return true if equals to reverse list', function() {
      var node = new Node('a').append('a');
      assert(palindrome(node));

      node = new Node('a').append('b').append('a');
      assert(palindrome(node));

      node = new Node('a').append('b').append('b').append('a');
      assert(palindrome(node));

      node = new Node('a').append('b').append('c').append('b').append('a');
      assert(palindrome(node));
    });

    it('should return false if not equal to reverse list', function() {
      var node = new Node('a').append('b');
      assert(!palindrome(node));

      node = new Node('a').append('b').append('a').append('b');
      assert(!palindrome(node));

      node = new Node('a').append('b').append('c').append('a').append('b');
      assert(!palindrome(node));
    });
  });
});
