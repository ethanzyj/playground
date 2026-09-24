import { buildProblemReferences } from "./problem-index.mjs";

export const TOPICS = [
  {
    id: "advanced-algebra",
    zh: "代数",
    en: "Algebra",
    officialAlignment: "Algebra, functions, inequalities, and sequences",
    officialAlignmentZh: "代数、函数、不等式与数列",
    concepts: [
      {
        id: "polynomials",
        zh: "多项式",
        en: "Polynomials",
        detailZh: "多项式运算、因式分解、余数定理、韦达定理（根与系数的关系）以及可因式分解的高次方程",
        detailEn: "Polynomial operations, factoring, the remainder theorem, Vieta's formulas, and factorable higher-degree equations.",
        explanationZh: "AMC 10 的多项式题通常不考机械展开，而考结构识别：把表达式重写成可因式分解、可代入、可利用根与系数关系的形式。",
        explanationEn: "AMC 10 polynomial problems usually reward structure: rewriting expressions so factoring, substitution, or root-coefficient relationships become visible.",
        formulas: [
          String.raw`a^2-b^2=(a-b)(a+b)`,
          String.raw`x^2-(r+s)x+rs=(x-r)(x-s)`,
          String.raw`P(x)=Q(x)(x-a)+P(a)`
        ],
        formulaNotes: [
          {
            explanationZh: "平方差公式把两个平方之差分解成两个一次因式，常用于快速因式分解和约分。",
            explanationEn: "The difference of squares identity factors a subtraction of two squares into two linear factors, which is useful for factoring and cancellation.",
            exampleZh: String.raw`\(49x^2-16=(7x-4)(7x+4)\)。`,
            exampleEn: String.raw`\(49x^2-16=(7x-4)(7x+4)\).`
          },
          {
            explanationZh: String.raw`若二次多项式的两个根是 \(r,s\)，则根的和决定一次项系数，根的积决定常数项。这是韦达定理的二次情形。`,
            explanationEn: String.raw`If a monic quadratic has roots \(r,s\), their sum determines the linear coefficient and their product determines the constant term. This is the quadratic case of Vieta's formulas.`,
            exampleZh: String.raw`根为 \(2,5\) 的首一二次多项式是 \((x-2)(x-5)=x^2-7x+10\)。`,
            exampleEn: String.raw`The monic quadratic with roots \(2,5\) is \((x-2)(x-5)=x^2-7x+10\).`
          },
          {
            explanationZh: String.raw`多项式除以 \(x-a\) 时，商为 \(Q(x)\)，余数是常数 \(P(a)\)。因此只需代入 \(x=a\) 就能求余数。`,
            explanationEn: String.raw`When \(P(x)\) is divided by \(x-a\), the quotient is \(Q(x)\) and the constant remainder is \(P(a)\). Evaluating at \(x=a\) therefore gives the remainder immediately.`,
            stepsZh: [
              String.raw`先看除式 \(x-2\)。与 \(x-a\) 比较可知 \(a=2\)。`,
              String.raw`多项式除法保证存在商 \(Q(x)\) 和常数余数 \(R\)，使 \(P(x)=Q(x)(x-2)+R\)。`,
              String.raw`令 \(x=2\)。此时 \(Q(2)(2-2)=0\)，所以 \(P(2)=R\)。这就是代入能直接得到余数的原因。`,
              String.raw`计算 \(P(2)=2^2+1=5\)，因此余数 \(R=5\)。`,
              String.raw`若继续做除法，可得 \(Q(x)=x+2\)，完整等式为 \(x^2+1=(x+2)(x-2)+5\)。`
            ],
            stepsEn: [
              String.raw`Start with the divisor \(x-2\). Comparing it with \(x-a\) gives \(a=2\).`,
              String.raw`Polynomial division guarantees a quotient \(Q(x)\) and constant remainder \(R\) such that \(P(x)=Q(x)(x-2)+R\).`,
              String.raw`Set \(x=2\). Then \(Q(2)(2-2)=0\), so \(P(2)=R\). This is why substitution reveals the remainder.`,
              String.raw`Compute \(P(2)=2^2+1=5\), so the remainder is \(R=5\).`,
              String.raw`Continuing the division gives \(Q(x)=x+2\), and the full identity is \(x^2+1=(x+2)(x-2)+5\).`
            ],
            exampleZh: String.raw`\(P(x)=x^2+1\) 除以 \(x-2\) 的余数为 \(P(2)=5\)。`,
            exampleEn: String.raw`The remainder when \(P(x)=x^2+1\) is divided by \(x-2\) is \(P(2)=5\).`
          }
        ],
        methodsZh: ["先找特殊值与对称性", "优先尝试因式分解和换元", "用根与系数关系避免直接求根"],
        methodsEn: ["Check special values and symmetry", "Try factoring and substitution first", "Use root-coefficient relations instead of solving directly"],
        exampleZh: String.raw`若 \(x+y=5\) 且 \(xy=6\)，求 \(x^2+y^2\)。因为 \(x^2+y^2=(x+y)^2-2xy=25-12=13\)。`,
        exampleEn: String.raw`If \(x+y=5\) and \(xy=6\), then \(x^2+y^2=(x+y)^2-2xy=25-12=13\).`,
        checklistZh: ["能识别常见恒等式", "能用换元简化高次表达式", "能解释余数定理的含义"],
        checklistEn: ["Recognize common identities", "Simplify higher-degree expressions by substitution", "Explain the remainder theorem"]
      },
      {
        id: "inequalities",
        zh: "不等式",
        en: "Inequalities",
        detailZh: "不等式变形、区间推理、等号条件与基本均值不等式",
        detailEn: "Inequality manipulation, interval reasoning, equality cases, and basic inequalities such as AM-GM.",
        explanationZh: "不等式题的关键是保持方向、关注定义域，并判断等号是否可取。AMC 10 常把不等式与整数、函数或几何量结合。",
        explanationEn: "The keys are preserving inequality direction, respecting domain restrictions, and checking equality cases. AMC 10 often combines inequalities with integers, functions, or geometry.",
        formulas: [
          String.raw`a<b,\ c<0\implies ac>bc`,
          String.raw`\operatorname{AM}\text{-}\operatorname{GM}:\ \frac{a+b}{2}\ge\sqrt{ab},\quad a,b\ge0`
        ],
        formulaNotes: [
          {
            explanationZh: "不等式两边同乘负数时，数轴方向被反转，所以不等号必须改变方向。",
            explanationEn: "Multiplying both sides of an inequality by a negative number reverses their order, so the inequality sign must flip.",
            exampleZh: String.raw`由 \(2<5\)，两边乘 \(-3\) 得 \(-6>-15\)。`,
            exampleEn: String.raw`From \(2<5\), multiplying by \(-3\) gives \(-6>-15\).`
          },
          {
            explanationZh: String.raw`对非负数，算术平均数不小于几何平均数；等号仅在 \(a=b\) 时成立。它常用于求和或乘积的最值。`,
            explanationEn: String.raw`For nonnegative numbers, the arithmetic mean is at least the geometric mean, with equality exactly when \(a=b\). It is often used to optimize a sum or product.`,
            exampleZh: String.raw`若 \(ab=16\) 且 \(a,b>0\)，则 \(\frac{a+b}{2}\ge4\)，所以 \(a+b\ge8\)。`,
            exampleEn: String.raw`If \(ab=16\) and \(a,b>0\), then \(\frac{a+b}{2}\ge4\), so \(a+b\ge8\).`
          }
        ],
        methodsZh: ["先确定变量范围", "分情况处理绝对值或符号", "等号条件常给出最值线索"],
        methodsEn: ["Start with the variable range", "Split cases for absolute values or signs", "Use equality cases to locate extrema"],
        exampleZh: String.raw`正数 \(a,b\) 满足 \(ab=16\)，则 \(a+b\ge8\)，等号在 \(a=b=4\) 时成立。`,
        exampleEn: String.raw`For positive \(a,b\) with \(ab=16\), AM-GM gives \(a+b\ge8\), with equality at \(a=b=4\).`,
        checklistZh: ["能正确翻转不等号", "能用区间表示解集", "能找到等号条件"],
        checklistEn: ["Reverse inequality signs correctly", "Represent solution sets as intervals", "Find equality cases"]
      },
      {
        id: "functions",
        zh: "函数",
        en: "Functions",
        detailZh: "函数记号、定义域和值域、复合函数、二次函数、指数规律与图像解读",
        detailEn: "Function notation, domain and range, composition, quadratics, exponential patterns, and graph interpretation.",
        explanationZh: "AMC 10 函数题强调输入输出关系、复合函数、图像信息和二次函数结构。超出基础代数的函数知识通常以可推理的方式出现。",
        explanationEn: "AMC 10 function problems emphasize input-output relationships, composition, graph interpretation, and quadratic structure. Advanced notation usually appears in a reasoning-friendly way.",
        formulas: [
          String.raw`(f\circ g)(x)=f(g(x))`,
          String.raw`y=ax^2+bx+c,\ a\ne0\quad\Longrightarrow\quad x_v=-\frac{b}{2a}`,
          String.raw`\frac{p(x)}{q(x)}:\ q(x)\ne0,\qquad \sqrt{g(x)}:\ g(x)\ge0`
        ],
        formulaNotes: [
          {
            explanationZh: String.raw`复合函数先计算内层函数 \(g\)，再把结果作为 \(f\) 的输入。`,
            explanationEn: String.raw`For a composition, evaluate the inside function \(g\) first, then use its output as the input to \(f\).`,
            exampleZh: String.raw`若 \(g(3)=7\) 且 \(f(7)=15\)，则 \((f\circ g)(3)=15\)。`,
            exampleEn: String.raw`If \(g(3)=7\) and \(f(7)=15\), then \((f\circ g)(3)=15\).`
          },
          {
            explanationZh: String.raw`二次函数图像的对称轴经过顶点，其横坐标为 \(-b/(2a)\)。代回函数可求顶点纵坐标。`,
            explanationEn: String.raw`The axis of symmetry of a quadratic passes through its vertex, whose \(x\)-coordinate is \(-b/(2a)\). Substitute it back to find the \(y\)-coordinate.`,
            exampleZh: String.raw`对 \(y=2x^2-8x+3\)，顶点横坐标为 \(x_v=-(-8)/(2\cdot2)=2\)。`,
            exampleEn: String.raw`For \(y=2x^2-8x+3\), the vertex has \(x_v=-(-8)/(2\cdot2)=2\).`
          },
          {
            explanationZh: "实数范围内，分母不能为零，偶次根号内必须非负；若根号同时在分母中，则根号内必须严格为正。",
            explanationEn: "Over the reals, denominators cannot be zero and even-root radicands must be nonnegative. If an even root is itself in a denominator, its radicand must be strictly positive.",
            exampleZh: String.raw`\(\frac1{\sqrt{x-1}}\) 要求 \(x-1>0\)，所以定义域是 \(x>1\)。`,
            exampleEn: String.raw`\(\frac1{\sqrt{x-1}}\) requires \(x-1>0\), so its domain is \(x>1\).`
          }
        ],
        methodsZh: ["把函数看成规则机器", "遇到复合函数从内向外算", "画草图帮助判断定义域和值域"],
        methodsEn: ["Treat a function as a rule machine", "Evaluate compositions inside-out", "Sketch to reason about domain and range"],
        exampleZh: String.raw`若 \(f(x)=2x+1\)，则 \(f(f(3))=f(7)=15\)。`,
        exampleEn: String.raw`If \(f(x)=2x+1\), then \(f(f(3))=f(7)=15\).`,
        checklistZh: ["能读懂函数记号", "能求简单复合函数", "能分析二次函数顶点"],
        checklistEn: ["Read function notation", "Evaluate simple compositions", "Analyze a quadratic vertex"]
      },
      {
        id: "sequences",
        zh: "数列",
        en: "Sequences",
        detailZh: "等差数列、等比数列、递推数列与规律识别",
        detailEn: "Arithmetic/geometric sequences, recursive sequences, and pattern recognition.",
        explanationZh: "数列题通常要求从前几项发现规律，或把递推式转化为可计算的封闭模式。",
        explanationEn: "Sequence problems usually ask you to detect a pattern from early terms or convert a recurrence into a computable pattern.",
        formulas: [
          String.raw`a_n=a_1+(n-1)d`,
          String.raw`a_n=a_1r^{n-1}`,
          String.raw`S_n=\frac{n(a_1+a_n)}{2}`
        ],
        formulaNotes: [
          {
            explanationZh: String.raw`等差数列相邻两项的差固定为 \(d\)；从首项走到第 \(n\) 项共增加 \(n-1\) 次。`,
            explanationEn: String.raw`An arithmetic sequence has constant difference \(d\). Moving from the first term to the \(n\)th term adds that difference \(n-1\) times.`,
            exampleZh: String.raw`数列 \(3,7,11,\ldots\) 中，\(a_{10}=3+9\cdot4=39\)。`,
            exampleEn: String.raw`For \(3,7,11,\ldots\), \(a_{10}=3+9\cdot4=39\).`
          },
          {
            explanationZh: String.raw`等比数列相邻两项的比固定为 \(r\)；到第 \(n\) 项共乘 \(n-1\) 次公比。`,
            explanationEn: String.raw`A geometric sequence has constant ratio \(r\). Reaching the \(n\)th term multiplies by the ratio \(n-1\) times.`,
            exampleZh: String.raw`数列 \(2,6,18,\ldots\) 中，\(a_5=2\cdot3^4=162\)。`,
            exampleEn: String.raw`For \(2,6,18,\ldots\), \(a_5=2\cdot3^4=162\).`
          },
          {
            explanationZh: String.raw`等差数列的平均项等于首末两项的平均数，再乘项数即可得到前 \(n\) 项和。`,
            explanationEn: "The average term of an arithmetic sequence is the average of its first and last terms; multiplying by the number of terms gives the sum.",
            exampleZh: String.raw`\(1+2+\cdots+100=\frac{100(1+100)}2=5050\)。`,
            exampleEn: String.raw`\(1+2+\cdots+100=\frac{100(1+100)}2=5050\).`
          }
        ],
        methodsZh: ["列出前几项观察差、比、周期", "寻找递推式中的不变量", "必要时用表格追踪"],
        methodsEn: ["List early terms and inspect differences, ratios, or periods", "Look for invariants in recurrences", "Use tables when needed"],
        exampleZh: String.raw`数列 \(3,7,11,\ldots\) 的第 \(10\) 项是 \(3+9\cdot4=39\)。`,
        exampleEn: String.raw`The \(10\)th term of \(3,7,11,\ldots\) is \(3+9\cdot4=39\).`,
        checklistZh: ["能区分等差和等比", "能处理简单递推", "能识别周期数列"],
        checklistEn: ["Distinguish arithmetic and geometric sequences", "Handle simple recurrences", "Recognize periodic sequences"]
      },
      {
        id: "algebraic-techniques",
        zh: "代数技巧",
        en: "Algebraic Techniques",
        detailZh: "换元、对称、配方、灵活因式分解与表达式变形",
        detailEn: "Substitution, symmetry, completing the square, clever factoring, and expression transformation.",
        explanationZh: "代数技巧不是新知识，而是把复杂表达式变成熟悉结构的能力。AMC 10 后半部分常考这类变形。",
        explanationEn: "Algebraic technique is the skill of turning an unfamiliar expression into a familiar structure. Later AMC 10 problems often hinge on this.",
        formulas: [
          String.raw`x^2+2xy+y^2=(x+y)^2`,
          String.raw`x^2+bx=\left(x+\frac b2\right)^2-\left(\frac b2\right)^2`
        ],
        formulaNotes: [
          {
            explanationZh: "完全平方公式可把三项式识别为一个平方，也可反向展开平方。",
            explanationEn: "The perfect-square identity recognizes a trinomial as one square and also expands a squared binomial.",
            exampleZh: String.raw`\(x^2+6x+9=(x+3)^2\)。`,
            exampleEn: String.raw`\(x^2+6x+9=(x+3)^2\).`
          },
          {
            explanationZh: "配方法通过补上并减去同一个常数，把二次式变成平方加常数，便于求顶点和最值。",
            explanationEn: "Completing the square adds and subtracts the same constant to rewrite a quadratic as a square plus a constant, revealing its vertex and extrema.",
            exampleZh: String.raw`\(x^2+6x+10=(x+3)^2+1\)，所以最小值为 \(1\)。`,
            exampleEn: String.raw`\(x^2+6x+10=(x+3)^2+1\), so the minimum value is \(1\).`
          }
        ],
        methodsZh: ["设新变量减少重复", "利用对称性减少计算", "配方把二次式变成平方"],
        methodsEn: ["Substitute for repeated expressions", "Use symmetry to reduce computation", "Complete the square for quadratics"],
        exampleZh: String.raw`\(x^2+6x+10=(x+3)^2+1\)，因此最小值为 \(1\)。`,
        exampleEn: String.raw`\(x^2+6x+10=(x+3)^2+1\), so its minimum value is \(1\).`,
        checklistZh: ["能熟练配方", "能发现重复结构", "能用对称性简化"],
        checklistEn: ["Complete the square fluently", "Spot repeated structures", "Use symmetry effectively"]
      }
    ]
  },
  {
    id: "advanced-geometry",
    zh: "几何",
    en: "Geometry",
    officialAlignment: "Plane geometry, coordinate geometry, area, and circles",
    officialAlignmentZh: "平面几何、解析几何、面积与圆",
    concepts: [
      {
        id: "diagram-skills",
        zh: "几何作图",
        en: "Diagram Skills",
        detailZh: "准确作图、辅助线、图形分解与视觉推理",
        detailEn: "Accurate sketches, auxiliary lines, decomposition, and visual reasoning.",
        explanationZh: "优秀的几何图不是装饰，而是解题工具。辅助线、延长线、连接圆心或顶点常把隐藏关系显现出来。",
        explanationEn: "A good diagram is a problem-solving tool. Auxiliary lines, extensions, and connecting centers or vertices often reveal hidden relationships.",
        formulas: [
          String.raw`OT\perp\ell`,
          String.raw`A_{\mathrm{total}}=\sum_i A_i`
        ],
        formulaNotes: [
          {
            explanationZh: String.raw`若直线 \(\ell\) 在 \(T\) 点与圆 \(O\) 相切，则半径 \(OT\) 与切线垂直。这条辅助线会立即产生直角。`,
            explanationEn: String.raw`If line \(\ell\) is tangent to circle \(O\) at \(T\), then radius \(OT\) is perpendicular to the tangent. Drawing it immediately creates a right angle.`,
            exampleZh: String.raw`若 \(OT=5\) 且 \(\ell\) 在 \(T\) 点相切，则由 \(OT\perp\ell\) 可把含 \(OT\) 的图形转化为直角三角形。`,
            exampleEn: String.raw`If \(OT=5\) and \(\ell\) is tangent at \(T\), then \(OT\perp\ell\) lets us treat a triangle containing \(OT\) as a right triangle.`
          },
          {
            explanationZh: "把互不重叠的复杂图形分成简单部分时，总面积等于各部分面积之和；也可用大图形减去缺失部分。",
            explanationEn: "When a composite figure is split into nonoverlapping simple pieces, its total area is the sum of their areas. Subtracting missing pieces from a larger figure is equivalent.",
            exampleZh: String.raw`一个 L 形可分成 \(3\times4\) 和 \(2\times1\) 两个矩形，总面积为 \(12+2=14\)。`,
            exampleEn: String.raw`If an L-shape splits into \(3\times4\) and \(2\times1\) rectangles, its area is \(12+2=14\).`
          }
        ],
        methodsZh: ["标出已知角和相等边", "尝试连接圆心、切点、顶点", "把复杂面积拆成矩形、三角形、扇形"],
        methodsEn: ["Mark known angles and equal lengths", "Connect centers, tangency points, and vertices", "Decompose area into standard pieces"],
        exampleZh: "圆的切线题中，连接圆心与切点可立即得到直角。",
        exampleEn: "In a tangent problem, drawing the radius to the point of tangency immediately creates a right angle.",
        checklistZh: ["能主动添加辅助线", "能保持图形比例合理", "能用图发现相似三角形"],
        checklistEn: ["Add auxiliary lines intentionally", "Keep diagrams reasonably proportional", "Use diagrams to spot similar triangles"]
      },
      {
        id: "triangles",
        zh: "三角形",
        en: "Triangles",
        detailZh: "相似三角形、面积、特殊直角三角形、内切圆与外接圆以及基本三角形关系",
        detailEn: "Similarity, area, special right triangles, incircles, circumcircles, and fundamental triangle relationships.",
        explanationZh: "AMC 10 三角形题以相似、面积、勾股和角追踪为核心。高级定理可以作为工具，但多数题可用基础关系解决。",
        explanationEn: "AMC 10 triangle problems center on similarity, area, Pythagorean relationships, and angle chasing. Advanced theorems are useful, but many problems reduce to fundamentals.",
        formulas: [
          String.raw`A=\frac{bh}{2}`,
          String.raw`30^\circ\text{-}60^\circ\text{-}90^\circ:\ 1:\sqrt3:2`,
          String.raw`45^\circ\text{-}45^\circ\text{-}90^\circ:\ 1:1:\sqrt2`,
          String.raw`s=\frac{a+b+c}{2},\qquad K=\sqrt{s(s-a)(s-b)(s-c)}`
        ],
        formulaNotes: [
          {
            explanationZh: "三角形面积等于任意一边与该边对应高的乘积的一半。选择容易求出的底和高可简化计算。",
            explanationEn: "A triangle's area is half the product of any side and its corresponding altitude. Choose the base-altitude pair that is easiest to determine.",
            exampleZh: String.raw`底为 \(10\)、对应高为 \(6\) 的三角形面积是 \(10\cdot6/2=30\)。`,
            exampleEn: String.raw`A triangle with base \(10\) and corresponding height \(6\) has area \(10\cdot6/2=30\).`
          },
          {
            explanationZh: String.raw`在 \(30^\circ\)-\(60^\circ\)-\(90^\circ\) 三角形中，短直角边、长直角边、斜边之比固定为 \(1:\sqrt3:2\)。`,
            explanationEn: String.raw`In a \(30^\circ\)-\(60^\circ\)-\(90^\circ\) triangle, the short leg, long leg, and hypotenuse have fixed ratio \(1:\sqrt3:2\).`,
            exampleZh: String.raw`若短直角边为 \(4\)，则长直角边为 \(4\sqrt3\)，斜边为 \(8\)。`,
            exampleEn: String.raw`If the short leg is \(4\), then the long leg is \(4\sqrt3\) and the hypotenuse is \(8\).`
          },
          {
            explanationZh: String.raw`在 \(45^\circ\)-\(45^\circ\)-\(90^\circ\) 三角形中，两条直角边相等，斜边是直角边的 \(\sqrt2\) 倍。`,
            explanationEn: String.raw`In a \(45^\circ\)-\(45^\circ\)-\(90^\circ\) triangle, the legs are equal and the hypotenuse is \(\sqrt2\) times either leg.`,
            exampleZh: String.raw`若每条直角边为 \(5\)，则斜边为 \(5\sqrt2\)。`,
            exampleEn: String.raw`If each leg is \(5\), then the hypotenuse is \(5\sqrt2\).`
          },
          {
            explanationZh: String.raw`已知三边而不知道高时，可用海伦公式求面积；\(s\) 是半周长。`,
            explanationEn: String.raw`Heron's formula finds a triangle's area from its three side lengths when no altitude is known; \(s\) is the semiperimeter.`,
            exampleZh: String.raw`边长为 \(3,4,5\) 时，\(s=6\)，所以 \(K=\sqrt{6\cdot3\cdot2\cdot1}=6\)。`,
            exampleEn: String.raw`For side lengths \(3,4,5\), \(s=6\), so \(K=\sqrt{6\cdot3\cdot2\cdot1}=6\).`
          }
        ],
        methodsZh: ["先找相似三角形", "面积可用不同底高重复计算", "特殊角优先转化为特殊边长比"],
        methodsEn: ["Look for similar triangles first", "Compute the same area in two ways", "Convert special angles into side ratios"],
        exampleZh: String.raw`相似比为 \(2:3\) 的两个三角形，面积比为 \(4:9\)。`,
        exampleEn: String.raw`Two similar triangles with side ratio \(2:3\) have area ratio \(4:9\).`,
        checklistZh: ["能证明三角形相似", "能使用特殊直角三角形", "能用面积法建方程"],
        checklistEn: ["Prove triangle similarity", "Use special right triangles", "Set equations with area methods"]
      },
      {
        id: "circles-quadrilaterals",
        zh: "圆与四边形",
        en: "Circles and Quadrilaterals",
        detailZh: "圆、四点共圆、圆内接四边形与圆外切四边形",
        detailEn: "Cyclic quadrilaterals, tangent/chord/secant relations, power of a point, and tangential quadrilaterals.",
        explanationZh: "圆题常通过角关系、切线半径垂直、弦和割线长度关系来求解。四边形题要注意是否可圆内接或外切。",
        explanationEn: "Circle problems often use angle relationships, radius-tangent perpendicularity, and chord/secant length products. For quadrilaterals, check whether cyclic or tangential properties apply.",
        formulas: [
          String.raw`\angle A+\angle C=180^\circ`,
          String.raw`PT^2=PA\cdot PB`,
          String.raw`AB+CD=BC+DA`
        ],
        formulaNotes: [
          {
            explanationZh: "圆内接四边形的两组对角都互补。已知一个角后，可立即求出它的对角。",
            explanationEn: "Each pair of opposite angles in a cyclic quadrilateral is supplementary. Knowing one angle immediately determines its opposite angle.",
            exampleZh: String.raw`若 \(\angle A=70^\circ\)，则 \(\angle C=180^\circ-70^\circ=110^\circ\)。`,
            exampleEn: String.raw`If \(\angle A=70^\circ\), then \(\angle C=180^\circ-70^\circ=110^\circ\).`
          },
          {
            explanationZh: String.raw`从圆外一点 \(P\) 作切线 \(PT\) 和割线 \(PAB\) 时，切线长的平方等于割线外段与整条割线的乘积。`,
            explanationEn: String.raw`From an external point \(P\), if \(PT\) is tangent and secant \(PAB\) meets the circle at \(A,B\), then the squared tangent length equals the external segment times the whole secant.`,
            exampleZh: String.raw`若 \(PA=4\)、\(PB=9\)，则 \(PT=\sqrt{4\cdot9}=6\)。`,
            exampleEn: String.raw`If \(PA=4\) and \(PB=9\), then \(PT=\sqrt{4\cdot9}=6\).`
          },
          {
            explanationZh: String.raw`若四边形 \(ABCD\) 的四条边都与同一个内切圆相切，则两组对边长度之和相等。`,
            explanationEn: String.raw`If all four sides of quadrilateral \(ABCD\) are tangent to one incircle, then the sums of opposite side lengths are equal.`,
            exampleZh: String.raw`若 \(AB=5,BC=7,CD=6\)，则 \(DA=5+6-7=4\)。`,
            exampleEn: String.raw`If \(AB=5,BC=7,CD=6\), then \(DA=5+6-7=4\).`
          }
        ],
        methodsZh: ["看到切线就连半径", "看到圆内接四边形就找对角互补", "用幂定理处理弦、割线、切线长度"],
        methodsEn: ["Draw a radius to a tangent", "Use supplementary opposite angles in cyclic quadrilaterals", "Use power of a point for chords, secants, and tangents"],
        exampleZh: String.raw`圆内接四边形 \(ABCD\) 中，若 \(\angle A=70^\circ\)，则 \(\angle C=110^\circ\)。`,
        exampleEn: String.raw`In cyclic quadrilateral \(ABCD\), if \(\angle A=70^\circ\), then \(\angle C=110^\circ\).`,
        checklistZh: ["能识别圆内接四边形", "能使用切线性质", "能处理弦和割线关系"],
        checklistEn: ["Recognize cyclic quadrilaterals", "Use tangent properties", "Handle chord and secant relationships"]
      },
      {
        id: "regular-polygons",
        zh: "正多边形",
        en: "Regular Polygons",
        detailZh: "正多边形（角度、周长和面积）",
        detailEn: "Angles, perimeter, area, symmetry, and central angles of regular polygons.",
        explanationZh: "正多边形的核心是对称性。把正 n 边形分成 n 个等腰三角形，通常能解决角度和面积问题。",
        explanationEn: "The key idea is symmetry. Splitting a regular n-gon into n congruent isosceles triangles often solves angle and area questions.",
        formulas: [
          String.raw`S_{\mathrm{interior}}=(n-2)180^\circ`,
          String.raw`\theta_{\mathrm{exterior}}=\frac{360^\circ}{n}`,
          String.raw`\theta_{\mathrm{central}}=\frac{360^\circ}{n}`
        ],
        formulaNotes: [
          {
            explanationZh: String.raw`从一个顶点向其余非相邻顶点连线，可把 \(n\) 边形分成 \(n-2\) 个三角形，因此内角和为 \((n-2)180^\circ\)。`,
            explanationEn: String.raw`Drawing diagonals from one vertex partitions an \(n\)-gon into \(n-2\) triangles, so its interior-angle sum is \((n-2)180^\circ\).`,
            exampleZh: String.raw`六边形内角和为 \((6-2)180^\circ=720^\circ\)。`,
            exampleEn: String.raw`A hexagon has interior-angle sum \((6-2)180^\circ=720^\circ\).`
          },
          {
            explanationZh: String.raw`正 \(n\) 边形的外角相等，而沿多边形转一周的外角和是 \(360^\circ\)。`,
            explanationEn: String.raw`A regular \(n\)-gon has equal exterior angles, and one full turn around the polygon totals \(360^\circ\).`,
            exampleZh: String.raw`正八边形的每个外角为 \(360^\circ/8=45^\circ\)。`,
            exampleEn: String.raw`Each exterior angle of a regular octagon is \(360^\circ/8=45^\circ\).`
          },
          {
            explanationZh: String.raw`正多边形相邻顶点对应的圆心角相等，全部圆心角之和为 \(360^\circ\)。`,
            explanationEn: String.raw`The central angles between consecutive vertices of a regular polygon are equal and together make a full \(360^\circ\) turn.`,
            exampleZh: String.raw`正六边形的每个圆心角为 \(360^\circ/6=60^\circ\)。`,
            exampleEn: String.raw`Each central angle of a regular hexagon is \(360^\circ/6=60^\circ\).`
          }
        ],
        methodsZh: ["从中心连到各顶点", "用外角快速求边数", "面积可拆成全等三角形"],
        methodsEn: ["Connect the center to vertices", "Use exterior angles to find the number of sides", "Decompose area into congruent triangles"],
        exampleZh: String.raw`正六边形每个内角为 \(\frac{(6-2)180^\circ}{6}=120^\circ\)。`,
        exampleEn: String.raw`Each interior angle of a regular hexagon is \(\frac{(6-2)180^\circ}{6}=120^\circ\).`,
        checklistZh: ["能计算内角和外角", "能利用中心角", "能用对称性拆图"],
        checklistEn: ["Compute interior and exterior angles", "Use central angles", "Use symmetry to decompose figures"]
      },
      {
        id: "coordinate-geometry",
        zh: "几何技巧与解析几何",
        en: "Geometry Techniques and Coordinate Geometry",
        detailZh: "坐标系建立、斜率、距离、中点、解析几何与策略性设点",
        detailEn: "Coordinate setup, slope, distance, midpoint, analytic geometry, and strategic placement.",
        explanationZh: "解析几何把图形问题转化为代数计算。选择好的坐标系比盲目套公式更重要。",
        explanationEn: "Coordinate geometry turns figures into algebra. Choosing a helpful coordinate system matters more than blindly applying formulas.",
        formulas: [
          String.raw`d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}`,
          String.raw`M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)`,
          String.raw`m=\frac{y_2-y_1}{x_2-x_1}\quad(x_2\ne x_1)`
        ],
        formulaNotes: [
          {
            explanationZh: "距离公式来自勾股定理：横坐标差和纵坐标差是直角三角形的两条直角边。",
            explanationEn: "The distance formula comes from the Pythagorean theorem: the horizontal and vertical coordinate differences are the legs of a right triangle.",
            exampleZh: String.raw`\((0,0)\) 到 \((3,4)\) 的距离为 \(\sqrt{3^2+4^2}=5\)。`,
            exampleEn: String.raw`The distance from \((0,0)\) to \((3,4)\) is \(\sqrt{3^2+4^2}=5\).`
          },
          {
            explanationZh: "线段中点的每个坐标都是两个端点对应坐标的平均数。",
            explanationEn: "Each coordinate of a segment's midpoint is the average of the corresponding endpoint coordinates.",
            exampleZh: String.raw`\((2,1)\) 与 \((8,5)\) 的中点是 \((5,3)\)。`,
            exampleEn: String.raw`The midpoint of \((2,1)\) and \((8,5)\) is \((5,3)\).`
          },
          {
            explanationZh: "斜率表示纵向变化量与横向变化量之比。竖直线的横坐标差为零，因此斜率未定义。",
            explanationEn: "Slope is vertical change divided by horizontal change. A vertical line has zero horizontal change, so its slope is undefined.",
            exampleZh: String.raw`过 \((1,2)\) 与 \((5,10)\) 的直线斜率为 \((10-2)/(5-1)=2\)。`,
            exampleEn: String.raw`The line through \((1,2)\) and \((5,10)\) has slope \((10-2)/(5-1)=2\).`
          }
        ],
        methodsZh: ["把对称点放在坐标轴上", "用距离公式表达相等长度", "用斜率判断平行或垂直"],
        methodsEn: ["Place symmetric points on axes", "Use the distance formula for equal lengths", "Use slopes for parallel and perpendicular lines"],
        exampleZh: String.raw`点 \((0,0)\) 到 \((3,4)\) 的距离是 \(5\)。`,
        exampleEn: String.raw`The distance from \((0,0)\) to \((3,4)\) is \(5\).`,
        checklistZh: ["能选择坐标系", "能用距离公式", "能用斜率判断关系"],
        checklistEn: ["Choose a coordinate system", "Use the distance formula", "Use slope to test relationships"]
      }
    ]
  },
  {
    id: "solid-geometry",
    zh: "立体几何",
    en: "Solid Geometry",
    officialAlignment: "Area, volume, spatial visualization, and coordinate geometry",
    officialAlignmentZh: "面积、体积、空间想象与三维坐标",
    concepts: [
      {
        id: "points-lines-planes",
        zh: "点线面与坐标系",
        en: "Points, Lines, Planes, and Coordinates",
        detailZh: "点、线、面的关系，三维坐标系",
        detailEn: "Relationships among points, lines, planes, and basic 3D coordinates.",
        explanationZh: "立体几何题常考空间想象和投影。把 3D 问题转化为直角三角形或坐标距离最稳妥。",
        explanationEn: "Solid geometry often tests visualization and projection. Converting 3D relationships into right triangles or coordinate distances is reliable.",
        formulas: [String.raw`d=\sqrt{(\Delta x)^2+(\Delta y)^2+(\Delta z)^2}`],
        formulaNotes: [
          {
            explanationZh: "三维距离公式是勾股定理在空间中的推广：三个坐标方向的变化量互相垂直。",
            explanationEn: "The 3D distance formula extends the Pythagorean theorem to three mutually perpendicular coordinate changes.",
            exampleZh: String.raw`\((0,0,0)\) 到 \((1,2,2)\) 的距离为 \(\sqrt{1^2+2^2+2^2}=3\)。`,
            exampleEn: String.raw`The distance from \((0,0,0)\) to \((1,2,2)\) is \(\sqrt{1^2+2^2+2^2}=3\).`
          }
        ],
        methodsZh: ["寻找隐藏直角三角形", "把空间距离投影到平面", "必要时设三维坐标"],
        methodsEn: ["Find hidden right triangles", "Project spatial distances to a plane", "Use 3D coordinates when helpful"],
        exampleZh: String.raw`长方体边长为 \(1,2,2\)，其空间对角线为 \(\sqrt{1+4+4}=3\)。`,
        exampleEn: String.raw`A rectangular prism with side lengths \(1,2,2\) has space diagonal \(\sqrt{1+4+4}=3\).`,
        checklistZh: ["能识别空间对角线", "能画投影", "能使用三维距离公式"],
        checklistEn: ["Identify space diagonals", "Draw projections", "Use the 3D distance formula"]
      },
      {
        id: "solids-polyhedra",
        zh: "立体图形与正多面体",
        en: "Solid Diagrams and Regular Polyhedra",
        detailZh: "立方体、棱柱、棱锥、展开图、截面、正多面体与欧拉公式",
        detailEn: "Cubes, prisms, pyramids, nets, cross-sections, regular polyhedra, and Euler's formula.",
        explanationZh: "多面体和展开图题依赖结构计数：面、棱、顶点如何相连，以及截面如何经过立体。对凸多面体可使用欧拉公式。",
        explanationEn: "Polyhedron and net problems depend on structural counting: how faces, edges, and vertices connect, and how cross-sections pass through a solid. Euler's formula applies to convex polyhedra.",
        formulas: [
          String.raw`V-E+F=2`,
          String.raw`F_{\mathrm{cube}}=6,\quad E_{\mathrm{cube}}=12,\quad V_{\mathrm{cube}}=8`
        ],
        formulaNotes: [
          {
            explanationZh: String.raw`对凸多面体，顶点数 \(V\) 减棱数 \(E\) 再加面数 \(F\) 恒等于 \(2\)。可用它补求未知数量或检查计数。`,
            explanationEn: String.raw`For a convex polyhedron, vertices \(V\) minus edges \(E\) plus faces \(F\) always equals \(2\). Use it to find a missing count or check your work.`,
            exampleZh: String.raw`立方体满足 \(8-12+6=2\)。`,
            exampleEn: String.raw`A cube satisfies \(8-12+6=2\).`
          },
          {
            explanationZh: String.raw`立方体有 \(6\) 个正方形面、\(12\) 条棱和 \(8\) 个顶点。这些基本数量常用于路径和涂色计数。`,
            explanationEn: String.raw`A cube has \(6\) square faces, \(12\) edges, and \(8\) vertices. These counts are often used in path and coloring problems.`,
            exampleZh: String.raw`每个面有 4 条棱，共计 \(6\cdot4=24\) 次；每条棱被两个面共享，所以实际棱数是 \(24/2=12\)。`,
            exampleEn: String.raw`The faces contain \(6\cdot4=24\) edge-incidences; each edge belongs to two faces, so there are \(24/2=12\) edges.`
          }
        ],
        methodsZh: ["先数面、棱、顶点", "展开图要追踪相邻面", "截面题先标出经过的棱"],
        methodsEn: ["Count faces, edges, and vertices", "Track adjacent faces in nets", "Mark intersected edges for cross-sections"],
        exampleZh: String.raw`立方体满足 \(V-E+F=8-12+6=2\)。`,
        exampleEn: String.raw`A cube satisfies \(V-E+F=8-12+6=2\).`,
        checklistZh: ["能使用欧拉公式", "能判断展开图", "能分析简单截面"],
        checklistEn: ["Use Euler's formula", "Analyze nets", "Reason about simple cross-sections"]
      },
      {
        id: "special-solids",
        zh: "特殊立体与技巧",
        en: "Special Solids and Techniques",
        detailZh: "表面积、体积、对角线、图形分解与特殊立体",
        detailEn: "Surface area, volume, diagonal lengths, decomposition, and special solids.",
        explanationZh: "体积和表面积题要注意单位维度。复杂立体可以通过切割、补全、相减来解决。",
        explanationEn: "Volume and surface-area problems require dimensional awareness. Complex solids can often be solved by cutting, completing, or subtracting pieces.",
        formulas: [
          String.raw`V_{\text{prism}}=Bh`,
          String.raw`V_{\text{pyramid}}=\frac13Bh`,
          String.raw`V_{\text{cylinder}}=\pi r^2h`
        ],
        formulaNotes: [
          {
            explanationZh: String.raw`棱柱每个与底面平行的截面面积都相同，因此体积等于底面积 \(B\) 乘高 \(h\)。`,
            explanationEn: String.raw`Every cross-section of a prism parallel to its base has the same area, so volume equals base area \(B\) times height \(h\).`,
            exampleZh: String.raw`底面积为 \(12\)、高为 \(5\) 的棱柱体积为 \(12\cdot5=60\)。`,
            exampleEn: String.raw`A prism with base area \(12\) and height \(5\) has volume \(12\cdot5=60\).`
          },
          {
            explanationZh: "同底同高的棱锥体积是棱柱体积的三分之一。",
            explanationEn: "A pyramid has one third the volume of a prism with the same base and height.",
            exampleZh: String.raw`底面积为 \(18\)、高为 \(4\) 的棱锥体积为 \(\frac13\cdot18\cdot4=24\)。`,
            exampleEn: String.raw`A pyramid with base area \(18\) and height \(4\) has volume \(\frac13\cdot18\cdot4=24\).`
          },
          {
            explanationZh: String.raw`圆柱可看作底面为圆的直棱柱；底面积是 \(\pi r^2\)，再乘高。`,
            explanationEn: String.raw`A cylinder behaves like a prism with a circular base: multiply base area \(\pi r^2\) by height.`,
            exampleZh: String.raw`半径 \(3\)、高 \(5\) 的圆柱体积为 \(\pi\cdot3^2\cdot5=45\pi\)。`,
            exampleEn: String.raw`A cylinder with radius \(3\) and height \(5\) has volume \(\pi\cdot3^2\cdot5=45\pi\).`
          }
        ],
        methodsZh: ["先区分表面积和体积", "复杂图形切成简单体", "相似立体体积比是边长比的三次方"],
        methodsEn: ["Separate surface area from volume", "Cut complex solids into simple ones", "For similar solids, volume ratio is the cube of side ratio"],
        exampleZh: String.raw`边长扩大 \(2\) 倍的相似立体，体积扩大 \(2^3=8\) 倍。`,
        exampleEn: String.raw`A similar solid scaled by a factor of \(2\) has its volume scaled by \(2^3=8\).`,
        checklistZh: ["能计算常见体积", "能用相似比处理体积", "能拆分复合立体"],
        checklistEn: ["Compute common volumes", "Use scale factors for volume", "Decompose composite solids"]
      }
    ]
  },
  {
    id: "number-theory",
    zh: "数论",
    en: "Number Theory",
    officialAlignment: "Number sense, divisibility, modular arithmetic, and integer constraints",
    officialAlignmentZh: "数感、整除、模运算与整数约束",
    concepts: [
      {
        id: "numbers-operations",
        zh: "数与运算",
        en: "Numbers and Operations",
        detailZh: "整数运算、模运算与同余、余数、分数、小数和进制转换",
        detailEn: "Integer operations, modular arithmetic, congruences, remainders, fractions, decimals, and base conversion.",
        explanationZh: "数论题常从余数、整除性、质因数分解入手。把大数运算化为模意义下的较小余数是核心技巧。",
        explanationEn: "Number theory often starts with remainders, divisibility, and prime factorization. Replacing calculations with large numbers by small remainders modulo a fixed integer is a core skill.",
        formulas: [
          String.raw`a\equiv b\pmod n\iff n\mid(a-b)`,
          String.raw`\gcd(a,b)\operatorname{lcm}(a,b)=ab\quad(a,b>0)`
        ],
        formulaNotes: [
          {
            explanationZh: String.raw`同余表示 \(a,b\) 除以 \(n\) 的余数相同；等价地，它们的差能被 \(n\) 整除。`,
            explanationEn: String.raw`Congruence means \(a\) and \(b\) have the same remainder modulo \(n\); equivalently, their difference is divisible by \(n\).`,
            exampleZh: String.raw`\(23\equiv3\pmod5\)，因为 \(23-3=20\) 能被 \(5\) 整除。`,
            exampleEn: String.raw`\(23\equiv3\pmod5\) because \(23-3=20\) is divisible by \(5\).`
          },
          {
            explanationZh: "两个正整数的最大公因数与最小公倍数的乘积等于这两个数的乘积。",
            explanationEn: "For two positive integers, the product of their greatest common divisor and least common multiple equals the product of the integers.",
            exampleZh: String.raw`\(\gcd(12,18)=6\)、\(\operatorname{lcm}(12,18)=36\)，且 \(6\cdot36=12\cdot18=216\)。`,
            exampleEn: String.raw`\(\gcd(12,18)=6\), \(\operatorname{lcm}(12,18)=36\), and \(6\cdot36=12\cdot18=216\).`
          }
        ],
        methodsZh: ["先质因数分解", "按模数分类", "利用奇偶性和末位数"],
        methodsEn: ["Prime-factor first", "Classify by remainder", "Use parity and last digits"],
        exampleZh: String.raw`\(7^2\equiv1\pmod 8\)，所以 \(7^{100}\equiv1\pmod 8\)。`,
        exampleEn: String.raw`Since \(7^2\equiv1\pmod 8\), \(7^{100}\equiv1\pmod 8\).`,
        checklistZh: ["能做质因数分解", "能计算同余", "能进行进制转换基础题"],
        checklistEn: ["Prime factor numbers", "Compute congruences", "Handle basic base conversion"]
      },
      {
        id: "integer-equations",
        zh: "整数方程与技巧",
        en: "Integer Equations and Techniques",
        detailZh: "丢番图方程、整数约束、界估计、奇偶性与整除论证",
        detailEn: "Diophantine equations, integer constraints, bounding, parity, and divisibility arguments.",
        explanationZh: "整数方程不能只按实数方程处理。整除、范围、奇偶和非负条件会大幅减少可能性。",
        explanationEn: "Integer equations cannot be treated like ordinary real equations. Divisibility, bounds, parity, and nonnegativity sharply reduce possibilities.",
        formulas: [String.raw`\exists x,y\in\mathbb Z:\ ax+by=c\iff\gcd(a,b)\mid c\quad((a,b)\ne(0,0))`],
        formulaNotes: [
          {
            explanationZh: String.raw`线性丢番图方程 \(ax+by=c\) 有整数解，当且仅当 \(\gcd(a,b)\) 能整除 \(c\)。这是先判断“是否可能”的快速条件。`,
            explanationEn: String.raw`The linear Diophantine equation \(ax+by=c\) has integer solutions exactly when \(\gcd(a,b)\) divides \(c\). This is a quick feasibility test.`,
            exampleZh: String.raw`\(6x+9y=20\) 无整数解，因为 \(\gcd(6,9)=3\) 不能整除 \(20\)。`,
            exampleEn: String.raw`\(6x+9y=20\) has no integer solution because \(\gcd(6,9)=3\) does not divide \(20\).`
          }
        ],
        methodsZh: ["先检查整除条件", "用范围缩小搜索", "用奇偶性排除不可能"],
        methodsEn: ["Check divisibility conditions first", "Use bounds to shrink search", "Use parity to eliminate impossibilities"],
        exampleZh: String.raw`方程 \(2x+4y=7\) 无整数解，因为左边一定为偶数。`,
        exampleEn: String.raw`\(2x+4y=7\) has no integer solutions because the left side is always even.`,
        checklistZh: ["能用奇偶性判断", "能设置整数范围", "能处理简单丢番图方程"],
        checklistEn: ["Use parity arguments", "Set integer bounds", "Solve simple Diophantine equations"]
      },
      {
        id: "principles-theorems",
        zh: "常用原理与定理",
        en: "Common Principles and Theorems",
        detailZh: "容斥原理、二项式定理基础及常用计数与数论原理",
        detailEn: "Inclusion-exclusion, binomial theorem basics, and reusable counting/number principles.",
        explanationZh: "原理类题的价值在于减少重复计数或展开计算。容斥、二项式系数和抽屉原理在 AMC 10 中很常见。",
        explanationEn: "Principles reduce repeated counting or expansion. Inclusion-exclusion, binomial coefficients, and pigeonhole reasoning are common on AMC 10.",
        formulas: [
          String.raw`|A\cup B|=|A|+|B|-|A\cap B|`,
          String.raw`(x+y)^n=\sum_{k=0}^{n}\binom nkx^{n-k}y^k`
        ],
        formulaNotes: [
          {
            explanationZh: String.raw`直接相加 \(|A|+|B|\) 会把交集中的元素计算两次，因此要减去一次交集。`,
            explanationEn: String.raw`Adding \(|A|+|B|\) counts elements in the overlap twice, so one copy of the intersection must be subtracted.`,
            exampleZh: String.raw`1 到 100 中，50 个数被 2 整除，20 个数被 5 整除，10 个数同时被两者整除，所以共有 \(50+20-10=60\) 个。`,
            exampleEn: String.raw`From 1 to 100, 50 numbers are divisible by 2, 20 by 5, and 10 by both, so \(50+20-10=60\) are divisible by 2 or 5.`
          },
          {
            explanationZh: String.raw`二项式定理给出 \((x+y)^n\) 展开式；\(\binom nk\) 表示从 \(n\) 个因子中选择 \(k\) 个贡献 \(y\)。`,
            explanationEn: String.raw`The binomial theorem expands \((x+y)^n\). The coefficient \(\binom nk\) counts which \(k\) of the \(n\) factors contribute a \(y\).`,
            exampleZh: String.raw`\((x+y)^3=x^3+3x^2y+3xy^2+y^3\)。`,
            exampleEn: String.raw`\((x+y)^3=x^3+3x^2y+3xy^2+y^3\).`
          }
        ],
        methodsZh: ["先判断是否重复计数", "用二项式系数表示选择", "抽屉原理用于保证存在"],
        methodsEn: ["Check for overcounting", "Use binomial coefficients for choices", "Use pigeonhole reasoning to prove existence"],
        exampleZh: String.raw`\(1\) 到 \(100\) 中能被 \(2\) 或 \(5\) 整除的数有 \(50+20-10=60\) 个。`,
        exampleEn: String.raw`From \(1\) to \(100\), the count of numbers divisible by \(2\) or \(5\) is \(50+20-10=60\).`,
        checklistZh: ["能使用容斥", "能解释组合数", "能应用抽屉原理"],
        checklistEn: ["Use inclusion-exclusion", "Explain binomial coefficients", "Apply the pigeonhole principle"]
      }
    ]
  },
  {
    id: "combinatorics",
    zh: "计数与概率",
    en: "Counting and Probability",
    officialAlignment: "Counting, probability, arrangements, and logical casework",
    officialAlignmentZh: "计数、概率、排列组合与分类讨论",
    concepts: [
      {
        id: "permutations-combinations-probability",
        zh: "排列、组合与概率",
        en: "Permutations, Combinations, and Probability",
        detailZh: "乘法原理、排列、组合、补集计数与等可能模型下的概率",
        detailEn: "Fundamental counting principle, permutations, combinations, complementary counting, and probability in finite equally likely models.",
        explanationZh: "计数题的第一步是判断顺序是否重要。在有限且各基本结果等可能时，事件概率等于有利结果数除以总结果数。",
        explanationEn: "The first question in counting is whether order matters. For a finite sample space with equally likely outcomes, probability is favorable outcomes divided by total outcomes.",
        formulas: [
          String.raw`P(n,n)=n!`,
          String.raw`P(n,k)=\frac{n!}{(n-k)!}`,
          String.raw`\binom nk=\frac{n!}{k!(n-k)!}`,
          String.raw`\Pr(E)=\frac{|E|}{|\Omega|}`
        ],
        formulaNotes: [
          {
            explanationZh: String.raw`把 \(n\) 个互不相同的对象全部排成一列时，第一位有 \(n\) 种选择，之后依次有 \(n-1,\ldots,1\) 种。`,
            explanationEn: String.raw`To arrange all \(n\) distinct objects in order, there are \(n\) choices for the first position, then \(n-1,\ldots,1\) choices.`,
            exampleZh: String.raw`4 本不同的书排成一列有 \(4!=24\) 种排法。`,
            exampleEn: String.raw`Four distinct books can be arranged in \(4!=24\) orders.`
          },
          {
            explanationZh: String.raw`从 \(n\) 个不同对象中有序选取 \(k\) 个时，顺序不同算不同结果。`,
            explanationEn: String.raw`A permutation selects \(k\) objects from \(n\) distinct objects when different orders count as different outcomes.`,
            exampleZh: String.raw`从 5 人中选冠亚军有 \(P(5,2)=5\cdot4=20\) 种。`,
            exampleEn: String.raw`Choosing first and second place from 5 people gives \(P(5,2)=5\cdot4=20\) outcomes.`
          },
          {
            explanationZh: String.raw`从 \(n\) 个不同对象中选 \(k\) 个且不考虑顺序时，用组合数；除以 \(k!\) 可消除同一组内部的排列。`,
            explanationEn: String.raw`A combination selects \(k\) objects without regard to order. Dividing by \(k!\) removes the internal orderings of each selected group.`,
            exampleZh: String.raw`从 5 人中选 2 人组成小组有 \(\binom52=10\) 种。`,
            exampleEn: String.raw`Choosing a 2-person team from 5 people gives \(\binom52=10\) teams.`
          },
          {
            explanationZh: "在有限且各基本结果等可能时，事件概率等于有利结果数与样本空间总结果数之比。",
            explanationEn: "In a finite sample space with equally likely elementary outcomes, an event's probability is its number of favorable outcomes divided by the total number of outcomes.",
            exampleZh: String.raw`掷一枚公平六面骰，得到偶数的概率为 \(3/6=1/2\)。`,
            exampleEn: String.raw`For a fair six-sided die, the probability of rolling an even number is \(3/6=1/2\).`
          }
        ],
        methodsZh: ["先问是否考虑顺序", "复杂限制用补集", "分步选择用乘法原理"],
        methodsEn: ["Ask whether order matters", "Use complements for restrictive cases", "Use multiplication for staged choices"],
        exampleZh: String.raw`从 \(5\) 人中选 \(2\) 人组成小组有 \(\binom52=10\) 种。`,
        exampleEn: String.raw`Choosing a \(2\)-person team from \(5\) people gives \(\binom52=10\) possibilities.`,
        checklistZh: ["能区分排列和组合", "能计算基础概率", "能使用补集计数"],
        checklistEn: ["Distinguish permutations from combinations", "Compute basic probability", "Use complementary counting"]
      },
      {
        id: "combinatorics-methods",
        zh: "计数方法",
        en: "Counting Strategies",
        detailZh: "分类讨论、递推、构造计数、二进制选择模型与期望值入门",
        detailEn: "Casework, recursion, constructive counting, binary choices, and introductory expected value.",
        explanationZh: "组合方法强调有序分类：分情况必须互斥且覆盖全部。递推和构造计数能把大问题拆成小问题。",
        explanationEn: "Combinatorial methods emphasize organized classification: cases must be disjoint and exhaustive. Recursion and constructive counting reduce large problems to smaller ones.",
        formulas: [
          String.raw`|\mathcal P(S)|=2^{|S|}`,
          String.raw`\mathbb E[X+Y]=\mathbb E[X]+\mathbb E[Y]`
        ],
        formulaNotes: [
          {
            explanationZh: String.raw`集合 \(S\) 中每个元素都有“选”或“不选”两种独立决定，所以含 \(n\) 个元素的集合有 \(2^n\) 个子集。`,
            explanationEn: String.raw`Each element of \(S\) independently has two choices—include it or not—so a set with \(n\) elements has \(2^n\) subsets.`,
            exampleZh: String.raw`\(\{a,b,c\}\) 有 \(2^3=8\) 个子集，包括空集和全集。`,
            exampleEn: String.raw`\(\{a,b,c\}\) has \(2^3=8\) subsets, including the empty set and the whole set.`
          },
          {
            explanationZh: String.raw`期望值具有线性：即使 \(X,Y\) 不独立，只要期望存在，和的期望仍等于期望之和。`,
            explanationEn: String.raw`Expectation is linear: even when \(X\) and \(Y\) are not independent, the expected value of their sum is the sum of their expectations, provided the expectations exist.`,
            exampleZh: String.raw`两枚公平骰子的点数期望各为 \(3.5\)，所以点数和的期望为 \(3.5+3.5=7\)。`,
            exampleEn: String.raw`Each fair die has expected value \(3.5\), so the expected sum of two dice is \(3.5+3.5=7\).`
          }
        ],
        methodsZh: ["列出互斥情况", "从小规模找递推", "用二进制选择表示取或不取"],
        methodsEn: ["List disjoint cases", "Find recurrences from small cases", "Model take-or-not choices with binary decisions"],
        exampleZh: String.raw`一个 \(4\) 元集合有 \(2^4=16\) 个子集。`,
        exampleEn: String.raw`A \(4\)-element set has \(2^4=16\) subsets.`,
        checklistZh: ["能设计不重不漏的分类", "能识别 2^n 结构", "能建立简单递推"],
        checklistEn: ["Create exhaustive disjoint cases", "Recognize 2^n structures", "Build simple recurrences"]
      }
    ]
  }
];

