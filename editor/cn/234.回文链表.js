/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	var slow = head,
		fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	slow = reverse(slow);
	while (slow) {
		if (slow.val != fast.val) return false;
		slow = slow.next;
		fast = fast.next;
	}
	return true;
};

var reverse = function (head) {
	var prev = null;
	while (head) {
		var next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}
	return prev;
};
// @lc code=end
