/*
340. Longest Substring with At Most K Distinct Characters
Given a string, find the length of the longest substring T that contains at most k distinct characters.

    Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
Difficulty:hard

 */
function fun(s,k){
    var l=0,r=0,ans=0, freq = {}

    while(r<s.length){
        freq[s[r]] = freq[s[r]]+1 || 1
        while(Object.keys(freq).length > k){
            freq[s[l]]--
            if(freq[s[l]]==0) delete freq[s[l]]
            l++
        }
        ans = Math.max(ans, r-l+1)
        r++
    }
    return ans;
}