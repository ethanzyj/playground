"""
LeetCode Problem 438: find-all-anagrams-in-a-string

Difficulty: Medium
URL: https://leetcode.com/problems/find-all-anagrams-in-a-string/

Problem Description:
Given two strings s and p, return all start indices of p's anagrams in s.

Approach:
Sliding window with fixed size. Compare character counts for each window.

Tags: Hash Table, String, Sliding Window
"""

from typing import List, Optional, Dict


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        """
        Find all anagram start indices.

        Args:
            s: Source string
            p: Pattern string

        Returns:
            List[int]: Start indices

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        if len(p) > len(s):
            return []

        need = [0] * 26
        window = [0] * 26

        for ch in p:
            need[ord(ch) - ord("a")] += 1

        result = []
        m = len(p)

        for i, ch in enumerate(s):
            window[ord(ch) - ord("a")] += 1
            if i >= m:
                left_ch = s[i - m]
                window[ord(left_ch) - ord("a")] -= 1
            if i >= m - 1 and window == need:
                result.append(i - m + 1)

        return result


# Test cases

test_cases = [
    {
        "input": {"s": "cbaebabacd", "p": "abc"},
        "expected": [0, 6]
    },
    {
        "input": {"s": "abab", "p": "ab"},
        "expected": [0, 1, 2]
    },
    {
        "input": {"s": "a", "p": "ab"},
        "expected": []
    }
]
