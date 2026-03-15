"""
LeetCode Problem 35: search-insert-position

Difficulty: Easy
URL: https://leetcode.com/problems/search-insert-position/

Problem Description:
Given a sorted array and a target, return the index if found, or insert position if not.

Approach:
Binary search.

Tags: Array, Binary Search
"""

from typing import List, Optional, Dict


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        """
        Return the insert position of target.

        Args:
            nums: Sorted list
            target: Target value

        Returns:
            int: Index

        Time Complexity: O(log n)
        Space Complexity: O(1)
        """
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return left


# Test cases

test_cases = [
    {
        "input": {"nums": [1, 3, 5, 6], "target": 5},
        "expected": 2
    },
    {
        "input": {"nums": [1, 3, 5, 6], "target": 2},
        "expected": 1
    },
    {
        "input": {"nums": [1, 3, 5, 6], "target": 7},
        "expected": 4
    }
]
