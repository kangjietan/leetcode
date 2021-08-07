/**
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 
Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit or '.'.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    const validBoard =
      validateRow(board, i) && validateCol(board, i) && validateGrid(board, i);
    if (!validBoard) return false;
  }

  return true;
}

function validateRow(board: string[][], row: number): boolean {
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < board.length; i++) {
    const cell = board[row][i];
    if (cell === ".") continue;
    const digit = Number(cell);
    if (validateCell(hash, digit) === false) return false;
  }

  return true;
}

function validateCol(board: string[][], col: number): boolean {
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < board.length; i++) {
    const cell = board[i][col];
    if (cell === ".") continue;
    const digit = Number(cell);
    if (validateCell(hash, digit) === false) return false;
  }

  return true;
}

function validateGrid(board: string[][], grid: number): boolean {
  const hash: { [key: string]: number } = {};
  const startingPoints = gridStartingPoints(grid);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = board[i + startingPoints[0]][j + startingPoints[1]];
      if (cell === ".") continue;
      const digit = Number(cell);
      if (validateCell(hash, digit) === false) return false;
    }
  }

  return true;
}

function validateCell(hash: { [key: string]: number }, digit: number) {
  if (!digit) return;
  if (hash[digit]) return false;
  if (hash[digit] === undefined) hash[digit] = 1;
}

function gridStartingPoints(grid: number): number[] {
  const startingPoints: { [key: string]: number[] } = {
    0: [0, 0],
    1: [0, 3],
    2: [0, 6],
    3: [3, 0],
    4: [3, 3],
    5: [3, 6],
    6: [6, 0],
    7: [6, 3],
    8: [6, 6],
  };

  return startingPoints[grid];
}
