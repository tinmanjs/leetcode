// Leetcode 2: Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
var addTwoNumbers = function(l1, l2) {
  let root = new ListNode()
  let currentNode = root
  let carry = 0
  
  while (l1 || l2 || carry) {
    let v1 = l1 ? l1.val : 0
    let v2 = l2 ? l2.val : 0
    let value = v1 + v2 + carry
    if (value > 9) {
      carry = 1
      value = value - 10
    } else {
      carry = 0
    }
    currentNode.val = value
    l1 = l1 && l1.next
    l2 = l2 && l2.next
    if (l1 || l2 || carry) {
      let nextNode = new ListNode()
      currentNode.next = nextNode
      currentNode = nextNode
    }
  }
  return root
};