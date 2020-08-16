/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  backtrack(result, "", n, 0, 0);
  return result;
};

function backtrack(result, currentString, max, open, close) {
  if (currentString.length === max * 2) {
    result.push(currentString);
    return;
  }

  if (open < max) backtrack(result, currentString + "(", max, open + 1, close);
  if (close < open) backtrack(result, currentString + ")", max, open, close + 1);
}

/*
n:1 => ()
n:2 => ()(), (())
n:3 => ()()(), ((())), (())(), ()(())
n:4 => ()()()(), (((()))), (()()()), (())(()), (())()(), ()(())(), ()()(()), ((()))(), ()((()))

Different types
- ()
- (()) -> (()())
- (())() -> (())()()
*/
