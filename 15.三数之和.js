/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let length = nums.length;
  let result = [];
  let temp = new Set();
  for (let index = 0; index < length; index++) {
    let l = index + 1;
    let r = length - 1;
    while (l < r) {
      const threeSum = nums[index] + nums[l] + nums[r];
      if (threeSum === 0) {
        if (!temp.has(`${nums[index]}${nums[l]}${nums[r]}`)) {
          temp.add(`${nums[index]}${nums[l]}${nums[r]}`);
          result.push([nums[index], nums[l], nums[r]]);
        }
        l++;
        r--;
      } else if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      }
    }
  }
  return result;
};
// @lc code=end

