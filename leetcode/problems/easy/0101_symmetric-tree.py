"""
LeetCode Problem 101: symmetric-tree

Difficulty: Easy
URL: https://leetcode.com/problems/symmetric-tree/

Problem Description:
Return true if a binary tree is symmetric.

Approach:
Recursive mirror comparison.

Tags: Tree, Depth-First Search, Breadth-First Search
"""

from typing import List, Optional, Dict


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        """
        Check if a tree is symmetric.

        Args:
            root: Root node

        Returns:
            bool: True if symmetric
        """
        def is_mirror(left: Optional[TreeNode], right: Optional[TreeNode]) -> bool:
            if not left and not right:
                return True
            if not left or not right:
                return False
            return (
                left.val == right.val and
                is_mirror(left.left, right.right) and
                is_mirror(left.right, right.left)
            )

        return is_mirror(root, root)


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
        "input": {"root": create_tree([1, 2, 2, 3, 4, 4, 3])},
        "expected": True
    },
    {
        "input": {"root": create_tree([1, 2, 2, None, 3, None, 3])},
        "expected": False
    }
]
