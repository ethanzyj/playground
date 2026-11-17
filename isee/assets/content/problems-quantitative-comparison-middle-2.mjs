// Additional Middle Level quantitative-comparison practice items, set 2 (ids qr-qc-m19 to qr-qc-m36).
// Original ISEE-style practice written for this site; not real test questions.
export const PROBLEMS = [
  {
    id: "qr-qc-m19", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "ratios-percents", "graphs-tables"],
    stem: "A school cafeteria served 300 lunches on Monday. The circle graph shows the percent of those lunches that were of each type.",
    stemZh: "学校食堂周一供应了 300 份午餐。扇形图显示了每种午餐所占的百分数。A 列：意大利面午餐的份数；B 列：鸡肉午餐与沙拉午餐的总份数。",
    figure: {
      kind: "pie", titleEn: "Lunches served on Monday",
      slices: [{ label: "Pasta", value: 35 }, { label: "Chicken", value: 25 }, { label: "Salad", value: 15 }, { label: "Pizza", value: 25 }],
      altEn: "A circle graph of the 300 lunches served: pasta 35%, chicken 25%, salad 15%, pizza 25%.",
      altZh: "扇形图（周一供应的 300 份午餐）：意大利面占 35%，鸡肉占 25%，沙拉占 15%，披萨占 25%。"
    },
    quantityA: "The number of pasta lunches",
    quantityB: "The total number of chicken lunches and salad lunches",
    answer: 1,
    explanationEn: String.raw`Both columns come from the same total of \(300\) lunches, so it is enough to compare the percents. Chicken and salad together make up \(25\%+15\%=40\%\) of the lunches, which is more than the \(35\%\) that are pasta (\(120\) lunches versus \(105\) lunches). Column B is greater, even though pasta is the largest single slice.`,
    explanationZh: String.raw`两列都来自同一个总数 \(300\) 份，所以只需比较百分数。鸡肉和沙拉合起来占 \(25\%+15\%=40\%\)，多于意大利面的 \(35\%\)（\(120\) 份对 \(105\) 份）。虽然意大利面是单独最大的一块，但 B 列更大。`
  },
  {
    id: "qr-qc-m20", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "exponents-roots"],
    stem: "",
    quantityA: String.raw`\(3.5\times10^{6}\)`,
    quantityB: String.raw`\(35\times10^{4}\)`,
    answer: 0,
    explanationEn: String.raw`Write Column B in scientific notation: \(35\times10^{4}=3.5\times10\times10^{4}=3.5\times10^{5}\). Both columns are now \(3.5\) times a power of \(10\), and \(10^{6}\) is greater than \(10^{5}\), so Column A is greater (3,500,000 versus 350,000). Column B only looks larger because \(35\) is greater than \(3.5\).`,
    explanationZh: String.raw`把 B 列写成科学记数法：\(35\times10^{4}=3.5\times10\times10^{4}=3.5\times10^{5}\)。现在两列都是 \(3.5\) 乘以 10 的幂，而 \(10^{6}\) 大于 \(10^{5}\)，所以 A 列更大（3,500,000 对 350,000）。B 列看起来更大，只是因为 \(35\) 大于 \(3.5\)。`
  },
  {
    id: "qr-qc-m21", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "fractions-decimals", "graphs-tables"],
    stem: "The table shows how many games two school teams played this season and how many of those games they won.",
    stemZh: "下表列出了两支学校球队本赛季的比赛场数和获胜场数。A 列：鹰队获胜场数占其比赛场数的分数；B 列：猫头鹰队获胜场数占其比赛场数的分数。",
    figure: {
      kind: "table", captionEn: "Results this season",
      altEn: "A table with two rows. The Hawks played 20 games and won 15. The Owls played 24 games and won 18.",
      altZh: "表格有两行：鹰队（Hawks）打了 20 场，赢了 15 场；猫头鹰队（Owls）打了 24 场，赢了 18 场。",
      headers: ["Team", "Games played", "Games won"],
      rows: [["Hawks", "20", "15"], ["Owls", "24", "18"]]
    },
    quantityA: "The fraction of its games that the Hawks won",
    quantityB: "The fraction of its games that the Owls won",
    answer: 2,
    explanationEn: String.raw`The Hawks won \(\frac{15}{20}=\frac{3}{4}\) of their games, and the Owls won \(\frac{18}{24}=\frac{3}{4}\) of theirs, so the two fractions are equal. The Owls won more games in total (\(18>15\)), but they also played more games, so that does not make their fraction greater.`,
    explanationZh: String.raw`鹰队赢了 \(\frac{15}{20}=\frac{3}{4}\) 的比赛，猫头鹰队赢了 \(\frac{18}{24}=\frac{3}{4}\) 的比赛，两个分数相等。猫头鹰队赢的场数更多（\(18>15\)），但它打的场数也更多，所以并不能说明它获胜的比例更高。`
  },
  {
    id: "qr-qc-m22", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "factors-multiples-primes"],
    stem: String.raw`\(n\) is a positive integer.`,
    stemZh: String.raw`\(n\) 是一个正整数。A 列：\(n\) 的正因数的个数；B 列：\(4\)。`,
    quantityA: String.raw`The number of positive factors of \(n\)`,
    quantityB: String.raw`\(4\)`,
    answer: 3,
    explanationEn: String.raw`Try different allowed values of \(n\). If \(n=2\), the only positive factors are \(1\) and \(2\), so Column A is \(2\), which is less than \(4\). If \(n=12\), the positive factors are \(1, 2, 3, 4, 6, 12\), so Column A is \(6\), which is greater than \(4\). Different values of \(n\) give different relationships, so it cannot be determined.`,
    explanationZh: String.raw`代入不同的 \(n\) 来试。若 \(n=2\)，正因数只有 \(1\) 和 \(2\)，A 列为 \(2\)，小于 \(4\)；若 \(n=12\)，正因数有 \(1, 2, 3, 4, 6, 12\)，A 列为 \(6\)，大于 \(4\)。\(n\) 取不同的值会得到不同的关系，所以无法确定。`
  },
  {
    id: "qr-qc-m23", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "units-rates-time"],
    stem: "A train travels at a constant speed of 60 miles per hour. It leaves a station at 9:40 a.m. and arrives at its destination at 12:10 p.m.",
    stemZh: String.raw`一列火车以每小时 60 英里的恒定速度行驶，上午 9:40 从车站出发，中午 12:10 到达目的地。A 列：火车行驶的路程（单位：英里）；B 列：\(140\)。`,
    quantityA: "The distance the train travels, in miles",
    quantityB: String.raw`\(140\)`,
    answer: 0,
    explanationEn: String.raw`From 9:40 a.m. to 12:10 p.m. is \(2\) hours \(30\) minutes, which is \(2.5\) hours, not \(2.3\) hours. The train travels \(60\times2.5=150\) miles, which is greater than \(140\), so Column A is greater. (Treating \(30\) minutes as \(0.3\) hour gives \(138\) miles and the wrong answer.)`,
    explanationZh: String.raw`从上午 9:40 到中午 12:10 是 \(2\) 小时 \(30\) 分钟，即 \(2.5\) 小时，而不是 \(2.3\) 小时。火车行驶的路程为 \(60\times2.5=150\) 英里，大于 \(140\)，所以 A 列更大。（若把 \(30\) 分钟当成 \(0.3\) 小时，会得到 \(138\) 英里，从而选错。）`
  },
  {
    id: "qr-qc-m24", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "fractions-decimals"],
    stem: "",
    quantityA: String.raw`\(6\times\frac{2}{3}\)`,
    quantityB: String.raw`\(6\div\frac{2}{3}\)`,
    answer: 1,
    explanationEn: String.raw`Column A is \(6\times\frac{2}{3}=4\). Dividing by \(\frac{2}{3}\) means multiplying by its reciprocal, so Column B is \(6\div\frac{2}{3}=6\times\frac{3}{2}=9\). Because \(\frac{2}{3}\) is less than \(1\), multiplying by it makes a number smaller and dividing by it makes the number larger, so Column B is greater.`,
    explanationZh: String.raw`A 列为 \(6\times\frac{2}{3}=4\)。除以 \(\frac{2}{3}\) 等于乘以它的倒数，所以 B 列为 \(6\div\frac{2}{3}=6\times\frac{3}{2}=9\)。因为 \(\frac{2}{3}\) 小于 \(1\)，乘以它会使数变小，除以它则使数变大，所以 B 列更大。`
  },
  {
    id: "qr-qc-m25", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "inequalities-absolute-value", "exponents-roots"],
    stem: String.raw`\(|x|>3\)`,
    stemZh: String.raw`已知 \(|x|>3\)。`,
    quantityA: String.raw`\(x^2\)`,
    quantityB: String.raw`\(9\)`,
    answer: 0,
    explanationEn: String.raw`Squaring removes the sign: \(x^2=|x|^2\). Because \(|x|>3\), we get \(x^2>3^2=9\) for every allowed value of \(x\), positive or negative (for example, \(4^2=16\) and \((-4)^2=16\)). Column A is greater, even though \(x\) itself could be a negative number.`,
    explanationZh: String.raw`平方会使负号消失：\(x^2=|x|^2\)。因为 \(|x|>3\)，所以对每个满足条件的 \(x\)，无论正负，都有 \(x^2>3^2=9\)（例如 \(4^2=16\)，\((-4)^2=16\)）。虽然 \(x\) 本身可能是负数，但 A 列仍然更大。`
  },
  {
    id: "qr-qc-m26", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "exponents-roots"],
    stem: "",
    quantityA: String.raw`\(2^{8}+2^{8}\)`,
    quantityB: String.raw`\(2^{9}\)`,
    answer: 2,
    explanationEn: String.raw`Two equal amounts add up to double one of them: \(2^{8}+2^{8}=2\times2^{8}=2^{1}\times2^{8}=2^{9}\). (Check: \(256+256=512=2^{9}\).) The columns are equal. Adding the exponents to get \(2^{16}\) is a common mistake; exponents are added when powers are multiplied, not when the powers themselves are added.`,
    explanationZh: String.raw`两个相等的数相加，等于其中一个的 \(2\) 倍：\(2^{8}+2^{8}=2\times2^{8}=2^{1}\times2^{8}=2^{9}\)。（验算：\(256+256=512=2^{9}\)。）两列相等。把指数相加得到 \(2^{16}\) 是常见的错误：只有幂相乘时指数才相加，幂与幂相加时不能这样做。`
  },
  {
    id: "qr-qc-m27", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "ratios-percents", "graphs-tables"],
    stem: "The bar graph shows the number of people who visited a school science fair on each of four days.",
    stemZh: "条形图显示了某校科学展在四天中每天的参观人数。A 列：参观人数从周四到周五增加的百分数；B 列：参观人数从周六到周日增加的百分数。",
    figure: {
      kind: "bar", titleEn: "Science fair visitors", labels: ["Thu", "Fri", "Sat", "Sun"],
      series: [{ values: [20, 30, 40, 50] }], yLabelEn: "Visitors",
      altEn: "A bar graph of science fair visitors: Thursday 20, Friday 30, Saturday 40, Sunday 50.",
      altZh: "条形图（科学展参观人数）：周四 20 人，周五 30 人，周六 40 人，周日 50 人。"
    },
    quantityA: "The percent increase in visitors from Thursday to Friday",
    quantityB: "The percent increase in visitors from Saturday to Sunday",
    answer: 0,
    explanationEn: String.raw`Visitors rise by \(10\) from Thursday to Friday and by \(10\) from Saturday to Sunday, but a percent increase compares the change with the starting amount. From Thursday to Friday it is \(\frac{10}{20}=50\%\); from Saturday to Sunday it is \(\frac{10}{40}=25\%\). The same increase on a smaller starting number is a greater percent, so Column A is greater.`,
    explanationZh: String.raw`从周四到周五、从周六到周日，参观人数都增加了 \(10\) 人，但增长的百分数是用增加量与起始数量相比得到的。周四到周五为 \(\frac{10}{20}=50\%\)，周六到周日为 \(\frac{10}{40}=25\%\)。同样的增加量落在较小的起始数上，百分数更大，所以 A 列更大。`
  },
  {
    id: "qr-qc-m28", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "perimeter-area"],
    stem: "A rectangle has a perimeter of 24 centimeters.",
    stemZh: String.raw`一个长方形的周长为 24 厘米。A 列：该长方形的面积（单位：平方厘米）；B 列：\(30\)。`,
    quantityA: "The area of the rectangle, in square centimeters",
    quantityB: String.raw`\(30\)`,
    answer: 3,
    explanationEn: String.raw`Many different rectangles have perimeter \(24\), so the area is not fixed. A \(3\) by \(9\) rectangle has perimeter \(2(3+9)=24\) and area \(27\), which is less than \(30\). A \(5\) by \(7\) rectangle also has perimeter \(24\), but its area is \(35\), which is greater than \(30\). The relationship cannot be determined.`,
    explanationZh: String.raw`周长为 \(24\) 的长方形有很多种，面积并不固定。\(3\times9\) 的长方形周长为 \(2(3+9)=24\)，面积为 \(27\)，小于 \(30\)；\(5\times7\) 的长方形周长同样是 \(24\)，面积却是 \(35\)，大于 \(30\)。所以无法确定。`
  },
  {
    id: "qr-qc-m29", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "probability-counting", "factors-multiples-primes"],
    stem: "Twelve cards are numbered 1 through 12, one number on each card. One card is chosen at random.",
    stemZh: "十二张卡片分别写有 1 到 12 的数字，每张卡片一个数。从中随机抽取一张。A 列：抽到的数是 3 的倍数的概率；B 列：抽到的数是质数的概率。",
    quantityA: "The probability that the number on the card is a multiple of 3",
    quantityB: "The probability that the number on the card is a prime number",
    answer: 1,
    explanationEn: String.raw`All \(12\) cards are equally likely, so compare how many cards fit each description. The multiples of \(3\) are \(3, 6, 9, 12\), which is \(4\) cards. The primes are \(2, 3, 5, 7, 11\), which is \(5\) cards (\(1\) is not prime). Since \(\frac{5}{12}>\frac{4}{12}\), Column B is greater.`,
    explanationZh: String.raw`12 张卡片被抽到的可能性相同，所以只需比较符合条件的卡片张数。\(3\) 的倍数有 \(3, 6, 9, 12\)，共 \(4\) 张；质数有 \(2, 3, 5, 7, 11\)，共 \(5\) 张（\(1\) 不是质数）。因为 \(\frac{5}{12}>\frac{4}{12}\)，所以 B 列更大。`
  },
  {
    id: "qr-qc-m30", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "perimeter-area", "polygons-circles"],
    stem: String.raw`In the figure, ABCD is a rectangle with \(AB=10\) and \(AD=6\). Point E is on side DC.`,
    stemZh: String.raw`如图，ABCD 是长方形，\(AB=10\)，\(AD=6\)。点 E 在边 DC 上。A 列：三角形 ABE 的面积；B 列：三角形 ADE 与三角形 BCE 的面积之和。`,
    figure: {
      kind: "svg",
      altEn: "Rectangle ABCD with A at the bottom left, B at the bottom right, C at the top right, and D at the top left. Side AB is labeled 10 and side AD is labeled 6. Point E is on the top side DC, closer to D than to C. Segments AE and BE are drawn, and triangle ABE is shaded.",
      altZh: "长方形 ABCD：A 在左下角，B 在右下角，C 在右上角，D 在左上角。边 AB 标为 10，边 AD 标为 6。点 E 在上边 DC 上，更靠近 D。图中画出了线段 AE 和 BE，三角形 ABE 为阴影部分。",
      svg: `<svg viewBox="0 0 300 200"><polygon points="40,160 240,160 100,40" fill="currentColor" fill-opacity="0.12"/><g fill="none" stroke="currentColor" stroke-width="2"><rect x="40" y="40" width="200" height="120"/><path d="M40 160L100 40L240 160"/></g><path d="M49 160V151H40M231 160V151H240M240 49H231V40M40 49H49V40" fill="none" stroke="currentColor" stroke-width="1.5"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="28" y="176">A</text><text x="252" y="176">B</text><text x="252" y="38">C</text><text x="28" y="38">D</text><text x="100" y="30">E</text><text x="140" y="188">10</text><text x="24" y="105">6</text></g></svg>`
    },
    quantityA: "The area of triangle ABE",
    quantityB: "The sum of the areas of triangles ADE and BCE",
    answer: 2,
    explanationEn: String.raw`Triangle ABE has base \(AB=10\) and height \(6\) (the distance from E to line AB equals \(AD\)), so its area is \(\frac{1}{2}\times10\times6=30\). Triangles ADE and BCE each have height \(6\), and their bases \(DE\) and \(EC\) add up to \(DC=10\), so their areas add up to \(\frac{1}{2}\times6\times(DE+EC)=\frac{1}{2}\times6\times10=30\). The columns are equal wherever E is on side DC.`,
    explanationZh: String.raw`三角形 ABE 的底 \(AB=10\)，高为 \(6\)（点 E 到直线 AB 的距离等于 \(AD\)），所以面积为 \(\frac{1}{2}\times10\times6=30\)。三角形 ADE 与三角形 BCE 的高都是 \(6\)，底 \(DE\) 与 \(EC\) 之和为 \(DC=10\)，所以它们的面积之和为 \(\frac{1}{2}\times6\times(DE+EC)=\frac{1}{2}\times6\times10=30\)。无论 E 在边 DC 上的什么位置，两列都相等。`
  },
  {
    id: "qr-qc-m31", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "expressions-equations", "linear-quadratic"],
    stem: String.raw`\(x\) is a negative number.`,
    stemZh: String.raw`\(x\) 是一个负数。`,
    quantityA: String.raw`\((x+4)^2\)`,
    quantityB: String.raw`\(x^2+16\)`,
    answer: 1,
    explanationEn: String.raw`Expand Column A: \((x+4)^2=x^2+8x+16\), so Column A minus Column B equals \(8x\). Because \(x\) is negative, \(8x\) is negative, which means Column A is less than Column B for every allowed value of \(x\). (For example, \(x=-1\) gives \(9\) and \(17\), and \(x=-6\) gives \(4\) and \(52\).) Column B is greater. Treating \((x+4)^2\) as \(x^2+16\) would wrongly make the columns equal.`,
    explanationZh: String.raw`展开 A 列：\((x+4)^2=x^2+8x+16\)，所以 A 列减 B 列等于 \(8x\)。因为 \(x\) 是负数，\(8x\) 是负数，所以对每个允许的 \(x\)，A 列都小于 B 列。（例如 \(x=-1\) 时为 \(9\) 和 \(17\)，\(x=-6\) 时为 \(4\) 和 \(52\)。）B 列更大。若把 \((x+4)^2\) 当成 \(x^2+16\)，就会错误地认为两列相等。`
  },
  {
    id: "qr-qc-m32", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "mean-median-mode", "expressions-equations"],
    stem: String.raw`The mean of \(x\) and \(y\) is \(8\), and the mean of \(y\) and \(z\) is \(12\).`,
    stemZh: String.raw`\(x\) 与 \(y\) 的平均数是 \(8\)，\(y\) 与 \(z\) 的平均数是 \(12\)。`,
    quantityA: String.raw`\(z-x\)`,
    quantityB: String.raw`\(8\)`,
    answer: 2,
    explanationEn: String.raw`The mean of \(x\) and \(y\) is \(8\), so \(x+y=16\). The mean of \(y\) and \(z\) is \(12\), so \(y+z=24\). Subtracting the first equation from the second removes \(y\): \(z-x=(y+z)-(x+y)=24-16=8\). The columns are equal, even though \(x\), \(y\), and \(z\) cannot be found one by one (for example, \(x=5\), \(y=11\), \(z=13\) and \(x=0\), \(y=16\), \(z=8\) both fit).`,
    explanationZh: String.raw`\(x\) 与 \(y\) 的平均数是 \(8\)，所以 \(x+y=16\)；\(y\) 与 \(z\) 的平均数是 \(12\)，所以 \(y+z=24\)。用第二式减去第一式，\(y\) 就被消去了：\(z-x=(y+z)-(x+y)=24-16=8\)。所以两列相等，尽管 \(x\)、\(y\)、\(z\) 各自的值无法求出（例如 \(x=5\)，\(y=11\)，\(z=13\) 与 \(x=0\)，\(y=16\)，\(z=8\) 都符合条件）。`
  },
  {
    id: "qr-qc-m33", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "integers-order-operations", "inequalities-absolute-value"],
    stem: String.raw`\(a\) and \(b\) are real numbers with \(a<0<b\).`,
    stemZh: String.raw`\(a\) 和 \(b\) 是两个实数，且 \(a<0<b\)。`,
    quantityA: String.raw`\(ab\)`,
    quantityB: String.raw`\(a+b\)`,
    answer: 3,
    explanationEn: String.raw`Try different allowed values. If \(a=-1\) and \(b=3\), then \(ab=-3\) and \(a+b=2\), so Column B is greater. If \(a=-3\) and \(b=\frac{1}{2}\), then \(ab=-\frac{3}{2}\) and \(a+b=-\frac{5}{2}\), so Column A is greater. Both pairs satisfy \(a<0<b\), so the relationship cannot be determined. (Trying only integers always favors Column B, which is the trap.)`,
    explanationZh: String.raw`取不同的允许值来试。若 \(a=-1\)，\(b=3\)，则 \(ab=-3\)，\(a+b=2\)，B 列更大；若 \(a=-3\)，\(b=\frac{1}{2}\)，则 \(ab=-\frac{3}{2}\)，\(a+b=-\frac{5}{2}\)，A 列更大。两组数值都满足 \(a<0<b\)，所以无法确定。（只试整数时总是 B 列更大，这正是陷阱所在。）`
  },
  {
    id: "qr-qc-m34", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "mean-median-mode"],
    stem: "Class P has 12 students whose mean height is 150 centimeters. Class Q has 4 students whose mean height is 170 centimeters.",
    stemZh: String.raw`P 班有 12 名学生，平均身高是 150 厘米；Q 班有 4 名学生，平均身高是 170 厘米。A 列：这 16 名学生的平均身高（单位：厘米）；B 列：\(160\)。`,
    quantityA: "The mean height of all 16 students, in centimeters",
    quantityB: String.raw`\(160\)`,
    answer: 1,
    explanationEn: String.raw`The mean height of all 16 students is not halfway between \(150\) and \(170\), because Class P has three times as many students and pulls the mean toward \(150\). The total of all the heights is \(12\times150+4\times170=1800+680=2480\), so the mean is \(2480\div16=155\), which is less than \(160\). Column B is greater. (Averaging \(150\) and \(170\) works only when the two classes are the same size.)`,
    explanationZh: String.raw`16 名学生的平均身高并不在 \(150\) 和 \(170\) 的正中间，因为 P 班的人数是 Q 班的 3 倍，会把平均身高拉向 \(150\)。全部身高之和为 \(12\times150+4\times170=1800+680=2480\)，平均身高为 \(2480\div16=155\)，小于 \(160\)，所以 B 列更大。（只有两个班人数相同时，才能把 \(150\) 和 \(170\) 直接取平均。）`
  },
  {
    id: "qr-qc-m35", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "ratios-percents", "fractions-decimals"],
    stem: String.raw`\(x\), \(y\), and \(z\) are positive numbers. The ratio of \(x\) to \(y\) is \(2:3\), and the ratio of \(y\) to \(z\) is \(4:5\).`,
    stemZh: String.raw`\(x\)、\(y\)、\(z\) 都是正数，\(x\) 与 \(y\) 之比为 \(2:3\)，\(y\) 与 \(z\) 之比为 \(4:5\)。`,
    quantityA: String.raw`\(\frac{x}{z}\)`,
    quantityB: String.raw`\(\frac{1}{2}\)`,
    answer: 0,
    explanationEn: String.raw`Link the two ratios through \(y\): \(\frac{x}{z}=\frac{x}{y}\times\frac{y}{z}=\frac{2}{3}\times\frac{4}{5}=\frac{8}{15}\). Since \(\frac{8}{15}=\frac{16}{30}\) and \(\frac{1}{2}=\frac{15}{30}\), Column A is greater. (Writing the three numbers as \(x:y:z=8:12:15\) gives the same result. Pairing the \(2\) directly with the \(5\) to get \(\frac{2}{5}\) is the trap that would make Column B look greater.)`,
    explanationZh: String.raw`通过 \(y\) 把两个比连起来：\(\frac{x}{z}=\frac{x}{y}\times\frac{y}{z}=\frac{2}{3}\times\frac{4}{5}=\frac{8}{15}\)。因为 \(\frac{8}{15}=\frac{16}{30}\)，\(\frac{1}{2}=\frac{15}{30}\)，所以 A 列更大。（也可以把三个数写成连比 \(x:y:z=8:12:15\)，结果相同。若把 \(2\) 和 \(5\) 直接配成 \(\frac{2}{5}\)，就会误以为 B 列更大。）`
  },
  {
    id: "qr-qc-m36", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "angles-lines-triangles"],
    stem: String.raw`Triangle PQR is isosceles, and one of its angles measures \(70^\circ\).`,
    stemZh: String.raw`三角形 PQR 是等腰三角形，其中一个角为 \(70^\circ\)。A 列：三角形 PQR 最大角的度数；B 列：\(70^\circ\)。`,
    quantityA: "The measure of the largest angle of triangle PQR",
    quantityB: String.raw`\(70^\circ\)`,
    answer: 2,
    explanationEn: String.raw`The \(70^\circ\) angle is either one of the two equal angles or the angle that is different. If it is one of the two equal angles, the angles are \(70^\circ\), \(70^\circ\), and \(40^\circ\). If it is the different angle, the other two angles are equal and each measures \(\frac{180-70}{2}=55^\circ\), so the angles are \(70^\circ\), \(55^\circ\), and \(55^\circ\). In both cases the largest angle is \(70^\circ\), so the columns are equal even though the triangle is not completely determined.`,
    explanationZh: String.raw`这个 \(70^\circ\) 的角要么是两个相等角中的一个，要么是那个不同的角。若是相等角之一，三个角为 \(70^\circ\)、\(70^\circ\)、\(40^\circ\)；若是那个不同的角，另外两个角相等，各为 \(\frac{180-70}{2}=55^\circ\)，三个角为 \(70^\circ\)、\(55^\circ\)、\(55^\circ\)。两种情形下最大的角都是 \(70^\circ\)，所以尽管这个三角形并没有被完全确定，两列仍然相等。`
  }
];
