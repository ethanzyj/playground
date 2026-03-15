"""
LeetCode Problem 124: binary-tree-maximum-path-sum

Difficulty: Hard
URL: https://leetcode.com/problems/binary-tree-maximum-path-sum/

Problem Description:
Return the maximum path sum in a binary tree.

Approach:
DFS returning max gain from each node and tracking global max.

Tags: Tree, Depth-First Search, Dynamic Programming
"""

from typing import List, Optional, Dict


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        """
        Return the maximum path sum.

        Args:
            root: Root node

        Returns:
            int: Maximum path sum
        """
        best = float("-inf")

        def dfs(node: Optional[TreeNode]) -> int:
            nonlocal best
            if not node:
                return 0
            left_gain = max(dfs(node.left), 0)
            right_gain = max(dfs(node.right), 0)
            best = max(best, node.val + left_gain + right_gain)
            return node.val + max(left_gain, right_gain)

        dfs(root)
        return int(best)


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
        "input": {"root": create_tree([1, 2, 3])},
        "expected": 6
    },
    {
        "input": {"root": create_tree([-10, 9, 20, None, None, 15, 7])},
        "expected": 42
    }
]
