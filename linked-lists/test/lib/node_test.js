var assert = require('assert');
var Node = require('../../lib/node.js');

describe('Node', function(){
  it('should define new node', function() {
    var node = new Node(15);
    assert.equal(node.data, 15);
    assert.equal(node.next, null);
  });

  it('should append data to end of the list', function() {
    var node = new Node(15).append(10).append(5).append(0);

    assert.equal(node.next.data, 10);
    assert.equal(node.next.next.data, 5);
    assert.equal(node.next.next.next.data, 0);
  });
});

