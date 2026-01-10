"""
LeetCode Problem 84: largest-rectangle-in-histogram

Difficulty: Hard
URL: https://leetcode.com/problems/largest-rectangle-in-histogram/

Problem Description:
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Approach:
Use a stack-based approach to efficiently find the largest rectangle:
1. Iterate through the histogram bars
2. Use stack to keep track of bar indices in increasing height order
3. When we find a bar shorter than the stack top, calculate area using the popped bar as height
4. The width is determined by the current position and the new stack top
5. Keep track of the maximum area found

Tags: Array, Stack, Monotonic Stack
"""

from typing import List, Optional, Dict


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        """
        Find the area of the largest rectangle in histogram.
        
        Args:
            heights: List of bar heights in the histogram
            
        Returns:
            int: Area of the largest rectangle
            
        Time Complexity: O(n) - each bar is pushed and popped at most once
        Space Complexity: O(n) - stack space in worst case
        """
        stack = []  # Stack to store indices
        max_area = 0
        index = 0
        
        while index < len(heights):
            # If current bar is higher than stack top, push it
            if not stack or heights[index] >= heights[stack[-1]]:
                stack.append(index)
                index += 1
            else:
                # Pop from stack and calculate area with popped bar as smallest
                top = stack.pop()
                
                # Calculate width:
                # - If stack is empty, width is current index
                # - Otherwise, width is distance between current index and new stack top
                width = index if not stack else index - stack[-1] - 1
                
                # Calculate area with heights[top] as the height
                area = heights[top] * width
                max_area = max(max_area, area)
        
        # Process remaining bars in stack
        while stack:
            top = stack.pop()
            width = index if not stack else index - stack[-1] - 1
            area = heights[top] * width
            max_area = max(max_area, area)
        
        return max_area


# Test cases
test_cases = [
    {
        "input": {"heights": [2, 1, 5, 6, 2, 3]},
        "expected": 10  # Rectangle with height 5 and width 2 (indices 2-3)
    },
    {
        "input": {"heights": [2, 4]},
        "expected": 4  # Rectangle with height 2 and width 2, or height 4 and width 1
    },
    {
        "input": {"heights": [1]},
        "expected": 1  # Single bar
    },
    {
        "input": {"heights": [0, 2, 0]},
        "expected": 2  # Middle bar with height 2
    },
    {
        "input": {"heights": [2, 1, 2]},
        "expected": 3  # Rectangle with height 1 and width 3
    },
    {
        "input": {"heights": [1, 2, 3, 4, 5]},
        "expected": 9  # Rectangle with height 3 and width 3 (indices 2-4)
    }
]