export const TOPIC = {
  id: "data-probability",
  zh: "数据分析与概率",
  en: "Data Analysis & Probability",
  officialAlignment: "Data Analysis & Probability strand of Quantitative Reasoning and Mathematics Achievement: statistics, graphs, probability and counting.",
  officialAlignmentZh: "数量推理与数学能力中的“数据分析与概率”内容：统计量、统计图表、概率与计数。",
  concepts: [
    {
      id: "mean-median-mode",
      zh: "平均数、中位数、众数与极差",
      en: "Mean, Median, Mode & Range",
      detailEn: "Mean, median (odd and even counts), mode and range; the effect of adding or removing a value; a missing value for a target mean; combined groups and outliers.",
      detailZh: "平均数、中位数（数据个数为奇数或偶数）、众数与极差；增加或去掉一个数据的影响；已知目标平均数求缺少的数据；合并两组数据与离群值。",
      explanationEn: "Four numbers summarize a data set. The mean is the “fair-share” average, the median is the middle value once the data are in order, the mode is the value that appears most often, and the range is the greatest value minus the least, which measures spread. Lower Level questions ask you to calculate them from a short list or a table. Middle and Upper Level questions often work backward (what score is needed to reach a target mean?), combine groups, or ask how a new value or an outlier changes each measure, sometimes as a comparison that needs almost no arithmetic. Two habits solve most problems: write the data in order first, and think in totals, because mean times count equals sum.",
      explanationZh: "四个数可以概括一组数据：平均数是“平均分配”的结果，中位数是把数据按大小排列后位于中间的数，众数是出现次数最多的数，极差是最大值减去最小值，反映数据的分散程度。初级题通常让你根据一列数或一张表直接计算；中级和高级常常反过来问（要达到目标平均数，下一次需要考多少分），或者合并两组数据，或者问新增的数据、离群值会如何影响各个统计量，有时只需比较，几乎不用计算。两个习惯能解决大部分问题：先把数据按大小排好；再用“总和”来思考，因为平均数乘以个数就等于总和。",
      keyPoints: [
        {
          titleEn: "Mean: the fair-share average",
          titleZh: "平均数：平均分配的结果",
          formula: String.raw`\text{mean}=\frac{\text{sum of the values}}{\text{number of values}}`,
          explanationEn: "To find the mean, add all the values and divide by how many values there are. The mean is what every value would be if the total were shared equally. It always lies between the least and the greatest values, and it does not have to be one of the values. Count the values carefully, including repeats and zeros.",
          explanationZh: "求平均数时，把所有数据相加，再除以数据的个数。平均数就是把总数平均分给每个数据后，每个数据所得的数。它一定落在最小值与最大值之间，但不一定是数据中的某一个。数个数时要小心，重复出现的数和 0 都要算进去。",
          exampleEn: String.raw`For \(4,\ 7,\ 9,\ 12\) the sum is \(32\), so the mean is \(32\div4=8\).`,
          exampleZh: String.raw`对于 \(4,\ 7,\ 9,\ 12\)，总和是 \(32\)，所以平均数是 \(32\div4=8\)。`
        },
        {
          titleEn: "Median and mode",
          titleZh: "中位数与众数",
          formula: String.raw`\text{median position}=\frac{n+1}{2}`,
          explanationEn: String.raw`Put the data in order from least to greatest first. With an odd number of values the median is the middle one. With an even number it is the mean of the two middle values, which is why the position \(\frac{n+1}{2}\) can end in .5. The mode is the value that appears most often; a set can have two modes, or none if every value appears once. Do not confuse the mode (a value) with its frequency (how many times it appears).`,
          explanationZh: String.raw`先把数据按从小到大的顺序排好。数据个数是奇数时，中位数就是正中间的那个数；个数是偶数时，中位数是中间两个数的平均数，所以位置 \(\frac{n+1}{2}\) 可能出现小数 .5。众数是出现次数最多的数；一组数据可以有两个众数，如果每个数只出现一次，则没有众数。不要把众数（一个数值）和它出现的次数（频数）弄混。`,
          stepsEn: [
            "Write the values in order from least to greatest.",
            String.raw`Count the values and call the count \(n\).`,
            String.raw`If \(n\) is odd, the median is the value in position \(\frac{n+1}{2}\).`,
            String.raw`If \(n\) is even, the median is the mean of the two middle values.`,
            "For the mode, find the value that appears most often."
          ],
          stepsZh: [
            "把数据按从小到大的顺序排好。",
            String.raw`数一数个数，记为 \(n\)。`,
            String.raw`\(n\) 为奇数时，中位数是第 \(\frac{n+1}{2}\) 个数。`,
            String.raw`\(n\) 为偶数时，中位数是中间两个数的平均数。`,
            "求众数时，找出出现次数最多的数。"
          ],
          exampleEn: String.raw`For \(3,\ 7,\ 7,\ 9,\ 15\) the median is \(7\) and the mode is \(7\). For \(2,\ 5,\ 8,\ 11\) the median is \(\frac{5+8}{2}=6.5\) and there is no mode.`,
          exampleZh: String.raw`\(3,\ 7,\ 7,\ 9,\ 15\) 的中位数是 \(7\)，众数是 \(7\)。\(2,\ 5,\ 8,\ 11\) 的中位数是 \(\frac{5+8}{2}=6.5\)，没有众数。`
        },
        {
          titleEn: "Range, and choosing the best measure",
          titleZh: "极差，以及选择合适的统计量",
          formula: String.raw`\text{range}=\text{greatest value}-\text{least value}`,
          explanationEn: "The range is a single number: how far the data stretch from the least to the greatest value. Write “range 16,” not “from 4 to 20.” The mean, median and mode describe the center of the data, while the range describes the spread. The median describes a typical value better when a few extreme values pull the mean away, and the mode is the right choice for “most common,” such as the shoe size a store should stock most.",
          explanationZh: "极差是一个数：数据从最小值到最大值跨越了多远。要写成“极差是 16”，而不是“从 4 到 20”。平均数、中位数和众数描述数据的中心位置，极差描述数据的分散程度。当少数极端数据把平均数拉偏时，中位数更能代表典型数值；而要回答“最常见的是什么”时，应当用众数，例如商店应该多进哪个尺码的鞋。",
          exampleEn: String.raw`For \(12,\ 4,\ 9,\ 20\) the range is \(20-4=16\). For \(5,\ 6,\ 6,\ 7,\ 76\) the median \(6\) describes a typical value much better than the mean \(20\).`,
          exampleZh: String.raw`\(12,\ 4,\ 9,\ 20\) 的极差是 \(20-4=16\)。对于 \(5,\ 6,\ 6,\ 7,\ 76\)，中位数 \(6\) 比平均数 \(20\) 更能代表典型的数值。`
        },
        {
          titleEn: "Finding a missing value for a target mean",
          titleZh: "已知目标平均数，求缺少的数据",
          formula: String.raw`\text{sum}=\text{mean}\times n`,
          explanationEn: "Turn the mean into a total. Multiply the target mean by the number of values to get the total that is needed, then subtract the sum of the values you already have; the difference is the missing value. This avoids trial and error and answers questions such as “What score is needed on the next test?” It also shows that a new score above the current mean raises the average and one below it lowers the average.",
          explanationZh: "把平均数变成总和：用目标平均数乘以数据的总个数，得到需要的总和，再减去已有数据的和，差就是缺少的数据。这样就不用反复试数，能直接回答“下一次考试需要考多少分”这类问题。它还说明：新分数高于目前的平均数时，平均数会上升；低于目前的平均数时，平均数会下降。",
          stepsEn: [
            "Find the total needed: the target mean times the final number of values.",
            "Add up the values you already have.",
            "Subtract: the total needed minus the current sum is the missing value.",
            "Check by adding the missing value and recomputing the mean."
          ],
          stepsZh: [
            "求需要的总和：目标平均数乘以最终的数据个数。",
            "把已有的数据加起来。",
            "相减：需要的总和减去已有的和，就是缺少的数据。",
            "检验：加上这个数据后重新计算平均数。"
          ],
          exampleEn: String.raw`Three test scores are \(82,\ 90,\ 76\), and the goal is a mean of \(85\) over four tests. The total needed is \(85\times4=340\) and the current sum is \(82+90+76=248\), so the fourth score must be \(340-248=92\).`,
          exampleZh: String.raw`三次考试的分数是 \(82,\ 90,\ 76\)，目标是四次考试的平均分为 \(85\)。需要的总分是 \(85\times4=340\)，已有的总分是 \(82+90+76=248\)，所以第四次要考 \(340-248=92\) 分。`
        },
        {
          titleEn: "Combining groups: weighted means",
          titleZh: "合并两组数据：加权平均",
          formula: String.raw`\text{combined mean}=\frac{n_{1}m_{1}+n_{2}m_{2}}{n_{1}+n_{2}}`,
          explanationEn: "When two groups have different sizes, the combined mean is not the average of the two means. Turn each group’s mean into a total (size times mean), add the totals, and divide by the combined size. The result lies closer to the mean of the larger group. The same idea handles weighted grades, in which tests count for more than homework.",
          explanationZh: "两组数据的个数不同时，合并后的平均数并不是两个平均数的平均。要先把每组的平均数变成总和（个数乘以平均数），把两个总和相加，再除以合并后的总个数。结果会更靠近个数较多那一组的平均数。同样的思路也适用于加权成绩，比如考试成绩占的比重比作业大。",
          exampleEn: String.raw`Class A has \(20\) students with mean \(80\) and class B has \(30\) students with mean \(90\). The totals are \(1600\) and \(2700\), so the combined mean is \(\frac{4300}{50}=86\), not \(85\).`,
          exampleZh: String.raw`A 班有 \(20\) 名学生，平均分 \(80\)；B 班有 \(30\) 名学生，平均分 \(90\)。两班的总分分别是 \(1600\) 和 \(2700\)，所以合并后的平均分是 \(\frac{4300}{50}=86\)，而不是 \(85\)。`
        },
        {
          titleEn: "How added values and outliers change the measures",
          titleZh: "增加数据与离群值对统计量的影响",
          explanationEn: "An outlier is a value far away from the rest. Because the mean uses every value, one outlier can move it a lot, while the median barely changes and the mode may not change at all. Adding a value above the current mean raises the mean, adding one below it lowers the mean, and adding a value equal to the mean leaves it unchanged. Removing a value above the mean lowers the mean, and removing one below the mean raises it. The range changes only if the new value becomes the new least or greatest. Many questions ask only for the direction of a change, so reason first and calculate only if you must.",
          explanationZh: "离群值是与其他数据相差很远的数。因为平均数用到了每一个数据，一个离群值就可能使它变化很大，而中位数几乎不变，众数可能完全不变。加入一个高于当前平均数的数据，平均数上升；加入一个低于平均数的数据，平均数下降；加入一个等于平均数的数据，平均数不变。去掉一个高于平均数的数据，平均数下降；去掉一个低于平均数的数据，平均数上升。只有当新数据成为新的最小值或最大值时，极差才会改变。很多题目只问变化的方向，所以先推理，必要时再计算。",
          exampleEn: String.raw`The data \(5,\ 6,\ 7,\ 8,\ 9\) have mean \(7\) and median \(7\). Adding the outlier \(31\) makes the sum \(66\), so the new mean is \(\frac{66}{6}=11\), while the median only moves to \(\frac{7+8}{2}=7.5\).`,
          exampleZh: String.raw`数据 \(5,\ 6,\ 7,\ 8,\ 9\) 的平均数是 \(7\)，中位数是 \(7\)。加入离群值 \(31\) 后，总和变为 \(66\)，新的平均数是 \(\frac{66}{6}=11\)，而中位数只变成 \(\frac{7+8}{2}=7.5\)。`
        }
      ],
      methodsEn: [
        "Write the data in order before finding the median, mode or range",
        "Turn a mean into a total: the sum equals the mean times the count",
        "For a target mean, find the total needed and subtract what you already have",
        "Weight group means by group size; never average two means directly",
        "Estimate first: the mean must fall between the least and greatest values",
        "Predict the effect of an extreme value before calculating"
      ],
      methodsZh: [
        "求中位数、众数或极差之前，先把数据排好序",
        "把平均数变成总和：总和等于平均数乘以个数",
        "已知目标平均数时，先求需要的总和，再减去已有的和",
        "合并两组数据要按个数加权，不能直接把两个平均数再求平均",
        "先估算：平均数一定在最小值与最大值之间",
        "计算之前先判断极端值会带来什么影响"
      ],
      exampleEn: String.raw`Five quiz scores are \(70,\ 80,\ 80,\ 90,\ 100\): the mean is \(\frac{420}{5}=84\), the median is \(80\), the mode is \(80\) and the range is \(30\). A sixth score of \(90\) raises the total to \(510\) and the mean to \(\frac{510}{6}=85\).`,
      exampleZh: String.raw`五次小测验的分数是 \(70,\ 80,\ 80,\ 90,\ 100\)：平均数是 \(\frac{420}{5}=84\)，中位数是 \(80\)，众数是 \(80\)，极差是 \(30\)。第六次考了 \(90\) 分，总分升到 \(510\)，平均数升到 \(\frac{510}{6}=85\)。`,
      checklistEn: [
        "Find the mean, median, mode and range of a small data set",
        "Find the median when there is an even number of values",
        "Find the score needed to reach a target mean",
        "Combine two group means correctly",
        "Say which measure an outlier changes the most"
      ],
      checklistZh: [
        "能求一小组数据的平均数、中位数、众数和极差",
        "数据个数为偶数时，能求中位数",
        "能求达到目标平均数所需的分数",
        "能正确合并两组数据的平均数",
        "能说出离群值对哪个统计量影响最大"
      ]
    },
    {
      id: "graphs-tables",
      zh: "图表与数据解读",
      en: "Graphs, Tables & Data Interpretation",
      detailEn: "Bar, line and circle graphs, pictographs, histograms, scatter plots, stem-and-leaf plots and frequency tables; reading scales and keys; computing from graphs; misleading scales.",
      detailZh: "条形图、折线图、扇形图、象形统计图、直方图、散点图、茎叶图与频数表；看懂刻度和图例；由图表计算；识别有误导性的刻度。",
      explanationEn: "ISEE questions present data in tables and graphs; in practice problems they appear as a figure next to the question, such as a table, a bar or line graph, a circle graph or a labeled drawing. The first job is to read the frame: the title, the axis labels and units, the scale and the key. The second job is to answer exactly what is asked, which may be a single value, a difference, a total, a fraction of the whole or a trend. Lower Level uses pictographs, bar graphs, tables and simple line graphs. Middle and Upper Level add circle graphs with percents, histograms, scatter plots, stem-and-leaf plots, and questions about rates of change or misleading displays.",
      explanationZh: "ISEE 把数据放在表格和统计图里；在练习题中，它们会作为一幅图出现在题目旁边，例如表格、条形图或折线图、扇形图，或带标注的示意图。第一步是读懂“框架”：标题、坐标轴名称和单位、刻度以及图例。第二步是准确回答题目所问的内容，可能是某个数值、差、总数、占整体的几分之几，也可能是变化趋势。初级常用象形统计图、条形图、表格和简单的折线图；中级和高级增加带百分数的扇形图、直方图、散点图、茎叶图，以及有关变化率和误导性图表的问题。",
      keyPoints: [
        {
          titleEn: "Read the title, labels, scale and key first",
          titleZh: "先读标题、标签、刻度和图例",
          explanationEn: "The title tells what is measured, the axis labels give the quantity and its unit, the scale tells what each gridline is worth (it may count by 2s, 5s or 10s and may not start at zero), and the key tells what a symbol stands for. In a pictograph, half a symbol means half of its value. Many wrong answers come from reading a gridline as 1 when it is worth 5, or from ignoring the key.",
          explanationZh: "标题说明测量的是什么，坐标轴标签给出量的名称和单位，刻度说明每条网格线代表多少（可能每格是 2、5 或 10，也可能不是从 0 开始），图例则说明每个符号代表多少。在象形统计图中，半个符号表示半份的数量。很多错误都是因为把代表 5 的网格线当成了 1，或者没有看图例。",
          stepsEn: [
            "Read the title and both axis labels to see what is measured and in what unit.",
            "Find the scale or key: what does one gridline, one bar unit or one symbol represent?",
            "Locate the category or point the question names and read its value, estimating between gridlines if needed.",
            "Do the calculation the question asks for, such as a difference, a total or a mean.",
            "Check that your answer has the right unit and a sensible size."
          ],
          stepsZh: [
            "读标题和两条坐标轴的标签，弄清测量的是什么、单位是什么。",
            "找到刻度或图例：一条网格线、一格条形或一个符号代表多少？",
            "找到题目点名的类别或点，读出它的数值；必要时在两条网格线之间估读。",
            "按题目的要求计算，例如求差、总数或平均数。",
            "检查答案的单位是否正确、大小是否合理。"
          ],
          exampleEn: String.raw`In a pictograph where each symbol stands for \(6\) cookies, Monday has \(4\) symbols and Tuesday has \(2\) and a half symbols. Monday sold \(4\times6=24\) and Tuesday sold \(2.5\times6=15\), so Monday sold \(24-15=9\) more.`,
          exampleZh: String.raw`在一幅象形统计图中，每个符号代表 \(6\) 块饼干，周一有 \(4\) 个符号，周二有 \(2\) 个半符号。周一卖出 \(4\times6=24\) 块，周二卖出 \(2.5\times6=15\) 块，所以周一多卖了 \(24-15=9\) 块。`
        },
        {
          titleEn: "Bar graphs, line graphs and rates of change",
          titleZh: "条形图、折线图与变化率",
          formula: String.raw`\text{rate of change}=\frac{\text{change in value}}{\text{change in time}}`,
          explanationEn: "A bar graph compares separate categories by the length of the bars; a line graph shows how a quantity changes over time. On a line graph, the steepest segment shows the fastest change, a flat segment shows no change and a segment sloping down shows a decrease. A double bar graph or double line graph has a legend, so check which series the question is about. For a percent change, divide the change by the original value, not by the new value.",
          explanationZh: "条形图用条的长度比较各个独立的类别；折线图表示某个量随时间的变化。在折线图上，最陡的一段表示变化最快，水平的一段表示没有变化，向下倾斜的一段表示减少。双条形图或双折线图带有图例，要先看清题目问的是哪一组数据。求百分数的增减时，要用变化量除以原来的数，而不是除以新的数。",
          exampleEn: String.raw`A line graph shows a plant that is \(4\) cm tall on day \(1\) and \(10\) cm tall on day \(4\). It grew \(10-4=6\) cm in \(3\) days, a rate of \(6\div3=2\) cm per day.`,
          exampleZh: String.raw`折线图显示一株植物第 \(1\) 天高 \(4\) cm，第 \(4\) 天高 \(10\) cm。它在 \(3\) 天里长高了 \(10-4=6\) cm，变化率是 \(6\div3=2\) cm/天。`
        },
        {
          titleEn: "Circle graphs: parts of a whole",
          titleZh: "扇形图：整体的各个部分",
          formula: String.raw`\text{central angle}=\frac{\text{part}}{\text{whole}}\times360^{\circ}`,
          explanationEn: String.raw`In a circle graph (pie chart) the whole circle is \(100\%\) and \(360^{\circ}\). Each sector is a part of the whole, so the percents add to \(100\%\). A circle graph gives shares, not counts: to find a count, multiply the percent by the total number of items. A sector with a central angle of \(90^{\circ}\) is \(\frac{90}{360}=\frac{1}{4}\) of the whole. If two sectors look the same size, they represent the same share.`,
          explanationZh: String.raw`在扇形图中，整个圆代表 \(100\%\)，也就是 \(360^{\circ}\)。每个扇形表示整体的一部分，所以各部分的百分数之和是 \(100\%\)。扇形图给出的是占比而不是具体数量：要求具体数量，就把百分数乘以总数。圆心角为 \(90^{\circ}\) 的扇形占整体的 \(\frac{90}{360}=\frac{1}{4}\)。如果两个扇形看起来一样大，就说明它们占的比例相同。`,
          exampleEn: String.raw`A circle graph shows the favorite lunches of \(200\) students. A \(30\%\) sector stands for \(0.30\times200=60\) students, and a \(90^{\circ}\) sector is \(25\%\), which is \(50\) students.`,
          exampleZh: String.raw`一幅扇形图表示 \(200\) 名学生最喜欢的午餐，\(30\%\) 的扇形代表 \(0.30\times200=60\) 名学生，\(90^{\circ}\) 的扇形占 \(25\%\)，即 \(50\) 名学生。`
        },
        {
          titleEn: "Frequency tables and stem-and-leaf plots",
          titleZh: "频数表与茎叶图",
          formula: String.raw`\text{mean}=\frac{\sum(\text{value}\times\text{frequency})}{\sum\text{frequency}}`,
          explanationEn: "A frequency table lists each value and how many times it occurs. The number of data values is the sum of the frequencies, and the mode is the value with the greatest frequency, not the greatest frequency itself. For the mean, multiply each value by its frequency, add, and divide by the total frequency. In a stem-and-leaf plot each leaf is the last digit and each stem holds the leading digits; read the key to know the place value. The numbers are already in order, so the median is easy to find.",
          explanationZh: "频数表列出每个数值和它出现的次数。数据的个数等于所有频数之和，众数是频数最大的那个数值（而不是最大的频数本身）。求平均数时，把每个数值乘以它的频数，相加后除以总频数。茎叶图中，叶是末位数字，茎是前面的数字；要看图例（说明）来确认数位。茎叶图里的数已经按大小排好，所以很容易找出中位数。",
          exampleEn: "A frequency table shows the value 1 twice, 2 three times, 3 four times and 4 once. That is 10 values with sum 2 + 6 + 12 + 4 = 24, so the mean is 2.4 and the mode is 3. A stem-and-leaf plot with the rows 2 | 1 4 7 and 3 | 0 2 2 5 (key: 2 | 1 means 21) lists 21, 24, 27, 30, 32, 32, 35, so its median is 30 and its mode is 32.",
          exampleZh: "一张频数表显示：数值 1 出现 2 次，2 出现 3 次，3 出现 4 次，4 出现 1 次。共 10 个数据，总和是 2 + 6 + 12 + 4 = 24，所以平均数是 2.4，众数是 3。一幅茎叶图的两行是 2 | 1 4 7 和 3 | 0 2 2 5（图例：2 | 1 表示 21），它表示 21、24、27、30、32、32、35，所以中位数是 30，众数是 32。"
        },
        {
          titleEn: "Histograms and scatter plots",
          titleZh: "直方图与散点图",
          formula: String.raw`\text{slope}=\frac{y_{2}-y_{1}}{x_{2}-x_{1}}`,
          explanationEn: "A histogram groups data into equal-width intervals; the bars touch, and the height of each bar is the number of values in that interval. Add the heights to get the total count, but remember that a histogram does not show the exact values. A scatter plot shows pairs of numbers as points. Points that rise from left to right show a positive association, points that fall show a negative association, and a shapeless cloud shows none. A trend line can be used to predict a value between known points. A trend shows an association, not proof that one thing causes the other.",
          explanationZh: "直方图把数据分成宽度相等的区间，各条形紧挨在一起，每个条形的高度是该区间内数据的个数。把各条形的高度相加就得到数据的总个数，但要记住直方图看不出每个数据的确切数值。散点图用点表示成对的数。点从左到右上升，说明是正相关；点下降，说明是负相关；点散乱没有规律，说明没有相关性。趋势线可以用来预测已知点之间的数值。趋势说明两个量有关联，但不能证明其中一个导致了另一个。",
          exampleEn: String.raw`A histogram has bars of height \(4\), \(7\) and \(3\) for the intervals 0–9, 10–19 and 20–29, so there are \(14\) values and the interval 10–19 holds the most. A trend line through \((2,\ 10)\) and \((6,\ 30)\) has slope \(\frac{30-10}{6-2}=5\), so at \(x=4\) it predicts \(y=20\).`,
          exampleZh: String.raw`一个直方图在区间 0–9、10–19、20–29 上的条形高度分别是 \(4\)、\(7\)、\(3\)，所以共有 \(14\) 个数据，10–19 这个区间的数据最多。一条经过 \((2,\ 10)\) 和 \((6,\ 30)\) 的趋势线，斜率是 \(\frac{30-10}{6-2}=5\)，所以它预测 \(x=4\) 时 \(y=20\)。`
        },
        {
          titleEn: "Spotting misleading graphs",
          titleZh: "识别有误导性的图表",
          explanationEn: "A graph can be accurate and still give the wrong impression. Watch for a vertical axis that does not start at zero, which makes small differences look huge; uneven spacing on a scale; pictograph symbols that grow in both width and height; a time period chosen to hide a trend; and missing labels. Compare the actual numbers, not the visual lengths. Also match the graph to the data: bars for categories, a line for change over time, a circle graph for parts of a whole and a scatter plot for the relationship between two variables.",
          explanationZh: "图表可能数据准确，却给人错误的印象。要警惕：纵轴不是从 0 开始（会让微小的差别看上去很大）；刻度间隔不均匀；象形统计图中符号的宽和高同时放大；故意选取某个时间段来掩盖趋势；缺少标签。要比较的是实际的数字，而不是看上去的长短。还要让图的类型与数据匹配：条形图比较类别，折线图表示随时间的变化，扇形图表示整体的组成部分，散点图表示两个变量之间的关系。",
          exampleEn: String.raw`A bar graph’s vertical axis starts at \(90\). The bars for \(92\) and \(96\) are drawn \(2\) and \(6\) units tall, so the second looks \(3\) times as tall, yet \(96\) is only about \(4\%\) more than \(92\).`,
          exampleZh: String.raw`一幅条形图的纵轴从 \(90\) 开始。数值 \(92\) 和 \(96\) 的条形分别画成 \(2\) 和 \(6\) 个单位高，看起来后者是前者的 \(3\) 倍，但 \(96\) 其实只比 \(92\) 多约 \(4\%\)。`
        }
      ],
      methodsEn: [
        "Read the title, axis labels, scale and key before touching the data",
        "Underline what is asked: a value, a difference, a total, a fraction or a trend",
        "Use gridlines to estimate values that fall between labeled ticks",
        String.raw`For circle graphs, work with percents of the total; the sectors add to \(100\%\)`,
        "Check whether a scale starts at zero before comparing bar heights",
        "Copy the needed data into a small table, then calculate"
      ],
      methodsZh: [
        "先读标题、坐标轴标签、刻度和图例，再看数据",
        "圈出题目问的是什么：数值、差、总数、占比还是趋势",
        "用网格线估读落在两个刻度之间的数值",
        String.raw`扇形图要用占总数的百分数来计算，各扇形之和是 \(100\%\)`,
        "比较条形高度之前，先看刻度是不是从 0 开始",
        "把需要的数据抄成一个小表，再计算"
      ],
      exampleEn: String.raw`A line graph shows the temperature at four times: \(10\) degrees at 9 a.m., \(16\) at noon, \(22\) at 3 p.m. and \(16\) at 6 p.m. From 9 a.m. to 3 p.m. it rose \(22-10=12\) degrees in \(6\) hours, which is \(2\) degrees per hour. The mean of the four readings is \(\frac{10+16+22+16}{4}=16\) degrees.`,
      exampleZh: String.raw`一幅折线图显示了四个时刻的气温：上午 9 点 \(10\) 度，中午 \(16\) 度，下午 3 点 \(22\) 度，下午 6 点 \(16\) 度。从上午 9 点到下午 3 点，气温上升了 \(22-10=12\) 度，用了 \(6\) 小时，即每小时上升 \(2\) 度。四个读数的平均数是 \(\frac{10+16+22+16}{4}=16\) 度。`,
      checklistEn: [
        "Read a value from a bar graph, line graph or pictograph using its scale or key",
        "Turn a circle-graph percent or angle into a count",
        "Find the mean, median and mode from a frequency table or stem-and-leaf plot",
        "Describe the trend in a scatter plot and make a prediction",
        "Explain why a graph is misleading"
      ],
      checklistZh: [
        "能利用刻度或图例，从条形图、折线图或象形统计图中读出数值",
        "能把扇形图中的百分数或圆心角换算成具体数量",
        "能从频数表或茎叶图求平均数、中位数和众数",
        "能描述散点图的趋势并做出预测",
        "能说明某幅图为什么有误导性"
      ]
    },
    {
      id: "probability-counting",
      zh: "概率与计数",
      en: "Probability & Counting",
      detailEn: "Probability as favorable over total, complements and “at least one,” independent events, sample spaces and tree diagrams, the counting principle, permutations and combinations (Upper), expected frequency.",
      detailZh: "符合条件的结果数占全部结果数的比例；对立事件与“至少一个”；独立事件；样本空间与树状图；乘法计数原理；排列与组合（高级）；期望频数。",
      explanationEn: "Probability measures how likely an event is, from 0 (impossible) to 1 (certain), and it can be written as a fraction, a decimal or a percent. When all outcomes are equally likely, probability is the number of favorable outcomes divided by the total number of outcomes, so most of the work is counting both correctly. Lower Level questions use spinners, marbles, dice and simple lists. Middle Level adds two-step events, the counting principle and expected frequency. Upper Level adds permutations, combinations of small numbers, “at least one” problems and draws without replacement. Common errors are treating outcomes that are not equally likely as if they were, adding when you should multiply, and forgetting to change the total after an item is removed.",
      explanationZh: "概率表示事件发生的可能性大小，范围从 0（不可能）到 1（一定发生），可以写成分数、小数或百分数。当所有结果等可能时，概率等于符合条件的结果数除以全部结果数，所以关键是把这两个数都数对。初级常考转盘、弹珠、骰子和简单的列举；中级增加两步事件、乘法计数原理和期望频数；高级增加排列、数字较小的组合、“至少一个”以及不放回抽取。常见错误有：把并不等可能的结果当作等可能、该乘的时候用了加、拿走一个物品之后忘记改变总数。",
      keyPoints: [
        {
          titleEn: "Probability of one event",
          titleZh: "单个事件的概率",
          formula: String.raw`P(\text{event})=\frac{\text{favorable outcomes}}{\text{total outcomes}}`,
          explanationEn: "Count the outcomes you want, divide by all the possible outcomes, and simplify. A probability is never less than 0 or more than 1: 0 means impossible and 1 means certain. Probability compares favorable outcomes with all outcomes; a ratio such as 3 to 7 compares favorable with unfavorable and is not the probability. Check that the outcomes are equally likely; a spinner with unequal sections must first be divided into equal parts.",
          explanationZh: "数出符合条件的结果数，除以全部可能的结果数，再约分。概率不会小于 0，也不会大于 1：0 表示不可能，1 表示一定发生。概率比较的是符合条件的结果与全部结果；像“3 比 7”这样的比是在比较符合条件的结果与不符合条件的结果，它不是概率。要先确认各个结果是等可能的；如果转盘的各个区域大小不等，先把它分成大小相等的小份再数。",
          exampleEn: String.raw`A bag holds \(3\) red, \(5\) blue and \(2\) green marbles, \(10\) in all. \(P(\text{blue})=\frac{5}{10}=\frac{1}{2}\) and \(P(\text{red})=\frac{3}{10}\). The probability of drawing a marble that is not red is \(\frac{7}{10}\).`,
          exampleZh: String.raw`一个袋子里有 \(3\) 个红球、\(5\) 个蓝球和 \(2\) 个绿球，共 \(10\) 个。摸到蓝球的概率是 \(\frac{5}{10}=\frac{1}{2}\)，摸到红球的概率是 \(\frac{3}{10}\)，摸到的不是红球的概率是 \(\frac{7}{10}\)。`
        },
        {
          titleEn: "Complements and “at least one”",
          titleZh: "对立事件与“至少一个”",
          formula: String.raw`P(\text{not }A)=1-P(A)`,
          explanationEn: "An event and its complement (the event not happening) have probabilities that add to 1. When a question says “at least one,” counting every successful case is slow; instead find the probability of none and subtract it from 1. The same shortcut works for any event whose opposite is easier to count.",
          explanationZh: "一个事件和它的对立事件（该事件不发生）的概率之和等于 1。遇到“至少一个”时，逐个数出所有成功的情形很慢；更好的办法是先求“一个也没有”的概率，再用 1 减去它。凡是反面比正面更容易数的事件，都可以用这个捷径。",
          stepsEn: [
            "Identify the event and its opposite; for “at least one,” the opposite is “none.”",
            "Find the probability of the opposite event.",
            "Subtract that probability from 1.",
            "Simplify and check that the answer is between 0 and 1."
          ],
          stepsZh: [
            "找出要求的事件及其对立事件（“至少一个”的对立事件是“一个也没有”）。",
            "求对立事件的概率。",
            "用 1 减去这个概率。",
            "约分，并检查答案在 0 和 1 之间。"
          ],
          exampleEn: String.raw`A fair coin is flipped \(3\) times. The probability of no heads is \(\left(\frac{1}{2}\right)^{3}=\frac{1}{8}\), so the probability of at least one head is \(1-\frac{1}{8}=\frac{7}{8}\).`,
          exampleZh: String.raw`一枚均匀硬币抛 \(3\) 次，三次都不是正面的概率是 \(\left(\frac{1}{2}\right)^{3}=\frac{1}{8}\)，所以至少出现一次正面的概率是 \(1-\frac{1}{8}=\frac{7}{8}\)。`
        },
        {
          titleEn: "Independent events: multiply",
          titleZh: "独立事件：相乘",
          formula: String.raw`P(A\text{ and }B)=P(A)\times P(B)`,
          explanationEn: "Two events are independent when the result of one does not change the probability of the other, as with two spins of a spinner or drawing with replacement. For “A and B,” multiply the probabilities. If the first item is not put back, the events are dependent: the second probability is found from the smaller remaining total. For “A or B,” when the two events cannot happen at the same time, add the probabilities.",
          explanationZh: "如果一个事件的结果不影响另一个事件的概率，这两个事件就是独立的，例如转盘转两次，或者每次抽取后都放回。求“A 并且 B”的概率时，把两个概率相乘。如果第一次取出的东西没有放回，两个事件就不再独立：第二次的概率要根据剩下的、变少了的总数来计算。当两个事件不可能同时发生时，求“A 或 B”的概率，把两个概率相加。",
          exampleEn: String.raw`Spin a spinner with \(4\) equal sections numbered \(1\) to \(4\) and flip a coin: \(P(3\text{ and heads})=\frac{1}{4}\times\frac{1}{2}=\frac{1}{8}\). From \(4\) red and \(6\) blue marbles, drawing two reds without replacement has probability \(\frac{4}{10}\times\frac{3}{9}=\frac{2}{15}\).`,
          exampleZh: String.raw`转动一个分成 \(4\) 个相等区域、标有 \(1\) 到 \(4\) 的转盘，再抛一枚硬币：得到 \(3\) 且正面朝上的概率是 \(\frac{1}{4}\times\frac{1}{2}=\frac{1}{8}\)。从 \(4\) 个红球和 \(6\) 个蓝球中不放回地连续取两个，两个都是红球的概率是 \(\frac{4}{10}\times\frac{3}{9}=\frac{2}{15}\)。`
        },
        {
          titleEn: "Sample spaces, tree diagrams and the counting principle",
          titleZh: "样本空间、树状图与乘法计数原理",
          formula: String.raw`\text{number of outcomes}=m\times n\times p\times\cdots`,
          explanationEn: String.raw`A sample space is the list of all possible outcomes. List it in an organized way: fix the first choice, run through the second choices, then move on. A tree diagram shows the same list as branches. The fundamental counting principle says that if one choice can be made in \(m\) ways, a second in \(n\) ways and a third in \(p\) ways, there are \(m\times n\times p\) combined outcomes. Count two dice as \(36\) ordered pairs, not as \(11\) sums, because the sums are not equally likely.`,
          explanationZh: String.raw`样本空间是所有可能结果组成的列表。要有条理地列出：先固定第一个选择，把第二个选择一一列完，再换下一个。树状图用分支把同样的列表画出来。乘法计数原理说：如果第一步有 \(m\) 种选法，第二步有 \(n\) 种，第三步有 \(p\) 种，那么合起来共有 \(m\times n\times p\) 种结果。掷两个骰子时，要按 \(36\) 个有序数对来数，而不是按 \(11\) 种点数和来数，因为各种点数和并不是等可能的。`,
          stepsEn: [
            "Decide what counts as one outcome, such as a pair, an outfit or a code.",
            "Count the choices at each stage.",
            "Multiply the numbers of choices, or draw a tree to list them.",
            "For a probability, count how many listed outcomes are favorable and divide by the total."
          ],
          stepsZh: [
            "先确定什么算一个结果，例如一个数对、一套穿搭或一个密码。",
            "数出每一步有几种选择。",
            "把各步的选择数相乘，或者画树状图把结果列出来。",
            "求概率时，数出列出的结果中符合条件的个数，再除以总数。"
          ],
          exampleEn: String.raw`An outfit uses one of \(3\) shirts, one of \(4\) pairs of pants and one of \(2\) hats: \(3\times4\times2=24\) outfits. With two dice, a sum of \(7\) has \(6\) favorable pairs out of \(36\), so \(P(7)=\frac{6}{36}=\frac{1}{6}\).`,
          exampleZh: String.raw`一套服装要从 \(3\) 件上衣、\(4\) 条裤子和 \(2\) 顶帽子中各选一件：\(3\times4\times2=24\) 种搭配。掷两个骰子，点数和为 \(7\) 的有 \(6\) 种情形（共 \(36\) 种），所以 \(P(7)=\frac{6}{36}=\frac{1}{6}\)。`
        },
        {
          titleEn: "Permutations and combinations (Upper Level)",
          titleZh: "排列与组合（高级）",
          formula: String.raw`n!=n(n-1)\cdots2\cdot1,\quad {}_{n}P_{r}=\frac{n!}{(n-r)!},\quad {}_{n}C_{r}=\frac{n!}{r!\,(n-r)!}`,
          explanationEn: String.raw`Use a permutation when order matters (giving different jobs or places) and a combination when order does not matter (choosing a team or a committee). A factorial \(n!\) is the number of ways to arrange \(n\) different items in a row. For permutations of \(r\) items from \(n\), multiply \(r\) descending factors starting at \(n\). A combination divides that product by \(r!\), because each group is counted \(r!\) times. With small numbers you can do all of this by listing or by short multiplication.`,
          explanationZh: String.raw`顺序有影响时用排列（给不同的人分配不同的职位或名次），顺序无关时用组合（选一支队伍或一个委员会）。阶乘 \(n!\) 是把 \(n\) 个不同的物品排成一行的方法数。从 \(n\) 个中取 \(r\) 个的排列数，是从 \(n\) 开始往下连乘 \(r\) 个数。组合数则再除以 \(r!\)，因为每一组被重复数了 \(r!\) 次。数字较小时，用列举或简短的乘法就能算出。`,
          exampleEn: String.raw`Arranging \(4\) different books on a shelf: \(4!=24\) ways. Choosing a president and a vice president from \(5\) students: \(5\times4=20\) ways, because order matters. Choosing a committee of \(2\) from \(5\) students: \(\frac{5\times4}{2}=10\) ways, because order does not matter.`,
          exampleZh: String.raw`把 \(4\) 本不同的书摆在书架上：\(4!=24\) 种排法。从 \(5\) 名学生中选出班长和副班长：\(5\times4=20\) 种（顺序有影响）。从 \(5\) 名学生中选出 \(2\) 人组成委员会：\(\frac{5\times4}{2}=10\) 种（顺序无关）。`
        },
        {
          titleEn: "Expected frequency and predictions",
          titleZh: "期望频数与预测",
          formula: String.raw`\text{expected number}=P(\text{event})\times\text{number of trials}`,
          explanationEn: String.raw`If an event has probability \(p\), then in \(N\) repeated trials you expect about \(p\times N\) occurrences. This is a prediction of what is typical, not a promise: real results are usually close to the expected number but not always equal to it. The same reasoning scales a sample up to a larger group: a proportion found in a survey of a few people estimates the number in the whole population.`,
          explanationZh: String.raw`如果一个事件的概率是 \(p\)，那么重复 \(N\) 次试验，大约会发生 \(p\times N\) 次。这是对典型结果的预测，而不是保证：实际结果通常接近期望的次数，但不一定恰好相等。同样的思路还可以把样本推广到更大的群体：调查少数人得到的比例，可以用来估计整个群体中的人数。`,
          exampleEn: String.raw`A spinner lands on red with probability \(\frac{1}{5}\), so in \(100\) spins you expect about \(\frac{1}{5}\times100=20\) reds. If \(6\) of \(30\) surveyed students prefer soccer, about \(\frac{6}{30}\times600=120\) of \(600\) students would.`,
          exampleZh: String.raw`转盘停在红色区域的概率是 \(\frac{1}{5}\)，转 \(100\) 次，预计大约有 \(\frac{1}{5}\times100=20\) 次是红色。如果调查的 \(30\) 名学生中有 \(6\) 人喜欢足球，那么 \(600\) 名学生中大约有 \(\frac{6}{30}\times600=120\) 人喜欢足球。`
        }
      ],
      methodsEn: [
        "Count the total outcomes first, then the favorable ones",
        "Check that the outcomes are equally likely before using favorable over total",
        String.raw`Use \(1-P(\text{none})\) for “at least one” problems`,
        "Multiply for “and”; add for “or” when the events cannot both happen",
        "Draw a tree or an organized list for small counting problems",
        "Ask whether order matters: yes means a permutation, no means a combination"
      ],
      methodsZh: [
        "先数出全部结果，再数符合条件的结果",
        "使用“符合条件的结果数除以全部结果数”之前，先确认各结果等可能",
        "遇到“至少一个”，就用 1 减去“一个也没有”的概率",
        "“并且”用乘法；两个事件不可能同时发生时，“或者”用加法",
        "较小的计数问题，画树状图或有条理地列表",
        "先问顺序是否有影响：有影响用排列，无影响用组合"
      ],
      exampleEn: String.raw`A bag has \(4\) red and \(6\) blue marbles. One marble is drawn, put back, and a second is drawn. The probability that both are red is \(\frac{2}{5}\times\frac{2}{5}=\frac{4}{25}\), and the probability that at least one is red is \(1-\left(\frac{3}{5}\right)^{2}=\frac{16}{25}\).`,
      exampleZh: String.raw`一个袋子里有 \(4\) 个红球和 \(6\) 个蓝球。先取出一个球，放回，再取第二个。两次都是红球的概率是 \(\frac{2}{5}\times\frac{2}{5}=\frac{4}{25}\)，至少有一个红球的概率是 \(1-\left(\frac{3}{5}\right)^{2}=\frac{16}{25}\)。`,
      checklistEn: [
        "Write a probability as a fraction, a decimal and a percent",
        "Find the probability of an event and of its complement",
        "Find the probability of two independent events",
        "Count outcomes with a tree diagram or the counting principle",
        "Tell a permutation from a combination and compute small cases (Upper Level)",
        "Predict how many times an event should occur"
      ],
      checklistZh: [
        "能把概率写成分数、小数和百分数",
        "能求一个事件及其对立事件的概率",
        "能求两个独立事件同时发生的概率",
        "能用树状图或乘法计数原理数出结果的个数",
        "能区分排列和组合，并计算数字较小的情形（高级）",
        "能预测一个事件大约会发生多少次"
      ]
    }
  ]
};
