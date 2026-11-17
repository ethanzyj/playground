// Original ISEE-style Mathematics Achievement practice: geometry, measurement, data analysis & probability (set 2).
// 12 additional Middle Level items: ma-gmd-m13..m24.
export const PROBLEMS = [
  {
    id: "ma-gmd-m13", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["angles-lines-triangles"],
    stem: String.raw`In the figure, lines \(m\) and \(n\) are parallel and are crossed by line \(t\). One of the angles is marked \(72^\circ\). What is the value of \(x\)?`,
    stemZh: String.raw`图中直线 \(m\) 与 \(n\) 平行，被直线 \(t\) 所截。图中标出了一个 \(72^\circ\) 的角。\(x\) 的值是多少？`,
    figure: {
      kind: "svg",
      altEn: "Two horizontal parallel lines, m above n, each marked with an arrowhead, are crossed by a slanted line t that slopes down to the right. At the upper crossing, the acute angle below line m and to the right of t is marked 72 degrees. At the lower crossing, the angle above line n and to the right of t is marked x.",
      altZh: "两条水平的平行线 m（上）和 n（下），各画有箭头记号，被一条向右下方倾斜的直线 t 所截。上方交点处，位于直线 m 下方、t 右侧的锐角标为 72 度；下方交点处，位于直线 n 上方、t 右侧的角标为 x。",
      svg: `<svg viewBox="0 0 340 220"><line x1="20" y1="65" x2="296" y2="65" fill="none" stroke="currentColor" stroke-width="2"/><line x1="20" y1="165" x2="296" y2="165" fill="none" stroke="currentColor" stroke-width="2"/><line x1="127.6" y1="27" x2="184.9" y2="203" fill="none" stroke="currentColor" stroke-width="2"/><path d="M44,59L52,65L44,71M44,159L52,165L44,171" fill="none" stroke="currentColor" stroke-width="2"/><path d="M164,65A24,24 0 0 1 147.4,87.8M196.5,165A24,24 0 0 0 165.1,142.2" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14"><text x="174" y="94.7" text-anchor="middle">72°</text><text x="198.4" y="134.4" text-anchor="middle">x°</text><text x="306" y="70">m</text><text x="306" y="170">n</text><text x="111.6" y="31">t</text></g></svg>`
    },
    choices: ["18", "72", "108", "288"], answer: 2,
    explanationEn: String.raw`The two marked angles lie between the parallel lines on the same side of the transversal, so they are supplementary: \(x+72=180\), and \(x=108\). The choice 72 assumes the angles are equal, 18 treats them as complementary (\(90-72\)), and 288 subtracts from 360 instead of 180.`,
    explanationZh: String.raw`两个标出的角位于两条平行线之间、截线 \(t\) 的同一侧（同旁内角），所以它们互补：\(x+72=180\)，\(x=108\)。选 72 是误以为这两个角相等；选 18 是把它们当成了余角（\(90-72\)）；选 288 是用 360 去减，而不是用 180。`
  },
  {
    id: "ma-gmd-m14", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["pythagorean-similarity"],
    stem: "At the same time of day, a vertical pole 2 meters tall casts a shadow 3 meters long on level ground. A tree beside the pole casts a shadow 12 meters long, as shown. How tall is the tree, in meters?",
    stemZh: "在同一时刻，一根 2 米高的竖直杆在平地上的影子长 3 米。旁边一棵树的影子长 12 米（如图）。这棵树高多少米？",
    figure: {
      kind: "svg",
      altEn: "A vertical pole 2 meters tall casts a horizontal shadow 3 meters long. A vertical tree of unknown height, marked with a question mark, casts a shadow 12 meters long on the same level ground. Dashed lines join the top of each object to the end of its shadow, and each object meets the ground at a right angle.",
      altZh: "一根高 2 米的竖直杆在水平地面上的影子长 3 米；一棵高度未知（标为问号）的树在同一块平地上的影子长 12 米。虚线分别连接各自的顶端与影子的末端，杆和树都与地面垂直。",
      svg: `<svg viewBox="0 0 340 210"><line x1="20" y1="170" x2="330" y2="170" fill="none" stroke="currentColor" stroke-width="2"/><line x1="44" y1="170" x2="44" y2="138" fill="none" stroke="currentColor" stroke-width="2"/><line x1="134" y1="170" x2="134" y2="42" fill="none" stroke="currentColor" stroke-width="2"/><path d="M44,161H53V170M134,160H144V170" fill="none" stroke="currentColor" stroke-width="2"/><path d="M44,138L92,170M134,42L326,170" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><g fill="currentColor" font-size="14"><text x="38" y="153" text-anchor="end">2 m</text><text x="68" y="190" text-anchor="middle">3 m</text><text x="128" y="111" text-anchor="end">?</text><text x="230" y="190" text-anchor="middle">12 m</text></g></svg>`
    },
    choices: ["8", "11", "18", "24"], answer: 0,
    explanationEn: String.raw`At the same time of day the sun’s rays meet the ground at the same angle, so each object and its shadow form similar right triangles and the height-to-shadow ratios are equal. If \(h\) is the tree’s height, \(\frac{2}{3}=\frac{h}{12}\), so \(h=8\). The choice 11 adds the 9-meter difference in shadow length to 2 instead of scaling, 18 flips the ratio (\(12\times\frac{3}{2}\)), and 24 computes \(2\times12\) without dividing by 3.`,
    explanationZh: String.raw`同一时刻太阳光线与地面的夹角相同，所以物体与它的影子构成的两个直角三角形相似，“高度 ÷ 影长”相等。设树高为 \(h\)，则 \(\frac{2}{3}=\frac{h}{12}\)，得 \(h=8\)。选 11 是把影子长度相差的 9 米直接加到 2 米上，没有按比例放大；选 18 是把比例颠倒了（\(12\times\frac{3}{2}\)）；选 24 是算了 \(2\times12\) 却没有再除以 3。`
  },
  {
    id: "ma-gmd-m15", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["probability-counting"],
    stem: "A school radio host will play 4 different songs, one after another, and each song will be played exactly once. In how many different orders can the songs be played?",
    stemZh: "校园广播站的主持人要依次播放 4 首不同的歌曲，每首歌曲恰好播放一次。这些歌曲一共有多少种不同的播放顺序？",
    choices: ["10", "12", "16", "24"], answer: 3,
    explanationEn: String.raw`Any of the 4 songs can be played first, then 3 songs remain for second place, 2 for third and 1 for last, so there are \(4\times3\times2\times1=24\) orders. The choice 10 adds \(4+3+2+1\) instead of multiplying, 12 multiplies only the first two places (\(4\times3\)), and 16 multiplies \(4\times4\) as if a song could be played twice.`,
    explanationZh: String.raw`第一首可以从 4 首中任选，第二首从剩下的 3 首中选，第三首有 2 种选择，最后一首只剩 1 种，所以共有 \(4\times3\times2\times1=24\) 种顺序。选 10 是把 \(4+3+2+1\) 相加而不是相乘；选 12 只乘了前两个位置（\(4\times3\)）；选 16 是算了 \(4\times4\)，好像同一首曲子可以演奏两次。`
  },
  {
    id: "ma-gmd-m16", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["graphs-tables"],
    stem: "The bar graph shows the number of students in a class whose scores on a science quiz fell in each score range. What percent of the students scored 80 or higher?",
    stemZh: "条形图显示了一个班的学生在一次科学测验中各分数段的人数。得分在 80 分及以上的学生占全班学生的百分之几？",
    figure: {
      kind: "bar", titleEn: "Science quiz scores", labels: ["60-69", "70-79", "80-89", "90-100"],
      series: [{ values: [2, 6, 8, 4] }], xLabelEn: "Score range", yLabelEn: "Number of students",
      altEn: "A bar graph of quiz scores: 60 to 69 has 2 students, 70 to 79 has 6 students, 80 to 89 has 8 students and 90 to 100 has 4 students.",
      altZh: "条形图：60–69 分有 2 名学生，70–79 分有 6 名，80–89 分有 8 名，90–100 分有 4 名。"
    },
    choices: ["12%", "40%", "50%", "60%"], answer: 3,
    explanationEn: String.raw`The bars show \(2+6+8+4=20\) students in all. Scores of 80 or higher are the last two bars: \(8+4=12\) students, and \(\frac{12}{20}=60\%\). The choice 12% treats the number of students as a percent, 40% uses only the 80 to 89 bar (\(\frac{8}{20}\)), and 50% counts 2 of the 4 bars instead of counting students.`,
    explanationZh: String.raw`四根柱子共表示 \(2+6+8+4=20\) 名学生。80 分及以上是最后两根柱子：\(8+4=12\) 人，\(\frac{12}{20}=60\%\)。选 12% 是把学生人数直接当成了百分数；选 40% 只算了 80–89 分这一根柱子（\(\frac{8}{20}\)）；选 50% 是数了“4 根柱子中占 2 根”，而不是数学生人数。`
  },
  {
    id: "ma-gmd-m17", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["mean-median-mode", "graphs-tables"],
    stem: "The table shows how many students in a class own each number of pets. What is the mean number of pets per student?",
    stemZh: "下表显示了一个班里拥有不同数量宠物的学生各有多少人。平均每名学生拥有多少只宠物？",
    figure: {
      kind: "table", captionEn: "Pets owned by students in a class",
      headers: ["Number of pets", "Number of students"], rows: [["0", "2"], ["1", "6"], ["2", "8"], ["3", "4"]],
      altEn: "A table with two columns: 0 pets for 2 students, 1 pet for 6 students, 2 pets for 8 students and 3 pets for 4 students.",
      altZh: "两列的表格：拥有 0 只宠物的学生有 2 人，1 只的有 6 人，2 只的有 8 人，3 只的有 4 人。"
    },
    choices: ["1.5", "1.7", "2", "8.5"], answer: 1,
    explanationEn: String.raw`The total number of pets is \(0\times2+1\times6+2\times8+3\times4=34\), and the number of students is \(2+6+8+4=20\), so the mean is \(34\div20=1.7\). The choice 1.5 averages the four pet counts 0, 1, 2 and 3 without weighting by the number of students, 2 is the mode (and the median), and 8.5 divides 34 by the 4 table rows instead of by 20 students.`,
    explanationZh: String.raw`宠物总数为 \(0\times2+1\times6+2\times8+3\times4=34\)，学生总数为 \(2+6+8+4=20\)，所以平均数是 \(34\div20=1.7\)。选 1.5 是直接求 0、1、2、3 这四个数的平均数，没有按学生人数加权；选 2 是众数（也是中位数）；选 8.5 是把 34 除以表格的 4 行，而不是除以 20 名学生。`
  },
  {
    id: "ma-gmd-m18", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["probability-counting"],
    stem: "Spinner A has 3 equal sections and spinner B has 4 equal sections, as shown. Each spinner is spun once, and each spinner is equally likely to stop on any of its sections. What is the probability that the product of the two numbers is even?",
    stemZh: "转盘 A 被分成 3 个相等的扇形，转盘 B 被分成 4 个相等的扇形（如图）。每个转盘各转动一次，停在各个扇形上的可能性相同。两个转盘所得数的乘积是偶数的概率是多少？",
    figure: {
      kind: "svg",
      altEn: "Two circular spinners. Spinner A is divided into 3 equal sections numbered 1, 2 and 3. Spinner B is divided into 4 equal sections numbered 1, 2, 3 and 4.",
      altZh: "两个圆形转盘。转盘 A 被分成 3 个相等的扇形，分别标有 1、2、3；转盘 B 被分成 4 个相等的扇形，分别标有 1、2、3、4。",
      svg: `<svg viewBox="0 0 360 200"><circle cx="95" cy="88" r="70" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="265" cy="88" r="70" fill="none" stroke="currentColor" stroke-width="2"/><path d="M95,88L95,18M95,88L34.4,123M95,88L155.6,123M265,88L335,88M265,88L265,18M265,88L195,88M265,88L265,158" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14"><text x="129.6" y="73" text-anchor="middle">1</text><text x="95" y="133" text-anchor="middle">2</text><text x="60.4" y="73" text-anchor="middle">3</text><text x="293.3" y="64.7" text-anchor="middle">1</text><text x="293.3" y="121.3" text-anchor="middle">2</text><text x="236.7" y="121.3" text-anchor="middle">3</text><text x="236.7" y="64.7" text-anchor="middle">4</text><text x="95" y="189" text-anchor="middle">Spinner A</text><text x="265" y="189" text-anchor="middle">Spinner B</text></g></svg>`
    },
    choices: [String.raw`\(\frac{1}{6}\)`, String.raw`\(\frac{1}{2}\)`, String.raw`\(\frac{2}{3}\)`, String.raw`\(\frac{5}{6}\)`], answer: 2,
    explanationEn: String.raw`There are \(3\times4=12\) equally likely outcomes. A product is odd only when both numbers are odd (1 or 3 on A and 1 or 3 on B), which is \(2\times2=4\) outcomes, so \(12-4=8\) outcomes give an even product and the probability is \(\frac{8}{12}=\frac{2}{3}\). The choice \(\frac{1}{6}\) is \(\frac{1}{3}\times\frac{1}{2}\), the chance that both numbers are even; \(\frac{5}{6}\) adds \(\frac{1}{3}+\frac{1}{2}\) and counts the “both even” outcomes twice; and \(\frac{1}{2}\) assumes even and odd products are equally likely.`,
    explanationZh: String.raw`共有 \(3\times4=12\) 种等可能的结果。只有两个数都是奇数时乘积才是奇数（A 转到 1 或 3，B 转到 1 或 3），共 \(2\times2=4\) 种，所以乘积为偶数的有 \(12-4=8\) 种，概率为 \(\frac{8}{12}=\frac{2}{3}\)。选 \(\frac{1}{6}\) 是 \(\frac{1}{3}\times\frac{1}{2}\)，即“两个数都是偶数”的概率；选 \(\frac{5}{6}\) 是把 \(\frac{1}{3}+\frac{1}{2}\) 直接相加，把“两个都是偶数”的情况算了两次；选 \(\frac{1}{2}\) 是误以为乘积是偶数和奇数的可能性相同。`
  },
  {
    id: "ma-gmd-m19", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["polygons-circles", "perimeter-area"],
    stem: "The figure shows a window made of a rectangle with a semicircle on top. The rectangle is 8 feet wide and 6 feet tall, and the diameter of the semicircle is the top side of the rectangle. What is the area of the window, in square feet?",
    stemZh: "图中的窗户由一个长方形和其上方的一个半圆组成。长方形宽 8 英尺、高 6 英尺，半圆的直径就是长方形的上边。这扇窗户的面积是多少平方英尺？",
    figure: {
      kind: "svg",
      altEn: "A window shaped like a rectangle with a semicircle on top. The rectangle’s bottom side is labeled 8 ft and its left side is labeled 6 ft. A dashed line across the top of the rectangle is the diameter of the semicircle.",
      altZh: "一扇窗户的形状是长方形上方加一个半圆。长方形的底边标为 8 英尺，左边标为 6 英尺；长方形上边处的虚线是半圆的直径。",
      svg: `<svg viewBox="0 0 240 260"><path d="M40,230V110A80,80 0 0 1 200,110V230Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><line x1="40" y1="110" x2="200" y2="110" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><g fill="currentColor" font-size="14"><text x="120" y="250" text-anchor="middle">8 ft</text><text x="32" y="175" text-anchor="end">6 ft</text></g></svg>`
    },
    choices: [String.raw`\(48+4\pi\)`, String.raw`\(48+8\pi\)`, String.raw`\(48+16\pi\)`, String.raw`\(48+32\pi\)`], answer: 1,
    explanationEn: String.raw`The semicircle has diameter 8, so its radius is 4 and its area is \(\frac{1}{2}\pi(4^2)=8\pi\). The rectangle has area \(8\times6=48\), so the window’s area is \(48+8\pi\). The choice \(48+16\pi\) forgets to halve the circle, \(48+32\pi\) uses the diameter 8 as the radius, and \(48+4\pi\) uses the length of the curved edge instead of the area.`,
    explanationZh: String.raw`半圆的直径是 8，半径是 4，面积为 \(\frac{1}{2}\pi(4^2)=8\pi\)。长方形面积为 \(8\times6=48\)，所以窗户的面积是 \(48+8\pi\)。选 \(48+16\pi\) 是忘了取圆面积的一半；选 \(48+32\pi\) 是把直径 8 当成了半径；选 \(48+4\pi\) 是用了弧线的长度，而不是半圆的面积。`
  },
  {
    id: "ma-gmd-m20", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["volume-surface-area"],
    stem: "A rectangular prism has a square base. Its height is 8 centimeters and its volume is 200 cubic centimeters. What is the total surface area of the prism, in square centimeters?",
    stemZh: "一个长方体的底面是正方形，高为 8 厘米，体积为 200 立方厘米。这个长方体的表面积是多少平方厘米？",
    choices: ["160", "185", "210", "240"], answer: 2,
    explanationEn: String.raw`The base is a square with area \(200\div8=25\), so each base edge is 5. The surface area is two bases plus four side faces: \(2\times25+4\times(5\times8)=50+160=210\). The choice 160 leaves out the two bases, 185 counts only one base, and 240 treats all six faces as \(5\times8\) rectangles.`,
    explanationZh: String.raw`底面是正方形，面积为 \(200\div8=25\)，所以底面边长是 5。表面积等于两个底面加四个侧面：\(2\times25+4\times(5\times8)=50+160=210\)。选 160 漏掉了上下两个底面；选 185 只算了一个底面；选 240 是把六个面都当成了 \(5\times8\) 的长方形。`
  },
  {
    id: "ma-gmd-m21", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["coordinate-transformations"],
    stem: String.raw`Triangle ABC is shown on the coordinate grid. The triangle is rotated \(90^\circ\) clockwise about the origin, and point B moves to point \(B'\). What are the coordinates of \(B'\)?`,
    stemZh: String.raw`三角形 ABC 画在下面的坐标网格中。将这个三角形绕原点顺时针旋转 \(90^\circ\)，点 B 变到点 \(B'\)。\(B'\) 的坐标是什么？`,
    figure: {
      kind: "svg",
      altEn: "A coordinate grid with both axes running from −5 to 5. Triangle ABC has vertices A(1, 1), B(1, 4) and C(3, 1), with a right angle at A.",
      altZh: "坐标网格，x 轴和 y 轴的范围都是 −5 到 5。三角形 ABC 的顶点为 A(1, 1)、B(1, 4)、C(3, 1)，直角在 A 处。",
      svg: `<svg viewBox="0 0 300 280"><path d="M30 16V256M30 256H270M54 16V256M30 232H270M78 16V256M30 208H270M102 16V256M30 184H270M126 16V256M30 160H270M150 16V256M30 136H270M174 16V256M30 112H270M198 16V256M30 88H270M222 16V256M30 64H270M246 16V256M30 40H270M270 16V256M30 16H270" fill="none" stroke="currentColor" stroke-opacity="0.2" stroke-width="1"/><path d="M24 136H276M150 10V262" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="284,136 274,131 274,141" fill="currentColor"/><polygon points="150,2 145,12 155,12" fill="currentColor"/><polygon points="174,112 174,40 222,112" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g fill="currentColor"><circle cx="174" cy="112" r="3.5"/><circle cx="174" cy="40" r="3.5"/><circle cx="222" cy="112" r="3.5"/></g><g fill="currentColor" font-size="12"><text x="30" y="152" text-anchor="middle">−5</text><text x="54" y="152" text-anchor="middle">−4</text><text x="78" y="152" text-anchor="middle">−3</text><text x="102" y="152" text-anchor="middle">−2</text><text x="126" y="152" text-anchor="middle">−1</text><text x="174" y="152" text-anchor="middle">1</text><text x="198" y="152" text-anchor="middle">2</text><text x="222" y="152" text-anchor="middle">3</text><text x="246" y="152" text-anchor="middle">4</text><text x="270" y="152" text-anchor="middle">5</text><text x="142" y="261" text-anchor="end">−5</text><text x="142" y="237" text-anchor="end">−4</text><text x="142" y="213" text-anchor="end">−3</text><text x="142" y="189" text-anchor="end">−2</text><text x="142" y="165" text-anchor="end">−1</text><text x="142" y="117" text-anchor="end">1</text><text x="142" y="93" text-anchor="end">2</text><text x="142" y="69" text-anchor="end">3</text><text x="142" y="45" text-anchor="end">4</text><text x="142" y="21" text-anchor="end">5</text></g><g fill="currentColor" font-size="14"><text x="155" y="153">O</text><text x="276" y="128">x</text><text x="159" y="12">y</text><text x="162" y="130">A</text><text x="180" y="34">B</text><text x="228" y="130">C</text></g></svg>`
    },
    choices: [String.raw`\((-4,1)\)`, String.raw`\((-1,-4)\)`, String.raw`\((1,-4)\)`, String.raw`\((4,-1)\)`], answer: 3,
    explanationEn: String.raw`Point B is at \((1,4)\), which is 1 unit right and 4 units up. A \(90^\circ\) clockwise rotation about the origin sends \((x,y)\) to \((y,-x)\), so it lands 4 units right and 1 unit down: \(B'=(4,-1)\). The choice \((-4,1)\) is a \(90^\circ\) counterclockwise rotation, \((-1,-4)\) is a \(180^\circ\) rotation, and \((1,-4)\) is a reflection across the \(x\)-axis.`,
    explanationZh: String.raw`点 B 的坐标是 \((1,4)\)，即在原点右侧 1 个单位、上方 4 个单位。绕原点顺时针旋转 \(90^\circ\)，点 \((x,y)\) 变为 \((y,-x)\)，所以它落在右侧 4 个单位、下方 1 个单位处：\(B'=(4,-1)\)。选 \((-4,1)\) 是逆时针旋转 \(90^\circ\) 的结果；选 \((-1,-4)\) 是旋转 \(180^\circ\) 的结果；选 \((1,-4)\) 是关于 \(x\) 轴的反射（轴对称）。`
  },
  {
    id: "ma-gmd-m22", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["pythagorean-similarity", "perimeter-area"],
    stem: "A rectangular playground is 15 meters long and 8 meters wide, as shown. Dara walks from corner A to corner C by going along side AB and then along side BC. Ben walks straight from A to C along the diagonal. How many meters farther does Dara walk than Ben?",
    stemZh: "一块长方形操场长 15 米、宽 8 米（如图）。Dara 从 A 点走到 C 点：先沿边 AB 走，再沿边 BC 走。Ben 则沿对角线从 A 点直接走到 C 点。Dara 比 Ben 多走多少米？",
    figure: {
      kind: "svg",
      altEn: "A rectangle ABCD with A at the bottom left, B at the bottom right, C at the top right and D at the top left. The bottom side AB is labeled 15 m and the right side BC is labeled 8 m. A dashed diagonal joins A to C.",
      altZh: "长方形 ABCD，A 在左下角，B 在右下角，C 在右上角，D 在左上角。底边 AB 标为 15 米，右边 BC 标为 8 米。虚线对角线连接 A 和 C。",
      svg: `<svg viewBox="0 0 310 200"><polygon points="30,160 270,160 270,32 30,32" fill="none" stroke="currentColor" stroke-width="2"/><line x1="30" y1="160" x2="270" y2="32" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><path d="M258,160V148H270" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14"><text x="150" y="184" text-anchor="middle">15 m</text><text x="278" y="101">8 m</text><text x="24" y="178" text-anchor="end">A</text><text x="276" y="178">B</text><text x="276" y="28">C</text><text x="24" y="28" text-anchor="end">D</text></g></svg>`
    },
    choices: ["6", "7", "17", "23"], answer: 0,
    explanationEn: String.raw`Dara walks \(15+8=23\) meters along the two sides. Ben’s path is the hypotenuse of a right triangle with legs 15 and 8, so it is \(\sqrt{15^2+8^2}=\sqrt{289}=17\) meters, and Dara walks \(23-17=6\) meters farther. The choice 7 is the difference of the side lengths (\(15-8\)), 17 is only Ben’s distance, and 23 is only Dara’s distance.`,
    explanationZh: String.raw`Dara 沿两条边走了 \(15+8=23\) 米。Ben 走的是以 15 和 8 为直角边的直角三角形的斜边，长度为 \(\sqrt{15^2+8^2}=\sqrt{289}=17\) 米，所以 Dara 多走了 \(23-17=6\) 米。选 7 是两条边长度之差（\(15-8\)）；选 17 只是 Ben 走的路程；选 23 只是 Dara 走的路程。`
  },
  {
    id: "ma-gmd-m23", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["polygons-circles", "units-rates-time"],
    stem: String.raw`A wheel with a diameter of 40 centimeters rolls along a straight, level path without slipping. How far, in meters, does the wheel roll in 30 complete turns? Give the answer in terms of \(\pi\).`,
    stemZh: String.raw`一个车轮的直径为 40 厘米，在笔直平坦的路面上滚动且不打滑。车轮转 30 整圈，向前滚动了多少米？请用含 \(\pi\) 的式子表示。`,
    choices: [String.raw`\(6\pi\)`, String.raw`\(12\pi\)`, String.raw`\(24\pi\)`, String.raw`\(1200\pi\)`], answer: 1,
    explanationEn: String.raw`One turn covers the circumference \(C=\pi d=40\pi\) centimeters, so 30 turns cover \(30\times40\pi=1200\pi\) centimeters, which is \(12\pi\) meters because 100 centimeters make 1 meter. The choice \(1200\pi\) is still in centimeters, \(24\pi\) uses the diameter 40 as the radius in \(2\pi r\), and \(6\pi\) uses \(\pi r\) with \(r=20\), forgetting the factor of 2.`,
    explanationZh: String.raw`车轮转一圈滚过的距离等于圆周长 \(C=\pi d=40\pi\) 厘米，所以转 30 圈滚过 \(30\times40\pi=1200\pi\) 厘米，因为 100 厘米 = 1 米，所以是 \(12\pi\) 米。选 \(1200\pi\) 还没有把厘米换算成米；选 \(24\pi\) 是在 \(2\pi r\) 中把直径 40 当成了半径；选 \(6\pi\) 是用了 \(\pi r\)（\(r=20\)），漏掉了因数 2。`
  },
  {
    id: "ma-gmd-m24", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["angles-lines-triangles", "units-rates-time"],
    stem: "A clock shows 3:30, as in the figure. What is the measure, in degrees, of the smaller angle formed by the hour hand and the minute hand?",
    stemZh: "一只钟显示 3:30（如图）。时针与分针所成的较小的角是多少度？",
    figure: {
      kind: "svg",
      altEn: "A clock face showing 3:30. The minute hand points straight down at the 6, and the hour hand points halfway between the 3 and the 4. A small arc with a question mark marks the angle between the two hands.",
      altZh: "一只显示 3:30 的钟面。分针垂直向下指向 6，时针指向 3 和 4 的正中间。两根指针之间的角用一段小圆弧和问号标出。",
      svg: `<svg viewBox="0 0 240 240"><circle cx="120" cy="120" r="106" fill="none" stroke="currentColor" stroke-width="2"/><path d="M169,35.1L173,28.2M204.9,71L211.8,67M218,120L226,120M204.9,169L211.8,173M169,204.9L173,211.8M120,218L120,226M71,204.9L67,211.8M35.1,169L28.2,173M22,120L14,120M35.1,71L28.2,67M71,35.1L67,28.2M120,22L120,14" fill="none" stroke="currentColor" stroke-width="2"/><line x1="120" y1="120" x2="164.4" y2="131.9" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="120" y1="120" x2="120" y2="188" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M145.1,126.7A26,26 0 0 1 120,146" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="120" r="4" fill="currentColor"/><g fill="currentColor" font-size="14"><text x="162" y="52.3" text-anchor="middle">1</text><text x="192.7" y="83" text-anchor="middle">2</text><text x="204" y="125" text-anchor="middle">3</text><text x="192.7" y="167" text-anchor="middle">4</text><text x="162" y="197.7" text-anchor="middle">5</text><text x="120" y="209" text-anchor="middle">6</text><text x="78" y="197.7" text-anchor="middle">7</text><text x="47.3" y="167" text-anchor="middle">8</text><text x="36" y="125" text-anchor="middle">9</text><text x="47.3" y="83" text-anchor="middle">10</text><text x="78" y="52.3" text-anchor="middle">11</text><text x="120" y="41" text-anchor="middle">12</text><text x="148.4" y="159.7" text-anchor="middle">?</text></g></svg>`
    },
    choices: ["75", "90", "105", "285"], answer: 0,
    explanationEn: String.raw`At 3:30 the minute hand points at the 6, which is \(6\times30^\circ=180^\circ\) from the 12. The hour hand is halfway between the 3 and the 4, so it is \(3.5\times30^\circ=105^\circ\) from the 12, and the smaller angle between the hands is \(180^\circ-105^\circ=75^\circ\). The choice 90 puts the hour hand exactly on the 3, 105 is only the hour hand’s angle from the 12, and 285 is the larger angle (\(360-75\)).`,
    explanationZh: String.raw`3:30 时分针指向 6，与 12 的夹角是 \(6\times30^\circ=180^\circ\)。时针在 3 和 4 的正中间，与 12 的夹角是 \(3.5\times30^\circ=105^\circ\)，所以两针所成的较小的角是 \(180^\circ-105^\circ=75^\circ\)。选 90 是把时针当成正好指在 3 上；选 105 只是时针与 12 的夹角；选 285 是较大的那个角（\(360-75\)）。`
  }
];
