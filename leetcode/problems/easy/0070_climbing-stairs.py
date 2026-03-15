"""
LeetCode Problem 70: climbing-stairs

Difficulty: Easy
URL: https://leetcode.com/problems/climbing-stairs/

Problem Description:
Given n steps, you can climb 1 or 2 steps each time. Return the number of ways.

Approach:
Dynamic programming with rolling variables.

Tags: Math, Dynamic Programming
"""

from typing import List, Optional, Dict


class Solution:
    def climbStairs(self, n: int) -> int:
        """
        Return the number of distinct ways to climb to the top.

        Args:
            n: Number of steps

        Returns:
            int: Number of ways

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        if n <= 2:
            return n

        prev_two = 1
        prev_one = 2
        for _ in range(3, n + 1):
            prev_two, prev_one = prev_one, prev_one + prev_two
        return prev_one


# Test cases

test_cases = [
    {
        "input": {"n": 2},
        "expected": 2
    },
    {
        "input": {"n": 3},
        "expected": 3
    },
    {
        "input": {"n": 5},
        "expected": 8
    }
]
