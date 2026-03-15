"""
LeetCode Problem 18: 4sum

Difficulty: Medium
URL: https://leetcode.com/problems/4sum/

Problem Description:
Find all unique quadruplets that sum to target.

Approach:
Sort and use two pointers with two loops. Return sorted results for stability.

Tags: Array, Two Pointers, Sorting
"""

from typing import List, Optional, Dict


class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        """
        Return all unique quadruplets.

        Args:
            nums: List of integers
            target: Target sum

        Returns:
            List[List[int]]: Quadruplets
        """
        nums.sort()
        n = len(nums)
        result: List[List[int]] = []

        for i in range(n - 3):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            for j in range(i + 1, n - 2):
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue
                left = j + 1
                right = n - 1
                while left < right:
                    total = nums[i] + nums[j] + nums[left] + nums[right]
                    if total == target:
                        result.append([nums[i], nums[j], nums[left], nums[right]])
                        left += 1
                        right -= 1
                        while left < right and nums[left] == nums[left - 1]:
                            left += 1
                        while left < right and nums[right] == nums[right + 1]:
                            right -= 1
                    elif total < target:
                        left += 1
                    else:
                        right -= 1

        return result


# Test cases

test_cases = [
    {
        "input": {"nums": [1, 0, -1, 0, -2, 2], "target": 0},
        "expected": [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
    },
    {
        "input": {"nums": [2, 2, 2, 2, 2], "target": 8},
        "expected": [[2, 2, 2, 2]]
    }
]
