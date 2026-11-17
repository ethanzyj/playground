// Additional original ISEE-style Reading Comprehension practice for the Middle Level, set 3.
// Passages rc-m5 (narrative) and rc-m6 (expository), six questions each.
// All passages and questions are original; none is a real ISEE item.

export const PASSAGES = [
  {
    id: "rc-m5", level: "middle", genre: "narrative",
    titleEn: "The Slowest Start", titleZh: "最慢的起跑", topicEn: "School sports: a cross-country runner",
    paragraphs: [
      "In my first four cross-country races, I led the entire field for exactly ninety seconds. I know the number because Coach Vega timed it. When the whistle blew, I shot off the line like a cork from a bottle, and for one glorious minute and a half the course stretched out ahead of me, empty and mine. Then my legs turned to wet sand, my lungs began to burn, and the other runners floated past me one by one, a few of them chatting as they went.",
      "“You run as if someone is chasing you, Imani,” Coach Vega told me after my fourth race, handing me a paper cup of water. “Then you find out nobody is.” Before I could argue, she gave me an assignment that sounded like a punishment. At Saturday’s meet, I was to run the first mile so slowly that it felt silly. “Let them go,” she said. “The race is two miles long. It does not end at the first bend.”",
      "On Saturday the whistle shrieked, and the pack surged forward like water through an open gate. Every muscle I owned wanted to follow. Instead I tucked in at the back and counted my breaths: three steps in, two steps out. By the first bend I was almost last. A boy in a green uniform glanced over his shoulder with something that looked like pity, and my cheeks burned. For the first time in my life I was running slowly on purpose, and it felt like walking down a hallway while everyone stared.",
      "At the one-mile marker I let my stride lengthen, and something odd happened: my legs still felt like legs. The red-faced boy who had passed me in every earlier race was ahead of me now, but he was no longer gliding. His shoulders were hunched, and his feet landed with a heavy slap. I caught him at the foot of the long hill, the same hill where I had always fallen apart, and went by without a word. Then came a girl in orange shoes, then two boys running side by side, then another, and then I lost count. I knew the look on their faces. It was my own.",
      "I crossed the finish line twenty-first out of sixty-two, and my time was nearly a minute faster than my best. Coach Vega said nothing. She simply held up her stopwatch so I could read it, smiling the way people do when they have been right and are too polite to mention it. I bent over with my hands on my knees, gasping, and finally understood what four races had not taught me. Leading at the first bend had never been the point. The point was to still have something left when the hill came."
    ],
    paragraphsZh: [
      "在我最初的四场越野跑比赛中，我领先全场的时间恰好是九十秒。我之所以知道这个数字，是因为 Vega 教练给我计过时。哨声一响，我就像瓶塞从瓶口里弹出来一样冲出起跑线，在那美妙的一分半钟里，赛道在我面前伸展开去，空荡荡的，完全属于我。然后，我的双腿变得像湿沙子一样沉重，肺里火烧火燎，其他选手一个接一个轻飘飘地从我身边超了过去，有几个还一边跑一边聊着天。",
      "“你跑起来就像有人在后面追你，Imani，”Vega 教练在我第四场比赛结束后递给我一纸杯水，对我说，“然后你才发现根本没有人在追你。”我还没来得及争辩，她就给了我一项听起来像惩罚的任务：在周六的比赛中，我要把第一英里跑得慢到让人觉得可笑。“让他们先走，”她说，“这场比赛有两英里长，它不会在第一个弯道就结束。”",
      "周六，哨声尖厉地响起，大队人马像水流冲出敞开的闸门一样向前涌去。我身上的每一块肌肉都想跟上去。可我却紧跟在队伍的最后面，默默数着自己的呼吸：三步吸气，两步呼气。到第一个弯道时，我几乎是最后一名。一个穿绿色队服的男孩回头瞥了我一眼，目光里似乎带着一丝同情，我的脸颊一下子烧了起来。生平第一次，我故意跑得这么慢，感觉就像走过一条走廊，而每个人都在盯着我看。",
      "到了一英里的标志处，我放开了步幅，接着发生了一件怪事：我的双腿竟然还像是双腿。那个红脸膛的男孩在之前每一场比赛中都超过了我，此刻他跑在我前面，却不再轻盈地滑行了。他的肩膀缩着，脚落地时发出沉重的啪嗒声。在那段长长的上坡脚下，也就是我过去总是一败涂地的那段坡，我追上了他，一声不吭地从他身边超了过去。接着是一个穿橙色跑鞋的女孩，然后是并排跑着的两个男孩，然后又是一个，再往后我就数不清了。我认得他们脸上的神情。那正是我自己的神情。",
      "我冲过终点线时排在第二十一名，参赛者共六十二人，成绩比我自己的最好成绩快了将近一分钟。Vega 教练一句话也没说。她只是举起秒表让我看上面的数字，脸上带着人们在自己说对了、却又出于礼貌不好意思提起时的那种微笑。我双手撑着膝盖弯下腰，大口喘着气，终于明白了四场比赛都没能教会我的道理：在第一个弯道领先，从来就不是重点。重点是，当上坡来临时，你还留有余力。"
    ]
  },
  {
    id: "rc-m6", level: "middle", genre: "expository",
    titleEn: "The Fish That Feed the Forest", titleZh: "滋养森林的鱼", topicEn: "Ecology: salmon, bears, and trees",
    paragraphs: [
      "Each year, from late summer into autumn, rivers along the Pacific coast of North America fill with returning salmon. The fish have spent a year or more feeding and growing in the open ocean, and now many of them travel hundreds of miles upstream to the gravel beds where they hatched. By the time they arrive, their bodies are battered and their strength is nearly gone. There the females lay their eggs and the males fertilize them, a process called spawning, and within days or weeks the adults die. It looks like an ending. For the surrounding forest, however, it is closer to a feast.",
      "Even before the spawning ends, hungry animals gather along the banks. Brown bears wade into the shallows and snatch fish in their jaws. Eagles watch from the treetops, and otters, gulls, and wolves take their share. Bears often carry a catch into the woods before eating it, and when fish are plentiful, they may eat only the richest parts and leave the rest behind. Partly eaten salmon end up scattered across the forest floor, where flies, beetles, and bacteria soon go to work on them.",
      "This matters because salmon are packed with nitrogen and other nutrients gathered from the sea, and the soils of many northern forests are short of nitrogen. Scientists can follow the trail because nitrogen from the ocean has a slightly different chemical signature than nitrogen from the land. They have found more of the ocean’s signature in the leaves and wood of trees beside salmon streams than in the same kinds of trees beside streams that salmon cannot reach. In some studies, the trees beside salmon streams also grew faster. In a very real sense, the forest was eating fish.",
      "The benefit runs in both directions. Trees shade the stream and keep the water cool, which matters because salmon eggs and young salmon do poorly in warm water. Their roots hold the banks in place, so less mud washes into the gravel where eggs lie. When old trees finally topple into the current, they form quiet pools where young fish can rest and hide from predators. The forest that is fed by the fish, in other words, also shelters the next generation of fish.",
      "This web of connections explains why a river’s troubles do not stay in the river. Dams, pollution, and overfishing have caused salmon runs to shrink in many places. When fewer fish return, bears and eagles may go hungry, and the trees along the banks may receive less of the nutrients they once counted on. That is why many scientists who study these links now argue that protecting a forest can begin with protecting the fish that swim past it."
    ],
    paragraphsZh: [
      "每年从夏末到秋天，北美洲太平洋沿岸的河流里都挤满了洄游归来的鲑鱼。这些鱼在广阔的大洋里觅食、成长了一年多，如今，其中许多逆流而上数百英里，回到它们当年孵化的砾石河床。等它们抵达时，身体已经伤痕累累，力气也几乎耗尽。在那里，雌鱼产卵，雄鱼使卵受精，这个过程叫作产卵繁殖，几天或几周之内，成年鱼就死去了。这看上去像是结局。然而对周围的森林来说，这更像是一场盛宴。",
      "早在产卵繁殖结束之前，饥饿的动物就已经聚集在河岸边。棕熊涉入浅水，用嘴一口咬住鱼。鹰在树梢上守望，水獭、海鸥和狼也各取一份。熊常常把捕到的鱼叼进树林里再吃，而当鱼很多的时候，它们可能只吃最肥美的部分，把剩下的丢在一旁。吃了一半的鲑鱼就这样散落在林地上，苍蝇、甲虫和细菌很快就开始分解它们。",
      "这一点很重要，因为鲑鱼体内富含从海洋中汲取的氮和其他养分，而许多北方森林的土壤缺氮。科学家之所以能追踪这条线索，是因为来自海洋的氮和来自陆地的氮在化学特征上略有不同。他们发现，与鲑鱼到不了的溪流边的同种树木相比，鲑鱼溪流边的树木在叶子和木材里带有更多海洋氮的特征。在一些研究中，鲑鱼溪流边的树木还长得更快。从某种非常真实的意义上说，这片森林其实是在“吃”鱼。",
      "这种益处是双向的。树木为溪流遮阴，使水温保持凉爽，这很重要，因为鲑鱼卵和幼鱼在温水里难以生存。树根固定着河岸，因此冲进鱼卵所在砾石层的泥沙就更少。当老树最终倒进水流中，就会形成安静的水潭，幼鱼可以在里面休息，躲避捕食者。换句话说，被鱼滋养的森林，也庇护着下一代的鱼。",
      "这张由种种联系织成的网，说明了为什么河流的麻烦不会只停留在河里。水坝、污染和过度捕捞，使许多地方每年洄游的鲑鱼数量不断减少。当回来的鱼变少时，熊和鹰可能会挨饿，河岸边的树木也可能得到更少它们曾经依靠的养分。正因如此，许多研究这些联系的科学家如今主张，保护森林可以从保护那些从森林边游过的鱼开始。"
    ]
  }
];

