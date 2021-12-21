/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let temp = []
  let index = 0
  let down = true
  if (numRows === 1) return s
  for (let i = 0; i < s.length; i++) {
    let str = temp[index] || ''
    str += s[i]
    temp[index] = str
    if ((index + 1) % numRows === 0) {
      down = false
    } else if (index === 0) {
      down = true
    }
    down ? index++ : index--
  }
  return temp.join('')
};
// @lc code=end

