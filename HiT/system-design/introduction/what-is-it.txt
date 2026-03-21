# What Are System Design Questions?

Source: https://www.hiredintech.com/system-design/introduction/what-is-it/

In this section we'll talk about the questions which require the interviewee to design a high-level architecture for some sort of a software system. This can be a web facing service, a RESTful API, a peer-to-peer desktop app, and so on. The exact type of question will most likely vary depending on the specifics of the company you interview at.


## Some examples

We can give a few examples of such questions:

- Design a URL shortening service like bit.ly.
- How would you implement a web search engine?
- Design a client-server application which allows people to play chess with one another.
- How would you store the relations in a social network like Facebook and implement a feature where one user receives notifications when their friends like the same things as they do?

Hopefully these example questions give you some idea of what we will be talking about. The web is full of many other examples. In addition to that the book "Cracking the Coding Interview" has a small section offering some more such questions.


## Don't panic

These questions may seem intimidating at first. After all, how does one design a web search engine in 20-30 minutes!? It has taken many smart people multiple years to do that properly. Don't worry, no one really expects that from you.

The idea of these questions is to have a discussion about the problem at hand. What's important for the interviewer is the process, which you use to tackle the problem. The typical outcome of such a discussion is a high-level architecture addressing the goals and constraints in the question. Perhaps the interviewer will choose one or more areas where they will want to discuss bottlenecks and other common problems.

Remember that there is no one right answer. A system can be built in different ways. The important thing is to be able to justify your ideas. This is somewhat different from the algorithm design questions, which are discussed in the course on algorithmic interviews.

Finally, keep in mind that the discussion about the same system design problem could go in different directions depending on the goals of the interviewer. They may be willing to see how you create a high-level architecture covering all aspects of the system. Or rather, they could be more interested in looking at a few specific areas and diving deeper into them. In any case, you should have a strategy for how to approach the different situations. We will look into such strategies in the next sections.


## Our approach

Similar to the algorithmic questions, we believe that system design questions require a combination of the right strategy and knowledge. By strategy we mean a way to approach the problem at an interview. We've seen good candidates fail not because they lack the knowledge but because they cannot focus on the right things while discussing a problem.

Because of that, in the next few sections, we will present our strategy for approaching system design questions at tech interviews. In addition to that, we've collected useful online resources, which will help you update your knowledge of software systems design.


---

# 什么是系统设计题？

来源：https://www.hiredintech.com/system-design/introduction/what-is-it/

在本节中，我们将讨论要求面试者为某种软件系统设计高层架构的问题。这可以是面向网络的服务、RESTful API、点对点桌面应用程序等。具体的问题类型很可能会根据你面试的公司的具体情况而有所不同。


## 一些例子

我们可以举几个这类问题的例子：

- 设计一个像bit.ly那样的URL缩短服务。
- 你会如何实现一个网页搜索引擎？
- 设计一个允许人们互相下棋的客户端-服务器应用程序。
- 你会如何存储像Facebook这样的社交网络中的关系，并实现一个功能：当用户的朋友喜欢和他们相同的东西时，用户会收到通知？

希望这些示例问题能让你对我们将要讨论的内容有一些了解。网上还有很多其他的例子。此外，《Cracking the Coding Interview》一书中有一小节提供了更多这样的问题。


## 不要慌

这些问题起初可能看起来很吓人。毕竟，怎么在20-30分钟内设计一个网页搜索引擎！？许多聪明的人花了好几年才正确地做到这一点。别担心，没有人真的期望你做到那样。

这些问题的目的是就手头的问题进行讨论。对面试官来说重要的是你用来解决问题的过程。这种讨论的典型结果是一个高层架构，解决问题中的目标和约束。也许面试官会选择一两个领域，深入讨论瓶颈和其他常见问题。

记住，没有唯一正确的答案。一个系统可以用不同的方式构建。重要的是能够证明你的想法是合理的。这与算法设计问题有些不同。

最后，请记住，关于同一个系统设计问题的讨论可能会根据面试官的目标走向不同的方向。他们可能希望看到你创建一个涵盖系统所有方面的高层架构。或者，他们可能更感兴趣的是查看几个特定领域并深入研究。无论如何，你应该有一个策略来应对不同的情况。我们将在接下来的章节中讨论这些策略。


## 我们的方法

与算法问题类似，我们认为系统设计问题需要正确的策略和知识的结合。所谓策略，是指在面试中处理问题的方法。我们见过优秀的候选人失败，不是因为他们缺乏知识，而是因为他们在讨论问题时无法专注于正确的事情。

因此，在接下来的几节中，我们将展示我们在技术面试中处理系统设计问题的策略。此外，我们还收集了有用的在线资源，帮助你更新软件系统设计的知识。
