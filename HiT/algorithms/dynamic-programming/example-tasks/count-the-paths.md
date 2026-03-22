# Count the Paths

Source: [https://www.hiredintech.com/algorithms/dynamic-programming/example-tasks/count-the-paths/](https://www.hiredintech.com/algorithms/dynamic-programming/example-tasks/count-the-paths/)

## Task Statement

Given a grid of N rows by M columns. Robot starts at bottom-left (row N-1, column 0), can only move right and up. Some cells are occupied. Count the number of different paths to top-right (row 0, column M-1), MODULO 1,000,003.

N and M in range [1, 512]. Grid contains '0' (empty) or '1' (occupied).

## Solution

Classic DP task. Parameters: row and column of the cell to reach.

Recursive relation: Robot can come from (x-1, y) or (x, y-1).

```
F(x, y) = F(x-1, y) + F(x, y-1)
```

Base case: F(start) = 1. For occupied cells: F(x, y) = 0.

Can be solved bottom-up (row by row) or top-down with memoization.

Time complexity: O(N*M).


---

# 路径计数

来源：[https://www.hiredintech.com/algorithms/dynamic-programming/example-tasks/count-the-paths/](https://www.hiredintech.com/algorithms/dynamic-programming/example-tasks/count-the-paths/)

## 题目描述

给定 N 行 M 列的网格。机器人从左下角（第 N-1 行，第 0 列）出发，只能向右和向上移动。有些格子被占用。计算到右上角（第 0 行，第 M-1 列）的不同路径数，结果对 1,000,003 取模。

N 和 M 范围 [1, 512]。网格包含 '0'（空）或 '1'（被占用）。

## 解答

经典动态规划任务。参数：要到达的格子的行和列。

递推关系：机器人可以从 (x-1, y) 或 (x, y-1) 来。

```
F(x, y) = F(x-1, y) + F(x, y-1)
```

基础情况：F(起点) = 1。被占用的格子：F(x, y) = 0。

可以自底向上（逐行）或自顶向下用记忆化求解。

时间复杂度：O(N*M)。
