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
	let res = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i++) {
		if (i != 0 && nums[i] == nums[i - 1]) continue;
		let lo = i,
			hi = nums.length - 1,
			sum = 0 - nums[i];
		while (lo < hi) {
			if (nums[lo] + nums[hi] === sum) {
				res.push([nums[i], nums[lo], nums[hi]]);
				while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
				while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
				hi--;
				lo++;
			} else if (nums[lo] + nums[hi] > sum) {
				hi--;
			} else {
				lo++;
			}
		}
	}

	return res;
};
// @lc code=end
