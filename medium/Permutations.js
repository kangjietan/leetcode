/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];
  backtrack(result, nums, []);
  return result;
};

function backtrack(result, set, subset) {
  if (!set.length) {
    result.push([...subset]);
    return;
  }

  for (let i = 0; i < set.length; i++) {
    const copy = set.filter((n, index) => index !== i);
    subset.push(set[i]);
    backtrack(result, copy, subset);
    subset.pop();
  }
}

// console.log(permute([1,2,3]))
