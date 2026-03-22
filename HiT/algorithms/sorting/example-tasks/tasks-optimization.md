# Tasks Optimization

Source: [https://www.hiredintech.com/algorithms/sorting/example-tasks/tasks-optimization/](https://www.hiredintech.com/algorithms/sorting/example-tasks/tasks-optimization/)

## Task Statement

A worker has N tasks with difficulties D. Each task takes D minutes. Switching from D1 to D2 costs |D1-D2| minutes. Given time limit T, maximize the number of completed tasks.

N in [1, 10,000], T in [0, 200,000,000], difficulties in [1, 10,000].

Sample: N=5, T=65, difficulties=[24, 23, 22, 10, 20] -> Output: 3

## Solution

Key observations:

1. **Optimal order**: For any chosen set of tasks, execute in increasing difficulty order. Total switching cost = max_difficulty - min_difficulty.

2. **Consecutive tasks**: The optimal set consists of consecutive tasks in sorted order.

Algorithm: Sort tasks by difficulty. Use a sliding window to find the longest consecutive subsequence completable within time T. For a range [i, j]: cost = sum(D[i]...D[j]) + D[j] - D[i].

Optimization: Move left boundary only left-to-right and right boundary only left-to-right. Total time: O(NlogN) due to sorting.


---

# 任务优化

来源：[https://www.hiredintech.com/algorithms/sorting/example-tasks/tasks-optimization/](https://www.hiredintech.com/algorithms/sorting/example-tasks/tasks-optimization/)

## 题目描述

一个工人有 N 个任务，难度为 D。每个任务需要 D 分钟。从难度 D1 切换到 D2 需要 |D1-D2| 分钟。给定时间限制 T，最大化完成的任务数。

N 范围 [1, 10,000]，T 范围 [0, 200,000,000]，难度范围 [1, 10,000]。

示例：N=5，T=65，难度=[24, 23, 22, 10, 20] -> 输出：3

## 解答

关键观察：

1. **最优顺序**：对于任何选定的任务集合，按难度递增顺序执行。总切换成本 = 最大难度 - 最小难度。

2. **连续任务**：最优集合由排序后连续的任务组成。

算法：按难度排序。使用滑动窗口找到在时间 T 内可完成的最长连续子序列。对于范围 [i, j]：成本 = sum(D[i]...D[j]) + D[j] - D[i]。

优化：左边界只从左向右移动，右边界也只从左向右移动。总时间：O(NlogN)，排序主导。
