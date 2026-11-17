// ISEE-style practice: Verbal Reasoning, sentence completion (original items).
export const PROBLEMS = [
  // ───────────── Lower Level ─────────────
  {
    id: "vr-sc-l01", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion"],
    stem: "The kitten was so _____ after its long nap that it bounced around the room and chased every shadow.",
    choices: ["energetic", "gloomy", "silent", "weary"], answer: 0,
    glosses: [["energetic", "精力充沛的"], ["gloomy", "阴郁的；忧愁的"], ["silent", "安静的；沉默的"], ["weary", "疲倦的"]],
    explanationEn: "“So … that it bounced around the room and chased every shadow” gives a cause and its result, so the blank must mean full of energy. Energetic fits; weary and gloomy describe a kitten that would stay still, and silent does not explain the bouncing.",
    explanationZh: "“so … that …”表示因果：小猫“蹦蹦跳跳、追着每个影子跑”，说明它睡醒后精力充沛，所以选 energetic。weary（疲倦的）和 gloomy（阴郁的）会让小猫安静不动；silent（安静的）解释不了它为什么蹦跳。"
  },
  {
    id: "vr-sc-l02", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Tia expected the hike to be easy, but the steep, rocky trail turned out to be extremely _____.",
    choices: ["boring", "calm", "challenging", "short"], answer: 2,
    glosses: [["boring", "无聊的；乏味的"], ["calm", "平静的；镇定的"], ["challenging", "艰难的；有挑战性的"], ["short", "短的；短暂的"]],
    explanationEn: "“But” signals a contrast with “easy,” and “steep, rocky” describes a hard climb, so challenging is the best fit. Boring, calm and short neither oppose “easy” nor match a steep, rocky trail.",
    explanationZh: "“But”表示转折：Tia 以为轻松（easy），结果“陡峭多石”的山路出乎意料，所以应选 challenging（艰难的）。boring（无聊的）、calm（平静的）和 short（短的）既不与 easy 形成对比，也不符合陡峭多石的山路。"
  },
  {
    id: "vr-sc-l03", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion"],
    stem: "Since the old library was unusually _____, even the soft thud of a dropped pencil made every student look up.",
    choices: ["bright", "crowded", "dim", "tranquil"], answer: 3,
    glosses: [["bright", "明亮的"], ["crowded", "拥挤的"], ["dim", "昏暗的"], ["tranquil", "宁静的；平静的"]],
    explanationEn: "“Since” links the blank to its result: even a soft thud made every student look up, which happens only in a very quiet room. Tranquil means calm and quiet; crowded would make the room noisier, and bright and dim describe light, not sound.",
    explanationZh: "“Since”表示原因：连铅笔掉地的轻响都让每个学生抬头，说明图书馆非常安静，所以选 tranquil（宁静的）。crowded（拥挤的）会让房间更吵；bright（明亮的）和 dim（昏暗的）说的是光线，与声音无关。"
  },
  {
    id: "vr-sc-l04", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "The old wooden bridge looked strong from far away, but up close the cracked planks proved _____ and trembled under a single bicycle.",
    choices: ["bright", "fragile", "sturdy", "wide"], answer: 1,
    glosses: [["bright", "明亮的；鲜艳的"], ["fragile", "易碎的；脆弱的"], ["sturdy", "结实的；坚固的"], ["wide", "宽的；宽阔的"]],
    explanationEn: "“Looked strong … but” signals a reversal, and cracked planks that “trembled under a single bicycle” point to weakness, so fragile fits. Sturdy repeats the idea of strong, while bright and wide have nothing to do with trembling.",
    explanationZh: "“looked strong … but”表示转折，“cracked planks（开裂的木板）”在一辆自行车下就颤抖，说明桥很脆弱，选 fragile。sturdy（结实的）与 strong 同义，正是转折要否定的；bright（明亮的）和 wide（宽的）与颤抖无关。"
  },
  {
    id: "vr-sc-l05", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion"],
    stem: "The vegetable soup tasted _____, so Dad stirred in another pinch of salt before he served it to the family.",
    choices: ["a little bland", "burning hot", "far too spicy", "much too salty"], answer: 0,
    glosses: [["bland", "清淡无味的；乏味的"], ["spicy", "辛辣的；辣的"]],
    explanationEn: "Dad added “another pinch of salt,” so the soup must have lacked flavor, and “a little bland” explains his action. Much too salty would make more salt a mistake, and burning hot or far too spicy give no reason to add salt.",
    explanationZh: "爸爸又加了一小撮盐（another pinch of salt），说明汤味道太淡，所以选 a little bland（有点清淡无味）。much too salty（太咸）的话不该再加盐；burning hot（烫嘴）和 far too spicy（太辣）也不是加盐的理由。"
  },
  {
    id: "vr-sc-l06", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Because the ice on the pond was thin, the skaters were _____ and stayed close to the shore.",
    choices: ["bold", "cautious", "reckless", "unaware"], answer: 1,
    glosses: [["bold", "大胆的；勇敢的"], ["cautious", "小心谨慎的"], ["reckless", "鲁莽的；不顾后果的"], ["unaware", "没有察觉的；不知情的"]],
    explanationEn: "“Because the ice … was thin” explains why the skaters “stayed close to the shore,” so they must have been careful. Cautious fits; bold and reckless are the opposite, and unaware cannot explain a choice made because of thin ice.",
    explanationZh: "“Because the ice … was thin（冰很薄）”解释了滑冰的人为什么“紧靠岸边”，说明他们很小心，选 cautious（小心谨慎的）。bold（大胆的）和 reckless（鲁莽的）意思相反；unaware（不知情的）则无法解释他们因冰薄而做出的选择。"
  },
  {
    id: "vr-sc-l07", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "Marcus is very _____; he never wastes money, and he saves part of his allowance every single week.",
    choices: ["careless", "generous", "lazy", "thrifty"], answer: 3,
    glosses: [["careless", "粗心的；漫不经心的"], ["generous", "慷慨的；大方的"], ["lazy", "懒惰的"], ["thrifty", "节俭的；精打细算的"]],
    explanationEn: "After the semicolon, “never wastes money” and “saves part of his allowance” describe a careful saver, so thrifty fits. Careless and generous are the opposite of saving, and lazy has nothing to do with money.",
    explanationZh: "分号后的“never wastes money（从不浪费钱）”和“saves part of his allowance（把零花钱存一部分）”说明 Marcus 精打细算，选 thrifty（节俭的）。careless（粗心的）和 generous（慷慨的）与“存钱”相反；lazy（懒惰的）与钱无关。"
  },
  {
    id: "vr-sc-l08", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion"],
    stem: "Unlike his older brother, who often _____, Dev always thinks carefully before he says anything at all.",
    choices: ["answers every question correctly", "blurts out whatever comes to mind", "listens closely to teachers", "talks quietly in the library"], answer: 1,
    explanationEn: "“Unlike” tells us the brother is the opposite of Dev, who thinks carefully before speaking. Only “blurts out whatever comes to mind” describes speaking without thinking first; the other phrases say nothing about careless speech, so they would not contrast with Dev.",
    explanationZh: "“Unlike（与……不同）”说明哥哥和 Dev 正好相反，而 Dev 总是先想后说，所以哥哥是 blurts out whatever comes to mind（想到什么就脱口而出）。其余三个短语都没有说到不假思索地说话，与 Dev 构不成对比。"
  },
  {
    id: "vr-sc-l09", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion"],
    stem: "Since the valley gets heavy rain every spring, wildflowers are _____ there and cover the hillsides in bright color.",
    choices: ["abundant", "dull", "hidden", "rare"], answer: 0,
    glosses: [["abundant", "大量的；丰富的"], ["dull", "暗淡的；乏味的"], ["hidden", "隐藏的；看不见的"], ["rare", "稀少的；罕见的"]],
    explanationEn: "“Since” points to heavy spring rain as the cause, and flowers that “cover the hillsides” must be plentiful. Abundant fits; rare is the opposite, hidden contradicts flowers covering the hills, and dull clashes with “bright color.”",
    explanationZh: "“Since”表明原因是春天雨水充沛，而野花“cover the hillsides（铺满山坡）”，说明数量很多，选 abundant（大量的）。rare（稀少的）意思相反；hidden（隐藏的）与铺满山坡矛盾；dull（暗淡的）与“bright color（鲜艳的颜色）”冲突。"
  },
  {
    id: "vr-sc-l10", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Neither twin will ever give in during an argument, even about which cereal to eat, because both are extremely _____.",
    choices: ["cheerful", "curious", "helpful", "stubborn"], answer: 3,
    glosses: [["cheerful", "开朗的；愉快的"], ["curious", "好奇的"], ["helpful", "乐于助人的；有帮助的"], ["stubborn", "固执的；倔强的"]],
    explanationEn: "The clue is “Neither twin will ever give in,” and “because” tells us the twins’ shared trait causes this. Stubborn means refusing to change one’s mind; cheerful, curious and helpful would not make anyone refuse to give in.",
    explanationZh: "关键线索是“Neither twin will ever give in（谁也不肯让步）”，“because”说明这是由两人的共同特点造成的。stubborn（固执的）就是不肯改变主意；cheerful（开朗的）、curious（好奇的）、helpful（乐于助人的）都不会让人寸步不让。"
  },
  {
    id: "vr-sc-l11", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion"],
    stem: "Although the town’s soccer team had lost every game that season, the coach _____ when the players gathered for their last practice.",
    choices: ["blamed every player", "kept praising their effort", "quit in frustration", "scolded the whole team"], answer: 1,
    glosses: [["blamed", "责怪；归咎于"], ["praising", "称赞；表扬"], ["frustration", "沮丧；挫败感"], ["scolded", "责骂；训斥"]],
    explanationEn: "“Although” signals a surprise: after a season of losses, the expected reactions are blaming, scolding or quitting. Only “kept praising their effort” goes against that expectation, so it is the one that fits the contrast.",
    explanationZh: "“Although”表示意外：整个赛季一场不胜，通常的反应是责怪（blamed）、训斥（scolded）或灰心放弃（quit）。只有 kept praising their effort（不断称赞他们的努力）与这种预期相反，符合转折。"
  },
  {
    id: "vr-sc-l12", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Though the explorers expected the island to be _____, they were surprised to find a bustling village near the shore.",
    choices: ["crowded", "famous", "uninhabited", "welcoming"], answer: 2,
    glosses: [["crowded", "拥挤的；人很多的"], ["famous", "著名的"], ["uninhabited", "无人居住的"], ["welcoming", "热情友好的"]],
    explanationEn: "“Though” and “surprised to find a bustling village” show that the explorers expected the opposite of a busy place. Uninhabited means no one lives there; crowded, famous and welcoming would not make a bustling village surprising.",
    explanationZh: "“Though”和“surprised to find a bustling village（惊讶地发现一个热闹的村庄）”说明探险者原本以为岛上没有人，所以选 uninhabited（无人居住的）。如果预期是 crowded（拥挤的）、famous（著名的）或 welcoming（热情友好的），发现热闹的村庄就不会令人惊讶。"
  },
  {
    id: "vr-sc-l13", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion"],
    stem: "The scientist never claimed to have every answer; in fact, she often _____ when students asked her a hard question.",
    choices: ["admitted what she did not know", "bragged about her discoveries", "insisted that she was always right", "scolded the students for asking"], answer: 0,
    glosses: [["admitted", "承认"], ["bragged", "吹嘘；夸耀"], ["insisted", "坚持说；坚称"], ["scolded", "责骂；训斥"]],
    explanationEn: "“In fact” introduces an example that supports “never claimed to have every answer.” An honest scientist would admit what she does not know; bragging and insisting she is always right contradict the first clause, and scolding students for asking does not support it.",
    explanationZh: "“in fact（事实上）”引出一个支持前半句“never claimed to have every answer（从不声称知道所有答案）”的例子。坦诚的科学家会承认自己不懂的地方（admitted what she did not know）；bragged（吹嘘）和 insisted that she was always right（坚称自己永远正确）与前半句矛盾，scolded（责骂学生）也不能支持这一点。"
  },
  {
    id: "vr-sc-l14", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Nadia did not refuse the invitation to join the school orchestra, but she was clearly _____, pausing and frowning before she answered.",
    choices: ["delighted", "eager", "relieved", "reluctant"], answer: 3,
    glosses: [["delighted", "欣喜的；高兴的"], ["eager", "渴望的；热切的"], ["relieved", "如释重负的；放心的"], ["reluctant", "不情愿的；勉强的"]],
    explanationEn: "“Did not refuse … but” and “pausing and frowning” show she agreed, but without enthusiasm. Reluctant means unwilling; delighted and eager are the opposite, and relieved does not fit someone who pauses and frowns.",
    explanationZh: "“did not refuse … but（没有拒绝，但是……）”和“pausing and frowning（停顿、皱眉）”说明她虽然没有拒绝，却并不乐意，所以选 reluctant（不情愿的）。delighted（欣喜的）和 eager（热切的）意思相反；relieved（如释重负的）与皱眉犹豫不符。"
  },
  {
    id: "vr-sc-l15", level: "lower", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion"],
    stem: "The contractor’s promise to repair the entire stadium in one month was _____, because anyone who looked at the cracked walls could see that the work would take years.",
    choices: ["a sensible plan", "too good to be true", "welcomed by everyone", "within easy reach"], answer: 1,
    glosses: [["too good to be true", "好得不像真的"], ["sensible", "合理的；明智的"]],
    explanationEn: "The “because” clause says anyone could see the work would take years, so the one-month promise was unrealistic. “Too good to be true” means it sounds wonderful but cannot really happen. A sensible plan and within easy reach contradict the clue, and the cracked walls give no reason for everyone to welcome the promise.",
    explanationZh: "“because”后面说明谁看到开裂的墙都知道工程要花好几年，所以一个月完工的承诺并不现实。too good to be true（好得不像真的）正是这个意思。a sensible plan（合理的计划）和 within easy reach（轻而易举）与线索相矛盾；开裂的墙也不能成为“人人欢迎”（welcomed by everyone）的理由。"
  },
  // ───────────── Middle Level ─────────────
  {
    id: "vr-sc-m01", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Although the author’s first novel was a gripping adventure, her second book was so _____ that many readers gave up halfway through.",
    choices: ["brief", "captivating", "tedious", "thrilling"], answer: 2,
    glosses: [["brief", "简短的；短暂的"], ["captivating", "迷人的；引人入胜的"], ["tedious", "乏味的；冗长的"], ["thrilling", "令人兴奋的；惊险的"]],
    explanationEn: "“Although” signals a contrast with the “gripping” first novel, and “gave up halfway through” shows that readers lost interest. Tedious means dull and tiresome; captivating and thrilling repeat the praise, and a brief book would not make readers quit halfway.",
    explanationZh: "“Although”表示转折：第一部小说“gripping（扣人心弦）”，第二部却让许多读者“gave up halfway（读到一半就放弃）”，说明它乏味，所以选 tedious（乏味的）。captivating 和 thrilling 仍是称赞，与转折不符；brief（简短的）解释不了读者为何中途放弃。"
  },
  {
    id: "vr-sc-m02", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion"],
    stem: "Rather than offering vague praise, the coach gave the team _____ feedback about its weaknesses and a clear plan for fixing them.",
    choices: ["candid", "deceptive", "evasive", "flattering"], answer: 0,
    glosses: [["candid", "坦率的；直言不讳的"], ["deceptive", "欺骗性的；误导的"], ["evasive", "回避的；含糊其词的"], ["flattering", "奉承的；恭维的"]],
    explanationEn: "“Rather than … vague praise” and “a clear plan” show the coach spoke plainly and honestly, which is what candid means. Evasive is another way of being vague, flattering is a kind of praise, and deceptive would not come with a clear plan for improvement.",
    explanationZh: "“Rather than … vague praise（没有给出含糊的表扬）”和“a clear plan（清晰的计划）”说明教练说话直截了当、实话实说，这正是 candid（坦率的）的意思。evasive（回避的）仍是含糊其词，flattering（奉承的）属于表扬，deceptive（欺骗性的）则与清晰的改进计划不符。"
  },
  {
    id: "vr-sc-m03", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "The distant thunder sounded _____, and the campers hurried to pack their tents before the storm could reach them.",
    choices: ["cheerful", "festive", "inviting", "ominous"], answer: 3,
    glosses: [["cheerful", "愉快的；欢快的"], ["festive", "喜庆的；节日般的"], ["inviting", "诱人的；令人向往的"], ["ominous", "不祥的；预示坏事的"]],
    explanationEn: "The campers “hurried to pack … before the storm could reach them,” so the thunder must have sounded threatening. Ominous means suggesting that something bad is about to happen; cheerful, festive and inviting would not make anyone rush away.",
    explanationZh: "露营者“hurried to pack（匆忙收拾）”，想赶在暴风雨到来前离开，说明雷声听起来令人不安，选 ominous（不祥的）。cheerful（欢快的）、festive（喜庆的）和 inviting（诱人的）都不会让人急着逃走。"
  },
  {
    id: "vr-sc-m04", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion"],
    stem: "Typewriters, once found in nearly every office, are now _____ because almost everyone writes on computers instead.",
    choices: ["essential", "obsolete", "popular", "universal"], answer: 1,
    glosses: [["essential", "必不可少的；极其重要的"], ["obsolete", "过时的；已废弃的"], ["popular", "受欢迎的；流行的"], ["universal", "普遍的；通用的"]],
    explanationEn: "“Once found in nearly every office” sets up a change, and “because almost everyone writes on computers instead” explains it: typewriters are no longer used. Obsolete means out of date; essential, popular and universal all describe things people still use widely.",
    explanationZh: "“once found in nearly every office（曾经遍布办公室）”暗示情况已变，“because almost everyone writes on computers instead（因为大家改用电脑写字）”给出原因：打字机已经没人用了，所以选 obsolete（过时的）。essential（必不可少的）、popular（受欢迎的）、universal（普遍的）都表示仍被广泛使用。"
  },
  {
    id: "vr-sc-m05", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion"],
    stem: "Maya is a _____ student who finishes every assignment early and then checks her work a second time.",
    choices: ["careless", "daydreaming", "diligent", "lazy"], answer: 2,
    glosses: [["careless", "粗心的"], ["daydreaming", "爱做白日梦的；心不在焉的"], ["diligent", "勤奋的；认真的"], ["lazy", "懒惰的"]],
    explanationEn: "Finishing every assignment early and then “checks her work a second time” describes steady, careful effort, so diligent is correct. Careless, daydreaming and lazy all describe students who would not work this way.",
    explanationZh: "提前完成每份作业，还要“checks her work a second time（再检查一遍）”，说明 Maya 做事勤奋又认真，所以选 diligent（勤奋的）。careless（粗心的）、daydreaming（心不在焉的）和 lazy（懒惰的）都不会这样学习。"
  },
  {
    id: "vr-sc-m06", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "The _____ millionaire gave away much of her fortune to build schools and hospitals in poor villages.",
    choices: ["benevolent", "ruthless", "selfish", "stingy"], answer: 0,
    glosses: [["benevolent", "仁慈的；乐善好施的"], ["ruthless", "无情的；冷酷的"], ["selfish", "自私的"], ["stingy", "吝啬的"]],
    explanationEn: "Giving away a fortune to build schools and hospitals shows kindness and generosity, which is what benevolent means. Ruthless, selfish and stingy all describe people who would keep their money or treat others harshly.",
    explanationZh: "把大笔财富捐出来建学校和医院，体现了仁慈与慷慨，这就是 benevolent（仁慈的）的含义。ruthless（无情的）、selfish（自私的）和 stingy（吝啬的）描述的都是舍不得给予或对人冷酷的人。"
  },
  {
    id: "vr-sc-m07", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion"],
    stem: "The class president was known for her _____ speeches, which stirred classmates with vivid language and powerful images.",
    choices: ["awkward", "bland", "clumsy", "eloquent"], answer: 3,
    glosses: [["awkward", "尴尬的；别扭的"], ["bland", "平淡的；乏味的"], ["clumsy", "笨手笨脚的；拙劣的"], ["eloquent", "雄辩的；有说服力的"]],
    explanationEn: "Speeches that “stirred classmates with vivid language and powerful images” are fluent, expressive and moving, which is what eloquent means. Awkward and clumsy describe poor speaking, and bland speeches are dull rather than stirring.",
    explanationZh: "演讲“stirred classmates with vivid language and powerful images（用生动的语言和有力的形象打动同学）”，说明表达流畅、有感染力，这就是 eloquent（雄辩的、有说服力的）。awkward（别扭的）和 clumsy（拙劣的）形容讲得不好；bland（平淡的）则无法打动人。"
  },
  {
    id: "vr-sc-m08", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "The hiker’s bright orange jacket was _____ against the white snow, and rescue pilots spotted her within minutes.",
    choices: ["anonymous", "conspicuous", "inconspicuous", "invisible"], answer: 1,
    glosses: [["anonymous", "匿名的；不知名的"], ["conspicuous", "显眼的；引人注目的"], ["inconspicuous", "不显眼的"], ["invisible", "看不见的"]],
    explanationEn: "A bright orange jacket on white snow stands out, and pilots “spotted her within minutes,” so the jacket was easy to notice: conspicuous. Inconspicuous and invisible mean hard or impossible to see, and anonymous means unnamed, which has nothing to do with being seen.",
    explanationZh: "白雪地上鲜艳的橙色外套格外醒目，飞行员“spotted her within minutes（几分钟内就发现了她）”，所以选 conspicuous（显眼的）。inconspicuous（不显眼的）和 invisible（看不见的）意思相反；anonymous（匿名的）说的是不具名，与能否被看见无关。"
  },
  {
    id: "vr-sc-m09", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Although the historian’s theory sounded _____ at first, one newly discovered letter proved that it could not possibly be true.",
    choices: ["absurd", "impossible", "plausible", "ridiculous"], answer: 2,
    glosses: [["absurd", "荒谬的；荒诞的"], ["impossible", "不可能的"], ["plausible", "似乎合理的；可信的"], ["ridiculous", "荒唐可笑的"]],
    explanationEn: "“Although” signals a contrast: the theory seemed believable at first but was later disproved. Plausible means believable; absurd, impossible and ridiculous all mean the opposite, so they would not contrast with “could not possibly be true.”",
    explanationZh: "“Although”表示转折：理论起初听起来可信，后来却被一封新发现的信推翻，所以选 plausible（似乎合理的）。absurd（荒谬的）、impossible（不可能的）和 ridiculous（荒唐的）都表示“不可信”，与后半句 could not possibly be true 没有对比。"
  },
  {
    id: "vr-sc-m10", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion"],
    stem: "Because the pool was so crowded, the lifeguard stayed _____ all afternoon, scanning every swimmer for any sign of trouble.",
    choices: ["careless", "distracted", "inattentive", "vigilant"], answer: 3,
    glosses: [["careless", "粗心的"], ["distracted", "分心的；心不在焉的"], ["inattentive", "不专心的；疏忽的"], ["vigilant", "警惕的；警觉的"]],
    explanationEn: "A crowded pool and a lifeguard “scanning every swimmer for any sign of trouble” call for constant watchfulness, which is what vigilant means. Careless, distracted and inattentive all describe someone who is not watching closely.",
    explanationZh: "泳池拥挤，救生员又在“scanning every swimmer for any sign of trouble（盯着每位游泳者，留意任何险情）”，需要时刻保持警觉，所以选 vigilant（警惕的）。careless（粗心的）、distracted（分心的）和 inattentive（不专心的）都表示没有认真观察。"
  },
  {
    id: "vr-sc-m11", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "Half the class understood the steps of the chemistry experiment one way and half understood them another way, because the directions were _____.",
    choices: ["ambiguous", "detailed", "precise", "thorough"], answer: 0,
    glosses: [["ambiguous", "模棱两可的；有歧义的"], ["detailed", "详细的"], ["precise", "精确的；准确的"], ["thorough", "彻底的；详尽的"]],
    explanationEn: "If the class split into two different understandings, the directions had more than one possible meaning, which is what ambiguous means. Detailed, precise and thorough directions would be clear and lead everyone to the same understanding.",
    explanationZh: "全班对实验步骤形成了两种不同的理解，说明说明书可以有不止一种解读，这就是 ambiguous（模棱两可的）。detailed（详细的）、precise（精确的）和 thorough（详尽的）的说明会让大家理解一致。"
  },
  {
    id: "vr-sc-m12", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Far from being _____ by the harsh review, the young author seemed energized and began a new draft that very evening.",
    choices: ["amused", "comforted", "demoralized", "inspired"], answer: 2,
    glosses: [["amused", "被逗乐的；觉得好笑的"], ["comforted", "感到安慰的"], ["demoralized", "士气低落的；灰心丧气的"], ["inspired", "受到鼓舞的"]],
    explanationEn: "“Far from … energized” means the author’s reaction was the opposite of the blank, so the blank must be a discouraged feeling: demoralized. Inspired is almost the same as energized, and amused and comforted are not its opposites, so none of them fits “far from.”",
    explanationZh: "“Far from …（远非……）”说明作者的反应与空格中的词正好相反。作者“energized（精神振奋）”，所以空格应是“灰心丧气”，选 demoralized。inspired（受到鼓舞）与 energized 几乎同义，amused（被逗乐）和 comforted（被安慰）也不是它的反面，都不能与 far from 搭配。"
  },
  {
    id: "vr-sc-m13", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "Although some neighbors called him stingy, Hector preferred to think of himself as _____, because he spent carefully and still gave generously to local charities.",
    choices: ["frugal", "greedy", "miserly", "wasteful"], answer: 0,
    glosses: [["frugal", "节俭的；精打细算的"], ["greedy", "贪婪的"], ["miserly", "吝啬的；守财奴般的"], ["wasteful", "浪费的"]],
    explanationEn: "He rejects the label “stingy” and points to careful spending plus generous giving, so he wants a positive word for careful with money: frugal. Miserly means the same as stingy, greedy is also negative, and wasteful is the opposite of spending carefully.",
    explanationZh: "他不接受“stingy（吝啬）”的说法，理由是花钱谨慎、捐款却很大方，所以他想用一个褒义词形容自己“精打细算”，即 frugal（节俭的）。miserly（吝啬的）与 stingy 同义，greedy（贪婪的）也是贬义，wasteful（浪费的）则与 spent carefully 相反。"
  },
  {
    id: "vr-sc-m14", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion"],
    stem: "Although the cat looked _____ as it lay stretched out on the windowsill, its eyes followed the sparrow’s every movement.",
    choices: ["alert", "curious", "hungry", "indifferent"], answer: 3,
    glosses: [["alert", "警觉的；机灵的"], ["curious", "好奇的"], ["hungry", "饥饿的"], ["indifferent", "漠不关心的；无动于衷的"]],
    explanationEn: "“Although” and “its eyes followed the sparrow’s every movement” show a gap between how the cat looked and what it was really doing, so it looked uninterested: indifferent. Alert, curious and hungry match the cat’s watching, so they would not create the contrast.",
    explanationZh: "“Although”和“its eyes followed the sparrow’s every movement（眼睛紧盯着麻雀的一举一动）”说明猫看上去与实际表现不一致：它看起来漠不关心，所以选 indifferent（漠不关心的）。alert（警觉的）、curious（好奇的）和 hungry（饥饿的）与猫盯着麻雀的行为一致，形成不了转折。"
  },
  {
    id: "vr-sc-m15", level: "middle", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Although she nodded politely, the principal’s _____ tone made it plain that she cared little about the students’ complaints.",
    choices: ["affectionate", "dismissive", "gracious", "sincere"], answer: 1,
    glosses: [["affectionate", "深情的；亲切的"], ["dismissive", "不屑一顾的；轻视的"], ["gracious", "亲切有礼的；和蔼的"], ["sincere", "真诚的"]],
    explanationEn: "“Although she nodded politely” sets up a contrast, and “cared little about the students’ complaints” shows her tone was disrespectful: dismissive. Gracious repeats the idea of polite, while affectionate and sincere would show that she did care.",
    explanationZh: "“Although she nodded politely（虽然她礼貌地点了点头）”引出转折，“cared little about the students’ complaints（不太在意学生的抱怨）”说明她的语气带有轻视，选 dismissive（不屑一顾的）。gracious（亲切有礼的）与 polite 同向，不构成转折；affectionate（深情的）和 sincere（真诚的）则表示她很在意。"
  },
  // ───────────── Upper Level ─────────────
  {
    id: "vr-sc-u01", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "The monastery’s guest rooms were _____: each held only a narrow bed, a bare wooden table and a single candle.",
    choices: ["austere", "cluttered", "lavish", "ornate"], answer: 0,
    glosses: [["austere", "朴素简陋的；严峻的"], ["cluttered", "杂乱的；堆满东西的"], ["lavish", "奢华的；铺张的"], ["ornate", "装饰华丽的；繁复的"]],
    explanationEn: "The words after the colon restate the blank: only a narrow bed, a bare table and one candle describe a plain, severe room, so austere fits. Cluttered, lavish and ornate all suggest rooms full of objects or decoration.",
    explanationZh: "冒号后面是对空格的具体说明：只有窄床、光秃秃的木桌和一支蜡烛，说明房间朴素简陋，选 austere（朴素简陋的）。cluttered（杂乱的）、lavish（奢华的）和 ornate（装饰华丽的）都暗示房间里东西很多或装饰繁复。"
  },
  {
    id: "vr-sc-u02", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Before the railway arrived, the village was _____ and quiet; within ten years it had become a _____ market town full of shops and visitors.",
    choices: ["bustling . . . secluded", "crowded . . . thriving", "secluded . . . bustling", "secluded . . . deserted"], answer: 2,
    glosses: [["bustling", "熙熙攘攘的；忙碌的"], ["secluded", "僻静的；与世隔绝的"], ["crowded", "拥挤的"], ["thriving", "繁荣的；兴旺的"], ["deserted", "荒无人烟的；被遗弃的"]],
    explanationEn: "The first blank pairs with “quiet,” so it must mean peaceful and remote, while the second describes a town “full of shops and visitors,” so it must mean busy. Secluded . . . bustling fits; bustling . . . secluded reverses them, crowded clashes with “quiet,” and deserted contradicts “full of shops and visitors.”",
    explanationZh: "第一个空与“quiet”并列，应是“僻静”的意思；第二个空形容“full of shops and visitors（商铺和游客很多）”的小镇，应是“热闹”。secluded . . . bustling 两处都符合；bustling . . . secluded 把两个词颠倒了；crowded（拥挤的）与 quiet 矛盾；deserted（荒无人烟的）与“商铺和游客很多”矛盾。"
  },
  {
    id: "vr-sc-u03", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "The blossoms of the wild cherry tree are _____, lasting barely a week before the spring winds carry every petal away.",
    choices: ["durable", "ephemeral", "permanent", "vibrant"], answer: 1,
    glosses: [["durable", "耐久的；持久的"], ["ephemeral", "短暂的；转瞬即逝的"], ["permanent", "永久的；长久的"], ["vibrant", "鲜艳的；充满活力的"]],
    explanationEn: "“Lasting barely a week” restates the idea of a very short life, which is what ephemeral means. Durable and permanent are the opposite, and vibrant describes bright color or energy, not how long the blossoms last.",
    explanationZh: "“lasting barely a week（只开不到一周）”说明花期极短，这正是 ephemeral（短暂的）的含义。durable（耐久的）和 permanent（永久的）意思相反；vibrant（鲜艳的）形容色彩或活力，与花开多久无关。"
  },
  {
    id: "vr-sc-u04", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion"],
    stem: "Critics found the film’s first half _____, with slow scenes and endless repetition, but they called its second half _____, praising the swift pacing and surprising twists.",
    choices: ["dazzling . . . tedious", "exhilarating . . . riveting", "lackluster . . . formulaic", "monotonous . . . riveting"], answer: 3,
    glosses: [["dazzling", "耀眼的；精彩绝伦的"], ["tedious", "乏味的；冗长的"], ["exhilarating", "令人振奋的"], ["riveting", "引人入胜的；扣人心弦的"], ["lackluster", "平淡无光的；缺乏生气的"], ["formulaic", "公式化的；老套的"], ["monotonous", "单调的"]],
    explanationEn: "The first blank is explained by “slow scenes and endless repetition,” so it must mean dull, and the second by “swift pacing and surprising twists,” so it must mean gripping. Only monotonous . . . riveting does both; dazzling . . . tedious is reversed, exhilarating cannot describe a slow first half, and formulaic means predictable, the opposite of “surprising twists.”",
    explanationZh: "第一个空由“slow scenes and endless repetition（节奏缓慢、不断重复）”说明，应表示“单调乏味”；第二个空由“swift pacing and surprising twists（节奏明快、情节出人意料）”说明，应表示“引人入胜”。只有 monotonous . . . riveting 同时符合；dazzling . . . tedious 把意思弄反了；exhilarating（令人振奋的）不能形容缓慢的上半场；formulaic（老套的）指可预测，与 surprising twists 矛盾。"
  },
  {
    id: "vr-sc-u05", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "easy",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "Once a rare luxury, mobile phones are now _____: it is hard to find a classroom, waiting room or bus where several are not in use.",
    choices: ["costly", "obsolete", "scarce", "ubiquitous"], answer: 3,
    glosses: [["costly", "昂贵的；代价高的"], ["obsolete", "过时的；已废弃的"], ["scarce", "稀少的；短缺的"], ["ubiquitous", "无处不在的；随处可见的"]],
    explanationEn: "“Once a rare luxury” signals a change, and the words after the colon say that phones are found almost everywhere, which is what ubiquitous means. Scarce describes the old situation, obsolete would mean no longer used, and costly does not explain why phones are everywhere.",
    explanationZh: "“Once a rare luxury（曾是稀罕的奢侈品）”暗示情况已经改变，冒号后说明手机几乎随处可见，这就是 ubiquitous（无处不在的）。scarce（稀少的）是过去的情形；obsolete（过时的）指不再使用；costly（昂贵的）解释不了为何到处都有手机。"
  },
  {
    id: "vr-sc-u06", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Whereas her idealistic partner dreamed of remaking the entire city, Ines was _____, focusing on repairs that could be finished within a single year.",
    choices: ["pragmatic", "reckless", "sentimental", "visionary"], answer: 0,
    glosses: [["pragmatic", "务实的；讲求实际的"], ["reckless", "鲁莽的；不顾后果的"], ["sentimental", "多愁善感的；怀旧的"], ["visionary", "有远见的；空想的"]],
    explanationEn: "“Whereas” contrasts Ines with her idealistic partner, and “repairs that could be finished within a single year” shows she cares about what is practical: pragmatic. Visionary matches the partner’s dreaming, so it would not contrast, and reckless and sentimental do not describe choosing realistic goals.",
    explanationZh: "“Whereas（然而）”把 Ines 与她理想主义的搭档作对比，而“repairs that could be finished within a single year（一年内能完成的修缮）”说明她注重实际，所以选 pragmatic（务实的）。visionary（有远见的、爱幻想的）与搭档同类，不构成对比；reckless（鲁莽的）和 sentimental（多愁善感的）都不是“选择切实目标”的意思。"
  },
  {
    id: "vr-sc-u07", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion"],
    stem: "Because the manuscript had been stored in a damp cellar for decades, its pages were _____ and many of the words had become nearly _____.",
    choices: ["crisp . . . vivid", "crumbling . . . illegible", "fragile . . . distinct", "pristine . . . illegible"], answer: 1,
    glosses: [["crisp", "挺括的；脆硬的"], ["vivid", "鲜明的；清晰的"], ["crumbling", "碎裂的；日渐毁损的"], ["illegible", "难以辨认的；字迹模糊的"], ["fragile", "易碎的；脆弱的"], ["distinct", "清晰的；明显的"], ["pristine", "崭新的；未受损的"]],
    explanationEn: "“Because” says that decades in a damp cellar caused the damage, so the pages should be falling apart and the words hard to read: crumbling . . . illegible. Fragile fits the first blank but distinct contradicts the damage to the words, while crisp, vivid and pristine all describe paper and writing in perfect condition.",
    explanationZh: "“Because”说明几十年放在潮湿地窖里造成了损坏，所以纸页应当破损、字迹应当难以辨认：crumbling . . . illegible。fragile（易碎的）适合第一个空，但 distinct（清晰的）与字迹受损矛盾；crisp、vivid、pristine 描述的都是保存完好的纸张和字迹。"
  },
  {
    id: "vr-sc-u08", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "Planting native grasses along the riverbank will not stop the spring floods, but it may help _____ their damage by slowing the rushing water.",
    choices: ["aggravate", "anticipate", "mitigate", "witness"], answer: 2,
    glosses: [["aggravate", "使恶化；加重"], ["anticipate", "预料；预期"], ["mitigate", "减轻；缓和"], ["witness", "目睹；见证"]],
    explanationEn: "“Will not stop … but may help” and “by slowing the rushing water” show the grasses make the damage smaller, which is what mitigate means. Aggravate means to make worse, and neither anticipate nor witness describes something that slowing water could do to damage.",
    explanationZh: "“will not stop … but may help（不能阻止，但也许有助于）”和“by slowing the rushing water（通过减缓水流）”说明这些草能让损失变小，这就是 mitigate（减轻）。aggravate 是“使恶化”；anticipate（预料）和 witness（目睹）都不是减缓水流能对损失做到的事。"
  },
  {
    id: "vr-sc-u09", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "The old lighthouse keeper was famously _____, often going a week without speaking, but his granddaughter is so _____ that she greets every visitor with a story.",
    choices: ["sociable . . . taciturn", "taciturn . . . reclusive", "taciturn . . . sociable", "talkative . . . sociable"], answer: 2,
    glosses: [["sociable", "好交际的；友善合群的"], ["taciturn", "沉默寡言的"], ["reclusive", "隐居的；不愿见人的"], ["talkative", "健谈的；话多的"]],
    explanationEn: "“Going a week without speaking” defines the first blank as taciturn, and “but” plus “greets every visitor with a story” makes the second blank sociable. Talkative contradicts the keeper’s silence, reclusive contradicts greeting every visitor, and sociable . . . taciturn is reversed.",
    explanationZh: "“going a week without speaking（一个星期不说话）”说明第一个空是 taciturn（沉默寡言的）；“but”和“greets every visitor with a story（给每位游客讲故事）”说明第二个空是 sociable（好交际的）。talkative（健谈的）与老人的沉默矛盾，reclusive（不愿见人的）与热情接待游客矛盾，sociable . . . taciturn 则把两个词颠倒了。"
  },
  {
    id: "vr-sc-u10", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "The _____ intern praised every comment the manager made, however trivial, in hopes of winning her favor.",
    choices: ["aloof", "candid", "defiant", "obsequious"], answer: 3,
    glosses: [["aloof", "冷淡疏远的；不合群的"], ["candid", "坦率的；直言不讳的"], ["defiant", "违抗的；挑衅的"], ["obsequious", "谄媚的；阿谀奉承的"]],
    explanationEn: "Praising every comment, “however trivial,” just to win her favor is excessive flattery, which is what obsequious means. A candid person would be honest rather than flattering, a defiant person would resist the manager, and an aloof person would keep a distance instead of seeking favor.",
    explanationZh: "对每条评论都夸赞，“however trivial（哪怕微不足道）”，只为“winning her favor（赢得她的好感）”，这是过度的奉承，即 obsequious（谄媚的）。candid（坦率的）的人会说实话而不是奉承；defiant（违抗的）的人会对抗经理；aloof（冷淡疏远的）的人不会主动讨好。"
  },
  {
    id: "vr-sc-u11", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "medium",
    conceptIds: ["sentence-completion"],
    stem: "The pianist’s technique was _____, every note struck with perfect accuracy, yet her performance felt strangely _____, as if she had no feeling to share.",
    choices: ["erratic . . . mechanical", "flawless . . . mechanical", "flawless . . . passionate", "passionate . . . erratic"], answer: 1,
    glosses: [["erratic", "不稳定的；飘忽不定的"], ["mechanical", "机械的；缺乏感情的"], ["flawless", "完美无瑕的"], ["passionate", "充满激情的"]],
    explanationEn: "“Perfect accuracy” defines the first blank as flawless, and “yet … as if she had no feeling” makes the second blank a lack of emotion: mechanical. Erratic contradicts perfect accuracy, and passionate contradicts having no feeling to share.",
    explanationZh: "“perfect accuracy（完美准确）”说明第一个空是 flawless（完美无瑕的）；“yet … as if she had no feeling（然而……仿佛没有感情）”说明第二个空表示缺乏感情，即 mechanical（机械的）。erratic（不稳定的）与“完美准确”矛盾；passionate（充满激情的）与“没有感情可传达”矛盾。"
  },
  {
    id: "vr-sc-u12", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion", "vocabulary-in-context"],
    stem: "Although the historian doubted the sailor’s account of the shipwreck, a second journal written by a passenger _____ it in nearly every detail.",
    choices: ["contradicted", "corroborated", "refuted", "undermined"], answer: 1,
    glosses: [["contradicted", "与……相矛盾；反驳"], ["corroborated", "证实；为……提供佐证"], ["refuted", "驳斥；证明……有误"], ["undermined", "削弱；暗中损害"]],
    explanationEn: "“Although” signals a contrast with the historian’s doubt, so the second journal must have supported the sailor’s story: corroborated means confirmed with independent evidence. Contradicted, refuted and undermined would all agree with her doubt, so “although” would make no sense.",
    explanationZh: "“Although”引出与历史学家的怀疑相反的情况，所以第二本日志应当支持水手的说法：corroborated 的意思是用独立证据加以证实。contradicted（与……矛盾）、refuted（驳斥）和 undermined（削弱）都与她的怀疑方向一致，放进去就不符合 although 的转折。"
  },
  {
    id: "vr-sc-u13", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "Despite the company founder’s _____ reputation for blunt honesty, her replies at the press conference were so _____ that reporters could not tell where she stood on the plan.",
    choices: ["forthright . . . equivocal", "forthright . . . unequivocal", "secretive . . . equivocal", "timid . . . unequivocal"], answer: 0,
    glosses: [["forthright", "直率的；坦诚的"], ["equivocal", "含糊其词的；模棱两可的"], ["unequivocal", "明确的；毫不含糊的"], ["secretive", "遮遮掩掩的；守口如瓶的"], ["timid", "胆怯的；羞怯的"]],
    explanationEn: "“Reputation for blunt honesty” defines the first blank as forthright, and “Despite” plus “reporters could not tell where she stood” makes the second blank equivocal, meaning deliberately unclear. Unequivocal means the opposite (perfectly clear), while secretive and timid clash with a reputation for blunt honesty.",
    explanationZh: "“reputation for blunt honesty（以直言不讳著称）”说明第一个空是 forthright（直率的）；“Despite”加上“reporters could not tell where she stood（记者看不出她的立场）”说明第二个空是 equivocal（含糊其词的）。unequivocal（明确的）意思正相反；secretive（遮遮掩掩的）和 timid（胆怯的）都与直言不讳的名声矛盾。"
  },
  {
    id: "vr-sc-u14", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "Despite pleas from both parties, the committee chair remained _____, refusing to change a single word of the proposal.",
    choices: ["conciliatory", "flexible", "indecisive", "intransigent"], answer: 3,
    glosses: [["conciliatory", "愿意和解的；调解的"], ["flexible", "灵活的；可通融的"], ["indecisive", "优柔寡断的"], ["intransigent", "不妥协的；顽固的"]],
    explanationEn: "“Despite pleas” and “refusing to change a single word” show a person who will not compromise, which is what intransigent means. Conciliatory and flexible are the opposite, and indecisive describes someone who cannot make up his or her mind, not someone who firmly refuses.",
    explanationZh: "“Despite pleas（尽管有人恳求）”和“refusing to change a single word（一个字也不肯改）”说明主席绝不让步，这就是 intransigent（不妥协的）。conciliatory（愿意和解的）和 flexible（灵活的）意思相反；indecisive（优柔寡断的）指拿不定主意，而不是坚决拒绝。"
  },
  {
    id: "vr-sc-u15", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "hard",
    conceptIds: ["sentence-completion", "vocabulary-building"],
    stem: "Though her colleagues dismissed her careful approach as _____, she insisted that it was in fact _____, since it had prevented three costly errors.",
    choices: ["hasty . . . judicious", "judicious . . . overcautious", "overcautious . . . judicious", "overcautious . . . rash"], answer: 2,
    glosses: [["hasty", "草率的；匆忙的"], ["judicious", "明智的；审慎的"], ["overcautious", "过分谨慎的"], ["rash", "轻率的；鲁莽的"]],
    explanationEn: "“Dismissed” means her colleagues saw her careful approach as a flaw, so the first blank is overcautious; “insisted … in fact” and “prevented three costly errors” make the second blank a compliment, judicious. Hasty and rash describe the opposite of careful, and judicious . . . overcautious reverses the two views.",
    explanationZh: "“dismissed … as（把……斥为）”说明同事把她谨慎的做法看作缺点，所以第一个空是 overcautious（过分谨慎的）；“insisted … in fact（坚称实际上）”和“prevented three costly errors（避免了三次代价高昂的错误）”说明第二个空是褒义的 judicious（明智的）。hasty（草率的）和 rash（轻率的）与 careful 相反；judicious . . . overcautious 则把两种看法颠倒了。"
  }
];
