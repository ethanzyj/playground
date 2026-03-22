# Words with Typos

Source: https://www.hiredintech.com/algorithms/string-problems/example-tasks/words-with-typos/

## Task Statement

Given word W and text T, count occurrences of W including typos. A word W' is an instance of W if:
- Exactly the same as W
- Same length, up to 2 letters different
- W' obtained from W by removing or adding 1 letter

W length [5, 20], T max 10,000 symbols. Only lowercase latin letters and spaces.

Sample: W = "banana", T = "there are three bananas on the tree and one banano on the ground" -> Output: 2

## Solution

Split text into words. For each word, check three conditions:

**1. Exact match**: Trivial comparison.

**2. Mistyped letters** (same length, up to 2 different):
```ruby
def matching_with_mistypes?(word1, word2)
    return false if word1.length != word2.length
    diffs = 0
    word1.length.times do |index|
        if word1[index] != word2[index]
            diffs += 1
            return false if diffs > 2
        end
    end
    true
end
```

**3. Added/removed letter** (lengths differ by 1):
Use two pointers, allowing one mismatch where only the longer word's pointer advances.

Time complexity: linear in the length of T.


---

# 含拼写错误的单词

来源：https://www.hiredintech.com/algorithms/string-problems/example-tasks/words-with-typos/

## 题目描述

给定单词 W 和文本 T，计算 W 的出现次数（包括拼写错误）。单词 W' 被视为 W 的实例，如果：
- 与 W 完全相同
- 长度相同，最多 2 个字母不同
- W' 通过从 W 中删除或添加 1 个字母得到

W 长度 [5, 20]，T 最大 10,000 字符。只有小写拉丁字母和空格。

示例：W = "banana"，T = "there are three bananas on the tree and one banano on the ground" -> 输出：2

## 解答

将文本分割为单词。对每个单词检查三个条件：

**1. 精确匹配**：简单比较。

**2. 打字错误**（相同长度，最多 2 个不同）：
遍历两个单词，计算不同位置数。超过 2 则不匹配。

**3. 添加/删除字母**（长度差 1）：
使用双指针，允许一次不匹配，只移动较长单词的指针。

时间复杂度：与 T 的长度成线性关系。
