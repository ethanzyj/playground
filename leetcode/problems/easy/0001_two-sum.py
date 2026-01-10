"""
LeetCode Problem 1: two-sum

Difficulty: Easy
URL: https://leetcode.com/problems/two-sum/

Problem Description:
Given an array of integers nums and an integer target, return indices of 
the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you 
may not use the same element twice.

You can return the answer in any order.

Approach:
Use a hash map to store the complement of each number as we iterate through 
the array. For each number, check if its complement (target - num) exists 
in the hash map.

Tags: Array, Hash Table
"""

from typing import List, Optional, Dict


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        Find two numbers in the array that add up to the target.
        
        Args:
            nums: List of integers
            target: Target sum
            
        Returns:
            List[int]: Indices of the two numbers
            
        Time Complexity: O(n)
        Space Complexity: O(n)
        """
        num_map = {}
        
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_map:
                return [num_map[complement], i]
            num_map[num] = i
        
        return []  # Should never reach here given problem constraints


# Test cases
test_cases = [
    {
        "input": {"nums": [2, 7, 11, 15], "target": 9},
        "expected": [0, 1]
    },
    {
        "input": {"nums": [3, 2, 4], "target": 6},
        "expected": [1, 2]
    },
    {
        "input": {"nums": [3, 3], "target": 6},
        "expected": [0, 1]
    }
]