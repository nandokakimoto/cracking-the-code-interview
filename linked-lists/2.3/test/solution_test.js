var assert = require('assert');
var Node = require('../lib/node.js');
var deleteMiddleNode = require('../solution.js');

describe('Delete Middle Node', function() {
  it('should delete middle node with only 3 elements', function(){
    var head = new Node(5).append(10).append(15);
    var node = head.next;

    deleteMiddleNode(node);

    assert.equal(head.data, 5);
    assert.equal(head.next.data, 15);
    assert.equal(head.next.next, null);
  });

  it('should delete middle node with more than 3 elements', function(){
    var head = new Node(5).append(10).append(15).append(20).append(25);
    var node = head.next.next;

    deleteMiddleNode(node);

    assert.equal(head.data, 5);
    assert.equal(head.next.data, 10);
    assert.equal(head.next.next.data, 20);
    assert.equal(head.next.next.next.data, 25);
    assert.equal(head.next.next.next.next, null);
  });

  it('should delete last possible middle node', function(){
    var head = new Node(5).append(10).append(15).append(20).append(25);
    var node = head.next.next.next;

    deleteMiddleNode(node);

    assert.equal(head.data, 5);
    assert.equal(head.next.data, 10);
    assert.equal(head.next.next.data, 15);
    assert.equal(head.next.next.next.data, 25);
    assert.equal(head.next.next.next.next, null);
  });
});
