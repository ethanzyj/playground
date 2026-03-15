"""
LeetCode Problem 88: merge-sorted-array

Difficulty: Easy
URL: https://leetcode.com/problems/merge-sorted-array/

Problem Description:
Merge nums2 into nums1 in-place so that nums1 is sorted.

Approach:
Two pointers from the end to avoid overwriting.

Tags: Array, Two Pointers, Sorting
"""

from typing import List, Optional, Dict


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> List[int]:
        """
        Merge nums2 into nums1 and return nums1 for testing.

        Args:
            nums1: First array with extra space
            m: Number of valid elements in nums1
            nums2: Second array
            n: Number of elements in nums2

        Returns:
            List[int]: Merged array

        Time Complexity: O(m + n)
        Space Complexity: O(1)
        """
        i = m - 1
        j = n - 1
        k = m + n - 1

        while j >= 0:
            if i >= 0 and nums1[i] > nums2[j]:
                nums1[k] = nums1[i]
                i -= 1
            else:
                nums1[k] = nums2[j]
                j -= 1
            k -= 1

        return nums1


# Test cases

test_cases = [
    {
        "input": {"nums1": [1, 2, 3, 0, 0, 0], "m": 3, "nums2": [2, 5, 6], "n": 3},
        "expected": [1, 2, 2, 3, 5, 6]
    },
    {
        "input": {"nums1": [1], "m": 1, "nums2": [], "n": 0},
        "expected": [1]
    },
    {
        "input": {"nums1": [0], "m": 0, "nums2": [1], "n": 1},
        "expected": [1]
    }
]
