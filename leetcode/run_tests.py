#!/usr/bin/env python3
"""
LeetCode Test Runner

A comprehensive test runner for LeetCode problems with performance analysis.
"""

import argparse
import importlib.util
import os
import sys
import time
import traceback
from typing import Any, Dict, List, Optional, Tuple
import json


class TestResult:
    def __init__(self, problem_num: int, problem_name: str):
        self.problem_num = problem_num
        self.problem_name = problem_name
        self.passed = 0
        self.failed = 0
        self.errors = []
        self.execution_times = []
        self.total_time = 0.0

    def add_test_result(self, passed: bool, execution_time: float = 0.0, error: str = None):
        if passed:
            self.passed += 1
        else:
            self.failed += 1
            if error:
                self.errors.append(error)
        
        self.execution_times.append(execution_time)
        self.total_time += execution_time

    def success_rate(self) -> float:
        total = self.passed + self.failed
        return (self.passed / total * 100) if total > 0 else 0.0

    def average_time(self) -> float:
        return sum(self.execution_times) / len(self.execution_times) if self.execution_times else 0.0


class LeetCodeTestRunner:
    def __init__(self):
        self.base_path = os.path.dirname(os.path.abspath(__file__))
        self.problems_path = os.path.join(self.base_path, 'problems')
        self.results = []

    def find_problem_file(self, problem_num: int, difficulty: str = None) -> Optional[Tuple[str, str]]:
        """Find the solution file for a given problem number."""
        difficulties = ['easy', 'medium', 'hard'] if not difficulty else [difficulty]
        
        for diff in difficulties:
            diff_path = os.path.join(self.problems_path, diff)
            if not os.path.exists(diff_path):
                continue
                
            for filename in os.listdir(diff_path):
                if filename.startswith(f"{problem_num:04d}_") and filename.endswith('.py'):
                    return os.path.join(diff_path, filename), diff
        
        return None

    def load_problem_module(self, file_path: str):
        """Dynamically load a problem module."""
        spec = importlib.util.spec_from_file_location("solution", file_path)
        if spec is None or spec.loader is None:
            raise ImportError(f"Could not load module from {file_path}")
        
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        return module

    def run_single_test(self, solution_method, test_case: Dict[str, Any]) -> Tuple[bool, float, str]:
        """Run a single test case and return (passed, execution_time, error_message)."""
        try:
            inputs = test_case['input']
            expected = test_case['expected']
            
            start_time = time.perf_counter()
            
            # Handle different input formats
            if isinstance(inputs, dict):
                result = solution_method(**inputs)
            elif isinstance(inputs, list):
                result = solution_method(*inputs)
            else:
                result = solution_method(inputs)
            
            end_time = time.perf_counter()
            execution_time = end_time - start_time
            
            # Compare results
            if result == expected:
                return True, execution_time, ""
            else:
                error_msg = f"Expected: {expected}, Got: {result}"
                return False, execution_time, error_msg
                
        except Exception as e:
            return False, 0.0, f"Runtime Error: {str(e)}"

    def run_problem_tests(self, problem_num: int, difficulty: str = None, show_performance: bool = False) -> TestResult:
        """Run all tests for a specific problem."""
        file_info = self.find_problem_file(problem_num, difficulty)
        if not file_info:
            print(f"❌ Problem {problem_num} not found")
            return None

        file_path, found_difficulty = file_info
        problem_name = os.path.basename(file_path).split('_', 1)[1].replace('.py', '')
        
        print(f"\n🧪 Testing Problem {problem_num}: {problem_name} ({found_difficulty})")
        print("=" * 60)

        try:
            # Load the problem module
            module = self.load_problem_module(file_path)
            
            # Find the solution class
            solution_class = getattr(module, 'Solution', None)
            if not solution_class:
                print("❌ No Solution class found")
                return None

            # Find test cases
            test_cases = getattr(module, 'test_cases', [])
            if not test_cases:
                print("⚠️  No test cases found")
                return None

            # Initialize test result
            result = TestResult(problem_num, problem_name)
            solution_instance = solution_class()

            # Find the main solution method (usually the first public method)
            solution_methods = [method for method in dir(solution_instance) 
                             if not method.startswith('_') and callable(getattr(solution_instance, method))]
            
            if not solution_methods:
                print("❌ No solution method found")
                return None

            main_method = getattr(solution_instance, solution_methods[0])

            # Run each test case
            for i, test_case in enumerate(test_cases, 1):
                passed, exec_time, error = self.run_single_test(main_method, test_case)
                result.add_test_result(passed, exec_time, error)
                
                status = "✅" if passed else "❌"
                time_str = f"({exec_time*1000:.2f}ms)" if show_performance else ""
                
                print(f"  Test {i}: {status} {time_str}")
                if not passed and error:
                    print(f"    Error: {error}")

            # Print summary
            print(f"\n📊 Results: {result.passed}/{result.passed + result.failed} passed " +
                  f"({result.success_rate():.1f}%)")
            
            if show_performance:
                print(f"⏱️  Average execution time: {result.average_time()*1000:.2f}ms")
                print(f"🕐 Total execution time: {result.total_time*1000:.2f}ms")

            return result

        except Exception as e:
            print(f"❌ Error loading problem: {str(e)}")
            traceback.print_exc()
            return None

    def run_all_tests(self, difficulty: str = None, show_performance: bool = False):
        """Run tests for all problems."""
        print("🚀 Running all LeetCode tests...")
        
        difficulties = ['easy', 'medium', 'hard'] if not difficulty else [difficulty]
        total_results = []

        for diff in difficulties:
            diff_path = os.path.join(self.problems_path, diff)
            if not os.path.exists(diff_path):
                continue

            print(f"\n📁 Testing {diff.upper()} problems...")
            
            for filename in sorted(os.listdir(diff_path)):
                if filename.endswith('.py') and filename[0].isdigit():
                    problem_num = int(filename.split('_')[0])
                    result = self.run_problem_tests(problem_num, diff, show_performance)
                    if result:
                        total_results.append(result)

        # Print overall summary
        if total_results:
            print("\n" + "="*60)
            print("📈 OVERALL SUMMARY")
            print("="*60)
            
            total_passed = sum(r.passed for r in total_results)
            total_failed = sum(r.failed for r in total_results)
            overall_rate = (total_passed / (total_passed + total_failed) * 100) if (total_passed + total_failed) > 0 else 0
            
            print(f"Problems tested: {len(total_results)}")
            print(f"Total tests: {total_passed + total_failed}")
            print(f"Success rate: {overall_rate:.1f}%")
            
            if show_performance:
                avg_time = sum(r.average_time() for r in total_results) / len(total_results)
                print(f"Average execution time: {avg_time*1000:.2f}ms")


def main():
    parser = argparse.ArgumentParser(description='LeetCode Test Runner')
    parser.add_argument('--problem', '-p', type=int, help='Run tests for specific problem number')
    parser.add_argument('--difficulty', '-d', choices=['easy', 'medium', 'hard'], 
                       help='Filter by difficulty level')
    parser.add_argument('--all', '-a', action='store_true', help='Run all tests')
    parser.add_argument('--performance', action='store_true', help='Show performance metrics')

    args = parser.parse_args()

    runner = LeetCodeTestRunner()

    if args.problem:
        runner.run_problem_tests(args.problem, args.difficulty, args.performance)
    elif args.all:
        runner.run_all_tests(args.difficulty, args.performance)
    else:
        print("Please specify --problem <number> or --all")
        print("Use --help for more options")


if __name__ == '__main__':
    main()