/*
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:
Input: 2
Output: [0,1,1]

Example 2:
Input: 5
Output: [0,1,1,2,1,2]
Follow up:
It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
*/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let bits = [0];
  for (let i = 1; i <= num; i++) {
    bits[i] = bits[Math.floor(i / 2)];
    if (i % 2 === 1) bits[i]++;
  }

  return bits;
};

/* 
0:  00000 -> 0
1:  00001 -> 1
2:  00010 -> 1
3:  00011 -> 2
4:  00100 -> 1
5:  00101 -> 2
6:  00110 -> 2
7:  00111 -> 3
8:  01000 -> 1
9:  01001 -> 2
10: 01010 -> 2
11: 01011 -> 3
12: 01100 -> 2
13: 01101 -> 3
14: 01110 -> 3
15: 01111 -> 4
16: 10000 -> 1
17: 10001 -> 2
18: 10010 -> 2
*/
