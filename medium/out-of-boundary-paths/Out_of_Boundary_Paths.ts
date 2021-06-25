/**
There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

Example 1:
Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6

Example 2:
Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
Output: 12

Constraints:

1 <= m, n <= 50
0 <= maxMove <= 50
0 <= startRow < m
0 <= startColumn < n
 */

/**
 * Solution with memoization
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number
): number {
  const memo: { [key: string]: number } = {};

  function helper(M: number, row: number, col: number) {
    const key = `${row}-${col}-${M}`;
    if (row < 0 || col < 0 || row >= m || col >= n) return 1;
    if (M === 0) return 0;
    if (memo[key] !== undefined) return memo[key];

    let count = 0;
    count += helper(M - 1, row + 1, col);
    count += helper(M - 1, row - 1, col);
    count += helper(M - 1, row, col + 1);
    count += helper(M - 1, row, col - 1);

    memo[key] = count % (10**9 + 7);

    return memo[key];
  }

  return helper(maxMove, startRow, startColumn);
}

/**
 * Brute force
 */
function findPaths2(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number
): number {
  let counter = 0;

  function helper(
    m: number,
    n: number,
    maxMove: number,
    row: number,
    col: number
  ) {
    if (row < 0 || col < 0 || row >= m || col >= n) {
      counter++;
      return;
    }
    if (maxMove === 0) return;

    helper(m, n, maxMove - 1, row + 1, col);
    helper(m, n, maxMove - 1, row - 1, col);
    helper(m, n, maxMove - 1, row, col + 1);
    helper(m, n, maxMove - 1, row, col - 1);
  }

  helper(m, n, maxMove, startRow, startColumn);

  return counter % 1000000007;
}
