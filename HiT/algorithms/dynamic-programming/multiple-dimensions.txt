# Multiple Dimensions - 0-1 Knapsack

Source: https://www.hiredintech.com/algorithms/dynamic-programming/multiple-dimensions/

DP can be applied to problems defined by more than one parameter. The 0-1 Knapsack problem: N items each with weight W[i] and value V[i], knapsack with max capacity C. Select items to maximize value without exceeding capacity.

## Recursive Relation

For item N with capacity C, two options:
1. Put item N in: F(N-1, C-W[N]) + V[N]
2. Don't put item N in: F(N-1, C)

```
F(N, C) = max(F(N-1, C-W[N]) + V[N], F(N-1, C))
```

## Base Cases

- F(1, c) = V[1] if c >= W[1], else 0
- F(*, 0) = 0 (no capacity)

## Implementation Approaches

**Bottom-up**: Start from base cases, compute F(1,*), then F(2,*), etc. Only need previous row's values, saving memory.

**Top-down (memoization)**: Recursive approach that stores and reuses computed values.


---

# 多维问题 - 0-1 背包

来源：https://www.hiredintech.com/algorithms/dynamic-programming/multiple-dimensions/

动态规划可以应用于由多个参数定义的问题。0-1 背包问题：N 个物品，每个有重量 W[i] 和价值 V[i]，背包最大容量为 C。选择物品以在不超过容量的情况下最大化价值。

## 递推关系

对于物品 N 和容量 C，两个选择：
1. 放入物品 N：F(N-1, C-W[N]) + V[N]
2. 不放物品 N：F(N-1, C)

```
F(N, C) = max(F(N-1, C-W[N]) + V[N], F(N-1, C))
```

## 基础情况

- F(1, c) = V[1]（如果 c >= W[1]），否则为 0
- F(*, 0) = 0（没有容量）

## 实现方式

**自底向上**：从基础情况开始，计算 F(1,*)，然后 F(2,*) 等。只需要前一行的值，节省内存。

**自顶向下（记忆化）**：递归方法，存储并重用已计算的值。
