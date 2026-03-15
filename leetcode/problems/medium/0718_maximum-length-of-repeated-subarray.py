"""
LeetCode Problem 718: maximum-length-of-repeated-subarray

Difficulty: Medium
URL: https://leetcode.com/problems/maximum-length-of-repeated-subarray/

Problem Description:
Return the maximum length of a subarray that appears in both arrays.

Approach:
Dynamic programming with rolling array.

Tags: Array, Dynamic Programming
"""

from typing import List, Optional, Dict


class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        """
        Return the maximum length of repeated subarray.

        Args:
            nums1: First array
            nums2: Second array

        Returns:
            int: Maximum length
        """
        if not nums1 or not nums2:
            return 0

        m = len(nums1)
        n = len(nums2)
        dp = [0] * (n + 1)
        best = 0

        for i in range(m - 1, -1, -1):
            prev = 0
            for j in range(n - 1, -1, -1):
                temp = dp[j]
                if nums1[i] == nums2[j]:
                    dp[j] = prev + 1
                    if dp[j] > best:
                        best = dp[j]
                else:
                    dp[j] = 0
                prev = temp

        return best


# Test cases

test_cases = [
    {
        "input": {"nums1": [1, 2, 3, 2, 1], "nums2": [3, 2, 1, 4, 7]},
        "expected": 3
    },
    {
        "input": {"nums1": [0, 0, 0, 0, 0], "nums2": [0, 0, 0, 0, 0]},
        "expected": 5
    },
    {
        "input": {"nums1": [1, 2, 3], "nums2": [4, 5, 6]},
        "expected": 0
    }
]
