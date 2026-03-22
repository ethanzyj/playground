# Examples

Source: https://www.hiredintech.com/system-design/scalability/examples/

The awesome thing about scalability is that it's all around us. If you want to work on an exciting and successful product or service, by definition it's going to have to operate at scale.

Many of the web's largest websites have been very open about how they scale. It's extremely interesting to look "under the hood" of Instagram, Salesforce.com, TripAdvisor, Twitter, Google, and many, many others. That's exactly what we'll be doing in this section.

The goal is to show you how the theoretical principles from the previous section are applied in practice, as well as to introduce you to some of the real-life technologies many companies use nowadays.


## Let's get going!

The HighScalability blog is our favorite resource for reading about scalability. Here are some real-life architectures we'd recommend you read, analyze and understand:

- Deep Learning in production: How EyeEm built their production system running multiple deep learning models on huge amounts of images
- Uber: How Uber had to scale fast, about breaking your service into many micro services spread across many repos
- Facebook: How Facebook handles 800,000 simultaneous viewers on a live stream
- Kraken.io: How to scale image optimisation at a large scale
- Twitter: How Twitter handles 3,000 image uploads per second
- PlentyOfFish: A great example of what a single engineer can achieve in terms of scalability
- Salesforce: A relatively short example from Salesforce
- ESPN: An awesome and thorough example from the digital media industry
- Twitter subcomponents: Storing data and Timeline
- Advanced examples: Google, Youtube, Tumblr, StackOverflow, and Datashift

Don't worry if you don't understand everything. Try to focus on the shared principles used, and keep track of the lessons learned by these folks.

As you read the posts, you'll start noticing common technologies and patterns appear. Make sure you do some research on each frequently seen technology. Try to write down what problem it solves, what its alternatives are, and what some common pros and cons may be.

One good way to research the alternatives to a technology is to type its name in Google followed by " vs ", and see what shows up in the Google Suggest box.


## Summary

When it comes to system design, it's incredibly useful to review real-life architectures. As you do this, make sure you:

- Pay attention to what technologies are used. Research each new technology and see what problem it solves, what its alternatives are, where it excels, and where it fails.
- Take note of the common patterns you see, and how they relate to the scalability theory you learned in the previous section.
- Read through the lessons learned - they are a very quick way to learn from other people's battle scars.


---

# 实例

来源：https://www.hiredintech.com/system-design/scalability/examples/

可扩展性的美妙之处在于它无处不在。如果你想从事一个令人兴奋且成功的产品或服务，那么它几乎一定需要在大规模下运行。

许多全球最大的网站都非常开放地分享了它们如何扩展。深入了解Instagram、Salesforce.com、TripAdvisor、Twitter、Google等等的"内部运作"是非常有趣的。这正是我们在本节中要做的事情。

目标是向你展示上一节中的理论原则如何在实践中应用，并向你介绍当今许多公司使用的一些实际技术。


## 开始吧！

HighScalability博客是我们阅读可扩展性最喜欢的资源。以下是一些我们推荐你阅读、分析和理解的真实架构案例：

- 深度学习生产环境：EyeEm如何构建在大量图像上运行多个深度学习模型的生产系统
- Uber：Uber如何快速扩展，将服务拆分为分布在多个仓库中的微服务
- Facebook：Facebook如何处理直播中80万同时在线观众
- Kraken.io：如何大规模扩展图像优化
- Twitter：Twitter如何处理每秒3000次图像上传
- PlentyOfFish：一个工程师在可扩展性方面能做到什么的好例子
- Salesforce：来自Salesforce的一个相对简短的例子
- ESPN：来自数字媒体行业的一个精彩而全面的例子
- Twitter子组件：数据存储和时间线
- 高级例子：Google、Youtube、Tumblr、StackOverflow和Datashift

如果你不能理解所有内容，不要担心。试着关注使用的共同原则，并记录这些人学到的经验教训。

当你阅读这些文章时，你会开始注意到出现的共同技术和模式。确保你对每个经常出现的技术做一些研究。试着写下它解决什么问题、它的替代方案是什么，以及一些常见的优缺点。

研究技术替代方案的一个好方法是在Google中输入技术名称后跟" vs "，看看Google建议框中出现了什么。


## 总结

在系统设计方面，审查真实架构是非常有用的。在做这件事时，确保你：

- 注意使用了哪些技术。研究每项新技术，看看它解决什么问题、替代方案是什么、它在哪些方面表现出色、在哪些方面有不足。
- 记下你看到的共同模式，以及它们与你在上一节学到的可扩展性理论的关系。
- 阅读经验教训——它们是从别人的实战经验中快速学习的好方法。
