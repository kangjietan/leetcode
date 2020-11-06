/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let mapping = {};
  for (let str of strs) {
    let charCount = new Array(26).fill(0);
    for (let c of str) {
      charCount[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    console.log(charTotal);
    if (!mapping[charCount]) mapping[charCount] = [];
    mapping[charCount].push(str);
  }
  return Object.values(mapping);
};

// var groupAnagrams = function(strs) {
//   let groups = {};

//   for (let i = 0; i < strs.length; i++) {
//     let string = strs[i].split("").sort().join("");
//     if (groups[string] === undefined) groups[string] = [];
//     groups[string].push(strs[i]);
//   }

//   return Object.values(groups);
// };

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
