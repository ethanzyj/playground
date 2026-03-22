# Writing the Code

Source: [https://www.hiredintech.com/algorithms/algorithm-design-canvas/writing-the-code/](https://www.hiredintech.com/algorithms/algorithm-design-canvas/writing-the-code/)

At this point, you've already nailed the constraints of a problem, iterated on a few ideas, evaluated their complexities and picked the one to implement. Never, ever jump straight into coding before having thought about and discussed constraints, ideas and complexities with your interviewer.

## Coding Outside Your IDE

Coding in your IDE is not the same as coding on a whiteboard / shared document / online system. We've become so accustomed to relying on our IDEs that when presented with a blank sheet of paper, we are lost. This is why you need special preparation for "interview coding."

Key things to keep in mind:

- Think before you code. If coding on paper (no "undo"), things can get messy quickly.
- Good code style still matters. Name variables properly, indent nicely, write clean code.
- Decompose your code into small logical pieces. Don't copy-paste.
- Read your code multiple times before claiming it's ready. You don't have the luxury to compile, run, and debug for 4 hours. Your code needs to work off the bat.

> Nowadays more interviews are conducted online in shared editors. Practice on paper, whiteboard, or in a simple editor to be prepared for all possibilities.

## Example - ZigZag

Source code written for the ZigZag problem:

```
int longestZigZagSequence(int N, std::vector<int> a) {
    std::vector<int> up;
    std::vector<int> down;
    int bestLength = 1;
    up.push_back(1);
    down.push_back(1);
    for (int i = 1; i < N; i++) {
        up.push_back(1);
        down.push_back(1);
        for (int j = 0; j < i; j++) {
            if (a[i] > a[j]) {
                up[i] = max(down[j] + 1, up[i]);
            }
            if (a[i] < a[j]) {
                down[i] = max(up[j] + 1, down[i]);
            }
        }
        bestLength = max(bestLength, max(up[i], down[i]));
    }
    return bestLength;
}
```

## Summary

- When should you start coding at the interview?
- Coding for an interview is not like coding in your IDE.
- Important tips for writing interview code.


---

# 编写代码

来源：[https://www.hiredintech.com/algorithms/algorithm-design-canvas/writing-the-code/](https://www.hiredintech.com/algorithms/algorithm-design-canvas/writing-the-code/)

到这一步，你已经确定了问题的约束，迭代了几个想法，评估了它们的复杂度，并选择了要实现的方案。永远不要在与面试官讨论约束、想法和复杂度之前就直接开始编码。

## 在 IDE 之外编码

在 IDE 中编码与在白板/共享文档/在线系统上编码是不同的。我们已经非常依赖 IDE，当面对一张白纸时就会迷失。这就是为什么你需要为"面试编码"做专门准备。

关键注意事项：

- 编码前先思考。如果在纸上编码（没有"撤销"），事情很快会变得混乱。
- 良好的代码风格仍然重要。正确命名变量，整齐缩进，编写干净的代码。
- 将代码分解为小的逻辑块。不要复制粘贴。
- 在声称代码完成之前多次阅读。你没有编译、运行和调试 4 小时的奢侈。你的代码需要一次就能工作。

> 现在越来越多的面试在在线共享编辑器中进行。在纸上、白板上或简单编辑器中练习，以便为所有可能性做好准备。

## 示例 - ZigZag

为 ZigZag 问题编写的源代码：

```
int longestZigZagSequence(int N, std::vector<int> a) {
    std::vector<int> up;
    std::vector<int> down;
    int bestLength = 1;
    up.push_back(1);
    down.push_back(1);
    for (int i = 1; i < N; i++) {
        up.push_back(1);
        down.push_back(1);
        for (int j = 0; j < i; j++) {
            if (a[i] > a[j]) {
                up[i] = max(down[j] + 1, up[i]);
            }
            if (a[i] < a[j]) {
                down[i] = max(up[j] + 1, down[i]);
            }
        }
        bestLength = max(bestLength, max(up[i], down[i]));
    }
    return bestLength;
}
```

## 总结

- 面试中什么时候该开始编码？
- 面试编码与 IDE 编码不同。
- 编写面试代码的重要技巧。
