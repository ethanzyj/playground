# Memory Complexity

Source: [https://www.hiredintech.com/algorithms/computational-complexity/memory-complexity/](https://www.hiredintech.com/algorithms/computational-complexity/memory-complexity/)

To measure memory complexity you need to measure the maximum amount of memory used by your solution at one point in time. Go over the available amount and the OS will start to swap memory to hard disk, making execution much slower.

## Examples

**Palindrome permutations**: To hold all letters you need memory proportional to N. Generating permutations can reuse the same array. Checking palindrome needs no additional memory. Memory complexity: O(N).

**Network adjacency matrix**: Store a square matrix M with size N x N where N is the number of nodes. M[i][j] = 0 or 1 indicating if there is an edge between nodes i and j. Memory: O(N^2).

When designing a solution at a tech interview you will need to compute and explain the memory complexity.


---

# 内存复杂度

来源：[https://www.hiredintech.com/algorithms/computational-complexity/memory-complexity/](https://www.hiredintech.com/algorithms/computational-complexity/memory-complexity/)

要衡量内存复杂度，你需要衡量解决方案在某一时刻使用的最大内存量。超出可用量后，操作系统将开始将内存交换到硬盘，使执行变得更慢。

## 示例

**回文排列**：保存所有字母需要与 N 成正比的内存。生成排列可以复用同一个数组。检查回文不需要额外内存。内存复杂度：O(N)。

**网络邻接矩阵**：存储一个 N x N 的方阵 M，其中 N 是节点数。M[i][j] = 0 或 1，表示节点 i 和 j 之间是否有边。内存：O(N^2)。

在技术面试中设计解决方案时，你需要能够计算并解释内存复杂度。
