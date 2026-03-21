# High-level Design

Source: https://www.hiredintech.com/system-design/the-summarization-problem/high-level-design/

We will try to scope out a high-level design proposal before going into details.

We have several types of front-end: a website and a mobile app. It makes most sense to have one back-end service serving requests from all front-end clients.


## Who talks to whom?

One possibility is to have a RESTful API exposed by the summarization service. This is simple but has scalability problems (discussed in the low-level section).

Responses also need to get back to front-end clients asynchronously.


## Where do we store things?

Text articles: limited to 100 KB max. Summaries: no more than 1 KB.

Storage estimates:
- 1 million requests/month × 100 KB = 100 GB per month
- Per year: ~1.2 TB of data
- Number of records per year: ~12 million

A relational database or NoSQL solution would work well. The data will be used for:
- Analyzing algorithm accuracy
- Statistical goals
- Showing customers a history of their requests and summaries

The high-level design shows: Front-end clients → Backend service → Summarization library → Database storage.


---

# 高层设计

来源：https://www.hiredintech.com/system-design/the-summarization-problem/high-level-design/

我们将尝试在深入细节之前先勾勒出一个高层设计方案。

我们有几种类型的前端：一个网站和一个移动应用。让一个后端服务为所有前端客户端提供服务是最合理的。


## 谁与谁通信？

一种可能是由摘要服务暴露一个RESTful API。这很简单，但存在可扩展性问题（在底层设计部分讨论）。

响应也需要以异步方式返回给前端客户端。


## 数据存储在哪里？

文本文章：最大限制100 KB。摘要：不超过1 KB。

存储估算：
- 每月100万请求 × 100 KB = 每月100 GB
- 每年：约1.2 TB数据
- 每年记录数：约1200万条

关系型数据库或NoSQL方案都可以。数据将用于：
- 分析算法准确性
- 统计目的
- 向客户展示他们的请求历史和摘要

高层设计展示：前端客户端 → 后端服务 → 摘要库 → 数据库存储。
