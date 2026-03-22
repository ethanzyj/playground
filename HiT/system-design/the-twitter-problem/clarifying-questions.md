# Clarifying Questions

Source: [https://www.hiredintech.com/system-design/the-twitter-problem/clarifying-questions/](https://www.hiredintech.com/system-design/the-twitter-problem/clarifying-questions/)

The way it is given, this problem is very unclear. At first, it may seem that you don't need more than this one sentence. But think about it - being the architect and developer you need to know much more in order to make the proper decisions.

First of all, how many users do we expect? The interviewer says:

> "Well… to make things interesting, let's aim for 10 million users generating around 100 million requests per day."

Since we have the notion of following someone, how connected will these users be?

> "We expect that each user will be following 200 other users on average, but expect some extraordinary users with tens of thousands of followers."

How many tweets and likes?

> "We expect that there will be a maximum of 10 million tweets per day and each tweet will probably be liked twice on average but again, expect some big outliers."


## Quick calculations

- 10 million users
- Average 200 follows per user → 200 * 10M = 2 billion "follow" edges
- 10 million tweets per day
- 20 million tweet likes per day
- 100 million HTTP requests per day → ~1,150 requests/second on average

The interviewer wants a system that loads quickly (none of the operations should take more than a few hundred milliseconds) and should be online all the time with no planned downtimes.

The question-asking session should probably not last more than a few minutes in a 40-45 minute interview.


## Summary of constraints

- 10 million users
- 10 million tweets per day
- 20 million tweet likes per day
- 100 million HTTP requests to the site
- 2 billion "follow" relations
- Some users and tweets could generate an extraordinary amount of traffic


---

# 澄清性问题

来源：[https://www.hiredintech.com/system-design/the-twitter-problem/clarifying-questions/](https://www.hiredintech.com/system-design/the-twitter-problem/clarifying-questions/)

按照给出的方式，这个问题是非常不明确的。起初，似乎你只需要这一句话。但仔细想想——作为架构师和开发者，你需要了解更多信息才能做出正确的决策。

首先，我们预计有多少用户？面试官说：

> "嗯……为了让事情更有趣，我们的目标是1000万用户，每天产生约1亿次请求。"

由于我们有关注的概念，这些用户之间的连接度如何？

> "我们预计每个用户平均关注200个其他用户，但预计会有一些拥有数万粉丝的特殊用户。"

推文和点赞数量呢？

> "我们预计每天最多有1000万条推文，每条推文平均被点赞两次，但同样预计会有一些大的异常值。"


## 快速计算

- 1000万用户
- 平均每用户关注200人 → 200 * 1000万 = 20亿条"关注"边
- 每天1000万条推文
- 每天2000万次推文点赞
- 每天1亿次HTTP请求 → 平均约1150次请求/秒

面试官希望系统加载速度快（所有操作都不应超过几百毫秒），并且应该全天在线，没有计划的停机时间。

在40-45分钟的面试中，提问环节可能不应超过几分钟。


## 约束条件总结

- 1000万用户
- 每天1000万条推文
- 每天2000万次推文点赞
- 1亿次HTTP请求
- 20亿条"关注"关系
- 某些用户和推文可能产生异常大的流量
