function initArray(n) {
  var result = [];
  for(var i = 0; i < n; i++) {
    result[i] = [];
  }
  return result;
}

function rotate(matrix) {
  var n = matrix.length;
  var result = initArray(n);
  var column = 0;

  for(var i = n - 1; i >= 0; i--) {
    for(var j = 0; j < n; j++) {
      var current = matrix[i][j];
      result[j][column] = current;
    }
    column += 1;
  }

  return result;
}

module.exports = function(matrix) {
  if(matrix.length === 1) {
    return matrix;
  }

  return rotate(matrix);
};
