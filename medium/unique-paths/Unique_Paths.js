"use strict";
/**
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

Example 3:
Input: m = 7, n = 3
Output: 28

Example 4:
Input: m = 3, n = 3
Output: 6
 
Constraints:
1 <= m, n <= 100
It's guaranteed that the answer will be less than or equal to 2 * 109.
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    let dp = new Array(m).fill(new Array(n));
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1;
    }
    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = 1;
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}
/**
 * Recursion
 * @param m
 * @param n
 * @returns
 */
function uniquePaths2(m, n) {
    let paths = 0;
    function helper(downMax, rightMax, down, right) {
        if (downMax === down && rightMax === right) {
            paths++;
            return;
        }
        if (down < downMax) {
            helper(downMax, rightMax, down + 1, right);
        }
        if (right < rightMax) {
            helper(downMax, rightMax, down, right + 1);
        }
    }
    helper(m, n, 1, 1);
    return paths;
}
