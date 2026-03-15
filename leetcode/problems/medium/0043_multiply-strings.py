"""
LeetCode Problem 43: multiply-strings

Difficulty: Medium
URL: https://leetcode.com/problems/multiply-strings/

Problem Description:
Multiply two non-negative integers represented as strings.

Approach:
Grade-school multiplication with digit arrays.

Tags: Math, String, Simulation
"""

from typing import List, Optional, Dict


class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        """
        Return the product of two numeric strings.

        Args:
            num1: First number string
            num2: Second number string

        Returns:
            str: Product
        """
        if num1 == "0" or num2 == "0":
            return "0"

        m = len(num1)
        n = len(num2)
        result = [0] * (m + n)

        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                mul = (ord(num1[i]) - ord("0")) * (ord(num2[j]) - ord("0"))
                p1 = i + j
                p2 = i + j + 1
                total = mul + result[p2]
                result[p2] = total % 10
                result[p1] += total // 10

        start = 0
        while start < len(result) and result[start] == 0:
            start += 1
        return "".join(str(d) for d in result[start:])


# Test cases

test_cases = [
    {
        "input": {"num1": "2", "num2": "3"},
        "expected": "6"
    },
    {
        "input": {"num1": "123", "num2": "456"},
        "expected": "56088"
    },
    {
        "input": {"num1": "0", "num2": "999"},
        "expected": "0"
    }
]
