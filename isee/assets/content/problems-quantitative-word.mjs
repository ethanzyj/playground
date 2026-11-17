// Original ISEE-style Quantitative Reasoning word problems: 15 each for the Lower, Middle and Upper levels.
export const PROBLEMS = [
  // ---------------------------------------------------------------- Lower Level
  {
    id: "qr-wp-l01", level: "lower", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["graphs-tables", "word-problem-reasoning"],
    stem: "The bar graph shows the number of books checked out of the school library each day last week. On which day were exactly twice as many books checked out as on Monday?",
    stemZh: "条形图显示了上周每天从学校图书馆借出的书的数量。哪一天借出的书恰好是周一的两倍？",
    figure: {
      kind: "bar", titleEn: "Library books checked out", labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], series: [{ values: [5, 8, 10, 7, 9] }], yLabelEn: "Books checked out",
      altEn: "A bar graph of library books checked out: Monday 5, Tuesday 8, Wednesday 10, Thursday 7, Friday 9.",
      altZh: "条形图：周一借出 5 本，周二 8 本，周三 10 本，周四 7 本，周五 9 本。"
    },
    choices: ["Tuesday", "Wednesday", "Thursday", "Friday"], answer: 1,
    explanationEn: String.raw`Monday’s bar shows 5 books, so twice as many is \(5\times2=10\) books, and only Wednesday’s bar reaches 10. Thursday has 7 books, which is 2 more than Monday, but “2 more” is not the same as “twice as many.”`,
    explanationZh: String.raw`周一的柱子是 5 本，两倍就是 \(5\times2=10\) 本，只有周三的柱子达到 10 本。周四是 7 本，只比周一多 2 本，但“多 2 本”不等于“两倍”。`
  },
  {
    id: "qr-wp-l02", level: "lower", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["patterns-sequences-functions"],
    stem: "The first row of a theater has 6 seats. Each row after it has 2 more seats than the row just before it. How many seats are in row 12?",
    stemZh: "剧场的第 1 排有 6 个座位。之后的每一排都比前一排多 2 个座位。第 12 排有多少个座位？",
    choices: ["24", "26", "28", "30"], answer: 2,
    explanationEn: String.raw`Row 12 comes after 11 increases of 2 seats, so it has \(6+11\times2=28\) seats. Counting 12 increases gives 30 (that is row 13), and \(12\times2=24\) forgets the 6 seats in the first row. The choice 26 is the number of seats in row 11.`,
    explanationZh: String.raw`第 12 排是在第 1 排的基础上增加了 11 次 2 个座位，所以座位数是 \(6+11\times2=28\)。如果算成增加 12 次，得到的 30 其实是第 13 排；\(12\times2=24\) 漏掉了第 1 排的 6 个座位；26 是第 11 排的座位数。`
  },
  {
    id: "qr-wp-l03", level: "lower", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["integers-order-operations", "word-problem-reasoning"],
    stem: "A train has 6 cars, and each car has 40 seats. Today 135 people are riding the train, and each ticket costs $12. How many seats on the train are empty?",
    stemZh: "一列火车有 6 节车厢，每节车厢有 40 个座位。今天有 135 人乘坐这列火车，每张车票 $12。火车上有多少个空座位？",
    choices: ["105", "135", "240", "375"], answer: 0,
    explanationEn: String.raw`The train has \(6\times40=240\) seats. With 135 riders, \(240-135=105\) seats are empty, and the ticket price is not needed. The choice 240 is the total number of seats, 135 is the number of riders, and 375 adds the two numbers instead of subtracting.`,
    explanationZh: String.raw`火车共有 \(6\times40=240\) 个座位，有 135 人乘坐，所以空座位有 \(240-135=105\) 个，车票价格与本题无关。240 是座位总数，135 是乘客人数，375 是把两个数相加了。`
  },
  {
    id: "qr-wp-l04", level: "lower", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["coordinate-transformations"],
    stem: "Four points are shown on the coordinate grid. Which point has coordinates (4, 1)?",
    stemZh: "坐标方格图上标出了四个点。哪个点的坐标是 (4, 1)？",
    figure: {
      kind: "svg",
      altEn: "A coordinate grid with both axes marked from 0 to 6. Point P is at (1, 4), point Q is at (3, 3), point R is at (5, 2) and point S is at (4, 1).",
      altZh: "坐标方格图，两条坐标轴都标有 0 到 6。点 P 在 (1, 4)，点 Q 在 (3, 3)，点 R 在 (5, 2)，点 S 在 (4, 1)。",
      svg: `<svg viewBox="0 0 260 214"><path d="M68,190V22M96,190V22M124,190V22M152,190V22M180,190V22M208,190V22M40,162H208M40,134H208M40,106H208M40,78H208M40,50H208M40,22H208" fill="none" stroke="currentColor" stroke-opacity="0.22"/><path d="M40,22V190H208" fill="none" stroke="currentColor" stroke-width="2"/><text x="40" y="206" text-anchor="middle" fill="currentColor" font-size="12">0</text><text x="68" y="206" text-anchor="middle" fill="currentColor" font-size="12">1</text><text x="96" y="206" text-anchor="middle" fill="currentColor" font-size="12">2</text><text x="124" y="206" text-anchor="middle" fill="currentColor" font-size="12">3</text><text x="152" y="206" text-anchor="middle" fill="currentColor" font-size="12">4</text><text x="180" y="206" text-anchor="middle" fill="currentColor" font-size="12">5</text><text x="208" y="206" text-anchor="middle" fill="currentColor" font-size="12">6</text><text x="31" y="166" text-anchor="end" fill="currentColor" font-size="12">1</text><text x="31" y="138" text-anchor="end" fill="currentColor" font-size="12">2</text><text x="31" y="110" text-anchor="end" fill="currentColor" font-size="12">3</text><text x="31" y="82" text-anchor="end" fill="currentColor" font-size="12">4</text><text x="31" y="54" text-anchor="end" fill="currentColor" font-size="12">5</text><text x="31" y="26" text-anchor="end" fill="currentColor" font-size="12">6</text><text x="220" y="195" fill="currentColor" font-size="14">x</text><text x="40" y="14" text-anchor="middle" fill="currentColor" font-size="14">y</text><circle cx="68" cy="78" r="4" fill="currentColor"/><text x="75" y="71" fill="currentColor" font-size="14">P</text><circle cx="124" cy="106" r="4" fill="currentColor"/><text x="131" y="99" fill="currentColor" font-size="14">Q</text><circle cx="180" cy="134" r="4" fill="currentColor"/><text x="187" y="127" fill="currentColor" font-size="14">R</text><circle cx="152" cy="162" r="4" fill="currentColor"/><text x="159" y="155" fill="currentColor" font-size="14">S</text></svg>`
    },
    choices: ["P", "Q", "R", "S"], answer: 3,
    explanationEn: "Coordinates are written (right, up). The point 4 units to the right and 1 unit up is S. Point P is 1 unit right and 4 units up, so its coordinates are (1, 4); mixing up the order leads to choosing P.",
    explanationZh: "坐标按“先横后纵”（先向右、再向上）来写。向右 4 格、向上 1 格的点是 S。点 P 向右 1 格、向上 4 格，坐标是 (1, 4)；把顺序弄反就会错选 P。"
  },
  {
    id: "qr-wp-l05", level: "lower", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["angles-lines-triangles"],
    stem: String.raw`In the figure, a ray starts at point O on a straight horizontal line. What is the value of \(x\), in degrees?`,
    stemZh: String.raw`图中，一条射线从一条水平直线上的点 O 引出。\(x\) 的值是多少度？`,
    figure: {
      kind: "svg",
      altEn: "A straight horizontal line with a point O on it and a ray going up and to the right from O. The angle between the ray and the left part of the line is labeled 115 degrees, and the angle between the ray and the right part of the line is labeled x degrees.",
      altZh: "一条水平直线，直线上有点 O，从 O 向右上方引出一条射线。射线与直线左侧部分所成的角标为 115°，与直线右侧部分所成的角标为 x°。",
      svg: `<svg viewBox="0 0 300 170"><line x1="20" y1="140" x2="280" y2="140" stroke="currentColor" stroke-width="2"/><line x1="150" y1="140" x2="196.5" y2="40.3" stroke="currentColor" stroke-width="2"/><circle cx="150" cy="140" r="3.5" fill="currentColor"/><path d="M184,140 A34,34 0 0 0 164.4,109.2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M161,116.4 A26,26 0 0 0 124,140" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="196.9" y="113.8" fill="currentColor" font-size="14">x°</text><text x="103.1" y="99.8" fill="currentColor" font-size="14">115°</text><text x="146" y="160" fill="currentColor" font-size="14">O</text></svg>`
    },
    choices: ["65", "115", "245", "295"], answer: 0,
    explanationEn: String.raw`The two angles lie along a straight line, so they add up to \(180^\circ\), and \(x=180-115=65\). Choosing 115 repeats the given angle, 245 comes from \(360-115\), and 295 comes from adding \(180+115\).`,
    explanationZh: String.raw`这两个角合起来是一条直线，所以和为 \(180^\circ\)，\(x=180-115=65\)。选 115 是把已知角直接抄了下来；245 是误用了 \(360-115\)；295 是误算成 \(180+115\)。`
  },
  {
    id: "qr-wp-l06", level: "lower", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["units-rates-time"],
    stem: "A hallway is 4 meters long. Tiles that are each 25 centimeters long are placed end to end in one row, with no gaps, to cover the full length of the hallway. How many tiles are needed?",
    stemZh: "一条走廊长 4 米。把每块长 25 厘米的瓷砖首尾相接、中间不留缝隙，铺成一排，正好铺满走廊的全长。需要多少块瓷砖？",
    choices: ["4", "16", "100", "160"], answer: 1,
    explanationEn: String.raw`Use the same unit first: 4 meters is \(4\times100=400\) centimeters, and \(400\div25=16\) tiles fit. The choice 100 comes from \(4\times25\), which mixes meters and centimeters, 160 treats 1 meter as 1,000 centimeters, and 4 just repeats the length in meters.`,
    explanationZh: String.raw`先统一单位：4 米等于 \(4\times100=400\) 厘米，再算 \(400\div25=16\) 块。选 100 是用 \(4\times25\)，把米和厘米混在一起算了；选 160 是把 1 米当成了 1000 厘米；选 4 只是照抄了走廊的米数。`
  },
  {
    id: "qr-wp-l07", level: "lower", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["fractions-decimals"],
    stem: String.raw`Rosa read \(\frac{1}{8}\) of a book on Monday and \(\frac{1}{4}\) of the same book on Tuesday. What fraction of the book has she not read yet?`,
    stemZh: String.raw`Rosa 周一读了一本书的 \(\frac{1}{8}\)，周二又读了同一本书的 \(\frac{1}{4}\)。这本书还有多少没有读？（用分数表示）`,
    choices: [String.raw`\(\frac{1}{8}\)`, String.raw`\(\frac{3}{8}\)`, String.raw`\(\frac{5}{8}\)`, String.raw`\(\frac{7}{8}\)`], answer: 2,
    explanationEn: String.raw`Since \(\frac{1}{4}=\frac{2}{8}\), Rosa has read \(\frac{1}{8}+\frac{2}{8}=\frac{3}{8}\) of the book, so \(1-\frac{3}{8}=\frac{5}{8}\) is still unread. The choice \(\frac{3}{8}\) is the part she has already read, \(\frac{1}{8}\) is only Monday’s reading, and \(\frac{7}{8}\) forgets Tuesday’s reading.`,
    explanationZh: String.raw`因为 \(\frac{1}{4}=\frac{2}{8}\)，Rosa 一共读了 \(\frac{1}{8}+\frac{2}{8}=\frac{3}{8}\)，还剩 \(1-\frac{3}{8}=\frac{5}{8}\) 没读。\(\frac{3}{8}\) 是已经读完的部分；\(\frac{1}{8}\) 只是周一读的；\(\frac{7}{8}\) 漏掉了周二读的那部分。`
  },
  {
    id: "qr-wp-l08", level: "lower", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["factors-multiples-primes", "word-problem-reasoning"],
    stem: "A red light blinks every 8 seconds and a blue light blinks every 12 seconds. The two lights blink together at the start. After how many seconds will they next blink together?",
    stemZh: "红灯每 8 秒闪一次，蓝灯每 12 秒闪一次。开始时两盏灯同时闪了一下。再过多少秒它们会再次同时闪？",
    choices: ["4", "12", "20", "24"], answer: 3,
    explanationEn: String.raw`The lights blink together at a time that is a multiple of both 8 and 12, and the smallest such time is 24 seconds (\(8\times3\) and \(12\times2\)). The choice 4 is the greatest common factor, 12 is only a multiple of 12 (the red light is not blinking then), and 20 is \(8+12\).`,
    explanationZh: String.raw`两盏灯同时闪的时刻，必须既是 8 的倍数又是 12 的倍数，最小的是 24 秒（\(8\times3\)，\(12\times2\)）。4 是最大公因数；12 只是 12 的倍数（那时红灯没有闪）；20 是 \(8+12\)。`
  },
  {
    id: "qr-wp-l09", level: "lower", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["mean-median-mode", "word-problem-reasoning"],
    stem: "Jin’s mean score on five math quizzes is 80. Four of the scores are 72, 78, 84, and 90. What was Jin’s fifth score?",
    stemZh: "Jin 五次数学小测的平均分是 80。其中四次的分数是 72、78、84 和 90。Jin 第五次的分数是多少？",
    choices: ["72", "76", "80", "84"], answer: 1,
    explanationEn: String.raw`Five scores with a mean of 80 add up to \(5\times80=400\), and the four known scores add up to \(72+78+84+90=324\). So the fifth score is \(400-324=76\). Choosing 80 would be right only if the known scores were balanced around 80, but they are not.`,
    explanationZh: String.raw`五个分数的平均数是 80，所以总分是 \(5\times80=400\)，已知四个分数的和是 \(72+78+84+90=324\)，第五个分数就是 \(400-324=76\)。只有当已知分数恰好以 80 为中心对称时，第五个分数才会是 80，而这里并不对称。`
  },
  {
    id: "qr-wp-l10", level: "lower", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["exponents-roots", "perimeter-area"],
    stem: "A square patio has an area of 64 square meters. Ines walks once around the outside edge of the patio. How many meters does she walk?",
    stemZh: "一个正方形露台的面积是 64 平方米。Ines 沿着露台的外边缘走了一圈。她走了多少米？",
    choices: ["8", "16", "32", "64"], answer: 2,
    explanationEn: String.raw`Because \(8\times8=64\), each side of the patio is 8 meters long. Walking once around the edge is the perimeter, \(4\times8=32\) meters. The choice 64 is the area, 8 is only one side, and 16 counts only two of the four sides.`,
    explanationZh: String.raw`因为 \(8\times8=64\)，露台每条边长 8 米。绕边缘走一圈就是周长：\(4\times8=32\) 米。64 是面积；8 只是一条边；16 只算了两条边。`
  },
  {
    id: "qr-wp-l11", level: "lower", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["estimation-number-sense", "fractions-decimals"],
    stem: String.raw`Four runners are in a long race. At the same moment, they have run \(\frac{4}{9}\), \(\frac{5}{8}\), \(\frac{7}{10}\), and \(\frac{5}{6}\) of the race. Which fraction describes the runner who is closest to the halfway point of the race?`,
    stemZh: String.raw`四名选手在参加一场长跑比赛。此刻他们分别跑完了全程的 \(\frac{4}{9}\)、\(\frac{5}{8}\)、\(\frac{7}{10}\) 和 \(\frac{5}{6}\)。哪个分数表示的选手最接近全程的中点？`,
    choices: [String.raw`\(\frac{4}{9}\)`, String.raw`\(\frac{5}{8}\)`, String.raw`\(\frac{7}{10}\)`, String.raw`\(\frac{5}{6}\)`], answer: 0,
    explanationEn: String.raw`Compare each fraction with \(\frac{1}{2}\). Half of 9 is 4.5, so \(\frac{4}{9}\) is just under one half, off by only \(\frac{1}{18}\). The others are farther away: \(\frac{5}{8}\) is \(\frac{1}{8}\) above one half, \(\frac{7}{10}\) is \(\frac{1}{5}\) above, and \(\frac{5}{6}\) is \(\frac{1}{3}\) above.`,
    explanationZh: String.raw`把每个分数与 \(\frac{1}{2}\) 比较。9 的一半是 4.5，所以 \(\frac{4}{9}\) 只比一半少一点点，相差仅 \(\frac{1}{18}\)。其余三个都离一半更远：\(\frac{5}{8}\) 比一半多 \(\frac{1}{8}\)，\(\frac{7}{10}\) 多 \(\frac{1}{5}\)，\(\frac{5}{6}\) 多 \(\frac{1}{3}\)。`
  },
  {
    id: "qr-wp-l12", level: "lower", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["volume-surface-area", "word-problem-reasoning"],
    stem: "A rectangular fish tank holds 30 liters of water. A second rectangular tank is the same height as the first, but it is twice as long and twice as wide. How many liters of water does the second tank hold?",
    stemZh: "一个长方体鱼缸能装 30 升水。第二个长方体鱼缸和第一个一样高，但长和宽都是第一个的 2 倍。第二个鱼缸能装多少升水？",
    choices: ["60", "90", "120", "240"], answer: 2,
    explanationEn: String.raw`Volume comes from multiplying length, width and height. Doubling the length doubles the volume and doubling the width doubles it again, while the height stays the same, so the volume is multiplied by \(2\times2=4\) and \(30\times4=120\) liters. Choosing 60 counts only one doubling, 90 treats each doubling as adding 30 liters when the second doubling should double the 60 liters, and 240 would double the height too.`,
    explanationZh: String.raw`体积由长、宽、高相乘得到。长变成 2 倍，体积变成 2 倍；宽再变成 2 倍，体积再变成 2 倍；高不变。所以体积变为原来的 \(2\times2=4\) 倍，即 \(30\times4=120\) 升。选 60 只算了一次翻倍；选 90 是把每次翻倍都当成增加 30 升，其实第二次应当把已经变成 60 升的体积再翻倍；选 240 则把高也翻倍了。`
  },
  {
    id: "qr-wp-l13", level: "lower", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["expressions-equations", "ratios-percents", "word-problem-reasoning"],
    stem: "Mia has 3 times as many stickers as Ben. Then Mia gives 8 stickers to Ben, and now they have the same number of stickers. How many stickers do the two children have altogether?",
    stemZh: "Mia 的贴纸数是 Ben 的 3 倍。后来 Mia 给了 Ben 8 张贴纸，现在两人的贴纸一样多。两个孩子一共有多少张贴纸？",
    choices: ["8", "16", "24", "32"], answer: 3,
    explanationEn: String.raw`Think of Ben’s stickers as 1 part and Mia’s as 3 parts. After Mia gives away 8 stickers they are equal at 2 parts each, so Mia gave away 1 part, and 1 part is 8 stickers. The total is 4 parts, \(4\times8=32\). The other choices are numbers found along the way: Ben’s starting number (8), what each child has at the end (16), and Mia’s starting number (24).`,
    explanationZh: String.raw`把 Ben 的贴纸看作 1 份，Mia 的看作 3 份。Mia 给出 8 张后两人相等，各是 2 份，说明 Mia 给出了 1 份，所以 1 份就是 8 张。总数是 4 份，\(4\times8=32\) 张。其他选项都是解题途中出现的数：Ben 原来的 8 张、最后每人的 16 张、Mia 原来的 24 张。`
  },
  {
    id: "qr-wp-l14", level: "lower", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["probability-counting", "word-problem-reasoning"],
    stem: "A bag has 4 red marbles and 6 blue marbles. Jo adds some more red marbles to the bag. Now a marble picked at random from the bag is equally likely to be red or blue. How many red marbles did Jo add?",
    stemZh: "一个袋子里有 4 个红弹珠和 6 个蓝弹珠。Jo 又往袋子里放进了几个红弹珠。现在从袋中随机取出一个弹珠，取到红色和取到蓝色的可能性一样大。Jo 放进了多少个红弹珠？",
    choices: ["2", "4", "6", "10"], answer: 0,
    explanationEn: String.raw`A random pick is equally likely to be red or blue only when there are equal numbers of red and blue marbles. There are 6 blue marbles, so there must be 6 red marbles, and Jo added \(6-4=2\). The choice 6 is how many red marbles there are at the end, 4 is how many there were at first, and 10 is the original total.`,
    explanationZh: String.raw`只有当红色和蓝色弹珠的数量相同时，随机取出红球和蓝球的可能性才一样大。蓝弹珠有 6 个，所以红弹珠也必须有 6 个，Jo 放进了 \(6-4=2\) 个。6 是最后红弹珠的总数，4 是原来红弹珠的个数，10 是原来弹珠的总数。`
  },
  {
    id: "qr-wp-l15", level: "lower", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["perimeter-area", "polygons-circles"],
    stem: "The figure shows an L-shaped region. All sides meet at right angles, and all lengths are in centimeters. What is the perimeter of the figure, in centimeters?",
    stemZh: "图中是一个 L 形区域，相邻的边都互相垂直，长度单位都是厘米。这个图形的周长是多少厘米？",
    figure: {
      kind: "svg",
      altEn: "An L-shaped figure made from a 10 by 6 rectangle with a 4 by 3 corner cut out of its upper right. The bottom side is labeled 10, the left side is labeled 6, and the cut-out corner has a horizontal side labeled 4 and a vertical side labeled 3.",
      altZh: "L 形图形，由长 10、宽 6 的长方形去掉右上角一个长 4、宽 3 的小长方形而成。下边标 10，左边标 6，缺口的水平边标 4，竖直边标 3。",
      svg: `<svg viewBox="0 0 260 190"><polygon points="30,150 230,150 230,90 150,90 150,30 30,30" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><path d="M38,150 L38,142 L30,142" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M222,150 L222,142 L230,142" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M230,98 L222,98 L222,90" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M158,90 L158,82 L150,82" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M150,38 L142,38 L142,30" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M38,30 L38,38 L30,38" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="124" y="172" fill="currentColor" font-size="14">10</text><text x="10" y="95" fill="currentColor" font-size="14">6</text><text x="186" y="80" fill="currentColor" font-size="14">4</text><text x="158" y="63" fill="currentColor" font-size="14">3</text></svg>`
    },
    choices: ["23", "32", "48", "60"], answer: 1,
    explanationEn: String.raw`The two sides that are not labeled are \(10-4=6\) and \(6-3=3\), so the perimeter is \(10+6+6+3+4+3=32\). A shortcut: the figure has the same perimeter as the 10 by 6 rectangle around it, \(2\times(10+6)=32\). The choice 23 adds only the four labeled sides, while 48 and 60 are areas, not perimeters.`,
    explanationZh: String.raw`没有标出的两条边分别是 \(10-4=6\) 和 \(6-3=3\)，所以周长是 \(10+6+6+3+4+3=32\)。也可以用简便方法：这个图形的周长等于外面那个 10 乘 6 的长方形的周长 \(2\times(10+6)=32\)。选 23 只加了标出的四条边；48 和 60 是面积，不是周长。`
  },
  // ---------------------------------------------------------------- Middle Level
  {
    id: "qr-wp-m01", level: "middle", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["graphs-tables", "ratios-percents"],
    stem: "A school has 200 students. The circle graph shows the percent of the students who use each way of getting to school. How many more students ride the bus than walk?",
    stemZh: "一所学校有 200 名学生。扇形图显示了采用各种上学方式的学生所占的百分比。乘校车的学生比步行的学生多多少人？",
    figure: {
      kind: "pie", titleEn: "How students get to school",
      slices: [{ label: "Bus", value: 40 }, { label: "Walk", value: 25 }, { label: "Car", value: 20 }, { label: "Bike", value: 15 }],
      altEn: "A circle graph of how 200 students get to school: bus 40 percent, walk 25 percent, car 20 percent and bike 15 percent.",
      altZh: "扇形图，表示 200 名学生的上学方式：校车占 40%，步行占 25%，小汽车占 20%，骑自行车占 15%。"
    },
    choices: ["15", "30", "40", "80"], answer: 1,
    explanationEn: String.raw`The bus is used by \(40\%\) of the students and walking by \(25\%\), a difference of \(15\%\). Then \(15\%\) of 200 is \(0.15\times200=30\) students. The choice 15 forgets to change the percent into a number of students, 40 is the bus percent, and 80 is how many students ride the bus.`,
    explanationZh: String.raw`乘校车的占 \(40\%\)，步行的占 \(25\%\)，相差 \(15\%\)。200 人的 \(15\%\) 是 \(0.15\times200=30\) 人。选 15 是忘了把百分数换算成人数；40 是乘校车的百分比；80 是乘校车的人数。`
  },
  {
    id: "qr-wp-m02", level: "middle", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["expressions-equations", "word-problem-reasoning"],
    stem: "A taxi company charges a fixed fee of $3 plus $2 for each mile traveled. Dev’s ride lasted 20 minutes, and he paid $19 in all. How many miles did he travel?",
    stemZh: "一家出租车公司收取 $3 的起步费，另外每行驶 1 英里收费 $2。Dev 这次乘车用了 20 分钟，一共付了 $19。他行驶了多少英里？",
    choices: ["8", "9.5", "11", "16"], answer: 0,
    explanationEn: String.raw`Take away the fixed fee first: \(19-3=16\) dollars paid for the miles, and at $2 per mile that is \(16\div2=8\) miles (check: \(3+2\times8=19\)); the 20 minutes is not needed. Choosing 9.5 divides the whole $19 by 2 and forgets the fixed fee, 11 adds the fee instead of subtracting it, and 16 forgets to divide by 2.`,
    explanationZh: String.raw`先扣掉起步费：\(19-3=16\) 美元是行驶里程的费用，每英里 $2，所以里程是 \(16\div2=8\) 英里（验算：\(3+2\times8=19\)）；20 分钟这个条件用不到。选 9.5 是直接用 $19 除以 2，忘了起步费；选 11 是把起步费加上去而不是减掉；选 16 是漏了除以 2。`
  },
  {
    id: "qr-wp-m03", level: "middle", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["probability-counting"],
    stem: "Five friends — Ana, Ben, Cy, Dee, and Eli — are choosing a class president and a vice president from among themselves. One person cannot hold both jobs. How many different ways can the two jobs be filled?",
    stemZh: "Ana、Ben、Cy、Dee 和 Eli 五个朋友要从他们当中选出一名班长和一名副班长，一个人不能同时担任两个职务。这两个职务一共有多少种不同的选法？",
    choices: ["5", "9", "10", "20"], answer: 3,
    explanationEn: String.raw`Any of the 5 friends can be president, and then any of the other 4 can be vice president, so there are \(5\times4=20\) ways. The choice 10 counts only pairs of people and ignores that Ana as president with Ben as vice president differs from Ben as president with Ana as vice president. The choice 9 adds \(5+4\) instead of multiplying, and 5 counts the choices for just one job.`,
    explanationZh: String.raw`班长可以是 5 个人中的任何一个，然后副班长可以是其余 4 人中的任何一个，所以共有 \(5\times4=20\) 种选法。选 10 只数了“两个人的组合”，没有考虑“Ana 当班长、Ben 当副班长”和“Ben 当班长、Ana 当副班长”是不同的选法；选 9 是把 \(5+4\) 相加而不是相乘；5 只是一个职务的选法数。`
  },
  {
    id: "qr-wp-m04", level: "middle", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["integers-order-operations"],
    stem: "At 6 p.m. the temperature was 4°C. Over the next 5 hours, it fell 3°C each hour. Over the 2 hours after that, it rose 4°C each hour. What was the temperature, in °C, at the end of those 7 hours?",
    stemZh: "下午 6 点的气温是 4°C。接下来的 5 个小时里，气温每小时下降 3°C。再往后的 2 个小时里，气温每小时上升 4°C。这 7 个小时结束时的气温是多少 °C？",
    choices: ["−3", "3", "11", "27"], answer: 0,
    explanationEn: String.raw`The temperature changes by \(5\times(-3)=-15\) degrees in the first 5 hours and by \(2\times4=+8\) degrees in the next 2 hours, so it ends at \(4-15+8=-3\). Dropping the negative sign gives 3, reversing the direction of both changes gives \(4+15-8=11\), and adding every number gives 27.`,
    explanationZh: String.raw`前 5 个小时共变化 \(5\times(-3)=-15\) 度，后 2 个小时共变化 \(2\times4=+8\) 度，所以最后的气温是 \(4-15+8=-3\)（°C）。选 3 是丢掉了负号；选 11 是把两次变化的方向都弄反了（\(4+15-8=11\)）；选 27 是把所有的数都加了起来。`
  },
  {
    id: "qr-wp-m05", level: "middle", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["patterns-sequences-functions", "graphs-tables"],
    stem: "A number machine follows the same rule every time: it multiplies the input by a number and then adds a number. The table shows three inputs and their outputs. What is the output when the input is 10?",
    stemZh: "一台“数字机器”每次都按同一个规则工作：先把输入的数乘以某个数，再加上某个数。下表给出了三个输入及其对应的输出。当输入是 10 时，输出是多少？",
    figure: {
      kind: "table", headers: ["Input", "Output"], rows: [["3", "11"], ["5", "17"], ["8", "26"]],
      altEn: "A table of number machine inputs and outputs: input 3 gives output 11, input 5 gives output 17, and input 8 gives output 26.",
      altZh: "数字机器的输入与输出表：输入 3 得到输出 11，输入 5 得到输出 17，输入 8 得到输出 26。"
    },
    choices: ["28", "30", "32", "36"], answer: 2,
    explanationEn: String.raw`When the input goes up by 2 (from 3 to 5), the output goes up by 6 (from 11 to 17), so the machine multiplies by 3; since \(3\times3=9\) and the output is 11, it then adds 2. Check with 8: \(3\times8+2=26\). For an input of 10 the output is \(3\times10+2=32\). The choice 30 forgets to add 2, and 28 adds only the change in the input (2) to the last output.`,
    explanationZh: String.raw`输入增加 2（从 3 到 5）时，输出增加 6（从 11 到 17），所以机器先乘以 3；又因为 \(3\times3=9\)，而输出是 11，所以再加 2。用 8 验算：\(3\times8+2=26\)。输入 10 时，输出为 \(3\times10+2=32\)。选 30 是忘了加 2；选 28 是只把输入的增加量 2 加到了上一个输出上。`
  },
  {
    id: "qr-wp-m06", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["factors-multiples-primes", "word-problem-reasoning"],
    stem: "Kai is thinking of a whole number greater than 0. The number can be divided evenly by 4 and also by 6. Which of the following numbers must also divide Kai’s number evenly?",
    stemZh: "Kai 想了一个大于 0 的整数。这个数既能被 4 整除，也能被 6 整除。下面哪个数一定也能整除 Kai 的数？",
    choices: ["8", "10", "12", "24"], answer: 2,
    explanationEn: "A number that is divisible by both 4 and 6 is a multiple of their least common multiple, 12, so 12 must divide it. The other choices can fail: the number 12 itself is divisible by 4 and by 6, but not by 8, 10 or 24.",
    explanationZh: "既能被 4 整除又能被 6 整除的数，一定是它们最小公倍数 12 的倍数，所以 12 一定能整除它。其他选项不一定成立：数 12 本身能被 4 和 6 整除，却不能被 8、10 或 24 整除。"
  },
  {
    id: "qr-wp-m07", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["pythagorean-similarity", "coordinate-transformations"],
    stem: "On the coordinate grid, point A is at (1, 1) and point B is at (7, 9). Each square of the grid is 1 unit by 1 unit. What is the distance from A to B?",
    stemZh: "在坐标方格图上，点 A 的坐标是 (1, 1)，点 B 的坐标是 (7, 9)，每个小方格的边长为 1 个单位。A、B 两点之间的距离是多少？",
    figure: {
      kind: "svg",
      altEn: "A coordinate grid with x from 0 to 8 and y from 0 to 10. Point A is at (1, 1) and point B is at (7, 9), joined by a line segment.",
      altZh: "坐标方格图，x 轴从 0 到 8，y 轴从 0 到 10。点 A 在 (1, 1)，点 B 在 (7, 9)，两点用线段相连。",
      svg: `<svg viewBox="0 0 250 276"><path d="M58,250V30M80,250V30M102,250V30M124,250V30M146,250V30M168,250V30M190,250V30M212,250V30M36,228H212M36,206H212M36,184H212M36,162H212M36,140H212M36,118H212M36,96H212M36,74H212M36,52H212M36,30H212" fill="none" stroke="currentColor" stroke-opacity="0.22"/><path d="M36,30V250H212" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="266" text-anchor="middle" fill="currentColor" font-size="12">0</text><text x="58" y="266" text-anchor="middle" fill="currentColor" font-size="12">1</text><text x="80" y="266" text-anchor="middle" fill="currentColor" font-size="12">2</text><text x="102" y="266" text-anchor="middle" fill="currentColor" font-size="12">3</text><text x="124" y="266" text-anchor="middle" fill="currentColor" font-size="12">4</text><text x="146" y="266" text-anchor="middle" fill="currentColor" font-size="12">5</text><text x="168" y="266" text-anchor="middle" fill="currentColor" font-size="12">6</text><text x="190" y="266" text-anchor="middle" fill="currentColor" font-size="12">7</text><text x="212" y="266" text-anchor="middle" fill="currentColor" font-size="12">8</text><text x="27" y="232" text-anchor="end" fill="currentColor" font-size="12">1</text><text x="27" y="210" text-anchor="end" fill="currentColor" font-size="12">2</text><text x="27" y="188" text-anchor="end" fill="currentColor" font-size="12">3</text><text x="27" y="166" text-anchor="end" fill="currentColor" font-size="12">4</text><text x="27" y="144" text-anchor="end" fill="currentColor" font-size="12">5</text><text x="27" y="122" text-anchor="end" fill="currentColor" font-size="12">6</text><text x="27" y="100" text-anchor="end" fill="currentColor" font-size="12">7</text><text x="27" y="78" text-anchor="end" fill="currentColor" font-size="12">8</text><text x="27" y="56" text-anchor="end" fill="currentColor" font-size="12">9</text><text x="27" y="34" text-anchor="end" fill="currentColor" font-size="12">10</text><text x="224" y="255" fill="currentColor" font-size="14">x</text><text x="36" y="22" text-anchor="middle" fill="currentColor" font-size="14">y</text><line x1="58" y1="228" x2="190" y2="52" stroke="currentColor" stroke-width="2"/><circle cx="58" cy="228" r="4" fill="currentColor"/><circle cx="190" cy="52" r="4" fill="currentColor"/><text x="65" y="244" fill="currentColor" font-size="14">A</text><text x="198" y="56" fill="currentColor" font-size="14">B</text></svg>`
    },
    choices: ["7", "8", "10", "14"], answer: 2,
    explanationEn: String.raw`From A to B the path goes 6 units right and 8 units up. These are the legs of a right triangle and AB is its hypotenuse: \(6^2+8^2=36+64=100\), so \(AB=\sqrt{100}=10\). The choice 14 adds the two legs, as if walking along the grid lines, 8 is only the vertical leg, and 7 is the average of the two legs.`,
    explanationZh: String.raw`从 A 到 B，向右走 6 个单位、向上走 8 个单位。这两段距离是一个直角三角形的两条直角边，AB 是斜边：\(6^2+8^2=36+64=100\)，所以 \(AB=\sqrt{100}=10\)。选 14 是把两条直角边相加（相当于沿着格线走）；8 只是竖直方向的那条直角边；7 是两条直角边的平均数。`
  },
  {
    id: "qr-wp-m08", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["inequalities-absolute-value", "word-problem-reasoning"],
    stem: "Lena has $60. A round-trip bus ride to the museum costs $9, and each museum ticket costs $7. What is the greatest number of tickets Lena can buy and still pay for the bus ride?",
    stemZh: "Lena 有 $60。去博物馆的往返公交车费共 $9，每张博物馆门票 $7。在付完公交车费的前提下，Lena 最多能买几张门票？",
    choices: ["6", "7", "8", "9"], answer: 1,
    explanationEn: String.raw`After paying $9 for the bus, Lena has \(60-9=51\) dollars left, so for \(n\) tickets she needs \(7n\le51\). Since \(7\times7=49\) fits but \(7\times8=56\) does not, the greatest number is 7. Ignoring the bus fare gives \(60\div7\approx8.6\), so 8; using \(60+9\) instead of \(60-9\) gives 9; and 6 charges the round-trip fare twice.`,
    explanationZh: String.raw`付完 $9 的车费后，Lena 还剩 \(60-9=51\) 美元，买 \(n\) 张票需要满足 \(7n\le51\)。因为 \(7\times7=49\) 够用，而 \(7\times8=56\) 不够，所以最多买 7 张。忽略车费算 \(60\div7\approx8.6\)，会得到 8；把 \(60+9\) 当成可用的钱会得到 9；而 6 是把往返车费算了两遍。`
  },
  {
    id: "qr-wp-m09", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["exponents-roots", "estimation-number-sense"],
    stem: "A square garden has an area of 40 square meters. The length of one side of the garden is between which two consecutive whole numbers of meters?",
    stemZh: "一个正方形花园的面积是 40 平方米。这个花园一条边的长度（单位：米）介于哪两个相邻的整数之间？",
    choices: ["5 and 6", "6 and 7", "7 and 8", "19 and 20"], answer: 1,
    explanationEn: String.raw`The side length is \(\sqrt{40}\). Since \(6^2=36\) and \(7^2=49\) and 40 lies between 36 and 49, \(\sqrt{40}\) is between 6 and 7. A side between 7 and 8 would give an area between 49 and 64, and a side between 5 and 6 an area between 25 and 36. The choice 19 and 20 comes from dividing 40 by 2, which does not find a square’s side.`,
    explanationZh: String.raw`边长是 \(\sqrt{40}\)。因为 \(6^2=36\)，\(7^2=49\)，而 40 介于 36 和 49 之间，所以 \(\sqrt{40}\) 介于 6 和 7 之间。边长在 7 和 8 之间时面积应在 49 到 64 之间，边长在 5 和 6 之间时面积应在 25 到 36 之间。选 19 和 20 是把 40 除以 2 了，这并不能求出正方形的边长。`
  },
  {
    id: "qr-wp-m10", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["angles-lines-triangles", "ratios-percents"],
    stem: "The measures of the three angles of a triangle are in the ratio 2 : 3 : 4. What is the measure, in degrees, of the largest angle?",
    stemZh: "一个三角形的三个内角的度数之比是 2 : 3 : 4。最大的角是多少度？",
    choices: ["20", "40", "60", "80"], answer: 3,
    explanationEn: String.raw`The angles of a triangle add up to \(180^\circ\), and the ratio has \(2+3+4=9\) equal parts, so each part is \(180\div9=20^\circ\). The largest angle has 4 parts, so it measures \(4\times20=80^\circ\). The choice 20 is the size of one part, 40 is the smallest angle, and 60 is the middle angle.`,
    explanationZh: String.raw`三角形的内角和是 \(180^\circ\)，比 2 : 3 : 4 共有 \(2+3+4=9\) 份，每份是 \(180\div9=20^\circ\)。最大的角占 4 份，所以是 \(4\times20=80^\circ\)。20 是一份的度数；40 是最小的角；60 是中间的角。`
  },
  {
    id: "qr-wp-m11", level: "middle", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["mean-median-mode", "expressions-equations"],
    stem: "The mean of four numbers is 15. A fifth number is added, and the mean of all five numbers becomes 17. What is the fifth number?",
    stemZh: "四个数的平均数是 15。再加入第五个数后，这五个数的平均数变成了 17。第五个数是多少？",
    choices: ["2", "17", "25", "32"], answer: 2,
    explanationEn: String.raw`Four numbers with a mean of 15 add up to \(4\times15=60\), and five numbers with a mean of 17 add up to \(5\times17=85\). So the fifth number is \(85-60=25\). The choice 17 is the new mean, 2 is how much the mean went up, and 32 is \(15+17\).`,
    explanationZh: String.raw`四个数的平均数是 15，总和是 \(4\times15=60\)；五个数的平均数是 17，总和是 \(5\times17=85\)。所以第五个数是 \(85-60=25\)。17 是新的平均数；2 是平均数增加的量；32 是 \(15+17\)。`
  },
  {
    id: "qr-wp-m12", level: "middle", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["linear-quadratic", "expressions-equations"],
    stem: "Gym A charges a $60 joining fee plus $10 each month. Gym B has no joining fee and charges $20 each month. After how many months will the total amount paid at the two gyms be the same?",
    stemZh: "A 健身房收取 $60 的入会费，另外每月收费 $10。B 健身房不收入会费，每月收费 $20。经过多少个月后，在两家健身房累计付的总费用相同？",
    choices: ["2", "3", "4", "6"], answer: 3,
    explanationEn: String.raw`After \(m\) months, Gym A costs \(60+10m\) dollars and Gym B costs \(20m\) dollars. Setting them equal gives \(60+10m=20m\), so \(m=6\) (check: \(60+10\times6=120\) and \(20\times6=120\)). Each month Gym B costs $10 more than Gym A, so it takes \(60\div10=6\) months to make up the joining fee. Using \(60\div20=3\) forgets that Gym A also charges every month.`,
    explanationZh: String.raw`\(m\) 个月后，A 健身房共花 \(60+10m\) 美元，B 健身房共花 \(20m\) 美元。令两者相等：\(60+10m=20m\)，所以 \(m=6\)（验算：\(60+10\times6=120\)，\(20\times6=120\)）。每个月 B 比 A 多花 $10，所以要用 \(60\div10=6\) 个月才能抵消入会费。如果算 \(60\div20=3\)，就忘了 A 健身房每月也要收费。`
  },
  {
    id: "qr-wp-m13", level: "middle", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["ratios-percents", "word-problem-reasoning"],
    stem: String.raw`The price of a bicycle is increased by \(20\%\). A week later, the new price is decreased by \(20\%\). How does the final price compare with the original price?`,
    stemZh: String.raw`一辆自行车的价格先上涨了 \(20\%\)。一周后，在新价格的基础上又下降了 \(20\%\)。最终价格与原价相比如何？`,
    choices: ["The same as the original price", String.raw`\(4\%\) higher than the original price`, String.raw`\(20\%\) lower than the original price`, String.raw`\(4\%\) lower than the original price`], answer: 3,
    explanationEn: String.raw`Try an easy starting price, $100. A \(20\%\) increase makes it $120, and the \(20\%\) decrease is taken from $120, not from $100: \(0.20\times120=24\), so the final price is \(120-24=96\). That is $4 less than $100, or \(4\%\) lower. The decrease works on a larger number than the increase did, so the two changes do not cancel, and the same result holds for any starting price.`,
    explanationZh: String.raw`取一个好算的原价 $100。上涨 \(20\%\) 后是 $120。下降的 \(20\%\) 是按 $120 而不是 $100 来算的：\(0.20\times120=24\)，所以最终价格是 \(120-24=96\)，比 $100 少 $4，即降低了 \(4\%\)。下降的百分数是以更大的数为基准的，所以两次变化不能相互抵消；无论原价是多少，结果都一样。`
  },
  {
    id: "qr-wp-m14", level: "middle", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["units-rates-time", "word-problem-reasoning"],
    stem: "A car travels 60 miles at an average speed of 30 miles per hour. It then travels another 60 miles at an average speed of 60 miles per hour. What is the car’s average speed for the whole 120-mile trip, in miles per hour?",
    stemZh: "一辆汽车先以平均每小时 30 英里的速度行驶了 60 英里，然后又以平均每小时 60 英里的速度行驶了 60 英里。在整个 120 英里的行程中，汽车的平均速度是每小时多少英里？",
    choices: ["30", "40", "45", "90"], answer: 1,
    explanationEn: String.raw`Average speed is the total distance divided by the total time. The first 60 miles take \(60\div30=2\) hours and the second 60 miles take \(60\div60=1\) hour, so the 120 miles take 3 hours and the average is \(120\div3=40\) miles per hour. The car spends more time at the slower speed, so the average is closer to 30 than to 60. The choice 45 simply averages the two speeds, as if the car spent equal time at each, and 90 adds them.`,
    explanationZh: String.raw`平均速度等于总路程除以总时间。前 60 英里用时 \(60\div30=2\) 小时，后 60 英里用时 \(60\div60=1\) 小时，120 英里共用 3 小时，所以平均速度是 \(120\div3=40\) 英里/小时。汽车在较慢的速度上花的时间更长，所以平均速度更接近 30 而不是 60。选 45 是把两个速度直接取平均，相当于两段用时相同；选 90 是把两个速度相加。`
  },
  {
    id: "qr-wp-m15", level: "middle", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["volume-surface-area", "units-rates-time"],
    stem: "A rectangular tank has a base that measures 40 centimeters by 25 centimeters. The tank contains 15 liters of water. (1 liter = 1,000 cubic centimeters.) How deep is the water in the tank, in centimeters?",
    stemZh: "一个长方体水箱的底面长 40 厘米、宽 25 厘米。水箱里有 15 升水。（1 升 = 1000 立方厘米。）水箱里的水有多深（单位：厘米）？",
    choices: ["15", "150", "375", "600"], answer: 0,
    explanationEn: String.raw`Change liters to cubic centimeters first: \(15\times1000=15000\) cubic centimeters of water. The base has an area of \(40\times25=1000\) square centimeters, and volume equals base area times depth, so the depth is \(15000\div1000=15\) centimeters. Dividing by only one side of the base gives 375 or 600, and using 10,000 cubic centimeters per liter gives 150.`,
    explanationZh: String.raw`先把升换算成立方厘米：\(15\times1000=15000\) 立方厘米。底面积是 \(40\times25=1000\) 平方厘米，体积等于底面积乘以深度，所以深度是 \(15000\div1000=15\) 厘米。只除以底面的一条边会得到 375 或 600；把 1 升当成 10000 立方厘米则会得到 150。`
  },
  // ---------------------------------------------------------------- Upper Level
  {
    id: "qr-wp-u01", level: "upper", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["exponents-roots", "units-rates-time", "estimation-number-sense"],
    stem: String.raw`The Sun is about \(1.5\times10^{8}\) kilometers from Earth. Light travels about \(3\times10^{5}\) kilometers each second. Using these values, about how many seconds does it take sunlight to reach Earth?`,
    stemZh: String.raw`太阳距离地球约 \(1.5\times10^{8}\) 千米，光每秒大约传播 \(3\times10^{5}\) 千米。根据这些数据，阳光到达地球大约需要多少秒？`,
    choices: ["5", "50", "500", "5,000"], answer: 2,
    explanationEn: String.raw`Time equals distance divided by speed: \(\frac{1.5\times10^{8}}{3\times10^{5}}\). Divide the front numbers, \(1.5\div3=0.5\), and subtract the exponents, \(10^{8}\div10^{5}=10^{3}\), so the time is \(0.5\times10^{3}=500\) seconds. The other choices come from slips with the powers of 10.`,
    explanationZh: String.raw`时间等于距离除以速度：\(\frac{1.5\times10^{8}}{3\times10^{5}}\)。前面的数相除，\(1.5\div3=0.5\)；指数相减，\(10^{8}\div10^{5}=10^{3}\)，所以时间是 \(0.5\times10^{3}=500\) 秒。其他选项都是处理 10 的幂时出错的结果。`
  },
  {
    id: "qr-wp-u02", level: "upper", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["graphs-tables"],
    stem: "The line graph shows how many customers were in Shop A and in Shop B at five different times one afternoon. At how many of these times did Shop B have more customers than Shop A?",
    stemZh: "折线图显示了某天下午五个不同时刻 Shop A 和 Shop B 店内的顾客人数。在这五个时刻中，有几个时刻 Shop B 的顾客人数比 Shop A 多？",
    figure: {
      kind: "line", titleEn: "Customers in each shop", labels: ["1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.", "5 p.m."],
      series: [{ nameEn: "Shop A", values: [20, 30, 25, 25, 35] }, { nameEn: "Shop B", values: [30, 25, 25, 30, 45] }],
      xLabelEn: "Time", yLabelEn: "Customers",
      altEn: "A line graph with two lines showing the number of customers in each shop. Shop A: 20 at 1 p.m., 30 at 2 p.m., 25 at 3 p.m., 25 at 4 p.m., 35 at 5 p.m. Shop B: 30 at 1 p.m., 25 at 2 p.m., 25 at 3 p.m., 30 at 4 p.m., 45 at 5 p.m.",
      altZh: "折线图，两条线分别表示两家店内的顾客人数。Shop A：下午 1 点 20，2 点 30，3 点 25，4 点 25，5 点 35。Shop B：下午 1 点 30，2 点 25，3 点 25，4 点 30，5 点 45。"
    },
    choices: ["1", "2", "3", "4"], answer: 2,
    explanationEn: "Compare the two lines at each time. Shop B is higher at 1 p.m. (30 and 20), 4 p.m. (30 and 25) and 5 p.m. (45 and 35), which is 3 times. At 2 p.m. Shop A is higher, and at 3 p.m. the two shops are tied at 25, so the tie does not count as “more.” Choosing 4 counts the tie.",
    explanationZh: "逐个时刻比较两条线。Shop B 在下午 1 点（30 对 20）、4 点（30 对 25）和 5 点（45 对 35）更高，共 3 次。2 点时 Shop A 更高；3 点时两家店都是 25，打成平手，不能算“更多”。选 4 就是把平手也算进去了。"
  },
  {
    id: "qr-wp-u03", level: "upper", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["inequalities-absolute-value"],
    stem: "A machine fills bottles with juice. A bottle passes inspection only if its volume is within 6 milliliters of 500 milliliters. Which of the following bottle volumes does NOT pass inspection?",
    stemZh: "一台机器给瓶子灌装果汁。只有当一瓶果汁的体积与 500 毫升相差不超过 6 毫升时，这瓶才算检验合格。下面哪一个体积不合格？",
    choices: ["493 mL", "497 mL", "502 mL", "505 mL"], answer: 0,
    explanationEn: String.raw`“Within 6 milliliters of 500” means the volume is at most 6 mL away from 500, so \(|v-500|\le6\), or \(494\le v\le506\). The volumes 497, 502 and 505 are all in that range. The volume 493 is \(500-493=7\) mL below 500, which is more than 6, so it does not pass.`,
    explanationZh: String.raw`“与 500 毫升相差不超过 6 毫升”表示体积与 500 的距离至多是 6，即 \(|v-500|\le6\)，也就是 \(494\le v\le506\)。497、502 和 505 都在这个范围内。493 比 500 少了 \(500-493=7\) 毫升，超过了 6，所以不合格。`
  },
  {
    id: "qr-wp-u04", level: "upper", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["volume-surface-area", "exponents-roots"],
    stem: "A cube has a total surface area of 96 square centimeters. What is the volume of the cube, in cubic centimeters?",
    stemZh: "一个立方体的表面积是 96 平方厘米。这个立方体的体积是多少立方厘米？",
    choices: ["4", "16", "64", "96"], answer: 2,
    explanationEn: String.raw`A cube has 6 identical square faces, so each face has an area of \(96\div6=16\) square centimeters. Then each edge is \(\sqrt{16}=4\) centimeters, and the volume is \(4^3=4\times4\times4=64\) cubic centimeters. The choice 16 is the area of one face, 4 is the length of one edge, and 96 is the surface area itself.`,
    explanationZh: String.raw`立方体有 6 个相同的正方形面，所以每个面的面积是 \(96\div6=16\) 平方厘米，棱长是 \(\sqrt{16}=4\) 厘米，体积是 \(4^3=4\times4\times4=64\) 立方厘米。16 是一个面的面积；4 是棱长；96 是题目给出的表面积本身。`
  },
  {
    id: "qr-wp-u05", level: "upper", section: "quantitative", type: "word-problem", difficulty: "easy",
    conceptIds: ["mean-median-mode", "graphs-tables"],
    stem: "The table shows the number of pages that each of 10 students read last night. What is the mean number of pages read per student?",
    stemZh: "下表显示了 10 名学生昨晚各自阅读的页数。平均每名学生读了多少页？",
    figure: {
      kind: "table", headers: ["Pages read", "Number of students"], rows: [["20", "2"], ["30", "3"], ["40", "4"], ["50", "1"]],
      altEn: "A table of pages read and the number of students: 20 pages for 2 students, 30 pages for 3 students, 40 pages for 4 students, and 50 pages for 1 student.",
      altZh: "表格：读 20 页的有 2 名学生，读 30 页的有 3 名，读 40 页的有 4 名，读 50 页的有 1 名。"
    },
    choices: ["34", "35", "40", "85"], answer: 0,
    explanationEn: String.raw`Multiply each number of pages by the number of students and add: \(20\times2+30\times3+40\times4+50\times1=40+90+160+50=340\) pages. Dividing by the 10 students gives \(340\div10=34\). The choice 35 averages the four page counts 20, 30, 40 and 50 as if each were equally common (it is also the median), 40 is the most common value, and 85 divides 340 by the 4 rows instead of the 10 students.`,
    explanationZh: String.raw`先把每个页数乘以对应的学生人数再相加：\(20\times2+30\times3+40\times4+50\times1=40+90+160+50=340\) 页，再除以 10 名学生：\(340\div10=34\)。选 35 是把 20、30、40、50 四个页数直接取平均，好像每个页数的学生一样多（35 也恰好是中位数）；40 是出现次数最多的数（众数）；85 是用 340 除以了表格的行数 4，而不是学生人数 10。`
  },
  {
    id: "qr-wp-u06", level: "upper", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["polygons-circles", "perimeter-area"],
    stem: "A circular pool that is 3 meters deep has a radius of 10 meters. A walkway 2 meters wide goes all the way around the pool, so the walkway and the pool together form a larger circle. What is the area of the walkway, in square meters?",
    stemZh: "一个深 3 米的圆形游泳池，半径是 10 米。泳池外围有一条 2 米宽的步道，紧紧环绕着泳池，所以步道和泳池合起来构成一个更大的圆。步道的面积是多少平方米？",
    choices: [String.raw`\(4\pi\)`, String.raw`\(24\pi\)`, String.raw`\(44\pi\)`, String.raw`\(144\pi\)`], answer: 2,
    explanationEn: String.raw`The pool and walkway together form a circle with radius \(10+2=12\) meters, so the walkway’s area is the big circle minus the pool: \(\pi\times12^2-\pi\times10^2=144\pi-100\pi=44\pi\) square meters (the pool’s depth is not needed). The choice \(4\pi\) is the area of a circle with radius 2 (the walkway’s width), \(24\pi\) is the circumference of the big circle, and \(144\pi\) is the area of the big circle alone.`,
    explanationZh: String.raw`泳池和步道合起来是半径为 \(10+2=12\) 米的大圆，所以步道的面积等于大圆面积减去泳池面积：\(\pi\times12^2-\pi\times10^2=144\pi-100\pi=44\pi\) 平方米（泳池的深度用不到）。\(4\pi\) 是半径为 2（步道宽度）的圆的面积；\(24\pi\) 是大圆的周长；\(144\pi\) 只是大圆的面积。`
  },
  {
    id: "qr-wp-u07", level: "upper", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["probability-counting"],
    stem: "A student club has 6 members. In how many different ways can a committee of 3 members be chosen from the club?",
    stemZh: "一个学生社团有 6 名成员。从中选出 3 名成员组成一个委员会，有多少种不同的选法？",
    choices: ["18", "20", "120", "216"], answer: 1,
    explanationEn: String.raw`Order does not matter in a committee. Picking three members one after another gives \(6\times5\times4=120\) ordered lists, but every group of 3 people appears \(3\times2\times1=6\) times (once for each order), so there are \(120\div6=20\) committees. The choice 120 forgets to remove the repeats, 216 is \(6\times6\times6\) (allowing the same person to be picked again), and 18 is \(6\times3\).`,
    explanationZh: String.raw`委员会不分先后顺序。依次选 3 个人有 \(6\times5\times4=120\) 种排列，但同一组 3 个人会被重复数 \(3\times2\times1=6\) 次（每种顺序一次），所以委员会共有 \(120\div6=20\) 种。选 120 是没有去掉重复；216 是 \(6\times6\times6\)（允许同一个人被重复选中）；18 是 \(6\times3\)。`
  },
  {
    id: "qr-wp-u08", level: "upper", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["linear-quadratic", "expressions-equations"],
    stem: String.raw`The sum of two positive numbers, \(x\) and \(y\), is 10. The difference of their squares, \(x^2-y^2\), is 40. What is the value of \(x-y\)?`,
    stemZh: String.raw`两个正数 \(x\) 和 \(y\) 的和是 10，它们的平方差 \(x^2-y^2\) 是 40。\(x-y\) 的值是多少？`,
    choices: ["4", "30", "50", "400"], answer: 0,
    explanationEn: String.raw`Factor the difference of squares: \(x^2-y^2=(x+y)(x-y)\). Substituting the given values, \(40=10\times(x-y)\), so \(x-y=4\) (for example, \(x=7\) and \(y=3\) work, since \(7+3=10\) and \(49-9=40\)). The choices 30 and 50 come from subtracting or adding 40 and 10, and 400 from multiplying them.`,
    explanationZh: String.raw`先对平方差因式分解：\(x^2-y^2=(x+y)(x-y)\)。代入已知条件得 \(40=10\times(x-y)\)，所以 \(x-y=4\)（例如 \(x=7\)，\(y=3\)：\(7+3=10\)，\(49-9=40\)）。选 30 和 50 是把 40 与 10 相减或相加；选 400 是把它们相乘。`
  },
  {
    id: "qr-wp-u09", level: "upper", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["pythagorean-similarity", "ratios-percents"],
    stem: "On a map, 1 centimeter represents 5 kilometers. A lake appears on the map with an area of 4 square centimeters. What is the actual area of the lake, in square kilometers?",
    stemZh: "在一张地图上，1 厘米代表 5 千米。地图上一个湖的面积是 4 平方厘米。这个湖的实际面积是多少平方千米？",
    choices: ["4", "20", "25", "100"], answer: 3,
    explanationEn: String.raw`Every length on the map is 5 times as long in real life, so every area is \(5\times5=25\) times as large. The lake’s actual area is \(4\times25=100\) square kilometers. Multiplying by only 5 (giving 20) uses the scale for lengths, not areas; 25 is what a single square centimeter of the map stands for; and 4 is the area on the map itself.`,
    explanationZh: String.raw`地图上的每一段长度在实际中都放大 5 倍，所以面积放大 \(5\times5=25\) 倍。湖的实际面积是 \(4\times25=100\) 平方千米。只乘 5（得 20）用的是长度的比例，而不是面积的比例；25 只是地图上 1 平方厘米所代表的实际面积；4 是地图上的面积本身。`
  },
  {
    id: "qr-wp-u10", level: "upper", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["linear-quadratic", "perimeter-area"],
    stem: "A rectangular garden has a perimeter of 28 meters and an area of 48 square meters. What is the length of its longer side, in meters?",
    stemZh: "一个长方形花园的周长是 28 米，面积是 48 平方米。它较长的边有多长（单位：米）？",
    choices: ["4", "6", "7", "8"], answer: 3,
    explanationEn: String.raw`The length and width add up to half the perimeter: \(L+W=14\). Two numbers with a sum of 14 and a product of 48 are 6 and 8, because \(6+8=14\) and \(6\times8=48\), so the longer side is 8 meters (algebra check: \(x(14-x)=48\) gives \(x^2-14x+48=0\), which factors as \((x-6)(x-8)=0\)). The choice 6 is the shorter side, and 7 is half of 14, which would make a square with area 49, not 48.`,
    explanationZh: String.raw`长与宽的和是周长的一半：\(L+W=14\)。和为 14、积为 48 的两个数是 6 和 8，因为 \(6+8=14\)，\(6\times8=48\)，所以较长的边是 8 米（代数验证：\(x(14-x)=48\) 化为 \(x^2-14x+48=0\)，分解为 \((x-6)(x-8)=0\)）。选 6 是较短的边；7 是 14 的一半，那样花园会是面积 49 的正方形，而不是 48。`
  },
  {
    id: "qr-wp-u11", level: "upper", section: "quantitative", type: "word-problem", difficulty: "medium",
    conceptIds: ["polygons-circles", "angles-lines-triangles"],
    stem: String.raw`Each interior angle of a regular polygon measures \(135^\circ\). How many sides does the polygon have?`,
    stemZh: String.raw`一个正多边形的每个内角都是 \(135^\circ\)。这个多边形有几条边？`,
    choices: ["6", "8", "10", "12"], answer: 1,
    explanationEn: String.raw`Each exterior angle is \(180^\circ-135^\circ=45^\circ\), and the exterior angles of any polygon add up to \(360^\circ\), so the polygon has \(360\div45=8\) sides. Checking the other choices: a regular hexagon has \(120^\circ\) angles, a regular decagon (10 sides) has \(144^\circ\), and a regular 12-sided polygon has \(150^\circ\).`,
    explanationZh: String.raw`每个外角是 \(180^\circ-135^\circ=45^\circ\)，任何多边形的外角和都是 \(360^\circ\)，所以边数是 \(360\div45=8\)。再看其他选项：正六边形的内角是 \(120^\circ\)，正十边形的内角是 \(144^\circ\)，正十二边形的内角是 \(150^\circ\)。`
  },
  {
    id: "qr-wp-u12", level: "upper", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["coordinate-transformations", "perimeter-area"],
    stem: "In the coordinate plane, triangle ABC has vertices A(1, 1), B(9, 1), and C(4, 7). What is the area of the triangle, in square units?",
    stemZh: "在坐标平面中，三角形 ABC 的顶点为 A(1, 1)、B(9, 1) 和 C(4, 7)。这个三角形的面积是多少平方单位？",
    figure: {
      kind: "svg",
      altEn: "A coordinate grid with x from 0 to 10 and y from 0 to 8, showing triangle ABC with A at (1, 1), B at (9, 1) and C at (4, 7).",
      altZh: "坐标方格图，x 轴从 0 到 10，y 轴从 0 到 8，图中是三角形 ABC，A 在 (1, 1)，B 在 (9, 1)，C 在 (4, 7)。",
      svg: `<svg viewBox="0 0 320 256"><path d="M62,232V24M88,232V24M114,232V24M140,232V24M166,232V24M192,232V24M218,232V24M244,232V24M270,232V24M296,232V24M36,206H296M36,180H296M36,154H296M36,128H296M36,102H296M36,76H296M36,50H296M36,24H296" fill="none" stroke="currentColor" stroke-opacity="0.22"/><path d="M36,24V232H296" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="248" text-anchor="middle" fill="currentColor" font-size="12">0</text><text x="62" y="248" text-anchor="middle" fill="currentColor" font-size="12">1</text><text x="88" y="248" text-anchor="middle" fill="currentColor" font-size="12">2</text><text x="114" y="248" text-anchor="middle" fill="currentColor" font-size="12">3</text><text x="140" y="248" text-anchor="middle" fill="currentColor" font-size="12">4</text><text x="166" y="248" text-anchor="middle" fill="currentColor" font-size="12">5</text><text x="192" y="248" text-anchor="middle" fill="currentColor" font-size="12">6</text><text x="218" y="248" text-anchor="middle" fill="currentColor" font-size="12">7</text><text x="244" y="248" text-anchor="middle" fill="currentColor" font-size="12">8</text><text x="270" y="248" text-anchor="middle" fill="currentColor" font-size="12">9</text><text x="296" y="248" text-anchor="middle" fill="currentColor" font-size="12">10</text><text x="27" y="210" text-anchor="end" fill="currentColor" font-size="12">1</text><text x="27" y="184" text-anchor="end" fill="currentColor" font-size="12">2</text><text x="27" y="158" text-anchor="end" fill="currentColor" font-size="12">3</text><text x="27" y="132" text-anchor="end" fill="currentColor" font-size="12">4</text><text x="27" y="106" text-anchor="end" fill="currentColor" font-size="12">5</text><text x="27" y="80" text-anchor="end" fill="currentColor" font-size="12">6</text><text x="27" y="54" text-anchor="end" fill="currentColor" font-size="12">7</text><text x="27" y="28" text-anchor="end" fill="currentColor" font-size="12">8</text><text x="308" y="237" fill="currentColor" font-size="14">x</text><text x="36" y="16" text-anchor="middle" fill="currentColor" font-size="14">y</text><polygon points="62,206 270,206 140,50" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><text x="46" y="224" fill="currentColor" font-size="14">A</text><text x="276" y="224" fill="currentColor" font-size="14">B</text><text x="136" y="42" fill="currentColor" font-size="14">C</text></svg>`
    },
    choices: ["24", "28", "48", "56"], answer: 0,
    explanationEn: String.raw`Side AB lies on the horizontal line \(y=1\), so its length is \(9-1=8\). The height is the vertical distance from C to that line, \(7-1=6\), wherever C sits horizontally, so the area is \(\frac{1}{2}\times8\times6=24\). The choice 28 uses 7 as the height instead of 6, 48 forgets the factor \(\frac{1}{2}\), and 56 makes both mistakes.`,
    explanationZh: String.raw`边 AB 在水平线 \(y=1\) 上，长度是 \(9-1=8\)。高是点 C 到这条直线的竖直距离 \(7-1=6\)，与 C 的横坐标无关，所以面积是 \(\frac{1}{2}\times8\times6=24\)。选 28 是把高当成了 7 而不是 6；选 48 是漏乘了 \(\frac{1}{2}\)；选 56 则两个错误都犯了。`
  },
  {
    id: "qr-wp-u13", level: "upper", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["ratios-percents", "expressions-equations"],
    stem: String.raw`A tank holds 20 liters of a drink that is \(40\%\) juice and the rest water. How many liters of plain water must be added to make a drink that is \(25\%\) juice?`,
    stemZh: String.raw`一个容器里有 20 升饮料，其中 \(40\%\) 是果汁，其余是水。需要再加入多少升纯水，才能使饮料中果汁的含量变为 \(25\%\)？`,
    choices: ["8", "12", "15", "32"], answer: 1,
    explanationEn: String.raw`The 20 liters contain \(0.40\times20=8\) liters of juice, and adding water does not change that amount. For the juice to be \(25\%\) of the new drink, the new total must be \(8\div0.25=32\) liters, so the water added is \(32-20=12\) liters (check: \(\frac{8}{32}=25\%\)). The choice 32 is the new total, 8 is the amount of juice, and 15 subtracts the percents.`,
    explanationZh: String.raw`20 升饮料中有 \(0.40\times20=8\) 升果汁，加水不会改变果汁的量。要使果汁占新饮料的 \(25\%\)，新饮料的总量应为 \(8\div0.25=32\) 升，所以要加的水是 \(32-20=12\) 升（验算：\(\frac{8}{32}=25\%\)）。选 32 是新饮料的总量；8 是果汁的量；15 是把两个百分数直接相减得到的。`
  },
  {
    id: "qr-wp-u14", level: "upper", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["units-rates-time", "word-problem-reasoning"],
    stem: "A bus leaves a station at 8:00 a.m. and travels at 40 miles per hour. A second bus leaves the same station at 9:00 a.m., follows the same route, and travels at 60 miles per hour. At what time does the second bus catch up to the first bus?",
    stemZh: "一辆公交车上午 8:00 从车站出发，以每小时 40 英里的速度行驶。第二辆公交车上午 9:00 从同一车站出发，沿同一条路线，以每小时 60 英里的速度行驶。第二辆车在几点追上第一辆车？",
    choices: ["9:40 a.m.", "10:00 a.m.", "10:30 a.m.", "11:00 a.m."], answer: 3,
    explanationEn: String.raw`At 9:00 a.m. the first bus is already 40 miles ahead, and the second bus gains \(60-40=20\) miles each hour, so it needs \(40\div20=2\) hours to close the gap, which is 11:00 a.m. (check: by 11:00 the first bus has gone \(3\times40=120\) miles and the second \(2\times60=120\) miles). The time 9:40 divides the 40-mile gap by 60 mph and ignores that the first bus keeps moving; at 10:00 the second bus has gone only 60 miles while the first has gone 80.`,
    explanationZh: String.raw`上午 9:00 时，第一辆车已经领先 40 英里，第二辆车每小时追近 \(60-40=20\) 英里，所以追上需要 \(40\div20=2\) 小时，也就是上午 11:00（验算：到 11:00 时，第一辆车行驶了 \(3\times40=120\) 英里，第二辆车行驶了 \(2\times60=120\) 英里）。9:40 是用 40 英里的差距除以 60 英里/小时得到的，没有考虑第一辆车一直在前进；10:00 时第二辆车只走了 60 英里，而第一辆车已走了 80 英里。`
  },
  {
    id: "qr-wp-u15", level: "upper", section: "quantitative", type: "word-problem", difficulty: "hard",
    conceptIds: ["fractions-decimals", "expressions-equations", "word-problem-reasoning"],
    stem: String.raw`A water tank is \(\frac{3}{4}\) full. After 20 liters of water are used, the tank is \(\frac{1}{3}\) full. How many liters does the tank hold when it is full?`,
    stemZh: String.raw`一个水箱里的水占容量的 \(\frac{3}{4}\)。用掉 20 升水之后，水箱里的水占容量的 \(\frac{1}{3}\)。这个水箱装满时能装多少升水？`,
    choices: ["16", "20", "36", "48"], answer: 3,
    explanationEn: String.raw`The 20 liters used equal the drop in the fraction full: \(\frac{3}{4}-\frac{1}{3}=\frac{9}{12}-\frac{4}{12}=\frac{5}{12}\) of the tank. If \(\frac{5}{12}\) of the tank is 20 liters, then \(\frac{1}{12}\) is 4 liters and the full tank holds \(12\times4=48\) liters. The other choices are amounts found along the way: 20 is the water used, 36 is the water at the start (\(\frac{3}{4}\times48\)), and 16 is the water left (\(\frac{1}{3}\times48\)).`,
    explanationZh: String.raw`用掉的 20 升相当于水箱“水位分数”的减少量：\(\frac{3}{4}-\frac{1}{3}=\frac{9}{12}-\frac{4}{12}=\frac{5}{12}\)。如果容量的 \(\frac{5}{12}\) 是 20 升，那么 \(\frac{1}{12}\) 是 4 升，装满时就是 \(12\times4=48\) 升。其他选项都是解题途中出现的量：20 是用掉的水，36 是开始时的水量（\(\frac{3}{4}\times48\)），16 是剩下的水量（\(\frac{1}{3}\times48\)）。`
  }
];
