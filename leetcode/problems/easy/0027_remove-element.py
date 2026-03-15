"""
LeetCode Problem 27: remove-element

Difficulty: Easy
URL: https://leetcode.com/problems/remove-element/

Problem Description:
Given an array nums and a value val, remove all instances of val in-place and
return the new length.

Approach:
Two pointers. Keep a write index for elements not equal to val.

Tags: Array, Two Pointers
"""

from typing import List, Optional, Dict


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        """
        Remove all instances of val in-place and return the new length.

        Args:
            nums: List of integers
            val: Value to remove

        Returns:
            int: New length after removal

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        write = 0
        for num in nums:
            if num != val:
                nums[write] = num
                write += 1
        return write


# Test cases
# Only the returned length is validated by the test runner.

test_cases = [
    {
        "input": {"nums": [3, 2, 2, 3], "val": 3},
        "expected": 2
    },
    {
        "input": {"nums": [0, 1, 2, 2, 3, 0, 4, 2], "val": 2},
        "expected": 5
    },
    {
        "input": {"nums": [], "val": 0},
        "expected": 0
    }
]
