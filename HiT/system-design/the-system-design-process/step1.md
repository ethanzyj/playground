# Step 1: Constraints and Use Cases

Source: [https://www.hiredintech.com/system-design/the-system-design-process/step1/](https://www.hiredintech.com/system-design/the-system-design-process/step1/)

Just like algorithm design, system design questions will also most likely be weakly defined. Consider the question about the URL-shortening service ("Design a URL shortening service like bit.ly"). There are so many things that are unclear about it! Without knowing more, it will be impossible to design an appropriate solution. Actually, many candidates forget about this and start designing a solution immediately.

Don't make this mistake!

The very first thing you should do with any system design question is to clarify the system's constraints and to identify what use cases the system needs to satisfy. Spend a few minutes questioning your interviewer and agreeing on the scope of the system. Many of the same rules we discussed while talking about algorithm design apply here as well.

Usually, part of what the interviewer wants to see is if you can gather the requirements about the problem at hand, and design a solution that covers them well. Never assume things that were not explicitly stated.

For example, the URL-shortening service could be meant to serve just a few thousand users, but each could be sharing millions of URLs. It could be meant to handle millions of clicks on the shortened URLs, or dozens. The service may have to provide extensive statistics about each shortened URL (which will increase your data size), or statistics may not be a requirement at all.

You will also have to think about the use cases that are expected to occur. Your system will be designed based on what it's expected to do. Don't forget to make sure you know all the requirements the interviewer didn't tell you about in the beginning.


## Example

Here's an example of how we'd approach defining the use cases and the constraints for the URL shortening problem.

> Note: The calculations are based largely on many assumptions and gut feeling. They may be incorrect. The point is that at the interview, if you need to come up with such numbers it's good to have some background knowledge but also to be able to do reasonable conclusions about the numbers and to explain them to the interviewer.


---

# 第一步：约束条件和用例

来源：[https://www.hiredintech.com/system-design/the-system-design-process/step1/](https://www.hiredintech.com/system-design/the-system-design-process/step1/)

就像算法设计一样，系统设计问题很可能也是定义不明确的。想想关于URL缩短服务的问题（"设计一个像bit.ly那样的URL缩短服务"）。有太多不清楚的地方！如果不了解更多信息，就不可能设计出合适的解决方案。实际上，许多候选人忘记了这一点，立刻开始设计解决方案。

不要犯这个错误！

对于任何系统设计问题，你应该做的第一件事就是明确系统的约束条件，并确定系统需要满足哪些用例。花几分钟向面试官提问，就系统的范围达成一致。我们在讨论算法设计时提到的许多规则在这里同样适用。

通常，面试官想看到的部分是你能否收集关于手头问题的需求，并设计一个很好地覆盖这些需求的解决方案。永远不要假设那些没有明确说明的事情。

例如，URL缩短服务可能只为几千名用户服务，但每个用户可能分享数百万个URL。它可能需要处理数百万次对缩短URL的点击，也可能只有几十次。该服务可能需要提供关于每个缩短URL的详细统计信息（这会增加数据量），也可能统计根本不是需求。

你还需要考虑预期会出现的用例。你的系统将根据它预期要做的事情来设计。不要忘记确保你知道面试官在开始时没有告诉你的所有需求。


## 示例

以下是我们为URL缩短问题定义用例和约束条件的方法示例。

> 注意：这些计算主要基于许多假设和直觉判断，可能并不准确。关键是在面试中，如果你需要得出这样的数字，最好有一些背景知识，同时能够对数字做出合理的推断并向面试官解释。
