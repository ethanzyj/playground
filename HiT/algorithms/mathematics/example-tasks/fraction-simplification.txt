# Fraction Simplification

Source: https://www.hiredintech.com/algorithms/mathematics/example-tasks/fraction-simplification/

## Task Statement

Given numerator N and denominator D, simplify the fraction to lowest terms. N and D in [1, 1,000,000,000].

Sample: 77/22 -> 7/2

## Solution

Find the GCD of N and D, then divide both by it. Use the Euclidean algorithm for efficient GCD computation:

```cpp
int gcd(int a, int b) {
    while (b > 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

The Euclidean algorithm is much faster than the naive approach of trying all numbers from min(N,D) down to 1.


---

# 分数化简

来源：https://www.hiredintech.com/algorithms/mathematics/example-tasks/fraction-simplification/

## 题目描述

给定分子 N 和分母 D，将分数化简为最简形式。N 和 D 范围 [1, 1,000,000,000]。

示例：77/22 -> 7/2

## 解答

找到 N 和 D 的最大公约数，然后两者都除以它。使用欧几里得算法高效计算 GCD：

```cpp
int gcd(int a, int b) {
    while (b > 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

欧几里得算法比从 min(N,D) 向下逐一尝试的朴素方法快得多。
