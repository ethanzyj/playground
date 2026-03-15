"""
LeetCode Problem 143: reorder-list

Difficulty: Medium
URL: https://leetcode.com/problems/reorder-list/

Problem Description:
Reorder a linked list in-place to L0 -> Ln -> L1 -> Ln-1 -> ...

Approach:
Find middle, reverse second half, then merge.
Return list values for testing.

Tags: Linked List, Two Pointers
"""

from typing import List, Optional, Dict


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reorderList(self, head: Optional[ListNode]) -> List[int]:
        """
        Reorder the list and return values for testing.

        Args:
            head: Head of list

        Returns:
            List[int]: Reordered list values
        """
        if not head or not head.next:
            return linked_list_to_list(head)

        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        prev = None
        curr = slow
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt

        first = head
        second = prev
        while second and first:
            temp1 = first.next
            temp2 = second.next
            if first is second:
                break
            first.next = second
            if temp1 is second:
                break
            second.next = temp1
            first = temp1
            second = temp2

        return linked_list_to_list(head)


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
        "input": {"head": create_linked_list([1, 2, 3, 4])},
        "expected": [1, 4, 2, 3]
    },
    {
        "input": {"head": create_linked_list([1, 2, 3, 4, 5])},
        "expected": [1, 5, 2, 4, 3]
    },
    {
        "input": {"head": create_linked_list([1])},
        "expected": [1]
    }
]
