/**
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3:
Input: nums = [1,1]
Output: 1

Example 4:
Input: nums = [1,1,2]
Output: 1
 
Constraints:

2 <= n <= 3 * 104
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 
Follow up:

How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem without modifying the array nums?
Can you solve the problem using only constant, O(1) extra space?
Can you solve the problem with runtime complexity less than O(n2)?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums: number[]): number {
  let sorted = nums.slice().sort();
  let duplicate: number = -1;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      duplicate = sorted[i];
      break;
    }
  }

  return duplicate;
}

function findDuplicate2(nums: number[]): number {
  // let hash: { [key: string]: number } = {};
  let hash: Record<string, number> = {};
  let duplicate = -1;
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    if (hash[number] === undefined) {
      hash[number] = 1;
    } else {
      hash[number]++;
    }

    if (hash[number] > 1) {
      duplicate = number;
      break;
    }
  }

  return duplicate;
}

/** Mutable array */
function findDuplicate3(nums: number[]): number {
  let duplicate = -1;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let idx = Math.abs(num);
    if (nums[idx - 1] >= 0) {
      nums[idx - 1] = nums[idx - 1] * -1;
    } else {
      duplicate = idx;
      break;
    }
  }

  return duplicate;
}

/** Tortoise and Hare implementation*/
function findDuplicate4(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  fast = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
