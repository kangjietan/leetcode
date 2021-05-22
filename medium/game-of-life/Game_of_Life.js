"use strict";
/**
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Example 1:
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
 
Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.
 
Follow up:

Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// function gameOfLife(board: number[][]): void {
//   const newBoard: number[][] = board.map(() => []);
//   for (let i = 0; i < board.length; i++) {
//     const row = board[i];
//     for (let j = 0; j < row.length; j++) {
//       const status = checkCells(board, i, j);
//       newBoard[i].push(status);
//     }
//   }
// }
// function checkCells(board: number[][], row: number, col: number): number {
//   let total = 0;
//   const current = board[row][col];
//   const left = board[row][col - 1] ? board[row][col - 1] : 0;
//   const right = board[row][col + 1] ? board[row][col + 1] : 0;
//   let topRow = board[row - 1];
//   let bottomRow = board[row + 1];
//   if (topRow !== undefined) {
//     total += topRow[col - 1] ? topRow[col - 1] : 0;
//     total += topRow[col] ? topRow[col] : 0;
//     total += topRow[col + 1] ? topRow[col + 1] : 0;
//   }
//   if (bottomRow !== undefined) {
//     total += bottomRow[col - 1] ? bottomRow[col - 1] : 0;
//     total += bottomRow[col] ? bottomRow[col] : 0;
//     total += bottomRow[col + 1] ? bottomRow[col + 1] : 0;
//   }
//   total += left + right;
//   if (total < 2) return 0;
//   if (total === 2) return current;
//   if (total === 3) return 1;
//   if (total > 3) return 0;
// }
