"""
LeetCode Problem 200: number-of-islands

Difficulty: Medium
URL: https://leetcode.com/problems/number-of-islands/

Problem Description:
Given a 2D grid of '1's and '0's, count the number of islands.

Approach:
DFS to sink each island.

Tags: Depth-First Search, Breadth-First Search, Union Find, Matrix
"""

from typing import List, Optional, Dict


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        """
        Count the number of islands.

        Args:
            grid: 2D grid

        Returns:
            int: Island count
        """
        if not grid or not grid[0]:
            return 0

        rows = len(grid)
        cols = len(grid[0])
        count = 0

        def dfs(r: int, c: int) -> None:
            if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != "1":
                return
            grid[r][c] = "0"
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "1":
                    count += 1
                    dfs(r, c)

        return count


# Test cases

test_cases = [
    {
        "input": {
            "grid": [
                ["1", "1", "1", "1", "0"],
                ["1", "1", "0", "1", "0"],
                ["1", "1", "0", "0", "0"],
                ["0", "0", "0", "0", "0"]
            ]
        },
        "expected": 1
    },
    {
        "input": {
            "grid": [
                ["1", "1", "0", "0", "0"],
                ["1", "1", "0", "0", "0"],
                ["0", "0", "1", "0", "0"],
                ["0", "0", "0", "1", "1"]
            ]
        },
        "expected": 3
    }
]
