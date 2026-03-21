# The Summarization Problem

Source: https://www.hiredintech.com/system-design/the-summarization-problem/

Here is another example problem from a system design interview. Like with The Twitter Problem, we will start with a statement and then go through clarifying questions, designing the software architecture and resolving any issues.


## Statement

Imagine you are at a tech interview and you are asked the following:

> "In our company we already have developed a great library that can be used to summarize text articles. Just feed it the whole text and it will return a decent summary that is just a few sentences long.
> We need to put this in production and make it scalable. We expect that our customers will submit text articles from our mobile app and also from our website.
> The library currently takes between 0.1 and 5 seconds to summarize an article. You need to design a system that uses our existing library and allows users to submit text articles through the mobile app and through the website.
> We anticipate that this service will be used around 1 million times a month. Our desire is to not respond in more than 10 seconds to each request."

## Sub-sections

1. Clarifying Questions (clarifying-questions.txt)
2. High-level Design (high-level-design.txt)
3. Low-level Issues (low-level-issues.txt)
4. Summary (summary.txt)


---

# 文本摘要问题

来源：https://www.hiredintech.com/system-design/the-summarization-problem/

这是系统设计面试中的另一个示例问题。和Twitter问题一样，我们将从题目描述开始，然后经历澄清性问题、设计软件架构和解决可能的问题。


## 题目描述

假设你在技术面试中被问到以下问题：

> "在我们公司，我们已经开发了一个很棒的库，可以用来摘要文本文章。只需输入全文，它就会返回一个只有几句话的摘要。
> 我们需要将它投入生产并使其可扩展。我们预计客户将通过我们的移动应用和网站提交文本文章。
> 该库目前需要0.1到5秒来摘要一篇文章。你需要设计一个系统，使用我们现有的库，允许用户通过移动应用和网站提交文本文章。
> 我们预计该服务每月将被使用约100万次。我们希望每个请求的响应时间不超过10秒。"

## 子章节

1. 澄清性问题 (clarifying-questions.txt)
2. 高层设计 (high-level-design.txt)
3. 底层问题 (low-level-issues.txt)
4. 总结 (summary.txt)
