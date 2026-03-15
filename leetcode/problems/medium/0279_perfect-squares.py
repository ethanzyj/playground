"""
LeetCode Problem 279: perfect-squares

Difficulty: Medium
URL: https://leetcode.com/problems/perfect-squares/

Problem Description:
Given an integer n, return the least number of perfect square numbers that sum to n.

Approach:
Dynamic programming where dp[i] is the minimum number of squares to sum to i.

Tags: Dynamic Programming, Math, Breadth-First Search
"""

from typing import List, Optional, Dict


class Solution:
    def numSquares(self, n: int) -> int:
        """
        Return the minimum number of perfect squares that sum to n.

        Args:
            n: Target integer

        Returns:
            int: Minimum count of perfect squares

        Time Complexity: O(n * sqrt(n))
        Space Complexity: O(n)
        """
        dp = [0] + [n] * n
        squares = []
        k = 1
        while k * k <= n:
            squares.append(k * k)
            k += 1

        for i in range(1, n + 1):
            for sq in squares:
                if sq > i:
                    break
                dp[i] = min(dp[i], dp[i - sq] + 1)

        return dp[n]


# Test cases

test_cases = [
    {
        "input": {"n": 12},
        "expected": 3
    },
    {
        "input": {"n": 13},
        "expected": 2
    },
    {
        "input": {"n": 1},
        "expected": 1
    }
]
