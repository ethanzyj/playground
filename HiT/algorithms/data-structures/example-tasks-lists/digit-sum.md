# Digit Sum

Source: [https://www.hiredintech.com/algorithms/data-structures/example-tasks-lists/digit-sum/](https://www.hiredintech.com/algorithms/data-structures/example-tasks-lists/digit-sum/)

## Task Statement

Given an integer n, compute the sum of its digits. If negative, treat as positive. Constraint: -2^63 < n < 2^63.

Examples: 1325132435356 -> 43, -10 -> 1, -3456 -> 18

## Solution

Classic digit separation: sequentially divide modulo 10 to get last digit, then divide by 10 to remove it.

```cpp
int digit_sum(long long number) {
    int sum = 0;
    if (number < 0) number *= -1;
    while (number > 0) {
        sum += number % 10;
        number /= 10;
    }
    return sum;
}
```


---

# 数字求和

来源：[https://www.hiredintech.com/algorithms/data-structures/example-tasks-lists/digit-sum/](https://www.hiredintech.com/algorithms/data-structures/example-tasks-lists/digit-sum/)

## 题目描述

给定整数 n，计算其各位数字之和。如果为负数，按正数处理。约束：-2^63 < n < 2^63。

示例：1325132435356 -> 43，-10 -> 1，-3456 -> 18

## 解答

经典的数字分离：依次对 10 取模得到最后一位，然后除以 10 去掉它。

```cpp
int digit_sum(long long number) {
    int sum = 0;
    if (number < 0) number *= -1;
    while (number > 0) {
        sum += number % 10;
        number /= 10;
    }
    return sum;
}
```
