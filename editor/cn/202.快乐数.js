/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 * 在"快乐数"这个问题中，不会有无限增长的情况。原因如下：
我们先来观察一下这个问题，对于任何大于等于10的数字n，下一步的计算结果总是小于或等于 81 * d，其中d是n的位数。举例来说，对于四位数的数字，下一步的计算结果不会超过324（即81 * 4）。
这意味着我们的搜索空间可以减小到0~324。在这个范围内，我们会经过一定次数的计算后进入一个循环，这个循环要么是无限循环，要么最终会得到1。我们不会看到数字的无限增长。
所以，通过"快慢指针"方法，我们能有效地解决这个问题。如果存在循环（无论是得到1的循环，还是其他的循环），快指针和慢指针都会在循环中的某个地方相遇。
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let slow = n,
		fast = getNext(n);
	while (fast !== 1 && slow != fast) {
		slow = getNext(slow);
		fast = getNext(getNext(fast));
	}

	return fast === 1;
};

function getNext(n) {
	let totalSum = 0;
	while (n > 0) {
		d = n % 10;
		n = Math.floor(n / 10);
		totalSum += d * d;
	}

	return totalSum;
}

// @lc code=end
