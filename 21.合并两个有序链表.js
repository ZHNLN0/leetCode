/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  const temp = [];
  while (list1) {
    temp.push(list1);
    list1 = list1.next;
  }
  while (list2) {
    temp.push(list2);
    list2 = list2.next;
  }
  temp.sort(function (a, b) {
    return a.val - b.val;
  });
  for (let i = 0; i < temp.length - 1; i++) {
    temp[i].next = temp[i + 1];
  }
  return temp[0];
};
// @lc code=end

