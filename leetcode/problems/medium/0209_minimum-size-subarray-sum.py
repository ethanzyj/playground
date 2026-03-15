"""
LeetCode Problem 209: minimum-size-subarray-sum

Difficulty: Medium
URL: https://leetcode.com/problems/minimum-size-subarray-sum/

Problem Description:
Return the minimal length of a subarray with sum >= target.

Approach:
Sliding window with two pointers.

Tags: Array, Sliding Window
"""

from typing import List, Optional, Dict


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        """
        Return the minimal length subarray with sum >= target.

        Args:
            target: Target sum
            nums: List of positive integers

        Returns:
            int: Minimal length, or 0 if none
        """
        left = 0
        current_sum = 0
        best = len(nums) + 1

        for right, num in enumerate(nums):
            current_sum += num
            while current_sum >= target:
                best = min(best, right - left + 1)
                current_sum -= nums[left]
                left += 1

        return 0 if best == len(nums) + 1 else best


# Test cases

test_cases = [
    {
        "input": {"target": 7, "nums": [2, 3, 1, 2, 4, 3]},
        "expected": 2
    },
    {
        "input": {"target": 4, "nums": [1, 4, 4]},
        "expected": 1
    },
    {
        "input": {"target": 11, "nums": [1, 1, 1, 1, 1, 1, 1, 1]},
        "expected": 0
    }
]
