/**
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums: number[]): boolean {
  let hash: { [key: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = 1;
    } else {
      return true;
    }
  }

  return false;
}
