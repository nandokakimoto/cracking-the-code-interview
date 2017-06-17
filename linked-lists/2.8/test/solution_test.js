var assert = require('assert');
var Node = require('../lib/node.js');
var loopNode = require('../solution.js');

describe('Loop Detection', function() {

  it('should return null when list is empty', function(){
    var node = null;
    assert.equal(loopNode(node), null);
  });

  it('should return null when list has no loop', function(){
    var node = new Node(5).append(3).append(2).append(4).append(1).append(5);
    assert.equal(loopNode(node), null);
  });

  it('should return head node if it is a complete circular list', function(){
    var node = new Node(1).append(2).append(3).append(4).append(5).append(6).append(7).append(8).append(9);
    node.appendNode(node);

    var loop = loopNode(node);

    assert.equal(loop, node);
    assert.equal(loop.data, 1);
  });

  it('should return the second node as the beginning of the loop', function(){
    var node = new Node(2).append(3).append(4).append(5).append(6).append(7).append(8).append(9);
    var head = node.prepend(1);
    node.appendNode(node);

    var loop = loopNode(head);

    assert.equal(loop, node);
    assert.equal(loop.data, 2);
  });

  it('should return the third node as the beginning of the loop', function(){
    var node = new Node(3).append(4).append(5).append(6).append(7).append(8).append(9);
    var head = node.prepend(2).prepend(1);
    node.appendNode(node);

    var loop = loopNode(head);

    assert.equal(loop, node);
    assert.equal(loop.data, 3);
  });

  it('should return the fourth node as the beginning of the loop', function(){
    var node = new Node(4).append(5).append(6).append(7).append(8).append(9);
    var head = node.prepend(3).prepend(2).prepend(1);
    node.appendNode(node);

    var loop = loopNode(head);

    assert.equal(loop, node);
    assert.equal(loop.data, 4);
  });

  it('should return the eithyth node as the beginning of the loop', function(){
    var node = new Node(8).append(9);
    var head = node.prepend(7).prepend(6).prepend(5).prepend(4).prepend(3).prepend(2).prepend(1);
    node.appendNode(node);

    var loop = loopNode(head);

    assert.equal(loop, node);
    assert.equal(loop.data, 8);
  });

});
