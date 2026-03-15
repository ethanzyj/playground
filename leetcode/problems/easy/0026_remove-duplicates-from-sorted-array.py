"""
LeetCode Problem 26: remove-duplicates-from-sorted-array

Difficulty: Easy
URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

Problem Description:
Remove duplicates in-place from a sorted array and return the new length.

Approach:
Two pointers to overwrite duplicates.

Tags: Array, Two Pointers
"""

from typing import List, Optional, Dict


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        """
        Remove duplicates and return new length.

        Args:
            nums: Sorted list

        Returns:
            int: New length
        """
        if not nums:
            return 0

        write = 1
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[write] = nums[i]
                write += 1
        return write


# Test cases
# Only the returned length is validated by the test runner.

test_cases = [
    {
        "input": {"nums": [1, 1, 2]},
        "expected": 2
    },
    {
        "input": {"nums": [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]},
        "expected": 5
    },
    {
        "input": {"nums": [1]},
        "expected": 1
    }
]
