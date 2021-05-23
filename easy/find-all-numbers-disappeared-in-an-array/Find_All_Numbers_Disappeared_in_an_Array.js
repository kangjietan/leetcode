"use strict";
/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const value = Math.abs(nums[i]) - 1;
        nums[value] = -Math.abs(nums[value]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            result.push(i + 1);
    }
    return result;
}
