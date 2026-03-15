"""
LeetCode Problem 3: longest-substring-without-repeating-characters

Difficulty: Medium
URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/

Problem Description:
Given a string s, return the length of the longest substring without repeating characters.

Approach:
Sliding window with last seen index for each character.

Tags: Hash Table, String, Sliding Window
"""

from typing import List, Optional, Dict


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        """
        Return the length of the longest substring without repeating characters.

        Args:
            s: Input string

        Returns:
            int: Maximum length

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        last_seen: Dict[str, int] = {}
        left = 0
        best = 0

        for right, ch in enumerate(s):
            if ch in last_seen and last_seen[ch] >= left:
                left = last_seen[ch] + 1
            last_seen[ch] = right
            best = max(best, right - left + 1)

        return best


# Test cases

test_cases = [
    {
        "input": {"s": "abcabcbb"},
        "expected": 3
    },
    {
        "input": {"s": "bbbbb"},
        "expected": 1
    },
    {
        "input": {"s": "pwwkew"},
        "expected": 3
    }
]
