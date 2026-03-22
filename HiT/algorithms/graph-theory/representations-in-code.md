# Representations in Code

Source: https://www.hiredintech.com/algorithms/graph-theory/representations-in-code/

## Adjacency Matrix

Matrix M of size n x n. M[i][j] indicates edge between node i and j. Works for weighted/unweighted, directed/undirected graphs. Memory: O(n^2). Good for dense graphs.

## Adjacency List

For each node, store a list of its neighbors. Memory: O(m) where m is the number of edges. Saves memory for sparse graphs.

## Edge List

Store all edges as pairs of nodes with attributes. Memory: O(m). Suitable for a limited set of problems.

Choose representation based on graph density and the algorithms you need to implement.


---

# 代码中的表示

来源：https://www.hiredintech.com/algorithms/graph-theory/representations-in-code/

## 邻接矩阵

大小为 n x n 的矩阵 M。M[i][j] 表示节点 i 和 j 之间是否有边。适用于加权/非加权、有向/无向图。内存：O(n^2)。适合稠密图。

## 邻接表

为每个节点存储其邻居列表。内存：O(m)，其中 m 是边的数量。对稀疏图节省内存。

## 边列表

将所有边存储为带属性的节点对。内存：O(m)。适用于有限的问题集。

根据图的密度和需要实现的算法选择表示方式。
