/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function (nums) {
//   let result = [];
//   helper(result, nums, [], 0);
//   return result;
// };

// function helper(result, nums, subset, idx) {
//   if (idx === nums.length) {
//     result.push([...subset]);
//     return;
//   } else {
//     helper(result, nums, subset, idx + 1);
//     subset.push(nums[idx]);
//     helper(result, nums, subset, idx + 1);
//     subset.pop();
//   }
// }

var subsets = function (nums) {
  let result = [];
  dfs([], 0);

  function dfs(current, index) {
    result.push(current);
    for (let i = index; i < nums.length; i++) {
      dfs(current.concat(nums[i]), i + 1);
    }
  }

  return result;
};
