"use strict";
/**
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

Example 1:

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Example 2:
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
 
Constraints:

The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106
 
Follow up: Could you solve it in O(1) space complexity and O(nodes) time complexity?
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
    if (head === null || head.next === null)
        return head;
    let odd = head;
    let even = head.next;
    while (odd.next && odd.next.next) {
        const temp = odd.next;
        odd.next = odd.next.next;
        if (odd.next) {
            odd = odd.next;
            temp.next = odd.next;
        }
    }
    odd.next = even;
    return head;
}
/**
 * Slow iterative approach. Split into even and odd array and reconstruct linked list. Point last node of odd to first item of even.
 * @param head
 * @returns
 */
function oddEvenList2(head) {
    if (head === null || head.next === null)
        return head;
    let nodes = [];
    let temp = head;
    while (temp) {
        nodes.push(temp);
        temp = temp.next;
    }
    const oddNodes = [];
    const evenNodes = [];
    nodes.forEach((node, idx) => {
        if ((idx + 1) % 2 === 0) {
            evenNodes.push(node);
        }
        else {
            oddNodes.push(node);
        }
    });
    let oddHead = oddNodes[0];
    let evenHead = evenNodes[0];
    for (let i = 1; i < oddNodes.length; i++) {
        oddHead.next = oddNodes[i];
        oddHead = oddNodes[i];
    }
    for (let i = 1; i < evenNodes.length; i++) {
        evenHead.next = evenNodes[i];
        evenHead = evenNodes[i];
    }
    evenNodes[evenNodes.length - 1].next = null;
    oddNodes[oddNodes.length - 1].next = evenNodes[0];
    return head;
}
