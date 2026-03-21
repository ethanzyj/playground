# Summary

Source: https://www.hiredintech.com/system-design/the-summarization-problem/summary/

Given a quite vague initial problem statement we managed to design a system that should work well in production under the expected constraints. The system will probably have some flaws in its current form but the important thing is that it already is quite robust and able to scale.

At an interview you can always be asked to dig deeper into one or a few particular parts. You need to be familiar with concrete solutions: message queue solutions, database choices, etc.

Each interview is unique and you will need to adapt. In this example we went through:

- Tried to collect information about the constraints of the problem
- Drafted a very high-level design. While doing that, some additional questions popped up and by getting answers we made the right decisions. We made sure the interviewer was happy with our direction before going into details.
- Went into more details to address various production issues. This is the most time-consuming part involving more detailed discussions about technology solutions and actual numbers.

Note that it's fine to ask additional clarifying questions throughout the whole interview. Whenever you feel like it's not possible to make a good design choice with the information you have, you may be missing important information.

Sometimes the interviewer may not tell you all that you need. They may want to see if you can make trade-offs between possible solutions.


---

# 总结

来源：https://www.hiredintech.com/system-design/the-summarization-problem/summary/

从一个相当模糊的初始问题描述出发，我们成功设计了一个在预期约束条件下应该能在生产环境中良好运行的系统。系统目前的形式可能还有一些缺陷，但重要的是它已经相当健壮且能够扩展。

在面试中，你总是可能被要求深入一两个特定部分。你需要熟悉具体的解决方案：消息队列方案、数据库选择等。

每次面试都是独特的，你需要适应。在这个例子中我们经历了：

- 尝试收集问题约束条件的信息
- 起草了一个非常高层的设计。在此过程中，一些额外的问题出现了，通过获取答案我们做出了正确的决策。我们在深入细节之前确保面试官对我们的方向感到满意。
- 深入更多细节来解决各种生产环境问题。这是最耗时的部分，涉及关于技术方案和实际数字的更详细讨论。

请注意，在整个面试过程中提出额外的澄清性问题是完全可以的。每当你觉得以现有信息无法做出好的设计决策时，你可能缺少面试官可以给你的重要信息。

有时面试官可能不会告诉你所有需要的信息。他们可能想看看你是否能在可能的解决方案之间做出权衡。
