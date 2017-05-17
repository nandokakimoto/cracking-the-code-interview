function zeroRow(matrix, row) {
  for(var j = 0; j < matrix[row].length; j++){
    matrix[row][j] = 0;
  }
}

function zeroColumn(matrix, column) {
  for(var i = 0; i < matrix.length; i++) {
    matrix[i][column] = 0;
  }
}

module.exports = function(matrix) {
  var zeroFirstRow = false;
  var zeroFirtColumn = false;

  // Check if there is zero in first column
  for(var i = 0; i < matrix.length; i++) {
    if(matrix[i][0] === 0) {
      zeroFirtColumn = true;
      break;
    }
  }

  // Check if there is zero in first row
  for(var j = 0; j < matrix[0].length; j++) {
    if(matrix[0][j] === 0) {
      zeroFirstRow = true;
      break;
    }
  }

  // Use first row and column to store 0 info about matrix
  for(var i = 1; i < matrix.length; i++) {
    for(var j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Change value to zero if first row element is zero
  for(var i = 1; i < matrix.length; i++) {
    if(matrix[i][0] === 0) {
      zeroRow(matrix, i);
    }
  }

  // Change value to zero if first column element is zero
  for(var j = 1; j < matrix[0].length; j++) {
    if(matrix[0][j] === 0) {
      zeroColumn(matrix, j);
    }
  }

  // Zero first row if necessary
  if(zeroFirstRow) {
    zeroRow(matrix, 0);
  }

  // Zero first column if necessary
  if(zeroFirtColumn) {
    zeroColumn(matrix, 0);
  }

  return matrix;
}
