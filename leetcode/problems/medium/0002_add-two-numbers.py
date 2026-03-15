"""
LeetCode Problem 2: add-two-numbers

Difficulty: Medium
URL: https://leetcode.com/problems/add-two-numbers/

Problem Description:
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order. Add the two numbers and return the sum
as a linked list.

Approach:
Iterate with carry and build a new list. Return list values for testing.

Tags: Linked List, Math
"""

from typing import List, Optional, Dict


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> List[int]:
        """
        Add two numbers represented by linked lists.

        Args:
            l1: First linked list
            l2: Second linked list

        Returns:
            List[int]: Sum as list of digits (reverse order)

        Time Complexity: O(n)
        Space Complexity: O(n)
        """
        dummy = ListNode(0)
        current = dummy
        carry = 0

        while l1 or l2 or carry:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0
            total = v1 + v2 + carry
            carry = total // 10
            current.next = ListNode(total % 10)
            current = current.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return linked_list_to_list(dummy.next)


def create_linked_list(values: List[int]) -> Optional[ListNode]:
    if not values:
        return None

    head = ListNode(values[0])
    current = head
    for val in values[1:]:
        current.next = ListNode(val)
        current = current.next
    return head


def linked_list_to_list(head: Optional[ListNode]) -> List[int]:
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result


# Test cases

test_cases = [
    {
        "input": {"l1": create_linked_list([2, 4, 3]), "l2": create_linked_list([5, 6, 4])},
        "expected": [7, 0, 8]
    },
    {
        "input": {"l1": create_linked_list([0]), "l2": create_linked_list([0])},
        "expected": [0]
    },
    {
        "input": {"l1": create_linked_list([9, 9, 9, 9, 9, 9, 9]), "l2": create_linked_list([9, 9, 9, 9])},
        "expected": [8, 9, 9, 9, 0, 0, 0, 1]
    }
]
