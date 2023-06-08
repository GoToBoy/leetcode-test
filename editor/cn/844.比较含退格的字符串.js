/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
	let i = S.length - 1,
		j = T.length - 1;

	while (i >= 0 || j >= 0) {
		let backspace = 0;
		while (i >= 0 && (S[i] === "#" || backspace > 0)) {
			S[i] === "#" ? backspace++ : backspace--;
			i--;
		}
		backspace = 0;
		while (j >= 0 && (T[j] === "#" || backspace > 0)) {
			T[j] === "#" ? backspace++ : backspace--;
			j--;
		}
		if (i >= 0 && j >= 0 && S[i] !== T[j]) return false;
		if (i >= 0 != j >= 0) return false;
		i--;
		j--;
	}
	return true;
};
// @lc code=end
