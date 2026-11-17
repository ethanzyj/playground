// Original ISEE-style Mathematics Achievement practice: numbers & operations and algebraic concepts.
// 36 items: 12 Lower (ma-na-l01..l12), 12 Middle (ma-na-m01..m12), 12 Upper (ma-na-u01..u12).
export const PROBLEMS = [
  // ---------------------------------------------------------------- Lower Level
  {
    id: "ma-na-l01", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["integers-order-operations"],
    stem: String.raw`What is the value of \(7+3\times6-4\)?`,
    stemZh: String.raw`\(7+3\times6-4\) 的值是多少？`,
    choices: ["13", "21", "29", "56"], answer: 1,
    explanationEn: String.raw`Multiplication comes before addition and subtraction: \(3\times6=18\). Then work left to right: \(7+18-4=21\). Working strictly left to right gives \(((7+3)\times6)-4=56\), which ignores the order of operations.`,
    explanationZh: String.raw`先算乘法：\(3\times6=18\)；再从左到右算加减：\(7+18-4=21\)。如果不管运算顺序、严格从左到右计算，就会得到 \(((7+3)\times6)-4=56\)，这是错误的。`
  },
  {
    id: "ma-na-l02", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["estimation-number-sense", "integers-order-operations"],
    stem: "What is 48,762 rounded to the nearest thousand?",
    stemZh: "把 48,762 四舍五入到千位，结果是多少？",
    choices: ["48,000", "48,760", "48,800", "49,000"], answer: 3,
    explanationEn: "Look at the digit to the right of the thousands place, the hundreds digit 7. Since 7 is 5 or more, round the thousands digit up, so 48,762 rounds to 49,000. The choice 48,000 ignores the hundreds digit, 48,800 rounds to the nearest hundred, and 48,760 rounds to the nearest ten.",
    explanationZh: "看千位右边的数字，也就是百位上的 7。因为 7 大于或等于 5，所以千位要进一，48,762 四舍五入到千位是 49,000。48,000 是没有看百位就直接舍去；48,800 是四舍五入到百位；48,760 是四舍五入到十位。"
  },
  {
    id: "ma-na-l03", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["fractions-decimals"],
    stem: String.raw`What is the value of \(4.6+3.75\)?`,
    stemZh: String.raw`\(4.6+3.75\) 的值是多少？`,
    choices: ["4.21", "7.35", "7.81", "8.35"], answer: 3,
    explanationEn: String.raw`Line up the decimal points and write 4.6 as 4.60: \(4.60+3.75=8.35\). Adding 6 and 75 as if they were whole numbers gives 7.81, and forgetting to regroup the tenths gives 7.35.`,
    explanationZh: String.raw`把小数点对齐，并把 4.6 写成 4.60：\(4.60+3.75=8.35\)。如果把 6 和 75 当作整数直接相加，会得到 7.81；如果忘记向个位进位，会得到 7.35。`
  },
  {
    id: "ma-na-l04", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["fractions-decimals"],
    stem: String.raw`What is \(\frac{3}{4}\) of 24?`,
    stemZh: String.raw`24 的 \(\frac{3}{4}\) 是多少？`,
    choices: ["6", "18", "32", "72"], answer: 1,
    explanationEn: String.raw`Find one fourth of 24: \(24\div4=6\). Then take three of those parts: \(3\times6=18\). The choice 6 stops after finding one fourth, 72 forgets to divide by 4, and 32 divides by \(\frac{3}{4}\) instead of multiplying by it.`,
    explanationZh: String.raw`先求 24 的 \(\frac{1}{4}\)：\(24\div4=6\)；再取其中的 3 份：\(3\times6=18\)。选 6 是只求出一份（\(\frac{1}{4}\)）就停下了；72 是忘了除以 4；32 则是把“乘以 \(\frac{3}{4}\)”错当成了“除以 \(\frac{3}{4}\)”。`
  },
  {
    id: "ma-na-l05", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["expressions-equations"],
    stem: String.raw`What value of \(n\) makes \(4\times n+6=30\) true?`,
    stemZh: String.raw`\(n\) 取什么值时，\(4\times n+6=30\) 成立？`,
    choices: ["6", "9", "24", "36"], answer: 0,
    explanationEn: String.raw`Undo the addition first by subtracting 6 from both sides: \(4\times n=24\). Then divide both sides by 4 to get \(n=6\). Check: \(4\times6+6=30\). The choice 9 comes from adding 6 instead of subtracting it (\(36\div4=9\)), and 24 stops before dividing by 4.`,
    explanationZh: String.raw`先消去加法：等式两边同时减去 6，得 \(4\times n=24\)；再两边同时除以 4，得 \(n=6\)。检验：\(4\times6+6=30\)。选 9 是把 6 加上去而不是减去（\(36\div4=9\)）；选 24 是没有再除以 4。`
  },
  {
    id: "ma-na-l06", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["factors-multiples-primes", "word-problem-reasoning"],
    stem: "Mina has 24 red beads and 36 blue beads. She makes identical bracelets, using every bead and having none left over. What is the greatest number of bracelets she can make?",
    stemZh: "Mina 有 24 颗红珠子和 36 颗蓝珠子。她要把所有珠子都用完、一颗不剩，做成若干条完全相同的手链。她最多能做多少条手链？",
    choices: ["6", "12", "60", "72"], answer: 1,
    explanationEn: "The number of bracelets must divide both 24 and 36 evenly, so we need their greatest common factor. The common factors are 1, 2, 3, 4, 6 and 12, so the answer is 12 (each bracelet gets 2 red and 3 blue beads). Six bracelets would also work but is not the greatest, and 72 is the least common multiple, not the greatest common factor.",
    explanationZh: "手链的条数必须能同时整除 24 和 36，所以要求它们的最大公因数。公因数有 1、2、3、4、6、12，最大的是 12（每条手链有 2 颗红珠子和 3 颗蓝珠子）。做 6 条也可以，但不是最多；72 是最小公倍数，不是最大公因数。"
  },
  {
    id: "ma-na-l07", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["ratios-percents", "word-problem-reasoning"],
    stem: "The ratio of red marbles to blue marbles in a bag is 3 to 5. There are 15 red marbles. How many blue marbles are in the bag?",
    stemZh: "袋子里红色弹珠与蓝色弹珠的数量比是 3 比 5。红色弹珠有 15 颗。袋子里有多少颗蓝色弹珠？",
    choices: ["9", "17", "20", "25"], answer: 3,
    explanationEn: String.raw`Red is 3 parts, so one part is \(15\div3=5\) marbles. Blue is 5 parts, so there are \(5\times5=25\) blue marbles. Adding the difference \(5-3=2\) to 15 gives the tempting 17, but a ratio compares equal-sized parts, so you multiply instead of adding.`,
    explanationZh: String.raw`红色占 3 份，所以每份是 \(15\div3=5\) 颗。蓝色占 5 份，所以蓝色弹珠有 \(5\times5=25\) 颗。如果把 15 加上差 \(5-3=2\)，会得到容易选错的 17；但比表示的是每一份的大小相同，应该用乘法而不是加法。`
  },
  {
    id: "ma-na-l08", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["word-problem-reasoning", "integers-order-operations"],
    stem: "A farmer has 100 eggs. Each carton holds 12 eggs. What is the least number of cartons needed to hold all of the eggs?",
    stemZh: "一位农民有 100 个鸡蛋。每个蛋盒可以装 12 个鸡蛋。要装下所有鸡蛋，至少需要多少个蛋盒？",
    choices: ["4", "8", "9", "88"], answer: 2,
    explanationEn: String.raw`Dividing 100 by 12 gives a quotient of 8 and a remainder of 4, because \(8\times12=96\) and \(100-96=4\). Eight cartons hold only 96 eggs, so the 4 leftover eggs need one more carton, making 9. The choice 8 ignores the remainder, and 4 is the remainder itself, not the number of cartons.`,
    explanationZh: String.raw`100 除以 12，商是 8，余数是 4，因为 \(8\times12=96\)，\(100-96=4\)。8 个蛋盒只能装 96 个鸡蛋，剩下的 4 个鸡蛋还需要再用 1 个蛋盒，所以一共需要 9 个。选 8 是忽略了余数；4 只是余数，不是蛋盒的个数。`
  },
  {
    id: "ma-na-l09", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["patterns-sequences-functions", "expressions-equations"],
    stem: "The table shows the output for four inputs. Every output is found by multiplying the input by the same number and then adding the same number. What is the output when the input is 10?",
    stemZh: "下表给出了四个输入对应的输出。每个输出都是把输入乘以同一个数、再加上同一个数得到的。当输入是 10 时，输出是多少？",
    figure: {
      kind: "table",
      altEn: "A table with inputs 1, 2, 3 and 4 and outputs 5, 8, 11 and 14.",
      altZh: "表格：输入 1、2、3、4 对应的输出分别是 5、8、11、14。",
      headers: ["Input", "Output"], rows: [["1", "5"], ["2", "8"], ["3", "11"], ["4", "14"]]
    },
    choices: ["29", "30", "32", "44"], answer: 2,
    explanationEn: String.raw`When the input goes up by 1, the output goes up by 3, so the rule multiplies the input by 3. Since \(3\times1=3\) but the output is 5, the rule then adds 2. For input 10 the output is \(3\times10+2=32\). Choosing 30 forgets to add 2, and 29 is the output for input 9, not input 10.`,
    explanationZh: String.raw`输入每增加 1，输出增加 3，所以规则是先把输入乘以 3。因为 \(3\times1=3\)，而表中的输出是 5，所以还要再加 2。输入为 10 时，输出是 \(3\times10+2=32\)。选 30 是忘了加 2；29 是输入为 9 时的输出，而不是输入为 10 时的输出。`
  },
  {
    id: "ma-na-l10", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["fractions-decimals"],
    stem: String.raw`What is the value of \(3\frac{1}{4}-1\frac{5}{6}\)?`,
    stemZh: String.raw`\(3\frac{1}{4}-1\frac{5}{6}\) 的值是多少？`,
    choices: [String.raw`\(1\frac{5}{12}\)`, String.raw`\(2\frac{5}{12}\)`, String.raw`\(2\frac{7}{12}\)`, String.raw`\(5\frac{1}{12}\)`], answer: 0,
    explanationEn: String.raw`Use a common denominator of 12: \(3\frac{3}{12}-1\frac{10}{12}\). Since \(\frac{3}{12}\) is smaller than \(\frac{10}{12}\), regroup \(3\frac{3}{12}\) as \(2\frac{15}{12}\); then \(2\frac{15}{12}-1\frac{10}{12}=1\frac{5}{12}\). Subtracting the smaller fraction from the larger gives \(2\frac{7}{12}\), forgetting to lower the whole number gives \(2\frac{5}{12}\), and \(5\frac{1}{12}\) is what you get by adding.`,
    explanationZh: String.raw`先通分，取公分母 12：\(3\frac{3}{12}-1\frac{10}{12}\)。因为 \(\frac{3}{12}\) 比 \(\frac{10}{12}\) 小，要先退位：把 \(3\frac{3}{12}\) 写成 \(2\frac{15}{12}\)，于是 \(2\frac{15}{12}-1\frac{10}{12}=1\frac{5}{12}\)。用大的分数减小的分数会得到 \(2\frac{7}{12}\)；退位后忘记把整数部分减 1 会得到 \(2\frac{5}{12}\)；\(5\frac{1}{12}\) 则是把两数相加的结果。`
  },
  {
    id: "ma-na-l11", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["exponents-roots", "integers-order-operations"],
    stem: String.raw`What is the value of \(2^3+3^2\)?`,
    stemZh: String.raw`\(2^3+3^2\) 的值是多少？`,
    choices: ["17", "25", "31", "72"], answer: 0,
    explanationEn: String.raw`\(2^3=2\times2\times2=8\) and \(3^2=3\times3=9\), so \(2^3+3^2=8+9=17\). Multiplying the two powers (\(8\times9=72\)) uses the wrong operation, and swapping each base and exponent gives \(2^2+3^3=4+27=31\).`,
    explanationZh: String.raw`\(2^3=2\times2\times2=8\)，\(3^2=3\times3=9\)，所以 \(2^3+3^2=8+9=17\)。把两个幂相乘（\(8\times9=72\)）是用错了运算；把每一项的底数和指数弄反，则会得到 \(2^2+3^3=4+27=31\)。`
  },
  {
    id: "ma-na-l12", level: "lower", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["ratios-percents", "word-problem-reasoning"],
    stem: "A jacket costs $60. It is on sale for 25% off. Dev also has a coupon for $5 off the sale price. How much does Dev pay for the jacket?",
    stemZh: "一件夹克原价 60 美元，现在降价 25%。Dev 还有一张优惠券，可以在折后价的基础上再减 5 美元。Dev 买这件夹克要付多少钱？",
    choices: ["$15", "$30", "$40", "$45"], answer: 2,
    explanationEn: "25% of $60 is $15, so the sale price is $45. The coupon takes $5 off that price, so Dev pays $45 − $5 = $40. Choosing $45 forgets the coupon, $15 is only the discount, and $30 treats “25% off” as $25 off.",
    explanationZh: "60 美元的 25% 是 15 美元，所以折后价是 45 美元。优惠券再减 5 美元，Dev 要付 45 − 5 = 40 美元。选 45 美元是忘了用优惠券；15 美元只是折扣的金额；30 美元则是把“降价 25%”当成了“减 25 美元”。"
  },
  // ---------------------------------------------------------------- Middle Level
  {
    id: "ma-na-m01", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["integers-order-operations", "inequalities-absolute-value"],
    stem: String.raw`What is the value of \(|3-8|+|-2|\)?`,
    stemZh: String.raw`\(|3-8|+|-2|\) 的值是多少？`,
    choices: [String.raw`\(-7\)`, String.raw`\(-3\)`, String.raw`\(3\)`, String.raw`\(7\)`], answer: 3,
    explanationEn: String.raw`Absolute value is the distance from 0, so it is never negative: \(|3-8|=|-5|=5\) and \(|-2|=2\). The sum is \(5+2=7\). Dropping a bar gives the wrong choices: \(5+(-2)=3\) and \((-5)+2=-3\), and dropping both bars gives \((-5)+(-2)=-7\).`,
    explanationZh: String.raw`绝对值表示到 0 的距离，所以结果不会是负数：\(|3-8|=|-5|=5\)，\(|-2|=2\)。两者的和是 \(5+2=7\)。漏掉某个绝对值符号就会选错：\(5+(-2)=3\)，\((-5)+2=-3\)；两个都漏掉则得到 \((-5)+(-2)=-7\)。`
  },
  {
    id: "ma-na-m02", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["ratios-percents", "fractions-decimals"],
    stem: "Which of the following is equal to 6.5%?",
    stemZh: "下列哪个数与 6.5% 相等？",
    choices: ["0.065", "0.65", "6.5", "650"], answer: 0,
    explanationEn: String.raw`Percent means “per hundred,” so divide by 100: \(6.5\%=6.5\div100=0.065\), which moves the decimal point two places to the left. The choice 0.65 moves it only one place, 6.5 does not convert at all, and 650 multiplies by 100 instead of dividing.`,
    explanationZh: String.raw`百分数表示“每一百份中的几份”，所以要除以 100：\(6.5\%=6.5\div100=0.065\)，也就是小数点向左移动两位。0.65 只移动了一位；6.5 根本没有换算；650 是乘以 100 而不是除以 100。`
  },
  {
    id: "ma-na-m03", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["factors-multiples-primes"],
    stem: "Which of the following is the prime factorization of 84?",
    stemZh: "下列哪一个是 84 的质因数分解？",
    choices: [String.raw`\(2\times6\times7\)`, String.raw`\(2^2\times3\times7\)`, String.raw`\(2\times3^2\times7\)`, String.raw`\(4\times3\times7\)`], answer: 1,
    explanationEn: String.raw`A prime factorization uses only prime numbers, and the product must be 84. Here \(2^2\times3\times7=4\times3\times7=84\), and 2, 3 and 7 are all prime. The choices \(2\times6\times7\) and \(4\times3\times7\) also multiply to 84, but 6 and 4 are not prime, and \(2\times3^2\times7=126\).`,
    explanationZh: String.raw`质因数分解只能使用质数，而且乘积必须等于 84。\(2^2\times3\times7=4\times3\times7=84\)，其中 2、3、7 都是质数。\(2\times6\times7\) 和 \(4\times3\times7\) 的乘积虽然也是 84，但 6 和 4 是合数；而 \(2\times3^2\times7=126\)。`
  },
  {
    id: "ma-na-m04", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["inequalities-absolute-value"],
    stem: "Which inequality is shown by the graph on the number line?",
    stemZh: "数轴上的图表示下列哪一个不等式？",
    figure: {
      kind: "svg",
      altEn: "A number line labeled from 0 to 7. An open circle is at 3, and a thick ray extends from it to the right and ends with an arrowhead.",
      altZh: "标有 0 到 7 的数轴：在 3 处有一个空心圆圈，从圆圈向右有一条加粗的射线，末端带箭头。",
      svg: `<svg viewBox="0 0 340 90"><line x1="12" y1="45" x2="139" y2="45" stroke="currentColor" stroke-width="2"/><line x1="151" y1="45" x2="326" y2="45" stroke="currentColor" stroke-width="5"/><polygon points="334,45 322,38 322,52" fill="currentColor"/><polygon points="6,45 18,38 18,52" fill="currentColor"/><circle cx="145" cy="45" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M40 38V52M75 38V52M110 38V52M180 38V52M215 38V52M250 38V52M285 38V52" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="40" y="72">0</text><text x="75" y="72">1</text><text x="110" y="72">2</text><text x="145" y="72">3</text><text x="180" y="72">4</text><text x="215" y="72">5</text><text x="250" y="72">6</text><text x="285" y="72">7</text></g></svg>`
    },
    choices: [String.raw`\(x>3\)`, String.raw`\(x\ge3\)`, String.raw`\(x<3\)`, String.raw`\(x\le3\)`], answer: 0,
    explanationEn: String.raw`The open circle at 3 means 3 itself is not included, and the arrow points right, toward numbers greater than 3. So the graph shows \(x>3\). A closed circle would be needed for \(x\ge3\), and an arrow pointing left would show \(x<3\).`,
    explanationZh: String.raw`3 处是空心圆圈，表示不包括 3；箭头指向右边，表示比 3 大的数。所以图中表示的是 \(x>3\)。若要表示 \(x\ge3\)，需要画实心圆点；箭头指向左边则表示 \(x<3\)。`
  },
  {
    id: "ma-na-m05", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["expressions-equations"],
    stem: String.raw`If \(\frac{x}{4}-3=5\), what is the value of \(x\)?`,
    stemZh: String.raw`如果 \(\frac{x}{4}-3=5\)，那么 \(x\) 的值是多少？`,
    choices: ["8", "17", "20", "32"], answer: 3,
    explanationEn: String.raw`Undo the subtraction first by adding 3 to both sides: \(\frac{x}{4}=8\). Then undo the division by multiplying both sides by 4: \(x=32\). Check: \(\frac{32}{4}-3=5\). The choice 8 stops before multiplying by 4, while 17 and 20 come from multiplying 5 by 4 without first adding 3.`,
    explanationZh: String.raw`先把等式两边同时加 3，消去减法：\(\frac{x}{4}=8\)；再两边同时乘以 4，消去除法：\(x=32\)。检验：\(\frac{32}{4}-3=5\)。选 8 是算到 \(\frac{x}{4}=8\) 就停下了，没有再乘以 4；17 和 20 是没有先加 3，就直接把 5 乘以 4。`
  },
  {
    id: "ma-na-m06", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["exponents-roots", "integers-order-operations"],
    stem: String.raw`What is the value of \((-3)^2-2^3\)?`,
    stemZh: String.raw`\((-3)^2-2^3\) 的值是多少？`,
    choices: [String.raw`\(-17\)`, String.raw`\(1\)`, String.raw`\(3\)`, String.raw`\(17\)`], answer: 1,
    explanationEn: String.raw`Because the negative sign is inside the parentheses, \((-3)^2=(-3)(-3)=9\). Also \(2^3=2\times2\times2=8\), so \(9-8=1\). Treating \((-3)^2\) as \(-9\) gives the tempting \(-9-8=-17\), and computing \(2^3\) as \(2\times3=6\) gives 3.`,
    explanationZh: String.raw`因为负号在括号里面，所以 \((-3)^2=(-3)\times(-3)=9\)；又 \(2^3=2\times2\times2=8\)，所以 \(9-8=1\)。如果把 \((-3)^2\) 当成 \(-9\)，就会得到容易选错的 \(-9-8=-17\)；如果把 \(2^3\) 算成 \(2\times3=6\)，则会得到 3。`
  },
  {
    id: "ma-na-m07", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["patterns-sequences-functions", "exponents-roots"],
    stem: "A sequence begins 2, 6, 18, 54, … Each term after the first is 3 times the term before it. What is the 6th term?",
    stemZh: "一个数列的开头是 2，6，18，54，……从第二项起，每一项都是前一项的 3 倍。第 6 项是多少？",
    choices: ["36", "162", "486", "1,458"], answer: 2,
    explanationEn: String.raw`Keep multiplying by 3: 2, 6, 18, 54, 162, 486, so the 6th term is 486. Equivalently, \(2\times3^5=2\times243=486\). The number 162 is only the 5th term, and 1,458 is the 7th.`,
    explanationZh: String.raw`不断乘以 3：2，6，18，54，162，486，所以第 6 项是 486。也可以用 \(2\times3^5=2\times243=486\) 来算。162 只是第 5 项，1,458 则是第 7 项。`
  },
  {
    id: "ma-na-m08", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["factors-multiples-primes", "word-problem-reasoning"],
    stem: "Two lighthouses flash at the same moment at 8:00 p.m. One flashes every 12 seconds and the other flashes every 18 seconds. After how many seconds will they next flash at the same moment?",
    stemZh: "两座灯塔在晚上 8:00 同时闪光。一座灯塔每隔 12 秒闪一次，另一座每隔 18 秒闪一次。再过多少秒，它们会再次同时闪光？",
    choices: ["6", "30", "36", "216"], answer: 2,
    explanationEn: String.raw`The lights flash together again at the least common multiple of 12 and 18. The multiples of 18 are 18, 36, 54, …, and the first one that is also a multiple of 12 is 36 (\(12\times3=36\)). The product 216 is a common multiple but not the first one, 30 is the sum, and 6 is the greatest common factor.`,
    explanationZh: String.raw`两盏灯再次同时闪光的时刻，是 12 和 18 的最小公倍数。18 的倍数有 18、36、54……其中第一个同时也是 12 的倍数的是 36（\(12\times3=36\)）。乘积 216 虽然也是公倍数，但不是最早的那个；30 是两数之和；6 是最大公因数。`
  },
  {
    id: "ma-na-m09", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["ratios-percents", "word-problem-reasoning"],
    stem: "A jacket’s price is reduced by 20%. A week later, the new price is reduced by another 10%. What single percent reduction of the original price is equivalent to the two reductions together?",
    stemZh: "一件夹克的价格先降价 20%。一周后，又在新价格的基础上再降价 10%。这两次降价合起来，相当于在原价基础上一次性降价百分之几？",
    choices: ["28%", "30%", "70%", "72%"], answer: 0,
    explanationEn: String.raw`After the 20% reduction the price is 80% of the original, or 0.80. The second reduction leaves 90% of that price: \(0.80\times0.90=0.72\), so the final price is 72% of the original, which is a reduction of \(100\%-72\%=28\%\). Adding the two discounts to get 30% is tempting, but the 10% applies to a smaller price, and 72% is the final price rather than the reduction.`,
    explanationZh: String.raw`降价 20% 后，价格是原价的 80%，即 0.80。再降 10%，剩下这个价格的 90%：\(0.80\times0.90=0.72\)，所以最终价格是原价的 72%，相当于降价 \(100\%-72\%=28\%\)。直接把两次折扣相加得到 30% 很容易选错，因为第二次的 10% 是在更低的价格上计算的；72% 是最终价格占原价的比例，而不是降价的幅度。`
  },
  {
    id: "ma-na-m10", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["fractions-decimals", "ratios-percents", "word-problem-reasoning"],
    stem: String.raw`In a math club, \(\frac{3}{5}\) of the students are girls. There are 15 girls in the club. How many students are in the club?`,
    stemZh: String.raw`在一个数学社团中，\(\frac{3}{5}\) 的学生是女生。社团里有 15 名女生。这个社团一共有多少名学生？`,
    choices: ["9", "10", "25", "45"], answer: 2,
    explanationEn: String.raw`If \(\frac{3}{5}\) of the club is 15 students, then \(\frac{1}{5}\) of the club is \(15\div3=5\) students, and the whole club (\(\frac{5}{5}\)) is \(5\times5=25\) students. The same result comes from the proportion \(\frac{3}{5}=\frac{15}{n}\): \(3n=75\), so \(n=25\). The choice 9 multiplies 15 by \(\frac{3}{5}\) instead of finding the whole, and 10 is only the number of boys.`,
    explanationZh: String.raw`如果社团的 \(\frac{3}{5}\) 是 15 人，那么 \(\frac{1}{5}\) 就是 \(15\div3=5\) 人，整个社团（\(\frac{5}{5}\)）就是 \(5\times5=25\) 人。也可以列比例 \(\frac{3}{5}=\frac{15}{n}\)：\(3n=75\)，所以 \(n=25\)。选 9 是把 15 乘以 \(\frac{3}{5}\)，而不是去求整体；10 只是男生的人数。`
  },
  {
    id: "ma-na-m11", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["expressions-equations", "word-problem-reasoning"],
    stem: "The sum of three consecutive even integers is 78. What is the greatest of the three integers?",
    stemZh: "三个连续偶数的和是 78。这三个数中最大的是多少？",
    choices: ["24", "26", "27", "28"], answer: 3,
    explanationEn: String.raw`Let the integers be \(x\), \(x+2\) and \(x+4\). Then \(3x+6=78\), so \(3x=72\) and \(x=24\). The integers are 24, 26 and 28, so the greatest is 28. The value 26 is only the middle one, and 27 comes from using consecutive integers (25, 26, 27) instead of consecutive even integers.`,
    explanationZh: String.raw`设三个连续偶数为 \(x\)、\(x+2\)、\(x+4\)。则 \(3x+6=78\)，\(3x=72\)，\(x=24\)。这三个数是 24、26、28，最大的是 28。26 只是中间的那个数；27 则是把“连续偶数”当成了“连续整数”（25、26、27）。`
  },
  {
    id: "ma-na-m12", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["exponents-roots", "estimation-number-sense"],
    stem: String.raw`Between which two consecutive whole numbers does \(\sqrt{70}\) lie?`,
    stemZh: String.raw`\(\sqrt{70}\) 位于哪两个相邻的整数之间？`,
    choices: ["7 and 8", "8 and 9", "9 and 10", "34 and 35"], answer: 1,
    explanationEn: String.raw`Find the perfect squares on each side of 70: \(8^2=64\) and \(9^2=81\). Since \(64<70<81\), we have \(8<\sqrt{70}<9\). The pair 9 and 10 would be correct for numbers between 81 and 100, and 34 and 35 comes from wrongly dividing 70 by 2.`,
    explanationZh: String.raw`找出 70 两侧最接近的完全平方数：\(8^2=64\)，\(9^2=81\)。因为 \(64<70<81\)，所以 \(8<\sqrt{70}<9\)。9 和 10 之间对应的是 81 到 100 之间的数；34 和 35 则是把 70 错误地除以 2 得到的。`
  },
  // ---------------------------------------------------------------- Upper Level
  {
    id: "ma-na-u01", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["exponents-roots", "word-problem-reasoning", "estimation-number-sense"],
    stem: String.raw`Light travels about \(3\times10^{5}\) kilometers each second. The Sun is about \(1.5\times10^{8}\) kilometers from Earth. About how many seconds does sunlight take to reach Earth?`,
    stemZh: String.raw`光每秒大约传播 \(3\times10^{5}\) 千米。太阳距离地球大约 \(1.5\times10^{8}\) 千米。阳光大约需要多少秒才能到达地球？`,
    choices: [String.raw`\(50\)`, String.raw`\(500\)`, String.raw`\(5000\)`, String.raw`\(4.5\times10^{13}\)`], answer: 1,
    explanationEn: String.raw`Time equals distance divided by speed: \(\frac{1.5\times10^{8}}{3\times10^{5}}=\frac{1.5}{3}\times10^{8-5}=0.5\times10^{3}=500\) seconds. Multiplying the two numbers instead gives \(4.5\times10^{13}\), and 5000 and 50 are off by a factor of 10 from mishandling the decimal in \(0.5\times10^{3}\).`,
    explanationZh: String.raw`时间等于距离除以速度：\(\frac{1.5\times10^{8}}{3\times10^{5}}=\frac{1.5}{3}\times10^{8-5}=0.5\times10^{3}=500\)（秒）。如果把两个数相乘，会得到 \(4.5\times10^{13}\)；5000 和 50 则是处理 \(0.5\times10^{3}\) 里的小数点时出错，结果差了 10 倍。`
  },
  {
    id: "ma-na-u02", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["exponents-roots"],
    stem: String.raw`Which expression is equal to \(\sqrt{72}\)?`,
    stemZh: String.raw`下列哪个式子与 \(\sqrt{72}\) 相等？`,
    choices: [String.raw`\(6\sqrt{2}\)`, String.raw`\(12\)`, String.raw`\(18\sqrt{2}\)`, String.raw`\(36\sqrt{2}\)`], answer: 0,
    explanationEn: String.raw`Factor out the largest perfect square: \(72=36\times2\), so \(\sqrt{72}=\sqrt{36}\times\sqrt{2}=6\sqrt{2}\). The choice \(36\sqrt{2}\) forgets to take the square root of 36, \(18\sqrt{2}\) halves 36 instead, and 12 drops the radical sign from \(\sqrt{2}\).`,
    explanationZh: String.raw`分解出最大的完全平方数：\(72=36\times2\)，所以 \(\sqrt{72}=\sqrt{36}\times\sqrt{2}=6\sqrt{2}\)。\(36\sqrt{2}\) 是没有对 36 开平方；\(18\sqrt{2}\) 是把 36 减半而不是开平方；12 则是把 \(\sqrt{2}\) 的根号弄丢了。`
  },
  {
    id: "ma-na-u03", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["exponents-roots", "expressions-equations"],
    stem: String.raw`For \(a\neq0\), which expression is equivalent to \(\frac{(3a^2)^3}{9a^4}\)?`,
    stemZh: String.raw`当 \(a\neq0\) 时，下列哪个式子与 \(\frac{(3a^2)^3}{9a^4}\) 相等？`,
    choices: [String.raw`\(\frac{a^2}{3}\)`, String.raw`\(18a^2\)`, String.raw`\(3a^{10}\)`, String.raw`\(3a^2\)`], answer: 3,
    explanationEn: String.raw`Cube everything inside the parentheses: \((3a^2)^3=27a^6\). Then divide: \(\frac{27a^6}{9a^4}=3a^{6-4}=3a^2\). Forgetting to cube the 3 gives \(\frac{a^2}{3}\), subtracting the coefficients gives \(18a^2\), and adding the exponents instead of subtracting them gives \(3a^{10}\).`,
    explanationZh: String.raw`先把括号里的每个因式都做三次方：\((3a^2)^3=27a^6\)。再相除：\(\frac{27a^6}{9a^4}=3a^{6-4}=3a^2\)。忘了对 3 做三次方，会得到 \(\frac{a^2}{3}\)；把系数相减，会得到 \(18a^2\)；把指数相加而不是相减，则会得到 \(3a^{10}\)。`
  },
  {
    id: "ma-na-u04", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["expressions-equations"],
    stem: String.raw`What is the solution of \(3(2x-5)=4x+9\)?`,
    stemZh: String.raw`方程 \(3(2x-5)=4x+9\) 的解是多少？`,
    choices: [String.raw`\(-3\)`, String.raw`\(7\)`, String.raw`\(12\)`, String.raw`\(24\)`], answer: 2,
    explanationEn: String.raw`Distribute: \(6x-15=4x+9\). Subtract \(4x\) and add 15 on both sides to get \(2x=24\), so \(x=12\). Check: \(3(24-5)=57\) and \(4(12)+9=57\). Multiplying the 3 by only the \(2x\) gives \(6x-5=4x+9\) and the wrong answer 7, and stopping at \(2x=24\) gives 24.`,
    explanationZh: String.raw`先去括号：\(6x-15=4x+9\)。两边同时减 \(4x\)、再同时加 15，得 \(2x=24\)，所以 \(x=12\)。检验：\(3(24-5)=57\)，\(4(12)+9=57\)。如果只把 3 乘到 \(2x\) 上，会得到 \(6x-5=4x+9\)，从而得出错误答案 7；算到 \(2x=24\) 就停下则会选 24。`
  },
  {
    id: "ma-na-u05", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["inequalities-absolute-value"],
    stem: String.raw`Which of the following is the solution set of \(-3x+4>13\)?`,
    stemZh: String.raw`下列哪一个是 \(-3x+4>13\) 的解集？`,
    choices: [String.raw`\(x>-3\)`, String.raw`\(x>3\)`, String.raw`\(x<3\)`, String.raw`\(x<-3\)`], answer: 3,
    explanationEn: String.raw`Subtract 4 from both sides: \(-3x>9\). Now divide both sides by \(-3\) and reverse the inequality sign, because dividing by a negative number flips the order: \(x<-3\). Check with \(x=-4\): \(-3(-4)+4=16>13\). Forgetting to reverse the sign gives \(x>-3\).`,
    explanationZh: String.raw`两边同时减 4：\(-3x>9\)。然后两边同时除以 \(-3\)；因为除以负数会使大小关系反过来，所以不等号要反向：\(x<-3\)。用 \(x=-4\) 检验：\(-3(-4)+4=16>13\)，成立。如果忘了改变不等号的方向，就会得到 \(x>-3\)。`
  },
  {
    id: "ma-na-u06", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "medium",
    conceptIds: ["inequalities-absolute-value", "expressions-equations"],
    stem: String.raw`What is the sum of all values of \(x\) that satisfy \(|2x-3|=7\)?`,
    stemZh: String.raw`满足 \(|2x-3|=7\) 的所有 \(x\) 的值之和是多少？`,
    choices: [String.raw`\(-2\)`, String.raw`\(3\)`, String.raw`\(5\)`, String.raw`\(7\)`], answer: 1,
    explanationEn: String.raw`The expression inside the bars can equal 7 or \(-7\). Case 1, \(2x-3=7\), gives \(x=5\); case 2, \(2x-3=-7\), gives \(2x=-4\), so \(x=-2\). The sum is \(5+(-2)=3\). The choice 5 uses only the first case, and 7 treats the second solution as \(+2\).`,
    explanationZh: String.raw`绝对值符号里的式子可以等于 7，也可以等于 \(-7\)。情况一，\(2x-3=7\)，得 \(x=5\)；情况二，\(2x-3=-7\)，得 \(2x=-4\)，\(x=-2\)。两个解的和是 \(5+(-2)=3\)。选 5 是只考虑了第一种情况；选 7 是把第二个解 \(-2\) 当成了 \(+2\)。`
  },
  {
    id: "ma-na-u07", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["linear-quadratic"],
    stem: "The graph shows a line. Each grid square is 1 unit wide and 1 unit tall. Which equation represents the line?",
    stemZh: "图中画出了一条直线，每个小方格的宽和高都是 1 个单位。下列哪个方程表示这条直线？",
    figure: {
      kind: "svg",
      altEn: "A coordinate grid with a straight line that rises from left to right. Two points on the line are marked: (0, −2) on the y-axis and (2, 2). Each grid square is 1 unit wide and 1 unit tall.",
      altZh: "坐标网格上有一条从左向右上升的直线，直线上标出了两个点：y 轴上的 (0, −2) 和 (2, 2)。每个小方格的宽和高都是 1 个单位。",
      svg: `<svg viewBox="0 0 210 230"><path d="M20 24V200M42 24V200M64 24V200M86 24V200M108 24V200M130 24V200M152 24V200M174 24V200M20 24H174M20 46H174M20 68H174M20 90H174M20 112H174M20 134H174M20 156H174M20 178H174M20 200H174" fill="none" stroke="currentColor" stroke-opacity="0.2" stroke-width="1"/><path d="M12 134H186M64 208V16" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="194,134 184,129 184,139" fill="currentColor"/><polygon points="64,8 59,18 69,18" fill="currentColor"/><line x1="53" y1="200" x2="141" y2="24" stroke="currentColor" stroke-width="2"/><circle cx="64" cy="178" r="4" fill="currentColor"/><circle cx="108" cy="90" r="4" fill="currentColor"/><g fill="currentColor" font-size="14"><text x="198" y="139">x</text><text x="72" y="16">y</text><text x="72" y="196">(0, −2)</text><text x="116" y="94">(2, 2)</text></g></svg>`
    },
    choices: [String.raw`\(y=-2x-2\)`, String.raw`\(y=\frac{1}{2}x-2\)`, String.raw`\(y=2x+2\)`, String.raw`\(y=2x-2\)`], answer: 3,
    explanationEn: String.raw`The line crosses the y-axis at \((0,-2)\), so the y-intercept is \(-2\). From \((0,-2)\) to \((2,2)\) the line rises 4 while running 2, so the slope is \(\frac{4}{2}=2\), and the equation is \(y=2x-2\). The choice \(y=\frac{1}{2}x-2\) turns the slope upside down, \(y=-2x-2\) has the wrong sign for the slope, and \(y=2x+2\) has the wrong y-intercept.`,
    explanationZh: String.raw`直线与 y 轴相交于 \((0,-2)\)，所以 y 轴截距是 \(-2\)。从 \((0,-2)\) 到 \((2,2)\)，直线上升 4、水平前进 2，所以斜率是 \(\frac{4}{2}=2\)，方程是 \(y=2x-2\)。\(y=\frac{1}{2}x-2\) 把斜率上下颠倒了，\(y=-2x-2\) 把斜率的正负号弄错了，\(y=2x+2\) 的 y 轴截距不对。`
  },
  {
    id: "ma-na-u08", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["linear-quadratic", "word-problem-reasoning"],
    stem: "For a school concert, 30 tickets were sold. Adult tickets cost $7 each and student tickets cost $4 each. The total sales were $180. How much money came from adult tickets?",
    stemZh: "一场学校音乐会共售出 30 张票。成人票每张 7 美元，学生票每张 4 美元，总销售额为 180 美元。成人票一共收入多少钱？",
    choices: ["$40", "$105", "$140", "$210"], answer: 2,
    explanationEn: String.raw`Let \(a\) be the number of adult tickets and \(s\) the number of student tickets. Then \(a+s=30\) and \(7a+4s=180\). Substituting \(s=30-a\) gives \(7a+120-4a=180\), so \(3a=60\) and \(a=20\), and adult tickets brought in \(20\times7=140\) dollars. The choice $40 is the money from the 10 student tickets, $105 assumes 15 adult and 15 student tickets, and $210 prices all 30 tickets as adult tickets.`,
    explanationZh: String.raw`设成人票 \(a\) 张，学生票 \(s\) 张，则 \(a+s=30\)，\(7a+4s=180\)。把 \(s=30-a\) 代入：\(7a+120-4a=180\)，所以 \(3a=60\)，\(a=20\)，成人票的收入是 \(20\times7=140\) 美元。40 美元是 10 张学生票的收入；105 美元是假设成人票和学生票各 15 张得到的；210 美元则是把 30 张票全都按成人票计算。`
  },
  {
    id: "ma-na-u09", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["linear-quadratic"],
    stem: String.raw`Which of the following is the factored form of \(x^2-5x-14\)?`,
    stemZh: String.raw`下列哪一个是 \(x^2-5x-14\) 的因式分解形式？`,
    choices: [String.raw`\((x-7)(x+2)\)`, String.raw`\((x+7)(x-2)\)`, String.raw`\((x-7)(x-2)\)`, String.raw`\((x+7)(x+2)\)`], answer: 0,
    explanationEn: String.raw`Look for two numbers whose product is \(-14\) and whose sum is \(-5\). They are \(-7\) and \(2\), so \(x^2-5x-14=(x-7)(x+2)\). Check by multiplying: \(x^2+2x-7x-14=x^2-5x-14\). The choice \((x+7)(x-2)\) has the signs swapped and expands to \(x^2+5x-14\).`,
    explanationZh: String.raw`找两个数，使它们的积是 \(-14\)、和是 \(-5\)。这两个数是 \(-7\) 和 \(2\)，所以 \(x^2-5x-14=(x-7)(x+2)\)。检验：\(x^2+2x-7x-14=x^2-5x-14\)。选项 \((x+7)(x-2)\) 把符号弄反了，展开后是 \(x^2+5x-14\)。`
  },
  {
    id: "ma-na-u10", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["linear-quadratic", "word-problem-reasoning"],
    stem: "The length of a rectangle is 3 meters more than its width. The area of the rectangle is 40 square meters. What is the width of the rectangle, in meters?",
    stemZh: "一个长方形的长比宽多 3 米，面积是 40 平方米。这个长方形的宽是多少米？",
    choices: [String.raw`\(-8\)`, String.raw`\(5\)`, String.raw`\(8\)`, String.raw`\(11\)`], answer: 1,
    explanationEn: String.raw`Let the width be \(w\), so the length is \(w+3\) and \(w(w+3)=40\). Rewrite as \(w^2+3w-40=0\) and factor: \((w+8)(w-5)=0\), so \(w=-8\) or \(w=5\). A width cannot be negative, so the width is 5 meters (and the length is 8). The choice 8 is the length, not the width, and \(-8\) is the root that makes no sense for a width.`,
    explanationZh: String.raw`设宽为 \(w\)，则长为 \(w+3\)，\(w(w+3)=40\)。整理为 \(w^2+3w-40=0\)，因式分解：\((w+8)(w-5)=0\)，所以 \(w=-8\) 或 \(w=5\)。宽不可能是负数，因此宽是 5 米（长是 8 米）。选 8 是长而不是宽；\(-8\) 是不符合实际意义的根。`
  },
  {
    id: "ma-na-u11", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "easy",
    conceptIds: ["patterns-sequences-functions", "integers-order-operations"],
    stem: String.raw`If \(f(x)=2x^2-3x+1\), what is the value of \(f(-2)\)?`,
    stemZh: String.raw`如果 \(f(x)=2x^2-3x+1\)，那么 \(f(-2)\) 的值是多少？`,
    choices: [String.raw`\(-1\)`, String.raw`\(3\)`, String.raw`\(15\)`, String.raw`\(23\)`], answer: 2,
    explanationEn: String.raw`Substitute \(x=-2\): \(f(-2)=2(-2)^2-3(-2)+1\). Since \((-2)^2=4\), this is \(2(4)+6+1=15\). Treating \(-3(-2)\) as \(-6\) gives the tempting 3, treating \((-2)^2\) as \(-4\) gives \(-1\), and squaring \(2x\) instead of just \(x\) gives 23.`,
    explanationZh: String.raw`把 \(x=-2\) 代入：\(f(-2)=2(-2)^2-3(-2)+1\)。因为 \((-2)^2=4\)，所以结果是 \(2(4)+6+1=15\)。如果把 \(-3(-2)\) 算成 \(-6\)，会得到 3；如果把 \((-2)^2\) 算成 \(-4\)，会得到 \(-1\)；如果把 \(2x\) 整体平方（而不是只平方 \(x\)），则会得到 23。`
  },
  {
    id: "ma-na-u12", level: "upper", section: "mathematics", type: "math-achievement", difficulty: "hard",
    conceptIds: ["patterns-sequences-functions", "word-problem-reasoning"],
    stem: "In a lecture hall, the 4th row has 17 seats and the 10th row has 41 seats. The number of seats increases by the same amount from each row to the next. How many seats are in the 20th row?",
    stemZh: "在一个阶梯教室里，第 4 排有 17 个座位，第 10 排有 41 个座位。从每一排到下一排，座位数增加的数量都相同。第 20 排有多少个座位？",
    choices: ["81", "82", "85", "97"], answer: 0,
    explanationEn: String.raw`From the 4th row to the 10th row there are 6 steps, and the seats increase by \(41-17=24\), so each row adds \(24\div6=4\) seats. The 20th row is 10 rows after the 10th, so it has \(41+10\times4=81\) seats. Doubling 41 to get 82 wrongly assumes the number of seats is proportional to the row number, and 85 and 97 miscount the number of steps.`,
    explanationZh: String.raw`从第 4 排到第 10 排有 6 个间隔，座位数增加了 \(41-17=24\)，所以每排增加 \(24\div6=4\) 个座位。第 20 排比第 10 排多 10 排，座位数是 \(41+10\times4=81\)。把 41 直接翻倍得到 82，是错误地认为座位数与排数成正比；85 和 97 则是数错了间隔的个数。`
  }
];
