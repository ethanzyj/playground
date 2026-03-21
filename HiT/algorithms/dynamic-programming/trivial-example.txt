# Trivial Example - Fibonacci

Source: https://www.hiredintech.com/algorithms/dynamic-programming/trivial-example/

The Fibonacci numbers illustrate DP perfectly. To compute the 100th: take sum of 98th and 99th. Base cases: F(1) = 1, F(2) = 1.

## Naive Recursive Approach (Exponential)

```
def fibonacci(N)
    if N <= 2 return 1;
    return fibonacci(N-1) + fibonacci(N-2)
end
```

Problem: Each call spawns two new calls. At every level there are twice as many calls. The same Fibonacci number gets computed over and over again.

## Bottom-Up with Memoization (Linear)

```
F(1) = 1
F(2) = 1
for i = 3 to N
    F(i) = F(i-1) + F(i-2)
end
```

## Top-Down with Memoization (Linear)

```
F(1) = 1
F(2) = 1
def fibonacci(N)
    if F(N) is not stored
        F(N) = fibonacci(N-1) + fibonacci(N-2)
    end
    return F(N)
end
```

Both memoized approaches compute each sub-problem only once, achieving linear complexity.


---

# 简单示例 - 斐波那契

来源：https://www.hiredintech.com/algorithms/dynamic-programming/trivial-example/

斐波那契数列完美地说明了动态规划。计算第 100 个：取第 98 个和第 99 个的和。基础情况：F(1) = 1，F(2) = 1。

## 朴素递归方法（指数级）

```
def fibonacci(N)
    if N <= 2 return 1;
    return fibonacci(N-1) + fibonacci(N-2)
end
```

问题：每次调用产生两个新调用。每一层的调用数是上一层的两倍。相同的斐波那契数被反复计算。

## 自底向上记忆化（线性）

```
F(1) = 1
F(2) = 1
for i = 3 to N
    F(i) = F(i-1) + F(i-2)
end
```

## 自顶向下记忆化（线性）

```
F(1) = 1
F(2) = 1
def fibonacci(N)
    if F(N) is not stored
        F(N) = fibonacci(N-1) + fibonacci(N-2)
    end
    return F(N)
end
```

两种记忆化方法都只计算每个子问题一次，实现线性复杂度。
