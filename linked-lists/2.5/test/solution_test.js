var assert = require('assert');
var Node = require('../lib/node.js');
var sumLists = require('../solution.js');

describe('Sum Lists - Reverse Order', function() {
  describe('null lists', function(){
    it('should return null if both lists are null', function() {
      var node1 = null;
      var node2 = null;

      assert.equal(sumLists(node1, node2), null);
    });

    it('should return first list if second list is null', function() {
      var node1 = new Node(8).append(1).append(6);
      var node2 = null;

      var sum = sumLists(node1, node2);

      assert.equal(sum.data, 8);
      assert.equal(sum.next.data, 1);
      assert.equal(sum.next.next.data, 6);
      assert.equal(sum.next.next.next, null);
    });

    it('should return second list if first list is null', function() {
      var node1 = null;
      var node2 = new Node(8).append(1).append(6);

      var sum = sumLists(node1, node2);

      assert.equal(sum.data, 8);
      assert.equal(sum.next.data, 1);
      assert.equal(sum.next.next.data, 6);
      assert.equal(sum.next.next.next, null);
    });
  });

  describe('same length', function(){
    it('should sum values less than 10', function(){
      var node1 = new Node(1).append(2).append(3);
      var node2 = new Node(4).append(5).append(6);

      var sum = sumLists(node1, node2);

      assert.equal(sum.data, 5);
      assert.equal(sum.next.data, 7);
      assert.equal(sum.next.next.data, 9);
      assert.equal(sum.next.next.next, null);
    });

    it('should sum values greater than 10', function(){
      var node1 = new Node(8).append(9).append(9);
      var node2 = new Node(9).append(8).append(9);

      var sum = sumLists(node1, node2);

      assert.equal(sum.data, 7);
      assert.equal(sum.next.data, 8);
      assert.equal(sum.next.next.data, 9);
      assert.equal(sum.next.next.next.data, 1);
      assert.equal(sum.next.next.next.next, null);
    });
  });

  describe('same length', function(){
    it('should sum values less than 10', function(){
      var node1 = new Node(1);
      var node2 = new Node(5).append(9).append(9);

      var sum = sumLists(node1, node2);

      assert.equal(sum.data, 6);
      assert.equal(sum.next.data, 9);
      assert.equal(sum.next.next.data, 9);
      assert.equal(sum.next.next.next, null);
    });

    it('should sum values greater than 10', function(){
      var node1 = new Node(8).append(9).append(9);
      var node2 = new Node(9).append(8).append(9).append(2);

      var sum = sumLists(node1, node2);

      assert.equal(sum.data, 7);
      assert.equal(sum.next.data, 8);
      assert.equal(sum.next.next.data, 9);
      assert.equal(sum.next.next.next.data, 3);
      assert.equal(sum.next.next.next.next, null);
    });
  });
});
