"""
LeetCode Problem 15: 3sum

Difficulty: Medium
URL: https://leetcode.com/problems/3sum/

Problem Description:
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Approach:
Sort the array and use a two-pointer sweep for each fixed first element.

Tags: Array, Two Pointers, Sorting
"""

from typing import List, Optional, Dict


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        Return all unique triplets that sum to zero.

        Args:
            nums: List of integers

        Returns:
            List[List[int]]: List of triplets

        Time Complexity: O(n^2)
        Space Complexity: O(1) extra (excluding output)
        """
        nums.sort()
        result = []
        n = len(nums)

        for i in range(n - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            if nums[i] > 0:
                break

            left = i + 1
            right = n - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total == 0:
                    result.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif total < 0:
                    left += 1
                else:
                    right -= 1

        return result


# Test cases

test_cases = [
    {
        "input": {"nums": [-1, 0, 1, 2, -1, -4]},
        "expected": [[-1, -1, 2], [-1, 0, 1]]
    },
    {
        "input": {"nums": [0, 1, 1]},
        "expected": []
    },
    {
        "input": {"nums": [0, 0, 0, 0]},
        "expected": [[0, 0, 0]]
    }
]
