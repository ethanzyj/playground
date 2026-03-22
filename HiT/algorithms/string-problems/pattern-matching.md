# Pattern Matching

Source: [https://www.hiredintech.com/algorithms/string-problems/pattern-matching/](https://www.hiredintech.com/algorithms/string-problems/pattern-matching/)

A very popular string problem: find all occurrences of pattern P (length Lp) within text T (length Lt).

## Brute Force

Try matching P against all substrings in T of length Lp. Easy to implement but worst-case O(Lt * Lp).

Example: T = "mississippi", P = "issi" - found at positions 2 and 5.

For random strings, mismatches happen quickly. But for pathological cases (e.g., T = "ttt...ttt", P = "tt...tt"), performance degrades badly.

More efficient algorithms exist for better worst-case performance.


---

# 模式匹配

来源：[https://www.hiredintech.com/algorithms/string-problems/pattern-matching/](https://www.hiredintech.com/algorithms/string-problems/pattern-matching/)

一个非常流行的字符串问题：在文本 T（长度 Lt）中找到模式 P（长度 Lp）的所有出现位置。

## 暴力方法

尝试将 P 与 T 中所有长度为 Lp 的子串匹配。容易实现但最坏情况 O(Lt * Lp)。

示例：T = "mississippi"，P = "issi" - 在位置 2 和 5 找到。

对于随机字符串，不匹配很快就会发生。但对于病态情况（例如 T = "ttt...ttt"，P = "tt...tt"），性能严重退化。

存在更高效的算法以获得更好的最坏情况性能。
