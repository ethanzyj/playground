export const TOPIC = {
  id: "measurement",
  zh: "测量",
  en: "Measurement",
  officialAlignment: "Measurement strand of Quantitative Reasoning and Mathematics Achievement: perimeter, area, volume, units, rates and time.",
  officialAlignmentZh: "数量推理与数学能力中的“测量”内容：周长、面积、体积、单位、速率与时间。",
  concepts: [
    {
      id: "perimeter-area",
      zh: "周长与面积",
      en: "Perimeter & Area",
      detailEn: "Perimeter of polygons; area of rectangles, squares, triangles, parallelograms, trapezoids and circles; composite figures; how scaling changes perimeter and area.",
      detailZh: "多边形的周长；长方形、正方形、三角形、平行四边形、梯形和圆的面积；组合图形；边长缩放对周长和面积的影响。",
      explanationEn: String.raw`Perimeter is the distance around a shape, measured in length units such as cm or ft. Area is the amount of flat surface inside it, measured in square units such as \(\text{cm}^{2}\). Mathematics Achievement items tend to ask for the computation directly, while Quantitative Reasoning items often wrap it in a garden, a floor or a shaded region, or ask what happens when the sides are doubled. Lower Level focuses on rectangles, squares and L-shaped figures; Middle Level adds triangles, parallelograms, trapezoids and circles, often with answers left in terms of \(\pi\); Upper Level adds sectors, shaded regions and scale-factor reasoning. Before calculating, decide whether the question asks about the distance around or the space inside, and check that every length uses the same unit.`,
      explanationZh: String.raw`周长是图形一周的长度，用 cm、ft 这样的长度单位；面积是图形内部平面的大小，用 \(\text{cm}^{2}\) 这样的平方单位。数学能力部分的题目往往直接考计算，数量推理部分则常常把它放进花园、地板或阴影部分这样的情境里，或者问“边长加倍会怎样”。初级主要考长方形、正方形和 L 形图形；中级增加三角形、平行四边形、梯形和圆，答案常保留 \(\pi\)；高级再增加扇形、阴影部分和缩放倍数的推理。计算之前，先判断题目问的是一周的长度还是里面的大小，并确认所有长度的单位一致。`,
      keyPoints: [
        {
          titleEn: "Perimeter: add up the sides",
          titleZh: "周长：把各边长度加起来",
          formula: String.raw`P=a+b+c+\cdots,\quad P_{\text{rectangle}}=2(\ell+w),\quad P_{\text{square}}=4s`,
          explanationEn: "The perimeter of any polygon is the sum of the lengths of all its sides. A rectangle has two equal lengths and two equal widths, so its perimeter is twice the sum of one length and one width. In a figure with only right angles, find a missing side by matching opposite sides: the horizontal pieces along the top must add up to the horizontal pieces along the bottom. A frequent mistake is to multiply (finding area) when the question asks for the distance around.",
          explanationZh: "任何多边形的周长都等于所有边长之和。长方形有两条相等的长和两条相等的宽，所以周长是“长加宽”的 2 倍。对于只含直角的图形，可以利用对边之和相等来求缺少的边：上方各段水平线段的总长，等于下方各段水平线段的总长。常见错误是题目问一周的长度，却用乘法去算了面积。",
          exampleEn: String.raw`A rectangle \(9\) cm long and \(4\) cm wide has perimeter \(2(9+4)=26\) cm. A square with perimeter \(36\) cm has side \(36\div4=9\) cm.`,
          exampleZh: String.raw`长 \(9\) cm、宽 \(4\) cm 的长方形，周长为 \(2(9+4)=26\) cm。周长为 \(36\) cm 的正方形，边长为 \(36\div4=9\) cm。`
        },
        {
          titleEn: "Area of rectangles, squares and parallelograms",
          titleZh: "长方形、正方形与平行四边形的面积",
          formula: String.raw`A_{\text{rectangle}}=\ell w,\quad A_{\text{square}}=s^{2},\quad A_{\text{parallelogram}}=bh`,
          explanationEn: String.raw`Area counts how many unit squares cover a shape, so it is always written in square units. In a parallelogram, \(h\) is the perpendicular height between the two parallel bases, not the length of the slanted side. A parallelogram can be cut and rearranged into a rectangle with the same base and height, which is why the formulas match. If the area and one side of a rectangle are known, divide to find the other side.`,
          explanationZh: String.raw`面积表示用多少个单位正方形可以铺满图形，所以单位一定是平方单位。平行四边形公式中的 \(h\) 是两条平行底边之间的垂直高度，而不是倾斜那条边的长度。平行四边形可以剪拼成底和高都相同的长方形，所以两个公式一致。已知长方形的面积和一条边时，用除法求另一条边。`,
          exampleEn: String.raw`A parallelogram has base \(10\) cm, slanted side \(6\) cm and perpendicular height \(5\) cm. Its area is \(10\times5=50\ \text{cm}^{2}\), not \(10\times6\).`,
          exampleZh: String.raw`平行四边形的底为 \(10\) cm，倾斜的边长为 \(6\) cm，垂直高为 \(5\) cm。它的面积是 \(10\times5=50\ \text{cm}^{2}\)，而不是 \(10\times6\)。`
        },
        {
          titleEn: "Area of triangles and trapezoids",
          titleZh: "三角形与梯形的面积",
          formula: String.raw`A_{\text{triangle}}=\frac{1}{2}bh,\quad A_{\text{trapezoid}}=\frac{1}{2}(b_{1}+b_{2})h`,
          explanationEn: String.raw`A triangle is half of a parallelogram with the same base and height, so its area is one half of base times height. In a right triangle the two legs can serve as base and height. A trapezoid has one pair of parallel sides called bases: average the two bases, then multiply by the height. In both formulas the height must be perpendicular to the base. Forgetting the factor \(\frac{1}{2}\) is the most common error.`,
          explanationZh: String.raw`三角形的面积是同底同高的平行四边形面积的一半，所以等于底乘高再乘 \(\frac{1}{2}\)。直角三角形的两条直角边可以分别当作底和高。梯形有一组互相平行的底边：先求两底的平均数，再乘以高。两个公式中的高都必须垂直于底。最常见的错误是漏掉 \(\frac{1}{2}\)。`,
          exampleEn: String.raw`A trapezoid with parallel sides \(6\) and \(10\) and height \(4\) has area \(\frac{1}{2}(6+10)(4)=32\). A triangle with base \(12\) and height \(5\) has area \(\frac{1}{2}(12)(5)=30\).`,
          exampleZh: String.raw`两条平行边为 \(6\) 和 \(10\)、高为 \(4\) 的梯形，面积是 \(\frac{1}{2}(6+10)(4)=32\)。底为 \(12\)、高为 \(5\) 的三角形，面积是 \(\frac{1}{2}(12)(5)=30\)。`
        },
        {
          titleEn: "Circles: circumference, area and sectors",
          titleZh: "圆：周长、面积与扇形",
          formula: String.raw`C=2\pi r=\pi d,\quad A=\pi r^{2},\quad A_{\text{sector}}=\frac{n}{360}\,\pi r^{2}`,
          explanationEn: String.raw`The radius \(r\) is half the diameter \(d\). The circumference \(C\) is the distance around the circle; the area \(A\) is measured in square units. The area formula uses the radius, so halve a given diameter first. Unless a problem tells you to use \(3.14\) or \(\frac{22}{7}\), leave answers in terms of \(\pi\). At the Upper Level, a sector with a central angle of \(n^{\circ}\) is \(\frac{n}{360}\) of the whole circle, so its area (and its arc length) is that same fraction of the circle’s area (and circumference).`,
          explanationZh: String.raw`半径 \(r\) 是直径 \(d\) 的一半。圆周长 \(C\) 是圆一周的长度，面积 \(A\) 用平方单位表示。面积公式用的是半径，所以遇到直径要先除以 2。除非题目要求取 \(3.14\) 或 \(\frac{22}{7}\)，否则答案保留 \(\pi\)。高级题还会考扇形：圆心角为 \(n^{\circ}\) 的扇形占整个圆的 \(\frac{n}{360}\)，所以它的面积（以及弧长）就是整个圆的面积（以及圆周长）的这一部分。`,
          exampleEn: String.raw`A circle has diameter \(12\), so \(r=6\), \(C=12\pi\) and \(A=36\pi\). A \(60^{\circ}\) sector of this circle has area \(\frac{60}{360}\times36\pi=6\pi\).`,
          exampleZh: String.raw`圆的直径为 \(12\)，所以 \(r=6\)，\(C=12\pi\)，\(A=36\pi\)。这个圆中 \(60^{\circ}\) 的扇形，面积为 \(\frac{60}{360}\times36\pi=6\pi\)。`
        },
        {
          titleEn: "Composite figures and shaded regions",
          titleZh: "组合图形与阴影部分",
          formula: String.raw`A_{\text{figure}}=A_{1}+A_{2}+\cdots,\quad A_{\text{shaded}}=A_{\text{whole}}-A_{\text{removed}}`,
          explanationEn: "A composite figure is built from simpler shapes. Either split it into pieces and add their areas, or start from a larger simple shape and subtract the part that is missing or unshaded. The subtraction method is usually faster for shaded regions, rings and L-shapes. Use the given lengths to find any missing dimension before you compute.",
          explanationZh: "组合图形是由几个简单图形拼成的。可以把它分成几块再把面积相加，也可以先取一个较大的简单图形，再减去缺少的或没有涂色的部分。对于阴影部分、圆环和 L 形图形，减法通常更快。计算之前，先利用已知长度求出缺少的尺寸。",
          stepsEn: [
            "Look for simple pieces: rectangles, triangles, circles or parts of circles.",
            "Decide whether to add the pieces or to subtract a removed part from a larger shape.",
            "Use opposite sides to find any missing length, and halve a diameter to get the radius.",
            "Calculate each area with the correct formula.",
            "Add or subtract, write square units, and check the result against the area of an enclosing rectangle."
          ],
          stepsZh: [
            "先找出简单的组成部分：长方形、三角形、圆或圆的一部分。",
            "决定是把各部分相加，还是从较大的图形中减去被去掉的部分。",
            "用对边关系求出缺少的长度；遇到直径，先除以 2 得到半径。",
            "用正确的公式分别计算每一部分的面积。",
            "相加或相减，写上平方单位，并与外围长方形的面积对照，检查结果是否合理。"
          ],
          exampleEn: String.raw`A square of side \(8\) has a circle of diameter \(8\) drawn inside it. The area outside the circle is \(8^{2}-\pi\cdot4^{2}=64-16\pi\).`,
          exampleZh: String.raw`边长为 \(8\) 的正方形内画了一个直径为 \(8\) 的圆。圆外部分的面积为 \(8^{2}-\pi\cdot4^{2}=64-16\pi\)。`
        },
        {
          titleEn: "How scaling changes perimeter and area",
          titleZh: "边长缩放时周长与面积的变化",
          formula: String.raw`\text{new perimeter}=k\times\text{perimeter},\quad \text{new area}=k^{2}\times\text{area}`,
          explanationEn: String.raw`If every length of a shape is multiplied by a scale factor \(k\), the perimeter is multiplied by \(k\) but the area is multiplied by \(k^{2}\). Doubling the sides doubles the perimeter and quadruples the area; tripling the sides makes the area \(9\) times as large. This holds only when all lengths are scaled by the same factor. Many Quantitative Reasoning items can be settled with this reasoning and no calculation at all.`,
          explanationZh: String.raw`如果图形的每条边都乘以缩放倍数 \(k\)，周长变为原来的 \(k\) 倍，面积则变为原来的 \(k^{2}\) 倍。边长加倍，周长加倍，面积变为 4 倍；边长变为 3 倍，面积变为 9 倍。这只适用于所有长度都按同一倍数缩放的情形。许多数量推理题用这个规律就能判断，根本不必计算。`,
          exampleEn: String.raw`A square with side \(5\) has perimeter \(20\) and area \(25\); with side \(10\) the perimeter is \(40\) and the area is \(100\). If only the side of length \(4\) in a \(4\) by \(6\) rectangle is doubled to \(8\), the area doubles from \(24\) to \(48\), but the perimeter goes from \(20\) to \(28\), not \(40\).`,
          exampleZh: String.raw`边长为 \(5\) 的正方形，周长 \(20\)，面积 \(25\)；边长变为 \(10\) 时，周长为 \(40\)，面积为 \(100\)。如果只把 \(4\) 乘 \(6\) 的长方形中长为 \(4\) 的那条边加倍成 \(8\)，面积由 \(24\) 变为 \(48\)（加倍），但周长是由 \(20\) 变为 \(28\)，而不是 \(40\)。`
        }
      ],
      methodsEn: [
        "Label every length with its unit, and sketch the figure if none is shown",
        "Decide first whether the question asks for the distance around (perimeter) or the space inside (area)",
        "Split a composite figure into simple pieces, or subtract a removed part from the whole",
        String.raw`Use scale factors: lengths grow by \(k\), areas by \(k^{2}\)`,
        String.raw`Keep \(\pi\) in the answer when the choices are written in terms of \(\pi\)`,
        "Estimate with an enclosing rectangle to catch large mistakes"
      ],
      methodsZh: [
        "给每个长度标上单位；题目没有图时自己画草图",
        "先判断：问的是一周的长度（周长）还是里面的大小（面积）",
        "把组合图形分成简单图形，或从整体中减去去掉的部分",
        String.raw`用缩放倍数推理：长度变为 \(k\) 倍，面积变为 \(k^{2}\) 倍`,
        String.raw`选项含有 \(\pi\) 时，答案中保留 \(\pi\)`,
        "用外围的长方形估算，及时发现大的错误"
      ],
      exampleEn: String.raw`A rectangular yard is \(20\) ft by \(12\) ft. Fencing around its edge is a perimeter question: \(2(20+12)=64\) ft. Covering the ground with sod is an area question: \(20\times12=240\) square feet. If a \(4\) ft by \(3\) ft patio is built inside the yard, only \(240-12=228\) square feet of sod is needed.`,
      exampleZh: String.raw`一块长方形院子长 \(20\) ft、宽 \(12\) ft。沿院子边缘围一圈围栏，求的是周长：\(2(20+12)=64\) ft。用草皮盖住地面，求的是面积：\(20\times12=240\) 平方英尺。如果院子里建一个 \(4\) ft 乘 \(3\) ft 的露台，只需要铺 \(240-12=228\) 平方英尺的草皮。`,
      checklistEn: [
        "Tell perimeter from area and give the correct units",
        "Write the area formulas for rectangles, parallelograms, triangles, trapezoids and circles from memory",
        "Find a missing side of a composite figure",
        "Find a shaded area by subtraction",
        "Predict how perimeter and area change when the sides are scaled",
        "Find the area of a sector (Upper Level)"
      ],
      checklistZh: [
        "分清周长与面积，并写出正确的单位",
        "能默写长方形、平行四边形、三角形、梯形和圆的面积公式",
        "能求组合图形中缺少的边长",
        "能用减法求阴影部分的面积",
        "能判断边长缩放后周长与面积的变化",
        "能求扇形的面积（高级）"
      ]
    },
    {
      id: "volume-surface-area",
      zh: "体积与表面积",
      en: "Volume & Surface Area",
      detailEn: "Volume and surface area of cubes, rectangular prisms and cylinders; cones, spheres and pyramids (Upper); cubic units, composite solids, packing and capacity.",
      detailZh: "立方体、长方体和圆柱的体积与表面积；圆锥、棱锥和球（高级）；立方单位、组合立体图形、装箱与容量。",
      explanationEn: "Volume is the amount of space inside a solid and is measured in cubic units. Surface area is the total area of the outside faces and is measured in square units. Capacity is how much a container can hold, usually in liters or gallons. Lower Level problems stay with cubes and rectangular prisms; Middle Level adds cylinders and triangular prisms; Upper Level adds cones, pyramids, spheres, composite solids and scale-factor questions. For most solids the key idea is that a prism or cylinder has the same cross-section from bottom to top, so its volume is base area times height. Always ask whether the question is about the inside (volume) or the outside covering (surface area).",
      explanationZh: "体积是立体图形内部空间的大小，用立方单位表示；表面积是所有外表面的面积之和，用平方单位表示；容量是容器能装多少东西，常用升或加仑。初级主要考立方体和长方体；中级增加圆柱和三棱柱；高级再增加圆锥、棱锥、球、组合立体图形和缩放倍数问题。对大多数柱体来说，核心思想是：棱柱和圆柱从底到顶的截面始终相同，所以体积等于底面积乘高。做题时先分清问的是里面（体积）还是外面的包装（表面积）。",
      keyPoints: [
        {
          titleEn: "Volume of prisms and cylinders: base area times height",
          titleZh: "棱柱与圆柱的体积：底面积乘高",
          formula: String.raw`V=Bh,\quad V_{\text{box}}=\ell wh,\quad V_{\text{cylinder}}=\pi r^{2}h`,
          explanationEn: String.raw`\(B\) is the area of the base, meaning the face that repeats from one end of the solid to the other, and the height \(h\) is the distance between the two bases. For a triangular prism the base is a triangle, so find the triangle’s area first. A cube with edge \(s\) is a box with base area \(s^{2}\), so its volume is \(s^{3}\). Volume is measured in cubic units. If the volume and two of the dimensions are given, divide the volume by their product to find the missing dimension.`,
          explanationZh: String.raw`\(B\) 是底面积，指从立体的一端到另一端不断重复的那个面；高 \(h\) 是两个底面之间的距离。三棱柱的底面是三角形，要先求出三角形的面积。棱长为 \(s\) 的立方体，底面积是 \(s^{2}\)，所以体积是 \(s^{3}\)。体积用立方单位表示。已知体积和另外两个维度时，用体积除以这两个维度的乘积，求缺少的那个维度。`,
          exampleEn: String.raw`A box that is \(5\times4\times3\) has volume \(60\) cubic units. A cylinder with \(r=3\) and \(h=10\) has volume \(\pi\cdot3^{2}\cdot10=90\pi\). A box with base area \(24\) and volume \(120\) has height \(120\div24=5\).`,
          exampleZh: String.raw`\(5\times4\times3\) 的长方体，体积为 \(60\) 立方单位。\(r=3\)、\(h=10\) 的圆柱，体积为 \(\pi\cdot3^{2}\cdot10=90\pi\)。底面积为 \(24\)、体积为 \(120\) 的长方体，高为 \(120\div24=5\)。`
        },
        {
          titleEn: "Surface area of cubes and rectangular prisms",
          titleZh: "立方体与长方体的表面积",
          formula: String.raw`SA_{\text{box}}=2(\ell w+\ell h+wh),\quad SA_{\text{cube}}=6s^{2}`,
          explanationEn: "Surface area is the total area of all the faces, which is the amount of paper needed to wrap the solid completely. A rectangular prism has six faces in three matching pairs. Students often forget one pair of faces or mix up surface area and volume. If a problem describes an open box, a tank without a lid or a room whose floor will not be painted, leave out the missing face.",
          explanationZh: "表面积是所有面的面积之和，相当于把立体图形完整包起来所需的纸的面积。长方体有六个面，分成三组，每组两个面完全相同。学生常常漏掉一组面，或者把表面积和体积混在一起。如果题目说的是无盖的盒子、没有盖子的水箱，或者地面不刷漆的房间，要把缺少的那个面去掉。",
          stepsEn: [
            "List the three pairs of matching faces: top and bottom, front and back, left and right.",
            "Find the area of one face in each pair.",
            "Add the three areas and double the total, because each face has a matching partner.",
            "Subtract any missing face, such as the top of an open box, and write square units."
          ],
          stepsZh: [
            "列出三组相对的面：上下、前后、左右。",
            "分别求出每一组中一个面的面积。",
            "把三个面积相加再乘 2，因为每个面都有一个完全相同的对面。",
            "如果缺少某个面（例如无盖盒子的顶面），要把它减去，最后写上平方单位。"
          ],
          exampleEn: String.raw`For a \(5\times4\times3\) box the face areas are \(20\), \(15\) and \(12\), so \(SA=2(20+15+12)=94\). A cube with edge \(4\) has \(SA=6\times16=96\).`,
          exampleZh: String.raw`\(5\times4\times3\) 的长方体，三种面的面积分别为 \(20\)、\(15\)、\(12\)，所以 \(SA=2(20+15+12)=94\)。棱长为 \(4\) 的立方体，\(SA=6\times16=96\)。`
        },
        {
          titleEn: "Cylinders: lateral and total surface area",
          titleZh: "圆柱：侧面积与表面积",
          formula: String.raw`SA_{\text{cylinder}}=2\pi r^{2}+2\pi rh`,
          explanationEn: String.raw`A cylinder has two circular bases, each of area \(\pi r^{2}\), and a curved side. If you unroll the side it becomes a rectangle whose width is the circumference \(2\pi r\) and whose height is \(h\), so the side has area \(2\pi rh\). A label wrapped around a can covers only the curved side; a can with a top and a bottom needs all three parts.`,
          explanationZh: String.raw`圆柱有两个圆形底面，每个的面积是 \(\pi r^{2}\)，另外还有一个弯曲的侧面。把侧面展开，就得到一个长方形，它的宽是圆周长 \(2\pi r\)，高是 \(h\)，所以侧面积是 \(2\pi rh\)。包在罐头外面的标签纸只盖住侧面；有盖有底的罐子则三部分都要算。`,
          exampleEn: String.raw`For \(r=2\) and \(h=5\), the two bases give \(2\pi\cdot2^{2}=8\pi\) and the side gives \(2\pi\cdot2\cdot5=20\pi\), so \(SA=28\pi\).`,
          exampleZh: String.raw`当 \(r=2\)、\(h=5\) 时，两个底面共 \(2\pi\cdot2^{2}=8\pi\)，侧面为 \(2\pi\cdot2\cdot5=20\pi\)，所以 \(SA=28\pi\)。`
        },
        {
          titleEn: "Cones, pyramids and spheres (Upper Level)",
          titleZh: "圆锥、棱锥与球（高级）",
          formula: String.raw`V_{\text{cone}}=\frac{1}{3}\pi r^{2}h,\quad V_{\text{sphere}}=\frac{4}{3}\pi r^{3}`,
          explanationEn: String.raw`A cone holds exactly one third as much as a cylinder with the same base and height, and a pyramid holds one third as much as a prism with the same base and height, so a pyramid has volume \(\frac{1}{3}Bh\). The height of a cone or pyramid is the perpendicular distance from the tip to the base, not the length of a slanted edge. A sphere is determined by its radius alone, and its surface area is \(4\pi r^{2}\). Memorize these formulas; at the Upper Level they can appear directly or inside composite-solid problems.`,
          explanationZh: String.raw`圆锥的体积恰好是同底同高圆柱的三分之一，棱锥的体积也恰好是同底同高棱柱的三分之一，即 \(\frac{1}{3}Bh\)。圆锥或棱锥的高是顶点到底面的垂直距离，而不是倾斜的边长。球只由半径决定，它的表面积是 \(4\pi r^{2}\)。这些公式要熟记；高级考试中它们可能直接出现，也可能藏在组合立体图形里。`,
          exampleEn: String.raw`A cone with \(r=3\) and \(h=4\) has volume \(\frac{1}{3}\pi\cdot9\cdot4=12\pi\). A sphere with \(r=3\) has volume \(\frac{4}{3}\pi\cdot27=36\pi\) and surface area \(4\pi\cdot9=36\pi\).`,
          exampleZh: String.raw`\(r=3\)、\(h=4\) 的圆锥，体积为 \(\frac{1}{3}\pi\cdot9\cdot4=12\pi\)。\(r=3\) 的球，体积为 \(\frac{4}{3}\pi\cdot27=36\pi\)，表面积为 \(4\pi\cdot9=36\pi\)。`
        },
        {
          titleEn: "Composite solids and packing boxes",
          titleZh: "组合立体图形与装箱",
          formula: String.raw`V_{\text{solid}}=V_{1}+V_{2}+\cdots\quad\text{or}\quad V_{\text{whole}}-V_{\text{removed}}`,
          explanationEn: "For a composite solid, find the volume of each simple part and add, or subtract a notch or hole from a larger block. To find how many small cubes fill a box, divide each dimension of the box by the cube’s edge and multiply the three results. When the cubes fit exactly, this equals the volume of the box divided by the volume of one cube, and it also shows how the cubes are arranged.",
          explanationZh: "求组合立体图形的体积时，先分别求出各个简单部分的体积再相加，或者从较大的立体中减去缺口或空洞。要知道一个盒子里能装下多少个小立方体，把盒子的每个维度分别除以小立方体的棱长，再把三个结果相乘。小立方体恰好装满时，这与“盒子体积除以一个小立方体的体积”结果相同，而且还能看出立方体是怎样排列的。",
          exampleEn: String.raw`A \(6\times4\times3\) block has a \(2\times2\times3\) notch cut out, leaving \(72-12=60\) cubic units. The number of \(2\) cm cubes that fit in a \(10\times6\times4\) cm box is \(5\times3\times2=30\).`,
          exampleZh: String.raw`一个 \(6\times4\times3\) 的长方体块被挖去一个 \(2\times2\times3\) 的缺口，剩下 \(72-12=60\) 立方单位。在 \(10\times6\times4\) cm 的盒子里，能装下的 \(2\) cm 立方体个数是 \(5\times3\times2=30\)。`
        },
        {
          titleEn: "Cubic units, capacity and scale factors",
          titleZh: "立方单位、容量与缩放倍数",
          formula: String.raw`1\ \text{L}=1000\ \text{mL}=1000\ \text{cm}^{3},\quad V_{\text{new}}=k^{3}V,\quad SA_{\text{new}}=k^{2}\,SA`,
          explanationEn: String.raw`Volume is measured in cubic units such as \(\text{cm}^{3}\) or \(\text{ft}^{3}\); a volume written in plain length or square units is wrong. In the metric system, \(1\ \text{cm}^{3}\) holds exactly \(1\ \text{mL}\), so \(1000\ \text{cm}^{3}\) is \(1\) liter. If every dimension of a solid is multiplied by \(k\), the surface area is multiplied by \(k^{2}\) and the volume by \(k^{3}\). Doubling every edge of a cube therefore makes its volume \(8\) times as large, not \(2\) times.`,
          explanationZh: String.raw`体积用立方单位表示，如 \(\text{cm}^{3}\) 或 \(\text{ft}^{3}\)；用长度单位或平方单位写体积是错误的。在公制中，\(1\ \text{cm}^{3}\) 恰好能装 \(1\ \text{mL}\) 的水，所以 \(1000\ \text{cm}^{3}\) 就是 \(1\) 升。如果立体图形的每个维度都乘以 \(k\)，表面积变为原来的 \(k^{2}\) 倍，体积变为原来的 \(k^{3}\) 倍。因此立方体的每条棱加倍后，体积是原来的 \(8\) 倍，而不是 \(2\) 倍。`,
          exampleEn: String.raw`A cube with edge \(2\) has volume \(8\) and surface area \(24\). With edge \(4\), the volume is \(64\) (\(8\) times as much) and the surface area is \(96\) (\(4\) times as much).`,
          exampleZh: String.raw`棱长为 \(2\) 的立方体，体积为 \(8\)，表面积为 \(24\)。棱长变为 \(4\) 时，体积为 \(64\)（是原来的 \(8\) 倍），表面积为 \(96\)（是原来的 \(4\) 倍）。`
        }
      ],
      methodsEn: [
        "Decide what is asked: volume (inside), surface area (outside) or capacity (how much it holds)",
        "For a prism or cylinder, find the base area first and then multiply by the height",
        "Sketch a box and count each pair of matching faces once, then double",
        "For a composite solid, add the volumes of the parts or subtract the hole",
        "Pack small cubes one dimension at a time: length, width, then height",
        String.raw`Use scale factors: surface area grows by \(k^{2}\), volume by \(k^{3}\)`
      ],
      methodsZh: [
        "先判断问的是体积（里面）、表面积（外面）还是容量（能装多少）",
        "求棱柱或圆柱的体积时，先求底面积，再乘以高",
        "画出长方体草图，每组相对的面只算一次，最后乘 2",
        "求组合立体图形的体积时，把各部分的体积相加，或减去空洞",
        "装小立方体时，按长、宽、高一个方向一个方向地数",
        String.raw`用缩放倍数推理：表面积变为 \(k^{2}\) 倍，体积变为 \(k^{3}\) 倍`
      ],
      exampleEn: String.raw`A tank is \(40\) cm long, \(25\) cm wide and \(20\) cm tall, and it is filled with water to \(\frac{3}{4}\) of its height. The water is \(40\times25\times15=15{,}000\ \text{cm}^{3}\), which is \(15\) liters.`,
      exampleZh: String.raw`一个水箱长 \(40\) cm、宽 \(25\) cm、高 \(20\) cm，里面的水占箱高的 \(\frac{3}{4}\)。水的体积是 \(40\times25\times15=15{,}000\ \text{cm}^{3}\)，也就是 \(15\) 升。`,
      checklistEn: [
        "Write the volume formulas for cubes, boxes and cylinders from memory",
        "Find the surface area of a box, including an open box",
        "Use the cone, pyramid and sphere formulas (Upper Level)",
        "Pack small cubes into a box dimension by dimension",
        "Convert between cubic centimeters, milliliters and liters",
        "Predict how volume changes when every edge is scaled"
      ],
      checklistZh: [
        "能默写立方体、长方体和圆柱的体积公式",
        "能求长方体（包括无盖盒子）的表面积",
        "能运用圆锥、棱锥和球的公式（高级）",
        "能按各个维度计算盒子里能装多少个小立方体",
        "能在立方厘米、毫升和升之间换算",
        "能判断每条棱缩放后体积的变化"
      ]
    },
    {
      id: "units-rates-time",
      zh: "单位换算、速率与时间",
      en: "Units, Rates & Time",
      detailEn: "Customary and metric conversions, square and cubic unit conversions, unit rates and unit pricing, speed–distance–time, average speed, work rates, elapsed time and money.",
      detailZh: "英制与公制单位换算，平方单位和立方单位的换算，单位比率与单价，速度、路程与时间，平均速度，工作效率，经过的时间与钱的计算。",
      explanationEn: "A measurement is a number together with a unit, and many errors come from ignoring the unit. A conversion multiplies or divides by a known conversion fact. A rate compares two different quantities, such as miles per hour or dollars per pound. Lower Level focuses on conversions within one system (inches, feet and yards; cups, pints and quarts; minutes and hours), elapsed time and money. Middle Level adds metric conversions, unit rates and the distance formula. Upper Level adds conversions of area and volume units, average speed and work-rate ideas. Know the common conversion facts by heart, and read each problem for any conversion fact it supplies.",
      explanationZh: "测量结果由数和单位两部分组成，很多错误都出在忽略单位上。单位换算就是乘以或除以已知的换算关系；速率则是比较两个不同的量，例如每小时多少英里、每磅多少美元。初级重点是同一单位制内的换算（英寸、英尺和码；杯、品脱和夸脱；分钟和小时）、经过的时间以及钱的计算；中级增加公制换算、单位比率和路程公式；高级再增加面积和体积单位的换算、平均速度和工作效率。常用的换算关系要熟记，同时要留意题目本身给出的换算关系。",
      keyPoints: [
        {
          titleEn: "Converting units with a conversion fact",
          titleZh: "用换算关系（进率）换算单位",
          formula: String.raw`\text{new amount}=\text{old amount}\times(\text{new units per old unit})`,
          explanationEn: "To convert, multiply by the number of new units in one old unit. Going from a larger unit to a smaller one (feet to inches) gives a bigger number; going from a smaller unit to a larger one (centimeters to meters) gives a smaller number. Know the common facts: 1 ft = 12 in, 1 yd = 3 ft, 1 mi = 5,280 ft, 1 lb = 16 oz, 1 pt = 2 cups, 1 qt = 2 pt, 1 gal = 4 qt, 1 h = 60 min; and in the metric system 1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm, 1 kg = 1000 g and 1 L = 1000 mL.",
          explanationZh: "换算时，乘以“一个旧单位里含有多少个新单位”。从大单位换成小单位（如英尺换成英寸），数会变大；从小单位换成大单位（如厘米换成米），数会变小。要熟记常用的换算关系（进率）：1 英尺 (ft) = 12 英寸 (in)，1 码 (yd) = 3 英尺，1 英里 (mi) = 5,280 英尺，1 磅 (lb) = 16 盎司 (oz)，1 品脱 (pt) = 2 杯，1 夸脱 (qt) = 2 品脱，1 加仑 (gal) = 4 夸脱，1 小时 = 60 分钟；公制中 1 km = 1000 m，1 m = 100 cm，1 cm = 10 mm，1 kg = 1000 g，1 L = 1000 mL。",
          stepsEn: [
            "Write the quantity with its unit.",
            "Find the conversion fact that connects the two units, such as 1 ft = 12 in.",
            "Multiply when changing to a smaller unit and divide when changing to a larger unit.",
            "Check that the answer is sensible: smaller units give a bigger number."
          ],
          stepsZh: [
            "写出带单位的数量。",
            "找出连接两个单位的换算关系，例如 1 ft = 12 in。",
            "换成更小的单位时用乘法，换成更大的单位时用除法。",
            "检查答案是否合理：单位越小，数就越大。"
          ],
          exampleEn: String.raw`Feet to inches: \(3\times12=36\) in. Centimeters to meters: \(450\div100=4.5\) m. Quarts to pints: \(3\times2=6\) pt.`,
          exampleZh: String.raw`\(3\) 英尺换成英寸：\(3\times12=36\) in。\(450\) cm 换成米：\(450\div100=4.5\) m。\(3\) 夸脱换成品脱：\(3\times2=6\) pt。`
        },
        {
          titleEn: "Converting square and cubic units",
          titleZh: "平方单位与立方单位的换算",
          formula: String.raw`1\ \text{yd}^{2}=3^{2}\ \text{ft}^{2}=9\ \text{ft}^{2},\quad 1\ \text{yd}^{3}=3^{3}\ \text{ft}^{3}=27\ \text{ft}^{3}`,
          explanationEn: String.raw`Because \(1\ \text{yd}=3\ \text{ft}\), a square yard is a \(3\) ft by \(3\) ft square, which holds \(9\) square feet, and a cubic yard is a \(3\) ft by \(3\) ft by \(3\) ft cube, which holds \(27\) cubic feet. In general, if the length conversion factor is \(k\), use \(k^{2}\) for areas and \(k^{3}\) for volumes. Using the length factor directly is the classic mistake. The same idea works in the metric system: \(1\ \text{m}^{2}=100^{2}=10{,}000\ \text{cm}^{2}\).`,
          explanationZh: String.raw`因为 \(1\ \text{yd}=3\ \text{ft}\)，所以 \(1\) 平方码是边长 \(3\) ft 的正方形，含有 \(9\) 平方英尺；\(1\) 立方码是棱长 \(3\) ft 的立方体，含有 \(27\) 立方英尺。一般地，如果长度的换算倍数是 \(k\)，面积要用 \(k^{2}\)，体积要用 \(k^{3}\)。直接套用长度的换算倍数是典型错误。公制中同样适用：\(1\ \text{m}^{2}=100^{2}=10{,}000\ \text{cm}^{2}\)。`,
          exampleEn: String.raw`A rug is \(2\) yd by \(3\) yd, so its area is \(6\ \text{yd}^{2}\). In square feet that is \(6\times9=54\ \text{ft}^{2}\), which agrees with \(6\ \text{ft}\times9\ \text{ft}\).`,
          exampleZh: String.raw`一块地毯长 \(3\) 码、宽 \(2\) 码，面积是 \(6\ \text{yd}^{2}\)。换成平方英尺是 \(6\times9=54\ \text{ft}^{2}\)，与 \(6\ \text{ft}\times9\ \text{ft}\) 的结果一致。`
        },
        {
          titleEn: "Unit rates and unit pricing",
          titleZh: "单位比率与单价",
          formula: String.raw`\text{unit rate}=\frac{\text{amount}}{\text{number of units}}`,
          explanationEn: "A unit rate tells how much of one quantity goes with exactly one unit of another, such as dollars per item or miles per gallon; a unit price is a unit rate for cost, the total cost divided by the number of items. To find the better buy, compute the price per unit for each option, or scale both options to a common amount. The lower unit price is the better buy only when the units are the same. In money problems, keep dollars and cents in the same unit, and notice whether the question asks for the change or for the total.",
          explanationZh: "单位比率表示一个量对应“恰好一个单位”的另一个量是多少，例如每件多少美元、每加仑行驶多少英里；单价就是以价格为量的单位比率，等于总价除以件数。要找更划算的购买方案，可以分别算出每种方案的单价，也可以把两种方案化成相同的数量再比较。只有单位相同，单价较低的才是更划算的。涉及钱的题目，要把美元和美分统一成同一个单位，并分清题目问的是找回多少钱，还是一共多少钱。",
          exampleEn: "Pens cost 3 for $4.50, or 5 for $7.00. The unit prices are $1.50 and $1.40 per pen, so the pack of 5 is the better buy.",
          exampleZh: "笔的价格是 3 支 $4.50，或 5 支 $7.00。每支的单价分别是 $1.50 和 $1.40，所以 5 支装更划算。"
        },
        {
          titleEn: "Speed, distance and time",
          titleZh: "速度、路程与时间",
          formula: String.raw`d=rt,\quad r=\frac{d}{t},\quad t=\frac{d}{r}`,
          explanationEn: String.raw`Distance equals rate (speed) times time. Rearrange the formula so the unknown is alone, then substitute. The units must agree: miles per hour needs time in hours, so change minutes to hours first (\(30\) minutes is \(0.5\) hour; \(20\) minutes is \(\frac{1}{3}\) hour). A common slip is to multiply the speed by a number of minutes.`,
          explanationZh: String.raw`路程等于速度（速率）乘以时间。先把公式变形，让未知量单独在一边，再代入数据。单位必须一致：速度的单位是“英里/小时”，时间就要用小时，所以要先把分钟换成小时（\(30\) 分钟是 \(0.5\) 小时，\(20\) 分钟是 \(\frac{1}{3}\) 小时）。常见的疏忽是直接用速度乘以分钟数。`,
          stepsEn: [
            String.raw`Write the formula with the unknown on one side, such as \(t=\frac{d}{r}\).`,
            "Convert the time so it matches the unit in the rate, for example minutes to hours.",
            "Substitute the numbers and calculate.",
            "Write the correct unit and check that the answer is reasonable."
          ],
          stepsZh: [
            String.raw`写出把未知量单独放在一边的公式，例如 \(t=\frac{d}{r}\)。`,
            "把时间换算成与速度单位一致的单位，例如把分钟换成小时。",
            "代入数据并计算。",
            "写上正确的单位，并检查答案是否合理。"
          ],
          exampleEn: String.raw`A cyclist rides \(18\) miles in \(1\frac{1}{2}\) hours, so \(r=18\div1.5=12\) miles per hour. A car at \(60\) miles per hour travels \(60\times0.5=30\) miles in \(30\) minutes.`,
          exampleZh: String.raw`一名骑车人用 \(1\frac{1}{2}\) 小时骑了 \(18\) 英里，速度是 \(18\div1.5=12\) 英里/小时。一辆时速 \(60\) 英里的汽车，\(30\) 分钟行驶 \(60\times0.5=30\) 英里。`
        },
        {
          titleEn: "Average speed and work rates (Upper Level)",
          titleZh: "平均速度与工作效率（高级）",
          formula: String.raw`\text{average speed}=\frac{\text{total distance}}{\text{total time}}`,
          explanationEn: String.raw`Average speed is total distance divided by total time; it equals the average of the speeds only when the times are equal. For work problems, write each worker or machine as a rate, the fraction of the job finished per hour, and add the rates when they work together. A pipe that fills a tank in \(6\) hours works at \(\frac{1}{6}\) of the tank per hour.`,
          explanationZh: String.raw`平均速度等于总路程除以总时间；只有各段所用的时间相同时，它才等于各段速度的平均数。工作问题要把每个人或每台机器表示成工作效率，也就是每小时完成工作总量的几分之几；一起工作时，把效率相加。例如，一根水管 \(6\) 小时注满水箱，它每小时能注入水箱的 \(\frac{1}{6}\)。`,
          exampleEn: String.raw`A driver goes \(60\) miles at \(30\) mph (\(2\) hours) and then \(60\) miles at \(60\) mph (\(1\) hour). The average speed is \(120\div3=40\) mph, not \(45\). Two pipes that fill a tank in \(6\) hours and \(3\) hours fill \(\frac{1}{6}+\frac{1}{3}=\frac{1}{2}\) of it per hour together, so they need \(2\) hours.`,
          exampleZh: String.raw`一名司机先以 \(30\) mph 行驶 \(60\) 英里（用 \(2\) 小时），再以 \(60\) mph 行驶 \(60\) 英里（用 \(1\) 小时）。平均速度是 \(120\div3=40\) mph，而不是 \(45\)。两根水管单独注满水箱分别需要 \(6\) 小时和 \(3\) 小时，一起每小时能注入水箱的 \(\frac{1}{6}+\frac{1}{3}=\frac{1}{2}\)，所以需要 \(2\) 小时。`
        },
        {
          titleEn: "Elapsed time and the clock",
          titleZh: "经过的时间与钟表",
          explanationEn: "Elapsed time is the time between a start and an end. Count it in chunks instead of subtracting clock numbers directly, because minutes are base 60 and the clock restarts at 12. Take extra care with a.m. and p.m., with times that cross noon or midnight, and with problems that give a duration and ask for the end time.",
          explanationZh: "经过的时间是从开始时刻到结束时刻之间的时间长度。不要直接用钟面上的数相减，而要分段去数：分钟是六十进制，钟表走到 12 之后又会重新开始。要特别小心上午 (a.m.) 与下午 (p.m.)、跨过中午或午夜的时间，以及题目给出时长而要求结束时刻的情形。",
          stepsEn: [
            "Count from the start time up to the next whole hour.",
            "Count the whole hours from there up to the last whole hour before the end time.",
            "Add the minutes left after that last whole hour.",
            "Add the three parts, and switch a.m. and p.m. carefully if the time crosses noon or midnight."
          ],
          stepsZh: [
            "从开始时刻数到下一个整点。",
            "再数从这个整点到结束时刻之前最后一个整点之间的整小时数。",
            "加上最后一个整点之后剩下的分钟数。",
            "把三段时间相加；如果跨过中午或午夜，要小心地切换 a.m. 和 p.m.。"
          ],
          exampleEn: "From 7:45 a.m. to 11:20 a.m. is 15 minutes + 3 hours + 20 minutes = 3 hours 35 minutes. A movie that starts at 6:50 p.m. and lasts 2 hours 25 minutes ends at 9:15 p.m.",
          exampleZh: "从上午 7:45 到上午 11:20，经过 15 分钟 + 3 小时 + 20 分钟 = 3 小时 35 分钟。一部电影晚上 6:50 开始，持续 2 小时 25 分钟，结束时间是晚上 9:15。"
        }
      ],
      methodsEn: [
        "Write the unit next to every number and cancel units as you would cancel fractions",
        "Change all quantities to the same unit before adding, comparing or multiplying",
        "Compare prices by unit price, or scale both options to the same amount",
        "Match the time unit to the rate unit: miles per hour needs hours",
        "For average speed, divide the total distance by the total time",
        "Count elapsed time in chunks: to the next hour, whole hours, then minutes"
      ],
      methodsZh: [
        "每个数后面都写上单位，像约分一样约去单位",
        "相加、比较或相乘之前，先把所有量换成同一个单位",
        "用单价比较价格，或者把两种方案化成相同的数量再比",
        "时间单位要与速率单位匹配：每小时多少英里，时间就用小时",
        "求平均速度时，用总路程除以总时间",
        "分段数经过的时间：先到下一个整点，再数整小时，最后加分钟"
      ],
      exampleEn: String.raw`A runner jogs at \(8\) km per hour for \(45\) minutes. Convert the time first: \(45\) minutes is \(0.75\) hour, so the distance is \(8\times0.75=6\) km, which is \(6000\) m.`,
      exampleZh: String.raw`一名跑步者以每小时 \(8\) km 的速度慢跑 \(45\) 分钟。先换算时间：\(45\) 分钟是 \(0.75\) 小时，所以路程是 \(8\times0.75=6\) km，即 \(6000\) m。`,
      checklistEn: [
        "Convert within the customary and metric systems",
        "Convert square and cubic units by squaring or cubing the length factor",
        "Find a unit rate and decide which option is the better buy",
        String.raw`Use \(d=rt\) to find a distance, a speed or a time`,
        "Find an average speed and a combined work rate (Upper Level)",
        "Find elapsed time, including times that cross noon or midnight"
      ],
      checklistZh: [
        "能在英制和公制单位内部换算",
        "能通过把长度的换算倍数平方或立方，来换算平方单位和立方单位",
        "能求单位比率，并判断哪种方案更划算",
        String.raw`能用 \(d=rt\) 求路程、速度或时间`,
        "能求平均速度和合作的工作效率（高级）",
        "能求经过的时间，包括跨过中午或午夜的情形"
      ]
    }
  ]
};
