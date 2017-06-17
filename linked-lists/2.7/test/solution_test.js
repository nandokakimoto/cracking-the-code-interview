var assert = require('assert');
var Node = require('../lib/node.js');
var intersection = require('../solution.js');

describe('Intersection', function(){

  it('should returns null when one of the lists are null', function(){
    var list1 = null;
    var list2 = new Node(6);

    assert.equal(intersection(list1, list2), null);
    assert.equal(intersection(list2, list1), null);
  });

  it('should return null when lists do not intercept', function(){
    var list1 = new Node(1).append(5).append(3);
    var list2 = new Node(1).append(5).append(3);

    assert.equal(intersection(list1, list2), null);

    list1 = new Node(1).append(5).append(3);
    list2 = new Node(3);

    assert.equal(intersection(list1, list2), null);
  });

  describe('lists with same size', function(){

    it('should return intersection when lists intersect at the beginning', function(){
      var head = new Node(1).append(4).append(2);
      var list1 = head;
      var list2 = head;

      assert.equal(intersection(list1, list2), head);
    });

    it('should return intersection when lists intersect at the middle', function(){
      var head = new Node(1).append(4).append(2);
      var list1 = head.prepend(5).prepend(3);
      var list2 = head.prepend(3).prepend(6);

      assert.equal(intersection(list1, list2), head);
    });

  });

  describe('lists different size', function(){

    it('should return intersection when lists intersect at the middle', function(){
      var head = new Node(1).append(4).append(2);
      var list1 = head.prepend(5).prepend(3).prepend(6);
      var list2 = head.prepend(3);

      assert.equal(intersection(list1, list2), head);
    });

    it('should return intersection when lists intersect at the end', function(){
      var head = new Node(1);
      var list1 = head.prepend(5).prepend(3).prepend(1).prepend(4);
      var list2 = head.prepend(2);

      assert.equal(intersection(list1, list2), head);
    });
  });

});
