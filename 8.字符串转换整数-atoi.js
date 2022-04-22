/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let length = s.length
  let sNum = ''
  let i = 0
  while (i < length) {
    if (s[i] === ' ' && sNum.length === 0) {
      i++
    } else if (sNum.length && (s[i] === '-' || s[i] === '+')) {
      break
    } else if (Number.isInteger(parseInt(s[i])) || s[i] === '-' || s[i] === '+'){
      sNum += s[i]
      i++
    } else {
      break
    }
    
  }
  const res = +sNum
  if (res <= -2147483648) return -2147483648
  else if (res >= 2147483647) return 2147483647
  else if (Number.isNaN(res)) return 0
  else return res
};
// @lc code=end