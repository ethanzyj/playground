"""
LeetCode Problem 49: group-anagrams

Difficulty: Medium
URL: https://leetcode.com/problems/group-anagrams/

Problem Description:
Group strings that are anagrams of each other.

Approach:
Sort each string to form a key and group by that key.
Return deterministically sorted groups for stable testing.

Tags: Array, Hash Table, String, Sorting
"""

from typing import List, Optional, Dict


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        """
        Group anagrams.

        Args:
            strs: List of strings

        Returns:
            List[List[str]]: Grouped anagrams

        Time Complexity: O(n * k log k)
        Space Complexity: O(n)
        """
        groups: Dict[str, List[str]] = {}
        for s in strs:
            key = "".join(sorted(s))
            groups.setdefault(key, []).append(s)

        result = [sorted(group) for group in groups.values()]
        result.sort()
        return result


# Test cases

test_cases = [
    {
        "input": {"strs": ["eat", "tea", "tan", "ate", "nat", "bat"]},
        "expected": [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]
    },
    {
        "input": {"strs": [""]},
        "expected": [[""]]
    },
    {
        "input": {"strs": ["a"]},
        "expected": [["a"]]
    }
]
