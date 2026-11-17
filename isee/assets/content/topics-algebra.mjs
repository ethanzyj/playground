export const TOPIC = {
  id: "algebraic-concepts",
  zh: "代数概念",
  en: "Algebraic Concepts",
  officialAlignment: "Study-guide topic for the ISEE content area “Algebraic Concepts” in Quantitative Reasoning and Mathematics Achievement; the Upper Level reaches second-year algebra.",
  officialAlignmentZh: "对应 ISEE 数量推理与数学能力中的“代数概念”领域；高级考查范围延伸至第二年代数（Algebra II）。",
  concepts: [
    {
      id: "expressions-equations",
      zh: "代数式与方程",
      en: "Expressions & Equations",
      detailEn: "Variables, simplifying expressions, the distributive property, like terms, one-, two- and multi-step equations, translating words into equations, substitution, and solving for a variable.",
      detailZh: "变量、化简代数式、分配律与同类项，一步、两步与多步方程，把文字翻译成方程，代入求值，以及把公式变形求某个字母。",
      explanationEn: String.raw`An expression such as \(3x+5\) has no equals sign and can only be simplified; an equation such as \(3x+5=20\) says two expressions are equal and can be solved. Almost every ISEE algebra item comes down to the same moves: translate the situation into symbols, simplify, then undo operations in reverse order while treating both sides alike. Lower Level stresses one- and two-step equations, simple substitution and missing-number problems. Middle Level adds the distributive property, like terms, variables on both sides and translating word sentences. Upper Level adds fractional coefficients, solving a formula for one letter and longer multi-step setups. When the answer choices are numbers, substituting a choice back into the equation is often faster than solving.`,
      explanationZh: String.raw`代数式（如 \(3x+5\)）没有等号，只能化简；方程（如 \(3x+5=20\)）表示两个代数式相等，可以求解。ISEE 的代数题几乎都围绕同样的几步：先把情境翻译成符号，再化简，然后按相反的顺序“撤销”运算，并且两边做同样的操作。初级重点是一步、两步方程、简单代入和填数题；中级增加分配律、同类项、等号两边都有变量，以及把文字句子翻译成方程；高级再加上分数系数、把公式变形求某个字母，以及更长的多步列式。当选项是具体数字时，把选项代回方程检验，往往比直接解方程更快。`,
      keyPoints: [
        {
          titleEn: "Like terms and the distributive property",
          titleZh: "同类项与分配律",
          formula: String.raw`a(b+c)=ab+ac`,
          explanationEn: String.raw`Like terms have exactly the same variable part, so \(5x\) and \(-2x\) combine to \(3x\), but \(5x\) and \(5x^2\) cannot be combined. The distributive property multiplies the factor outside the parentheses by every term inside, and a negative factor changes the sign of every term it touches. The classic mistakes are multiplying only the first term and forgetting that \(-2\times(-5)\) is positive.`,
          explanationZh: String.raw`同类项的字母部分必须完全相同，所以 \(5x\) 与 \(-2x\) 可以合并成 \(3x\)，而 \(5x\) 与 \(5x^2\) 不能合并。分配律是把括号外的因数乘到括号内的每一项；如果这个因数是负数，它会改变每一项的符号。最常见的错误是只乘了第一项，或者忘记 \(-2\times(-5)\) 的结果是正数。`,
          stepsEn: [
            "Distribute each outside factor to every term inside its parentheses, keeping track of signs.",
            "Group the like terms: same variable and same exponent.",
            "Add or subtract only the coefficients and leave the variable part unchanged."
          ],
          stepsZh: [
            "把括号外的每个因数乘到括号内的每一项，并注意符号。",
            "把同类项放在一起：字母相同、指数也相同。",
            "只对系数做加减，字母部分保持不变。"
          ],
          exampleEn: String.raw`Simplify \(4(x+3)-2(x-5)\): distributing gives \(4x+12-2x+10\), which combines to \(2x+22\).`,
          exampleZh: String.raw`化简 \(4(x+3)-2(x-5)\)：去括号得 \(4x+12-2x+10\)，合并同类项得 \(2x+22\)。`
        },
        {
          titleEn: "One- and two-step equations",
          titleZh: "一步与两步方程",
          formula: String.raw`ax+b=c\ \Rightarrow\ x=\frac{c-b}{a}\quad(a\ne0)`,
          explanationEn: "To solve an equation, undo the operations that were done to the variable in reverse order, and do exactly the same thing to both sides so the equation stays balanced. Remove addition or subtraction first, then multiplication or division. Finish by substituting your answer into the original equation: a ten-second check catches most slips.",
          explanationZh: "解方程就是把对变量做过的运算按相反的顺序一一撤销，而且每一步都要对等号两边做完全相同的操作，使方程保持平衡。先撤销加减，再撤销乘除。最后把答案代回原方程检验，几秒钟就能发现大多数粗心错误。",
          stepsEn: [
            String.raw`Take \(5x-7=18\): \(x\) was multiplied by 5, then 7 was subtracted.`,
            String.raw`Undo the last operation first: add 7 to both sides to get \(5x=25\).`,
            String.raw`Undo the multiplication: divide both sides by 5 to get \(x=5\).`,
            String.raw`Check: \(5(5)-7=18\), which matches the right side.`
          ],
          stepsZh: [
            String.raw`以 \(5x-7=18\) 为例：\(x\) 先被乘以 5，再被减去 7。`,
            String.raw`先撤销最后一步：两边同时加 7，得 \(5x=25\)。`,
            String.raw`再撤销乘法：两边同时除以 5，得 \(x=5\)。`,
            String.raw`检验：\(5(5)-7=18\)，与右边相等。`
          ],
          exampleEn: String.raw`Solve \(\frac{x}{3}+4=9\): subtract 4 to get \(\frac{x}{3}=5\), then multiply both sides by 3 to get \(x=15\).`,
          exampleZh: String.raw`解 \(\frac{x}{3}+4=9\)：两边减 4 得 \(\frac{x}{3}=5\)，再两边乘 3 得 \(x=15\)。`
        },
        {
          titleEn: "Variables on both sides",
          titleZh: "等号两边都有变量",
          explanationEn: String.raw`When the variable appears on both sides, first distribute and combine like terms on each side, then move the variable terms to one side and the plain numbers to the other. If the variable cancels completely, look at what is left: a false statement such as \(3=5\) means there is no solution, while a true one such as \(4=4\) means every number is a solution. This skill is mainly tested at the Middle and Upper Levels.`,
          explanationZh: String.raw`当变量出现在等号两边时，先分别去括号、合并同类项，再把含变量的项移到一边，把常数项移到另一边。如果变量被完全消去，就看剩下的式子：像 \(3=5\) 这样的假命题表示无解，像 \(4=4\) 这样的真命题表示任何数都是解。这一技能主要出现在中级和高级。`,
          stepsEn: [
            String.raw`Start with \(3(x+2)=2x+11\) and distribute: \(3x+6=2x+11\).`,
            String.raw`Subtract \(2x\) from both sides to collect the variable: \(x+6=11\).`,
            String.raw`Subtract 6 from both sides: \(x=5\).`,
            String.raw`Check both sides: \(3(5+2)=21\) and \(2(5)+11=21\).`
          ],
          stepsZh: [
            String.raw`从 \(3(x+2)=2x+11\) 开始，先去括号：\(3x+6=2x+11\)。`,
            String.raw`两边同时减去 \(2x\)，把变量集中到一边：\(x+6=11\)。`,
            String.raw`两边同时减 6：\(x=5\)。`,
            String.raw`检验两边：\(3(5+2)=21\)，\(2(5)+11=21\)。`
          ],
          exampleEn: String.raw`Solve \(2(x-1)=2x+5\): distributing gives \(2x-2=2x+5\), and subtracting \(2x\) leaves \(-2=5\). That is false, so the equation has no solution.`,
          exampleZh: String.raw`解 \(2(x-1)=2x+5\)：去括号得 \(2x-2=2x+5\)，两边减 \(2x\) 后得到 \(-2=5\)。这是假命题，所以方程无解。`
        },
        {
          titleEn: "Translating words into equations",
          titleZh: "把文字翻译成方程",
          explanationEn: String.raw`Name the unknown first (“let \(n\) be the number of cards”), then translate phrase by phrase: “is” becomes \(=\), “of” after a fraction or percent means multiply, “twice” means \(2\times\), and “per” or “each” signals a rate (rate \(\times\) quantity gives a total, and total \(\div\) quantity gives the rate). Watch the word order: “5 less than \(x\)” is \(x-5\), and “the quotient of \(x\) and 4” is \(\frac{x}{4}\). When you finish, check the answer against the story, not just against the equation.`,
          explanationZh: String.raw`先说明未知数代表什么（“设 \(n\) 为卡片的数量”），再逐个短语翻译：“is”对应 \(=\)，分数或百分数后面的 of（“……的”）表示相乘，“twice”表示 \(2\times\)，“per”（每）或“each”（每个）表示速率（速率 \(\times\) 数量 \(=\) 总量，总量 \(\div\) 数量 \(=\) 速率）。注意语序：“比 \(x\) 少 5”写作 \(x-5\)，“\(x\) 除以 4 的商”写作 \(\frac{x}{4}\)。算完后要回到题目的故事里检验答案，而不只是检验方程。`,
          stepsEn: [
            String.raw`Problem: Maya has 6 more than twice as many stickers as Leo, and together they have 54. Let \(L\) be Leo’s number of stickers.`,
            String.raw`Write Maya’s amount using \(L\): “6 more than twice as many” is \(2L+6\).`,
            String.raw`Write the total: \(L+(2L+6)=54\).`,
            String.raw`Solve: \(3L+6=54\), so \(3L=48\) and \(L=16\).`,
            String.raw`Check: Maya has \(2(16)+6=38\), and \(16+38=54\).`
          ],
          stepsZh: [
            String.raw`题目：Maya 的贴纸比 Leo 的两倍还多 6 张，两人一共有 54 张。设 Leo 有 \(L\) 张贴纸。`,
            String.raw`用 \(L\) 表示 Maya 的数量：“两倍多 6”就是 \(2L+6\)。`,
            String.raw`列出总数：\(L+(2L+6)=54\)。`,
            String.raw`求解：\(3L+6=54\)，所以 \(3L=48\)，\(L=16\)。`,
            String.raw`检验：Maya 有 \(2(16)+6=38\) 张，\(16+38=54\)。`
          ],
          exampleEn: String.raw`“4 less than three times a number is 17” becomes \(3n-4=17\), not \(4-3n=17\). Then \(3n=21\) and \(n=7\).`,
          exampleZh: String.raw`“比某个数的 3 倍少 4，结果是 17”应写成 \(3n-4=17\)，而不是 \(4-3n=17\)。于是 \(3n=21\)，\(n=7\)。`
        },
        {
          titleEn: "Substitution and evaluating",
          titleZh: "代入与求值",
          explanationEn: String.raw`To evaluate an expression, replace each variable by its value, placing the value in parentheses, and then follow the order of operations. Parentheses protect negative values: if \(y=-3\), then \(y^2\) means \((-3)^2=9\), not \(-3^2=-9\). ISEE items also test whether you can reuse one fact to rewrite another expression instead of finding every letter.`,
          explanationZh: String.raw`求代数式的值时，把每个变量换成它的值，并给这个值加上括号，然后按运算顺序计算。括号可以保护负数：若 \(y=-3\)，则 \(y^2\) 表示 \((-3)^2=9\)，而不是 \(-3^2=-9\)。ISEE 还常考查能否利用一个已知条件直接改写另一个式子，而不必把每个字母都求出来。`,
          exampleEn: String.raw`If \(x=3\) and \(y=-2\), then \(2x^2-xy=2(3)^2-(3)(-2)=18+6=24\). If \(a+b=7\), then \(3a+3b=3(a+b)=21\) without finding \(a\) or \(b\).`,
          exampleZh: String.raw`若 \(x=3\)，\(y=-2\)，则 \(2x^2-xy=2(3)^2-(3)(-2)=18+6=24\)。若 \(a+b=7\)，则 \(3a+3b=3(a+b)=21\)，不必求出 \(a\) 和 \(b\)。`
        },
        {
          titleEn: "Solving a formula for one variable",
          titleZh: "把公式变形求某个字母",
          formula: String.raw`P=2l+2w\ \Rightarrow\ w=\frac{P-2l}{2}`,
          explanationEn: String.raw`A formula such as \(d=rt\) or \(P=2l+2w\) is an equation with several letters. To solve for one letter, treat the others as ordinary numbers and undo the operations in reverse order, exactly as with a numerical equation. The target letter must end up alone on one side: \(w=\frac{P-2l}{2}\) is finished, but \(2w=P-2l\) is not. This is mostly an Upper Level skill.`,
          explanationZh: String.raw`像 \(d=rt\) 或 \(P=2l+2w\) 这样的公式，是含有多个字母的方程。要用其他字母表示某一个字母，就把其余字母当作普通的数，按相反顺序撤销运算，方法与解数字方程完全一样。目标字母必须单独留在一边：\(w=\frac{P-2l}{2}\) 才算完成，\(2w=P-2l\) 还没有完成。这主要是高级的技能。`,
          exampleEn: String.raw`Solve \(A=\frac{1}{2}bh\) for \(h\): multiply both sides by 2 to get \(2A=bh\), then divide by \(b\) to get \(h=\frac{2A}{b}\). If \(A=30\) and \(b=12\), then \(h=5\).`,
          exampleZh: String.raw`把 \(A=\frac{1}{2}bh\) 变形求 \(h\)：两边乘 2 得 \(2A=bh\)，再除以 \(b\) 得 \(h=\frac{2A}{b}\)。若 \(A=30\)，\(b=12\)，则 \(h=5\)。`
        }
      ],
      methodsEn: [
        "Undo operations in reverse order and do the same thing to both sides.",
        "Distribute first, then combine like terms, then collect the variable terms on one side.",
        "Say in words what the unknown stands for before you write an equation.",
        "Substitute your answer back into the original equation, or into the original words, to check it.",
        String.raw`If a question asks for an expression such as \(3a+3b\), look for a way to reuse a given fact instead of solving for each letter.`
      ],
      methodsZh: [
        "按相反的顺序撤销运算，并对等号两边做同样的操作。",
        "先去括号，再合并同类项，最后把含变量的项集中到一边。",
        "列方程之前，先用文字说明未知数代表什么。",
        "把答案代回原方程（或回到题目的文字里）检验。",
        String.raw`遇到要求 \(3a+3b\) 这类式子的题，先想想能否直接利用已知条件，而不是逐个求出字母。`
      ],
      exampleEn: String.raw`A bus rental costs a $60 fee plus $4 for each student. If the total bill is $240, how many students rode? Write \(60+4s=240\), so \(4s=180\) and \(s=45\). Check: \(60+4(45)=240\).`,
      exampleZh: String.raw`租一辆校车要付 $60 的固定费用，再加每位学生 $4。如果总费用是 $240，有多少名学生乘车？列方程 \(60+4s=240\)，得 \(4s=180\)，\(s=45\)。检验：\(60+4(45)=240\)。`,
      checklistEn: [
        "Combine like terms and apply the distributive property, including negative factors",
        "Solve one-, two- and multi-step equations and check the answer",
        "Translate a word sentence into an equation, watching phrases like “less than”",
        "Substitute positive and negative values into an expression",
        "Solve a formula for one of its letters"
      ],
      checklistZh: [
        "能合并同类项并正确使用分配律（包括负因数）",
        "能解一步、两步和多步方程并检验答案",
        "能把文字句子翻译成方程，注意“少……”之类的语序",
        "能把正数和负数代入代数式求值",
        "能把公式变形，求出其中某个字母"
      ]
    },
    {
      id: "inequalities-absolute-value",
      zh: "不等式与绝对值",
      en: "Inequalities & Absolute Value",
      detailEn: "Solving and graphing inequalities, reversing the sign, compound inequalities, “at least” and “at most” wording, and absolute-value equations and inequalities.",
      detailZh: "解不等式并在数轴上表示，乘除负数时不等号反向，复合不等式，“至少”“至多”的表述，以及绝对值方程与不等式。",
      explanationEn: String.raw`An inequality compares quantities with \(<\), \(>\), \(\le\) or \(\ge\), and its answer is usually a whole range of numbers rather than a single value. Solving works almost exactly like solving an equation, with one big exception: multiplying or dividing by a negative number reverses the sign. Absolute value measures distance from zero, so \(|x-3|<5\) means “\(x\) is within 5 units of 3.” This concept appears at the Middle and Upper Levels. Middle Level items usually ask you to solve, graph or count the whole-number solutions of a simple inequality; Upper Level adds compound inequalities and absolute-value equations and inequalities.`,
      explanationZh: String.raw`不等式用 \(<\)、\(>\)、\(\le\)、\(\ge\) 比较两个量，答案通常是一个范围，而不是单个数。解不等式的方法与解方程几乎一样，只有一个重要例外：两边同乘或同除以负数时，不等号要反向。绝对值表示到 0 的距离，所以 \(|x-3|<5\) 的意思是“\(x\) 到 3 的距离小于 5”。这部分内容出现在中级和高级：中级多考解简单不等式、在数轴上表示以及数整数解的个数；高级再加上复合不等式、绝对值方程与绝对值不等式。`,
      keyPoints: [
        {
          titleEn: "Reading inequalities and graphing them",
          titleZh: "读懂不等式并在数轴上表示",
          explanationEn: String.raw`On a number line, an open circle means the endpoint is not included (\(<\) or \(>\)), a closed circle means it is included (\(\le\) or \(\ge\)), and the shading points toward the values that work. “\(x>-2\)” and “\(-2<x\)” say the same thing: the small end of the symbol points at the smaller number. Rewrite an inequality with the variable on the left before you graph it.`,
          explanationZh: String.raw`在数轴上，空心圆点表示不包含端点（\(<\) 或 \(>\)），实心圆点表示包含端点（\(\le\) 或 \(\ge\)），阴影指向满足条件的数。“\(x>-2\)”与“\(-2<x\)”表达的是同一件事：符号尖的一端指向较小的数。画图之前，先把变量写在不等式的左边。`,
          exampleEn: String.raw`The inequality \(x\ge-2\) is graphed with a closed circle at \(-2\) and shading to the right, so \(-2\), \(0\) and \(3.5\) all work but \(-2.1\) does not.`,
          exampleZh: String.raw`不等式 \(x\ge-2\) 在数轴上画成 \(-2\) 处的实心圆点，并向右涂阴影，所以 \(-2\)、\(0\)、\(3.5\) 都满足，而 \(-2.1\) 不满足。`
        },
        {
          titleEn: "Solving inequalities and the flip rule",
          titleZh: "解不等式与“反向”规则",
          formula: String.raw`\text{If }c<0:\ a<b\ \Rightarrow\ ac>bc`,
          explanationEn: String.raw`Add and subtract freely, and multiply or divide by positive numbers without changing anything. The one new rule is that multiplying or dividing both sides by a negative number reverses the inequality sign, because negatives reverse order on the number line (\(2<5\), but \(-2>-5\)). After solving, test one number from your answer region in the original inequality.`,
          explanationZh: String.raw`加减任何数都不影响不等号，乘或除以正数也不改变不等号。唯一的新规则是：两边同乘或同除以负数时，不等号要反向，因为负数会把数轴上的大小顺序颠倒（\(2<5\)，但 \(-2>-5\)）。解完之后，在原不等式里代入答案范围内的一个数来检验。`,
          stepsEn: [
            String.raw`Start with \(-3x+4>13\).`,
            String.raw`Subtract 4 from both sides: \(-3x>9\).`,
            String.raw`Divide both sides by \(-3\) and reverse the sign: \(x<-3\).`,
            String.raw`Test: \(x=-4\) gives \(12+4=16>13\), which is true, while \(x=-3\) gives \(13>13\), which is false, so the endpoint is open.`
          ],
          stepsZh: [
            String.raw`从 \(-3x+4>13\) 开始。`,
            String.raw`两边同时减 4：\(-3x>9\)。`,
            String.raw`两边同时除以 \(-3\)，不等号反向：\(x<-3\)。`,
            String.raw`检验：\(x=-4\) 时 \(12+4=16>13\)，成立；\(x=-3\) 时 \(13>13\)，不成立，所以端点是空心的。`
          ],
          exampleEn: String.raw`Solve \(5-2x\le11\): subtract 5 to get \(-2x\le6\), then divide by \(-2\) and flip the sign to get \(x\ge-3\).`,
          exampleZh: String.raw`解 \(5-2x\le11\)：两边减 5 得 \(-2x\le6\)，再除以 \(-2\) 并把不等号反向，得 \(x\ge-3\)。`
        },
        {
          titleEn: "Compound inequalities",
          titleZh: "复合不等式",
          formula: String.raw`a<x\le b\iff x>a\ \text{and}\ x\le b`,
          explanationEn: String.raw`A compound inequality joins two conditions. “And” (written as one chain such as \(-2<x\le5\)) means both must be true, so the solution is the overlap of the two bounds. “Or” (such as \(x<-1\) or \(x>4\)) means either may be true, which gives two separate pieces. In a chain, do the same operation to all three parts; if you multiply or divide by a negative, reverse both signs and rewrite the bounds in increasing order.`,
          explanationZh: String.raw`复合不等式把两个条件连在一起。“且”（写成一条链，如 \(-2<x\le5\)）表示两个条件必须同时成立，解集就是两个范围的重叠部分；“或”（如 \(x<-1\) 或 \(x>4\)）表示满足其中一个即可，解集由两段分开的部分组成。对一条链式不等式，三个部分要做同样的运算；若乘或除以负数，两个不等号都要反向，并把端点按从小到大的顺序重新书写。`,
          exampleEn: String.raw`How many integers satisfy \(-1<2x+3\le9\)? Subtract 3 from every part: \(-4<2x\le6\). Divide every part by 2: \(-2<x\le3\). The integers are \(-1,0,1,2,3\), so there are 5.`,
          exampleZh: String.raw`有多少个整数满足 \(-1<2x+3\le9\)？三个部分都减 3：\(-4<2x\le6\)；三个部分都除以 2：\(-2<x\le3\)。整数有 \(-1,0,1,2,3\)，共 5 个。`
        },
        {
          titleEn: "Absolute-value equations",
          titleZh: "绝对值方程",
          formula: String.raw`|x-c|=a\ (a>0)\iff x=c+a\ \text{or}\ x=c-a`,
          explanationEn: String.raw`The absolute value \(|x|\) is the distance from \(x\) to 0, so it is never negative. The equation \(|x-c|=a\) says “\(x\) is exactly \(a\) units from \(c\),” which gives two solutions, \(c+a\) and \(c-a\). If an absolute value is set equal to a negative number there is no solution. Absolute-value bars act like parentheses, so simplify inside first: \(|-7|-|3|=4\), but \(|-7-3|=10\).`,
          explanationZh: String.raw`绝对值 \(|x|\) 表示 \(x\) 到 0 的距离，所以它永远不会是负数。方程 \(|x-c|=a\) 的意思是“\(x\) 到 \(c\) 的距离恰好是 \(a\)”，因此有两个解：\(c+a\) 和 \(c-a\)。如果绝对值等于一个负数，方程无解。绝对值符号相当于括号，要先算里面：\(|-7|-|3|=4\)，但 \(|-7-3|=10\)。`,
          stepsEn: [
            String.raw`Take \(2|x-3|+1=11\). Isolate the absolute value: subtract 1, then divide by 2 to get \(|x-3|=5\).`,
            String.raw`Split into two cases: \(x-3=5\) or \(x-3=-5\).`,
            String.raw`Solve each case: \(x=8\) or \(x=-2\).`,
            String.raw`Check the distances from 3: \(8-3=5\) and \(3-(-2)=5\).`
          ],
          stepsZh: [
            String.raw`以 \(2|x-3|+1=11\) 为例。先把绝对值单独留在一边：减 1，再除以 2，得 \(|x-3|=5\)。`,
            String.raw`拆成两种情况：\(x-3=5\) 或 \(x-3=-5\)。`,
            String.raw`分别求解：\(x=8\) 或 \(x=-2\)。`,
            String.raw`检验到 3 的距离：\(8-3=5\)，\(3-(-2)=5\)。`
          ],
          exampleEn: String.raw`The equation \(|x+4|=-2\) has no solution, because a distance cannot be negative. But \(|x+4|=2\) gives \(x+4=2\) or \(x+4=-2\), so \(x=-2\) or \(x=-6\).`,
          exampleZh: String.raw`方程 \(|x+4|=-2\) 无解，因为距离不可能是负数。而 \(|x+4|=2\) 给出 \(x+4=2\) 或 \(x+4=-2\)，所以 \(x=-2\) 或 \(x=-6\)。`
        },
        {
          titleEn: "Absolute-value inequalities",
          titleZh: "绝对值不等式",
          formula: String.raw`|x-c|<a\iff c-a<x<c+a,\quad |x-c|>a\iff x<c-a\ \text{or}\ x>c+a`,
          explanationEn: String.raw`Think of \(|x-c|\) as the distance between \(x\) and \(c\). “Less than \(a\)” means within \(a\) units of \(c\), which is one connected interval; “greater than \(a\)” means more than \(a\) units away, which gives two outer pieces joined by “or.” These rules are for \(a>0\), and the absolute value must be isolated first. If it is “less than” a negative number there is no solution, and if it is “greater than” a negative number every real number works.`,
          explanationZh: String.raw`把 \(|x-c|\) 想成 \(x\) 与 \(c\) 之间的距离。“小于 \(a\)”表示与 \(c\) 的距离在 \(a\) 以内，解集是一个连续的区间；“大于 \(a\)”表示距离超过 \(a\)，解集是用“或”连接的左右两段。这些规则适用于 \(a>0\)，并且要先把绝对值单独留在一边。如果绝对值“小于”一个负数，则无解；如果“大于”一个负数，则任何实数都是解。`,
          exampleEn: String.raw`Solve \(|x-2|\le4\): write \(-4\le x-2\le4\), so \(-2\le x\le6\). By contrast, \(|x|>3\) means \(x<-3\) or \(x>3\).`,
          exampleZh: String.raw`解 \(|x-2|\le4\)：写成 \(-4\le x-2\le4\)，所以 \(-2\le x\le6\)。相比之下，\(|x|>3\) 表示 \(x<-3\) 或 \(x>3\)。`
        },
        {
          titleEn: "Inequalities in words",
          titleZh: "用文字表述的不等式",
          explanationEn: String.raw`Translate wording carefully: “at least” means \(\ge\), “at most” and “no more than” mean \(\le\), “more than” means \(>\), “fewer than” means \(<\), and “between” usually means strictly between. When a question asks for the greatest or least whole number, solve the inequality first and then pick the nearest whole number that still works: round down for a maximum and up for a minimum.`,
          explanationZh: String.raw`要仔细翻译文字：“at least”（至少）表示 \(\ge\)，“at most”（至多）和“no more than”（不超过）表示 \(\le\)，“more than”（多于）表示 \(>\)，“fewer than”（少于）表示 \(<\)，“between”（在……之间）通常指严格介于两者之间。当题目问最大或最小的整数时，先解不等式，再取仍然满足条件的最接近的整数：求最大值向下取整，求最小值向上取整。`,
          exampleEn: String.raw`Ben has $50 and buys a $14 book. Posters cost $5 each. The number of posters \(p\) he can afford satisfies \(14+5p\le50\), so \(5p\le36\) and \(p\le7.2\). The greatest whole number is 7.`,
          exampleZh: String.raw`Ben 有 $50，买了一本 $14 的书。海报每张 $5。他能买的海报数 \(p\) 满足 \(14+5p\le50\)，所以 \(5p\le36\)，\(p\le7.2\)。最大的整数是 7。`
        }
      ],
      methodsEn: [
        "Treat an inequality like an equation, but flip the sign whenever you multiply or divide by a negative number.",
        "Test one number from each region of your answer in the original inequality.",
        String.raw`Read \(|x-c|\) as “the distance from \(x\) to \(c\)” and sketch a number line.`,
        "Isolate the absolute value before you split it into two cases.",
        "For “how many integers” questions, decide whether each endpoint is included, then list the integers carefully."
      ],
      methodsZh: [
        "把不等式当作方程来解，但乘或除以负数时一定要改变不等号方向。",
        "在原不等式中代入答案各部分的一个数来检验。",
        String.raw`把 \(|x-c|\) 读作“\(x\) 到 \(c\) 的距离”，并画出数轴。`,
        "先把绝对值单独留在一边，再拆成两种情况。",
        "遇到“有多少个整数”这类问题，先判断端点是否包含，再仔细列出这些整数。"
      ],
      exampleEn: String.raw`How many integers satisfy \(|2x-1|<7\)? Rewrite it as \(-7<2x-1<7\), add 1 to get \(-6<2x<8\), and divide by 2 to get \(-3<x<4\). The integers are \(-2,-1,0,1,2,3\), so there are 6. The endpoints \(-3\) and 4 are excluded because they make the absolute value exactly 7.`,
      exampleZh: String.raw`有多少个整数满足 \(|2x-1|<7\)？改写成 \(-7<2x-1<7\)，各部分加 1 得 \(-6<2x<8\)，再除以 2 得 \(-3<x<4\)。整数有 \(-2,-1,0,1,2,3\)，共 6 个。端点 \(-3\) 和 4 不能取，因为它们使绝对值恰好等于 7。`,
      checklistEn: [
        String.raw`Graph \(x<a\), \(x\le a\), \(x>a\) and \(x\ge a\) with the correct circle and direction`,
        "Reverse the inequality sign when multiplying or dividing by a negative number",
        "Solve “and” and “or” compound inequalities",
        String.raw`Solve \(|x-c|=a\), \(|x-c|<a\) and \(|x-c|>a\)`,
        "Translate “at least”, “at most” and “no more than” correctly"
      ],
      checklistZh: [
        String.raw`能用正确的圆点和方向在数轴上表示 \(x<a\)、\(x\le a\)、\(x>a\)、\(x\ge a\)`,
        "能在乘除负数时正确改变不等号方向",
        "能解“且”与“或”的复合不等式",
        String.raw`能解 \(|x-c|=a\)、\(|x-c|<a\) 和 \(|x-c|>a\)`,
        "能正确翻译“至少”“至多”“不超过”"
      ]
    },
    {
      id: "patterns-sequences-functions",
      zh: "规律、数列与函数",
      en: "Patterns, Sequences & Functions",
      detailEn: "Number patterns, arithmetic and geometric sequences, nth-term rules, function machines and tables, input–output rules, and reading simple function graphs.",
      detailZh: "数字规律，等差数列与等比数列，第 n 项的规则，函数机器与表格，输入—输出规律，以及读懂简单的函数图像。",
      explanationEn: String.raw`A pattern is a rule that repeats, and a function is a rule that turns each input into exactly one output. The skill on the ISEE is the same each time: study the data, discover the rule, and use it to predict a term far down the list. Lower Level patterns are mostly “add this” or “multiply by this” rules, growing shape patterns and simple input–output tables. Middle Level adds nth-term rules, geometric patterns and graphs of straight lines. Upper Level adds function notation such as \(f(x)=2x-3\), sequence formulas, and deciding whether a relation is a function. In every case, test your rule against all of the given terms before you trust it.`,
      explanationZh: String.raw`规律是反复出现的一条规则；函数则是把每个输入变成唯一输出的规则。ISEE 中这类题的做法始终相同：观察数据、找出规则，再用规则预测很靠后的某一项。初级以“每次加（乘）同一个数”的规律、图形增长规律和简单的输入—输出表为主；中级增加第 \(n\) 项的规则、等比规律和直线图像；高级再加上 \(f(x)=2x-3\) 这样的函数记号、数列的通项公式，以及判断一个关系是不是函数。无论哪个级别，都要先用题中给出的所有项检验找到的规则，再放心使用。`,
      keyPoints: [
        {
          titleEn: "Finding the rule of a pattern",
          titleZh: "找出数字规律",
          explanationEn: String.raw`Start by looking at what happens between neighbouring terms. A constant difference means the rule is “add \(d\)”; a constant ratio means “multiply by \(r\)”. If neither is constant, look for a two-step rule such as “double and add 1,” differences that themselves grow (\(+2,+3,+4,\dots\)), alternating rules, or terms that are the sum of the two before them.`,
          explanationZh: String.raw`先观察相邻两项之间发生了什么变化。差始终相同，规则就是“每次加 \(d\)”；比始终相同，规则就是“每次乘 \(r\)”。如果两者都不恒定，就找两步规则（如“乘 2 再加 1”）、差本身在逐渐增大（\(+2,+3,+4,\dots\)）、交替出现的两条规则，或者每一项等于前两项之和。`,
          stepsEn: [
            "Write the list: 3, 7, 15, 31, ...",
            "Find the differences: 4, 8, 16. They are not constant, so the rule is not “add the same number.”",
            String.raw`Compare the ratios: \(\frac{7}{3}\) and \(\frac{15}{7}\) are not equal, so it is not “multiply by the same number” either. Try a two-step rule: “double and add 1” takes 3 to 7, 7 to 15 and 15 to 31.`,
            String.raw`Use the rule on the last term: \(2(31)+1=63\).`
          ],
          stepsZh: [
            "写出数列：3，7，15，31，……",
            "求相邻两项的差：4，8，16。差不恒定，所以规则不是“每次加同一个数”。",
            String.raw`比较两项之比：\(\frac{7}{3}\) 与 \(\frac{15}{7}\) 不相等，所以也不是“每次乘同一个数”。试试两步规则“乘 2 再加 1”：3 变成 7，7 变成 15，15 变成 31，完全符合。`,
            String.raw`对最后一项使用规则：\(2(31)+1=63\)。`
          ],
          exampleEn: String.raw`The pattern 20, 17, 14, 11, ... has a constant difference of \(-3\), so the next term is 8. The pattern 2, 4, 7, 11, 16, ... has differences 2, 3, 4, 5, so the next difference is 6 and the next term is \(16+6=22\).`,
          exampleZh: String.raw`数列 20，17，14，11，…… 的差恒为 \(-3\)，所以下一项是 8。数列 2，4，7，11，16，…… 的差依次为 2，3，4，5，所以下一个差是 6，下一项是 \(16+6=22\)。`
        },
        {
          titleEn: "Arithmetic sequences and the nth term",
          titleZh: "等差数列与第 n 项",
          formula: String.raw`a_n=a_1+(n-1)d`,
          explanationEn: String.raw`In an arithmetic sequence every term is the previous term plus the same common difference \(d\). To jump straight to term \(n\), start at the first term and add \(d\) exactly \(n-1\) times; the 20th term is only 19 jumps away from the 1st, and using 20 jumps is the most common slip. The rule can also be written as “\(d\) times \(n\), plus a constant,” which is handy for tile and shape patterns.`,
          explanationZh: String.raw`等差数列中，每一项都等于前一项加上同一个公差 \(d\)。要直接求第 \(n\) 项，从第 1 项出发，加上 \(n-1\) 个 \(d\)：第 20 项离第 1 项只有 19 步，误用 20 步是最常见的失误。这个规则也可以写成“\(d\) 乘 \(n\)，再加一个常数”，用来处理瓷砖、图形的增长规律很方便。`,
          stepsEn: [
            String.raw`Take the sequence 5, 9, 13, 17, ... The common difference is \(9-5=4\), and \(a_1=5\).`,
            String.raw`Write the rule: \(a_n=5+(n-1)\cdot4=4n+1\).`,
            String.raw`For the 20th term, \(a_{20}=4(20)+1=81\).`,
            String.raw`To find which term equals 101, solve \(4n+1=101\), which gives \(n=25\).`
          ],
          stepsZh: [
            String.raw`以数列 5，9，13，17，…… 为例。公差是 \(9-5=4\)，首项 \(a_1=5\)。`,
            String.raw`写出规则：\(a_n=5+(n-1)\cdot4=4n+1\)。`,
            String.raw`第 20 项是 \(a_{20}=4(20)+1=81\)。`,
            String.raw`要知道 101 是第几项，解 \(4n+1=101\)，得 \(n=25\)。`
          ],
          exampleEn: String.raw`A tile pattern uses 5, 8 and 11 tiles in Figures 1, 2 and 3. The difference is 3, so Figure \(n\) uses \(3n+2\) tiles, and Figure 12 uses \(3(12)+2=38\) tiles.`,
          exampleZh: String.raw`一个瓷砖图案的第 1、2、3 个图形分别用 5、8、11 块瓷砖。公差为 3，所以第 \(n\) 个图形用 \(3n+2\) 块，第 12 个图形用 \(3(12)+2=38\) 块。`
        },
        {
          titleEn: "Geometric sequences",
          titleZh: "等比数列",
          formula: String.raw`a_n=a_1\cdot r^{\,n-1}`,
          explanationEn: String.raw`In a geometric sequence each term is the previous term times a constant ratio \(r\). Doubling, tripling and halving patterns are geometric, and \(r\) is found by dividing a term by the one before it. The exponent is \(n-1\) because the first term has not been multiplied yet. Geometric sequences usually grow or shrink much faster than arithmetic ones. Lower Level items typically stay with simple doubling and halving, while Middle and Upper Level items may ask for later terms.`,
          explanationZh: String.raw`等比数列中，每一项都等于前一项乘以同一个公比 \(r\)。翻倍、变成三倍、减半的规律都是等比的，公比可以用某一项除以它的前一项得到。指数是 \(n-1\)，因为首项还没有被乘过。等比数列增长（或缩小）的速度通常远快于等差数列。初级通常只涉及简单的翻倍、减半，中级和高级可能会问更靠后的项。`,
          exampleEn: String.raw`In 81, 27, 9, 3, ... the ratio is \(\frac{1}{3}\), so the 6th term is \(81\cdot\left(\frac{1}{3}\right)^{5}=\frac{81}{243}=\frac{1}{3}\). A colony of 3 bacteria that doubles every hour has \(3\cdot2^{4}=48\) bacteria after 4 hours.`,
          exampleZh: String.raw`在 81，27，9，3，…… 中，公比是 \(\frac{1}{3}\)，所以第 6 项是 \(81\cdot\left(\frac{1}{3}\right)^{5}=\frac{81}{243}=\frac{1}{3}\)。一个起初有 3 个细菌、每小时翻一倍的菌落，4 小时后有 \(3\cdot2^{4}=48\) 个细菌。`
        },
        {
          titleEn: "Function machines, tables and function notation",
          titleZh: "函数机器、表格与函数记号",
          formula: String.raw`y=mx+b`,
          explanationEn: String.raw`A function machine takes an input, applies a rule and gives exactly one output, and a table lists input–output pairs. If equal steps in the input always change the output by the same amount \(m\), the rule has the form \(y=mx+b\), where \(b\) is the output when the input is 0. Function notation \(f(x)\) is just a name for the output: \(f(4)\) means “put 4 into the machine,” not \(f\) times 4.`,
          explanationZh: String.raw`函数机器接收一个输入，按规则运算，给出唯一的一个输出；表格列出输入—输出的对应值。如果输入每增加相同的量，输出总是改变相同的数量 \(m\)，规则就是 \(y=mx+b\) 的形式，其中 \(b\) 是输入为 0 时的输出。函数记号 \(f(x)\) 只是输出的名字：\(f(4)\) 表示“把 4 放进机器”，而不是 \(f\) 乘以 4。`,
          stepsEn: [
            String.raw`Take the table \(x=1,2,3,4\) with \(y=5,8,11,14\). When \(x\) goes up by 1, \(y\) goes up by 3 each time, so \(m=3\).`,
            String.raw`Use one pair to find \(b\): \(5=3(1)+b\), so \(b=2\).`,
            String.raw`Write the rule: \(y=3x+2\).`,
            String.raw`Check another pair: \(x=4\) gives \(3(4)+2=14\).`
          ],
          stepsZh: [
            String.raw`看表格：\(x=1,2,3,4\) 对应 \(y=5,8,11,14\)。\(x\) 每增加 1，\(y\) 就增加 3，所以 \(m=3\)。`,
            String.raw`用一组数据求 \(b\)：\(5=3(1)+b\)，所以 \(b=2\)。`,
            String.raw`写出规则：\(y=3x+2\)。`,
            String.raw`再用另一组数据检验：\(x=4\) 时 \(3(4)+2=14\)。`
          ],
          exampleEn: String.raw`If \(f(x)=2x^2-3\), then \(f(-2)=2(-2)^2-3=8-3=5\). Put the negative input in parentheses so the square is \(4\), not \(-4\).`,
          exampleZh: String.raw`若 \(f(x)=2x^2-3\)，则 \(f(-2)=2(-2)^2-3=8-3=5\)。负的输入要加括号，这样平方是 \(4\)，而不是 \(-4\)。`
        },
        {
          titleEn: "Reading simple function graphs",
          titleZh: "读懂简单的函数图像",
          explanationEn: "Each point on a graph is an input–output pair. A straight line means a constant rate of change, and a steeper line means a faster rate. On a distance–time graph, a flat segment means no movement, and a line through the origin means the quantity starts at zero. A relation is a function only if every input has exactly one output, so no vertical line can cross its graph twice. Read the axis labels and units before anything else.",
          explanationZh: "图像上的每个点都是一组输入—输出。直线表示变化率恒定，直线越陡，变化越快。在距离—时间图像中，水平线段表示没有移动，经过原点的直线表示这个量从 0 开始。一个关系只有在每个输入恰好对应一个输出时才是函数，所以任何一条竖直线都不能与它的图像相交两次。看图时先读坐标轴的名称和单位。",
          exampleEn: String.raw`A graph shows a straight line through \((0,0)\) and \((2,6)\). The point \((2,6)\) says that an input of 2 gives an output of 6, so the rate is \(\frac{6}{2}=3\) per unit and the rule is \(y=3x\). The pairs \((1,2)\), \((1,5)\) and \((3,4)\) do not describe a function, because the input 1 has two outputs.`,
          exampleZh: String.raw`图像是一条经过 \((0,0)\) 和 \((2,6)\) 的直线。点 \((2,6)\) 表示输入 2 得到输出 6，所以变化率是每单位 \(\frac{6}{2}=3\)，规则是 \(y=3x\)。数对 \((1,2)\)、\((1,5)\)、\((3,4)\) 不能表示函数，因为输入 1 对应了两个输出。`
        }
      ],
      methodsEn: [
        "Write the differences (or ratios) between neighbouring terms before guessing a rule.",
        "Test your rule on every given term, not just the first two.",
        String.raw`For the nth term, count jumps: term \(n\) is \(n-1\) steps from term 1.`,
        "Treat a function as a machine: substitute the input everywhere the variable appears, using parentheses.",
        "On a graph, read the axis labels first, then pick two clear points to find the rate."
      ],
      methodsZh: [
        "先写出相邻两项的差（或比），再去猜规则。",
        "用所有给出的项检验规则，不要只验证前两项。",
        String.raw`求第 \(n\) 项时数“跳了几步”：第 \(n\) 项离第 1 项有 \(n-1\) 步。`,
        "把函数看成一台机器：用括号把输入代入变量出现的每个位置。",
        "看图时先读坐标轴的名称，再选两个清晰的点求变化率。"
      ],
      exampleEn: String.raw`The sequence 100, 94, 88, 82, ... drops by 6 each time, so \(a_n=100-6(n-1)=106-6n\). Is 10 a term? Solving \(106-6n=10\) gives \(n=16\), so yes, it is the 16th term. Is 15 a term? Solving \(106-6n=15\) gives \(n=\frac{91}{6}\), which is not a whole number, so no.`,
      exampleZh: String.raw`数列 100，94，88，82，…… 每次减少 6，所以 \(a_n=100-6(n-1)=106-6n\)。10 是其中的一项吗？解 \(106-6n=10\) 得 \(n=16\)，所以是，它是第 16 项。15 是其中的一项吗？解 \(106-6n=15\) 得 \(n=\frac{91}{6}\)，不是整数，所以不是。`,
      checklistEn: [
        "Tell whether a sequence is arithmetic, geometric or neither",
        "Write and use a rule for the nth term",
        "Find the rule from a table of inputs and outputs",
        String.raw`Evaluate a function such as \(f(x)=2x-3\) at a given input`,
        "Interpret a straight-line graph as a constant rate"
      ],
      checklistZh: [
        "能判断数列是等差、等比还是两者都不是",
        String.raw`能写出并使用第 \(n\) 项的规则`,
        "能根据输入—输出表找出规则",
        String.raw`能求 \(f(x)=2x-3\) 这样的函数在给定输入处的值`,
        "能把直线图像理解为恒定的变化率"
      ]
    },
    {
      id: "linear-quadratic",
      zh: "一次函数、方程组与二次式",
      en: "Linear Equations, Systems & Quadratics",
      detailEn: "Slope, slope-intercept form, lines through two points, parallel and perpendicular slopes, systems of equations, FOIL, factoring, difference of squares, and solving quadratics.",
      detailZh: "斜率与斜截式，过两点的直线，平行与垂直直线的斜率，方程组，FOIL 展开，因式分解，平方差，以及解二次方程。",
      explanationEn: String.raw`A linear equation describes a straight line, and its slope tells how fast one quantity changes compared with another. Two linear equations together form a system, whose solution is the point where the lines cross. A quadratic adds a squared term and is solved by factoring or, at the Upper Level, by the quadratic formula. This concept is Algebra I material: the ISEE never needs trigonometry or calculus. Middle Level items use these ideas mostly in simple numeric form, such as finding a slope or expanding a product; Upper Level items test the full toolkit, including systems, factoring, quadratic equations and the discriminant.`,
      explanationZh: String.raw`一次方程的图像是一条直线，斜率说明一个量相对于另一个量变化得有多快。两个一次方程放在一起叫方程组，它的解就是两条直线的交点。二次式含有平方项，可以用因式分解求解，高级还会用求根公式。这部分属于 Algebra I 的内容，ISEE 不会考三角函数或微积分。中级多以简单的数值形式考查，例如求斜率或展开乘积；高级则考查完整的方法，包括方程组、因式分解、解二次方程和判别式。`,
      keyPoints: [
        {
          titleEn: "Slope: rise over run",
          titleZh: "斜率：纵向变化除以横向变化",
          formula: String.raw`m=\frac{y_2-y_1}{x_2-x_1}`,
          explanationEn: String.raw`Slope is “rise over run”: the change in \(y\) divided by the change in \(x\) between two points. A line that goes up from left to right has positive slope, one that goes down has negative slope, a horizontal line has slope 0, and a vertical line has undefined slope. Subtract the coordinates in the same order in the numerator and the denominator; mixing the order flips the sign.`,
          explanationZh: String.raw`斜率就是“纵向变化除以横向变化”，即两点之间 \(y\) 的变化量除以 \(x\) 的变化量。从左到右上升的直线斜率为正，下降的直线斜率为负，水平线的斜率是 0，竖直线的斜率不存在（未定义）。分子和分母中要按同样的顺序做减法；顺序混用会使符号相反。`,
          stepsEn: [
            String.raw`Label the points: \((x_1,y_1)=(-2,7)\) and \((x_2,y_2)=(4,1)\).`,
            String.raw`Subtract the \(y\)-values: \(1-7=-6\).`,
            String.raw`Subtract the \(x\)-values in the same order: \(4-(-2)=6\).`,
            String.raw`Divide: \(m=\frac{-6}{6}=-1\), a line that falls 1 unit for every 1 unit it moves right.`
          ],
          stepsZh: [
            String.raw`标出两点：\((x_1,y_1)=(-2,7)\)，\((x_2,y_2)=(4,1)\)。`,
            String.raw`\(y\) 值相减：\(1-7=-6\)。`,
            String.raw`按同样的顺序把 \(x\) 值相减：\(4-(-2)=6\)。`,
            String.raw`相除：\(m=\frac{-6}{6}=-1\)，即向右每走 1 个单位，直线下降 1 个单位。`
          ],
          exampleEn: String.raw`The line through \((1,2)\) and \((5,10)\) has slope \(\frac{10-2}{5-1}=\frac{8}{4}=2\). The horizontal line \(y=4\) has slope 0, but the vertical line \(x=3\) has undefined slope because its run is 0.`,
          exampleZh: String.raw`过 \((1,2)\) 和 \((5,10)\) 的直线斜率为 \(\frac{10-2}{5-1}=\frac{8}{4}=2\)。水平线 \(y=4\) 的斜率是 0，而竖直线 \(x=3\) 的斜率不存在，因为它的横向变化量为 0。`
        },
        {
          titleEn: "Slope-intercept form and lines through two points",
          titleZh: "斜截式与过两点的直线",
          formula: String.raw`y=mx+b`,
          explanationEn: String.raw`In \(y=mx+b\), \(m\) is the slope and \(b\) is the \(y\)-intercept, the height at which the line crosses the \(y\)-axis. To write the equation of the line through two points, find \(m\) first and then substitute one point to solve for \(b\). The \(x\)-intercept comes from setting \(y=0\), and the \(y\)-intercept from setting \(x=0\). An equation such as \(2x+3y=12\) can be rearranged into \(y=mx+b\) form to read off the slope.`,
          explanationZh: String.raw`在 \(y=mx+b\) 中，\(m\) 是斜率，\(b\) 是 \(y\) 轴截距，也就是直线与 \(y\) 轴交点的纵坐标。求过两点的直线方程时，先求 \(m\)，再把其中一个点代入求 \(b\)。令 \(y=0\) 得到 \(x\) 轴截距，令 \(x=0\) 得到 \(y\) 轴截距。像 \(2x+3y=12\) 这样的方程，可以先整理成 \(y=mx+b\) 的形式再读出斜率。`,
          stepsEn: [
            String.raw`Find the line through \((1,5)\) and \((3,11)\). The slope is \(m=\frac{11-5}{3-1}=3\).`,
            String.raw`Substitute the point \((1,5)\) into \(y=3x+b\): \(5=3(1)+b\), so \(b=2\).`,
            String.raw`Write the line: \(y=3x+2\).`,
            String.raw`Check with the other point: \(3(3)+2=11\).`
          ],
          stepsZh: [
            String.raw`求过 \((1,5)\) 和 \((3,11)\) 的直线。斜率 \(m=\frac{11-5}{3-1}=3\)。`,
            String.raw`把点 \((1,5)\) 代入 \(y=3x+b\)：\(5=3(1)+b\)，所以 \(b=2\)。`,
            String.raw`写出直线方程：\(y=3x+2\)。`,
            String.raw`用另一个点检验：\(3(3)+2=11\)。`
          ],
          exampleEn: String.raw`Rewrite \(2x+3y=12\): \(3y=-2x+12\), so \(y=-\frac{2}{3}x+4\). The slope is \(-\frac{2}{3}\), the \(y\)-intercept is 4, and (setting \(y=0\)) the \(x\)-intercept is 6.`,
          exampleZh: String.raw`改写 \(2x+3y=12\)：\(3y=-2x+12\)，所以 \(y=-\frac{2}{3}x+4\)。斜率是 \(-\frac{2}{3}\)，\(y\) 轴截距是 4，令 \(y=0\) 得 \(x\) 轴截距是 6。`
        },
        {
          titleEn: "Parallel and perpendicular lines",
          titleZh: "平行与垂直的直线",
          formula: String.raw`m_1=m_2\ \text{(parallel)},\qquad m_1\cdot m_2=-1\ \text{(perpendicular)}`,
          explanationEn: "Parallel lines never meet, so they have the same slope but different intercepts. Perpendicular lines meet at a right angle, and their slopes are negative reciprocals: flip the fraction and change the sign. A horizontal line is perpendicular to a vertical line even though one slope is 0 and the other is undefined, so the product rule does not apply to that pair.",
          explanationZh: String.raw`平行线永不相交，所以斜率相同、截距不同。垂直的两条直线相交成直角，它们的斜率互为负倒数：把分数上下颠倒，再改变符号。水平线与竖直线互相垂直，但一个斜率是 0，另一个不存在，所以“乘积为 \(-1\)”的规则不适用于这一对。`,
          exampleEn: String.raw`A line parallel to \(y=3x-4\) has slope 3, for example \(y=3x+7\). A line perpendicular to \(y=\frac{3}{4}x+1\) has slope \(-\frac{4}{3}\), because \(\frac{3}{4}\cdot\left(-\frac{4}{3}\right)=-1\). The line through \((0,5)\) perpendicular to \(y=2x-1\) is \(y=-\frac{1}{2}x+5\).`,
          exampleZh: String.raw`与 \(y=3x-4\) 平行的直线斜率为 3，例如 \(y=3x+7\)。与 \(y=\frac{3}{4}x+1\) 垂直的直线斜率为 \(-\frac{4}{3}\)，因为 \(\frac{3}{4}\cdot\left(-\frac{4}{3}\right)=-1\)。过 \((0,5)\) 且与 \(y=2x-1\) 垂直的直线是 \(y=-\frac{1}{2}x+5\)。`
        },
        {
          titleEn: "Solving systems by substitution and elimination",
          titleZh: "用代入法和消元法解方程组",
          explanationEn: String.raw`The solution of a system is the pair \((x,y)\) that makes both equations true, the point where the two lines cross. Use substitution when one equation already has a variable alone. Use elimination when adding or subtracting the equations cancels a variable, first multiplying an equation if the coefficients do not match. Always check the pair in both original equations. Parallel lines give no solution, and two equations for the same line give infinitely many.`,
          explanationZh: String.raw`方程组的解是同时满足两个方程的数对 \((x,y)\)，也就是两条直线的交点。当某个方程中已有一个变量单独在一边时，用代入法；当把两个方程相加或相减能消去一个变量时，用消元法，系数不一致时先给其中一个方程乘一个数。一定要把结果代入两个原方程检验。两条平行线无解，而两个方程表示同一条直线时有无穷多个解。`,
          stepsEn: [
            String.raw`Solve \(3x+2y=16\) and \(x+y=6\). Multiply the second equation by 2 so the \(y\)-coefficients match: \(2x+2y=12\).`,
            String.raw`Subtract this new equation from the first: \((3x+2y)-(2x+2y)=16-12\), so \(x=4\).`,
            String.raw`Substitute \(x=4\) into \(x+y=6\) to get \(y=2\).`,
            String.raw`Check in the first equation: \(3(4)+2(2)=16\).`
          ],
          stepsZh: [
            String.raw`解 \(3x+2y=16\) 与 \(x+y=6\)。把第二个方程乘 2，使 \(y\) 的系数相同：\(2x+2y=12\)。`,
            String.raw`用第一个方程减去这个新方程：\((3x+2y)-(2x+2y)=16-12\)，得 \(x=4\)。`,
            String.raw`把 \(x=4\) 代入 \(x+y=6\)，得 \(y=2\)。`,
            String.raw`在第一个方程中检验：\(3(4)+2(2)=16\)。`
          ],
          exampleEn: String.raw`Substitution: for \(y=2x-1\) and \(3x+y=14\), replace \(y\) in the second equation to get \(3x+(2x-1)=14\), so \(5x=15\), \(x=3\) and \(y=5\). Check: \(3(3)+5=14\).`,
          exampleZh: String.raw`代入法：对 \(y=2x-1\) 与 \(3x+y=14\)，把第二个方程中的 \(y\) 换成 \(2x-1\)，得 \(3x+(2x-1)=14\)，所以 \(5x=15\)，\(x=3\)，\(y=5\)。检验：\(3(3)+5=14\)。`
        },
        {
          titleEn: "FOIL, factoring and the difference of squares",
          titleZh: "FOIL 展开、因式分解与平方差",
          formula: String.raw`(x+p)(x+q)=x^2+(p+q)x+pq,\qquad a^2-b^2=(a-b)(a+b)`,
          explanationEn: String.raw`FOIL (First, Outer, Inner, Last) multiplies two binomials, and the two middle terms usually combine. Factoring reverses the process: to factor \(x^2+bx+c\), find two numbers whose product is \(c\) and whose sum is \(b\). A difference of squares has no middle term and factors as \((a-b)(a+b)\). Pull out a common factor first, and remember that \((x+3)^2\) is \(x^2+6x+9\), not \(x^2+9\).`,
          explanationZh: String.raw`FOIL（First 首项、Outer 外项、Inner 内项、Last 末项）用来展开两个二项式的乘积，中间的两项通常可以合并。因式分解是它的逆过程：分解 \(x^2+bx+c\) 时，要找两个数，它们的积是 \(c\)，和是 \(b\)。平方差没有中间项，可分解为 \((a-b)(a+b)\)。要先提取公因式，并记住 \((x+3)^2\) 等于 \(x^2+6x+9\)，而不是 \(x^2+9\)。`,
          stepsEn: [
            String.raw`Factor \(x^2-5x-14\): look for two numbers with product \(-14\) and sum \(-5\).`,
            String.raw`List the factor pairs of \(-14\): \(1,-14\), \(-1,14\), \(2,-7\) and \(-2,7\).`,
            String.raw`Only \(2\) and \(-7\) add to \(-5\), so \(x^2-5x-14=(x+2)(x-7)\).`,
            String.raw`Check with FOIL: \(x^2-7x+2x-14=x^2-5x-14\).`
          ],
          stepsZh: [
            String.raw`分解 \(x^2-5x-14\)：找两个数，积为 \(-14\)，和为 \(-5\)。`,
            String.raw`列出 \(-14\) 的因数对：\(1,-14\)，\(-1,14\)，\(2,-7\)，\(-2,7\)。`,
            String.raw`只有 \(2\) 和 \(-7\) 的和是 \(-5\)，所以 \(x^2-5x-14=(x+2)(x-7)\)。`,
            String.raw`用 FOIL 检验：\(x^2-7x+2x-14=x^2-5x-14\)。`
          ],
          exampleEn: String.raw`Expand \((x+3)(x-5)=x^2-5x+3x-15=x^2-2x-15\). Factor differences of squares: \(9x^2-16=(3x-4)(3x+4)\) and \(x^2-49=(x-7)(x+7)\).`,
          exampleZh: String.raw`展开 \((x+3)(x-5)=x^2-5x+3x-15=x^2-2x-15\)。分解平方差：\(9x^2-16=(3x-4)(3x+4)\)，\(x^2-49=(x-7)(x+7)\)。`
        },
        {
          titleEn: "Solving quadratic equations",
          titleZh: "解二次方程",
          formula: String.raw`x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}`,
          explanationEn: String.raw`First write the equation as \(ax^2+bx+c=0\). If it factors, set each factor equal to 0 (the zero-product rule: if \(AB=0\), then \(A=0\) or \(B=0\)); from \(x(x-3)=10\) you cannot conclude \(x=10\) or \(x-3=10\), because the zero-product rule only works when the other side is 0. The quadratic formula, an Upper Level tool, works for every quadratic, and the discriminant \(b^2-4ac\) tells how many real solutions there are: two if positive, one if zero, none if negative. Never divide both sides by \(x\), or you will lose the solution \(x=0\). The solutions are the \(x\)-intercepts of the graph \(y=ax^2+bx+c\).`,
          explanationZh: String.raw`先把方程整理成 \(ax^2+bx+c=0\)。如果能因式分解，就让每个因式等于 0（零乘积性质：若 \(AB=0\)，则 \(A=0\) 或 \(B=0\)）；由 \(x(x-3)=10\) 不能得出 \(x=10\) 或 \(x-3=10\)，因为零乘积性质只有在另一边等于 0 时才能使用。求根公式是高级的工具，对任何二次方程都适用，判别式 \(b^2-4ac\) 决定实数解的个数：为正有两个，为零有一个，为负没有。千万不要两边同除以 \(x\)，否则会丢掉解 \(x=0\)。方程的解就是图像 \(y=ax^2+bx+c\) 与 \(x\) 轴交点的横坐标。`,
          stepsEn: [
            String.raw`Solve \(x^2+2x=15\). Move everything to one side so that it equals 0: \(x^2+2x-15=0\).`,
            String.raw`Factor: \(x^2+2x-15=(x+5)(x-3)\).`,
            String.raw`Set each factor equal to 0: \(x+5=0\) or \(x-3=0\).`,
            String.raw`Solve: \(x=-5\) or \(x=3\). Check: \((-5)^2+2(-5)=15\) and \(3^2+2(3)=15\).`
          ],
          stepsZh: [
            String.raw`解 \(x^2+2x=15\)。把所有项移到一边，使另一边等于 0：\(x^2+2x-15=0\)。`,
            String.raw`因式分解：\(x^2+2x-15=(x+5)(x-3)\)。`,
            String.raw`让每个因式等于 0：\(x+5=0\) 或 \(x-3=0\)。`,
            String.raw`解得 \(x=-5\) 或 \(x=3\)。检验：\((-5)^2+2(-5)=15\)，\(3^2+2(3)=15\)。`
          ],
          exampleEn: String.raw`Use the formula on \(2x^2+3x-2=0\), where \(a=2\), \(b=3\) and \(c=-2\). The discriminant is \(9+16=25\), so \(x=\frac{-3\pm5}{4}\), which gives \(x=\frac{1}{2}\) or \(x=-2\).`,
          exampleZh: String.raw`对 \(2x^2+3x-2=0\) 使用求根公式，其中 \(a=2\)，\(b=3\)，\(c=-2\)。判别式为 \(9+16=25\)，所以 \(x=\frac{-3\pm5}{4}\)，得 \(x=\frac{1}{2}\) 或 \(x=-2\)。`
        }
      ],
      methodsEn: [
        "Find the slope first, subtracting coordinates in the same order.",
        "Use substitution when a variable is already isolated, and elimination when the coefficients line up or can be matched.",
        "Check a system’s solution in both original equations.",
        String.raw`To factor \(x^2+bx+c\), list the factor pairs of \(c\) and pick the pair that adds to \(b\).`,
        "Set a quadratic equal to 0 before factoring or using the formula."
      ],
      methodsZh: [
        "先求斜率，且两个坐标差要按同样的顺序相减。",
        "某个变量已经单独在一边时用代入法；系数相同或能配成相同时用消元法。",
        "把方程组的解代入两个原方程检验。",
        String.raw`分解 \(x^2+bx+c\) 时，列出 \(c\) 的因数对，选出和为 \(b\) 的那一对。`,
        "分解因式或用求根公式之前，先把二次方程化成右边为 0。"
      ],
      exampleEn: String.raw`Plan A charges a $20 sign-up fee plus $15 per month, and Plan B has no fee and costs $20 per month. The costs are \(15m+20\) and \(20m\), so they are equal when \(15m+20=20m\), which gives \(m=4\); both cost $80 after 4 months. Plan B is cheaper before month 4 and Plan A is cheaper afterwards.`,
      exampleZh: String.raw`方案 A 收取 $20 的注册费，另加每月 $15；方案 B 没有注册费，每月 $20。两者的费用分别是 \(15m+20\) 和 \(20m\)，相等时 \(15m+20=20m\)，得 \(m=4\)，此时两者都是 $80。4 个月之前方案 B 更便宜，4 个月之后方案 A 更便宜。`,
      checklistEn: [
        String.raw`Find the slope of a line and write its equation in \(y=mx+b\) form`,
        "Recognize parallel and perpendicular lines from their slopes",
        "Solve a system of two equations by substitution or elimination",
        "Multiply binomials with FOIL and factor simple quadratics and differences of squares",
        "Solve quadratic equations by factoring, and at Upper Level by the quadratic formula"
      ],
      checklistZh: [
        String.raw`能求直线的斜率并写出 \(y=mx+b\) 形式的方程`,
        "能根据斜率判断两条直线平行或垂直",
        "能用代入法或消元法解二元一次方程组",
        "能用 FOIL 展开二项式，并分解简单的二次式和平方差",
        "能用因式分解解二次方程，高级还要会用求根公式"
      ]
    }
  ]
};
