"""
LeetCode Problem 300: longest-increasing-subsequence

Difficulty: Medium
URL: https://leetcode.com/problems/longest-increasing-subsequence/

Problem Description:
Given an integer array nums, return the length of the longest strictly increasing subsequence.

Approach:
Patience sorting with binary search.

Tags: Array, Binary Search, Dynamic Programming
"""

from typing import List, Optional, Dict
import bisect


class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        """
        Return the length of the longest increasing subsequence.

        Args:
            nums: List of integers

        Returns:
            int: LIS length

        Time Complexity: O(n log n)
        Space Complexity: O(n)
        """
        tails: List[int] = []
        for num in nums:
            idx = bisect.bisect_left(tails, num)
            if idx == len(tails):
                tails.append(num)
            else:
                tails[idx] = num
        return len(tails)


# Test cases

test_cases = [
    {
        "input": {"nums": [10, 9, 2, 5, 3, 7, 101, 18]},
        "expected": 4
    },
    {
        "input": {"nums": [0, 1, 0, 3, 2, 3]},
        "expected": 4
    },
    {
        "input": {"nums": [7, 7, 7, 7, 7, 7, 7]},
        "expected": 1
    }
]
