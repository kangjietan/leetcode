"use strict";
/**
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 
Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
 */
/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    let chars = new Array(26);
    for (let i = 0; i < s.length; i++) {
        const code = s[i].charCodeAt(0) - "a".charCodeAt(0);
        if (chars[code] === undefined) {
            chars[code] = i;
        }
        else {
            chars[code] = -1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        const code = s[i].charCodeAt(0) - "a".charCodeAt(0);
        if (chars[code] >= 0)
            return chars[code];
    }
    return -1;
}
console.log(firstUniqChar("loveleetcode"));
