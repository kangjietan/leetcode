/**
Given an unsorted integer array nums, find the smallest missing positive integer.

Example 1:
Input: nums = [1,2,0]
Output: 3

Example 2:
Input: nums = [3,4,-1,1]
Output: 2

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
 
Constraints:

0 <= nums.length <= 300
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
    var integersArr = [];
    var positive = false;
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (num >= 0) {
            integersArr[num] = num;
            positive = true;
        }
    }
    // All negative ints
    if (integersArr.length === 0)
        return 1;
    // All positive
    for (var i = 1; i < integersArr.length; i++) {
        if (integersArr[i] === undefined) {
            return i;
        }
    }
    // Positive
    if (positive) {
        return integersArr.length;
    }
}
