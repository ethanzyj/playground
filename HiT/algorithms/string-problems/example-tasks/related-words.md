# Related Words

Source: [https://www.hiredintech.com/algorithms/string-problems/example-tasks/related-words/](https://www.hiredintech.com/algorithms/string-problems/example-tasks/related-words/)

## Task Statement

Given text T, word W, and number N, find the word most often seen within N words before and after each occurrence of W. Don't count W itself. Don't count the same word more than once across overlapping ranges. If no occurrences, return "N/A". Ignore case; strip non-alphanumeric characters.

Sample: T = "It is a nice day today, the sun is shining...", W = "day", N = 3 -> Output: "nice"

## Solution

1. Preprocess: lowercase, strip non-letter/digit characters, split into words
2. Traverse words left to right, tracking the rightmost covered position
3. For each occurrence of W, count surrounding words using a hash table
4. Find the word with highest count (lexicographically first if tied)

Time complexity: linear in the length of T.


---

# 相关词

来源：[https://www.hiredintech.com/algorithms/string-problems/example-tasks/related-words/](https://www.hiredintech.com/algorithms/string-problems/example-tasks/related-words/)

## 题目描述

给定文本 T、单词 W 和数字 N，找到在每次 W 出现前后 N 个单词范围内最常见的单词。不计算 W 本身。重叠范围内不重复计算同一单词。如果没有出现，返回 "N/A"。忽略大小写；去除非字母数字字符。

示例：T = "It is a nice day today, the sun is shining..."，W = "day"，N = 3 -> 输出："nice"

## 解答

1. 预处理：小写化，去除非字母/数字字符，按空格分词
2. 从左到右遍历单词，跟踪已覆盖的最右位置
3. 对每次 W 的出现，使用哈希表计算周围单词
4. 找到计数最高的单词（如果并列取字典序最小的）

时间复杂度：与 T 的长度成线性关系。