const CURATED_PROBLEM_REFERENCES = [
  { year: 2016, exam: "AMC 10A", problemNumber: 9, difficulty: "medium", conceptIds: ["sequences", "algebraic-techniques"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2016_AMC_10A_Problems/Problem_9", noteZh: "用作三角数求和、数列公式和二次方程变形训练。", noteEn: "Reference for triangular-number sums, sequence formulas, and quadratic equation manipulation." },
  { year: 2016, exam: "AMC 10B", problemNumber: 18, difficulty: "hard", conceptIds: ["integer-equations", "numbers-operations"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2016_AMC_10B_Problems/Problem_18", noteZh: "用作连续整数和、整数方程与因数约束训练。", noteEn: "Reference for sums of consecutive integers, integer equations, and divisor constraints." },
  { year: 2017, exam: "AMC 10A", problemNumber: 12, difficulty: "medium", conceptIds: ["functions", "coordinate-geometry"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2017_AMC_10A_Problems/Problem_12", noteZh: "用作最大值函数、分类讨论和坐标轨迹训练。", noteEn: "Reference for maximum functions, case analysis, and coordinate loci." },
  { year: 2017, exam: "AMC 10B", problemNumber: 22, difficulty: "hard", conceptIds: ["circles-quadrilaterals", "triangles"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2017_AMC_10B_Problems/Problem_22", noteZh: "用作圆的直径性质、直角三角形相似和面积比训练。", noteEn: "Reference for the diameter-angle property, similar right triangles, and area ratios." },
  { year: 2018, exam: "AMC 10A", problemNumber: 15, difficulty: "medium", conceptIds: ["circles-quadrilaterals", "triangles"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2018_AMC_10A_Problems/Problem_15", noteZh: "用作相切圆、圆心连线和相似三角形训练。", noteEn: "Reference for tangent circles, center-to-center segments, and similar triangles." },
  { year: 2018, exam: "AMC 10B", problemNumber: 20, difficulty: "hard", conceptIds: ["sequences", "algebraic-techniques"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2018_AMC_10B_Problems/Problem_20", noteZh: "用作递推数列、变量代换和周期模式训练。", noteEn: "Reference for recursive sequences, substitution, and periodic patterns." },
  { year: 2019, exam: "AMC 10A", problemNumber: 14, difficulty: "medium", conceptIds: ["combinatorics-methods", "diagram-skills"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2019_AMC_10A_Problems/Problem_14", noteZh: "用作平面直线交点计数、构造和分类讨论训练。", noteEn: "Reference for counting intersections of plane lines, constructions, and casework." },
  { year: 2019, exam: "AMC 10B", problemNumber: 16, difficulty: "medium", conceptIds: ["triangles", "diagram-skills"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2019_AMC_10B_Problems/Problem_16", noteZh: "用作等腰三角形、直角关系和边长比训练。", noteEn: "Reference for isosceles triangles, perpendicular relationships, and side-length ratios." },
  { year: 2020, exam: "AMC 10A", problemNumber: 19, difficulty: "hard", conceptIds: ["solids-polyhedra", "combinatorics-methods"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2020_AMC_10A_Problems/Problem_19", noteZh: "用作正十二面体的面邻接结构和受限路径计数训练。", noteEn: "Reference for face adjacency on a regular dodecahedron and constrained path counting." },
  { year: 2020, exam: "AMC 10B", problemNumber: 21, difficulty: "hard", conceptIds: ["triangles", "diagram-skills"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2020_AMC_10B_Problems/Problem_21", noteZh: "用作正方形内的面积分割、垂线和面积方程训练。", noteEn: "Reference for area decomposition in a square, perpendicular segments, and area equations." },
  { year: 2021, exam: "AMC 10A", problemNumber: 11, difficulty: "medium", conceptIds: ["numbers-operations", "algebraic-techniques"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2021_AMC_10A_Problems/Problem_11", noteZh: "用作进制转换、代数化简和模 3 整除性训练。", noteEn: "Reference for base conversion, algebraic simplification, and divisibility modulo 3." },
  { year: 2021, exam: "AMC 10B", problemNumber: 23, difficulty: "hard", conceptIds: ["permutations-combinations-probability", "diagram-skills"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2021_AMC_10B_Problems/Problem_23", noteZh: "用作几何概率、可行区域和面积分解训练。", noteEn: "Reference for geometric probability, feasible regions, and area decomposition." },
  { year: 2022, exam: "AMC 10A", problemNumber: 13, difficulty: "medium", conceptIds: ["triangles", "diagram-skills"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2022_AMC_10A_Problems/Problem_13", noteZh: "用作角平分线、平行与垂直关系以及三角形长度推理训练。", noteEn: "Reference for angle bisectors, parallel and perpendicular lines, and triangle-length reasoning." },
  { year: 2022, exam: "AMC 10B", problemNumber: 17, difficulty: "medium-hard", conceptIds: ["numbers-operations", "integer-equations"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2022_AMC_10B_Problems/Problem_17", noteZh: "用作小素数整除性、模运算和幂的周期训练。", noteEn: "Reference for divisibility by small primes, modular arithmetic, and cycles of powers." },
  { year: 2023, exam: "AMC 10A", problemNumber: 10, difficulty: "medium", conceptIds: ["algebraic-techniques", "numbers-operations"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2023_AMC_10A_Problems/Problem_10", noteZh: "用作算术平均数、总分关系和方程建模训练。", noteEn: "Reference for arithmetic means, total-score relationships, and equation modeling." },
  { year: 2023, exam: "AMC 10B", problemNumber: 19, difficulty: "hard", conceptIds: ["permutations-combinations-probability", "coordinate-geometry"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2023_AMC_10B_Problems/Problem_19", noteZh: "用作坐标正方形中的几何概率、边界距离和连续随机选择训练。", noteEn: "Reference for geometric probability in a coordinate square, boundary distances, and continuous random choices." },
  { year: 2024, exam: "AMC 10A", problemNumber: 8, difficulty: "medium", conceptIds: ["numbers-operations", "algebraic-techniques"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2024_AMC_10A_Problems/Problem_8", noteZh: "用作工作效率、分数速率和线性方程建模训练。", noteEn: "Reference for work rates, fractional rates, and linear equation modeling." },
  { year: 2024, exam: "AMC 10B", problemNumber: 24, difficulty: "challenge", conceptIds: ["polynomials", "numbers-operations"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2024_AMC_10B_Problems/Problem_24", noteZh: "用作多项式取值、奇偶分类和二进制整除性训练。", noteEn: "Reference for polynomial evaluation, parity cases, and divisibility by powers of 2." },
  { year: 2025, exam: "AMC 10A", problemNumber: 6, difficulty: "early", conceptIds: ["triangles", "diagram-skills"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2025_AMC_10A_Problems/Problem_6", noteZh: "用作等边三角形角三等分、角度追踪和凸六边形内角训练。", noteEn: "Reference for angle trisection in an equilateral triangle, angle chasing, and angles of a convex hexagon." },
  { year: 2025, exam: "AMC 10B", problemNumber: 25, difficulty: "challenge", conceptIds: ["coordinate-geometry", "diagram-skills"], sourceUrl: "https://artofproblemsolving.com/wiki/index.php/2025_AMC_10B_Problems/Problem_25", noteZh: "用作正方形内反射路径、展开法和坐标斜率追踪训练。", noteEn: "Reference for reflected paths in a square, the unfolding method, and coordinate-slope tracking." }
];

export const PROBLEM_REFERENCES = buildProblemReferences(CURATED_PROBLEM_REFERENCES);

const BASE_GLOSSARY = [
  { categoryZh: "代数", categoryEn: "Algebra", zh: "多项式", en: "Polynomial", noteZh: "由若干项相加组成，每项是常数与变量非负整数次幂的乘积。", noteEn: "A sum of terms, each formed from constants and variables raised to nonnegative integer powers." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "系数", en: "Coefficient", noteZh: "与变量或变量幂相乘的数值因子。", noteEn: "A numerical factor multiplying a variable or a power of a variable." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "零点（根）", en: "Zero (Root)", noteZh: "使多项式或函数值等于零的输入值。", noteEn: "An input value that makes a polynomial or function equal to zero." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "因式", en: "Factor", noteZh: "相乘得到原表达式的一个表达式；因式分解常用于寻找零点。", noteEn: "An expression multiplied by others to produce the original expression; factoring often reveals zeros." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "余数定理", en: "Remainder Theorem", noteZh: "多项式除以一次式时，余数可通过在对应值处代入多项式得到。", noteEn: "When a polynomial is divided by a linear expression, its remainder is found by evaluating at the corresponding value." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "不等式", en: "Inequality", noteZh: "比较两个表达式大小关系的数学陈述。", noteEn: "A mathematical statement comparing the sizes of two expressions." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "绝对值", en: "Absolute Value", noteZh: "一个实数在数轴上到零的距离，因此结果总是非负。", noteEn: "The distance of a real number from zero on the number line, so its value is always nonnegative." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "定义域", en: "Domain", noteZh: "使函数或表达式有意义的全部输入值。", noteEn: "All input values for which a function or expression is defined." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "值域", en: "Range", noteZh: "函数在定义域内可能产生的全部输出值。", noteEn: "All output values a function can produce over its domain." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "数列", en: "Sequence", noteZh: "按确定顺序排列的一列数，通常由通项公式或递推关系定义。", noteEn: "An ordered list of numbers, often defined by an explicit formula or recurrence." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "递推关系", en: "Recurrence Relation", noteZh: "利用数列前面的项定义后续项的规则。", noteEn: "A rule that defines later terms of a sequence from earlier terms." },

  { categoryZh: "几何", categoryEn: "Geometry", zh: "全等", en: "Congruence", noteZh: "两个图形形状和大小完全相同，可通过刚性变换重合。", noteEn: "Two figures have exactly the same shape and size and can coincide under rigid transformations." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "相似", en: "Similarity", noteZh: "对应角相等、对应边成比例；面积比是边长比的平方。", noteEn: "Corresponding angles are equal and corresponding sides are proportional; area scales by the square of the side ratio." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "补角", en: "Supplementary Angles", noteZh: "度数之和为 180 度的两个角。", noteEn: "Two angles whose measures add to 180 degrees." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "垂直平分线", en: "Perpendicular Bisector", noteZh: "垂直于一条线段并通过其中点的直线，其上的点到线段两端等距。", noteEn: "A line perpendicular to a segment at its midpoint; every point on it is equidistant from the endpoints." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "角平分线", en: "Angle Bisector", noteZh: "把一个角分成两个相等角的射线。", noteEn: "A ray that divides an angle into two equal angles." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "圆内接四边形", en: "Cyclic Quadrilateral", noteZh: "四个顶点都在同一圆上的四边形，两组对角均互补。", noteEn: "A quadrilateral whose vertices lie on one circle; each pair of opposite angles is supplementary." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "切线", en: "Tangent", noteZh: "与圆恰有一个公共点的直线，并且垂直于该点处的半径。", noteEn: "A line meeting a circle at exactly one point and perpendicular to the radius there." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "割线", en: "Secant", noteZh: "与圆周相交于两个不同点的直线。", noteEn: "A line intersecting a circle at two distinct points on its circumference." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "弦", en: "Chord", noteZh: "两个端点都在圆上的线段。", noteEn: "A segment whose two endpoints lie on a circle." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "轨迹", en: "Locus", noteZh: "满足一个或多个指定条件的所有点组成的集合。", noteEn: "The set of all points satisfying one or more specified conditions." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "坐标平面", en: "Coordinate Plane", noteZh: "由互相垂直的横轴和纵轴建立的位置系统。", noteEn: "A location system formed by perpendicular horizontal and vertical axes." },

  { categoryZh: "数论", categoryEn: "Number Theory", zh: "质数", en: "Prime Number", noteZh: "大于 1 且正因数只有 1 和自身的整数。", noteEn: "An integer greater than 1 with exactly two positive divisors: 1 and itself." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "因数（约数）", en: "Divisor", noteZh: "能整除给定整数且不产生余数的整数。", noteEn: "An integer that divides a given integer with no remainder." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "最大公因数", en: "Greatest Common Divisor", noteZh: "同时整除两个或多个整数的最大正整数。", noteEn: "The largest positive integer dividing each of two or more integers." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "最小公倍数", en: "Least Common Multiple", noteZh: "两个或多个正整数共有的最小正倍数。", noteEn: "The smallest positive multiple shared by two or more positive integers." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "同余", en: "Congruence Modulo n", noteZh: "两个整数除以同一个正整数时余数相同。", noteEn: "Two integers are congruent modulo a positive integer when they have the same remainder upon division." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "奇偶性", en: "Parity", noteZh: "整数为奇数或偶数的性质，常用于排除不可能情况。", noteEn: "The property of an integer being odd or even, often used to eliminate impossible cases." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "丢番图方程", en: "Diophantine Equation", noteZh: "要求变量取整数值的方程。", noteEn: "An equation for which integer-valued solutions are required." },

  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "乘法原理", en: "Multiplication Principle", noteZh: "一个过程分成连续步骤时，总方案数等于各步选择数的乘积。", noteEn: "For a process with successive stages, multiply the number of choices available at each stage." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "容斥原理", en: "Inclusion-Exclusion", noteZh: "通过减去重复计数并按需要加回重叠部分来修正总数。", noteEn: "Corrects a total by subtracting overcounted overlaps and adding back higher-order overlaps when needed." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "抽屉原理", en: "Pigeonhole Principle", noteZh: "若物品数多于容器数，则至少一个容器中有两个或更多物品。", noteEn: "If there are more objects than containers, at least one container holds two or more objects." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "排列", en: "Permutation", noteZh: "从对象中进行考虑顺序的选取或安排；改变顺序会得到不同结果。", noteEn: "A selection or arrangement in which order matters, so changing the order creates a different result." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "组合", en: "Combination", noteZh: "从对象中进行不考虑顺序的选取；只关心选中了哪些对象。", noteEn: "A selection in which order does not matter; only the chosen objects determine the result." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "对立事件（补集）", en: "Complementary Event", noteZh: "样本空间中不属于某事件的所有结果；有时计算“不会发生”更容易。", noteEn: "All outcomes outside an event; counting what does not happen is sometimes easier." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "样本空间", en: "Sample Space", noteZh: "一次随机试验全部可能结果组成的集合。", noteEn: "The set of all possible outcomes of a random experiment." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "独立事件", en: "Independent Events", noteZh: "一个事件是否发生不会改变另一个事件概率的事件。", noteEn: "Events for which the occurrence of one does not change the probability of the other." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "期望值", en: "Expected Value", noteZh: "随机变量在大量重复试验中的长期加权平均值。", noteEn: "The long-run weighted average value of a random variable over repeated trials." }
];

const ADDITIONAL_GLOSSARY = [
  { categoryZh: "代数", categoryEn: "Algebra", zh: "韦达定理", en: "Vieta's Formulas", noteZh: "用多项式系数表示根的对称和与积，常可避免直接求根。", noteEn: "Relates polynomial coefficients to symmetric sums and products of roots, often avoiding explicit root calculation." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "因式定理", en: "Factor Theorem", noteZh: "当且仅当 P(a)=0 时，x-a 是多项式 P(x) 的因式。", noteEn: "The expression x-a is a factor of P(x) exactly when P(a)=0." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "算术平均—几何平均不等式", en: "AM-GM Inequality", noteZh: "非负数的算术平均不小于几何平均，等号在各数相等时成立。", noteEn: "The arithmetic mean of nonnegative numbers is at least their geometric mean, with equality when the numbers are equal." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "复合函数", en: "Function Composition", noteZh: "把一个函数的输出作为另一个函数的输入，计算时从内向外。", noteEn: "Uses the output of one function as the input of another and is evaluated from the inside out." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "二次函数顶点", en: "Quadratic Vertex", noteZh: "抛物线的最高点或最低点，其对称轴可由系数直接确定。", noteEn: "The maximum or minimum point of a parabola, whose axis of symmetry can be determined from its coefficients." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "等差数列", en: "Arithmetic Sequence", noteZh: "相邻两项之差保持不变的数列。", noteEn: "A sequence in which the difference between consecutive terms is constant." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "等比数列", en: "Geometric Sequence", noteZh: "相邻非零项之比保持不变的数列。", noteEn: "A sequence in which the ratio of consecutive nonzero terms is constant." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "配方法", en: "Completing the Square", noteZh: "把二次式改写为一个平方与常数之和，用于求顶点、最值或解方程。", noteEn: "Rewrites a quadratic as a square plus a constant to find vertices, extrema, or solutions." },

  { categoryZh: "几何", categoryEn: "Geometry", zh: "勾股定理", en: "Pythagorean Theorem", noteZh: "直角三角形两直角边平方和等于斜边平方。", noteEn: "In a right triangle, the sum of the squares of the legs equals the square of the hypotenuse." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "内切圆", en: "Incircle", noteZh: "与三角形或多边形各边都相切的圆，其圆心到各边距离相等。", noteEn: "A circle tangent to every side of a triangle or polygon; its center is equidistant from all sides." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "外接圆", en: "Circumcircle", noteZh: "经过多边形全部顶点的圆；三角形外心到三个顶点距离相等。", noteEn: "A circle through every vertex of a polygon; a triangle's circumcenter is equidistant from its vertices." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "圆周角", en: "Inscribed Angle", noteZh: "顶点在圆上、两边为弦的角，其度数等于所对弧度数的一半。", noteEn: "An angle with vertex on a circle and chord sides; its measure is half that of its intercepted arc." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "点幂", en: "Power of a Point", noteZh: "从同一点引出的割线和切线满足固定乘积关系。", noteEn: "A fixed product relation satisfied by secants and tangents drawn from the same point." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "正多边形", en: "Regular Polygon", noteZh: "所有边等长且所有内角相等的多边形。", noteEn: "A polygon whose sides all have equal length and whose interior angles are all equal." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "斜率", en: "Slope", noteZh: "直线上纵坐标变化量与横坐标变化量之比，用于描述方向和陡峭程度。", noteEn: "The ratio of vertical change to horizontal change on a line, describing its direction and steepness." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "距离公式", en: "Distance Formula", noteZh: "由勾股定理得到的两坐标点间距离计算公式。", noteEn: "The coordinate formula for distance between two points, derived from the Pythagorean theorem." },
  { categoryZh: "空间关系", categoryEn: "Spatial Relations", zh: "共面", en: "Coplanar", noteZh: "若若干点或直线都位于同一个平面内，则称它们共面。", noteEn: "Points or lines are coplanar when they all lie in the same plane." },
  { categoryZh: "立体几何", categoryEn: "Solid Geometry", zh: "欧拉多面体公式", en: "Euler's Polyhedron Formula", noteZh: "对凸多面体，顶点数减边数加面数等于 2。", noteEn: "For a convex polyhedron, the number of vertices minus edges plus faces equals 2." },
  { categoryZh: "立体几何", categoryEn: "Solid Geometry", zh: "棱柱", en: "Prism", noteZh: "有两个平行全等底面且侧面为平行四边形的多面体。", noteEn: "A polyhedron with two parallel congruent bases and parallelogram lateral faces." },
  { categoryZh: "立体几何", categoryEn: "Solid Geometry", zh: "棱锥", en: "Pyramid", noteZh: "一个多边形底面与若干汇聚到同一顶点的三角形侧面组成的立体。", noteEn: "A solid with a polygonal base and triangular lateral faces meeting at one apex." },
  { categoryZh: "立体几何", categoryEn: "Solid Geometry", zh: "相似立体", en: "Similar Solids", noteZh: "对应长度按同一比例缩放，表面积按平方缩放，体积按立方缩放。", noteEn: "Solids whose corresponding lengths scale linearly, surface areas quadratically, and volumes cubically." },

  { categoryZh: "数论", categoryEn: "Number Theory", zh: "算术基本定理", en: "Fundamental Theorem of Arithmetic", noteZh: "每个大于 1 的整数都能唯一分解为质数幂的乘积（忽略顺序）。", noteEn: "Every integer greater than 1 has a unique prime-power factorization, apart from the order of factors." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "欧几里得算法", en: "Euclidean Algorithm", noteZh: "反复利用除法余数快速求两个整数的最大公因数。", noteEn: "Repeatedly uses division with remainder to compute the greatest common divisor efficiently." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "中国剩余定理", en: "Chinese Remainder Theorem", noteZh: "在模数两两互质时，多个同余条件可合并为一个模乘积的唯一解类。", noteEn: "Combines congruences with pairwise coprime moduli into a unique residue class modulo their product." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "进制", en: "Number Base", noteZh: "用固定基数的幂表示数的记数系统，AMC 10 常考进制转换和数位关系。", noteEn: "A numeral system based on powers of a fixed base; AMC 10 often tests conversions and digit relations." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "数位和", en: "Digit Sum", noteZh: "一个整数各位数字的总和，可用于 3 和 9 的整除性判断。", noteEn: "The sum of an integer's digits, useful for divisibility tests by 3 and 9." },
  { categoryZh: "数论", categoryEn: "Number Theory", zh: "完全平方数", en: "Perfect Square", noteZh: "可写成某个整数平方的整数，其质因数分解中各指数均为偶数。", noteEn: "An integer equal to an integer square; every exponent in its prime factorization is even." },

  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "加法原理", en: "Addition Principle", noteZh: "若若干情况互不重叠，总方案数等于各情况方案数之和。", noteEn: "When cases are disjoint, the total number of outcomes is the sum of the counts for each case." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "分类讨论", en: "Casework", noteZh: "把所有可能性拆成互斥且完备的情况分别处理。", noteEn: "Splits all possibilities into mutually exclusive and collectively exhaustive cases." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "双射", en: "Bijection", noteZh: "在两个集合之间建立一一对应，从而证明它们的元素个数相同。", noteEn: "A one-to-one correspondence between two sets, proving that they have the same number of elements." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "几何概率", en: "Geometric Probability", noteZh: "用长度、面积或体积之比表示连续样本空间中的概率。", noteEn: "Computes probability in a continuous sample space using ratios of lengths, areas, or volumes." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "条件概率", en: "Conditional Probability", noteZh: "在已知另一个事件发生的条件下计算某事件发生的概率。", noteEn: "The probability of an event computed under the condition that another event has occurred." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "二项式系数", en: "Binomial Coefficient", noteZh: "从 n 个对象中不计顺序选出 k 个对象的方案数。", noteEn: "The number of ways to choose k objects from n objects without regard to order." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "递推计数", en: "Recursive Counting", noteZh: "按最后一步或首个选择拆分，使规模 n 的计数由较小规模计数表示。", noteEn: "Splits by a first or last choice so a count of size n is expressed using smaller counts." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "不变量", en: "Invariant", noteZh: "在一系列操作中始终保持不变的量，可用于证明状态不可达或确定结果。", noteEn: "A quantity unchanged by a sequence of operations, useful for proving impossibility or determining outcomes." }
];

const TERM_GLOSSARY = [
  { categoryZh: "代数", categoryEn: "Algebra", zh: "二次式（二次的）", en: "Quadratic", noteZh: String.raw`指含有变量二次方（例如 \(x^2\)）的表达式、函数或方程，其图像通常是抛物线。`, noteEn: String.raw`Describes an expression, function, or equation containing a variable raised to the second power, such as \(x^2\); its graph is typically a parabola.` },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "平方差", en: "Difference of Squares", noteZh: String.raw`形如 \(a^2-b^2\) 的表达式，可以直接分解为 \((a-b)(a+b)\)。`, noteEn: String.raw`An expression of the form \(a^2-b^2\), which factors immediately as \((a-b)(a+b)\).` },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "首一（首项系数为 1）", en: "Monic", noteZh: String.raw`指多项式最高次项的系数为 1，例如 \(x^2-7x+10\) 就是首一二次式。`, noteEn: String.raw`Describes a polynomial whose leading coefficient (the coefficient of its highest-degree term) equals 1, such as \(x^2-7x+10\).` },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "首项系数", en: "Leading Coefficient", noteZh: "多项式中次数最高一项前面的系数，决定整体端点趋势。", noteEn: "The coefficient of a polynomial's highest-degree term; it controls the expression's overall end behavior." },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "判别式", en: "Discriminant", noteZh: String.raw`二次方程 \(ax^2+bx+c=0\) 中的 \(b^2-4ac\)，用来判断根的个数与类型。`, noteEn: String.raw`The quantity \(b^2-4ac\) for a quadratic \(ax^2+bx+c=0\), used to determine the number and type of its roots.` },
  { categoryZh: "代数", categoryEn: "Algebra", zh: "对称性", en: "Symmetry", noteZh: "表达式或图形在交换变量、旋转或翻折后保持不变的性质，常用于简化计算。", noteEn: "The property that an expression or figure stays unchanged under swapping variables, rotation, or reflection; frequently used to simplify computation." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "特殊直角三角形", en: "Special Right Triangle", noteZh: "指 30-60-90 或 45-45-90 等边长比固定的直角三角形，可直接套用比例求边长。", noteEn: "A right triangle such as the 30-60-90 or 45-45-90 triangle with fixed side-length ratios that can be applied directly." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "海伦公式", en: "Heron's Formula", noteZh: "利用三角形三边长直接求面积的公式，无需先求出高。", noteEn: "A formula that computes a triangle's area directly from its three side lengths, without first finding an altitude." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "中点", en: "Midpoint", noteZh: "线段上到两端点距离相等的点，其坐标是两端点坐标的平均值。", noteEn: "The point on a segment equidistant from both endpoints; its coordinates are the average of the endpoint coordinates." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "外角", en: "Exterior Angle", noteZh: "多边形一边与相邻边延长线所夹的角；凸多边形的外角和恒为 360 度。", noteEn: "The angle between a polygon's side and the extension of an adjacent side; the exterior angles of any convex polygon sum to 360 degrees." },
  { categoryZh: "几何", categoryEn: "Geometry", zh: "圆心角", en: "Central Angle", noteZh: "顶点在圆心、两边为半径的角，正多边形相邻顶点间的圆心角相等。", noteEn: "An angle with its vertex at the center of a circle and sides along two radii; consecutive vertices of a regular polygon subtend equal central angles." },
  { categoryZh: "立体几何", categoryEn: "Solid Geometry", zh: "截面", en: "Cross-Section", noteZh: "用一个平面切割立体图形后得到的二维图形。", noteEn: "The two-dimensional figure obtained when a solid is intersected by a plane." },
  { categoryZh: "组合与概率", categoryEn: "Counting & Probability", zh: "二项式定理", en: "Binomial Theorem", noteZh: String.raw`给出 \((x+y)^n\) 展开式中每一项系数的公式，系数为组合数。`, noteEn: String.raw`Gives the coefficients in the expansion of \((x+y)^n\), each equal to a binomial coefficient.` }
];

const GLOSSARY_CONCEPT_MAP = {
  "Polynomial": ["polynomials"],
  "Coefficient": ["polynomials", "algebraic-techniques"],
  "Zero (Root)": ["polynomials", "functions"],
  "Factor": ["polynomials", "numbers-operations"],
  "Remainder Theorem": ["polynomials"],
  "Inequality": ["inequalities"],
  "Absolute Value": ["inequalities", "functions"],
  "Domain": ["functions"],
  "Range": ["functions"],
  "Sequence": ["sequences"],
  "Recurrence Relation": ["sequences", "combinatorics-methods"],
  "Congruence": ["triangles", "regular-polygons"],
  "Similarity": ["triangles", "circles-quadrilaterals"],
  "Supplementary Angles": ["triangles", "circles-quadrilaterals"],
  "Perpendicular Bisector": ["diagram-skills", "coordinate-geometry"],
  "Angle Bisector": ["triangles", "diagram-skills"],
  "Cyclic Quadrilateral": ["circles-quadrilaterals"],
  "Tangent": ["circles-quadrilaterals", "diagram-skills"],
  "Secant": ["circles-quadrilaterals"],
  "Chord": ["circles-quadrilaterals"],
  "Locus": ["coordinate-geometry"],
  "Coordinate Plane": ["coordinate-geometry"],
  "Prime Number": ["numbers-operations", "principles-theorems"],
  "Divisor": ["numbers-operations"],
  "Greatest Common Divisor": ["numbers-operations"],
  "Least Common Multiple": ["numbers-operations"],
  "Congruence Modulo n": ["numbers-operations", "principles-theorems"],
  "Parity": ["numbers-operations"],
  "Diophantine Equation": ["integer-equations"],
  "Multiplication Principle": ["combinatorics-methods"],
  "Inclusion-Exclusion": ["combinatorics-methods"],
  "Pigeonhole Principle": ["principles-theorems", "combinatorics-methods"],
  "Permutation": ["permutations-combinations-probability"],
  "Combination": ["permutations-combinations-probability"],
  "Complementary Event": ["permutations-combinations-probability"],
  "Sample Space": ["permutations-combinations-probability"],
  "Independent Events": ["permutations-combinations-probability"],
  "Expected Value": ["permutations-combinations-probability"],
  "Vieta's Formulas": ["polynomials"],
  "Factor Theorem": ["polynomials"],
  "AM-GM Inequality": ["inequalities"],
  "Function Composition": ["functions"],
  "Quadratic Vertex": ["functions", "algebraic-techniques"],
  "Arithmetic Sequence": ["sequences"],
  "Geometric Sequence": ["sequences"],
  "Completing the Square": ["algebraic-techniques", "polynomials"],
  "Pythagorean Theorem": ["triangles"],
  "Incircle": ["triangles", "circles-quadrilaterals"],
  "Circumcircle": ["triangles", "circles-quadrilaterals"],
  "Inscribed Angle": ["circles-quadrilaterals"],
  "Power of a Point": ["circles-quadrilaterals"],
  "Regular Polygon": ["regular-polygons"],
  "Slope": ["coordinate-geometry"],
  "Distance Formula": ["coordinate-geometry"],
  "Coplanar": ["points-lines-planes"],
  "Euler's Polyhedron Formula": ["solids-polyhedra"],
  "Prism": ["special-solids"],
  "Pyramid": ["special-solids"],
  "Similar Solids": ["special-solids", "solids-polyhedra"],
  "Fundamental Theorem of Arithmetic": ["principles-theorems", "numbers-operations"],
  "Euclidean Algorithm": ["principles-theorems", "numbers-operations"],
  "Chinese Remainder Theorem": ["principles-theorems", "integer-equations"],
  "Number Base": ["numbers-operations"],
  "Digit Sum": ["numbers-operations"],
  "Perfect Square": ["numbers-operations", "integer-equations"],
  "Addition Principle": ["combinatorics-methods"],
  "Casework": ["combinatorics-methods"],
  "Bijection": ["combinatorics-methods"],
  "Geometric Probability": ["permutations-combinations-probability", "coordinate-geometry"],
  "Conditional Probability": ["permutations-combinations-probability"],
  "Binomial Coefficient": ["permutations-combinations-probability"],
  "Recursive Counting": ["combinatorics-methods", "sequences"],
  "Invariant": ["principles-theorems", "combinatorics-methods"],
  "Quadratic": ["polynomials", "functions", "algebraic-techniques"],
  "Difference of Squares": ["polynomials", "algebraic-techniques"],
  "Monic": ["polynomials"],
  "Leading Coefficient": ["polynomials"],
  "Discriminant": ["polynomials", "functions"],
  "Symmetry": ["algebraic-techniques", "polynomials", "regular-polygons", "triangles"],
  "Special Right Triangle": ["triangles"],
  "Heron's Formula": ["triangles"],
  "Midpoint": ["coordinate-geometry"],
  "Exterior Angle": ["regular-polygons", "triangles"],
  "Central Angle": ["regular-polygons"],
  "Cross-Section": ["solids-polyhedra", "special-solids"],
  "Binomial Theorem": ["principles-theorems"]
};

export const GLOSSARY = [...BASE_GLOSSARY, ...ADDITIONAL_GLOSSARY, ...TERM_GLOSSARY].map((term) => ({
  ...term,
  conceptIds: GLOSSARY_CONCEPT_MAP[term.en] || []
}));

export function allConcepts() {
  return TOPICS.flatMap((topic) => topic.concepts.map((concept) => ({ ...concept, topicId: topic.id, topicZh: topic.zh, topicEn: topic.en })));
}
