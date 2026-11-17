export const TOPIC = {
  id: "numbers-operations",
  zh: "数与运算",
  en: "Numbers & Operations",
  officialAlignment: "Number sense and operations: integers, fractions, decimals, percents, ratios, exponents and number theory",
  officialAlignmentZh: "数感与运算：整数、分数、小数、百分数、比、指数与数论",
  concepts: [
    {
      id: "integers-order-operations",
      zh: "整数、有理数与运算顺序",
      en: "Integers, Rational Numbers & Order of Operations",
      detailEn: "The number line, negative numbers, absolute value, rational numbers, the order of operations, properties of operations, and place value with rounding.",
      detailZh: "数轴、负数、绝对值、有理数、运算顺序、运算律，以及数位与四舍五入。",
      explanationEn: "Almost every ISEE math question rests on two things: accurate arithmetic with signed numbers and the correct order of operations. A number line shows both order and distance: numbers grow to the right, and the absolute value of a number is its distance from 0. Integers are the whole numbers and their opposites, and rational numbers are all numbers that can be written as a fraction of two integers. The Lower Level focuses on whole-number arithmetic, place value, rounding and the order of operations, with negative numbers kept simple. The Middle and Upper Levels add negative fractions and decimals, the properties of operations, and multi-step expressions.",
      explanationZh: "几乎所有 ISEE 数学题都离不开两件事：正负数的准确运算，以及正确的运算顺序。数轴能同时显示大小顺序和距离：越往右越大，一个数的绝对值就是它到 0 的距离。整数包括非负整数及其相反数，有理数则是所有能写成两个整数之比的数。初级主要考查非负整数的运算、数位、四舍五入和运算顺序，负数只涉及简单的情形；中级和高级会加入正负分数和小数的运算、运算律，以及混合多种运算的多步算式。",
      keyPoints: [
        {
          titleEn: "The number line, absolute value and rational numbers",
          titleZh: "数轴、绝对值与有理数",
          formula: String.raw`\frac{a}{b}\quad(a,\,b\ \text{integers},\ b\ne0)`,
          explanationEn: String.raw`On a number line, numbers grow to the right, so \(-2>-5\) even though 2 is less than 5. The absolute value \(|a|\) is the distance from \(a\) to 0, so \(|-7|=7\) and \(|7|=7\). A rational number is any number that can be written as a fraction of two integers; integers, terminating decimals and repeating decimals are all rational, while \(\sqrt{2}\) and \(\pi\) are not.`,
          explanationZh: String.raw`在数轴上，越往右数越大，所以 \(-2>-5\)，尽管 2 比 5 小。绝对值 \(|a|\) 是 \(a\) 到 0 的距离，因此 \(|-7|=7\)，\(|7|=7\)。有理数是能写成两个整数之比的数；整数、有限小数和循环小数都是有理数，而 \(\sqrt{2}\) 和 \(\pi\) 不是。`,
          exampleEn: String.raw`Order from least to greatest: \(\frac{1}{2},\ -2,\ \frac{3}{4},\ -0.75\). Negatives come first, and the one farther from 0 is smaller, so \(-2<-0.75<\frac{1}{2}<\frac{3}{4}\). The distance between \(-3\) and \(4\) is \(|4-(-3)|=7\).`,
          exampleZh: String.raw`把 \(\frac{1}{2},\ -2,\ \frac{3}{4},\ -0.75\) 从小到大排列。负数排在前面，离 0 越远的越小，所以 \(-2<-0.75<\frac{1}{2}<\frac{3}{4}\)。\(-3\) 与 \(4\) 之间的距离是 \(|4-(-3)|=7\)。`
        },
        {
          titleEn: "Adding and subtracting signed numbers",
          titleZh: "正负数的加减",
          formula: String.raw`a-b=a+(-b)`,
          explanationEn: String.raw`With the same signs, add the absolute values and keep the sign. With different signs, subtract the smaller absolute value from the larger and keep the sign of the number with the larger absolute value. To subtract, add the opposite. Typical slips are computing \(-3-4\) as \(-1\) (it is \(-7\)) and \(-8-(-3)\) as \(-11\) (it is \(-5\)).`,
          explanationZh: String.raw`符号相同：绝对值相加，符号不变。符号不同：用较大的绝对值减去较小的绝对值，结果取绝对值较大的那个数的符号。减去一个数，等于加上它的相反数。常见的错误是把 \(-3-4\) 算成 \(-1\)（应为 \(-7\)），或把 \(-8-(-3)\) 算成 \(-11\)（应为 \(-5\)）。`,
          stepsEn: [
            String.raw`Start with \(-5-(-9)\) and rewrite the subtraction as adding the opposite: \(-5+9\).`,
            String.raw`The signs are different, so subtract the smaller absolute value from the larger: \(9-5=4\).`,
            "Give the result the sign of the number with the larger absolute value. That number is 9, which is positive, so the answer is 4."
          ],
          stepsZh: [
            String.raw`从 \(-5-(-9)\) 开始，把减法改写成加上相反数：\(-5+9\)。`,
            String.raw`两数符号不同，用较大的绝对值减去较小的绝对值：\(9-5=4\)。`,
            "结果取绝对值较大的那个数的符号。这个数是 9，为正，所以答案是 4。"
          ],
          exampleEn: String.raw`For instance, \(-3-4=-3+(-4)=-7\) and \(-8-(-3)=-8+3=-5\).`,
          exampleZh: String.raw`例如：\(-3-4=-3+(-4)=-7\)，\(-8-(-3)=-8+3=-5\)。`
        },
        {
          titleEn: "Multiplying and dividing signed numbers",
          titleZh: "正负数的乘除",
          formula: String.raw`(-a)(-b)=ab,\qquad (-a)(b)=-ab`,
          explanationEn: "Same signs give a positive product or quotient; different signs give a negative one. With several factors, count the negative ones: an even count gives a positive result and an odd count gives a negative result. Zero divided by a nonzero number is 0, and division by 0 is never allowed.",
          explanationZh: "两数符号相同，积或商为正；符号不同，积或商为负。有多个因数时，数一数负因数的个数：偶数个为正，奇数个为负。0 除以任何非零数都得 0，而除数永远不能是 0。",
          exampleEn: String.raw`\((-2)(-3)(-4)\) has three negative factors, so it is negative: \(-24\). Also \(-36\div(-9)=4\) and \(0\div(-5)=0\).`,
          exampleZh: String.raw`\((-2)(-3)(-4)\) 有三个负因数，结果为负：\(-24\)。再如 \(-36\div(-9)=4\)，\(0\div(-5)=0\)。`
        },
        {
          titleEn: "Order of operations",
          titleZh: "运算顺序",
          explanationEn: "Work in this order: grouping symbols (parentheses, brackets and fraction bars), then exponents, then multiplication and division from left to right, then addition and subtraction from left to right. Multiplication does not outrank division and addition does not outrank subtraction; they are equal partners, so go left to right. Do the work inside parentheses first, even when an operation outside them looks easier.",
          explanationZh: "按这个顺序计算：先算括号（包括中括号和分数线上下的整体），再算指数，然后从左到右算乘除，最后从左到右算加减。乘法并不比除法优先，加法也不比减法优先，它们地位相同，所以要从左到右。即使括号外有看起来更容易的运算，也要先算括号里面的。",
          stepsEn: [
            String.raw`Start with \(6+4\times(8-5)^2\div2-3\). Parentheses first: \(8-5=3\), so the expression becomes \(6+4\times3^2\div2-3\).`,
            String.raw`Exponents next: \(3^2=9\), giving \(6+4\times9\div2-3\).`,
            String.raw`Multiplication and division from left to right: \(4\times9=36\), then \(36\div2=18\), giving \(6+18-3\).`,
            String.raw`Addition and subtraction from left to right: \(6+18=24\), then \(24-3=21\).`
          ],
          stepsZh: [
            String.raw`从 \(6+4\times(8-5)^2\div2-3\) 开始。先算括号：\(8-5=3\)，式子变成 \(6+4\times3^2\div2-3\)。`,
            String.raw`再算指数：\(3^2=9\)，得到 \(6+4\times9\div2-3\)。`,
            String.raw`从左到右算乘除：\(4\times9=36\)，再 \(36\div2=18\)，得到 \(6+18-3\)。`,
            String.raw`从左到右算加减：\(6+18=24\)，再 \(24-3=21\)。`
          ],
          exampleEn: String.raw`Evaluate \(48\div6\times2\). Going left to right gives \(8\times2=16\), not \(48\div12=4\). Also, \(20-2\times(3+4)=20-14=6\).`,
          exampleZh: String.raw`计算 \(48\div6\times2\)：从左到右，\(8\times2=16\)，而不是 \(48\div12=4\)。再如 \(20-2\times(3+4)=20-14=6\)。`
        },
        {
          titleEn: "Properties of operations",
          titleZh: "运算律与巧算",
          formula: String.raw`a(b+c)=ab+ac`,
          explanationEn: String.raw`The commutative laws (\(a+b=b+a\) and \(ab=ba\)) and the associative laws let you reorder and regroup sums and products, and the distributive law links multiplication with addition. Identity facts help too: \(a+0=a\), \(a\times1=a\) and \(a\times0=0\). Use these laws to make mental math easier. Subtraction and division are not commutative, so \(8-3\ne3-8\).`,
          explanationZh: String.raw`加法和乘法的交换律（\(a+b=b+a\)，\(ab=ba\)）与结合律让你可以重新排序、重新分组；分配律把乘法和加法联系起来。还有几个恒等事实：\(a+0=a\)，\(a\times1=a\)，\(a\times0=0\)。用这些运算律可以让心算更轻松。减法和除法不满足交换律，例如 \(8-3\ne3-8\)。`,
          exampleEn: String.raw`Mental math: \(4\times27\times25=(4\times25)\times27=100\times27=2{,}700\), and \(7\times98=7(100-2)=700-14=686\).`,
          exampleZh: String.raw`心算示例：\(4\times27\times25=(4\times25)\times27=100\times27=2{,}700\)；\(7\times98=7(100-2)=700-14=686\)。`
        },
        {
          titleEn: "Place value and rounding",
          titleZh: "数位与四舍五入",
          explanationEn: String.raw`Every digit has a place value: in \(4{,}073.186\), the 7 is in the tens place (worth 70) and the 8 is in the hundredths place (worth 0.08). To round, find the place you are rounding to, look at the digit just to its right, and round up if that digit is 5 or more; otherwise keep the digit. Always round once from the original number, never in stages.`,
          explanationZh: String.raw`每个数字都有自己的数位：在 \(4{,}073.186\) 中，7 在十位（表示 70），8 在百分位（表示 0.08）。四舍五入时，先确定要保留到哪一位，再看它右边紧邻的一位：是 5 或更大就进一，否则舍去。必须一次从原数舍入，不能分步舍入。`,
          exampleEn: String.raw`Round \(3{,}486.527\) to the nearest hundred: the tens digit is 8, so round up to \(3{,}500\). To the nearest tenth: the hundredths digit is 2, so the result is \(3{,}486.5\). Rounding \(2.449\) to the nearest tenth gives \(2.4\); rounding in stages (\(2.45\), then \(2.5\)) is wrong.`,
          exampleZh: String.raw`把 \(3{,}486.527\) 精确到百位：十位是 8，进一，得 \(3{,}500\)；精确到十分位：百分位是 2，舍去，得 \(3{,}486.5\)。把 \(2.449\) 精确到十分位得 \(2.4\)；若分步（先 \(2.45\)，再 \(2.5\)）就错了。`
        }
      ],
      methodsEn: [
        "Draw a quick number line for questions about order, distance or negatives.",
        "Rewrite every subtraction as adding the opposite.",
        "Count the negative factors to get the sign of a product.",
        "Mark the order of operations with light pencil underlines.",
        "Use the distributive and commutative laws to make mental math easier."
      ],
      methodsZh: [
        "遇到比较大小、距离或负数的题，随手画一条数轴。",
        "把每个减法都改写成加上相反数。",
        "数负因数的个数，来决定积的符号。",
        "用铅笔轻轻标出运算的先后顺序。",
        "用分配律和交换律让心算更轻松。"
      ],
      exampleEn: String.raw`Evaluate \(18-3\times(-4)+(-20)\div5\). Multiply and divide first: \(3\times(-4)=-12\) and \((-20)\div5=-4\). Then \(18-(-12)+(-4)=18+12-4=26\).`,
      exampleZh: String.raw`计算 \(18-3\times(-4)+(-20)\div5\)。先算乘除：\(3\times(-4)=-12\)，\((-20)\div5=-4\)。再算 \(18-(-12)+(-4)=18+12-4=26\)。`,
      checklistEn: [
        "Order integers and rational numbers on a number line",
        "Add, subtract, multiply and divide signed numbers",
        "Apply the order of operations to multi-step expressions",
        "Use the properties of operations for quick mental math",
        "Round to a given place value without rounding in stages"
      ],
      checklistZh: [
        "能在数轴上给整数和有理数排序",
        "能做正负数的加减乘除",
        "能按运算顺序计算多步算式",
        "能用运算律做快速心算",
        "能按指定数位四舍五入，不分步舍入"
      ]
    },
    {
      id: "fractions-decimals",
      zh: "分数与小数",
      en: "Fractions & Decimals",
      detailEn: "Equivalent fractions, operations with fractions, mixed numbers and decimals, converting between forms, and comparing or ordering.",
      detailZh: "等值分数、分数与带分数的运算、小数运算、分数与小数互化，以及比较大小和排序。",
      explanationEn: String.raw`Fractions and decimals are two ways to write parts of a whole, and the ISEE moves between them constantly. You need accurate skills with all four operations, comfort with mixed numbers, and a feel for size: knowing that \(\frac{5}{8}\) is a little more than \(0.6\) saves time. The Lower Level concentrates on equivalent fractions, adding and subtracting fractions with unlike denominators, and decimals to the hundredths. The Middle Level adds multiplying and dividing fractions and mixed numbers, repeating decimals, and comparing numbers written in different forms. The Upper Level adds complex fractions and multi-step problems that mix fractions, decimals and percents.`,
      explanationZh: String.raw`分数和小数是表示“整体的一部分”的两种写法，ISEE 经常要求你在两者之间切换。你需要准确掌握四则运算，熟悉带分数，并对大小有感觉：比如知道 \(\frac{5}{8}\) 比 \(0.6\) 稍大，就能节省很多时间。初级重点是等值分数、异分母分数的加减，以及精确到百分位的小数；中级增加分数和带分数的乘除、循环小数，以及不同形式的数的比较；高级再加入繁分数，以及把分数、小数、百分数混合在一起的多步题。`,
      keyPoints: [
        {
          titleEn: "Equivalent fractions and simplest form",
          titleZh: "等值分数与最简分数",
          formula: String.raw`\frac{a}{b}=\frac{a\times k}{b\times k}\quad(k\ne0)`,
          explanationEn: "Multiplying or dividing the numerator and the denominator by the same nonzero number gives an equivalent fraction. To simplify, divide both by their greatest common factor until nothing else divides them both. To change a mixed number to an improper fraction, multiply the whole number by the denominator and add the numerator; to change back, divide the numerator by the denominator and use the remainder as the new numerator.",
          explanationZh: "分子、分母同时乘以（或除以）同一个非零数，得到的是等值分数。化简时，用分子和分母的最大公因数同时去除，直到没有公因数。把带分数化成假分数：整数部分乘分母再加分子；反过来，用分子除以分母，商是整数部分，余数作新的分子。",
          exampleEn: String.raw`\(\frac{18}{24}=\frac{18\div6}{24\div6}=\frac{3}{4}\). Also \(3\frac{5}{8}=\frac{3\times8+5}{8}=\frac{29}{8}\), and going back, dividing \(29\) by \(8\) gives quotient \(3\) and remainder \(5\), so \(\frac{29}{8}=3\frac{5}{8}\).`,
          exampleZh: String.raw`\(\frac{18}{24}=\frac{18\div6}{24\div6}=\frac{3}{4}\)。又 \(3\frac{5}{8}=\frac{3\times8+5}{8}=\frac{29}{8}\)；反过来，\(29\) 除以 \(8\)，商是 \(3\)，余数是 \(5\)，所以 \(\frac{29}{8}=3\frac{5}{8}\)。`
        },
        {
          titleEn: "Adding and subtracting fractions and mixed numbers",
          titleZh: "分数与带分数的加减",
          formula: String.raw`\frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd}`,
          explanationEn: String.raw`Fractions can be added or subtracted only when their denominators match, so rewrite them with a common denominator (the least common multiple keeps the numbers small), then combine the numerators and keep the denominator. For mixed numbers, add or subtract the whole parts and the fraction parts separately; regroup when the fraction part reaches 1 or more, and borrow when you cannot subtract. Never add the denominators: \(\frac{1}{2}+\frac{1}{3}\ne\frac{2}{5}\).`,
          explanationZh: String.raw`只有分母相同的分数才能直接加减，所以先通分（用最小公倍数作公分母，数字更小），再把分子相加减，分母不变。带分数可以把整数部分和分数部分分别相加减；分数部分达到 1 以上时要进位，不够减时要借 1。千万不要把分母相加：\(\frac{1}{2}+\frac{1}{3}\ne\frac{2}{5}\)。`,
          stepsEn: [
            String.raw`To add \(3\frac{1}{4}+2\frac{5}{6}\), find a common denominator: the least common multiple of 4 and 6 is 12.`,
            String.raw`Rewrite each fraction with denominator 12: \(3\frac{1}{4}=3\frac{3}{12}\) and \(2\frac{5}{6}=2\frac{10}{12}\).`,
            String.raw`Add the whole numbers and the fractions separately: \(5\frac{13}{12}\).`,
            String.raw`Regroup \(\frac{13}{12}=1\frac{1}{12}\), so the sum is \(6\frac{1}{12}\).`
          ],
          stepsZh: [
            String.raw`计算 \(3\frac{1}{4}+2\frac{5}{6}\)，先找公分母：4 和 6 的最小公倍数是 12。`,
            String.raw`把两个分数的分母都化成 12：\(3\frac{1}{4}=3\frac{3}{12}\)，\(2\frac{5}{6}=2\frac{10}{12}\)。`,
            String.raw`整数部分与分数部分分别相加：\(5\frac{13}{12}\)。`,
            String.raw`进位：\(\frac{13}{12}=1\frac{1}{12}\)，所以和是 \(6\frac{1}{12}\)。`
          ],
          exampleEn: String.raw`Subtract \(5\frac{1}{3}-2\frac{3}{4}\): with denominator 12 this is \(5\frac{4}{12}-2\frac{9}{12}\). Borrow 1 from the 5: \(4\frac{16}{12}-2\frac{9}{12}=2\frac{7}{12}\).`,
          exampleZh: String.raw`计算 \(5\frac{1}{3}-2\frac{3}{4}\)：公分母取 12，得 \(5\frac{4}{12}-2\frac{9}{12}\)。从 5 中借 1：\(4\frac{16}{12}-2\frac{9}{12}=2\frac{7}{12}\)。`
        },
        {
          titleEn: "Multiplying and dividing fractions",
          titleZh: "分数的乘除",
          formula: String.raw`\frac{a}{b}\div\frac{c}{d}=\frac{a}{b}\times\frac{d}{c}`,
          explanationEn: "To multiply fractions, multiply the numerators and multiply the denominators, cancelling common factors first to keep the numbers small. To divide, multiply by the reciprocal of the second fraction. Change mixed numbers to improper fractions before you multiply or divide. The word “of” means multiply. Dividing a positive number by a number between 0 and 1 makes the result larger, which is a good size check.",
          explanationZh: "分数相乘：分子乘分子，分母乘分母，并且先约分让数字保持较小。分数相除：乘以第二个分数的倒数。带分数要先化成假分数再乘除。“……的”就是乘。正数除以 0 到 1 之间的数，结果会变大，这是很好的大小检验。",
          exampleEn: String.raw`\(\frac{3}{4}\) of \(20\) is \(\frac{3}{4}\times20=15\). Also \(2\frac{1}{2}\div1\frac{1}{4}=\frac{5}{2}\div\frac{5}{4}=\frac{5}{2}\times\frac{4}{5}=2\). Size check: \(6\div\frac{1}{2}=12\), which is larger than \(6\).`,
          exampleZh: String.raw`\(20\) 的 \(\frac{3}{4}\) 是 \(\frac{3}{4}\times20=15\)。又 \(2\frac{1}{2}\div1\frac{1}{4}=\frac{5}{2}\div\frac{5}{4}=\frac{5}{2}\times\frac{4}{5}=2\)。大小检验：\(6\div\frac{1}{2}=12\)，比 \(6\) 大。`
        },
        {
          titleEn: "Decimal operations",
          titleZh: "小数运算",
          explanationEn: "To add or subtract decimals, line up the decimal points and fill in zeros where needed. To multiply, ignore the decimal points, multiply as whole numbers, and give the product as many decimal places as the two factors have together. To divide by a decimal, move the decimal point in the divisor and in the dividend the same number of places until the divisor is a whole number.",
          explanationZh: "小数加减：小数点对齐，需要时补 0。小数乘法：先忽略小数点，按整数相乘，再让积的小数位数等于两个因数小数位数之和。除数是小数时：把除数和被除数的小数点向右移动相同的位数，直到除数变成整数。",
          stepsEn: [
            String.raw`To compute \(4.8\div0.06\), move the decimal point in the divisor two places to the right: \(0.06\) becomes \(6\).`,
            String.raw`Move the decimal point in the dividend the same two places: \(4.8\) becomes \(480\).`,
            String.raw`Divide: \(480\div6=80\).`
          ],
          stepsZh: [
            String.raw`计算 \(4.8\div0.06\)：先把除数的小数点向右移两位，\(0.06\) 变成 \(6\)。`,
            String.raw`被除数的小数点也向右移同样的两位，\(4.8\) 变成 \(480\)。`,
            String.raw`再相除：\(480\div6=80\)。`
          ],
          exampleEn: String.raw`For \(12.5-3.75\), write \(12.50-3.75=8.75\). For \(0.6\times0.07\), \(6\times7=42\), and the factors have \(1+2=3\) decimal places, so the product is \(0.042\).`,
          exampleZh: String.raw`计算 \(12.5-3.75\)：写成 \(12.50-3.75=8.75\)。计算 \(0.6\times0.07\)：\(6\times7=42\)，两个因数共有 \(1+2=3\) 位小数，所以积是 \(0.042\)。`
        },
        {
          titleEn: "Converting between fractions and decimals",
          titleZh: "分数与小数互化",
          explanationEn: String.raw`To change a fraction to a decimal, divide the numerator by the denominator. The decimal stops (terminates) when the simplified denominator has only the prime factors 2 and 5; otherwise it repeats. To change a decimal to a fraction, write it over a power of 10 and simplify. Memorize the common ones: \(\frac{1}{8}=0.125\), \(\frac{3}{8}=0.375\), \(\frac{1}{3}=0.\overline{3}\) and \(\frac{2}{3}=0.\overline{6}\).`,
          explanationZh: String.raw`分数化小数：分子除以分母。当最简分数的分母只含质因数 2 和 5 时，小数会终止（有限小数），否则会循环。小数化分数：写成以 10 的幂为分母的分数，再约分。常见的转换要记住：\(\frac{1}{8}=0.125\)，\(\frac{3}{8}=0.375\)，\(\frac{1}{3}=0.\overline{3}\)，\(\frac{2}{3}=0.\overline{6}\)。`,
          exampleEn: String.raw`\(0.375=\frac{375}{1000}=\frac{3}{8}\). Also \(\frac{7}{20}=\frac{35}{100}=0.35\), and \(\frac{5}{6}=0.8\overline{3}\) because \(5\div6=0.8333\ldots\).`,
          exampleZh: String.raw`\(0.375=\frac{375}{1000}=\frac{3}{8}\)；又 \(\frac{7}{20}=\frac{35}{100}=0.35\)；\(\frac{5}{6}=0.8\overline{3}\)，因为 \(5\div6=0.8333\ldots\)。`
        },
        {
          titleEn: "Comparing and ordering",
          titleZh: "比较大小与排序",
          explanationEn: String.raw`Compare decimals place by place from the left after adding zeros so they have the same length; a longer decimal is not necessarily larger (\(0.4>0.35\)). To compare fractions, use a common denominator, a common numerator (with the same numerator, the smaller denominator gives the larger fraction), cross-multiplying, or a benchmark such as \(\frac{1}{2}\). When fractions and decimals are mixed, convert everything to decimals.`,
          explanationZh: String.raw`比较小数：先补 0 使位数相同，再从左到右逐位比较；位数多不一定数大（\(0.4>0.35\)）。比较分数：可以通分，也可以化成同分子（分子相同时，分母小的分数更大），还可以交叉相乘，或者与 \(\frac{1}{2}\) 这样的基准数比较。分数和小数混在一起时，全部化成小数。`,
          exampleEn: String.raw`Order \(\frac{3}{5},\ 0.58,\ \frac{5}{8},\ \frac{59}{100}\) from least to greatest. As decimals they are \(0.6,\ 0.58,\ 0.625,\ 0.59\), so the order is \(0.58<\frac{59}{100}<\frac{3}{5}<\frac{5}{8}\).`,
          exampleZh: String.raw`把 \(\frac{3}{5},\ 0.58,\ \frac{5}{8},\ \frac{59}{100}\) 从小到大排列。化成小数分别是 \(0.6,\ 0.58,\ 0.625,\ 0.59\)，所以顺序是 \(0.58<\frac{59}{100}<\frac{3}{5}<\frac{5}{8}\)。`
        }
      ],
      methodsEn: [
        "Find a common denominator before adding or subtracting fractions.",
        "Cancel common factors before you multiply fractions.",
        "Turn mixed numbers into improper fractions before multiplying or dividing.",
        "Convert to decimals to compare numbers written in mixed forms.",
        "Estimate the size first to catch a misplaced decimal point."
      ],
      methodsZh: [
        "分数加减之前先通分。",
        "分数相乘之前先约分。",
        "带分数先化成假分数，再做乘除。",
        "形式不同的数比较大小时，先化成小数。",
        "先估算大小，以便发现小数点位置错误。"
      ],
      exampleEn: String.raw`A board \(3\frac{3}{4}\) feet long is cut into pieces \(\frac{5}{8}\) foot long. How many pieces can be cut? \(3\frac{3}{4}\div\frac{5}{8}=\frac{15}{4}\times\frac{8}{5}=\frac{120}{20}=6\) pieces. Size check: each piece is a bit longer than half a foot, so the count should be a bit less than \(7.5\), and \(6\) fits.`,
      exampleZh: String.raw`一块长 \(3\frac{3}{4}\) 英尺的木板，被锯成每段 \(\frac{5}{8}\) 英尺的小段，可以锯出几段？\(3\frac{3}{4}\div\frac{5}{8}=\frac{15}{4}\times\frac{8}{5}=\frac{120}{20}=6\) 段。大小检验：每段比半英尺稍长，所以段数应比 \(7.5\) 稍少，6 段是合理的。`,
      checklistEn: [
        "Simplify fractions and convert between mixed numbers and improper fractions",
        "Add and subtract fractions with unlike denominators",
        "Multiply and divide fractions and mixed numbers",
        "Compute with decimals and place the decimal point correctly",
        "Convert between fractions and decimals and compare them"
      ],
      checklistZh: [
        "能化简分数，并在带分数与假分数之间转换",
        "能做异分母分数的加减",
        "能做分数和带分数的乘除",
        "能做小数运算并正确放置小数点",
        "能在分数与小数之间转换并比较大小"
      ]
    },
    {
      id: "ratios-percents",
      zh: "比、比例与百分数",
      en: "Ratios, Proportions & Percents",
      detailEn: "Ratios, rates and unit rates, proportions, finding a part, percent or whole, percent change, discounts and tax, and simple interest.",
      detailZh: "比、比率与单位比率、比例、求部分/百分数/整体、百分数的增减、折扣与税，以及单利。",
      explanationEn: String.raw`A ratio compares two quantities by division, a rate compares quantities measured in different units, a proportion states that two ratios are equal, and a percent is a ratio out of 100. Most problems in this family become easy once you write the relationship as an equivalent ratio or as a part, a percent and a whole. The Lower Level stresses simple ratios, easy rate problems and benchmark percents such as \(10\%\), \(25\%\) and \(50\%\). The Middle Level adds proportions, discounts, tax and percent change. The Upper Level adds multi-step percent problems, successive changes and simple interest.`,
      explanationZh: String.raw`比用除法比较两个量；比率比较的是单位不同的两个量；比例表示两个比相等；百分数则是分母为 100 的比。只要把关系写成等比，或者写成“部分、百分数、整体”三者之间的关系，这一类题目大多就变得容易了。初级重点是简单的比、简单的比率问题，以及 \(10\%\)、\(25\%\)、\(50\%\) 这样的基准百分数；中级加入比例、折扣、税和百分数的增减；高级加入多步百分数题、连续变化和单利。`,
      keyPoints: [
        {
          titleEn: "Ratios and sharing in a ratio",
          titleZh: "比与按比分配",
          formula: String.raw`\text{share}=\frac{\text{its part}}{\text{sum of parts}}\times\text{total}`,
          explanationEn: String.raw`A ratio such as \(3:5\) can be read “3 to 5” and written \(\frac{3}{5}\). Order matters: the ratio of boys to girls is not the ratio of girls to boys. Simplify ratios the way you simplify fractions. A part-to-part ratio (boys to girls) differs from a part-to-whole ratio (boys to all students), so add the parts to find the whole before you work out a share. A common mistake is to divide the total by one of the ratio numbers instead of by their sum.`,
          explanationZh: String.raw`比 \(3:5\) 读作“3 比 5”，也可以写成 \(\frac{3}{5}\)。顺序很重要：男生与女生的比，和女生与男生的比不一样。比可以像分数一样化简。部分与部分的比（男生与女生）不同于部分与整体的比（男生与全体学生），所以求某一份之前，要先把各份相加得到整体。常见的错误是用总数去除以比中的某一个数，而不是除以各份之和。`,
          stepsEn: [
            String.raw`Red and blue marbles are in the ratio \(3:5\), and there are 40 marbles. Add the parts: \(3+5=8\) parts in all.`,
            String.raw`Find the size of one part: \(40\div8=5\).`,
            String.raw`Multiply: red \(=3\times5=15\) and blue \(=5\times5=25\).`,
            String.raw`Check: \(15+25=40\).`
          ],
          stepsZh: [
            String.raw`红球和蓝球的数量比是 \(3:5\)，共有 40 个球。把各份相加：\(3+5=8\)，一共 8 份。`,
            String.raw`求每一份的大小：\(40\div8=5\)。`,
            String.raw`再相乘：红球 \(3\times5=15\) 个，蓝球 \(5\times5=25\) 个。`,
            String.raw`检验：\(15+25=40\)。`
          ],
          exampleEn: String.raw`Apples and pears are in the ratio \(2:3\), and there are 30 apples. One part is \(30\div2=15\), so there are \(3\times15=45\) pears.`,
          exampleZh: String.raw`苹果和梨的数量比是 \(2:3\)，苹果有 30 个。每份是 \(30\div2=15\)，所以梨有 \(3\times15=45\) 个。`
        },
        {
          titleEn: "Rates and unit rates",
          titleZh: "比率与单位比率",
          formula: String.raw`\text{unit rate}=\frac{\text{amount}}{\text{number of units}}`,
          explanationEn: "A rate compares two different kinds of quantities, such as miles per hour or dollars per pound. A unit rate has a denominator of 1, for example 60 miles per 1 hour. To find the better buy, work out the price of a single unit (or compare the prices of equal amounts), and carry the units along. Read the question carefully: dollars per pen and pens per dollar are different rates.",
          explanationZh: "比率比较的是两种不同的量，例如“千米/小时”“美元/磅”。单位比率的分母是 1，例如每 1 小时行驶 60 千米。要找更划算的选择，就算出单个单位的价格（或比较相同数量的价格），并且带着单位一起计算。要看清题目：“每支多少美元”和“每美元多少支”是不同的比率。",
          exampleEn: String.raw`A 6-pack of pens costs $4.50 and a 10-pack costs $7.00. The prices per pen are \(4.50\div6=0.75\) and \(7.00\div10=0.70\) dollars, so the 10-pack is the better buy.`,
          exampleZh: String.raw`6 支装的笔 4.50 美元，10 支装的 7.00 美元。每支笔的价格分别是 \(4.50\div6=0.75\) 美元和 \(7.00\div10=0.70\) 美元，所以 10 支装更划算。`
        },
        {
          titleEn: "Solving proportions",
          titleZh: "解比例",
          formula: String.raw`\frac{a}{b}=\frac{c}{d}\ \Longrightarrow\ ad=bc`,
          explanationEn: "A proportion says that two ratios are equal. Put matching quantities in matching positions (gallons over miles on both sides), then cross-multiply and solve. In a direct proportion, doubling one quantity doubles the other. In an inverse relationship, such as workers and days, the product stays the same. Always check that the answer has the right unit and a sensible size.",
          explanationZh: "比例表示两个比相等。把对应的量放在对应的位置（两边都是加仑在上、英里在下），然后交叉相乘求解。在正比例中，一个量翻倍，另一个量也翻倍；在反比关系（如工人数与天数）中，两者的乘积保持不变。最后一定要检查答案的单位是否正确、大小是否合理。",
          stepsEn: [
            String.raw`A car uses 6 gallons of gas to go 192 miles. For 320 miles, write matching ratios, gallons over miles on both sides: \(\frac{6}{192}=\frac{x}{320}\).`,
            String.raw`Cross-multiply: \(192x=6\times320=1{,}920\).`,
            String.raw`Divide both sides by 192: \(x=10\) gallons.`,
            String.raw`Check: the car goes \(192\div6=32\) miles per gallon, and \(320\div32=10\).`
          ],
          stepsZh: [
            String.raw`一辆车用 6 加仑汽油行驶 192 英里。要行驶 320 英里，先写出对应的比，两边都是加仑在上、英里在下：\(\frac{6}{192}=\frac{x}{320}\)。`,
            String.raw`交叉相乘：\(192x=6\times320=1{,}920\)。`,
            String.raw`两边同除以 192：\(x=10\) 加仑。`,
            String.raw`检验：这辆车每加仑行驶 \(192\div6=32\) 英里，\(320\div32=10\)。`
          ],
          exampleEn: String.raw`If 4 workers finish a job in 12 days, the job takes \(4\times12=48\) worker-days, so 6 workers need \(48\div6=8\) days: more workers, fewer days. A direct proportion: if 3 notebooks cost $4.50, then 7 notebooks cost \(\frac{4.50}{3}\times7=10.50\) dollars.`,
          exampleZh: String.raw`如果 4 个工人 12 天完成一项工作，这项工作共需 \(4\times12=48\) 个“工人·天”，所以 6 个工人需要 \(48\div6=8\) 天：人越多，天数越少。再看正比例：3 本笔记本 4.50 美元，那么 7 本需要 \(\frac{4.50}{3}\times7=10.50\) 美元。`
        },
        {
          titleEn: "Finding the part, the percent or the whole",
          titleZh: "求部分、求百分数、求整体",
          formula: String.raw`\text{part}=\frac{p}{100}\times\text{whole}`,
          explanationEn: String.raw`Percent means “per hundred.” To change a percent to a decimal, move the decimal point two places left (\(35\%=0.35\)); you can also write it as a fraction over 100. Every basic percent question uses the same relationship: the part equals the percent times the whole. Solve for whichever piece is missing: the part (\(35\%\) of \(80\)), the percent (\(15\) is what percent of \(60\)?) or the whole (\(30\) is \(40\%\) of what?). Build other percents from \(10\%\) and \(1\%\), and treat \(50\%\), \(25\%\) and \(20\%\) as \(\frac{1}{2}\), \(\frac{1}{4}\) and \(\frac{1}{5}\).`,
          explanationZh: String.raw`百分数的意思是“每一百份中的几份”。把百分数化成小数，只需把小数点向左移两位（\(35\%=0.35\)），也可以写成分母为 100 的分数。所有基本的百分数问题都围绕同一个关系：部分等于百分数乘以整体。缺哪一项就求哪一项：求部分（\(80\) 的 \(35\%\)）、求百分数（\(15\) 是 \(60\) 的百分之几？）、求整体（\(30\) 是哪个数的 \(40\%\)？）。可以用 \(10\%\) 和 \(1\%\) 搭出其他百分数，并把 \(50\%\)、\(25\%\)、\(20\%\) 看成 \(\frac{1}{2}\)、\(\frac{1}{4}\)、\(\frac{1}{5}\)。`,
          exampleEn: String.raw`To find \(35\%\) of \(80\): \(10\%\) is \(8\), so \(30\%\) is \(24\) and \(5\%\) is \(4\), and the total is \(28\). To find what percent \(15\) is of \(60\): \(\frac{15}{60}=\frac{1}{4}=25\%\). To find the whole when \(30\) is \(40\%\) of it: \(30\div0.4=75\).`,
          exampleZh: String.raw`求 \(80\) 的 \(35\%\)：\(10\%\) 是 \(8\)，\(30\%\) 是 \(24\)，\(5\%\) 是 \(4\)，合计 \(28\)。求 \(15\) 是 \(60\) 的百分之几：\(\frac{15}{60}=\frac{1}{4}=25\%\)。求“\(30\) 是某数的 \(40\%\)”中的整体：\(30\div0.4=75\)。`
        },
        {
          titleEn: "Percent change, discounts, tax and tips",
          titleZh: "百分数的增减、折扣、税和小费",
          formula: String.raw`\text{percent change}=\frac{\text{new}-\text{old}}{\text{old}}\times100\%`,
          explanationEn: String.raw`Percent change is always measured against the original amount. To take \(20\%\) off, multiply the price by \(1-0.20=0.8\); to add tax or a tip of \(5\%\), multiply by \(1+0.05=1.05\). Successive percents do not add: \(20\%\) off and then \(10\%\) off is not \(30\%\) off, because the second percent applies to the smaller price. In the same way, a \(10\%\) rise followed by a \(10\%\) fall does not return to the start.`,
          explanationZh: String.raw`百分数的增减总是以原来的数量为基准。减价 \(20\%\)，就把价格乘以 \(1-0.20=0.8\)；加上 \(5\%\) 的税或小费，就乘以 \(1+0.05=1.05\)。连续的百分数不能直接相加：先减价 \(20\%\) 再减价 \(10\%\)，并不等于减价 \(30\%\)，因为第二次是对已经降低的价格计算的。同样，先涨 \(10\%\) 再跌 \(10\%\)，也回不到原来的数。`,
          exampleEn: String.raw`A $60 jacket is \(20\%\) off, and then an extra \(10\%\) is taken off the sale price. \(60\times0.8=48\), and \(48\times0.9=43.20\). The final price is $43.20, a total discount of \(\frac{60-43.2}{60}=28\%\), not \(30\%\). A price that rises from \(40\) to \(50\) has risen \(\frac{10}{40}=25\%\).`,
          exampleZh: String.raw`一件 60 美元的夹克先减价 \(20\%\)，再在折后价上减价 \(10\%\)。\(60\times0.8=48\)，\(48\times0.9=43.20\)。最终价格是 43.20 美元，总共减价 \(\frac{60-43.2}{60}=28\%\)，而不是 \(30\%\)。价格从 \(40\) 涨到 \(50\)，涨幅是 \(\frac{10}{40}=25\%\)。`
        },
        {
          titleEn: "Simple interest (Upper Level)",
          titleZh: "单利（高级）",
          formula: String.raw`I=P\,r\,t`,
          explanationEn: String.raw`Simple interest is earned only on the original amount, called the principal. With principal \(P\), yearly rate \(r\) written as a decimal, and time \(t\) in years, the interest is \(I=Prt\), and the total after \(t\) years is \(P+I\). Change months into years first. Because the same interest is added every year, the total grows by a fixed amount per year, which makes answers easy to check. Treat simple interest as an Upper Level topic; Lower and Middle Level students can skip it until the other percent skills are solid.`,
          explanationZh: String.raw`单利只按最初的金额（本金）计算利息。设本金为 \(P\)，年利率为 \(r\)（写成小数），时间为 \(t\) 年，则利息 \(I=Prt\)，\(t\) 年后的本息和为 \(P+I\)。月数要先换算成年。每年增加的利息相同，所以总额每年增加固定的数额，便于检验结果。把单利当作高级内容；初级和中级的同学可以先跳过，等其他百分数技能扎实后再学。`,
          exampleEn: String.raw`A principal of 500 dollars at \(4\%\) per year for 3 years earns \(I=500\times0.04\times3=60\) dollars, so the total is 560 dollars. For 6 months, use \(t=\frac{1}{2}\): \(500\times0.04\times\frac{1}{2}=10\) dollars.`,
          exampleZh: String.raw`本金 500 美元，年利率 \(4\%\)，存 3 年，利息 \(I=500\times0.04\times3=60\) 美元，本息和为 560 美元。若只存 6 个月，取 \(t=\frac{1}{2}\)：\(500\times0.04\times\frac{1}{2}=10\) 美元。`
        }
      ],
      methodsEn: [
        "Write ratios in order and label the units.",
        "Treat ratio problems as “parts”: add the parts, then find the size of one part.",
        "Set up a proportion with matching units and cross-multiply.",
        String.raw`Use \(10\%\) as a building block for mental percents.`,
        String.raw`Use multipliers: \(\times0.8\) for \(20\%\) off, \(\times1.05\) for \(5\%\) tax.`
      ],
      methodsZh: [
        "按顺序写比，并标明单位。",
        "把比的问题看成“份数”：先把各份相加，再求一份的大小。",
        "列比例时让单位对齐，再交叉相乘。",
        String.raw`以 \(10\%\) 为基本块做百分数心算。`,
        String.raw`用乘数：减价 \(20\%\) 乘 \(0.8\)，加 \(5\%\) 的税乘 \(1.05\)。`
      ],
      exampleEn: String.raw`A meal costs $40 before tax. Sales tax is \(5\%\), and the tip is \(15\%\) of the pre-tax price. Tax: \(0.05\times40=2\). Tip: \(0.15\times40=6\). Total: \(40+2+6=48\) dollars.`,
      exampleZh: String.raw`一顿饭税前 40 美元。销售税是 \(5\%\)，小费是税前价格的 \(15\%\)。税：\(0.05\times40=2\)；小费：\(0.15\times40=6\)；总计 \(40+2+6=48\) 美元。`,
      checklistEn: [
        "Share a quantity in a given ratio",
        "Compare unit rates to find the better buy",
        "Solve a proportion with one unknown",
        "Find a part, a percent or a whole",
        "Calculate percent increase, decrease, discounts and tax"
      ],
      checklistZh: [
        "能按给定的比分配一个量",
        "能比较单位比率，找出更划算的选择",
        "能解含一个未知数的比例",
        "能求部分、百分数或整体",
        "能计算百分数的增减、折扣和税"
      ]
    },
    {
      id: "exponents-roots",
      zh: "指数、平方根与科学记数法",
      en: "Exponents, Roots & Scientific Notation",
      detailEn: "Meaning and laws of exponents, zero and negative exponents, perfect squares and cubes, square roots and estimating them, simplifying radicals, and scientific notation.",
      detailZh: "指数的意义与运算法则、零指数与负指数、完全平方数与立方数、平方根及其估算、根式化简和科学记数法。",
      explanationEn: "An exponent tells how many times a base is used as a factor, and a root undoes a power. These ideas let you write very large or very small numbers compactly and simplify long products in a single step. It pays to know the squares up to 20 squared and the first few cubes by heart, to estimate square roots without a calculator, and to apply the exponent laws without mixing them up. The Lower Level focuses on squares, cubes and powers of 10. The Middle Level adds the laws of exponents, zero and negative exponents, estimating roots and scientific notation. The Upper Level adds simplifying radicals and multi-step exponent expressions.",
      explanationZh: "指数表示底数作为因数出现的次数，而开方是乘方的逆运算。有了它们，可以简洁地写出很大或很小的数，也能一步化简很长的乘积。有三件事很值得练到熟练：熟记 20 以内的平方数和前几个立方数；能在没有计算器时估算平方根；运用指数法则时不混淆。初级重点是平方数、立方数和 10 的幂；中级加入指数法则、零指数与负指数、估算平方根和科学记数法；高级加入根式化简和多步指数运算。",
      keyPoints: [
        {
          titleEn: "Meaning of exponents, squares and cubes",
          titleZh: "指数的意义、平方数与立方数",
          formula: String.raw`a^{n}=a\times a\times\cdots\times a\quad(n\text{ factors})`,
          explanationEn: String.raw`In \(a^n\), the base \(a\) is used as a factor \(n\) times: \(2^5=2\times2\times2\times2\times2=32\). A negative base needs care: \((-2)^3=-8\) and \((-2)^4=16\), but \(-2^4=-(2^4)=-16\) because the exponent applies only to the 2. Memorize the perfect squares up to \(20^2=400\) and the cubes up to \(10^3=1{,}000\); they appear everywhere, from roots to factoring.`,
          explanationZh: String.raw`在 \(a^n\) 中，底数 \(a\) 作为因数出现 \(n\) 次：\(2^5=2\times2\times2\times2\times2=32\)。底数为负时要小心：\((-2)^3=-8\)，\((-2)^4=16\)，但 \(-2^4=-(2^4)=-16\)，因为指数只作用于 2。请熟记 \(20^2=400\) 以内的完全平方数和 \(10^3=1{,}000\) 以内的立方数，从开方到因数分解，处处都会用到。`,
          exampleEn: String.raw`\((-3)^2=9\) but \(-3^2=-9\). The perfect squares from \(1^2\) to \(20^2\) are 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361 and 400. The cubes from \(1^3\) to \(10^3\) are 1, 8, 27, 64, 125, 216, 343, 512, 729 and 1,000.`,
          exampleZh: String.raw`\((-3)^2=9\)，但 \(-3^2=-9\)。\(1^2\) 到 \(20^2\) 的完全平方数是 1、4、9、16、25、36、49、64、81、100、121、144、169、196、225、256、289、324、361 和 400。\(1^3\) 到 \(10^3\) 的立方数是 1、8、27、64、125、216、343、512、729 和 1,000。`
        },
        {
          titleEn: "Laws of exponents",
          titleZh: "指数法则",
          formula: String.raw`a^{m}\cdot a^{n}=a^{m+n},\quad \frac{a^{m}}{a^{n}}=a^{m-n},\quad (a^{m})^{n}=a^{mn}`,
          explanationEn: String.raw`When the bases are the same, multiplying adds the exponents, dividing subtracts them, and raising a power to a power multiplies them. Also \((ab)^n=a^nb^n\). The laws work only with a single base: \(2^3\times2^4=2^7\), not \(4^7\), and \(2^3+2^4\) cannot be combined this way at all.`,
          explanationZh: String.raw`底数相同时：相乘，指数相加；相除，指数相减；幂的乘方，指数相乘。另外 \((ab)^n=a^nb^n\)。这些法则只适用于同一个底数：\(2^3\times2^4=2^7\)，而不是 \(4^7\)；\(2^3+2^4\) 更不能这样合并。`,
          exampleEn: String.raw`\(3^2\times3^4=3^6=729\), \(\frac{5^7}{5^5}=5^2=25\), and \((2^3)^2=2^6=64\). A common slip: \((2^3)^2\) is not \(2^5\), because the exponents multiply.`,
          exampleZh: String.raw`\(3^2\times3^4=3^6=729\)，\(\frac{5^7}{5^5}=5^2=25\)，\((2^3)^2=2^6=64\)。常见失误：\((2^3)^2\) 不是 \(2^5\)，因为指数要相乘。`
        },
        {
          titleEn: "Zero and negative exponents (Middle and Upper)",
          titleZh: "零指数与负指数（中级、高级）",
          formula: String.raw`a^{0}=1\ (a\ne0),\qquad a^{-n}=\frac{1}{a^{n}}`,
          explanationEn: String.raw`Any nonzero number to the power 0 is 1, which follows from the quotient law: \(\frac{a^3}{a^3}\) equals 1 and also equals \(a^0\). A negative exponent does not make the number negative; it means “take the reciprocal.” So \(2^{-3}=\frac{1}{2^3}=\frac{1}{8}\) and \(10^{-2}=0.01\). When you simplify, apply the laws as usual, adding and subtracting exponents even when some of them are negative.`,
          explanationZh: String.raw`任何非零数的 0 次方都等于 1，这可以由除法法则得到：\(\frac{a^3}{a^3}\) 等于 1，同时也等于 \(a^0\)。负指数不会让数变成负数，它表示“取倒数”：\(2^{-3}=\frac{1}{2^3}=\frac{1}{8}\)，\(10^{-2}=0.01\)。化简时照常使用指数法则，即使其中有负指数，也是指数相加减。`,
          stepsEn: [
            String.raw`To simplify \(\frac{3^{-2}\times3^{5}}{3^{1}}\), notice that every term has the same base, 3.`,
            String.raw`Add the exponents in the numerator: \(-2+5=3\), so the expression is \(\frac{3^{3}}{3^{1}}\).`,
            String.raw`Subtract the exponents for the quotient: \(3-1=2\).`,
            String.raw`Evaluate: \(3^{2}=9\).`
          ],
          stepsZh: [
            String.raw`化简 \(\frac{3^{-2}\times3^{5}}{3^{1}}\)：先看出每一项的底数都是 3。`,
            String.raw`分子里指数相加：\(-2+5=3\)，式子变成 \(\frac{3^{3}}{3^{1}}\)。`,
            String.raw`相除，指数相减：\(3-1=2\)。`,
            String.raw`求值：\(3^{2}=9\)。`
          ],
          exampleEn: String.raw`For instance, \(7^0=1\), \((-5)^0=1\), \(2^{-3}=\frac{1}{8}\), \(\left(\frac{1}{2}\right)^{-2}=2^2=4\), and \(10^{-2}=0.01\).`,
          exampleZh: String.raw`例如：\(7^0=1\)，\((-5)^0=1\)，\(2^{-3}=\frac{1}{8}\)，\(\left(\frac{1}{2}\right)^{-2}=2^2=4\)，\(10^{-2}=0.01\)。`
        },
        {
          titleEn: "Square roots, perfect squares and estimation",
          titleZh: "平方根、完全平方数与估算",
          formula: String.raw`\sqrt{n}=x\iff x^{2}=n\quad(x\ge0)`,
          explanationEn: String.raw`The square root of \(n\) is the nonnegative number whose square is \(n\), so \(\sqrt{49}=7\) (not \(-7\)). A cube root undoes a cube: \(\sqrt[3]{27}=3\). To estimate a square root that is not a perfect square, find the perfect squares on each side, decide which is nearer, and square your estimate to check it. Remember that \(\sqrt{a^2}=|a|\), and that the square root of a negative number is not a real number.`,
          explanationZh: String.raw`\(n\) 的平方根是平方后等于 \(n\) 的非负数，所以 \(\sqrt{49}=7\)（不是 \(-7\)）。立方根是立方的逆运算：\(\sqrt[3]{27}=3\)。估算不是完全平方数的平方根时，先找出它两侧的完全平方数，判断离哪一个更近，再把估计值平方来检验。还要记住 \(\sqrt{a^2}=|a|\)，以及负数的平方根不是实数。`,
          stepsEn: [
            String.raw`To estimate \(\sqrt{70}\), find the perfect squares on each side: \(8^2=64\) and \(9^2=81\), so \(\sqrt{70}\) is between 8 and 9.`,
            String.raw`Decide which is nearer: 70 is 6 above 64 but 11 below 81, so \(\sqrt{70}\) is a bit more than 8.`,
            String.raw`Test \(8.4\): \(8.4^2=70.56\), slightly over 70, so \(\sqrt{70}\) is just under \(8.4\). A good estimate is about \(8.4\).`
          ],
          stepsZh: [
            String.raw`估算 \(\sqrt{70}\)：先找两侧的完全平方数 \(8^2=64\) 和 \(9^2=81\)，所以 \(\sqrt{70}\) 在 8 和 9 之间。`,
            String.raw`判断离哪个更近：70 比 64 大 6，比 81 小 11，所以 \(\sqrt{70}\) 比 8 大一些。`,
            String.raw`试 \(8.4\)：\(8.4^2=70.56\)，略大于 70，所以 \(\sqrt{70}\) 略小于 \(8.4\)，估计值约为 \(8.4\)。`
          ],
          exampleEn: String.raw`\(\sqrt{144}=12\) and \(\sqrt[3]{125}=5\). Since \(7^2=49<50<64=8^2\), \(\sqrt{50}\) is between 7 and 8, and very close to 7 (about \(7.07\)).`,
          exampleZh: String.raw`\(\sqrt{144}=12\)，\(\sqrt[3]{125}=5\)。因为 \(7^2=49<50<64=8^2\)，所以 \(\sqrt{50}\) 在 7 与 8 之间，而且非常接近 7（约为 \(7.07\)）。`
        },
        {
          titleEn: "Simplifying radicals (Upper Level)",
          titleZh: "化简根式（高级）",
          formula: String.raw`\sqrt{ab}=\sqrt{a}\cdot\sqrt{b}\quad(a,b\ge0)`,
          explanationEn: String.raw`To simplify a square root, pull out the largest perfect-square factor: \(\sqrt{72}=\sqrt{36\times2}=6\sqrt{2}\). Radicals with the same radicand can be added the way you add like terms: \(3\sqrt{2}+5\sqrt{2}=8\sqrt{2}\). Multiplying radicals multiplies the radicands. Do not split a sum: \(\sqrt{9+16}=5\), not \(3+4\).`,
          explanationZh: String.raw`化简平方根时，把最大的完全平方因数提出来：\(\sqrt{72}=\sqrt{36\times2}=6\sqrt{2}\)。被开方数相同的根式可以像同类项一样相加：\(3\sqrt{2}+5\sqrt{2}=8\sqrt{2}\)。根式相乘，被开方数相乘。不要把和拆开：\(\sqrt{9+16}=5\)，而不是 \(3+4\)。`,
          stepsEn: [
            String.raw`To simplify \(\sqrt{180}\), list its perfect-square factors: \(1\), \(4\), \(9\) and \(36\). The largest is \(36\).`,
            String.raw`Write \(\sqrt{180}=\sqrt{36\times5}\).`,
            String.raw`Split the root: \(\sqrt{36}\times\sqrt{5}=6\sqrt{5}\).`,
            String.raw`Check by squaring: \((6\sqrt{5})^2=36\times5=180\).`
          ],
          stepsZh: [
            String.raw`化简 \(\sqrt{180}\)：列出 180 的完全平方因数 \(1\)、\(4\)、\(9\)、\(36\)，其中最大的是 \(36\)。`,
            String.raw`写成 \(\sqrt{180}=\sqrt{36\times5}\)。`,
            String.raw`拆开根号：\(\sqrt{36}\times\sqrt{5}=6\sqrt{5}\)。`,
            String.raw`平方检验：\((6\sqrt{5})^2=36\times5=180\)。`
          ],
          exampleEn: String.raw`For instance, \(\sqrt{2}\times\sqrt{8}=\sqrt{16}=4\), and \(\sqrt{180}=6\sqrt{5}\) is about \(13.4\).`,
          exampleZh: String.raw`例如：\(\sqrt{2}\times\sqrt{8}=\sqrt{16}=4\)，而 \(\sqrt{180}=6\sqrt{5}\) 约为 \(13.4\)。`
        },
        {
          titleEn: "Scientific notation",
          titleZh: "科学记数法",
          formula: String.raw`N=a\times10^{n},\qquad 1\le a<10`,
          explanationEn: "Scientific notation writes a number as a product of a number from 1 up to (but not including) 10 and a power of 10. Move the decimal point until one non-zero digit is left of it; the number of places moved is the exponent, positive for large numbers and negative for numbers between 0 and 1. To multiply, multiply the first factors and add the exponents; to divide, divide the first factors and subtract the exponents. If the first factor ends up 10 or more, adjust it.",
          explanationZh: "科学记数法把一个数写成“大于等于 1 且小于 10 的数”乘以“10 的幂”。移动小数点，直到小数点左边只剩一位非零数字；移动的位数就是指数：大数为正，0 到 1 之间的数为负。相乘时，前面的数相乘、指数相加；相除时，前面的数相除、指数相减。如果前面的数的结果达到 10 或更大，需要再调整。",
          stepsEn: [
            String.raw`To write \(0.00072\) in scientific notation, move the decimal point to the right until one non-zero digit is to its left: \(7.2\).`,
            "Count how many places the decimal point moved: 4.",
            String.raw`A number between 0 and 1 needs a negative exponent: \(0.00072=7.2\times10^{-4}\).`
          ],
          stepsZh: [
            String.raw`把 \(0.00072\) 写成科学记数法：先把小数点向右移，直到左边只剩一位非零数字，得到 \(7.2\)。`,
            "数一数小数点移动了几位：4 位。",
            String.raw`0 到 1 之间的数，指数为负：\(0.00072=7.2\times10^{-4}\)。`
          ],
          exampleEn: String.raw`\(45{,}000{,}000=4.5\times10^{7}\). Also \((3\times10^{4})(2\times10^{3})=6\times10^{7}\), and \(\frac{6\times10^{8}}{2\times10^{3}}=3\times10^{5}\). Adjust when needed: \((5\times10^{3})(4\times10^{2})=20\times10^{5}=2\times10^{6}\).`,
          exampleZh: String.raw`\(45{,}000{,}000=4.5\times10^{7}\)。又 \((3\times10^{4})(2\times10^{3})=6\times10^{7}\)，\(\frac{6\times10^{8}}{2\times10^{3}}=3\times10^{5}\)。需要调整时：\((5\times10^{3})(4\times10^{2})=20\times10^{5}=2\times10^{6}\)。`
        }
      ],
      methodsEn: [
        String.raw`Memorize the squares up to \(20^2\) and the cubes up to \(10^3\) so you recognize them instantly.`,
        "Keep the base and add the exponents when you multiply powers of the same base.",
        String.raw`Put parentheses around negative bases: \((-3)^2\) and \(-3^2\) are different.`,
        "Bracket a square root between two perfect squares to estimate it.",
        "Factor out the largest perfect square to simplify a radical.",
        "Count decimal places carefully when you convert to scientific notation."
      ],
      methodsZh: [
        String.raw`熟记 \(20^2\) 以内的平方数和 \(10^3\) 以内的立方数，一眼就能认出。`,
        "同底数的幂相乘时，底数不变，指数相加。",
        String.raw`给负的底数加括号：\((-3)^2\) 与 \(-3^2\) 不同。`,
        "把平方根夹在两个完全平方数之间来估算。",
        "提出最大的完全平方因数来化简根式。",
        "化成科学记数法时，仔细数小数点移动的位数。"
      ],
      exampleEn: String.raw`A signal travels \(3\times10^{5}\) kilometers each second. How far does it go in \(2\times10^{2}\) seconds? Multiply the first factors and add the exponents: \((3\times10^{5})(2\times10^{2})=6\times10^{7}\) kilometers.`,
      exampleZh: String.raw`一个信号每秒传播 \(3\times10^{5}\) 千米，\(2\times10^{2}\) 秒能传播多远？前面的数相乘，指数相加：\((3\times10^{5})(2\times10^{2})=6\times10^{7}\) 千米。`,
      checklistEn: [
        "Evaluate powers, including negative bases",
        "Apply the product, quotient and power laws",
        "Evaluate zero and negative exponents",
        "Recognize perfect squares and cubes and estimate square roots",
        "Write and compute with numbers in scientific notation"
      ],
      checklistZh: [
        "能计算乘方，包括底数为负的情况",
        "能运用积、商和幂的乘方法则",
        "能计算零指数和负指数",
        "能认出完全平方数和立方数，并估算平方根",
        "能用科学记数法表示数并进行运算"
      ]
    },
    {
      id: "factors-multiples-primes",
      zh: "因数、倍数与质数",
      en: "Factors, Multiples & Primes",
      detailEn: "Divisibility rules, primes and prime factorization, GCF and LCM with word problems, counting factors, and even/odd and consecutive-integer reasoning.",
      detailZh: "整除规则、质数与质因数分解、最大公因数与最小公倍数及其应用题、因数个数，以及奇偶与连续整数的推理。",
      explanationEn: "Number theory problems ask how numbers are built from smaller pieces. A factor divides a number exactly, a multiple is what you get by multiplying it by a whole number, and a prime has exactly two factors, 1 and itself. These ideas drive fraction work, packing and scheduling word problems, and many “which must be true” questions. The Lower Level checks divisibility, primes, factors and multiples. The Middle Level adds prime factorization and GCF and LCM word problems. The Upper Level adds counting factors and algebraic reasoning with consecutive integers and parity.",
      explanationZh: "数论题问的是：数是由哪些更小的部分组成的。因数能整除这个数；倍数是它乘以整数得到的数；质数恰好有两个因数，1 和它本身。这些概念支撑着分数运算、装箱分组和排班之类的应用题，以及许多“下面哪个一定成立”的题。初级考查整除规则、质数、因数和倍数；中级加入质因数分解，以及最大公因数和最小公倍数的应用题；高级加入因数个数，以及用连续整数和奇偶性做代数推理。",
      keyPoints: [
        {
          titleEn: "Divisibility rules",
          titleZh: "整除规则",
          explanationEn: "A number is divisible by 2 if its last digit is even; by 3 if its digit sum is divisible by 3; by 4 if its last two digits form a number divisible by 4; by 5 if it ends in 0 or 5; by 6 if it is divisible by both 2 and 3; by 8 if its last three digits form a number divisible by 8; by 9 if its digit sum is divisible by 9; and by 10 if it ends in 0. Use the rules to test factors quickly and to simplify fractions.",
          explanationZh: "一个数能被 2 整除：个位是偶数；能被 3 整除：各位数字之和能被 3 整除；能被 4 整除：末两位组成的数能被 4 整除；能被 5 整除：个位是 0 或 5；能被 6 整除：同时能被 2 和 3 整除；能被 8 整除：末三位组成的数能被 8 整除；能被 9 整除：各位数字之和能被 9 整除；能被 10 整除：个位是 0。用这些规则可以快速检验因数，也可以用来约分。",
          exampleEn: String.raw`Test 4,716. The digit sum is \(4+7+1+6=18\), so it is divisible by 3 and by 9. The last digit 6 is even, so it is divisible by 2, and therefore by 6. The last two digits, 16, are divisible by 4, so 4,716 is too. The last three digits, 716, are not divisible by 8, and the number does not end in 0 or 5.`,
          exampleZh: String.raw`检验 4,716。各位数字之和 \(4+7+1+6=18\)，所以它能被 3 和 9 整除。个位 6 是偶数，能被 2 整除，因此也能被 6 整除。末两位 16 能被 4 整除，所以 4,716 也能被 4 整除。末三位 716 不能被 8 整除，并且个位不是 0 或 5。`
        },
        {
          titleEn: "Primes, composites and prime factorization",
          titleZh: "质数、合数与质因数分解",
          explanationEn: String.raw`A prime has exactly two factors, 1 and itself; a composite has more than two. The number 1 is neither, and 2 is the only even prime. The primes below 50 are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 and 47. To test whether \(n\) is prime, try dividing by the primes up to about \(\sqrt{n}\). Every composite number has exactly one prime factorization (apart from the order of the factors), which a factor tree helps you find.`,
          explanationZh: String.raw`质数恰好有两个因数：1 和它本身；合数有两个以上的因数。1 既不是质数也不是合数，2 是唯一的偶质数。50 以内的质数有 2、3、5、7、11、13、17、19、23、29、31、37、41、43 和 47。判断 \(n\) 是不是质数，只需试着用不超过 \(\sqrt{n}\) 的质数去除。每个合数都有唯一的质因数分解（不计因数的顺序），可以借助因数树把它找出来。`,
          stepsEn: [
            String.raw`To factor 360, split it into any two factors: \(360=36\times10\).`,
            String.raw`Keep splitting every composite factor: \(36=4\times9=2\times2\times3\times3\) and \(10=2\times5\).`,
            "Stop when every branch ends in a prime: 2, 2, 2, 3, 3 and 5.",
            String.raw`Write the result with exponents: \(360=2^{3}\times3^{2}\times5\).`
          ],
          stepsZh: [
            String.raw`分解 360：先拆成任意两个因数：\(360=36\times10\)。`,
            String.raw`继续拆分每个合数因数：\(36=4\times9=2\times2\times3\times3\)，\(10=2\times5\)。`,
            "直到每个分支都是质数为止：2、2、2、3、3、5。",
            String.raw`用指数写出结果：\(360=2^{3}\times3^{2}\times5\)。`
          ],
          exampleEn: String.raw`Is 91 prime? It is not divisible by 2, 3 or 5, but \(7\times13=91\), so it is composite. Testing the primes up to \(\sqrt{91}\approx9.5\) (2, 3, 5 and 7) is enough to find this out.`,
          exampleZh: String.raw`91 是质数吗？它不能被 2、3、5 整除，但 \(7\times13=91\)，所以它是合数。只需试除不超过 \(\sqrt{91}\approx9.5\) 的质数（2、3、5、7），就能发现这一点。`
        },
        {
          titleEn: "Greatest common factor (GCF)",
          titleZh: "最大公因数（GCF）",
          explanationEn: "The GCF is the largest number that divides every number in the list. Find it by listing factors or, for bigger numbers, by taking each shared prime factor to its smallest power. Use the GCF when a problem asks for the largest equal groups, the largest square tiles, or the longest pieces with nothing left over, and to simplify fractions.",
          explanationZh: "最大公因数是能同时整除这几个数的最大的数。可以列出因数来找，数字较大时则取每个公共质因数的最小次幂。当题目问“最多分成几组”“最大的正方形瓷砖”“没有剩余的最长段”时用最大公因数，化简分数时也用它。",
          exampleEn: String.raw`\(36=2^{2}\times3^{2}\) and \(48=2^{4}\times3\), so the GCF is \(2^{2}\times3=12\). With 36 red and 48 blue balloons, the greatest number of identical bags with no balloons left over is 12, each holding 3 red and 4 blue balloons.`,
          exampleZh: String.raw`\(36=2^{2}\times3^{2}\)，\(48=2^{4}\times3\)，所以最大公因数是 \(2^{2}\times3=12\)。有 36 个红气球和 48 个蓝气球，要分成完全相同、没有剩余的袋子，最多可以分 12 袋，每袋 3 个红气球和 4 个蓝气球。`
        },
        {
          titleEn: "Least common multiple (LCM)",
          titleZh: "最小公倍数（LCM）",
          formula: String.raw`\text{GCF}(a,b)\times\text{LCM}(a,b)=a\times b`,
          explanationEn: "The LCM is the smallest positive number that every number in the list divides. Find it by listing multiples or by taking each prime factor to its highest power. Use the LCM for “again at the same time” problems and for common denominators. The LCM is never smaller than the biggest number in the list, while the GCF is never bigger than the smallest. For two numbers, GCF times LCM equals their product, which gives a quick check.",
          explanationZh: "最小公倍数是能被这几个数同时整除的最小正整数。可以列出倍数来找，也可以取每个质因数的最高次幂。“多久之后再次同时发生”这类题和求公分母时用最小公倍数。最小公倍数不会比最大的那个数小，最大公因数不会比最小的那个数大。对两个数来说，最大公因数乘以最小公倍数等于这两个数的积，可以用来快速检验。",
          exampleEn: String.raw`Two buses leave a station together at 8:00. One leaves every 12 minutes and the other every 18 minutes. Since \(12=2^{2}\times3\) and \(18=2\times3^{2}\), the LCM is \(2^{2}\times3^{2}=36\), so they leave together again at 8:36. Check: the GCF is 6, and \(6\times36=216=12\times18\).`,
          exampleZh: String.raw`两路公交车 8:00 同时从车站出发，一路每 12 分钟一班，另一路每 18 分钟一班。因为 \(12=2^{2}\times3\)，\(18=2\times3^{2}\)，最小公倍数是 \(2^{2}\times3^{2}=36\)，所以它们会在 8:36 再次同时出发。检验：最大公因数是 6，\(6\times36=216=12\times18\)。`
        },
        {
          titleEn: "Counting factors",
          titleZh: "数一数因数的个数",
          formula: String.raw`n=p^{a}q^{b}\ \Longrightarrow\ \text{number of factors}=(a+1)(b+1)`,
          explanationEn: String.raw`Write the prime factorization \(n=p^{a}q^{b}\), add 1 to each exponent, and multiply the results. This works because a factor can use anywhere from 0 to \(a\) copies of \(p\) and from 0 to \(b\) copies of \(q\), which gives \(a+1\) and \(b+1\) choices. Factors come in pairs (one small, one large), so only perfect squares, where a factor pairs with itself, have an odd number of factors.`,
          explanationZh: String.raw`先写出质因数分解 \(n=p^{a}q^{b}\)，把每个指数加 1，再把结果相乘。道理在于：一个因数中 \(p\) 可以出现 0 到 \(a\) 次，\(q\) 可以出现 0 到 \(b\) 次，分别有 \(a+1\) 和 \(b+1\) 种选择。因数是成对出现的（一小一大），所以只有完全平方数（其中某个因数与自己配对）的因数个数才是奇数。`,
          exampleEn: String.raw`\(72=2^{3}\times3^{2}\), so it has \((3+1)(2+1)=12\) factors: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36 and 72. The perfect square \(36=2^{2}\times3^{2}\) has \(3\times3=9\) factors, an odd number.`,
          exampleZh: String.raw`\(72=2^{3}\times3^{2}\)，所以它有 \((3+1)(2+1)=12\) 个因数：1、2、3、4、6、8、9、12、18、24、36、72。完全平方数 \(36=2^{2}\times3^{2}\) 有 \(3\times3=9\) 个因数，是奇数个。`
        },
        {
          titleEn: "Even/odd rules and consecutive integers",
          titleZh: "奇偶规律与连续整数",
          formula: String.raw`n,\ n+1,\ n+2\ \Longrightarrow\ \text{sum}=3(n+1)`,
          explanationEn: String.raw`Parity rules: even plus even is even, odd plus odd is even, and even plus odd is odd; even times any integer is even, and odd times odd is odd. Consecutive integers differ by 1 (\(n,\ n+1,\ n+2\)); consecutive even or odd integers differ by 2 (\(n,\ n+2,\ n+4\)). The sum of an odd number of consecutive integers equals the count times the middle number, so the middle number is the average. Use these facts to decide what “must be true” without testing every case.`,
          explanationZh: String.raw`奇偶规律：偶数加偶数是偶数，奇数加奇数是偶数，偶数加奇数是奇数；偶数乘任何整数都是偶数，奇数乘奇数是奇数。连续整数相差 1（\(n,\ n+1,\ n+2\)）；连续的偶数或奇数相差 2（\(n,\ n+2,\ n+4\)）。奇数个连续整数的和等于个数乘以中间的数，所以中间的数就是平均数。利用这些事实，不必逐个试算就能判断“哪个一定成立”。`,
          exampleEn: String.raw`Three consecutive integers add to 63. The middle number is \(63\div3=21\), so they are 20, 21 and 22. Also, the product of two consecutive integers is always even, because one of them is even.`,
          exampleZh: String.raw`三个连续整数的和是 63。中间的数是 \(63\div3=21\)，所以这三个数是 20、21 和 22。再如：两个连续整数的积一定是偶数，因为其中必有一个是偶数。`
        }
      ],
      methodsEn: [
        "Test divisibility with the digit rules before you divide.",
        "Use a factor tree to prime-factorize, and write the result with exponents.",
        "For the GCF take the smallest powers; for the LCM take the largest powers.",
        "Ask: is it splitting into equal groups (GCF) or happening together again (LCM)?",
        "To count factors, add 1 to each exponent and multiply.",
        "Use parity rules to decide “must be true” questions."
      ],
      methodsZh: [
        "先用数字规则判断整除，再去做除法。",
        "用因数树做质因数分解，并用指数写出结果。",
        "求最大公因数取最小次幂，求最小公倍数取最大次幂。",
        "先问：是“分成相同的组”（最大公因数），还是“再次同时发生”（最小公倍数）？",
        "数因数个数时，把每个指数加 1 再相乘。",
        "用奇偶规律来判断“一定成立”的题。"
      ],
      exampleEn: String.raw`What is the smallest number greater than 1 that leaves a remainder of 1 when divided by 4, by 6 or by 9? Such a number is one more than a common multiple of 4, 6 and 9. The LCM of 4, 6 and 9 is 36, so the number is \(36+1=37\). Check: \(37=4\times9+1=6\times6+1=9\times4+1\).`,
      exampleZh: String.raw`求大于 1 的最小整数，使它分别除以 4、6、9 时余数都是 1。这样的数比 4、6、9 的公倍数多 1。4、6、9 的最小公倍数是 36，所以这个数是 \(36+1=37\)。检验：\(37=4\times9+1=6\times6+1=9\times4+1\)。`,
      checklistEn: [
        "Apply the divisibility rules for 2, 3, 4, 5, 6, 8, 9 and 10",
        "List the primes below 50 and prime-factorize a number",
        "Find a GCF and an LCM, including in word problems",
        "Count the factors of a number from its prime factorization",
        "Use even/odd rules and consecutive-integer patterns"
      ],
      checklistZh: [
        "能运用 2、3、4、5、6、8、9、10 的整除规则",
        "能列出 50 以内的质数，并对一个数做质因数分解",
        "能求最大公因数和最小公倍数，包括应用题",
        "能由质因数分解数出一个数的因数个数",
        "能运用奇偶规律和连续整数的规律"
      ]
    }
  ]
};
