export const TOPIC = {
  id: "geometry",
  zh: "几何",
  en: "Geometry",
  officialAlignment: "Study-guide topic for the ISEE content area “Geometry” in Quantitative Reasoning and Mathematics Achievement; the Upper Level draws on high-school geometry (no trigonometry).",
  officialAlignmentZh: "对应 ISEE 数量推理与数学能力中的“几何”领域；高级涉及高中几何内容（不含三角函数）。",
  concepts: [
    {
      id: "angles-lines-triangles",
      zh: "角、平行线与三角形",
      en: "Angles, Lines & Triangles",
      detailEn: "Angle types, complementary, supplementary and vertical angles, parallel lines cut by a transversal, the triangle angle sum, exterior angles, triangle types and the triangle inequality.",
      detailZh: "角的分类，余角、补角与对顶角，平行线被截线所截，三角形内角和与外角，三角形的分类以及三角形不等式。",
      explanationEn: String.raw`Angles are measured in degrees: a right angle is \(90^\circ\), a straight angle is \(180^\circ\) and a full turn is \(360^\circ\). Nearly every angle question rests on three facts: angles that form a straight line add to \(180^\circ\), angles around a point add to \(360^\circ\), and the three angles of a triangle add to \(180^\circ\). Lower Level asks you to name angles and find a missing one. Middle Level adds parallel lines and the exterior-angle rule. Upper Level adds angle measures written as algebraic expressions and the triangle inequality. Many diagrams are marked “not drawn to scale,” so reason from the labelled facts rather than measuring by eye.`,
      explanationZh: String.raw`角用度来度量：直角是 \(90^\circ\)，平角是 \(180^\circ\)，周角是 \(360^\circ\)。几乎所有求角的题都建立在三个事实上：组成一条直线的角相加为 \(180^\circ\)，围绕一点的角相加为 \(360^\circ\)，三角形的三个内角相加为 \(180^\circ\)。初级主要要求认识各种角并求出缺少的角；中级增加平行线和三角形外角；高级增加用代数式表示的角度以及三角形不等式。许多图形会注明“未按比例绘制”，所以要根据标出的条件推理，而不要凭眼睛去量。`,
      keyPoints: [
        {
          titleEn: "Angle types, complements and supplements",
          titleZh: "角的分类、余角与补角",
          formula: String.raw`\angle A+\angle B=90^\circ\ \text{(complementary)},\quad \angle A+\angle B=180^\circ\ \text{(supplementary)}`,
          explanationEn: String.raw`An acute angle is less than \(90^\circ\), a right angle is exactly \(90^\circ\), an obtuse angle is between \(90^\circ\) and \(180^\circ\), and a straight angle is \(180^\circ\). Two angles are complementary if they add to \(90^\circ\) and supplementary if they add to \(180^\circ\); a handy memory aid is that C comes before S, just as 90 comes before 180. The two angles do not have to touch each other to be complementary or supplementary.`,
          explanationZh: String.raw`锐角小于 \(90^\circ\)，直角恰好是 \(90^\circ\)，钝角介于 \(90^\circ\) 与 \(180^\circ\) 之间，平角是 \(180^\circ\)。两个角之和为 \(90^\circ\) 时互为余角，和为 \(180^\circ\) 时互为补角；可以这样记：余（Complementary）在前，补（Supplementary）在后，就像 90 在前、180 在后。两个角不必相邻，也可以互余或互补。`,
          exampleEn: String.raw`Two angles are supplementary and one is 4 times the other. Then \(x+4x=180\), so \(x=36^\circ\) and the angles are \(36^\circ\) and \(144^\circ\). The complement of a \(35^\circ\) angle is \(90^\circ-35^\circ=55^\circ\).`,
          exampleZh: String.raw`两个角互补，其中一个是另一个的 4 倍。则 \(x+4x=180\)，所以 \(x=36^\circ\)，两个角分别是 \(36^\circ\) 和 \(144^\circ\)。\(35^\circ\) 角的余角是 \(90^\circ-35^\circ=55^\circ\)。`
        },
        {
          titleEn: "Vertical angles and angles around a point",
          titleZh: "对顶角与围绕一点的角",
          formula: String.raw`a+b=180^\circ\ \text{(angles on a line)},\qquad a+b+c+d=360^\circ\ \text{(around a point)}`,
          explanationEn: String.raw`When two lines cross, they form four angles. The angles opposite each other (vertical angles) are equal, and angles next to each other along a line are supplementary. All the angles around the crossing point add to \(360^\circ\). For problems with variables, name the relationship first and only then write the equation.`,
          explanationZh: String.raw`两条直线相交，形成四个角。相对的两个角（对顶角）相等，沿同一条直线相邻的两个角互补，围绕交点的所有角相加为 \(360^\circ\)。遇到含变量的题，先说出角之间的关系，再列方程。`,
          exampleEn: String.raw`Two lines cross. One angle is \((2x+10)^\circ\) and the angle opposite it is \((3x-20)^\circ\). Vertical angles are equal, so \(2x+10=3x-20\) and \(x=30\). Each of these angles is \(70^\circ\), so each of the other two angles is \(180^\circ-70^\circ=110^\circ\).`,
          exampleZh: String.raw`两条直线相交。一个角是 \((2x+10)^\circ\)，它的对顶角是 \((3x-20)^\circ\)。对顶角相等，所以 \(2x+10=3x-20\)，\(x=30\)。这两个角都是 \(70^\circ\)，另外两个角各是 \(180^\circ-70^\circ=110^\circ\)。`
        },
        {
          titleEn: "Parallel lines cut by a transversal",
          titleZh: "平行线被截线所截",
          explanationEn: String.raw`When a line (the transversal) crosses two parallel lines, it makes eight angles that take only two different sizes (all eight are \(90^\circ\) if the transversal is perpendicular). Corresponding angles, which sit in the same position at each crossing, are equal. Alternate interior angles, which lie between the parallel lines on opposite sides of the transversal, are equal. Same-side interior angles add to \(180^\circ\). These facts hold only when the lines are known to be parallel.`,
          explanationZh: String.raw`一条直线（截线）与两条平行线相交时，会形成八个角，它们只有两种大小（若截线与平行线垂直，则八个角都是 \(90^\circ\)）。同位角（在两个交点处位置相同的角）相等；内错角（在两条平行线之间、位于截线两侧的角）相等；同旁内角之和为 \(180^\circ\)。这些结论只有在已知两条直线平行时才成立。`,
          stepsEn: [
            String.raw`Lines \(l\) and \(m\) are parallel, and a transversal makes alternate interior angles of \((3x+5)^\circ\) and \((5x-25)^\circ\).`,
            String.raw`Alternate interior angles are equal, so \(3x+5=5x-25\).`,
            String.raw`Solve: \(30=2x\), so \(x=15\).`,
            String.raw`Each angle is \(3(15)+5=50^\circ\); check: \(5(15)-25=50^\circ\).`
          ],
          stepsZh: [
            String.raw`直线 \(l\) 与 \(m\) 平行，一条截线形成的两个内错角分别是 \((3x+5)^\circ\) 和 \((5x-25)^\circ\)。`,
            String.raw`内错角相等，所以 \(3x+5=5x-25\)。`,
            String.raw`解得 \(30=2x\)，\(x=15\)。`,
            String.raw`每个角都是 \(3(15)+5=50^\circ\)；检验：\(5(15)-25=50^\circ\)。`
          ],
          exampleEn: String.raw`If one of the eight angles is \(65^\circ\), then four of the angles are \(65^\circ\) and the other four are \(180^\circ-65^\circ=115^\circ\). If two same-side interior angles measure \(x\) and \(2x\), then \(3x=180\), so \(x=60^\circ\).`,
          exampleZh: String.raw`若八个角中有一个是 \(65^\circ\)，则其中四个角是 \(65^\circ\)，另外四个角是 \(180^\circ-65^\circ=115^\circ\)。若两个同旁内角分别为 \(x\) 和 \(2x\)，则 \(3x=180\)，所以 \(x=60^\circ\)。`
        },
        {
          titleEn: "Triangle angle sum and exterior angles",
          titleZh: "三角形内角和与外角",
          formula: String.raw`\angle A+\angle B+\angle C=180^\circ,\qquad \text{exterior angle at }C=\angle A+\angle B`,
          explanationEn: String.raw`The three interior angles of every triangle add to \(180^\circ\). An exterior angle is formed by extending one side of the triangle. It is supplementary to the interior angle next to it, and it equals the sum of the two interior angles that are not next to it (the remote interior angles). The exterior-angle shortcut often saves a step.`,
          explanationZh: String.raw`任何三角形的三个内角之和都是 \(180^\circ\)。把三角形的一条边延长，就得到外角。外角与相邻的内角互补，并且等于与它不相邻的两个内角之和（“远端内角”）。利用外角这条捷径，常常可以少算一步。`,
          exampleEn: String.raw`A triangle has angles of \(50^\circ\) and \(65^\circ\), so its third angle is \(180^\circ-115^\circ=65^\circ\). Extending a side at the third vertex makes an exterior angle of \(50^\circ+65^\circ=115^\circ\), which is also \(180^\circ-65^\circ\).`,
          exampleZh: String.raw`一个三角形有 \(50^\circ\) 和 \(65^\circ\) 两个角，所以第三个角是 \(180^\circ-115^\circ=65^\circ\)。在第三个顶点处延长一条边，得到的外角是 \(50^\circ+65^\circ=115^\circ\)，它也等于 \(180^\circ-65^\circ\)。`
        },
        {
          titleEn: "Triangle types and the triangle inequality",
          titleZh: "三角形的分类与三角形不等式",
          formula: String.raw`|a-b|<c<a+b`,
          explanationEn: String.raw`By sides: an equilateral triangle has three equal sides (and three \(60^\circ\) angles), an isosceles triangle has two equal sides (and equal angles opposite them), and a scalene triangle has no equal sides. By angles: an acute triangle has all angles under \(90^\circ\), a right triangle has one \(90^\circ\) angle, and an obtuse triangle has one angle over \(90^\circ\). The triangle inequality says that any two sides must add to more than the third, so if two sides are \(a\) and \(b\), the third side \(c\) lies strictly between \(|a-b|\) and \(a+b\).`,
          explanationZh: String.raw`按边分类：等边三角形三条边相等（三个角都是 \(60^\circ\)），等腰三角形有两条边相等（这两条边所对的角也相等），不等边三角形没有相等的边。按角分类：锐角三角形的三个角都小于 \(90^\circ\)，直角三角形有一个 \(90^\circ\) 的角，钝角三角形有一个大于 \(90^\circ\) 的角。三角形不等式指出：任意两边之和必须大于第三边，所以若两边为 \(a\) 和 \(b\)，第三边 \(c\) 严格介于 \(|a-b|\) 与 \(a+b\) 之间。`,
          exampleEn: String.raw`Can sides 3, 4 and 8 form a triangle? No, because \(3+4=7<8\). If two sides are 5 and 9, the third side is between \(9-5=4\) and \(9+5=14\), so the whole-number lengths are 5 through 13, which is nine possibilities. An isosceles triangle has sides of only two different lengths, 4 and 9. Its sides must be 9, 9, 4, because 4, 4, 9 breaks the triangle inequality, so its perimeter is 22.`,
          exampleZh: String.raw`边长 3、4、8 能构成三角形吗？不能，因为 \(3+4=7<8\)。若两边为 5 和 9，第三边介于 \(9-5=4\) 与 \(9+5=14\) 之间，所以整数边长是 5 到 13，共 9 种可能。已知一个等腰三角形的边长只有 4 和 9 两种取值，则三边只能是 9，9，4，因为 4，4，9 不满足三角形不等式，所以周长是 22。`
        }
      ],
      methodsEn: [
        String.raw`Mark every angle you know on a sketch, then look for pairs that make \(90^\circ\), \(180^\circ\) or \(360^\circ\).`,
        "Name the angle relationship (vertical, corresponding, supplementary and so on) before you write an equation.",
        String.raw`In any triangle, find the missing angle with the \(180^\circ\) rule first.`,
        "Test the triangle inequality by adding the two shorter sides and comparing the sum with the longest side.",
        "If a figure is marked “not drawn to scale,” rely on the given facts and never on how the picture looks."
      ],
      methodsZh: [
        String.raw`把已知的角标在草图上，再找和为 \(90^\circ\)、\(180^\circ\) 或 \(360^\circ\) 的组合。`,
        "先说出角的关系（对顶角、同位角、补角等），再列方程。",
        String.raw`遇到三角形，先用 \(180^\circ\) 的内角和求出缺少的角。`,
        "检验三角形不等式时，把两条较短的边相加，再与最长的边比较。",
        "如果图形注明“未按比例绘制”，就只能依据题目给出的条件，不能凭图形的外观判断。"
      ],
      exampleEn: String.raw`In triangle \(ABC\) the angle measures are in the ratio 2 : 3 : 5. Then \(2x+3x+5x=180\), so \(x=18\) and the angles are \(36^\circ\), \(54^\circ\) and \(90^\circ\). One angle is a right angle, so the triangle is a right triangle, and since all three angles differ it is also scalene.`,
      exampleZh: String.raw`三角形 \(ABC\) 的三个角的度数比是 2 : 3 : 5。则 \(2x+3x+5x=180\)，所以 \(x=18\)，三个角分别是 \(36^\circ\)、\(54^\circ\) 和 \(90^\circ\)。其中一个角是直角，所以它是直角三角形；三个角各不相同，所以它也是不等边三角形。`,
      checklistEn: [
        "Name acute, right, obtuse and straight angles and find complements and supplements",
        "Use vertical angles and the angle pairs formed by parallel lines",
        "Find a missing angle with the triangle sum or an exterior angle",
        "Classify triangles by their sides and by their angles",
        "Use the triangle inequality to test or bound a side length"
      ],
      checklistZh: [
        "能说出锐角、直角、钝角和平角，并求余角和补角",
        "能运用对顶角以及平行线形成的各类角",
        "能用内角和或外角求出缺少的角",
        "能按边和按角给三角形分类",
        "能用三角形不等式判断边长或确定边长的范围"
      ]
    },
    {
      id: "polygons-circles",
      zh: "多边形与圆",
      en: "Polygons & Circles",
      detailEn: "Polygon names, interior-angle sums, regular polygons, properties of quadrilaterals, circle vocabulary, central angles, and arcs as fractions of a circle.",
      detailZh: "多边形的名称，内角和，正多边形，四边形的性质，圆的有关术语，圆心角，以及把弧看成整个圆的几分之几。",
      explanationEn: String.raw`A polygon is a closed figure made of straight sides, and it is regular when all of its sides and all of its angles are equal. A circle is the set of points at one fixed distance, the radius, from a center, and arcs are measured as fractions of \(360^\circ\). The ISEE tests this topic through vocabulary, “always, sometimes or never” reasoning about quadrilaterals, and angle calculations. Lower Level emphasises names, the properties of squares, rectangles and other quadrilaterals, and circle vocabulary. Middle Level adds interior-angle sums and arcs as fractions of a circle. Upper Level adds regular-polygon angle formulas, tangents and inscribed angles.`,
      explanationZh: String.raw`多边形是由线段围成的封闭图形，当所有边、所有角都相等时叫作正多边形。圆是到一个定点（圆心）的距离等于定长（半径）的所有点的集合，弧的大小用 \(360^\circ\) 的几分之几来表示。ISEE 通过术语辨析、四边形“一定、有时、绝不”类的推理以及求角来考查这部分内容。初级强调名称、正方形和长方形等四边形的性质以及圆的术语；中级增加内角和以及弧占整个圆的几分之几；高级增加正多边形的角度公式、切线和圆周角。`,
      keyPoints: [
        {
          titleEn: "Polygon names and the interior-angle sum",
          titleZh: "多边形的名称与内角和",
          formula: String.raw`\text{sum of interior angles}=(n-2)\cdot180^\circ`,
          explanationEn: String.raw`Polygons are named by their number of sides: triangle 3, quadrilateral 4, pentagon 5, hexagon 6, heptagon 7, octagon 8, nonagon 9 and decagon 10. From one vertex, draw all the diagonals: an \(n\)-sided polygon is cut into \(n-2\) triangles, and each triangle contributes \(180^\circ\). That is where \((n-2)\cdot180^\circ\) comes from, so you can rebuild the rule instead of memorising it. A common slip is using \(n\cdot180^\circ\).`,
          explanationZh: String.raw`多边形按边数命名：三角形 3 条边，四边形 4，五边形 5，六边形 6，七边形 7，八边形 8，九边形 9，十边形 10。从一个顶点出发画出所有对角线，\(n\) 边形被分成 \(n-2\) 个三角形，每个三角形贡献 \(180^\circ\)，这就是 \((n-2)\cdot180^\circ\) 的来历，所以可以自己推出这个规则，而不必死记。常见的错误是误用 \(n\cdot180^\circ\)。`,
          stepsEn: [
            String.raw`An octagon has \(n=8\) sides, so its interior angles add to \((8-2)\cdot180^\circ=1080^\circ\).`,
            String.raw`A pentagon has \((5-2)\cdot180^\circ=540^\circ\) in total.`,
            String.raw`Suppose four of its angles are \(100^\circ\), \(110^\circ\), \(120^\circ\) and \(90^\circ\), which total \(420^\circ\).`,
            String.raw`The fifth angle is \(540^\circ-420^\circ=120^\circ\).`
          ],
          stepsZh: [
            String.raw`八边形有 \(n=8\) 条边，所以内角和为 \((8-2)\cdot180^\circ=1080^\circ\)。`,
            String.raw`五边形的内角和是 \((5-2)\cdot180^\circ=540^\circ\)。`,
            String.raw`设其中四个角分别是 \(100^\circ\)、\(110^\circ\)、\(120^\circ\) 和 \(90^\circ\)，它们的和是 \(420^\circ\)。`,
            String.raw`第五个角是 \(540^\circ-420^\circ=120^\circ\)。`
          ],
          exampleEn: String.raw`A hexagon splits into 4 triangles, so its angles add to \(4\cdot180^\circ=720^\circ\). Every quadrilateral splits into 2 triangles, so its angles add to \(360^\circ\).`,
          exampleZh: String.raw`六边形可以分成 4 个三角形，所以内角和是 \(4\cdot180^\circ=720^\circ\)。任何四边形都可以分成 2 个三角形，所以内角和是 \(360^\circ\)。`
        },
        {
          titleEn: "Regular polygons: interior and exterior angles",
          titleZh: "正多边形的内角与外角",
          formula: String.raw`\text{interior}=\frac{(n-2)\cdot180^\circ}{n},\qquad \text{exterior}=\frac{360^\circ}{n}`,
          explanationEn: String.raw`In a regular polygon all the interior angles are equal, so divide the interior-angle sum by \(n\). A faster route uses exterior angles: walking once around a convex polygon turns you through \(360^\circ\) in total, so each exterior angle of a regular \(n\)-gon is \(\frac{360^\circ}{n}\), and each interior angle is \(180^\circ\) minus that. This is the quickest way to find the number of sides from an angle.`,
          explanationZh: String.raw`正多边形的所有内角相等，所以把内角和除以 \(n\) 即可。更快的方法是用外角：沿着凸多边形走一圈，总共转过 \(360^\circ\)，所以正 \(n\) 边形的每个外角是 \(\frac{360^\circ}{n}\)，每个内角是 \(180^\circ\) 减去这个外角。已知角度求边数时，这是最快的办法。`,
          exampleEn: String.raw`A regular pentagon has interior-angle sum \(540^\circ\), so each interior angle is \(\frac{540^\circ}{5}=108^\circ\) and each exterior angle is \(72^\circ\). If each interior angle of a regular polygon is \(140^\circ\), each exterior angle is \(40^\circ\), so the number of sides is \(\frac{360}{40}=9\).`,
          exampleZh: String.raw`正五边形的内角和是 \(540^\circ\)，所以每个内角是 \(\frac{540^\circ}{5}=108^\circ\)，每个外角是 \(72^\circ\)。若一个正多边形的每个内角是 \(140^\circ\)，则每个外角是 \(40^\circ\)，边数就是 \(\frac{360}{40}=9\)。`
        },
        {
          titleEn: "Quadrilaterals and their properties",
          titleZh: "四边形及其性质",
          formula: String.raw`\text{sum of the angles of a quadrilateral}=360^\circ`,
          explanationEn: "Every square is a rectangle and a rhombus, every rectangle and rhombus is a parallelogram, and every parallelogram is a quadrilateral, but not the other way around. A parallelogram has opposite sides parallel and equal, opposite angles equal, consecutive angles supplementary, and diagonals that bisect each other. A rectangle is a parallelogram with four right angles and equal diagonals. A rhombus has four equal sides and perpendicular diagonals. A square has all of these properties. A trapezoid has exactly one pair of parallel sides. For “always, sometimes or never” questions, hunt for a counterexample.",
          explanationZh: "每个正方形都是长方形，也是菱形；每个长方形和菱形都是平行四边形；每个平行四边形都是四边形，但反过来不成立。平行四边形的对边平行且相等，对角相等，邻角互补，对角线互相平分。长方形是四个角都是直角的平行四边形，对角线相等。菱形四条边都相等，对角线互相垂直。正方形同时具有以上所有性质。梯形恰好有一组平行的边。遇到“一定、有时、绝不”这类问题，要想办法找反例。",
          exampleEn: String.raw`Is every rectangle a square? No: a 3 by 5 rectangle has unequal sides. Is every square a rectangle? Yes: it has four right angles. In a parallelogram, two consecutive angles measure \(3x\) and \(2x\); they are supplementary, so \(5x=180\), \(x=36\), and the angles are \(108^\circ\) and \(72^\circ\).`,
          exampleZh: String.raw`每个长方形都是正方形吗？不是：3 乘 5 的长方形邻边不相等。每个正方形都是长方形吗？是：它有四个直角。在一个平行四边形中，两个邻角分别为 \(3x\) 和 \(2x\)；它们互补，所以 \(5x=180\)，\(x=36\)，两个角分别是 \(108^\circ\) 和 \(72^\circ\)。`
        },
        {
          titleEn: "Circle vocabulary",
          titleZh: "圆的基本术语",
          formula: String.raw`d=2r`,
          explanationEn: String.raw`The center is the fixed point. A radius \(r\) joins the center to a point on the circle, and the diameter \(d=2r\) passes through the center and is the longest chord. A chord joins any two points on the circle. A tangent is a line that touches the circle at exactly one point and is perpendicular to the radius drawn to that point. An arc is a part of the circle, and a semicircle is half of it. Do not confuse radius with diameter: that single slip causes many wrong answers.`,
          explanationZh: String.raw`圆心是那个固定的点。半径 \(r\) 连接圆心与圆上一点；直径 \(d=2r\) 经过圆心，是最长的弦。弦连接圆上任意两点。切线是与圆恰好有一个公共点的直线，并且垂直于过切点的半径。弧是圆的一部分，半圆就是圆的一半。不要把半径和直径混淆：光是这个失误就会让很多题做错。`,
          exampleEn: String.raw`A circle has radius 7, so its diameter is 14 and no chord can be longer than 14. Radius \(OP\) ends at the point of tangency \(P\), and \(Q\) is another point on the tangent line with \(\angle POQ=35^\circ\). Triangle \(OPQ\) has a right angle at \(P\), so \(\angle OQP=180^\circ-90^\circ-35^\circ=55^\circ\).`,
          exampleZh: String.raw`一个圆的半径是 7，所以直径是 14，没有任何弦比 14 更长。半径 \(OP\) 的端点 \(P\) 是切点，\(Q\) 是切线上的另一点，且 \(\angle POQ=35^\circ\)。三角形 \(OPQ\) 在 \(P\) 处是直角，所以 \(\angle OQP=180^\circ-90^\circ-35^\circ=55^\circ\)。`
        },
        {
          titleEn: "Central angles and arcs",
          titleZh: "圆心角与弧",
          formula: String.raw`\frac{\text{arc length}}{\text{circumference}}=\frac{\text{central angle}}{360^\circ}`,
          explanationEn: String.raw`A central angle has its vertex at the center of the circle, and the arc it cuts off has the same degree measure as the angle. An arc is therefore the fraction \(\frac{\theta}{360^\circ}\) of the whole circle, and the same fraction applies to its length and to the area of the matching sector. An inscribed angle, whose vertex is on the circle, measures half of the arc it cuts off, so an angle inscribed in a semicircle is a right angle. Inscribed angles are mainly an Upper Level topic.`,
          explanationZh: String.raw`圆心角的顶点在圆心，它所对的弧的度数与这个角的度数相同。因此，一段弧占整个圆的 \(\frac{\theta}{360^\circ}\)，弧长以及对应扇形的面积也都占整个圆的同样比例。圆周角的顶点在圆上，它的度数是所对弧的一半，所以半圆所对的圆周角是直角。圆周角主要出现在高级。`,
          stepsEn: [
            String.raw`A circle has circumference 48, and a central angle of \(60^\circ\) cuts off an arc.`,
            String.raw`Write the fraction of the circle: \(\frac{60}{360}=\frac{1}{6}\).`,
            String.raw`Multiply the circumference by that fraction: \(\frac{1}{6}\cdot48=8\).`,
            "The arc is 8 units long."
          ],
          stepsZh: [
            String.raw`一个圆的圆周长是 48，一个 \(60^\circ\) 的圆心角截出一段弧。`,
            String.raw`写出这段弧占整个圆的比例：\(\frac{60}{360}=\frac{1}{6}\)。`,
            String.raw`用圆周长乘以这个比例：\(\frac{1}{6}\cdot48=8\)。`,
            "所以这段弧长 8 个单位。"
          ],
          exampleEn: String.raw`A pizza cut into 8 equal slices has a central angle of \(\frac{360^\circ}{8}=45^\circ\) per slice. In a circle of radius 6, a \(90^\circ\) central angle cuts off an arc of \(\frac{1}{4}\cdot2\pi\cdot6=3\pi\). An inscribed angle that cuts off a \(100^\circ\) arc measures \(50^\circ\).`,
          exampleZh: String.raw`一块比萨切成 8 个相等的扇形，每块的圆心角是 \(\frac{360^\circ}{8}=45^\circ\)。在半径为 6 的圆中，\(90^\circ\) 的圆心角所对的弧长是 \(\frac{1}{4}\cdot2\pi\cdot6=3\pi\)。截出 \(100^\circ\) 弧的圆周角是 \(50^\circ\)。`
        }
      ],
      methodsEn: [
        String.raw`Draw the diagonals from one vertex to split a polygon into \(n-2\) triangles.`,
        String.raw`For a regular polygon, use exterior angles: each one is \(360^\circ\) divided by \(n\).`,
        "To test an “always true” claim about quadrilaterals, try to find a counterexample such as a rectangle that is not a square.",
        "Label the center, radii and chords on a sketch before reasoning about arcs.",
        String.raw`Treat an arc or sector as a fraction of the whole circle: the central angle divided by \(360^\circ\).`
      ],
      methodsZh: [
        String.raw`从一个顶点画出所有对角线，把多边形分成 \(n-2\) 个三角形。`,
        String.raw`对正多边形，用外角：每个外角都是 \(360^\circ\) 除以 \(n\)。`,
        "检验关于四边形的“一定成立”的说法时，试着找反例，例如不是正方形的长方形。",
        "分析弧之前，先在草图上标出圆心、半径和弦。",
        String.raw`把弧或扇形看成整个圆的一部分：圆心角除以 \(360^\circ\)。`
      ],
      exampleEn: String.raw`A regular octagon has interior-angle sum \((8-2)\cdot180^\circ=1080^\circ\), so each interior angle is \(1080^\circ\div8=135^\circ\). Check with exterior angles: each is \(\frac{360^\circ}{8}=45^\circ\), and \(180^\circ-45^\circ=135^\circ\).`,
      exampleZh: String.raw`正八边形的内角和是 \((8-2)\cdot180^\circ=1080^\circ\)，所以每个内角是 \(1080^\circ\div8=135^\circ\)。用外角检验：每个外角是 \(\frac{360^\circ}{8}=45^\circ\)，而 \(180^\circ-45^\circ=135^\circ\)。`,
      checklistEn: [
        "Name polygons by their number of sides",
        "Find the sum of the interior angles and each angle of a regular polygon",
        "Choose the most specific name for a quadrilateral and list its properties",
        "Define radius, diameter, chord, arc and tangent",
        "Turn a central angle into a fraction of the circle"
      ],
      checklistZh: [
        "能按边数说出多边形的名称",
        "能求内角和以及正多边形的每个内角",
        "能给四边形选出最准确的名称并说出它的性质",
        "能说明半径、直径、弦、弧和切线的含义",
        "能把圆心角转化成整个圆的几分之几"
      ]
    },
    {
      id: "pythagorean-similarity",
      zh: "勾股定理与相似",
      en: "Pythagorean Theorem & Similarity",
      detailEn: "The Pythagorean theorem and common triples, 45-45-90 and 30-60-90 triangles, similar figures, scale factors, and how perimeter and area change under scaling.",
      detailZh: "勾股定理与常见勾股数，45-45-90 与 30-60-90 三角形，相似图形与相似比，以及缩放时周长和面积的变化。",
      explanationEn: String.raw`In a right triangle the two legs and the hypotenuse are linked by \(a^2+b^2=c^2\), which lets you find any missing side. Similar figures have the same shape but different sizes: matching angles are equal and matching sides are in the same ratio, called the scale factor. Together these two ideas solve most problems about ladders, shadows, diagonals, maps and enlargements. Middle Level mostly uses whole-number triples and simple proportions. Upper Level adds the special right triangles with square roots, area ratios and the converse of the theorem. Recognising a triple such as 3-4-5 saves valuable time, because calculators are not allowed.`,
      explanationZh: String.raw`在直角三角形中，两条直角边与斜边满足 \(a^2+b^2=c^2\)，由此可以求出任何一条缺少的边。相似图形形状相同、大小不同：对应角相等，对应边成同一个比，这个比叫作相似比（比例系数）。这两个思想合在一起，可以解决大多数关于梯子、影子、对角线、地图和放大缩小的题。中级主要用整数勾股数和简单的比例；高级增加带根号的特殊直角三角形、面积比和勾股定理的逆定理。认出 3-4-5 这样的勾股数能节省宝贵的时间，因为考试不能用计算器。`,
      keyPoints: [
        {
          titleEn: "The Pythagorean theorem",
          titleZh: "勾股定理",
          formula: String.raw`a^2+b^2=c^2`,
          explanationEn: String.raw`In a right triangle with legs \(a\) and \(b\), the hypotenuse \(c\), which is the side opposite the right angle and the longest side, satisfies \(a^2+b^2=c^2\). When the unknown is a leg, subtract: \(a^2=c^2-b^2\). Never add the side lengths themselves, and never write \(c-b\) for the missing leg; it is the squares that combine. If the root is not a whole number, estimate it between two whole numbers or leave it as a radical.`,
          explanationZh: String.raw`在直角边为 \(a\)、\(b\) 的直角三角形中，斜边 \(c\)（直角所对的边，也是最长的边）满足 \(a^2+b^2=c^2\)。当未知的是一条直角边时，用减法：\(a^2=c^2-b^2\)。不要直接把边长相加，也不要把缺少的直角边写成 \(c-b\)；相加减的是平方。如果开方的结果不是整数，可以把它估计在两个整数之间，或者保留根号。`,
          stepsEn: [
            "Identify the hypotenuse, the side opposite the right angle. Here the hypotenuse is 13 and one leg is 5.",
            String.raw`Substitute into \(a^2+b^2=c^2\): \(5^2+b^2=13^2\).`,
            String.raw`Simplify: \(25+b^2=169\), so \(b^2=144\).`,
            String.raw`Take the positive square root: \(b=12\).`
          ],
          stepsZh: [
            "先找出斜边，也就是直角所对的边。这里斜边是 13，一条直角边是 5。",
            String.raw`代入 \(a^2+b^2=c^2\)：\(5^2+b^2=13^2\)。`,
            String.raw`化简：\(25+b^2=169\)，所以 \(b^2=144\)。`,
            String.raw`取正的平方根：\(b=12\)。`
          ],
          exampleEn: String.raw`Legs 6 and 8 give \(c^2=36+64=100\), so the hypotenuse is 10. Legs 2 and 3 give \(c^2=13\), so \(c=\sqrt{13}\), which is between 3 and 4 (about 3.6).`,
          exampleZh: String.raw`直角边 6 和 8 给出 \(c^2=36+64=100\)，所以斜边是 10。直角边 2 和 3 给出 \(c^2=13\)，所以 \(c=\sqrt{13}\)，介于 3 和 4 之间（约 3.6）。`
        },
        {
          titleEn: "Pythagorean triples and the converse",
          titleZh: "勾股数与逆定理",
          formula: String.raw`3^2+4^2=5^2,\quad 5^2+12^2=13^2,\quad 8^2+15^2=17^2,\quad 7^2+24^2=25^2`,
          explanationEn: String.raw`A Pythagorean triple is a set of whole numbers that satisfies the theorem. Learn 3-4-5, 5-12-13, 8-15-17 and 7-24-25, and remember that every multiple of a triple is also a triple (6-8-10, 9-12-15, 10-24-26 and so on). The converse also works: if the three sides satisfy \(a^2+b^2=c^2\), the triangle is a right triangle. When \(c\) is the longest side, \(a^2+b^2>c^2\) means the triangle is acute and \(a^2+b^2<c^2\) means it is obtuse.`,
          explanationZh: String.raw`勾股数是满足勾股定理的一组整数。要记住 3-4-5、5-12-13、8-15-17 和 7-24-25，并且记住勾股数的任何整数倍仍然是勾股数（6-8-10、9-12-15、10-24-26 等）。逆定理同样成立：如果三条边满足 \(a^2+b^2=c^2\)，这个三角形就是直角三角形。当 \(c\) 是最长边时，\(a^2+b^2>c^2\) 表示锐角三角形，\(a^2+b^2<c^2\) 表示钝角三角形。`,
          exampleEn: String.raw`A 25-foot ladder leans against a wall with its foot 7 feet from the wall. This is a 7-24-25 triangle, so the ladder reaches 24 feet up the wall. Sides 9, 12 and 15 form a right triangle because \(81+144=225\), but sides 4, 5 and 6 do not: \(16+25=41>36\), so that triangle is acute.`,
          exampleZh: String.raw`一架 25 英尺长的梯子靠在墙上，梯脚离墙 7 英尺。这是 7-24-25 三角形，所以梯子顶端离地 24 英尺。边长 9、12、15 构成直角三角形，因为 \(81+144=225\)；而 4、5、6 不是：\(16+25=41>36\)，所以那个三角形是锐角三角形。`
        },
        {
          titleEn: "Special right triangles: 45-45-90 and 30-60-90",
          titleZh: "特殊直角三角形：45-45-90 与 30-60-90",
          formula: String.raw`45^\circ\text{-}45^\circ\text{-}90^\circ:\ x,\ x,\ x\sqrt{2}\qquad 30^\circ\text{-}60^\circ\text{-}90^\circ:\ x,\ x\sqrt{3},\ 2x`,
          explanationEn: String.raw`A 45-45-90 triangle is half of a square, so its legs are equal and the hypotenuse is a leg times \(\sqrt{2}\). A 30-60-90 triangle is half of an equilateral triangle, so the hypotenuse is twice the shortest leg (the side opposite \(30^\circ\)) and the longer leg is the shortest leg times \(\sqrt{3}\). Upper Level items use these ratios to find a square’s diagonal or an equilateral triangle’s height without a calculator.`,
          explanationZh: String.raw`45-45-90 三角形是正方形的一半，所以两条直角边相等，斜边是直角边的 \(\sqrt{2}\) 倍。30-60-90 三角形是等边三角形的一半，所以斜边是最短直角边（\(30^\circ\) 所对的边）的 2 倍，较长的直角边是最短直角边的 \(\sqrt{3}\) 倍。高级会用这些比值，在不用计算器的情况下求正方形的对角线或等边三角形的高。`,
          stepsEn: [
            "An equilateral triangle has side 10. Draw its altitude, which splits it into two 30-60-90 triangles.",
            String.raw`The hypotenuse of each small triangle is 10, so the shortest leg (half the base) is \(\frac{10}{2}=5\).`,
            String.raw`The longer leg, which is the altitude, is \(5\sqrt{3}\).`,
            String.raw`Check: \(5^2+(5\sqrt{3})^2=25+75=100=10^2\).`
          ],
          stepsZh: [
            "一个等边三角形的边长是 10。画出它的高，高把它分成两个 30-60-90 三角形。",
            String.raw`每个小三角形的斜边是 10，所以最短的直角边（底边的一半）是 \(\frac{10}{2}=5\)。`,
            String.raw`较长的直角边就是高，等于 \(5\sqrt{3}\)。`,
            String.raw`检验：\(5^2+(5\sqrt{3})^2=25+75=100=10^2\)。`
          ],
          exampleEn: String.raw`A square with side 6 has diagonal \(6\sqrt{2}\). A 45-45-90 triangle with hypotenuse 10 has legs \(\frac{10}{\sqrt{2}}=5\sqrt{2}\).`,
          exampleZh: String.raw`边长为 6 的正方形，对角线长 \(6\sqrt{2}\)。斜边为 10 的 45-45-90 三角形，直角边长 \(\frac{10}{\sqrt{2}}=5\sqrt{2}\)。`
        },
        {
          titleEn: "Similar figures and scale factors",
          titleZh: "相似图形与相似比",
          formula: String.raw`k=\frac{\text{length in figure }B}{\text{matching length in figure }A}`,
          explanationEn: "Two figures are similar when their corresponding angles are equal and their corresponding sides are proportional. The common ratio of corresponding sides is the scale factor. Two triangles are similar if two angles of one equal two angles of the other (the AA shortcut). Match corresponding sides carefully, using the side opposite the same angle, and then set up a proportion. Congruent figures are the special case where the scale factor is 1.",
          explanationZh: "两个图形相似，是指它们的对应角相等，对应边成比例。对应边的比叫作相似比（比例系数）。如果一个三角形的两个角分别等于另一个三角形的两个角，这两个三角形就相似（AA 判定）。要认真找出对应边（即同一个角所对的边），再列比例式。全等图形是相似比为 1 的特殊情况。",
          stepsEn: [
            String.raw`Triangle \(ABC\) is similar to triangle \(DEF\), with \(AB=6\), \(DE=9\) and \(BC=8\). Find \(EF\). Side \(AB\) corresponds to \(DE\), and \(BC\) corresponds to \(EF\).`,
            String.raw`Find the scale factor from the known pair: \(\frac{DE}{AB}=\frac{9}{6}=\frac{3}{2}\).`,
            String.raw`Apply it: \(EF=\frac{3}{2}\cdot BC=\frac{3}{2}\cdot8=12\).`,
            String.raw`Check with a proportion: \(\frac{6}{9}=\frac{8}{12}\), since both reduce to \(\frac{2}{3}\).`
          ],
          stepsZh: [
            String.raw`三角形 \(ABC\) 与三角形 \(DEF\) 相似，\(AB=6\)，\(DE=9\)，\(BC=8\)，求 \(EF\)。边 \(AB\) 对应 \(DE\)，边 \(BC\) 对应 \(EF\)。`,
            String.raw`用已知的一对边求相似比：\(\frac{DE}{AB}=\frac{9}{6}=\frac{3}{2}\)。`,
            String.raw`应用相似比：\(EF=\frac{3}{2}\cdot BC=\frac{3}{2}\cdot8=12\)。`,
            String.raw`用比例式检验：\(\frac{6}{9}=\frac{8}{12}\)，两边都化简为 \(\frac{2}{3}\)。`
          ],
          exampleEn: String.raw`A 4-foot post casts a 3-foot shadow while a flagpole nearby casts a 15-foot shadow at the same time. The sun makes similar right triangles, so \(\frac{h}{15}=\frac{4}{3}\) and \(h=20\) feet.`,
          exampleZh: String.raw`一根 4 英尺高的柱子在地面上的影子长 3 英尺，同一时刻附近的旗杆影子长 15 英尺。阳光形成了两个相似的直角三角形，所以 \(\frac{h}{15}=\frac{4}{3}\)，\(h=20\) 英尺。`
        },
        {
          titleEn: "Perimeter and area under scaling",
          titleZh: "缩放时的周长与面积",
          formula: String.raw`\frac{P_2}{P_1}=k,\qquad \frac{A_2}{A_1}=k^2`,
          explanationEn: String.raw`If two figures are similar with scale factor \(k\), every length (including perimeters, heights and diagonals) is multiplied by \(k\), but areas are multiplied by \(k^2\). So doubling every side of a figure makes its area four times as large, not twice as large. To go backwards, take a square root: if two areas are in the ratio \(m:n\), the matching lengths are in the ratio \(\sqrt{m}:\sqrt{n}\).`,
          explanationZh: String.raw`如果两个相似图形的相似比是 \(k\)，那么所有长度（包括周长、高、对角线）都乘以 \(k\)，而面积乘以 \(k^2\)。所以把图形每条边都放大到 2 倍，面积会变成原来的 4 倍，而不是 2 倍。反过来求时要开平方：若两个面积之比是 \(m:n\)，则对应长度之比是 \(\sqrt{m}:\sqrt{n}\)。`,
          exampleEn: String.raw`A \(4\times6\) rectangle is enlarged by scale factor 3 to a \(12\times18\) rectangle. Its perimeter grows from 20 to 60 (times 3), but its area grows from 24 to 216 (times 9). Two similar polygons with areas 18 and 50 have area ratio \(\frac{18}{50}=\frac{9}{25}\), so the ratio of their sides is \(\frac{3}{5}\).`,
          exampleZh: String.raw`一个 \(4\times6\) 的长方形按相似比 3 放大成 \(12\times18\) 的长方形。它的周长从 20 变成 60（乘 3），而面积从 24 变成 216（乘 9）。两个面积分别为 18 和 50 的相似多边形，面积比是 \(\frac{18}{50}=\frac{9}{25}\)，所以它们的边长比是 \(\frac{3}{5}\)。`
        }
      ],
      methodsEn: [
        "Find the hypotenuse first: it is opposite the right angle and is the longest side.",
        "Memorise 3-4-5, 5-12-13, 8-15-17 and 7-24-25, and look for their multiples.",
        "Write the corresponding vertices of similar triangles in the same order before setting up a proportion.",
        "Square the scale factor for areas, but not for lengths or perimeters.",
        "Use the AA shortcut: two pairs of equal angles are enough to show that triangles are similar."
      ],
      methodsZh: [
        "先找斜边：它在直角的对面，也是最长的边。",
        "记住 3-4-5、5-12-13、8-15-17 和 7-24-25，并留意它们的倍数。",
        "列比例式之前，先把相似三角形的对应顶点按相同顺序写出来。",
        "面积要用相似比的平方，长度和周长则不用平方。",
        "善用 AA 判定：两组角分别相等，就足以说明两个三角形相似。"
      ],
      exampleEn: String.raw`A right triangle has legs 9 and 12. This is the 3-4-5 triple multiplied by 3, so the hypotenuse is 15. A similar triangle has shortest side 6, so the scale factor is \(\frac{6}{9}=\frac{2}{3}\); its other sides are 8 and 10, and its area is \(\left(\frac{2}{3}\right)^2=\frac{4}{9}\) of the original area.`,
      exampleZh: String.raw`一个直角三角形的两条直角边是 9 和 12。这是 3-4-5 的 3 倍，所以斜边是 15。一个相似三角形的最短边是 6，所以相似比是 \(\frac{6}{9}=\frac{2}{3}\)；它的另外两条边是 8 和 10，面积是原来面积的 \(\left(\frac{2}{3}\right)^2=\frac{4}{9}\)。`,
      checklistEn: [
        "Find a missing side of a right triangle",
        "Recognize common Pythagorean triples and their multiples",
        "Use the 45-45-90 and 30-60-90 ratios (Upper Level)",
        "Set up and solve proportions for similar figures",
        "Relate the scale factor to perimeter and area"
      ],
      checklistZh: [
        "能求直角三角形缺少的边",
        "能认出常见的勾股数及其倍数",
        "能使用 45-45-90 和 30-60-90 的边长比（高级）",
        "能为相似图形列出并解比例式",
        "能说明相似比与周长、面积的关系"
      ]
    },
    {
      id: "coordinate-transformations",
      zh: "坐标平面与图形变换",
      en: "Coordinate Plane & Transformations",
      detailEn: "Plotting points, quadrants, distance and midpoint, reflections, rotations, translations and dilations of points and shapes, and lines of symmetry.",
      detailZh: "描点与象限，距离与中点，点和图形的反射、旋转、平移与位似，以及对称轴。",
      explanationEn: String.raw`The coordinate plane places every point at an ordered pair \((x,y)\): first the horizontal move from the origin, then the vertical move. Transformations move a figure around the plane. Reflections, rotations and translations keep its size and shape, so the new figure is congruent to the old one, while a dilation keeps the shape but changes the size. The ISEE tests plotting, reading coordinates, transforming a point or a polygon, and symmetry. Lower Level uses mostly the first quadrant, counting distances on the grid, simple reflections and symmetry. Middle Level uses all four quadrants and rotations. Upper Level adds the distance and midpoint formulas and combinations of transformations.`,
      explanationZh: String.raw`坐标平面用有序数对 \((x,y)\) 表示每个点的位置：先从原点出发水平移动，再竖直移动。图形变换是让图形在平面内移动：反射（轴对称）、旋转和平移不改变图形的大小和形状，新图形与原图形全等；位似（放缩）保持形状不变，但改变大小。ISEE 会考查描点与读坐标、对点或多边形做变换，以及对称。初级主要在第一象限内数网格上的距离，并考查简单的反射和对称；中级涉及四个象限和旋转；高级增加距离公式、中点公式以及连续的多次变换。`,
      keyPoints: [
        {
          titleEn: "Plotting points and quadrants",
          titleZh: "描点与象限",
          explanationEn: String.raw`Always read an ordered pair as \((x,y)\): move left or right first, then up or down. The axes divide the plane into four quadrants, numbered counterclockwise starting from the upper right: Quadrant I is \((+,+)\), II is \((-,+)\), III is \((-,-)\) and IV is \((+,-)\). A point on an axis, such as \((0,-5)\), is in no quadrant. A common error is reversing the two coordinates.`,
          explanationZh: String.raw`有序数对一定要读作 \((x,y)\)：先左右移动，再上下移动。坐标轴把平面分成四个象限，从右上角开始按逆时针方向编号：第一象限是 \((+,+)\)，第二象限是 \((-,+)\)，第三象限是 \((-,-)\)，第四象限是 \((+,-)\)。坐标轴上的点，如 \((0,-5)\)，不属于任何象限。常见的错误是把两个坐标的顺序弄反。`,
          exampleEn: String.raw`The point \((-3,4)\) is 3 units left of the origin and 4 units up, so it lies in Quadrant II. The point \((0,-5)\) is on the \(y\)-axis, so it is in no quadrant. A point with positive \(x\) and negative \(y\) is in Quadrant IV.`,
          exampleZh: String.raw`点 \((-3,4)\) 在原点左边 3 个单位、上方 4 个单位，所以在第二象限。点 \((0,-5)\) 在 \(y\) 轴上，不属于任何象限。\(x\) 为正、\(y\) 为负的点在第四象限。`
        },
        {
          titleEn: "Distance on the grid and the distance formula",
          titleZh: "网格上的距离与距离公式",
          formula: String.raw`d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}`,
          explanationEn: String.raw`For two points on the same horizontal or vertical line, subtract the coordinates that change and take the positive difference: the distance from \((2,5)\) to \((2,-1)\) is \(5-(-1)=6\). For a slanted segment, build a right triangle whose legs are the horizontal and vertical changes; the segment is the hypotenuse, so the distance formula is the Pythagorean theorem in disguise (an Upper Level tool). The order of subtraction does not matter, because the differences are squared.`,
          explanationZh: String.raw`对同一条水平线或竖直线上的两点，把变化的那个坐标相减，取正的差：\((2,5)\) 到 \((2,-1)\) 的距离是 \(5-(-1)=6\)。对于倾斜的线段，构造一个直角三角形，两条直角边分别是水平和竖直方向的变化量，线段就是斜边，所以距离公式其实就是勾股定理（高级的工具）。相减的顺序无关紧要，因为差要平方。`,
          stepsEn: [
            String.raw`Find the distance between \((1,2)\) and \((7,10)\). The horizontal change is \(7-1=6\).`,
            String.raw`The vertical change is \(10-2=8\).`,
            String.raw`Square and add: \(6^2+8^2=36+64=100\).`,
            String.raw`Take the square root: \(d=10\).`
          ],
          stepsZh: [
            String.raw`求 \((1,2)\) 与 \((7,10)\) 之间的距离。水平方向的变化量是 \(7-1=6\)。`,
            String.raw`竖直方向的变化量是 \(10-2=8\)。`,
            String.raw`平方后相加：\(6^2+8^2=36+64=100\)。`,
            String.raw`开平方：\(d=10\)。`
          ],
          exampleEn: String.raw`The distance from \((2,5)\) to \((2,-1)\) is \(5-(-1)=6\). The distance from \((-4,3)\) to the origin is \(\sqrt{(-4)^2+3^2}=\sqrt{25}=5\).`,
          exampleZh: String.raw`\((2,5)\) 到 \((2,-1)\) 的距离是 \(5-(-1)=6\)。\((-4,3)\) 到原点的距离是 \(\sqrt{(-4)^2+3^2}=\sqrt{25}=5\)。`
        },
        {
          titleEn: "Midpoints and missing endpoints",
          titleZh: "中点与缺少的端点",
          formula: String.raw`M=\left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2}\right)`,
          explanationEn: String.raw`The midpoint of a segment is the average of the \(x\)-coordinates paired with the average of the \(y\)-coordinates. Run the idea backwards to find a missing endpoint: the two endpoint coordinates add up to twice the midpoint coordinate, so double the midpoint and subtract the known endpoint. Midpoint questions appear mostly at the Upper Level.`,
          explanationZh: String.raw`线段的中点，就是 \(x\) 坐标的平均数与 \(y\) 坐标的平均数组成的点。把这个想法倒过来，可以求缺少的端点：两个端点的坐标之和等于中点坐标的 2 倍，所以先把中点坐标乘 2，再减去已知端点的坐标。中点问题主要出现在高级。`,
          stepsEn: [
            String.raw`A segment has midpoint \((3,4)\) and one endpoint \((1,7)\). Double the midpoint: \(2\cdot3=6\) and \(2\cdot4=8\).`,
            String.raw`Subtract the known endpoint: \(6-1=5\) and \(8-7=1\).`,
            String.raw`The other endpoint is \((5,1)\).`,
            String.raw`Check: \(\frac{1+5}{2}=3\) and \(\frac{7+1}{2}=4\).`
          ],
          stepsZh: [
            String.raw`一条线段的中点是 \((3,4)\)，一个端点是 \((1,7)\)。先把中点坐标乘 2：\(2\cdot3=6\)，\(2\cdot4=8\)。`,
            String.raw`减去已知端点的坐标：\(6-1=5\)，\(8-7=1\)。`,
            String.raw`另一个端点是 \((5,1)\)。`,
            String.raw`检验：\(\frac{1+5}{2}=3\)，\(\frac{7+1}{2}=4\)。`
          ],
          exampleEn: String.raw`The midpoint of the segment from \((-2,3)\) to \((6,-1)\) is \(\left(\frac{-2+6}{2},\frac{3+(-1)}{2}\right)=(2,1)\).`,
          exampleZh: String.raw`从 \((-2,3)\) 到 \((6,-1)\) 的线段，中点是 \(\left(\frac{-2+6}{2},\frac{3+(-1)}{2}\right)=(2,1)\)。`
        },
        {
          titleEn: "Reflections",
          titleZh: "反射（轴对称）",
          formula: String.raw`x\text{-axis}:(x,-y)\qquad y\text{-axis}:(-x,y)\qquad y=x:(y,x)`,
          explanationEn: String.raw`A reflection flips a figure over a mirror line so that each point and its image are the same distance from the line, on opposite sides. Reflecting over the \(x\)-axis changes the sign of the \(y\)-coordinate; reflecting over the \(y\)-axis changes the sign of the \(x\)-coordinate; reflecting over the line \(y=x\) swaps the two coordinates. The image is congruent to the original but is a mirror image, so the order of the vertices around the figure is reversed.`,
          explanationZh: String.raw`反射是把图形沿一条对称轴（镜面线）翻折，使每个点与它的像到这条线的距离相等，并且位于线的两侧。沿 \(x\) 轴反射，\(y\) 坐标变号；沿 \(y\) 轴反射，\(x\) 坐标变号；沿直线 \(y=x\) 反射，两个坐标互换。像与原图形全等，但是镜像，所以顶点绕图形一周的顺序会反过来。`,
          exampleEn: String.raw`Reflect \(A(3,-2)\). Over the \(x\)-axis it becomes \((3,2)\); over the \(y\)-axis it becomes \((-3,-2)\); over the line \(y=x\) it becomes \((-2,3)\). A common slip is to change the wrong coordinate, so check which axis you are reflecting over.`,
          exampleZh: String.raw`反射点 \(A(3,-2)\)。沿 \(x\) 轴得到 \((3,2)\)；沿 \(y\) 轴得到 \((-3,-2)\)；沿直线 \(y=x\) 得到 \((-2,3)\)。常见的失误是改错了坐标，所以要先弄清是沿哪条轴反射。`
        },
        {
          titleEn: "Translations, rotations and dilations",
          titleZh: "平移、旋转与位似",
          formula: String.raw`(x,y)\to(-y,\,x)\ \ (90^\circ\text{ counterclockwise about the origin})`,
          explanationEn: String.raw`A translation slides every point the same distance in the same direction, so you add the same numbers to every \(x\) and \(y\). A rotation turns the figure about a center, usually the origin. About the origin, a \(90^\circ\) counterclockwise turn sends \((x,y)\) to \((-y,x)\), a \(180^\circ\) turn sends it to \((-x,-y)\), and a \(90^\circ\) clockwise turn sends it to \((y,-x)\). A dilation centered at the origin with scale factor \(k\) sends \((x,y)\) to \((kx,ky)\): the shape stays the same and the size changes. Move each vertex separately, then reconnect them.`,
          explanationZh: String.raw`平移是把每个点沿同一方向移动同样的距离，也就是给每个 \(x\) 和 \(y\) 加上相同的数。旋转是让图形绕一个中心（通常是原点）转动。绕原点逆时针转 \(90^\circ\)，\((x,y)\) 变成 \((-y,x)\)；转 \(180^\circ\)，变成 \((-x,-y)\)；顺时针转 \(90^\circ\)，变成 \((y,-x)\)。以原点为中心、相似比为 \(k\) 的位似变换把 \((x,y)\) 变成 \((kx,ky)\)：形状不变，大小改变。要对每个顶点分别变换，再把它们连接起来。`,
          stepsEn: [
            String.raw`Take the point \(P(4,1)\). Rotate it \(90^\circ\) counterclockwise about the origin: \((x,y)\to(-y,x)\), so \((4,1)\to(-1,4)\).`,
            String.raw`Then translate it 3 units left and 2 units up: \((-1-3,\ 4+2)=(-4,6)\).`,
            String.raw`Check the rotation: the distance to the origin is unchanged, since \(4^2+1^2=17\) and \((-1)^2+4^2=17\).`
          ],
          stepsZh: [
            String.raw`取点 \(P(4,1)\)。绕原点逆时针旋转 \(90^\circ\)：\((x,y)\to(-y,x)\)，所以 \((4,1)\to(-1,4)\)。`,
            String.raw`再向左平移 3 个单位、向上平移 2 个单位：\((-1-3,\ 4+2)=(-4,6)\)。`,
            String.raw`检验旋转：到原点的距离不变，因为 \(4^2+1^2=17\)，\((-1)^2+4^2=17\)。`
          ],
          exampleEn: String.raw`Translating \((2,5)\) 3 units left and 4 units down gives \((-1,1)\). Rotating \((3,-2)\) by \(180^\circ\) about the origin gives \((-3,2)\). A dilation with scale factor 2 centered at the origin sends \((1,3)\) to \((2,6)\).`,
          exampleZh: String.raw`把 \((2,5)\) 向左平移 3 个单位、向下平移 4 个单位，得到 \((-1,1)\)。把 \((3,-2)\) 绕原点旋转 \(180^\circ\)，得到 \((-3,2)\)。以原点为中心、相似比为 2 的位似变换把 \((1,3)\) 变成 \((2,6)\)。`
        },
        {
          titleEn: "Lines of symmetry and rotational symmetry",
          titleZh: "对称轴与旋转对称",
          explanationEn: String.raw`A figure has line symmetry if a line (a line of symmetry) splits it into two mirror-image halves that fold exactly onto each other. A regular \(n\)-gon has \(n\) lines of symmetry. A rectangle that is not a square has 2, a rhombus that is not a square has 2, an isosceles triangle that is not equilateral has 1, and a circle has infinitely many. A parallelogram that is not a rectangle or a rhombus has none. A figure has rotational symmetry if a turn of less than \(360^\circ\) maps it onto itself; a regular \(n\)-gon does so after every \(\frac{360^\circ}{n}\).`,
          explanationZh: String.raw`如果有一条直线（对称轴）把图形分成两个互为镜像的部分，并且沿这条线折叠后能完全重合，这个图形就具有轴对称。正 \(n\) 边形有 \(n\) 条对称轴；不是正方形的长方形有 2 条，不是正方形的菱形有 2 条，不是等边三角形的等腰三角形有 1 条，圆有无数条；既不是长方形也不是菱形的平行四边形没有对称轴。如果转动小于 \(360^\circ\) 的角度后图形能与自身重合，它就具有旋转对称；正 \(n\) 边形每转 \(\frac{360^\circ}{n}\) 就会重合一次。`,
          exampleEn: String.raw`A regular hexagon has 6 lines of symmetry, and it maps onto itself after every turn of \(\frac{360^\circ}{6}=60^\circ\). A \(3\times5\) rectangle has exactly 2 lines of symmetry, one vertical and one horizontal, and a scalene triangle has none.`,
          exampleZh: String.raw`正六边形有 6 条对称轴，每转 \(\frac{360^\circ}{6}=60^\circ\) 就与自身重合。\(3\times5\) 的长方形恰有 2 条对称轴，一条竖直、一条水平；不等边三角形没有对称轴。`
        }
      ],
      methodsEn: [
        String.raw`Read coordinates as \((x,y)\): across first, then up or down.`,
        "For a slanted distance, draw a right triangle on the grid and use the Pythagorean theorem.",
        "Transform each vertex separately, then reconnect the vertices to draw the new figure.",
        "Test line symmetry by imagining a fold, and rotational symmetry by imagining a turn.",
        "After a transformation, check the signs: which quadrant should the image be in?"
      ],
      methodsZh: [
        String.raw`读坐标时先横后纵：\((x,y)\) 先左右，再上下。`,
        "求倾斜线段的距离时，在网格上画一个直角三角形，再用勾股定理。",
        "对每个顶点分别做变换，再把变换后的顶点连起来得到新图形。",
        "判断轴对称就想象沿线折叠，判断旋转对称就想象转动图形。",
        "变换之后检查符号：像应该落在哪个象限？"
      ],
      exampleEn: String.raw`Triangle \(ABC\) has vertices \(A(1,1)\), \(B(5,1)\) and \(C(5,4)\). Its legs are 4 and 3, so \(AC=5\). Reflecting over the \(y\)-axis gives \(A'(-1,1)\), \(B'(-5,1)\) and \(C'(-5,4)\), which all lie in Quadrant II. The new triangle is congruent to the old one: \(A'C'=\sqrt{(-5+1)^2+(4-1)^2}=5\).`,
      exampleZh: String.raw`三角形 \(ABC\) 的顶点是 \(A(1,1)\)、\(B(5,1)\)、\(C(5,4)\)。它的两条直角边分别是 4 和 3，所以 \(AC=5\)。沿 \(y\) 轴反射后得到 \(A'(-1,1)\)、\(B'(-5,1)\)、\(C'(-5,4)\)，它们都在第二象限。新三角形与原三角形全等：\(A'C'=\sqrt{(-5+1)^2+(4-1)^2}=5\)。`,
      checklistEn: [
        "Plot points and name quadrants",
        "Find horizontal, vertical and slanted distances on the grid",
        "Find a midpoint or a missing endpoint (Upper Level)",
        "Reflect, rotate, translate and dilate a point",
        "Count the lines of symmetry of common shapes"
      ],
      checklistZh: [
        "能描点并说出所在象限",
        "能求网格上水平、竖直和倾斜线段的距离",
        "能求中点或缺少的端点（高级）",
        "能对点做反射、旋转、平移和位似变换",
        "能数出常见图形的对称轴条数"
      ]
    }
  ]
};
