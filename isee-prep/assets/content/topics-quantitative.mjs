export const TOPIC = {
  id: "quantitative-reasoning",
  zh: "数量推理",
  en: "Quantitative Reasoning",
  officialAlignment: "Quantitative Reasoning: word problems at every level, plus quantitative comparisons at the Middle and Upper Levels",
  officialAlignmentZh: "数量推理部分：各级别的应用题，以及中级、高级的数量比较题",
  concepts: [
    {
      id: "quantitative-comparisons",
      zh: "数量比较",
      en: "Quantitative Comparisons",
      detailEn: "The four-choice comparison format and the strategies that settle it quickly: cancel shared amounts, use a common form, plug in numbers, and know when the answer is “cannot be determined.”",
      detailZh: "数量比较的四选项格式，以及快速判断的策略：消去共有的量、化成相同形式、代入数值，并识别何时应选“无法确定”。",
      explanationEn: "On the Middle and Upper Levels, roughly 14–17 of the 37 Quantitative Reasoning questions are comparisons. You see two quantities, Column A and Column B, and choose (A) Column A is greater, (B) Column B is greater, (C) the two are equal, or (D) the relationship cannot be determined. You never need a final value, only a decision about which side is larger, so comparing is usually faster than calculating. Choice (D) is correct only when different allowed values lead to different results; if both columns contain only fixed numbers, (D) is impossible. The Lower Level has no comparisons, but estimating and testing values still help with its word problems.",
      explanationZh: "在中级和高级的数量推理部分（共 37 题），大约有 14–17 题是数量比较题。题目给出 A 列和 B 列两个量，你要在四个选项中选择：(A) A 列更大，(B) B 列更大，(C) 两者相等，(D) 根据所给信息无法确定。你不需要求出最终的数值，只需判断哪一边更大，所以“比较”通常比“计算”更快。只有当允许范围内的不同取值会得出不同结果时，才选 (D)；如果两列都只是确定的数，就不可能选 (D)。初级没有数量比较题，但估算和代入检验同样有助于做初级的应用题。",
      keyPoints: [
        {
          titleEn: "Know the four choices and the given information",
          titleZh: "先弄清四个选项和已知条件",
          explanationEn: String.raw`Before comparing anything, read the information given about the variables, such as “\(x\) is a positive integer.” It tells you exactly which values you may test, and you may not assume anything extra. If both columns contain only fixed numbers, one of (A), (B) or (C) must be correct, so never pick (D). When a variable is involved, (D) is correct as soon as two allowed values give different relationships.`,
          explanationZh: String.raw`比较之前，先读题目对变量的限制，例如“\(x\) 是正整数”。它决定了你可以代入哪些值，你也不能自己添加额外的假设。如果两列都只是确定的数，那么 (A)、(B)、(C) 中必有一个正确，绝不能选 (D)；一旦出现变量，只要有两个允许的取值得出不同的大小关系，就选 (D)。`,
          exampleEn: String.raw`Given: \(x\) is an integer. Column A: \(x^2\); Column B: \(x\). With \(x=0\) the columns are equal. With \(x=3\), \(9>3\), so Column A is greater. Two different outcomes mean the answer is (D).`,
          exampleZh: String.raw`已知 \(x\) 是整数。A 列：\(x^2\)；B 列：\(x\)。取 \(x=0\)，两列相等；取 \(x=3\)，\(9>3\)，A 列更大。出现了两种不同的结果，所以选 (D)。`
        },
        {
          titleEn: "Cancel or simplify what both columns share",
          titleZh: "消去两列共有的部分，先化简",
          explanationEn: "Adding or subtracting the same amount on both sides, or multiplying or dividing both sides by the same positive number, never changes which side is larger. Compare term by term and cross out matching parts. Be careful: cancel only factors you know are positive, because multiplying by a negative number reverses the order and multiplying by 0 erases the difference.",
          explanationZh: "两列同时加上或减去同一个量，或同时乘以（除以）同一个正数，都不会改变哪一边更大。逐项比较，把相同的部分划掉。要小心：只能消去确定为正的因数，因为乘以负数会使大小顺序反转，乘以 0 则会把差别全部抹掉。",
          exampleEn: String.raw`Column A: \(47+18+30\); Column B: \(30+45+18\). Both contain \(18\) and \(30\), so compare what is left: \(47\) and \(45\). Column A is greater, and no sum was needed.`,
          exampleZh: String.raw`A 列：\(47+18+30\)；B 列：\(30+45+18\)。两列都有 \(18\) 和 \(30\)，消去后只需比较 \(47\) 与 \(45\)，所以 A 列更大，不必把和算出来。`
        },
        {
          titleEn: "Rewrite both quantities in a common form",
          titleZh: "把两个量化成相同的形式",
          formula: String.raw`\frac{a}{b}<\frac{c}{d}\iff ad<bc\quad(b>0,\ d>0)`,
          explanationEn: "A fraction, a decimal and a percent are easy to compare once they are in the same form. Convert everything to decimals, or to fractions with a common denominator. To compare two fractions directly, cross-multiply along the diagonals, which is safe whenever both denominators are positive.",
          explanationZh: "分数、小数和百分数一旦化成同一种形式，就很容易比较：全部化成小数，或者化成同分母的分数。直接比较两个分数时，可以沿对角线交叉相乘，只要两个分母都是正数，这样做就是安全的。",
          stepsEn: [
            "Check that both denominators are positive.",
            String.raw`Cross-multiply along the diagonals: compare \(a\times d\) with \(c\times b\).`,
            String.raw`If \(a\times d\) is larger, then \(\frac{a}{b}\) is the larger fraction; if \(c\times b\) is larger, then \(\frac{c}{d}\) is.`
          ],
          stepsZh: [
            "确认两个分母都是正数。",
            String.raw`沿对角线交叉相乘：比较 \(a\times d\) 与 \(c\times b\)。`,
            String.raw`若 \(a\times d\) 更大，则 \(\frac{a}{b}\) 更大；若 \(c\times b\) 更大，则 \(\frac{c}{d}\) 更大。`
          ],
          exampleEn: String.raw`Column A: \(\frac{5}{8}\); Column B: \(0.6\). Since \(\frac{5}{8}=0.625>0.6\), Column A is greater. To compare \(\frac{7}{12}\) with \(\frac{4}{7}\): \(7\times7=49\) and \(4\times12=48\), so \(\frac{7}{12}\) is slightly larger.`,
          exampleZh: String.raw`A 列：\(\frac{5}{8}\)；B 列：\(0.6\)。因为 \(\frac{5}{8}=0.625>0.6\)，所以 A 列更大。比较 \(\frac{7}{12}\) 与 \(\frac{4}{7}\)：\(7\times7=49\)，\(4\times12=48\)，所以 \(\frac{7}{12}\) 稍大。`
        },
        {
          titleEn: "Plug in numbers when a variable appears",
          titleZh: "出现变量时，代入数值检验",
          explanationEn: "When a variable appears, one test value proves nothing. Try a few different kinds of values, as long as the given information allows them: a negative number, 0, 1, a fraction between 0 and 1, and a large number. If the relationship ever changes, the answer is (D). If it never changes, look for the reason it always holds instead of trusting a short list of tests.",
          explanationZh: "出现变量时，只试一个值说明不了问题。在题目条件允许的前提下，尝试几类不同的值：负数、0、1、0 到 1 之间的分数和很大的数。只要大小关系发生过变化，就选 (D)；如果始终不变，也要找出它总是成立的原因，不能只凭几次试验就下结论。",
          stepsEn: [
            "Write down any limits on the variable, such as positive or whole.",
            "Pick the simplest allowed value and evaluate both columns.",
            "Try a different kind of value: 0, 1, a fraction or a negative number.",
            "If the relationship changes, stop: the answer is (D).",
            "If every test agrees, reason it out to confirm that the relationship always holds."
          ],
          stepsZh: [
            "写下对变量的限制，例如“正数”或“整数”。",
            "选一个最简单且允许的值，算出两列的大小。",
            "再换一类值试试：0、1、分数或负数。",
            "只要大小关系发生变化，就停下来：选 (D)。",
            "如果每次结果都一致，再用推理确认这种关系总是成立。"
          ],
          exampleEn: String.raw`Given: \(n>0\). Column A: \(n^2\); Column B: \(n\). With \(n=2\), \(4>2\), so Column A is greater. With \(n=\frac{1}{2}\), \(\frac{1}{4}<\frac{1}{2}\), so Column B is greater. The answer changes, so it is (D).`,
          exampleZh: String.raw`已知 \(n>0\)。A 列：\(n^2\)；B 列：\(n\)。取 \(n=2\)，\(4>2\)，A 列更大；取 \(n=\frac{1}{2}\)，\(\frac{1}{4}<\frac{1}{2}\)，B 列更大。结果发生变化，所以选 (D)。`
        },
        {
          titleEn: "Watch for the classic traps",
          titleZh: "警惕三类经典陷阱",
          explanationEn: String.raw`Three traps cause most errors. First, squaring a negative number gives a positive result, so \(a>b\) does not mean \(a^2>b^2\). Second, squaring a number between 0 and 1 makes it smaller, and so does multiplying any positive number by it. Third, an unknown sign blocks cancelling: cancel a common factor such as \(x\) only when you know it is positive, and note that \(3x\) versus \(5x\) is a tie when \(x=0\).`,
          explanationZh: String.raw`多数失误来自三个陷阱。其一，负数的平方是正数，所以 \(a>b\) 并不意味着 \(a^2>b^2\)。其二，0 到 1 之间的数平方后会变小，任何正数乘以它，结果也会变小。其三，正负号未知时不能随意消去：只有确定 \(x\) 为正数时，才能把公共因数 \(x\) 消去；比较 \(3x\) 与 \(5x\) 时，若 \(x=0\) 则两者相等。`,
          exampleEn: String.raw`Given: \(a>b\). Column A: \(a^2\); Column B: \(b^2\). With \(a=3\) and \(b=2\), \(9>4\), so Column A is greater. With \(a=1\) and \(b=-5\), \(1<25\), so Column B is greater. The signs are unknown, so the answer is (D).`,
          exampleZh: String.raw`已知 \(a>b\)。A 列：\(a^2\)；B 列：\(b^2\)。取 \(a=3\)，\(b=2\)，\(9>4\)，A 列更大；取 \(a=1\)，\(b=-5\)，\(1<25\)，B 列更大。正负号未知，所以选 (D)。`
        },
        {
          titleEn: "Estimate, and don’t over-calculate",
          titleZh: "善用估算，不要过度计算",
          explanationEn: String.raw`Comparison items are built so that reasoning beats arithmetic. Look for a benchmark such as \(1\), \(\frac{1}{2}\) or \(100\), ask whether a factor is more or less than \(1\), and round when the columns are far apart. If you catch yourself multiplying big numbers, stop and look for a shortcut, because there usually is one.`,
          explanationZh: String.raw`数量比较题的设计本意是让推理胜过计算。先找基准数，例如 \(1\)、\(\frac{1}{2}\) 或 \(100\)；看某个因数是大于 \(1\) 还是小于 \(1\)；两列差距明显时就直接取整估算。如果你发现自己在做大数乘法，请停下来找捷径，通常确实有。`,
          exampleEn: String.raw`Column A: \(487\times0.99\); Column B: \(487\). Multiplying a positive number by a positive number less than 1 makes it smaller, so Column B is greater. Likewise, \(49\times51=(50-1)(50+1)=2499\) is less than \(50\times50=2500\).`,
          exampleZh: String.raw`A 列：\(487\times0.99\)；B 列：\(487\)。正数乘以小于 1 的正数，结果会变小，所以 B 列更大。同样，\(49\times51=(50-1)(50+1)=2499\)，小于 \(50\times50=2500\)。`
        }
      ],
      methodsEn: [
        "Look for variables first: with only fixed numbers, the answer cannot be (D).",
        "Cancel or subtract anything that appears in both columns, when it is safe to do so.",
        "Rewrite both columns in one form: decimals, fractions with a common denominator, or percents.",
        "With a variable, test a negative number, 0, 1, a fraction and a large number.",
        "Stop calculating as soon as the comparison is clear, and estimate when the columns are far apart."
      ],
      methodsZh: [
        "先看有没有变量：只有确定的数时，不可能选 (D)。",
        "在安全的前提下，消去两列共有的量。",
        "把两列化成同一形式：小数、同分母分数或百分数。",
        "含变量时，依次试负数、0、1、分数和很大的数。",
        "一旦能判断大小就停止计算；两列相差较大时用估算。"
      ],
      exampleEn: String.raw`Given: \(x+y=10\) and \(x>y\). Column A: \(x\); Column B: \(5\). If \(x\) were \(5\), then \(y\) would be \(5\) too, and \(x>y\) would be false. Since \(y=10-x\), the condition \(x>y\) means \(x>10-x\), so \(2x>10\) and \(x>5\). Column A is greater.`,
      exampleZh: String.raw`已知 \(x+y=10\) 且 \(x>y\)。A 列：\(x\)；B 列：\(5\)。若 \(x=5\)，则 \(y\) 也等于 \(5\)，与 \(x>y\) 矛盾。由 \(y=10-x\)，条件 \(x>y\) 即 \(x>10-x\)，得 \(2x>10\)，所以 \(x>5\)。A 列更大。`,
      checklistEn: [
        "Explain what each of the four choices means",
        "Say when (D) is possible and when it is impossible",
        "Cancel shared amounts and compare fractions by cross-multiplying",
        "Test several kinds of numbers before choosing (D)",
        "Spot sign, zero and fraction traps"
      ],
      checklistZh: [
        "能说清四个选项各自的含义",
        "能判断何时可能选 (D)、何时不可能选",
        "能消去共有的量，并用交叉相乘比较分数",
        "选 (D) 之前会试几类不同的数",
        "能识别正负号、零和分数造成的陷阱"
      ]
    },
    {
      id: "word-problem-reasoning",
      zh: "应用题推理策略",
      en: "Word-Problem Reasoning",
      detailEn: "Reasoning-first habits for word problems: sort relevant from irrelevant facts, translate words to math, draw or tabulate, work backwards, test the choices, and check units.",
      detailZh: "应对应用题的推理习惯：筛选有用信息、把文字译成数学式、画图或列表、逆推、代入选项检验、核对单位。",
      explanationEn: "ISEE word problems are less about hard arithmetic and more about clear thinking. Some contain facts you never need, some can be solved by logic with almost no computing, and the wrong choices usually come from a reasoning slip such as using the wrong operation or answering a different question. Every level has them: Lower Level Quantitative Reasoning is all word problems, and the Middle and Upper Levels have about 18–21 of them. Build a routine: read for the question, decide what is relevant, choose a tool (equation, picture, table, testing the choices, working backwards), then check that your answer is reasonable and in the right units.",
      explanationZh: "ISEE 的应用题考的不是复杂计算，而是清晰的思考。有的题带有用不到的多余信息，有的题靠逻辑几乎不用计算就能解出，错误选项往往来自推理失误，例如用错运算，或者回答了另一个问题。各级别都有应用题：初级数量推理全部是应用题，中级和高级各约有 18–21 题。请养成固定流程：先读清问题，再判断哪些信息有用，选择合适的工具（方程、图、表、代入选项、逆推），最后检查答案是否合理、单位是否正确。",
      keyPoints: [
        {
          titleEn: "Sort relevant from irrelevant information",
          titleZh: "筛选有用信息，忽略多余信息",
          explanationEn: "ISEE problems may include numbers you never need. Read the whole problem first, underline the question being asked, and then list only the facts that connect to it. Cross out the rest. Extra numbers are a trap for students who feel they must use everything they are given.",
          explanationZh: "ISEE 的题目可能包含根本用不到的数字。先通读全题，划出所问的问题，再只列出与之相关的信息，其余的划掉。觉得“每个数都必须用上”的同学，最容易掉进这个陷阱。",
          stepsEn: [
            "Read the entire problem once and underline the question.",
            "List each quantity with its unit.",
            "Cross out any quantity that does not help answer the question.",
            "Decide which operation connects the quantities that remain."
          ],
          stepsZh: [
            "把整道题完整读一遍，划出所问的问题。",
            "把每个量连同单位一起列出来。",
            "划掉对回答问题没有帮助的量。",
            "判断剩下的量之间应该用哪种运算。"
          ],
          exampleEn: String.raw`A bakery baked 240 muffins on Monday and 180 on Tuesday. Each muffin costs 3 dollars, and a tray holds 6 muffins. Mr. Obi buys 4 muffins. How much does he pay? Only the price and the 4 muffins matter, so he pays \(4\times3=12\) dollars. The other numbers are distractions.`,
          exampleZh: String.raw`一家面包店周一烤了 240 个松饼，周二烤了 180 个。每个松饼 3 美元，一个托盘放 6 个。Obi 先生买了 4 个松饼，他要付多少钱？只有单价和购买的 4 个这两个信息有用，所以他付 \(4\times3=12\) 美元，其余数字都是干扰。`
        },
        {
          titleEn: "Translate words into math",
          titleZh: "把文字翻译成数学式",
          explanationEn: String.raw`Turn each phrase into a symbol: “is” means \(=\), “of” after a fraction or percent means \(\times\), “per” means \(\div\), and “altogether” means \(+\). Word order matters for “less than”: “5 less than \(x\)” is \(x-5\), not \(5-x\). Name the unknown quantity with a letter before you write the equation.`,
          explanationZh: String.raw`把每个短语转换成符号：“是”对应 \(=\)，“的”（如“\(80\) 的 \(35\%\)”中的“的”）对应 \(\times\)，“每”对应 \(\div\)，“一共”对应 \(+\)。“少”的顺序很关键：“比 \(x\) 少 5”是 \(x-5\)，而不是 \(5-x\)。列方程之前，先用字母表示未知量。`,
          exampleEn: String.raw`“Five less than twice a number is 17.” Let the number be \(n\). Then \(2n-5=17\), so \(2n=22\) and \(n=11\). Check: \(2\times11-5=17\).`,
          exampleZh: String.raw`“一个数的 2 倍少 5 等于 17。”设这个数为 \(n\)，则 \(2n-5=17\)，\(2n=22\)，\(n=11\)。检验：\(2\times11-5=17\)。`
        },
        {
          titleEn: "Draw a picture or make a table",
          titleZh: "画图或列表",
          explanationEn: "Pictures help with distance, overlap and anything about shapes or positions; tables help with ages, rates, money and “before and after” situations. Label every given number on your picture and use a letter for the unknown. A well-built table often lets the equation write itself.",
          explanationZh: "涉及距离、重叠、形状或位置的题适合画图；涉及年龄、速率、金额和“之前之后”的题适合列表。在图上标出每个已知数，用字母表示未知量。表格列得好，方程几乎可以直接写出来。",
          exampleEn: String.raw`Ana is 3 years older than Ben. In 5 years the sum of their ages will be 31. Table: Ben is \(b\) now and \(b+5\) later; Ana is \(b+3\) now and \(b+8\) later. So \((b+5)+(b+8)=31\), \(2b=18\) and \(b=9\). Ben is 9 years old now.`,
          exampleZh: String.raw`Ana 比 Ben 大 3 岁。5 年后两人年龄之和是 31。列表：Ben 现在 \(b\) 岁，5 年后 \(b+5\) 岁；Ana 现在 \(b+3\) 岁，5 年后 \(b+8\) 岁。所以 \((b+5)+(b+8)=31\)，\(2b=18\)，\(b=9\)。Ben 现在 9 岁。`
        },
        {
          titleEn: "Work backwards",
          titleZh: "逆推法",
          explanationEn: "When a problem describes a chain of operations and gives the final result, undo the steps in reverse order, using the opposite operation each time. This is fast and avoids setting up an equation. Check by running your answer forward through the original steps.",
          explanationZh: "如果题目描述了一连串运算并给出最后的结果，可以从结果出发，按相反的顺序逐步撤销，每一步用相反的运算。这样既快，又不用列方程。最后把答案按原来的步骤正着算一遍来检验。",
          exampleEn: String.raw`Mia thinks of a number, doubles it, subtracts 6, then divides by 4 and gets 5. Undo from the end: \(5\times4=20\), then \(20+6=26\), then \(26\div2=13\). Check forward: \(13\times2=26\), \(26-6=20\), \(20\div4=5\).`,
          exampleZh: String.raw`Mia 想了一个数，先乘 2，再减 6，最后除以 4，得到 5。从结果倒推：\(5\times4=20\)，\(20+6=26\)，\(26\div2=13\)。正着检验：\(13\times2=26\)，\(26-6=20\)，\(20\div4=5\)。`
        },
        {
          titleEn: "Test the answer choices",
          titleZh: "把选项代回题目检验",
          explanationEn: "When an equation would be slow, plug a choice back into the story and see whether it works. If the numerical choices run from least to greatest, start with a middle choice: when the result is too small, move to a larger choice; when it is too big, move to a smaller one. Two tries usually settle it, and a quick estimate can rule out some choices before you start.",
          explanationZh: "当列方程显得很慢时，可以把某个选项代回题目的情境，看是否成立。如果数值选项是按从小到大排列的，就先试中间的选项：结果偏小就换更大的，偏大就换更小的。通常试两次就能确定答案，也可以先估算，排除明显不合理的选项。",
          exampleEn: String.raw`Sam has 3 times as many stickers as Tia, and together they have 48. The choices for Tia’s stickers are 8, 10, 12 and 16. Try 10: Sam has 30, and the total is 40, which is too small. Try 12: Sam has 36, and \(12+36=48\). Tia has 12 stickers.`,
          exampleZh: String.raw`Sam 的贴纸数是 Tia 的 3 倍，两人一共有 48 张。Tia 的贴纸数的选项是 8、10、12 和 16。试 10：Sam 有 30，合计 40，偏小。试 12：Sam 有 36，\(12+36=48\)。所以 Tia 有 12 张贴纸。`
        },
        {
          titleEn: "Reason with logic and rules, and check units",
          titleZh: "用逻辑和规律推理，并检查单位",
          formula: String.raw`\text{distance}=\text{rate}\times\text{time}`,
          explanationEn: "Some items need almost no arithmetic: they ask which statement must be true, or what rule turns the inputs into the outputs. Reason from the facts, and test any rule you guess on every example given. Then check units: change minutes to hours, dozens to ones or cents to dollars before calculating, and make sure your answer uses the unit the question asks for.",
          explanationZh: "有些题几乎不需要计算：它们问“哪个说法一定成立”，或者“输入是按什么规律变成输出的”。请根据已知事实推理，并把猜出的规律用到题中每一个例子上检验。还要检查单位：计算前先把分钟换成小时、打换成个、分换成元，并让答案的单位与题目所问一致。",
          exampleEn: String.raw`Rule: a machine multiplies every input by the same number and then adds the same number. It turns 2 into 7 and 3 into 10. Raising the input by 1 raises the output by 3, so the multiplier is 3, and \(3\times2+1=7\) shows that the added number is 1. So 10 becomes \(3\times10+1=31\). Logic: full boxes of 12 pencils hold a multiple of 12 pencils, so 108 is possible and 100 is not. Units: 90 kilometers in 1 hour 30 minutes is \(90\div1.5=60\) kilometers per hour, not \(90\div1.30\).`,
          exampleZh: String.raw`规律：一台机器把每个输入先乘同一个数，再加同一个数。它把 2 变成 7，把 3 变成 10。输入增加 1，输出增加 3，所以乘数是 3；由 \(3\times2+1=7\) 可知加上的数是 1。于是 10 变成 \(3\times10+1=31\)。逻辑：装满的盒子每盒 12 支铅笔，总数一定是 12 的倍数，所以 108 有可能，100 不可能。单位：1 小时 30 分钟行驶 90 千米，速度是 \(90\div1.5=60\) 千米/小时，而不是 \(90\div1.30\)。`
        }
      ],
      methodsEn: [
        "Underline the question, then cross out facts you do not need.",
        "Name the unknown and translate each sentence into math.",
        "Draw it or tabulate it when positions, rates or ages are involved.",
        "Work backwards or test the choices when an equation looks slow.",
        "Estimate first so you can reject unreasonable choices.",
        "Check units and re-read the question before you choose."
      ],
      methodsZh: [
        "划出所问的问题，划掉用不上的信息。",
        "给未知量命名，把每句话翻译成数学式。",
        "涉及位置、速率或年龄时，画图或列表。",
        "方程看起来太慢时，用逆推或代入选项。",
        "先估算，排除明显不合理的选项。",
        "选答案之前，核对单位并重读问题。"
      ],
      exampleEn: String.raw`A club has 25 members. It bought 60 T-shirts at 8 dollars each and sold 45 of them for 12 dollars each. How much money did it collect from sales? The number of members, the number bought and the cost are not needed. The sales total is \(45\times12=540\) dollars. Estimate check: \(45\times12\) is a little more than \(40\times12=480\), so an answer near 500 makes sense.`,
      exampleZh: String.raw`某社团有 25 名成员，以每件 8 美元买进 60 件 T 恤，并以每件 12 美元卖出其中的 45 件。销售共收入多少钱？成员人数、进货数量和进价都用不上。销售收入为 \(45\times12=540\) 美元。估算检验：\(45\times12\) 比 \(40\times12=480\) 稍大，所以接近 500 的结果是合理的。`,
      checklistEn: [
        "Pick out the facts that matter and ignore the rest",
        "Translate a sentence into an equation, watching the order of “less than”",
        "Draw a picture or build a table for ages, rates and distances",
        "Work backwards or test the choices when it saves time",
        "Convert units and check that the answer fits the question"
      ],
      checklistZh: [
        "能挑出有用的信息，忽略多余的",
        "能把句子译成方程，并注意“少”的顺序",
        "能为年龄、速率、距离题画图或列表",
        "能在省时的场合使用逆推或代入选项",
        "能换算单位，并检查答案是否回答了所问的问题"
      ]
    },
    {
      id: "estimation-number-sense",
      zh: "估算与数感",
      en: "Estimation & Number Sense",
      detailEn: "Rounding, benchmark fractions, compatible numbers, order of magnitude and reasonableness checks, used to find or eliminate answer choices without exact calculation.",
      detailZh: "四舍五入、基准分数、相容数、数量级与合理性检查，用来在不做精确计算的情况下求出答案或排除选项。",
      explanationEn: "Estimation is the fastest route to a correct answer when no calculator is allowed. When the choices are far apart, a rough answer is all you need; when two choices are close, a rough answer still removes the other two. Number sense is the habit of feeling how big an answer should be before you compute it, so you notice slips such as a misplaced decimal point. The Lower Level asks mostly for rounding and simple benchmarks, while the Middle and Upper Levels hide benchmarks inside percents, decimals and fractions and include comparisons where an exact value is never needed.",
      explanationZh: "在不能使用计算器的考试里，估算是最快接近正确答案的办法。选项相差较大时，粗略的答案就够了；即使有两个选项很接近，粗估也能先排除另外两个。数感，就是在动笔计算之前先感觉答案应该有多大的习惯，这样你才能发现小数点点错位置之类的失误。初级主要考查四舍五入和简单的基准数；中级和高级则把基准数藏在百分数、小数和分数里，还有一些比较题根本不需要精确值。",
      keyPoints: [
        {
          titleEn: "Round to friendly numbers",
          titleZh: "取整成便于计算的数",
          explanationEn: "Round each number to one or two non-zero digits, such as 398 to 400 and 21 to 20, then calculate with the friendly numbers. Decide how coarsely to round by looking at how far apart the answer choices are. Keep track of the direction of the error: if you round both factors up, the true product is smaller than your estimate.",
          explanationZh: "把每个数取整到一两位非零数字，例如把 398 看成 400，把 21 看成 20，再用这些“好算”的数计算。取整到哪一位，要看选项之间相差多大。别忘了误差的方向：如果两个因数都取大了，真实的积就比估算值小。",
          exampleEn: String.raw`About how much is \(398\times21\)? Round to \(400\times20=8{,}000\), so pick the choice nearest \(8{,}000\) (the exact value is \(8{,}358\)). For \(19\times48\), both factors were rounded up in \(20\times50=1{,}000\), so the true product, \(912\), is below that estimate.`,
          exampleZh: String.raw`\(398\times21\) 大约是多少？取整为 \(400\times20=8{,}000\)，所以选最接近 \(8{,}000\) 的选项（精确值是 \(8{,}358\)）。再看 \(19\times48\)：\(20\times50=1{,}000\) 中两个因数都取大了，所以真实的积 \(912\) 比这个估算值小。`
        },
        {
          titleEn: "Use benchmark fractions and percents",
          titleZh: "用基准分数和基准百分数",
          explanationEn: String.raw`Anchor on friendly benchmarks: \(\frac{1}{10}=10\%\), \(\frac{1}{4}=25\%\), \(\frac{1}{2}=50\%\), \(\frac{3}{4}=75\%\) and \(\frac{1}{3}\approx33\%\). To compare a fraction with \(\frac{1}{2}\), double the numerator: if the result is greater than the denominator, the fraction is more than half. A percent close to a benchmark can be replaced by that benchmark.`,
          explanationZh: String.raw`以好记的基准数为锚点：\(\frac{1}{10}=10\%\)，\(\frac{1}{4}=25\%\)，\(\frac{1}{2}=50\%\)，\(\frac{3}{4}=75\%\)，\(\frac{1}{3}\approx33\%\)。比较一个分数与 \(\frac{1}{2}\) 时，把分子乘 2 再与分母比较：若更大，这个分数就大于一半。接近某个基准的百分数，可以直接用这个基准代替。`,
          exampleEn: String.raw`Is \(\frac{3}{7}+\frac{4}{9}\) more or less than \(1\)? Doubling the numerators gives \(6<7\) and \(8<9\), so each fraction is less than \(\frac{1}{2}\) and the sum is less than \(1\). Also, \(49\%\) of \(81\) is about half of \(80\), or \(40\); the exact value is \(39.69\).`,
          exampleZh: String.raw`\(\frac{3}{7}+\frac{4}{9}\) 比 \(1\) 大还是小？分子乘 2 得 \(6<7\) 和 \(8<9\)，两个分数都小于 \(\frac{1}{2}\)，所以和小于 \(1\)。再如：\(81\) 的 \(49\%\) 约是 \(80\) 的一半，即 \(40\)（精确值是 \(39.69\)）。`
        },
        {
          titleEn: "Choose compatible numbers",
          titleZh: "选用相容数",
          explanationEn: String.raw`Compatible numbers are nearby numbers that divide or multiply neatly. Replace \(1{,}847\div6\) by \(1{,}800\div6\), and \(7.95\times11\) by \(8\times11\). Shift the numbers a little in whichever direction makes the arithmetic clean, then adjust mentally if the choices are close.`,
          explanationZh: String.raw`相容数是指附近、便于整除或相乘的数。可以把 \(1{,}847\div6\) 换成 \(1{,}800\div6\)，把 \(7.95\times11\) 换成 \(8\times11\)。朝着便于计算的方向把数字稍作调整，选项很接近时再在心里修正。`,
          exampleEn: String.raw`Estimate \(1{,}847\div6\). Since \(1{,}800\div6=300\) and \(1{,}847\) is a bit more than \(1{,}800\), the quotient is a little over \(300\) (about \(307.8\)). A ticket costs $7.95 and you buy 11: \(8\times11=88\), so the cost is just under $88 (exactly $87.45).`,
          exampleZh: String.raw`估算 \(1{,}847\div6\)：\(1{,}800\div6=300\)，而 \(1{,}847\) 比 \(1{,}800\) 稍大，所以商略大于 \(300\)（约为 \(307.8\)）。再如每张票 7.95 美元，买 11 张：\(8\times11=88\)，所以费用略低于 88 美元（精确值为 87.45 美元）。`
        },
        {
          titleEn: "Size answers by order of magnitude",
          titleZh: "用数量级判断答案的大小",
          explanationEn: "Before computing, decide roughly how many digits the answer should have and where its decimal point belongs. Multiplying a positive number by a number between 0 and 1 makes the result smaller, and dividing by a number between 0 and 1 makes it larger. Work out the digits exactly, then place the decimal point using your size estimate. A misplaced decimal point is one of the most common wrong choices.",
          explanationZh: "计算之前，先判断答案大致有几位数、小数点应该落在哪里。正数乘以 0 到 1 之间的数，结果会变小；除以 0 到 1 之间的数，结果会变大。先精确算出各位数字，再根据你对大小的估计确定小数点的位置。小数点位置错误，是最常见的错误选项之一。",
          stepsEn: [
            String.raw`Round each number to a friendly one (for example \(0.07\) to \(0.1\)) and compute a rough product.`,
            "Multiply the digits as whole numbers, ignoring the decimal points.",
            "Place the decimal point so that the answer is close to your rough product."
          ],
          stepsZh: [
            String.raw`把每个数取整成好算的数（例如把 \(0.07\) 看成 \(0.1\)），算出一个粗略的积。`,
            "忽略小数点，把数字当作整数相乘。",
            "确定小数点的位置，使答案与粗略的积接近。"
          ],
          exampleEn: String.raw`For \(0.6\times0.07\), the rough product is \(0.6\times0.1=0.06\), and the digits give \(6\times7=42\). Only \(0.042\) is near \(0.06\); \(0.42\), \(4.2\) and \(0.0042\) are far off. Likewise, \(7{,}000\div0.5\) must be larger than \(7{,}000\), so it is \(14{,}000\), not \(3{,}500\).`,
          exampleZh: String.raw`计算 \(0.6\times0.07\)：粗略的积约为 \(0.6\times0.1=0.06\)，数字部分 \(6\times7=42\)。只有 \(0.042\) 接近 \(0.06\)，而 \(0.42\)、\(4.2\)、\(0.0042\) 都差得很远。同理，\(7{,}000\div0.5\) 一定比 \(7{,}000\) 大，所以是 \(14{,}000\)，不是 \(3{,}500\)。`
        },
        {
          titleEn: "Check reasonableness and eliminate choices",
          titleZh: "检查合理性，排除选项",
          explanationEn: String.raw`Ask three quick questions about any answer: Is it the right size? Is it the right kind of number (whole, positive, in the right unit)? Does it move in the right direction (a discount lowers a price)? Use the same questions on your first pass to cross out choices. A last-digit check is another cheap test: \(38\times47\) must end in 6 because \(8\times7=56\). Since wrong answers are not penalized, eliminating and then guessing beats leaving a blank.`,
          explanationZh: String.raw`对任何答案，快速问自己三个问题：大小对不对？数的类型对不对（是否应为整数、正数，单位是否正确）？变化方向对不对（打折会让价格变低）？第一遍做题时也用这三个问题划掉选项。末位检验也是一个省力的办法：\(38\times47\) 的个位一定是 6，因为 \(8\times7=56\)。由于答错不扣分，先排除再猜，总比留空好。`,
          stepsEn: [
            "Estimate the size and direction of the answer before you look at the choices.",
            "Cross out every choice that is far from the estimate or is the wrong kind of number.",
            "If two choices remain, compute exactly or check one detail, such as the last digit."
          ],
          stepsZh: [
            "先估算答案的大小和变化方向，再看选项。",
            "划掉与估算值相差很大或类型不对的选项。",
            "若还剩两个选项，就精确计算或检查个位之类的细节来决定。"
          ],
          exampleEn: String.raw`A jacket costs $48 and is reduced by \(25\%\). The choices are $12, $24, $36 and $60. The sale price must be less than $48, so $60 is out. A quarter off leaves about three quarters of $48, which is near $36. The choice $12 is only the amount of the discount, and $24 would be \(50\%\) off.`,
          exampleZh: String.raw`一件 48 美元的夹克减价 \(25\%\)。选项是 12 美元、24 美元、36 美元和 60 美元。折后价一定低于 48 美元，所以 60 美元排除。减去四分之一，还剩大约原价的四分之三，接近 36 美元。12 美元只是减价的金额，而 24 美元则相当于减价 \(50\%\)。`
        }
      ],
      methodsEn: [
        "Round to one or two digits before you calculate.",
        String.raw`Compare fractions and percents with the benchmarks \(\frac{1}{4}\), \(\frac{1}{2}\) and \(\frac{3}{4}\).`,
        "Swap in compatible numbers that divide evenly.",
        "Decide the size of the answer first, then place the decimal point.",
        "Cross out choices that are the wrong size, direction or kind of number."
      ],
      methodsZh: [
        "计算之前先取整到一两位数字。",
        String.raw`用 \(\frac{1}{4}\)、\(\frac{1}{2}\)、\(\frac{3}{4}\) 作基准来比较分数和百分数。`,
        "换成容易整除的相容数。",
        "先判断答案的大小，再确定小数点的位置。",
        "划掉大小、方向或类型不对的选项。"
      ],
      exampleEn: String.raw`Which choice is closest to \(0.49\times812\)? Round \(0.49\) to \(0.5\) and \(812\) to \(800\). Half of \(800\) is \(400\), so the answer is near \(400\) (the exact value is \(397.88\)). A choice such as \(40\) or \(4{,}000\) has the wrong size.`,
      exampleZh: String.raw`下面哪个选项最接近 \(0.49\times812\)？把 \(0.49\) 看成 \(0.5\)，把 \(812\) 看成 \(800\)，\(800\) 的一半是 \(400\)，所以答案接近 \(400\)（精确值是 \(397.88\)）。像 \(40\) 或 \(4{,}000\) 这样的选项，大小明显不对。`,
      checklistEn: [
        "Round and estimate products, quotients and percents",
        String.raw`Tell quickly whether a fraction is more or less than \(\frac{1}{2}\)`,
        "Place a decimal point by size, not by counting alone",
        "Use estimates to eliminate answer choices",
        "Check that an answer is reasonable"
      ],
      checklistZh: [
        "能对积、商和百分数做估算",
        String.raw`能快速判断一个分数比 \(\frac{1}{2}\) 大还是小`,
        "能凭大小判断来确定小数点位置，而不只靠数位",
        "能用估算排除选项",
        "能检查答案是否合理"
      ]
    }
  ]
};
