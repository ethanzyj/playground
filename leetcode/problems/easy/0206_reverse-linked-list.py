"""
LeetCode Problem 206: reverse-linked-list

Difficulty: Easy
URL: https://leetcode.com/problems/reverse-linked-list/

Problem Description:
Given the head of a singly linked list, reverse the list, and return the reversed list.

Approach:
Use iterative approach with three pointers: prev, current, and next.
1. Initialize prev as None, current as head
2. For each node, store next, reverse the link, and move pointers forward
3. Return prev as the new head

Tags: Linked List, Recursion
"""

from typing import List, Optional, Dict


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> List[int]:
        """
        Reverse a singly linked list and return as array for testing.
        
        Args:
            head: Head of linked list
            
        Returns:
            List[int]: Reversed linked list values as array
            
        Time Complexity: O(n) - visit each node once
        Space Complexity: O(1) - only use constant extra space for reversal
        """
        # Reverse the linked list
        prev = None
        current = head
        
        while current:
            next_temp = current.next  # Store next node
            current.next = prev       # Reverse the link
            prev = current           # Move prev forward
            current = next_temp      # Move current forward
        
        # Convert result to list format for testing
        return linked_list_to_list(prev)


# Helper functions
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
        "input": {"head": create_linked_list([1, 2, 3, 4, 5])},
        "expected": [5, 4, 3, 2, 1]  # Reversed list as array
    },
    {
        "input": {"head": create_linked_list([1, 2])},
        "expected": [2, 1]  # Reversed list as array
    },
    {
        "input": {"head": create_linked_list([])},
        "expected": []  # Empty list case
    }
]