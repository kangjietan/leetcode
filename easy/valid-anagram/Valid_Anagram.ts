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
  // let original = s.split("").sort().join("");
  // let copy = t.split("").sort().join("");
  // return original === copy;

  let count: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }
  console.log(count);
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!count[char] === undefined) return false;
    count[char]--;
    if (count[char] < 0) return false;
    console.log(count);
  }

  let values = Object.values(count);
  for (let i = 0; i < values.length; i++) {
    let val = values[i];
    if (val !== 0) return false;
  }

  return true;
}

console.log(isAnagram("aacc", "ccac"));
