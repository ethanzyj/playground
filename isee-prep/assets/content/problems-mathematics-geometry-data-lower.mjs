// Original ISEE-style Mathematics Achievement practice (Lower Level): geometry, measurement, data analysis & probability.
// 12 items: ma-gmd-l01 .. ma-gmd-l12.
export const PROBLEMS = [
  {
    id: "ma-gmd-l01", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["perimeter-area"],
    stem: "Maria sticks a ribbon along the whole edge of a rectangular poster that is 24 inches long and 18 inches wide. How many inches of ribbon does she need to go all the way around the poster?",
    stemZh: "Maria 要沿着一张长方形海报的整条边缘贴一圈彩带，海报长 24 英寸，宽 18 英寸。她需要多少英寸的彩带才能把海报四周围满？",
    choices: ["42", "66", "84", "432"], answer: 2,
    explanationEn: String.raw`The ribbon goes all the way around, so we need the perimeter: \(24+18+24+18=84\) inches, or \(2\times(24+18)=84\). The choice 42 adds only one length and one width, 66 leaves out one side, and 432 is the area \(24\times18\), not the distance around.`,
    explanationZh: String.raw`彩带要沿海报四周围一圈，求的是周长：\(24+18+24+18=84\)（英寸），也可以写成 \(2\times(24+18)=84\)。选 42 是只加了一条长和一条宽；66 是少算了一条边；432 是面积 \(24\times18\)，不是周长。`
  },
  {
    id: "ma-gmd-l02", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["graphs-tables"],
    stem: "The bar graph shows how many books students borrowed from the school library on each school day of one week. How many more books were borrowed on Wednesday than on Thursday?",
    stemZh: "条形图显示了某一周内学生每个上课日从学校图书馆借出的书的数量。周三比周四多借出了多少本书？",
    figure: {
      kind: "bar", titleEn: "Books borrowed", labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], series: [{ values: [10, 6, 8, 4, 10] }], yLabelEn: "Books",
      altEn: "A bar graph of books borrowed: Monday 10, Tuesday 6, Wednesday 8, Thursday 4, Friday 10. The vertical scale goes up by 2.",
      altZh: "条形图（借书数量）：周一 10 本，周二 6 本，周三 8 本，周四 4 本，周五 10 本。纵轴每格表示 2。"
    },
    choices: ["2", "4", "8", "12"], answer: 1,
    explanationEn: String.raw`Read the bars using the scale on the left, which goes up by 2 on each line: Wednesday is 8 and Thursday is 4. The difference is \(8-4=4\). The choice 12 adds the two bars, 8 is only Wednesday’s bar, and 2 comes from counting each line as 1 instead of 2.`,
    explanationZh: String.raw`先按左侧的刻度读数，每条横线表示 2：周三是 8，周四是 4。差是 \(8-4=4\)。选 12 是把两根柱子的数相加了；8 只是周三那根柱子的数；2 是把每条横线当成了 1 而不是 2。`
  },
  {
    id: "ma-gmd-l03", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["units-rates-time"],
    stem: "A bookshelf is 4 feet 8 inches long. What is the length of the bookshelf in inches?",
    stemZh: "一个书架长 4 英尺 8 英寸。这个书架的长度是多少英寸？",
    choices: ["12", "32", "48", "56"], answer: 3,
    explanationEn: String.raw`One foot is 12 inches, so 4 feet is \(4\times12=48\) inches. Add the extra 8 inches: \(48+8=56\). The choice 48 leaves out the 8 inches, 32 multiplies 4 by 8, and 12 adds 4 and 8.`,
    explanationZh: String.raw`1 英尺等于 12 英寸，所以 4 英尺是 \(4\times12=48\)（英寸），再加上多出来的 8 英寸：\(48+8=56\)。选 48 是漏掉了那 8 英寸；32 是把 4 和 8 相乘了；12 是把 4 和 8 相加了。`
  },
  {
    id: "ma-gmd-l04", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["angles-lines-triangles"],
    stem: "In the figure, points A, O and B lie on a straight line. What is the value of x?",
    stemZh: "在图中，点 A、O、B 在同一条直线上。x 的值是多少？",
    figure: {
      kind: "svg",
      altEn: "A straight line through points A, O and B, with O in the middle. Two rays from O go up to points C and D and split the straight angle into three angles: angle AOC is 35 degrees, angle COD is x degrees, and angle DOB is 80 degrees.",
      altZh: "一条直线经过点 A、O、B，O 在中间。从 O 引出两条射线，分别指向点 C 和点 D，把平角分成三个角：角 AOC 为 35 度，角 COD 为 x 度，角 DOB 为 80 度。",
      svg: `<svg viewBox="0 0 300 170"><line x1="20" y1="140" x2="280" y2="140" stroke="currentColor" stroke-width="2"/><line x1="150" y1="140" x2="53.3" y2="72.3" stroke="currentColor" stroke-width="2"/><line x1="150" y1="140" x2="170.5" y2="23.8" stroke="currentColor" stroke-width="2"/><path d="M 124 140 A 26 26 0 0 1 128.7 125.1 M 120.5 119.4 A 36 36 0 0 1 156.3 104.5 M 154.5 114.4 A 26 26 0 0 1 176 140" fill="none" stroke="currentColor" stroke-width="2"/><text x="87" y="125" text-anchor="middle" fill="currentColor" font-size="14">35°</text><text x="122" y="78" text-anchor="middle" fill="currentColor" font-size="14">x°</text><text x="198" y="105" text-anchor="middle" fill="currentColor" font-size="14">80°</text><text x="14" y="160" fill="currentColor" font-size="14">A</text><text x="145" y="160" fill="currentColor" font-size="14">O</text><text x="270" y="160" fill="currentColor" font-size="14">B</text><text x="42" y="64" text-anchor="middle" fill="currentColor" font-size="14">C</text><text x="173" y="16" text-anchor="middle" fill="currentColor" font-size="14">D</text></svg>`
    },
    choices: ["65", "100", "115", "145"], answer: 0,
    explanationEn: String.raw`Angles that fit together along a straight line add up to 180°. So \(35+x+80=180\), which gives \(x=180-115=65\). The choice 115 is just \(35+80\), 145 uses only the 35° angle (\(180-35\)), and 100 uses only the 80° angle (\(180-80\)).`,
    explanationZh: String.raw`沿一条直线并排的几个角，度数之和是 180°（平角）。所以 \(35+x+80=180\)，得 \(x=180-115=65\)。选 115 只是 \(35+80\)；选 145 只用了 35° 这个角（\(180-35\)）；选 100 只用了 80° 这个角（\(180-80\)）。`
  },
  {
    id: "ma-gmd-l05", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["perimeter-area", "polygons-circles"],
    stem: "The figure shows the floor plan of an L-shaped room. All of the corners are right angles. What is the area of the floor of the room, in square feet?",
    stemZh: "图中是一个 L 形房间的平面图，所有的角都是直角。这个房间地面的面积是多少平方英尺？",
    figure: {
      kind: "svg",
      altEn: "An L-shaped floor plan with all right angles. The bottom side is 12 ft, the left side is 9 ft, the top side is 7 ft, and the short right side is 5 ft. A rectangular corner is missing from the top right.",
      altZh: "一个所有角都是直角的 L 形平面图。底边长 12 英尺，左边长 9 英尺，顶边长 7 英尺，右侧较短的一边长 5 英尺。右上角缺了一个长方形。",
      svg: `<svg viewBox="0 0 290 224"><polygon points="40,190 232,190 232,110 152,110 152,46 40,46" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 49 190 V 181 H 40 M 223 190 V 181 H 232 M 223 110 V 119 H 232 M 152 101 H 161 V 110 M 143 46 V 55 H 152 M 49 46 V 55 H 40" fill="none" stroke="currentColor" stroke-width="2"/><text x="136" y="212" text-anchor="middle" fill="currentColor" font-size="14">12 ft</text><text x="32" y="123" text-anchor="end" fill="currentColor" font-size="14">9 ft</text><text x="96" y="34" text-anchor="middle" fill="currentColor" font-size="14">7 ft</text><text x="240" y="155" fill="currentColor" font-size="14">5 ft</text></svg>`
    },
    choices: ["63", "88", "108", "128"], answer: 1,
    explanationEn: String.raw`Split the L into two rectangles. The left part is 7 ft by 9 ft, so its area is \(7\times9=63\). The right part is \(12-7=5\) ft wide and 5 ft tall, so its area is \(5\times5=25\). The total is \(63+25=88\). The choice 108 is the full \(12\times9\) rectangle with the missing corner not removed, 128 adds that corner (\(5\times4=20\)) instead of removing it, and 63 counts only the left rectangle.`,
    explanationZh: String.raw`把 L 形分成两个长方形。左边一块长 9 英尺、宽 7 英尺，面积是 \(7\times9=63\)；右边一块宽 \(12-7=5\) 英尺、高 5 英尺，面积是 \(5\times5=25\)。总面积 \(63+25=88\)。选 108 是把整个 \(12\times9\) 的大长方形当成了房间，没有扣掉缺角；128 是把缺角（\(5\times4=20\)）加了上去而不是减掉；63 只算了左边那一块。`
  },
  {
    id: "ma-gmd-l06", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["mean-median-mode"],
    stem: "Ravi kept track of how many pages he read on each of seven nights: 14, 3, 14, 8, 12, 5, 14. What is the median number of pages he read per night?",
    stemZh: "Ravi 记录了他连续七个晚上每晚读的页数：14、3、14、8、12、5、14。他每晚读的页数的中位数是多少？",
    choices: ["8", "10", "12", "14"], answer: 2,
    explanationEn: String.raw`First put the numbers in order: 3, 5, 8, 12, 14, 14, 14. The median is the middle number, the fourth one, which is 12. The choice 14 is the mode (the most common value), 10 is the mean (\(70\div7\)), and 8 is just the middle entry of the list before it was put in order.`,
    explanationZh: String.raw`先把数从小到大排好：3、5、8、12、14、14、14。中位数是正中间的数，也就是第 4 个数，为 12。选 14 是众数（出现次数最多的数）；10 是平均数（\(70\div7\)）；8 只是原来没排序的数列里正中间的那一个数。`
  },
  {
    id: "ma-gmd-l07", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["volume-surface-area"],
    stem: "One box is a rectangular prism that is 6 inches long, 5 inches wide and 4 inches tall. A second box is a cube with edges that are each 5 inches long. What is the difference between the volumes of the two boxes, in cubic inches?",
    stemZh: "一个盒子是长方体，长 6 英寸、宽 5 英寸、高 4 英寸。另一个盒子是正方体，每条棱长 5 英寸。这两个盒子的体积相差多少立方英寸？",
    choices: ["0", "5", "120", "125"], answer: 1,
    explanationEn: String.raw`Volume is length \(\times\) width \(\times\) height. The rectangular box holds \(6\times5\times4=120\) cubic inches and the cube holds \(5\times5\times5=125\), so the difference is \(125-120=5\). The choices 120 and 125 are the two volumes themselves, and 0 comes from adding the edges instead (each box adds up to 15 inches), which does not measure volume.`,
    explanationZh: String.raw`体积 = 长 \(\times\) 宽 \(\times\) 高。长方体盒子的体积是 \(6\times5\times4=120\)（立方英寸），正方体盒子的体积是 \(5\times5\times5=125\)，所以相差 \(125-120=5\)。选 120 和 125 分别只是其中一个盒子的体积；选 0 是把棱长相加（每个盒子的棱长之和都是 15 英寸），而这并不是体积。`
  },
  {
    id: "ma-gmd-l08", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["units-rates-time"],
    stem: "A drama club rehearsal started at 3:50 p.m. and ended at 5:15 p.m. How many minutes did the rehearsal last?",
    stemZh: "戏剧社的排练从下午 3:50 开始，到下午 5:15 结束。这次排练持续了多少分钟？",
    choices: ["85", "125", "155", "165"], answer: 0,
    explanationEn: String.raw`From 3:50 to 4:00 is 10 minutes, from 4:00 to 5:00 is 60 minutes, and from 5:00 to 5:15 is 15 minutes, so the rehearsal lasted \(10+60+15=85\) minutes. The choice 165 comes from subtracting \(515-350\) as if the times were ordinary numbers, 155 from taking 2 hours and then adding \(50-15=35\) minutes, and 125 from borrowing an hour as 100 minutes instead of 60.`,
    explanationZh: String.raw`3:50 到 4:00 是 10 分钟，4:00 到 5:00 是 60 分钟，5:00 到 5:15 是 15 分钟，所以排练持续了 \(10+60+15=85\) 分钟。选 165 是把时间当成普通数字，算成了 \(515-350\)；选 155 是先算出 2 小时，再把 \(50-15=35\) 分钟加了上去；选 125 是借位时把 1 小时当成了 100 分钟，而不是 60 分钟。`
  },
  {
    id: "ma-gmd-l09", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["probability-counting"],
    stem: "The spinner shown has 8 equal sections, and it is equally likely to stop on any section. If the spinner is spun once, what is the probability that it stops on a number greater than 4?",
    stemZh: "图中的转盘被分成 8 个相等的扇形，转盘停在每个扇形上的可能性相同。转动转盘一次，停在大于 4 的数上的概率是多少？",
    figure: {
      kind: "svg",
      altEn: "A circular spinner divided into 8 equal sections. Going clockwise from the top, the sections are numbered 3, 7, 4, 5, 5, 8, 1 and 6.",
      altZh: "一个被分成 8 个相等扇形的圆形转盘。从顶部开始按顺时针方向，各扇形上的数依次为 3、7、4、5、5、8、1、6。",
      svg: `<svg viewBox="0 0 240 220"><circle cx="120" cy="110" r="90" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 120 110 L 120 20 M 120 110 L 183.6 46.4 M 120 110 L 210 110 M 120 110 L 183.6 173.6 M 120 110 L 120 200 M 120 110 L 56.4 173.6 M 120 110 L 30 110 M 120 110 L 56.4 46.4" fill="none" stroke="currentColor" stroke-width="2"/><text x="142.2" y="61.4" text-anchor="middle" fill="currentColor" font-size="14">3</text><text x="173.6" y="92.8" text-anchor="middle" fill="currentColor" font-size="14">7</text><text x="173.6" y="137.2" text-anchor="middle" fill="currentColor" font-size="14">4</text><text x="142.2" y="168.6" text-anchor="middle" fill="currentColor" font-size="14">5</text><text x="97.8" y="168.6" text-anchor="middle" fill="currentColor" font-size="14">5</text><text x="66.4" y="137.2" text-anchor="middle" fill="currentColor" font-size="14">8</text><text x="66.4" y="92.8" text-anchor="middle" fill="currentColor" font-size="14">1</text><text x="97.8" y="61.4" text-anchor="middle" fill="currentColor" font-size="14">6</text></svg>`
    },
    choices: [String.raw`\(\frac{3}{8}\)`, String.raw`\(\frac{1}{2}\)`, String.raw`\(\frac{5}{8}\)`, String.raw`\(\frac{3}{4}\)`], answer: 2,
    explanationEn: String.raw`Count the sections with a number greater than 4: 7, 5, 5, 8 and 6. That is 5 of the 8 equal sections, so the probability is \(\frac{5}{8}\). The choice \(\frac{1}{2}\) counts the two 5s as only one section, \(\frac{3}{4}\) wrongly includes the 4, and \(\frac{3}{8}\) is the probability of a number that is not greater than 4 (3, 4 and 1).`,
    explanationZh: String.raw`数一数写着大于 4 的数的扇形：7、5、5、8、6，共 5 个，转盘一共有 8 个相等的扇形，所以概率是 \(\frac{5}{8}\)。选 \(\frac{1}{2}\) 是把两个 5 只当成了一个扇形；选 \(\frac{3}{4}\) 是错把 4 也算了进去；\(\frac{3}{8}\) 则是“不大于 4”的数（3、4、1）的概率。`
  },
  {
    id: "ma-gmd-l10", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["coordinate-transformations"],
    stem: String.raw`In the figure, triangle ABC is reflected (flipped) over the dashed mirror line, and point C moves to point \(C'\). What are the coordinates of \(C'\)?`,
    stemZh: String.raw`图中的三角形 ABC 沿虚线（对称轴）翻折（作轴对称），点 C 变到点 \(C'\)。\(C'\) 的坐标是什么？`,
    figure: {
      kind: "svg",
      altEn: "A coordinate grid with x from 0 to 8 and y from 0 to 6. Triangle ABC has A at (1, 1), B at (3, 1) and C at (1, 4), with a right angle at A. A dashed vertical mirror line passes through x = 4.",
      altZh: "坐标网格，x 轴范围 0 到 8，y 轴范围 0 到 6。三角形 ABC 的顶点 A 在 (1, 1)，B 在 (3, 1)，C 在 (1, 4)，A 处为直角。一条竖直的虚线（对称轴）经过 x = 4。",
      svg: `<svg viewBox="0 0 320 244"><path d="M 72 26 V 218 M 104 26 V 218 M 136 26 V 218 M 168 26 V 218 M 200 26 V 218 M 232 26 V 218 M 264 26 V 218 M 296 26 V 218 M 40 186 H 296 M 40 154 H 296 M 40 122 H 296 M 40 90 H 296 M 40 58 H 296 M 40 26 H 296" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="1"/><path d="M 40 26 V 218 H 296" fill="none" stroke="currentColor" stroke-width="2"/><line x1="168" y1="20" x2="168" y2="218" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><polygon points="72,186 136,186 72,90" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><path d="M 80 186 V 178 H 72" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="72" cy="186" r="3" fill="currentColor"/><circle cx="136" cy="186" r="3" fill="currentColor"/><circle cx="72" cy="90" r="3" fill="currentColor"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="40" y="236">0</text><text x="72" y="236">1</text><text x="104" y="236">2</text><text x="136" y="236">3</text><text x="168" y="236">4</text><text x="200" y="236">5</text><text x="232" y="236">6</text><text x="264" y="236">7</text><text x="296" y="236">8</text><text x="31" y="223" text-anchor="end">0</text><text x="31" y="191" text-anchor="end">1</text><text x="31" y="159" text-anchor="end">2</text><text x="31" y="127" text-anchor="end">3</text><text x="31" y="95" text-anchor="end">4</text><text x="31" y="63" text-anchor="end">5</text><text x="31" y="31" text-anchor="end">6</text><text x="60" y="204">A</text><text x="136" y="206">B</text><text x="72" y="81">C</text><text x="168" y="14">mirror line</text><text x="306" y="223">x</text><text x="40" y="16">y</text></g></svg>`
    },
    choices: ["(4, 4)", "(6, 4)", "(7, 1)", "(7, 4)"], answer: 3,
    explanationEn: String.raw`Point C is at (1, 4). The mirror line is the vertical line through 4 on the x-axis, and C is 3 units to its left, so \(C'\) is 3 units to the right of the line: \(4+3=7\). The height stays the same, so \(C'=(7,4)\). The choice (4, 4) stops on the mirror line, (6, 4) goes only 2 units past it, and (7, 1) is where point A lands, not point C.`,
    explanationZh: String.raw`点 C 的坐标是 (1, 4)。对称轴是经过 x 轴上 4 的竖直线，C 在它左边 3 个单位，所以 \(C'\) 在它右边 3 个单位：\(4+3=7\)。纵坐标不变，所以 \(C'=(7,4)\)。选 (4, 4) 是只走到对称轴上就停了；(6, 4) 只越过对称轴 2 个单位；(7, 1) 是点 A 翻折后的位置，不是点 C。`
  },
  {
    id: "ma-gmd-l11", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["mean-median-mode", "graphs-tables"],
    stem: "The table shows Nora’s scores on her first four spelling quizzes. What score does she need on the fifth quiz so that the mean of all five of her scores is exactly 90?",
    stemZh: "下表是 Nora 前四次拼写测验的成绩。她第五次测验需要考多少分，才能使五次成绩的平均数恰好是 90？",
    figure: {
      kind: "table", captionEn: "Spelling quiz scores", headers: ["Quiz", "Score"], rows: [["1", "90"], ["2", "94"], ["3", "88"], ["4", "92"]],
      altEn: "A table of the first four spelling quiz scores: quiz 1 is 90, quiz 2 is 94, quiz 3 is 88 and quiz 4 is 92.",
      altZh: "前四次拼写测验的成绩表：第 1 次 90 分，第 2 次 94 分，第 3 次 88 分，第 4 次 92 分。"
    },
    choices: ["86", "89", "90", "91"], answer: 0,
    explanationEn: String.raw`For a mean of 90 over five quizzes, the scores must total \(5\times90=450\). The first four total \(90+94+88+92=364\), so the fifth score must be \(450-364=86\). Another way to see it: the first four scores average 91, so together they are 4 points above 90, and the fifth must be 4 points below 90. The choice 90 is only the target, 91 is the mean of the first four quizzes (\(364\div4\)), and 89 is just 1 below the target instead of 4.`,
    explanationZh: String.raw`要使五次成绩的平均数是 90，五次成绩的总和必须是 \(5\times90=450\)。前四次的总和是 \(90+94+88+92=364\)，所以第五次需要 \(450-364=86\)（分）。也可以这样想：前四次的平均数是 91，一共比 90 多 4 分，所以第五次要比 90 少 4 分。选 90 只是目标平均数；91 是前四次的平均数（\(364\div4\)）；89 只比目标少 1 分，而不是少 4 分。`
  },
  {
    id: "ma-gmd-l12", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["polygons-circles", "perimeter-area"],
    stem: "Four identical circles are placed side by side in a row inside a rectangle, as shown. Each circle touches the circles next to it and touches the sides of the rectangle. The radius of each circle is 3 centimeters. What is the perimeter of the rectangle, in centimeters?",
    stemZh: "如图，四个完全相同的圆并排放在一个长方形里。每个圆都与相邻的圆相切，并与长方形的边相切。每个圆的半径是 3 厘米。这个长方形的周长是多少厘米？",
    figure: {
      kind: "svg",
      altEn: "A rectangle with four identical circles in a row inside it. Each circle touches its neighbors and touches the top and bottom of the rectangle, and the first and last circles touch the left and right sides. The radius of each circle is 3 centimeters.",
      altZh: "一个长方形，里面有四个完全相同的圆排成一行。每个圆都与相邻的圆相切，并与长方形的上边和下边相切，第一个和最后一个圆分别与左边和右边相切。每个圆的半径是 3 厘米。",
      svg: `<svg viewBox="0 0 336 128"><rect x="24" y="20" width="288" height="72" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="56" r="36" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="132" cy="56" r="36" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="204" cy="56" r="36" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="276" cy="56" r="36" fill="none" stroke="currentColor" stroke-width="2"/><text x="168" y="118" text-anchor="middle" fill="currentColor" font-size="14">Radius of each circle: 3 cm</text></svg>`
    },
    choices: ["30", "48", "54", "60"], answer: 3,
    explanationEn: String.raw`The diameter of each circle is \(2\times3=6\) cm. The rectangle is as long as 4 diameters, \(4\times6=24\) cm, and as tall as 1 diameter, 6 cm, so its perimeter is \(24+6+24+6=60\) cm. The choice 30 uses the radius 3 as if it were the diameter (\(2\times(12+3)\)), 48 leaves out the two short sides, and 54 leaves out one of them.`,
    explanationZh: String.raw`每个圆的直径是 \(2\times3=6\) 厘米。长方形的长是 4 个直径，即 \(4\times6=24\) 厘米；宽是 1 个直径，即 6 厘米，所以周长是 \(24+6+24+6=60\) 厘米。选 30 是把半径 3 当成了直径（\(2\times(12+3)\)）；选 48 漏掉了两条短边；选 54 漏掉了其中一条短边。`
  }
];
