// Quantitative-comparison practice items (assignment P4): 18 Middle + 18 Upper.
// Original ISEE-style practice written for this site; not real test questions.
export const PROBLEMS = [
  {
    id: "qr-qc-m01", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "fractions-decimals"],
    stem: "",
    quantityA: String.raw`\(\frac{3}{5}+0.25\)`,
    quantityB: String.raw`\(0.6+\frac{1}{5}\)`,
    answer: 0,
    explanationEn: String.raw`Since \(\frac{3}{5}=0.6\), both columns contain the same \(0.6\), so compare only what is added to it: \(0.25\) in Column A and \(\frac{1}{5}=0.2\) in Column B. Because \(0.25>0.2\), Column A is greater (\(0.85\) versus \(0.8\)).`,
    explanationZh: String.raw`因为 \(\frac{3}{5}=0.6\)，两列都含有相同的 \(0.6\)，所以只需比较各自加上的数：A 列加 \(0.25\)，B 列加 \(\frac{1}{5}=0.2\)。\(0.25>0.2\)，所以 A 列更大（\(0.85\) 比 \(0.8\)）。`
  },
  {
    id: "qr-qc-m02", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "exponents-roots", "expressions-equations"],
    stem: String.raw`\(x^2=25\)`,
    stemZh: String.raw`已知 \(x^2=25\)。`,
    quantityA: String.raw`\(x\)`,
    quantityB: String.raw`\(5\)`,
    answer: 3,
    explanationEn: String.raw`Both \(5\) and \(-5\) satisfy \(x^2=25\). If \(x=5\), the columns are equal; if \(x=-5\), Column B is greater. Because the relationship changes with the value of \(x\), it cannot be determined.`,
    explanationZh: String.raw`\(5\) 和 \(-5\) 都满足 \(x^2=25\)。若 \(x=5\)，两列相等；若 \(x=-5\)，B 列更大。关系随 \(x\) 的取值而变化，所以无法确定。`
  },
  {
    id: "qr-qc-m03", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "ratios-percents"],
    stem: "",
    quantityA: String.raw`\(15\%\) of \(40\)`,
    quantityB: String.raw`\(40\%\) of \(15\)`,
    answer: 2,
    explanationEn: String.raw`\(15\%\) of \(40\) is \(0.15\times40=6\), and \(40\%\) of \(15\) is \(0.4\times15=6\), so the columns are equal. This is no accident: \(p\%\) of \(q\) and \(q\%\) of \(p\) both equal \(\frac{p\times q}{100}\).`,
    explanationZh: String.raw`\(40\) 的 \(15\%\) 是 \(0.15\times40=6\)，\(15\) 的 \(40\%\) 是 \(0.4\times15=6\)，所以两列相等。这并非巧合：\(q\) 的 \(p\%\) 与 \(p\) 的 \(q\%\) 都等于 \(\frac{p\times q}{100}\)。`
  },
  {
    id: "qr-qc-m04", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "exponents-roots", "fractions-decimals"],
    stem: String.raw`\(0<x<1\)`,
    stemZh: String.raw`已知 \(0<x<1\)。`,
    quantityA: String.raw`\(x^2\)`,
    quantityB: String.raw`\(x\)`,
    answer: 1,
    explanationEn: String.raw`Try a number in the allowed range, such as \(x=\frac{1}{2}\): then \(x^2=\frac{1}{4}\), which is less than \(\frac{1}{2}\). In general, multiplying a positive number by a number less than \(1\) makes it smaller, so \(x^2=x\cdot x<x\). Column B is greater.`,
    explanationZh: String.raw`在允许的范围内取一个数试试，如 \(x=\frac{1}{2}\)：\(x^2=\frac{1}{4}\)，小于 \(\frac{1}{2}\)。一般地，正数乘以小于 \(1\) 的数会变小，所以 \(x^2=x\cdot x<x\)。B 列更大。`
  },
  {
    id: "qr-qc-m05", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "polygons-circles"],
    stem: "A circle has a diameter of 10 centimeters.",
    stemZh: String.raw`一个圆的直径为 10 厘米。A 列：该圆的周长（单位：厘米）；B 列：\(30\)。`,
    quantityA: "The circumference of the circle, in centimeters",
    quantityB: String.raw`\(30\)`,
    answer: 0,
    explanationEn: String.raw`The circumference is \(\pi\times d=10\pi\). Since \(\pi\) is greater than \(3\), \(10\pi\) is greater than \(30\) (it is about \(31.4\)), so Column A is greater.`,
    explanationZh: String.raw`圆的周长 \(=\pi\times d=10\pi\)。因为 \(\pi\) 大于 \(3\)，所以 \(10\pi\) 大于 \(30\)（约为 \(31.4\)），A 列更大。`
  },
  {
    id: "qr-qc-m06", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "units-rates-time", "graphs-tables"],
    stem: "The table shows two packs of pencils sold at a school store.",
    stemZh: "下表列出了学校商店出售的两种铅笔装。A 列：X 装中每支铅笔的价格；B 列：Y 装中每支铅笔的价格。",
    figure: {
      kind: "table", captionEn: "Pencil packs at the school store",
      altEn: "A table with two rows. Pack X holds 12 pencils and costs $3.00. Pack Y holds 8 pencils and costs $2.40.",
      altZh: "表格有两行：X 装有 12 支铅笔，价格 3.00 美元；Y 装有 8 支铅笔，价格 2.40 美元。",
      headers: ["Pack", "Pencils", "Price"],
      rows: [["X", "12", "$3.00"], ["Y", "8", "$2.40"]]
    },
    quantityA: "The price per pencil in Pack X",
    quantityB: "The price per pencil in Pack Y",
    answer: 1,
    explanationEn: String.raw`Pack X costs \(3.00\div12=0.25\) dollars per pencil, while Pack Y costs \(2.40\div8=0.30\) dollars per pencil. Pack X has the higher total price, but it also holds more pencils, so its price per pencil is lower. Column B is greater.`,
    explanationZh: String.raw`X 装每支铅笔 \(3.00\div12=0.25\) 美元，Y 装每支铅笔 \(2.40\div8=0.30\) 美元。X 装总价更高，但铅笔也更多，所以每支的价格反而更低。B 列更大。`
  },
  {
    id: "qr-qc-m07", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "factors-multiples-primes"],
    stem: "",
    stemZh: "A 列：24 和 36 的最大公因数；B 列：3 和 4 的最小公倍数。",
    quantityA: "The greatest common factor of 24 and 36",
    quantityB: "The least common multiple of 3 and 4",
    answer: 2,
    explanationEn: "The factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24 and the factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36, so the greatest common factor is 12. The multiples of 3 are 3, 6, 9, 12 and the multiples of 4 are 4, 8, 12, so the least common multiple is 12. The columns are equal.",
    explanationZh: "24 的因数有 1, 2, 3, 4, 6, 8, 12, 24，36 的因数有 1, 2, 3, 4, 6, 9, 12, 18, 36，所以最大公因数是 12。3 的倍数有 3, 6, 9, 12，4 的倍数有 4, 8, 12，所以最小公倍数是 12。两列相等。"
  },
  {
    id: "qr-qc-m08", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "mean-median-mode", "graphs-tables"],
    stem: "The bar graph shows the number of books each of five students read last month.",
    stemZh: "条形图显示了五名学生上个月各读了多少本书。A 列：读书数量的平均数；B 列：读书数量的中位数。",
    figure: {
      kind: "bar", titleEn: "Books read last month", labels: ["Mei", "Omar", "Priya", "Sam", "Lena"],
      series: [{ values: [8, 4, 10, 4, 4] }], yLabelEn: "Books",
      altEn: "A bar graph of books read last month: Mei 8, Omar 4, Priya 10, Sam 4, Lena 4.",
      altZh: "条形图（上个月读书的数量）：Mei 8 本，Omar 4 本，Priya 10 本，Sam 4 本，Lena 4 本。"
    },
    quantityA: "The mean number of books read",
    quantityB: "The median number of books read",
    answer: 0,
    explanationEn: String.raw`Mean: \((8+4+10+4+4)\div5=30\div5=6\). Median: in order the values are \(4, 4, 4, 8, 10\), so the middle value is \(4\). The large values \(8\) and \(10\) pull the mean above the median, so Column A is greater.`,
    explanationZh: String.raw`平均数：\((8+4+10+4+4)\div5=30\div5=6\)。中位数：按大小排列为 \(4,4,4,8,10\)，中间的数是 \(4\)。较大的 \(8\) 和 \(10\) 把平均数拉高，所以 A 列更大。`
  },
  {
    id: "qr-qc-m09", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "inequalities-absolute-value"],
    stem: String.raw`\(3x-5>10\)`,
    stemZh: String.raw`已知 \(3x-5>10\)。`,
    quantityA: String.raw`\(5\)`,
    quantityB: String.raw`\(x\)`,
    answer: 1,
    explanationEn: String.raw`Solve the inequality: add \(5\) to both sides to get \(3x>15\), then divide by \(3\) to get \(x>5\). So \(x\) is always greater than \(5\), and Column B is greater.`,
    explanationZh: String.raw`解不等式：两边同加 \(5\)，得 \(3x>15\)；两边同除以 \(3\)，得 \(x>5\)。所以 \(x\) 总是大于 \(5\)，B 列更大。`
  },
  {
    id: "qr-qc-m10", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "probability-counting"],
    stem: "A bag contains 4 red marbles and some blue marbles. One marble is chosen at random.",
    stemZh: String.raw`一个袋子里有 4 个红球和若干个蓝球，从中随机取出一个球。A 列：取到红球的概率；B 列：\(\frac{1}{2}\)。`,
    quantityA: "The probability that the marble is red",
    quantityB: String.raw`\(\frac{1}{2}\)`,
    answer: 3,
    explanationEn: String.raw`If there are \(b\) blue marbles, the probability of red is \(\frac{4}{4+b}\), and \(b\) is not given. With \(b=2\) the probability is \(\frac{4}{6}=\frac{2}{3}\), which is greater than \(\frac{1}{2}\); with \(b=8\) it is \(\frac{4}{12}=\frac{1}{3}\), which is less. The relationship cannot be determined.`,
    explanationZh: String.raw`设有 \(b\) 个蓝球，则取到红球的概率为 \(\frac{4}{4+b}\)，而 \(b\) 并未给出。若 \(b=2\)，概率为 \(\frac{4}{6}=\frac{2}{3}\)，大于 \(\frac{1}{2}\)；若 \(b=8\)，概率为 \(\frac{4}{12}=\frac{1}{3}\)，小于 \(\frac{1}{2}\)。所以无法确定。`
  },
  {
    id: "qr-qc-m11", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "probability-counting"],
    stem: "An outfit is one shirt, one pair of pants, and one pair of shoes. Mia has 4 shirts, 3 pairs of pants, and 2 pairs of shoes. Noah has 6 shirts, 3 pairs of pants, and 1 pair of shoes.",
    stemZh: "一套搭配由一件上衣、一条裤子和一双鞋组成。Mia 有 4 件上衣、3 条裤子和 2 双鞋；Noah 有 6 件上衣、3 条裤子和 1 双鞋。A 列：Mia 能搭配出的不同套数；B 列：Noah 能搭配出的不同套数。",
    quantityA: "The number of different outfits Mia can make",
    quantityB: "The number of different outfits Noah can make",
    answer: 0,
    explanationEn: String.raw`Multiply the number of choices for each item: Mia can make \(4\times3\times2=24\) outfits and Noah can make \(6\times3\times1=18\). Adding the counts instead (\(9\) versus \(10\)) would wrongly make Noah look ahead.`,
    explanationZh: String.raw`把每类物品的选择数相乘：Mia 有 \(4\times3\times2=24\) 种搭配，Noah 有 \(6\times3\times1=18\) 种。若把数量相加（\(9\) 对 \(10\)），就会错误地认为 Noah 的搭配更多。`
  },
  {
    id: "qr-qc-m12", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "angles-lines-triangles"],
    stem: String.raw`In the figure, side BC of triangle ABC is extended to point D. Angle A measures \(50^\circ\), angle ACD measures \(110^\circ\), and angle B measures \(x^\circ\). Figure not drawn to scale.`,
    stemZh: String.raw`如图，三角形 ABC 的边 BC 延长至点 D。角 A 为 \(50^\circ\)，角 ACD 为 \(110^\circ\)，角 B 为 \(x^\circ\)。图形未按比例绘制。`,
    figure: {
      kind: "svg",
      altEn: "Triangle ABC with side BC extended past C to point D. The angle at A is 50 degrees, the interior angle at B is x degrees, and the exterior angle at C, angle ACD, is 110 degrees.",
      altZh: "三角形 ABC，边 BC 延长到点 D。A 处的角为 50 度，B 处的内角为 x 度，C 处的外角（角 ACD）为 110 度。",
      svg: `<svg viewBox="0 0 320 220"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M40 190H290M40 190L132 31L190 190"/><path d="M64 190A24 24 0 0 0 52 169.2M120 51.8A24 24 0 0 0 140.2 53.6M220 190A30 30 0 0 0 179.7 161.8" stroke-width="1.5"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="132" y="22">A</text><text x="26" y="208">B</text><text x="190" y="210">C</text><text x="294" y="208">D</text><text x="126" y="90">50°</text><text x="80" y="178">x°</text><text x="238" y="150">110°</text></g></svg>`
    },
    quantityA: String.raw`\(x\)`,
    quantityB: String.raw`\(60\)`,
    answer: 2,
    explanationEn: String.raw`An exterior angle of a triangle equals the sum of the two interior angles that are not next to it, so \(110=50+x\) and \(x=60\). (Check: the interior angle at C is \(180-110=70\), and \(50+60+70=180\).) The columns are equal.`,
    explanationZh: String.raw`三角形的外角等于与它不相邻的两个内角之和，所以 \(110=50+x\)，\(x=60\)。（验算：C 处的内角为 \(180-110=70\)，\(50+60+70=180\)。）两列相等。`
  },
  {
    id: "qr-qc-m13", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "mean-median-mode"],
    stem: "The mean of three numbers is 10.",
    stemZh: String.raw`三个数的平均数是 10。A 列：这三个数中最大的数；B 列：\(11\)。`,
    quantityA: "The largest of the three numbers",
    quantityB: String.raw`\(11\)`,
    answer: 3,
    explanationEn: String.raw`The three numbers must add up to \(3\times10=30\), but they can be split in many ways. If the numbers are \(10, 10, 10\), the largest is \(10\), which is less than \(11\). If they are \(5, 10, 15\), the largest is \(15\), which is greater than \(11\). The relationship cannot be determined.`,
    explanationZh: String.raw`这三个数的和必为 \(3\times10=30\)，但分配方式有很多种。若三数为 \(10,10,10\)，最大数为 \(10\)，小于 \(11\)；若为 \(5,10,15\)，最大数为 \(15\)，大于 \(11\)。所以无法确定。`
  },
  {
    id: "qr-qc-m14", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "ratios-percents"],
    stem: String.raw`The price of a jacket was increased by \(25\%\). Then the new price was decreased by \(20\%\).`,
    stemZh: String.raw`一件夹克的价格先上涨了 \(25\%\)，然后新价格又下降了 \(20\%\)。A 列：夹克的最终价格；B 列：夹克的原价。`,
    quantityA: "The final price of the jacket",
    quantityB: "The original price of the jacket",
    answer: 2,
    explanationEn: String.raw`Let the original price be \(P\). Increasing by \(25\%\) gives \(\frac{5}{4}P\), and decreasing that by \(20\%\) multiplies it by \(\frac{4}{5}\), giving \(\frac{4}{5}\times\frac{5}{4}P=P\). The final price equals the original price. The percents cannot simply be subtracted because they apply to different amounts.`,
    explanationZh: String.raw`设原价为 \(P\)。涨价 \(25\%\) 后为 \(\frac{5}{4}P\)，再降价 \(20\%\) 相当于乘以 \(\frac{4}{5}\)，得 \(\frac{4}{5}\times\frac{5}{4}P=P\)，所以最终价格等于原价。两个百分数不能直接相减，因为它们针对的基数不同。`
  },
  {
    id: "qr-qc-m15", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "perimeter-area", "expressions-equations"],
    stem: String.raw`A rectangle has length \(x+2\) and width \(x-2\), where \(x>2\). A square has side length \(x\).`,
    stemZh: String.raw`一个长方形的长为 \(x+2\)，宽为 \(x-2\)，其中 \(x>2\)；一个正方形的边长为 \(x\)。A 列：长方形的面积；B 列：正方形的面积。`,
    quantityA: "The area of the rectangle",
    quantityB: "The area of the square",
    answer: 1,
    explanationEn: String.raw`Try a value: for \(x=5\), the rectangle is \(7\) by \(3\) with area \(21\), while the square has area \(25\). In general, \((x+2)(x-2)=x^2-4\), which is always \(4\) less than \(x^2\). Both shapes have perimeter \(4x\), but the square encloses more area, so Column B is greater.`,
    explanationZh: String.raw`代入一个值：\(x=5\) 时，长方形为 \(7\times3\)，面积 \(21\)，而正方形面积为 \(25\)。一般地，\((x+2)(x-2)=x^2-4\)，总比 \(x^2\) 小 \(4\)。两个图形的周长都是 \(4x\)，但正方形围成的面积更大，所以 B 列更大。`
  },
  {
    id: "qr-qc-m16", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "angles-lines-triangles"],
    stem: String.raw`In triangle ABC, \(AB=6\) and \(BC=9\). Figure not drawn to scale.`,
    stemZh: String.raw`在三角形 ABC 中，\(AB=6\)，\(BC=9\)。图形未按比例绘制。A 列：\(AC\) 的长度；B 列：\(12\)。`,
    figure: {
      kind: "svg",
      altEn: "Triangle ABC with side AB labeled 6 and side BC labeled 9. Side AC is not labeled. The figure is not drawn to scale.",
      altZh: "三角形 ABC，边 AB 标为 6，边 BC 标为 9，边 AC 没有标注。图形未按比例绘制。",
      svg: `<svg viewBox="0 0 290 185"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M40 150L112 25L250 150Z"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="112" y="16">A</text><text x="28" y="166">B</text><text x="256" y="166">C</text><text x="60" y="84">6</text><text x="145" y="170">9</text></g></svg>`
    },
    quantityA: String.raw`\(AC\)`,
    quantityB: String.raw`\(12\)`,
    answer: 3,
    explanationEn: String.raw`The third side of a triangle must be longer than the difference of the other two sides and shorter than their sum, so \(9-6<AC<9+6\), or \(3<AC<15\). \(AC\) could be \(5\), making Column B greater, or \(14\), making Column A greater. Both are possible, so the relationship cannot be determined.`,
    explanationZh: String.raw`三角形的第三边必须大于另外两边之差，且小于它们之和，所以 \(9-6<AC<9+6\)，即 \(3<AC<15\)。\(AC\) 可以是 \(5\)（此时 B 列更大），也可以是 \(14\)（此时 A 列更大），两种情形都可能，所以无法确定。`
  },
  {
    id: "qr-qc-m17", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "units-rates-time"],
    stem: "A car travels at a constant speed and covers 1 mile in exactly 90 seconds.",
    stemZh: String.raw`一辆汽车匀速行驶，恰好用 90 秒行驶 1 英里。A 列：汽车的速度（单位：英里/小时）；B 列：\(40\)。`,
    quantityA: "The car’s speed, in miles per hour",
    quantityB: String.raw`\(40\)`,
    answer: 2,
    explanationEn: String.raw`An hour has \(60\times60=3600\) seconds, and \(3600\div90=40\), so the car covers \(40\) miles in one hour. Its speed is \(40\) miles per hour, and the columns are equal. (A common slip is to use \(60\) seconds in an hour.)`,
    explanationZh: String.raw`1 小时有 \(60\times60=3600\) 秒，\(3600\div90=40\)，所以汽车 1 小时行驶 \(40\) 英里，速度为 \(40\) 英里/小时，两列相等。（常见的错误是把 1 小时当成 \(60\) 秒。）`
  },
  {
    id: "qr-qc-m18", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "ratios-percents"],
    stem: "In a class, the ratio of boys to girls is 3 to 4.",
    stemZh: String.raw`一个班级里男生与女生人数之比为 3 比 4。A 列：班里女生的人数；B 列：\(12\)。`,
    quantityA: "The number of girls in the class",
    quantityB: String.raw`\(12\)`,
    answer: 3,
    explanationEn: String.raw`The numbers of boys and girls can be written as \(3k\) and \(4k\) for some positive whole number \(k\), but \(k\) is not given. If \(k=2\), there are \(8\) girls, which is less than \(12\). If \(k=4\), there are \(16\) girls, which is greater than \(12\). The relationship cannot be determined.`,
    explanationZh: String.raw`男生和女生的人数可以表示为 \(3k\) 和 \(4k\)（\(k\) 为正整数），但 \(k\) 并未给出。若 \(k=2\)，女生有 \(8\) 人，少于 \(12\)；若 \(k=4\)，女生有 \(16\) 人，多于 \(12\)。所以无法确定。`
  },
  {
    id: "qr-qc-u01", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "exponents-roots"],
    stem: "",
    quantityA: String.raw`\(2^{-3}\)`,
    quantityB: String.raw`\(3^{-2}\)`,
    answer: 0,
    explanationEn: String.raw`A negative exponent means a reciprocal: \(2^{-3}=\frac{1}{2^3}=\frac{1}{8}\) and \(3^{-2}=\frac{1}{3^2}=\frac{1}{9}\). With the same numerator, the smaller denominator gives the greater fraction, so Column A is greater. (A negative exponent does not make the number negative.)`,
    explanationZh: String.raw`负指数表示取倒数：\(2^{-3}=\frac{1}{2^3}=\frac{1}{8}\)，\(3^{-2}=\frac{1}{3^2}=\frac{1}{9}\)。分子相同时，分母越小分数越大，所以 A 列更大。（负指数并不会使这个数变成负数。）`
  },
  {
    id: "qr-qc-u02", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "inequalities-absolute-value"],
    stem: String.raw`\(a<b\)`,
    stemZh: String.raw`已知 \(a<b\)。`,
    quantityA: String.raw`\(a^2\)`,
    quantityB: String.raw`\(b^2\)`,
    answer: 3,
    explanationEn: String.raw`Try numbers that satisfy \(a<b\). If \(a=1\) and \(b=2\), then \(a^2=1<4=b^2\), so Column B is greater. If \(a=-3\) and \(b=1\), then \(a^2=9>1=b^2\), so Column A is greater. The relationship cannot be determined.`,
    explanationZh: String.raw`取满足 \(a<b\) 的数来试：若 \(a=1\)，\(b=2\)，则 \(a^2=1<4=b^2\)，B 列更大；若 \(a=-3\)，\(b=1\)，则 \(a^2=9>1=b^2\)，A 列更大。所以无法确定。`
  },
  {
    id: "qr-qc-u03", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "patterns-sequences-functions"],
    stem: String.raw`\(f(x)=x^2-3\)`,
    stemZh: String.raw`已知函数 \(f(x)=x^2-3\)。`,
    quantityA: String.raw`\(f(-4)\)`,
    quantityB: String.raw`\(f(4)\)`,
    answer: 2,
    explanationEn: String.raw`Substitute: \(f(-4)=(-4)^2-3=16-3=13\) and \(f(4)=4^2-3=13\). Squaring removes the sign of the input, so the columns are equal.`,
    explanationZh: String.raw`代入计算：\(f(-4)=(-4)^2-3=16-3=13\)，\(f(4)=4^2-3=13\)。平方运算会消去输入值的符号，所以两列相等。`
  },
  {
    id: "qr-qc-u04", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "inequalities-absolute-value"],
    stem: String.raw`\(|x-2|<3\)`,
    stemZh: String.raw`已知 \(|x-2|<3\)。`,
    quantityA: String.raw`\(x\)`,
    quantityB: String.raw`\(5\)`,
    answer: 1,
    explanationEn: String.raw`The inequality \(|x-2|<3\) means \(-3<x-2<3\), so \(-1<x<5\). Every possible value of \(x\) is less than \(5\), and because the inequality is strict, \(x\) never equals \(5\). Column B is greater.`,
    explanationZh: String.raw`不等式 \(|x-2|<3\) 即 \(-3<x-2<3\)，所以 \(-1<x<5\)。\(x\) 的每个可能取值都小于 \(5\)，而且因为是严格不等式，\(x\) 取不到 \(5\)，因此 B 列更大。`
  },
  {
    id: "qr-qc-u05", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "easy",
    conceptIds: ["quantitative-comparisons", "coordinate-transformations", "pythagorean-similarity"],
    stem: "Points P and Q are plotted on the coordinate grid in the figure.",
    stemZh: String.raw`图中的坐标网格上标出了点 P 和点 Q。A 列：P、Q 两点之间的距离；B 列：\(9\)。`,
    figure: {
      kind: "svg",
      altEn: "A coordinate grid with x from 0 to 8 and y from 0 to 10. Point P is plotted at (1, 1) and point Q at (7, 9), joined by a line segment.",
      altZh: "坐标网格，x 轴范围 0 到 8，y 轴范围 0 到 10。点 P 位于 (1, 1)，点 Q 位于 (7, 9)，两点之间有一条线段相连。",
      svg: `<svg viewBox="0 0 250 260"><path d="M30 230V30M50 230V30M70 230V30M90 230V30M110 230V30M130 230V30M150 230V30M170 230V30M190 230V30M30 230H190M30 210H190M30 190H190M30 170H190M30 150H190M30 130H190M30 110H190M30 90H190M30 70H190M30 50H190M30 30H190" fill="none" stroke="currentColor" stroke-opacity="0.2"/><g fill="none" stroke="currentColor" stroke-width="2"><path d="M30 230H198M30 230V22M50 210L170 50"/></g><g fill="currentColor"><circle cx="50" cy="210" r="4"/><circle cx="170" cy="50" r="4"/></g><g fill="currentColor" font-size="12" text-anchor="middle"><text x="30" y="246">0</text><text x="70" y="246">2</text><text x="110" y="246">4</text><text x="150" y="246">6</text><text x="190" y="246">8</text><text x="206" y="234" font-size="14">x</text></g><g fill="currentColor" font-size="12"><text x="22" y="234" text-anchor="end">0</text><text x="22" y="194" text-anchor="end">2</text><text x="22" y="154" text-anchor="end">4</text><text x="22" y="114" text-anchor="end">6</text><text x="22" y="74" text-anchor="end">8</text><text x="22" y="34" text-anchor="end">10</text><text x="24" y="16" font-size="14">y</text></g><g fill="currentColor" font-size="14"><text x="58" y="224">P(1, 1)</text><text x="178" y="46">Q(7, 9)</text></g></svg>`
    },
    quantityA: "The distance between P and Q",
    quantityB: String.raw`\(9\)`,
    answer: 0,
    explanationEn: String.raw`The horizontal change from P to Q is \(7-1=6\) and the vertical change is \(9-1=8\). These are the legs of a right triangle, so \(PQ=\sqrt{6^2+8^2}=\sqrt{100}=10\). Since \(10>9\), Column A is greater.`,
    explanationZh: String.raw`从 P 到 Q，水平方向变化 \(7-1=6\)，竖直方向变化 \(9-1=8\)，它们是直角三角形的两条直角边，所以 \(PQ=\sqrt{6^2+8^2}=\sqrt{100}=10\)。因为 \(10>9\)，所以 A 列更大。`
  },
  {
    id: "qr-qc-u06", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "expressions-equations", "linear-quadratic"],
    stem: String.raw`\(x\) and \(y\) are real numbers and \(x\neq y\).`,
    stemZh: String.raw`\(x\) 和 \(y\) 是实数，且 \(x\neq y\)。`,
    quantityA: String.raw`\(x^2+y^2\)`,
    quantityB: String.raw`\(2xy\)`,
    answer: 0,
    explanationEn: String.raw`Subtract Column B from Column A: \(x^2+y^2-2xy=(x-y)^2\). Because \(x\neq y\), the number \(x-y\) is not zero, so its square is positive and Column A is greater. (Check: \(x=1\) and \(y=-1\) give \(2>-2\); \(x=2\) and \(y=3\) give \(13>12\).)`,
    explanationZh: String.raw`用 A 列减去 B 列：\(x^2+y^2-2xy=(x-y)^2\)。因为 \(x\neq y\)，所以 \(x-y\) 不为 0，它的平方为正数，A 列更大。（验算：\(x=1\)，\(y=-1\) 时 \(2>-2\)；\(x=2\)，\(y=3\) 时 \(13>12\)。）`
  },
  {
    id: "qr-qc-u07", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "factors-multiples-primes"],
    stem: String.raw`\(x\) is a positive integer that is divisible by both 4 and 6.`,
    stemZh: String.raw`\(x\) 是一个既能被 4 整除、又能被 6 整除的正整数。`,
    quantityA: String.raw`\(x\)`,
    quantityB: String.raw`\(12\)`,
    answer: 3,
    explanationEn: String.raw`A number divisible by both \(4\) and \(6\) is a multiple of their least common multiple, \(12\). If \(x=12\), the columns are equal. If \(x=24\), Column A is greater. Because these values of \(x\) give different relationships, the relationship cannot be determined.`,
    explanationZh: String.raw`既能被 \(4\) 整除又能被 \(6\) 整除的数，是它们最小公倍数 \(12\) 的倍数。若 \(x=12\)，两列相等；若 \(x=24\)，A 列更大。\(x\) 取不同的值会得到不同的关系，所以无法确定。`
  },
  {
    id: "qr-qc-u08", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "angles-lines-triangles", "expressions-equations"],
    stem: String.raw`In the figure, lines p and q are parallel and are crossed by line t. The two marked angles measure \((3x+10)^\circ\) and \((5x-30)^\circ\). Figure not drawn to scale.`,
    stemZh: String.raw`如图，直线 p 与 q 平行，被直线 t 所截。图中标出的两个角分别为 \((3x+10)^\circ\) 和 \((5x-30)^\circ\)。图形未按比例绘制。`,
    figure: {
      kind: "svg",
      altEn: "Two parallel lines, p above and q below, are crossed by a slanted line t. At the upper crossing, the angle between line t (going up) and line p (going right) is marked (3x+10) degrees. At the lower crossing, the corresponding angle between line t and line q is marked (5x-30) degrees.",
      altZh: "两条平行线 p（在上）和 q（在下）被一条斜线 t 所截。在上方交点处，t（向上的一侧）与 p（向右的一侧）所夹的角标为 (3x+10) 度；在下方交点处，t 与 q 所夹的对应角标为 (5x-30) 度。",
      svg: `<svg viewBox="0 0 340 250"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 70H320M20 190H320M99 240L187 30"/><path d="M294 64L301 70L294 76M294 184L301 190L294 196" stroke-width="1.5"/><path d="M196 70A26 26 0 0 0 180 46M146 190A26 26 0 0 0 130 166" stroke-width="1.5"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="232" y="44">(3x+10)°</text><text x="182" y="168">(5x−30)°</text><text x="196" y="24">t</text></g><g fill="currentColor" font-size="14"><text x="6" y="64">p</text><text x="6" y="184">q</text></g></svg>`
    },
    quantityA: String.raw`\(x\)`,
    quantityB: String.raw`\(22\)`,
    answer: 1,
    explanationEn: String.raw`The marked angles are corresponding angles formed by the parallel lines, so they are equal: \(3x+10=5x-30\). Then \(40=2x\), so \(x=20\), which is less than \(22\), and Column B is greater. (Treating the angles as supplementary would wrongly give \(x=25\).)`,
    explanationZh: String.raw`图中标出的两个角是平行线形成的同位角，所以相等：\(3x+10=5x-30\)。解得 \(40=2x\)，\(x=20\)，小于 \(22\)，所以 B 列更大。（若误把这两个角当作补角，会错误地得到 \(x=25\)。）`
  },
  {
    id: "qr-qc-u09", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "exponents-roots"],
    stem: "",
    quantityA: String.raw`\(\sqrt{8}+\sqrt{2}\)`,
    quantityB: String.raw`\(\sqrt{18}\)`,
    answer: 2,
    explanationEn: String.raw`Simplify the radicals: \(\sqrt{8}=2\sqrt{2}\), so Column A is \(2\sqrt{2}+\sqrt{2}=3\sqrt{2}\). Column B is \(\sqrt{18}=\sqrt{9\times2}=3\sqrt{2}\). The columns are equal. (Do not add the numbers under the radical signs: \(\sqrt{8}+\sqrt{2}\) is not \(\sqrt{10}\).)`,
    explanationZh: String.raw`化简根式：\(\sqrt{8}=2\sqrt{2}\)，所以 A 列为 \(2\sqrt{2}+\sqrt{2}=3\sqrt{2}\)；B 列为 \(\sqrt{18}=\sqrt{9\times2}=3\sqrt{2}\)。两列相等。（不能把根号下的数直接相加：\(\sqrt{8}+\sqrt{2}\) 并不等于 \(\sqrt{10}\)。）`
  },
  {
    id: "qr-qc-u10", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "graphs-tables", "units-rates-time"],
    stem: "The line graph shows the total distance a cyclist had ridden at the end of each hour.",
    stemZh: "折线图显示了一名骑行者在每个小时结束时已骑行的总路程。A 列：从第 0 小时到第 2 小时的平均速度（英里/小时）；B 列：从第 2 小时到第 4 小时的平均速度（英里/小时）。",
    figure: {
      kind: "line", titleEn: "Distance ridden by a cyclist", labels: ["0", "1", "2", "3", "4", "5"],
      series: [{ values: [0, 20, 30, 40, 50, 50] }], xLabelEn: "Hours since the start", yLabelEn: "Miles",
      altEn: "A line graph of the total miles a cyclist had ridden at the end of each hour: 0 miles at hour 0, 20 at hour 1, 30 at hour 2, 40 at hour 3, 50 at hour 4, and 50 at hour 5.",
      altZh: "折线图：骑行者在每个小时结束时已骑行的总英里数——第 0 小时 0 英里，第 1 小时 20 英里，第 2 小时 30 英里，第 3 小时 40 英里，第 4 小时 50 英里，第 5 小时 50 英里。"
    },
    quantityA: "The cyclist’s average speed, in miles per hour, from hour 0 to hour 2",
    quantityB: "The cyclist’s average speed, in miles per hour, from hour 2 to hour 4",
    answer: 0,
    explanationEn: String.raw`Average speed is distance divided by time. The graph shows \(30\) miles ridden by hour \(2\), so Column A is \(30\div2=15\) miles per hour. From hour \(2\) to hour \(4\) the distance grows from \(30\) to \(50\) miles, so Column B is \(20\div2=10\) miles per hour. Column A is greater.`,
    explanationZh: String.raw`平均速度 \(=\) 路程 \(\div\) 时间。由图可知，到第 \(2\) 小时共骑行 \(30\) 英里，所以 A 列为 \(30\div2=15\) 英里/小时；从第 \(2\) 小时到第 \(4\) 小时，路程由 \(30\) 英里增加到 \(50\) 英里，所以 B 列为 \(20\div2=10\) 英里/小时。A 列更大。`
  },
  {
    id: "qr-qc-u11", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "polygons-circles"],
    stem: "Segment AB is a chord of a circle with radius 5.",
    stemZh: String.raw`线段 AB 是半径为 5 的圆的一条弦。A 列：\(AB\) 的长度；B 列：\(10\)。`,
    quantityA: String.raw`\(AB\)`,
    quantityB: String.raw`\(10\)`,
    answer: 3,
    explanationEn: String.raw`The longest chord of a circle is a diameter, here \(2\times5=10\). If \(AB\) passes through the center, \(AB=10\) and the columns are equal. If \(AB\) does not pass through the center, it is shorter than \(10\); for example, a chord \(4\) units from the center has length \(2\sqrt{5^2-4^2}=6\), so Column B is greater. Both cases are possible, so the relationship cannot be determined.`,
    explanationZh: String.raw`圆中最长的弦是直径，这里为 \(2\times5=10\)。若 \(AB\) 经过圆心，则 \(AB=10\)，两列相等；若 \(AB\) 不经过圆心，例如与圆心相距 \(4\) 的弦，其长度为 \(2\sqrt{5^2-4^2}=6\)，则 \(AB<10\)，B 列更大。两种情形都可能，所以无法确定。`
  },
  {
    id: "qr-qc-u12", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "probability-counting"],
    stem: "A fair coin is tossed 3 times.",
    stemZh: "把一枚均匀的硬币抛 3 次。A 列：恰好出现 1 次正面的概率；B 列：恰好出现 2 次正面的概率。",
    quantityA: "The probability of getting exactly 1 head",
    quantityB: "The probability of getting exactly 2 heads",
    answer: 2,
    explanationEn: String.raw`There are \(8\) equally likely outcomes. Exactly one head occurs in HTT, THT, and TTH, and exactly two heads occur in HHT, HTH, and THH. Each probability is \(\frac{3}{8}\), so the columns are equal. (Swapping heads and tails turns every one-head outcome into a two-head outcome.)`,
    explanationZh: String.raw`共有 \(8\) 种等可能的结果（H 表示正面，T 表示反面）。恰好 1 次正面的结果有 HTT、THT、TTH；恰好 2 次正面的结果有 HHT、HTH、THH。两个概率都是 \(\frac{3}{8}\)，所以两列相等。（把正反面互换，每个“1 次正面”的结果就变成“2 次正面”的结果。）`
  },
  {
    id: "qr-qc-u13", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
    conceptIds: ["quantitative-comparisons", "mean-median-mode"],
    stem: String.raw`A list contains the five numbers \(3\), \(5\), \(9\), \(12\), and \(x\).`,
    stemZh: String.raw`一组数据包含五个数：\(3\)，\(5\)，\(9\)，\(12\) 和 \(x\)。A 列：这五个数的中位数；B 列：\(7\)。`,
    quantityA: "The median of the five numbers",
    quantityB: String.raw`\(7\)`,
    answer: 3,
    explanationEn: String.raw`The median is the middle (third) value when the numbers are in order. If \(x=6\), the order is \(3, 5, 6, 9, 12\) and the median is \(6<7\), so Column B is greater. If \(x=8\), the order is \(3, 5, 8, 9, 12\) and the median is \(8>7\), so Column A is greater. The relationship cannot be determined.`,
    explanationZh: String.raw`中位数是按大小排列后位于中间（第 3 个）的数。若 \(x=6\)，排序为 \(3,5,6,9,12\)，中位数 \(6<7\)，B 列更大；若 \(x=8\)，排序为 \(3,5,8,9,12\)，中位数 \(8>7\)，A 列更大。所以无法确定。`
  },
  {
    id: "qr-qc-u14", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "exponents-roots"],
    stem: "",
    quantityA: String.raw`\(2^{30}\)`,
    quantityB: String.raw`\(3^{20}\)`,
    answer: 1,
    explanationEn: String.raw`Rewrite both numbers with the same exponent: \(2^{30}=(2^3)^{10}=8^{10}\) and \(3^{20}=(3^2)^{10}=9^{10}\). With equal exponents, the larger base gives the larger value, and \(9^{10}>8^{10}\). Column B is greater.`,
    explanationZh: String.raw`把两个数写成指数相同的形式：\(2^{30}=(2^3)^{10}=8^{10}\)，\(3^{20}=(3^2)^{10}=9^{10}\)。指数相同时，底数越大，值越大，而 \(9^{10}>8^{10}\)，所以 B 列更大。`
  },
  {
    id: "qr-qc-u15", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "integers-order-operations", "expressions-equations"],
    stem: String.raw`\(n\) is an integer.`,
    stemZh: String.raw`\(n\) 是整数。`,
    quantityA: String.raw`\(n^2\)`,
    quantityB: String.raw`\(n\)`,
    answer: 3,
    explanationEn: String.raw`Try some integers. If \(n=1\), both columns equal \(1\), so they are equal. If \(n=2\), Column A is \(4\) and Column B is \(2\), so Column A is greater. Two different relationships occur, so it cannot be determined. (For integers \(n^2\ge n\), but that does not make Column A always greater.)`,
    explanationZh: String.raw`代入检验。若 \(n=1\)，两列都是 \(1\)，相等；若 \(n=2\)，A 列为 \(4\)，B 列为 \(2\)，A 列更大。出现了两种不同的关系，所以无法确定。（对整数有 \(n^2\ge n\)，但这并不意味着 A 列总是更大。）`
  },
  {
    id: "qr-qc-u16", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "pythagorean-similarity", "perimeter-area"],
    stem: String.raw`Triangle PQR is similar to triangle STU, with \(PQ=4\) and \(ST=6\). The area of triangle PQR is \(20\).`,
    stemZh: String.raw`三角形 PQR 与三角形 STU 相似，\(PQ=4\)，\(ST=6\)，三角形 PQR 的面积为 \(20\)。A 列：三角形 STU 的面积；B 列：\(40\)。`,
    figure: {
      kind: "svg",
      altEn: "Two similar triangles side by side. Triangle PQR on the left has base PQ labeled 4 and area 20. Triangle STU on the right is larger, has base ST labeled 6, and its area is marked with a question mark.",
      altZh: "并排画着两个相似三角形。左边的三角形 PQR 底边 PQ 标为 4，面积为 20；右边较大的三角形 STU 底边 ST 标为 6，面积标为问号。",
      svg: `<svg viewBox="0 0 290 235"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M30 170H70L50 70Z M150 170H210L180 20Z"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="22" y="186">P</text><text x="78" y="186">Q</text><text x="50" y="62">R</text><text x="142" y="186">S</text><text x="218" y="186">T</text><text x="180" y="12">U</text><text x="50" y="204">4</text><text x="180" y="204">6</text><text x="50" y="226">Area = 20</text><text x="180" y="226">Area = ?</text></g></svg>`
    },
    quantityA: "The area of triangle STU",
    quantityB: String.raw`\(40\)`,
    answer: 0,
    explanationEn: String.raw`The scale factor from triangle PQR to triangle STU is \(\frac{6}{4}=\frac{3}{2}\). Areas change by the square of the scale factor, \(\left(\frac{3}{2}\right)^2=\frac{9}{4}\), so the area of STU is \(\frac{9}{4}\times20=45\), which is greater than \(40\). (Multiplying the area by only \(\frac{3}{2}\) gives \(30\), a common mistake.)`,
    explanationZh: String.raw`从三角形 PQR 到三角形 STU 的相似比为 \(\frac{6}{4}=\frac{3}{2}\)。面积之比等于相似比的平方：\(\left(\frac{3}{2}\right)^2=\frac{9}{4}\)，所以 STU 的面积为 \(\frac{9}{4}\times20=45\)，大于 \(40\)。（只把面积乘以 \(\frac{3}{2}\) 会得到 \(30\)，这是常见的错误。）`
  },
  {
    id: "qr-qc-u17", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "volume-surface-area"],
    stem: "All lengths are in centimeters.",
    stemZh: "所有长度的单位均为厘米。A 列：底面半径为 3、高为 12 的圆锥的体积；B 列：底面半径为 3、高为 4 的圆柱的体积。",
    quantityA: "The volume of a cone with base radius 3 and height 12",
    quantityB: "The volume of a cylinder with base radius 3 and height 4",
    answer: 2,
    explanationEn: String.raw`The cone has volume \(\frac{1}{3}\pi r^2h=\frac{1}{3}\pi(3^2)(12)=36\pi\), and the cylinder has volume \(\pi r^2h=\pi(3^2)(4)=36\pi\). The volumes are equal. (A cone holds \(\frac{1}{3}\) as much as a cylinder with the same base and height, and this cone is \(3\) times as tall.)`,
    explanationZh: String.raw`圆锥的体积为 \(\frac{1}{3}\pi r^2h=\frac{1}{3}\pi(3^2)(12)=36\pi\)，圆柱的体积为 \(\pi r^2h=\pi(3^2)(4)=36\pi\)，两者相等。（圆锥的体积是同底等高圆柱的 \(\frac{1}{3}\)，而这里圆锥的高是圆柱的 \(3\) 倍。）`
  },
  {
    id: "qr-qc-u18", level: "upper", section: "quantitative", type: "quantitative-comparison", difficulty: "hard",
    conceptIds: ["quantitative-comparisons", "units-rates-time"],
    stem: "A car drives from town X to town Y at 60 miles per hour and then returns along the same road at 40 miles per hour.",
    stemZh: String.raw`一辆汽车以每小时 60 英里的速度从 X 镇开往 Y 镇，然后沿同一条路以每小时 40 英里的速度返回。A 列：往返全程的平均速度（英里/小时）；B 列：\(50\)。`,
    quantityA: "The car’s average speed, in miles per hour, for the whole round trip",
    quantityB: String.raw`\(50\)`,
    answer: 1,
    explanationEn: String.raw`Pick a convenient distance, such as \(120\) miles each way (any distance gives the same result). Going takes \(120\div60=2\) hours and returning takes \(120\div40=3\) hours, so the round trip is \(240\) miles in \(5\) hours, an average of \(240\div5=48\) miles per hour. The car spends more time at the slower speed, so the average is below \(50\) and Column B is greater.`,
    explanationZh: String.raw`取一个方便的距离，如单程 \(120\) 英里（取任何距离结果都相同）。去程用时 \(120\div60=2\) 小时，返程用时 \(120\div40=3\) 小时，往返共 \(240\) 英里、\(5\) 小时，平均速度为 \(240\div5=48\) 英里/小时。汽车在较慢的速度上花的时间更长，所以平均速度低于 \(50\)，B 列更大。`
  }
];
