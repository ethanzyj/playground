// Additional original ISEE-style Middle Level Mathematics Achievement practice: numbers & operations and algebraic concepts (set 2).
// 12 items: ma-na-m13..m24 (4 easy, 5 medium, 3 hard).
export const PROBLEMS = [
  {
    id: "ma-na-m13", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["ratios-percents", "fractions-decimals"],
    stem: "Six granola bars cost $4.80. At the same price for each bar, how much would 9 granola bars cost?",
    stemZh: "6 根谷物棒共 4.80 美元。如果每根的价格相同，9 根谷物棒要多少钱？",
    choices: ["$7.20", "$7.80", "$11.25", "$43.20"], answer: 0,
    explanationEn: String.raw`First find the price of one bar: \(4.80\div6=0.80\), so each bar costs $0.80. Then 9 bars cost \(9\times0.80=7.20\), or $7.20. Adding $3 for the 3 extra bars gives $7.80, but cost grows in proportion rather than by adding. Using \(6\div4.80=1.25\) as the price of one bar flips the unit rate and leads to \(9\times1.25=11.25\), and multiplying $4.80 by 9 gives $43.20, which forgets to divide by 6 first.`,
    explanationZh: String.raw`先求每根的价格：\(4.80\div6=0.80\)，即每根 0.80 美元。9 根的价钱是 \(9\times0.80=7.20\)，即 7.20 美元。多了 3 根就加 3 美元，得到 7.80 美元，是用加法代替了按比例计算；把 \(6\div4.80=1.25\) 当成每根的价格，是把单价算反了，会得到 \(9\times1.25=11.25\)；把 4.80 美元直接乘以 9 得到 43.20 美元，是忘了先除以 6 求单价。`
  },
  {
    id: "ma-na-m14", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["integers-order-operations", "fractions-decimals"],
    stem: String.raw`What is the value of \(-\frac{3}{4}-\left(-\frac{1}{2}\right)\)?`,
    stemZh: String.raw`\(-\frac{3}{4}-\left(-\frac{1}{2}\right)\) 的值是多少？`,
    choices: [String.raw`\(-\frac{5}{4}\)`, String.raw`\(-\frac{1}{4}\)`, String.raw`\(\frac{1}{4}\)`, String.raw`\(\frac{5}{4}\)`], answer: 1,
    explanationEn: String.raw`Subtracting a negative number is the same as adding its opposite: \(-\frac{3}{4}-\left(-\frac{1}{2}\right)=-\frac{3}{4}+\frac{2}{4}=-\frac{1}{4}\). The result takes the sign of \(-\frac{3}{4}\), the number farther from 0. Subtracting \(\frac{1}{2}\) instead of adding it gives \(-\frac{5}{4}\), ignoring the sign of \(-\frac{3}{4}\) gives \(\frac{5}{4}\), and dropping both negative signs gives \(\frac{3}{4}-\frac{1}{2}=\frac{1}{4}\).`,
    explanationZh: String.raw`减去一个负数，等于加上它的相反数：\(-\frac{3}{4}-\left(-\frac{1}{2}\right)=-\frac{3}{4}+\frac{2}{4}=-\frac{1}{4}\)。结果的符号与离 0 更远的 \(-\frac{3}{4}\) 相同。把“减去 \(-\frac{1}{2}\)”当成减去 \(\frac{1}{2}\)，会得到 \(-\frac{5}{4}\)；忽略 \(-\frac{3}{4}\) 的负号，会得到 \(\frac{5}{4}\)；把两个负号都丢掉，则得到 \(\frac{3}{4}-\frac{1}{2}=\frac{1}{4}\)。`
  },
  {
    id: "ma-na-m15", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["exponents-roots", "integers-order-operations"],
    stem: String.raw`What is the value of \(\sqrt{36+64}\)?`,
    stemZh: String.raw`\(\sqrt{36+64}\) 的值是多少？`,
    choices: ["10", "14", "50", "100"], answer: 0,
    explanationEn: String.raw`The square root sign groups everything under it, so add first: \(36+64=100\), and \(\sqrt{100}=10\). Taking the roots separately, \(\sqrt{36}+\sqrt{64}=6+8=14\), is wrong because a square root does not split over addition. Choosing 50 halves 100 instead of taking its square root, and 100 stops before taking the root.`,
    explanationZh: String.raw`根号像括号一样，把里面的内容看作一个整体，要先算根号下的加法：\(36+64=100\)，\(\sqrt{100}=10\)。把两个数分别开方再相加，\(\sqrt{36}+\sqrt{64}=6+8=14\)，是错的，因为平方根不能拆到加法里。选 50 是把 100 除以 2，而不是开平方；选 100 则是算到根号下的和就停了，没有开方。`
  },
  {
    id: "ma-na-m16", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["expressions-equations"],
    stem: String.raw`Which expression is equivalent to \(4(3x-2)-5x\)?`,
    stemZh: String.raw`下列哪个代数式与 \(4(3x-2)-5x\) 等价（化简后相同）？`,
    choices: [String.raw`\(17x-8\)`, String.raw`\(7x+8\)`, String.raw`\(7x-2\)`, String.raw`\(7x-8\)`], answer: 3,
    explanationEn: String.raw`Distribute the 4 to both terms in the parentheses: \(4(3x-2)=12x-8\). Then combine like terms: \(12x-5x=7x\), so the expression is \(7x-8\). Multiplying only the first term by 4 gives \(7x-2\), writing \(4\times(-2)\) as \(+8\) gives \(7x+8\), and adding \(5x\) instead of subtracting it gives \(17x-8\).`,
    explanationZh: String.raw`先把 4 乘到括号里的每一项：\(4(3x-2)=12x-8\)；再合并同类项：\(12x-5x=7x\)，所以结果是 \(7x-8\)。只把 4 乘到第一项上，会得到 \(7x-2\)；把 \(4\times(-2)\) 写成 \(+8\)，会得到 \(7x+8\)；把减 \(5x\) 当成加 \(5x\)，则得到 \(17x-8\)。`
  },
  {
    id: "ma-na-m17", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["ratios-percents"],
    stem: "A coding club had 50 members last year and has 80 members this year. By what percent did the membership increase?",
    stemZh: "一个编程社团去年有 50 名成员，今年有 80 名成员。成员人数增加了百分之几？",
    choices: ["30%", "37.5%", "60%", "160%"], answer: 2,
    explanationEn: String.raw`The increase is \(80-50=30\) members. Percent change compares the change with the original amount: \(\frac{30}{50}=0.60=60\%\). Dividing by the new amount gives \(\frac{30}{80}=37.5\%\), which uses the wrong base; 30% treats the raw increase as a percent; and 160% is this year’s membership as a percent of last year’s.`,
    explanationZh: String.raw`增加的人数是 \(80-50=30\)。百分数的增减要用变化量除以原来的数量：\(\frac{30}{50}=0.60=60\%\)。除以现在的人数，\(\frac{30}{80}=37.5\%\)，是用错了基准；30% 是把增加的人数 30 直接当成了百分数；160% 是今年的人数占去年人数的百分比。`
  },
  {
    id: "ma-na-m18", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["inequalities-absolute-value", "integers-order-operations"],
    stem: "The number line shows the solution set of an inequality. How many integers are in the solution set?",
    stemZh: "数轴上画出了一个不等式的解集。这个解集中有多少个整数？",
    figure: {
      kind: "svg",
      altEn: "A number line labeled from −5 to 5. There is an open circle at −3 and an open circle at 2, with a thick segment drawn between them.",
      altZh: "标有 −5 到 5 的数轴：在 −3 和 2 处各有一个空心圆圈，两个圆圈之间画有一条加粗的线段。",
      svg: `<svg viewBox="0 0 340 90"><line x1="12" y1="45" x2="86" y2="45" stroke="currentColor" stroke-width="2"/><line x1="98" y1="45" x2="216" y2="45" stroke="currentColor" stroke-width="5"/><line x1="228" y1="45" x2="326" y2="45" stroke="currentColor" stroke-width="2"/><polygon points="334,45 322,38 322,52" fill="currentColor"/><polygon points="6,45 18,38 18,52" fill="currentColor"/><circle cx="92" cy="45" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="222" cy="45" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M40 38V52M66 38V52M118 38V52M144 38V52M170 38V52M196 38V52M248 38V52M274 38V52M300 38V52" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="40" y="72">−5</text><text x="66" y="72">−4</text><text x="92" y="72">−3</text><text x="118" y="72">−2</text><text x="144" y="72">−1</text><text x="170" y="72">0</text><text x="196" y="72">1</text><text x="222" y="72">2</text><text x="248" y="72">3</text><text x="274" y="72">4</text><text x="300" y="72">5</text></g></svg>`
    },
    choices: ["3", "4", "5", "6"], answer: 1,
    explanationEn: "Both circles are open, so −3 and 2 are not part of the solution set. The integers between them (not counting −3 and 2) are −2, −1, 0 and 1, which makes 4. Counting both endpoints gives 6, counting just one endpoint gives 5 (which is also the distance from −3 to 2), and forgetting 0 gives 3.",
    explanationZh: "两个圆圈都是空心的，所以 −3 和 2 本身不在解集中。位于它们之间（不含端点）的整数是 −2、−1、0、1，共 4 个。把两个端点都算上会得到 6；只多算一个端点会得到 5（这也恰好等于 −3 到 2 的距离）；漏掉 0 则得到 3。"
  },
  {
    id: "ma-na-m19", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["factors-multiples-primes"],
    stem: "How many positive factors does 36 have?",
    stemZh: "36 有多少个正因数？",
    choices: ["5", "7", "9", "10"], answer: 2,
    explanationEn: String.raw`List the factors in pairs: \(1\times36\), \(2\times18\), \(3\times12\), \(4\times9\) and \(6\times6\). The first four pairs give 8 different factors, and the last pair adds only one more, 6, because 6 is paired with itself. So 36 has 9 positive factors: 1, 2, 3, 4, 6, 9, 12, 18 and 36. Choosing 10 counts the factor 6 twice, 5 counts the pairs instead of the factors, and 7 leaves out 1 and 36.`,
    explanationZh: String.raw`把因数成对列出：\(1\times36\)、\(2\times18\)、\(3\times12\)、\(4\times9\)、\(6\times6\)。前四对给出 8 个不同的因数，最后一对只多出一个 6（因为 6 与它自己配对）。所以 36 有 9 个正因数：1、2、3、4、6、9、12、18、36。选 10 是把 6 算了两次；选 5 是数成了“对数”而不是因数的个数；选 7 是漏掉了 1 和 36。`
  },
  {
    id: "ma-na-m20", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["patterns-sequences-functions", "expressions-equations"],
    stem: String.raw`The first four terms of a sequence are 4, 9, 14, 19, …. Which expression gives the \(n\)th term of the sequence, where \(n=1\) is the first term?`,
    stemZh: String.raw`一个数列的前四项是 4，9，14，19，……。下列哪个代数式表示数列的第 \(n\) 项（\(n=1\) 时为第一项）？`,
    choices: [String.raw`\(5n-1\)`, String.raw`\(5n-5\)`, String.raw`\(5n+4\)`, String.raw`\(4n+5\)`], answer: 0,
    explanationEn: String.raw`The terms increase by 5 each time, so the \(n\)th term has the form \(5n+b\). When \(n=1\) the term is 4, so \(5+b=4\) and \(b=-1\). The \(n\)th term is \(5n-1\); check with \(n=4\): \(5(4)-1=19\). The expression \(5n-5\) leaves out the first term (it gives 0 when \(n=1\)), \(5n+4\) wrongly uses the first term as the constant, and \(4n+5\) swaps the first term and the common difference.`,
    explanationZh: String.raw`数列每项比前一项多 5，所以第 \(n\) 项的形式是 \(5n+b\)。当 \(n=1\) 时，这一项是 4，即 \(5+b=4\)，所以 \(b=-1\)，第 \(n\) 项是 \(5n-1\)。检验 \(n=4\)：\(5(4)-1=19\)。\(5n-5\) 漏掉了首项（\(n=1\) 时得 0）；\(5n+4\) 错把首项当作常数项；\(4n+5\) 则把首项和公差互换了。`
  },
  {
    id: "ma-na-m21", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["fractions-decimals"],
    stem: String.raw`On a hike, a group walked \(\frac{1}{3}\) of the trail before lunch. After lunch, they walked \(\frac{1}{4}\) of the distance that was still left. What fraction of the whole trail was still left after both walks?`,
    stemZh: String.raw`在一次徒步中，一个小组午饭前走了全程的 \(\frac{1}{3}\)。午饭后，他们又走了剩余路程的 \(\frac{1}{4}\)。两段路走完后，还剩下全程的几分之几？`,
    choices: [String.raw`\(\frac{1}{6}\)`, String.raw`\(\frac{5}{12}\)`, String.raw`\(\frac{1}{2}\)`, String.raw`\(\frac{2}{3}\)`], answer: 2,
    explanationEn: String.raw`Before lunch the group covered \(\frac{1}{3}\) of the trail, so \(1-\frac{1}{3}=\frac{2}{3}\) was left. After lunch they walked \(\frac{1}{4}\) of that: \(\frac{1}{4}\times\frac{2}{3}=\frac{1}{6}\) of the whole trail. What remains is \(\frac{2}{3}-\frac{1}{6}=\frac{4}{6}-\frac{1}{6}=\frac{1}{2}\). Choosing \(\frac{1}{6}\) stops at the distance walked after lunch, \(\frac{2}{3}\) forgets the walk after lunch, and \(\frac{5}{12}\) takes \(\frac{1}{4}\) of the whole trail instead of \(\frac{1}{4}\) of what was left.`,
    explanationZh: String.raw`午饭前走了全程的 \(\frac{1}{3}\)，还剩 \(1-\frac{1}{3}=\frac{2}{3}\)。午饭后走了剩余路程的 \(\frac{1}{4}\)，即 \(\frac{1}{4}\times\frac{2}{3}=\frac{1}{6}\)（占全程）。最后剩下 \(\frac{2}{3}-\frac{1}{6}=\frac{4}{6}-\frac{1}{6}=\frac{1}{2}\)。选 \(\frac{1}{6}\) 是算到午饭后走的那一段就停了；选 \(\frac{2}{3}\) 是忘了午饭后走的路；选 \(\frac{5}{12}\) 是把 \(\frac{1}{4}\) 当成了全程的 \(\frac{1}{4}\)，而不是剩余路程的 \(\frac{1}{4}\)。`
  },
  {
    id: "ma-na-m22", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["ratios-percents", "expressions-equations"],
    stem: "A crate holds apples, pears and oranges in the ratio 3 to 4 to 8. There are 20 more oranges than apples. How many pieces of fruit are in the crate in all?",
    stemZh: "一个箱子里装有苹果、梨和橙子，数量之比是 3 比 4 比 8。橙子比苹果多 20 个。箱子里一共有多少个水果？",
    choices: ["4", "20", "32", "60"], answer: 3,
    explanationEn: String.raw`The numbers of apples, pears and oranges can be written \(3k\), \(4k\) and \(8k\) for some number \(k\). Oranges minus apples is \(8k-3k=5k=20\), so \(k=4\). The crate holds \(3k+4k+8k=15k=60\) pieces of fruit. The choice 4 is only the value of \(k\), 20 is the difference given in the problem, and 32 is the number of oranges alone.`,
    explanationZh: String.raw`设苹果、梨和橙子的数量分别为 \(3k\)、\(4k\)、\(8k\)。橙子比苹果多 \(8k-3k=5k=20\)，所以 \(k=4\)。水果一共有 \(3k+4k+8k=15k=60\) 个。选 4 只是求出了 \(k\) 的值；20 是题目中给出的差；32 只是橙子的数量。`
  },
  {
    id: "ma-na-m23", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["exponents-roots", "expressions-equations"],
    stem: "A number is doubled, and then 7 is added to the result. The square root of that sum is 5. What is the original number?",
    stemZh: "一个数先乘以 2，再加上 7。所得和的平方根是 5。原来的数是多少？",
    choices: [String.raw`\(-1\)`, String.raw`\(9\)`, String.raw`\(16\)`, String.raw`\(18\)`], answer: 1,
    explanationEn: String.raw`Work backward from the end: the square root is 5, so the sum was \(5^2=25\); before 7 was added the number was \(25-7=18\), and before it was doubled it was \(18\div2=9\). Check: \(\sqrt{2\times9+7}=\sqrt{25}=5\). Forgetting to square 5 gives \(2n+7=5\), so \(n=-1\); adding 7 instead of subtracting it gives \(32\div2=16\); and forgetting to halve gives 18.`,
    explanationZh: String.raw`从结果倒推。平方根是 5，所以这个和是 \(5^2=25\)；加 7 之前是 \(25-7=18\)；乘以 2 之前是 \(18\div2=9\)。检验：\(\sqrt{2\times9+7}=\sqrt{25}=5\)。忘了平方（直接令 \(2n+7=5\)）会得到 \(n=-1\)；把减 7 做成加 7，会得到 \(32\div2=16\)；忘了除以 2，则得到 18。`
  },
  {
    id: "ma-na-m24", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["linear-quadratic", "patterns-sequences-functions", "expressions-equations"],
    stem: String.raw`A candle burns down at a steady rate. The table shows the height of the candle, \(H\) centimeters, after it has burned for \(t\) hours. Which equation gives \(H\) in terms of \(t\)?`,
    stemZh: String.raw`一支蜡烛匀速燃烧变短。下表是蜡烛燃烧了 \(t\) 小时后的高度 \(H\)（厘米）。下列哪个方程表示 \(H\) 与 \(t\) 的关系？`,
    figure: {
      kind: "table",
      altEn: "A table with burning times of 2, 4, 6 and 8 hours and candle heights of 24, 18, 12 and 6 centimeters.",
      altZh: "表格：燃烧 2、4、6、8 小时时，蜡烛的高度分别是 24、18、12、6 厘米。",
      headers: ["Time, t (hours)", "Height, H (cm)"], rows: [["2", "24"], ["4", "18"], ["6", "12"], ["8", "6"]]
    },
    choices: [String.raw`\(H=24-3t\)`, String.raw`\(H=30+3t\)`, String.raw`\(H=36-6t\)`, String.raw`\(H=30-3t\)`], answer: 3,
    explanationEn: String.raw`Every 2 hours the height drops by 6 cm, so the rate is \(6\div2=3\) cm per hour and the equation has the form \(H=b-3t\). At \(t=2\) the height is 24, so \(24=b-3(2)\) and \(b=30\), the height before the candle was lit. So \(H=30-3t\); check with \(t=8\): \(30-24=6\). Using the first row as the starting height gives \(H=24-3t\), ignoring that the candle gets shorter gives \(H=30+3t\), and using the drop of 6 per row as the hourly rate gives \(H=36-6t\), which fits only the first row.`,
    explanationZh: String.raw`每过 2 小时，高度减少 6 厘米，所以每小时减少 \(6\div2=3\) 厘米，方程形如 \(H=b-3t\)。当 \(t=2\) 时高度是 24，即 \(24=b-3\times2\)，得 \(b=30\)，也就是点燃前蜡烛的高度。所以 \(H=30-3t\)；检验 \(t=8\)：\(30-24=6\)。把表中第一行的 24 当作起始高度，会得到 \(H=24-3t\)；忽略蜡烛在变短，会得到 \(H=30+3t\)；把每一行减少的 6 当作每小时的减少量，会得到 \(H=36-6t\)，它只符合第一行。`
  }
];
