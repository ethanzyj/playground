// Original ISEE-style Reading Comprehension practice, set 1 (assignment P7a).
// Passages rc-l1, rc-l2, rc-l3 (Lower, 5 questions each) and rc-m1, rc-m2 (Middle, 6 questions each).
// All passages and questions are original; none is a real ISEE item.

export const PASSAGES = [
  {
    id: "rc-l1", level: "lower", genre: "narrative",
    titleEn: "The Clay Bird", titleZh: "泥塑小鸟", topicEn: "School and friendship",
    paragraphs: [
      "For a whole week, Mei had worked on a small clay bird in art class. She gave it a round belly, a pointed beak, and wings that curved like open hands. By Thursday the clay was dry and hard, and the bird was ready to be painted the next day. “Don’t touch it,” she teased her best friend, Kofi, as the bell rang. “It’s the best thing I’ve ever made.”",
      "Kofi had no plan to touch it. He was hurrying to put away his brushes when his elbow bumped the shelf. The bird tumbled to the floor and snapped into four pieces. The room was empty. Kofi’s heart pounded, and before he could think, he scooped up the pieces, stuffed them into his backpack, and rushed out the door.",
      "That night the pieces seemed to weigh more than stones. Kofi lay awake, staring at the ceiling and rehearsing what he might say. On Friday, Mei walked into art class and found the empty spot on the shelf. “Somebody took my bird,” she said in a small voice. Kofi stared at his shoes and said nothing.",
      "After school, he found Mei sitting alone on the playground steps. His hands shook as he unzipped his backpack. “I broke it,” he said. “It was an accident, but I hid the pieces, and that was wrong. I’m really sorry.”",
      "Mei looked at the pieces for a long moment. “I’m sad about the bird,” she said slowly, “but the hiding hurt more than the breaking. Accidents happen. I just wish you had told me right away.” Then she took a deep breath and almost smiled. “Do you have any glue?”",
      "On Monday, the mended bird sat on the shelf, with thin lines showing where the pieces had been joined. Mei painted it bright blue anyway. “It looks like it survived a storm,” she said. Kofi laughed, the first real laugh he had managed since the accident. As he swung his backpack over his shoulder, he noticed how light it felt."
    ],
    paragraphsZh: [
      "整整一个星期，Mei 都在美术课上捏一只小小的泥鸟。她给它捏出圆圆的肚子、尖尖的嘴，还有像摊开的双手一样弯弯的翅膀。到了星期四，泥已经干透变硬，小鸟第二天就可以上色了。下课铃响时，她笑着逗她最好的朋友 Kofi：“别碰它哦！这是我做过的最棒的东西。”",
      "Kofi 压根没想碰它。他急着收拾画笔，胳膊肘撞到了架子。小鸟掉到地上，断成了四块。教室里一个人也没有。Kofi 的心怦怦直跳，还没来得及多想，就把碎块一把捡起，塞进书包，冲出了教室。",
      "那天晚上，那些碎块仿佛比石头还要沉。Kofi 躺在床上睁着眼，盯着天花板，在心里一遍遍演练该怎么说。星期五，Mei 走进美术教室，发现架子上空了一块。“有人把我的小鸟拿走了。”她小声说。Kofi 低头盯着自己的鞋子，什么也没说。",
      "放学后，他在操场的台阶上找到了独自坐着的 Mei。他双手颤抖着拉开书包拉链。“是我弄坏的，”他说，“是不小心的，可我把碎块藏了起来，这样不对。我真的很抱歉。”",
      "Mei 看着那些碎块，沉默了好一会儿。“我为小鸟难过，”她慢慢地说，“可是你把它藏起来，比你把它弄坏更让我伤心。谁都会有不小心的时候，我只是希望你当时马上告诉我。”接着，她深吸了一口气，嘴角差点露出笑意。“你有胶水吗？”",
      "星期一，修好的小鸟放回了架子上，细细的裂痕还看得出来。Mei 还是把它涂成了亮蓝色。“它看起来像是挺过了一场暴风雨。”她说。Kofi 笑了，这是出事以来他第一次真心地笑。他把书包甩到肩上，发现它变得好轻。"
    ]
  },
  {
    id: "rc-l2", level: "lower", genre: "expository",
    titleEn: "The Sea Otter’s Clever Tricks", titleZh: "海獭的聪明本领", topicEn: "Animals and nature",
    paragraphs: [
      "Off the rocky coasts of the North Pacific Ocean, a small furry animal floats on its back in the waves. It is a sea otter, and it spends almost its whole life in the water. Many whales and seals stay warm in cold seas with a thick layer of fat called blubber, but sea otters have almost none. So how do they keep from freezing?",
      "The answer is their fur. A sea otter’s fur is so dense that one square inch of skin can hold up to a million hairs, more than grow on an entire human head. These hairs trap tiny bubbles of air against the skin, and the trapped air works like a warm blanket. But fur keeps an otter warm only when it is clean and fluffy, so otters spend hours every day grooming themselves. They also eat huge amounts of food, because the energy helps them stay warm.",
      "Sea otters are also among the few animals that use tools. When an otter finds a hard-shelled meal, such as a clam or a crab, it may dive to the sea floor and pick up a rock as well. Then, floating at the surface, it rests the rock on its chest and pounds the shell against it until the shell cracks open. Some otters even keep a favorite rock in a pouch of loose skin under one front leg.",
      "Sleeping in the open sea can be risky, because the current could carry a drowsy otter far from home. To prevent this, otters wrap themselves in long strands of kelp, a giant seaweed anchored to the sea floor, and float peacefully while the kelp holds them in place.",
      "Sea otters also help the ocean itself. They eat sea urchins, spiny animals that munch on kelp. In places where otters were hunted for their fur until none were left, urchins multiplied and ate whole kelp forests down to bare rock. Where otters have returned, the kelp has grown thick again, sheltering fish and many other sea creatures. For such a small animal, the sea otter has a very big job."
    ],
    paragraphsZh: [
      "在北太平洋多岩石的海岸外，一只毛茸茸的小动物仰面漂在波浪上。它是一只海獭，几乎一辈子都生活在水里。许多鲸和海豹靠一层名叫“鲸脂”的厚厚脂肪在寒冷的海水里保暖，可海獭几乎没有这层脂肪。那么，它们是怎么避免被冻僵的呢？",
      "答案就在它们的毛皮上。海獭的毛密得惊人：一平方英寸的皮肤上最多能长一百万根毛，比一个人整个脑袋上的头发还多。这些毛会在皮肤旁困住许多小气泡，被困住的空气就像一条暖和的毯子。不过，毛皮只有在干净、蓬松的时候才能保暖，所以海獭每天要花好几个小时梳理自己的毛。它们还吃下大量的食物，因为食物提供的能量能帮助它们保持体温。",
      "海獭还是为数不多会使用工具的动物之一。当海獭找到蛤蜊或螃蟹这类带硬壳的食物时，它可能会潜到海底，顺便捡起一块石头。然后，它漂在水面上，把石头放在胸口，拿壳往石头上猛敲，直到壳裂开。有些海獭甚至会把自己心爱的石头收在一条前肢下面、由松弛皮肤形成的小袋里。",
      "在开阔的海面上睡觉是有风险的，因为水流可能把昏昏欲睡的海獭带到离家很远的地方。为了避免这种情况，海獭会用长长的巨藻（一种固定在海底的巨大海藻）把自己裹起来，然后安然漂浮，让巨藻把它们固定在原地。",
      "海獭还在帮助大海本身。它们吃海胆——一种以巨藻为食、浑身长刺的动物。在一些地方，海獭因毛皮被猎杀到一只不剩，海胆便大量繁殖，把整片巨藻林啃得只剩光秃秃的岩石。而在海獭回归的地方，巨藻又长得茂密起来，为鱼类和许多其他海洋生物提供了栖身之所。对这样一种小动物来说，海獭承担的责任可真不小。"
    ]
  },
  {
    id: "rc-l3", level: "lower", genre: "descriptive",
    titleEn: "Dusk in the Desert", titleZh: "沙漠的黄昏", topicEn: "A place: the desert at dusk",
    paragraphs: [
      "In the middle of the afternoon, the desert seems to hold its breath. The sun hangs like a white-hot lamp in a cloudless sky, and the sand glares so brightly that a visitor has to squint. Heat shimmers above the ground in wavy, silvery ribbons. Nothing seems to move—not a bird, not a lizard, not even the wind.",
      "Then, slowly, the sun begins to sink toward the hills, like a golden coin slipping into a slot. The light changes from white to orange to rose. Every cactus and boulder stretches a long, thin shadow across the sand, as if the whole desert were yawning after a nap. The air, thick and heavy all day, turns cool and soft against the skin.",
      "As the heat fades, the desert comes alive. Most of its animals have spent the burning daytime resting in underground burrows or in the shade of rocks, and now they come out to look for food. A kangaroo rat pokes its nose from its burrow, sniffs the air, and bounds away on its long hind legs. A pale gecko slips out from beneath a flat stone. Far off on a ridge, a coyote lifts its head and yips at the first star.",
      "Even some of the plants seem to wake up. The creamy flowers of the giant saguaro cactus open after dark, offering sweet nectar to visiting bats and insects.",
      "By the time darkness settles, the sand has faded from gold to deep blue, and the quiet is no longer the empty quiet of the afternoon. It is full of small sounds: the rustle of a mouse in the dry brush, the whisper of wind through cactus spines, the distant call of a coyote. Overhead, the stars blaze so thickly that the sky looks dusted with sugar. The desert has not gone to sleep at all. It has simply changed shifts."
    ],
    paragraphsZh: [
      "午后，沙漠仿佛屏住了呼吸。太阳像一盏白炽的灯悬在万里无云的天空，沙地反射着耀眼的强光，游客不得不眯起眼睛。热浪在地面上方翻滚，化作一条条波纹般的银色丝带。似乎什么都不在动——没有鸟，没有蜥蜴，连风也停了。",
      "接着，太阳缓缓向山丘沉去，像一枚金色的硬币滑进投币口。光线由白变橙，再变成玫瑰红。每一株仙人掌、每一块巨石都在沙地上拖出长长的细影，仿佛整片沙漠睡过午觉后正在打哈欠。整个白天又闷又重的空气，变得清凉而柔和，轻轻拂过皮肤。",
      "热气渐渐退去，沙漠醒了过来。大多数沙漠动物在灼热的白天都躲在地下的洞穴里或岩石的阴影下休息，如今它们纷纷出来觅食。一只更格卢鼠从洞里探出鼻子，嗅了嗅空气，便用修长的后腿蹦跳着跑开了。一只淡色的壁虎从一块扁平的石头下溜了出来。远处的山脊上，一只郊狼抬起头，对着第一颗星星尖声嚎叫。",
      "连一些植物也仿佛苏醒了。巨人柱仙人掌乳白色的花朵在天黑后绽放，把甜甜的花蜜献给前来拜访的蝙蝠和昆虫。",
      "当夜幕降临时，沙地已经从金黄褪成了深蓝，而这时的寂静，也不再是午后那种空荡荡的寂静。它充满了细小的声响：一只老鼠在干枯的灌木丛中窸窸窣窣，风在仙人掌的刺间低语，远处传来郊狼的叫声。头顶上，繁星密密麻麻地闪耀，天空仿佛撒满了白糖。沙漠根本没有睡去，它只是换了一班岗。"
    ]
  },
  {
    id: "rc-m1", level: "middle", genre: "expository",
    titleEn: "Fighting Noise with Noise", titleZh: "用声音对抗噪音", topicEn: "Science and technology",
    paragraphs: [
      "Anyone who has taken a long flight knows the sound of an airplane cabin: a steady, low roar that never lets up. After a few hours it becomes more than an annoyance; it is exhausting. Yet many passengers now slip on a pair of headphones and hear that roar melt away. Oddly, the main trick is not to block the noise but to add more sound.",
      "To understand how, it helps to know that sound travels in waves, with alternating peaks and dips in air pressure, much as ripples on a pond have crests and troughs. When two waves of equal size meet so that one wave’s peak lines up with the other’s dip, they cancel each other out, and the water goes flat. Noise-canceling headphones rely on this clever principle. A tiny microphone on each ear cup listens to the sounds around the wearer. A small computer chip then calculates a mirror-image wave, one with a dip wherever the original has a peak, and plays it through the speaker. At the wearer’s ear, the two waves meet and largely erase each other.",
      "The trick has limits, however. It works best on steady, low-pitched sounds, such as the hum of an engine or an air conditioner, because those sounds repeat in a predictable pattern and the chip can stay a step ahead of them. A sudden sound, like a dropped tray, changes too quickly. By the time the chip has built its mirror-image wave, the original sound has already changed, and the cancellation fails. High-pitched sounds, whose waves are shorter, are also difficult, because even a tiny error in timing leaves the two waves out of step.",
      "That is why good headphones are not purely electronic. Thick, snug ear cushions physically block much of the high-pitched noise, while the electronics deal with the low rumble. Each method covers the other’s weakness, so together they quiet a noisy cabin far better than either could alone. The electronics, which run on a small battery, are the part that does the canceling.",
      "The idea is not new. Engineers first built practical noise-canceling headsets for airplane and helicopter pilots, whose hearing suffered from hours of engine roar and who needed to hear radio messages clearly. Today the same principle appears in everyday headphones, and some car makers use it as well, playing a faint “anti-noise” through the car’s speakers to soften the hum of the engine. In every case, the lesson is the same: sometimes the best way to defeat a noise is to meet it with its opposite."
    ],
    paragraphsZh: [
      "任何坐过长途飞机的人都熟悉机舱里的声音：一种低沉而持续的轰鸣，永远不会减弱。几个小时下来，它已不只是令人烦躁，而是让人疲惫不堪。然而，如今许多乘客只要戴上一副耳机，就能听到那阵轰鸣渐渐消失。奇怪的是，它的主要诀窍并不是挡住噪音，而是再添加一些声音。",
      "要弄懂其中的道理，先要知道声音是以波的形式传播的，空气压力一高一低交替变化，就像池塘里的涟漪有波峰和波谷一样。当两个大小相等的波相遇，一个波的波峰正好对上另一个波的波谷时，它们会相互抵消，水面就归于平静。降噪耳机依靠的正是这个巧妙的原理。每个耳罩上都有一个微型麦克风，负责收听佩戴者周围的声音。随后，一块小小的计算机芯片算出一个“镜像”声波——原来的声波哪里是波峰，它那里就是波谷——并通过扬声器播放出来。在佩戴者的耳边，这两个声波相遇，基本上把彼此抹掉了。",
      "不过，这个办法是有局限的。它对平稳、低沉的声音效果最好，比如发动机或空调的嗡嗡声，因为这类声音按可预测的规律重复出现，芯片可以抢在它们前面一步。而突然出现的声音，比如托盘掉落声，变化太快。等芯片造出镜像声波时，原来的声音早已变了，抵消就失败了。高音调的声音也不容易消除，因为它们的波长更短，哪怕计时上出现一点点误差，两个波也会错开步调。",
      "所以，好耳机并不是纯电子的。厚实、贴合的耳垫能在物理上挡住大部分高音调的噪音，而电子部分则负责处理低沉的轰鸣。两种方法各自弥补了对方的弱点，合在一起，让嘈杂的机舱安静下来的效果远胜过单独使用任何一种。进行抵消的是电子部分，它靠一块小电池运行。",
      "这个想法并不新鲜。工程师最早为飞机和直升机飞行员制造出了实用的降噪耳机，因为飞行员的听力会在长达数小时的发动机轰鸣中受损，而且他们需要清楚地听到无线电通话。如今，同样的原理出现在日常耳机里，一些汽车制造商也在使用它：通过车内扬声器播放微弱的“反噪声”，来减轻发动机的嗡嗡声。无论哪种情况，道理都是一样的：对付噪音，有时最好的办法是用它的反面去迎战。"
    ]
  },
  {
    id: "rc-m2", level: "middle", genre: "narrative",
    titleEn: "When Linden Court Went Dark", titleZh: "林登巷停电的那一夜", topicEn: "Family and community",
    paragraphs: [
      "Most evenings, Linden Court looked the same from the sidewalk: a row of windows glowing blue, each one a separate screen, and behind each window a family that might as well have lived in a different city. Twelve-year-old Dara was no exception. She sat cross-legged on her bed, laughing on a video call with her best friend, who had moved three states away in the spring. It was the best part of her week.",
      "At 7:40, the hum of the refrigerator died. Every window on the block went black at once, and her friend’s smiling face froze on the laptop and vanished. “No, no, no,” Dara groaned. “Power’s out,” her mother called from the hallway. “Take this flashlight and see if it’s the whole street.” Dara stomped outside, certain that this would be the most boring night of the year.",
      "The street was darker than she had ever seen it, and for a moment she simply stood on the step, startled by the quiet. Then she noticed the people. Mr. Okafor stood on his porch with a camping lantern, waving to anyone who passed. The Nguyen twins were drawing on the sidewalk with chalk by flashlight. Even Mrs. Petrov, who in three years had never been seen outside except to climb into a taxi, sat on her front steps wrapped in a long wool coat.",
      "Someone carried out folding chairs. Someone else wondered aloud whether they ought to eat the ice cream in their freezer before it melted, and that settled it. Within the hour, half the street sat in a ragged circle, passing spoons and cartons from hand to hand, while Mr. Okafor’s old battery radio crackled out a weather report that nobody was listening to. Dara listened to Mrs. Petrov describe a winter she had once spent in a mountain village with no electricity at all, and she realized, with some surprise, that she was laughing.",
      "When Dara finally looked up, she gasped. Without the glow of the streetlights, the sky was crowded with more stars than she had known were there. She had lived beneath them her whole life, she thought, and had never once bothered to look.",
      "At ten past ten, the lights flickered on, and every window on Linden Court blazed. A long groan rose from the circle, and Dara’s was one of the loudest. “Already?” someone said. One by one the chairs were folded, good nights were traded, and the doors closed. On the walk to their front door, her mother raised an eyebrow. “Boring night?” “The worst,” said Dara, grinning, and she hurried upstairs to tell her friend everything."
    ],
    paragraphsZh: [
      "大多数夜晚，从人行道上看林登巷，景象都差不多：一排窗户泛着蓝光，每扇窗后都是一块独立的屏幕，每扇窗里的人家仿佛住在不同的城市。十二岁的 Dara 也不例外。她盘腿坐在床上，正和最好的朋友视频聊天，笑个不停——那个朋友春天时搬到了三个州以外的地方。这是她一周里最开心的时光。",
      "七点四十分，冰箱的嗡嗡声停了。整条街的窗户一下子全黑了，笔记本电脑屏幕上朋友含笑的脸定格了一下，随即消失。“不要不要不要！”Dara 哀叹道。“停电了，”妈妈在走廊里喊，“拿着这个手电筒，去看看是不是整条街都停了。”Dara 气呼呼地走到屋外，确信这将是一年里最无聊的一个晚上。",
      "街上比她见过的任何时候都要黑，她在台阶上站了片刻，被这份安静惊住了。然后她注意到了人。Okafor 先生站在门廊上，提着一盏露营灯，朝每个路过的人挥手。Nguyen 家的双胞胎借着手电筒的光在人行道上用粉笔画画。就连 Petrov 太太也在——三年来，除了钻进出租车的时候，从没有人见她出过门——此刻她裹着一件长长的羊毛大衣，坐在自家门前的台阶上。",
      "有人搬出了折叠椅。又有人随口说，冰箱里的冰淇淋是不是该趁化掉之前吃掉，这一下就定了。不到一个钟头，半条街的人都坐成了一个参差不齐的圆圈，手传手地递着勺子和冰淇淋盒，而 Okafor 先生那台旧的电池收音机嗞嗞啦啦地播着天气预报，谁也没在听。Dara 听 Petrov 太太讲她曾经在一个根本没有电的山村里度过的一个冬天，她惊讶地发现，自己竟然在笑。",
      "Dara 终于抬起头时，不由得倒吸了一口气。没有了路灯的光亮，天空里挤满了星星，比她知道的要多得多。她这辈子一直生活在这片星空之下，她想，却从没想过抬头看一眼。",
      "十点十分，灯闪了几下亮了起来，林登巷的每一扇窗户都亮得耀眼。圆圈里响起一片长长的哀叹，Dara 的声音是最响的几个之一。“这么快？”有人说。椅子被一把把折好，大家互道晚安，一扇扇门关上了。回家的路上，妈妈挑起一条眉毛：“无聊的一晚？”“糟透了。”Dara 咧着嘴笑着说，然后飞快地跑上楼，要把一切都讲给朋友听。"
    ]
  }
];

