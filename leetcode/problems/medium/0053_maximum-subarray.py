"""
LeetCode Problem 53: maximum-subarray

Difficulty: Medium
URL: https://leetcode.com/problems/maximum-subarray/

Problem Description:
Given an integer array nums, find the contiguous subarray with the largest sum.

Approach:
Kadane's algorithm.

Tags: Array, Dynamic Programming, Divide and Conquer
"""

from typing import List, Optional, Dict


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        """
        Return the maximum subarray sum.

        Args:
            nums: List of integers

        Returns:
            int: Maximum sum

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        best = nums[0]
        current = nums[0]

        for num in nums[1:]:
            current = max(num, current + num)
            best = max(best, current)

        return best


# Test cases

test_cases = [
    {
        "input": {"nums": [-2, 1, -3, 4, -1, 2, 1, -5, 4]},
        "expected": 6
    },
    {
        "input": {"nums": [1]},
        "expected": 1
    },
    {
        "input": {"nums": [5, 4, -1, 7, 8]},
        "expected": 23
    }
]
