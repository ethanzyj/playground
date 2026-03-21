# More Efficient Pattern Matching

Source: https://www.hiredintech.com/algorithms/string-problems/more-efficient-pattern-matching/

## Rabin-Karp Algorithm

Uses the "sliding window" property of hash functions. Improvement over brute force but worst-case still O(Lt * Lp).

## Knuth-Morris-Pratt (KMP) Algorithm

A very nice algorithm worth learning:
1. Constructs a table from the pattern: O(Lp)
2. Searches the text using the table: O(Lt)
These are worst-case running times.

## Other Techniques

- Aho-Corasick algorithm
- Suffix trees
- Suffix arrays

## Resources

- TopCoder on Rabin-Karp and KMP Algorithms
- Wikipedia on Rabin-Karp, KMP, Aho-Corasick, suffix arrays, suffix trees


---

# 更高效的模式匹配

来源：https://www.hiredintech.com/algorithms/string-problems/more-efficient-pattern-matching/

## Rabin-Karp 算法

利用哈希函数的"滑动窗口"属性。比暴力方法有改进，但最坏情况仍为 O(Lt * Lp)。

## Knuth-Morris-Pratt (KMP) 算法

一个非常值得学习的算法：
1. 从模式构造表：O(Lp)
2. 使用表搜索文本：O(Lt)
这些是最坏情况的运行时间。

## 其他技术

- Aho-Corasick 算法
- 后缀树
- 后缀数组

## 资源

- TopCoder 关于 Rabin-Karp 和 KMP 算法
- 维基百科关于 Rabin-Karp、KMP、Aho-Corasick、后缀数组、后缀树
