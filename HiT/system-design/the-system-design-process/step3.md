# Step 3: Understanding Bottlenecks

Source: [https://www.hiredintech.com/system-design/the-system-design-process/step3/](https://www.hiredintech.com/system-design/the-system-design-process/step3/)

Most likely your high-level design will have one or more bottlenecks given the constraints of the problem. This is perfectly ok. You are not expected to design a system from the ground up, which immediately handles all the load in the world. It just needs to be scalable, in order for you to be able to improve it using some standard tools and techniques.

Now that you have your high-level design, start thinking about what bottlenecks it has. Perhaps your system needs a load balancer and many machines behind it to handle the user requests. Or maybe the data is so huge that you need to distribute your database on multiple machines. What are some of the downsides that occur from doing that? Is the database too slow and does it need some in-memory caching?

These are just examples of questions that you may have to answer in order to make your solution complete. It may be the case that the interviewer wants to direct the discussion in one particular direction. Then, maybe you won't need to address all the bottlenecks but rather talk in more depth about one particular area. In any case, you need to be able to identify the weak spots in a system and be able to resolve them.

Remember, usually each solution is a trade-off of some kind. Changing something will worsen something else. However, the important thing is to be able to talk about these trade-offs, and to measure their impact on the system given the constraints and use cases defined.

Once you've outlined the core bottlenecks you see, you can start addressing them in the next step.


## Example

Here's an example of how we'd think about the bottlenecks for the URL shortening service.


---

# 第三步：理解瓶颈

来源：[https://www.hiredintech.com/system-design/the-system-design-process/step3/](https://www.hiredintech.com/system-design/the-system-design-process/step3/)

在给定问题的约束条件下，你的高层设计很可能会有一个或多个瓶颈。这完全没问题。没有人期望你从零开始设计一个能立即处理世界上所有负载的系统。它只需要是可扩展的，以便你能够使用一些标准工具和技术来改进它。

现在你有了高层设计，开始思考它有什么瓶颈。也许你的系统需要一个负载均衡器和后面的许多机器来处理用户请求。或者数据量太大，你需要将数据库分布在多台机器上。这样做会产生哪些缺点？数据库是否太慢，是否需要一些内存缓存？

这些只是你可能需要回答的问题的例子，以使你的解决方案完整。面试官可能想将讨论引向某个特定方向。那么，你可能不需要解决所有瓶颈，而是更深入地讨论某个特定领域。无论如何，你需要能够识别系统中的薄弱环节并能够解决它们。

记住，通常每个解决方案都是某种权衡。改变某些东西会使其他东西变差。然而，重要的是能够讨论这些权衡，并根据定义的约束条件和用例来衡量它们对系统的影响。

一旦你概述了你看到的核心瓶颈，就可以在下一步中开始解决它们。


## 示例

以下是我们如何思考URL缩短服务瓶颈的示例。
