"""
LeetCode Problem 21: merge-two-sorted-lists

Difficulty: Easy
URL: https://leetcode.com/problems/merge-two-sorted-lists/

Problem Description:
Merge two sorted linked lists and return the merged sorted list.

Approach:
Iterative merge with a dummy head. Return list values for testing.

Tags: Linked List, Recursion
"""

from typing import List, Optional, Dict


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> List[int]:
        """
        Merge two sorted lists and return list values.

        Args:
            l1: First list
            l2: Second list

        Returns:
            List[int]: Merged list values

        Time Complexity: O(n + m)
        Space Complexity: O(1)
        """
        dummy = ListNode(0)
        current = dummy

        while l1 and l2:
            if l1.val <= l2.val:
                current.next = l1
                l1 = l1.next
            else:
                current.next = l2
                l2 = l2.next
            current = current.next

        current.next = l1 if l1 else l2
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
        "input": {"l1": create_linked_list([1, 2, 4]), "l2": create_linked_list([1, 3, 4])},
        "expected": [1, 1, 2, 3, 4, 4]
    },
    {
        "input": {"l1": create_linked_list([]), "l2": create_linked_list([])},
        "expected": []
    },
    {
        "input": {"l1": create_linked_list([]), "l2": create_linked_list([0])},
        "expected": [0]
    }
]
