"""
LeetCode Problem 22: generate-parentheses

Difficulty: Medium
URL: https://leetcode.com/problems/generate-parentheses/

Problem Description:
Generate all combinations of well-formed parentheses.

Approach:
Backtracking with counts of open and close parentheses.

Tags: String, Backtracking
"""

from typing import List, Optional, Dict


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        """
        Generate all valid parentheses combinations.

        Args:
            n: Number of pairs

        Returns:
            List[str]: All combinations
        """
        result: List[str] = []

        def backtrack(current: str, open_count: int, close_count: int) -> None:
            if len(current) == 2 * n:
                result.append(current)
                return
            if open_count < n:
                backtrack(current + "(", open_count + 1, close_count)
            if close_count < open_count:
                backtrack(current + ")", open_count, close_count + 1)

        backtrack("", 0, 0)
        return result


# Test cases

test_cases = [
    {
        "input": {"n": 3},
        "expected": ["((()))", "(()())", "(())()", "()(())", "()()()"]
    },
    {
        "input": {"n": 1},
        "expected": ["()"]
    }
]
