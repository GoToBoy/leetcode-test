/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if(!s || !words || words.length === 0) return [];

    const wordLen = words[0].length;
    const wordsCount = words.length;
    const sLen = s.length;

    const wordCounter = {};
    for(let word of words) {
        wordCounter[word] = (wordCounter[word] || 0) + 1;
    }

    const result = [];
    // 单词长度步进5 ['words', 'words', 'words'] 
    for(let start = 0; start < wordLen; start++) {
        let left = start;
        let windowCounter = {};

        for(let i = start; i < sLen - wordLen; i += wordLen){
            // 当前单词
            const currentWord = s.substring(i, i + wordLen);
            windowCounter[currentWord] = (windowCounter[currentWord] || 0) + 1;

            // 当前单词的数量大于words中的数量
            while(windowCounter[currentWord] > wordCounter[currentWord]) {
                const leftWord = s.substring(left, left + wordLen);
                windowCounter[leftWord]--;
                left += wordLen;
            }

            if(i - left + wordLen === wordLen * wordsCount) {
                result.push(left);
            }
        }

    }
    


};
// @lc code=end

