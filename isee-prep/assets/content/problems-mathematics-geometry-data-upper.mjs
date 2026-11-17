// Original ISEE-style Mathematics Achievement practice (Upper Level): geometry, measurement, and data analysis & probability.
// 12 items: ma-gmd-u01..u12.
export const PROBLEMS = [
  {
    id: "ma-gmd-u01", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["pythagorean-similarity", "perimeter-area"],
    stem: "A rectangular garden is 24 meters long and 16 meters wide. In a scale drawing of the garden, 1 centimeter represents 4 meters. What is the area of the garden in the scale drawing?",
    stemZh: "一块长方形花园长 24 米、宽 16 米。在这座花园的比例图中，1 厘米代表 4 米。花园在比例图中的面积是多少？",
    choices: ["20 square centimeters", "24 square centimeters", "96 square centimeters", "384 square centimeters"], answer: 1,
    explanationEn: String.raw`The scale applies to lengths. The drawing is \(24\div4=6\) cm long and \(16\div4=4\) cm wide, so its area is \(6\times4=24\) square centimeters. The choice 96 divides the real area (384 square meters) by only 4, but both dimensions shrink by a factor of 4, so the area is divided by \(4\times4=16\). The choice 384 is the real area, not the drawing’s, and 20 is the drawing’s perimeter.`,
    explanationZh: String.raw`比例尺针对的是长度。图上花园长 \(24\div4=6\) 厘米、宽 \(16\div4=4\) 厘米，所以图上面积为 \(6\times4=24\) 平方厘米。选 96 是把实际面积 384 平方米只除以了 4，但长和宽都缩小为原来的 \(\frac{1}{4}\)，面积应除以 \(4\times4=16\)；选 384 是实际面积，不是图上面积；选 20 则是图上长方形的周长。`
  },
  {
    id: "ma-gmd-u02", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["polygons-circles", "angles-lines-triangles"],
    stem: String.raw`Each interior angle of a regular polygon measures \(135^\circ\). How many sides does the polygon have?`,
    stemZh: String.raw`一个正多边形的每个内角都是 \(135^\circ\)。这个多边形有多少条边？`,
    choices: ["4", "6", "8", "10"], answer: 2,
    explanationEn: String.raw`Each exterior angle is \(180^\circ-135^\circ=45^\circ\), and the exterior angles of any convex polygon add up to \(360^\circ\), so the polygon has \(360\div45=8\) sides. Check: \((8-2)\times180^\circ=1080^\circ\) and \(1080^\circ\div8=135^\circ\). The choice 4 divides \(180\) instead of \(360\) by \(45\), while a regular hexagon (6 sides) has \(120^\circ\) angles and a regular decagon (10 sides) has \(144^\circ\) angles.`,
    explanationZh: String.raw`每个外角为 \(180^\circ-135^\circ=45^\circ\)，而任意凸多边形的外角和都是 \(360^\circ\)，所以边数为 \(360\div45=8\)。检验：\((8-2)\times180^\circ=1080^\circ\)，\(1080^\circ\div8=135^\circ\)。选 4 是把 \(180\)（而不是 \(360\)）除以了 \(45\)；正六边形的内角是 \(120^\circ\)，正十边形的内角是 \(144^\circ\)，都不符合。`
  },
  {
    id: "ma-gmd-u03", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["mean-median-mode"],
    stem: "Five quiz scores have a mean of 78. A sixth quiz score is added, and the mean of all six scores becomes 80. What is the sixth score?",
    stemZh: "五次测验成绩的平均数是 78。再加入第六次测验成绩后，六次成绩的平均数变成了 80。第六次测验的成绩是多少？",
    choices: ["80", "82", "88", "90"], answer: 3,
    explanationEn: String.raw`The first five scores total \(5\times78=390\), and all six total \(6\times80=480\), so the sixth score is \(480-390=90\). The choices 80 and 82 treat the new mean or the rise of 2 as if it were the score itself, and 88 spreads the 2-point rise over 5 scores instead of 6 (\(78+2\times5\)).`,
    explanationZh: String.raw`前五次成绩的总和是 \(5\times78=390\)，六次成绩的总和是 \(6\times80=480\)，所以第六次成绩为 \(480-390=90\)。选 80 和 82 是把新的平均数或平均数的增加值直接当成了成绩；选 88 是用 5（而不是 6）去乘增加的 2 分（\(78+2\times5\)）。`
  },
  {
    id: "ma-gmd-u04", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["polygons-circles", "angles-lines-triangles"],
    stem: String.raw`In the figure, O is the center of the circle and the measure of \(\angle AOB\) is \(80^\circ\). What is the measure of \(\angle ACB\)?`,
    stemZh: String.raw`如图，O 是圆心，\(\angle AOB\) 的度数是 \(80^\circ\)。\(\angle ACB\) 的度数是多少？`,
    figure: {
      kind: "svg",
      altEn: "A circle with center O. Points A and B lie on the lower part of the circle and point C lies near the top. Segments OA and OB are radii, and the angle between them, angle AOB, is labeled 80 degrees. Segments CA and CB form angle ACB at C.",
      altZh: "一个圆，圆心为 O。点 A、B 在圆的下部，点 C 在圆的上部。OA、OB 是半径，它们的夹角 ∠AOB 标注为 80°。线段 CA 和 CB 在 C 处构成 ∠ACB。",
      svg: `<svg viewBox="0 0 300 260"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="150" cy="135" r="100"/><path d="M150 135L85.7 211.6M150 135L214.3 211.6M167.4 36.5L85.7 211.6M167.4 36.5L214.3 211.6"/><path d="M133.3 154.9A26 26 0 0 0 166.7 154.9" stroke-width="1.5"/></g><circle cx="150" cy="135" r="3" fill="currentColor"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="168" y="26">C</text><text x="70" y="226">A</text><text x="230" y="226">B</text><text x="162" y="128">O</text><text x="150" y="196">80°</text></g></svg>`
    },
    choices: [String.raw`\(40^\circ\)`, String.raw`\(50^\circ\)`, String.raw`\(80^\circ\)`, String.raw`\(160^\circ\)`], answer: 0,
    explanationEn: String.raw`An inscribed angle is half of the central angle that intercepts the same arc. Both \(\angle ACB\) and \(\angle AOB\) intercept arc AB, so \(\angle ACB=80^\circ\div2=40^\circ\). The choice \(80^\circ\) treats the two angles as equal, \(160^\circ\) doubles instead of halving, and \(50^\circ\) is the base angle of isosceles triangle OAB, not the angle at C.`,
    explanationZh: String.raw`圆周角等于它所对的同一段弧所对圆心角的一半。\(\angle ACB\) 与 \(\angle AOB\) 都对着弧 AB，所以 \(\angle ACB=80^\circ\div2=40^\circ\)。选 \(80^\circ\) 是把两个角当成相等；\(160^\circ\) 是把“取一半”错成了“加倍”；\(50^\circ\) 是等腰三角形 OAB 的底角，不是 C 处的角。`
  },
  {
    id: "ma-gmd-u05", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["pythagorean-similarity"],
    stem: "Two vertical poles stand on level ground 12 meters apart. The taller pole is 16 meters high and the shorter pole is 11 meters high. Each wire is straight. Wire A runs from the top of the taller pole to the top of the shorter pole, and wire B runs from the top of the taller pole to the base of the shorter pole, as shown in the figure. How many meters longer is wire B than wire A?",
    stemZh: "两根竖直的杆子立在水平地面上，相距 12 米。较高的杆高 16 米，较矮的杆高 11 米。两根钢丝都是笔直的：钢丝 A 从较高杆的顶端拉到较矮杆的顶端，钢丝 B 从较高杆的顶端拉到较矮杆的底部（如图）。钢丝 B 比钢丝 A 长多少米？",
    figure: {
      kind: "svg",
      altEn: "Two vertical poles stand on level ground 12 meters apart. The left pole is 16 meters high and the right pole is 11 meters high. Wire A joins the top of the left pole to the top of the right pole, and wire B joins the top of the left pole to the base of the right pole.",
      altZh: "两根竖直的杆子立在水平地面上，相距 12 米。左边的杆高 16 米，右边的杆高 11 米。钢丝 A 连接左杆顶端与右杆顶端，钢丝 B 连接左杆顶端与右杆底部。",
      svg: `<svg viewBox="0 0 300 275"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M30 232H270M60 232V40M204 232V100M60 40L204 100M60 40L204 232"/><path d="M60 220H72V232M204 220H192V232M60 238V250M204 238V250M60 244H204" stroke-width="1.5"/></g><g fill="currentColor"><circle cx="60" cy="40" r="3.5"/><circle cx="204" cy="100" r="3.5"/></g><g fill="currentColor" font-size="14"><text x="52" y="140" text-anchor="end">16 m</text><text x="212" y="176">11 m</text><text x="132" y="268" text-anchor="middle">12 m</text><text x="128" y="60">A</text><text x="146" y="142">B</text></g></svg>`
    },
    choices: ["5", "7", "13", "20"], answer: 1,
    explanationEn: String.raw`Wire A is the hypotenuse of a right triangle with legs 12 and \(16-11=5\), so it is \(\sqrt{12^2+5^2}=13\) meters long. Wire B is the hypotenuse of a right triangle with legs 12 and 16, so it is \(\sqrt{12^2+16^2}=20\) meters long, which is \(20-13=7\) meters longer than wire A. The choice 5 is only the difference in the pole heights, and 13 and 20 are the lengths of single wires, not the difference between them.`,
    explanationZh: String.raw`钢丝 A 是直角三角形的斜边，两条直角边分别为 12 和 \(16-11=5\)，所以它长 \(\sqrt{12^2+5^2}=13\) 米；钢丝 B 也是直角三角形的斜边，两条直角边分别为 12 和 16，所以它长 \(\sqrt{12^2+16^2}=20\) 米，比钢丝 A 长 \(20-13=7\) 米。选 5 只是两根杆子的高度差；选 13 和 20 分别是单根钢丝的长度，而不是两者的差。`
  },
  {
    id: "ma-gmd-u06", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["volume-surface-area"],
    stem: String.raw`A cylindrical container with radius 3 inches and height 12 inches is full of juice. All of the juice is poured into cone-shaped cups, each with radius 3 inches and height 6 inches. The volume of a cone is \(V=\frac{1}{3}\pi r^2h\). How many cups can be filled to the top?`,
    stemZh: String.raw`一个半径 3 英寸、高 12 英寸的圆柱形容器装满了果汁。把所有果汁倒入圆锥形杯子，每个杯子的半径为 3 英寸、高为 6 英寸。圆锥的体积公式是 \(V=\frac{1}{3}\pi r^2h\)。这些果汁可以把几个杯子倒满？`,
    choices: ["2", "3", "6", "18"], answer: 2,
    explanationEn: String.raw`The container holds \(\pi\times3^2\times12=108\pi\) cubic inches, and each cup holds \(\frac{1}{3}\pi\times3^2\times6=18\pi\) cubic inches, so \(108\pi\div18\pi=6\) cups. The choice 2 forgets the \(\frac{1}{3}\) in the cone formula, 3 treats each cup as one third of the container and forgets that a cup is only half as tall, and 18 forgets to square the radius in the cone formula.`,
    explanationZh: String.raw`圆柱形容器的容积是 \(\pi\times3^2\times12=108\pi\) 立方英寸，每个圆锥形杯子的容积是 \(\frac{1}{3}\pi\times3^2\times6=18\pi\) 立方英寸，所以可以倒满 \(108\pi\div18\pi=6\) 个杯子。选 2 是漏乘了圆锥公式中的 \(\frac{1}{3}\)；选 3 是把每个杯子当成容器的 \(\frac{1}{3}\)，而忽略了杯子的高只有容器的一半；选 18 是在圆锥公式中忘了把半径平方。`
  },
  {
    id: "ma-gmd-u07", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["coordinate-transformations", "pythagorean-similarity"],
    stem: String.raw`Triangle ABC is graphed on the coordinate grid, where the side of each grid square is 1 unit long. The triangle is dilated about the origin by a scale factor of 3 to form triangle \(A'B'C'\). What is the perimeter of triangle \(A'B'C'\)?`,
    stemZh: String.raw`三角形 ABC 画在下面的坐标网格中，每个小方格的边长为 1 个单位。以原点为中心、比例系数为 3 将这个三角形放大，得到三角形 \(A'B'C'\)。三角形 \(A'B'C'\) 的周长是多少？`,
    figure: {
      kind: "svg",
      altEn: "A coordinate grid with triangle ABC. Vertex A is at (1, 1), B is at (5, 1) and C is at (1, 4), so the triangle has a right angle at A. The side of each grid square is 1 unit long.",
      altZh: "坐标网格上有三角形 ABC：A 在 (1, 1)，B 在 (5, 1)，C 在 (1, 4)，直角在 A 处。每个小方格的边长为 1 个单位。",
      svg: `<svg viewBox="0 0 310 240"><path d="M40 210V10M80 210V10M120 210V10M160 210V10M200 210V10M240 210V10M280 210V10M40 210H280M40 170H280M40 130H280M40 90H280M40 50H280M40 10H280" fill="none" stroke="currentColor" stroke-opacity="0.2" stroke-width="1"/><path d="M28 210H288M40 218V8" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="296,210 286,205 286,215" fill="currentColor"/><polygon points="40,2 35,12 45,12" fill="currentColor"/><polygon points="80,170 240,170 80,50" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g fill="currentColor"><circle cx="80" cy="170" r="3.5"/><circle cx="240" cy="170" r="3.5"/><circle cx="80" cy="50" r="3.5"/></g><g fill="currentColor" font-size="14"><text x="80" y="228" text-anchor="middle">1</text><text x="120" y="228" text-anchor="middle">2</text><text x="160" y="228" text-anchor="middle">3</text><text x="200" y="228" text-anchor="middle">4</text><text x="240" y="228" text-anchor="middle">5</text><text x="280" y="228" text-anchor="middle">6</text><text x="32" y="175" text-anchor="end">1</text><text x="32" y="135" text-anchor="end">2</text><text x="32" y="95" text-anchor="end">3</text><text x="32" y="55" text-anchor="end">4</text><text x="32" y="15" text-anchor="end">5</text><text x="32" y="228" text-anchor="end">0</text><text x="296" y="196">x</text><text x="50" y="16">y</text><text x="66" y="188">A</text><text x="248" y="188">B</text><text x="64" y="46">C</text></g></svg>`
    },
    choices: ["12", "36", "54", "108"], answer: 1,
    explanationEn: String.raw`From the grid, A(1, 1), B(5, 1) and C(1, 4), so the legs are 4 and 3 and the hypotenuse is \(\sqrt{4^2+3^2}=5\). The perimeter of ABC is \(4+3+5=12\). A dilation with scale factor 3 multiplies every length by 3, so the new perimeter is \(3\times12=36\). The choice 12 is the original perimeter, 54 is the area of the image, and 108 wrongly multiplies the perimeter by \(3^2\) (only area changes by the square of the scale factor).`,
    explanationZh: String.raw`从网格中读出 A(1, 1)、B(5, 1)、C(1, 4)，所以两条直角边分别为 4 和 3，斜边为 \(\sqrt{4^2+3^2}=5\)，三角形 ABC 的周长是 \(4+3+5=12\)。比例系数为 3 的放大会使每条线段的长度变为原来的 3 倍，所以新的周长是 \(3\times12=36\)。选 12 是原三角形的周长；选 54 是放大后三角形的面积；选 108 是把周长乘了 \(3^2\)（只有面积才按比例系数的平方倍变化）。`
  },
  {
    id: "ma-gmd-u08", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["units-rates-time", "graphs-tables"],
    stem: "The line graph shows the total distance a delivery van had driven at 15-minute intervals after it left the depot. What was the van’s average speed, in miles per hour, from the 45-minute mark to the 60-minute mark?",
    stemZh: "折线图显示了一辆送货车离开仓库后，每隔 15 分钟时的累计行驶里程。从第 45 分钟到第 60 分钟，这辆车的平均速度是多少英里/小时？",
    figure: {
      kind: "line", titleEn: "Miles driven by a delivery van", labels: ["0", "15", "30", "45", "60", "75"], series: [{ values: [0, 5, 10, 10, 20, 25] }],
      xLabelEn: "Minutes after leaving the depot", yLabelEn: "Total miles driven",
      altEn: "A line graph of the total miles driven by a van at 15-minute marks: 0 miles at 0 minutes, 5 at 15, 10 at 30, 10 at 45, 20 at 60 and 25 at 75 minutes.",
      altZh: "折线图：送货车在 0、15、30、45、60、75 分钟时的累计行驶里程分别为 0、5、10、10、20、25 英里。"
    },
    choices: ["10", "20", "40", "80"], answer: 2,
    explanationEn: String.raw`From minute 45 to minute 60 the total distance rises from 10 miles to 20 miles, so the van drove 10 miles in 15 minutes, which is \(\frac{1}{4}\) of an hour. Its speed was \(10\div\frac{1}{4}=40\) miles per hour. The choice 10 forgets to convert 15 minutes to hours, 20 reads the total distance at minute 60 as if it were a speed, and 80 divides that total of 20 miles by \(\frac{1}{4}\) hour.`,
    explanationZh: String.raw`从第 45 分钟到第 60 分钟，累计里程由 10 英里增加到 20 英里，也就是 15 分钟（\(\frac{1}{4}\) 小时）行驶了 10 英里，所以速度为 \(10\div\frac{1}{4}=40\) 英里/小时。选 10 是忘了把 15 分钟换算成小时；选 20 是把第 60 分钟时的累计里程当成了速度；选 80 是用累计里程 20 英里去除以 \(\frac{1}{4}\) 小时。`
  },
  {
    id: "ma-gmd-u09", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["probability-counting", "graphs-tables"],
    stem: "A bag contains marbles in the colors shown in the table. Two marbles are drawn at random, one after the other, and the first marble is not put back before the second is drawn. What is the probability that the two marbles drawn are one red and one blue, in either order?",
    stemZh: "一个袋子里装有下表所示颜色的弹珠。随机依次取出两颗弹珠，第一颗取出后不放回，再取第二颗。取出的两颗弹珠是一红一蓝（不分先后顺序）的概率是多少？",
    figure: {
      kind: "table", headers: ["Color", "Number of marbles"], rows: [["Red", "5"], ["Blue", "3"], ["Green", "2"]],
      altEn: "A table of marbles in a bag: 5 red, 3 blue and 2 green, for 10 marbles in all.",
      altZh: "袋中弹珠数量表：红色 5 颗，蓝色 3 颗，绿色 2 颗，共 10 颗。"
    },
    choices: [String.raw`\(\frac{3}{20}\)`, String.raw`\(\frac{1}{6}\)`, String.raw`\(\frac{3}{10}\)`, String.raw`\(\frac{1}{3}\)`], answer: 3,
    explanationEn: String.raw`Red then blue has probability \(\frac{5}{10}\times\frac{3}{9}=\frac{1}{6}\), and blue then red has probability \(\frac{3}{10}\times\frac{5}{9}=\frac{1}{6}\), so the total for the two orders is \(\frac{1}{3}\). The choice \(\frac{1}{6}\) counts only one order, \(\frac{3}{10}\) forgets that the first marble is not put back (it uses \(2\times\frac{5}{10}\times\frac{3}{10}\)), and \(\frac{3}{20}\) makes both mistakes.`,
    explanationZh: String.raw`先红后蓝的概率是 \(\frac{5}{10}\times\frac{3}{9}=\frac{1}{6}\)，先蓝后红的概率是 \(\frac{3}{10}\times\frac{5}{9}=\frac{1}{6}\)，两种顺序合计为 \(\frac{1}{3}\)。选 \(\frac{1}{6}\) 只算了一种顺序；选 \(\frac{3}{10}\) 忘了第一颗不放回，第二次仍按 10 颗计算（\(2\times\frac{5}{10}\times\frac{3}{10}\)）；选 \(\frac{3}{20}\) 则同时犯了这两个错误。`
  },
  {
    id: "ma-gmd-u10", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["perimeter-area", "polygons-circles"],
    stem: "In the figure, ABCD is a square with side length 12. Four quarter circles, each with radius 6, are drawn with their centers at the four vertices of the square. What is the area of the shaded region, which lies inside the square but outside all four quarter circles?",
    stemZh: "如图，ABCD 是边长为 12 的正方形。以正方形的四个顶点为圆心，各画一个半径为 6 的四分之一圆。阴影部分位于正方形内、四个四分之一圆之外，它的面积是多少？",
    figure: {
      kind: "svg",
      altEn: "A square ABCD with side length 12. A quarter circle of radius 6 is drawn at each corner, centered at that vertex, so neighboring quarter circles touch at the midpoints of the sides. The curved region in the middle of the square, outside all four quarter circles, is shaded.",
      altZh: "边长为 12 的正方形 ABCD。以每个顶点为圆心画一个半径为 6 的四分之一圆，相邻的四分之一圆在各边的中点处相切。正方形中间、四个四分之一圆之外的弧边区域涂有阴影。",
      svg: `<svg viewBox="0 0 290 274"><path d="M148 30A108 108 0 0 0 256 138A108 108 0 0 0 148 246A108 108 0 0 0 40 138A108 108 0 0 0 148 30Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><path d="M40 30H256V246H40Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M40 30L116.4 106.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><g fill="currentColor" font-size="14"><text x="24" y="26">A</text><text x="260" y="26">B</text><text x="260" y="266">C</text><text x="24" y="266">D</text><text x="88" y="62">6</text><text x="264" y="142">12</text></g></svg>`
    },
    choices: [String.raw`\(144-36\pi\)`, String.raw`\(144-18\pi\)`, String.raw`\(36\pi\)`, String.raw`\(144-9\pi\)`], answer: 0,
    explanationEn: String.raw`The four quarter circles together make one full circle of radius 6, with area \(\pi\times6^2=36\pi\). The shaded region is what is left of the square: \(12^2-36\pi=144-36\pi\). The choice \(36\pi\) is the area of the circles themselves, \(144-18\pi\) subtracts only half of the circular area, and \(144-9\pi\) subtracts just one quarter circle.`,
    explanationZh: String.raw`四个四分之一圆合起来正好是一个半径为 6 的完整圆，面积为 \(\pi\times6^2=36\pi\)。阴影部分是正方形去掉这些圆之后剩下的部分：\(12^2-36\pi=144-36\pi\)。选 \(36\pi\) 是圆本身的面积；选 \(144-18\pi\) 只减去了一半的圆面积；选 \(144-9\pi\) 只减去了一个四分之一圆。`
  },
  {
    id: "ma-gmd-u11", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["probability-counting"],
    stem: "A school club will choose a committee of 3 students from a group of 5 girls and 4 boys. The committee must include at least one boy. How many different committees are possible?",
    stemZh: "一个学校社团要从 5 名女生和 4 名男生中选出 3 名学生组成委员会，委员会中至少要有一名男生。一共可以组成多少个不同的委员会？",
    choices: ["74", "84", "112", "504"], answer: 0,
    explanationEn: String.raw`A committee is a group, so order does not matter: there are \(\frac{9\times8\times7}{3\times2\times1}=84\) ways to choose 3 of the 9 students, and \(\frac{5\times4\times3}{3\times2\times1}=10\) of those committees have no boys. So \(84-10=74\) committees have at least one boy. The choice 84 ignores the “at least one boy” rule, 112 picks a boy first and then any 2 of the other 8 students (\(4\times28\)), which counts committees with several boys more than once, and 504 counts ordered arrangements (\(9\times8\times7\)).`,
    explanationZh: String.raw`委员会是一个组合，与顺序无关：从 9 名学生中任选 3 人有 \(\frac{9\times8\times7}{3\times2\times1}=84\) 种选法，其中没有男生（3 人全是女生）的有 \(\frac{5\times4\times3}{3\times2\times1}=10\) 种。所以至少有一名男生的委员会有 \(84-10=74\) 个。选 84 是忽略了“至少一名男生”的条件；选 112 是先选一名男生、再从其余 8 人中任选 2 人（\(4\times28\)），这样会把含多名男生的委员会重复计数；选 504 是把顺序也算了进去（\(9\times8\times7\)）。`
  },
  {
    id: "ma-gmd-u12", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["volume-surface-area", "pythagorean-similarity"],
    stem: "The figure shows a square pyramid. Its square base has edges of length 6, and its height, the perpendicular distance from the top point to the center of the base, is 4. Figure not drawn to scale. What is the total surface area of the pyramid, including its base?",
    stemZh: "如图是一个正四棱锥。它的底面是边长为 6 的正方形，高（顶点到底面中心的垂直距离）为 4。图形未按比例绘制。这个棱锥的总表面积（包括底面）是多少？",
    figure: {
      kind: "svg",
      altEn: "A square pyramid drawn in perspective. The square base has an edge labeled 6. A dotted segment from the top point straight down to the center of the base is labeled 4 and meets the base at a right angle.",
      altZh: "一个正四棱锥的立体图。正方形底面的边长标为 6；从顶点垂直向下到底面中心的虚线段标为 4，并与底面垂直。",
      svg: `<svg viewBox="0 0 300 240"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M150 40L50 200L190 200L250 160L150 40M150 40L190 200"/><path d="M150 40L110 160L50 200M110 160L250 160" stroke-dasharray="6 4"/><path d="M150 40V180" stroke-width="1.5" stroke-dasharray="2 3"/><path d="M150 168H162V180" stroke-width="1.5"/></g><g fill="currentColor" font-size="14"><text x="120" y="220" text-anchor="middle">6</text><text x="157" y="140">4</text></g></svg>`
    },
    choices: ["48", "60", "84", "96"], answer: 3,
    explanationEn: String.raw`The slant height of each triangular face is the hypotenuse of a right triangle with legs 4 (the height) and 3 (half of the base edge): \(\sqrt{3^2+4^2}=5\). Each face has area \(\frac{1}{2}\times6\times5=15\), so the four faces total 60. Adding the square base, \(6\times6=36\), gives \(60+36=96\). The choice 84 uses the height 4 instead of the slant height 5, 60 leaves out the base, and 48 makes both mistakes.`,
    explanationZh: String.raw`每个三角形侧面的斜高是一个直角三角形的斜边，两条直角边分别是 4（棱锥的高）和 3（底边长的一半），所以斜高为 \(\sqrt{3^2+4^2}=5\)。每个侧面的面积是 \(\frac{1}{2}\times6\times5=15\)，四个侧面共 60；再加上正方形底面 \(6\times6=36\)，总表面积为 \(60+36=96\)。选 84 是用高 4 代替了斜高 5；选 60 漏掉了底面；选 48 则同时犯了这两个错误。`
  }
];
