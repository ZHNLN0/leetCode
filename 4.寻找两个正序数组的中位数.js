/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let nums = nums1.concat(nums2)
  nums.sort((a, b) => { return a - b })
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length === 2) {
    return (nums[0] + nums[1]) / 2
  }
  const index = nums.length / 2
  if (Number.isInteger(index)) {
    return (nums[index] + nums[index - 1]) / 2
  } else {
    return nums[Math.floor(index)]
  }
};
// @lc code=end

