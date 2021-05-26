"use strict";
/**
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: l1 = [], l2 = []
Output: []

Example 3:
Input: l1 = [], l2 = [0]
Output: [0]
 
Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
Accepted
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    if (!l1 || !l2)
        return l1 ? l1 : l2;
    const tempHead = new ListNode(0);
    let currentNode = tempHead;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next;
        }
        else {
            currentNode.next = l2;
            l2 = l2.next;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = l1 || l2;
    return tempHead.next;
}
