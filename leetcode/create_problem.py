#!/usr/bin/env python3
"""
LeetCode Problem Creator

Creates boilerplate code for new LeetCode problems with solution templates.
"""

import argparse
import os
import re
from typing import Dict, List, Optional


class ProblemTemplate:
    """Base template for LeetCode problems."""
    
    @staticmethod
    def get_template(problem_type: str = "array") -> str:
        templates = {
            "array": '''class Solution:
    def solutionMethod(self, nums: List[int]) -> int:
        """
        TODO: Implement your solution here
        
        Args:
            nums: List of integers
            
        Returns:
            int: Result
            
        Time Complexity: O(?)
        Space Complexity: O(?)
        """
        pass


# Test cases
test_cases = [
    {
        "input": {"nums": [1, 2, 3, 4]},
        "expected": 0  # TODO: Update expected result
    },
    {
        "input": {"nums": [5, 6, 7, 8]},
        "expected": 0  # TODO: Update expected result
    }
]''',
            
            "string": '''class Solution:
    def solutionMethod(self, s: str) -> str:
        """
        TODO: Implement your solution here
        
        Args:
            s: Input string
            
        Returns:
            str: Result string
            
        Time Complexity: O(?)
        Space Complexity: O(?)
        """
        pass


# Test cases
test_cases = [
    {
        "input": {"s": "example"},
        "expected": "result"  # TODO: Update expected result
    },
    {
        "input": {"s": "test"},
        "expected": "result"  # TODO: Update expected result
    }
]''',
            
            "tree": '''# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def solutionMethod(self, root: Optional[TreeNode]) -> int:
        """
        TODO: Implement your solution here
        
        Args:
            root: Root of binary tree
            
        Returns:
            int: Result
            
        Time Complexity: O(?)
        Space Complexity: O(?)
        """
        pass


# Helper function to create tree from list
def create_tree(values: List[Optional[int]]) -> Optional[TreeNode]:
    if not values:
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
        "expected": 0  # TODO: Update expected result
    },
    {
        "input": {"root": create_tree([1, None, 2])},
        "expected": 0  # TODO: Update expected result
    }
]''',
            
            "linkedlist": '''# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solutionMethod(self, head: Optional[ListNode]) -> Optional[ListNode]:
        """
        TODO: Implement your solution here
        
        Args:
            head: Head of linked list
            
        Returns:
            Optional[ListNode]: Result
            
        Time Complexity: O(?)
        Space Complexity: O(?)
        """
        pass


# Helper functions
def create_linked_list(values: List[int]) -> Optional[ListNode]:
    if not values:
        return None
    
    head = ListNode(values[0])
    current = head
    
    for val in values[1:]:
        current.next = ListNode(val)
        current = current.next
    
    return head


def linked_list_to_list(head: Optional[ListNode]) -> List[int]:
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result


# Test cases
test_cases = [
    {
        "input": {"head": create_linked_list([1, 2, 3, 4, 5])},
        "expected": linked_list_to_list(create_linked_list([5, 4, 3, 2, 1]))  # Example: reverse
    },
    {
        "input": {"head": create_linked_list([1, 2])},
        "expected": linked_list_to_list(create_linked_list([2, 1]))
    }
]''',
            
            "graph": '''class Solution:
    def solutionMethod(self, graph: List[List[int]]) -> List[int]:
        """
        TODO: Implement your solution here
        
        Args:
            graph: Adjacency list representation of graph
            
        Returns:
            List[int]: Result
            
        Time Complexity: O(?)
        Space Complexity: O(?)
        """
        pass


# Test cases
test_cases = [
    {
        "input": {"graph": [[1, 2], [3], [3], []]},
        "expected": []  # TODO: Update expected result
    },
    {
        "input": {"graph": [[1], [0]]},
        "expected": []  # TODO: Update expected result
    }
]''',
            
            "dp": '''class Solution:
    def solutionMethod(self, n: int) -> int:
        """
        TODO: Implement your solution here
        
        Args:
            n: Input parameter
            
        Returns:
            int: Result
            
        Time Complexity: O(?)
        Space Complexity: O(?)
        """
        # Approach 1: Recursive (Top-down)
        # memo = {}
        # return self.helper(n, memo)
        
        # Approach 2: Iterative (Bottom-up)
        pass
    
    def helper(self, n: int, memo: Dict[int, int]) -> int:
        """Helper function for recursive approach with memoization."""
        if n in memo:
            return memo[n]
        
        # Base cases
        if n <= 1:
            return n
        
        # Recursive relation
        memo[n] = self.helper(n-1, memo) + self.helper(n-2, memo)
        return memo[n]


# Test cases
test_cases = [
    {
        "input": {"n": 5},
        "expected": 0  # TODO: Update expected result
    },
    {
        "input": {"n": 10},
        "expected": 0  # TODO: Update expected result
    }
]'''
        }
        
        return templates.get(problem_type, templates["array"])


