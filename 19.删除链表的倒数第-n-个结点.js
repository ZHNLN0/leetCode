/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let temp = [];
  while (head.next) {
    temp.push(head);
    head = head.next;
  }
  temp.push(head);
  const removeNodeIndex = temp.length - n;
  if (removeNodeIndex === 0) {
    return temp[0].next;
  } else if (removeNodeIndex === temp.length - 1) {
    temp[removeNodeIndex - 1].next = null;
  } else {
    temp[removeNodeIndex - 1].next = temp[removeNodeIndex + 1];
  }
  return temp[0];
};
// @lc code=end

