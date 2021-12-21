/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let h1 = l1
  let h2 = l2
  let l3 = new ListNode(0)
  let h3 = l3
  let carry = 0
  while (h1 || h2) {
    let addVal1 = h1 ? h1.val : 0
    let addVal2 = h2 ? h2.val : 0
    let nowAdd = addVal1 + addVal2 + carry
    carry = Math.floor(nowAdd / 10)
    let nowNum = nowAdd - carry * 10
    h3.next = new ListNode(nowNum)
    h3 = h3.next
    if (h1) {
      h1 = h1.next
    }
    if (h2) {
      h2 = h2.next
    }
  }
  if (carry) h3.next = new ListNode(carry)
  return l3.next
};
// @lc code=end

