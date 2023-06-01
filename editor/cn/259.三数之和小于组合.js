function threeSumSmaller(nums, target) {
	nums.sort((a, b) => a - b);
	var count = 0;

	for (let i = 0; i < nums.length - 2; i++) {
		let lo = i + 1,
			hi = nums.length - 1;
		while (lo < hi) {
			let sum = nums[i] + nums[lo] + nums[hi];
			if (sum < target) {
				count += hi - lo;
				lo++;
			} else {
				hi--;
			}
		}
	}
	return count;
}
