var assert = require('assert');
var zeroMatrix = require('../solution1.js');

describe('Zero Matrix', function() {
  describe('matrix 1x1', function() {
    it('should not change nothing', function(){
      var matrix = [
        [5]
      ];
      var expected = [
        [5]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));

      var matrix = [
        [0]
      ];
      var expected = [
        [0]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));
    });
  });

  describe('matrix 1xN', function() {
    it('should set all to zero if any zero is found', function(){
      var matrix = [
        [1,2,3,4,5,6]
      ];
      var expected = [
        [1,2,3,4,5,6]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));

      var matrix = [
        [0,2,3,4,5,6]
      ];
      var expected = [
        [0,0,0,0,0,0]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));

      var matrix = [
        [1,2,3,4,5,0]
      ];
      var expected = [
        [0,0,0,0,0,0]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));

      var matrix = [
        [1,2,3,0,5,6]
      ];
      var expected = [
        [0,0,0,0,0,0]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));
    });
  });

  describe('matrix Nx1', function() {
    it('should set all to zero if any zero is found', function(){
      var matrix = [
        [1],
        [2],
        [3],
        [4],
        [5],
        [6]
      ];
      var expected = [
        [1],
        [2],
        [3],
        [4],
        [5],
        [6]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));

      var matrix = [
        [0],
        [2],
        [3],
        [4],
        [5],
        [6]
      ];
      var expected = [
        [0],
        [0],
        [0],
        [0],
        [0],
        [0]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));

      var matrix = [
        [1],
        [2],
        [3],
        [4],
        [5],
        [0]
      ];
      var expected = [
        [0],
        [0],
        [0],
        [0],
        [0],
        [0]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));

      var matrix = [
        [1],
        [2],
        [3],
        [0],
        [5],
        [6]
      ];
      var expected = [
        [0],
        [0],
        [0],
        [0],
        [0],
        [0]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));
    });
  });


  describe('matrix MxN', function() {
    it('should set rows and coluns to zero if zero is found', function(){
      var matrix = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 1]
      ];
      var expected = [
        [1, 0, 1, 1],
        [1, 0, 1, 1],
        [0, 0, 0, 0]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));

      var matrix = [
        [1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1]
      ];
      var expected = [
        [0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));

      var matrix = [
        [0, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 0]
      ];
      var expected = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      assert.deepEqual(expected, zeroMatrix(matrix));
    });

  });
});
