// Original ISEE-style Middle Level Quantitative Reasoning word problems, set 2 (qr-wp-m16 to qr-wp-m30).
export const PROBLEMS = [
  {
    id: "qr-wp-m16", level: "middle", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["graphs-tables", "word-problem-reasoning"],
    stem: "Amara measured a sunflower seedling’s height when it first sprouted and again at the end of each of the next five weeks. The line graph shows her measurements. During which week did the seedling grow the most?",
    stemZh: "Amara 在一株向日葵幼苗刚发芽时量了它的高度，之后又在接下来五周中每一周结束时各量了一次。折线图显示了她的测量结果。这株幼苗在哪一周长得最多？",
    figure: {
      kind: "line", titleEn: "Height of a sunflower seedling", labels: ["Start", "Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5"], series: [{ values: [3, 6, 14, 17, 20, 22] }], xLabelEn: "When measured", yLabelEn: "Height (cm)",
      altEn: "A line graph of a sunflower seedling’s height in centimeters: 3 at the start, then 6, 14, 17, 20 and 22 at the ends of weeks 1 through 5.",
      altZh: "折线图，表示向日葵幼苗的高度（厘米）：开始时为 3，第 1 至第 5 周结束时依次为 6、14、17、20、22。"
    },
    choices: ["Week 1", "Week 2", "Week 3", "Week 5"], answer: 1,
    explanationEn: "A week’s growth is the rise in height between the measurement before that week and the measurement at the end of it. The heights are 3, 6, 14, 17, 20 and 22 cm, so the seedling grew 3, 8, 3, 3 and 2 cm in weeks 1 through 5; the steepest part of the graph runs from the point labeled Wk 1 to the point labeled Wk 2, so the most growth happened during Week 2. Week 5 is when the seedling is tallest, but it grew only 2 cm that week. Weeks 1 and 3 each grew only 3 cm; Week 1 is tempting only because the steep segment starts at its point.",
    explanationZh: "一周的生长量，等于这一周结束时的高度减去这一周之前最近一次测得的高度。各次测得的高度依次是 3、6、14、17、20、22 厘米，所以第 1 到第 5 周分别长了 3、8、3、3、2 厘米；折线图中最陡的一段是从“Wk 1”点到“Wk 2”点，所以第 2 周长得最多。第 5 周结束时幼苗最高，但那一周只长了 2 厘米。第 1 周和第 3 周都只长了 3 厘米；选第 1 周只是因为那段陡坡从它的点开始。"
  },
  {
    id: "qr-wp-m17", level: "middle", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["estimation-number-sense", "units-rates-time"],
    stem: "Kofi plans to walk along a riverside path that is 11.8 kilometers long. He walks at a steady speed of 3.9 kilometers per hour. Which of the following is the best estimate of how long the walk will take?",
    stemZh: "Kofi 打算沿着一条长 11.8 千米的河边小路步行，他以每小时 3.9 千米的速度匀速行走。下面哪一项是对走完这条小路所需时间的最佳估计？",
    choices: ["About 20 minutes", "About 3 hours", "About 8 hours", "About 46 hours"], answer: 1,
    explanationEn: String.raw`Round the numbers to 12 kilometers and 4 kilometers per hour. Time is distance divided by speed, so the walk takes about \(12\div4=3\) hours (check: 3 hours at 4 kilometers per hour is 12 kilometers). Dividing the speed by the distance gives about \(\frac{1}{3}\) hour, or 20 minutes; subtracting the two numbers gives about 8; and multiplying them gives about 46, which is far too long for a 12-kilometer walk.`,
    explanationZh: String.raw`把数据近似成 12 千米和每小时 4 千米。时间等于路程除以速度，所以大约需要 \(12\div4=3\) 小时（验算：以每小时 4 千米的速度走 3 小时，正好是 12 千米）。用速度除以路程，得到约 \(\frac{1}{3}\) 小时，也就是 20 分钟；把两个数相减约得 8；相乘约得 46，对于一段 12 千米的路来说，这个时间太长了。`
  },
  {
    id: "qr-wp-m18", level: "middle", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["graphs-tables", "fractions-decimals", "word-problem-reasoning"],
    stem: "The table gives information about four items at a school bake sale. How much more money did the club take in from selling muffins than from selling brownies?",
    stemZh: "下表给出了学校义卖会上四种食品的信息。卖松饼比卖布朗尼多收入了多少钱？",
    figure: {
      kind: "table", headers: ["Item", "Price each", "Number baked", "Number sold"],
      rows: [["Muffin", "$1.50", "30", "24"], ["Cookie", "$0.80", "50", "40"], ["Brownie", "$2.00", "20", "15"], ["Lemon bar", "$1.25", "24", "20"]],
      altEn: "A table of bake sale items listing price each, number baked and number sold: muffin $1.50, 30 baked, 24 sold; cookie $0.80, 50 baked, 40 sold; brownie $2.00, 20 baked, 15 sold; lemon bar $1.25, 24 baked, 20 sold.",
      altZh: "义卖食品表，列出单价、烤制数量和售出数量：松饼 $1.50，烤 30 个，卖出 24 个；曲奇 $0.80，烤 50 块，卖出 40 块；布朗尼 $2.00，烤 20 块，卖出 15 块；柠檬方块酥 $1.25，烤 24 块，卖出 20 块。"
    },
    choices: ["$0.50", "$5", "$6", "$9"], answer: 2,
    explanationEn: "Only the items that were sold bring in money. Muffins brought in 24 × $1.50 = $36 and brownies brought in 15 × $2.00 = $30, a difference of $6. Using the number baked gives $45 − $40 = $5, $0.50 is only the difference between the two prices, and $9 is the difference in the number sold (24 − 15), not in dollars.",
    explanationZh: "只有卖出去的食品才会带来收入。松饼收入 24 × $1.50 = $36，布朗尼收入 15 × $2.00 = $30，相差 $6。如果用烤制的数量来算，会得到 $45 − $40 = $5；$0.50 只是两种食品单价的差；$9 是售出数量的差（24 − 15），不是钱数。"
  },
  {
    id: "qr-wp-m19", level: "middle", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["patterns-sequences-functions", "word-problem-reasoning"],
    stem: "A patch of algae on a pond doubles in area every day. At the end of day 12, the algae cover the entire surface of the pond. At the end of which day did the algae cover exactly one-fourth of the pond?",
    stemZh: "池塘里的一片藻类每天面积增加一倍。到第 12 天结束时，藻类覆盖了整个池塘水面。到哪一天结束时，藻类恰好覆盖了池塘的四分之一？",
    choices: ["Day 3", "Day 6", "Day 10", "Day 11"], answer: 2,
    explanationEn: "Work backward: because the area doubles each day, it was half as large the day before. At the end of day 12 the pond is full, at the end of day 11 it was half covered, and at the end of day 10 it was one-fourth covered. Day 11 shows one-half, not one-fourth, and Days 6 and 3 come from dividing 12 by 2 and by 4, which treats the growth as if the same amount were added each day, when doubling changes the area far faster near the end.",
    explanationZh: "倒着想：面积每天增加一倍，所以前一天的面积是后一天的一半。第 12 天结束时水面全满，第 11 天结束时覆盖了一半，第 10 天结束时覆盖了四分之一。第 11 天对应的是二分之一，不是四分之一；第 6 天和第 3 天是用 12 除以 2 和除以 4 得到的，这是把增长当成了每天增加同样大的面积，而翻倍增长在后期变化得快得多。"
  },
  {
    id: "qr-wp-m20", level: "middle", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["expressions-equations", "units-rates-time"],
    stem: String.raw`Mr. Lopez buys \(p\) erasers that cost 25 cents each and \(n\) folders that cost $2 each. Which expression gives the total cost, in dollars, of the items he buys?`,
    stemZh: String.raw`Lopez 老师买了 \(p\) 块橡皮，每块 25 美分；又买了 \(n\) 个文件夹，每个 $2。下面哪个代数式表示他所买物品的总花费（单位：美元）？`,
    choices: [String.raw`\(25p+2n\)`, String.raw`\(0.25n+2p\)`, String.raw`\(2.25(p+n)\)`, String.raw`\(0.25p+2n\)`], answer: 3,
    explanationEn: String.raw`Each eraser costs 25 cents, which is $0.25, so the erasers cost \(0.25p\) dollars; the folders cost \(2n\) dollars; and the total is \(0.25p+2n\). The expression \(25p+2n\) adds cents to dollars, \(0.25n+2p\) swaps the two prices, and \(2.25(p+n)\) treats every item as if it cost $2.25.`,
    explanationZh: String.raw`每块橡皮 25 美分，也就是 $0.25，所以橡皮共花 \(0.25p\) 美元；文件夹共花 \(2n\) 美元；总花费是 \(0.25p+2n\)。\(25p+2n\) 把“美分”和“美元”直接相加了；\(0.25n+2p\) 把两个价格对调了；\(2.25(p+n)\) 把每件物品都当成了 $2.25。`
  },
  {
    id: "qr-wp-m21", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["units-rates-time", "word-problem-reasoning"],
    stem: "A video clip plays at 24 frames per second. The clip lasts 2.5 minutes, and its file size is 120 megabytes. How many frames does the clip contain?",
    stemZh: "一段视频每秒播放 24 帧画面。这段视频长 2.5 分钟，文件大小为 120 兆字节。这段视频一共包含多少帧画面？",
    choices: ["60", "3,600", "4,080", "6,000"], answer: 1,
    explanationEn: String.raw`Change the time to seconds first: 2.5 minutes is \(2.5\times60=150\) seconds, so the clip has \(24\times150=3600\) frames. The file size is not needed. The choice 60 forgets to change minutes to seconds, 4,080 treats 2.5 minutes as 2 minutes 50 seconds (170 seconds), and 6,000 treats it as 250 seconds.`,
    explanationZh: String.raw`先把时间换算成秒：2.5 分钟是 \(2.5\times60=150\) 秒，所以这段视频共有 \(24\times150=3600\) 帧画面。文件大小用不到。选 60 是忘了把分钟换算成秒；选 4,080 是把 2.5 分钟当成了 2 分 50 秒（170 秒）；选 6,000 是把它当成了 250 秒。`
  },
  {
    id: "qr-wp-m22", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["probability-counting", "graphs-tables", "fractions-decimals"],
    stem: "Students in grades 7 and 8 each voted for one place for a class trip. The table shows the votes. One student who voted for the zoo is chosen at random. What is the probability that this student is in grade 8?",
    stemZh: "7 年级和 8 年级的学生每人投票选择一个班级出游的地点，结果如下表。从投票选择动物园的学生中随机选出一名学生，这名学生是8 年级学生的概率是多少？",
    figure: {
      kind: "table", headers: ["Grade", "Science museum", "Zoo", "Aquarium"], rows: [["Grade 7", "9", "6", "15"], ["Grade 8", "11", "14", "5"]],
      altEn: "A table of class trip votes. Grade 7: science museum 9, zoo 6, aquarium 15. Grade 8: science museum 11, zoo 14, aquarium 5.",
      altZh: "班级出游投票表。7 年级：科学馆 9 票，动物园 6 票，水族馆 15 票。8 年级：科学馆 11 票，动物园 14 票，水族馆 5 票。"
    },
    choices: [String.raw`\(\frac{7}{30}\)`, String.raw`\(\frac{3}{10}\)`, String.raw`\(\frac{7}{15}\)`, String.raw`\(\frac{7}{10}\)`], answer: 3,
    explanationEn: String.raw`Only the \(6+14=20\) students who voted for the zoo can be chosen, and 14 of them are in grade 8, so the probability is \(\frac{14}{20}=\frac{7}{10}\). The choice \(\frac{7}{30}\) is \(\frac{14}{60}\), which compares with all 60 students; \(\frac{7}{15}\) is \(\frac{14}{30}\), which compares with all 30 students in grade 8; and \(\frac{3}{10}\) is the probability for grade 7.`,
    explanationZh: String.raw`只有投票选动物园的 \(6+14=20\) 名学生可能被选中，其中 14 名是8 年级学生，所以概率是 \(\frac{14}{20}=\frac{7}{10}\)。\(\frac{7}{30}\) 就是 \(\frac{14}{60}\)，是拿全部 60 名学生作分母；\(\frac{7}{15}\) 就是 \(\frac{14}{30}\)，是拿8 年级全部 30 名学生作分母；\(\frac{3}{10}\) 则是7 年级学生的概率。`
  },
  {
    id: "qr-wp-m23", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["ratios-percents", "graphs-tables"],
    stem: "The circle graph shows how the Rivera family divides its monthly budget. The family spends $600 each month on food. How much does the family spend each month on housing?",
    stemZh: "扇形图显示了 Rivera 一家每月预算的分配情况。这个家庭每月在食品上花 $600。他们每月在住房上花多少钱？",
    figure: {
      kind: "pie", titleEn: "Monthly budget",
      slices: [{ label: "Housing", value: 45 }, { label: "Food", value: 30 }, { label: "Transport", value: 10 }, { label: "Savings", value: 10 }, { label: "Other", value: 5 }],
      altEn: "A circle graph of a family’s monthly budget: housing 45 percent, food 30 percent, transport 10 percent, savings 10 percent and other 5 percent.",
      altZh: "扇形图，表示一个家庭的每月预算：住房占 45%，食品占 30%，交通占 10%，储蓄占 10%，其他占 5%。"
    },
    choices: ["$270", "$870", "$900", "$2,000"], answer: 2,
    explanationEn: "Food is 30% of the budget and costs $600, so the whole budget is $600 ÷ 0.30 = $2,000, and housing, at 45%, is 0.45 × $2,000 = $900. (Another way: housing is 45 ÷ 30 = 1.5 times as large as food, and 1.5 × $600 = $900.) The choice $270 takes 45% of the food amount, $870 adds 45% of $600 to $600, and $2,000 is the whole budget, not the housing share.",
    explanationZh: "食品占预算的 30%，花费 $600，所以整个预算是 $600 ÷ 0.30 = $2,000，住房占 45%，就是 0.45 × $2,000 = $900。（另一种做法：住房是食品的 45 ÷ 30 = 1.5 倍，1.5 × $600 = $900。）选 $270 是求了食品花费的 45%；选 $870 是把 $600 增加了 45%；选 $2,000 是整个预算，不是住房的花费。"
  },
  {
    id: "qr-wp-m24", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["patterns-sequences-functions", "word-problem-reasoning"],
    stem: "The figures show the first four in a pattern of staircases made of square tiles. If the pattern continues in the same way, how many tiles are in Figure 8?",
    stemZh: "下图是由方形瓷砖拼成的“阶梯”图案中的前四个图形。如果图案按同样的规律继续下去，第 8 个图形中有多少块瓷砖？",
    figure: {
      kind: "svg",
      altEn: "Four staircases made of square tiles. Figure 1 has 1 tile; Figure 2 has rows of 1 and 2 tiles; Figure 3 has rows of 1, 2 and 3 tiles; Figure 4 has rows of 1, 2, 3 and 4 tiles.",
      altZh: "由方形瓷砖拼成的四个阶梯。图 1 有 1 块瓷砖；图 2 的各行依次有 1 块和 2 块；图 3 的各行依次有 1、2、3 块；图 4 的各行依次有 1、2、3、4 块。",
      svg: `<svg viewBox="0 0 336 124"><g fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"><rect x="20" y="70" width="20" height="20"/><rect x="76" y="50" width="20" height="20"/><rect x="76" y="70" width="20" height="20"/><rect x="96" y="70" width="20" height="20"/><rect x="146" y="30" width="20" height="20"/><rect x="146" y="50" width="20" height="20"/><rect x="166" y="50" width="20" height="20"/><rect x="146" y="70" width="20" height="20"/><rect x="166" y="70" width="20" height="20"/><rect x="186" y="70" width="20" height="20"/><rect x="236" y="10" width="20" height="20"/><rect x="236" y="30" width="20" height="20"/><rect x="256" y="30" width="20" height="20"/><rect x="236" y="50" width="20" height="20"/><rect x="256" y="50" width="20" height="20"/><rect x="276" y="50" width="20" height="20"/><rect x="236" y="70" width="20" height="20"/><rect x="256" y="70" width="20" height="20"/><rect x="276" y="70" width="20" height="20"/><rect x="296" y="70" width="20" height="20"/></g><text x="30" y="114" text-anchor="middle" fill="currentColor" font-size="14">Figure 1</text><text x="96" y="114" text-anchor="middle" fill="currentColor" font-size="14">Figure 2</text><text x="176" y="114" text-anchor="middle" fill="currentColor" font-size="14">Figure 3</text><text x="276" y="114" text-anchor="middle" fill="currentColor" font-size="14">Figure 4</text></svg>`
    },
    choices: ["26", "28", "36", "64"], answer: 2,
    explanationEn: String.raw`Figure \(n\) has rows of 1, 2, 3, and so on up to \(n\) tiles, so each new figure adds a new bottom row that is one tile longer than the last new row: 2 tiles, then 3, 4, 5, and so on. The totals are 1, 3, 6, 10, 15, 21, 28 and 36, so Figure 8 has \(1+2+3+4+5+6+7+8=36\) tiles. (Two copies of the 8-row staircase fit together to make an 8 by 9 rectangle of 72 tiles, and half of 72 is 36.) The choice 28 is Figure 7, 26 keeps adding 4 every time, and 64 is a full 8 by 8 square.`,
    explanationZh: String.raw`第 \(n\) 个图形的各行依次有 1、2、3……直到 \(n\) 块瓷砖，所以每多一个图形，就在最下面新增一行，而且这一行比上一次新增的那一行多 1 块：依次新增 2 块、3 块、4 块、5 块……各图形的瓷砖总数是 1、3、6、10、15、21、28、36，所以第 8 个图形有 \(1+2+3+4+5+6+7+8=36\) 块。（两个 8 行的阶梯正好拼成一个 8 行 9 列、共 72 块的长方形，72 的一半是 36。）选 28 是第 7 个图形；选 26 是每次都继续加 4；选 64 是一个完整的 8 行 8 列的正方形。`
  },
  {
    id: "qr-wp-m25", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["ratios-percents", "word-problem-reasoning"],
    stem: "In a chess club, the ratio of seventh graders to eighth graders is 3 to 2, and every member is in one of those two grades. Which of the following additional facts would be enough to find the total number of members in the club?",
    stemZh: "某国际象棋俱乐部中，七年级学生与八年级学生的人数之比是 3 比 2，每名成员都属于这两个年级之一。下面哪一个附加条件足以求出俱乐部的总人数？",
    choices: ["There are 12 seventh graders in the club.", "The club has fewer than 30 members.", "The ratio of seventh graders to eighth graders is 6 to 4.", "The club meets twice each week."], answer: 0,
    explanationEn: String.raw`A ratio of 3 to 2 only tells how the members are split between the two grades: there are \(3k\) seventh graders and \(2k\) eighth graders for some whole number \(k\), so the total is \(5k\), and an actual count is needed to find \(k\). Knowing that there are 12 seventh graders gives \(3k=12\), so \(k=4\) and the club has \(5\times4=20\) members. The ratio 6 to 4 is just the same ratio again, “fewer than 30” still allows totals of 5, 10, 15, 20 or 25, and how often the club meets has nothing to do with the count.`,
    explanationZh: String.raw`“3 比 2”这个比只说明两个年级人数的比例关系：七年级有 \(3k\) 人、八年级有 \(2k\) 人（\(k\) 是正整数），总人数是 \(5k\)，所以还需要一个实际的人数才能求出 \(k\)。已知七年级有 12 人，则 \(3k=12\)，\(k=4\)，总人数是 \(5\times4=20\)。“6 比 4”只是把同一个比又说了一遍；“少于 30 人”仍然允许总人数是 5、10、15、20 或 25；每周活动几次与人数无关。`
  },
  {
    id: "qr-wp-m26", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["fractions-decimals", "word-problem-reasoning"],
    stem: String.raw`Sara jogs \(\frac{3}{4}\) mile every morning for 6 mornings. Tomás jogs 0.7 mile every morning for 7 mornings. Which statement is true?`,
    stemZh: String.raw`Sara 每天早晨慢跑 \(\frac{3}{4}\) 英里，一共跑了 6 个早晨。Tomás 每天早晨慢跑 0.7 英里，一共跑了 7 个早晨。下面哪个说法是正确的？`,
    choices: ["Tomás jogged 0.4 mile farther than Sara.", "Tomás jogged 0.7 mile farther than Sara.", "Sara jogged 0.05 mile farther than Tomás.", "Sara jogged 0.4 mile farther than Tomás."], answer: 0,
    explanationEn: String.raw`Change \(\frac{3}{4}\) to 0.75. Sara jogged \(6\times0.75=4.5\) miles in all and Tomás jogged \(7\times0.7=4.9\) miles, so Tomás jogged \(4.9-4.5=0.4\) mile farther. The statement about 0.05 mile compares only one morning and forgets that Tomás jogged one more morning; the statement about 0.7 mile counts only that extra morning and forgets that Sara jogs farther on each of her mornings; and the last statement reverses the two runners.`,
    explanationZh: String.raw`先把 \(\frac{3}{4}\) 化成 0.75。Sara 一共跑了 \(6\times0.75=4.5\) 英里，Tomás 一共跑了 \(7\times0.7=4.9\) 英里，所以 Tomás 比 Sara 多跑了 \(4.9-4.5=0.4\) 英里。“多 0.05 英里”只比较了其中一个早晨，没有考虑 Tomás 多跑了一个早晨；“多 0.7 英里”只算了多出来的那一个早晨，没有考虑 Sara 每个早晨都跑得更远；最后一个说法则把两个人弄反了。`
  },
  {
    id: "qr-wp-m27", level: "middle", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["probability-counting", "word-problem-reasoning"],
    stem: "In a class of 36 students, 22 play an instrument, 17 sing in the choir, and 6 students do neither activity. How many students both play an instrument and sing in the choir?",
    stemZh: "一个班有 36 名学生，其中 22 人演奏乐器，17 人参加合唱团，还有 6 人两样都不参加。既演奏乐器又参加合唱团的学生有多少人？",
    choices: ["3", "5", "6", "9"], answer: 3,
    explanationEn: String.raw`Since 6 students do neither, \(36-6=30\) students do at least one of the two activities. Adding \(22+17=39\) counts the students who do both twice, and 39 is 9 more than 30, so 9 students do both. The choice 3 comes from using all 36 students instead of 30 (\(39-36\)), 5 is \(22-17\), and 6 is just the number of students who do neither.`,
    explanationZh: String.raw`有 6 人两样都不参加，所以至少参加其中一项的有 \(36-6=30\) 人。把 22 和 17 相加得 \(22+17=39\)，两样都参加的学生被算了两次，而实际只有 30 人，多算的 \(39-30=9\) 就是两样都参加的人数。选 3 是用全班 36 人而不是 30 人去减（\(39-36\)）；选 5 是 \(22-17\)；选 6 只是两样都不参加的人数。`
  },
  {
    id: "qr-wp-m28", level: "middle", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["ratios-percents", "expressions-equations", "word-problem-reasoning"],
    stem: "A box contains only lemon candies and cherry candies. The ratio of lemon candies to cherry candies is 3 to 4. After 6 more cherry candies are added to the box, the ratio of lemon candies to cherry candies is 3 to 5. How many lemon candies are in the box?",
    stemZh: "一个盒子里只有柠檬味糖果和樱桃味糖果，柠檬味与樱桃味糖果的数量之比是 3 比 4。再往盒子里放入 6 颗樱桃味糖果后，柠檬味与樱桃味糖果的数量之比变成了 3 比 5。盒子里有多少颗柠檬味糖果？",
    choices: ["18", "24", "30", "42"], answer: 0,
    explanationEn: "The number of lemon candies does not change, so keep it as 3 parts in both ratios. The cherry candies go from 4 parts to 5 parts, so the 6 candies that were added equal 1 part, and the lemon candies number 3 × 6 = 18. (Check: 18 lemon and 24 cherry are in the ratio 3 to 4 at the start, and 18 lemon and 30 cherry are in the ratio 3 to 5 at the end.) The choice 24 is the number of cherry candies at the start, 30 is the number at the end, and 42 is the total number of candies at the start.",
    explanationZh: "柠檬味糖果的数量没有变化，所以在两个比里都把它看作 3 份。樱桃味糖果从 4 份变成 5 份，说明新放入的 6 颗正好是 1 份，于是柠檬味糖果有 3 × 6 = 18 颗。（验算：开始时 18 颗柠檬味、24 颗樱桃味，比是 3 比 4；放入后 18 颗柠檬味、30 颗樱桃味，比是 3 比 5。）选 24 是开始时樱桃味糖果的数量；选 30 是放入后樱桃味糖果的数量；选 42 是开始时糖果的总数。"
  },
  {
    id: "qr-wp-m29", level: "middle", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["volume-surface-area", "perimeter-area", "word-problem-reasoning"],
    stem: "A closed box is shaped like a rectangular prism, as shown. The top of the box has an area of 12 square inches, the front has an area of 20 square inches, and the right side has an area of 15 square inches. What is the volume of the box, in cubic inches? Figure not drawn to scale.",
    stemZh: "一个封闭的盒子是长方体形状，如图所示。盒子顶面的面积是 12 平方英寸，前面的面积是 20 平方英寸，右侧面的面积是 15 平方英寸。这个盒子的体积是多少立方英寸？图形未按比例绘制。",
    figure: {
      kind: "svg",
      altEn: "A closed rectangular box with three faces visible. The top face is labeled 12, the front face 20 and the right face 15, each an area in square inches. Not drawn to scale.",
      altZh: "一个封闭的长方体盒子，可见三个面：顶面标 12，前面标 20，右侧面标 15，单位均为平方英寸。图形未按比例绘制。",
      svg: `<svg viewBox="0 0 200 190"><g stroke="currentColor" stroke-width="2" stroke-linejoin="round"><polygon points="30,60 126,60 156,30 60,30" fill="currentColor" fill-opacity="0.12"/><polygon points="126,60 156,30 156,140 126,170" fill="currentColor" fill-opacity="0.12"/><polygon points="30,60 126,60 126,170 30,170" fill="none"/></g><text x="93" y="50" text-anchor="middle" fill="currentColor" font-size="14">12</text><text x="78" y="120" text-anchor="middle" fill="currentColor" font-size="14">20</text><text x="141" y="105" text-anchor="middle" fill="currentColor" font-size="14">15</text></svg>`
    },
    choices: ["47", "60", "94", "3,600"], answer: 1,
    explanationEn: String.raw`Let the length, width and height be \(l\), \(w\) and \(h\), so \(lw=12\), \(lh=20\) and \(wh=15\). Look for three numbers whose pairwise products are 12, 20 and 15: \(4\times3=12\), \(4\times5=20\) and \(3\times5=15\), so the box is 4 by 3 by 5 and its volume is \(4\times3\times5=60\) cubic inches. (Multiplying the three face areas gives \((lwh)^2=12\times20\times15=3600\), and \(\sqrt{3600}=60\).) The choice 47 adds the three face areas, 94 is the surface area \(2\times47\), and 3,600 multiplies the areas without taking the square root.`,
    explanationZh: String.raw`设长方体的长、宽、高分别为 \(l\)、\(w\)、\(h\)，则 \(lw=12\)，\(lh=20\)，\(wh=15\)。找三个数，使它们两两相乘分别得到 12、20、15：\(4\times3=12\)，\(4\times5=20\)，\(3\times5=15\)，所以长方体的长、宽、高是 4、3、5，体积是 \(4\times3\times5=60\) 立方英寸。（把三个面的面积相乘，得 \((lwh)^2=12\times20\times15=3600\)，再开平方得 60。）选 47 是把三个面的面积相加；选 94 是表面积 \(2\times47\)；选 3,600 是把面积相乘后忘了开平方。`
  },
  {
    id: "qr-wp-m30", level: "middle", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["mean-median-mode", "word-problem-reasoning"],
    stem: "Five friends each saved some money. The median of the five amounts is $20, and the mean of the five amounts is $26. Which of the following must be true?",
    stemZh: "五个朋友各存了一些钱。这五笔钱数的中位数是 $20，平均数是 $26。下面哪一项一定成立？",
    choices: ["At least one friend saved more than $26.", "Every friend saved at least $20.", "Exactly two friends saved more than $26.", "The five amounts add up to $120."], answer: 0,
    explanationEn: String.raw`The five amounts must add up to \(5\times26=130\) dollars, so “add up to $120” is false. The mean is a balance point: the friend in the middle saved only $20, which is below $26, so at least one amount must be above $26 to balance it (if nobody saved more than $26, the total could be at most \(4\times26+20=124\), which is less than 130). The other statements can fail: $10, $15, $20, $40 and $45 fit the facts but include two friends who saved less than $20, and $10, $15, $20, $25 and $60 fit them too but have only one friend who saved more than $26.`,
    explanationZh: String.raw`这五笔钱的总数一定是 \(5\times26=130\) 美元，所以“总数是 $120”不成立。平均数相当于一个平衡点：排在中间的那位朋友只存了 $20，比 $26 少，所以至少要有一笔钱超过 $26 才能平衡（如果没有人存的钱超过 $26，总数最多是 \(4\times26+20=124\)，小于 130）。其他说法不一定成立：$10、$15、$20、$40、$45 符合已知条件，却有两个人存的钱不到 $20；$10、$15、$20、$25、$60 也符合已知条件，却只有一个人存的钱超过 $26。`
  },
];
