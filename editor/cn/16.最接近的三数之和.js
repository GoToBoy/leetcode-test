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
	nums.sort((a, b) => a - b);
	var result = nums[0] + nums[1] + nums[2];

	for (let i = 0; i < nums.length - 2; i++) {
		let lo = i + 1,
			hi = nums.length - 1;
		while (lo < hi) {
			let sum = nums[i] + nums[lo] + nums[hi];
			if (sum === target) return sum;
			if (Math.abs(sum - target) < Math.abs(result - target)) {
				result = sum;
			}
			if (sum > target) hi--;
			else lo++;
		}
	}
	return result;
};
// @lc code=end
