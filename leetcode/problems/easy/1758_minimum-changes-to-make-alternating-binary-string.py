"""
LeetCode Problem 1758: minimum-changes-to-make-alternating-binary-string

Difficulty: Easy
URL: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/

Problem Description:
Return the minimum changes to make a binary string alternating.

Approach:
Count mismatches for patterns starting with '0' and '1'.

Tags: String
"""

from typing import List, Optional, Dict


class Solution:
    def minOperations(self, s: str) -> int:
        """
        Return the minimum number of changes.

        Args:
            s: Input binary string

        Returns:
            int: Minimum changes
        """
        mismatches_start_0 = 0
        mismatches_start_1 = 0

        for i, ch in enumerate(s):
            expected_0 = "0" if i % 2 == 0 else "1"
            expected_1 = "1" if i % 2 == 0 else "0"
            if ch != expected_0:
                mismatches_start_0 += 1
            if ch != expected_1:
                mismatches_start_1 += 1

        return min(mismatches_start_0, mismatches_start_1)


# Test cases

test_cases = [
    {
        "input": {"s": "0100"},
        "expected": 1
    },
    {
        "input": {"s": "10"},
        "expected": 0
    },
    {
        "input": {"s": "1111"},
        "expected": 2
    }
]
