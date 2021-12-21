/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * @description https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/3-wu-zhong-fu-zi-fu-de-zui-chang-zi-chua-au85/
 */
 var lengthOfLongestSubstring = function(s) {
  let temp = new Set()
  let length = 0
  let i = 0
  let j = 0
  while (i < s.length) {
    if (!temp.has(s[i])) {
      temp.add(s[i])
      length = Math.max(length, temp.size)
    } else {
      while(temp.has(s[i])) {
        temp.delete(s[j])
        j++
      }
      temp.add(s[i])
    }
    i++
  }
  return length
};
// @lc code=end

