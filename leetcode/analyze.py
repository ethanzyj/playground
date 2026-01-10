#!/usr/bin/env python3
"""
Performance analyzer for LeetCode solutions.

Provides detailed analysis of solution performance and statistics.
"""

import argparse
import json
import os
import time
from typing import Dict, List, Any, Optional
from run_tests import LeetCodeTestRunner


class PerformanceAnalyzer:
    def __init__(self):
        self.runner = LeetCodeTestRunner()
        self.base_path = os.path.dirname(os.path.abspath(__file__))

    def analyze_problem(self, problem_num: int, runs: int = 10) -> Dict[str, Any]:
        """Analyze performance of a specific problem with multiple runs."""
        print(f"🔍 Analyzing Problem {problem_num} with {runs} runs...")
        
        execution_times = []
        success_rates = []
        
        for i in range(runs):
            result = self.runner.run_problem_tests(problem_num, show_performance=False)
            if result:
                execution_times.append(result.total_time)
                success_rates.append(result.success_rate())
            
            if (i + 1) % (runs // 4) == 0:
                print(f"  Progress: {i + 1}/{runs} runs completed")
        
        if not execution_times:
            return {"error": "No successful runs"}
        
        # Calculate statistics
        avg_time = sum(execution_times) / len(execution_times)
        min_time = min(execution_times)
        max_time = max(execution_times)
        avg_success = sum(success_rates) / len(success_rates)
        
        return {
            "problem_number": problem_num,
            "runs": runs,
            "average_time_ms": avg_time * 1000,
            "min_time_ms": min_time * 1000,
            "max_time_ms": max_time * 1000,
            "average_success_rate": avg_success,
            "total_tests": len(execution_times),
            "all_times_ms": [t * 1000 for t in execution_times]
        }

    def compare_problems(self, problem_nums: List[int]) -> None:
        """Compare performance across multiple problems."""
        print(f"\n🏁 Comparing {len(problem_nums)} problems...")
        
        results = []
        for num in problem_nums:
            result = self.analyze_problem(num, runs=5)
            if "error" not in result:
                results.append(result)
        
        if not results:
            print("❌ No successful analyses")
            return
        
        # Sort by average time
        results.sort(key=lambda x: x["average_time_ms"])
        
        print(f"\n📊 PERFORMANCE COMPARISON")
        print("=" * 70)
        print(f"{'Problem':<10} {'Avg Time':<12} {'Min Time':<12} {'Max Time':<12} {'Success':<10}")
        print("-" * 70)
        
        for result in results:
            print(f"{result['problem_number']:<10} "
                  f"{result['average_time_ms']:.3f}ms{'':<4} "
                  f"{result['min_time_ms']:.3f}ms{'':<4} "
                  f"{result['max_time_ms']:.3f}ms{'':<4} "
                  f"{result['average_success_rate']:.1f}%")
        
        # Find fastest and slowest
        fastest = results[0]
        slowest = results[-1]
        
        print(f"\n🚀 Fastest: Problem {fastest['problem_number']} "
              f"({fastest['average_time_ms']:.3f}ms avg)")
        print(f"🐌 Slowest: Problem {slowest['problem_number']} "
              f"({slowest['average_time_ms']:.3f}ms avg)")
        
        if len(results) > 1:
            speedup = slowest['average_time_ms'] / fastest['average_time_ms']
            print(f"⚡ Speedup: {speedup:.1f}x faster")

    def analyze_complexity(self, problem_num: int, input_sizes: List[int]) -> None:
        """Analyze time complexity by testing with different input sizes."""
        print(f"\n📈 Complexity Analysis for Problem {problem_num}")
        print("Note: This requires manual input generation")
        print("Current implementation focuses on existing test cases")
        
        # This would require generating test cases of different sizes
        # For now, we'll show how it could be extended
        result = self.analyze_problem(problem_num, runs=10)
        if "error" not in result:
            print(f"Average execution time: {result['average_time_ms']:.3f}ms")
            print("💡 To analyze complexity, implement input generators for your specific problem")

    def generate_report(self, problem_nums: List[int], output_file: Optional[str] = None) -> None:
        """Generate a detailed performance report."""
        print("📋 Generating performance report...")
        
        report = {
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "problems_analyzed": len(problem_nums),
            "results": []
        }
        
        for num in problem_nums:
            result = self.analyze_problem(num, runs=10)
            if "error" not in result:
                report["results"].append(result)
        
        if output_file:
            with open(output_file, 'w') as f:
                json.dump(report, f, indent=2)
            print(f"📄 Report saved to {output_file}")
        else:
            print("\n📊 PERFORMANCE REPORT")
            print("=" * 50)
            print(f"Generated: {report['timestamp']}")
            print(f"Problems analyzed: {report['problems_analyzed']}")
            
            for result in report["results"]:
                print(f"\nProblem {result['problem_number']}:")
                print(f"  Average time: {result['average_time_ms']:.3f}ms")
                print(f"  Success rate: {result['average_success_rate']:.1f}%")


def main():
    parser = argparse.ArgumentParser(description='Analyze LeetCode solution performance')
    parser.add_argument('--problem', '-p', type=int, 
                       help='Analyze specific problem')
    parser.add_argument('--compare', '-c', nargs='+', type=int,
                       help='Compare multiple problems (space-separated)')
    parser.add_argument('--runs', '-r', type=int, default=10,
                       help='Number of runs for analysis (default: 10)')
    parser.add_argument('--report', action='store_true',
                       help='Generate detailed report')
    parser.add_argument('--output', '-o', type=str,
                       help='Output file for report (JSON format)')
    parser.add_argument('--all', '-a', action='store_true',
                       help='Analyze all available problems')

    args = parser.parse_args()

    analyzer = PerformanceAnalyzer()

    if args.problem:
        result = analyzer.analyze_problem(args.problem, args.runs)
        if "error" not in result:
            print(f"\n📊 ANALYSIS RESULTS")
            print("=" * 30)
            print(f"Problem: {result['problem_number']}")
            print(f"Runs: {result['runs']}")
            print(f"Average time: {result['average_time_ms']:.3f}ms")
            print(f"Min time: {result['min_time_ms']:.3f}ms")
            print(f"Max time: {result['max_time_ms']:.3f}ms")
            print(f"Success rate: {result['average_success_rate']:.1f}%")
        else:
            print(f"❌ Analysis failed: {result['error']}")

    elif args.compare:
        analyzer.compare_problems(args.compare)

    elif args.all:
        # Find all problems
        problems = []
        for difficulty in ['easy', 'medium', 'hard']:
            dir_path = os.path.join(analyzer.base_path, 'problems', difficulty)
            if os.path.exists(dir_path):
                for filename in os.listdir(dir_path):
                    if filename.endswith('.py') and filename[0].isdigit():
                        problem_num = int(filename.split('_')[0])
                        problems.append(problem_num)
        
        if problems:
            if args.report:
                analyzer.generate_report(problems, args.output)
            else:
                analyzer.compare_problems(problems)
        else:
            print("❌ No problems found")

    else:
        print("Please specify --problem, --compare, or --all")
        print("Use --help for more options")


if __name__ == '__main__':
    main()