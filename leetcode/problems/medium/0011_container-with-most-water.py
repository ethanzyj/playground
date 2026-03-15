"""
LeetCode Problem 11: container-with-most-water

Difficulty: Medium
URL: https://leetcode.com/problems/container-with-most-water/

Problem Description:
Given an array of heights, find two lines that together with the x-axis form a container
such that the container contains the most water.

Approach:
Two pointers moving inward from both ends.

Tags: Array, Two Pointers, Greedy
"""

from typing import List, Optional, Dict


class Solution:
    def maxArea(self, height: List[int]) -> int:
        """
        Return the maximum area.

        Args:
            height: List of heights

        Returns:
            int: Maximum area

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        left = 0
        right = len(height) - 1
        best = 0

        while left < right:
            h = min(height[left], height[right])
            best = max(best, h * (right - left))
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return best


# Test cases

test_cases = [
    {
        "input": {"height": [1, 8, 6, 2, 5, 4, 8, 3, 7]},
        "expected": 49
    },
    {
        "input": {"height": [1, 1]},
        "expected": 1
    },
    {
        "input": {"height": [4, 3, 2, 1, 4]},
        "expected": 16
    }
]
