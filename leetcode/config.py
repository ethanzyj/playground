"""
Configuration settings for the LeetCode environment.
"""

import os
from typing import Dict, Any

# Base configuration
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROBLEMS_DIR = os.path.join(BASE_DIR, 'problems')
TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
UTILS_DIR = os.path.join(BASE_DIR, 'utils')
TESTS_DIR = os.path.join(BASE_DIR, 'tests')

# Test configuration
TEST_CONFIG = {
    'timeout': 5.0,  # Maximum execution time per test (seconds)
    'memory_limit': 256,  # Memory limit in MB (for monitoring)
    'show_performance_by_default': False,
    'colored_output': True,
    'verbose_errors': True
}

# Problem difficulties
DIFFICULTIES = ['easy', 'medium', 'hard']

# Problem types and their templates
PROBLEM_TYPES = {
    'array': 'Array manipulation problems',
    'string': 'String processing problems', 
    'tree': 'Binary tree problems',
    'linkedlist': 'Linked list problems',
    'graph': 'Graph traversal problems',
    'dp': 'Dynamic programming problems'
}

# Color codes for terminal output
COLORS = {
    'GREEN': '\033[92m',
    'RED': '\033[91m',
    'YELLOW': '\033[93m',
    'BLUE': '\033[94m',
    'PURPLE': '\033[95m',
    'CYAN': '\033[96m',
    'WHITE': '\033[97m',
    'BOLD': '\033[1m',
    'END': '\033[0m'
}

def get_color(color_name: str) -> str:
    """Get color code if colored output is enabled."""
    if TEST_CONFIG.get('colored_output', True):
        return COLORS.get(color_name.upper(), '')
    return ''

def print_colored(text: str, color: str = 'WHITE') -> None:
    """Print colored text to terminal."""
    color_code = get_color(color)
    end_code = get_color('END')
    print(f"{color_code}{text}{end_code}")