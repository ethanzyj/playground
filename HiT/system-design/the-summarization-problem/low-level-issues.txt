# Low-level Issues

Source: https://www.hiredintech.com/system-design/the-summarization-problem/low-level-issues/

The simple approach of a RESTful API has two issues: scalability and robustness.

If incoming requests increase, the service may be unable to handle all requests and some could time out. We could use multiple instances with a load balancer, but if an instance fails, requests routed to it could be lost.


## Let's try message queues!

A **message queue** solves both problems:

1. All summarization requests are enqueued as "jobs"
2. Multiple worker instances pull jobs from the queue one at a time
3. Each worker processes the job using the summarization library and stores results in the database

**Scaling**: When the queue fills up, a monitoring service spins up additional workers.

**Reliability**: Only properly operating workers pull jobs. If a worker crashes, the queue doesn't receive acknowledgement and re-queues the job after a timeout. (e.g., Amazon SQS has a default of 10 retries before moving to a dead-letter queue.)

**Key benefits of message queues:**
1. Easy to scale up by spinning up more workers
2. Handle unexpected problems without losing jobs

**Handling overload**: The website backend (behind a load balancer) enqueues jobs. The mobile app sends requests to the same backend. Under extreme load, the load balancer can rate-limit traffic rather than accept articles and fail to process them.

Useful resources:
- What is message queueing?
- RabbitMQ tutorials


## Storing the results

With ~12 million records per year, a standard relational database works fine. Workers write results directly to the database. Front-end clients can then retrieve and display results.

The final architecture:
- Multiple front-ends (web + mobile) → Load Balancer → Website Backend → Message Queue → Summarization Workers → Database


---

# 底层问题

来源：https://www.hiredintech.com/system-design/the-summarization-problem/low-level-issues/

简单的RESTful API方法存在两个问题：可扩展性和鲁棒性。

如果传入请求增加，服务可能无法处理所有请求，一些请求可能会超时。我们可以使用多个实例配合负载均衡器，但如果某个实例故障，路由到它的请求可能会丢失。


## 试试消息队列！

**消息队列**可以解决这两个问题：

1. 所有摘要请求作为"任务"入队
2. 多个工作实例从队列中逐个拉取任务
3. 每个工作进程使用摘要库处理任务并将结果存储到数据库

**扩展**：当队列开始填满时，监控服务可以启动额外的工作进程。

**可靠性**：只有正常运行的工作进程才会从队列拉取任务。如果工作进程崩溃，队列不会收到确认，并在超时后重新将任务变为可用。（例如，Amazon SQS默认重试10次后移至死信队列。）

**消息队列的主要优势：**
1. 通过启动更多工作进程轻松扩展
2. 处理意外问题而不丢失任务

**处理过载**：网站后端（位于负载均衡器后面）将任务入队。移动应用将请求发送到同一个后端。在极端负载下，负载均衡器可以限流，而不是接受文章然后处理失败。

有用的资源：
- 什么是消息队列？
- RabbitMQ教程


## 存储结果

每年约1200万条记录，标准关系型数据库就足够了。工作进程直接将结果写入数据库。前端客户端随后可以检索和显示结果。

最终架构：
- 多个前端（网页+移动端）→ 负载均衡器 → 网站后端 → 消息队列 → 摘要工作进程 → 数据库
