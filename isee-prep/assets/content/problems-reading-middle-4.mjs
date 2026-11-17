// Original ISEE-style Reading Comprehension practice, Middle Level set 4.
// Passages rc-m7 (descriptive) and rc-m8 (persuasive), six questions each.
// All passages and questions are original; none is a real ISEE item.

export const PASSAGES = [
  {
    id: "rc-m7", level: "middle", genre: "descriptive",
    titleEn: "The Morning the Kiln Opens", titleZh: "开窑的早晨", topicEn: "A craft: the morning a pottery kiln is opened",
    paragraphs: [
      "On the morning the kiln is opened, the pottery studio is quieter than usual. Students drift in before first period and talk in low voices, as people do in a library, their eyes sliding toward the back corner. There the kiln squats like a great round toad, its steel door shut tight. For two days it has been sealed, roaring through a night of fire and then cooling through a long, still day. Inside wait the bowls and mugs the students shaped weeks ago. Nobody knows yet what the fire has done to them.",
      "Ms. Ibarra, who runs the studio, will not be hurried. She rests a palm on the door the way a nurse feels a forehead for fever. Warm, but no longer hot. “Clay is patient,” she tells the class, “but it does not forgive. Let cold air rush in too soon, and a pot can crack like a dropped plate.” So everyone waits. From inside the kiln comes a faint tick, then another, then a thin little tink, the sound of metal and brick shrinking as they cool, like a slow clock in an empty house.",
      "At last she lifts the latch. A breath of warm air rolls out, smelling of baked earth. At first the pots look like strangers. When they went in, their glazes, powdery paints that turn to glass in the fire, were dull and chalky: pale gray, muddy pink, the color of oatmeal. Now a bowl glows sea green. A tall jug holds a blue so deep it seems to have caught the sky at dusk. The fire has melted the dusty coats into skins of glass, and the glass has gathered up the light.",
      "Not every piece comes through unharmed. A little plate has a crack running across its face like a river on a map. A mug has glued itself to the shelf with a drip of glaze, and its maker groans. Ms. Ibarra only shrugs. “The fire always gets a vote,” she says, chipping the mug free with a small chisel. “You make the best pot you can, and then you let go.” She does not sound sorry, exactly. To her, the uncertainty is half the pleasure of the craft.",
      "One by one, the pots are handed out. Each student turns a finished piece over in both hands, still faintly warm, like a loaf fresh from the oven. It is strange to hold something you made and almost not recognize it, to know it was changed by a heat nobody in the room could see. The hush breaks. Voices rise, laughter bounces off the shelves, and by the window Ms. Ibarra stands with her hands in her apron pockets, smiling at the noise."
    ],
    paragraphsZh: [
      "开窑的这天早晨，陶艺教室比平时安静。学生们在第一节课之前三三两两地走进来，像在图书馆里一样压低声音说话，目光不时滑向教室后面的角落。那里蹲着那座窑，像一只圆滚滚的大蟾蜍，钢制的窑门关得严严实实。两天来，它一直封闭着：先是在一整夜的烈火中呼啸，接着又在漫长而寂静的一天里慢慢冷却。里面等着的，是学生们几周前做好的碗和马克杯。没有人知道，火究竟把它们变成了什么样子。",
      "负责这间陶艺教室的 Ibarra 老师不肯被人催促。她把一只手掌贴在窑门上，就像护士摸额头看人有没有发烧。温的，但已经不烫了。“泥土是有耐心的，”她对全班说，“但它不会原谅人。冷空气要是过早地冲进去，陶器就会像摔在地上的盘子一样裂开。”于是大家都等着。窑里传出轻轻的一声“嗒”，接着又一声，再接着是细细的一声“叮”，那是金属和砖块在冷却中收缩发出的声响，仿佛空房子里一只走得很慢的钟。",
      "终于，她拉开了门闩。一股温热的气息涌了出来，带着烧过的泥土的味道。起初，那些陶器看上去像陌生人。入窑时，它们的釉——一种在火中会变成玻璃的粉末状涂料——暗淡无光，像蒙着一层粉笔灰：浅灰色、浑浊的粉红色、燕麦色。而现在，一只碗泛着海绿色的光；一只高高的壶，蓝得那样深，仿佛把黄昏的天空都兜了进去。火把粉尘似的釉层熔成了一层层玻璃的外皮，而玻璃把光亮都收拢了起来。",
      "并不是每件作品都能完好无损地出来。一只小盘子上有一道裂缝，横贯盘面，像地图上的一条河。一只马克杯靠一滴釉把自己粘在了架子上，做它的那个学生哀叹了一声。Ibarra 老师只是耸了耸肩。“火总是有一票的，”她一边说，一边用一把小凿子把马克杯凿了下来。“你尽力做出最好的陶器，然后就放手。”她听上去并不是真的难过。对她来说，这份不确定性，正是这门手艺一半的乐趣。",
      "陶器被一件件发了下来。每个学生都用双手把烧好的作品翻过来看，它还微微带着温热，像刚出炉的面包。握着自己做出来的东西，却几乎认不出它来，明白它是被一股房间里谁也看不见的高温改变了模样，这种感觉很奇妙。寂静被打破了。说话声此起彼伏，笑声在架子间回荡，窗边，Ibarra 老师双手插在围裙口袋里站着，微笑着听这一片喧闹。"
    ]
  },
  {
    id: "rc-m8", level: "middle", genre: "persuasive",
    titleEn: "A Second Life for Broken Things", titleZh: "给坏掉的东西第二次生命", topicEn: "A school proposal: a student repair club",
    paragraphs: [
      "Open the bottom drawer of almost any supply cabinet at our school and you will find a graveyard. There lie calculators that will not turn on, a tablet with a cracked case, a desk lamp that no longer lights, and a stapler that has forgotten how to staple. No one wants to throw them away, yet no one knows how to fix them, so they wait in the dark until someone finally sweeps the whole pile into the trash. We can do better. I propose that our school start a Repair Club.",
      "My first reason is that throwing things away is wasteful. Every gadget contains metals dug out of the earth, and factories burn fuel to make it and ship it around the world. When we toss out a keyboard because of one loose cable, all of that effort ends up in a landfill, where some of the materials can slowly leak into the soil. A twenty-minute repair can keep the keyboard working for years, and it costs far less than a new one.",
      "My second reason is that repairing teaches what no textbook can. To fix a broken object, you must work out what is wrong, test your guesses one at a time, and stay patient when the first idea fails. A student who has traced a dead keyboard to a loose cable will never again see a machine as a sealed magic box. And when the keys click back to life, the pride on that student’s face is a lesson in itself.",
      "Some people will say that a repair club is risky. Electronics can carry dangerous electricity, and a room full of screwdrivers sounds like an accident waiting to happen. That is a serious concern, and I do not dismiss it. But a safe club is easy to plan. Members would start with simple jobs, such as patching bicycle tires or sewing on buttons. Electronic repairs would be done only on unplugged items, with safety glasses and trained adult volunteers nearby, and anything with a swollen battery or a frayed cord would go to a professional. Others warn that many broken things cannot be saved. True, some repairs will fail. Even then, the student learns how the thing works and why it broke, which throwing it away would never teach.",
      "A broken object does not have to be the end of its story. I ask our principal and the student council to approve a Repair Club for next semester, with a small budget for tools and a handful of volunteer helpers. In return, our school would gain a tidier supply cabinet, a lighter trash can, and students who, when something stops working, ask “How could I fix this?” instead of “Where is the trash can?”"
    ],
    paragraphsZh: [
      "打开我们学校几乎任何一个教学用品柜最下面的抽屉，你都会看到一座“坟场”。躺在里面的有打不开机的计算器、外壳裂了的平板电脑、再也亮不起来的台灯，还有一个已经忘了怎么订书的订书机。没有人舍得把它们扔掉，可也没有人知道怎么修，于是它们就在黑暗里一直等着，直到有一天，终于有人把这一堆全扫进垃圾桶。我们可以做得更好。我提议，我们学校成立一个修理社团。",
      "我的第一个理由是，扔东西太浪费了。每一件小器具里都含有从地下开采出来的金属，工厂要燃烧燃料来制造它，还要把它运往世界各地。当我们因为一根松脱的线缆就扔掉一个键盘时，所有这些投入都落进了垃圾填埋场，其中一些材料还可能慢慢渗入土壤。一次二十分钟的修理，就能让这个键盘继续用上好几年，而且花费比买一个新的少得多。",
      "我的第二个理由是，修理能教给人课本教不了的东西。要修好一件坏掉的东西，你必须弄清楚到底哪里出了毛病，一个接一个地验证自己的猜测，并且在第一个想法行不通时保持耐心。一个把失灵的键盘一路追查到一根松脱线缆的学生，再也不会把机器看成一只封死的魔盒了。而当按键重新咔嗒咔嗒地响起来时，那名学生脸上的自豪，本身就是一堂课。",
      "有些人会说，修理社团有风险。电子产品可能带有危险的电流，而一间摆满螺丝刀的屋子，听起来就像一场随时会发生的事故。这是个严肃的顾虑，我不会对它置之不理。但要规划出一个安全的社团并不难。成员们可以先从简单的活儿做起，比如补自行车胎或缝纽扣。电子产品的修理只能在断电的物品上进行，要戴护目镜，并且有受过培训的成年志愿者在旁边；任何电池鼓包或电线磨损的东西，都应交给专业人员处理。还有人提醒说，许多坏掉的东西是修不好的。没错，有些修理会失败。即便如此，学生也能弄明白这东西是怎么运转的、又是怎么坏的，而这是把它扔掉永远教不会的。",
      "一件坏掉的东西，不一定就是它故事的终点。我请求校长和学生会批准在下学期成立修理社团，并为它提供一小笔购买工具的经费和几位志愿者帮手。作为回报，我们的学校将得到一个更整洁的教学用品柜、一只更轻的垃圾桶，以及这样一群学生：东西坏了的时候，他们会问“我怎么才能把它修好？”，而不是“垃圾桶在哪儿？”"
    ]
  }
];

