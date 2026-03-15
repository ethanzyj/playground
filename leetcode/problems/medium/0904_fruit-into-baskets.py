"""
LeetCode Problem 904: fruit-into-baskets

Difficulty: Medium
URL: https://leetcode.com/problems/fruit-into-baskets/

Problem Description:
Given an array of fruit types, return the maximum number of fruits you can pick
with at most two types.

Approach:
Sliding window with at most two distinct types.

Tags: Array, Hash Table, Sliding Window
"""

from typing import List, Optional, Dict


class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        """
        Return the maximum number of fruits collected.

        Args:
            fruits: List of fruit types

        Returns:
            int: Maximum number collected

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        count: Dict[int, int] = {}
        left = 0
        best = 0

        for right, fruit in enumerate(fruits):
            count[fruit] = count.get(fruit, 0) + 1
            while len(count) > 2:
                left_fruit = fruits[left]
                count[left_fruit] -= 1
                if count[left_fruit] == 0:
                    del count[left_fruit]
                left += 1
            best = max(best, right - left + 1)

        return best


# Test cases

test_cases = [
    {
        "input": {"fruits": [1, 2, 1]},
        "expected": 3
    },
    {
        "input": {"fruits": [0, 1, 2, 2]},
        "expected": 3
    },
    {
        "input": {"fruits": [1, 2, 3, 2, 2]},
        "expected": 4
    }
]
