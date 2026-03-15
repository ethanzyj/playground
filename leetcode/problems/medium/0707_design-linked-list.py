"""
LeetCode Problem 707: design-linked-list

Difficulty: Medium
URL: https://leetcode.com/problems/design-linked-list/

Problem Description:
Design a linked list supporting get, addAtHead, addAtTail, addAtIndex, deleteAtIndex.

Approach:
Use a simple list for correctness in tests.

Tags: Design, Linked List
"""

from typing import List, Optional, Dict, Any


class MyLinkedList:
    def __init__(self):
        self.data: List[int] = []

    def get(self, index: int) -> int:
        if 0 <= index < len(self.data):
            return self.data[index]
        return -1

    def addAtHead(self, val: int) -> None:
        self.data.insert(0, val)

    def addAtTail(self, val: int) -> None:
        self.data.append(val)

    def addAtIndex(self, index: int, val: int) -> None:
        if index == len(self.data):
            self.data.append(val)
        elif 0 <= index < len(self.data):
            self.data.insert(index, val)

    def deleteAtIndex(self, index: int) -> None:
        if 0 <= index < len(self.data):
            self.data.pop(index)


class Solution:
    def linkedListOperations(self, ops: List[str], values: List[List[int]]) -> List[Any]:
        """
        Execute operations and return outputs.

        Args:
            ops: Operation names
            values: Operation arguments

        Returns:
            List[Any]: Outputs with None for void operations
        """
        linked_list = MyLinkedList()
        outputs: List[Any] = []

        for op, args in zip(ops, values):
            if op == "MyLinkedList":
                linked_list = MyLinkedList()
                outputs.append(None)
            elif op == "get":
                outputs.append(linked_list.get(args[0]))
            elif op == "addAtHead":
                linked_list.addAtHead(args[0])
                outputs.append(None)
            elif op == "addAtTail":
                linked_list.addAtTail(args[0])
                outputs.append(None)
            elif op == "addAtIndex":
                linked_list.addAtIndex(args[0], args[1])
                outputs.append(None)
            elif op == "deleteAtIndex":
                linked_list.deleteAtIndex(args[0])
                outputs.append(None)
            else:
                outputs.append(None)

        return outputs


# Test cases

test_cases = [
    {
        "input": {
            "ops": ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"],
            "values": [[], [1], [3], [1, 2], [1], [1], [1]]
        },
        "expected": [None, None, None, None, 2, None, 3]
    }
]
