/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let length = nums.length;
  let result = Number.MAX_SAFE_INTEGER;
  for (let index = 0; index < length; index++) {
    let l = index + 1;
    let r = length - 1;
    while (l < r) {
      const sum = nums[index] + nums[l] + nums[r];
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
      if (sum > target) {
        r--;
      } else if (sum < target) {
        l++;
      } else {
        return sum;
      }
    }
  }
  return result;
};
// @lc code=end

