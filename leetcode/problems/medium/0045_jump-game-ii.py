"""
LeetCode Problem 45: jump-game-ii

Difficulty: Medium
URL: https://leetcode.com/problems/jump-game-ii/

Problem Description:
Given an array of non-negative integers nums, you are initially positioned at the first index.
Each element represents your maximum jump length at that position.
Return the minimum number of jumps to reach the last index.

Approach:
Greedy. Track the farthest index reachable in the current jump range. When we
reach the end of the current range, we must take another jump and extend the range.

Tags: Array, Greedy, Dynamic Programming
"""

from typing import List, Optional, Dict


class Solution:
    def jump(self, nums: List[int]) -> int:
        """
        Return the minimum number of jumps to reach the last index.

        Args:
            nums: List of non-negative integers

        Returns:
            int: Minimum jumps required

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        n = len(nums)
        if n <= 1:
            return 0

        jumps = 0
        current_end = 0
        farthest = 0

        for i in range(n - 1):
            farthest = max(farthest, i + nums[i])
            if i == current_end:
                jumps += 1
                current_end = farthest

        return jumps


# Test cases
# Note: The problem guarantees reachability.

test_cases = [
    {
        "input": {"nums": [2, 3, 1, 1, 4]},
        "expected": 2
    },
    {
        "input": {"nums": [2, 3, 0, 1, 4]},
        "expected": 2
    },
    {
        "input": {"nums": [1]},
        "expected": 0
    }
]
