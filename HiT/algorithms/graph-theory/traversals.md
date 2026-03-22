# Traversals

Source: [https://www.hiredintech.com/algorithms/graph-theory/traversals/](https://www.hiredintech.com/algorithms/graph-theory/traversals/)

Two popular algorithms for traversing graphs: DFS and BFS. Both have time complexity O(N+M).

## Depth-First Search (DFS)

Recursive approach - start from a node, visit unvisited neighbors recursively.

```
def dfs(node)
    mark node as visited
    for next_node in neighbours(node)
        if not visited(next_node)
            dfs(next_node)
        end
    end
end
```

**Warning**: Be careful about stack depth for chain-like graphs. Can cause stack overflow. Consider iterative implementation.

For disconnected graphs, call dfs on all nodes to cover all components.

## Breadth-First Search (BFS)

Uses a queue. Visits all neighbors first, then their neighbors. Finds minimum path in terms of edges.

```
def bfs(node)
    queue.add(node)
    mark node as visited
    distance[node] = 0
    while not queue.empty
        top_node = queue.pop
        for next_node in neighbours(top_node)
            if not visited(next_node)
                queue.add(next_node)
                mark next_node as visited
                distance[next_node] = distance[top_node] + 1
            end
        end
    end
end
```

BFS is safer regarding stack issues than recursive DFS.


---

# 遍历

来源：[https://www.hiredintech.com/algorithms/graph-theory/traversals/](https://www.hiredintech.com/algorithms/graph-theory/traversals/)

两种流行的图遍历算法：DFS 和 BFS。两者时间复杂度都是 O(N+M)。

## 深度优先搜索（DFS）

递归方法——从一个节点开始，递归访问未访问的邻居。

```
def dfs(node)
    将 node 标记为已访问
    for next_node in neighbours(node)
        if not visited(next_node)
            dfs(next_node)
        end
    end
end
```

**警告**：对于链状图要注意栈深度，可能导致栈溢出。考虑使用迭代实现。

对于不连通图，需要在所有节点上调用 dfs 以覆盖所有连通分量。

## 广度优先搜索（BFS）

使用队列。先访问所有邻居，然后访问它们的邻居。找到以边数计的最短路径。

```
def bfs(node)
    queue.add(node)
    将 node 标记为已访问
    distance[node] = 0
    while not queue.empty
        top_node = queue.pop
        for next_node in neighbours(top_node)
            if not visited(next_node)
                queue.add(next_node)
                将 next_node 标记为已访问
                distance[next_node] = distance[top_node] + 1
            end
        end
    end
end
```

BFS 在栈问题方面比递归 DFS 更安全。
