"""
LeetCode Problem 85: maximal-rectangle

Difficulty: Hard
URL: https://leetcode.com/problems/maximal-rectangle/

Problem Description:
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Approach:
1. Transform the problem into multiple "Largest Rectangle in Histogram" problems
2. For each row, treat it as the base of histograms where heights represent consecutive 1's ending at current row
3. For each row, calculate the maximum rectangle area using stack-based histogram algorithm
4. Return the maximum area found across all rows

Tags: Array, Dynamic Programming, Stack, Matrix
"""

from typing import List, Optional, Dict


class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        """
        Find the largest rectangle containing only 1's in a binary matrix.
        
        Args:
            matrix: Binary matrix with '0' and '1' as strings
            
        Returns:
            int: Area of the largest rectangle
            
        Time Complexity: O(rows * cols) - process each cell once
        Space Complexity: O(cols) - for heights array and stack
        """
        if not matrix or not matrix[0]:
            return 0
        
        rows, cols = len(matrix), len(matrix[0])
        heights = [0] * cols
        max_area = 0
        
        for row in range(rows):
            # Update heights for current row
            for col in range(cols):
                if matrix[row][col] == '1':
                    heights[col] += 1
                else:
                    heights[col] = 0
            
            # Calculate max rectangle area for current histogram
            max_area = max(max_area, self._largest_rectangle_area(heights))
        
        return max_area
    
    def _largest_rectangle_area(self, heights: List[int]) -> int:
        """
        Helper function to find largest rectangle area in histogram.
        Uses stack to find rectangles efficiently.
        """
        stack = []
        max_area = 0
        index = 0
        
        while index < len(heights):
            # If current height is greater than stack top, push it
            if not stack or heights[index] >= heights[stack[-1]]:
                stack.append(index)
                index += 1
            else:
                # Pop from stack and calculate area
                top = stack.pop()
                width = index if not stack else index - stack[-1] - 1
                area = heights[top] * width
                max_area = max(max_area, area)
        
        # Process remaining heights in stack
        while stack:
            top = stack.pop()
            width = index if not stack else index - stack[-1] - 1
            area = heights[top] * width
            max_area = max(max_area, area)
        
        return max_area


# Test cases
test_cases = [
    {
        "input": {
            "matrix": [
                ["1","0","1","0","0"],
                ["1","0","1","1","1"],
                ["1","1","1","1","1"],
                ["1","0","0","1","0"]
            ]
        },
        "expected": 6  # Rectangle from (1,2) to (2,4)
    },
    {
        "input": {
            "matrix": [["0"]]
        },
        "expected": 0  # Single 0
    },
    {
        "input": {
            "matrix": [["1"]]
        },
        "expected": 1  # Single 1
    },
    {
        "input": {
            "matrix": [
                ["1","1","1","1"],
                ["1","1","1","1"],
                ["1","1","1","1"]
            ]
        },
        "expected": 12  # Entire 3x4 matrix
    }
]