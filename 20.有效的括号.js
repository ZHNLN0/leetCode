/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const temp = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let i = 0
  while(i < s.length) {
    const top = stack.length - 1 < 0 ? 0 :  stack.length - 1
    if (temp[stack[top]] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
    i++
  }
  return stack.length === 0
};
// @lc code=end 