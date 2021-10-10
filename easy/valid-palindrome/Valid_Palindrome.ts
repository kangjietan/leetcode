/**
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 
Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s: string): boolean {
  const trimmedStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const len = trimmedStr.length;
  for (let i = 0; i < trimmedStr.length; i++) {
    if (trimmedStr[i] !== trimmedStr[len - i - 1]) {
      return false;
    }
  }

  return true;
}
