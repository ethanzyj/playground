"""
LeetCode Problem 146: lru-cache

Difficulty: Medium
URL: https://leetcode.com/problems/lru-cache/

Problem Description:
Design an LRU cache with get and put in O(1) average time.

Approach:
Use OrderedDict to maintain access order.

Tags: Design, Hash Table, Linked List
"""

from typing import List, Optional, Dict, Any
from collections import OrderedDict


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.data: OrderedDict[int, int] = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.data:
            return -1
        value = self.data.pop(key)
        self.data[key] = value
        return value

    def put(self, key: int, value: int) -> None:
        if key in self.data:
            self.data.pop(key)
        elif len(self.data) == self.capacity:
            self.data.popitem(last=False)
        self.data[key] = value


class Solution:
    def lruCacheOperations(self, ops: List[str], values: List[List[int]]) -> List[Any]:
        """
        Execute LRU cache operations and return outputs.

        Args:
            ops: Operation names
            values: Operation arguments

        Returns:
            List[Any]: Outputs with None for void operations
        """
        cache: Optional[LRUCache] = None
        outputs: List[Any] = []

        for op, args in zip(ops, values):
            if op == "LRUCache":
                cache = LRUCache(args[0])
                outputs.append(None)
            elif op == "put":
                cache.put(args[0], args[1])  # type: ignore
                outputs.append(None)
            elif op == "get":
                outputs.append(cache.get(args[0]))  # type: ignore
            else:
                outputs.append(None)

        return outputs


# Test cases

test_cases = [
    {
        "input": {
            "ops": ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
            "values": [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
        },
        "expected": [None, None, None, 1, None, -1, None, -1, 3, 4]
    }
]
