"""
LeetCode Problem 198: house-robber

Difficulty: Medium
URL: https://leetcode.com/problems/house-robber/

Problem Description:
Given a list of non-negative integers representing the amount of money of each house,
return the maximum amount you can rob without robbing adjacent houses.

Approach:
Dynamic programming with rolling variables.

Tags: Array, Dynamic Programming
"""

from typing import List, Optional, Dict


class Solution:
    def rob(self, nums: List[int]) -> int:
        """
        Return the maximum amount that can be robbed.

        Args:
            nums: List of non-negative integers

        Returns:
            int: Maximum amount

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        prev_two = 0
        prev_one = 0

        for amount in nums:
            current = max(prev_one, prev_two + amount)
            prev_two = prev_one
            prev_one = current

        return prev_one


# Test cases

test_cases = [
    {
        "input": {"nums": [1, 2, 3, 1]},
        "expected": 4
    },
    {
        "input": {"nums": [2, 7, 9, 3, 1]},
        "expected": 12
    },
    {
        "input": {"nums": [0]},
        "expected": 0
    }
]
