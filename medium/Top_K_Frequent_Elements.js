/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Note:
-You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
-Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
-It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
-You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function(nums, k) {
//   let hash = {};

//   nums.forEach((num) => {
//     if (!hash[num]) {
//       hash[num] = 1;
//     } else {
//       hash[num]++
//     }
//   });

//   // let keys = Object.keys(hash);

//   // keys.map((key) => [key, hash[key]]);

//   // let buckets = keys.map((key) => [key, hash[key]]);

//   // buckets.sort((a, b) => b[1] - a[1]);

//   // let topK = buckets.slice(0, k);

//   // return topK.map((bucket) => bucket[0]);

//   return Object.keys(hash).map((key) => [key, hash[key]]).sort((a, b) => b[1] - a[1]).slice(0, k).map((bucket) => bucket[0]);
// };

var topKFrequent = function (nums, k) {
  let hash = {};
  let buckets = [];
  let result = [];

  nums.forEach((num) => {
    if (!hash[num]) {
      hash[num] = 1;
    } else {
      hash[num]++;
    }
  });

  for (let key in hash) {
    buckets[hash[key]] = (buckets[hash[key]] || new Set()).add(key);
  }

  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i]) result.push(...buckets[i]);
    if (result.length === k) return result;
  }

  return result;
};
