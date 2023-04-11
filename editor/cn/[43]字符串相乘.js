//给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。 
//
// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。 
//
// 
//
// 示例 1: 
//
// 
//输入: num1 = "2", num2 = "3"
//输出: "6" 
//
// 示例 2: 
//
// 
//输入: num1 = "123", num2 = "456"
//输出: "56088" 
//
// 
//
// 提示： 
//
// 
// 1 <= num1.length, num2.length <= 200 
// num1 和 num2 只能由数字组成。 
// num1 和 num2 都不包含任何前导零，除了数字0本身。 
// 
//
// Related Topics 数学 字符串 模拟 👍 1184 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const len1 = num1.length, len2 = num2.length;
    let res = new Array(len1 + len2).fill(0);

    for(let i = len1-1; i>=0; i--){
        for(let j = len2-1; j>=0; j--){
            let mul = (num1[i]-'0') * (num2[j]-'0');
            let p2 = i+j+1, p1 = i+j;
            let sum = mul + res[p2]; //累加
            res[p1] += parseInt(sum/10)
            res[p2] = sum % 10;
        }
    }

    let i = 0;
    while(i < res.length && res[i] === 0){
        i++
    }

    return i === res.length ? "0" : res.slice(i).join('')
};

//leetcode submit region end(Prohibit modification and deletion)
