"""
LeetCode Problem 103: binary-tree-zigzag-level-order-traversal

Difficulty: Medium
URL: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

Problem Description:
Return the zigzag level order traversal of a binary tree.

Approach:
BFS by level, reversing order on alternating levels.

Tags: Tree, Breadth-First Search, Binary Tree
"""

from typing import List, Optional, Dict


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        """
        Return zigzag level order traversal.

        Args:
            root: Root node

        Returns:
            List[List[int]]: Level order in zigzag
        """
        if not root:
            return []

        result: List[List[int]] = []
        queue = [root]
        left_to_right = True

        while queue:
            level_values = []
            next_queue = []
            for node in queue:
                level_values.append(node.val)
                if node.left:
                    next_queue.append(node.left)
                if node.right:
                    next_queue.append(node.right)
            if not left_to_right:
                level_values.reverse()
            result.append(level_values)
            queue = next_queue
            left_to_right = not left_to_right

        return result


# Helper to build tree from list

def create_tree(values: List[Optional[int]]) -> Optional[TreeNode]:
    if not values or values[0] is None:
        return None

    root = TreeNode(values[0])
    queue = [root]
    i = 1

    while queue and i < len(values):
        node = queue.pop(0)
        if i < len(values) and values[i] is not None:
            node.left = TreeNode(values[i])
            queue.append(node.left)
        i += 1
        if i < len(values) and values[i] is not None:
            node.right = TreeNode(values[i])
            queue.append(node.right)
        i += 1

    return root


# Test cases

test_cases = [
    {
        "input": {"root": create_tree([3, 9, 20, None, None, 15, 7])},
        "expected": [[3], [20, 9], [15, 7]]
    },
    {
        "input": {"root": create_tree([1])},
        "expected": [[1]]
    },
    {
        "input": {"root": create_tree([])},
        "expected": []
    }
]