class LeetCodeProblemCreator:
    def __init__(self):
        self.base_path = os.path.dirname(os.path.abspath(__file__))
        self.problems_path = os.path.join(self.base_path, 'problems')
        self.ensure_directories()

    def ensure_directories(self):
        """Create necessary directories if they don't exist."""
        for difficulty in ['easy', 'medium', 'hard']:
            dir_path = os.path.join(self.problems_path, difficulty)
            os.makedirs(dir_path, exist_ok=True)

    def sanitize_name(self, name: str) -> str:
        """Convert problem name to valid filename."""
        # Remove special characters and replace spaces with hyphens
        name = re.sub(r'[^\w\s-]', '', name)
        name = re.sub(r'\s+', '-', name)
        return name.lower()

    def create_problem(self, number: int, name: str, difficulty: str, problem_type: str = "array") -> str:
        """Create a new problem file with template."""
        sanitized_name = self.sanitize_name(name)
        filename = f"{number:04d}_{sanitized_name}.py"
        file_path = os.path.join(self.problems_path, difficulty, filename)

        if os.path.exists(file_path):
            print(f"⚠️  Problem {number} already exists at {file_path}")
            return file_path

        # Get template content
        template_content = self.get_problem_header(number, name, difficulty) + \
                          ProblemTemplate.get_template(problem_type)

        # Write to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(template_content)

        print(f"✅ Created problem {number}: {name}")
        print(f"📁 File: {file_path}")
        print(f"🏷️  Difficulty: {difficulty}")
        print(f"📝 Template: {problem_type}")
        
        return file_path

    def get_problem_header(self, number: int, name: str, difficulty: str) -> str:
        """Generate problem header with metadata."""
        return f'''"""
LeetCode Problem {number}: {name}

Difficulty: {difficulty.title()}
URL: https://leetcode.com/problems/{self.sanitize_name(name)}/

Problem Description:
TODO: Add problem description here

Approach:
TODO: Describe your approach here

Tags: TODO: Add relevant tags (e.g., Array, Two Pointers, Dynamic Programming)
"""

from typing import List, Optional, Dict


'''

    def list_problems(self, difficulty: Optional[str] = None) -> Dict[str, List[str]]:
        """List all existing problems."""
        problems = {'easy': [], 'medium': [], 'hard': []}
        
        difficulties = [difficulty] if difficulty else ['easy', 'medium', 'hard']
        
        for diff in difficulties:
            dir_path = os.path.join(self.problems_path, diff)
            if os.path.exists(dir_path):
                files = [f for f in os.listdir(dir_path) if f.endswith('.py')]
                problems[diff] = sorted(files)
        
        return problems


def main():
    parser = argparse.ArgumentParser(description='Create new LeetCode problem files')
    parser.add_argument('--number', '-n', type=int, 
                       help='Problem number')
    parser.add_argument('--name', 
                       help='Problem name (e.g., "two-sum")')
    parser.add_argument('--difficulty', '-d', 
                       choices=['easy', 'medium', 'hard'],
                       help='Problem difficulty')
    parser.add_argument('--type', '-t', 
                       choices=['array', 'string', 'tree', 'linkedlist', 'graph', 'dp'],
                       default='array',
                       help='Problem type for template selection')
    parser.add_argument('--list', '-l', action='store_true',
                       help='List existing problems')

    args = parser.parse_args()

    creator = LeetCodeProblemCreator()

    if args.list:
        problems = creator.list_problems()
        for difficulty, files in problems.items():
            if files:
                print(f"\n{difficulty.upper()} Problems:")
                for file in files:
                    number = file.split('_')[0]
                    name = file.replace('.py', '').split('_', 1)[1]
                    print(f"  {number}: {name}")
    else:
        if not all([args.number, args.name, args.difficulty]):
            print("Error: --number, --name, and --difficulty are required when not using --list")
            parser.print_help()
            return
        creator.create_problem(args.number, args.name, args.difficulty, args.type)


if __name__ == '__main__':
    main()