"""
LeetCode Problem 121: best-time-to-buy-and-sell-stock

Difficulty: Easy
URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Problem Description:
Return the maximum profit from a single buy and sell.

Approach:
Track minimum price and best profit.

Tags: Array, Dynamic Programming
"""

from typing import List, Optional, Dict


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        """
        Return the maximum profit.

        Args:
            prices: Daily prices

        Returns:
            int: Maximum profit
        """
        min_price = float("inf")
        best = 0
        for price in prices:
            if price < min_price:
                min_price = price
            else:
                best = max(best, price - min_price)
        return best


# Test cases

test_cases = [
    {
        "input": {"prices": [7, 1, 5, 3, 6, 4]},
        "expected": 5
    },
    {
        "input": {"prices": [7, 6, 4, 3, 1]},
        "expected": 0
    },
    {
        "input": {"prices": [2, 4, 1]},
        "expected": 2
    }
]
