/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = ''
  let index = 0, length = strs.length
  while(strs[0][index]) {
    let char = strs[0][index]
    for (let i = 1; i < length; i++) {
      if (strs[i][index] !== char) {
        return result
      }
    }
    index += 1
    result += char
  }
  return result
};
// @lc code=end

