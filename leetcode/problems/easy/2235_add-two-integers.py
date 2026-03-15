"""
LeetCode Problem 2235: add-two-integers

Difficulty: Easy
URL: https://leetcode.com/problems/add-two-integers/

Problem Description:
Return the sum of two integers.

Approach:
Direct addition.

Tags: Math
"""

from typing import List, Optional, Dict


class Solution:
    def sum(self, num1: int, num2: int) -> int:
        """
        Return the sum of two integers.

        Args:
            num1: First integer
            num2: Second integer

        Returns:
            int: Sum
        """
        return num1 + num2


# Test cases

test_cases = [
    {
        "input": {"num1": 12, "num2": 5},
        "expected": 17
    },
    {
        "input": {"num1": -10, "num2": 4},
        "expected": -6
    }
]
