module.exports = function(matrix) {
  var rows = [];
  var columns = [];

  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  for(var i = 0; i < rows.length; i++) {
    if(rows[i] === true) {
      for(var j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for(var i = 0; i < columns.length; i++) {
    if(columns[i] === true) {
      for(var j = 0; j < matrix.length; j++) {
        matrix[j][i] = 0;
      }
    }
  }

  return matrix;
}
