#!/usr/bin/env python3
"""
Quick setup script for the LeetCode environment.
"""

import os
import stat
import sys


def make_executable(file_path: str):
    """Make a file executable."""
    current_mode = os.stat(file_path).st_mode
    os.chmod(file_path, current_mode | stat.S_IXUSR | stat.S_IXGRP | stat.S_IXOTH)


def main():
    """Set up the LeetCode environment."""
    print("🚀 Setting up LeetCode environment...")
    
    # Get the directory of this script
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Make scripts executable
    scripts = ['run_tests.py', 'create_problem.py', 'setup.py']
    
    for script in scripts:
        script_path = os.path.join(base_dir, script)
        if os.path.exists(script_path):
            make_executable(script_path)
            print(f"✅ Made {script} executable")
    
    # Create __init__.py files for Python packages
    dirs_needing_init = ['utils', 'templates', 'tests']
    
    for dir_name in dirs_needing_init:
        dir_path = os.path.join(base_dir, dir_name)
        if os.path.exists(dir_path):
            init_file = os.path.join(dir_path, '__init__.py')
            if not os.path.exists(init_file):
                with open(init_file, 'w') as f:
                    f.write(f'"""\\n{dir_name.title()} package for LeetCode environment.\\n"""\\n')
                print(f"✅ Created __init__.py in {dir_name}/")
    
    print("\\n🎉 Setup complete!")
    print("\\n📚 Quick start:")
    print("  1. Create a problem: python create_problem.py --number 1 --name 'two-sum' --difficulty easy")
    print("  2. Run tests: python run_tests.py --problem 1")
    print("  3. Run all tests: python run_tests.py --all")
    print("\\n📖 See README.md for detailed usage instructions.")


if __name__ == '__main__':
    main()