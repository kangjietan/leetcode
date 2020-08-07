/*
Given a binary tree, return the sum of values of its deepest leaves.
 
Example 1:
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
 
Constraints:
The number of nodes in the tree is between 1 and 10^4.
The value of nodes is between 1 and 100.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  // Breadth first search
  // Attach depth to array of nodes
  // Sum all nodes at the last depth of the array

  let leavesDepth = [];
  leavesDepth[0] = [root.val];

  // Traverse tree and push in nodes according to depth
  const bfs = (tree, idx) => {
    let left = tree.left;
    let right = tree.right;
    leavesDepth[idx] = leavesDepth[idx] || [];

    if (left) {
      leavesDepth[idx].push(left.val);
      bfs(left, idx + 1);
    }

    if (right) {
      leavesDepth[idx].push(right.val);
      bfs(right, idx + 1);
    }
  };

  bfs(root, 1);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // Last element is an empty array
  return leavesDepth[leavesDepth.length - 2].reduce(reducer);
};
