module.exports = function(matrix) {
  var rows = [];
  var columns = [];

  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if(rows.indexOf(i) === -1){
          rows.push(i);
        }
        if(columns.indexOf(j) === -1){
          columns.push(j);
        }
      }
    }
  }

  for(var i = 0; i < rows.length; i++) {
    var row = rows[i];
    for(var j = 0; j < matrix[row].length; j++) {
      matrix[row][j] = 0;
    }
  }

  for(var i = 0; i < columns.length; i++) {
    var column = columns[i];
    for(var j = 0; j < matrix.length; j++) {
      matrix[j][column] = 0;
    }
  }

  return matrix;
}
