"""
LeetCode Problem 215: kth-largest-element-in-an-array

Difficulty: Medium
URL: https://leetcode.com/problems/kth-largest-element-in-an-array/

Problem Description:
Return the kth largest element in an array.

Approach:
Use a min-heap of size k.

Tags: Array, Heap
"""

from typing import List, Optional, Dict
import heapq


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        """
        Return the kth largest element.

        Args:
            nums: List of integers
            k: Rank

        Returns:
            int: kth largest
        """
        heap: List[int] = []
        for num in nums:
            if len(heap) < k:
                heapq.heappush(heap, num)
            else:
                if num > heap[0]:
                    heapq.heapreplace(heap, num)
        return heap[0]


# Test cases

test_cases = [
    {
        "input": {"nums": [3, 2, 1, 5, 6, 4], "k": 2},
        "expected": 5
    },
    {
        "input": {"nums": [3, 2, 3, 1, 2, 4, 5, 5, 6], "k": 4},
        "expected": 4
    }
]
