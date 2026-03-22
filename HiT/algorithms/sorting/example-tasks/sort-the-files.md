# Sort the Files

Source: [https://www.hiredintech.com/algorithms/sorting/example-tasks/sort-the-files/](https://www.hiredintech.com/algorithms/sorting/example-tasks/sort-the-files/)

## Task Statement

Given N image files named IMG1.jpg to IMGN.jpg. Return them sorted lexicographically. N in [1, 1,000,000]. If N > 1000, return only the first 1000.

Sample (N=16): IMG1.jpg, IMG10.jpg, IMG11.jpg, ..., IMG16.jpg, IMG2.jpg, ..., IMG9.jpg

## Solution

Naive: generate all names, sort, take first 1000. Too slow for N=1,000,000.

Better: Generate only the filenames that appear in the output. Files starting with IMG1 come first regardless of following digits, then IMG2, etc.

Recursive approach: Start with prefix IMG, try attaching 1,2,3... recursively. Stop when number > N or when 1000 filenames generated. Time complexity: O(P) where P = min(N, 1000).

This demonstrates that "sorting" doesn't always mean applying a standard sorting algorithm.


---

# 文件排序

来源：[https://www.hiredintech.com/algorithms/sorting/example-tasks/sort-the-files/](https://www.hiredintech.com/algorithms/sorting/example-tasks/sort-the-files/)

## 题目描述

给定 N 个图片文件，命名为 IMG1.jpg 到 IMGN.jpg。按字典序排序返回。N 范围 [1, 1,000,000]。如果 N > 1000，只返回前 1000 个。

## 解答

朴素方法：生成所有文件名，排序，取前 1000 个。对 N=1,000,000 太慢。

更好的方法：只生成会出现在输出中的文件名。以 IMG1 开头的文件排在最前面（不管后面跟什么数字），然后是 IMG2，以此类推。

递归方法：从前缀 IMG 开始，递归地尝试附加 1、2、3...。当数字 > N 或已生成 1000 个文件名时停止。时间复杂度：O(P)，其中 P = min(N, 1000)。

这表明"排序"并不总是意味着应用标准排序算法。
