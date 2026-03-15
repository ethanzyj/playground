"""
LeetCode Problem 138: copy-list-with-random-pointer

Difficulty: Medium
URL: https://leetcode.com/problems/copy-list-with-random-pointer/

Problem Description:
Return a deep copy of a linked list where each node has next and random pointers.

Approach:
Use a hash map from old nodes to new nodes.

Tags: Hash Table, Linked List
"""

from typing import List, Optional, Dict, Any


class Node:
    def __init__(self, val: int = 0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random


class Solution:
    def copyRandomList(self, head: Optional[Node]) -> List[List[Optional[int]]]:
        """
        Return a deep copy as a list representation for testing.

        Args:
            head: Head of the list

        Returns:
            List[List[Optional[int]]]: [[val, random_index], ...]
        """
        if not head:
            return []

        old_to_new: Dict[Node, Node] = {}
        current = head
        while current:
            old_to_new[current] = Node(current.val)
            current = current.next

        current = head
        while current:
            node = old_to_new[current]
            node.next = old_to_new.get(current.next)
            node.random = old_to_new.get(current.random)
            current = current.next

        return random_list_to_repr(old_to_new[head])


def create_random_list(values: List[List[Optional[int]]]) -> Optional[Node]:
    if not values:
        return None

    nodes = [Node(val) for val, _ in values]
    for i, (_, random_index) in enumerate(values):
        if i + 1 < len(nodes):
            nodes[i].next = nodes[i + 1]
        if random_index is not None:
            nodes[i].random = nodes[random_index]
    return nodes[0]


def random_list_to_repr(head: Optional[Node]) -> List[List[Optional[int]]]:
    if not head:
        return []

    nodes = []
    index_map: Dict[Node, int] = {}
    current = head
    while current:
        index_map[current] = len(nodes)
        nodes.append(current)
        current = current.next

    result: List[List[Optional[int]]] = []
    for node in nodes:
        rand_idx = index_map.get(node.random) if node.random else None
        result.append([node.val, rand_idx])
    return result


# Test cases

test_cases = [
    {
        "input": {"head": create_random_list([[7, None], [13, 0], [11, 4], [10, 2], [1, 0]])},
        "expected": [[7, None], [13, 0], [11, 4], [10, 2], [1, 0]]
    },
    {
        "input": {"head": create_random_list([[1, 1], [2, 1]])},
        "expected": [[1, 1], [2, 1]]
    },
    {
        "input": {"head": create_random_list([[3, None], [3, 0], [3, None]])},
        "expected": [[3, None], [3, 0], [3, None]]
    }
]
