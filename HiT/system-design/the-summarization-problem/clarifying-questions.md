# Clarifying Questions

Source: [https://www.hiredintech.com/system-design/the-summarization-problem/clarifying-questions/](https://www.hiredintech.com/system-design/the-summarization-problem/clarifying-questions/)

We already have useful information: expected requests per month and expected latency. Given the library takes up to 5 seconds, we have at most 5 more seconds of additional latency. Processing must be done in real-time.

Key questions asked:

**What is the expected maximum simultaneous requests?**
> "We can expect up to 50 requests per second at times. But the design should allow us to relatively easily scale up."

**Do we store the results?**
> "Yes, certainly. We want to store the incoming text articles and the summary for each one of them for statistics and to inspect algorithm performance."

**How are results presented to users?**
> "After users send a text article through the website or mobile app, we want to redirect them to a screen which indicates that summarization is in progress and update the screen with the results once available."


## Summary of constraints

- Expected monthly requests: around 1 million
- At most 50 requests per second, but architecture should easily expand
- Responses should not take more than 10 seconds (library may take 5 seconds)
- Summaries presented asynchronously to users


---

# 澄清性问题

来源：[https://www.hiredintech.com/system-design/the-summarization-problem/clarifying-questions/](https://www.hiredintech.com/system-design/the-summarization-problem/clarifying-questions/)

我们已经有了一些有用的信息：预期的每月请求量和预期延迟。鉴于库最多需要5秒，我们最多还有5秒的额外延迟。处理必须实时完成。

提出的关键问题：

**预期的最大同时请求量是多少？**
> "我们预计有时会达到每秒50个请求。但设计应该允许我们相对容易地扩展。"

**需要存储结果吗？**
> "当然。我们想存储传入的文本文章和每篇的摘要，用于统计和检查算法性能。"

**结果如何呈现给用户？**
> "在用户通过网站或移动应用发送文本文章后，我们希望将他们重定向到一个显示摘要正在进行的页面，并在结果可用时更新页面。"


## 约束条件总结

- 预期每月请求量：约100万
- 最多每秒50个请求，但架构应易于扩展
- 响应时间不应超过10秒（库可能需要5秒）
- 摘要以异步方式呈现给用户
