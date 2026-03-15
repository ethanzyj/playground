"""
LeetCode Problem 560: subarray-sum-equals-k

Difficulty: Medium
URL: https://leetcode.com/problems/subarray-sum-equals-k/

Problem Description:
Count the number of subarrays whose sum equals k.

Approach:
Prefix sum with frequency map.

Tags: Array, Hash Table, Prefix Sum
"""

from typing import List, Optional, Dict


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        """
        Return count of subarrays with sum k.

        Args:
            nums: List of integers
            k: Target sum

        Returns:
            int: Count
        """
        count = 0
        prefix = 0
        freq: Dict[int, int] = {0: 1}

        for num in nums:
            prefix += num
            count += freq.get(prefix - k, 0)
            freq[prefix] = freq.get(prefix, 0) + 1

        return count


# Test cases

test_cases = [
    {
        "input": {"nums": [1, 1, 1], "k": 2},
        "expected": 2
    },
    {
        "input": {"nums": [1, 2, 3], "k": 3},
        "expected": 2
    },
    {
        "input": {"nums": [0, 0, 0], "k": 0},
        "expected": 6
    }
]
