/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
	let min = Number.MAX_VALUE,
		max = Number.MIN_VALUE;
	let start = -1,
		end = -2;

	for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
		max = Math.max(max, nums[i]);
		min = Math.min(min, nums[j]);

		if (nums[i] < max) end = i;
		if (nums[j] > min) start = j;
	}

	return end - start + 1;
};
// @lc code=end
