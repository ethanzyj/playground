# Time Complexity

Source: [https://www.hiredintech.com/algorithms/computational-complexity/time-complexity/](https://www.hiredintech.com/algorithms/computational-complexity/time-complexity/)

Time complexity is measured in terms of the input size. For the palindrome example, generating all N! permutations takes steps proportional to N!. Checking each permutation for palindrome takes N steps. Total: proportional to N! * N.

## Example: Selection Sort

```
for (int i = 0; i < len - 1; i++) {
    for (int j = i + 1; j < len; j++) {
        if (arr[i] > arr[j]) {
            int tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
```

Inner loop iterations: (N-1) + (N-2) + ... + 1 = N*(N-1)/2, proportional to N^2. As N grows linearly, the algorithm slows down quadratically.

## Key Points

- You are usually interested in finding the slowest part of your algorithm.
- If preprocessing takes N*M steps but core algorithm takes N*M^2, then N*M^2 is the actual time complexity.
- For most tech interviews use big-O notation.

## Resources

- TopCoder's 2-part tutorial on computational complexity
- Cprogramming.com tutorial
- MIT lecture handout


---

# 时间复杂度

来源：[https://www.hiredintech.com/algorithms/computational-complexity/time-complexity/](https://www.hiredintech.com/algorithms/computational-complexity/time-complexity/)

时间复杂度以输入大小来衡量。对于回文示例，生成所有 N! 个排列需要与 N! 成正比的步骤。检查每个排列是否为回文需要 N 步。总计：与 N! * N 成正比。

## 示例：选择排序

```
for (int i = 0; i < len - 1; i++) {
    for (int j = i + 1; j < len; j++) {
        if (arr[i] > arr[j]) {
            int tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
```

内层循环迭代次数：(N-1) + (N-2) + ... + 1 = N*(N-1)/2，与 N^2 成正比。当 N 线性增长时，算法的速度呈二次方减慢。

## 关键要点

- 你通常需要找到算法中最慢的部分。
- 如果预处理需要 N*M 步但核心算法需要 N*M^2 步，那么 N*M^2 才是实际的时间复杂度。
- 在大多数技术面试中使用大 O 表示法。

## 资源

- TopCoder 的两部分计算复杂度教程
- Cprogramming.com 教程
- MIT 讲义
