"""
LeetCode Problem 238: product-of-array-except-self

Difficulty: Medium
URL: https://leetcode.com/problems/product-of-array-except-self/

Problem Description:
Return an array where each element is the product of all other elements.

Approach:
Prefix products then multiply by suffix products in a second pass.

Tags: Array, Prefix Sum
"""

from typing import List, Optional, Dict


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        """
        Return product of array except self.

        Args:
            nums: List of integers

        Returns:
            List[int]: Products

        Time Complexity: O(n)
        Space Complexity: O(1) extra (output excluded)
        """
        n = len(nums)
        result = [1] * n

        prefix = 1
        for i in range(n):
            result[i] = prefix
            prefix *= nums[i]

        suffix = 1
        for i in range(n - 1, -1, -1):
            result[i] *= suffix
            suffix *= nums[i]

        return result


# Test cases

test_cases = [
    {
        "input": {"nums": [1, 2, 3, 4]},
        "expected": [24, 12, 8, 6]
    },
    {
        "input": {"nums": [-1, 1, 0, -3, 3]},
        "expected": [0, 0, 9, 0, 0]
    }
]
