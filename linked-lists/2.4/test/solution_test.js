var assert = require('assert');
var Node = require('../lib/node.js');
var partition = require('../solution.js');

describe('Partition', function(){
  it('should return null if empty list', function(){
    var list = partition(null, 10);
    assert.equal(list, null);
  });

  it('should return the same list if on element', function(){
    var node = new Node(10);

    // smaller
    var list = partition(node, 5);
    assert.equal(list.data, 10);
    assert.equal(list.next, null);

    // same
    list = partition(node, 10);
    assert.equal(list.data, 10);
    assert.equal(list.next, null);

    // bigger
    list = partition(node, 15);
    assert.equal(list.data, 10);
    assert.equal(list.next, null);
  });

  it('should return the same list if all elements are similar', function(){
    var node = new Node(10).append(10).append(10).append(10);

    var list = partition(node, 5);

    assert.equal(list.data, 10);
    assert.equal(list.next.data, 10);
    assert.equal(list.next.next.data, 10);
    assert.equal(list.next.next.next.data, 10);
    assert.equal(list.next.next.next.next, null);
  });

  it('should move smaller elements to the beginning with first element bigger', function(){
    var node = new Node(40).append(10).append(30).append(1).append(50).append(20);

    var list = partition(node, 25);

    assert.equal(list.data, 20);
    assert.equal(list.next.data, 1);
    assert.equal(list.next.next.data, 10);
    assert.equal(list.next.next.next.data, 40);
    assert.equal(list.next.next.next.next.data, 30);
    assert.equal(list.next.next.next.next.next.data, 50);
    assert.equal(list.next.next.next.next.next.next, null);
  });

  it('should move smaller elements to the beginning with first element smaller', function(){
    var node = new Node(20).append(50).append(30).append(10).append(1).append(40);

    var list = partition(node, 25);

    assert.equal(list.data, 1);
    assert.equal(list.next.data, 10);
    assert.equal(list.next.next.data, 20);
    assert.equal(list.next.next.next.data, 50);
    assert.equal(list.next.next.next.next.data, 30);
    assert.equal(list.next.next.next.next.next.data, 40);
    assert.equal(list.next.next.next.next.next.next, null);
  });

  it('should consider similar value as bigger', function(){
    var node = new Node(20)
      .append(50)
      .append(30)
      .append(10)
      .append(25)
      .append(1)
      .append(40)
      .append(25);

    var list = partition(node, 25);

    assert.equal(list.data, 1);
    assert.equal(list.next.data, 10);
    assert.equal(list.next.next.data, 20);
    assert.equal(list.next.next.next.data, 50);
    assert.equal(list.next.next.next.next.data, 30);
    assert.equal(list.next.next.next.next.next.data, 25);
    assert.equal(list.next.next.next.next.next.next.data, 40);
    assert.equal(list.next.next.next.next.next.next.next.data, 25);
    assert.equal(list.next.next.next.next.next.next.next.next, null);
  });

  it('should reverse list order if all elements are smaller', function(){
    var node = new Node(50)
      .append(40)
      .append(30)
      .append(20)
      .append(10);

    var list = partition(node, 51);

    assert.equal(list.data, 10);
    assert.equal(list.next.data, 20);
    assert.equal(list.next.next.data, 30);
    assert.equal(list.next.next.next.data, 40);
    assert.equal(list.next.next.next.next.data, 50);
    assert.equal(list.next.next.next.next.next, null);
  });

  it('should keep the list order if all elements are bigger', function(){
    var node = new Node(50)
      .append(40)
      .append(30)
      .append(20)
      .append(10);

    var list = partition(node, 1);

    assert.equal(list.data, 50);
    assert.equal(list.next.data, 40);
    assert.equal(list.next.next.data, 30);
    assert.equal(list.next.next.next.data, 20);
    assert.equal(list.next.next.next.next.data, 10);
    assert.equal(list.next.next.next.next.next, null);
  });
});
