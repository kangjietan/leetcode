/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Iterative
// var reverseList = function(head) {
//   // let list = [];
//   // if (!head) return head;
  
//   // list.push(new ListNode(head.val));

//   // while (head.next) {
//   //   head = head.next;
//   //   list.push(new ListNode(head.val));
//   // }

//   // list.reverse();
  
//   // for (let i = 0; i < list.length - 1; i++) {
//   //   let node = list[i];
//   //   node.next = list[i+1];
//   // }
  
//   // return list[0];
// };

// Recursion
var reverseList = function(head) {
  if (!head || !head.next) return head;

  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};