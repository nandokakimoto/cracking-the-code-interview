var assert = require('assert');
var rotate = require('../solution2.js');

describe('Rotate matrix in place', function() {
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

  it('should rotate a 8x8 matrix', function() {
    var matrix = [
      [1,        2,        3,        4,        5,        6,        7,        8],
      [10,       20,       30,       40,       50,       60,       70,       80],
      [100,      200,      300,      400,      500,      600,      700,      800],
      [1000,     2000,     3000,     4000,     5000,     6000,     7000,     8000],
      [10000,    20000,    30000,    40000,    50000,    60000,    70000,    80000],
      [100000,   200000,   300000,   400000,   500000,   600000,   700000,   800000],
      [1000000,  2000000,  3000000,  4000000,  5000000,  6000000,  7000000,  8000000],
      [10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000]
    ];
    var expected = [
      [10000000, 1000000, 100000, 10000, 1000, 100, 10, 1],
      [20000000, 2000000, 200000, 20000, 2000, 200, 20, 2],
      [30000000, 3000000, 300000, 30000, 3000, 300, 30, 3],
      [40000000, 4000000, 400000, 40000, 4000, 400, 40, 4],
      [50000000, 5000000, 500000, 50000, 5000, 500, 50, 5],
      [60000000, 6000000, 600000, 60000, 6000, 600, 60, 6],
      [70000000, 7000000, 700000, 70000, 7000, 700, 70, 7],
      [80000000, 8000000, 800000, 80000, 8000, 800, 80, 8]
    ];
    assert.deepEqual(expected, rotate(matrix));
  });
});
