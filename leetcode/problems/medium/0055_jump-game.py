"""
LeetCode Problem 55: jump-game

Difficulty: Medium
URL: https://leetcode.com/problems/jump-game/

Problem Description:
Given an array of non-negative integers nums, you are initially positioned
at the first index of the array. Each element in the array represents your
maximum jump length at that position. Determine if you are able to reach
the last index.

Approach:
Use a greedy approach tracking the maximum reachable index as we iterate.
If we encounter an index greater than the current maximum reachable, we
cannot proceed and return False. Otherwise update the max reach and
continue.

Tags: Array, Greedy
"""

from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        """
        Determine if the last index is reachable from the first index.

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        max_reach = 0
        last_index = len(nums) - 1

        for i, jump in enumerate(nums):
            if i > max_reach:
                return False
            max_reach = max(max_reach, i + jump)
            if max_reach >= last_index:
                return True

        return max_reach >= last_index


# Test cases
test_cases = [
    {
        "input": {"nums": [2, 3, 1, 1, 4]},
        "expected": True
    },
    {
        "input": {"nums": [3, 2, 1, 0, 4]},
        "expected": False
    },
    {
        "input": {"nums": [0]},
        "expected": True
    },
    {
        "input": {"nums": [2, 0, 0]},
        "expected": True
    }
]
