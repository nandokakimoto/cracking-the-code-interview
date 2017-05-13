module.exports = function(matrix) {
  var n = matrix.length;
  var layers = n / 2;

  for(var layer = 0; layer < layers; layer++) {
    var begin = layer;
    var end = (n - layer) - 1;

    for(var current = begin; current < end; current++) {
      var offset = current - begin;

      // top
      var top = matrix[begin][current];

      // replate top with left
      matrix[begin][current] = matrix[end - offset][begin];

      // replace left with bottom
      matrix[end - offset][begin] = matrix[end][end - offset];

      // replace bottom with right
      matrix[end][end - offset] = matrix[current][end];

      // replace right with top
      matrix[current][end] = top;
    }
  }

  return matrix;
};
