//给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。 
//
// 换句话说，s1 的排列之一是 s2 的 子串 。 
//
// 
//
// 示例 1： 
//
// 
//输入：s1 = "ab" s2 = "eidbaooo"
//输出：true
//解释：s2 包含 s1 的排列之一 ("ba").
// 
//
// 示例 2： 
//
// 
//输入：s1= "ab" s2 = "eidboaoo"
//输出：false
// 
//
// 
//
// 提示： 
//
// 
// 1 <= s1.length, s2.length <= 10⁴ 
// s1 和 s2 仅包含小写字母 
// 
//
// Related Topics 哈希表 双指针 字符串 滑动窗口 👍 904 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;
    var cnt = new Array(26).fill(0);
    for (var i = 0; i < len1; i++) {
        --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()];
    }
    var left = 0;
    for (var right = 0; right < len2; right++) {
        var x = s2[right].charCodeAt() - 'a'.charCodeAt();
        ++cnt[x];
        while (cnt[x] > 0) {
            --cnt[s2[left].charCodeAt() - 'a'.charCodeAt()];
            ++left;
        }
        if (right - left + 1 == len1) return true;
    }
    return false;
};
//leetcode submit region end(Prohibit modification and deletion)
