/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).
Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* 
24 -> 2, 3, 4
12 -> 1, 3, 4
8 -> 1, 2, 4
6 -> 1, 2, 3
*/
var productExceptSelf = function (nums) {
  let cacheLR = [];
  let cacheRL = [];

  cacheLR[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    cacheLR[i] = cacheLR[i - 1] * nums[i - 1];
  }

  cacheRL[nums.length - 1] = 1;
  for (let j = nums.length - 2; j >= 0; j--) {
    cacheRL[j] = cacheRL[j + 1] * nums[j + 1];
  }

  return cacheLR.map((num, idx) => num * cacheRL[idx]);
};
