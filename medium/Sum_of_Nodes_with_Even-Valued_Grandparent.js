/*
Given a binary tree, return the sum of values of nodes with even - valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

If there are no nodes with an even - valued grandparent, return 0.

Example 1:
Input: root = [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]
Output: 18
Explanation: The red nodes are the nodes with even - value grandparent while the blue nodes are the even - value grandparents.
* /

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
var sumEvenGrandparent = function (root) {
  let result = 0;
  const bfs = (tree) => {
    if (tree === null) return;
    if (tree.val % 2 === 0) {
      let left = tree.left;
      let right = tree.right;

      if (left) {
        if (left.left) {
          result += left.left.val;
        }
        if (left.right) {
          result += left.right.val;
        }
      }

      if (right) {
        if (right.left) {
          result += right.left.val;
        }

        if (right.right) {
          result += right.right.val;
        }
      }
    }
    bfs(tree.left);
    bfs(tree.right);
  };

  bfs(root);

  return result;
};
