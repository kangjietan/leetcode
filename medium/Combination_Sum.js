/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Example 2:
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 
Constraints:

1 <= candidates.length <= 30
1 <= candidates[i] <= 200
Each element of candidate is unique.
1 <= target <= 500
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  backtrack(candidates, target, 0, [], result);
  return result;
};

function backtrack(candidates, target, start, sub, result) {
  if (target < 0) return;
  if (target === 0) {
    result.push([...sub]);
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    sub.push(candidates[i]);
    backtrack(candidates, target - candidates[i], i, sub, result);
    sub.pop();
  }
}

// var combinationSum = function (candidates, target) {
//   const result = [];

//   function permute(arr = [], sum = 0, idx = 0) {
//     if (sum > target) return;
//     if (sum === target) result.push(arr);

//     for (let i = idx; i < candidates.length; i++) {
//       permute([...arr, candidates[i]], sum + candidates[i], i);
//     }
//   }
  
//   permute();
//   return result;
// };

console.log("ANSWER", combinationSum([2, 3, 6, 7], 7));
