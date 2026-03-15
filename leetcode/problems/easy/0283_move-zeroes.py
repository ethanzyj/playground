"""
LeetCode Problem 283: move-zeroes

Difficulty: Easy
URL: https://leetcode.com/problems/move-zeroes/

Problem Description:
Given an array nums, move all 0's to the end while maintaining the relative order
of the non-zero elements.

Approach:
Two pointers. Place non-zero elements in order, then fill the rest with zeros.
Return the modified array for testing convenience.

Tags: Array, Two Pointers
"""

from typing import List, Optional, Dict


class Solution:
    def moveZeroes(self, nums: List[int]) -> List[int]:
        """
        Move zeroes to the end in-place.

        Args:
            nums: List of integers

        Returns:
            List[int]: Modified list

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        insert_pos = 0
        for num in nums:
            if num != 0:
                nums[insert_pos] = num
                insert_pos += 1

        for i in range(insert_pos, len(nums)):
            nums[i] = 0

        return nums


# Test cases

test_cases = [
    {
        "input": {"nums": [0, 1, 0, 3, 12]},
        "expected": [1, 3, 12, 0, 0]
    },
    {
        "input": {"nums": [0]},
        "expected": [0]
    },
    {
        "input": {"nums": [1, 2, 3]},
        "expected": [1, 2, 3]
    }
]
