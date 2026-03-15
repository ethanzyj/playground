"""
LeetCode Problem 131: palindrome-partitioning

Difficulty: Medium
URL: https://leetcode.com/problems/palindrome-partitioning/

Problem Description:
Return all possible palindrome partitioning of a string.

Approach:
Backtracking with memoized palindrome checks.

Tags: String, Dynamic Programming, Backtracking
"""

from typing import List, Optional, Dict


class Solution:
    def partition(self, s: str) -> List[List[str]]:
        """
        Return all palindrome partitions.

        Args:
            s: Input string

        Returns:
            List[List[str]]: All partitions
        """
        n = len(s)
        memo: Dict[tuple[int, int], bool] = {}

        def is_pal(left: int, right: int) -> bool:
            key = (left, right)
            if key in memo:
                return memo[key]
            i, j = left, right
            while i < j:
                if s[i] != s[j]:
                    memo[key] = False
                    return False
                i += 1
                j -= 1
            memo[key] = True
            return True

        result: List[List[str]] = []
        path: List[str] = []

        def dfs(start: int) -> None:
            if start == n:
                result.append(path[:])
                return
            for end in range(start, n):
                if is_pal(start, end):
                    path.append(s[start:end + 1])
                    dfs(end + 1)
                    path.pop()

        dfs(0)
        return result


# Test cases

test_cases = [
    {
        "input": {"s": "aab"},
        "expected": [["a", "a", "b"], ["aa", "b"]]
    },
    {
        "input": {"s": "a"},
        "expected": [["a"]]
    }
]