export const PROBLEMS = [
  // ---------------------------------------------------------------- rc-l1
  {
    id: "rc-l1-q1", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l1", strand: "main-idea", difficulty: "easy",
    conceptIds: ["main-idea"],
    stem: "Which of the following best states the main idea of the passage?",
    stemZh: "下面哪一项最能概括这篇文章的主旨？",
    choices: [
      "Hurrying through a task is the main reason accidents happen at school.",
      "Telling the truth, even late, can mend a friendship after a mistake.",
      "Mei worked hard on a clay bird that broke in art class.",
      "Friends who hide a mistake from each other usually end up apart."
    ],
    answer: 1,
    explanationEn: "Kofi hides the broken bird, later confesses, and is forgiven, and the two friends mend the bird together, so the story is about how honesty repairs a friendship. The choice about Mei’s hard work is true but covers only the start of the story, and Mei’s forgiveness shows that a hidden mistake does not have to end a friendship.",
    explanationZh: "Kofi 先是把摔碎的小鸟藏起来，后来坦白并得到了原谅，两个朋友还一起把小鸟修好，所以这个故事讲的是诚实能修复友谊。“Mei 花很多功夫捏的泥鸟摔碎了”这一项虽然属实，却只是故事的开头；而 Mei 的原谅说明，隐瞒过的错误并不一定会让友谊走到尽头。"
  },
  {
    id: "rc-l1-q2", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l1", strand: "supporting-ideas", difficulty: "easy",
    conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 2, what did Kofi do right after the bird broke?",
    stemZh: "根据第 2 段，小鸟摔碎后 Kofi 立刻做了什么？",
    choices: [
      "He ran down the hall to find the art teacher.",
      "He tried to glue the pieces back together at once.",
      "He told Mei what had happened right away.",
      "He put the pieces in his backpack and left."
    ],
    answer: 3,
    explanationEn: "Paragraph 2 says Kofi “scooped up the pieces, stuffed them into his backpack, and rushed out the door.” He did not look for the teacher or try to glue the bird, and he told Mei only the next day.",
    explanationZh: "第 2 段写道，Kofi “把碎块一把捡起，塞进书包，冲出了教室”。他既没有去找老师，也没有试着把小鸟粘好，直到第二天才告诉 Mei。"
  },
  {
    id: "rc-l1-q3", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l1", strand: "vocabulary", difficulty: "medium",
    conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 3, the word “rehearsing” most nearly means",
    stemZh: "在第 3 段中，“rehearsing” 一词最接近的意思是：",
    choices: ["practicing", "avoiding", "regretting", "forgetting"],
    answer: 0,
    glosses: [["rehearsing", "排练；预先演练"], ["practicing", "练习"], ["avoiding", "回避"], ["regretting", "后悔"], ["forgetting", "忘记"]],
    explanationEn: "Kofi lay awake “rehearsing what he might say,” so he was going over his words ahead of time, the way an actor practices lines. Avoiding and regretting do not fit “what he might say,” and forgetting is the opposite of going over the words in his head.",
    explanationZh: "Kofi 躺着睡不着，“rehearsing what he might say”，也就是提前把要说的话在心里演练，就像演员练习台词一样，所以 rehearsing 的意思是 practicing（练习）。avoiding 和 regretting 都不能搭配 “what he might say”，forgetting（忘记）则与“在脑子里反复琢磨”相反。"
  },
  {
    id: "rc-l1-q4", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l1", strand: "tone-style-figurative", difficulty: "easy",
    conceptIds: ["tone-style-figurative"],
    stem: "In paragraph 3, the author writes that the broken pieces “seemed to weigh more than stones.” This comparison suggests that Kofi",
    stemZh: "第 3 段中，作者写道碎块“仿佛比石头还要沉”（seemed to weigh more than stones）。这个比喻说明 Kofi：",
    choices: [
      "had packed too many books in his backpack",
      "was proud that no one had found the pieces",
      "felt burdened by what he had done",
      "was too weak to lift his backpack"
    ],
    answer: 2,
    explanationEn: "The pieces did not really get heavier; the comparison describes how Kofi felt. With his sleepless night and his silence on Friday, it shows that he felt burdened by what he had done. At the end, once the secret is out, his backpack feels “light.”",
    explanationZh: "碎块并没有真的变重，这个比喻写的是 Kofi 的心情。结合他彻夜难眠、星期五一言不发，可以看出他被自己做的事压得喘不过气；到故事结尾，秘密说出口后，他觉得书包“好轻”，正好与此呼应。"
  },
  {
    id: "rc-l1-q5", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l1", strand: "inference", difficulty: "hard",
    conceptIds: ["inference"],
    stem: "Which of the following is the most likely reason Kofi finally told Mei the truth?",
    stemZh: "下面哪一项最有可能是 Kofi 最终对 Mei 说出真相的原因？",
    choices: [
      "Mei had already guessed that he had taken the bird.",
      "He felt too bad about the secret to keep it any longer.",
      "He was afraid the art teacher would find the pieces.",
      "He wanted Mei to praise him for being honest."
    ],
    answer: 1,
    explanationEn: "The clues show how Kofi felt: he lay awake, stared at his shoes, and his hands shook as he confessed. Mei’s words, “Somebody took my bird,” show she had not guessed the truth, and the teacher is never mentioned, so the best-supported reason is that the secret had become too hard to keep.",
    explanationZh: "文中的线索显示了 Kofi 的心情：他整夜睡不着，低头盯着鞋子，坦白时双手发抖。Mei 说“有人把我的小鸟拿走了”，说明她并没有猜到真相；文章也从没提到老师。所以最有依据的原因是：他再也无法守着这个秘密了。"
  },
  // ---------------------------------------------------------------- rc-l2
  {
    id: "rc-l2-q1", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l2", strand: "supporting-ideas", difficulty: "easy",
    conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 2, why do sea otters spend hours every day grooming their fur?",
    stemZh: "根据第 2 段，海獭为什么每天要花好几个小时梳理自己的毛？",
    choices: [
      "Grooming helps them build up a thick layer of blubber.",
      "Grooming keeps them from drifting away while they sleep.",
      "Clean, fluffy fur traps the air that keeps them warm.",
      "Grooming removes sea urchins that cling to their coats."
    ],
    answer: 2,
    explanationEn: "Paragraph 2 explains that fur keeps an otter warm “only when it is clean and fluffy,” because the fur traps air against the skin. Otters have almost no blubber, and it is kelp, not grooming, that keeps them from drifting.",
    explanationZh: "第 2 段说明，毛皮“只有在干净、蓬松的时候”才能保暖，因为毛会在皮肤旁困住空气。海獭几乎没有鲸脂，而防止它们漂走的是巨藻，不是梳理毛发。"
  },
  {
    id: "rc-l2-q2", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l2", strand: "vocabulary", difficulty: "medium",
    conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 5, the word “multiplied” most nearly means",
    stemZh: "在第 5 段中，“multiplied” 一词最接近的意思是：",
    choices: ["became much more numerous", "grew much larger in size", "swam away to deeper water", "became hard to find"],
    answer: 0,
    glosses: [["multiplied", "大量繁殖；数量大增"], ["numerous", "数量众多的"], ["urchin", "海胆"]],
    explanationEn: "Where otters were gone, urchins “multiplied and ate whole kelp forests down to bare rock.” That could happen only if there were far more urchins than before, so multiplied means increased in number. The passage never says the urchins grew larger, swam away, or became hard to find.",
    explanationZh: "在海獭消失的地方，海胆“multiplied and ate whole kelp forests down to bare rock”（multiplied 并把整片巨藻林啃得只剩岩石）。只有海胆的数量比以前多得多，才可能出现这种情形，所以 multiplied 在这里是“数量大增”的意思。文章没有说海胆变大、游走或难以找到。"
  },
  {
    id: "rc-l2-q3", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l2", strand: "inference", difficulty: "medium",
    conceptIds: ["inference"],
    stem: "What would most likely happen to a sea otter whose fur became dirty and tangled?",
    stemZh: "如果一只海獭的毛变得又脏又打结，最可能发生什么？",
    choices: [
      "It would not need to eat as much food as other otters.",
      "It would be unable to find rocks on the sea floor.",
      "It would be able to dive deeper than other otters.",
      "It would have trouble staying warm in cold water."
    ],
    answer: 3,
    explanationEn: "The passage says fur keeps an otter warm only when it is clean and fluffy, and that otters have almost no blubber. An otter with dirty, tangled fur would therefore lose its main protection from the cold, and it would need more food energy, not less. Nothing links dirty fur to finding rocks or to diving.",
    explanationZh: "文章说毛皮只有干净、蓬松时才能保暖，而且海獭几乎没有鲸脂。所以毛又脏又打结的海獭会失去抵御寒冷的主要保护，需要更多的食物能量，而不是更少。文中没有任何内容把脏毛与找石头或潜水联系起来。"
  },
  {
    id: "rc-l2-q4", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l2", strand: "organization-logic", difficulty: "hard",
    conceptIds: ["organization-logic"],
    stem: "Which of the following best describes how the passage is organized?",
    stemZh: "下面哪一项最能说明这篇文章的组织方式？",
    choices: [
      "It lists the steps an otter follows from the moment it wakes until it sleeps.",
      "It poses a question, answers it, and then adds more habits and a benefit to the ocean.",
      "It compares sea otters with whales and seals in every paragraph.",
      "It argues that people must do more to protect sea otters from hunters."
    ],
    answer: 1,
    explanationEn: "Paragraph 1 ends with a question about how otters keep from freezing, paragraph 2 answers it, paragraphs 3 and 4 add more clever habits, and paragraph 5 shows how otters help the ocean. The passage does not follow a daily schedule, compare otters with other animals throughout, or argue for protection.",
    explanationZh: "第 1 段以“它们怎样避免被冻僵”的问题收尾，第 2 段给出答案，第 3、4 段补充更多聪明的习性，第 5 段说明海獭如何帮助大海。文章既没有按一天的时间顺序写，也没有通篇拿海獭与其他动物作比较，更没有呼吁保护海獭。"
  },
  {
    id: "rc-l2-q5", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l2", strand: "main-idea", difficulty: "medium",
    conceptIds: ["main-idea"],
    stem: "Which of the following best states the main idea of the passage?",
    stemZh: "下面哪一项最能概括这篇文章的主旨？",
    choices: [
      "Sea otters are best known for using rocks to crack open hard shells.",
      "Sea otters must eat huge amounts of food every day to stay warm.",
      "Sea otters have clever ways of surviving and also help the ocean.",
      "Animals that live in cold ocean water need thick fur to survive."
    ],
    answer: 2,
    explanationEn: "Every paragraph after the first describes a way sea otters survive or help their home: staying warm, using tools, sleeping in kelp, and protecting kelp forests. The choices about rocks and about food each cover only one detail, and the choice about cold-water animals is too broad, since the passage says many whales and seals stay warm with blubber instead.",
    explanationZh: "第 1 段之后的每一段都在讲海獭如何生存，或如何造福栖息地：保暖、使用工具、裹着巨藻睡觉、保护巨藻林。关于石头和关于食物的两项各自只涉及一个细节；“冷水动物都需要厚毛”则过于笼统，因为文章说许多鲸和海豹靠的是鲸脂保暖。"
  },
  // ---------------------------------------------------------------- rc-l3
  {
    id: "rc-l3-q1", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l3", strand: "vocabulary", difficulty: "medium",
    conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 1, the word “glares” most nearly means",
    stemZh: "在第 1 段中，“glares” 一词最接近的意思是：",
    choices: [
      "stares at someone in an angry way",
      "slowly fades out of sight",
      "changes to a deep shade of blue",
      "shines with a harsh, dazzling light"
    ],
    answer: 3,
    glosses: [["glare", "刺眼地照耀；怒视"], ["dazzling", "耀眼的"], ["harsh", "强烈刺眼的；严酷的"], ["squint", "眯起眼睛"]],
    explanationEn: "“Glares so brightly that a visitor has to squint” tells us the sand gives off a harsh, dazzling light. Glare can also mean an angry stare, but sand cannot stare, and the other choices do not fit the bright afternoon scene.",
    explanationZh: "“glares so brightly that a visitor has to squint”（亮得让游客不得不眯起眼睛）说明沙地反射出刺眼的强光。glare 也可以指“怒视”，但沙子不会瞪人，其余选项也与明亮的午后景象不符。"
  },
  {
    id: "rc-l3-q2", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l3", strand: "main-idea", difficulty: "easy",
    conceptIds: ["main-idea"],
    stem: "Which of the following best states the main idea of the passage?",
    stemZh: "下面哪一项最能概括这篇文章的主旨？",
    choices: [
      "At dusk, the desert turns from a hot, still place into a cool, lively one.",
      "Most desert animals are much more active by day than they are at night.",
      "The giant saguaro cactus is the most important plant living in the desert.",
      "The desert is too hot and dangerous for most visitors to enjoy at any time."
    ],
    answer: 0,
    explanationEn: "The passage moves from the still, burning afternoon to a cool night full of life, showing how the desert changes at dusk. The choice about daytime activity says the opposite of what the author describes, and the others focus on one detail or add an idea the author never states.",
    explanationZh: "文章从静止、灼热的午后写到凉爽而充满生机的夜晚，展现了沙漠在黄昏时的变化。关于白天更活跃的那一项与作者所写恰好相反，其余两项要么只涉及一个细节，要么加入了作者从未提出的观点。"
  },
  {
    id: "rc-l3-q3", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l3", strand: "supporting-ideas", difficulty: "easy",
    conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 2, what happens as the sun sinks toward the hills?",
    stemZh: "根据第 2 段，当太阳向山丘下沉时会发生什么？",
    choices: [
      "A strong wind begins to blow across the hills.",
      "Long, thin shadows stretch out across the sand.",
      "The air becomes hotter and much heavier than before.",
      "Dark clouds slowly gather in the evening sky."
    ],
    answer: 1,
    explanationEn: "Paragraph 2 says every cactus and boulder “stretches a long, thin shadow across the sand.” The same paragraph says the air turns cool and soft, the opposite of getting hotter, and it never mentions a strong wind or clouds.",
    explanationZh: "第 2 段写道，每一株仙人掌和每一块巨石都在沙地上“拖出长长的细影”。同一段还说空气变得清凉柔和，与“更热更闷”相反，文中也没有提到大风或乌云。"
  },
  {
    id: "rc-l3-q4", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l3", strand: "inference", difficulty: "medium",
    conceptIds: ["inference"],
    stem: "Which of the following is the most likely reason that most desert animals wait until dusk to look for food?",
    stemZh: "下面哪一项最有可能是大多数沙漠动物要等到黄昏才出来觅食的原因？",
    choices: [
      "The heat during the day is too harsh for them.",
      "Their food can be found only after dark.",
      "They cannot see anything in bright sunlight.",
      "They are frightened by visitors."
    ],
    answer: 0,
    explanationEn: "The animals rest in burrows and shade during the “burning daytime” and come out as the heat fades. The passage ties their activity to the cooling air, not to their food, their eyesight, or the visitors.",
    explanationZh: "这些动物在“灼热的白天”躲在洞穴和阴凉处休息，等热气退去才出来。文章把它们的活动与空气变凉联系在一起，而不是与食物、视力或游客联系在一起。"
  },
  {
    id: "rc-l3-q5", level: "lower", section: "reading", type: "reading-comprehension", passageId: "rc-l3", strand: "tone-style-figurative", difficulty: "hard",
    conceptIds: ["tone-style-figurative"],
    stem: "In the last paragraph, the author says the desert “has simply changed shifts.” This phrase suggests that",
    stemZh: "在最后一段中，作者说沙漠“只是换了一班岗”（has simply changed shifts）。这句话暗示：",
    choices: [
      "the people who work in the desert go home when the sun sets",
      "the desert becomes silent and empty as soon as night begins",
      "life in the desert goes on, but at night instead of by day",
      "the desert looks the same at night as it does at noon"
    ],
    answer: 2,
    explanationEn: "The author has just said the desert “has not gone to sleep at all,” and the night is full of sounds, animals, and blooming flowers. A shift is a period of work, so changing shifts means the desert’s life continues at a different time of day. Taking “shifts” literally, or saying the night is empty or the same as noon, does not fit the passage.",
    explanationZh: "作者刚说完沙漠“根本没有睡去”，并把夜晚写得满是声响、动物和绽放的花朵。“shift（班）”指一段工作时间，换班意味着沙漠里的生命活动仍在继续，只是换到了一天中的另一个时段。把 “shifts” 按字面理解，或认为夜晚空无一物、与正午毫无差别，都不符合文章内容。"
  },
  // ---------------------------------------------------------------- rc-m1
  {
    id: "rc-m1-q1", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m1", strand: "main-idea", difficulty: "medium",
    conceptIds: ["main-idea"],
    stem: "Which of the following best states the main idea of the passage?",
    stemZh: "下面哪一项最能概括这篇文章的主旨？",
    choices: [
      "Engineers first built noise-canceling headsets for airplane and helicopter pilots.",
      "Sound travels as waves with alternating peaks and dips in air pressure.",
      "Modern technology can now remove every unwanted sound from a person’s surroundings.",
      "Noise-canceling headphones add sound waves to cancel some noise, but have limits."
    ],
    answer: 3,
    explanationEn: "The passage explains how headphones use mirror-image waves to cancel noise (paragraph 2), where this works and fails (paragraph 3), and how cushions help (paragraph 4). The choices about pilots and about sound waves are true but each covers only one part of the passage, and the claim about removing every sound goes beyond the limits the author describes.",
    explanationZh: "文章先讲耳机如何用镜像声波抵消噪音（第 2 段），再讲这种办法在哪些情况下有效、哪些情况下失效（第 3 段），最后讲耳垫如何帮忙（第 4 段）。关于飞行员和关于声波的两项都属实，但各自只涉及文章的一部分；而“消除一切声音”则超出了作者所说的局限。"
  },
  {
    id: "rc-m1-q2", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m1", strand: "vocabulary", difficulty: "medium",
    conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 2, the word “principle” most nearly means",
    stemZh: "在第 2 段中，“principle” 一词最接近的意思是：",
    choices: [
      "a basic rule that explains how something works",
      "a personal belief about right and wrong",
      "the first step in a long process",
      "an early version of a machine"
    ],
    answer: 0,
    glosses: [["principle", "原理；原则"], ["rule", "规则；法则"], ["belief", "信念；看法"], ["process", "过程；流程"]],
    explanationEn: "“This clever principle” refers to the idea just explained: two waves with matching peaks and dips cancel each other. So principle means a basic rule of how something works. A personal belief about right and wrong is a different sense of the word and does not fit a discussion of sound waves.",
    explanationZh: "“this clever principle”指的是刚讲过的道理：峰谷相对的两个波会互相抵消。所以 principle 在这里是“（事物运作的）基本原理”。“对错的个人信念”是这个词的另一层意思（原则），不适用于讲声波的语境。"
  },
  {
    id: "rc-m1-q3", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m1", strand: "supporting-ideas", difficulty: "medium",
    conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 3, why is a sudden sound, such as a dropped tray, hard for noise-canceling headphones to cancel?",
    stemZh: "根据第 3 段，为什么像托盘掉落这样的突发声响，降噪耳机很难把它抵消掉？",
    choices: [
      "The microphone is unable to pick up loud sounds from outside the ear cups.",
      "The sound is too high-pitched for the small speaker to be able to play it.",
      "The sound changes before the chip has finished building a matching wave.",
      "The ear cushions block the sound before the chip has a chance to detect it."
    ],
    answer: 2,
    explanationEn: "Paragraph 3 says a sudden sound “changes too quickly”: by the time the chip has built its mirror-image wave, the original sound has already changed. The passage does not say the microphone fails on loud sounds, that the speaker cannot play sudden sounds, or that the cushions interfere with the chip.",
    explanationZh: "第 3 段说，突然出现的声音“变化太快”：等芯片造出镜像声波时，原来的声音已经变了。文章没有说麦克风收不到大声响，没有说扬声器放不出突发声音，也没有说耳垫会干扰芯片。"
  },
  {
    id: "rc-m1-q4", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m1", strand: "organization-logic", difficulty: "hard",
    conceptIds: ["organization-logic"],
    stem: "Which of the following best describes how paragraph 4 is related to paragraph 3?",
    stemZh: "下面哪一项最能说明第 4 段与第 3 段的关系？",
    choices: [
      "Paragraph 4 gives additional examples of the kinds of sounds that paragraph 3 describes.",
      "Paragraph 4 shows how headphone makers make up for some limits named in paragraph 3.",
      "Paragraph 4 argues that the limits described in paragraph 3 are not really a problem.",
      "Paragraph 4 describes events that happened earlier than the ones in paragraph 3."
    ],
    answer: 1,
    explanationEn: "Paragraph 3 lists limits of electronic canceling, especially for high-pitched and sudden sounds. Paragraph 4 begins “That is why” and describes the remedy: ear cushions that physically block high-pitched noise. It does not add examples of sounds, dismiss the limits, or move back in time.",
    explanationZh: "第 3 段列举了电子降噪的局限，尤其是对高音调声音和突发声音。第 4 段以 “That is why” 开头，说明了补救办法：耳垫在物理上挡住高音调噪音。它既没有增加声音的例子，也没有否认这些局限，更没有回到更早的时间。"
  },
  {
    id: "rc-m1-q5", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m1", strand: "inference", difficulty: "hard",
    conceptIds: ["inference"],
    stem: "If the battery in a pair of noise-canceling headphones ran out completely, which result does the passage most strongly suggest?",
    stemZh: "如果降噪耳机的电池完全耗尽，文章最有力地暗示了下面哪种结果？",
    choices: [
      "Cushions would still block high-pitched noise, but low rumbles would no longer be canceled.",
      "The headphones would stop blocking outside sound of every kind, high-pitched or low.",
      "Low rumbles would be canceled even more completely than they are while the battery works.",
      "High-pitched noise would be blocked less well, because the cushions need power."
    ],
    answer: 0,
    explanationEn: "Paragraph 4 says the electronics, which run on the battery, do the canceling of low rumbles, while thick cushions physically block high-pitched noise. Cushions need no power, so a dead battery ends the canceling but not the cushions’ protection. Choices that say all blocking stops, or that the cushions need power, contradict this.",
    explanationZh: "第 4 段说，靠电池运行的电子部分负责抵消低沉的轰鸣，而厚耳垫是靠物理方式挡住高音调噪音的。耳垫不需要电，所以电池耗尽后，主动抵消会停止，但耳垫的隔音作用仍在。说“所有隔音全部失效”或“耳垫需要供电”的选项都与此矛盾。"
  },
  {
    id: "rc-m1-q6", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m1", strand: "tone-style-figurative", difficulty: "easy",
    conceptIds: ["tone-style-figurative"],
    stem: "The author’s attitude toward noise-canceling headphones can best be described as",
    stemZh: "作者对降噪耳机的态度最恰当的描述是：",
    choices: [
      "doubtful that they work as well as people claim",
      "eager to convince readers to buy a pair",
      "impressed by the idea but honest about its limits",
      "bored by the science behind how they work"
    ],
    answer: 2,
    explanationEn: "The author calls the idea a “clever principle” and presents it as an elegant solution, yet openly says “The trick has limits” and explains where it fails. That mix of admiration and honesty rules out doubt, salesmanship, and boredom.",
    explanationZh: "作者称这是一个“巧妙的原理”，把它当作漂亮的解决办法来介绍，同时又坦率地指出“这个办法是有局限的”，并说明它在哪里会失效。这种既欣赏又坦诚的态度，排除了怀疑、推销和厌烦。"
  },
  // ---------------------------------------------------------------- rc-m2
  {
    id: "rc-m2-q1", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m2", strand: "supporting-ideas", difficulty: "easy",
    conceptIds: ["supporting-ideas"],
    stem: "According to paragraph 3, which statement about Mrs. Petrov is true?",
    stemZh: "根据第 3 段，下面哪项关于 Petrov 太太的说法是正确的？",
    choices: [
      "She had come outside to wait for a taxi that was late.",
      "She had rarely been seen outside in the past three years.",
      "She was holding a camping lantern that lit the whole step.",
      "She was drawing pictures on the sidewalk with colored chalk."
    ],
    answer: 1,
    explanationEn: "Paragraph 3 says Mrs. Petrov “in three years had never been seen outside except to climb into a taxi,” so she had rarely been seen outside. The lantern belongs to Mr. Okafor, the chalk drawing is done by the Nguyen twins, and no taxi is mentioned in the scene.",
    explanationZh: "第 3 段说 Petrov 太太“三年来，除了钻进出租车，从没有人在外面见过她”，也就是说她很少露面。提灯的是 Okafor 先生，用粉笔画画的是 Nguyen 家的双胞胎，当时的场景中也没有提到出租车。"
  },
  {
    id: "rc-m2-q2", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m2", strand: "organization-logic", difficulty: "hard",
    conceptIds: ["organization-logic"],
    stem: "The author begins the story by describing the blue glow of screens in each window mainly to",
    stemZh: "作者在故事开头描写每扇窗户里的蓝色屏幕光，主要是为了：",
    choices: [
      "show that Dara owns far more electronic devices than any of her neighbors",
      "explain why losing electricity is a serious danger for people on the street",
      "suggest that most of the neighbors enjoy watching the same programs every night",
      "show how separate the neighbors are before the blackout brings them together"
    ],
    answer: 3,
    explanationEn: "Paragraph 1 shows each family behind its own glowing window, a family that “might as well have lived in a different city.” That picture of separateness sets up the contrast with the later scene of the whole street sitting in one circle. Nothing in the paragraph suggests danger, extra devices at Dara’s house, or shared programs.",
    explanationZh: "第 1 段描绘每个家庭各自待在发着蓝光的窗户后面，仿佛“住在不同的城市”。这幅彼此隔绝的画面，与后来整条街的人围坐成一圈的场景形成对比。该段没有暗示危险、Dara 家设备更多，或邻居们都在看同样的节目。"
  },
  {
    id: "rc-m2-q3", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m2", strand: "vocabulary", difficulty: "medium",
    conceptIds: ["vocabulary-in-context", "vocabulary-building"],
    stem: "As used in paragraph 4, the word “ragged” most nearly means",
    stemZh: "在第 4 段中，“ragged” 一词最接近的意思是：",
    choices: ["loosely formed and uneven", "badly torn and worn out", "loud, happy, and full of noise", "neat and carefully organized"],
    answer: 0,
    glosses: [["ragged", "参差不齐的；破烂的"], ["uneven", "不平整的；不规则的"], ["loosely", "松散地"], ["cheerful", "快活的"]],
    explanationEn: "Neighbors drifted out with folding chairs and sat wherever they could, so the “ragged circle” was loose and uneven. Ragged often describes torn clothing, but a circle of chairs and people cannot be torn, and neat and organized is the opposite of the scene.",
    explanationZh: "邻居们陆续搬着折叠椅出来，随便找地方坐下，所以这个“ragged circle”是松散、不规整的圆圈。ragged 常用来形容衣服破烂，但椅子和人围成的圈子不可能是“破”的；“整齐有序”则与情景恰好相反。"
  },
  {
    id: "rc-m2-q4", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m2", strand: "inference", difficulty: "medium",
    conceptIds: ["inference"],
    stem: "Which of the following best explains why a groan rose from the circle when the lights came back on?",
    stemZh: "下面哪一项最能解释来电时人群中为什么响起一片哀叹声？",
    choices: [
      "The neighbors were afraid that the power would fail again soon.",
      "The neighbors were enjoying the evening and wanted it to last.",
      "The neighbors were annoyed that the blackout had lasted so long.",
      "The neighbors were tired and wanted to go home to bed."
    ],
    answer: 1,
    explanationEn: "Someone says “Already?”, which shows the neighbors thought the blackout ended too soon. After hours of laughter and stargazing, the groan shows they were enjoying the evening and wanted it to last. Annoyance at a long blackout, fear of another failure, or tiredness would not lead to “Already?”.",
    explanationZh: "有人说“Already?”（这就来电了？），说明邻居们觉得停电结束得太早。经过几个小时的欢笑和看星星，这声哀叹表明大家玩得正开心，希望这个夜晚能再久一点。若是嫌停电太久、担心再次停电或者累了，都不会说“Already?”。"
  },
  {
    id: "rc-m2-q5", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m2", strand: "tone-style-figurative", difficulty: "hard",
    conceptIds: ["tone-style-figurative"],
    stem: "When Dara answers “The worst,” she is most likely",
    stemZh: "当 Dara 回答“The worst”（糟透了）时，她最可能是在：",
    choices: [
      "honestly complaining about how bored she had been all evening",
      "angry that her mother had sent her out into the dark",
      "joking, because she had actually enjoyed the evening",
      "embarrassed to admit she had been frightened in the dark"
    ],
    answer: 2,
    explanationEn: "Dara is grinning, she has been laughing with the neighbors, and she hurries off to tell her friend everything, so “The worst” is a joke that means the opposite. It echoes her earlier certainty that this would be “the most boring night of the year,” which turned out to be wrong.",
    explanationZh: "Dara 咧着嘴笑，刚才一直和邻居们笑得很开心，还急着跑去把一切讲给朋友听，所以“The worst”是一句反话，意思恰好相反。它呼应了她先前断定这会是“一年里最无聊的一晚”，而事实证明她错了。"
  },
  {
    id: "rc-m2-q6", level: "middle", section: "reading", type: "reading-comprehension", passageId: "rc-m2", strand: "main-idea", difficulty: "medium",
    conceptIds: ["main-idea"],
    stem: "Which of the following best expresses the central idea of the passage?",
    stemZh: "下面哪一项最能表达这篇文章的中心思想？",
    choices: [
      "Dara is upset when a power failure cuts off a call with her best friend.",
      "Mrs. Petrov and Mr. Okafor become Dara’s closest friends in a single evening.",
      "Families should spend more of their evenings outdoors with their neighbors.",
      "A sudden blackout shows Dara how enjoyable her neighbors’ company can be."
    ],
    answer: 3,
    explanationEn: "Dara goes from annoyance at losing her call to real enjoyment of the neighbors’ gathering, and ends eager to tell the story. The choice about the call covers only the beginning, and the choices about new best friends and about what families should do stretch the story too far.",
    explanationZh: "Dara 从因通话中断而恼火，变成真心享受邻居们的聚会，最后迫不及待地想把这一晚讲给朋友听。关于通话中断的那一项只涉及开头，而关于“成为挚友”和“家庭应该多在户外活动”的两项则把情节过度引申了。"
  }
];
