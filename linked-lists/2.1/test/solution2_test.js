var assert = require('assert');
var Node = require('../lib/node.js');
var removeDups = require('../solution2.js');

describe('Remove Dups With Buffer', function(){
  it('should return list with single element', function() {
    var head = new Node(10);

    removeDups(head);

    assert.equal(head.data, 10);
    assert.equal(head.next, null);
  });

  it('should return list as is if no dup is found', function() {
    var head = new Node(10).append(15).append(5).append(20).append(0).append(25);

    removeDups(head);

    assert.equal(head.data, 10);
    assert.equal(head.next.data, 15);
    assert.equal(head.next.next.data, 5);
    assert.equal(head.next.next.next.data, 20);
    assert.equal(head.next.next.next.next.data, 0);
    assert.equal(head.next.next.next.next.next.data, 25);
    assert.equal(head.next.next.next.next.next.next, null);
  });

  it('should return list with all duplicated removed', function() {
    var head = new Node(10).append(15).append(5).append(5).append(10).append(25);

    removeDups(head);

    assert.equal(head.data, 10);
    assert.equal(head.next.data, 15);
    assert.equal(head.next.next.data, 5);
    assert.equal(head.next.next.next.data, 25);
    assert.equal(head.next.next.next.next, null);
  });

  it('should return only one element if all are duplicates', function() {
    var head = new Node(10).append(10).append(10).append(10).append(10);

    removeDups(head);

    assert.equal(head.data, 10);
    assert.equal(head.next, null);
  });

  it('should return only first, middle and last elements', function() {
    var head = new Node(10).append(10).append(30).append(5).append(5);

    removeDups(head);

    assert.equal(head.data, 10);
    assert.equal(head.next.data, 30);
    assert.equal(head.next.next.data, 5);
    assert.equal(head.next.next.next, null);
  });
});
