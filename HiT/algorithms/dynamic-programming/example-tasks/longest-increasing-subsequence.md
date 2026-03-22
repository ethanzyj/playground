# Longest Increasing Subsequence

Source: [https://www.hiredintech.com/algorithms/dynamic-programming/example-tasks/longest-increasing-subsequence/](https://www.hiredintech.com/algorithms/dynamic-programming/example-tasks/longest-increasing-subsequence/)

## Task Statement

Given a list of N integers, find the longest increasing subsequence. Example: [16, 3, 5, 19, 10, 14, 12, 0, 15] -> [3, 5, 10, 12, 15].

## Slower Solution - O(N^2)

F(i) = longest increasing subsequence ending at position i. For each i, loop through all j < i where S[j] < S[i], take the longest and add 1.

```
F[1] = 1, P[1] = -1, best_index = 1
for i = 2 to L
    F[i] = 1, P[i] = -1
    for j = 1 to i-1
        if S[j] < S[i] and F[j] + 1 > F[i]
            F[i] = F[j] + 1
            P[i] = j
    if F[best_index] < F[i]
        best_index = i
```

## Faster Solution - O(NlogN)

Maintain array M where M[i] = index of smallest number ending an increasing subsequence of length i. Values referenced in M are always in increasing order, so use binary search for each new number.

For each new number from S, find its position in M using binary search (O(logN)), update M accordingly. Total: O(NlogN).


---

# 最长递增子序列

来源：[https://www.hiredintech.com/algorithms/dynamic-programming/example-tasks/longest-increasing-subsequence/](https://www.hiredintech.com/algorithms/dynamic-programming/example-tasks/longest-increasing-subsequence/)

## 题目描述

给定 N 个整数的列表，找出最长递增子序列。示例：[16, 3, 5, 19, 10, 14, 12, 0, 15] -> [3, 5, 10, 12, 15]。

## 较慢解法 - O(N^2)

F(i) = 以位置 i 结尾的最长递增子序列。对每个 i，遍历所有 j < i 且 S[j] < S[i]，取最长的加 1。

## 较快解法 - O(NlogN)

维护数组 M，其中 M[i] = 以长度为 i 的递增子序列结尾的最小数字的索引。M 中引用的值始终递增，因此可以使用二分查找。

对于 S 中的每个新数字，使用二分查找（O(logN)）在 M 中找到其位置并更新。总计：O(NlogN)。
