# Numeric Palindromes

Source: [https://www.hiredintech.com/algorithms/data-structures/example-tasks-lists/numeric-palindromes/](https://www.hiredintech.com/algorithms/data-structures/example-tasks-lists/numeric-palindromes/)

## Task Statement

A "number palindrome" is a number that reads the same backwards. Examples: 1, 4224, 9999, 1221. Given an integer n (0 < n <= 10,000,000,000), return true if palindrome, false otherwise.

## Solution

Two efficient solutions with a time-memory trade-off:

**Solution 1 (with extra memory)**: Store digits in an array, compare first with last, second with second-to-last, etc.

```python
def is_numeric_palindrome(n):
    arr = []
    while(n > 0):
        arr.append(n % 10)
        n = n // 10
    num_len = len(arr)
    for i in range(num_len / 2):
        if arr[i] != arr[num_len - i - 1]:
            return False
    return True
```

**Solution 2 (two passes, no extra memory)**: First pass counts digits. Second pass extracts leftmost and rightmost digits simultaneously and compares.

At an interview, describe both solutions and their trade-offs, then ask the interviewer which to implement.


---

# 数字回文

来源：[https://www.hiredintech.com/algorithms/data-structures/example-tasks-lists/numeric-palindromes/](https://www.hiredintech.com/algorithms/data-structures/example-tasks-lists/numeric-palindromes/)

## 题目描述

"数字回文"是正读和反读相同的数字。例如：1、4224、9999、1221。给定整数 n（0 < n <= 10,000,000,000），如果是回文返回 true，否则返回 false。

## 解答

两种高效解法，存在时间-内存权衡：

**解法 1（额外内存）**：将数字存入数组，比较第一个和最后一个、第二个和倒数第二个，依此类推。

```python
def is_numeric_palindrome(n):
    arr = []
    while(n > 0):
        arr.append(n % 10)
        n = n // 10
    num_len = len(arr)
    for i in range(num_len / 2):
        if arr[i] != arr[num_len - i - 1]:
            return False
    return True
```

**解法 2（两次遍历，无额外内存）**：第一次遍历计算位数。第二次遍历同时提取最左和最右数字并比较。

在面试中，描述两种解法及其权衡，然后询问面试官实现哪一种。