export const PROBLEMS = [
  // ---------------------------------------------------------------- rc-m5
  {
    id: "rc-m5-q1", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m5", strand: "main-idea", difficulty: "easy",
    conceptIds: ["main-idea"],
    stem: "Which of the following best states the main idea of the passage?",
    stemZh: "下面哪一项最能概括这篇文章的主旨？",
    choices: [
      "A runner leads a race for ninety seconds before she tires and the rest of the field passes her.",
      "A runner who starts too fast learns that holding back early can help her finish stronger.",
      "A coach proves to a runner that starting slowly is always better than starting quickly.",
      "A runner decides that her coach’s advice is mistaken and returns to her usual way of racing."
    ],
    answer: 1,
    explanationEn: "The story follows a runner who leads for ninety seconds and then fades (paragraph 1), tries her coach’s plan for a slow start (paragraphs 2 and 3), and then passes tired runners and sets a personal best (paragraphs 4 and 5). The choice about leading for ninety seconds covers only the opening, “always better” stretches one runner’s experience into a rule for every race, and the narrator ends up trusting her coach, not rejecting her advice.",
    explanationZh: "故事先写“我”领跑九十秒后就体力不支（第 1 段），再写她尝试教练“起跑放慢”的办法（第 2、3 段），最后写她超过疲惫的对手、跑出自己的最好成绩（第 4、5 段）。“领先九十秒”那一项只概括了开头；“总是更好”把一个人的经历说成了适用于所有比赛的规则，过于绝对；而主人公最后是信服了教练，并没有否定她的建议。"
  },
  {
    id: "rc-m5-q2", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m5", strand: "vocabulary", difficulty: "medium",
    conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 1, the word “field” most nearly means",
    stemZh: "在第 1 段中，“field” 一词最接近的意思是：",
    choices: [
      "an open area of grassy land",
      "a subject that people study",
      "the range of what a person can see",
      "all of the runners in a race"
    ],
    answer: 3,
    glosses: [["field", "（比赛的）全体参赛者；田野；领域"], ["entire", "整个的；全部的"], ["grassy", "长满草的"], ["subject", "学科；主题"]],
    explanationEn: "In “I led the entire field for exactly ninety seconds,” the narrator is ahead of everyone else in the race, and the sentences that follow describe other runners passing her. So “field” means all of the runners in the race. A cross-country course does cross grassy land, but no one can “lead” a piece of land, and the choices about a subject of study and about what a person can see have nothing to do with a race.",
    explanationZh: "“I led the entire field for exactly ninety seconds”的意思是“我”在九十秒里领先于比赛中的所有人，后面几句也写到别的选手陆续超过了她，所以 field 指“比赛中的全体选手”。越野赛道确实会经过草地，但人不可能“领先一块地”；关于学科领域和视野范围的两项，则与比赛毫无关系。"
  },
  {
    id: "rc-m5-q3", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m5", strand: "supporting-ideas", difficulty: "easy",
    conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 2, what did Coach Vega ask the narrator to do at Saturday’s meet?",
    stemZh: "根据第 2 段，Vega 教练要求“我”在周六的比赛中怎么做？",
    choices: [
      "Run the first mile much more slowly than she usually did",
      "Stay close to the leaders so she could learn their pace",
      "Run both miles at an easy jogging pace from start to finish",
      "Time herself during the first mile and report the result"
    ],
    answer: 0,
    explanationEn: "Paragraph 2 says the narrator was “to run the first mile so slowly that it felt silly.” The coach’s words “Let them go” are the opposite of staying close to the leaders. Only the first mile was to be slow, not the whole race, and the passage never mentions the narrator timing herself.",
    explanationZh: "第 2 段说，“我”要“把第一英里跑得慢到让人觉得可笑”。教练说的“让他们先走”与“紧跟领跑者”正好相反；要放慢的只是第一英里，而不是全程；文中也没有提到让“我”自己计时。"
  },
  {
    id: "rc-m5-q4", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m5", strand: "inference", difficulty: "medium",
    conceptIds: ["inference"],
    stem: "In paragraph 3, the narrator’s cheeks burn most likely because she",
    stemZh: "在第 3 段中，“我”的脸颊发烫，最可能是因为她：",
    choices: [
      "has sprinted too hard at the start and is overheated",
      "is angry that Coach Vega is watching her from the side of the course",
      "feels embarrassed to be near the back while another runner seems to pity her",
      "is afraid that she will not be able to climb the long hill ahead"
    ],
    answer: 2,
    explanationEn: "A boy glances back “with something that looked like pity,” and the narrator says that running slowly felt like “walking down a hallway while everyone stared.” These details show embarrassment at being near the back. She is holding back on purpose, so she is not overheated, and the passage never says that the coach is watching from the side or that she fears the hill at this point.",
    explanationZh: "一个男孩回头瞥她，目光里“似乎带着一丝同情”，而她觉得慢跑“就像走过一条走廊，每个人都在盯着看”，可见她是因为落在队尾、又被人同情而感到难为情。她是故意放慢的，所以不是跑得太猛而发热；文中也没有说教练在场边看着，或者她此刻害怕那道坡。"
  },
  {
    id: "rc-m5-q5", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m5", strand: "inference", difficulty: "hard",
    conceptIds: ["inference"],
    stem: "In paragraph 4, the narrator says of the runners she passes, “I knew the look on their faces. It was my own.” What does she most likely mean?",
    stemZh: "在第 4 段中，“我”谈到被她超过的选手时说：“我认得他们脸上的神情。那正是我自己的神情。”她最可能是什么意思？",
    choices: [
      "The runners were looking at her with the same pity that the boy in the green uniform had shown.",
      "The runners looked as worn out as she herself had looked in earlier races after starting too fast.",
      "The runners were as determined to win as she had been in the first minute of her earlier races.",
      "The runners were as angry about being passed as she had been when others passed her."
    ],
    answer: 1,
    explanationEn: "The first runner she passes in paragraph 4 is hunched, heavy-footed, and no longer gliding, and the narrator says the others she passes wear the same look. Paragraph 1 describes her own collapse after a fast start: legs like wet sand and burning lungs. So “my own” look is the look of someone who has used up her energy too early. The pity in paragraph 3 belonged to the boy in green, and the passage never says that the runners were eager to win or angry.",
    explanationZh: "第 4 段中，被她超过的第一个选手肩膀缩着、脚步沉重、不再轻盈滑行，而她说其他被超过的人脸上也是同样的神情。第 1 段则写了她自己起跑过猛后的崩溃：双腿像湿沙子、肺里火烧火燎。所以“自己的神情”就是体力过早耗尽的神情。第 3 段的同情目光属于那个穿绿色队服的男孩，文中也没有说这些选手急于求胜或感到愤怒。"
  },
  {
    id: "rc-m5-q6", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m5", strand: "tone-style-figurative", difficulty: "medium",
    conceptIds: ["tone-style-figurative"],
    stem: "Which of the following best describes the narrator’s tone as she describes her first four races in paragraph 1?",
    stemZh: "在第 1 段中，“我”讲述自己最初四场比赛时，语气可以怎样概括？",
    choices: [
      "bitter and resentful",
      "proud and boastful",
      "worried and discouraged",
      "humorous and self-mocking"
    ],
    answer: 3,
    glosses: [["bitter", "怨恨的；痛苦的"], ["resentful", "愤愤不平的"], ["boastful", "自夸的"], ["discouraged", "灰心的"], ["humorous", "幽默的"], ["self-mocking", "自嘲的"]],
    explanationEn: "The narrator pokes fun at herself: she knows exactly how long she led, calls that minute and a half “glorious,” and then says her legs “turned to wet sand” while other runners drifted past “chatting.” These playful exaggerations show humor at her own expense, not bitterness, boasting, or worry.",
    explanationZh: "“我”在拿自己开玩笑：她清楚地知道自己领先了多久，把那一分半钟称作“美妙的”，接着又说双腿“变成了湿沙子”，别的选手还一边聊天一边超过她。这些俏皮的夸张流露的是拿自己开涮的幽默，而不是怨恨、自夸或忧虑。"
  },
  // ---------------------------------------------------------------- rc-m6
  {
    id: "rc-m6-q1", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m6", strand: "main-idea", difficulty: "easy",
    conceptIds: ["main-idea"],
    stem: "Which of the following best states the main idea of the passage?",
    stemZh: "下面哪一项最能概括这篇文章的主旨？",
    choices: [
      "Pacific salmon travel hundreds of miles from the open ocean back to the streams where they hatched.",
      "Bears are the most important animals in the forests along the Pacific coast.",
      "Salmon carry nutrients from the ocean into rivers and forests, linking the sea, animals, and trees.",
      "Dams, pollution, and overfishing have wiped out the salmon in almost every river."
    ],
    answer: 2,
    explanationEn: "Each paragraph adds a link to one chain: the salmon’s return from the sea (paragraph 1), the animals that feed on them (2), the nitrogen that reaches the trees (3), the shelter the forest gives back (4), and the danger of losing the fish (5). The choice about the salmon’s journey covers only paragraph 1, bears are just one of several animals mentioned, and the passage says salmon runs have shrunk “in many places,” not that the fish are gone from almost every river.",
    explanationZh: "每一段都为同一条链条增添了一环：鲑鱼从海洋洄游归来（第 1 段）、以它们为食的动物（第 2 段）、抵达树木的氮（第 3 段）、森林回馈的庇护（第 4 段），以及失去鱼群的危险（第 5 段）。关于洄游旅程的那一项只涉及第 1 段；熊只是文中提到的几种动物之一；文章说的是鲑鱼洄游的数量在“许多地方”减少，并没有说几乎所有河流里的鲑鱼都消失了。"
  },
  {
    id: "rc-m6-q2", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m6", strand: "organization-logic", difficulty: "hard",
    conceptIds: ["organization-logic"],
    stem: "In paragraph 1, the author writes, “It looks like an ending. For the surrounding forest, however, it is closer to a feast.” This contrast mainly serves to",
    stemZh: "在第 1 段中，作者写道：“这看上去像是结局。然而对周围的森林来说，这更像是一场盛宴。”这一对比的主要作用是：",
    choices: [
      "prepare readers for the idea that the salmon’s death actually helps other living things",
      "warn readers that salmon are close to disappearing from rivers along the Pacific coast",
      "explain that most salmon are eaten by hungry animals before they can finish their long journey",
      "show that the author feels sad about the death of the salmon after their long journey"
    ],
    answer: 0,
    explanationEn: "The two sentences set up a contrast between how the salmon’s death looks (an ending) and what it brings (a feast for the forest), and paragraphs 2 and 3 then show who is fed. The warning about shrinking salmon runs does not appear until paragraph 5, and “ending” refers to the death of each fish after spawning, not to the loss of the whole species. The passage says the adults die after spawning, not that most are eaten first, and it shows no sadness.",
    explanationZh: "这两句把鲑鱼之死“看上去像结局”与它实际给森林带来的“盛宴”形成对照，第 2、3 段随后具体说明了哪些生物因此受益。关于鲑鱼减少的警示直到第 5 段才出现，而且这里的“结局”指的是每条鱼产卵后的死亡，并不是整个物种的消失。文中说的是成年鱼产卵后死去，而不是多数鱼在产卵前就被吃掉；作者也没有流露出悲伤。"
  },
  {
    id: "rc-m6-q3", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m6", strand: "supporting-ideas", difficulty: "easy",
    conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 2, what do bears often do with the salmon they catch?",
    stemZh: "根据第 2 段，熊捕到鲑鱼后常常怎么做？",
    choices: [
      "Bury the fish in the mud so they can eat it later in the winter",
      "Drop the fish back into the river after a single bite",
      "Eat each fish completely at the edge of the water",
      "Carry the fish into the woods and sometimes eat only part of it"
    ],
    answer: 3,
    explanationEn: "Paragraph 2 says bears “often carry a catch into the woods before eating it,” and that when fish are plentiful they “may eat only the richest parts and leave the rest behind.” The paragraph says nothing about burying fish or dropping them back into the river, and eating each fish completely at the water’s edge contradicts what it says.",
    explanationZh: "第 2 段说，熊“常常把捕到的鱼叼进树林里再吃”，而且鱼多的时候“可能只吃最肥美的部分，把剩下的丢在一旁”。文中没有提到把鱼埋在泥里，或咬一口就扔回河里；而“在水边把每条鱼吃干净”则与文中所述相矛盾。"
  },
  {
    id: "rc-m6-q4", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m6", strand: "vocabulary", difficulty: "medium",
    conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 3, the word “signature” most nearly means",
    stemZh: "在第 3 段中，“signature” 一词最接近的意思是：",
    choices: [
      "a person’s name written in his or her own handwriting",
      "a distinctive mark that shows where something came from",
      "a sound that one animal makes to warn others of danger",
      "the symbols at the start of a piece of music that show its key"
    ],
    answer: 1,
    glosses: [["signature", "特征；标记；亲笔签名"], ["distinctive", "独特的；有区别的"], ["handwriting", "笔迹；手写"], ["symbol", "符号"], ["key", "（乐曲的）调"]],
    explanationEn: "The sentence says scientists can follow the trail because ocean nitrogen has a slightly different chemical signature from land nitrogen, so a signature is a feature that sets the two apart and shows where the nitrogen came from. A handwritten name is the most familiar meaning of “signature,” but it makes no sense for nitrogen, and the passage mentions neither animal warning sounds nor music.",
    explanationZh: "句子说，科学家之所以能追踪这条线索，是因为海洋氮和陆地氮的化学 signature 略有不同，也就是说 signature 是能把两者区分开、并显示氮来源的独特标记。“亲笔签名”是 signature 最常见的意思，但用在氮上说不通；文中既没有提到动物的警告声，也没有涉及音乐。"
  },
  {
    id: "rc-m6-q5", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m6", strand: "inference", difficulty: "hard",
    conceptIds: ["inference"],
    stem: "Which of the following conclusions is best supported by paragraph 3?",
    stemZh: "下面哪一项结论最能得到第 3 段的支持？",
    choices: [
      "Trees grow faster the closer they stand to the ocean.",
      "Nitrogen from the land is harmful to trees that also take in nitrogen from the sea.",
      "A shortage of nitrogen probably slows the growth of some trees in northern forests.",
      "Salmon supply every nutrient that the trees beside a stream need."
    ],
    answer: 2,
    explanationEn: "Paragraph 3 says that the soils of many northern forests are short of nitrogen and that, in some studies, trees beside salmon streams, which gain extra nitrogen from the sea, grew faster. Together these facts suggest that too little nitrogen probably holds some trees back. Nothing in the paragraph ties growth to distance from the ocean or says that land nitrogen is harmful, and “every nutrient” is far too strong, since the paragraph says only that salmon supply nitrogen and other nutrients.",
    explanationZh: "第 3 段说，许多北方森林的土壤缺氮，并且在一些研究中，从海洋获得额外氮的鲑鱼溪流边的树木长得更快。这两点合起来说明，缺氮很可能限制了一些树木的生长。文中没有把树木生长与离海远近联系起来，也没有说陆地上的氮有害；而“每一种养分”又过于绝对，因为文中只说鲑鱼提供氮和其他养分。"
  },
  {
    id: "rc-m6-q6", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m6", strand: "supporting-ideas", difficulty: "medium",
    conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 4, what helps keep mud from washing into the gravel where salmon eggs lie?",
    stemZh: "根据第 4 段，什么能防止泥沙冲进鲑鱼卵所在的砾石层？",
    choices: [
      "The roots of the trees along the banks",
      "The shade that trees cast over the water",
      "The quiet pools that fallen trees form",
      "The bears that carry fish into the woods"
    ],
    answer: 0,
    explanationEn: "Paragraph 4 says that tree roots “hold the banks in place, so less mud washes into the gravel where eggs lie.” Shade keeps the water cool, and the pools made by fallen trees shelter young fish, so those are different benefits. Bears carrying fish are discussed in paragraph 2 and have nothing to do with mud.",
    explanationZh: "第 4 段说，树根“固定着河岸，因此冲进鱼卵所在砾石层的泥沙就更少”。树荫的作用是让水温保持凉爽，倒下的树木形成的水潭则是给幼鱼提供栖身之处，这些是不同的益处；熊叼鱼是第 2 段的内容，与泥沙无关。"
  }
];
