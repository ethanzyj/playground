# High-level Design

Source: [https://www.hiredintech.com/system-design/the-twitter-problem/high-level-design/](https://www.hiredintech.com/system-design/the-twitter-problem/high-level-design/)

It's a good idea to start from the top and define the main parts of our application. We can divide our architecture in two logical parts: 1) the logic handling all incoming requests and 2) the data storage.

Our application will need to handle requests for:
- posting new tweets
- following a user
- liking a tweet
- displaying data about users and tweets

The first three are write operations; the last is read (and the most common).


## Handling user requests

Expected daily load: 100 million requests → ~1,150 requests/second average, must handle a few thousand at peaks.

We would use a **load balancer** with a set of **application servers** behind it:
- Resilience: if one server goes down, others handle the load
- No special high-memory/CPU requirements — regular commodity machines work well
- Easy to scale out by adding more servers

Useful resources: Wikipedia on load balancing, Amazon ELB, nginx, HAProxy.


## Storing the data

What needs to be stored:
- User profiles
- Tweets (content + author)
- Follow relationships (~2 billion edges, ~16 GB)
- Likes (~240 GB for a year at 20M/day)
- Tweets themselves: ~2.5 TB (the largest portion)

Total storage estimate: ~2.6-2.7 TB

**Decision**: Use a relational database (MySQL/Postgres). Real companies like Twitter and Facebook have used relational databases for similar loads with tuning.

**Caching**: Use memcached in front of the database to handle repeated reads for popular tweets/profiles, since reading from memory is much faster than reading from disk.


---

# 高层设计

来源：[https://www.hiredintech.com/system-design/the-twitter-problem/high-level-design/](https://www.hiredintech.com/system-design/the-twitter-problem/high-level-design/)

最好从顶层开始，定义应用程序的主要部分。我们可以将架构分为两个逻辑部分：1）处理所有传入请求的逻辑，2）数据存储。

我们的应用需要处理以下请求：
- 发布新推文
- 关注用户
- 点赞推文
- 显示用户和推文数据

前三个是写操作；最后一个是读操作（也是最常见的）。


## 处理用户请求

预期日负载：1亿次请求 → 平均约1150次/秒，峰值时需处理数千次。

我们将使用**负载均衡器**，后面运行一组**应用服务器**：
- 弹性：如果一台服务器宕机，其他服务器可以处理负载
- 没有特殊的高内存/CPU要求——普通商用机器就可以
- 通过添加更多服务器可以轻松水平扩展

有用的资源：维基百科关于负载均衡、Amazon ELB、nginx、HAProxy。


## 存储数据

需要存储的内容：
- 用户资料
- 推文（内容+作者）
- 关注关系（约20亿条边，约16 GB）
- 点赞（按每天2000万计，一年约240 GB）
- 推文本身：约2.5 TB（最大的部分）

总存储估计：约2.6-2.7 TB

**决策**：使用关系型数据库（MySQL/Postgres）。像Twitter和Facebook这样的真实公司已经使用关系型数据库处理过类似的负载，只是需要调优。

**缓存**：在数据库前面使用memcached来处理热门推文/用户资料的重复读取，因为从内存读取比从磁盘读取快得多。
