var assert = require('assert');
var Node = require('../../lib/node.js');
var palindrome = require('../solution2.js');

describe('Palindrome', function() {
  describe('null list', function() {
    it('should return false', function() {
      assert(!palindrome(null, 0));
    });
  });

  describe('single caracter list', function() {
    it('should always be true', function() {
      var node = new Node('a');
      assert(palindrome(node, 1));

      node = new Node('z');
      assert(palindrome(node, 1));
    });
  });

  describe('more than one character', function() {
    it('should return true if equals to reverse list', function() {
      var node = new Node('a').append('a');
      assert(palindrome(node, 2));

      node = new Node('a').append('b').append('a');
      assert(palindrome(node, 3));

      node = new Node('a').append('b').append('b').append('a');
      assert(palindrome(node, 4));

      node = new Node('a').append('b').append('c').append('b').append('a');
      assert(palindrome(node, 5));

      node = new Node('a').append('b').append('c').append('c').append('b').append('a');
      assert(palindrome(node, 6));
    });

    it('should return false if not equal to reverse list', function() {
      var node = new Node('a').append('b');
      assert(!palindrome(node, 2));

      node = new Node('a').append('b').append('a').append('b');
      assert(!palindrome(node, 4));

      node = new Node('a').append('b').append('c').append('c').append('a').append('b');
      assert(!palindrome(node, 6));
    });
  });
});
