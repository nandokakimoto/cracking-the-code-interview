module.exports = function(matrix) {
  var n = matrix.length;
  var layers = n / 2;

  for(var i = 0; i < layers; i++) {
    var offset = (n - i) - 1;

    for(var j = i; j < offset; j++) {
      // top
      var top = matrix[i][j];

      // replate top with left
      matrix[i][j] = matrix[i + offset - j][i];

      // replace left with bottom
      matrix[i + offset - j][i] = matrix[offset][i + offset - j];

      // replace bottom with right
      matrix[offset][i + offset - j] = matrix[j][offset];

      // replace right with top
      matrix[j][offset] = top;
    }
  }

  return matrix;
};
