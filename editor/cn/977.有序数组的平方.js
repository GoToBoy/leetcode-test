/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    const n = nums.length;
    const result = new Array(n)
    let left = 0;
    let right = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        if(Math.abs(nums[left])>Math.abs(nums[right])){
            result[i] = nums[left]*nums[left]
            left++
        }else{
            result[i] = nums[right]*nums[right]
            right--
        }
    }
    return result
}

// @lc code=end

