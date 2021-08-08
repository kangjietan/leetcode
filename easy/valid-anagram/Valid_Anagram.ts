/**
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let count: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === undefined) {
      count[s[i]] = 1;
    } else {
      count[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (count[t[i]] === undefined) return false;
    count[t[i]]--;
    if (count[t[i]] < 0) return false;
  }

  return true;
}

function isAnagram2(s: string, t: string): boolean {
  let original = s.split("").sort().join("");
  let copy = t.split("").sort().join("");
  return original === copy;
}
