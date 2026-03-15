"""
LeetCode Problem 994: rotting-oranges

Difficulty: Medium
URL: https://leetcode.com/problems/rotting-oranges/

Problem Description:
Return the minimum minutes until all oranges are rotten, or -1 if impossible.

Approach:
Multi-source BFS from all rotten oranges.

Tags: Array, Breadth-First Search, Matrix
"""

from typing import List, Optional, Dict
from collections import deque


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        """
        Return the minutes to rot all oranges.

        Args:
            grid: 2D grid

        Returns:
            int: Minutes or -1
        """
        rows = len(grid)
        cols = len(grid[0]) if rows else 0
        queue = deque()
        fresh = 0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 2:
                    queue.append((r, c))
                elif grid[r][c] == 1:
                    fresh += 1

        minutes = 0
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        while queue and fresh > 0:
            for _ in range(len(queue)):
                r, c = queue.popleft()
                for dr, dc in directions:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                        grid[nr][nc] = 2
                        fresh -= 1
                        queue.append((nr, nc))
            minutes += 1

        return minutes if fresh == 0 else -1


# Test cases

test_cases = [
    {
        "input": {"grid": [[2, 1, 1], [1, 1, 0], [0, 1, 1]]},
        "expected": 4
    },
    {
        "input": {"grid": [[2, 1, 1], [0, 1, 1], [1, 0, 1]]},
        "expected": -1
    },
    {
        "input": {"grid": [[0, 2]]},
        "expected": 0
    }
]
