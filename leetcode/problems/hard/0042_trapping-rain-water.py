"""
LeetCode Problem 42: Trapping Rain Water

Difficulty: Hard
URL: https://leetcode.com/problems/trapping-rain-water/

Given n non-negative integers representing an elevation map where the width
of each bar is 1, compute how much water it can trap after raining.

Approach:
Use the two-pointer technique to achieve O(n) time and O(1) extra space.
Maintain left and right pointers and track the current max on each side. Move
the pointer with smaller height and accumulate trapped water based on the
difference between the current max and the height at that pointer.

Tags: Array, Two Pointers, Dynamic Programming
"""

from typing import List, Optional, Dict


class Solution:
    def trap(self, height: List[int]) -> int:
        """
        Calculate trapped rain water given elevation map heights.

        Args:
            height: List[int] - list of non-negative integers representing heights

        Returns:
            int - total units of trapped rain water
        """
        if not height:
            return 0

        left, right = 0, len(height) - 1
        left_max, right_max = 0, 0
        trapped = 0

        while left < right:
            if height[left] < height[right]:
                if height[left] >= left_max:
                    left_max = height[left]
                else:
                    trapped += left_max - height[left]
                left += 1
            else:
                if height[right] >= right_max:
                    right_max = height[right]
                else:
                    trapped += right_max - height[right]
                right -= 1

        return trapped


# Test cases
test_cases = [
    {
        "input": {"height": [0,1,0,2,1,0,1,3,2,1,2,1]},
        "expected": 6
    },
    {
        "input": {"height": []},
        "expected": 0
    },
    {
        "input": {"height": [2,0,2]},
        "expected": 2
    },
    {
        "input": {"height": [4,2,0,3,2,5]},
        "expected": 9
    },
    {
        "input": {"height": [5,4,1,2]},
        "expected": 1
    }
]

# Additional edge cases
edge_cases = [
    # Single element and two elements (no trapping)
    {"input": {"height": [0]}, "expected": 0},
    {"input": {"height": [1,2]}, "expected": 0},

    # Monotonic increasing / decreasing
    {"input": {"height": [0,1,2,3,4,5]}, "expected": 0},
    {"input": {"height": [5,4,3,2,1,0]}, "expected": 0},

    # Large flat plateau between high walls
    {"input": {"height": [5,0,0,0,5]}, "expected": 15},

    # Alternating high/low
    {"input": {"height": [3,0,3,0,3]}, "expected": 6},

    # Many zeros
    {"input": {"height": [0,0,0,0,0]}, "expected": 0},

    # Repeating pattern
    {"input": {"height": [2,0,2,0,2,0,2]}, "expected": 6},

    # Single deep pit
    {"input": {"height": [6,0,0,0,0,0,6]}, "expected": 30},
]

# Merge into test_cases so the runner picks them up
test_cases.extend(edge_cases)
