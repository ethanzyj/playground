# Count the String Occurrences

Source: https://www.hiredintech.com/algorithms/string-problems/example-tasks/count-the-string-occurrences/

## Task Statement

Given strings T and P, count how many times P occurs in T (overlapping occurrences count). T max length 100,000, P max length 10,000. P occurs in T no more than 100 times.

Sample: T = "babalabalabalatheend", P = "alabala" -> Output: 2

## Discussion

The brute force algorithm won't score maximum points due to constraints. Rabin-Karp will do better but may not pass hardest cases.

This is a great opportunity to implement the Knuth-Morris-Pratt algorithm, which should pass all test cases.


---

# 字符串出现次数

来源：https://www.hiredintech.com/algorithms/string-problems/example-tasks/count-the-string-occurrences/

## 题目描述

给定字符串 T 和 P，计算 P 在 T 中出现的次数（重叠的出现也计数）。T 最大长度 100,000，P 最大长度 10,000。P 在 T 中出现不超过 100 次。

示例：T = "babalabalabalatheend"，P = "alabala" -> 输出：2

## 讨论

由于约束限制，暴力算法无法获得满分。Rabin-Karp 会好一些但可能无法通过最难的测试用例。

这是实现 Knuth-Morris-Pratt 算法的绝佳机会，它应该能通过所有测试用例。
