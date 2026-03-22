# String Hashing

Source: [https://www.hiredintech.com/algorithms/string-problems/string-hashing/](https://www.hiredintech.com/algorithms/string-problems/string-hashing/)

A good hashing function computes a polynomial from the symbols of the input string modulo a prime number:

H(S) = (S1 * A^(n-1) + S2 * A^(n-2) + ... + Sn-1 * A + Sn) mod P

Collisions are possible - always verify matches.

## Sliding Window Property

If you compute H for string S = S1...Sn, you can compute H for S' = S2...Sn+1 in constant time:

H(S') = (H(S) - S1 * A^(n-1)) * A + Sn+1

This property is used in pattern matching algorithms like Rabin-Karp.


---

# 字符串哈希

来源：[https://www.hiredintech.com/algorithms/string-problems/string-hashing/](https://www.hiredintech.com/algorithms/string-problems/string-hashing/)

一个好的哈希函数根据输入字符串的字符计算一个多项式，对质数取模：

H(S) = (S1 * A^(n-1) + S2 * A^(n-2) + ... + Sn-1 * A + Sn) mod P

碰撞是可能的——始终验证匹配。

## 滑动窗口属性

如果你为字符串 S = S1...Sn 计算了 H，可以在常数时间内计算 S' = S2...Sn+1 的 H：

H(S') = (H(S) - S1 * A^(n-1)) * A + Sn+1

这个属性被用于 Rabin-Karp 等模式匹配算法中。
