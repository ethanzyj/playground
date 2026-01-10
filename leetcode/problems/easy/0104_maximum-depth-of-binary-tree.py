"""
LeetCode Problem 104: maximum-depth-of-binary-tree

Difficulty: Easy
URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/

Problem Description:
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest 
path from the root node down to the farthest leaf node.

Approach:
Use recursive depth-first search. For each node, the maximum depth is 
1 + max(depth of left subtree, depth of right subtree).

Tags: Tree, Depth-First Search, Binary Tree
"""

from typing import List, Optional, Dict


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        """
        Calculate the maximum depth of a binary tree.
        
        Args:
            root: Root of binary tree
            
        Returns:
            int: Maximum depth of the tree
            
        Time Complexity: O(n) where n is the number of nodes
        Space Complexity: O(h) where h is the height of the tree (recursion stack)
        """
        if not root:
            return 0
        
        left_depth = self.maxDepth(root.left)
        right_depth = self.maxDepth(root.right)
        
        return 1 + max(left_depth, right_depth)


# Helper function to create tree from list
def create_tree(values: List[Optional[int]]) -> Optional[TreeNode]:
    if not values or values[0] is None:
        return None
    
    root = TreeNode(values[0])  # type: ignore
    queue = [root]
    i = 1
    
    while queue and i < len(values):
        node = queue.pop(0)
        
        if i < len(values) and values[i] is not None:
            node.left = TreeNode(values[i])  # type: ignore
            queue.append(node.left)
        i += 1
        
        if i < len(values) and values[i] is not None:
            node.right = TreeNode(values[i])  # type: ignore
            queue.append(node.right)
        i += 1
    
    return root


# Test cases
test_cases = [
    {
        "input": {"root": create_tree([3, 9, 20, None, None, 15, 7])},
        "expected": 3
    },
    {
        "input": {"root": create_tree([1, None, 2])},
        "expected": 2
    },
    {
        "input": {"root": create_tree([])},
        "expected": 0
    }
]