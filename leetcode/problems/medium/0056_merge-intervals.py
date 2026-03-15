"""
LeetCode Problem 56: merge-intervals

Difficulty: Medium
URL: https://leetcode.com/problems/merge-intervals/

Problem Description:
Given an array of intervals, merge all overlapping intervals.

Approach:
Sort by start and merge greedily.

Tags: Array, Sorting
"""

from typing import List, Optional, Dict


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        """
        Merge overlapping intervals.

        Args:
            intervals: List of [start, end]

        Returns:
            List[List[int]]: Merged intervals

        Time Complexity: O(n log n)
        Space Complexity: O(n)
        """
        if not intervals:
            return []

        intervals.sort(key=lambda x: x[0])
        merged = [intervals[0][:]]

        for start, end in intervals[1:]:
            last = merged[-1]
            if start <= last[1]:
                last[1] = max(last[1], end)
            else:
                merged.append([start, end])

        return merged


# Test cases

test_cases = [
    {
        "input": {"intervals": [[1, 3], [2, 6], [8, 10], [15, 18]]},
        "expected": [[1, 6], [8, 10], [15, 18]]
    },
    {
        "input": {"intervals": [[1, 4], [4, 5]]},
        "expected": [[1, 5]]
    },
    {
        "input": {"intervals": []},
        "expected": []
    }
]
