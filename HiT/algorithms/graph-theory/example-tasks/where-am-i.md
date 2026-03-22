# Where Am I?

Source: [https://www.hiredintech.com/algorithms/graph-theory/example-tasks/where-am-i/](https://www.hiredintech.com/algorithms/graph-theory/example-tasks/where-am-i/)

## Task Statement

A robot on an N x M grid (some cells empty, some occupied). Robot has a map but doesn't know its position. It scans surroundings (P x Q rectangle) and tries to match on the map. Find shortest path from start to goal cell (row 0, col M-1).

- If multiple matching positions: return the most pessimistic (longest) shortest path
- If no matching position: return -1
- If a matching position has no path to goal: return -2

Field max 1000x1000, surroundings max 16x16.

## Solution

Two steps:

1. **Find possible starting positions**: Check all positions where the pattern matches. Time: O(N*M*P*Q).

2. **BFS from goal**: Run BFS starting from the goal cell to find shortest distances to all cells. Time: O(N*M).

Then iterate over all possible starting positions:
- If any has no path -> return -2
- Otherwise return the maximum distance among all possible starts

Memory: O(N*M).


---

# 我在哪里？

来源：[https://www.hiredintech.com/algorithms/graph-theory/example-tasks/where-am-i/](https://www.hiredintech.com/algorithms/graph-theory/example-tasks/where-am-i/)

## 题目描述

一个机器人在 N x M 的网格上（有些格子空，有些被占用）。机器人有地图但不知道自己的位置。它扫描周围环境（P x Q 矩形）并尝试在地图上匹配。找到从起点到目标格子（第 0 行，第 M-1 列）的最短路径。

- 如果有多个匹配位置：返回最悲观的（最长的）最短路径
- 如果没有匹配位置：返回 -1
- 如果某个匹配位置没有到目标的路径：返回 -2

场地最大 1000x1000，周围环境最大 16x16。

## 解答

两个步骤：

1. **找到可能的起始位置**：检查所有模式匹配的位置。时间：O(N*M*P*Q)。

2. **从目标进行 BFS**：从目标格子开始运行 BFS，找到到所有格子的最短距离。时间：O(N*M)。

然后遍历所有可能的起始位置：
- 如果任何一个没有路径 -> 返回 -2
- 否则返回所有可能起点中的最大距离

内存：O(N*M)。
