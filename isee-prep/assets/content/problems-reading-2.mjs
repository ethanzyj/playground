// Original ISEE-style Reading Comprehension practice, set 2 (assignment P7b).
// Passages rc-m3, rc-m4 (Middle) and rc-u1, rc-u2, rc-u3, rc-u4 (Upper), six questions each.
// All passages and questions are original; none is a real ISEE item.

export const PASSAGES = [
  {
    id: "rc-m3", level: "middle", genre: "persuasive",
    titleEn: "Twenty Minutes Is Not Lunch", titleZh: "二十分钟不叫午餐", topicEn: "A school issue: the lunch period",
    paragraphs: [
      "Last Tuesday, I timed my lunch period. The bell rang at 12:10, and it took me four minutes to walk from science class to the cafeteria and another seven to reach the front of the line. When I finally sat down with my tray, I had nine minutes left to eat. I swallowed my pasta so quickly that I hardly tasted it. That was not an unusual day. At our school, lunch is really a twenty-minute race, and I believe we should lengthen it to thirty minutes.",
      "First, a rushed lunch is rarely a healthy one. When time is short, students reach for whatever is fastest, such as crackers or a cookie, and skip the salad because it takes too long to eat. Others toss half of their meal into the trash when the bell rings. After each lunch period, the garbage cans in our cafeteria are filled with whole apples and half-eaten sandwiches. Food that ends up in the garbage cannot give anyone energy for the afternoon.",
      "Second, lunch is the one part of the day when we can talk freely with our friends, and that matters more than adults sometimes realize. A few minutes of relaxed conversation lets us return to class calm and ready to concentrate. At present, however, many students eat in silence, hoping to save a few minutes at the end for conversation, but the bell almost always rings first.",
      "Some teachers worry that a longer lunch would take time away from learning. That is a fair concern, but it has a simple answer. Surely five of our daily classes could each spare two minutes. Together, those minutes would give us the extra ten without making the school day any longer. Besides, students who are hungry and watching the clock during the last minutes before lunch are not learning much anyway.",
      "A school exists to help students learn, and eating and resting are part of being ready to learn. I urge the school board to extend lunch to thirty minutes at its next meeting. Ten minutes may not sound like much, but to a student standing at the back of the cafeteria line, it is the difference between a meal and a sprint."
    ],
    paragraphsZh: [
      "上周二，我给自己的午餐时间计了时。铃声在 12:10 响起，我从科学课教室走到食堂用了四分钟，又花了七分钟才排到队伍最前面。等我端着餐盘终于坐下时，只剩九分钟可以吃饭了。我把意大利面吞得飞快，几乎没尝出味道。这样的日子并不少见。在我们学校，午餐其实是一场只有二十分钟的赛跑，我认为应该把它延长到三十分钟。",
      "首先，匆忙的午餐很少是健康的午餐。时间紧张时，学生们会拿起最快能吃完的东西，比如几块饼干或一块小甜饼，却不吃沙拉，因为沙拉要花太长时间才吃得完。还有些同学一听到铃声响，就把吃了一半的饭菜倒进垃圾桶。每个午餐时段结束后，食堂的垃圾桶里都装满了完整的苹果和吃了一半的三明治。倒进垃圾桶的食物，没法为任何人提供下午所需的能量。",
      "其次，午餐是一天中我们唯一能与朋友自由交谈的时间，而这一点比大人有时意识到的更重要。放松地聊上几分钟，能让我们回到课堂时心情平静、准备好集中注意力。然而眼下，许多学生都默默地吃饭，希望在最后省出几分钟来聊天，可铃声几乎总是抢先响起。",
      "有些老师担心，延长午餐会占用学习的时间。这是个合理的担忧，但答案很简单：想必每天总有五节课能各让出两分钟。这些时间加起来，就能多出十分钟，而且不会让上学的一天变得更长。再说，在午餐前最后那几分钟里，又饿又一个劲儿盯着时钟的学生，反正也学不进多少东西。",
      "学校的存在是为了帮助学生学习，而吃饭和休息正是做好学习准备的一部分。我敦促校董会在下次会议上把午餐延长到三十分钟。十分钟听起来也许不多，但对一个站在食堂队伍末尾的学生来说，这就是一顿饭和一场冲刺的区别。"
    ]
  },
  {
    id: "rc-m4", level: "middle", genre: "expository",
    titleEn: "Cracking the Code of the Hieroglyphs", titleZh: "破解象形文字之谜", topicEn: "History: reading ancient Egyptian writing",
    paragraphs: [
      "In 1799, French soldiers who were strengthening an old fort near the Egyptian town of Rosetta uncovered a heavy slab of dark stone, nearly four feet tall. Its surface was covered with writing in three different styles. The top band was written in hieroglyphs, the picture-like symbols seen on Egyptian temples and tombs. The middle band was written in Demotic, a quicker script that Egyptians used for everyday records. The bottom band was written in ancient Greek. Scholars were thrilled, for no one had been able to read hieroglyphs in well over a thousand years, and the oldest writings of Egypt had stayed silent.",
      "Greek was the key, because scholars of the time could read it. The Greek lines turned out to be a decree, or official announcement, issued by priests in 196 BCE to honor the young king Ptolemy V. Egypt was then ruled by Greek-speaking kings, and the three bands seemed to carry the same message. Scholars hoped to compare them and match the unknown Egyptian signs with Greek words they already understood. It was a promising plan, but it proved far harder than anyone expected.",
      "One obstacle was a widespread belief that hieroglyphs were only pictures, each standing for an idea rather than a sound. Scholars who held this view kept hunting for hidden symbolic meanings and made little progress. Then, in the early 1800s, an English scientist named Thomas Young noticed that certain groups of signs were circled by oval rings. Because the Greek text mentioned King Ptolemy again and again, Young guessed that the ovals held royal names, and he correctly matched some of the signs to sounds. It was only a small step, but it hinted that hieroglyphs could stand for sounds after all.",
      "The breakthrough came in 1822, when a French scholar named Jean-François Champollion announced his solution. Champollion had loved languages since childhood, and he knew Coptic, a late form of the Egyptian language. By comparing royal names found on several monuments, he discovered that many hieroglyphs represented sounds, much like the letters of an alphabet, while others represented whole ideas or gave hints about a word’s meaning. Hieroglyphic writing, he showed, was a clever mixture of both. Once he knew the sounds, Coptic helped him recognize the Egyptian words they spelled.",
      "Within a few years, scholars were reading inscriptions on temple walls, paintings in tombs, and records written on papyrus. The Rosetta Stone’s own message is not especially thrilling; it lists the honors that priests wished to give a king. Its fame comes from what it made possible. Thanks to the stone, the voices of ancient Egypt could finally be heard again, and today the name “Rosetta Stone” is used for anything that serves as a key to a difficult puzzle."
    ],
    paragraphsZh: [
      "1799 年，几名法国士兵在埃及罗塞塔镇附近加固一座旧要塞时，发现了一块深色的厚重石板，高近四英尺。石板表面刻满了三种不同样式的文字。最上面一栏是象形文字，也就是埃及神庙和墓葬中常见的那种近似图画的符号。中间一栏是世俗体，这是埃及人用于日常记录的一种书写更快的文字。最下面一栏是古希腊文。学者们欣喜若狂，因为已经有一千多年没有人能读懂象形文字了，埃及最古老的文字一直保持着沉默。",
      "希腊文是关键，因为当时的学者能读懂它。这些希腊文字原来是一道诏令，也就是官方公告，由祭司们于公元前 196 年颁布，用来表彰年轻的国王托勒密五世。当时埃及由说希腊语的国王统治，而这三栏文字似乎传达着同一内容。学者们希望把它们对照起来，把陌生的埃及符号与自己已经懂得的希腊词语一一对应。这是个很有希望的办法，但事实证明它比任何人预想的都要困难得多。",
      "障碍之一是一种流传很广的看法：认为象形文字只是图画，每个符号代表的是一个意思，而不是一个读音。持这种观点的学者不断寻找隐藏的象征含义，却几乎没有进展。后来，在 19 世纪初，一位名叫托马斯·杨的英国科学家注意到，有些符号组被椭圆形的圈围了起来。因为希腊文中一再提到国王托勒密，杨猜测这些椭圆圈里写的是王室人物的名字，并且正确地把其中一些符号与读音对应起来。这只是很小的一步，却暗示象形文字毕竟也可以表示读音。",
      "突破出现在 1822 年，法国学者让-弗朗索瓦·商博良宣布了他的破译成果。商博良从小就热爱语言，并且懂得科普特语，那是古埃及语的一种晚期形式。通过比较多处古迹上的王室人物名字，他发现许多象形文字表示读音，就像字母表中的字母一样，而另一些则表示整个意思，或是对词义起提示作用。他证明，象形文字是这两者巧妙的结合。一旦知道了读音，科普特语就帮助他认出了这些读音所拼出的埃及词语。",
      "几年之内，学者们就能读懂神庙墙壁上的铭文、墓室里的壁画，以及写在纸莎草纸上的记录了。罗塞塔石碑本身的内容并不特别引人入胜，它只是列出了祭司们想献给一位国王的荣誉。它之所以闻名，是因为它所开启的可能。多亏了这块石碑，古埃及的声音才得以重新被人听见。如今，“罗塞塔石碑”这个名称被用来指代任何能帮助解开难题的关键。"
    ]
  },
  {
    id: "rc-u1", level: "upper", genre: "expository",
    titleEn: "Reading the Rings", titleZh: "解读年轮", topicEn: "Science: tree rings and past climate",
    paragraphs: [
      "Look at the stump of a felled tree and you will see a pattern of concentric rings. Most people learn that each ring marks one year of the tree’s life, which makes the rings a handy way to estimate its age. But the rings hold far more than a number. In a tree that grows where the seasons differ sharply, each ring is also a small record of the weather in a particular year, and scientists who have learned to read these records have turned old wood into one of the best natural archives of past climate.",
      "The pattern arises from the rhythm of the seasons. In spring, when water is plentiful, a tree grows quickly and lays down pale, light wood. As summer wanes, growth slows, and the wood that forms is dark and dense. The contrast between one year’s dark band and the next year’s pale band is what the eye sees as a ring. How wide a ring is depends on conditions during the growing season: a year of ample rain and moderate temperatures usually produces a broad ring, while a drought or a severe cold spell leaves a narrow one.",
      "Yet no single tree can be trusted completely. A neighboring tree may shade it, an insect outbreak may strip its leaves, or a storm may snap a limb, and each of these can change a ring’s width for reasons that have nothing to do with the climate. Occasionally a tree even produces two bands in a single year, or none at all. Early in the twentieth century, an American astronomer named Andrew Ellicott Douglass found a way around this problem. He had begun studying trees in Arizona because he suspected that changes in the sun affected the climate on Earth. In the process, he noticed that trees growing in the same region showed the same sequence of wide and narrow rings. By lining up those shared sequences, he could detect a ring that was missing or doubled in one tree and verify the date of every ring. The technique became known as cross-dating.",
      "Cross-dating allows researchers to look back much further than the life of any one tree. They match the rings of living trees to those of older, dead ones, and those to still older wood, such as beams in old buildings, forming a chain of overlapping samples. The longest chronologies, built chiefly from oaks and pines in Central Europe, now reach back more than ten thousand years. Archaeologists use such records to date timber: a single beam can yield the very year its tree was cut down. Scientists who date ancient material by measuring its radioactive carbon also use the records to check and refine their results.",
      "The method has its limits. Where the climate is steady all year, as in many tropical forests, trees may show no clear yearly rings at all. Still, few other natural archives can match the precision of tree rings, for a ring can be assigned to its exact calendar year. A tree that has grown quietly in a forest is, in effect, a diary written by the weather, and with patience, scientists have learned how to read it."
    ],
    paragraphsZh: [
      "仔细看看被砍倒的树留下的树桩，你会看到一圈圈同心圆般的图案。大多数人都知道，每一圈年轮代表树木生命中的一年，因此年轮是估算树龄的便捷方法。但年轮所包含的远不止一个数字。在四季分明的地方生长的树木，每一圈年轮同时也是对那一年天气的小小记录，而学会解读这些记录的科学家，已经把古老的木材变成了研究过去气候的最佳天然档案之一。",
      "这种图案源于季节的节律。春天水分充足，树木生长迅速，形成颜色浅、质地轻的木材。随着夏天渐渐过去，生长放缓，形成的木材颜色深、质地致密。前一年的深色带与后一年的浅色带之间的反差，在我们眼里就成了一圈年轮。每圈年轮的宽度取决于生长季里的条件：雨水充沛、气温适中的年份通常长出宽的年轮，而干旱或严寒则只会留下窄窄的一圈。",
      "然而，没有哪一棵树是完全可靠的。邻近的树木可能给它遮阴，虫灾可能啃光它的叶子，风暴可能折断它的枝条，这些情况都可能改变年轮的宽度，而原因与气候毫无关系。偶尔，一棵树甚至会在一年里长出两条年轮带，或者一条也没有。20 世纪初，一位名叫安德鲁·埃利科特·道格拉斯的美国天文学家找到了绕过这个问题的办法。他开始研究亚利桑那州的树木，是因为他怀疑太阳的变化会影响地球的气候。在研究过程中，他注意到同一地区生长的树木，宽窄年轮出现的顺序是相同的。通过把这些共有的序列对齐，他就能发现某棵树上缺失或重复出现的年轮，并核实每一圈年轮的年份。这种技术后来被称为交叉定年法。",
      "交叉定年让研究者能够回溯到远远超出任何一棵树寿命的年代。他们把活树的年轮与较老的枯树的年轮相匹配，再把这些与更古老的木材（例如古建筑中的梁木）相匹配，形成一条由相互重叠的样本构成的链条。最长的年轮年表主要由中欧的橡树和松树建成，如今已经回溯到一万多年前。考古学家用这样的记录来确定木材的年代：一根梁木就能给出它所属的那棵树被砍倒的确切年份。通过测量放射性碳来测定古代物质年代的科学家，也利用这些记录来核对并改进自己的结果。",
      "这种方法也有局限。在全年气候稳定的地方，例如许多热带森林，树木可能根本没有清晰的年轮。不过，很少有别的天然档案能在精确度上与年轮相比，因为一圈年轮可以被确定到它所属的那一个日历年。一棵在森林里安静生长的树，其实就是天气写下的日记，而科学家凭着耐心，已经学会了如何读懂它。"
    ]
  },
  {
    id: "rc-u2", level: "upper", genre: "narrative",
    titleEn: "The Tuning", titleZh: "调音", topicEn: "Literary fiction: a winter afternoon with a piano tuner",
    paragraphs: [
      "That December, the chore I resented most was holding a flashlight for Mr. Szabo. Every winter break the school’s concert grand was tuned, and every year the music teacher chose a student to assist. I had a recital in three weeks, and I considered each hour away from the practice room a small theft. Yet there I was in the empty auditorium, crouched beside the open piano like a nurse at an operating table, aiming a beam of light into its crowded interior.",
      "Mr. Szabo, a small man in a gray cardigan, did not seem to notice my mood. He wedged strips of red felt between the strings to silence all but two, struck a single key, and listened with his head tilted, as though the piano were confiding something. Then he fitted a steel lever over one of the tuning pins and moved it by an amount I could not see.",
      "“Do you hear it?” he asked. I heard a note and nothing more. “Listen for the wobble. When two strings almost agree, they argue, and the argument makes a slow pulse in the sound. The closer they come, the slower it beats.” He nudged the lever again. The pulse stretched, slowed, and dissolved so gently that I could not say when it had gone. What remained was a single clear tone, hanging in the air as if it had always been there.",
      "For three hours he worked up and down the keyboard, one note at a time. A piano, he told me, has well over two hundred strings, and every one of them must be persuaded to agree with the rest. I had expected skill to look like something dramatic: a flourish, a flash of fingers. Instead it looked like patience. My irritation faded into a fascination I did not want to admit. At last I asked whether it bothered him that no one would ever know what he had done. He considered the question seriously. “If I do my work well,” he said, “nobody will think about the piano at all. They will think about the music.”",
      "On the night of the recital the hall was full and my hands were cold. But when I began to play the grand, the notes came out round and even, each one settling exactly where I had aimed it. I thought of the wobble that was no longer there, the quiet argument between strings that had been settled hours before anyone arrived. When the applause came, I bowed, and I searched the rows for a gray cardigan. I never found it. Perhaps that was the point."
    ],
    paragraphsZh: [
      "那年十二月，我最不情愿做的差事，就是为萨博先生举手电筒。每年寒假，学校的音乐会三角钢琴都要调音，而每年音乐老师都会挑一名学生做助手。三周后我有一场独奏会，我觉得每一个小时离开琴房，都像是被偷走了一小块时间。可我偏偏就在这里，在空荡荡的礼堂里，蹲在敞开的钢琴旁边，像手术台边的护士一样，把一束光照进钢琴拥挤的内部。",
      "萨博先生是个穿灰色开襟毛衣的瘦小男人，似乎没有留意到我的情绪。他把几条红色毡条塞进琴弦之间，让只剩两根弦能发声，然后弹响一个琴键，歪着头倾听，仿佛钢琴正在向他倾诉什么。接着，他把一根钢制调音扳手套在一枚弦钮上，转动了一个我根本看不出来的幅度。",
      "“听到了吗？”他问。我只听到一个音，别的什么也没有。“听那个颤动。两根弦快要一致的时候，它们会‘争吵’，这场争吵会让声音出现缓慢的脉动。它们靠得越近，脉动就越慢。”他又轻轻拨动了一下扳手。那脉动被拉长、变慢，然后那么轻柔地消散了，我说不出它是什么时候不见的。剩下的是一个清澈的单音，悬在空气中，仿佛它一直就在那里。",
      "三个小时里，他沿着琴键上上下下，一个音一个音地调。他告诉我，一架钢琴有两百多根琴弦，每一根都必须被说服，与其余的取得一致。我原以为技艺看上去该是某种戏剧性的东西：一个潇洒的动作，一阵飞舞的手指。可事实上它看上去是耐心。我的烦躁渐渐化作一种我不愿承认的着迷。最后，我问他，没有人会知道他做过什么，他会不会介意。他认真地考虑了这个问题。“如果我的工作做得好，”他说，“就没有人会去想那架钢琴。他们会去想音乐。”",
      "独奏会那晚，礼堂坐满了人，我的双手冰凉。可是当我开始弹奏那架三角钢琴，音符流淌出来，圆润而均匀，每一个都落在我瞄准的位置。我想起了那已不复存在的颤动，想起了琴弦之间那场安静的争吵，它在所有人到场的几个小时前就已平息。掌声响起时，我鞠了一躬，在一排排观众中寻找一件灰色的开襟毛衣。我始终没有找到。也许，这正是关键所在。"
    ]
  },
  {
    id: "rc-u3", level: "upper", genre: "persuasive",
    titleEn: "Make Something Badly", titleZh: "不妨做得糟一点", topicEn: "Opinion: why ordinary people should make art",
    paragraphs: [
      "At some point in childhood, most of us quietly stop drawing. We have not lost interest, exactly; we have learned to compare. A seven-year-old who sketches a horse with five legs is delighted by it, and so is everyone who sees it. A fourteen-year-old who produces the same horse hides it in a drawer. Somewhere in between, we absorb a rule that no one ever states aloud: art belongs to the talented, and the rest of us should be spectators. I believe that rule is mistaken, and that ordinary people should make art, badly and cheerfully and often.",
      "Consider first what making art does for the person who makes it. Anyone who has tried to draw a chair knows that the chair in your mind is not the chair in front of you. To draw it, you must actually look: at the angle of a leg, the shadow under the seat, the way one rung hides another. The finished drawing may be clumsy, but the looking is a skill that lasts. A person who has spent an afternoon failing to draw a tree will never again see a tree quite so carelessly.",
      "Notice, too, how differently we treat other pastimes. Nobody insists that a weekend basketball game be fit for a stadium crowd, and nobody apologizes for singing in the shower or for cooking a dinner that no restaurant would serve. We understand that such activities are worth doing for their own sake. Yet when it comes to painting, writing, or playing an instrument, we demand either excellence or silence. The word amateur comes from a Latin word meaning “lover,” as if to remind us that doing something for the love of it was once reason enough.",
      "Skeptics will object that hours are limited and are better spent on skills that earn a living. That is a fair point, and I do not suggest that anyone neglect homework for a sketchbook. But the objection assumes that an activity is worthwhile only when its results can be sold or admired. By that standard, a long walk or a bedtime story would also be a waste. Besides, the people we call gifted were beginners once, and their early failures were not wasted effort; they were the price of everything that came after.",
      "So pick up the pencil, the clarinet, the notebook. Expect the first results to disappoint you, and make them anyway. The aim is not a masterpiece but a habit of attention and a willingness to be seen trying. The world has no shortage of experts. What it could use is more people who are unembarrassed to be beginners."
    ],
    paragraphsZh: [
      "在童年的某个时刻，我们大多数人都悄悄地不再画画了。并不是我们失去了兴趣，而是我们学会了比较。一个七岁的孩子画出一匹五条腿的马，自己会欣喜不已，看到的人也一样。一个十四岁的孩子画出同样的马，却会把它藏进抽屉。在这期间的某个时候，我们不知不觉地接受了一条从未有人明说的规矩：艺术属于有天赋的人，其余的人只应当做观众。我认为这条规矩是错误的，普通人也应该创作艺术，哪怕做得很糟，也要开开心心、经常地做。",
      "首先想想，创作艺术对创作者本人意味着什么。任何试过画一把椅子的人都知道，你脑子里的椅子并不是你面前的那把椅子。要画出它，你必须真正地去看：看椅腿的角度，看座位下的阴影，看一根横档是怎样挡住另一根的。画好的成品也许笨拙，但“看”这项本领会长久保留。一个花了一下午也没能画好一棵树的人，以后再也不会那么漫不经心地看一棵树了。",
      "再留意一下，我们对待其他消遣的态度有多么不同。没有人要求周末的篮球赛必须达到能在体育场里供观众欣赏的水准，也没有人会因为在淋浴时唱歌，或者做了一顿餐厅绝不会端上桌的晚饭而向别人道歉。我们明白，这类活动本身就值得去做。然而一说到绘画、写作或演奏乐器，我们却要求要么出色，要么沉默。amateur（业余爱好者）一词来自一个意为“热爱者”的拉丁词，仿佛在提醒我们：出于热爱而做一件事，曾经被认为是足够的理由。",
      "怀疑者会反驳说，时间有限，应该用在能谋生的技能上。这个观点有道理，我也并不是建议谁为了素描本而荒废作业。但这种反驳假定了一项活动只有在成果能被出售或被人欣赏时才有价值。照这个标准，长时间的散步或睡前讲的故事也都是浪费。再说，那些被我们称为天才的人，当初也都是初学者，他们早期的失败并不是白费力气，而是日后一切成就所付出的代价。",
      "所以，拿起铅笔、单簧管、笔记本吧。预料到最初的成果会让你失望，然后照做不误。目标不是一件杰作，而是一种专注观察的习惯，以及不怕被人看见自己在尝试的勇气。世界上从不缺专家，它更需要的，是更多不以做初学者为耻的人。"
    ]
  },
  {
    id: "rc-u4", level: "upper", genre: "descriptive",
    titleEn: "A Comet Over Nantucket", titleZh: "楠塔基特上空的彗星", topicEn: "A person: astronomer Maria Mitchell",
    paragraphs: [
      "On the clear, cold evening of October 1, 1847, a woman of twenty-nine climbed the stairs to the flat roof of a bank building on Nantucket, an island off the coast of Massachusetts. Below her, lamplight glowed in the windows of a town built on whaling; above her, the stars were thick and steady. She carried a modest telescope, nothing like the great instruments of the observatories, and she was not on the roof by accident. Evening after evening she had come here to sweep the sky, section by section, as another person might comb a beach for shells.",
      "Maria Mitchell had learned to love the sky from her father, William, who taught school, worked at the bank, and studied astronomy in his spare time. As a girl she helped him check chronometers, the precise clocks that whaling ships carried so their captains could find their position at sea. The work demanded accuracy, and she acquired the habit. Her days were spent as a librarian, but her evenings belonged to the stars.",
      "That evening, her eye caught a faint, fuzzy patch of light that did not belong among the stars she knew. Over the next nights it shifted its position against the stars, and a fuzzy object that drifts among the stars is almost certainly a comet. A king in Denmark had offered a gold medal to the first person to discover a comet too dim to be seen without a telescope, and word of Mitchell’s find soon crossed the Atlantic. About a year later the medal was hers, and she had become the first woman elected to the American Academy of Arts and Sciences.",
      "In 1865 Mitchell became a professor of astronomy at Vassar College, in New York, and director of its observatory. She insisted that her students learn by observing. On clear nights she led them up to the telescope, where they took turns at the eyepiece and recorded what they saw. Several went on to careers in astronomy.",
      "Mitchell’s discovery, then, was less a stroke of luck than the reward of a habit. She had studied the same sky so many times that a single faint smudge, out of place, could not escape her. Her example is easy to picture: a small figure on a flat roof, a small telescope, and an enormous dark sky. It remains one of the best pictures we have of how science often begins, with someone willing to keep looking."
    ],
    paragraphsZh: [
      "1847 年 10 月 1 日，那是一个晴朗而寒冷的傍晚，一位二十九岁的女子登上了楠塔基特岛上一座银行大楼的平坦屋顶。楠塔基特是马萨诸塞州海岸外的一座岛屿。她的脚下，灯光从一座靠捕鲸兴起的小镇的窗户里透出来；她的头顶，繁星密布，安然不动。她带着一架并不起眼的望远镜，与天文台里那些庞大的仪器没法相比，而她出现在屋顶上也绝非偶然。一个又一个傍晚，她都来到这里，一片一片地仔细扫视天空，就像别人沿着海滩搜寻贝壳那样。",
      "玛丽亚·米切尔对星空的热爱，是从父亲威廉那里学来的。威廉教书，在银行工作，业余时间研究天文学。小时候，她就帮父亲校对航海天文钟，那是捕鲸船上携带的精密计时仪器，船长们靠它在海上确定自己的位置。这项工作要求准确无误，她也因此养成了严谨的习惯。她白天在图书馆工作，傍晚则属于星空。",
      "那天傍晚，她的目光捕捉到一小片模糊的微弱光斑，它并不属于她所熟悉的群星。接下来的几个夜晚，它在群星之间移动了位置，而在群星间游移的模糊天体几乎可以肯定是一颗彗星。丹麦的一位国王曾悬赏一枚金质奖章，授予第一个发现肉眼看不见、必须借助望远镜才能看到的暗淡彗星的人，米切尔的发现很快就传到了大西洋彼岸。大约一年后，这枚奖章就归她所有，她还成为第一位当选美国艺术与科学院院士的女性。",
      "1865 年，米切尔成为纽约州瓦萨学院的天文学教授兼学院天文台台长。她坚持让学生通过观测来学习。晴朗的夜晚，她带着学生登上天文台，让他们轮流在目镜前观察，并记录所见。其中有几位后来从事了天文学工作。",
      "因此，米切尔的发现与其说是一次走运，不如说是习惯的回报。她对同一片天空观察过那么多次，以至于任何一小片位置不对的微弱光斑都逃不过她的眼睛。她的形象不难想象：平坦的屋顶上一个小小的身影，一架小小的望远镜，和一片辽阔幽暗的夜空。它仍然是最能说明科学往往如何开始的画面之一：始于有人愿意一直看下去。"
    ]
  }
];

