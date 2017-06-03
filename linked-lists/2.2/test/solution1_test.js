var assert = require('assert');
var Node = require('../lib/node.js');
var kthToLast = require('../solution1.js');

describe('Kth to Last', function() {
  it('should return -1 if empty list', function() {
    assert.equal(kthToLast(null, 0), -1);
  });

  it('should return -1 if k is greater than the list', function() {
    var node = new Node(30).append(20).append(10).append(0);
    assert.equal(kthToLast(node, 4), -1);
  });

  it('should return last element if k is zero', function() {
    var node = new Node(40).append(30).append(20).append(10).append(0);
    assert.equal(kthToLast(node, 0), 0);
  });

  it('should return the correct kth element of the list', function() {
    var node = new Node(60)
                  .append(50)
                  .append(40)
                  .append(30)
                  .append(20)
                  .append(10)
                  .append(0);

    assert.equal(kthToLast(node, 0), 0);
    assert.equal(kthToLast(node, 1), 10);
    assert.equal(kthToLast(node, 2), 20);
    assert.equal(kthToLast(node, 3), 30);
    assert.equal(kthToLast(node, 4), 40);
    assert.equal(kthToLast(node, 5), 50);
    assert.equal(kthToLast(node, 6), 60);
    assert.equal(kthToLast(node, 7), -1);
  });
});
