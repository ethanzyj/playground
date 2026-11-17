// Original ISEE-style Mathematics Achievement practice: geometry, measurement, data analysis & probability.
// 12 Middle Level items: ma-gmd-m01..m12.
export const PROBLEMS = [
  {
    id: "ma-gmd-m01", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["angles-lines-triangles"],
    stem: String.raw`In the triangle shown, \(\angle A=50^\circ\) and \(\angle B=70^\circ\). What is the measure, in degrees, of \(\angle C\), labeled \(x\) in the figure?`,
    stemZh: String.raw`图中三角形的 \(\angle A=50^\circ\)，\(\angle B=70^\circ\)。\(\angle C\)（图中标为 \(x\)）是多少度？`,
    figure: {
      kind: "svg",
      altEn: "Triangle ABC with the base AB along the bottom. Angle A is marked 50 degrees, angle B is marked 70 degrees, and the angle at the top vertex C is marked x.",
      altZh: "三角形 ABC，底边 AB 在下方。角 A 标为 50 度，角 B 标为 70 度，顶点 C 处的角标为 x。",
      svg: `<svg viewBox="0 0 260 245"><polygon points="30,215 230,215 169.5,48.8" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="233" fill="currentColor" font-size="14">A</text><text x="236" y="233" fill="currentColor" font-size="14">B</text><text x="164" y="38" fill="currentColor" font-size="14">C</text><text x="58" y="205" fill="currentColor" font-size="14">50°</text><text x="170" y="205" fill="currentColor" font-size="14">70°</text><text x="165" y="82" fill="currentColor" font-size="14">x</text></svg>`
    },
    choices: ["60", "110", "120", "130"], answer: 0,
    explanationEn: String.raw`The angles of a triangle add up to \(180^\circ\), so \(x=180-50-70=60\). The choice 120 is just the sum of the two given angles, and 110 and 130 each subtract only one of the given angles from 180.`,
    explanationZh: String.raw`三角形的内角和是 \(180^\circ\)，所以 \(x=180-50-70=60\)。选 120 是只把两个已知角相加；选 110 和 130 则分别只从 180 中减去了一个已知角（\(180-70\)、\(180-50\)）。`
  },
  {
    id: "ma-gmd-m02", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["units-rates-time"],
    stem: "A cyclist rides at a steady speed of 12 kilometers per hour. How many kilometers does she ride in 45 minutes?",
    stemZh: "一位骑行者以每小时 12 千米的匀速骑行。她在 45 分钟内骑行了多少千米？",
    choices: ["5.4", "9", "57", "540"], answer: 1,
    explanationEn: String.raw`Since 45 minutes is \(\frac{45}{60}=\frac{3}{4}\) of an hour, the distance is \(12\times\frac{3}{4}=9\) kilometers. Treating 45 minutes as 0.45 hour gives 5.4, adding the numbers gives 57, and multiplying by 45 without changing minutes to hours gives 540.`,
    explanationZh: String.raw`45 分钟是 \(\frac{45}{60}=\frac{3}{4}\) 小时，所以路程是 \(12\times\frac{3}{4}=9\) 千米。把 45 分钟当成 0.45 小时会得到 5.4；把两个数相加会得到 57；没有把分钟换算成小时就直接乘 45 会得到 540。`
  },
  {
    id: "ma-gmd-m03", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["perimeter-area", "polygons-circles"],
    stem: "The trapezoid shown has parallel sides of length 6 centimeters and 12 centimeters, a height of 4 centimeters, and two slanted sides of length 5 centimeters each. What is its area, in square centimeters?",
    stemZh: "图中的梯形，两条平行边分别长 6 厘米和 12 厘米，高为 4 厘米，两条腰各长 5 厘米。它的面积是多少平方厘米？",
    figure: {
      kind: "svg",
      altEn: "A trapezoid with a bottom side of 12 and a top side of 6, both parallel. A dashed vertical segment of length 4 with a right-angle mark drops from the top-left corner to the bottom side. Each slanted side is labeled 5.",
      altZh: "一个梯形，下底为 12，上底为 6，两底平行。从左上角向下底作一条虚线垂线段，长为 4，并标有直角记号。两条腰都标为 5。",
      svg: `<svg viewBox="0 0 300 220"><polygon points="30,190 270,190 210,110 90,110" fill="none" stroke="currentColor" stroke-width="2"/><line x1="90" y1="110" x2="90" y2="190" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><polyline points="90,178 102,178 102,190" fill="none" stroke="currentColor" stroke-width="2"/><text x="142" y="208" fill="currentColor" font-size="14">12</text><text x="146" y="100" fill="currentColor" font-size="14">6</text><text x="96" y="156" fill="currentColor" font-size="14">4</text><text x="44" y="146" fill="currentColor" font-size="14">5</text><text x="254" y="146" fill="currentColor" font-size="14">5</text></svg>`
    },
    choices: ["28", "36", "45", "72"], answer: 1,
    explanationEn: String.raw`The height is the perpendicular distance between the parallel sides, which is 4, so \(A=\frac{1}{2}(6+12)\times4=36\). Using the slanted side 5 as the height gives 45, forgetting the \(\frac{1}{2}\) gives 72, and 28 is the perimeter, not the area.`,
    explanationZh: String.raw`高是两条平行边之间的垂直距离，也就是 4，所以 \(A=\frac{1}{2}(6+12)\times4=36\)。把腰长 5 当作高会得到 45；忘记乘 \(\frac{1}{2}\) 会得到 72；28 是周长，不是面积。`
  },
  {
    id: "ma-gmd-m04", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["graphs-tables"],
    stem: "The circle graph shows how the 240 students in a middle school usually get to school. How many more students ride the bus than ride a bike?",
    stemZh: "扇形图显示了一所中学 240 名学生平时上学的出行方式。乘公交车上学的学生比骑自行车上学的学生多多少人？",
    figure: {
      kind: "pie", titleEn: "How students get to school",
      slices: [{ label: "Bus", value: 40 }, { label: "Walk", value: 25 }, { label: "Car", value: 20 }, { label: "Bike", value: 15 }],
      altEn: "A circle graph of how students get to school: Bus 40 percent, Walk 25 percent, Car 20 percent, Bike 15 percent.",
      altZh: "扇形图，显示学生上学的出行方式：公交车占 40%，步行占 25%，乘小汽车占 20%，骑自行车占 15%。"
    },
    choices: ["25", "36", "60", "96"], answer: 2,
    explanationEn: String.raw`The bus slice is \(40\%\) and the bike slice is \(15\%\), a difference of \(25\%\) of the 240 students: \(0.25\times240=60\). The choice 25 is the percent difference rather than a number of students, 36 is only the bike riders (\(15\%\) of 240), and 96 is only the bus riders (\(40\%\) of 240).`,
    explanationZh: String.raw`公交车占 \(40\%\)，自行车占 \(15\%\)，相差 \(25\%\)，即 240 名学生的 \(25\%\)：\(0.25\times240=60\)（人）。选 25 是把百分数之差直接当成了人数；36 只是骑自行车的人数（240 的 \(15\%\)）；96 只是乘公交车的人数（240 的 \(40\%\)）。`
  },
  {
    id: "ma-gmd-m05", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["mean-median-mode", "graphs-tables"],
    stem: "The line graph shows the high temperature, in degrees Celsius, on each of six days in a row. What is the median of these six temperatures?",
    stemZh: "折线图显示了连续六天每天的最高气温（单位：摄氏度）。这六个气温的中位数是多少？",
    figure: {
      kind: "line", titleEn: "Daily high temperature", labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      series: [{ values: [15, 25, 10, 25, 20, 25] }], xLabelEn: "Day", yLabelEn: "Temperature (°C)",
      altEn: "A line graph of daily high temperatures in degrees Celsius: Monday 15, Tuesday 25, Wednesday 10, Thursday 25, Friday 20, Saturday 25.",
      altZh: "折线图，显示每天的最高气温（摄氏度）：周一 15，周二 25，周三 10，周四 25，周五 20，周六 25。"
    },
    choices: ["17.5", "20", "22.5", "25"], answer: 2,
    explanationEn: String.raw`Put the temperatures in order: 10, 15, 20, 25, 25, 25. With six values the median is the mean of the two middle ones: \((20+25)\div2=22.5\). The choice 20 is the mean of all six temperatures, 25 is the mode, and 17.5 averages the middle two days on the graph (Wednesday and Thursday) without ordering the values first.`,
    explanationZh: String.raw`先把气温从小到大排列：10、15、20、25、25、25。一共六个数，中位数是中间两个数的平均数：\((20+25)\div2=22.5\)。选 20 是六个数的平均数；选 25 是众数；选 17.5 是没有先排序，直接取了图中中间两天（周三和周四）的平均数。`
  },
  {
    id: "ma-gmd-m06", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["coordinate-transformations"],
    stem: String.raw`Point \(P\) is located at \((-3,2)\) on a coordinate plane. It is reflected across the \(x\)-axis and then translated 5 units to the left. What are the coordinates of the final point?`,
    stemZh: String.raw`坐标平面上的点 \(P\) 位于 \((-3,2)\)。先将它关于 \(x\) 轴作反射（轴对称），再向左平移 5 个单位。最终得到的点的坐标是什么？`,
    choices: [String.raw`\((-8,-2)\)`, String.raw`\((-3,-2)\)`, String.raw`\((-2,2)\)`, String.raw`\((2,-2)\)`], answer: 0,
    explanationEn: String.raw`Reflecting across the \(x\)-axis changes the sign of the \(y\)-coordinate: \((-3,2)\to(-3,-2)\). Moving 5 units left subtracts 5 from the \(x\)-coordinate: \((-3,-2)\to(-8,-2)\). The choice \((-3,-2)\) forgets the translation, \((-2,2)\) reflects across the wrong axis, and \((2,-2)\) moves right instead of left.`,
    explanationZh: String.raw`关于 \(x\) 轴反射，纵坐标变号：\((-3,2)\to(-3,-2)\)。向左平移 5 个单位，横坐标减 5：\((-3,-2)\to(-8,-2)\)。选 \((-3,-2)\) 是漏掉了平移；选 \((-2,2)\) 是反射时弄错了对称轴；选 \((2,-2)\) 是把向左平移错当成向右平移。`
  },
  {
    id: "ma-gmd-m07", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["pythagorean-similarity", "perimeter-area"],
    stem: "In the figure, triangle XYZ has XY = XZ = 10 centimeters and YZ = 12 centimeters. What is the area of triangle XYZ, in square centimeters?",
    stemZh: "图中三角形 XYZ 的 XY = XZ = 10 厘米，YZ = 12 厘米。三角形 XYZ 的面积是多少平方厘米？",
    figure: {
      kind: "svg",
      altEn: "An isosceles triangle XYZ with the vertex X at the top and the base YZ along the bottom. Base YZ is labeled 12, and the two equal sides XY and XZ are each labeled 10.",
      altZh: "等腰三角形 XYZ，顶点 X 在上方，底边 YZ 在下方。底边 YZ 标为 12，两条相等的边 XY 和 XZ 都标为 10。",
      svg: `<svg viewBox="0 0 260 190"><polygon points="40,160 220,160 130,40" fill="none" stroke="currentColor" stroke-width="2"/><text x="124" y="28" fill="currentColor" font-size="14">X</text><text x="22" y="178" fill="currentColor" font-size="14">Y</text><text x="224" y="178" fill="currentColor" font-size="14">Z</text><text x="122" y="178" fill="currentColor" font-size="14">12</text><text x="60" y="94" fill="currentColor" font-size="14">10</text><text x="182" y="94" fill="currentColor" font-size="14">10</text></svg>`
    },
    choices: ["48", "60", "96", "120"], answer: 0,
    explanationEn: String.raw`Drop the altitude from \(X\) to \(YZ\). In an isosceles triangle it meets \(YZ\) at its midpoint, 6 from \(Y\), so the height is \(h=\sqrt{10^2-6^2}=\sqrt{64}=8\) and the area is \(\frac{1}{2}\times12\times8=48\). Using the side 10 as the height gives 60, \(12\times8=96\) forgets the \(\frac{1}{2}\), and 120 is \(12\times10\).`,
    explanationZh: String.raw`从 \(X\) 向 \(YZ\) 作高。等腰三角形底边上的高落在底边中点，离 \(Y\) 的距离是 6，所以高 \(h=\sqrt{10^2-6^2}=\sqrt{64}=8\)，面积为 \(\frac{1}{2}\times12\times8=48\)。把腰长 10 当作高会得到 60；\(12\times8=96\) 忘了乘 \(\frac{1}{2}\)；120 是 \(12\times10\)。`
  },
  {
    id: "ma-gmd-m08", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["volume-surface-area", "polygons-circles"],
    stem: "A full cylindrical jar has a radius of 4 centimeters and a height of 9 centimeters. All of its water is poured into an empty, tall rectangular tank whose base measures 12 centimeters by 6 centimeters. How deep, in centimeters, is the water in the tank?",
    stemZh: "一个盛满水的圆柱形罐子，底面半径为 4 厘米，高为 9 厘米。把罐中的水全部倒入一个空的、足够高的长方体水箱中，水箱的底面是 12 厘米 × 6 厘米的长方形。水箱中的水深是多少厘米？",
    choices: [String.raw`\(\frac{\pi}{2}\)`, "2", String.raw`\(\pi\)`, String.raw`\(2\pi\)`], answer: 3,
    explanationEn: String.raw`The jar holds \(\pi r^2h=\pi\times4^2\times9=144\pi\) cubic centimeters. The tank's base area is \(12\times6=72\), so the depth is \(144\pi\div72=2\pi\) centimeters. Forgetting \(\pi\) gives 2, forgetting to square the radius gives \(\frac{\pi}{2}\), and using circumference times height (\(2\pi rh\)) gives \(\pi\).`,
    explanationZh: String.raw`罐中水的体积为 \(\pi r^2h=\pi\times4^2\times9=144\pi\) 立方厘米。水箱的底面积为 \(12\times6=72\)，所以水深为 \(144\pi\div72=2\pi\) 厘米。漏掉 \(\pi\) 会得到 2；忘记把半径平方会得到 \(\frac{\pi}{2}\)；错用圆周长乘以高（\(2\pi rh\)）会得到 \(\pi\)。`
  },
  {
    id: "ma-gmd-m09", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["probability-counting"],
    stem: "A fair coin is flipped and a fair six-sided number cube, with faces numbered 1 through 6, is rolled. What is the probability that the coin lands heads and the number cube shows a number greater than 4?",
    stemZh: "抛一枚均匀的硬币，并掷一个均匀的六面骰子（各面分别标有 1 到 6 的点数）。硬币正面朝上且骰子点数大于 4 的概率是多少？",
    choices: [String.raw`\(\frac{1}{12}\)`, String.raw`\(\frac{1}{6}\)`, String.raw`\(\frac{1}{3}\)`, String.raw`\(\frac{5}{6}\)`], answer: 1,
    explanationEn: String.raw`There are \(2\times6=12\) equally likely outcomes. The favorable ones are heads with 5 and heads with 6, which is 2 outcomes, so the probability is \(\frac{2}{12}=\frac{1}{6}\) (or \(\frac{1}{2}\times\frac{2}{6}\)). The choice \(\frac{1}{3}\) ignores the coin, \(\frac{5}{6}\) adds the two probabilities instead of multiplying, and \(\frac{1}{12}\) counts only the outcome heads-and-5.`,
    explanationZh: String.raw`共有 \(2\times6=12\) 种等可能的结果。符合要求的是“正面且 5 点”和“正面且 6 点”，共 2 种，所以概率为 \(\frac{2}{12}=\frac{1}{6}\)（也可以算 \(\frac{1}{2}\times\frac{2}{6}\)）。选 \(\frac{1}{3}\) 是忽略了硬币；\(\frac{5}{6}\) 是把两个概率相加而不是相乘；\(\frac{1}{12}\) 只数了“正面且 5 点”这一种结果。`
  },
  {
    id: "ma-gmd-m10", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["polygons-circles", "perimeter-area"],
    stem: "A circular pond has a radius of 8 meters. A path 4 meters wide, shown shaded in the figure, goes all the way around the pond. What is the area of the path, in square meters?",
    stemZh: "一个圆形水池的半径为 8 米。图中涂上阴影的小路宽 4 米，环绕水池一周。这条小路的面积是多少平方米？",
    figure: {
      kind: "svg",
      altEn: "Two circles with the same center. A horizontal radius of the inner circle is labeled 8. The shaded ring between the inner circle and the outer circle is 4 wide, labeled 4.",
      altZh: "两个同心圆。内圆的一条水平半径标为 8。内圆与外圆之间涂有阴影的圆环宽为 4，标为 4。",
      svg: `<svg viewBox="0 0 280 260"><path d="M32,130 a108,108 0 1,0 216,0 a108,108 0 1,0 -216,0 M68,130 a72,72 0 1,0 144,0 a72,72 0 1,0 -144,0" fill="currentColor" fill-opacity="0.12" fill-rule="evenodd" stroke="none"/><circle cx="140" cy="130" r="108" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="130" r="72" fill="none" stroke="currentColor" stroke-width="2"/><line x1="140" y1="130" x2="248" y2="130" stroke="currentColor" stroke-width="2"/><text x="172" y="122" fill="currentColor" font-size="14">8</text><text x="226" y="122" fill="currentColor" font-size="14">4</text></svg>`
    },
    choices: [String.raw`\(16\pi\)`, String.raw`\(24\pi\)`, String.raw`\(80\pi\)`, String.raw`\(144\pi\)`], answer: 2,
    explanationEn: String.raw`The path is the ring between the pond (radius 8) and the outer circle (radius \(8+4=12\)). Its area is \(\pi(12^2-8^2)=\pi(144-64)=80\pi\). The choice \(144\pi\) is the whole outer circle, pond included; \(16\pi\) treats the width 4 as a radius; and \(24\pi\) is the outer circumference, not an area.`,
    explanationZh: String.raw`小路是水池（半径 8）与外圆（半径 \(8+4=12\)）之间的圆环，面积为 \(\pi(12^2-8^2)=\pi(144-64)=80\pi\)。选 \(144\pi\) 是整个外圆的面积，把水池也算了进去；\(16\pi\) 是把路宽 4 当成了半径；\(24\pi\) 是外圆的周长，不是面积。`
  },
  {
    id: "ma-gmd-m11", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["mean-median-mode"],
    stem: "Noor’s mean score on her first four math quizzes is 76. What score on her fifth quiz will raise her mean for all five quizzes to exactly 80?",
    stemZh: "Noor 前四次数学小测验的平均分是 76。她第五次测验要考多少分，才能使五次测验的平均分恰好提高到 80？",
    choices: ["78", "80", "84", "96"], answer: 3,
    explanationEn: String.raw`A mean of 80 on five quizzes means the scores must total \(5\times80=400\). The first four quizzes total \(4\times76=304\), so the fifth score must be \(400-304=96\). The choice 80 is just the target mean, 84 adds the 4-point increase only once, and 78 averages the old mean and the target mean.`,
    explanationZh: String.raw`五次测验的平均分要达到 80，总分必须是 \(5\times80=400\)。前四次的总分是 \(4\times76=304\)，所以第五次要得 \(400-304=96\) 分。选 80 只是目标平均分；84 是只加了一次 4 分的提高量；78 是把原来的平均分和目标平均分再取平均。`
  },
  {
    id: "ma-gmd-m12", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["angles-lines-triangles", "polygons-circles"],
    stem: String.raw`The measures of the four angles of a quadrilateral are in the ratio \(1:2:3:4\). What is the measure, in degrees, of the largest angle?`,
    stemZh: String.raw`一个四边形的四个内角度数之比为 \(1:2:3:4\)。最大的角是多少度？`,
    choices: ["36", "72", "90", "144"], answer: 3,
    explanationEn: String.raw`The angles of a quadrilateral add up to \(360^\circ\). The ratio \(1:2:3:4\) has \(1+2+3+4=10\) equal parts, so one part is \(360\div10=36\) and the largest angle is \(4\times36=144\). The choice 36 is only one part, 72 comes from wrongly using \(180^\circ\) (the triangle sum), and 90 divides 360 by 4 as if the angles were equal.`,
    explanationZh: String.raw`四边形的内角和是 \(360^\circ\)。比 \(1:2:3:4\) 共有 \(1+2+3+4=10\) 份，每份是 \(360\div10=36\)，最大的角是 \(4\times36=144\)。选 36 只是一份；72 是误用了三角形的内角和 \(180^\circ\)；90 是把 360 直接除以 4，当成四个角相等。`
  }
];