export const PROBLEMS = [
  {
    id: "rc-m3-q1", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-m3", strand: "main-idea", conceptIds: ["main-idea"],
    stem: "Which of the following best states the main idea of the passage?",
    choices: [
      "Students waste too much food in the cafeteria and should be required to finish every meal they take.",
      "The school should lengthen lunch because twenty minutes is too little time for students to eat and relax.",
      "Teachers should shorten their classes so that students have more time to talk with friends.",
      "Schools should teach students more about choosing healthy foods."
    ],
    answer: 1,
    explanationEn: "The author opens with a timed lunch period, gives reasons about eating and relaxing, answers an objection, and ends by urging a thirty-minute lunch, so the whole passage supports a longer lunch. Wasted food is only one detail, and the author never says students should be forced to finish meals. Shortening classes is the method proposed, not the main point, and lessons on healthy food are never mentioned.",
    explanationZh: "作者先用亲身计时的经历引出问题，接着从吃饭和放松两方面说明理由，回应了反对意见，最后呼吁把午餐延长到三十分钟，整篇文章都在为“延长午餐时间”服务。浪费食物只是其中一个细节，作者也从未主张强迫学生吃完饭菜；缩短课时只是实现办法，不是主旨；文中也没有提到健康饮食方面的教育。"
  },
  {
    id: "rc-m3-q2", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-m3", strand: "supporting-ideas", conceptIds: ["supporting-ideas"],
    stem: "According to the author, how could the school find the extra ten minutes for lunch?",
    choices: [
      "By ending the school day ten minutes later",
      "By cutting the time students spend walking to the cafeteria",
      "By removing one class period from the daily schedule",
      "By having five classes each give up two minutes"
    ],
    answer: 3,
    explanationEn: "Paragraph 4 says that five of the daily classes could each spare two minutes, which together would give the extra ten minutes “without making the school day any longer.” Ending the day later is therefore the opposite of what the author proposes, and the other two ideas are never mentioned.",
    explanationZh: "第 4 段提出，每天五节课各让出两分钟，加起来正好多出十分钟，而且“不会让上学的一天变得更长”。所以“把放学推迟十分钟”与作者的建议正好相反；缩短走路时间和取消一节课，文中都没有提到。"
  },
  {
    id: "rc-m3-q3", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-m3", strand: "inference", conceptIds: ["inference"],
    stem: "The author would most likely agree with which of the following statements?",
    choices: [
      "The time students have to eat can affect both what they eat and how well they learn.",
      "Lunch is more important than any class students take, so it should never be shortened for any reason.",
      "Teachers’ concerns about changing the schedule deserve no attention.",
      "Students should be allowed to eat during class."
    ],
    answer: 0,
    explanationEn: "Paragraph 2 links a short lunch to poor food choices and wasted meals, and paragraphs 3 and 5 link rest and a proper meal to being calm, focused, and ready to learn. The author never ranks lunch above every class, calls the teachers’ worry “a fair concern” instead of ignoring it, and never mentions eating in class.",
    explanationZh: "第 2 段把午餐时间太短与不健康的选择和浪费食物联系起来，第 3、5 段又把休息和好好吃饭与平静、专注、准备好学习联系起来，所以作者会同意这一说法。作者从未说午餐比所有课都重要；作者称老师的担心为“合理的担忧”，并没有无视它；文中也没有提到在课上吃东西。"
  },
  {
    id: "rc-m3-q4", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-m3", strand: "vocabulary", conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 4, “spare” most nearly means",
    choices: [
      "treat with mercy",
      "keep for later",
      "afford to give up",
      "protect from harm"
    ],
    answer: 2,
    glosses: [["spare", "腾出；让出；饶恕"], ["mercy", "仁慈；宽恕"], ["afford", "承担得起；腾得出"], ["harm", "伤害"]],
    explanationEn: "In “five of our daily classes could each spare two minutes,” the classes would hand over two minutes apiece so that lunch can grow by ten, which is what “afford to give up” means. The other choices are other senses of “spare,” such as showing mercy or protecting someone, and none of them fits the sentence.",
    explanationZh: "“五节课各 spare 两分钟”的意思是每节课把两分钟让出来，合起来给午餐多加十分钟，所以 spare 在这里是“腾得出、舍得让出”。其他选项是 spare 的别的义项（手下留情、保护等）或根本不合文意，放进句子都不通。"
  },
  {
    id: "rc-m3-q5", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-m3", strand: "organization-logic", conceptIds: ["organization-logic"],
    stem: "Which of the following best describes how the author responds to the teachers’ concern in paragraph 4?",
    choices: [
      "By arguing that teachers do not understand how hungry and tired students feel",
      "By granting that the concern is fair, then offering a fix and arguing that little learning is lost",
      "By agreeing that lunch should stay short if it would reduce class time",
      "By proposing that the school day be made ten minutes longer so that no class time is lost"
    ],
    answer: 1,
    explanationEn: "The author calls the worry “a fair concern,” then offers a fix (two minutes from each of five classes) and adds that hungry, clock-watching students learn little at the end of a class anyway. The author never accuses teachers of not understanding, never gives up on a longer lunch, and says plainly that the school day would not get longer.",
    explanationZh: "作者先承认这是“合理的担忧”，再给出办法（五节课各让出两分钟），并补充说饿着肚子盯着时钟的学生在课堂最后几分钟本来也学不进多少。作者没有指责老师不理解学生，没有放弃延长午餐，还明确说上学的一天不会变长。"
  },
  {
    id: "rc-m3-q6", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-m3", strand: "tone-style-figurative", conceptIds: ["tone-style-figurative"],
    stem: "In paragraph 1, the author calls lunch “a twenty-minute race.” This description most strongly suggests that",
    choices: [
      "students have to hurry through almost everything at lunch",
      "students compete with one another to see who finishes first",
      "the author finds the lunch period exciting and enjoyable",
      "the author thinks students should exercise during lunch"
    ],
    answer: 0,
    explanationEn: "A race is run at top speed, so the metaphor shows how rushed students are: the walk, the line, and the meal all have to fit into twenty minutes. The closing contrast between “a meal and a sprint” repeats the same image. Nothing in the passage describes a contest among students, calls lunch enjoyable, or mentions exercise.",
    explanationZh: "赛跑要全速进行，所以这个比喻表现的是学生们的匆忙：走路、排队和吃饭都得挤进二十分钟里。结尾处“一顿饭和一场冲刺的区别”再次呼应了这一意象。文中没有描写学生之间的比赛，没有说午餐有趣，也没有提到锻炼。"
  },
  {
    id: "rc-m4-q1", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-m4", strand: "main-idea", conceptIds: ["main-idea"],
    stem: "Which of the following is the best summary of the passage?",
    choices: [
      "Thomas Young was the first scholar to understand how hieroglyphs worked.",
      "Egyptian priests invented hieroglyphs to keep their records secret from Greek rulers.",
      "The stone’s message, a list of royal honors, is the most valuable text ever found in Egypt.",
      "A stone found in Egypt helped scholars solve the puzzle of how to read hieroglyphs."
    ],
    answer: 3,
    explanationEn: "The passage follows the stone from its discovery in 1799 to Champollion’s breakthrough in 1822 and its lasting fame as the key to reading hieroglyphs. Young took only “a small step,” so he did not solve the puzzle. The stone’s own message is called “not especially thrilling,” and the passage never says hieroglyphs were meant to be secret.",
    explanationZh: "文章从 1799 年发现石碑，写到 1822 年商博良的突破，再写到它作为破解象形文字关键的长久声名。托马斯·杨只迈出了“很小的一步”，并没有解开谜题；文中说石碑本身的内容“并不特别引人入胜”；文章也没有说象形文字是为了保密而发明的。"
  },
  {
    id: "rc-m4-q2", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-m4", strand: "supporting-ideas", conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 2, why was the Greek text on the Rosetta Stone so useful to scholars?",
    choices: [
      "It was the only part of the stone that scholars of the day thought was worth studying carefully.",
      "It described how each Egyptian sign should be pronounced.",
      "Scholars of the time could already read Greek, so they could compare it with the Egyptian scripts.",
      "It had been written much later than the other two texts."
    ],
    answer: 2,
    explanationEn: "Paragraph 2 says “Greek was the key, because scholars of the time could read it,” and that they hoped to match the unknown Egyptian signs with Greek words they already understood. The Greek lines were a royal decree, not a pronunciation guide, and the passage never says the Greek was added later or that the other texts were ignored.",
    explanationZh: "第 2 段明确说“希腊文是关键，因为当时的学者能读懂它”，学者们希望把陌生的埃及符号与自己已经懂得的希腊词语对应起来。希腊文部分是一道诏令，不是读音指南；文中也没有说希腊文是后来才加上的，或者其他文字不值得研究。"
  },
  {
    id: "rc-m4-q3", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-m4", strand: "supporting-ideas", conceptIds: ["supporting-ideas"],
    stem: "According to the passage, what did Champollion discover about hieroglyphic writing?",
    choices: [
      "It combined signs that stood for sounds with signs that stood for ideas.",
      "It consisted only of pictures, each standing for a single whole idea.",
      "It was an alphabet in which every sign stood for one sound.",
      "It was borrowed from the Greek alphabet by Egyptian priests seeking a simpler script."
    ],
    answer: 0,
    explanationEn: "Paragraph 4 says many hieroglyphs represented sounds “much like the letters of an alphabet,” while others represented whole ideas or hinted at meaning, so the writing was “a clever mixture of both.” “Only pictures” is the mistaken belief described in paragraph 3, and “every sign for one sound” is too extreme because some signs stood for ideas. Nothing in the passage says hieroglyphs were borrowed from Greek.",
    explanationZh: "第 4 段说，许多象形文字表示读音，“就像字母表中的字母一样”，另一些表示整个意思或提示词义，所以这种文字是“两者巧妙的结合”。“只有图画”正是第 3 段中那种错误看法；“每个符号只表示一个读音”又太绝对，因为其中也有表示意思的符号；文中也没有说象形文字是从希腊字母借来的。"
  },
  {
    id: "rc-m4-q4", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-m4", strand: "vocabulary", conceptIds: ["vocabulary-in-context"],
    stem: "As used in paragraph 2, “key” most nearly means",
    choices: [
      "a small metal tool for opening a lock",
      "something that helps solve a problem",
      "a button pressed on a keyboard",
      "the main notes of a piece of music"
    ],
    answer: 1,
    glosses: [["key", "关键；钥匙"], ["lock", "锁"], ["keyboard", "键盘"], ["solve", "解决"]],
    explanationEn: "“Greek was the key, because scholars of the time could read it” means Greek was what could unlock the mystery of the other scripts. Here “key” is used figuratively for something that helps solve a problem, and the last sentence of the passage uses it the same way. The other choices are literal or musical senses that do not fit.",
    explanationZh: "“希腊文是关键，因为当时的学者能读懂它”，意思是希腊文能够解开另外两种文字之谜。这里的 key 是比喻用法，指“有助于解决问题的东西”，文章最后一句也是同样的用法。其他选项是 key 的字面义或音乐义，放进句子都不合适。"
  },
  {
    id: "rc-m4-q5", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-m4", strand: "organization-logic", conceptIds: ["organization-logic"],
    stem: "The sentence “It was a promising plan, but it proved far harder than anyone expected” (the end of paragraph 2) mainly serves to",
    choices: [
      "suggest that the scholars had made a careless mistake in choosing their method",
      "summarize how the stone was first discovered by the soldiers",
      "show that the Greek text was inaccurate in places",
      "lead into the difficulties described in the next paragraph"
    ],
    answer: 3,
    explanationEn: "The sentence moves the passage from the hopeful plan to the problems that follow, and paragraph 3 begins “One obstacle was...” to describe them. Nothing suggests the scholars were careless, the discovery was told in paragraph 1, and the Greek text is never called inaccurate.",
    explanationZh: "这句话把文章从“很有希望的计划”转到随后的种种困难，第 3 段正是以“障碍之一是……”开头来讲述这些困难的。文中没有说学者们粗心；石碑的发现在第 1 段已经讲过；希腊文也从未被说成不准确。"
  },
  {
    id: "rc-m4-q6", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-m4", strand: "inference", conceptIds: ["inference"],
    stem: "Based on the passage, which of the following is the most likely reason the decree was written in three scripts?",
    choices: [
      "So that Greek-speaking officials would not be able to read it",
      "So that future scholars could learn how to read hieroglyphs",
      "So that readers who used different scripts could all understand it",
      "So that priests could test which script was easiest to carve"
    ],
    answer: 2,
    explanationEn: "The passage says hieroglyphs appeared on temples, Demotic served for everyday records, and Egypt was ruled by Greek-speaking kings, so each script suited a different group of readers. The Greek text could not have been meant to keep Greek speakers out, and nothing suggests that the priests of 196 BCE were planning for later scholars or testing scripts.",
    explanationZh: "文章说象形文字用于神庙和墓葬，世俗体用于日常记录，而当时统治埃及的是说希腊语的国王，可见三种文字各适合不同的读者群。希腊文显然不是为了不让说希腊语的人看懂；也没有任何迹象表明公元前 196 年的祭司是在为后世学者做准备，或是在测试哪种文字最容易雕刻。"
  },
  {
    id: "rc-u1-q1", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-u1", strand: "main-idea", conceptIds: ["main-idea"],
    stem: "Which of the following best expresses the main point of the passage?",
    choices: [
      "By comparing the rings of many trees, scientists can date wood precisely and reconstruct past climates.",
      "Because each tree is affected by local conditions, tree rings are too unreliable to serve as scientific evidence.",
      "Andrew Ellicott Douglass was the first person to count tree rings in order to find a tree’s age.",
      "Trees in tropical forests are more useful to scientists than trees in regions with sharp seasons."
    ],
    answer: 0,
    explanationEn: "The passage explains that each ring records a year, that a single tree can mislead, and that cross-dating many trees lets scientists date wood precisely and reconstruct past climate. Paragraph 3 presents cross-dating as the solution to the unreliability of single trees, so “too unreliable” overstates the problem. Douglass is credited only with cross-dating, not with counting rings, and the passage names tropical trees as the harder case.",
    explanationZh: "文章说明每圈年轮代表一年，单棵树可能误导人，而通过对多棵树进行交叉定年，科学家就能精确确定木材年代并重建过去的气候。第 3 段把交叉定年作为解决单棵树不可靠问题的办法，所以说年轮“太不可靠”是言过其实；道格拉斯被提到的功劳只是交叉定年，并非数年轮；文中还把热带树木说成是更难研究的情形。"
  },
  {
    id: "rc-u1-q2", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u1", strand: "supporting-ideas", conceptIds: ["supporting-ideas"],
    stem: "According to the passage, why did Douglass originally study trees in Arizona?",
    choices: [
      "He wanted to find a way to date the timber in old buildings.",
      "He was trying to explain why some trees grow two bands in a year.",
      "He suspected that changes in the sun affected the climate on Earth.",
      "He hoped to learn why trees grow faster in some regions."
    ],
    answer: 2,
    explanationEn: "Paragraph 3 says he “had begun studying trees in Arizona because he suspected that changes in the sun affected the climate on Earth.” Dating timber was a later use of cross-dating, which he developed afterward, and the passage never mentions either of the other two aims.",
    explanationZh: "第 3 段写道，他开始研究亚利桑那州的树木，是因为他“怀疑太阳的变化会影响地球的气候”。给建筑木材定年是交叉定年法发展出来之后的用途；另外两个目的，文章都没有提到。"
  },
  {
    id: "rc-u1-q3", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u1", strand: "inference", conceptIds: ["inference"],
    stem: "The passage suggests that tree-ring dating would be LEAST useful for studying which of the following?",
    choices: [
      "A pine beam, several centuries old, taken from a building in Central Europe",
      "A tropical tree from a forest where the climate hardly changes",
      "A living tree in a region with cold winters and warm summers",
      "An oak that lived through several severe droughts"
    ],
    answer: 1,
    explanationEn: "Paragraph 5 says that where the climate is steady all year, as in many tropical forests, trees may show no clear yearly rings, so the method works poorly there. Pine beams, trees with sharp seasons, and oaks that survived droughts (which leave narrow rings) are all described as good material.",
    explanationZh: "第 5 段指出，在全年气候稳定的地方（如许多热带森林），树木可能没有清晰的年轮，这种方法的效果就差。而松木梁、四季分明地区的树木，以及经历过干旱的橡树（干旱会留下窄年轮），文中都把它们当作适用的材料。"
  },
  {
    id: "rc-u1-q4", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-u1", strand: "inference", conceptIds: ["inference"],
    stem: "Douglass’s method of cross-dating depends most directly on the assumption that",
    choices: [
      "every tree produces exactly one ring each year, without exception",
      "the width of a ring is determined only by the age of the tree",
      "older trees give more reliable records than younger trees",
      "trees growing in the same region respond to the weather in similar ways"
    ],
    answer: 3,
    explanationEn: "Cross-dating works by lining up the sequences of wide and narrow rings that trees in one region share, and those shared sequences exist only if the same weather affects the trees in similar ways. Paragraph 3 says a tree may produce two bands or none, so the method cannot assume one ring per year, and paragraph 2 shows that ring width depends on conditions, not on age alone.",
    explanationZh: "交叉定年法是把同一地区树木共有的宽窄年轮序列对齐；只有当同一天气对这些树产生相似影响时，才会出现这种共有序列，所以这是它的前提。第 3 段说树可能一年长两条带或一条也没有，因此方法不可能假定“每年恰好一圈”；第 2 段也说明年轮宽度取决于生长条件，而不只是树龄。"
  },
  {
    id: "rc-u1-q5", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u1", strand: "vocabulary", conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 4, “refine” most nearly means",
    choices: [
      "make more precise",
      "remove impurities from",
      "make more polite",
      "disagree with"
    ],
    answer: 0,
    glosses: [["refine", "改进；使精确；提炼"], ["precise", "精确的"], ["impurity", "杂质"], ["polite", "有礼貌的"]],
    explanationEn: "Scientists who use radioactive carbon “check and refine their results” by comparing them with tree-ring records, so the records help make the dates more accurate. “Remove impurities from” is the literal sense used for oil or metal, and “make more polite” describes manners; neither fits dating results.",
    explanationZh: "利用放射性碳测年的科学家借助年轮记录来“核对并改进”自己的结果，也就是让测得的年代更精确。“去除杂质”是 refine 用于石油、金属时的字面义，“使更有礼貌”指的是举止；两者都不适用于测年结果。"
  },
  {
    id: "rc-u1-q6", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-u1", strand: "organization-logic", conceptIds: ["organization-logic"],
    stem: "Which of the following best describes the function of paragraph 3 in the passage?",
    choices: [
      "It argues that individual trees are too variable to be studied scientifically or used as evidence.",
      "It shows why one tree can mislead and introduces a technique that solved the problem.",
      "It explains how the pale and dark bands of a ring are formed.",
      "It compares the methods of several scientists who studied tree rings."
    ],
    answer: 1,
    explanationEn: "Paragraph 3 begins with the problem (“no single tree can be trusted completely”), lists causes of misleading rings, and then presents Douglass’s cross-dating as the way around it. It does not give up on trees, the formation of pale and dark bands belongs to paragraph 2, and Douglass is the only scientist it discusses.",
    explanationZh: "第 3 段先提出问题（“没有哪一棵树是完全可靠的”），列举造成年轮误导的原因，然后介绍道格拉斯的交叉定年法作为解决办法。它并没有否定对树木的研究；浅色带和深色带如何形成是第 2 段的内容；这一段也只谈到道格拉斯一位科学家。"
  },
  {
    id: "rc-u2-q1", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u2", strand: "main-idea", conceptIds: ["main-idea"],
    stem: "Which of the following best expresses the central idea of the passage?",
    choices: [
      "Piano tuning is a difficult craft that demands special tools and years of training.",
      "A music teacher’s poor choice of assistant almost spoils an important recital.",
      "A young musician comes to value skilled work even when no one notices it.",
      "A student decides that listening matters more than performing."
    ],
    answer: 2,
    explanationEn: "The narrator begins by resenting the task, comes to admire Mr. Szabo’s patient skill, and ends by thinking of him during the recital, where his work is invisible to everyone. The tuning details are only the setting, nothing goes wrong at the recital, and the narrator never concludes that listening matters more than performing.",
    explanationZh: "叙述者起初对这份差事心怀怨气，后来逐渐钦佩萨博先生耐心的技艺，最后在自己的独奏会上想起了他，而他的工作对所有人来说都是看不见的。调音的细节只是背景；独奏会上并没有出差错；叙述者也没有得出“倾听比演奏更重要”的结论。"
  },
  {
    id: "rc-u2-q2", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-u2", strand: "supporting-ideas", conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 3, what happens to the “wobble” as two strings come closer to agreeing?",
    choices: [
      "It slows down and finally disappears.",
      "It speeds up until it can no longer be heard.",
      "It grows louder before it fades away.",
      "It moves to a higher pitch."
    ],
    answer: 0,
    explanationEn: "Mr. Szabo says that “the closer they come, the slower it beats,” and the narrator then describes the pulse as stretching, slowing, and dissolving until only one clear tone remains. Nothing in the paragraph says the wobble speeds up, grows louder, or rises in pitch.",
    explanationZh: "萨博先生说“它们靠得越近，脉动就越慢”，叙述者随后描述这种脉动被拉长、变慢，最终消散，只剩下一个清澈的单音。段落里没有说颤动会加快、变响或升高音调。"
  },
  {
    id: "rc-u2-q3", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-u2", strand: "inference", conceptIds: ["inference"],
    stem: "The narrator says, “I had expected skill to look like something dramatic.” This statement suggests that, before watching Mr. Szabo work, the narrator believed that",
    choices: [
      "tuning a piano was a task that almost anyone could do",
      "musicians were more skilled than the people who maintain their instruments",
      "Mr. Szabo was a famous performer",
      "real skill would usually show itself in striking, visible ways"
    ],
    answer: 3,
    explanationEn: "The narrator expected “a flourish, a flash of fingers” and found “patience” instead, which shows that skill had been pictured as something showy and easy to see. The passage never says the narrator thought tuning was easy, ranked musicians above technicians, or believed Mr. Szabo was a famous performer.",
    explanationZh: "叙述者原以为会看到“一个潇洒的动作、一阵飞舞的手指”，结果看到的却是“耐心”，这说明此前叙述者把技艺想象成华丽而醒目的东西。文中没有说叙述者认为调音谁都能做、认为演奏者比维护乐器的人更高明，或认为萨博先生是著名演奏家。"
  },
  {
    id: "rc-u2-q4", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u2", strand: "vocabulary", conceptIds: ["vocabulary-in-context"],
    stem: "As used in paragraph 3, “dissolved” most nearly means",
    choices: [
      "melted into liquid",
      "faded away",
      "officially ended",
      "blended into a mixture"
    ],
    answer: 1,
    glosses: [["dissolve", "溶解；渐渐消失；解散"], ["fade", "逐渐消失"], ["officially", "正式地"], ["mixture", "混合物"]],
    explanationEn: "The pulse “dissolved so gently that I could not say when it had gone,” so it gradually vanished. “Melted into liquid” and “blended into a mixture” are the science-class senses of dissolve, and “officially ended” is the legal sense (as when a committee is dissolved); none describes a sound that fades.",
    explanationZh: "那脉动“那么轻柔地消散了，我说不出它是什么时候不见的”，说明它是逐渐消失了。“化成液体”和“混合成一体”是 dissolve 在科学课上的意思，“正式解散”是它的另一种用法（如解散委员会）；这些都不能用来形容渐渐消失的声音。"
  },
  {
    id: "rc-u2-q5", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-u2", strand: "organization-logic", conceptIds: ["organization-logic"],
    stem: "Which of the following best describes the function of the final paragraph?",
    choices: [
      "It describes the narrator’s nervousness and fear of playing before a large audience.",
      "It explains why the school’s piano needed regular tuning.",
      "It shows that time with Mr. Szabo has changed how the narrator hears the music.",
      "It criticizes the audience for ignoring the tuner’s work."
    ],
    answer: 2,
    explanationEn: "In the final paragraph the narrator plays and thinks of “the wobble that was no longer there,” then looks for the gray cardigan, which shows that Mr. Szabo’s lesson has changed how the narrator hears the music. The cold hands are only a passing detail, the need for tuning is explained earlier, and the narrator never blames the audience.",
    explanationZh: "最后一段里，叙述者一边演奏一边想到“那已不复存在的颤动”，随后还在观众席里寻找那件灰色开襟毛衣，说明萨博先生的话改变了叙述者听这场演奏的方式。双手冰凉只是顺带一提；调音的必要性在前文已经交代；叙述者也没有责怪观众。"
  },
  {
    id: "rc-u2-q6", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u2", strand: "tone-style-figurative", conceptIds: ["tone-style-figurative"],
    stem: "In paragraph 3, Mr. Szabo says that two strings that almost agree “argue.” By describing the strings this way, he most likely wants to",
    choices: [
      "suggest that the piano is badly out of tune",
      "show that he is annoyed with the narrator",
      "warn that the strings may break if they are tuned too quickly",
      "help the narrator picture a technical effect in familiar, human terms"
    ],
    answer: 3,
    explanationEn: "Giving the strings a human behavior (arguing) turns the abstract idea of two slightly different pitches into something the narrator can easily picture, and the “argument” ending as the strings agree fits his explanation. He says the wobble appears when strings “almost agree,” so it does not mean the piano is badly out of tune, and nothing in the scene shows annoyance or any danger to the strings.",
    explanationZh: "让琴弦像人一样“争吵”，就把“两个音高略有差别”这一抽象现象变成了叙述者容易想象的画面，而琴弦趋于一致时“争吵”平息，也正符合他的讲解。他说的是琴弦“几乎一致”时才会出现颤动，并不表示钢琴严重走音；场景里也没有任何迹象显示他不耐烦或琴弦有断裂的危险。"
  },
  {
    id: "rc-u3-q1", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-u3", strand: "main-idea", conceptIds: ["main-idea"],
    stem: "Which of the following best summarizes the author’s argument?",
    choices: [
      "Talented artists should spend more time teaching beginners.",
      "Schools should require students to take more art classes.",
      "Ordinary people should make art for its own sake, even when it is not impressive.",
      "Teenagers stop drawing mainly because they have less free time than young children have."
    ],
    answer: 2,
    explanationEn: "The first paragraph states the thesis (ordinary people should make art, “badly and cheerfully and often”), and the rest of the passage gives reasons and answers an objection. Teaching beginners and required art classes are never proposed, and the passage blames the drop in drawing on learning to compare, not on lack of time.",
    explanationZh: "第 1 段给出了中心论点（普通人应该创作艺术，“哪怕做得很糟，也要开开心心、经常地做”），后面几段都在陈述理由并回应反对意见。文中既没有建议让有天赋的艺术家去教初学者，也没有主张增设艺术必修课；至于人们不再画画，文中归因于“学会了比较”，而不是没有时间。"
  },
  {
    id: "rc-u3-q2", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u3", strand: "supporting-ideas", conceptIds: ["supporting-ideas"],
    stem: "According to the author, what lasting benefit comes from trying to draw a chair or a tree, even if the drawing turns out badly?",
    choices: [
      "The person learns to look at the world more attentively.",
      "The person’s later drawings are certain to be good enough to show to others.",
      "The person finds out whether he or she has real artistic talent.",
      "The person learns to finish difficult projects more quickly."
    ],
    answer: 0,
    explanationEn: "Paragraph 2 says the drawing “may be clumsy, but the looking is a skill that lasts,” and that someone who fails to draw a tree “will never again see a tree quite so carelessly.” The author never promises good results, never treats art as a test of talent (the opening paragraph rejects that idea), and says nothing about finishing projects faster.",
    explanationZh: "第 2 段说，画出来的东西也许笨拙，但“看”这项本领会长久保留；一个没能画好树的人，“以后再也不会那么漫不经心地看一棵树了”。作者从没保证以后一定画得好，也不把艺术当作检验天赋的考试（第 1 段正是反对这种想法），更没有提到做事会变快。"
  },
  {
    id: "rc-u3-q3", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-u3", strand: "inference", conceptIds: ["inference"],
    stem: "Which of the following can be inferred from the contrast between the seven-year-old and the fourteen-year-old in paragraph 1?",
    choices: [
      "Fourteen-year-olds usually draw less skillfully than seven-year-olds because they lose interest.",
      "Children should be discouraged from sharing their drawings with other people.",
      "Most fourteen-year-olds prefer other hobbies to drawing.",
      "The change lies in how people judge their work, not in how well they draw."
    ],
    answer: 3,
    explanationEn: "Both children produce “the same horse,” yet one is delighted and the other hides it, and the author says “we have not lost interest, exactly; we have learned to compare.” So the change lies in self-judgment, not in drawing skill or interest, which rules out the claims that older teenagers draw worse or have simply lost interest. Nothing suggests that children should be kept from sharing their work.",
    explanationZh: "两个孩子画的是“同一匹马”，一个欣喜不已，另一个却把它藏起来；作者还说“我们并不是失去了兴趣，而是学会了比较”。可见变化出在人们如何评判自己的作品，而不是画画的水平或兴趣，因此“十四岁的孩子画得更差”和“他们只是对画画失去了兴趣”都说不通；文中也没有任何迹象表明应该不让孩子给别人看画。"
  },
  {
    id: "rc-u3-q4", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u3", strand: "vocabulary", conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 1, “absorb” most nearly means",
    choices: [
      "soak up a liquid",
      "gradually take in",
      "reduce the shock of",
      "pay for"
    ],
    answer: 1,
    glosses: [["absorb", "吸收；领会；承担"], ["gradually", "逐渐地"], ["soak", "浸泡；吸收"], ["shock", "冲击；震动"]],
    explanationEn: "A rule “that no one ever states aloud” cannot be taught directly, so people must pick it up bit by bit from what they see around them, which is the idea of taking something in. “Soak up a liquid,” “reduce the shock of,” and “pay for” are other senses of absorb (a sponge, a blow, a cost) and do not suit a rule.",
    explanationZh: "一条“从未有人明说”的规矩不可能被直接教给你，只能从周围的所见所闻中一点一点地领会，这正是“逐渐吸收、接受”的意思。“吸收液体”“缓解冲击”“承担费用”是 absorb 的其他用法（海绵、冲击、开销），都不适合用来说一条规矩。"
  },
  {
    id: "rc-u3-q5", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u3", strand: "organization-logic", conceptIds: ["organization-logic"],
    stem: "The author mentions a weekend basketball game, singing in the shower, and cooking a dinner (paragraph 3) in order to",
    choices: [
      "show that people enjoy activities without expecting impressive results",
      "argue that sports are more valuable to society than the arts are",
      "suggest that the arts are so different from other pastimes that they cannot be compared",
      "explain why professional athletes train so hard for competitions"
    ],
    answer: 0,
    explanationEn: "These everyday examples are activities people enjoy without expecting a stadium crowd or a restaurant-quality result, and the author then asks why painting, writing, and music should be treated differently. The comparison supports the argument; it is not meant to rank sports above art or to claim that art stands apart, and professional athletes are never discussed.",
    explanationZh: "这些日常的例子都是人们不指望获得体育场观众或餐厅水准的成果也照样乐在其中的活动，随后作者追问：为什么绘画、写作和音乐就该区别对待？这一类比是为了支持论点，而不是为了说体育比艺术更有价值，也不是说艺术无法与其他活动相比；文中更没有谈到职业运动员。"
  },
  {
    id: "rc-u3-q6", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-u3", strand: "tone-style-figurative", conceptIds: ["tone-style-figurative"],
    stem: "Which of the following best describes the tone of the passage?",
    choices: [
      "playful and lighthearted, not meant to be taken seriously",
      "urgent and alarmed about the decline of the arts",
      "earnest and encouraging, with occasional humor",
      "bitter and resigned about lost opportunities"
    ],
    answer: 2,
    explanationEn: "The author states a sincere belief and urges readers to act (“So pick up the pencil...”), with light touches of humor such as the five-legged horse and the dinner no restaurant would serve. The humor does not make the argument unserious, and nothing in the passage sounds alarmed, bitter, or resigned.",
    explanationZh: "作者陈述的是真诚的信念，并鼓励读者行动（“所以，拿起铅笔……”），同时点缀了轻松的幽默，比如五条腿的马和餐厅绝不会端上桌的晚饭。这些幽默并没有让论证变得不严肃；文中也看不出惊慌、怨恨或无可奈何的情绪。"
  },
  {
    id: "rc-u4-q1", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u4", strand: "main-idea", conceptIds: ["main-idea"],
    stem: "Which of the following best states the main idea of the passage?",
    choices: [
      "Maria Mitchell was the most celebrated astronomer of the nineteenth century, admired around the world.",
      "A king’s offer of a gold medal first inspired Maria Mitchell to begin searching the sky for comets.",
      "Telescopes of the 1800s were too weak to reveal anything new, so discoveries depended entirely on luck.",
      "Maria Mitchell’s discovery of a comet came from patient observation, a habit she passed on to students."
    ],
    answer: 3,
    explanationEn: "Paragraph 1 shows her sweeping the sky evening after evening, paragraph 5 calls the discovery “less a stroke of luck than the reward of a habit,” and paragraph 4 shows her teaching students to learn by observing. The passage never ranks her above all other astronomers, never says the offered medal inspired her search (her love of the sky came from her father), and shows her making the discovery with a modest telescope, so weak instruments were not the issue.",
    explanationZh: "第 1 段写她一个傍晚接一个傍晚地扫视天空，第 5 段称这次发现“与其说是一次走运，不如说是习惯的回报”，第 4 段又写她教学生通过观测来学习。文章没有说她是同时代最杰出的天文学家；也没有说是悬赏的奖章激发了她的观测（她对星空的热爱来自父亲）；而她用一架并不起眼的望远镜就有了发现，所以也谈不上“望远镜太弱”。"
  },
  {
    id: "rc-u4-q2", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-u4", strand: "supporting-ideas", conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 3, the king of Denmark offered a gold medal to the first person to",
    choices: [
      "photograph a comet through a telescope for the first time",
      "discover a comet too dim to be seen without a telescope",
      "measure the path of a comet across the sky with great accuracy",
      "teach astronomy at a college for women"
    ],
    answer: 1,
    explanationEn: "Paragraph 3 says the king “had offered a gold medal to the first person to discover a comet too dim to be seen without a telescope.” Photographing or measuring comets is not mentioned there, and teaching at Vassar is described in paragraph 4 as a separate event.",
    explanationZh: "第 3 段写道，丹麦国王曾悬赏一枚金质奖章，授予第一个发现“必须借助望远镜才能看到的暗淡彗星”的人。拍摄或测量彗星的轨迹，这里都没有提到；在瓦萨学院任教则是第 4 段中另一件事。"
  },
  {
    id: "rc-u4-q3", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u4", strand: "inference", conceptIds: ["inference"],
    stem: "The passage suggests that Mitchell was able to notice the faint patch of light mainly because she",
    choices: [
      "owned a much more powerful telescope than most of the professional astronomers of her time",
      "had been told by her father exactly where in the sky to look",
      "knew the usual look of the sky so well that anything out of place stood out",
      "looked up at the sky by chance while passing the roof"
    ],
    answer: 2,
    explanationEn: "Paragraph 5 says she had “studied the same sky so many times that a single faint smudge, out of place, could not escape her,” and paragraph 1 stresses that she was “not on the roof by accident.” Her telescope is called modest, nothing says her father pointed out the spot, and that evening was one of many she had spent sweeping the sky.",
    explanationZh: "第 5 段说她“对同一片天空观察过那么多次，以至于任何一小片位置不对的微弱光斑都逃不过她的眼睛”，第 1 段也强调她“出现在屋顶上绝非偶然”。她的望远镜被形容为并不起眼，文中没有说父亲给她指出了位置，那个傍晚也只是她无数个扫视天空的傍晚之一。"
  },
  {
    id: "rc-u4-q4", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u4", strand: "vocabulary", conceptIds: ["vocabulary-in-context"],
    stem: "As used in paragraph 1, “sweep” most nearly means",
    choices: [
      "search methodically across",
      "clean a room with a broom",
      "defeat an opponent completely",
      "pass quickly over"
    ],
    answer: 0,
    glosses: [["sweep", "扫视；打扫；横扫"], ["methodically", "有条理地"], ["broom", "扫帚"], ["opponent", "对手"]],
    explanationEn: "Mitchell came to the roof “to sweep the sky, section by section,” looking for something unusual, so the verb means to search an area in an orderly way. “Clean a room with a broom” and “defeat an opponent completely” are other senses of sweep, and “pass quickly over” ignores the careful, section-by-section search the sentence describes.",
    explanationZh: "米切尔来到屋顶是为了“一片一片地”“扫视天空”，寻找不寻常的东西，所以 sweep 在这里是“有条理地搜寻一片区域”。“用扫帚打扫房间”和“彻底击败对手”是 sweep 的其他义项；“匆匆掠过”则与句中一片一片仔细搜寻的情形不符。"
  },
  {
    id: "rc-u4-q5", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-u4", strand: "organization-logic", conceptIds: ["organization-logic"],
    stem: "The author begins the passage with a scene of Mitchell on the roof (paragraph 1) most likely in order to",
    choices: [
      "show that astronomy was a dangerous and unwelcome hobby for women in the 1840s",
      "draw the reader into a vivid moment before explaining how she came to be there",
      "explain how comets are formed and why they are so rarely discovered",
      "contrast Mitchell’s wealthy childhood with the struggles she faced later in life"
    ],
    answer: 1,
    explanationEn: "Paragraph 1 opens with a vivid scene (the cold evening, the lamplight, the stars), and paragraph 2 then explains how Mitchell came to be on that roof. The passage never calls astronomy dangerous for women, says nothing about how comets form, and does not describe a wealthy childhood.",
    explanationZh: "第 1 段以一个生动的场景（寒冷的傍晚、窗里的灯光、满天的星星）开头，第 2 段再交代米切尔为什么会出现在那个屋顶上。文章没有说天文学对女性是危险的爱好，没有讲彗星是怎样形成的，也没有描写富裕的童年。"
  },
  {
    id: "rc-u4-q6", level: "upper", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-u4", strand: "tone-style-figurative", conceptIds: ["tone-style-figurative"],
    stem: "In paragraph 5, the author pictures “a small figure on a flat roof, a small telescope, and an enormous dark sky.” This image mainly emphasizes",
    choices: [
      "that Mitchell felt lonely and discouraged during her search",
      "that the sky is too large for any one person to study in a lifetime",
      "that astronomy was less popular than other sciences in her time",
      "the contrast between Mitchell’s small means and the vastness of the sky"
    ],
    answer: 3,
    explanationEn: "Setting a “small figure” and a “small telescope” against an “enormous dark sky” stresses how little Mitchell had to work with compared with what she was searching, which makes her success more striking and supports the idea that science begins with someone “willing to keep looking.” Nothing in the passage describes loneliness or discouragement, calls the sky impossible to study (she found a comet), or compares the popularity of sciences.",
    explanationZh: "把“小小的身影”和“小小的望远镜”放在“辽阔幽暗的夜空”之下，突出的是米切尔手里的条件与她所探索的对象之间的巨大反差，这让她的成功显得更加难得，也呼应了“始于有人愿意一直看下去”的观点。文中没有描写孤独或沮丧，也没有说天空大得无法研究（她毕竟发现了彗星），更没有比较各门科学的受欢迎程度。"
  }
];
