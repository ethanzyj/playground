"""
LeetCode Problem 31: next-permutation

Difficulty: Medium
URL: https://leetcode.com/problems/next-permutation/

Problem Description:
Rearrange numbers into the next lexicographically greater permutation.

Approach:
Find pivot, swap with next larger element, then reverse suffix.
Return nums for testing.

Tags: Array, Two Pointers
"""

from typing import List, Optional, Dict


class Solution:
    def nextPermutation(self, nums: List[int]) -> List[int]:
        """
        Modify nums in-place and return it.

        Args:
            nums: List of integers

        Returns:
            List[int]: Next permutation
        """
        n = len(nums)
        i = n - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1

        if i >= 0:
            j = n - 1
            while nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]

        left = i + 1
        right = n - 1
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1

        return nums


# Test cases

test_cases = [
    {
        "input": {"nums": [1, 2, 3]},
        "expected": [1, 3, 2]
    },
    {
        "input": {"nums": [3, 2, 1]},
        "expected": [1, 2, 3]
    },
    {
        "input": {"nums": [1, 1, 5]},
        "expected": [1, 5, 1]
    }
]
