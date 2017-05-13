var assert = require('assert');
var rotate = require('../solution.js');

describe('Rotate matrix', function() {
  it('should rotate a 1x1 matrix', function() {
    var matrix = [1];
    var expected = [1];
    assert.deepEqual(expected, rotate(matrix));
  });

  it('should rotate a 2x2 matrix', function() {
    var matrix = [
      [1,  2],
      [10, 20]
    ];
    var expected = [
      [10, 1],
      [20, 2]
    ];
    assert.deepEqual(expected, rotate(matrix));
  });

  it('should rotate a 3x3 matrix', function() {
    var matrix = [
      [1,   2,   3],
      [10,  20,  30],
      [100, 200, 300]
    ];
    var expected = [
      [100, 10, 1],
      [200, 20, 2],
      [300, 30, 3],
    ];
    assert.deepEqual(expected, rotate(matrix));
  });

  it('should rotate a 5x5 matrix', function() {
    var matrix = [
      [1,     2,     3,     4,     5],
      [10,    20,    30,    40,    50],
      [100,   200,   300,   400,   500],
      [1000,  2000,  3000,  4000,  5000],
      [10000, 20000, 30000, 40000, 50000]
    ];
    var expected = [
      [10000, 1000, 100, 10, 1],
      [20000, 2000, 200, 20, 2],
      [30000, 3000, 300, 30, 3],
      [40000, 4000, 400, 40, 4],
      [50000, 5000, 500, 50, 5],
    ];
    assert.deepEqual(expected, rotate(matrix));
  });
});
