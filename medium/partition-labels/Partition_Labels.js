"use strict";
/**
A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 
Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.
 */
/**
 * @param {string} S
 * @return {number[]}
 */
function partitionLabels(s) {
    let result = [];
    const lastOccurrence = new Array(26);
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i].charCodeAt(0) - "a".charCodeAt(0)] = i;
    }
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastOccurrence[s[i].charCodeAt(0) - "a".charCodeAt(0)]);
        if (end === i) {
            result.push(end - start + 1);
            start = end + 1;
        }
    }
    return result;
}
