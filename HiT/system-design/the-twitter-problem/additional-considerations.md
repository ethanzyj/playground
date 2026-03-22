# Additional Considerations

Source: [https://www.hiredintech.com/system-design/the-twitter-problem/additional-considerations/](https://www.hiredintech.com/system-design/the-twitter-problem/additional-considerations/)


## Increased number of read requests

What if traffic suddenly grows 5x? The first bottleneck would likely be the database or the application servers.

Using cloud services like Amazon or Heroku makes it easy to add new machines. It's useful to be familiar with these products and services.

If all else is scaled, the load balancer could become a single point of failure. In such cases, consider doing additional load balancing using DNS, directing requests for the domain to different machines acting as load balancers.


## Scaling the database

If the read/write load increases significantly beyond what a single relational database can handle:

1. Add an in-memory cache (memcached) in front of the database to avoid repeated read requests
2. This is especially useful when a tweet goes viral or a user profile becomes highly popular
3. Consider database sharding for further scaling

Resources:
- Sharding and IDs at Instagram
- Sharding Postgres at Instagram
- Generating unique primary keys at Flickr when sharding


## Unexpected traffic

The interviewer warned about outliers: some users will have many more followers than average, and some tweets will attract a lot of attention in short periods.

- **Caching** helps answer popular/repeating requests without hitting the database
- **Auto-scaling** of computing nodes (Amazon, Heroku) helps handle peaks in application server requests


---

# 额外考虑

来源：[https://www.hiredintech.com/system-design/the-twitter-problem/additional-considerations/](https://www.hiredintech.com/system-design/the-twitter-problem/additional-considerations/)


## 读取请求增加

如果流量突然增长5倍怎么办？第一个瓶颈可能是数据库或应用服务器。

使用Amazon或Heroku等云服务可以轻松添加新机器。熟悉这些产品和服务是很有用的。

如果其他一切都已扩展，负载均衡器可能成为单点故障。在这种情况下，可以考虑使用DNS进行额外的负载均衡，将域名的请求指向充当负载均衡器的不同机器。


## 扩展数据库

如果读写负载显著增加，超出单个关系型数据库的处理能力：

1. 在数据库前添加内存缓存（memcached）以避免重复的读取请求
2. 当推文走红或用户资料变得非常热门时，这特别有用
3. 考虑数据库分片以进一步扩展

资源：
- Instagram的分片和ID生成
- Instagram的Postgres分片
- Flickr在分片时生成唯一主键


## 意外流量

面试官警告了异常值的存在：一些用户的粉丝比平均水平多得多，一些推文会在短时间内吸引大量关注。

- **缓存**有助于回答热门/重复的请求而不触及数据库
- 计算节点的**自动扩展**（Amazon、Heroku）有助于处理应用服务器请求的峰值
