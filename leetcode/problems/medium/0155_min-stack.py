"""
LeetCode Problem 155: min-stack

Difficulty: Medium
URL: https://leetcode.com/problems/min-stack/

Problem Description:
Design a stack that supports push, pop, top, and retrieving the minimum element in O(1).

Approach:
Store pairs (value, current_min) in the stack.

Tags: Stack, Design
"""

from typing import List, Optional, Dict, Any


class MinStack:
    def __init__(self):
        self.stack: List[tuple[int, int]] = []

    def push(self, val: int) -> None:
        if not self.stack:
            self.stack.append((val, val))
        else:
            current_min = self.stack[-1][1]
            self.stack.append((val, val if val < current_min else current_min))

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1][0]

    def getMin(self) -> int:
        return self.stack[-1][1]


class Solution:
    def minStackOperations(self, ops: List[str], values: List[List[int]]) -> List[Any]:
        """
        Execute MinStack operations and return outputs for each op.

        Args:
            ops: Operation names
            values: Arguments for each operation

        Returns:
            List[Any]: Outputs, using None for non-return operations
        """
        stack = MinStack()
        outputs: List[Any] = []

        for op, args in zip(ops, values):
            if op == "MinStack":
                stack = MinStack()
                outputs.append(None)
            elif op == "push":
                stack.push(args[0])
                outputs.append(None)
            elif op == "pop":
                stack.pop()
                outputs.append(None)
            elif op == "top":
                outputs.append(stack.top())
            elif op == "getMin":
                outputs.append(stack.getMin())
            else:
                outputs.append(None)

        return outputs


# Test cases

test_cases = [
    {
        "input": {
            "ops": ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
            "values": [[], [-2], [0], [-3], [], [], [], []]
        },
        "expected": [None, None, None, None, -3, None, 0, -2]
    }
]
