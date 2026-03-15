"""
LeetCode Problem 128: longest-consecutive-sequence

Difficulty: Medium
URL: https://leetcode.com/problems/longest-consecutive-sequence/

Problem Description:
Given an unsorted array of integers nums, return the length of the longest
consecutive elements sequence.

Approach:
Use a set and only start counting from numbers that are sequence starts.

Tags: Array, Hash Table, Union Find
"""

from typing import List, Optional, Dict


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        """
        Return the length of the longest consecutive sequence.

        Args:
            nums: List of integers

        Returns:
            int: Longest consecutive length

        Time Complexity: O(n)
        Space Complexity: O(n)
        """
        num_set = set(nums)
        longest = 0

        for num in num_set:
            if num - 1 not in num_set:
                current = num
                length = 1
                while current + 1 in num_set:
                    current += 1
                    length += 1
                longest = max(longest, length)

        return longest


# Test cases

test_cases = [
    {
        "input": {"nums": [100, 4, 200, 1, 3, 2]},
        "expected": 4
    },
    {
        "input": {"nums": [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]},
        "expected": 9
    },
    {
        "input": {"nums": []},
        "expected": 0
    }
]
