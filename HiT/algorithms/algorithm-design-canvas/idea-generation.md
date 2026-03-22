# Idea Generation

Source: [https://www.hiredintech.com/algorithms/algorithm-design-canvas/idea-generation/](https://www.hiredintech.com/algorithms/algorithm-design-canvas/idea-generation/)

One of the goals of this course is to teach you how to solve new problems. We believe that it is much better to learn how to design solutions instead of trying to cover all interview questions that exist. New interview questions get created all the time - it is virtually impossible to know all of them by heart.

## Strategies for Solving Algorithmic Problems

### 1. Simplify the task

Example: "A map of streets is given as a rectangular grid with N columns and M rows. People at intersections want to meet at one intersection that minimizes total walking distance (Manhattan distance)."

Approach: Imagine only one street - find the median position. Then observe that finding X and Y coordinates are independent tasks (due to Manhattan distance). Solve two 1D problems to get the final answer.

This strategy allows you to start thinking about a simpler version and draw conclusions for the original problem.

### 2. Try a few examples

Candidates rarely test with examples other than the one given by the interviewer. Sometimes creating your own sample inputs helps you notice patterns.

Example: "N+1 parking spots (0 to N), N cars (1 to N). Reorder so car #i is in spot #i. Only allowed operation: move a car to the free spot."

Write down 5 different examples and try to order the cars on paper. See if you can notice a pattern.

### 3. Think of suitable data structures

For some problems it's apparent that a data structure will do the job. Consider what you know and try to apply them.

Example: "Design a data structure supporting: insert O(logN), return median O(1), delete median O(logN)."

Solution idea: Use two heaps - one stores the smaller half, the other stores the bigger half. The median is in the middle.

### 4. Think about related problems you know

If nothing else helps, try to remember a similar problem you've seen. Think if its solution can be adjusted for the current problem.

## Summary

- It is important to learn to solve any problem instead of knowing all of them by heart.
- There is a set of well-known strategies for approaching interview problems.
- Practice solving problems is the only way to really get in good shape.


---

# 想法生成

来源：[https://www.hiredintech.com/algorithms/algorithm-design-canvas/idea-generation/](https://www.hiredintech.com/algorithms/algorithm-design-canvas/idea-generation/)

本课程的目标之一是教你如何解决新问题。我们认为学习如何设计解决方案比试图覆盖所有面试题要好得多。新的面试题不断被创造出来——几乎不可能全部记住。

## 解决算法问题的策略

### 1. 简化任务

示例："给定一个 N 列 M 行的矩形网格街道图。交叉路口的人们想在一个交叉路口聚会，使总步行距离（曼哈顿距离）最小。"

方法：想象只有一条街——找中位数位置。然后观察到寻找 X 和 Y 坐标是独立的任务（由于曼哈顿距离）。解决两个一维问题即可得到最终答案。

这个策略让你从更简单的版本开始思考，并为原始问题得出结论。

### 2. 尝试几个例子

候选人很少用面试官给出之外的例子来测试。有时创建自己的样例输入有助于发现模式。

示例："N+1 个停车位（0 到 N），N 辆车（1 到 N）。重新排序使第 i 辆车在第 i 个位置。唯一允许的操作：将一辆车移到空位。"

写下 5 个不同的例子，在纸上试着排列汽车，看看能否发现规律。

### 3. 考虑合适的数据结构

对于某些问题，很明显某种数据结构可以解决。考虑你知道的数据结构并尝试应用。

示例："设计一个支持以下操作的数据结构：插入 O(logN)、返回中位数 O(1)、删除中位数 O(logN)。"

解决思路：使用两个堆——一个存储较小的一半，另一个存储较大的一半。中位数在中间。

### 4. 想想你知道的相关问题

如果其他方法都不管用，试着回忆你见过的类似问题。想想它的解法是否可以调整用于当前问题。

## 总结

- 学会解决任何问题比记住所有问题更重要。
- 有一组众所周知的面试问题解决策略。
- 练习解题是真正进入状态的唯一途径。
