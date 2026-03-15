"""
LeetCode Problem 13: roman-to-integer

Difficulty: Easy
URL: https://leetcode.com/problems/roman-to-integer/

Problem Description:
Convert a Roman numeral to an integer.

Approach:
Scan from left to right and handle subtractive pairs.

Tags: Hash Table, Math, String
"""

from typing import List, Optional, Dict


class Solution:
    def romanToInt(self, s: str) -> int:
        """
        Convert Roman numeral to integer.

        Args:
            s: Roman numeral

        Returns:
            int: Integer value
        """
        values = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }

        total = 0
        i = 0
        while i < len(s):
            if i + 1 < len(s) and values[s[i]] < values[s[i + 1]]:
                total += values[s[i + 1]] - values[s[i]]
                i += 2
            else:
                total += values[s[i]]
                i += 1
        return total


# Test cases

test_cases = [
    {
        "input": {"s": "III"},
        "expected": 3
    },
    {
        "input": {"s": "LVIII"},
        "expected": 58
    },
    {
        "input": {"s": "MCMXCIV"},
        "expected": 1994
    }
]
