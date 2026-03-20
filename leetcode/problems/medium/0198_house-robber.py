"""
LeetCode Problem 198: house-robber

Difficulty: Medium
URL: https://leetcode.com/problems/house-robber/

Problem Description:
Given a list of non-negative integers representing the amount of money of each house,
return the maximum amount you can rob without robbing adjacent houses.

Approach:
Dynamic programming with rolling variables.

Tags: Array, Dynamic Programming
"""

from typing import List, Optional, Dict


class Solution:
    def rob(self, nums: List[int]) -> int:
        """
        Return the maximum amount that can be robbed.

        Args:
            nums: List of non-negative integers

        Returns:
            int: Maximum amount

        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        prev_two = 0
        prev_one = 0

        for amount in nums:
            current = max(prev_one, prev_two + amount)
            prev_two = prev_one
            prev_one = current

        return prev_one

    def rob_1(self, nums: List[int]) -> int:
        # dp stores previous n-2 best result, then dp[n] = dp[n-2] + nums[n]
        # the final answer should be dp[len(nums) - 2] or dp[len(nums) - 1]

        # dp[0] = nums[0]
        # dp[1] = nums[1]
        # dp[2] = dp[0] + nums[2]
        # dp[3] = max(nums[3] + dp[1], nums[3]  + dp[0])
        # dp[n] = max(nums[n] + dp[n-2], nums[n] + dp[n-3])

        if len(nums) == 1:
            return nums[0]

        if len(nums) == 2:
            return max(nums[0], nums[1])

        dp = [nums[0], nums[1], nums[0] + nums[2]]

        for index in range(3, len(nums)):
            dp.append(max(nums[index] + dp[index - 2], nums[index] + dp[index - 3]))

        return max(dp[len(nums) - 1], dp[len(nums) - 2])

# Test cases

test_cases = [
    {
        "input": {"nums": [1, 2, 3, 1]},
        "expected": 4
    },
    {
        "input": {"nums": [2, 7, 9, 3, 1]},
        "expected": 12
    },
    {
        "input": {"nums": [0]},
        "expected": 0
    }
]
