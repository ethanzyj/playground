# Conclusions

Source: [https://www.hiredintech.com/algorithms/dynamic-programming/conclusions/](https://www.hiredintech.com/algorithms/dynamic-programming/conclusions/)

This is a brief introduction to dynamic programming. We showed through examples what we mean by breaking down a problem into sub-problems.

Two implementation approaches:

1. **Bottom-up**: Start from base cases and compute values until reaching the desired value.
2. **Top-down**: Recursively compute answers for smaller problems on demand, storing computed values to avoid recomputation (memoization).

Sometimes, especially for bottom-up implementations, it is possible to store only part of the computed values at a time and free memory for other parts once they have served their purpose.


---

# 总结

来源：[https://www.hiredintech.com/algorithms/dynamic-programming/conclusions/](https://www.hiredintech.com/algorithms/dynamic-programming/conclusions/)

这是对动态规划的简要介绍。我们通过示例展示了将问题分解为子问题的含义。

两种实现方式：

1. **自底向上**：从基础情况开始计算值，直到达到目标值。
2. **自顶向下**：按需递归计算较小问题的答案，存储已计算的值以避免重复计算（记忆化）。

有时，特别是对于自底向上的实现，可以一次只存储部分计算值，在它们完成使命后释放内存。
