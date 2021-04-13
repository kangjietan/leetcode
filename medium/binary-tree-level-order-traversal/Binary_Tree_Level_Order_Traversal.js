"use strict";
/**
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
 
Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    let result = [];
    helper(root, result, 0);
    return result;
}
function helper(node, result, depth) {
    if (!node)
        return;
    result[depth] = result[depth] || [];
    result[depth].push(node.val);
    depth++;
    helper(node.left, result, depth);
    helper(node.right, result, depth);
}
