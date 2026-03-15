"""
LeetCode Problem 739: daily-temperatures

Difficulty: Medium
URL: https://leetcode.com/problems/daily-temperatures/

Problem Description:
Given a list of daily temperatures, return a list of the number of days to wait
until a warmer temperature. If none, put 0.

Approach:
Monotonic stack of indices.

Tags: Stack, Array, Monotonic Stack
"""

from typing import List, Optional, Dict


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        """
        Return the wait days for warmer temperatures.

        Args:
            temperatures: List of temperatures

        Returns:
            List[int]: Wait days

        Time Complexity: O(n)
        Space Complexity: O(n)
        """
        n = len(temperatures)
        result = [0] * n
        stack = []

        for i, temp in enumerate(temperatures):
            while stack and temp > temperatures[stack[-1]]:
                idx = stack.pop()
                result[idx] = i - idx
            stack.append(i)

        return result


# Test cases

test_cases = [
    {
        "input": {"temperatures": [73, 74, 75, 71, 69, 72, 76, 73]},
        "expected": [1, 1, 4, 2, 1, 1, 0, 0]
    },
    {
        "input": {"temperatures": [30, 40, 50, 60]},
        "expected": [1, 1, 1, 0]
    },
    {
        "input": {"temperatures": [30, 60, 90]},
        "expected": [1, 1, 0]
    }
]
