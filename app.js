var checkerboard = [[null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null]];

function setSquare(player, row, col) {
  checkerboard[row][col] = player;
  return player;
}

function getPieceAt(row, col) {
  if (checkerboard[row][col] === null) {
    return null;
  } else {
    return checkerboard[row][col];
  }
}

function clearBoard(board) {
  for(var i = 0; i < board.length; i++) {
    var row = board[i];
    for(var j = 0; j < row.length; j++) {
      row[j] = null;
    }
  }
}



function setUpRed(board) {
  for(i = 0; i < 3; i++) {
    var start = 1;
    // if even
    if(i % 2 === 0) {
      start = 0;
    }
    for(j = start; j < board[i].length; j+=2) {
     board[i][j] = "R";
    }  
  }
}

function setUpBlack (board) {
  for(var i = board.length - 1; i >= board.length - 3; i--) {
    var start = 1;
    // if odd
    if(i % 2 === 0) {
      start = 0;
    }
    for(var j = start; j < board[i].length; j+=2){
      board[i][j] = "B";
    }  
  }
}

var pieces = {
    'red': [[0,0], [0,2], [0,4], [0,6], [1,1], [1,3], [1,5], [1,7], [2,0], [2,2], [2,4], [2,6]],
    'black' : [[5,1], [5,3], [5,5], [5,7], [6,0], [6,2], [6,4], [6,6], [7,1], [7,3], [7,5], [7,7]]
};

var test = pieces['black'].map(function(piece){
  var row = piece[0];
  var col = piece[1];
  return checkerboard[row][col] === 'B';
});

setSquare('R', 5, 5);
clearBoard(checkerboard);
setUpRed(checkerboard);
setUpBlack(checkerboard);