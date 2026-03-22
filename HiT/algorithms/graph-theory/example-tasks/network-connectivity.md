# Network Connectivity

Source: https://www.hiredintech.com/algorithms/graph-theory/example-tasks/network-connectivity/

## Task Statement

Given a network of N nodes (1 <= N <= 512) with M bidirectional connections, determine how many nodes are reachable from node S.

Sample: N=7, M=8, S=2, edges: (1,2),(1,4),(4,2),(4,3),(3,1),(5,6),(5,7),(7,6) -> Output: 3 (nodes 1,3,4)

## Solution

Classic graph traversal. Use DFS or BFS starting from node S. Count all visited nodes (excluding S itself).

**BFS approach** (safer for large graphs - no stack overflow risk):

```cpp
queue<int> q;
q.push(s);
vis[s] = true;
int result = 0;
while (!q.empty()) {
    int node = q.front();
    q.pop();
    for (auto it = neighbours[node].begin(); it != neighbours[node].end(); ++it) {
        if (!vis[*it]) {
            vis[*it] = true;
            q.push(*it);
            result++;
        }
    }
}
```

**DFS approach** (recursive, watch for stack depth):

```ruby
def dfs(node, nei, vis)
    return 0 if vis[node]
    res = 1
    vis[node] = true
    nei[node].each { |nn| res += dfs(nn, nei, vis) }
    res
end
```


---

# 网络连通性

来源：https://www.hiredintech.com/algorithms/graph-theory/example-tasks/network-connectivity/

## 题目描述

给定一个有 N 个节点（1 <= N <= 512）和 M 条双向连接的网络，确定从节点 S 可以到达多少个节点。

示例：N=7，M=8，S=2，边：(1,2),(1,4),(4,2),(4,3),(3,1),(5,6),(5,7),(7,6) -> 输出：3（节点 1、3、4）

## 解答

经典图遍历。从节点 S 开始使用 DFS 或 BFS。计算所有访问的节点（不包括 S 本身）。

**BFS 方法**（对大型图更安全——无栈溢出风险）：
从 S 入队，遍历所有邻居，已访问的不重复入队。计算新访问的节点数。

**DFS 方法**（递归，注意栈深度）：
从 S 开始递归访问所有未访问的邻居，累计计数。