export const PROBLEMS = [
  // ---------------------------------------------------------------- rc-m7
  {
    id: "rc-m7-q1", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-m7", strand: "main-idea", conceptIds: ["main-idea"],
    stem: "Which of the following best describes what the passage is mostly about?",
    stemZh: "下面哪一项最能说明这篇文章主要写的是什么？",
    choices: [
      "A potter’s advice on how to avoid cracks and other costly mistakes when firing clay",
      "A teacher’s disappointment when several of her students’ best pots are damaged in the kiln",
      "A short history of how glazed pottery has been made in many parts of the world",
      "A class waiting for a kiln to cool and then seeing how fire has changed its pots"
    ],
    answer: 3,
    explanationEn: "Paragraph 1 sets up the hushed wait, paragraph 2 explains why it cannot be hurried, paragraph 3 reveals how the glazes have changed, and paragraph 5 shows the students holding their finished pots, so the passage is about waiting for the kiln to open and discovering what the fire has done. The warning about cracks (paragraph 2) and the damaged pieces (paragraph 4) are only parts of the scene, Ms. Ibarra only shrugs at the damage rather than showing disappointment, and the history of pottery is never discussed.",
    explanationZh: "第 1 段铺垫安静的等待，第 2 段说明为什么不能催促，第 3 段揭晓釉色的变化，第 5 段写学生们捧着烧好的陶器，所以全文写的是等候开窑、发现火把陶器变成了什么样。关于裂开的提醒（第 2 段）和个别受损的作品（第 4 段）只是场景的一部分，Ibarra 老师面对损坏也只是耸耸肩，并没有失望；文中从未谈到陶器的历史。"
  },
  {
    id: "rc-m7-q2", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-m7", strand: "supporting-ideas", conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 2, why does Ms. Ibarra make the class wait before she opens the kiln?",
    stemZh: "根据第 2 段，Ibarra 老师为什么要让全班等一等再开窑？",
    choices: [
      "Cold air rushing into a kiln that is still hot could crack the pots.",
      "The kiln door is too hot to touch until the kiln is completely cold.",
      "The glazes will not change color unless the kiln stays shut for a week.",
      "The students are not allowed to see their pots until class begins."
    ],
    answer: 0,
    explanationEn: "Ms. Ibarra tells the class that if cold air rushes in too soon, “a pot can crack like a dropped plate,” and then “everyone waits.” She rests a palm on the door, so it is not too hot to touch, and the passage never mentions a week-long wait or a rule about when students may see their pots.",
    explanationZh: "Ibarra 老师对全班说，冷空气过早冲进去，“陶器就会像摔在地上的盘子一样裂开”，于是“大家都等着”。她能把手掌贴在窑门上，说明门并没有烫得不能碰；文中也没有提到要等上一周，或是不许学生提前看到作品的规定。"
  },
  {
    id: "rc-m7-q3", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-m7", strand: "tone-style-figurative", conceptIds: ["tone-style-figurative"],
    stem: "In paragraph 2, the author compares the sound of the cooling kiln to “a slow clock in an empty house.” This comparison mainly helps create a feeling of",
    stemZh: "在第 2 段中，作者把正在冷却的窑发出的声响比作“空房子里一只走得很慢的钟”。这个比喻主要营造出一种什么样的感觉？",
    choices: [
      "danger, as though something terrible is about to happen",
      "sadness, as though a place has been left empty and forgotten",
      "boredom, as though the morning will never come to an end",
      "hushed anticipation, as though everyone is holding still and listening"
    ],
    answer: 3,
    glosses: [["danger", "危险"], ["sadness", "悲伤"], ["boredom", "无聊"], ["hushed", "安静的；静悄悄的"], ["anticipation", "期待；盼望"]],
    explanationEn: "A slow clock ticking in an empty house suggests stillness and waiting, which matches the quiet studio where “nobody knows yet” what the fire has done and the students’ eyes keep sliding toward the kiln (paragraph 1). The mood is therefore expectant, not frightening, sad, or bored.",
    explanationZh: "空房子里一只走得很慢的钟，给人静止、等待的感觉，这与安静的陶艺教室相吻合：“没有人知道”火把陶器变成了什么样，学生们的目光也不停地滑向窑（第 1 段）。所以气氛是满怀期待的，而不是可怕、悲伤或无聊。"
  },
  {
    id: "rc-m7-q4", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-m7", strand: "vocabulary", conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 3, the word “dull” most nearly means",
    stemZh: "在第 3 段中，“dull” 一词最接近的意思是：",
    choices: [
      "boring and uninteresting",
      "slow to learn or understand",
      "lacking brightness and shine",
      "no longer sharp enough to cut"
    ],
    answer: 2,
    glosses: [["dull", "暗淡的；乏味的；迟钝的；钝的"], ["boring", "无聊的；乏味的"], ["brightness", "明亮；鲜亮"], ["shine", "光泽"], ["sharp", "锋利的；尖的"]],
    explanationEn: "The glazes are described as “dull and chalky: pale gray, muddy pink, the color of oatmeal,” and after firing a bowl “glows” and a jug holds a deep blue, so “dull” means lacking brightness and shine. “Boring,” “slow to learn,” and “no longer sharp” are other senses of the word and do not describe a color.",
    explanationZh: "文中把釉描写成“dull and chalky: pale gray, muddy pink, the color of oatmeal”（暗淡、像粉笔灰：浅灰、浑浊的粉红、燕麦色），烧好后碗“glows”（泛光）、壶泛着深蓝，所以 dull 在这里是“缺乏光彩和光泽”。“乏味”“学得慢”“不再锋利”都是 dull 的其他义项，不能用来形容颜色。"
  },
  {
    id: "rc-m7-q5", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-m7", strand: "inference", conceptIds: ["inference"],
    stem: "Which of the following can most reasonably be inferred from the description of the mug in paragraph 4?",
    stemZh: "根据第 4 段对马克杯的描写，下面哪一项推断最合理？",
    choices: [
      "The mug was made from a different kind of clay than the other pieces.",
      "Melted glaze ran off the mug during the firing and hardened onto the shelf.",
      "The mug cracked because the kiln was opened before it had cooled.",
      "The student who made the mug forgot to put glaze on it before the firing."
    ],
    answer: 1,
    explanationEn: "Paragraph 3 says the fire melts glaze into glass, so a mug “glued” to the shelf “with a drip of glaze” must have lost some melted glaze that ran down and hardened as the kiln cooled. Nothing is said about a different clay or a cracked mug (the only crack described is in the plate), and a drip of glaze shows that the mug had been glazed.",
    explanationZh: "第 3 段说火会把釉熔成玻璃，所以被“一滴釉”粘在架子上的马克杯，一定是有熔化的釉流了下来，在窑冷却时凝固在了架子上。文中没有说杯子用了不同的泥，也没有说杯子裂了（提到裂缝的只有盘子）；有“一滴釉”恰恰说明杯子上过釉。"
  },
  {
    id: "rc-m7-q6", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-m7", strand: "inference", conceptIds: ["inference", "tone-style-figurative"],
    stem: "Ms. Ibarra’s remark that “the fire always gets a vote” most likely means that she believes",
    stemZh: "Ibarra 老师说“火总是有一票的”，这句话最可能表明她认为：",
    choices: [
      "a potter can never be completely sure how a firing will turn out",
      "the students should help decide how long each pot stays in the kiln",
      "a pot that is damaged in the kiln should be fired a second time",
      "any pot that is damaged in the kiln was made carelessly"
    ],
    answer: 0,
    explanationEn: "She says this while freeing a damaged mug and adds, “You make the best pot you can, and then you let go”; the author notes that “the uncertainty is half the pleasure of the craft.” So the “vote” means the fire has a say in the result that the potter cannot control. Nothing suggests that students decide the firing time or that damaged pots are fired again, and her words show that she blames no one’s carelessness.",
    explanationZh: "她是在把受损的马克杯凿下来时说这话的，接着又说“你尽力做出最好的陶器，然后就放手”，作者还写道“这份不确定性正是这门手艺一半的乐趣”。所以“有一票”是指：火对结果也有发言权，而陶艺师无法控制它。文中没有说学生要决定烧多久，也没有说受损的陶器要再烧一次；她的话也表明她并不责怪谁粗心。"
  },
  // ---------------------------------------------------------------- rc-m8
  {
    id: "rc-m8-q1", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-m8", strand: "main-idea", conceptIds: ["main-idea"],
    stem: "The primary purpose of the passage is to",
    stemZh: "这篇文章的主要目的是：",
    choices: [
      "explain how everyday gadgets are made and shipped around the world",
      "warn students about the dangers of trying to repair broken electronics",
      "persuade school leaders to approve a club where students repair broken things",
      "describe the many broken objects stored in the school’s supply cabinets"
    ],
    answer: 2,
    glosses: [["persuade", "说服；劝说"], ["approve", "批准；赞同"]],
    explanationEn: "The author opens with the problem of a drawer full of broken things, gives two reasons for a repair club, answers two objections, and ends by asking the principal and student council to approve it, so the whole passage is meant to persuade. Manufacturing, safety, and the cabinets are details used along the way, not the purpose.",
    explanationZh: "作者开头点出抽屉里堆满坏东西的问题，接着给出办修理社团的两个理由，回应了两种反对意见，最后请校长和学生会批准，所以全文的目的是说服。器具的制造、安全问题和用品柜都只是论证中用到的细节，不是写作目的。"
  },
  {
    id: "rc-m8-q2", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "easy",
    passageId: "rc-m8", strand: "supporting-ideas", conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 2, why is it wasteful to throw away a keyboard that has one loose cable?",
    stemZh: "根据第 2 段，为什么把一个只有一根线缆松脱的键盘扔掉是浪费？",
    choices: [
      "Keyboards with loose cables are much harder to recycle than other gadgets.",
      "The effort used to make it is lost, though a short repair could save it.",
      "A new keyboard from the store will never work as well as the old one did.",
      "Landfills in most towns have no room left for any more electronic items."
    ],
    answer: 1,
    glosses: [["landfill", "垃圾填埋场"], ["recycle", "回收利用"]],
    explanationEn: "Paragraph 2 says that a keyboard carries the effort of mining metals and burning fuel, and that when we toss one out “because of one loose cable, all of that effort ends up in a landfill,” even though “a twenty-minute repair” could keep it working for years. Recycling, the quality of new keyboards, and landfill space are never discussed.",
    explanationZh: "第 2 段说，一个键盘凝聚着开采金属、消耗燃料的投入；因为一根松脱的线缆就把它扔掉，“所有这些投入都落进了垃圾填埋场”，而“一次二十分钟的修理”本可以让它再用好几年。文中从未谈到回收是否困难、新键盘的质量或填埋场的空间。"
  },
  {
    id: "rc-m8-q3", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-m8", strand: "inference", conceptIds: ["inference", "tone-style-figurative"],
    stem: "In paragraph 3, the author says that a student who has traced a dead keyboard to a loose cable will “never again see a machine as a sealed magic box.” This statement suggests that, before learning to make repairs, many students probably see machines as",
    stemZh: "第 3 段中，作者说，把失灵的键盘追查到一根松脱线缆上的学生，“再也不会把机器看成一只封死的魔盒”。这句话暗示，在学会修理之前，许多学生可能把机器看作：",
    choices: [
      "dangerous objects that should never be opened",
      "simple tools that anyone can fix in a few minutes",
      "costly items that are not worth repairing",
      "mysterious things whose insides they cannot understand"
    ],
    answer: 3,
    glosses: [["mysterious", "神秘的；难以理解的"], ["costly", "昂贵的"], ["insides", "内部；内部构造"]],
    explanationEn: "A “sealed magic box” is something whose inside is hidden and whose workings seem like magic. Saying that a student who has traced a fault will “never again” see a machine that way implies that students often think of machines as mysterious things they cannot understand. Danger is raised only in paragraph 4, and the author never calls machines simple or too costly to fix.",
    explanationZh: "“封死的魔盒”指的是里面看不见、运作起来像变魔术一样的东西。作者说追查过故障的学生“再也不会”这样看机器，就暗示许多学生原本把机器看成无法理解的神秘东西。危险直到第 4 段才被提起，作者也从未说机器简单，或贵得不值得修。"
  },
  {
    id: "rc-m8-q4", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-m8", strand: "vocabulary", conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 4, the word “dismiss” most nearly means",
    stemZh: "在第 4 段中，“dismiss” 一词最接近的意思是：",
    choices: [
      "treat as unimportant",
      "remove from a job",
      "allow a group to leave",
      "prove to be false"
    ],
    answer: 0,
    glosses: [["dismiss", "不予理会；解雇；让…离开；驳回"], ["unimportant", "不重要的"], ["job", "工作；职位"], ["false", "错误的；不真实的"]],
    explanationEn: "In “That is a serious concern, and I do not dismiss it,” the author says the worry deserves attention, so “dismiss” means to treat as unimportant. The other choices are other senses of the word (to remove someone from a job, to let a group leave, to reject as false) and do not fit a sentence about a concern.",
    explanationZh: "在“That is a serious concern, and I do not dismiss it”中，作者的意思是这个顾虑值得重视，所以 dismiss 是“不当回事、不予理会”。其他选项是这个词的别的义项（解雇某人、让一群人离开、驳回为错误），放进谈论顾虑的句子里都不合适。"
  },
  {
    id: "rc-m8-q5", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "hard",
    passageId: "rc-m8", strand: "organization-logic", conceptIds: ["organization-logic"],
    stem: "Which of the following best describes how paragraph 4 is organized?",
    stemZh: "下面哪一项最能说明第 4 段是怎样组织的？",
    choices: [
      "It states two objections and rejects both without giving any reasons.",
      "It states one objection, answers it, and then gives a new reason for the club.",
      "It states two objections, admits that they have some force, and answers each one.",
      "It states two objections, answers the first, and leaves the second unanswered."
    ],
    answer: 2,
    glosses: [["objection", "反对意见；异议"], ["admit", "承认"], ["reject", "拒绝；驳回"]],
    explanationEn: "Paragraph 4 first states the safety objection, admits that it is “a serious concern,” and answers it with simple starter jobs and safety rules. It then states the objection that many things cannot be saved, grants that “some repairs will fail,” and answers that students learn from the attempt anyway. The author gives reasons rather than brushing the objections aside, answers both of them, and adds no new reason for the club.",
    explanationZh: "第 4 段先提出安全方面的反对意见，承认这是“一个严肃的顾虑”，再用从简单活儿做起和安全措施来回应；接着提出“许多东西修不好”的反对意见，承认“有些修理会失败”，再回应说学生无论如何都能从尝试中学到东西。作者是用理由来回应而不是一笔带过，两种反对意见都作了回答，也没有再添加办社团的新理由。"
  },
  {
    id: "rc-m8-q6", level: "middle", section: "reading", type: "reading-comprehension", difficulty: "medium",
    passageId: "rc-m8", strand: "inference", conceptIds: ["inference"],
    stem: "Based on paragraph 4, which of the following would the author most likely support as an early project for the Repair Club?",
    stemZh: "根据第 4 段，作者最可能支持修理社团在早期做下面哪个项目？",
    choices: [
      "Opening a plugged-in television to look for the fault",
      "Mending a torn strap on a student’s backpack",
      "Replacing a swollen battery in a damaged laptop",
      "Building a brand-new robot out of spare parts"
    ],
    answer: 1,
    glosses: [["mend", "修补；缝补"], ["strap", "带子；背带"], ["swollen", "鼓起的；肿胀的"]],
    explanationEn: "Paragraph 4 says the club would start with simple, low-risk jobs such as patching bicycle tires or sewing on buttons, and mending a torn strap is a similar sewing job. Working on a plugged-in television breaks the rule of using only unplugged items, a swollen battery would “go to a professional,” and building a robot is not repairing anything.",
    explanationZh: "第 4 段说，社团会从补自行车胎、缝纽扣这类简单、低风险的活儿做起，修补书包断带是类似的缝补活。拆通着电的电视机违反了“只修断电物品”的规定，电池鼓包的东西要“交给专业人员”，而造一个机器人根本不是在修理东西。"
  }
];
