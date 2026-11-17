// Verbal Reasoning study-guide concepts, part A: Synonyms and Sentence Completion.
export const CONCEPTS = [
  {
    id: "synonyms", zh: "同义词", en: "Synonyms",
    detailEn: "How to find the choice closest in meaning to a stem word by predicting, using word parts, judging tone and strength, and eliminating traps.",
    detailZh: "如何通过先预测词义、分析词根词缀、判断感情色彩和强弱、排除陷阱，选出与题干词意思最接近的词。",
    explanationEn: "A synonym question shows one capitalized word and four single-word choices; you pick the choice that means almost the same thing. It tests vocabulary, but it also rewards clear thinking about words you only half know. The stem is usually judged in its most common sense, and the choices normally share its part of speech. Wrong choices are built on purpose: an opposite, a look-alike, a related but different idea. The words get harder with the level, from everyday school vocabulary at Lower Level to more advanced high-school words at Upper Level. The choices are listed alphabetically, so the position of the answer is no clue, and there is no penalty for a wrong answer, so every question deserves an answer.",
    explanationZh: "同义词题给出一个大写的题干词和四个单词选项，要求选出意思最接近的一个。它考的是词汇量，也考你面对“似曾相识”的词时如何推理。题干词一般按最常见的含义来理解，四个选项的词性通常也与它一致。错误选项是刻意设计的：有反义词、长得相似的词，还有话题相关但意思不同的词。词汇难度随级别上升：初级（Lower Level）是日常学校词汇，高级（Upper Level）则是更深的高中词汇。选项按字母顺序排列，所以正确答案的位置没有规律可循；答错不扣分，每道题都要作答。",
    keyPoints: [
      {
        titleEn: "Predict a meaning before you read the choices", titleZh: "先预测词义，再看选项",
        explanationEn: "Say the stem word to yourself and define it in your own words, or think of a simple word you know that means the same. Only then look at the choices. Predicting first stops the choices from steering you toward an opposite or a look-alike. If the word is unfamiliar, gather clues instead: a prefix, root or suffix you know, a sentence where you have heard it, and whether it feels positive or negative. Even a rough prediction such as “something bad” helps.",
        explanationZh: "先默念题干词，用自己的话给它下定义，或想一个意思相同的简单词，然后再去看选项。先预测可以避免被反义词或形近词带偏。遇到不认识的词，就先收集线索：认识的前缀、词根或后缀，在哪个句子里听过它，以及它给人的感觉是褒还是贬。哪怕只是粗略的预测，比如“不好的事”，也很有帮助。",
        stepsEn: [
          "Read the stem word and say a short definition or a simple substitute word.",
          "If you do not know it, look for a prefix, root or suffix and recall a sentence where you saw it.",
          "Decide whether the word feels positive, negative or neutral, and how strong it is.",
          "Scan the choices for your prediction and cross out any that clearly clash with it.",
          "Test the remaining choice in the frame “the stem word means about the same as this choice.”"
        ],
        stepsZh: [
          "读题干词，用一句简短的定义或一个简单的替代词说出它的意思。",
          "不认识时，找找认识的前缀、词根或后缀，并回想在哪个句子里见过它。",
          "判断这个词是褒义、贬义还是中性，以及语气的强弱。",
          "对照预测扫描选项，把明显冲突的选项划掉。",
          "把剩下的选项代入“题干词和这个选项意思差不多”的句式，检验是否成立。"
        ],
        exampleEn: "Stem SCARCE: predict “hard to find, not enough.” Choices: plentiful, rare, simple, sudden. Plentiful is the opposite, and simple and sudden have nothing to do with amount, so rare is the match.",
        exampleZh: "题干词 SCARCE：先预测“难得到、不够多”。选项为 plentiful、rare、simple、sudden。plentiful 是反义，simple 和 sudden 与数量无关，所以 rare（稀少的）是最接近的。"
      },
      {
        titleEn: "Use prefixes, roots and suffixes", titleZh: "利用前缀、词根和后缀",
        explanationEn: "Many hard words are built from familiar pieces. A prefix changes the meaning (un- and in- often mean “not,” re- means “again,” pre- means “before”), a root carries the core idea, and a suffix such as -able, -ful or -less adds a shade of meaning or shows the part of speech. Combine the pieces to make a guess and check it against the choices. Treat the result as a clue, not proof: “uncle” and “pretty” only look as if they begin with a prefix.",
        explanationZh: "许多难词是由熟悉的部件拼成的。前缀改变词义（un-、in- 常表示“不”，re- 表示“再次”，pre- 表示“在……之前”），词根承载核心意思，-able、-ful、-less 等后缀则增添含义或提示词性。把各部分拼起来先猜一个意思，再和选项对照。但这只是线索，不是证明：uncle 和 pretty 只是看起来像带前缀而已。",
        exampleEn: "CREDIBLE: the root cred means “believe” and -ible means “able to be,” so the word means “able to be believed.” A choice such as believable would match, while incredible (not believable) is the opposite.",
        exampleZh: "CREDIBLE：词根 cred 表示“相信”，-ible 表示“能够被……的”，所以整词意为“值得相信的”。believable 与之吻合；而 incredible 的前缀 in- 表示“不”，意思正好相反（不可信的）。"
      },
      {
        titleEn: "Check the part of speech and choose the most common meaning", titleZh: "核对词性，选最常见的含义",
        explanationEn: "Many English words work as more than one part of speech and have several meanings. The four choices usually share one part of speech, and that tells you which meaning of the stem is being tested. When a word has several meanings, start with the one students meet most often and look for the choice that matches it. Only if none of the choices fits should you try a less common meaning.",
        explanationZh: "英语中很多词有多种词性和多个含义。四个选项的词性通常一致，这就提示了题干词取的是哪一类含义。词义较多时，先从最常见的含义入手，找与之匹配的选项；只有所有选项都对不上时，才考虑较少见的含义。",
        exampleEn: "FIRM: if the choices are adjectives such as flexible, soft, solid and tender, the common meaning is “hard, not easily bent,” so solid fits. If the choices were nouns, firm could mean a business instead.",
        exampleZh: "FIRM：若选项是 flexible、soft、solid、tender 这类形容词，取最常见的“坚硬的、不易弯折的”之意，选 solid。若选项都是名词，firm 则可能指“公司”。"
      },
      {
        titleEn: "Match the feeling and the strength of the word", titleZh: "匹配词的感情色彩和强度",
        explanationEn: "Words carry feelings. “Thrifty” and “stingy” both describe a person who is careful with money, but thrifty sounds like praise and stingy sounds like criticism. Decide whether the stem word is positive, negative or neutral and cross out choices with the opposite feeling. Then compare strength: “annoyed,” “angry” and “furious” all point the same way, but only one has the same intensity as the stem. A choice that is right in direction but too weak or too strong is a trap.",
        explanationZh: "词语带有感情色彩。thrifty（节俭的）和 stingy（吝啬的）都形容花钱谨慎的人，但前者是褒义，后者是贬义。先判断题干词是褒义、贬义还是中性，把感情色彩相反的选项划掉；再比较强度：annoyed（恼火的）、angry（生气的）、furious（暴怒的）方向一致，强弱却不同，只有一个与题干词的程度相当。方向对但太弱或太强的选项，就是陷阱。",
        exampleEn: "FURIOUS: very, very angry. Choices: annoyed, cheerful, enraged, puzzled. Cheerful has the wrong feeling, puzzled is not about anger, and annoyed is angry but much too mild. Enraged matches both feeling and strength.",
        exampleZh: "FURIOUS：极其愤怒。选项为 annoyed、cheerful、enraged、puzzled。cheerful 感情色彩不对，puzzled 与愤怒无关，annoyed 虽然沾边但程度太轻；enraged（暴怒的）在感情色彩和强度上都吻合。"
      },
      {
        titleEn: "Spot the traps: opposites, look-alikes and matching pairs", titleZh: "识别陷阱：反义词、形近词和成对的选项",
        explanationEn: "Wrong choices are often built on purpose. An opposite attracts students who remember the topic of a word but not its direction. A look-alike shares sounds or letters with the stem (such as “adopt” and “adapt”) but means something different. A related word belongs to the same topic but is not a synonym. One more tool is pure logic: if two choices mean essentially the same thing, neither can be the answer, because only one choice is correct. Cross out both and decide among the rest.",
        explanationZh: "错误选项往往是刻意设计的。反义词会吸引只记得词的话题、却记不清方向的同学；形近词在拼写或读音上与题干词相似（如 adopt 和 adapt）但意思不同；相关词与题干词同属一个话题，却不是同义词。还有一个纯逻辑的办法：如果两个选项的意思基本相同，那么它们都不可能是答案，因为正确选项只有一个，可以同时划掉，再在其余选项中判断。",
        exampleEn: "RELUCTANT: unwilling. Choices: eager, keen, noisy, unwilling. Eager and keen mean about the same thing, so neither can be correct. Noisy has no link to willingness, which leaves unwilling.",
        exampleZh: "RELUCTANT：不情愿的。选项为 eager、keen、noisy、unwilling。eager 和 keen 意思基本相同，所以都不可能是答案；noisy 与意愿无关，因此答案是 unwilling。"
      },
      {
        titleEn: "When you do not know the word, narrow down and guess", titleZh: "遇到不认识的词：缩小范围再猜",
        explanationEn: "Verbal Reasoning allows about 30–35 seconds per question, and there is no penalty for a wrong answer, so never leave a blank. If the stem is unknown, you may still know some of the choices. Eliminate those you know are wrong or that pair off with another choice, keep the ones you cannot judge, and pick among them. Spend the most effort on words you half know, and do not let one hard word cost you the next three questions.",
        explanationZh: "言语推理部分平均每题只有约 30–35 秒，而且答错不扣分，所以绝不要留空。遇到不认识的题干词，也许你认识其中几个选项：把确定不对的、或能与另一个选项配成一对的选项排除，在剩下的里面选。把精力多花在“半生不熟”的词上，别让一个难词耽误后面好几道题。",
        exampleEn: "ARDUOUS: you cannot recall a definition, but you remember “an arduous climb up a steep hill.” Picture it: tiring and hard. Choices: demanding, easy, quick, tidy. Easy is the opposite, and quick and tidy do not fit a steep climb, so demanding is the best guess.",
        exampleZh: "ARDUOUS：你想不起定义，但记得“an arduous climb up a steep hill（一段艰难的爬坡）”。想象那个画面：又累又难。选项为 demanding、easy、quick、tidy。easy 是反义，quick 和 tidy 与陡坡的画面不符，所以最合理的猜测是 demanding（费力的）。"
      }
    ],
    methodsEn: [
      "Cover the choices and predict a meaning first.",
      "Split the word into prefix, root and suffix to guess its core idea.",
      "Label the stem positive, negative or neutral, and cross out choices with the opposite feeling.",
      "Check the part of speech, then test each remaining choice in the frame “X means about the same as Y.”",
      "If two choices mean the same thing, eliminate both.",
      "Never leave a blank: eliminate what you can, then guess."
    ],
    methodsZh: [
      "先遮住选项，自己预测词义。",
      "拆分前缀、词根和后缀，推测核心意思。",
      "判断题干词是褒义、贬义还是中性，划掉感情色彩相反的选项。",
      "核对词性，再把剩下的选项代入“A 与 B 意思差不多”的句式检验。",
      "若两个选项意思相同，同时排除。",
      "绝不留空：能排除的先排除，再作猜测。"
    ],
    exampleEn: "Take the stem CAUTIOUS. Prediction: “careful to avoid danger or mistakes.” The choices are bold, careless, clever and wary. Bold is roughly the opposite. Careless borrows the root care, but the suffix -less flips the meaning, which makes it a trap. Clever is about intelligence, not caution. Wary means watchful about possible problems, so it is the answer.",
    exampleZh: "以题干词 CAUTIOUS 为例。先预测词义：“小心谨慎，避免危险或失误”。选项为 bold、careless、clever、wary。bold（大胆的）大致相反；careless 含有词根 care，但后缀 -less 把意思翻转为“粗心的”，是典型陷阱；clever 说的是聪明，与谨慎无关；wary 表示“对可能出现的问题保持警惕”，与预测吻合，所以选 wary。",
    checklistEn: [
      "Define a stem word in your own words before reading the choices",
      "Use prefixes, roots and suffixes to guess an unfamiliar word",
      "Tell positive, negative and neutral words apart and compare their strength",
      "Recognize opposite, look-alike and related-word traps",
      "Choose the most common meaning of a word that has several meanings",
      "Narrow down and guess calmly when the word is unfamiliar"
    ],
    checklistZh: [
      "能在看选项之前，用自己的话说出题干词的意思",
      "能利用前缀、词根和后缀猜测陌生词",
      "能区分褒义、贬义和中性词，并比较强弱",
      "能识别反义词、形近词和相关词陷阱",
      "能在多义词中选出最常见的含义",
      "遇到不认识的词时，能冷静地缩小范围并作出猜测"
    ]
  },
  {
    id: "sentence-completion", zh: "句子填空", en: "Sentence Completion",
    detailEn: "How to use context clues such as contrast, cause and effect, restatement, examples and tone to predict the missing word, whether there is one blank or two.",
    detailZh: "如何利用转折、因果、同义复述、举例和语气等上下文线索，预测空格处的词（单空或双空）。",
    explanationEn: "A sentence completion question gives a sentence with one blank (Upper Level also uses two blanks), and you choose the word or words that complete it best. Choices are listed alphabetically. Lower Level choices may be short phrases, Middle Level uses single words, and Upper Level may use a pair of words for two blanks. The sentence always carries a clue that fixes the meaning of the missing word, so this task is more about careful reading than about hard vocabulary. Find the clue, decide what the blank must mean, and only then look at the choices. Finally, read the finished sentence to check that it makes sense in meaning and in tone.",
    explanationZh: "句子填空题给出一个带空格的句子（高级 Upper Level 还会出现双空），要求选出最能补全句子的词或词组。选项按字母顺序排列：初级（Lower Level）的选项可能是短语，中级（Middle Level）是单个词，高级可能是成对的词。句子里总有一条线索决定空格处该是什么意思，因此这类题更考细心阅读，而不只是难词。先找线索，判断空格应表达的意思，再看选项，最后把完整的句子读一遍，检查意思和语气是否通顺。",
    keyPoints: [
      {
        titleEn: "Contrast clues: although, but, yet, however", titleZh: "转折线索：although、but、yet、however",
        explanationEn: "A contrast word tells you that two parts of the sentence point in opposite directions, so the blank must be the opposite of the idea on the other side. Common signals are although, though, but, yet, however, despite, while, unlike, instead and rather than. Underline the contrast word, find the idea it pushes against, and give the blank the opposite meaning. A common mistake is to ignore the signal and pick a word that repeats the other idea. Watch for a second reversal too: a “not” or “never” in the clue flips the direction again.",
        explanationZh: "转折词说明句子的两部分方向相反，因此空格处的意思要与另一侧的意思相反。常见的信号词有 although、though、but、yet、however、despite、while、unlike、instead、rather than 等。先划出转折词，找到它所对立的那部分意思，再让空格表达相反的意思。常见的错误是忽略信号词，选了一个重复另一侧意思的词。还要留意第二次反转：线索中的 not 或 never 会把方向再翻转一次。",
        exampleEn: "Although the cafeteria is usually noisy, the library is surprisingly _____. The word “although” sets “noisy” against the blank, so the blank must mean the opposite of noisy, such as quiet or calm.",
        exampleZh: "Although the cafeteria is usually noisy, the library is surprisingly _____.（尽管食堂通常很吵，图书馆却出奇地_____。）“although”把 noisy 与空格对立起来，所以空格应表示 noisy 的反面，如 quiet（安静的）或 calm（平静的）。"
      },
      {
        titleEn: "Cause–effect and restatement clues", titleZh: "因果线索与同义复述线索",
        explanationEn: "Words such as because, since, so, therefore and as a result tell you that one part of the sentence is the reason for the other, so the blank has to follow logically from the part you can read. A restatement clue defines or explains the blank in other words, often after a comma, a dash, “or,” “that is” or “which means.” Here the blank and the clue mean the same thing. In both cases, ask yourself: “What word would the rest of the sentence prove?”",
        explanationZh: "because、since、so、therefore、as a result 等词说明句子的一部分是另一部分的原因，因此空格要与能读到的那部分在逻辑上顺理成章。同义复述线索则用别的说法解释空格，常出现在逗号、破折号、or、that is、which means 之后，此时空格与线索意思相同。两种情况下，都可以问自己：“句子的其余部分能证明哪个词？”",
        exampleEn: "Cause–effect: “Because Mia practiced her speech every night for a month, she felt _____ when she walked onto the stage.” A month of practice leads to confidence. Restatement: “The directions were _____, which means they could be understood in two different ways.” The words after “which means” define the blank, so a word like ambiguous fits.",
        exampleZh: "因果：“Because Mia practiced her speech every night for a month, she felt _____ when she walked onto the stage.”（因为 Mia 一个月来每晚练习演讲，所以她走上舞台时感到_____。）连续练习带来自信，空格填 confident 之类的词。复述：“The directions were _____, which means they could be understood in two different ways.”（说明可以有两种理解。）which means 之后的内容正是对空格的解释，所以填 ambiguous（有歧义的）这样的词。"
      },
      {
        titleEn: "Example, list and tone clues", titleZh: "举例、并列和语气线索",
        explanationEn: "Phrases like such as, for example, including and for instance introduce examples, and the blank names the general idea that the examples share. In a list joined by “and,” the blank usually matches its neighbors: words in a list tend to be alike in meaning and in feeling. Tone works the same way. A sentence about a warm welcome, a disappointing result or a joking remark has an overall feeling that the blank must match. Look at the whole sentence, not only at the words next to the blank.",
        explanationZh: "such as、for example、including、for instance 等引出例子，空格要概括这些例子的共同特点。用 and 连接的并列词，意思和感情色彩通常相近，空格要与它们保持一致。语气线索同理：一个关于热情欢迎、令人失望的结果或俏皮玩笑的句子，整体感情是确定的，空格必须与之相配。要看整个句子，而不是只盯着空格旁边的词。",
        exampleEn: "Example clue: “The market sells many kinds of fruit, such as apples, mangoes and plums, so its selection is quite _____.” The examples are all different, so the blank means varied. Tone clue: “Nobody clapped, and the speaker left the stage looking _____.” The glum mood calls for disappointed or discouraged.",
        exampleZh: "举例线索：“The market sells many kinds of fruit, such as apples, mangoes and plums, so its selection is quite _____.”（集市卖许多种水果，如苹果、芒果和李子，所以品种相当_____。）这些例子各不相同，空格应是 varied（多样的）。语气线索：“Nobody clapped, and the speaker left the stage looking _____.”（没人鼓掌，演讲者下台时显得_____。）低落的气氛要求填 disappointed（失望的）或 discouraged（气馁的）。"
      },
      {
        titleEn: "Cover the choices, predict, and check the charge", titleZh: "遮住选项，先预测，再看正负含义",
        explanationEn: "Read the sentence and, before you look at the choices, put your own word in the blank. If you read the choices first, impressive-sounding wrong answers can tempt you. A prediction does not have to match a choice exactly; it only has to point to a meaning. Then check the charge: decide whether the blank must be positive, negative or neutral, and cross out every choice with the wrong charge. Often that step alone leaves only one or two words.",
        explanationZh: "先读句子，在看选项之前，自己在空格里填一个词。如果先看选项，听起来高深的错误选项容易把你带偏。预测不必与选项完全一致，只要指向某个意思即可。然后检查正负含义：判断空格应当是褒义、贬义还是中性，把正负含义不对的选项全部划掉。这一步往往就能只剩一两个词。",
        stepsEn: [
          "Read the whole sentence once and mark the clue word or phrase.",
          "Decide what the blank must do: repeat the clue, reverse it, explain it or continue it.",
          "Say your own word or a short meaning for the blank, such as “quiet” or “not very good.”",
          "Decide the charge, positive or negative, and cross out choices that do not match.",
          "Pick the choice closest to your prediction, then read the full sentence with it in place."
        ],
        stepsZh: [
          "把整个句子读一遍，标出线索词或线索短语。",
          "判断空格的作用：重复线索、反转线索、解释线索，还是顺着线索继续。",
          "自己想一个词或一句简短的意思填进空格，比如“安静”或“不太好”。",
          "判断正负含义是褒还是贬，把不符的选项划掉。",
          "选出最接近预测的选项，再把完整句子代入读一遍。"
        ],
        exampleEn: "“The team’s _____ attitude surprised the fans, who had expected the players to give up after an early setback.” Prediction: determined and hopeful. The charge is positive. Choices: gloomy, hopeless, indifferent, resilient. Gloomy, hopeless and indifferent all fail the charge check, so resilient is the answer.",
        exampleZh: "“The team’s _____ attitude surprised the fans, who had expected the players to give up after an early setback.”（球队的_____态度让球迷们感到意外，他们原以为球员们会在早期失利后放弃。）预测：坚定、乐观，正负含义为褒义。选项：gloomy、hopeless、indifferent、resilient。gloomy（沮丧的）、hopeless（绝望的）、indifferent（漠不关心的）都通不过正负含义的检查，所以选 resilient（有韧性的）。"
      },
      {
        titleEn: "Two blanks: solve the easier blank first and eliminate pairs", titleZh: "双空题：先解较容易的空，再逐对排除",
        explanationEn: "At Upper Level, some sentences have two blanks and each choice is a pair of words. Do not try to guess both at once. Find the blank with the clearer clue, decide its meaning, and cross out every pair whose word in that position does not fit. Then test the remaining pairs in the other blank. One perfect word is not enough: a pair is correct only if both words work together in the finished sentence. A contrast word may call for one positive and one negative word, while a cause clue may call for two that point the same way.",
        explanationZh: "高级（Upper Level）有些句子含有两个空，每个选项是一对词。不要想同时猜出两个空。先找线索更清楚的那个空，确定它的意思，把这一位置不合适的整对选项划掉；再用另一个空检验剩下的选项。只有一个词完美是不够的：两个词放进句子后都通顺，这一对才算正确。有转折词时，可能需要一个褒义词和一个贬义词；有因果线索时，则可能需要两个方向一致的词。",
        exampleEn: "“The lecture was so _____ that many students became _____ and stopped taking notes.” Choices: brief . . . eager; lively . . . restless; monotonous . . . eager; monotonous . . . restless. The second blank is easier: students who stop taking notes are losing interest, so eager is out, which removes two pairs. A lively lecture would not make students restless, so monotonous . . . restless is correct.",
        exampleZh: "“The lecture was so _____ that many students became _____ and stopped taking notes.”（讲座太_____了，以至于许多学生变得_____，不再记笔记。）选项：brief . . . eager；lively . . . restless；monotonous . . . eager；monotonous . . . restless。第二个空更容易判断：不再记笔记说明学生失去了兴趣，所以 eager（渴望的）被排除，两对选项随之淘汰。剩下的两对中，生动的讲座不会让学生坐立不安，所以正确答案是 monotonous . . . restless（单调的 . . . 坐立不安的）。"
      },
      {
        titleEn: "Phrase choices and the final re-read", titleZh: "短语选项与最后的通读检查",
        explanationEn: "At Lower Level, a choice can be a short phrase instead of a single word, such as “in a hurry” or “from time to time.” Treat the phrase as one unit: its whole meaning must fit the clue, and the sentence must still read correctly. At every level, finish by reading the whole sentence in your head with your choice in place. Ask three questions. Does it make sense? Does it match the tone of the rest of the sentence? Does it agree with every clue? If your answer sounds slightly odd, compare it with the runner-up once more before you move on.",
        explanationZh: "初级（Lower Level）的选项可能是短语而不是单词，例如 in a hurry（匆忙地）或 from time to time（时不时）。要把短语当作一个整体：它的整体意思必须符合线索，放进去后句子读起来也要正确通顺。无论哪个级别，最后都要把选好的答案代入，把整句话在心里通读一遍，并自问三个问题：意思说得通吗？语气与其余部分一致吗？与每一条线索都吻合吗？如果答案读起来有点别扭，就再与排第二的选项比一比，然后再继续下一题。",
        exampleEn: "“Maya fed her neighbor’s cat every day, just as she had promised, which showed that she was _____.” Choices: a careless person, a reliable person, easily bored, too busy to help. Keeping a promise shows reliability, while “too busy to help” contradicts the fact that she did help. Final read: “…she was a reliable person” sounds right and matches the clue.",
        exampleZh: "“Maya fed her neighbor’s cat every day, just as she had promised, which showed that she was _____.”（Maya 像承诺的那样每天给邻居的猫喂食，这说明她是_____。）选项：a careless person、a reliable person、easily bored、too busy to help。遵守承诺说明可靠，而“太忙而无法帮忙”与她确实帮了忙相矛盾。最后通读一遍：“……她是一个可靠的人”读起来通顺，也与线索一致。"
      }
    ],
    methodsEn: [
      "Read the whole sentence first and underline the clue: a contrast, cause, restatement, example or tone.",
      "Cover the choices and predict the blank in your own words.",
      "Decide whether the blank is positive or negative and cross out choices with the wrong charge.",
      "For two blanks, solve the easier blank first and eliminate pairs.",
      "Treat a phrase choice as one unit and check that it fits the meaning and the grammar.",
      "Read the finished sentence to check meaning, tone and every clue."
    ],
    methodsZh: [
      "先通读整句，划出线索：转折、因果、复述、举例或语气。",
      "遮住选项，用自己的话预测空格。",
      "判断空格是褒义还是贬义，划掉正负含义不符的选项。",
      "双空题先解较容易的空，再逐对排除。",
      "把短语选项当作一个整体，检查意思和语法是否通顺。",
      "把完整的句子读一遍，检查意思、语气和每条线索。"
    ],
    exampleEn: "“Although the new game seemed _____ at first, the players soon discovered that its rules were simple.” The word “although” signals a contrast with “simple,” so the blank must mean complicated or hard to follow. Choices: effortless, intricate, lenient, tidy. Effortless means easy, which repeats “simple” instead of contrasting with it, and lenient and tidy do not describe how hard a game seems. Intricate means having many complicated parts, so it is the answer. Re-read: “Although the new game seemed intricate at first…” makes sense.",
    exampleZh: "“Although the new game seemed _____ at first, the players soon discovered that its rules were simple.”（尽管这个新游戏起初看起来_____，玩家们很快发现它的规则很简单。）“although”表示与 simple 的转折，所以空格应是“复杂、难懂”的意思。选项：effortless、intricate、lenient、tidy。effortless 意为“轻松的”，与 simple 重复而不是对立；lenient 和 tidy 不描述游戏看起来有多难。intricate（错综复杂的）符合，所以是答案。再读一遍：“……这个新游戏起初看起来错综复杂……”通顺合理。",
    checklistEn: [
      "Spot contrast, cause–effect, restatement, example and tone clues",
      "Predict the blank before reading the choices",
      "Decide whether a blank is positive or negative and use that to eliminate choices",
      "Solve a two-blank sentence by finding the easier blank first",
      "Treat a phrase choice as one unit and check how well it fits",
      "Re-read the finished sentence to confirm meaning and tone"
    ],
    checklistZh: [
      "能识别转折、因果、复述、举例和语气线索",
      "能在看选项之前预测空格的意思",
      "能判断空格的正负含义并据此排除选项",
      "能先解较容易的空来完成双空题",
      "能把短语选项当作整体并检查是否贴合",
      "能把完整句子重读一遍，确认意思和语气"
    ]
  }
];
