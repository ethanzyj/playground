# LeetCode Practice Environment

A comprehensive environment for solving LeetCode problems with automated testing and performance analysis.

## Directory Structure

```
leetcode/
├── problems/           # Individual problem solutions
│   ├── easy/          # Easy difficulty problems
│   ├── medium/        # Medium difficulty problems
│   └── hard/          # Hard difficulty problems
├── utils/             # Helper utilities and data structures
├── tests/             # Test framework (future expansion)
├── run_tests.py       # Main test runner
├── create_problem.py  # Problem generator
├── analyze.py         # Performance analyzer
└── setup.py          # Environment setup
```

## Quick Start

### 1. Setup Environment
```bash
python setup.py
```

### 2. Create a New Problem
```bash
# Basic problem creation
python create_problem.py --number 1 --name "two-sum" --difficulty easy

# With specific template type
python create_problem.py --number 146 --name "lru-cache" --difficulty medium --type linkedlist

# Available types: array, string, tree, linkedlist, graph, dp
```

### 3. Implement Your Solution
Edit the generated file in `problems/{difficulty}/{number}_{name}.py`:
- Replace the `TODO` comments with problem description
- Implement your solution in the main method
- Update the test cases with proper inputs and expected outputs

### 4. Test Your Solution
```bash
# Test specific problem
python run_tests.py --problem 1

# Test with performance metrics
python run_tests.py --problem 1 --performance

# Test all problems
python run_tests.py --all

# Test specific difficulty
python run_tests.py --difficulty easy --all
```

## Advanced Features

### Performance Analysis
```bash
# Analyze single problem with multiple runs
python analyze.py --problem 1 --runs 50

# Compare multiple problems
python analyze.py --compare 1 104 206

# Analyze all problems
python analyze.py --all

# Generate detailed JSON report
python analyze.py --all --report --output performance_report.json
```

### List Existing Problems
```bash
# List all problems
python create_problem.py --list
```

## Features

✅ **Quick Setup**: Templates for common problem types  
✅ **Automated Testing**: Run tests with detailed output  
✅ **Performance Analysis**: Time complexity analysis with multiple runs  
✅ **Organized Structure**: Problems sorted by difficulty  
✅ **Utilities**: Common data structures (LinkedList, TreeNode, etc.)  
✅ **Type Safety**: Full type hints and error checking  
✅ **Extensible**: Easy to add new problem types and templates  

## Problem Templates

### Array Problems
```python
class Solution:
    def solutionMethod(self, nums: List[int]) -> int:
        # Your implementation here
        pass
```

### Tree Problems
```python
class Solution:
    def solutionMethod(self, root: Optional[TreeNode]) -> int:
        # Your implementation here
        pass
```

### Linked List Problems
```python
class Solution:
    def solutionMethod(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Your implementation here
        pass
```

## Example Workflow

1. **Create Problem**:
   ```bash
   python create_problem.py --number 121 --name "best-time-to-buy-and-sell-stock" --difficulty easy --type array
   ```

2. **Implement Solution**:
   ```python
   class Solution:
       def maxProfit(self, prices: List[int]) -> int:
           if not prices:
               return 0
           
           min_price = prices[0]
           max_profit = 0
           
           for price in prices[1:]:
               if price < min_price:
                   min_price = price
               else:
                   max_profit = max(max_profit, price - min_price)
           
           return max_profit
   ```

3. **Add Test Cases**:
   ```python
   test_cases = [
       {
           "input": {"prices": [7,1,5,3,6,4]},
           "expected": 5
       },
       {
           "input": {"prices": [7,6,4,3,1]},
           "expected": 0
       }
   ]
   ```

4. **Test and Analyze**:
   ```bash
   python run_tests.py --problem 121 --performance
   python analyze.py --problem 121
   ```

## Utilities Available

- **ListNode**: Singly-linked list node
- **TreeNode**: Binary tree node  
- **TrieNode**: Trie data structure node
- **UnionFind**: Disjoint set data structure
- **SegmentTree**: Range query data structure
- **Helper Functions**: Tree/list creation, binary search, quickselect

## Test Case Format

```python
test_cases = [
    {
        "input": {"param1": value1, "param2": value2},  # Dictionary for named parameters
        "expected": expected_result
    },
    {
        "input": [value1, value2],  # List for positional parameters  
        "expected": expected_result
    },
    {
        "input": single_value,  # Single value for single parameter
        "expected": expected_result
    }
]
```

## Tips for Success

1. **Start Simple**: Begin with easy problems to get familiar with the environment
2. **Use Templates**: Leverage the provided templates for common patterns
3. **Test Thoroughly**: Add comprehensive test cases including edge cases
4. **Analyze Performance**: Use the performance analyzer to understand complexity
5. **Organize by Topic**: Group related problems (arrays, trees, graphs) for focused practice

## Extending the Environment

### Adding New Problem Types
1. Add template in `create_problem.py` in the `ProblemTemplate.get_template()` method
2. Add the new type to `PROBLEM_TYPES` choices in the argument parser
3. Update documentation

### Adding New Utilities
1. Add functions/classes to `utils/common.py`
2. Import in problem templates as needed
3. Update documentation

Happy coding! 🚀