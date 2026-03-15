"""
LeetCode Problem 5: longest-palindromic-substring

Difficulty: Medium
URL: https://leetcode.com/problems/longest-palindromic-substring/

Problem Description:
Given a string s, return the longest palindromic substring in s.

Approach:
Expand around each center (both odd and even length). Track the best window.

Tags: String, Two Pointers, Dynamic Programming
"""

from typing import List, Optional, Dict


class Solution:
    def longestPalindrome(self, s: str) -> str:
        """
        Return the longest palindromic substring.

        Args:
            s: Input string

        Returns:
            str: Longest palindrome

        Time Complexity: O(n^2)
        Space Complexity: O(1)
        """
        if not s:
            return ""

        def expand(left: int, right: int) -> str:
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left + 1:right]

        best = s[0]
        for i in range(len(s)):
            odd = expand(i, i)
            if len(odd) > len(best):
                best = odd
            even = expand(i, i + 1)
            if len(even) > len(best):
                best = even

        return best


# Test cases

test_cases = [
    {
        "input": {"s": "babad"},
        "expected": "bab"
    },
    {
        "input": {"s": "cbbd"},
        "expected": "bb"
    },
    {
        "input": {"s": "a"},
        "expected": "a"
    }
]
