# Jump over Numbers

Source: https://www.hiredintech.com/algorithms/data-structures/example-tasks-lists/jump-over-numbers/

## Task Statement

You are given a list of non-negative integers and you start at the left-most integer. Given the number P at your current position, jump P positions to the right. Repeat until you reach beyond the right-side border. Return the number of jumps. If you land on 0, return -1 (stuck forever).

Length N of the input list: [1, 1000].

Sample Input: 3 4 1 2 5 6 9 0 1 2 3 1
Sample Output: 4

## Solution

Simple loop iterating over indexes as dictated by input data. Start at position 0, compute next index based on current value.

```python
def jump_over_numbers(list):
    pos = 0
    ans = 0
    while pos < len(list):
        if list[pos] == 0:
            return -1
        ans += 1
        pos += list[pos]
    return ans
```

```cpp
int jump_over_numbers(const vector<int>& list) {
    int pos = 0;
    int ans = 0;
    while (pos < list.size()) {
        int curr_val = list[pos];
        if (curr_val == 0) return -1;
        ans++;
        pos += curr_val;
    }
    return ans;
}
```


---

# 跳过数字

来源：https://www.hiredintech.com/algorithms/data-structures/example-tasks-lists/jump-over-numbers/

## 题目描述

给定一个非负整数列表，你从最左边的整数开始。当前位置的数字为 P，向右跳 P 个位置。重复直到超出列表右边界。返回跳跃次数。如果落在 0 上，返回 -1（永远卡住）。

输入列表长度 N：[1, 1000]。

示例输入：3 4 1 2 5 6 9 0 1 2 3 1
示例输出：4

## 解答

简单的循环，按照输入数据指示的索引进行迭代。从位置 0 开始，根据当前值计算下一个索引。

```python
def jump_over_numbers(list):
    pos = 0
    ans = 0
    while pos < len(list):
        if list[pos] == 0:
            return -1
        ans += 1
        pos += list[pos]
    return ans
```
