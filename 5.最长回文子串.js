/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const sLength = s.length
  let res = ''
  for(let i = 0; i < sLength; i++) {
    let s2 = temp(s, i, i)
    let s1 = temp(s, i, i + 1)
    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }
  return res
};


function temp (s, l, r) {
  while(l >= 0 && r < s.length && s[l] === s[r]) {
    l--
    r++
  }
  return s.substring(l + 1, r)
}

longestPalindrome("babad")
// @lc code=end

