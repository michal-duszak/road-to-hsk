import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSetService {

  constructor() { }


  getRandomHskChar(): {
    id: number;
    hanzi: string;
    pinyin: string;
    translations: string[];
}  {
    const char = this._hanzi_hsk_1()[Math.floor(Math.random()*this._hanzi_hsk_1().length)]
    return char;
  }







   private _hanzi_hsk_1 = () => [
    {
      "id": 1,
      "hanzi": "爱",
      "pinyin": "ài",
      "translations": [
        "to love",
        "affection",
        "to be fond of",
        "to like"
      ]
    },
    {
      "id": 2,
      "hanzi": "八",
      "pinyin": "bā",
      "translations": [
        "eight",
        "8"
      ]
    },
    {
      "id": 3,
      "hanzi": "爸爸",
      "pinyin": "bà ba",
      "translations": [
        "(informal) father",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 4,
      "hanzi": "杯子",
      "pinyin": "bēi zi",
      "translations": [
        "cup",
        "glass",
        "CL:個|个",
        "支",
        "枝[zhī]"
      ]
    },
    {
      "id": 5,
      "hanzi": "北京",
      "pinyin": "Běi jīng",
      "translations": [
        "Beijing",
        "capital of People's Republic of China",
        "Peking",
        "PRC government"
      ]
    },
    {
      "id": 6,
      "hanzi": "本",
      "pinyin": "běn",
      "translations": [
        "roots or stems of plants",
        "origin",
        "source",
        "this",
        "the current",
        "root",
        "foundation",
        "basis",
        "classifier for books",
        "periodicals",
        "files etc",
        "originally"
      ]
    },
    {
      "id": 7,
      "hanzi": "不客气",
      "pinyin": "bù kè qi",
      "translations": [
        "you're welcome",
        "impolite",
        "rude",
        "blunt",
        "don't mention it"
      ]
    },
    {
      "id": 8,
      "hanzi": "不",
      "pinyin": "bù",
      "translations": [
        "(negative prefix)",
        "not",
        "no"
      ]
    },
    {
      "id": 9,
      "hanzi": "菜",
      "pinyin": "cài",
      "translations": [
        "dish (type of food)",
        "vegetables",
        "vegetable",
        "cuisine",
        "CL:盤|盘",
        "道[dào]"
      ]
    },
    {
      "id": 10,
      "hanzi": "茶",
      "pinyin": "chá",
      "translations": [
        "tea",
        "tea plant",
        "CL:杯",
        "壺|壶[hú]"
      ]
    },
    {
      "id": 11,
      "hanzi": "吃",
      "pinyin": "chī",
      "translations": [
        "to eat",
        "to consume",
        "to eat at (a cafeteria etc)",
        "to eradicate",
        "to destroy",
        "to absorb",
        "to suffer"
      ]
    },
    {
      "id": 12,
      "hanzi": "出租车",
      "pinyin": "chū zū chē",
      "translations": [
        "taxi",
        "(Taiwan) rental car"
      ]
    },
    {
      "id": 13,
      "hanzi": "打电话",
      "pinyin": "dǎ diàn huà",
      "translations": [
        "to make a telephone call"
      ]
    },
    {
      "id": 14,
      "hanzi": "大",
      "pinyin": "dà",
      "translations": [
        "big",
        "huge",
        "large",
        "major",
        "great",
        "wide",
        "deep",
        "oldest",
        "eldest"
      ]
    },
    {
      "id": 15,
      "hanzi": "的",
      "pinyin": "de",
      "translations": [
        "of",
        "~'s (possessive particle)",
        "(used after an attribute)",
        "(used to form a nominal expression)",
        "(used at the end of a declarative sentence for emphasis)"
      ]
    },
    {
      "id": 16,
      "hanzi": "点",
      "pinyin": "diǎn",
      "translations": [
        "point",
        "dot",
        "drop",
        "speck",
        "o'clock",
        "point (in space or time)",
        "to draw a dot",
        "to check on a list",
        "to choose",
        "to order (food in a restaurant)",
        "to touch briefly",
        "to hint",
        "to light",
        "to ignite",
        "to pour a liquid drop by drop",
        "(old) one fifth of a two-hour watch 更[gēng]",
        "dot stroke in Chinese characters",
        "classifier for items"
      ]
    },
    {
      "id": 17,
      "hanzi": "电脑",
      "pinyin": "diàn nǎo",
      "translations": [
        "computer",
        "CL:臺|台[tái]"
      ]
    },
    {
      "id": 18,
      "hanzi": "电视",
      "pinyin": "diàn shì",
      "translations": [
        "television",
        "TV",
        "CL:臺|台",
        "個|个[gè]"
      ]
    },
    {
      "id": 19,
      "hanzi": "电影",
      "pinyin": "diàn yǐng",
      "translations": [
        "movie",
        "film",
        "CL:部",
        "片",
        "幕",
        "場|场[chǎng]"
      ]
    },
    {
      "id": 20,
      "hanzi": "东西",
      "pinyin": "dōng xi",
      "translations": [
        "thing",
        "stuff",
        "person",
        "CL:個|个",
        "件[jiàn]"
      ]
    },
    {
      "id": 21,
      "hanzi": "都",
      "pinyin": "dōu",
      "translations": [
        "all",
        "both",
        "entirely",
        "(used for emphasis) even",
        "already",
        "(not) at all"
      ]
    },
    {
      "id": 22,
      "hanzi": "读",
      "pinyin": "dú",
      "translations": [
        "to read",
        "to study",
        "reading of word (i.e. pronunciation)",
        "similar to 拼音[pīn yīn]"
      ]
    },
    {
      "id": 23,
      "hanzi": "对不起",
      "pinyin": "duì bu qǐ",
      "translations": [
        "unworthy",
        "to let down",
        "I'm sorry",
        "excuse me",
        "pardon me",
        "if you please",
        "sorry? (please repeat)"
      ]
    },
    {
      "id": 24,
      "hanzi": "多",
      "pinyin": "duō",
      "translations": [
        "many",
        "much",
        "a lot of",
        "numerous",
        "more",
        "in excess",
        "how (to what extent)",
        "multi-",
        "Taiwan pr.  when it means \"how\""
      ]
    },
    {
      "id": 25,
      "hanzi": "多少",
      "pinyin": "duō shao",
      "translations": [
        "how much",
        "how many",
        "which (number)",
        "as much as"
      ]
    },
    {
      "id": 26,
      "hanzi": "儿子",
      "pinyin": "ér zi",
      "translations": [
        "son"
      ]
    },
    {
      "id": 27,
      "hanzi": "二",
      "pinyin": "èr",
      "translations": [
        "two",
        "2",
        "stupid (Beijing dialect)"
      ]
    },
    {
      "id": 28,
      "hanzi": "饭馆",
      "pinyin": "fàn guǎn",
      "translations": [
        "restaurant",
        "CL:家[jiā]"
      ]
    },
    {
      "id": 29,
      "hanzi": "飞机",
      "pinyin": "fēi jī",
      "translations": [
        "airplane",
        "CL:架[jià]"
      ]
    },
    {
      "id": 30,
      "hanzi": "分钟",
      "pinyin": "fēn zhōng",
      "translations": [
        "minute"
      ]
    },
    {
      "id": 31,
      "hanzi": "高兴",
      "pinyin": "gāo xìng",
      "translations": [
        "happy",
        "glad",
        "willing (to do sth)",
        "in a cheerful mood"
      ]
    },
    {
      "id": 32,
      "hanzi": "个",
      "pinyin": "gè",
      "translations": [
        "variant of 個|个[gè]"
      ]
    },
    {
      "id": 33,
      "hanzi": "工作",
      "pinyin": "gōng zuò",
      "translations": [
        "to work",
        "(of a machine) to operate",
        "job",
        "work",
        "task",
        "CL:個|个",
        "份",
        "項|项[xiàng]"
      ]
    },
    {
      "id": 34,
      "hanzi": "狗",
      "pinyin": "gǒu",
      "translations": [
        "dog",
        "CL:隻|只",
        "條|条[tiáo]"
      ]
    },
    {
      "id": 35,
      "hanzi": "汉语",
      "pinyin": "Hàn yǔ",
      "translations": [
        "Chinese language",
        "CL:門|门[mén]"
      ]
    },
    {
      "id": 36,
      "hanzi": "好",
      "pinyin": "hǎo",
      "translations": [
        "good",
        "well",
        "proper",
        "good to",
        "easy to",
        "very",
        "so",
        "(suffix indicating completion or readiness)"
      ]
    },
    {
      "id": 37,
      "hanzi": "喝",
      "pinyin": "hē",
      "translations": [
        "to drink",
        "My goodness!"
      ]
    },
    {
      "id": 38,
      "hanzi": "和",
      "pinyin": "hé",
      "translations": [
        "and",
        "together with",
        "with",
        "sum",
        "union",
        "peace",
        "harmony",
        "Japanese related",
        "Taiwan pr. [hàn]"
      ]
    },
    {
      "id": 39,
      "hanzi": "很",
      "pinyin": "hěn",
      "translations": [
        "(adverb of degree)",
        "quite",
        "very",
        "awfully"
      ]
    },
    {
      "id": 40,
      "hanzi": "后面",
      "pinyin": "hòu mian",
      "translations": [
        "rear",
        "back",
        "behind",
        "later",
        "afterwards"
      ]
    },
    {
      "id": 41,
      "hanzi": "回",
      "pinyin": "huí",
      "translations": [
        "to curve",
        "to return",
        "to revolve"
      ]
    },
    {
      "id": 42,
      "hanzi": "会",
      "pinyin": "huì",
      "translations": [
        "can",
        "be possible",
        "be able to",
        "will",
        "be likely to",
        "be sure to",
        "to assemble",
        "to meet",
        "to gather",
        "to see",
        "union",
        "group",
        "association",
        "CL:個|个[gè]",
        "a moment (Taiwan pr. for this sense is )"
      ]
    },
    {
      "id": 43,
      "hanzi": "火车站",
      "pinyin": "huǒ chē zhàn",
      "translations": [
        "train station"
      ]
    },
    {
      "id": 44,
      "hanzi": "几",
      "pinyin": "jǐ",
      "translations": [
        "how much",
        "how many",
        "several",
        "a few"
      ]
    },
    {
      "id": 45,
      "hanzi": "家",
      "pinyin": "jiā",
      "translations": [
        "home",
        "family",
        "classifier for families or businesses",
        "refers to the philosophical schools of pre-Han China",
        "noun suffix for specialists in some activity such as musician or revolutionary",
        "corresponds to English -ist",
        "-er",
        "-ary or -ian",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 46,
      "hanzi": "叫",
      "pinyin": "jiào",
      "translations": [
        "to shout",
        "to call",
        "to order",
        "to ask",
        "to be called",
        "by (indicates agent in the passive mood)"
      ]
    },
    {
      "id": 47,
      "hanzi": "今天",
      "pinyin": "jīn tiān",
      "translations": [
        "today",
        "at the present",
        "now"
      ]
    },
    {
      "id": 48,
      "hanzi": "九",
      "pinyin": "jiǔ",
      "translations": [
        "nine",
        "9"
      ]
    },
    {
      "id": 49,
      "hanzi": "开",
      "pinyin": "kāi",
      "translations": [
        "to open",
        "to start",
        "to turn on",
        "to boil",
        "to write out (a medical prescription)",
        "to operate (vehicle)",
        "abbr. for 開爾文|开尔文 degrees Kelvin"
      ]
    },
    {
      "id": 50,
      "hanzi": "看",
      "pinyin": "kàn",
      "translations": [
        "to see",
        "to look at",
        "to read",
        "to watch",
        "to consider",
        "to regard as",
        "to view as",
        "to treat as",
        "to judge",
        "(after repeated verb) to give it a try",
        "depending on (how you're judging)",
        "to visit",
        "to call on",
        "to treat (an illness)",
        "to look after",
        "Watch out! (for a danger)"
      ]
    },
    {
      "id": 51,
      "hanzi": "看见",
      "pinyin": "kàn jiàn",
      "translations": [
        "to see",
        "to catch sight of"
      ]
    },
    {
      "id": 52,
      "hanzi": "块",
      "pinyin": "kuài",
      "translations": [
        "lump (of earth)",
        "chunk",
        "piece",
        "classifier for pieces of cloth",
        "cake",
        "soap etc",
        "colloquial word for yuan (or other unit of currency such as Hong Kong or US dollar etc)",
        "usually as 塊錢|块钱"
      ]
    },
    {
      "id": 53,
      "hanzi": "来",
      "pinyin": "lái",
      "translations": [
        "to come",
        "to arrive",
        "to come round",
        "ever since",
        "next"
      ]
    },
    {
      "id": 54,
      "hanzi": "老师",
      "pinyin": "lǎo shī",
      "translations": [
        "teacher",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 55,
      "hanzi": "了",
      "pinyin": "le",
      "translations": [
        "(modal particle intensifying preceding clause)",
        "(completed action marker)"
      ]
    },
    {
      "id": 56,
      "hanzi": "冷",
      "pinyin": "lěng",
      "translations": [
        "cold"
      ]
    },
    {
      "id": 57,
      "hanzi": "里",
      "pinyin": "lǐ",
      "translations": [
        "li (Chinese mile)",
        "500 meters (modern)",
        "home",
        "hometown",
        "village",
        "neighborhood",
        "administrative unit"
      ]
    },
    {
      "id": 58,
      "hanzi": "零",
      "pinyin": "líng",
      "translations": [
        "zero",
        "nought",
        "zero sign",
        "fractional",
        "fragmentary",
        "odd (of numbers)",
        "(placed between two numbers to indicate a smaller quantity followed by a larger one)",
        "fraction",
        "(in mathematics) remainder (after division)",
        "extra",
        "to wither and fall",
        "to wither"
      ]
    },
    {
      "id": 59,
      "hanzi": "六",
      "pinyin": "liù",
      "translations": [
        "six",
        "6"
      ]
    },
    {
      "id": 60,
      "hanzi": "妈妈",
      "pinyin": "mā ma",
      "translations": [
        "mama",
        "mommy",
        "mother",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 61,
      "hanzi": "吗",
      "pinyin": "ma",
      "translations": [
        "(question tag)"
      ]
    },
    {
      "id": 62,
      "hanzi": "买",
      "pinyin": "mǎi",
      "translations": [
        "to buy",
        "to purchase"
      ]
    },
    {
      "id": 63,
      "hanzi": "猫",
      "pinyin": "māo",
      "translations": [
        "cat",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 64,
      "hanzi": "没",
      "pinyin": "méi",
      "translations": [
        "(negative prefix for verbs)",
        "have not",
        "not"
      ]
    },
    {
      "id": 65,
      "hanzi": "没关系",
      "pinyin": "méi guān xi",
      "translations": [
        "it doesn't matter"
      ]
    },
    {
      "id": 66,
      "hanzi": "米饭",
      "pinyin": "mǐ fàn",
      "translations": [
        "(cooked) rice"
      ]
    },
    {
      "id": 67,
      "hanzi": "明天",
      "pinyin": "míng tiān",
      "translations": [
        "tomorrow"
      ]
    },
    {
      "id": 68,
      "hanzi": "名字",
      "pinyin": "míng zi",
      "translations": [
        "name (of a person or thing)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 69,
      "hanzi": "哪",
      "pinyin": "nǎ",
      "translations": [
        "how",
        "which"
      ]
    },
    {
      "id": 70,
      "hanzi": "那",
      "pinyin": "nà",
      "translations": [
        "that",
        "those",
        "then (in that case)",
        "commonly pr.  before a classifier",
        "esp. in Beijing"
      ]
    },
    {
      "id": 71,
      "hanzi": "呢",
      "pinyin": "ne",
      "translations": [
        "particle indicating that a previously asked question is to be applied to the preceding word (\"What about ...?\", \"And ...?\")",
        "particle for inquiring about location (\"Where is ...?\")",
        "particle signaling a pause",
        "to emphasize the preceding words and allow the listener time to take them on board (\"ok?\", \"are you with me?\")",
        "(at the end of a declarative sentence) particle indicating continuation of a state or action",
        "particle indicating strong affirmation"
      ]
    },
    {
      "id": 72,
      "hanzi": "能",
      "pinyin": "néng",
      "translations": [
        "to be able to",
        "to be capable of",
        "ability",
        "capability",
        "able",
        "capable",
        "can possibly",
        "(usually used in the negative) to have the possibility of"
      ]
    },
    {
      "id": 73,
      "hanzi": "你",
      "pinyin": "nǐ",
      "translations": [
        "you (informal, as opposed to courteous 您)"
      ]
    },
    {
      "id": 74,
      "hanzi": "年",
      "pinyin": "nián",
      "translations": [
        "year",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 75,
      "hanzi": "女儿",
      "pinyin": "nǚ ér",
      "translations": [
        "daughter"
      ]
    },
    {
      "id": 76,
      "hanzi": "朋友",
      "pinyin": "péng you",
      "translations": [
        "friend",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 77,
      "hanzi": "漂亮",
      "pinyin": "piào liang",
      "translations": [
        "pretty",
        "beautiful"
      ]
    },
    {
      "id": 78,
      "hanzi": "苹果",
      "pinyin": "píng guǒ",
      "translations": [
        "apple",
        "CL:個|个",
        "顆|颗[kē]"
      ]
    },
    {
      "id": 79,
      "hanzi": "七",
      "pinyin": "qī",
      "translations": [
        "seven",
        "7"
      ]
    },
    {
      "id": 80,
      "hanzi": "钱",
      "pinyin": "qián",
      "translations": [
        "coin",
        "money",
        "CL:筆|笔[bǐ]",
        "unit of weight",
        "one tenth of a tael 兩|两[liǎng]"
      ]
    },
    {
      "id": 81,
      "hanzi": "前面",
      "pinyin": "qián miàn",
      "translations": [
        "ahead",
        "in front",
        "preceding",
        "above"
      ]
    },
    {
      "id": 82,
      "hanzi": "请",
      "pinyin": "qǐng",
      "translations": [
        "to ask",
        "to invite",
        "please (do sth)",
        "to treat (to a meal etc)",
        "to request"
      ]
    },
    {
      "id": 83,
      "hanzi": "去",
      "pinyin": "qù",
      "translations": [
        "to go",
        "to go to (a place)",
        "to cause to go or send (sb)",
        "to remove",
        "to get rid of",
        "(when used either before or after a verb) to go in order to do sth",
        "to be apart from in space or time",
        "(after a verb of motion indicates movement away from the speaker)",
        "(used after certain verbs to indicate detachment or separation)",
        "(of a time or an event etc) just passed or elapsed"
      ]
    },
    {
      "id": 84,
      "hanzi": "热",
      "pinyin": "rè",
      "translations": [
        "to warm up",
        "to heat up",
        "hot (of weather)",
        "heat",
        "fervent"
      ]
    },
    {
      "id": 85,
      "hanzi": "人",
      "pinyin": "rén",
      "translations": [
        "man",
        "person",
        "people",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 86,
      "hanzi": "认识",
      "pinyin": "rèn shi",
      "translations": [
        "to know",
        "to recognize",
        "to be familiar with",
        "to get acquainted with sb",
        "knowledge",
        "understanding",
        "awareness",
        "cognition"
      ]
    },
    {
      "id": 87,
      "hanzi": "日",
      "pinyin": "rì",
      "translations": [
        "sun",
        "day",
        "date",
        "day of the month",
        "abbr. for 日本 Japan"
      ]
    },
    {
      "id": 88,
      "hanzi": "三",
      "pinyin": "sān",
      "translations": [
        "three",
        "3"
      ]
    },
    {
      "id": 89,
      "hanzi": "商店",
      "pinyin": "shāng diàn",
      "translations": [
        "store",
        "shop",
        "CL:家",
        "個|个[gè]"
      ]
    },
    {
      "id": 90,
      "hanzi": "上",
      "pinyin": "shàng",
      "translations": [
        "on top",
        "upon",
        "above",
        "upper",
        "previous",
        "first (of multiple parts)",
        "to climb",
        "to get onto",
        "to go up",
        "to attend (class or university)"
      ]
    },
    {
      "id": 91,
      "hanzi": "上午",
      "pinyin": "shàng wǔ",
      "translations": [
        "morning",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 92,
      "hanzi": "少",
      "pinyin": "shǎo",
      "translations": [
        "few",
        "little",
        "lack"
      ]
    },
    {
      "id": 93,
      "hanzi": "谁",
      "pinyin": "shéi",
      "translations": [
        "who",
        "also pr. [shuí]"
      ]
    },
    {
      "id": 94,
      "hanzi": "什么",
      "pinyin": "shén me",
      "translations": [
        "what?",
        "who?",
        "something",
        "anything"
      ]
    },
    {
      "id": 95,
      "hanzi": "十",
      "pinyin": "shí",
      "translations": [
        "ten",
        "10"
      ]
    },
    {
      "id": 96,
      "hanzi": "时候",
      "pinyin": "shí hou",
      "translations": [
        "time",
        "length of time",
        "moment",
        "period"
      ]
    },
    {
      "id": 97,
      "hanzi": "是",
      "pinyin": "shì",
      "translations": [
        "is",
        "are",
        "am",
        "yes",
        "to be"
      ]
    },
    {
      "id": 98,
      "hanzi": "书",
      "pinyin": "shū",
      "translations": [
        "book",
        "letter",
        "CL:本",
        "冊|册",
        "部[bù]",
        "see also 書經|书经 Book of History"
      ]
    },
    {
      "id": 99,
      "hanzi": "水",
      "pinyin": "shuǐ",
      "translations": [
        "water",
        "river",
        "liquid",
        "beverage",
        "additional charges or income",
        "(of clothes) classifier for number of washes"
      ]
    },
    {
      "id": 100,
      "hanzi": "水果",
      "pinyin": "shuǐ guǒ",
      "translations": [
        "fruit",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 101,
      "hanzi": "睡觉",
      "pinyin": "shuì jiào",
      "translations": [
        "to go to bed",
        "to sleep"
      ]
    },
    {
      "id": 102,
      "hanzi": "说话",
      "pinyin": "shuō huà",
      "translations": [
        "to speak",
        "to say",
        "to talk",
        "to gossip",
        "to tell stories",
        "talk",
        "word"
      ]
    },
    {
      "id": 103,
      "hanzi": "四",
      "pinyin": "sì",
      "translations": [
        "four",
        "4"
      ]
    },
    {
      "id": 104,
      "hanzi": "岁",
      "pinyin": "suì",
      "translations": [
        "classifier for years (of age)",
        "year",
        "year (of crop harvests)"
      ]
    },
    {
      "id": 105,
      "hanzi": "他",
      "pinyin": "tā",
      "translations": [
        "he or him",
        "(used for either sex when the sex is unknown or unimportant)",
        "(used before sb's name for emphasis)",
        "(used as a meaningless mock object)",
        "other",
        "another"
      ]
    },
    {
      "id": 106,
      "hanzi": "她",
      "pinyin": "tā",
      "translations": [
        "she"
      ]
    },
    {
      "id": 107,
      "hanzi": "太",
      "pinyin": "tài",
      "translations": [
        "highest",
        "greatest",
        "too (much)",
        "very",
        "extremely"
      ]
    },
    {
      "id": 108,
      "hanzi": "天气",
      "pinyin": "tiān qì",
      "translations": [
        "weather"
      ]
    },
    {
      "id": 109,
      "hanzi": "听",
      "pinyin": "tīng",
      "translations": [
        "to listen",
        "to hear",
        "to obey",
        "a can (loanword from English \"tin\")",
        "classifier for canned beverages"
      ]
    },
    {
      "id": 110,
      "hanzi": "同学",
      "pinyin": "tóng xué",
      "translations": [
        "to study at the same school",
        "fellow student",
        "classmate",
        "CL:位",
        "個|个[gè]"
      ]
    },
    {
      "id": 111,
      "hanzi": "喂",
      "pinyin": "wèi",
      "translations": [
        "to feed"
      ]
    },
    {
      "id": 112,
      "hanzi": "我",
      "pinyin": "wǒ",
      "translations": [
        "I",
        "me",
        "my"
      ]
    },
    {
      "id": 113,
      "hanzi": "我们",
      "pinyin": "wǒ men",
      "translations": [
        "we",
        "us",
        "ourselves",
        "our"
      ]
    },
    {
      "id": 114,
      "hanzi": "五",
      "pinyin": "wǔ",
      "translations": [
        "five",
        "5"
      ]
    },
    {
      "id": 115,
      "hanzi": "喜欢",
      "pinyin": "xǐ huan",
      "translations": [
        "to like",
        "to be fond of"
      ]
    },
    {
      "id": 116,
      "hanzi": "下",
      "pinyin": "xià",
      "translations": [
        "down",
        "downwards",
        "below",
        "lower",
        "later",
        "next (week etc)",
        "second (of two parts)",
        "to decline",
        "to go down"
      ]
    },
    {
      "id": 117,
      "hanzi": "下午",
      "pinyin": "xià wǔ",
      "translations": [
        "afternoon",
        "CL:個|个[gè]",
        "p.m."
      ]
    },
    {
      "id": 118,
      "hanzi": "下雨",
      "pinyin": "xià yǔ",
      "translations": [
        "to rain",
        "rainy"
      ]
    },
    {
      "id": 119,
      "hanzi": "先生",
      "pinyin": "xiān sheng",
      "translations": [
        "teacher",
        "husband",
        "doctor (topolect)",
        "CL:位[wèi]"
      ]
    },
    {
      "id": 120,
      "hanzi": "现在",
      "pinyin": "xiàn zài",
      "translations": [
        "now",
        "at present",
        "at the moment",
        "modern",
        "current",
        "nowadays"
      ]
    },
    {
      "id": 121,
      "hanzi": "想",
      "pinyin": "xiǎng",
      "translations": [
        "to think",
        "to believe",
        "to suppose",
        "to wish",
        "to want",
        "to miss"
      ]
    },
    {
      "id": 122,
      "hanzi": "小",
      "pinyin": "xiǎo",
      "translations": [
        "small",
        "tiny",
        "few",
        "young"
      ]
    },
    {
      "id": 123,
      "hanzi": "小姐",
      "pinyin": "xiǎo jie",
      "translations": [
        "young lady",
        "miss",
        "(slang) prostitute",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 124,
      "hanzi": "些",
      "pinyin": "xiē",
      "translations": [
        "some",
        "few",
        "several",
        "measure word indicating a small amount or small number (greater than 1)"
      ]
    },
    {
      "id": 125,
      "hanzi": "写",
      "pinyin": "xiě",
      "translations": [
        "to write"
      ]
    },
    {
      "id": 126,
      "hanzi": "谢谢",
      "pinyin": "xiè xie",
      "translations": [
        "to thank",
        "thanks"
      ]
    },
    {
      "id": 127,
      "hanzi": "星期",
      "pinyin": "xīng qī",
      "translations": [
        "week",
        "CL:個|个[gè]",
        "day of the week",
        "Sunday"
      ]
    },
    {
      "id": 128,
      "hanzi": "学生",
      "pinyin": "xué sheng",
      "translations": [
        "student",
        "schoolchild"
      ]
    },
    {
      "id": 129,
      "hanzi": "学习",
      "pinyin": "xué xí",
      "translations": [
        "to learn",
        "to study"
      ]
    },
    {
      "id": 130,
      "hanzi": "学校",
      "pinyin": "xué xiào",
      "translations": [
        "school",
        "CL:所[suǒ]"
      ]
    },
    {
      "id": 131,
      "hanzi": "一",
      "pinyin": "yī",
      "translations": [
        "one",
        "1",
        "single",
        "a (article)",
        "as soon as",
        "entire",
        "whole",
        "all",
        "throughout",
        "\"one\" radical in Chinese characters (Kangxi radical 1)"
      ]
    },
    {
      "id": 132,
      "hanzi": "衣服",
      "pinyin": "yī fu",
      "translations": [
        "clothes",
        "CL:件",
        "套[tào]"
      ]
    },
    {
      "id": 133,
      "hanzi": "医生",
      "pinyin": "yī shēng",
      "translations": [
        "doctor",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 134,
      "hanzi": "医院",
      "pinyin": "yī yuàn",
      "translations": [
        "hospital",
        "CL:所",
        "家",
        "座[zuò]"
      ]
    },
    {
      "id": 135,
      "hanzi": "椅子",
      "pinyin": "yǐ zi",
      "translations": [
        "chair",
        "CL:把",
        "套[tào]"
      ]
    },
    {
      "id": 136,
      "hanzi": "有",
      "pinyin": "yǒu",
      "translations": [
        "to have",
        "there is",
        "there are",
        "to exist",
        "to be"
      ]
    },
    {
      "id": 137,
      "hanzi": "月",
      "pinyin": "yuè",
      "translations": [
        "moon",
        "month",
        "CL:個|个",
        "輪|轮[lún]"
      ]
    },
    {
      "id": 138,
      "hanzi": "在",
      "pinyin": "zài",
      "translations": [
        "(located) at",
        "(to be) in",
        "to exist",
        "in the middle of doing sth",
        "(indicating an action in progress)"
      ]
    },
    {
      "id": 139,
      "hanzi": "再见",
      "pinyin": "zài jiàn",
      "translations": [
        "goodbye",
        "see you again later"
      ]
    },
    {
      "id": 140,
      "hanzi": "怎么",
      "pinyin": "zěn me",
      "translations": [
        "variant of 怎麼|怎么[zěn me]"
      ]
    },
    {
      "id": 141,
      "hanzi": "怎么样",
      "pinyin": "zěn me yàng",
      "translations": [
        "how?",
        "how about?",
        "how was it?",
        "how are things?"
      ]
    },
    {
      "id": 142,
      "hanzi": "这",
      "pinyin": "zhè",
      "translations": [
        "this",
        "these",
        "(commonly pr.  before a classifier, esp. in Beijing)"
      ]
    },
    {
      "id": 143,
      "hanzi": "中国",
      "pinyin": "Zhōng guó",
      "translations": [
        "China",
        "Middle Kingdom"
      ]
    },
    {
      "id": 144,
      "hanzi": "中午",
      "pinyin": "zhōng wǔ",
      "translations": [
        "noon",
        "midday",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 145,
      "hanzi": "住",
      "pinyin": "zhù",
      "translations": [
        "to live",
        "to dwell",
        "to stay",
        "to reside",
        "to stop",
        "(suffix indicating firmness, steadiness, or coming to a halt)"
      ]
    },
    {
      "id": 146,
      "hanzi": "桌子",
      "pinyin": "zhuō zi",
      "translations": [
        "table",
        "desk",
        "CL:張|张",
        "套[tào]"
      ]
    },
    {
      "id": 147,
      "hanzi": "字",
      "pinyin": "zì",
      "translations": [
        "letter",
        "symbol",
        "character",
        "word",
        "CL:個|个[gè]",
        "courtesy or style name traditionally given to males aged 20 in dynastic China"
      ]
    },
    {
      "id": 148,
      "hanzi": "昨天",
      "pinyin": "zuó tiān",
      "translations": [
        "yesterday"
      ]
    },
    {
      "id": 149,
      "hanzi": "坐",
      "pinyin": "zuò",
      "translations": [
        "to sit",
        "to take a seat",
        "to take (a bus, airplane etc)",
        "to bear fruit",
        "variant of 座[zuò]"
      ]
    },
    {
      "id": 150,
      "hanzi": "做",
      "pinyin": "zuò",
      "translations": [
        "to do",
        "to make",
        "to produce",
        "to write",
        "to compose",
        "to act as",
        "to engage in",
        "to hold (a party)",
        "to be",
        "to become",
        "to function (in some capacity)",
        "to serve as",
        "to be used for",
        "to form (a bond or relationship)",
        "to pretend",
        "to feign",
        "to act a part",
        "to put on appearance"
      ]
    }
  ]
  
  private _hanzi_hsk_2 = () => [
    {
      "id": 151,
      "hanzi": "吧",
      "pinyin": "ba",
      "translations": [
        "(modal particle indicating suggestion or surmise)",
        "...right?",
        "...OK?",
        "...I presume."
      ]
    },
    {
      "id": 152,
      "hanzi": "白",
      "pinyin": "bái",
      "translations": [
        "white",
        "snowy",
        "pure",
        "bright",
        "empty",
        "blank",
        "plain",
        "clear",
        "to make clear",
        "in vain",
        "gratuitous",
        "free of charge",
        "reactionary",
        "anti-communist",
        "funeral",
        "to stare coldly",
        "to write wrong character",
        "to state",
        "to explain",
        "vernacular",
        "spoken lines in opera"
      ]
    },
    {
      "id": 153,
      "hanzi": "百",
      "pinyin": "bǎi",
      "translations": [
        "hundred",
        "numerous",
        "all kinds of"
      ]
    },
    {
      "id": 154,
      "hanzi": "帮助",
      "pinyin": "bāng zhù",
      "translations": [
        "assistance",
        "aid",
        "to help",
        "to assist"
      ]
    },
    {
      "id": 155,
      "hanzi": "报纸",
      "pinyin": "bào zhǐ",
      "translations": [
        "newspaper",
        "newsprint",
        "CL:份",
        "期",
        "張|张[zhāng]"
      ]
    },
    {
      "id": 156,
      "hanzi": "比",
      "pinyin": "bǐ",
      "translations": [
        "(particle used for comparison and \"-er than\")",
        "to compare",
        "to contrast",
        "to gesture (with hands)",
        "ratio"
      ]
    },
    {
      "id": 157,
      "hanzi": "别",
      "pinyin": "bié",
      "translations": [
        "to leave",
        "to depart",
        "to separate",
        "to distinguish",
        "to classify",
        "other",
        "another",
        "do not",
        "must not",
        "to pin"
      ]
    },
    {
      "id": 158,
      "hanzi": "长",
      "pinyin": "cháng",
      "translations": [
        "length",
        "long",
        "forever",
        "always",
        "constantly"
      ]
    },
    {
      "id": 159,
      "hanzi": "唱歌",
      "pinyin": "chàng gē",
      "translations": [
        "to sing a song"
      ]
    },
    {
      "id": 160,
      "hanzi": "出",
      "pinyin": "chū",
      "translations": [
        "to go out",
        "to come out",
        "to occur",
        "to produce",
        "to go beyond",
        "to rise",
        "to put forth",
        "to happen",
        "classifier for dramas",
        "plays",
        "operas etc"
      ]
    },
    {
      "id": 161,
      "hanzi": "穿",
      "pinyin": "chuān",
      "translations": [
        "to bore through",
        "to pierce",
        "to perforate",
        "to penetrate",
        "to pass through",
        "to dress",
        "to wear",
        "to put on",
        "to thread"
      ]
    },
    {
      "id": 162,
      "hanzi": "船",
      "pinyin": "chuán",
      "translations": [
        "a boat",
        "vessel",
        "ship",
        "CL:條|条",
        "艘",
        "隻|只[zhī]"
      ]
    },
    {
      "id": 163,
      "hanzi": "次",
      "pinyin": "cì",
      "translations": [
        "next in sequence",
        "second",
        "the second (day, time etc)",
        "secondary",
        "vice-",
        "sub-",
        "infra-",
        "inferior quality",
        "substandard",
        "order",
        "sequence",
        "hypo- (chemistry)",
        "classifier for enumerated events: time"
      ]
    },
    {
      "id": 164,
      "hanzi": "从",
      "pinyin": "cóng",
      "translations": [
        "from",
        "via",
        "passing through",
        "through (a gap)",
        "past",
        "ever (followed by negative, meaning never)",
        "(formerly pr.  and related to 縱|纵) to follow",
        "to comply with",
        "to obey",
        "to join",
        "to engage in",
        "adopting some mode of action or attitude",
        "follower",
        "retainer",
        "accessory",
        "accomplice",
        "related by common paternal grandfather or earlier ancestor"
      ]
    },
    {
      "id": 165,
      "hanzi": "错",
      "pinyin": "cuò",
      "translations": [
        "mistake",
        "wrong",
        "bad",
        "interlocking",
        "complex",
        "to grind",
        "to polish",
        "to alternate",
        "to stagger",
        "to miss",
        "to let slip",
        "to evade",
        "to inlay with gold or silver"
      ]
    },
    {
      "id": 166,
      "hanzi": "打篮球",
      "pinyin": "dá lán qiú",
      "translations": [
        "Play basketball"
      ]
    },
    {
      "id": 167,
      "hanzi": "大家",
      "pinyin": "dà jiā",
      "translations": [
        "everyone",
        "influential family",
        "great expert"
      ]
    },
    {
      "id": 168,
      "hanzi": "但是",
      "pinyin": "dàn shì",
      "translations": [
        "but",
        "however"
      ]
    },
    {
      "id": 169,
      "hanzi": "到",
      "pinyin": "dào",
      "translations": [
        "to (a place)",
        "until (a time)",
        "up to",
        "to go",
        "to arrive"
      ]
    },
    {
      "id": 170,
      "hanzi": "得",
      "pinyin": "de",
      "translations": [
        "structural particle: used after a verb (or adjective as main verb)",
        "linking it to following phrase indicating effect",
        "degree",
        "possibility etc"
      ]
    },
    {
      "id": 171,
      "hanzi": "得",
      "pinyin": "děi",
      "translations": [
        "to have to",
        "must",
        "ought to",
        "to need to"
      ]
    },
    {
      "id": 172,
      "hanzi": "弟弟",
      "pinyin": "dì di",
      "translations": [
        "younger brother",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 173,
      "hanzi": "第一",
      "pinyin": "dì yī",
      "translations": [
        "first",
        "number one"
      ]
    },
    {
      "id": 174,
      "hanzi": "懂",
      "pinyin": "dǒng",
      "translations": [
        "to understand",
        "to know"
      ]
    },
    {
      "id": 175,
      "hanzi": "房间",
      "pinyin": "fáng jiān",
      "translations": [
        "room",
        "CL:間|间[jiān]"
      ]
    },
    {
      "id": 176,
      "hanzi": "非常",
      "pinyin": "fēi cháng",
      "translations": [
        "unusual",
        "extraordinary",
        "extreme",
        "very",
        "exceptional"
      ]
    },
    {
      "id": 177,
      "hanzi": "服务员",
      "pinyin": "fú wù yuán",
      "translations": [
        "waiter",
        "waitress",
        "attendant",
        "customer service personnel",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 178,
      "hanzi": "高",
      "pinyin": "gāo",
      "translations": [
        "high",
        "tall",
        "above average",
        "loud",
        "your (honorific)"
      ]
    },
    {
      "id": 179,
      "hanzi": "告诉",
      "pinyin": "gào su",
      "translations": [
        "to tell",
        "to inform",
        "to let know"
      ]
    },
    {
      "id": 180,
      "hanzi": "哥哥",
      "pinyin": "gē ge",
      "translations": [
        "older brother",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 181,
      "hanzi": "给",
      "pinyin": "gěi",
      "translations": [
        "to",
        "for",
        "for the benefit of",
        "to give",
        "to allow",
        "to do sth (for sb)",
        "(passive particle)"
      ]
    },
    {
      "id": 182,
      "hanzi": "公共汽车",
      "pinyin": "gōng gòng qì chē",
      "translations": [
        "bus",
        "CL:輛|辆",
        "班[bān]"
      ]
    },
    {
      "id": 183,
      "hanzi": "公斤",
      "pinyin": "gōng jīn",
      "translations": [
        "kilogram (kg)"
      ]
    },
    {
      "id": 184,
      "hanzi": "公司",
      "pinyin": "gōng sī",
      "translations": [
        "(business) company",
        "company",
        "firm",
        "corporation",
        "incorporated",
        "CL:家[jiā]"
      ]
    },
    {
      "id": 185,
      "hanzi": "贵",
      "pinyin": "guì",
      "translations": [
        "expensive",
        "noble",
        "your (name)",
        "precious"
      ]
    },
    {
      "id": 186,
      "hanzi": "还",
      "pinyin": "hái",
      "translations": [
        "still",
        "still in progress",
        "still more",
        "yet",
        "even more",
        "in addition",
        "fairly",
        "passably (good)",
        "as early as",
        "even",
        "also",
        "else"
      ]
    },
    {
      "id": 187,
      "hanzi": "孩子",
      "pinyin": "hái zi",
      "translations": [
        "child"
      ]
    },
    {
      "id": 188,
      "hanzi": "好吃",
      "pinyin": "hǎo chī",
      "translations": [
        "tasty",
        "delicious"
      ]
    },
    {
      "id": 189,
      "hanzi": "号",
      "pinyin": "hào",
      "translations": [
        "ordinal number",
        "day of a month",
        "mark",
        "sign",
        "business establishment",
        "size",
        "ship suffix",
        "horn (wind instrument)",
        "bugle call",
        "assumed name",
        "to take a pulse",
        "classifier used to indicate number of people"
      ]
    },
    {
      "id": 190,
      "hanzi": "黑",
      "pinyin": "hēi",
      "translations": [
        "black",
        "dark",
        "(loanword) to hack"
      ]
    },
    {
      "id": 191,
      "hanzi": "红",
      "pinyin": "hóng",
      "translations": [
        "red",
        "popular",
        "revolutionary",
        "bonus"
      ]
    },
    {
      "id": 192,
      "hanzi": "欢迎",
      "pinyin": "huān yíng",
      "translations": [
        "to welcome",
        "welcome"
      ]
    },
    {
      "id": 193,
      "hanzi": "还",
      "pinyin": "huán",
      "translations": [
        "to pay back",
        "to return"
      ]
    },
    {
      "id": 194,
      "hanzi": "回答",
      "pinyin": "huí dá",
      "translations": [
        "to reply",
        "to answer",
        "the answer",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 195,
      "hanzi": "机场",
      "pinyin": "jī chǎng",
      "translations": [
        "airport",
        "airfield",
        "CL:家",
        "處|处[chù]"
      ]
    },
    {
      "id": 196,
      "hanzi": "鸡蛋",
      "pinyin": "jī dàn",
      "translations": [
        "(chicken) egg",
        "hen's egg",
        "CL:個|个",
        "打[dá]"
      ]
    },
    {
      "id": 197,
      "hanzi": "件",
      "pinyin": "jiàn",
      "translations": [
        "item",
        "component",
        "classifier for events",
        "things",
        "clothes etc"
      ]
    },
    {
      "id": 198,
      "hanzi": "教室",
      "pinyin": "jiào shì",
      "translations": [
        "classroom",
        "CL:間|间[jiān]"
      ]
    },
    {
      "id": 199,
      "hanzi": "姐姐",
      "pinyin": "jiě jie",
      "translations": [
        "older sister",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 200,
      "hanzi": "介绍",
      "pinyin": "jiè shào",
      "translations": [
        "to introduce (sb to sb)",
        "to give a presentation",
        "to present (sb for a job etc)",
        "introduction"
      ]
    },
    {
      "id": 201,
      "hanzi": "进",
      "pinyin": "jìn",
      "translations": [
        "to advance",
        "to enter",
        "to come (or go) into",
        "to receive or admit",
        "to eat or drink",
        "to submit or present",
        "(used after a verb) into",
        "in",
        "to score a goal"
      ]
    },
    {
      "id": 202,
      "hanzi": "近",
      "pinyin": "jìn",
      "translations": [
        "near",
        "close to",
        "approximately"
      ]
    },
    {
      "id": 203,
      "hanzi": "就",
      "pinyin": "jiù",
      "translations": [
        "at once",
        "right away",
        "only",
        "just (emphasis)",
        "as early as",
        "already",
        "as soon as",
        "then",
        "in that case",
        "as many as",
        "even if",
        "to approach",
        "to move towards",
        "to undertake",
        "to engage in",
        "to suffer",
        "subjected to",
        "to accomplish",
        "to take advantage of",
        "to go with (of foods)",
        "with regard to",
        "concerning"
      ]
    },
    {
      "id": 204,
      "hanzi": "觉得",
      "pinyin": "jué de",
      "translations": [
        "to think",
        "to feel"
      ]
    },
    {
      "id": 205,
      "hanzi": "咖啡",
      "pinyin": "kā fēi",
      "translations": [
        "coffee",
        "CL:杯[bēi]"
      ]
    },
    {
      "id": 206,
      "hanzi": "开始",
      "pinyin": "kāi shǐ",
      "translations": [
        "to begin",
        "beginning",
        "to start",
        "initial",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 207,
      "hanzi": "考试",
      "pinyin": "kǎo shì",
      "translations": [
        "to take an exam",
        "exam",
        "CL:次[cì]"
      ]
    },
    {
      "id": 208,
      "hanzi": "可能",
      "pinyin": "kě néng",
      "translations": [
        "might (happen)",
        "possible",
        "probable",
        "possibility",
        "probability",
        "maybe",
        "perhaps",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 209,
      "hanzi": "可以",
      "pinyin": "kě yǐ",
      "translations": [
        "can",
        "may",
        "possible",
        "able to"
      ]
    },
    {
      "id": 210,
      "hanzi": "课",
      "pinyin": "kè",
      "translations": [
        "subject",
        "course",
        "CL: 門|门[mén]",
        "class",
        "lesson",
        "CL:堂",
        "節|节[jié]",
        "to levy",
        "tax",
        "form of divination"
      ]
    },
    {
      "id": 211,
      "hanzi": "快",
      "pinyin": "kuài",
      "translations": [
        "rapid",
        "quick",
        "speed",
        "rate",
        "soon",
        "almost",
        "to make haste",
        "clever",
        "sharp (of knives or wits)",
        "forthright",
        "plain-spoken",
        "gratified",
        "pleased",
        "pleasant"
      ]
    },
    {
      "id": 212,
      "hanzi": "快乐",
      "pinyin": "kuài lè",
      "translations": [
        "happy",
        "merry"
      ]
    },
    {
      "id": 213,
      "hanzi": "累",
      "pinyin": "lèi",
      "translations": [
        "tired",
        "weary",
        "to strain",
        "to wear out",
        "to work hard"
      ]
    },
    {
      "id": 214,
      "hanzi": "离",
      "pinyin": "lí",
      "translations": [
        "to leave",
        "to part from",
        "to be away from",
        "(in giving distances) from",
        "without (sth)",
        "independent of",
        "one of the Eight Trigrams 八卦",
        "symbolizing fire",
        "☲"
      ]
    },
    {
      "id": 215,
      "hanzi": "两",
      "pinyin": "liǎng",
      "translations": [
        "both",
        "two",
        "ounce",
        "some",
        "a few",
        "tael",
        "weight equal to 50 grams"
      ]
    },
    {
      "id": 216,
      "hanzi": "路",
      "pinyin": "lù",
      "translations": [
        "road",
        "CL:條|条[tiáo]",
        "journey",
        "route",
        "line (bus etc)",
        "sort",
        "kind"
      ]
    },
    {
      "id": 217,
      "hanzi": "旅游",
      "pinyin": "lǚ yóu",
      "translations": [
        "trip",
        "journey",
        "tourism",
        "travel",
        "tour"
      ]
    },
    {
      "id": 218,
      "hanzi": "卖",
      "pinyin": "mài",
      "translations": [
        "to sell",
        "to betray",
        "to spare no effort",
        "to show off or flaunt"
      ]
    },
    {
      "id": 219,
      "hanzi": "慢",
      "pinyin": "màn",
      "translations": [
        "slow"
      ]
    },
    {
      "id": 220,
      "hanzi": "忙",
      "pinyin": "máng",
      "translations": [
        "busy",
        "hurriedly",
        "to hurry",
        "to rush"
      ]
    },
    {
      "id": 221,
      "hanzi": "每",
      "pinyin": "měi",
      "translations": [
        "each",
        "every"
      ]
    },
    {
      "id": 222,
      "hanzi": "妹妹",
      "pinyin": "mèi mei",
      "translations": [
        "younger sister",
        "fig. younger woman (esp. girl friend or rival)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 223,
      "hanzi": "门",
      "pinyin": "mén",
      "translations": [
        "gate",
        "door",
        "CL:扇[shàn]",
        "gateway",
        "doorway",
        "CL:個|个[gè]",
        "opening",
        "valve",
        "switch",
        "way to do something",
        "knack",
        "family",
        "house",
        "(religious) sect",
        "school (of thought)",
        "class",
        "category",
        "phylum or division (taxonomy)",
        "classifier for large guns",
        "classifier for lessons",
        "subjects",
        "branches of technology"
      ]
    },
    {
      "id": 224,
      "hanzi": "男人",
      "pinyin": "nán rén",
      "translations": [
        "a man",
        "a male",
        "men",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 225,
      "hanzi": "您",
      "pinyin": "nín",
      "translations": [
        "you (courteous, as opposed to informal 你)"
      ]
    },
    {
      "id": 226,
      "hanzi": "牛奶",
      "pinyin": "niú nǎi",
      "translations": [
        "cow's milk",
        "CL:瓶",
        "杯[bēi]"
      ]
    },
    {
      "id": 227,
      "hanzi": "女人",
      "pinyin": "nǚ rén",
      "translations": [
        "woman"
      ]
    },
    {
      "id": 228,
      "hanzi": "旁边",
      "pinyin": "páng biān",
      "translations": [
        "lateral",
        "side",
        "to the side",
        "beside"
      ]
    },
    {
      "id": 229,
      "hanzi": "跑步",
      "pinyin": "pǎo bù",
      "translations": [
        "to walk quickly",
        "to march",
        "to run"
      ]
    },
    {
      "id": 230,
      "hanzi": "便宜",
      "pinyin": "pián yi",
      "translations": [
        "small advantages",
        "to let sb off lightly",
        "cheap",
        "inexpensive"
      ]
    },
    {
      "id": 231,
      "hanzi": "票",
      "pinyin": "piào",
      "translations": [
        "ticket",
        "ballot",
        "bank note",
        "CL:張|张[zhāng]",
        "person held for ransom",
        "amateur performance of Chinese opera",
        "classifier for shipments and business transactions (topolect)"
      ]
    },
    {
      "id": 232,
      "hanzi": "妻子",
      "pinyin": "qī zi",
      "translations": [
        "wife",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 233,
      "hanzi": "起床",
      "pinyin": "qǐ chuáng",
      "translations": [
        "to get out of bed",
        "to get up"
      ]
    },
    {
      "id": 234,
      "hanzi": "千",
      "pinyin": "qiān",
      "translations": [
        "a swing"
      ]
    },
    {
      "id": 235,
      "hanzi": "晴",
      "pinyin": "qíng",
      "translations": [
        "clear",
        "fine (weather)"
      ]
    },
    {
      "id": 236,
      "hanzi": "去年",
      "pinyin": "qù nián",
      "translations": [
        "last year"
      ]
    },
    {
      "id": 237,
      "hanzi": "让",
      "pinyin": "ràng",
      "translations": [
        "to yield",
        "to permit",
        "to let sb do sth",
        "to have sb do sth"
      ]
    },
    {
      "id": 238,
      "hanzi": "上班",
      "pinyin": "shàng bān",
      "translations": [
        "to go to work",
        "to be on duty",
        "to start work",
        "to go to the office"
      ]
    },
    {
      "id": 239,
      "hanzi": "身体",
      "pinyin": "shēn tǐ",
      "translations": [
        "(human) body",
        "health",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 240,
      "hanzi": "生病",
      "pinyin": "shēng bìng",
      "translations": [
        "to fall ill"
      ]
    },
    {
      "id": 241,
      "hanzi": "生日",
      "pinyin": "shēng rì",
      "translations": [
        "birthday",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 242,
      "hanzi": "时间",
      "pinyin": "shí jiān",
      "translations": [
        "time",
        "period",
        "CL:段[duàn]"
      ]
    },
    {
      "id": 243,
      "hanzi": "事情",
      "pinyin": "shì qing",
      "translations": [
        "affair",
        "matter",
        "thing",
        "business",
        "CL:件",
        "樁|桩[zhuāng]"
      ]
    },
    {
      "id": 244,
      "hanzi": "手表",
      "pinyin": "shǒu biǎo",
      "translations": [
        "wrist watch",
        "CL:塊|块",
        "隻|只",
        "個|个[gè]"
      ]
    },
    {
      "id": 245,
      "hanzi": "手机",
      "pinyin": "shǒu jī",
      "translations": [
        "cell phone",
        "mobile phone",
        "CL:部",
        "支[zhī]"
      ]
    },
    {
      "id": 246,
      "hanzi": "送",
      "pinyin": "sòng",
      "translations": [
        "to deliver",
        "to carry",
        "to give (as a present)",
        "to present (with)",
        "to see off",
        "to send"
      ]
    },
    {
      "id": 247,
      "hanzi": "所以",
      "pinyin": "suǒ yǐ",
      "translations": [
        "therefore",
        "as a result",
        "so"
      ]
    },
    {
      "id": 248,
      "hanzi": "它",
      "pinyin": "tā",
      "translations": [
        "it"
      ]
    },
    {
      "id": 249,
      "hanzi": "踢",
      "pinyin": "tī",
      "translations": [
        "to kick",
        "to play (e.g. soccer)"
      ]
    },
    {
      "id": 250,
      "hanzi": "题",
      "pinyin": "tí",
      "translations": [
        "topic",
        "problem for discussion",
        "exam question",
        "subject",
        "to inscribe",
        "to mention",
        "CL:個|个",
        "道[dào]"
      ]
    },
    {
      "id": 251,
      "hanzi": "跳舞",
      "pinyin": "tiào wǔ",
      "translations": [
        "to dance"
      ]
    },
    {
      "id": 252,
      "hanzi": "外",
      "pinyin": "wài",
      "translations": [
        "outside",
        "in addition",
        "foreign",
        "external"
      ]
    },
    {
      "id": 253,
      "hanzi": "完",
      "pinyin": "wán",
      "translations": [
        "to finish",
        "to be over",
        "whole",
        "complete",
        "entire"
      ]
    },
    {
      "id": 254,
      "hanzi": "玩",
      "pinyin": "wán",
      "translations": [
        "toy",
        "sth used for amusement",
        "curio or antique (Taiwan pr. )",
        "to play",
        "to have fun",
        "to trifle with",
        "to keep sth for entertainment"
      ]
    },
    {
      "id": 255,
      "hanzi": "晚上",
      "pinyin": "wǎn shang",
      "translations": [
        "evening",
        "night",
        "CL:個|个[gè]",
        "in the evening"
      ]
    },
    {
      "id": 256,
      "hanzi": "为",
      "pinyin": "wèi",
      "translations": [
        "variant of 為|为",
        "because of",
        "for",
        "to"
      ]
    },
    {
      "id": 257,
      "hanzi": "问",
      "pinyin": "wèn",
      "translations": [
        "to ask"
      ]
    },
    {
      "id": 258,
      "hanzi": "问题",
      "pinyin": "wèn tí",
      "translations": [
        "question",
        "problem",
        "issue",
        "topic",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 259,
      "hanzi": "西瓜",
      "pinyin": "xī guā",
      "translations": [
        "watermelon",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 260,
      "hanzi": "希望",
      "pinyin": "xī wàng",
      "translations": [
        "to wish for",
        "to desire",
        "hope CL:個|个[gè]"
      ]
    },
    {
      "id": 261,
      "hanzi": "洗",
      "pinyin": "xǐ",
      "translations": [
        "to wash",
        "to bathe",
        "to develop (photo)"
      ]
    },
    {
      "id": 262,
      "hanzi": "向",
      "pinyin": "xiàng",
      "translations": [
        "towards",
        "to face",
        "to turn towards",
        "direction",
        "to support",
        "to side with",
        "shortly before",
        "formerly",
        "always",
        "all along"
      ]
    },
    {
      "id": 263,
      "hanzi": "小时",
      "pinyin": "xiǎo shí",
      "translations": [
        "hour",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 264,
      "hanzi": "笑",
      "pinyin": "xiào",
      "translations": [
        "laugh",
        "smile",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 265,
      "hanzi": "新",
      "pinyin": "xīn",
      "translations": [
        "new",
        "newly",
        "meso- (chemistry)"
      ]
    },
    {
      "id": 266,
      "hanzi": "姓",
      "pinyin": "xìng",
      "translations": [
        "family name",
        "surname",
        "name",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 267,
      "hanzi": "休息",
      "pinyin": "xiū xi",
      "translations": [
        "rest",
        "to rest"
      ]
    },
    {
      "id": 268,
      "hanzi": "雪",
      "pinyin": "xuě",
      "translations": [
        "snow",
        "snowfall",
        "CL:場|场[cháng]",
        "to have the appearance of snow",
        "to wipe away",
        "off or out",
        "to clean"
      ]
    },
    {
      "id": 269,
      "hanzi": "颜色",
      "pinyin": "yán sè",
      "translations": [
        "color",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 270,
      "hanzi": "眼睛",
      "pinyin": "yǎn jing",
      "translations": [
        "eye",
        "CL:隻|只",
        "雙|双[shuāng]"
      ]
    },
    {
      "id": 271,
      "hanzi": "羊肉",
      "pinyin": "yáng ròu",
      "translations": [
        "mutton"
      ]
    },
    {
      "id": 272,
      "hanzi": "药",
      "pinyin": "yào",
      "translations": [
        "medicine",
        "drug",
        "cure",
        "CL:種|种",
        "服[fù]"
      ]
    },
    {
      "id": 273,
      "hanzi": "要",
      "pinyin": "yào",
      "translations": [
        "important",
        "vital",
        "to want",
        "will",
        "going to (as future auxiliary)",
        "may",
        "must",
        "(used in a comparison) must be",
        "probably"
      ]
    },
    {
      "id": 274,
      "hanzi": "也",
      "pinyin": "yě",
      "translations": [
        "also",
        "too",
        "(in Classical Chinese) final particle implying affirmation"
      ]
    },
    {
      "id": 275,
      "hanzi": "已经",
      "pinyin": "yǐ jīng",
      "translations": [
        "already"
      ]
    },
    {
      "id": 276,
      "hanzi": "一起",
      "pinyin": "yī qǐ",
      "translations": [
        "in the same place",
        "together",
        "with",
        "altogether (in total)"
      ]
    },
    {
      "id": 277,
      "hanzi": "意思",
      "pinyin": "yì si",
      "translations": [
        "idea",
        "opinion",
        "meaning",
        "wish",
        "desire",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 278,
      "hanzi": "阴",
      "pinyin": "yīn",
      "translations": [
        "overcast (weather)",
        "cloudy",
        "shady",
        "Yin (the negative principle of Yin and Yang)",
        "negative (electric.)",
        "feminine",
        "moon",
        "implicit",
        "hidden",
        "genitalia"
      ]
    },
    {
      "id": 279,
      "hanzi": "因为",
      "pinyin": "yīn wèi",
      "translations": [
        "because",
        "owing to",
        "on account of"
      ]
    },
    {
      "id": 280,
      "hanzi": "游泳",
      "pinyin": "yóu yǒng",
      "translations": [
        "swimming",
        "to swim"
      ]
    },
    {
      "id": 281,
      "hanzi": "右边",
      "pinyin": "yòu bian",
      "translations": [
        "right side",
        "right",
        "to the right"
      ]
    },
    {
      "id": 282,
      "hanzi": "鱼",
      "pinyin": "yú",
      "translations": [
        "fish",
        "CL:條|条",
        "尾[wěi]"
      ]
    },
    {
      "id": 283,
      "hanzi": "元",
      "pinyin": "yuán",
      "translations": [
        "Chinese monetary unit",
        "dollar",
        "primary",
        "first"
      ]
    },
    {
      "id": 284,
      "hanzi": "远",
      "pinyin": "yuǎn",
      "translations": [
        "far",
        "distant",
        "remote"
      ]
    },
    {
      "id": 285,
      "hanzi": "运动",
      "pinyin": "yùn dòng",
      "translations": [
        "to move",
        "to exercise",
        "sports",
        "exercise",
        "motion",
        "movement",
        "campaign",
        "CL:場|场[chǎng]"
      ]
    },
    {
      "id": 286,
      "hanzi": "再",
      "pinyin": "zài",
      "translations": [
        "again",
        "once more",
        "re-",
        "second",
        "another",
        "then (after sth, and not until then)"
      ]
    },
    {
      "id": 287,
      "hanzi": "早上",
      "pinyin": "zǎo shang",
      "translations": [
        "early morning",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 288,
      "hanzi": "张",
      "pinyin": "zhāng",
      "translations": [
        "to open up",
        "to spread",
        "sheet of paper",
        "classifier for flat objects",
        "sheet",
        "classifier for votes"
      ]
    },
    {
      "id": 289,
      "hanzi": "长",
      "pinyin": "zhǎng",
      "translations": [
        "chief",
        "head",
        "elder",
        "to grow",
        "to develop",
        "to increase",
        "to enhance"
      ]
    },
    {
      "id": 290,
      "hanzi": "丈夫",
      "pinyin": "zhàng fu",
      "translations": [
        "husband",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 291,
      "hanzi": "找",
      "pinyin": "zhǎo",
      "translations": [
        "to try to find",
        "to look for",
        "to call on sb",
        "to find",
        "to seek",
        "to return",
        "to give change"
      ]
    },
    {
      "id": 292,
      "hanzi": "着",
      "pinyin": "zhe",
      "translations": [
        "aspect particle indicating action in progress"
      ]
    },
    {
      "id": 293,
      "hanzi": "真",
      "pinyin": "zhēn",
      "translations": [
        "really",
        "truly",
        "indeed",
        "real",
        "true",
        "genuine"
      ]
    },
    {
      "id": 294,
      "hanzi": "正在",
      "pinyin": "zhèng zài",
      "translations": [
        "in the process of (doing something or happening)",
        "while (doing)"
      ]
    },
    {
      "id": 295,
      "hanzi": "知道",
      "pinyin": "zhī dào",
      "translations": [
        "to know",
        "to be aware of",
        "also pron. [zhī dao]"
      ]
    },
    {
      "id": 296,
      "hanzi": "准备",
      "pinyin": "zhǔn bèi",
      "translations": [
        "preparation",
        "to prepare",
        "to intend",
        "to be about to",
        "reserve (fund)"
      ]
    },
    {
      "id": 297,
      "hanzi": "自行车",
      "pinyin": "zì xíng chē",
      "translations": [
        "bicycle",
        "bike",
        "CL:輛|辆[liàng]"
      ]
    },
    {
      "id": 298,
      "hanzi": "走",
      "pinyin": "zǒu",
      "translations": [
        "to walk",
        "to go",
        "to run",
        "to move (of vehicle)",
        "to visit",
        "to leave",
        "to go away",
        "to die (euph.)",
        "from",
        "through",
        "away (in compound verbs, such as 撤走)",
        "to change (shape, form, meaning)"
      ]
    },
    {
      "id": 299,
      "hanzi": "最",
      "pinyin": "zuì",
      "translations": [
        "most",
        "the most",
        "-est (superlative suffix)"
      ]
    },
    {
      "id": 300,
      "hanzi": "左边",
      "pinyin": "zuǒ bian",
      "translations": [
        "left",
        "the left side",
        "to the left of"
      ]
    }
  ]
  
  private _hanzi_hsk_3 = () => [
    {
      "id": 301,
      "hanzi": "阿姨",
      "pinyin": "ā yí",
      "translations": [
        "maternal aunt",
        "step-mother",
        "childcare worker",
        "nursemaid",
        "woman of similar age to one's parents (term of address used by child)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 302,
      "hanzi": "啊",
      "pinyin": "a",
      "translations": [
        "modal particle ending sentence",
        "showing affirmation",
        "approval",
        "or consent"
      ]
    },
    {
      "id": 303,
      "hanzi": "矮",
      "pinyin": "ǎi",
      "translations": [
        "low",
        "short (in length)"
      ]
    },
    {
      "id": 304,
      "hanzi": "爱好",
      "pinyin": "ài hào",
      "translations": [
        "to like",
        "to take pleasure in",
        "keen on",
        "fond of",
        "interest",
        "hobby",
        "appetite for",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 305,
      "hanzi": "安静",
      "pinyin": "ān jìng",
      "translations": [
        "quiet",
        "peaceful",
        "calm"
      ]
    },
    {
      "id": 306,
      "hanzi": "把",
      "pinyin": "bǎ",
      "translations": [
        "to hold",
        "to contain",
        "to grasp",
        "to take hold of",
        "handle",
        "particle marking the following noun as a direct object",
        "classifier for objects with handle",
        "classifier for small objects: handful"
      ]
    },
    {
      "id": 307,
      "hanzi": "搬",
      "pinyin": "bān",
      "translations": [
        "to move",
        "to shift",
        "to remove",
        "to transport",
        "to apply indiscriminately",
        "to copy mechanically"
      ]
    },
    {
      "id": 308,
      "hanzi": "班",
      "pinyin": "bān",
      "translations": [
        "team",
        "class",
        "squad",
        "work shift",
        "ranking",
        "CL:個|个[gè]",
        "classifier for groups"
      ]
    },
    {
      "id": 309,
      "hanzi": "半",
      "pinyin": "bàn",
      "translations": [
        "half",
        "semi-",
        "incomplete",
        "(after a number) and a half"
      ]
    },
    {
      "id": 310,
      "hanzi": "办法",
      "pinyin": "bàn fǎ",
      "translations": [
        "means",
        "method",
        "way (of doing sth)",
        "CL:條|条",
        "個|个[gè]"
      ]
    },
    {
      "id": 311,
      "hanzi": "办公室",
      "pinyin": "bàn gōng shì",
      "translations": [
        "office",
        "business premises",
        "bureau",
        "CL:間|间[jiān]"
      ]
    },
    {
      "id": 312,
      "hanzi": "帮忙",
      "pinyin": "bāng máng",
      "translations": [
        "to help",
        "to lend a hand",
        "to do a favor",
        "to do a good turn"
      ]
    },
    {
      "id": 313,
      "hanzi": "包",
      "pinyin": "bāo",
      "translations": [
        "to cover",
        "to wrap",
        "to hold",
        "to include",
        "to take charge of",
        "to contract (to or for)",
        "package",
        "wrapper",
        "container",
        "bag",
        "to hold or embrace",
        "bundle",
        "packet",
        "CL:個|个",
        "隻|只[zhī]"
      ]
    },
    {
      "id": 314,
      "hanzi": "饱",
      "pinyin": "bǎo",
      "translations": [
        "to eat till full",
        "satisfied"
      ]
    },
    {
      "id": 315,
      "hanzi": "北方",
      "pinyin": "běi fāng",
      "translations": [
        "north",
        "the northern part a country",
        "China north of the Yellow River"
      ]
    },
    {
      "id": 316,
      "hanzi": "被",
      "pinyin": "bèi",
      "translations": [
        "quilt",
        "by",
        "(indicates passive-voice clauses)",
        "(literary) to cover",
        "to meet with"
      ]
    },
    {
      "id": 317,
      "hanzi": "鼻子",
      "pinyin": "bí zi",
      "translations": [
        "nose",
        "CL:個|个",
        "隻|只[zhī]"
      ]
    },
    {
      "id": 318,
      "hanzi": "比较",
      "pinyin": "bǐ jiào",
      "translations": [
        "to compare",
        "to contrast",
        "comparatively",
        "relatively",
        "quite",
        "comparison"
      ]
    },
    {
      "id": 319,
      "hanzi": "比赛",
      "pinyin": "bǐ sài",
      "translations": [
        "competition (sports etc)",
        "match",
        "CL:場|场",
        "次[cì]"
      ]
    },
    {
      "id": 320,
      "hanzi": "必须",
      "pinyin": "bì xū",
      "translations": [
        "to have to",
        "must",
        "compulsory",
        "necessarily"
      ]
    },
    {
      "id": 321,
      "hanzi": "变化",
      "pinyin": "biàn huà",
      "translations": [
        "change",
        "variation",
        "to change",
        "to vary",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 322,
      "hanzi": "表示",
      "pinyin": "biǎo shì",
      "translations": [
        "to express",
        "to show",
        "to say",
        "to state",
        "to indicate",
        "to mean"
      ]
    },
    {
      "id": 323,
      "hanzi": "表演",
      "pinyin": "biǎo yǎn",
      "translations": [
        "play",
        "show",
        "performance",
        "exhibition",
        "to perform",
        "to act",
        "to demonstrate",
        "CL:場|场[chǎng]"
      ]
    },
    {
      "id": 324,
      "hanzi": "别人",
      "pinyin": "bié ren",
      "translations": [
        "other people",
        "others",
        "other person"
      ]
    },
    {
      "id": 325,
      "hanzi": "宾馆",
      "pinyin": "bīn guǎn",
      "translations": [
        "guesthouse",
        "lodge",
        "hotel",
        "CL:個|个",
        "家[jiā]"
      ]
    },
    {
      "id": 326,
      "hanzi": "冰箱",
      "pinyin": "bīng xiāng",
      "translations": [
        "icebox",
        "freezer cabinet",
        "refrigerator",
        "CL:臺|台",
        "個|个[gè]"
      ]
    },
    {
      "id": 327,
      "hanzi": "才",
      "pinyin": "cái",
      "translations": [
        "a moment ago",
        "just now",
        "(preceded by a clause of condition or reason) not until",
        "(followed by a numerical clause) only"
      ]
    },
    {
      "id": 328,
      "hanzi": "菜单",
      "pinyin": "cài dān",
      "translations": [
        "menu",
        "CL:份",
        "張|张[zhāng]"
      ]
    },
    {
      "id": 329,
      "hanzi": "参加",
      "pinyin": "cān jiā",
      "translations": [
        "to participate",
        "to take part",
        "to join"
      ]
    },
    {
      "id": 330,
      "hanzi": "草",
      "pinyin": "cǎo",
      "translations": [
        "grass",
        "straw",
        "manuscript",
        "draft (of a document)",
        "careless",
        "rough",
        "CL:棵",
        "撮",
        "株",
        "根[gēn]"
      ]
    },
    {
      "id": 331,
      "hanzi": "层",
      "pinyin": "céng",
      "translations": [
        "layer",
        "stratum",
        "laminated",
        "floor (of a building)",
        "storey",
        "classifier for layers",
        "repeated",
        "sheaf (math.)"
      ]
    },
    {
      "id": 332,
      "hanzi": "差",
      "pinyin": "chà",
      "translations": [
        "to differ from",
        "to fall short of",
        "lacking",
        "wrong",
        "inferior"
      ]
    },
    {
      "id": 333,
      "hanzi": "超市",
      "pinyin": "chāo shì",
      "translations": [
        "supermarket (abbr.)",
        "CL:家[jiā]"
      ]
    },
    {
      "id": 334,
      "hanzi": "衬衫",
      "pinyin": "chèn shān",
      "translations": [
        "shirt",
        "blouse",
        "CL:件[jiàn]"
      ]
    },
    {
      "id": 335,
      "hanzi": "成绩",
      "pinyin": "chéng jì",
      "translations": [
        "achievement",
        "performance records",
        "grades",
        "CL:項|项",
        "個|个[gè]"
      ]
    },
    {
      "id": 336,
      "hanzi": "城市",
      "pinyin": "chéng shì",
      "translations": [
        "city",
        "town",
        "CL:座[zuò]"
      ]
    },
    {
      "id": 337,
      "hanzi": "迟到",
      "pinyin": "chí dào",
      "translations": [
        "to arrive late"
      ]
    },
    {
      "id": 338,
      "hanzi": "出现",
      "pinyin": "chū xiàn",
      "translations": [
        "to appear",
        "to arise",
        "to emerge",
        "to show up"
      ]
    },
    {
      "id": 339,
      "hanzi": "除了",
      "pinyin": "chú le",
      "translations": [
        "besides",
        "apart from (... also...)",
        "in addition to",
        "except (for)"
      ]
    },
    {
      "id": 340,
      "hanzi": "厨房",
      "pinyin": "chú fáng",
      "translations": [
        "kitchen",
        "CL:間|间[jiān]"
      ]
    },
    {
      "id": 341,
      "hanzi": "春",
      "pinyin": "chūn",
      "translations": [
        "spring (time)",
        "gay",
        "joyful",
        "youthful",
        "love",
        "lust",
        "life"
      ]
    },
    {
      "id": 342,
      "hanzi": "词语",
      "pinyin": "cí yǔ",
      "translations": [
        "word (general term including monosyllables through to short phrases)",
        "term (e.g. technical term)",
        "expression"
      ]
    },
    {
      "id": 343,
      "hanzi": "聪明",
      "pinyin": "cōng ming",
      "translations": [
        "acute (of sight and hearing)",
        "clever",
        "intelligent",
        "bright",
        "smart"
      ]
    },
    {
      "id": 344,
      "hanzi": "打扫",
      "pinyin": "dǎ sǎo",
      "translations": [
        "to clean",
        "to sweep"
      ]
    },
    {
      "id": 345,
      "hanzi": "打算",
      "pinyin": "dǎ suàn",
      "translations": [
        "to plan",
        "to intend",
        "to calculate",
        "plan",
        "intention",
        "calculation",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 346,
      "hanzi": "带",
      "pinyin": "dài",
      "translations": [
        "band",
        "belt",
        "girdle",
        "ribbon",
        "tire",
        "area",
        "zone",
        "region",
        "CL:條|条[tiáo]",
        "to wear",
        "to carry",
        "to take along",
        "to bear (i.e. to have)",
        "to lead",
        "to bring",
        "to look after",
        "to raise"
      ]
    },
    {
      "id": 347,
      "hanzi": "担心",
      "pinyin": "dān xīn",
      "translations": [
        "anxious",
        "worried",
        "uneasy",
        "to worry",
        "to be anxious"
      ]
    },
    {
      "id": 348,
      "hanzi": "蛋糕",
      "pinyin": "dàn gāo",
      "translations": [
        "cake",
        "CL:塊|块",
        "個|个[gè]"
      ]
    },
    {
      "id": 349,
      "hanzi": "当然",
      "pinyin": "dāng rán",
      "translations": [
        "only natural",
        "as it should be",
        "certainly",
        "of course",
        "without doubt"
      ]
    },
    {
      "id": 350,
      "hanzi": "地",
      "pinyin": "de",
      "translations": [
        "-ly",
        "structural particle: used before a verb or adjective",
        "linking it to preceding modifying adverbial adjunct"
      ]
    },
    {
      "id": 351,
      "hanzi": "灯",
      "pinyin": "dēng",
      "translations": [
        "lamp",
        "light",
        "lantern",
        "CL:盞|盏[zhǎn]"
      ]
    },
    {
      "id": 352,
      "hanzi": "低",
      "pinyin": "dī",
      "translations": [
        "low",
        "beneath",
        "to lower (one's head)",
        "to let droop",
        "to hang down",
        "to incline"
      ]
    },
    {
      "id": 353,
      "hanzi": "地方",
      "pinyin": "dì fang",
      "translations": [
        "area",
        "place",
        "space",
        "room",
        "territory",
        "CL:處|处",
        "個|个",
        "塊|块[kuài]"
      ]
    },
    {
      "id": 354,
      "hanzi": "地铁",
      "pinyin": "dì tiě",
      "translations": [
        "subway",
        "metro"
      ]
    },
    {
      "id": 355,
      "hanzi": "地图",
      "pinyin": "dì tú",
      "translations": [
        "map",
        "CL:張|张",
        "本[běn]"
      ]
    },
    {
      "id": 356,
      "hanzi": "电梯",
      "pinyin": "diàn tī",
      "translations": [
        "elevator",
        "escalator",
        "CL:臺|台",
        "部[bù]"
      ]
    },
    {
      "id": 357,
      "hanzi": "电子",
      "pinyin": "diàn zǐ",
      "translations": [
        "electronic",
        "electron (particle physics)"
      ]
    },
    {
      "id": 358,
      "hanzi": "冬",
      "pinyin": "dōng",
      "translations": [
        "sound of beating a drum",
        "onomatopoeia for rat-a-tat etc"
      ]
    },
    {
      "id": 359,
      "hanzi": "东",
      "pinyin": "dōng",
      "translations": [
        "east",
        "host (i.e. sitting on east side of guest)",
        "landlord"
      ]
    },
    {
      "id": 360,
      "hanzi": "动物",
      "pinyin": "dòng wù",
      "translations": [
        "animal",
        "CL:隻|只",
        "群",
        "個|个[gè]"
      ]
    },
    {
      "id": 361,
      "hanzi": "短",
      "pinyin": "duǎn",
      "translations": [
        "short or brief",
        "to lack",
        "weak point",
        "fault"
      ]
    },
    {
      "id": 362,
      "hanzi": "段",
      "pinyin": "duàn",
      "translations": [
        "paragraph",
        "section",
        "segment",
        "stage (of a process)",
        "classifier for stories",
        "periods of time",
        "lengths of thread etc"
      ]
    },
    {
      "id": 363,
      "hanzi": "锻炼",
      "pinyin": "duàn liàn",
      "translations": [
        "to engage in physical exercise",
        "to work out",
        "to toughen",
        "to temper"
      ]
    },
    {
      "id": 364,
      "hanzi": "多么",
      "pinyin": "duō me",
      "translations": [
        "how (wonderful etc)",
        "what (a great idea etc)",
        "however (difficult it may be etc)"
      ]
    },
    {
      "id": 365,
      "hanzi": "饿",
      "pinyin": "è",
      "translations": [
        "to be hungry",
        "hungry"
      ]
    },
    {
      "id": 366,
      "hanzi": "而且",
      "pinyin": "ér qiě",
      "translations": [
        "(not only ...) but also",
        "moreover",
        "in addition",
        "furthermore"
      ]
    },
    {
      "id": 367,
      "hanzi": "耳朵",
      "pinyin": "ěr duo",
      "translations": [
        "ear",
        "CL:隻|只",
        "個|个",
        "對|对[duì]"
      ]
    },
    {
      "id": 368,
      "hanzi": "发烧",
      "pinyin": "fā shāo",
      "translations": [
        "to have a high temperature (from illness)",
        "to have a fever"
      ]
    },
    {
      "id": 369,
      "hanzi": "发现",
      "pinyin": "fā xiàn",
      "translations": [
        "to find",
        "to discover"
      ]
    },
    {
      "id": 370,
      "hanzi": "方便",
      "pinyin": "fāng biàn",
      "translations": [
        "convenient",
        "to help out",
        "to make things easy for people",
        "convenience",
        "suitable",
        "having money to spare",
        "(euphemism) to go to the toilet"
      ]
    },
    {
      "id": 371,
      "hanzi": "放",
      "pinyin": "fàng",
      "translations": [
        "to release",
        "to free",
        "to let go",
        "to put",
        "to place",
        "to let out",
        "to set off (fireworks)"
      ]
    },
    {
      "id": 372,
      "hanzi": "放心",
      "pinyin": "fàng xīn",
      "translations": [
        "to feel relieved",
        "to feel reassured",
        "to be at ease"
      ]
    },
    {
      "id": 373,
      "hanzi": "分",
      "pinyin": "fēn",
      "translations": [
        "to divide",
        "to separate",
        "to allocate",
        "to distinguish (good and bad)",
        "part or subdivision",
        "fraction",
        "one tenth (of certain units)",
        "unit of length equivalent to 0.33 cm",
        "minute",
        "a point (in sports or games)",
        "0.01 yuan (unit of money)"
      ]
    },
    {
      "id": 374,
      "hanzi": "附近",
      "pinyin": "fù jìn",
      "translations": [
        "(in the) vicinity",
        "nearby",
        "neighboring",
        "next to"
      ]
    },
    {
      "id": 375,
      "hanzi": "复习",
      "pinyin": "fù xí",
      "translations": [
        "variant of 復習|复习",
        "to revise",
        "to review",
        "revision"
      ]
    },
    {
      "id": 376,
      "hanzi": "干净",
      "pinyin": "gān jìng",
      "translations": [
        "clean",
        "neat"
      ]
    },
    {
      "id": 377,
      "hanzi": "敢",
      "pinyin": "gǎn",
      "translations": [
        "to dare",
        "daring",
        "(polite) may I venture"
      ]
    },
    {
      "id": 378,
      "hanzi": "感冒",
      "pinyin": "gǎn mào",
      "translations": [
        "to catch cold",
        "(common) cold",
        "CL:場|场",
        "次[cì]"
      ]
    },
    {
      "id": 379,
      "hanzi": "刚才",
      "pinyin": "gāng cái",
      "translations": [
        "(just) a moment ago"
      ]
    },
    {
      "id": 380,
      "hanzi": "根据",
      "pinyin": "gēn jù",
      "translations": [
        "according to",
        "based on",
        "basis",
        "foundation",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 381,
      "hanzi": "跟",
      "pinyin": "gēn",
      "translations": [
        "heel",
        "to follow closely",
        "to go with",
        "to marry sb (of woman)",
        "with",
        "towards",
        "as (compared to)",
        "from (different from)",
        "and (in addition to)"
      ]
    },
    {
      "id": 382,
      "hanzi": "更",
      "pinyin": "gèng",
      "translations": [
        "more",
        "even more",
        "further",
        "still",
        "still more"
      ]
    },
    {
      "id": 383,
      "hanzi": "公园",
      "pinyin": "gōng yuán",
      "translations": [
        "public park",
        "CL:場|场[chǎng]"
      ]
    },
    {
      "id": 384,
      "hanzi": "故事",
      "pinyin": "gù shi",
      "translations": [
        "narrative",
        "story",
        "tale"
      ]
    },
    {
      "id": 385,
      "hanzi": "刮",
      "pinyin": "guā",
      "translations": [
        "to blow (of the wind)"
      ]
    },
    {
      "id": 386,
      "hanzi": "关",
      "pinyin": "guān",
      "translations": [
        "mountain pass",
        "to close",
        "to shut",
        "to turn off",
        "to concern",
        "to involve"
      ]
    },
    {
      "id": 387,
      "hanzi": "关系",
      "pinyin": "guān xì",
      "translations": [
        "variant of 關係|关系[guān xì]"
      ]
    },
    {
      "id": 388,
      "hanzi": "关心",
      "pinyin": "guān xīn",
      "translations": [
        "to care for sth",
        "caring",
        "concerned"
      ]
    },
    {
      "id": 389,
      "hanzi": "关于",
      "pinyin": "guān yú",
      "translations": [
        "pertaining to",
        "concerning",
        "regarding",
        "with regards to",
        "about",
        "a matter of"
      ]
    },
    {
      "id": 390,
      "hanzi": "国家",
      "pinyin": "guó jiā",
      "translations": [
        "country",
        "nation",
        "state",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 391,
      "hanzi": "果汁",
      "pinyin": "guǒ zhī",
      "translations": [
        "fruit juice"
      ]
    },
    {
      "id": 392,
      "hanzi": "过去",
      "pinyin": "guò qu",
      "translations": [
        "(in the) past",
        "former",
        "previous",
        "to go over",
        "to pass by"
      ]
    },
    {
      "id": 393,
      "hanzi": "还是",
      "pinyin": "hái shi",
      "translations": [
        "or",
        "still",
        "nevertheless",
        "had better"
      ]
    },
    {
      "id": 394,
      "hanzi": "害怕",
      "pinyin": "hài pà",
      "translations": [
        "to be afraid",
        "to be scared"
      ]
    },
    {
      "id": 395,
      "hanzi": "河",
      "pinyin": "hé",
      "translations": [
        "river",
        "CL:條|条",
        "道[dào]"
      ]
    },
    {
      "id": 396,
      "hanzi": "黑板",
      "pinyin": "hēi bǎn",
      "translations": [
        "blackboard",
        "CL:塊|块",
        "個|个[gè]"
      ]
    },
    {
      "id": 397,
      "hanzi": "护照",
      "pinyin": "hù zhào",
      "translations": [
        "passport",
        "CL:本",
        "個|个[gè]"
      ]
    },
    {
      "id": 398,
      "hanzi": "花",
      "pinyin": "huā",
      "translations": [
        "flower",
        "blossom",
        "CL:朵",
        "支",
        "束",
        "把",
        "盆",
        "簇[cù]",
        "fancy pattern",
        "florid",
        "to spend (money, time)"
      ]
    },
    {
      "id": 399,
      "hanzi": "花园",
      "pinyin": "huā yuán",
      "translations": [
        "garden",
        "CL:座",
        "個|个[gè]"
      ]
    },
    {
      "id": 400,
      "hanzi": "画",
      "pinyin": "huà",
      "translations": [
        "to draw",
        "picture",
        "painting",
        "CL:幅",
        "張|张[zhāng]"
      ]
    },
    {
      "id": 401,
      "hanzi": "坏",
      "pinyin": "huài",
      "translations": [
        "bad",
        "spoiled",
        "broken",
        "to break down"
      ]
    },
    {
      "id": 402,
      "hanzi": "环境",
      "pinyin": "huán jìng",
      "translations": [
        "environment",
        "circumstances",
        "surroundings",
        "CL:個|个[gè]",
        "ambient"
      ]
    },
    {
      "id": 403,
      "hanzi": "换",
      "pinyin": "huàn",
      "translations": [
        "to change",
        "to exchange"
      ]
    },
    {
      "id": 404,
      "hanzi": "黄",
      "pinyin": "huáng",
      "translations": [
        "yellow",
        "pornographic",
        "to fall through"
      ]
    },
    {
      "id": 405,
      "hanzi": "会议",
      "pinyin": "huì yì",
      "translations": [
        "meeting",
        "conference",
        "CL:場|场",
        "屆|届[jiè]"
      ]
    },
    {
      "id": 406,
      "hanzi": "或者",
      "pinyin": "huò zhě",
      "translations": [
        "or",
        "possibly",
        "maybe",
        "perhaps"
      ]
    },
    {
      "id": 407,
      "hanzi": "机会",
      "pinyin": "jī huì",
      "translations": [
        "opportunity",
        "chance",
        "occasion",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 408,
      "hanzi": "几乎",
      "pinyin": "jī hū",
      "translations": [
        "almost",
        "nearly",
        "practically"
      ]
    },
    {
      "id": 409,
      "hanzi": "极",
      "pinyin": "jí",
      "translations": [
        "extremely",
        "pole (geography, physics)",
        "utmost",
        "top"
      ]
    },
    {
      "id": 410,
      "hanzi": "记得",
      "pinyin": "jì de",
      "translations": [
        "to remember"
      ]
    },
    {
      "id": 411,
      "hanzi": "季节",
      "pinyin": "jì jié",
      "translations": [
        "time",
        "season",
        "period",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 412,
      "hanzi": "检查",
      "pinyin": "jiǎn chá",
      "translations": [
        "inspection",
        "to examine",
        "to inspect",
        "CL:次[cì]"
      ]
    },
    {
      "id": 413,
      "hanzi": "简单",
      "pinyin": "jiǎn dān",
      "translations": [
        "simple",
        "not complicated"
      ]
    },
    {
      "id": 414,
      "hanzi": "见面",
      "pinyin": "jiàn miàn",
      "translations": [
        "to meet",
        "to see sb",
        "CL:次[cì]"
      ]
    },
    {
      "id": 415,
      "hanzi": "健康",
      "pinyin": "jiàn kāng",
      "translations": [
        "health",
        "healthy"
      ]
    },
    {
      "id": 416,
      "hanzi": "讲",
      "pinyin": "jiǎng",
      "translations": [
        "to speak",
        "to explain",
        "to negotiate",
        "to emphasise",
        "to be particular about",
        "as far as sth is concerned",
        "speech",
        "lecture"
      ]
    },
    {
      "id": 417,
      "hanzi": "教",
      "pinyin": "jiāo",
      "translations": [
        "to teach"
      ]
    },
    {
      "id": 418,
      "hanzi": "脚",
      "pinyin": "jiǎo",
      "translations": [
        "foot",
        "leg",
        "base",
        "kick",
        "CL:雙|双",
        "隻|只[zhī]"
      ]
    },
    {
      "id": 419,
      "hanzi": "角",
      "pinyin": "jiǎo",
      "translations": [
        "angle",
        "corner",
        "horn",
        "horn-shaped",
        "unit of money equal to 0.1 yuan",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 420,
      "hanzi": "接",
      "pinyin": "jiē",
      "translations": [
        "to receive",
        "to answer (the phone)",
        "to meet or welcome sb",
        "to connect",
        "to catch",
        "to join",
        "to extend",
        "to take one's turn on duty",
        "to take over for sb"
      ]
    },
    {
      "id": 421,
      "hanzi": "街道",
      "pinyin": "jiē dào",
      "translations": [
        "street",
        "CL:條|条[tiáo]",
        "subdistrict",
        "residential district"
      ]
    },
    {
      "id": 422,
      "hanzi": "节目",
      "pinyin": "jié mù",
      "translations": [
        "program",
        "item (on a program)",
        "CL:臺|台",
        "個|个",
        "套[tào]"
      ]
    },
    {
      "id": 423,
      "hanzi": "节日",
      "pinyin": "jié rì",
      "translations": [
        "holiday",
        "festival",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 424,
      "hanzi": "结婚",
      "pinyin": "jié hūn",
      "translations": [
        "to marry",
        "to get married",
        "CL:次[cì]"
      ]
    },
    {
      "id": 425,
      "hanzi": "结束",
      "pinyin": "jié shù",
      "translations": [
        "termination",
        "to finish",
        "to end",
        "to conclude",
        "to close"
      ]
    },
    {
      "id": 426,
      "hanzi": "解决",
      "pinyin": "jiě jué",
      "translations": [
        "to settle (a dispute)",
        "to resolve",
        "to solve",
        "to dispose of",
        "to dispatch"
      ]
    },
    {
      "id": 427,
      "hanzi": "借",
      "pinyin": "jiè",
      "translations": [
        "to lend",
        "to borrow",
        "by means of",
        "to take (an opportunity)"
      ]
    },
    {
      "id": 428,
      "hanzi": "经常",
      "pinyin": "jīng cháng",
      "translations": [
        "day to day",
        "everyday",
        "daily",
        "frequently",
        "constantly",
        "regularly",
        "often"
      ]
    },
    {
      "id": 429,
      "hanzi": "经过",
      "pinyin": "jīng guò",
      "translations": [
        "to pass",
        "to go through",
        "process",
        "course",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 430,
      "hanzi": "经理",
      "pinyin": "jīng lǐ",
      "translations": [
        "manager",
        "director",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 431,
      "hanzi": "久",
      "pinyin": "jiǔ",
      "translations": [
        "(long) time",
        "(long) duration of time"
      ]
    },
    {
      "id": 432,
      "hanzi": "旧",
      "pinyin": "jiù",
      "translations": [
        "old",
        "opposite: new 新",
        "former",
        "worn (with age)"
      ]
    },
    {
      "id": 433,
      "hanzi": "举行",
      "pinyin": "jǔ xíng",
      "translations": [
        "to hold (a meeting, ceremony etc)"
      ]
    },
    {
      "id": 434,
      "hanzi": "句子",
      "pinyin": "jù zi",
      "translations": [
        "sentence",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 435,
      "hanzi": "决定",
      "pinyin": "jué dìng",
      "translations": [
        "to decide (to do something)",
        "to resolve",
        "decision",
        "CL:個|个",
        "項|项[xiàng]",
        "certainly"
      ]
    },
    {
      "id": 436,
      "hanzi": "渴",
      "pinyin": "kě",
      "translations": [
        "thirsty"
      ]
    },
    {
      "id": 437,
      "hanzi": "可爱",
      "pinyin": "kě ài",
      "translations": [
        "adorable",
        "cute",
        "lovely"
      ]
    },
    {
      "id": 438,
      "hanzi": "刻",
      "pinyin": "kè",
      "translations": [
        "quarter (hour)",
        "moment",
        "to carve",
        "to engrave",
        "to cut",
        "oppressive",
        "classifier for short time intervals"
      ]
    },
    {
      "id": 439,
      "hanzi": "客人",
      "pinyin": "kè rén",
      "translations": [
        "visitor",
        "guest",
        "customer",
        "client",
        "CL:位[wèi]"
      ]
    },
    {
      "id": 440,
      "hanzi": "空调",
      "pinyin": "kōng tiáo",
      "translations": [
        "air conditioning"
      ]
    },
    {
      "id": 441,
      "hanzi": "口",
      "pinyin": "kǒu",
      "translations": [
        "mouth",
        "classifier for things with mouths (people, domestic animals, cannons, wells etc)",
        "classifier for bites or mouthfuls"
      ]
    },
    {
      "id": 442,
      "hanzi": "哭",
      "pinyin": "kū",
      "translations": [
        "to cry",
        "to weep"
      ]
    },
    {
      "id": 443,
      "hanzi": "裤子",
      "pinyin": "kù zi",
      "translations": [
        "trousers",
        "pants",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 444,
      "hanzi": "筷子",
      "pinyin": "kuài zi",
      "translations": [
        "chopsticks",
        "CL:對|对",
        "根",
        "把",
        "雙|双[shuāng]"
      ]
    },
    {
      "id": 445,
      "hanzi": "蓝",
      "pinyin": "lán",
      "translations": [
        "blue",
        "indigo plant"
      ]
    },
    {
      "id": 446,
      "hanzi": "老",
      "pinyin": "lǎo",
      "translations": [
        "prefix used before the surname of a person or a numeral indicating the order of birth of the children in a family or to indicate affection or familiarity",
        "old (of people)",
        "venerable (person)",
        "experienced",
        "of long standing",
        "always",
        "all the time",
        "of the past",
        "very",
        "outdated",
        "(of meat etc) tough"
      ]
    },
    {
      "id": 447,
      "hanzi": "离开",
      "pinyin": "lí kāi",
      "translations": [
        "to depart",
        "to leave"
      ]
    },
    {
      "id": 448,
      "hanzi": "礼物",
      "pinyin": "lǐ wù",
      "translations": [
        "gift",
        "present",
        "CL:件",
        "個|个",
        "份[fèn]"
      ]
    },
    {
      "id": 449,
      "hanzi": "历史",
      "pinyin": "lì shǐ",
      "translations": [
        "history",
        "CL:門|门",
        "段[duàn]"
      ]
    },
    {
      "id": 450,
      "hanzi": "脸",
      "pinyin": "liǎn",
      "translations": [
        "face",
        "CL:張|张",
        "個|个[gè]"
      ]
    },
    {
      "id": 451,
      "hanzi": "练习",
      "pinyin": "liàn xí",
      "translations": [
        "exercise",
        "drill",
        "practice",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 452,
      "hanzi": "辆",
      "pinyin": "liàng",
      "translations": [
        "classifier for vehicles"
      ]
    },
    {
      "id": 453,
      "hanzi": "了解",
      "pinyin": "liǎo jiě",
      "translations": [
        "to understand",
        "to realize",
        "to find out"
      ]
    },
    {
      "id": 454,
      "hanzi": "邻居",
      "pinyin": "lín jū",
      "translations": [
        "neighbor",
        "next door",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 455,
      "hanzi": "楼",
      "pinyin": "lóu",
      "translations": [
        "house with more than 1 story",
        "storied building",
        "floor",
        "CL:層|层",
        "座",
        "棟|栋[dòng]"
      ]
    },
    {
      "id": 456,
      "hanzi": "绿",
      "pinyin": "lǜ",
      "translations": [
        "green"
      ]
    },
    {
      "id": 457,
      "hanzi": "马",
      "pinyin": "mǎ",
      "translations": [
        "horse",
        "CL:匹pi",
        "horse or cavalry piece in Chinese chess",
        "knight in Western chess"
      ]
    },
    {
      "id": 458,
      "hanzi": "马上",
      "pinyin": "mǎ shàng",
      "translations": [
        "at once",
        "right away",
        "immediately",
        "on horseback (i.e. by military force)"
      ]
    },
    {
      "id": 459,
      "hanzi": "满意",
      "pinyin": "mǎn yì",
      "translations": [
        "satisfied",
        "pleased",
        "to one's satisfaction"
      ]
    },
    {
      "id": 460,
      "hanzi": "帽子",
      "pinyin": "mào zi",
      "translations": [
        "hat",
        "cap",
        "(fig.) label",
        "bad name",
        "CL:頂|顶[dǐng]"
      ]
    },
    {
      "id": 461,
      "hanzi": "米",
      "pinyin": "mǐ",
      "translations": [
        "rice",
        "CL:粒[lì]",
        "meter (classifier)"
      ]
    },
    {
      "id": 462,
      "hanzi": "面包",
      "pinyin": "miàn bāo",
      "translations": [
        "bread",
        "CL:片",
        "袋",
        "塊|块[kuài]"
      ]
    },
    {
      "id": 463,
      "hanzi": "面条",
      "pinyin": "miàn tiáo",
      "translations": [
        "noodles"
      ]
    },
    {
      "id": 464,
      "hanzi": "明白",
      "pinyin": "míng bai",
      "translations": [
        "clear",
        "obvious",
        "unequivocal",
        "to understand",
        "to realize"
      ]
    },
    {
      "id": 465,
      "hanzi": "拿",
      "pinyin": "ná",
      "translations": [
        "to hold",
        "to seize",
        "to catch",
        "to apprehend",
        "to take"
      ]
    },
    {
      "id": 466,
      "hanzi": "奶奶",
      "pinyin": "nǎi nai",
      "translations": [
        "(informal) grandma (paternal grandmother)",
        "(respectful) mistress of the house",
        "CL:位[wèi]"
      ]
    },
    {
      "id": 467,
      "hanzi": "南",
      "pinyin": "nán",
      "translations": [
        "south"
      ]
    },
    {
      "id": 468,
      "hanzi": "难",
      "pinyin": "nán",
      "translations": [
        "difficult (to...)",
        "problem",
        "difficulty",
        "difficult",
        "not good"
      ]
    },
    {
      "id": 469,
      "hanzi": "难过",
      "pinyin": "nán guò",
      "translations": [
        "to feel sad",
        "to feel unwell",
        "(of life) to be difficult"
      ]
    },
    {
      "id": 470,
      "hanzi": "年级",
      "pinyin": "nián jí",
      "translations": [
        "grade",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 471,
      "hanzi": "年轻",
      "pinyin": "nián qīng",
      "translations": [
        "young"
      ]
    },
    {
      "id": 472,
      "hanzi": "鸟",
      "pinyin": "niǎo",
      "translations": [
        "bird",
        "CL:隻|只",
        "群[qún]"
      ]
    },
    {
      "id": 473,
      "hanzi": "努力",
      "pinyin": "nǔ lì",
      "translations": [
        "great effort",
        "to strive",
        "to try hard"
      ]
    },
    {
      "id": 474,
      "hanzi": "爬山",
      "pinyin": "pá shān",
      "translations": [
        "to climb a mountain",
        "to mountaineer",
        "hiking",
        "mountaineering"
      ]
    },
    {
      "id": 475,
      "hanzi": "盘子",
      "pinyin": "pán zi",
      "translations": [
        "tray",
        "plate",
        "dish",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 476,
      "hanzi": "胖",
      "pinyin": "pàng",
      "translations": [
        "fat",
        "plump"
      ]
    },
    {
      "id": 477,
      "hanzi": "啤酒",
      "pinyin": "pí jiǔ",
      "translations": [
        "beer",
        "CL:杯",
        "瓶",
        "罐",
        "桶",
        "缸[gāng]"
      ]
    },
    {
      "id": 478,
      "hanzi": "葡萄",
      "pinyin": "pú tao",
      "translations": [
        "grape"
      ]
    },
    {
      "id": 479,
      "hanzi": "普通话",
      "pinyin": "pǔ tōng huà",
      "translations": [
        "Mandarin (common language)",
        "Putonghua (common speech of the Chinese language)",
        "ordinary speech"
      ]
    },
    {
      "id": 480,
      "hanzi": "骑",
      "pinyin": "qí",
      "translations": [
        "to ride (an animal or bike)",
        "to sit astride"
      ]
    },
    {
      "id": 481,
      "hanzi": "其实",
      "pinyin": "qí shí",
      "translations": [
        "actually",
        "in fact",
        "really"
      ]
    },
    {
      "id": 482,
      "hanzi": "其他",
      "pinyin": "qí tā",
      "translations": [
        "other",
        "the others",
        "else",
        "other than (that person)",
        "in addition to the person mentioned above"
      ]
    },
    {
      "id": 483,
      "hanzi": "奇怪",
      "pinyin": "qí guài",
      "translations": [
        "strange",
        "odd",
        "to marvel",
        "to be baffled"
      ]
    },
    {
      "id": 484,
      "hanzi": "铅笔",
      "pinyin": "qiān bǐ",
      "translations": [
        "(lead) pencil",
        "CL:支",
        "枝",
        "桿|杆[gǎn]"
      ]
    },
    {
      "id": 485,
      "hanzi": "清楚",
      "pinyin": "qīng chu",
      "translations": [
        "clear",
        "distinct",
        "to understand thoroughly",
        "to be clear about"
      ]
    },
    {
      "id": 486,
      "hanzi": "秋",
      "pinyin": "qiū",
      "translations": [
        "a swing"
      ]
    },
    {
      "id": 487,
      "hanzi": "裙子",
      "pinyin": "qún zi",
      "translations": [
        "skirt",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 488,
      "hanzi": "然后",
      "pinyin": "rán hòu",
      "translations": [
        "after",
        "then (afterwards)",
        "after that",
        "afterwards"
      ]
    },
    {
      "id": 489,
      "hanzi": "热情",
      "pinyin": "rè qíng",
      "translations": [
        "cordial",
        "enthusiastic",
        "passion",
        "passionate",
        "passionately"
      ]
    },
    {
      "id": 490,
      "hanzi": "认为",
      "pinyin": "rèn wéi",
      "translations": [
        "to believe",
        "to think",
        "to consider",
        "to feel"
      ]
    },
    {
      "id": 491,
      "hanzi": "认真",
      "pinyin": "rèn zhēn",
      "translations": [
        "conscientious",
        "earnest",
        "serious",
        "to take seriously",
        "to take to heart"
      ]
    },
    {
      "id": 492,
      "hanzi": "容易",
      "pinyin": "róng yì",
      "translations": [
        "easy",
        "likely",
        "liable (to)"
      ]
    },
    {
      "id": 493,
      "hanzi": "如果",
      "pinyin": "rú guǒ",
      "translations": [
        "if",
        "in case",
        "in the event that"
      ]
    },
    {
      "id": 494,
      "hanzi": "伞",
      "pinyin": "sǎn",
      "translations": [
        "umbrella",
        "parasol",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 495,
      "hanzi": "上网",
      "pinyin": "shàng wǎng",
      "translations": [
        "to be on the internet",
        "to stretch a net (in a sports game or for covering sth)",
        "to be netted (of fish)"
      ]
    },
    {
      "id": 496,
      "hanzi": "生气",
      "pinyin": "shēng qì",
      "translations": [
        "angry",
        "mad",
        "offended",
        "animated",
        "to get angry",
        "to be enraged",
        "to take offense",
        "animation"
      ]
    },
    {
      "id": 497,
      "hanzi": "声音",
      "pinyin": "shēng yīn",
      "translations": [
        "voice",
        "sound",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 498,
      "hanzi": "使",
      "pinyin": "shǐ",
      "translations": [
        "to make",
        "to cause",
        "to enable",
        "to use",
        "to employ",
        "to send",
        "to instruct sb to do sth",
        "envoy",
        "messenger"
      ]
    },
    {
      "id": 499,
      "hanzi": "世界",
      "pinyin": "shì jiè",
      "translations": [
        "world",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 500,
      "hanzi": "瘦",
      "pinyin": "shòu",
      "translations": [
        "thin",
        "to lose weight",
        "(of clothing) tight",
        "(of meat) lean",
        "(of land) unproductive"
      ]
    },
    {
      "id": 501,
      "hanzi": "舒服",
      "pinyin": "shū fu",
      "translations": [
        "comfortable",
        "feeling well"
      ]
    },
    {
      "id": 502,
      "hanzi": "叔叔",
      "pinyin": "shū shu",
      "translations": [
        "father's younger brother",
        "uncle",
        "Taiwan pr. [shú shu]",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 503,
      "hanzi": "树",
      "pinyin": "shù",
      "translations": [
        "tree",
        "CL:棵[kē]",
        "to cultivate",
        "to set up"
      ]
    },
    {
      "id": 504,
      "hanzi": "数学",
      "pinyin": "shù xué",
      "translations": [
        "mathematics",
        "mathematical"
      ]
    },
    {
      "id": 505,
      "hanzi": "刷",
      "pinyin": "shuā",
      "translations": [
        "to brush",
        "to paint",
        "to daub",
        "to paste up",
        "to skip class (of students)",
        "to fire from a job"
      ]
    },
    {
      "id": 506,
      "hanzi": "双",
      "pinyin": "shuāng",
      "translations": [
        "two",
        "double",
        "pair",
        "both"
      ]
    },
    {
      "id": 507,
      "hanzi": "水平",
      "pinyin": "shuǐ píng",
      "translations": [
        "level (of achievement etc)",
        "standard",
        "horizontal"
      ]
    },
    {
      "id": 508,
      "hanzi": "司机",
      "pinyin": "sī jī",
      "translations": [
        "chauffeur",
        "driver",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 509,
      "hanzi": "虽然",
      "pinyin": "suī rán",
      "translations": [
        "although",
        "even though",
        "even if"
      ]
    },
    {
      "id": 510,
      "hanzi": "太阳",
      "pinyin": "tài yáng",
      "translations": [
        "sun",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 511,
      "hanzi": "糖",
      "pinyin": "táng",
      "translations": [
        "sugar",
        "sweets",
        "candy",
        "CL:顆|颗",
        "塊|块[kuài]"
      ]
    },
    {
      "id": 512,
      "hanzi": "特别",
      "pinyin": "tè bié",
      "translations": [
        "especially",
        "special",
        "particular",
        "unusual"
      ]
    },
    {
      "id": 513,
      "hanzi": "疼",
      "pinyin": "téng",
      "translations": [
        "(it) hurts",
        "sore",
        "to love dearly"
      ]
    },
    {
      "id": 514,
      "hanzi": "提高",
      "pinyin": "tí gāo",
      "translations": [
        "to raise",
        "to increase"
      ]
    },
    {
      "id": 515,
      "hanzi": "体育",
      "pinyin": "tǐ yù",
      "translations": [
        "sports",
        "physical education"
      ]
    },
    {
      "id": 516,
      "hanzi": "甜",
      "pinyin": "tián",
      "translations": [
        "sweet"
      ]
    },
    {
      "id": 517,
      "hanzi": "条",
      "pinyin": "tiáo",
      "translations": [
        "strip",
        "item",
        "article",
        "clause (of law or treaty)",
        "classifier for long thin things (ribbon, river, road, trousers etc)"
      ]
    },
    {
      "id": 518,
      "hanzi": "同事",
      "pinyin": "tóng shì",
      "translations": [
        "colleague",
        "co-worker",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 519,
      "hanzi": "同意",
      "pinyin": "tóng yì",
      "translations": [
        "to agree",
        "to consent",
        "to approve"
      ]
    },
    {
      "id": 520,
      "hanzi": "头发",
      "pinyin": "tóu fa",
      "translations": [
        "hair (on the head)"
      ]
    },
    {
      "id": 521,
      "hanzi": "突然",
      "pinyin": "tū rán",
      "translations": [
        "sudden",
        "abrupt",
        "unexpected"
      ]
    },
    {
      "id": 522,
      "hanzi": "图书馆",
      "pinyin": "tú shū guǎn",
      "translations": [
        "library",
        "CL:家",
        "個|个[gè]"
      ]
    },
    {
      "id": 523,
      "hanzi": "腿",
      "pinyin": "tuǐ",
      "translations": [
        "leg",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 524,
      "hanzi": "完成",
      "pinyin": "wán chéng",
      "translations": [
        "to complete",
        "to accomplish"
      ]
    },
    {
      "id": 525,
      "hanzi": "碗",
      "pinyin": "wǎn",
      "translations": [
        "bowl",
        "cup",
        "CL:隻|只",
        "個|个[gè]"
      ]
    },
    {
      "id": 526,
      "hanzi": "万",
      "pinyin": "wàn",
      "translations": [
        "ten thousand",
        "a great number"
      ]
    },
    {
      "id": 527,
      "hanzi": "忘记",
      "pinyin": "wàng jì",
      "translations": [
        "to forget"
      ]
    },
    {
      "id": 528,
      "hanzi": "为了",
      "pinyin": "wèi le",
      "translations": [
        "in order to",
        "for the purpose of",
        "so as to"
      ]
    },
    {
      "id": 529,
      "hanzi": "为什么",
      "pinyin": "wèi shén me",
      "translations": [
        "why?",
        "for what reason?"
      ]
    },
    {
      "id": 530,
      "hanzi": "位",
      "pinyin": "wèi",
      "translations": [
        "position",
        "location",
        "place",
        "seat",
        "classifier for people (honorific)",
        "classifier for binary bits (e.g. 十六位 16-bit or 2 bytes)"
      ]
    },
    {
      "id": 531,
      "hanzi": "文化",
      "pinyin": "wén huà",
      "translations": [
        "culture",
        "civilization",
        "cultural",
        "CL:個|个",
        "種|种[zhǒng]"
      ]
    },
    {
      "id": 532,
      "hanzi": "西",
      "pinyin": "xī",
      "translations": [
        "west"
      ]
    },
    {
      "id": 533,
      "hanzi": "习惯",
      "pinyin": "xí guàn",
      "translations": [
        "habit",
        "custom",
        "usual practice",
        "to be used to",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 534,
      "hanzi": "洗手间",
      "pinyin": "xǐ shǒu jiān",
      "translations": [
        "toilet",
        "lavatory",
        "washroom"
      ]
    },
    {
      "id": 535,
      "hanzi": "洗澡",
      "pinyin": "xǐ zǎo",
      "translations": [
        "to bathe",
        "to take a shower"
      ]
    },
    {
      "id": 536,
      "hanzi": "夏",
      "pinyin": "xià",
      "translations": [
        "summer"
      ]
    },
    {
      "id": 537,
      "hanzi": "先",
      "pinyin": "xiān",
      "translations": [
        "early",
        "prior",
        "former",
        "in advance",
        "first"
      ]
    },
    {
      "id": 538,
      "hanzi": "香蕉",
      "pinyin": "xiāng jiāo",
      "translations": [
        "banana",
        "CL:枝",
        "根",
        "個|个",
        "把[bǎ]"
      ]
    },
    {
      "id": 539,
      "hanzi": "相同",
      "pinyin": "xiāng tóng",
      "translations": [
        "identical",
        "same"
      ]
    },
    {
      "id": 540,
      "hanzi": "相信",
      "pinyin": "xiāng xìn",
      "translations": [
        "to be convinced (that sth is true)",
        "to believe",
        "to accept sth as true"
      ]
    },
    {
      "id": 541,
      "hanzi": "像",
      "pinyin": "xiàng",
      "translations": [
        "to resemble",
        "to be like",
        "to look as if",
        "such as",
        "appearance",
        "image",
        "portrait",
        "image under a mapping (math.)"
      ]
    },
    {
      "id": 542,
      "hanzi": "小心",
      "pinyin": "xiǎo xīn",
      "translations": [
        "to be careful",
        "to take care"
      ]
    },
    {
      "id": 543,
      "hanzi": "校长",
      "pinyin": "xiào zhǎng",
      "translations": [
        "(college, university) president",
        "headmaster",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 544,
      "hanzi": "鞋",
      "pinyin": "xié",
      "translations": [
        "shoe",
        "CL:雙|双",
        "隻|只[zhī]"
      ]
    },
    {
      "id": 545,
      "hanzi": "新闻",
      "pinyin": "xīn wén",
      "translations": [
        "news",
        "CL:條|条",
        "個|个[gè]"
      ]
    },
    {
      "id": 546,
      "hanzi": "新鲜",
      "pinyin": "xīn xiān",
      "translations": [
        "fresh (experience, food etc)",
        "freshness",
        "novel",
        "uncommon"
      ]
    },
    {
      "id": 547,
      "hanzi": "信",
      "pinyin": "xìn",
      "translations": [
        "letter",
        "mail",
        "CL:封[fēng]",
        "to trust",
        "to believe",
        "to profess faith in",
        "truthful",
        "confidence",
        "trust",
        "at will",
        "at random"
      ]
    },
    {
      "id": 548,
      "hanzi": "行李箱",
      "pinyin": "xíng li xiāng",
      "translations": [
        "suitcase"
      ]
    },
    {
      "id": 549,
      "hanzi": "兴趣",
      "pinyin": "xìng qù",
      "translations": [
        "interest (desire to know about sth)",
        "interest (thing in which one is interested)",
        "hobby",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 550,
      "hanzi": "熊猫",
      "pinyin": "xióng māo",
      "translations": [
        "panda",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 551,
      "hanzi": "需要",
      "pinyin": "xū yào",
      "translations": [
        "to need",
        "to want",
        "to demand",
        "to require",
        "requirement",
        "need"
      ]
    },
    {
      "id": 552,
      "hanzi": "选择",
      "pinyin": "xuǎn zé",
      "translations": [
        "to select",
        "to pick",
        "choice",
        "option",
        "alternative"
      ]
    },
    {
      "id": 553,
      "hanzi": "眼镜",
      "pinyin": "yǎn jìng",
      "translations": [
        "spectacles",
        "eyeglasses",
        "CL:副[fù]"
      ]
    },
    {
      "id": 554,
      "hanzi": "要求",
      "pinyin": "yāo qiú",
      "translations": [
        "to request",
        "to require",
        "to stake a claim",
        "to ask",
        "to demand",
        "CL:點|点[diǎn]"
      ]
    },
    {
      "id": 555,
      "hanzi": "爷爷",
      "pinyin": "yé ye",
      "translations": [
        "(informal) father's father",
        "paternal grandfather",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 556,
      "hanzi": "一定",
      "pinyin": "yī dìng",
      "translations": [
        "surely",
        "certainly",
        "necessarily",
        "fixed",
        "a certain (extent etc)",
        "given",
        "particular",
        "must"
      ]
    },
    {
      "id": 557,
      "hanzi": "一共",
      "pinyin": "yī gòng",
      "translations": [
        "altogether"
      ]
    },
    {
      "id": 558,
      "hanzi": "一会儿",
      "pinyin": "yī huì r",
      "translations": [
        "a while",
        "also pr. [yī huǐ r]"
      ]
    },
    {
      "id": 559,
      "hanzi": "一样",
      "pinyin": "yī yàng",
      "translations": [
        "same",
        "like",
        "equal to",
        "the same as",
        "just like"
      ]
    },
    {
      "id": 560,
      "hanzi": "以后",
      "pinyin": "yǐ hòu",
      "translations": [
        "after",
        "later",
        "afterwards",
        "following",
        "later on",
        "in the future"
      ]
    },
    {
      "id": 561,
      "hanzi": "以前",
      "pinyin": "yǐ qián",
      "translations": [
        "before",
        "formerly",
        "previous",
        "ago"
      ]
    },
    {
      "id": 562,
      "hanzi": "以为",
      "pinyin": "yǐ wéi",
      "translations": [
        "to believe",
        "to think",
        "to consider",
        "to be under the impression"
      ]
    },
    {
      "id": 563,
      "hanzi": "一般",
      "pinyin": "yī bān",
      "translations": [
        "same",
        "ordinary",
        "so-so",
        "common",
        "general",
        "generally",
        "in general"
      ]
    },
    {
      "id": 564,
      "hanzi": "一边",
      "pinyin": "yī biān",
      "translations": [
        "one side",
        "either side",
        "on the one hand",
        "on the other hand",
        "doing while"
      ]
    },
    {
      "id": 565,
      "hanzi": "一直",
      "pinyin": "yī zhí",
      "translations": [
        "straight (in a straight line)",
        "continuously",
        "always",
        "from the beginning of ... up to ...",
        "all along"
      ]
    },
    {
      "id": 566,
      "hanzi": "音乐",
      "pinyin": "yīn yuè",
      "translations": [
        "music",
        "CL:張|张",
        "曲",
        "段[duàn]"
      ]
    },
    {
      "id": 567,
      "hanzi": "银行",
      "pinyin": "yín háng",
      "translations": [
        "bank",
        "CL:家",
        "個|个[gè]"
      ]
    },
    {
      "id": 568,
      "hanzi": "应该",
      "pinyin": "yīng gāi",
      "translations": [
        "ought to",
        "should",
        "must"
      ]
    },
    {
      "id": 569,
      "hanzi": "影响",
      "pinyin": "yǐng xiǎng",
      "translations": [
        "an influence",
        "an effect",
        "to influence",
        "to affect (usually adversely)",
        "to disturb",
        "CL:股[gǔ]"
      ]
    },
    {
      "id": 570,
      "hanzi": "用",
      "pinyin": "yòng",
      "translations": [
        "to use",
        "to employ",
        "to have to",
        "to eat or drink",
        "expense or outlay",
        "usefulness",
        "hence",
        "therefore"
      ]
    },
    {
      "id": 571,
      "hanzi": "游戏",
      "pinyin": "yóu xì",
      "translations": [
        "game",
        "CL:場|场[chǎng]",
        "to play"
      ]
    },
    {
      "id": 572,
      "hanzi": "有名",
      "pinyin": "yǒu míng",
      "translations": [
        "famous",
        "well-known"
      ]
    },
    {
      "id": 573,
      "hanzi": "又",
      "pinyin": "yòu",
      "translations": [
        "(once) again",
        "also",
        "both... and...",
        "and yet",
        "(used for emphasis) anyway"
      ]
    },
    {
      "id": 574,
      "hanzi": "遇到",
      "pinyin": "yù dào",
      "translations": [
        "to meet",
        "to run into",
        "to come across"
      ]
    },
    {
      "id": 575,
      "hanzi": "愿意",
      "pinyin": "yuàn yì",
      "translations": [
        "to wish",
        "to want",
        "ready",
        "willing (to do sth)"
      ]
    },
    {
      "id": 576,
      "hanzi": "越",
      "pinyin": "yuè",
      "translations": [
        "to exceed",
        "to climb over",
        "to surpass",
        "the more... the more"
      ]
    },
    {
      "id": 577,
      "hanzi": "月亮",
      "pinyin": "yuè liang",
      "translations": [
        "moon"
      ]
    },
    {
      "id": 578,
      "hanzi": "云",
      "pinyin": "yún",
      "translations": [
        "cloud",
        "CL:朵[duǒ]"
      ]
    },
    {
      "id": 579,
      "hanzi": "站",
      "pinyin": "zhàn",
      "translations": [
        "station",
        "to stand",
        "to halt",
        "to stop",
        "branch of a company or organization",
        "website"
      ]
    },
    {
      "id": 580,
      "hanzi": "着急",
      "pinyin": "zháo jí",
      "translations": [
        "to worry",
        "to feel anxious",
        "Taiwan pron. [zhāo jí]"
      ]
    },
    {
      "id": 581,
      "hanzi": "照顾",
      "pinyin": "zhào gu",
      "translations": [
        "to take care of",
        "to show consideration",
        "to attend to",
        "to look after"
      ]
    },
    {
      "id": 582,
      "hanzi": "照片",
      "pinyin": "zhào piàn",
      "translations": [
        "photograph",
        "picture",
        "CL:張|张",
        "套",
        "幅[fú]"
      ]
    },
    {
      "id": 583,
      "hanzi": "照相机",
      "pinyin": "zhào xiàng jī",
      "translations": [
        "camera",
        "CL:個|个",
        "架",
        "部",
        "台",
        "隻|只[zhī]"
      ]
    },
    {
      "id": 584,
      "hanzi": "只",
      "pinyin": "zhī",
      "translations": [
        "classifier for birds and certain animals",
        "one of a pair",
        "some utensils",
        "vessels etc"
      ]
    },
    {
      "id": 585,
      "hanzi": "只",
      "pinyin": "zhǐ",
      "translations": [
        "but",
        "only"
      ]
    },
    {
      "id": 586,
      "hanzi": "终于",
      "pinyin": "zhōng yú",
      "translations": [
        "at last",
        "in the end",
        "finally",
        "eventually"
      ]
    },
    {
      "id": 587,
      "hanzi": "中间",
      "pinyin": "zhōng jiān",
      "translations": [
        "between",
        "intermediate",
        "mid",
        "middle"
      ]
    },
    {
      "id": 588,
      "hanzi": "种",
      "pinyin": "zhǒng",
      "translations": [
        "abbr. for 物種|物种",
        "genus",
        "race",
        "seed",
        "breed",
        "species",
        "strain",
        "kind",
        "type",
        "has guts (i.e. courage)",
        "nerve",
        "classifier for types: kind",
        "sort",
        "classifier for languages"
      ]
    },
    {
      "id": 589,
      "hanzi": "重要",
      "pinyin": "zhòng yào",
      "translations": [
        "important",
        "significant",
        "major"
      ]
    },
    {
      "id": 590,
      "hanzi": "周末",
      "pinyin": "zhōu mò",
      "translations": [
        "weekend"
      ]
    },
    {
      "id": 591,
      "hanzi": "主要",
      "pinyin": "zhǔ yào",
      "translations": [
        "main",
        "principal",
        "major",
        "primary"
      ]
    },
    {
      "id": 592,
      "hanzi": "祝",
      "pinyin": "zhù",
      "translations": [
        "to wish",
        "to express good wishes",
        "to pray",
        "(old) wizard"
      ]
    },
    {
      "id": 593,
      "hanzi": "注意",
      "pinyin": "zhù yì",
      "translations": [
        "to take note of",
        "to pay attention to"
      ]
    },
    {
      "id": 594,
      "hanzi": "字典",
      "pinyin": "zì diǎn",
      "translations": [
        "dictionary",
        "character dictionary",
        "CL:本[běn]"
      ]
    },
    {
      "id": 595,
      "hanzi": "自己",
      "pinyin": "zì jǐ",
      "translations": [
        "oneself",
        "one's own"
      ]
    },
    {
      "id": 596,
      "hanzi": "总是",
      "pinyin": "zǒng shì",
      "translations": [
        "always"
      ]
    },
    {
      "id": 597,
      "hanzi": "最近",
      "pinyin": "zuì jìn",
      "translations": [
        "recent",
        "recently",
        "these days",
        "latest",
        "soon",
        "nearest (of locations)",
        "shortest (of routes)"
      ]
    },
    {
      "id": 598,
      "hanzi": "作业",
      "pinyin": "zuò yè",
      "translations": [
        "school assignment",
        "homework",
        "work",
        "task",
        "operation",
        "CL:個|个[gè]",
        "to operate"
      ]
    },
    {
      "id": 599,
      "hanzi": "作用",
      "pinyin": "zuò yòng",
      "translations": [
        "to act on",
        "to affect",
        "action",
        "function",
        "activity",
        "impact",
        "result",
        "effect",
        "purpose",
        "intent",
        "to play a role",
        "corresponds to English -ity",
        "-ism",
        "-ization",
        "CL:個|个[gè]"
      ]
    }
  ]
  
  private _hanzi_hsk_4 = () => [
    {
      "id": 600,
      "hanzi": "爱情",
      "pinyin": "ài qíng",
      "translations": [
        "romance",
        "love (romantic)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 601,
      "hanzi": "安排",
      "pinyin": "ān pái",
      "translations": [
        "to arrange",
        "to plan",
        "to set up"
      ]
    },
    {
      "id": 602,
      "hanzi": "安全",
      "pinyin": "ān quán",
      "translations": [
        "safe",
        "secure",
        "safety",
        "security"
      ]
    },
    {
      "id": 603,
      "hanzi": "暗",
      "pinyin": "àn",
      "translations": [
        "to close (a door)",
        "to eclipse",
        "muddled",
        "stupid",
        "ignorant",
        "variant of 暗[àn]"
      ]
    },
    {
      "id": 604,
      "hanzi": "按时",
      "pinyin": "àn shí",
      "translations": [
        "on time",
        "before deadline",
        "on schedule"
      ]
    },
    {
      "id": 605,
      "hanzi": "按照",
      "pinyin": "àn zhào",
      "translations": [
        "according to",
        "in accordance with",
        "in the light of",
        "on the basis of"
      ]
    },
    {
      "id": 606,
      "hanzi": "包括",
      "pinyin": "bāo kuò",
      "translations": [
        "to comprise",
        "to include",
        "to involve",
        "to incorporate",
        "to consist of"
      ]
    },
    {
      "id": 607,
      "hanzi": "保护",
      "pinyin": "bǎo hù",
      "translations": [
        "to protect",
        "to defend",
        "to safeguard",
        "protection",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 608,
      "hanzi": "保证",
      "pinyin": "bǎo zhèng",
      "translations": [
        "guarantee",
        "to guarantee",
        "to ensure",
        "to safeguard",
        "to pledge",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 609,
      "hanzi": "抱",
      "pinyin": "bào",
      "translations": [
        "to hold",
        "to carry (in one's arms)",
        "to hug or embrace",
        "surround",
        "cherish"
      ]
    },
    {
      "id": 610,
      "hanzi": "抱歉",
      "pinyin": "bào qiàn",
      "translations": [
        "to be sorry",
        "to feel apologetic",
        "sorry!"
      ]
    },
    {
      "id": 611,
      "hanzi": "报道",
      "pinyin": "bào dào",
      "translations": [
        "report",
        "CL:篇",
        "份[fèn]"
      ]
    },
    {
      "id": 612,
      "hanzi": "报名",
      "pinyin": "bào míng",
      "translations": [
        "to sign up",
        "to enter one's name",
        "to apply",
        "to register",
        "to enroll",
        "to enlist"
      ]
    },
    {
      "id": 613,
      "hanzi": "倍",
      "pinyin": "bèi",
      "translations": [
        "(two, three etc) -fold",
        "times (multiplier)",
        "double",
        "to increase or multiply"
      ]
    },
    {
      "id": 614,
      "hanzi": "本来",
      "pinyin": "běn lái",
      "translations": [
        "original",
        "originally",
        "at first",
        "it goes without saying",
        "of course"
      ]
    },
    {
      "id": 615,
      "hanzi": "笨",
      "pinyin": "bèn",
      "translations": [
        "stupid",
        "foolish",
        "silly",
        "slow-witted",
        "clumsy"
      ]
    },
    {
      "id": 616,
      "hanzi": "笔记本",
      "pinyin": "bǐ jì běn",
      "translations": [
        "notebook",
        "CL:本[běn]"
      ]
    },
    {
      "id": 617,
      "hanzi": "毕业",
      "pinyin": "bì yè",
      "translations": [
        "graduation",
        "to graduate",
        "to finish school"
      ]
    },
    {
      "id": 618,
      "hanzi": "遍",
      "pinyin": "biàn",
      "translations": [
        "everywhere",
        "all over",
        "classifier for actions: one time"
      ]
    },
    {
      "id": 619,
      "hanzi": "标准",
      "pinyin": "biāo zhǔn",
      "translations": [
        "(an official) standard",
        "norm",
        "criterion",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 620,
      "hanzi": "表达",
      "pinyin": "biǎo dá",
      "translations": [
        "to voice (an opinion)",
        "to express",
        "to convey"
      ]
    },
    {
      "id": 621,
      "hanzi": "表格",
      "pinyin": "biǎo gé",
      "translations": [
        "form",
        "table",
        "CL:張|张",
        "份[fèn]"
      ]
    },
    {
      "id": 622,
      "hanzi": "表扬",
      "pinyin": "biǎo yáng",
      "translations": [
        "to praise",
        "to commend"
      ]
    },
    {
      "id": 623,
      "hanzi": "饼干",
      "pinyin": "bǐng gān",
      "translations": [
        "biscuit",
        "cracker",
        "cookie",
        "CL:片",
        "塊|块[kuài]"
      ]
    },
    {
      "id": 624,
      "hanzi": "并且",
      "pinyin": "bìng qiě",
      "translations": [
        "and",
        "besides",
        "moreover",
        "furthermore",
        "in addition"
      ]
    },
    {
      "id": 625,
      "hanzi": "博士",
      "pinyin": "bó shì",
      "translations": [
        "doctor",
        "court academician (in feudal China)",
        "Ph.D."
      ]
    },
    {
      "id": 626,
      "hanzi": "不但",
      "pinyin": "bù dàn",
      "translations": [
        "not only (... but also...)"
      ]
    },
    {
      "id": 627,
      "hanzi": "不过",
      "pinyin": "bù guò",
      "translations": [
        "only",
        "merely",
        "no more than",
        "but",
        "however",
        "anyway (to get back to a previous topic)"
      ]
    },
    {
      "id": 628,
      "hanzi": "不得不",
      "pinyin": "bù dé bù",
      "translations": [
        "have no choice or option but to",
        "cannot but",
        "have to",
        "can't help it",
        "can't avoid"
      ]
    },
    {
      "id": 629,
      "hanzi": "不管",
      "pinyin": "bù guǎn",
      "translations": [
        "no matter (what, how)",
        "regardless of",
        "no matter"
      ]
    },
    {
      "id": 630,
      "hanzi": "不仅",
      "pinyin": "bù jǐn",
      "translations": [
        "not only (this one)",
        "not just (...) but also"
      ]
    },
    {
      "id": 631,
      "hanzi": "部分",
      "pinyin": "bù fèn",
      "translations": [
        "part",
        "share",
        "section",
        "piece",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 632,
      "hanzi": "擦",
      "pinyin": "cā",
      "translations": [
        "to wipe",
        "to erase",
        "rubbing (brush stroke in painting)",
        "to clean",
        "to polish"
      ]
    },
    {
      "id": 633,
      "hanzi": "猜",
      "pinyin": "cāi",
      "translations": [
        "to guess"
      ]
    },
    {
      "id": 634,
      "hanzi": "材料",
      "pinyin": "cái liào",
      "translations": [
        "material",
        "data",
        "makings",
        "stuff",
        "CL:個|个",
        "種|种[zhǒng]"
      ]
    },
    {
      "id": 635,
      "hanzi": "参观",
      "pinyin": "cān guān",
      "translations": [
        "to look around",
        "to tour",
        "to visit"
      ]
    },
    {
      "id": 636,
      "hanzi": "差不多",
      "pinyin": "chà bu duō",
      "translations": [
        "almost",
        "nearly",
        "more or less",
        "about the same",
        "good enough",
        "not bad"
      ]
    },
    {
      "id": 637,
      "hanzi": "长城",
      "pinyin": "Cháng chéng",
      "translations": [
        "the Great Wall"
      ]
    },
    {
      "id": 638,
      "hanzi": "长江",
      "pinyin": "Cháng Jiāng",
      "translations": [
        "Yangtze River",
        "or Chang Jiang"
      ]
    },
    {
      "id": 639,
      "hanzi": "尝",
      "pinyin": "cháng",
      "translations": [
        "to taste"
      ]
    },
    {
      "id": 640,
      "hanzi": "场",
      "pinyin": "chǎng",
      "translations": [
        "large place used for a specific purpose",
        "stage",
        "scene (of a play)",
        "classifier for sporting or recreational activities",
        "classifier for number of exams"
      ]
    },
    {
      "id": 641,
      "hanzi": "超过",
      "pinyin": "chāo guò",
      "translations": [
        "to surpass",
        "to exceed",
        "to outstrip"
      ]
    },
    {
      "id": 642,
      "hanzi": "吵",
      "pinyin": "chǎo",
      "translations": [
        "to quarrel",
        "to make a noise",
        "noisy",
        "to disturb by making a noise"
      ]
    },
    {
      "id": 643,
      "hanzi": "乘坐",
      "pinyin": "chéng zuò",
      "translations": [
        "to ride (in a vehicle)"
      ]
    },
    {
      "id": 644,
      "hanzi": "成功",
      "pinyin": "chéng gōng",
      "translations": [
        "success",
        "to succeed",
        "CL:次",
        "個|个[gè]"
      ]
    },
    {
      "id": 645,
      "hanzi": "成熟",
      "pinyin": "chéng shú",
      "translations": [
        "mature",
        "ripe",
        "to mature",
        "to ripen",
        "Taiwan pr. [chéng shóu]"
      ]
    },
    {
      "id": 646,
      "hanzi": "成为",
      "pinyin": "chéng wéi",
      "translations": [
        "to become",
        "to turn into"
      ]
    },
    {
      "id": 647,
      "hanzi": "诚实",
      "pinyin": "chéng shí",
      "translations": [
        "honest",
        "honesty",
        "honorable",
        "truthful"
      ]
    },
    {
      "id": 648,
      "hanzi": "吃惊",
      "pinyin": "chī jīng",
      "translations": [
        "to be startled",
        "to be shocked",
        "to be amazed"
      ]
    },
    {
      "id": 649,
      "hanzi": "重新",
      "pinyin": "chóng xīn",
      "translations": [
        "again",
        "once more",
        "re-"
      ]
    },
    {
      "id": 650,
      "hanzi": "抽烟",
      "pinyin": "chōu yān",
      "translations": [
        "to smoke (a cigarette, tobacco)"
      ]
    },
    {
      "id": 651,
      "hanzi": "出差",
      "pinyin": "chū chāi",
      "translations": [
        "to go on an official or business trip"
      ]
    },
    {
      "id": 652,
      "hanzi": "出发",
      "pinyin": "chū fā",
      "translations": [
        "to start out",
        "to set off"
      ]
    },
    {
      "id": 653,
      "hanzi": "出生",
      "pinyin": "chū shēng",
      "translations": [
        "to be born"
      ]
    },
    {
      "id": 654,
      "hanzi": "传真",
      "pinyin": "chuán zhēn",
      "translations": [
        "fax",
        "facsimile"
      ]
    },
    {
      "id": 655,
      "hanzi": "窗户",
      "pinyin": "chuāng hu",
      "translations": [
        "window",
        "CL:個|个",
        "扇[shàn]"
      ]
    },
    {
      "id": 656,
      "hanzi": "词典",
      "pinyin": "cí diǎn",
      "translations": [
        "dictionary (of Chinese compound words)",
        "also written 辭典|辞典[cí diǎn]",
        "CL:部",
        "本[běn]"
      ]
    },
    {
      "id": 657,
      "hanzi": "从来",
      "pinyin": "cóng lái",
      "translations": [
        "always",
        "at all times",
        "never (if used in negative sentence)"
      ]
    },
    {
      "id": 658,
      "hanzi": "粗心",
      "pinyin": "cū xīn",
      "translations": [
        "careless",
        "thoughtless"
      ]
    },
    {
      "id": 659,
      "hanzi": "答案",
      "pinyin": "dá àn",
      "translations": [
        "answer",
        "solution",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 660,
      "hanzi": "打扮",
      "pinyin": "dǎ ban",
      "translations": [
        "to decorate",
        "to dress",
        "to make up",
        "to adorn",
        "manner of dressing",
        "style of dress"
      ]
    },
    {
      "id": 661,
      "hanzi": "打扰",
      "pinyin": "dǎ rǎo",
      "translations": [
        "to disturb",
        "to bother",
        "to trouble"
      ]
    },
    {
      "id": 662,
      "hanzi": "打印",
      "pinyin": "dǎ yìn",
      "translations": [
        "to print",
        "to seal",
        "to stamp"
      ]
    },
    {
      "id": 663,
      "hanzi": "打折",
      "pinyin": "dǎ zhé",
      "translations": [
        "to give a discount"
      ]
    },
    {
      "id": 664,
      "hanzi": "打针",
      "pinyin": "dǎ zhēn",
      "translations": [
        "to give or have an injection"
      ]
    },
    {
      "id": 665,
      "hanzi": "大概",
      "pinyin": "dà gài",
      "translations": [
        "roughly",
        "probably",
        "rough",
        "approximate",
        "about"
      ]
    },
    {
      "id": 666,
      "hanzi": "大使馆",
      "pinyin": "dà shǐ guǎn",
      "translations": [
        "embassy",
        "CL:座",
        "個|个[gè]"
      ]
    },
    {
      "id": 667,
      "hanzi": "大约",
      "pinyin": "dà yuē",
      "translations": [
        "approximately",
        "about"
      ]
    },
    {
      "id": 668,
      "hanzi": "戴",
      "pinyin": "dài",
      "translations": [
        "to put on or wear (glasses, hat, gloves etc)",
        "to respect",
        "to bear",
        "to support"
      ]
    },
    {
      "id": 669,
      "hanzi": "代表",
      "pinyin": "dài biǎo",
      "translations": [
        "representative",
        "delegate",
        "CL:位",
        "個|个",
        "名[míng]",
        "to represent",
        "to stand for",
        "on behalf of",
        "in the name of"
      ]
    },
    {
      "id": 670,
      "hanzi": "代替",
      "pinyin": "dài tì",
      "translations": [
        "instead",
        "to replace",
        "to substitute (X for Y, or a number in an algebraic expression)"
      ]
    },
    {
      "id": 671,
      "hanzi": "大夫",
      "pinyin": "dài fu",
      "translations": [
        "doctor",
        "minister of state (in pre-Han states)",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 672,
      "hanzi": "当",
      "pinyin": "dāng",
      "translations": [
        "to be",
        "to act as",
        "manage",
        "withstand",
        "when",
        "during",
        "ought",
        "should",
        "match equally",
        "equal",
        "same",
        "obstruct",
        "just at (a time or place)",
        "on the spot",
        "right",
        "just at"
      ]
    },
    {
      "id": 673,
      "hanzi": "当地",
      "pinyin": "dāng dì",
      "translations": [
        "local"
      ]
    },
    {
      "id": 674,
      "hanzi": "当时",
      "pinyin": "dāng shí",
      "translations": [
        "then",
        "at that time",
        "while"
      ]
    },
    {
      "id": 675,
      "hanzi": "刀",
      "pinyin": "dāo",
      "translations": [
        "knife",
        "blade",
        "single-edged sword",
        "cutlass",
        "CL:把[bǎ]",
        "classifier for sets of one hundred sheets (of paper)"
      ]
    },
    {
      "id": 676,
      "hanzi": "导游",
      "pinyin": "dǎo yóu",
      "translations": [
        "tour guide",
        "guidebook",
        "to conduct a tour"
      ]
    },
    {
      "id": 677,
      "hanzi": "到处",
      "pinyin": "dào chù",
      "translations": [
        "everywhere"
      ]
    },
    {
      "id": 678,
      "hanzi": "到底",
      "pinyin": "dào dǐ",
      "translations": [
        "finally",
        "in the end",
        "when all is said and done",
        "after all",
        "to the end",
        "to the last"
      ]
    },
    {
      "id": 679,
      "hanzi": "道歉",
      "pinyin": "dào qiàn",
      "translations": [
        "to apologize"
      ]
    },
    {
      "id": 680,
      "hanzi": "得意",
      "pinyin": "dé yì",
      "translations": [
        "proud of oneself",
        "pleased with oneself",
        "complacent"
      ]
    },
    {
      "id": 681,
      "hanzi": "等",
      "pinyin": "děng",
      "translations": [
        "class",
        "rank",
        "grade",
        "equal to",
        "same as",
        "to wait for",
        "to await",
        "et cetera",
        "and so on",
        "et al. (and other authors)",
        "after",
        "as soon as",
        "once"
      ]
    },
    {
      "id": 682,
      "hanzi": "等",
      "pinyin": "děng",
      "translations": [
        "class",
        "rank",
        "grade",
        "equal to",
        "same as",
        "to wait for",
        "to await",
        "et cetera",
        "and so on",
        "et al. (and other authors)",
        "after",
        "as soon as",
        "once"
      ]
    },
    {
      "id": 683,
      "hanzi": "底",
      "pinyin": "dǐ",
      "translations": [
        "background",
        "bottom",
        "base",
        "the end of a period of time",
        "towards the end of (last month)"
      ]
    },
    {
      "id": 684,
      "hanzi": "地球",
      "pinyin": "dì qiú",
      "translations": [
        "the Earth",
        "planet",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 685,
      "hanzi": "地址",
      "pinyin": "dì zhǐ",
      "translations": [
        "address",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 686,
      "hanzi": "掉",
      "pinyin": "diào",
      "translations": [
        "to fall",
        "to drop",
        "to lag behind",
        "to lose",
        "to go missing",
        "to reduce",
        "fall (in prices)",
        "to lose (value, weight etc)",
        "to wag",
        "to swing",
        "to turn",
        "to change",
        "to exchange",
        "to swap",
        "to show off",
        "to shed (hair)"
      ]
    },
    {
      "id": 687,
      "hanzi": "调查",
      "pinyin": "diào chá",
      "translations": [
        "investigation",
        "inquiry",
        "to investigate",
        "to survey",
        "survey",
        "(opinion) poll",
        "CL:項|项",
        "個|个[gè]"
      ]
    },
    {
      "id": 688,
      "hanzi": "丢",
      "pinyin": "diū",
      "translations": [
        "to lose",
        "to put aside",
        "to throw"
      ]
    },
    {
      "id": 689,
      "hanzi": "动作",
      "pinyin": "dòng zuò",
      "translations": [
        "movement",
        "motion",
        "action",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 690,
      "hanzi": "堵车",
      "pinyin": "dǔ chē",
      "translations": [
        "traffic jam",
        "choking"
      ]
    },
    {
      "id": 691,
      "hanzi": "肚子",
      "pinyin": "dù zi",
      "translations": [
        "belly",
        "abdomen",
        "stomach",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 692,
      "hanzi": "断",
      "pinyin": "duàn",
      "translations": [
        "to break",
        "to snap",
        "to cut off",
        "to give up or abstain from sth",
        "to judge",
        "(usu. used in the negative) absolutely",
        "definitely",
        "decidedly"
      ]
    },
    {
      "id": 693,
      "hanzi": "对",
      "pinyin": "duì",
      "translations": [
        "couple",
        "pair",
        "to be opposite",
        "to oppose",
        "to face",
        "versus",
        "for",
        "to",
        "correct (answer)",
        "to answer",
        "to reply",
        "to direct (towards sth)",
        "right"
      ]
    },
    {
      "id": 694,
      "hanzi": "对",
      "pinyin": "duì",
      "translations": [
        "couple",
        "pair",
        "to be opposite",
        "to oppose",
        "to face",
        "versus",
        "for",
        "to",
        "correct (answer)",
        "to answer",
        "to reply",
        "to direct (towards sth)",
        "right"
      ]
    },
    {
      "id": 695,
      "hanzi": "对话",
      "pinyin": "duì huà",
      "translations": [
        "dialog",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 696,
      "hanzi": "对面",
      "pinyin": "duì miàn",
      "translations": [
        "(sitting) opposite",
        "across (the street)",
        "directly in front",
        "to be face to face"
      ]
    },
    {
      "id": 697,
      "hanzi": "顿",
      "pinyin": "dùn",
      "translations": [
        "to stop",
        "to pause",
        "to arrange",
        "to lay out",
        "to kowtow",
        "to stamp (one's foot)",
        "at once",
        "classifier for meals",
        "beatings",
        "scoldings etc: time",
        "bout",
        "spell",
        "meal"
      ]
    },
    {
      "id": 698,
      "hanzi": "朵",
      "pinyin": "duǒ",
      "translations": [
        "flower",
        "earlobe",
        "fig. item on both sides",
        "classifier for flowers",
        "clouds etc"
      ]
    },
    {
      "id": 699,
      "hanzi": "而",
      "pinyin": "ér",
      "translations": [
        "and",
        "as well as",
        "and so",
        "but (not)",
        "yet (not)",
        "(indicates causal relation)",
        "(indicates change of state)",
        "(indicates contrast)"
      ]
    },
    {
      "id": 700,
      "hanzi": "儿童",
      "pinyin": "ér tóng",
      "translations": [
        "child",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 701,
      "hanzi": "发",
      "pinyin": "fā",
      "translations": [
        "to send out",
        "to show (one's feeling)",
        "to issue",
        "to develop",
        "classifier for gunshots (rounds)"
      ]
    },
    {
      "id": 702,
      "hanzi": "发生",
      "pinyin": "fā shēng",
      "translations": [
        "to happen",
        "to occur",
        "to take place",
        "to break out"
      ]
    },
    {
      "id": 703,
      "hanzi": "发展",
      "pinyin": "fā zhǎn",
      "translations": [
        "development",
        "growth",
        "to develop",
        "to grow",
        "to expand"
      ]
    },
    {
      "id": 704,
      "hanzi": "法律",
      "pinyin": "fǎ lǜ",
      "translations": [
        "law",
        "CL:條|条",
        "套",
        "個|个[gè]"
      ]
    },
    {
      "id": 705,
      "hanzi": "翻译",
      "pinyin": "fān yì",
      "translations": [
        "to translate",
        "to interpret",
        "translator",
        "interpreter",
        "translation",
        "interpretation",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 706,
      "hanzi": "烦恼",
      "pinyin": "fán nǎo",
      "translations": [
        "to be worried",
        "to be distressed",
        "worries"
      ]
    },
    {
      "id": 707,
      "hanzi": "反对",
      "pinyin": "fǎn duì",
      "translations": [
        "to fight against",
        "to oppose",
        "to be opposed to",
        "opposition"
      ]
    },
    {
      "id": 708,
      "hanzi": "反映",
      "pinyin": "fǎn yìng",
      "translations": [
        "to mirror",
        "to reflect",
        "mirror image",
        "reflection",
        "fig. to report",
        "to make known",
        "to render",
        "used erroneously for 反應|反应",
        "response or reaction"
      ]
    },
    {
      "id": 709,
      "hanzi": "范围",
      "pinyin": "fàn wéi",
      "translations": [
        "range",
        "scope",
        "limit",
        "extent",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 710,
      "hanzi": "方法",
      "pinyin": "fāng fǎ",
      "translations": [
        "method",
        "way",
        "means",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 711,
      "hanzi": "方面",
      "pinyin": "fāng miàn",
      "translations": [
        "respect",
        "aspect",
        "field",
        "side",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 712,
      "hanzi": "方向",
      "pinyin": "fāng xiàng",
      "translations": [
        "direction",
        "orientation",
        "path to follow",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 713,
      "hanzi": "访问",
      "pinyin": "fǎng wèn",
      "translations": [
        "to visit",
        "to call on",
        "to interview",
        "CL:次[cì]"
      ]
    },
    {
      "id": 714,
      "hanzi": "放弃",
      "pinyin": "fàng qì",
      "translations": [
        "to renounce",
        "to abandon",
        "to give up"
      ]
    },
    {
      "id": 715,
      "hanzi": "放暑假",
      "pinyin": "fàng shǔ jià",
      "translations": [
        "The summer holidays"
      ]
    },
    {
      "id": 716,
      "hanzi": "分之",
      "pinyin": "fēn zhī",
      "translations": [
        "(indicating a fraction)"
      ]
    },
    {
      "id": 717,
      "hanzi": "份",
      "pinyin": "fèn",
      "translations": [
        "classifier for gifts",
        "newspaper",
        "magazine",
        "papers",
        "reports",
        "contracts etc",
        "variant of 分[fèn]"
      ]
    },
    {
      "id": 718,
      "hanzi": "风景",
      "pinyin": "fēng jǐng",
      "translations": [
        "scenery",
        "landscape",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 719,
      "hanzi": "丰富",
      "pinyin": "fēng fù",
      "translations": [
        "to enrich",
        "rich",
        "plentiful",
        "abundant"
      ]
    },
    {
      "id": 720,
      "hanzi": "否则",
      "pinyin": "fǒu zé",
      "translations": [
        "if not",
        "otherwise",
        "else",
        "or else"
      ]
    },
    {
      "id": 721,
      "hanzi": "符合",
      "pinyin": "fú hé",
      "translations": [
        "in keeping with",
        "in accordance with",
        "tallying with",
        "in line with",
        "to agree with",
        "to accord with",
        "to conform to",
        "to correspond with",
        "to manage",
        "to handle"
      ]
    },
    {
      "id": 722,
      "hanzi": "富",
      "pinyin": "fù",
      "translations": [
        "rich",
        "abundant",
        "wealthy"
      ]
    },
    {
      "id": 723,
      "hanzi": "负责",
      "pinyin": "fù zé",
      "translations": [
        "to be in charge of",
        "to take responsibility for",
        "to be to blame",
        "conscientious"
      ]
    },
    {
      "id": 724,
      "hanzi": "复印",
      "pinyin": "fù yìn",
      "translations": [
        "to photocopy",
        "to duplicate a document"
      ]
    },
    {
      "id": 725,
      "hanzi": "复杂",
      "pinyin": "fù zá",
      "translations": [
        "complicated",
        "complex"
      ]
    },
    {
      "id": 726,
      "hanzi": "父亲",
      "pinyin": "fù qīn",
      "translations": [
        "father",
        "also pr. with light tone [fù qin]",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 727,
      "hanzi": "改变",
      "pinyin": "gǎi biàn",
      "translations": [
        "to change",
        "to alter",
        "to transform"
      ]
    },
    {
      "id": 728,
      "hanzi": "干杯",
      "pinyin": "gān bēi",
      "translations": [
        "to drink a toast",
        "Cheers! (proposing a toast)",
        "Here's to you!",
        "Bottoms up!",
        "lit. dry cup"
      ]
    },
    {
      "id": 729,
      "hanzi": "干燥",
      "pinyin": "gān zào",
      "translations": [
        "to dry (of weather, paint, cement etc)",
        "desiccation",
        "dull",
        "uninteresting",
        "arid"
      ]
    },
    {
      "id": 730,
      "hanzi": "感动",
      "pinyin": "gǎn dòng",
      "translations": [
        "to move (sb)",
        "to touch (sb emotionally)",
        "moving"
      ]
    },
    {
      "id": 731,
      "hanzi": "感觉",
      "pinyin": "gǎn jué",
      "translations": [
        "to feel",
        "to become aware of",
        "feeling",
        "sense",
        "perception",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 732,
      "hanzi": "感情",
      "pinyin": "gǎn qíng",
      "translations": [
        "feeling",
        "emotion",
        "sensation",
        "likes and dislikes",
        "deep affection for sb or sth",
        "relationship (i.e. love affair)",
        "CL:個|个",
        "種|种[zhǒng]"
      ]
    },
    {
      "id": 733,
      "hanzi": "感谢",
      "pinyin": "gǎn xiè",
      "translations": [
        "(express) thanks",
        "gratitude",
        "grateful",
        "thankful",
        "thanks"
      ]
    },
    {
      "id": 734,
      "hanzi": "干",
      "pinyin": "gàn",
      "translations": [
        "tree trunk",
        "main part of sth",
        "to manage",
        "to work",
        "to do",
        "capable",
        "cadre",
        "to kill (slang)",
        "to fuck (vulgar)"
      ]
    },
    {
      "id": 735,
      "hanzi": "刚刚",
      "pinyin": "gāng gang",
      "translations": [
        "just recently",
        "just a moment ago"
      ]
    },
    {
      "id": 736,
      "hanzi": "高级",
      "pinyin": "gāo jí",
      "translations": [
        "high level",
        "high grade",
        "advanced",
        "high-ranking"
      ]
    },
    {
      "id": 737,
      "hanzi": "个子",
      "pinyin": "gè zi",
      "translations": [
        "height",
        "stature",
        "build",
        "size"
      ]
    },
    {
      "id": 738,
      "hanzi": "各",
      "pinyin": "gè",
      "translations": [
        "each",
        "every"
      ]
    },
    {
      "id": 739,
      "hanzi": "公里",
      "pinyin": "gōng lǐ",
      "translations": [
        "kilometer"
      ]
    },
    {
      "id": 740,
      "hanzi": "工具",
      "pinyin": "gōng jù",
      "translations": [
        "tool",
        "instrument",
        "utensil",
        "means (to achieve a goal etc)"
      ]
    },
    {
      "id": 741,
      "hanzi": "工资",
      "pinyin": "gōng zī",
      "translations": [
        "wages",
        "pay",
        "CL:個|个",
        "份",
        "月[yuè]"
      ]
    },
    {
      "id": 742,
      "hanzi": "共同",
      "pinyin": "gòng tóng",
      "translations": [
        "common",
        "joint",
        "jointly",
        "together",
        "collaborative"
      ]
    },
    {
      "id": 743,
      "hanzi": "够",
      "pinyin": "gòu",
      "translations": [
        "to reach",
        "to be enough"
      ]
    },
    {
      "id": 744,
      "hanzi": "购物",
      "pinyin": "gòu wù",
      "translations": [
        "shopping"
      ]
    },
    {
      "id": 745,
      "hanzi": "孤单",
      "pinyin": "gū dān",
      "translations": [
        "lone",
        "lonely",
        "loneliness"
      ]
    },
    {
      "id": 746,
      "hanzi": "估计",
      "pinyin": "gū jì",
      "translations": [
        "to estimate",
        "to reckon",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 747,
      "hanzi": "鼓励",
      "pinyin": "gǔ lì",
      "translations": [
        "to encourage"
      ]
    },
    {
      "id": 748,
      "hanzi": "鼓掌",
      "pinyin": "gǔ zhǎng",
      "translations": [
        "to applaud",
        "to clap"
      ]
    },
    {
      "id": 749,
      "hanzi": "顾客",
      "pinyin": "gù kè",
      "translations": [
        "client",
        "customer",
        "CL:位[wèi]"
      ]
    },
    {
      "id": 750,
      "hanzi": "故意",
      "pinyin": "gù yì",
      "translations": [
        "deliberately",
        "on purpose"
      ]
    },
    {
      "id": 751,
      "hanzi": "挂",
      "pinyin": "guà",
      "translations": [
        "to hang or suspend (from a hook etc)",
        "to hang up (the phone)",
        "to be worried or concerned",
        "to make a phone call (topolect)",
        "to register or record",
        "to hitch",
        "classifier for sets or clusters of objects"
      ]
    },
    {
      "id": 752,
      "hanzi": "关键",
      "pinyin": "guān jiàn",
      "translations": [
        "crucial point",
        "crux",
        "CL:個|个[gè]",
        "key",
        "crucial",
        "pivotal"
      ]
    },
    {
      "id": 753,
      "hanzi": "观众",
      "pinyin": "guān zhòng",
      "translations": [
        "spectators",
        "audience",
        "visitors (to an exhibition etc)"
      ]
    },
    {
      "id": 754,
      "hanzi": "管理",
      "pinyin": "guǎn lǐ",
      "translations": [
        "to supervise",
        "to manage",
        "to administer",
        "management",
        "administration",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 755,
      "hanzi": "光",
      "pinyin": "guāng",
      "translations": [
        "light",
        "ray",
        "CL:道[dào]",
        "bright",
        "only",
        "merely",
        "to use up"
      ]
    },
    {
      "id": 756,
      "hanzi": "广播",
      "pinyin": "guǎng bō",
      "translations": [
        "broadcast",
        "CL:個|个[gè]",
        "broadcasting",
        "to broadcast",
        "(formal) to propagate",
        "to publicize"
      ]
    },
    {
      "id": 757,
      "hanzi": "广告",
      "pinyin": "guǎng gào",
      "translations": [
        "to advertise",
        "a commercial",
        "advertisement",
        "CL:項|项[xiàng]"
      ]
    },
    {
      "id": 758,
      "hanzi": "逛",
      "pinyin": "guàng",
      "translations": [
        "to stroll",
        "to visit"
      ]
    },
    {
      "id": 759,
      "hanzi": "规定",
      "pinyin": "guī dìng",
      "translations": [
        "provision",
        "to fix",
        "to set",
        "to formulate",
        "to stipulate",
        "to provide",
        "regulation",
        "rule",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 760,
      "hanzi": "国际",
      "pinyin": "guó jì",
      "translations": [
        "international"
      ]
    },
    {
      "id": 761,
      "hanzi": "果然",
      "pinyin": "guǒ rán",
      "translations": [
        "really",
        "sure enough",
        "as expected",
        "if indeed"
      ]
    },
    {
      "id": 762,
      "hanzi": "过",
      "pinyin": "guò",
      "translations": [
        "(experienced action marker)",
        "to cross",
        "to go over",
        "to pass (time)",
        "to celebrate (a holiday)",
        "to live",
        "to get along",
        "excessively",
        "too-"
      ]
    },
    {
      "id": 763,
      "hanzi": "过",
      "pinyin": "guò",
      "translations": [
        "(experienced action marker)",
        "to cross",
        "to go over",
        "to pass (time)",
        "to celebrate (a holiday)",
        "to live",
        "to get along",
        "excessively",
        "too-"
      ]
    },
    {
      "id": 764,
      "hanzi": "过程",
      "pinyin": "guò chéng",
      "translations": [
        "course of events",
        "process",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 765,
      "hanzi": "海洋",
      "pinyin": "hǎi yáng",
      "translations": [
        "ocean",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 766,
      "hanzi": "害羞",
      "pinyin": "hài xiū",
      "translations": [
        "shy",
        "embarrassed",
        "bashful"
      ]
    },
    {
      "id": 767,
      "hanzi": "寒假",
      "pinyin": "hán jià",
      "translations": [
        "winter vacation"
      ]
    },
    {
      "id": 768,
      "hanzi": "汗",
      "pinyin": "hàn",
      "translations": [
        "perspiration",
        "sweat",
        "CL:滴",
        "頭|头",
        "身[shēn]",
        "to be speechless (out of helplessness, embarrassment etc) (Internet slang used as an interjection)"
      ]
    },
    {
      "id": 769,
      "hanzi": "航班",
      "pinyin": "háng bān",
      "translations": [
        "scheduled flight",
        "flight number",
        "plane",
        "scheduled sailing",
        "sailing number",
        "passenger ship"
      ]
    },
    {
      "id": 770,
      "hanzi": "好处",
      "pinyin": "hǎo chu",
      "translations": [
        "benefit",
        "advantage",
        "gain",
        "profit",
        "also pronounced [hǎo chù]",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 771,
      "hanzi": "好像",
      "pinyin": "hǎo xiàng",
      "translations": [
        "as if",
        "to seem like"
      ]
    },
    {
      "id": 772,
      "hanzi": "号码",
      "pinyin": "hào mǎ",
      "translations": [
        "number",
        "CL:堆",
        "個|个[gè]"
      ]
    },
    {
      "id": 773,
      "hanzi": "合格",
      "pinyin": "hé gé",
      "translations": [
        "qualified",
        "meeting a standard",
        "eligible (voter)"
      ]
    },
    {
      "id": 774,
      "hanzi": "合适",
      "pinyin": "hé shì",
      "translations": [
        "suitable",
        "fitting",
        "decent",
        "to fit"
      ]
    },
    {
      "id": 775,
      "hanzi": "盒子",
      "pinyin": "hé zi",
      "translations": [
        "case"
      ]
    },
    {
      "id": 776,
      "hanzi": "猴子",
      "pinyin": "hóu zi",
      "translations": [
        "monkey",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 777,
      "hanzi": "厚",
      "pinyin": "hòu",
      "translations": [
        "thick",
        "deep or profound",
        "kind",
        "generous",
        "rich or strong in flavor",
        "to favor",
        "to stress"
      ]
    },
    {
      "id": 778,
      "hanzi": "后悔",
      "pinyin": "hòu huǐ",
      "translations": [
        "to regret",
        "to repent"
      ]
    },
    {
      "id": 779,
      "hanzi": "后来",
      "pinyin": "hòu lái",
      "translations": [
        "afterwards",
        "later"
      ]
    },
    {
      "id": 780,
      "hanzi": "忽然",
      "pinyin": "hū rán",
      "translations": [
        "suddenly",
        "all of a sudden"
      ]
    },
    {
      "id": 781,
      "hanzi": "互相",
      "pinyin": "hù xiāng",
      "translations": [
        "each other",
        "mutually",
        "mutual"
      ]
    },
    {
      "id": 782,
      "hanzi": "护士",
      "pinyin": "hù shi",
      "translations": [
        "nurse",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 783,
      "hanzi": "怀疑",
      "pinyin": "huái yí",
      "translations": [
        "to doubt",
        "to suspect",
        "doubt",
        "suspicion",
        "skeptical"
      ]
    },
    {
      "id": 784,
      "hanzi": "回忆",
      "pinyin": "huí yì",
      "translations": [
        "to recall",
        "recollection",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 785,
      "hanzi": "活动",
      "pinyin": "huó dòng",
      "translations": [
        "to exercise",
        "to move about",
        "to operate",
        "activity",
        "loose",
        "shaky",
        "active",
        "movable",
        "maneuver",
        "to use connections",
        "CL:項|项",
        "個|个[gè]"
      ]
    },
    {
      "id": 786,
      "hanzi": "活泼",
      "pinyin": "huó po",
      "translations": [
        "lively",
        "vivacious",
        "brisk",
        "active"
      ]
    },
    {
      "id": 787,
      "hanzi": "火",
      "pinyin": "huǒ",
      "translations": [
        "fire",
        "urgent",
        "ammunition",
        "fiery or flaming",
        "internal heat (Chinese medicine)",
        "hot (popular)",
        "classifier for military units (old)"
      ]
    },
    {
      "id": 788,
      "hanzi": "获得",
      "pinyin": "huò dé",
      "translations": [
        "to obtain",
        "to receive",
        "to get"
      ]
    },
    {
      "id": 789,
      "hanzi": "基础",
      "pinyin": "jī chǔ",
      "translations": [
        "base",
        "foundation",
        "basis",
        "underlying",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 790,
      "hanzi": "激动",
      "pinyin": "jī dòng",
      "translations": [
        "to excite",
        "to agitate",
        "exciting"
      ]
    },
    {
      "id": 791,
      "hanzi": "积极",
      "pinyin": "jī jí",
      "translations": [
        "active",
        "energetic",
        "vigorous",
        "positive (outlook)",
        "proactive"
      ]
    },
    {
      "id": 792,
      "hanzi": "积累",
      "pinyin": "jī lěi",
      "translations": [
        "to accumulate",
        "accumulation",
        "cumulative",
        "cumulatively"
      ]
    },
    {
      "id": 793,
      "hanzi": "极其",
      "pinyin": "jí qí",
      "translations": [
        "extremely"
      ]
    },
    {
      "id": 794,
      "hanzi": "即使",
      "pinyin": "jí shǐ",
      "translations": [
        "even if",
        "even though",
        "given that"
      ]
    },
    {
      "id": 795,
      "hanzi": "及时",
      "pinyin": "jí shí",
      "translations": [
        "in time",
        "promptly",
        "without delay",
        "timely"
      ]
    },
    {
      "id": 796,
      "hanzi": "集合",
      "pinyin": "jí hé",
      "translations": [
        "to gather",
        "to assemble",
        "set (mathematics)"
      ]
    },
    {
      "id": 797,
      "hanzi": "寄",
      "pinyin": "jì",
      "translations": [
        "to live (in a house)",
        "to lodge",
        "to mail",
        "to send",
        "to entrust",
        "to depend"
      ]
    },
    {
      "id": 798,
      "hanzi": "继续",
      "pinyin": "jì xù",
      "translations": [
        "to continue",
        "to proceed with",
        "to go on with"
      ]
    },
    {
      "id": 799,
      "hanzi": "记者",
      "pinyin": "jì zhě",
      "translations": [
        "reporter",
        "journalist",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 800,
      "hanzi": "计划",
      "pinyin": "jì huà",
      "translations": [
        "plan",
        "project",
        "program",
        "to plan",
        "to map out",
        "CL:個|个",
        "項|项[xiàng]"
      ]
    },
    {
      "id": 801,
      "hanzi": "技术",
      "pinyin": "jì shù",
      "translations": [
        "technology",
        "technique",
        "skill",
        "CL:門|门",
        "種|种",
        "項|项[xiàng]"
      ]
    },
    {
      "id": 802,
      "hanzi": "既然",
      "pinyin": "jì rán",
      "translations": [
        "since",
        "as",
        "this being the case"
      ]
    },
    {
      "id": 803,
      "hanzi": "家具",
      "pinyin": "jiā jù",
      "translations": [
        "furniture",
        "CL:件",
        "套[tào]"
      ]
    },
    {
      "id": 804,
      "hanzi": "加班",
      "pinyin": "jiā bān",
      "translations": [
        "to work overtime"
      ]
    },
    {
      "id": 805,
      "hanzi": "加油站",
      "pinyin": "jiā yóu zhàn",
      "translations": [
        "gas station"
      ]
    },
    {
      "id": 806,
      "hanzi": "假",
      "pinyin": "jiǎ",
      "translations": [
        "fake",
        "false",
        "artificial",
        "to borrow",
        "if",
        "suppose"
      ]
    },
    {
      "id": 807,
      "hanzi": "价格",
      "pinyin": "jià gé",
      "translations": [
        "price",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 808,
      "hanzi": "坚持",
      "pinyin": "jiān chí",
      "translations": [
        "to persevere with",
        "to persist in",
        "to insist on"
      ]
    },
    {
      "id": 809,
      "hanzi": "减肥",
      "pinyin": "jiǎn féi",
      "translations": [
        "to lose weight"
      ]
    },
    {
      "id": 810,
      "hanzi": "减少",
      "pinyin": "jiǎn shǎo",
      "translations": [
        "to lessen",
        "to decrease",
        "to reduce",
        "to lower"
      ]
    },
    {
      "id": 811,
      "hanzi": "将来",
      "pinyin": "jiāng lái",
      "translations": [
        "in the future",
        "future",
        "the future",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 812,
      "hanzi": "奖金",
      "pinyin": "jiǎng jīn",
      "translations": [
        "premium",
        "award money",
        "a bonus"
      ]
    },
    {
      "id": 813,
      "hanzi": "降低",
      "pinyin": "jiàng dī",
      "translations": [
        "to reduce",
        "to lower",
        "to bring down"
      ]
    },
    {
      "id": 814,
      "hanzi": "交",
      "pinyin": "jiāo",
      "translations": [
        "to hand over",
        "to deliver",
        "to pay (money)",
        "to turn over",
        "to make friends",
        "to intersect (lines)"
      ]
    },
    {
      "id": 815,
      "hanzi": "交流",
      "pinyin": "jiāo liú",
      "translations": [
        "to exchange",
        "exchange",
        "communication",
        "interaction",
        "to have social contact (with sb)"
      ]
    },
    {
      "id": 816,
      "hanzi": "交通",
      "pinyin": "jiāo tōng",
      "translations": [
        "to be connected",
        "traffic",
        "transportation",
        "communications",
        "liaison"
      ]
    },
    {
      "id": 817,
      "hanzi": "骄傲",
      "pinyin": "jiāo ào",
      "translations": [
        "pride",
        "arrogance",
        "conceited",
        "proud of sth"
      ]
    },
    {
      "id": 818,
      "hanzi": "饺子",
      "pinyin": "jiǎo zi",
      "translations": [
        "dumpling",
        "pot-sticker",
        "CL:個|个",
        "隻|只[zhī]"
      ]
    },
    {
      "id": 819,
      "hanzi": "教授",
      "pinyin": "jiào shòu",
      "translations": [
        "professor",
        "to instruct",
        "to lecture on",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 820,
      "hanzi": "教育",
      "pinyin": "jiào yù",
      "translations": [
        "to educate",
        "to teach",
        "education"
      ]
    },
    {
      "id": 821,
      "hanzi": "接受",
      "pinyin": "jiē shòu",
      "translations": [
        "to accept",
        "to receive"
      ]
    },
    {
      "id": 822,
      "hanzi": "节约",
      "pinyin": "jié yuē",
      "translations": [
        "to economize",
        "to conserve (resources)",
        "economy",
        "frugal"
      ]
    },
    {
      "id": 823,
      "hanzi": "结果",
      "pinyin": "jié guǒ",
      "translations": [
        "outcome",
        "result",
        "conclusion",
        "in the end",
        "as a result",
        "to kill",
        "to dispatch"
      ]
    },
    {
      "id": 824,
      "hanzi": "解释",
      "pinyin": "jiě shì",
      "translations": [
        "explanation",
        "to explain",
        "to interpret",
        "to resolve",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 825,
      "hanzi": "紧张",
      "pinyin": "jǐn zhāng",
      "translations": [
        "nervous",
        "keyed up",
        "intense",
        "tense",
        "strained",
        "in short supply",
        "scarce",
        "CL:陣|阵[zhèn]"
      ]
    },
    {
      "id": 826,
      "hanzi": "尽管",
      "pinyin": "jǐn guǎn",
      "translations": [
        "despite",
        "although",
        "even though",
        "in spite of",
        "unhesitatingly",
        "do not hesitate (to ask, complain etc)",
        "(go ahead and do it) without hesitating"
      ]
    },
    {
      "id": 827,
      "hanzi": "进行",
      "pinyin": "jìn xíng",
      "translations": [
        "to advance",
        "to conduct",
        "underway",
        "in progress",
        "to do",
        "to carry out",
        "to carry on",
        "to execute"
      ]
    },
    {
      "id": 828,
      "hanzi": "禁止",
      "pinyin": "jìn zhǐ",
      "translations": [
        "to prohibit",
        "to forbid",
        "to ban"
      ]
    },
    {
      "id": 829,
      "hanzi": "精彩",
      "pinyin": "jīng cǎi",
      "translations": [
        "brilliant",
        "splendid"
      ]
    },
    {
      "id": 830,
      "hanzi": "精神",
      "pinyin": "jīng shén",
      "translations": [
        "spirit",
        "mind",
        "consciousness",
        "thought",
        "mental",
        "psychological",
        "essence",
        "gist",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 831,
      "hanzi": "经济",
      "pinyin": "jīng jì",
      "translations": [
        "economy",
        "economic"
      ]
    },
    {
      "id": 832,
      "hanzi": "经历",
      "pinyin": "jīng lì",
      "translations": [
        "experience",
        "CL:個|个",
        "次[cì]",
        "to experience",
        "to go through"
      ]
    },
    {
      "id": 833,
      "hanzi": "经验",
      "pinyin": "jīng yàn",
      "translations": [
        "to experience",
        "experience"
      ]
    },
    {
      "id": 834,
      "hanzi": "京剧",
      "pinyin": "Jīng jù",
      "translations": [
        "Beijing opera",
        "CL:場|场",
        "出[chū]"
      ]
    },
    {
      "id": 835,
      "hanzi": "警察",
      "pinyin": "jǐng chá",
      "translations": [
        "police",
        "policeman",
        "policewoman",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 836,
      "hanzi": "竟然",
      "pinyin": "jìng rán",
      "translations": [
        "unexpectedly",
        "to one's surprise",
        "in spite of everything",
        "in that crazy way",
        "actually",
        "to go as far as to"
      ]
    },
    {
      "id": 837,
      "hanzi": "竞争",
      "pinyin": "jìng zhēng",
      "translations": [
        "to compete",
        "competition"
      ]
    },
    {
      "id": 838,
      "hanzi": "镜子",
      "pinyin": "jìng zi",
      "translations": [
        "mirror",
        "CL:面",
        "個|个[gè]"
      ]
    },
    {
      "id": 839,
      "hanzi": "究竟",
      "pinyin": "jiū jìng",
      "translations": [
        "after all (when all is said and done)",
        "actually",
        "outcome",
        "result"
      ]
    },
    {
      "id": 840,
      "hanzi": "举办",
      "pinyin": "jǔ bàn",
      "translations": [
        "to conduct",
        "to hold"
      ]
    },
    {
      "id": 841,
      "hanzi": "拒绝",
      "pinyin": "jù jué",
      "translations": [
        "to refuse",
        "to decline",
        "to reject"
      ]
    },
    {
      "id": 842,
      "hanzi": "距离",
      "pinyin": "jù lí",
      "translations": [
        "distance",
        "to be apart",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 843,
      "hanzi": "开玩笑",
      "pinyin": "kāi wán xiào",
      "translations": [
        "to play a joke",
        "to make fun of",
        "to joke"
      ]
    },
    {
      "id": 844,
      "hanzi": "看法",
      "pinyin": "kàn fǎ",
      "translations": [
        "way of looking at a thing",
        "view",
        "opinion",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 845,
      "hanzi": "考虑",
      "pinyin": "kǎo lǜ",
      "translations": [
        "to think over",
        "to consider",
        "consideration"
      ]
    },
    {
      "id": 846,
      "hanzi": "棵",
      "pinyin": "kē",
      "translations": [
        "classifier for trees",
        "cabbages",
        "plants etc"
      ]
    },
    {
      "id": 847,
      "hanzi": "科学",
      "pinyin": "kē xué",
      "translations": [
        "science",
        "scientific knowledge",
        "scientific",
        "CL:門|门",
        "個|个",
        "種|种[zhǒng]"
      ]
    },
    {
      "id": 848,
      "hanzi": "咳嗽",
      "pinyin": "ké sou",
      "translations": [
        "to cough",
        "CL:陣|阵[zhèn]"
      ]
    },
    {
      "id": 849,
      "hanzi": "可怜",
      "pinyin": "kě lián",
      "translations": [
        "pitiful",
        "pathetic",
        "to have pity on"
      ]
    },
    {
      "id": 850,
      "hanzi": "可是",
      "pinyin": "kě shì",
      "translations": [
        "but",
        "however"
      ]
    },
    {
      "id": 851,
      "hanzi": "可惜",
      "pinyin": "kě xī",
      "translations": [
        "it is a pity",
        "what a pity",
        "unfortunately"
      ]
    },
    {
      "id": 852,
      "hanzi": "肯定",
      "pinyin": "kěn dìng",
      "translations": [
        "to be sure",
        "to be certain",
        "sure",
        "certain",
        "definite",
        "to confirm",
        "to affirm",
        "affirmative",
        "to approve",
        "approval",
        "recognition"
      ]
    },
    {
      "id": 853,
      "hanzi": "空气",
      "pinyin": "kōng qì",
      "translations": [
        "air",
        "atmosphere"
      ]
    },
    {
      "id": 854,
      "hanzi": "恐怕",
      "pinyin": "kǒng pà",
      "translations": [
        "fear",
        "to dread",
        "I'm afraid that...",
        "perhaps",
        "maybe"
      ]
    },
    {
      "id": 855,
      "hanzi": "苦",
      "pinyin": "kǔ",
      "translations": [
        "bitter",
        "hardship",
        "pain",
        "to suffer",
        "to bring suffering to",
        "painstakingly"
      ]
    },
    {
      "id": 856,
      "hanzi": "宽",
      "pinyin": "kuān",
      "translations": [
        "lenient",
        "wide",
        "broad"
      ]
    },
    {
      "id": 857,
      "hanzi": "困",
      "pinyin": "kùn",
      "translations": [
        "sleepy",
        "tired"
      ]
    },
    {
      "id": 858,
      "hanzi": "困难",
      "pinyin": "kùn nan",
      "translations": [
        "difficult",
        "challenging",
        "straitened circumstances",
        "difficult situation"
      ]
    },
    {
      "id": 859,
      "hanzi": "扩大",
      "pinyin": "kuò dà",
      "translations": [
        "to expand",
        "to enlarge",
        "to broaden one's scope"
      ]
    },
    {
      "id": 860,
      "hanzi": "拉",
      "pinyin": "lā",
      "translations": [
        "to pull",
        "to play (a bowed instrument)",
        "to drag",
        "to draw",
        "to chat"
      ]
    },
    {
      "id": 861,
      "hanzi": "垃圾桶",
      "pinyin": "lā jī tǒng",
      "translations": [
        "rubbish bin",
        "Taiwan pr. [lè sè tǒng]"
      ]
    },
    {
      "id": 862,
      "hanzi": "辣",
      "pinyin": "là",
      "translations": [
        "hot (spicy)",
        "pungent"
      ]
    },
    {
      "id": 863,
      "hanzi": "来不及",
      "pinyin": "lái bu jí",
      "translations": [
        "there's not enough time (to do sth)",
        "it's too late (to do sth)"
      ]
    },
    {
      "id": 864,
      "hanzi": "来得及",
      "pinyin": "lái de jí",
      "translations": [
        "there's still time",
        "able to do sth in time"
      ]
    },
    {
      "id": 865,
      "hanzi": "懒",
      "pinyin": "lǎn",
      "translations": [
        "lazy"
      ]
    },
    {
      "id": 866,
      "hanzi": "浪费",
      "pinyin": "làng fèi",
      "translations": [
        "to waste",
        "to squander"
      ]
    },
    {
      "id": 867,
      "hanzi": "浪漫",
      "pinyin": "làng màn",
      "translations": [
        "romantic"
      ]
    },
    {
      "id": 868,
      "hanzi": "老虎",
      "pinyin": "lǎo hǔ",
      "translations": [
        "tiger",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 869,
      "hanzi": "冷静",
      "pinyin": "lěng jìng",
      "translations": [
        "calm",
        "cool-headed"
      ]
    },
    {
      "id": 870,
      "hanzi": "礼貌",
      "pinyin": "lǐ mào",
      "translations": [
        "courtesy",
        "manners"
      ]
    },
    {
      "id": 871,
      "hanzi": "理发",
      "pinyin": "lǐ fà",
      "translations": [
        "a barber",
        "hairdressing"
      ]
    },
    {
      "id": 872,
      "hanzi": "理解",
      "pinyin": "lǐ jiě",
      "translations": [
        "to comprehend",
        "to understand",
        "comprehension",
        "understanding"
      ]
    },
    {
      "id": 873,
      "hanzi": "理想",
      "pinyin": "lǐ xiǎng",
      "translations": [
        "a dream",
        "an ideal",
        "perfection",
        "ideal",
        "perfect",
        "desirable",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 874,
      "hanzi": "厉害",
      "pinyin": "lì hai",
      "translations": [
        "difficult to deal with",
        "difficult to endure",
        "ferocious",
        "radical",
        "serious",
        "terrible",
        "violent",
        "tremendous",
        "awesome"
      ]
    },
    {
      "id": 875,
      "hanzi": "力气",
      "pinyin": "lì qi",
      "translations": [
        "strength",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 876,
      "hanzi": "例如",
      "pinyin": "lì rú",
      "translations": [
        "for example",
        "for instance",
        "such as"
      ]
    },
    {
      "id": 877,
      "hanzi": "俩",
      "pinyin": "liǎ",
      "translations": [
        "two (colloquial equivalent of 兩個|两个)",
        "both",
        "some"
      ]
    },
    {
      "id": 878,
      "hanzi": "连",
      "pinyin": "lián",
      "translations": [
        "to link",
        "to join",
        "to connect",
        "continuously",
        "in succession",
        "including",
        "(used with 也, 都 etc) even",
        "company (military)"
      ]
    },
    {
      "id": 879,
      "hanzi": "联系",
      "pinyin": "lián xì",
      "translations": [
        "connection",
        "contact",
        "relation",
        "to get in touch with",
        "to integrate",
        "to link",
        "to touch"
      ]
    },
    {
      "id": 880,
      "hanzi": "凉快",
      "pinyin": "liáng kuai",
      "translations": [
        "nice and cold",
        "pleasantly cool"
      ]
    },
    {
      "id": 881,
      "hanzi": "亮",
      "pinyin": "liàng",
      "translations": [
        "bright",
        "clear",
        "resonant",
        "to shine",
        "to show",
        "to reveal"
      ]
    },
    {
      "id": 882,
      "hanzi": "聊天",
      "pinyin": "liáo tiān",
      "translations": [
        "to chat",
        "to gossip"
      ]
    },
    {
      "id": 883,
      "hanzi": "另外",
      "pinyin": "lìng wài",
      "translations": [
        "additional",
        "in addition",
        "besides",
        "separate",
        "other",
        "moreover",
        "furthermore"
      ]
    },
    {
      "id": 884,
      "hanzi": "留",
      "pinyin": "liú",
      "translations": [
        "to leave (a message etc)",
        "to retain",
        "to stay",
        "to remain",
        "to keep",
        "to preserve"
      ]
    },
    {
      "id": 885,
      "hanzi": "留学",
      "pinyin": "liú xué",
      "translations": [
        "to study abroad"
      ]
    },
    {
      "id": 886,
      "hanzi": "流泪",
      "pinyin": "liú lèi",
      "translations": [
        "to shed tears"
      ]
    },
    {
      "id": 887,
      "hanzi": "流利",
      "pinyin": "liú lì",
      "translations": [
        "fluent"
      ]
    },
    {
      "id": 888,
      "hanzi": "流行",
      "pinyin": "liú xíng",
      "translations": [
        "to spread",
        "to rage (of contagious disease)",
        "popular",
        "fashionable",
        "prevalent",
        "(math.) manifold"
      ]
    },
    {
      "id": 889,
      "hanzi": "乱",
      "pinyin": "luàn",
      "translations": [
        "in confusion or disorder",
        "in a confused state of mind",
        "disorder",
        "upheaval",
        "riot",
        "illicit sexual relations",
        "to throw into disorder",
        "to mix up",
        "indiscriminate",
        "random",
        "arbitrary"
      ]
    },
    {
      "id": 890,
      "hanzi": "律师",
      "pinyin": "lǜ shī",
      "translations": [
        "lawyer"
      ]
    },
    {
      "id": 891,
      "hanzi": "麻烦",
      "pinyin": "má fan",
      "translations": [
        "inconvenient",
        "troublesome",
        "annoying",
        "to trouble or bother sb",
        "to put sb to trouble"
      ]
    },
    {
      "id": 892,
      "hanzi": "马虎",
      "pinyin": "mǎ hu",
      "translations": [
        "careless",
        "sloppy",
        "negligent",
        "skimpy"
      ]
    },
    {
      "id": 893,
      "hanzi": "满",
      "pinyin": "mǎn",
      "translations": [
        "full",
        "filled",
        "packed",
        "fully",
        "completely",
        "quite",
        "to reach the limit",
        "to satisfy",
        "satisfied",
        "contented",
        "to fill",
        "abbr. for Manchurian"
      ]
    },
    {
      "id": 894,
      "hanzi": "毛巾",
      "pinyin": "máo jīn",
      "translations": [
        "towel",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 895,
      "hanzi": "美丽",
      "pinyin": "měi lì",
      "translations": [
        "beautiful"
      ]
    },
    {
      "id": 896,
      "hanzi": "梦",
      "pinyin": "mèng",
      "translations": [
        "dream",
        "CL:場|场",
        "個|个[gè]"
      ]
    },
    {
      "id": 897,
      "hanzi": "密码",
      "pinyin": "mì mǎ",
      "translations": [
        "code",
        "secret code",
        "password",
        "pin number"
      ]
    },
    {
      "id": 898,
      "hanzi": "免费",
      "pinyin": "miǎn fèi",
      "translations": [
        "free (of charge)"
      ]
    },
    {
      "id": 899,
      "hanzi": "民族",
      "pinyin": "mín zú",
      "translations": [
        "nationality",
        "ethnic group",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 900,
      "hanzi": "母亲",
      "pinyin": "mǔ qīn",
      "translations": [
        "mother",
        "also pr. with light tone [mǔ qin]",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 901,
      "hanzi": "目的",
      "pinyin": "mù dì",
      "translations": [
        "purpose",
        "aim",
        "goal",
        "target",
        "objective",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 902,
      "hanzi": "耐心",
      "pinyin": "nài xīn",
      "translations": [
        "to be patient",
        "patience"
      ]
    },
    {
      "id": 903,
      "hanzi": "难道",
      "pinyin": "nán dào",
      "translations": [
        "don't tell me ...",
        "could it be that...?"
      ]
    },
    {
      "id": 904,
      "hanzi": "难受",
      "pinyin": "nán shòu",
      "translations": [
        "to feel unwell",
        "to suffer pain",
        "to be difficult to bear"
      ]
    },
    {
      "id": 905,
      "hanzi": "内",
      "pinyin": "nèi",
      "translations": [
        "inside",
        "inner",
        "internal",
        "within",
        "interior"
      ]
    },
    {
      "id": 906,
      "hanzi": "内容",
      "pinyin": "nèi róng",
      "translations": [
        "content",
        "substance",
        "details",
        "CL:個|个",
        "項|项[xiàng]"
      ]
    },
    {
      "id": 907,
      "hanzi": "能力",
      "pinyin": "néng lì",
      "translations": [
        "capability",
        "capable",
        "able",
        "ability",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 908,
      "hanzi": "年龄",
      "pinyin": "nián líng",
      "translations": [
        "(a person's) age",
        "CL:把",
        "個|个[gè]"
      ]
    },
    {
      "id": 909,
      "hanzi": "农村",
      "pinyin": "nóng cūn",
      "translations": [
        "rural area",
        "village",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 910,
      "hanzi": "弄",
      "pinyin": "nòng",
      "translations": [
        "to do",
        "to manage",
        "to handle",
        "to play with",
        "to fool with",
        "to mess with",
        "to fix",
        "to toy with"
      ]
    },
    {
      "id": 911,
      "hanzi": "暖和",
      "pinyin": "nuǎn huo",
      "translations": [
        "warm",
        "nice and warm"
      ]
    },
    {
      "id": 912,
      "hanzi": "偶尔",
      "pinyin": "ǒu ěr",
      "translations": [
        "occasionally",
        "once in a while",
        "sometimes"
      ]
    },
    {
      "id": 913,
      "hanzi": "排列",
      "pinyin": "pái liè",
      "translations": [
        "array",
        "arrangement",
        "permutation (i.e. ordered choice of n elements out of m)"
      ]
    },
    {
      "id": 914,
      "hanzi": "判断",
      "pinyin": "pàn duàn",
      "translations": [
        "to decide",
        "to determine",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 915,
      "hanzi": "陪",
      "pinyin": "péi",
      "translations": [
        "to accompany",
        "to keep sb company",
        "to assist",
        "old variant of 賠|赔[péi]"
      ]
    },
    {
      "id": 916,
      "hanzi": "批评",
      "pinyin": "pī píng",
      "translations": [
        "to criticize",
        "criticism",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 917,
      "hanzi": "皮肤",
      "pinyin": "pí fū",
      "translations": [
        "skin",
        "CL:層|层",
        "塊|块[kuài]"
      ]
    },
    {
      "id": 918,
      "hanzi": "脾气",
      "pinyin": "pí qi",
      "translations": [
        "character",
        "temperament",
        "disposition",
        "bad temper",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 919,
      "hanzi": "篇",
      "pinyin": "piān",
      "translations": [
        "sheet",
        "piece of writing",
        "bound set of bamboo slips used for record keeping (old)",
        "classifier for written items: chapter",
        "article"
      ]
    },
    {
      "id": 920,
      "hanzi": "骗",
      "pinyin": "piàn",
      "translations": [
        "to cheat",
        "to swindle",
        "to deceive",
        "to fool",
        "to hoodwink",
        "to trick"
      ]
    },
    {
      "id": 921,
      "hanzi": "乒乓球",
      "pinyin": "pīng pāng qiú",
      "translations": [
        "table tennis",
        "ping-pong",
        "ping pong",
        "table tennis ball",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 922,
      "hanzi": "平时",
      "pinyin": "píng shí",
      "translations": [
        "ordinarily",
        "in normal times",
        "in peacetime"
      ]
    },
    {
      "id": 923,
      "hanzi": "瓶子",
      "pinyin": "píng zi",
      "translations": [
        "bottle",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 924,
      "hanzi": "破",
      "pinyin": "pò",
      "translations": [
        "broken",
        "damaged",
        "worn out",
        "to break",
        "split or cleave",
        "to get rid of",
        "to destroy",
        "to break with",
        "to defeat",
        "to capture (a city etc)",
        "to expose the truth of"
      ]
    },
    {
      "id": 925,
      "hanzi": "普遍",
      "pinyin": "pǔ biàn",
      "translations": [
        "universal",
        "general",
        "widespread",
        "common"
      ]
    },
    {
      "id": 926,
      "hanzi": "其次",
      "pinyin": "qí cì",
      "translations": [
        "next",
        "secondly"
      ]
    },
    {
      "id": 927,
      "hanzi": "其中",
      "pinyin": "qí zhōng",
      "translations": [
        "among",
        "in",
        "included among these"
      ]
    },
    {
      "id": 928,
      "hanzi": "起飞",
      "pinyin": "qǐ fēi",
      "translations": [
        "to take off (in an airplane)"
      ]
    },
    {
      "id": 929,
      "hanzi": "起来",
      "pinyin": "qi lai",
      "translations": [
        "(after a verb, indicates beginning or completeness)"
      ]
    },
    {
      "id": 930,
      "hanzi": "气候",
      "pinyin": "qì hòu",
      "translations": [
        "climate",
        "atmosphere",
        "situation",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 931,
      "hanzi": "千万",
      "pinyin": "qiān wàn",
      "translations": [
        "ten million",
        "countless",
        "many",
        "one must by all means"
      ]
    },
    {
      "id": 932,
      "hanzi": "签证",
      "pinyin": "qiān zhèng",
      "translations": [
        "visa",
        "certificate",
        "to certify",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 933,
      "hanzi": "墙",
      "pinyin": "qiáng",
      "translations": [
        "wall",
        "CL:面",
        "堵[dǔ]"
      ]
    },
    {
      "id": 934,
      "hanzi": "敲",
      "pinyin": "qiāo",
      "translations": [
        "to hit",
        "to strike",
        "to tap",
        "to rap",
        "to knock",
        "to rip sb off",
        "to overcharge"
      ]
    },
    {
      "id": 935,
      "hanzi": "桥",
      "pinyin": "qiáo",
      "translations": [
        "bridge",
        "CL:座[zuò]"
      ]
    },
    {
      "id": 936,
      "hanzi": "巧克力",
      "pinyin": "qiǎo kè lì",
      "translations": [
        "chocolate (loanword)",
        "CL:塊|块[kuài]"
      ]
    },
    {
      "id": 937,
      "hanzi": "亲戚",
      "pinyin": "qīn qi",
      "translations": [
        "a relative (i.e. family relation)",
        "CL:門|门",
        "個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 938,
      "hanzi": "轻",
      "pinyin": "qīng",
      "translations": [
        "light",
        "easy",
        "gentle",
        "soft",
        "reckless",
        "unimportant",
        "frivolous",
        "small in number",
        "unstressed",
        "neutral",
        "to disparage"
      ]
    },
    {
      "id": 939,
      "hanzi": "轻松",
      "pinyin": "qīng sōng",
      "translations": [
        "gentle",
        "relaxed"
      ]
    },
    {
      "id": 940,
      "hanzi": "情况",
      "pinyin": "qíng kuàng",
      "translations": [
        "circumstances",
        "state of affairs",
        "situation",
        "CL:個|个",
        "種|种[zhǒng]"
      ]
    },
    {
      "id": 941,
      "hanzi": "请假",
      "pinyin": "qǐng jià",
      "translations": [
        "to request leave of absence"
      ]
    },
    {
      "id": 942,
      "hanzi": "请客",
      "pinyin": "qǐng kè",
      "translations": [
        "to give a dinner party",
        "to entertain guests",
        "to invite to dinner"
      ]
    },
    {
      "id": 943,
      "hanzi": "穷",
      "pinyin": "qióng",
      "translations": [
        "exhausted",
        "poor"
      ]
    },
    {
      "id": 944,
      "hanzi": "区别",
      "pinyin": "qū bié",
      "translations": [
        "difference",
        "to distinguish",
        "to discriminate",
        "to make a distinction",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 945,
      "hanzi": "取",
      "pinyin": "qǔ",
      "translations": [
        "to take",
        "to get",
        "to choose",
        "to fetch"
      ]
    },
    {
      "id": 946,
      "hanzi": "全部",
      "pinyin": "quán bù",
      "translations": [
        "whole",
        "entire",
        "complete"
      ]
    },
    {
      "id": 947,
      "hanzi": "缺点",
      "pinyin": "quē diǎn",
      "translations": [
        "weak point",
        "fault",
        "shortcoming",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 948,
      "hanzi": "缺少",
      "pinyin": "quē shǎo",
      "translations": [
        "lack",
        "shortage of",
        "shortfall",
        "to be short (of)",
        "to lack"
      ]
    },
    {
      "id": 949,
      "hanzi": "却",
      "pinyin": "què",
      "translations": [
        "but",
        "yet",
        "however",
        "while",
        "to go back",
        "to decline",
        "to retreat",
        "nevertheless",
        "even though"
      ]
    },
    {
      "id": 950,
      "hanzi": "确实",
      "pinyin": "què shí",
      "translations": [
        "indeed",
        "really",
        "reliable",
        "real",
        "true"
      ]
    },
    {
      "id": 951,
      "hanzi": "群",
      "pinyin": "qún",
      "translations": [
        "group",
        "crowd",
        "flock",
        "herd",
        "pack etc"
      ]
    },
    {
      "id": 952,
      "hanzi": "然而",
      "pinyin": "rán ér",
      "translations": [
        "however",
        "yet",
        "but"
      ]
    },
    {
      "id": 953,
      "hanzi": "热闹",
      "pinyin": "rè nao",
      "translations": [
        "bustling with noise and excitement",
        "lively"
      ]
    },
    {
      "id": 954,
      "hanzi": "人民币",
      "pinyin": "rén mín bì",
      "translations": [
        "Renminbi (RMB)",
        "Chinese Yuan (CNY)"
      ]
    },
    {
      "id": 955,
      "hanzi": "任何",
      "pinyin": "rèn hé",
      "translations": [
        "any",
        "whatever",
        "whichever",
        "whatsoever"
      ]
    },
    {
      "id": 956,
      "hanzi": "任务",
      "pinyin": "rèn wu",
      "translations": [
        "mission",
        "assignment",
        "task",
        "duty",
        "role",
        "CL:項|项",
        "個|个[gè]"
      ]
    },
    {
      "id": 957,
      "hanzi": "扔",
      "pinyin": "rēng",
      "translations": [
        "to throw",
        "to throw away"
      ]
    },
    {
      "id": 958,
      "hanzi": "仍然",
      "pinyin": "réng rán",
      "translations": [
        "still",
        "yet"
      ]
    },
    {
      "id": 959,
      "hanzi": "日记",
      "pinyin": "rì jì",
      "translations": [
        "diary",
        "CL:則|则",
        "本",
        "篇[piān]"
      ]
    },
    {
      "id": 960,
      "hanzi": "入口",
      "pinyin": "rù kǒu",
      "translations": [
        "entrance"
      ]
    },
    {
      "id": 961,
      "hanzi": "软",
      "pinyin": "ruǎn",
      "translations": [
        "soft",
        "flexible"
      ]
    },
    {
      "id": 962,
      "hanzi": "散步",
      "pinyin": "sàn bù",
      "translations": [
        "to take a walk",
        "to go for a walk"
      ]
    },
    {
      "id": 963,
      "hanzi": "森林",
      "pinyin": "sēn lín",
      "translations": [
        "forest",
        "CL:片[piàn]"
      ]
    },
    {
      "id": 964,
      "hanzi": "沙发",
      "pinyin": "shā fā",
      "translations": [
        "sofa",
        "CL:條|条",
        "張|张[zhāng]"
      ]
    },
    {
      "id": 965,
      "hanzi": "商量",
      "pinyin": "shāng liang",
      "translations": [
        "to consult",
        "to talk over",
        "to discuss"
      ]
    },
    {
      "id": 966,
      "hanzi": "伤心",
      "pinyin": "shāng xīn",
      "translations": [
        "to grieve",
        "to be broken-hearted",
        "to feel deeply hurt"
      ]
    },
    {
      "id": 967,
      "hanzi": "稍微",
      "pinyin": "shāo wēi",
      "translations": [
        "a little bit"
      ]
    },
    {
      "id": 968,
      "hanzi": "社会",
      "pinyin": "shè huì",
      "translations": [
        "society",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 969,
      "hanzi": "深",
      "pinyin": "shēn",
      "translations": [
        "close",
        "deep",
        "late",
        "profound",
        "dark (of color, water etc)"
      ]
    },
    {
      "id": 970,
      "hanzi": "申请",
      "pinyin": "shēn qǐng",
      "translations": [
        "to apply for sth",
        "application (form etc)",
        "CL:份[fèn]"
      ]
    },
    {
      "id": 971,
      "hanzi": "甚至",
      "pinyin": "shèn zhì",
      "translations": [
        "even",
        "so much so that"
      ]
    },
    {
      "id": 972,
      "hanzi": "生活",
      "pinyin": "shēng huó",
      "translations": [
        "life",
        "activity",
        "to live",
        "livelihood"
      ]
    },
    {
      "id": 973,
      "hanzi": "生命",
      "pinyin": "shēng mìng",
      "translations": [
        "life",
        "living",
        "biological",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 974,
      "hanzi": "省",
      "pinyin": "shěng",
      "translations": [
        "to save",
        "to economize",
        "to do without",
        "to omit",
        "to leave out",
        "province",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 975,
      "hanzi": "剩",
      "pinyin": "shèng",
      "translations": [
        "to remain",
        "to be left",
        "to have as remainder"
      ]
    },
    {
      "id": 976,
      "hanzi": "失败",
      "pinyin": "shī bài",
      "translations": [
        "to be defeated",
        "to lose",
        "to fail (e.g. experiments)",
        "failure",
        "defeat",
        "CL:次[cì]"
      ]
    },
    {
      "id": 977,
      "hanzi": "失望",
      "pinyin": "shī wàng",
      "translations": [
        "disappointed",
        "to lose hope",
        "to despair"
      ]
    },
    {
      "id": 978,
      "hanzi": "师傅",
      "pinyin": "shī fu",
      "translations": [
        "master",
        "qualified worker",
        "respectful form of address for older men",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 979,
      "hanzi": "湿润",
      "pinyin": "shī rùn",
      "translations": [
        "moist"
      ]
    },
    {
      "id": 980,
      "hanzi": "狮子",
      "pinyin": "shī zi",
      "translations": [
        "lion",
        "CL:隻|只",
        "頭|头[tóu]",
        "Leo (star sign)"
      ]
    },
    {
      "id": 981,
      "hanzi": "十分",
      "pinyin": "shí fēn",
      "translations": [
        "to divide into ten equal parts",
        "very",
        "hundred percent",
        "completely",
        "extremely",
        "utterly",
        "absolutely"
      ]
    },
    {
      "id": 982,
      "hanzi": "实际",
      "pinyin": "shí jì",
      "translations": [
        "actual",
        "reality",
        "practice"
      ]
    },
    {
      "id": 983,
      "hanzi": "实在",
      "pinyin": "shí zài",
      "translations": [
        "really",
        "actually",
        "indeed",
        "true",
        "real",
        "honest",
        "dependable",
        "(philosophy) reality"
      ]
    },
    {
      "id": 984,
      "hanzi": "食品",
      "pinyin": "shí pǐn",
      "translations": [
        "foodstuff",
        "food",
        "provisions",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 985,
      "hanzi": "使用",
      "pinyin": "shǐ yòng",
      "translations": [
        "to use",
        "to employ",
        "to apply",
        "to make use of"
      ]
    },
    {
      "id": 986,
      "hanzi": "试",
      "pinyin": "shì",
      "translations": [
        "to test",
        "to try",
        "experiment",
        "examination",
        "test"
      ]
    },
    {
      "id": 987,
      "hanzi": "市场",
      "pinyin": "shì chǎng",
      "translations": [
        "marketplace",
        "market (also in abstract)"
      ]
    },
    {
      "id": 988,
      "hanzi": "世纪",
      "pinyin": "shì jì",
      "translations": [
        "century",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 989,
      "hanzi": "适合",
      "pinyin": "shì hé",
      "translations": [
        "to fit",
        "to suit"
      ]
    },
    {
      "id": 990,
      "hanzi": "适应",
      "pinyin": "shì yìng",
      "translations": [
        "to adapt",
        "to fit",
        "to suit"
      ]
    },
    {
      "id": 991,
      "hanzi": "收",
      "pinyin": "shōu",
      "translations": [
        "to receive",
        "to accept",
        "to collect",
        "in care of (used on address line after name)"
      ]
    },
    {
      "id": 992,
      "hanzi": "收入",
      "pinyin": "shōu rù",
      "translations": [
        "to take in",
        "income",
        "revenue",
        "CL:筆|笔",
        "個|个[gè]"
      ]
    },
    {
      "id": 993,
      "hanzi": "收拾",
      "pinyin": "shōu shi",
      "translations": [
        "to put in order",
        "to tidy up",
        "to pack",
        "to repair",
        "to punish (colloquial)",
        "to manage"
      ]
    },
    {
      "id": 994,
      "hanzi": "首都",
      "pinyin": "shǒu dū",
      "translations": [
        "capital (city)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 995,
      "hanzi": "首先",
      "pinyin": "shǒu xiān",
      "translations": [
        "first (of all)",
        "in the first place"
      ]
    },
    {
      "id": 996,
      "hanzi": "受不了",
      "pinyin": "shòu bù liǎo",
      "translations": [
        "unbearable",
        "unable to endure",
        "can't stand"
      ]
    },
    {
      "id": 997,
      "hanzi": "受到",
      "pinyin": "shòu dào",
      "translations": [
        "to receive",
        "to suffer",
        "obtained",
        "given"
      ]
    },
    {
      "id": 998,
      "hanzi": "售货员",
      "pinyin": "shòu huò yuán",
      "translations": [
        "salesperson",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 999,
      "hanzi": "输",
      "pinyin": "shū",
      "translations": [
        "to lose",
        "to transport",
        "to donate",
        "to enter (a password)"
      ]
    },
    {
      "id": 1000,
      "hanzi": "熟悉",
      "pinyin": "shú xī",
      "translations": [
        "to be familiar with",
        "to know well"
      ]
    },
    {
      "id": 1001,
      "hanzi": "数量",
      "pinyin": "shù liàng",
      "translations": [
        "amount",
        "quantity",
        "CL:個|个[gè]",
        "quantitative"
      ]
    },
    {
      "id": 1002,
      "hanzi": "数字",
      "pinyin": "shù zì",
      "translations": [
        "numeral",
        "digit",
        "number",
        "figure",
        "amount",
        "digital (electronics etc)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1003,
      "hanzi": "帅",
      "pinyin": "shuài",
      "translations": [
        "handsome",
        "graceful",
        "smart",
        "commander in chief"
      ]
    },
    {
      "id": 1004,
      "hanzi": "顺便",
      "pinyin": "shùn biàn",
      "translations": [
        "conveniently",
        "in passing",
        "without much extra effort"
      ]
    },
    {
      "id": 1005,
      "hanzi": "顺利",
      "pinyin": "shùn lì",
      "translations": [
        "smoothly",
        "without a hitch"
      ]
    },
    {
      "id": 1006,
      "hanzi": "顺序",
      "pinyin": "shùn xù",
      "translations": [
        "sequence",
        "order"
      ]
    },
    {
      "id": 1007,
      "hanzi": "说明",
      "pinyin": "shuō míng",
      "translations": [
        "to explain",
        "to illustrate",
        "to indicate",
        "to show",
        "to prove",
        "explanation",
        "directions",
        "caption",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1008,
      "hanzi": "硕士",
      "pinyin": "shuò shì",
      "translations": [
        "master's degree",
        "learned person"
      ]
    },
    {
      "id": 1009,
      "hanzi": "死",
      "pinyin": "sǐ",
      "translations": [
        "to die",
        "impassable",
        "uncrossable",
        "inflexible",
        "rigid",
        "extremely"
      ]
    },
    {
      "id": 1010,
      "hanzi": "速度",
      "pinyin": "sù dù",
      "translations": [
        "speed",
        "rate",
        "velocity",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1011,
      "hanzi": "塑料袋",
      "pinyin": "sù liào dài",
      "translations": [
        "plastic bag"
      ]
    },
    {
      "id": 1012,
      "hanzi": "酸",
      "pinyin": "suān",
      "translations": [
        "sour",
        "sore",
        "ache",
        "acid"
      ]
    },
    {
      "id": 1013,
      "hanzi": "算",
      "pinyin": "suàn",
      "translations": [
        "to regard as",
        "to figure",
        "to calculate",
        "to compute"
      ]
    },
    {
      "id": 1014,
      "hanzi": "随便",
      "pinyin": "suí biàn",
      "translations": [
        "as one wishes",
        "as one pleases",
        "at random",
        "negligent",
        "casual",
        "wanton"
      ]
    },
    {
      "id": 1015,
      "hanzi": "随着",
      "pinyin": "suí zhe",
      "translations": [
        "along with",
        "in the wake of",
        "following"
      ]
    },
    {
      "id": 1016,
      "hanzi": "孙子",
      "pinyin": "sūn zi",
      "translations": [
        "grandson",
        "son's son"
      ]
    },
    {
      "id": 1017,
      "hanzi": "所有",
      "pinyin": "suǒ yǒu",
      "translations": [
        "all",
        "to have",
        "to possess",
        "to own"
      ]
    },
    {
      "id": 1018,
      "hanzi": "抬",
      "pinyin": "tái",
      "translations": [
        "to lift",
        "to raise",
        "(of two or more persons) to carry"
      ]
    },
    {
      "id": 1019,
      "hanzi": "台",
      "pinyin": "tái",
      "translations": [
        "typhoon"
      ]
    },
    {
      "id": 1020,
      "hanzi": "态度",
      "pinyin": "tài du",
      "translations": [
        "manner",
        "bearing",
        "attitude",
        "approach",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1021,
      "hanzi": "谈",
      "pinyin": "tán",
      "translations": [
        "to speak",
        "to talk",
        "to converse",
        "to chat",
        "to discuss"
      ]
    },
    {
      "id": 1022,
      "hanzi": "弹",
      "pinyin": "tán",
      "translations": [
        "to pluck (a string)",
        "to play (a string instrument)",
        "to spring or leap",
        "to shoot (e.g. with a catapult)",
        "(of cotton) to fluff or tease",
        "to flick",
        "to flip",
        "to accuse",
        "to impeach",
        "elastic (of materials)"
      ]
    },
    {
      "id": 1023,
      "hanzi": "汤",
      "pinyin": "tāng",
      "translations": [
        "soup",
        "hot or boiling water",
        "decoction of medicinal herbs",
        "water in which sth has been boiled"
      ]
    },
    {
      "id": 1024,
      "hanzi": "躺",
      "pinyin": "tǎng",
      "translations": [
        "to recline",
        "to lie down"
      ]
    },
    {
      "id": 1025,
      "hanzi": "趟",
      "pinyin": "tàng",
      "translations": [
        "classifier for times",
        "round trips or rows",
        "a time",
        "a trip"
      ]
    },
    {
      "id": 1026,
      "hanzi": "讨论",
      "pinyin": "tǎo lùn",
      "translations": [
        "to discuss",
        "to talk over",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1027,
      "hanzi": "讨厌",
      "pinyin": "tǎo yàn",
      "translations": [
        "to dislike",
        "to loathe",
        "disagreeable",
        "troublesome",
        "annoying"
      ]
    },
    {
      "id": 1028,
      "hanzi": "特点",
      "pinyin": "tè diǎn",
      "translations": [
        "characteristic (feature)",
        "trait",
        "feature",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1029,
      "hanzi": "提供",
      "pinyin": "tí gōng",
      "translations": [
        "to offer",
        "to supply",
        "to provide",
        "to furnish"
      ]
    },
    {
      "id": 1030,
      "hanzi": "提前",
      "pinyin": "tí qián",
      "translations": [
        "to shift to an earlier date",
        "to do sth ahead of time",
        "in advance"
      ]
    },
    {
      "id": 1031,
      "hanzi": "提醒",
      "pinyin": "tí xǐng",
      "translations": [
        "to remind",
        "to call attention to",
        "to warn of"
      ]
    },
    {
      "id": 1032,
      "hanzi": "填空",
      "pinyin": "tián kòng",
      "translations": [
        "to fill a job vacancy",
        "to fill in a blank (e.g. on questionnaire or exam paper)"
      ]
    },
    {
      "id": 1033,
      "hanzi": "条件",
      "pinyin": "tiáo jiàn",
      "translations": [
        "condition",
        "circumstances",
        "term",
        "factor",
        "requirement",
        "prerequisite",
        "qualification",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1034,
      "hanzi": "停止",
      "pinyin": "tíng zhǐ",
      "translations": [
        "to stop",
        "to halt",
        "to cease"
      ]
    },
    {
      "id": 1035,
      "hanzi": "挺",
      "pinyin": "tǐng",
      "translations": [
        "to stick out",
        "to (physically) straighten up",
        "to endure or hold out",
        "straight",
        "stiff",
        "outstanding",
        "extraordinary",
        "rather",
        "quite",
        "very",
        "classifier for machine guns"
      ]
    },
    {
      "id": 1036,
      "hanzi": "通过",
      "pinyin": "tōng guò",
      "translations": [
        "by means of",
        "through",
        "via",
        "to pass through",
        "to get through",
        "to adopt",
        "to pass (a bill or inspection etc)",
        "to switch over"
      ]
    },
    {
      "id": 1037,
      "hanzi": "通知",
      "pinyin": "tōng zhī",
      "translations": [
        "to notify",
        "to inform",
        "notice",
        "notification",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1038,
      "hanzi": "同情",
      "pinyin": "tóng qíng",
      "translations": [
        "to sympathize with",
        "sympathy"
      ]
    },
    {
      "id": 1039,
      "hanzi": "推",
      "pinyin": "tuī",
      "translations": [
        "to push",
        "to cut",
        "to refuse",
        "to reject",
        "to decline",
        "to shirk (responsibility)",
        "to put off",
        "to delay",
        "to push forward",
        "to nominate",
        "to elect"
      ]
    },
    {
      "id": 1040,
      "hanzi": "推迟",
      "pinyin": "tuī chí",
      "translations": [
        "to postpone",
        "to put off",
        "to defer"
      ]
    },
    {
      "id": 1041,
      "hanzi": "脱",
      "pinyin": "tuō",
      "translations": [
        "to shed",
        "to take off",
        "to escape",
        "to get away from"
      ]
    },
    {
      "id": 1042,
      "hanzi": "袜子",
      "pinyin": "wà zi",
      "translations": [
        "socks",
        "stockings",
        "CL:隻|只",
        "對|对",
        "雙|双[shuāng]"
      ]
    },
    {
      "id": 1043,
      "hanzi": "完全",
      "pinyin": "wán quán",
      "translations": [
        "complete",
        "whole",
        "totally",
        "entirely"
      ]
    },
    {
      "id": 1044,
      "hanzi": "往",
      "pinyin": "wǎng",
      "translations": [
        "to go (in a direction)",
        "to",
        "towards",
        "(of a train) bound for",
        "past",
        "previous"
      ]
    },
    {
      "id": 1045,
      "hanzi": "往往",
      "pinyin": "wǎng wǎng",
      "translations": [
        "often",
        "frequently"
      ]
    },
    {
      "id": 1046,
      "hanzi": "网球",
      "pinyin": "wǎng qiú",
      "translations": [
        "tennis",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1047,
      "hanzi": "网站",
      "pinyin": "wǎng zhàn",
      "translations": [
        "website",
        "network station",
        "node"
      ]
    },
    {
      "id": 1048,
      "hanzi": "危险",
      "pinyin": "wēi xiǎn",
      "translations": [
        "danger",
        "dangerous"
      ]
    },
    {
      "id": 1049,
      "hanzi": "味道",
      "pinyin": "wèi dao",
      "translations": [
        "flavor",
        "smell",
        "hint of"
      ]
    },
    {
      "id": 1050,
      "hanzi": "温度",
      "pinyin": "wēn dù",
      "translations": [
        "temperature",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1051,
      "hanzi": "文章",
      "pinyin": "wén zhāng",
      "translations": [
        "article",
        "essay",
        "literary works",
        "writings",
        "hidden meaning",
        "CL:篇",
        "段",
        "頁|页[yè]"
      ]
    },
    {
      "id": 1052,
      "hanzi": "握手",
      "pinyin": "wò shǒu",
      "translations": [
        "to shake hands"
      ]
    },
    {
      "id": 1053,
      "hanzi": "污染",
      "pinyin": "wū rǎn",
      "translations": [
        "pollution",
        "contamination",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1054,
      "hanzi": "无",
      "pinyin": "wú",
      "translations": [
        "-less",
        "not to have",
        "no",
        "none",
        "not",
        "to lack",
        "un-"
      ]
    },
    {
      "id": 1055,
      "hanzi": "无聊",
      "pinyin": "wú liáo",
      "translations": [
        "bored",
        "boring",
        "senseless"
      ]
    },
    {
      "id": 1056,
      "hanzi": "无论",
      "pinyin": "wú lùn",
      "translations": [
        "no matter what or how",
        "regardless of whether..."
      ]
    },
    {
      "id": 1057,
      "hanzi": "误会",
      "pinyin": "wù huì",
      "translations": [
        "to misunderstand",
        "to mistake",
        "misunderstanding",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1058,
      "hanzi": "西红柿",
      "pinyin": "xī hóng shì",
      "translations": [
        "tomato",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 1059,
      "hanzi": "吸引",
      "pinyin": "xī yǐn",
      "translations": [
        "to attract (interest, investment etc)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1060,
      "hanzi": "洗衣机",
      "pinyin": "xǐ yī jī",
      "translations": [
        "washer",
        "washing machine",
        "CL:臺|台[tái]"
      ]
    },
    {
      "id": 1061,
      "hanzi": "咸",
      "pinyin": "xián",
      "translations": [
        "salted",
        "salty",
        "stingy",
        "miserly"
      ]
    },
    {
      "id": 1062,
      "hanzi": "现代",
      "pinyin": "xiàn dài",
      "translations": [
        "modern times",
        "modern age",
        "modern era"
      ]
    },
    {
      "id": 1063,
      "hanzi": "羡慕",
      "pinyin": "xiàn mù",
      "translations": [
        "to envy",
        "to admire"
      ]
    },
    {
      "id": 1064,
      "hanzi": "限制",
      "pinyin": "xiàn zhì",
      "translations": [
        "to restrict",
        "to limit",
        "to confine",
        "restriction",
        "limit",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1065,
      "hanzi": "香",
      "pinyin": "xiāng",
      "translations": [
        "fragrant",
        "sweet smelling",
        "aromatic",
        "savory or appetizing",
        "(to eat) with relish",
        "(of sleep) sound",
        "perfume or spice",
        "joss or incense stick",
        "CL:根[gēn]"
      ]
    },
    {
      "id": 1066,
      "hanzi": "相反",
      "pinyin": "xiāng fǎn",
      "translations": [
        "opposite",
        "contrary"
      ]
    },
    {
      "id": 1067,
      "hanzi": "详细",
      "pinyin": "xiáng xì",
      "translations": [
        "detailed",
        "in detail",
        "minute"
      ]
    },
    {
      "id": 1068,
      "hanzi": "响",
      "pinyin": "xiǎng",
      "translations": [
        "echo",
        "sound",
        "noise",
        "to make a sound",
        "to sound",
        "to ring",
        "loud",
        "classifier for noises"
      ]
    },
    {
      "id": 1069,
      "hanzi": "消息",
      "pinyin": "xiāo xi",
      "translations": [
        "news",
        "information",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 1070,
      "hanzi": "小说",
      "pinyin": "xiǎo shuō",
      "translations": [
        "novel",
        "fiction",
        "CL:本",
        "部[bù]"
      ]
    },
    {
      "id": 1071,
      "hanzi": "笑话",
      "pinyin": "xiào huà",
      "translations": [
        "joke",
        "jest",
        "CL:個|个[gè]",
        "to laugh at",
        "to mock"
      ]
    },
    {
      "id": 1072,
      "hanzi": "效果",
      "pinyin": "xiào guǒ",
      "translations": [
        "result",
        "effect",
        "quality",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1073,
      "hanzi": "心情",
      "pinyin": "xīn qíng",
      "translations": [
        "mood",
        "frame of mind",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1074,
      "hanzi": "辛苦",
      "pinyin": "xīn kǔ",
      "translations": [
        "hard",
        "exhausting",
        "with much toil",
        "thanks for your trouble"
      ]
    },
    {
      "id": 1075,
      "hanzi": "信任",
      "pinyin": "xìn rèn",
      "translations": [
        "to trust",
        "to have confidence in"
      ]
    },
    {
      "id": 1076,
      "hanzi": "信心",
      "pinyin": "xìn xīn",
      "translations": [
        "confidence",
        "faith (in sb or sth)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1077,
      "hanzi": "信用卡",
      "pinyin": "xìn yòng kǎ",
      "translations": [
        "credit card"
      ]
    },
    {
      "id": 1078,
      "hanzi": "兴奋",
      "pinyin": "xīng fèn",
      "translations": [
        "excited",
        "excitement"
      ]
    },
    {
      "id": 1079,
      "hanzi": "行",
      "pinyin": "xíng",
      "translations": [
        "to walk",
        "to go",
        "to travel",
        "a visit",
        "temporary",
        "makeshift",
        "current",
        "in circulation",
        "to do",
        "to perform",
        "capable",
        "competent",
        "effective",
        "all right",
        "OK!",
        "will do"
      ]
    },
    {
      "id": 1080,
      "hanzi": "醒",
      "pinyin": "xǐng",
      "translations": [
        "to wake up",
        "to awaken",
        "to be awake"
      ]
    },
    {
      "id": 1081,
      "hanzi": "性别",
      "pinyin": "xìng bié",
      "translations": [
        "gender",
        "sex",
        "distinguishing between the sexes"
      ]
    },
    {
      "id": 1082,
      "hanzi": "性格",
      "pinyin": "xìng gé",
      "translations": [
        "nature",
        "disposition",
        "temperament",
        "character",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1083,
      "hanzi": "幸福",
      "pinyin": "xìng fú",
      "translations": [
        "happiness",
        "happy",
        "blessed"
      ]
    },
    {
      "id": 1084,
      "hanzi": "修",
      "pinyin": "xiū",
      "translations": [
        "to decorate",
        "to embellish",
        "to repair",
        "to build",
        "to study",
        "to write",
        "to cultivate"
      ]
    },
    {
      "id": 1085,
      "hanzi": "许多",
      "pinyin": "xǔ duō",
      "translations": [
        "many",
        "a lot of",
        "much"
      ]
    },
    {
      "id": 1086,
      "hanzi": "血",
      "pinyin": "xuè",
      "translations": [
        "blood",
        "informal colloquial and Taiwan pr. [xiě]",
        "also pr. [xuě]",
        "CL:滴",
        "片[piàn]"
      ]
    },
    {
      "id": 1087,
      "hanzi": "压力",
      "pinyin": "yā lì",
      "translations": [
        "pressure"
      ]
    },
    {
      "id": 1088,
      "hanzi": "牙膏",
      "pinyin": "yá gāo",
      "translations": [
        "toothpaste",
        "CL:管[guǎn]"
      ]
    },
    {
      "id": 1089,
      "hanzi": "亚洲",
      "pinyin": "Yà zhōu",
      "translations": [
        "Asia",
        "Asian"
      ]
    },
    {
      "id": 1090,
      "hanzi": "呀",
      "pinyin": "ya",
      "translations": [
        "(particle equivalent to 啊 after a vowel, expressing surprise or doubt)"
      ]
    },
    {
      "id": 1091,
      "hanzi": "盐",
      "pinyin": "yán",
      "translations": [
        "salt",
        "CL:粒[lì]"
      ]
    },
    {
      "id": 1092,
      "hanzi": "严格",
      "pinyin": "yán gé",
      "translations": [
        "strict",
        "stringent",
        "tight",
        "rigorous"
      ]
    },
    {
      "id": 1093,
      "hanzi": "严重",
      "pinyin": "yán zhòng",
      "translations": [
        "grave",
        "serious",
        "severe",
        "critical"
      ]
    },
    {
      "id": 1094,
      "hanzi": "研究生",
      "pinyin": "yán jiū shēng",
      "translations": [
        "graduate student",
        "postgraduate student",
        "research student"
      ]
    },
    {
      "id": 1095,
      "hanzi": "演出",
      "pinyin": "yǎn chū",
      "translations": [
        "to act (in a play)",
        "to perform",
        "to put on (a performance)",
        "performance",
        "concert",
        "show",
        "CL:場|场",
        "次[cì]"
      ]
    },
    {
      "id": 1096,
      "hanzi": "演员",
      "pinyin": "yǎn yuán",
      "translations": [
        "actor or actress",
        "performer",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 1097,
      "hanzi": "阳光",
      "pinyin": "yáng guāng",
      "translations": [
        "sunshine",
        "CL:線|线[xiàn]"
      ]
    },
    {
      "id": 1098,
      "hanzi": "养成",
      "pinyin": "yǎng chéng",
      "translations": [
        "to cultivate",
        "to raise",
        "to form (a habit)",
        "to acquire"
      ]
    },
    {
      "id": 1099,
      "hanzi": "样子",
      "pinyin": "yàng zi",
      "translations": [
        "appearance",
        "manner",
        "pattern",
        "model"
      ]
    },
    {
      "id": 1100,
      "hanzi": "邀请",
      "pinyin": "yāo qǐng",
      "translations": [
        "to invite",
        "invitation",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1101,
      "hanzi": "钥匙",
      "pinyin": "yào shi",
      "translations": [
        "key",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 1102,
      "hanzi": "也许",
      "pinyin": "yě xǔ",
      "translations": [
        "perhaps",
        "maybe"
      ]
    },
    {
      "id": 1103,
      "hanzi": "页",
      "pinyin": "yè",
      "translations": [
        "page",
        "leaf"
      ]
    },
    {
      "id": 1104,
      "hanzi": "叶子",
      "pinyin": "yè zi",
      "translations": [
        "foliage",
        "leaf",
        "CL:片[piàn]"
      ]
    },
    {
      "id": 1105,
      "hanzi": "一切",
      "pinyin": "yī qiè",
      "translations": [
        "everything",
        "every",
        "all"
      ]
    },
    {
      "id": 1106,
      "hanzi": "以",
      "pinyin": "yǐ",
      "translations": [
        "to use",
        "according to",
        "so as to",
        "by means of",
        "in order to",
        "by",
        "with",
        "because"
      ]
    },
    {
      "id": 1107,
      "hanzi": "亿",
      "pinyin": "yì",
      "translations": [
        "100 million"
      ]
    },
    {
      "id": 1108,
      "hanzi": "意见",
      "pinyin": "yì jiàn",
      "translations": [
        "idea",
        "opinion",
        "suggestion",
        "objection",
        "complaint",
        "CL:點|点",
        "條|条[tiáo]"
      ]
    },
    {
      "id": 1109,
      "hanzi": "艺术",
      "pinyin": "yì shù",
      "translations": [
        "art"
      ]
    },
    {
      "id": 1110,
      "hanzi": "因此",
      "pinyin": "yīn cǐ",
      "translations": [
        "thus",
        "consequently",
        "as a result"
      ]
    },
    {
      "id": 1111,
      "hanzi": "引起",
      "pinyin": "yǐn qǐ",
      "translations": [
        "to give rise to",
        "to lead to",
        "to cause",
        "to arouse"
      ]
    },
    {
      "id": 1112,
      "hanzi": "饮料",
      "pinyin": "yǐn liào",
      "translations": [
        "drink",
        "beverage"
      ]
    },
    {
      "id": 1113,
      "hanzi": "印象",
      "pinyin": "yìn xiàng",
      "translations": [
        "impression"
      ]
    },
    {
      "id": 1114,
      "hanzi": "赢",
      "pinyin": "yíng",
      "translations": [
        "to beat",
        "to win",
        "to profit"
      ]
    },
    {
      "id": 1115,
      "hanzi": "硬",
      "pinyin": "yìng",
      "translations": [
        "hard",
        "stiff",
        "strong",
        "firm",
        "resolutely",
        "doggedly",
        "good (quality)",
        "able (person)"
      ]
    },
    {
      "id": 1116,
      "hanzi": "勇敢",
      "pinyin": "yǒng gǎn",
      "translations": [
        "brave",
        "courageous"
      ]
    },
    {
      "id": 1117,
      "hanzi": "永远",
      "pinyin": "yǒng yuǎn",
      "translations": [
        "forever",
        "eternal"
      ]
    },
    {
      "id": 1118,
      "hanzi": "优点",
      "pinyin": "yōu diǎn",
      "translations": [
        "merit",
        "benefit",
        "strong point",
        "advantage",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1119,
      "hanzi": "优秀",
      "pinyin": "yōu xiù",
      "translations": [
        "outstanding",
        "excellent"
      ]
    },
    {
      "id": 1120,
      "hanzi": "幽默",
      "pinyin": "yōu mò",
      "translations": [
        "(loanword) humor",
        "humorous"
      ]
    },
    {
      "id": 1121,
      "hanzi": "由",
      "pinyin": "yóu",
      "translations": [
        "to follow",
        "from",
        "it is for...to",
        "reason",
        "cause",
        "because of",
        "due to",
        "to",
        "to leave it (to sb)",
        "by (introduces passive verb)"
      ]
    },
    {
      "id": 1122,
      "hanzi": "由于",
      "pinyin": "yóu yú",
      "translations": [
        "due to",
        "as a result of",
        "thanks to",
        "owing to",
        "since",
        "because"
      ]
    },
    {
      "id": 1123,
      "hanzi": "尤其",
      "pinyin": "yóu qí",
      "translations": [
        "especially",
        "particularly"
      ]
    },
    {
      "id": 1124,
      "hanzi": "有趣",
      "pinyin": "yǒu qù",
      "translations": [
        "interesting",
        "fascinating",
        "amusing"
      ]
    },
    {
      "id": 1125,
      "hanzi": "友好",
      "pinyin": "yǒu hǎo",
      "translations": [
        "friendly",
        "amicable",
        "close friend"
      ]
    },
    {
      "id": 1126,
      "hanzi": "友谊",
      "pinyin": "yǒu yì",
      "translations": [
        "companionship",
        "fellowship",
        "friendship"
      ]
    },
    {
      "id": 1127,
      "hanzi": "愉快",
      "pinyin": "yú kuài",
      "translations": [
        "cheerful",
        "cheerily",
        "delightful",
        "pleasant",
        "pleasantly",
        "pleasing",
        "happy",
        "delighted"
      ]
    },
    {
      "id": 1128,
      "hanzi": "于是",
      "pinyin": "yú shì",
      "translations": [
        "thereupon",
        "as a result",
        "consequently",
        "thus",
        "hence"
      ]
    },
    {
      "id": 1129,
      "hanzi": "与",
      "pinyin": "yǔ",
      "translations": [
        "and",
        "to give",
        "together with"
      ]
    },
    {
      "id": 1130,
      "hanzi": "语法",
      "pinyin": "yǔ fǎ",
      "translations": [
        "grammar"
      ]
    },
    {
      "id": 1131,
      "hanzi": "语言",
      "pinyin": "yǔ yán",
      "translations": [
        "language",
        "CL:門|门",
        "種|种[zhǒng]"
      ]
    },
    {
      "id": 1132,
      "hanzi": "羽毛球",
      "pinyin": "yǔ máo qiú",
      "translations": [
        "shuttlecock",
        "badminton",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1133,
      "hanzi": "预习",
      "pinyin": "yù xí",
      "translations": [
        "to prepare a lesson"
      ]
    },
    {
      "id": 1134,
      "hanzi": "圆",
      "pinyin": "yuán",
      "translations": [
        "circle",
        "round",
        "circular",
        "spherical",
        "(of the moon) full",
        "unit of Chinese currency (Yuan)",
        "tactful",
        "to justify"
      ]
    },
    {
      "id": 1135,
      "hanzi": "原来",
      "pinyin": "yuán lái",
      "translations": [
        "original",
        "former",
        "originally",
        "formerly",
        "at first",
        "so",
        "actually",
        "as it turns out"
      ]
    },
    {
      "id": 1136,
      "hanzi": "原谅",
      "pinyin": "yuán liàng",
      "translations": [
        "to excuse",
        "to forgive",
        "to pardon"
      ]
    },
    {
      "id": 1137,
      "hanzi": "原因",
      "pinyin": "yuán yīn",
      "translations": [
        "cause",
        "origin",
        "root cause",
        "reason",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1138,
      "hanzi": "约会",
      "pinyin": "yuē huì",
      "translations": [
        "appointment",
        "engagement",
        "date",
        "CL:次",
        "個|个[gè]",
        "to arrange to meet"
      ]
    },
    {
      "id": 1139,
      "hanzi": "阅读",
      "pinyin": "yuè dú",
      "translations": [
        "to read",
        "reading"
      ]
    },
    {
      "id": 1140,
      "hanzi": "允许",
      "pinyin": "yǔn xǔ",
      "translations": [
        "to permit",
        "to allow"
      ]
    },
    {
      "id": 1141,
      "hanzi": "杂志",
      "pinyin": "zá zhì",
      "translations": [
        "magazine",
        "CL:本",
        "份",
        "期[qī]"
      ]
    },
    {
      "id": 1142,
      "hanzi": "咱们",
      "pinyin": "zán men",
      "translations": [
        "we or us (including both the speaker and the person(s) spoken to)",
        "I or me",
        "you"
      ]
    },
    {
      "id": 1143,
      "hanzi": "暂时",
      "pinyin": "zàn shí",
      "translations": [
        "temporary",
        "provisional",
        "for the time being"
      ]
    },
    {
      "id": 1144,
      "hanzi": "脏",
      "pinyin": "zāng",
      "translations": [
        "dirty",
        "filthy"
      ]
    },
    {
      "id": 1145,
      "hanzi": "责任",
      "pinyin": "zé rèn",
      "translations": [
        "responsibility",
        "blame",
        "duty",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1146,
      "hanzi": "增加",
      "pinyin": "zēng jiā",
      "translations": [
        "to raise",
        "to increase"
      ]
    },
    {
      "id": 1147,
      "hanzi": "增长",
      "pinyin": "zēng zhǎng",
      "translations": [
        "to grow",
        "to increase"
      ]
    },
    {
      "id": 1148,
      "hanzi": "窄",
      "pinyin": "zhǎi",
      "translations": [
        "narrow",
        "narrow-minded",
        "badly off"
      ]
    },
    {
      "id": 1149,
      "hanzi": "招聘",
      "pinyin": "zhāo pìn",
      "translations": [
        "recruitment",
        "to invite applications for a job"
      ]
    },
    {
      "id": 1150,
      "hanzi": "真正",
      "pinyin": "zhēn zhèng",
      "translations": [
        "genuine",
        "real",
        "true",
        "genuinely"
      ]
    },
    {
      "id": 1151,
      "hanzi": "整理",
      "pinyin": "zhěng lǐ",
      "translations": [
        "to arrange",
        "to tidy up",
        "to sort out",
        "to straighten out",
        "to list systematically",
        "to collate (data, files)",
        "to pack (luggage)"
      ]
    },
    {
      "id": 1152,
      "hanzi": "整齐",
      "pinyin": "zhěng qí",
      "translations": [
        "orderly",
        "neat",
        "even",
        "tidy"
      ]
    },
    {
      "id": 1153,
      "hanzi": "正常",
      "pinyin": "zhèng cháng",
      "translations": [
        "regular",
        "normal",
        "ordinary"
      ]
    },
    {
      "id": 1154,
      "hanzi": "正好",
      "pinyin": "zhèng hǎo",
      "translations": [
        "just (in time)",
        "just right",
        "just enough",
        "to happen to",
        "to chance to",
        "by chance",
        "it just so happens that"
      ]
    },
    {
      "id": 1155,
      "hanzi": "正确",
      "pinyin": "zhèng què",
      "translations": [
        "correct",
        "proper"
      ]
    },
    {
      "id": 1156,
      "hanzi": "正式",
      "pinyin": "zhèng shì",
      "translations": [
        "formal",
        "official"
      ]
    },
    {
      "id": 1157,
      "hanzi": "证明",
      "pinyin": "zhèng míng",
      "translations": [
        "proof",
        "certificate",
        "identification",
        "testimonial",
        "CL:個|个[gè]",
        "to prove",
        "to testify",
        "to confirm the truth of"
      ]
    },
    {
      "id": 1158,
      "hanzi": "之",
      "pinyin": "zhī",
      "translations": [
        "(possessive particle, literary equivalent of 的)",
        "him",
        "her",
        "it"
      ]
    },
    {
      "id": 1159,
      "hanzi": "支持",
      "pinyin": "zhī chí",
      "translations": [
        "to be in favor of",
        "to support",
        "to back",
        "support",
        "backing",
        "to stand by",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1160,
      "hanzi": "知识",
      "pinyin": "zhī shi",
      "translations": [
        "intellectual",
        "knowledge-related",
        "knowledge",
        "CL:門|门[mén]"
      ]
    },
    {
      "id": 1161,
      "hanzi": "直接",
      "pinyin": "zhí jiē",
      "translations": [
        "direct",
        "opposite: indirect 間接|间接",
        "immediate",
        "directly",
        "straightforward"
      ]
    },
    {
      "id": 1162,
      "hanzi": "值得",
      "pinyin": "zhí de",
      "translations": [
        "to be worth",
        "to deserve"
      ]
    },
    {
      "id": 1163,
      "hanzi": "职业",
      "pinyin": "zhí yè",
      "translations": [
        "occupation",
        "profession",
        "vocation",
        "professional"
      ]
    },
    {
      "id": 1164,
      "hanzi": "植物",
      "pinyin": "zhí wù",
      "translations": [
        "botanical",
        "plant",
        "vegetation",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 1165,
      "hanzi": "指",
      "pinyin": "zhǐ",
      "translations": [
        "finger",
        "to point at or to",
        "to indicate or refer to",
        "to depend on",
        "to count on",
        "(of hair) to stand on end"
      ]
    },
    {
      "id": 1166,
      "hanzi": "只好",
      "pinyin": "zhǐ hǎo",
      "translations": [
        "without any better option",
        "to have to",
        "to be forced to"
      ]
    },
    {
      "id": 1167,
      "hanzi": "只要",
      "pinyin": "zhǐ yào",
      "translations": [
        "if only",
        "so long as"
      ]
    },
    {
      "id": 1168,
      "hanzi": "制造",
      "pinyin": "zhì zào",
      "translations": [
        "to manufacture",
        "to make"
      ]
    },
    {
      "id": 1169,
      "hanzi": "至少",
      "pinyin": "zhì shǎo",
      "translations": [
        "at least",
        "(to say the) least"
      ]
    },
    {
      "id": 1170,
      "hanzi": "质量",
      "pinyin": "zhì liàng",
      "translations": [
        "quality",
        "mass (in physics)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1171,
      "hanzi": "中文",
      "pinyin": "Zhōng wén",
      "translations": [
        "Chinese",
        "Chinese written language",
        "Chinese writing"
      ]
    },
    {
      "id": 1172,
      "hanzi": "重点",
      "pinyin": "zhòng diǎn",
      "translations": [
        "important point",
        "main point",
        "focus",
        "key (project etc)",
        "to focus on",
        "to put the emphasis on"
      ]
    },
    {
      "id": 1173,
      "hanzi": "重视",
      "pinyin": "zhòng shì",
      "translations": [
        "to attach importance to sth",
        "to value"
      ]
    },
    {
      "id": 1174,
      "hanzi": "周围",
      "pinyin": "zhōu wéi",
      "translations": [
        "surroundings",
        "environment",
        "to encompass"
      ]
    },
    {
      "id": 1175,
      "hanzi": "猪",
      "pinyin": "zhū",
      "translations": [
        "hog",
        "pig",
        "swine",
        "CL:口",
        "頭|头[tóu]"
      ]
    },
    {
      "id": 1176,
      "hanzi": "逐渐",
      "pinyin": "zhú jiàn",
      "translations": [
        "gradually"
      ]
    },
    {
      "id": 1177,
      "hanzi": "主动",
      "pinyin": "zhǔ dòng",
      "translations": [
        "to take the initiative",
        "to do sth of one's own accord",
        "spontaneous",
        "active",
        "opposite: passive 被動|被动[bèi dòng]",
        "drive (of gears and shafts etc)"
      ]
    },
    {
      "id": 1178,
      "hanzi": "主意",
      "pinyin": "zhǔ yi",
      "translations": [
        "plan",
        "idea",
        "decision",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1179,
      "hanzi": "祝贺",
      "pinyin": "zhù hè",
      "translations": [
        "to congratulate",
        "congratulations",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1180,
      "hanzi": "著名",
      "pinyin": "zhù míng",
      "translations": [
        "famous",
        "noted",
        "well-known",
        "celebrated"
      ]
    },
    {
      "id": 1181,
      "hanzi": "专门",
      "pinyin": "zhuān mén",
      "translations": [
        "specialist",
        "specialized",
        "customized"
      ]
    },
    {
      "id": 1182,
      "hanzi": "专业",
      "pinyin": "zhuān yè",
      "translations": [
        "specialty",
        "specialized field",
        "main field of study (at university)",
        "major",
        "CL:門|门",
        "個|个[gè]",
        "professional"
      ]
    },
    {
      "id": 1183,
      "hanzi": "赚",
      "pinyin": "zhuàn",
      "translations": [
        "to earn",
        "to make a profit"
      ]
    },
    {
      "id": 1184,
      "hanzi": "撞",
      "pinyin": "zhuàng",
      "translations": [
        "to hit",
        "to strike",
        "to meet by accident",
        "to run into",
        "to bump against",
        "to bump into"
      ]
    },
    {
      "id": 1185,
      "hanzi": "准确",
      "pinyin": "zhǔn què",
      "translations": [
        "accurate",
        "exact",
        "precise"
      ]
    },
    {
      "id": 1186,
      "hanzi": "准时",
      "pinyin": "zhǔn shí",
      "translations": [
        "on time",
        "punctual",
        "on schedule"
      ]
    },
    {
      "id": 1187,
      "hanzi": "仔细",
      "pinyin": "zǐ xì",
      "translations": [
        "careful",
        "attentive",
        "cautious"
      ]
    },
    {
      "id": 1188,
      "hanzi": "自然",
      "pinyin": "zì rán",
      "translations": [
        "nature",
        "natural",
        "naturally"
      ]
    },
    {
      "id": 1189,
      "hanzi": "总结",
      "pinyin": "zǒng jié",
      "translations": [
        "to sum up",
        "to conclude",
        "summary",
        "résumé",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1190,
      "hanzi": "租",
      "pinyin": "zū",
      "translations": [
        "to hire",
        "to rent",
        "to charter",
        "to rent out",
        "to lease out",
        "rent",
        "land tax"
      ]
    },
    {
      "id": 1191,
      "hanzi": "组成",
      "pinyin": "zǔ chéng",
      "translations": [
        "to form",
        "to make up",
        "to constitute"
      ]
    },
    {
      "id": 1192,
      "hanzi": "组织",
      "pinyin": "zǔ zhī",
      "translations": [
        "to organize",
        "organization",
        "organized system",
        "nerve",
        "tissue",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1193,
      "hanzi": "嘴",
      "pinyin": "zuǐ",
      "translations": [
        "mouth",
        "beak",
        "nozzle",
        "spout (of teapot etc)",
        "CL:張|张",
        "個|个[gè]"
      ]
    },
    {
      "id": 1194,
      "hanzi": "最好",
      "pinyin": "zuì hǎo",
      "translations": [
        "best",
        "(you) had better (do what we suggest)"
      ]
    },
    {
      "id": 1195,
      "hanzi": "最后",
      "pinyin": "zuì hòu",
      "translations": [
        "final",
        "last",
        "finally",
        "ultimate"
      ]
    },
    {
      "id": 1196,
      "hanzi": "尊重",
      "pinyin": "zūn zhòng",
      "translations": [
        "to esteem",
        "to respect",
        "to honor",
        "to value",
        "eminent",
        "serious",
        "proper"
      ]
    },
    {
      "id": 1197,
      "hanzi": "做生意",
      "pinyin": "zuò shēng yì",
      "translations": [
        "to do business"
      ]
    },
    {
      "id": 1198,
      "hanzi": "座",
      "pinyin": "zuò",
      "translations": [
        "seat",
        "base",
        "stand",
        "CL:個|个[gè]",
        "classifier for buildings",
        "mountains and similar immovable objects"
      ]
    },
    {
      "id": 1199,
      "hanzi": "座位",
      "pinyin": "zuò wèi",
      "translations": [
        "seat",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1200,
      "hanzi": "作者",
      "pinyin": "zuò zhě",
      "translations": [
        "author",
        "writer",
        "CL:個|个[gè]"
      ]
    }
  ]
  
  private _hanzi_hsk_5 = () => [
    {
      "id": 1201,
      "hanzi": "唉",
      "pinyin": "āi",
      "translations": [
        "interjection or grunt of agreement or recognition (e.g. yes, it's me!)",
        "to sigh"
      ]
    },
    {
      "id": 1202,
      "hanzi": "爱护",
      "pinyin": "ài hù",
      "translations": [
        "to cherish",
        "to treasure",
        "to take care of",
        "to love and protect"
      ]
    },
    {
      "id": 1203,
      "hanzi": "爱惜",
      "pinyin": "ài xī",
      "translations": [
        "to cherish",
        "to treasure",
        "to use sparingly"
      ]
    },
    {
      "id": 1204,
      "hanzi": "爱心",
      "pinyin": "ài xīn",
      "translations": [
        "compassion",
        "CL:片[piàn]"
      ]
    },
    {
      "id": 1205,
      "hanzi": "安慰",
      "pinyin": "ān wèi",
      "translations": [
        "to comfort",
        "to console",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1206,
      "hanzi": "安装",
      "pinyin": "ān zhuāng",
      "translations": [
        "to install",
        "to erect",
        "to fix",
        "to mount",
        "installation"
      ]
    },
    {
      "id": 1207,
      "hanzi": "岸",
      "pinyin": "àn",
      "translations": [
        "bank",
        "shore",
        "beach",
        "coast",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1208,
      "hanzi": "把握",
      "pinyin": "bǎ wò",
      "translations": [
        "to grasp (also fig.)",
        "to seize",
        "to hold",
        "assurance",
        "certainty",
        "sure (of the outcome)"
      ]
    },
    {
      "id": 1209,
      "hanzi": "摆",
      "pinyin": "bǎi",
      "translations": [
        "to arrange",
        "to exhibit",
        "to move to and fro",
        "a pendulum"
      ]
    },
    {
      "id": 1210,
      "hanzi": "班主任",
      "pinyin": "bān zhǔ rèn",
      "translations": [
        "teacher in charge of a class"
      ]
    },
    {
      "id": 1211,
      "hanzi": "办理",
      "pinyin": "bàn lǐ",
      "translations": [
        "to handle",
        "to transact",
        "to conduct"
      ]
    },
    {
      "id": 1212,
      "hanzi": "棒",
      "pinyin": "bàng",
      "translations": [
        "a stick",
        "club or cudgel",
        "smart",
        "capable",
        "strong",
        "wonderful",
        "classifier for legs of a relay race"
      ]
    },
    {
      "id": 1213,
      "hanzi": "傍晚",
      "pinyin": "bàng wǎn",
      "translations": [
        "in the evening",
        "when night falls",
        "towards evening",
        "at night fall",
        "at dusk"
      ]
    },
    {
      "id": 1214,
      "hanzi": "包裹",
      "pinyin": "bāo guǒ",
      "translations": [
        "wrap up",
        "bind up",
        "bundle",
        "parcel",
        "package",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1215,
      "hanzi": "包含",
      "pinyin": "bāo hán",
      "translations": [
        "to contain",
        "to embody",
        "to include"
      ]
    },
    {
      "id": 1216,
      "hanzi": "包子",
      "pinyin": "bāo zi",
      "translations": [
        "steamed stuffed bun",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1217,
      "hanzi": "薄",
      "pinyin": "báo",
      "translations": [
        "thin",
        "cold in manner",
        "indifferent",
        "weak",
        "light",
        "infertile"
      ]
    },
    {
      "id": 1218,
      "hanzi": "宝贝",
      "pinyin": "bǎo bèi",
      "translations": [
        "treasured object",
        "treasure",
        "darling",
        "baby",
        "cowry",
        "good-for-nothing or queer character"
      ]
    },
    {
      "id": 1219,
      "hanzi": "宝贵",
      "pinyin": "bǎo guì",
      "translations": [
        "valuable",
        "precious",
        "to value",
        "to treasure",
        "to set store by"
      ]
    },
    {
      "id": 1220,
      "hanzi": "保持",
      "pinyin": "bǎo chí",
      "translations": [
        "to keep",
        "to maintain",
        "to hold",
        "to preserve"
      ]
    },
    {
      "id": 1221,
      "hanzi": "保存",
      "pinyin": "bǎo cún",
      "translations": [
        "to conserve",
        "to preserve",
        "to keep",
        "to save (a file etc) (computing)"
      ]
    },
    {
      "id": 1222,
      "hanzi": "保留",
      "pinyin": "bǎo liú",
      "translations": [
        "to retain",
        "to continue to have",
        "to preserve",
        "to maintain",
        "to reserve",
        "reservations",
        "to hold back (approval or acceptance)"
      ]
    },
    {
      "id": 1223,
      "hanzi": "保险",
      "pinyin": "bǎo xiǎn",
      "translations": [
        "insurance",
        "to insure",
        "safe",
        "secure",
        "be sure",
        "be bound to",
        "CL:份[fèn]"
      ]
    },
    {
      "id": 1224,
      "hanzi": "报告",
      "pinyin": "bào gào",
      "translations": [
        "to inform",
        "to report",
        "to make known",
        "speech",
        "talk",
        "lecture",
        "CL:篇",
        "份",
        "個|个",
        "通[tòng]"
      ]
    },
    {
      "id": 1225,
      "hanzi": "悲观",
      "pinyin": "bēi guān",
      "translations": [
        "pessimistic"
      ]
    },
    {
      "id": 1226,
      "hanzi": "被子",
      "pinyin": "bèi zi",
      "translations": [
        "quilt",
        "CL:床[chuáng]"
      ]
    },
    {
      "id": 1227,
      "hanzi": "背",
      "pinyin": "bèi",
      "translations": [
        "the back of a body or object",
        "to turn one's back",
        "to hide something from",
        "to learn by heart",
        "to recite from memory",
        "unlucky (slang)",
        "hard of hearing"
      ]
    },
    {
      "id": 1228,
      "hanzi": "背景",
      "pinyin": "bèi jǐng",
      "translations": [
        "background",
        "backdrop",
        "context",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 1229,
      "hanzi": "本科",
      "pinyin": "běn kē",
      "translations": [
        "undergraduate course",
        "undergraduate (adjective)"
      ]
    },
    {
      "id": 1230,
      "hanzi": "本领",
      "pinyin": "běn lǐng",
      "translations": [
        "skill",
        "ability",
        "capability",
        "CL:項|项",
        "個|个[gè]"
      ]
    },
    {
      "id": 1231,
      "hanzi": "本质",
      "pinyin": "běn zhì",
      "translations": [
        "essence",
        "nature",
        "innate character",
        "intrinsic quality"
      ]
    },
    {
      "id": 1232,
      "hanzi": "比例",
      "pinyin": "bǐ lì",
      "translations": [
        "proportion",
        "scale"
      ]
    },
    {
      "id": 1233,
      "hanzi": "比如",
      "pinyin": "bǐ rú",
      "translations": [
        "for example",
        "for instance",
        "such as"
      ]
    },
    {
      "id": 1234,
      "hanzi": "彼此",
      "pinyin": "bǐ cǐ",
      "translations": [
        "each other",
        "one another"
      ]
    },
    {
      "id": 1235,
      "hanzi": "必然",
      "pinyin": "bì rán",
      "translations": [
        "inevitable",
        "certain",
        "necessity"
      ]
    },
    {
      "id": 1236,
      "hanzi": "必需",
      "pinyin": "bì xū",
      "translations": [
        "to need",
        "to require",
        "essential",
        "indispensable"
      ]
    },
    {
      "id": 1237,
      "hanzi": "必要",
      "pinyin": "bì yào",
      "translations": [
        "necessary",
        "essential",
        "indispensable",
        "required"
      ]
    },
    {
      "id": 1238,
      "hanzi": "毕竟",
      "pinyin": "bì jìng",
      "translations": [
        "after all",
        "all in all",
        "when all is said and done",
        "in the final analysis"
      ]
    },
    {
      "id": 1239,
      "hanzi": "避免",
      "pinyin": "bì miǎn",
      "translations": [
        "to avert",
        "to prevent",
        "to avoid",
        "to refrain from"
      ]
    },
    {
      "id": 1240,
      "hanzi": "鞭炮",
      "pinyin": "biān pào",
      "translations": [
        "firecrackers",
        "a string of small firecrackers",
        "CL:枚[méi]"
      ]
    },
    {
      "id": 1241,
      "hanzi": "编辑",
      "pinyin": "biān jí",
      "translations": [
        "to edit",
        "to compile",
        "editor",
        "compiler"
      ]
    },
    {
      "id": 1242,
      "hanzi": "便",
      "pinyin": "biàn",
      "translations": [
        "ordinary",
        "plain",
        "convenient",
        "as convenient",
        "when the chance arises",
        "handy",
        "easy",
        "informal",
        "simple",
        "so",
        "thus",
        "to relieve oneself",
        "to urinate",
        "to defecate",
        "equivalent to 就: then",
        "in that case",
        "even if",
        "soon afterwards"
      ]
    },
    {
      "id": 1243,
      "hanzi": "辩论",
      "pinyin": "biàn lùn",
      "translations": [
        "debate",
        "argument",
        "to argue over",
        "CL:場|场",
        "次[cì]"
      ]
    },
    {
      "id": 1244,
      "hanzi": "标点",
      "pinyin": "biāo diǎn",
      "translations": [
        "punctuation",
        "a punctuation mark",
        "to punctuate",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1245,
      "hanzi": "标志",
      "pinyin": "biāo zhì",
      "translations": [
        "sign",
        "mark",
        "symbol",
        "to symbolize",
        "to indicate",
        "to mark"
      ]
    },
    {
      "id": 1246,
      "hanzi": "表面",
      "pinyin": "biǎo miàn",
      "translations": [
        "surface",
        "face",
        "outside",
        "appearance"
      ]
    },
    {
      "id": 1247,
      "hanzi": "表明",
      "pinyin": "biǎo míng",
      "translations": [
        "to make clear",
        "to make known",
        "to state clearly",
        "to indicate",
        "known"
      ]
    },
    {
      "id": 1248,
      "hanzi": "表情",
      "pinyin": "biǎo qíng",
      "translations": [
        "(facial) expression",
        "to express one's feelings",
        "expression"
      ]
    },
    {
      "id": 1249,
      "hanzi": "表现",
      "pinyin": "biǎo xiàn",
      "translations": [
        "to show",
        "to show off",
        "to display",
        "to manifest",
        "expression",
        "manifestation",
        "show",
        "display",
        "performance (at work etc)",
        "behavior"
      ]
    },
    {
      "id": 1250,
      "hanzi": "丙",
      "pinyin": "bǐng",
      "translations": [
        "third of 10 heavenly stems 十天干",
        "third in order",
        "letter \"C\" or roman \"III\" in list \"A, B, C\"",
        "or \"I, II, III\" etc",
        "propyl"
      ]
    },
    {
      "id": 1251,
      "hanzi": "病毒",
      "pinyin": "bìng dú",
      "translations": [
        "virus"
      ]
    },
    {
      "id": 1252,
      "hanzi": "玻璃",
      "pinyin": "bō li",
      "translations": [
        "glass",
        "nylon",
        "plastic",
        "CL:張|张",
        "塊|块[kuài]"
      ]
    },
    {
      "id": 1253,
      "hanzi": "博物馆",
      "pinyin": "bó wù guǎn",
      "translations": [
        "museum"
      ]
    },
    {
      "id": 1254,
      "hanzi": "脖子",
      "pinyin": "bó zi",
      "translations": [
        "neck",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1255,
      "hanzi": "不必",
      "pinyin": "bù bì",
      "translations": [
        "need not",
        "does not have to",
        "not necessarily"
      ]
    },
    {
      "id": 1256,
      "hanzi": "不断",
      "pinyin": "bù duàn",
      "translations": [
        "unceasing",
        "uninterrupted",
        "continuous",
        "constant"
      ]
    },
    {
      "id": 1257,
      "hanzi": "不见得",
      "pinyin": "bù jiàn de",
      "translations": [
        "not necessarily",
        "not likely"
      ]
    },
    {
      "id": 1258,
      "hanzi": "不耐烦",
      "pinyin": "bù nài fán",
      "translations": [
        "impatience",
        "impatient"
      ]
    },
    {
      "id": 1259,
      "hanzi": "不要紧",
      "pinyin": "bù yào jǐn",
      "translations": [
        "unimportant",
        "not serious",
        "it doesn't matter",
        "never mind",
        "it looks all right",
        "but"
      ]
    },
    {
      "id": 1260,
      "hanzi": "补充",
      "pinyin": "bǔ chōng",
      "translations": [
        "to replenish",
        "to supplement",
        "to complement",
        "additional",
        "supplementary",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1261,
      "hanzi": "不安",
      "pinyin": "bù ān",
      "translations": [
        "unpeaceful",
        "unstable",
        "uneasy",
        "disturbed",
        "restless",
        "worried"
      ]
    },
    {
      "id": 1262,
      "hanzi": "不得了",
      "pinyin": "bù dé liǎo",
      "translations": [
        "desperately serious",
        "disastrous",
        "extremely",
        "exceedingly"
      ]
    },
    {
      "id": 1263,
      "hanzi": "不好意思",
      "pinyin": "bù hǎo yì si",
      "translations": [
        "to feel embarrassed",
        "to find it embarrassing",
        "to be sorry (for inconveniencing sb)"
      ]
    },
    {
      "id": 1264,
      "hanzi": "不免",
      "pinyin": "bù miǎn",
      "translations": [
        "inevitably"
      ]
    },
    {
      "id": 1265,
      "hanzi": "不然",
      "pinyin": "bù rán",
      "translations": [
        "not so",
        "no",
        "or else",
        "otherwise",
        "if not"
      ]
    },
    {
      "id": 1266,
      "hanzi": "不如",
      "pinyin": "bù rú",
      "translations": [
        "not equal to",
        "not as good as",
        "inferior to",
        "it would be better to"
      ]
    },
    {
      "id": 1267,
      "hanzi": "不足",
      "pinyin": "bù zú",
      "translations": [
        "insufficient",
        "lacking",
        "deficiency",
        "not enough",
        "inadequate",
        "not worth",
        "cannot",
        "should not"
      ]
    },
    {
      "id": 1268,
      "hanzi": "布",
      "pinyin": "bù",
      "translations": [
        "cloth",
        "to declare",
        "to announce",
        "to spread",
        "to make known"
      ]
    },
    {
      "id": 1269,
      "hanzi": "步骤",
      "pinyin": "bù zhòu",
      "translations": [
        "procedure",
        "step"
      ]
    },
    {
      "id": 1270,
      "hanzi": "部门",
      "pinyin": "bù mén",
      "translations": [
        "department",
        "branch",
        "section",
        "division",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1271,
      "hanzi": "财产",
      "pinyin": "cái chǎn",
      "translations": [
        "property",
        "CL:筆|笔[bǐ]"
      ]
    },
    {
      "id": 1272,
      "hanzi": "踩",
      "pinyin": "cǎi",
      "translations": [
        "to step on",
        "to tread",
        "to stamp",
        "to press a pedal",
        "to pedal (a bike)"
      ]
    },
    {
      "id": 1273,
      "hanzi": "采访",
      "pinyin": "cǎi fǎng",
      "translations": [
        "to interview",
        "to gather news",
        "to hunt for and collect",
        "to cover"
      ]
    },
    {
      "id": 1274,
      "hanzi": "采取",
      "pinyin": "cǎi qǔ",
      "translations": [
        "to adopt or carry out (measures, policies, course of action)",
        "to take"
      ]
    },
    {
      "id": 1275,
      "hanzi": "彩虹",
      "pinyin": "cǎi hóng",
      "translations": [
        "rainbow"
      ]
    },
    {
      "id": 1276,
      "hanzi": "参考",
      "pinyin": "cān kǎo",
      "translations": [
        "consultation",
        "reference",
        "to consult",
        "to refer"
      ]
    },
    {
      "id": 1277,
      "hanzi": "参与",
      "pinyin": "cān yù",
      "translations": [
        "to participate (in sth)"
      ]
    },
    {
      "id": 1278,
      "hanzi": "餐厅",
      "pinyin": "cān tīng",
      "translations": [
        "dining hall",
        "dining room",
        "restaurant",
        "CL:間|间",
        "家[jiā]"
      ]
    },
    {
      "id": 1279,
      "hanzi": "残疾",
      "pinyin": "cán jí",
      "translations": [
        "disabled",
        "handicapped",
        "deformity on a person or animal"
      ]
    },
    {
      "id": 1280,
      "hanzi": "惭愧",
      "pinyin": "cán kuì",
      "translations": [
        "ashamed"
      ]
    },
    {
      "id": 1281,
      "hanzi": "操场",
      "pinyin": "cāo chǎng",
      "translations": [
        "playground",
        "sports field",
        "drill ground",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1282,
      "hanzi": "操心",
      "pinyin": "cāo xīn",
      "translations": [
        "to worry about"
      ]
    },
    {
      "id": 1283,
      "hanzi": "册",
      "pinyin": "cè",
      "translations": [
        "book",
        "booklet",
        "classifier for books"
      ]
    },
    {
      "id": 1284,
      "hanzi": "测验",
      "pinyin": "cè yàn",
      "translations": [
        "test",
        "to test",
        "CL:次",
        "個|个[gè]"
      ]
    },
    {
      "id": 1285,
      "hanzi": "厕所",
      "pinyin": "cè suǒ",
      "translations": [
        "toilet",
        "lavatory",
        "CL:間|间",
        "處|处[chù]"
      ]
    },
    {
      "id": 1286,
      "hanzi": "曾经",
      "pinyin": "céng jīng",
      "translations": [
        "once",
        "already",
        "former",
        "previously",
        "ever",
        "(past tense marker used before verb or clause)"
      ]
    },
    {
      "id": 1287,
      "hanzi": "插",
      "pinyin": "chā",
      "translations": [
        "to insert",
        "stick in",
        "pierce",
        "to take part in",
        "to interfere",
        "to interpose"
      ]
    },
    {
      "id": 1288,
      "hanzi": "差别",
      "pinyin": "chā bié",
      "translations": [
        "difference",
        "distinction",
        "diversity",
        "disparity"
      ]
    },
    {
      "id": 1289,
      "hanzi": "叉子",
      "pinyin": "chā zi",
      "translations": [
        "fork",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 1290,
      "hanzi": "拆",
      "pinyin": "chāi",
      "translations": [
        "to tear open",
        "to tear down",
        "to tear apart",
        "to open"
      ]
    },
    {
      "id": 1291,
      "hanzi": "产品",
      "pinyin": "chǎn pǐn",
      "translations": [
        "goods",
        "merchandise",
        "product",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1292,
      "hanzi": "产生",
      "pinyin": "chǎn shēng",
      "translations": [
        "to arise",
        "to come into being",
        "to come about",
        "to give rise to",
        "to bring into being",
        "to bring about",
        "to produce",
        "to engender",
        "to generate",
        "to appear",
        "appearance",
        "emergence",
        "generation",
        "production",
        "yield"
      ]
    },
    {
      "id": 1293,
      "hanzi": "长途",
      "pinyin": "cháng tú",
      "translations": [
        "long distance"
      ]
    },
    {
      "id": 1294,
      "hanzi": "常识",
      "pinyin": "cháng shí",
      "translations": [
        "common sense",
        "general knowledge",
        "CL:門|门[mén]"
      ]
    },
    {
      "id": 1295,
      "hanzi": "抄",
      "pinyin": "chāo",
      "translations": [
        "to make a copy",
        "to plagiarize",
        "to search and seize",
        "to raid",
        "to grab",
        "to go off with",
        "to take a shortcut",
        "to make a turning move",
        "to fold one's arms"
      ]
    },
    {
      "id": 1296,
      "hanzi": "朝",
      "pinyin": "cháo",
      "translations": [
        "imperial or royal court",
        "government",
        "dynasty",
        "reign of a sovereign or emperor",
        "court or assembly held by a sovereign or emperor",
        "to make a pilgrimage to",
        "facing",
        "towards"
      ]
    },
    {
      "id": 1297,
      "hanzi": "朝代",
      "pinyin": "cháo dài",
      "translations": [
        "dynasty",
        "reign (of a king)"
      ]
    },
    {
      "id": 1298,
      "hanzi": "炒",
      "pinyin": "chǎo",
      "translations": [
        "to sauté",
        "to stir-fry",
        "to speculate",
        "to hype",
        "to fire (sb)"
      ]
    },
    {
      "id": 1299,
      "hanzi": "吵架",
      "pinyin": "chǎo jià",
      "translations": [
        "to quarrel",
        "to have a row",
        "quarrel",
        "CL:頓|顿[dùn]"
      ]
    },
    {
      "id": 1300,
      "hanzi": "车库",
      "pinyin": "chē kù",
      "translations": [
        "garage"
      ]
    },
    {
      "id": 1301,
      "hanzi": "车厢",
      "pinyin": "chē xiāng",
      "translations": [
        "carriage",
        "CL:節|节[jié]"
      ]
    },
    {
      "id": 1302,
      "hanzi": "彻底",
      "pinyin": "chè dǐ",
      "translations": [
        "thorough",
        "thoroughly",
        "complete"
      ]
    },
    {
      "id": 1303,
      "hanzi": "沉默",
      "pinyin": "chén mò",
      "translations": [
        "taciturn",
        "uncommunicative",
        "silent"
      ]
    },
    {
      "id": 1304,
      "hanzi": "趁",
      "pinyin": "chèn",
      "translations": [
        "to avail oneself of",
        "to take advantage of"
      ]
    },
    {
      "id": 1305,
      "hanzi": "称",
      "pinyin": "chēng",
      "translations": [
        "to weigh",
        "to state",
        "to name",
        "name",
        "appellation",
        "to praise"
      ]
    },
    {
      "id": 1306,
      "hanzi": "称呼",
      "pinyin": "chēng hu",
      "translations": [
        "to call",
        "to address as",
        "appellation"
      ]
    },
    {
      "id": 1307,
      "hanzi": "称赞",
      "pinyin": "chēng zàn",
      "translations": [
        "to praise",
        "to acclaim",
        "to commend",
        "to compliment"
      ]
    },
    {
      "id": 1308,
      "hanzi": "乘",
      "pinyin": "chéng",
      "translations": [
        "to ride",
        "to mount",
        "to make use of",
        "to avail oneself of",
        "to take advantage of",
        "to multiply (mathematics)",
        "Buddhist sect or creed"
      ]
    },
    {
      "id": 1309,
      "hanzi": "承担",
      "pinyin": "chéng dān",
      "translations": [
        "to undertake",
        "to assume (responsibility etc)"
      ]
    },
    {
      "id": 1310,
      "hanzi": "承认",
      "pinyin": "chéng rèn",
      "translations": [
        "to admit",
        "to concede",
        "to recognize",
        "recognition (diplomatic, artistic etc)",
        "to acknowledge"
      ]
    },
    {
      "id": 1311,
      "hanzi": "承受",
      "pinyin": "chéng shòu",
      "translations": [
        "to bear",
        "to support",
        "to inherit"
      ]
    },
    {
      "id": 1312,
      "hanzi": "成分",
      "pinyin": "chéng fèn",
      "translations": [
        "composition",
        "make-up",
        "ingredient",
        "element",
        "component",
        "one's social status",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1313,
      "hanzi": "成果",
      "pinyin": "chéng guǒ",
      "translations": [
        "result",
        "achievement",
        "gain",
        "profit",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1314,
      "hanzi": "成就",
      "pinyin": "chéng jiù",
      "translations": [
        "accomplishment",
        "success",
        "attain a result",
        "achievement",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1315,
      "hanzi": "成立",
      "pinyin": "chéng lì",
      "translations": [
        "to establish",
        "to set up",
        "to be tenable",
        "to hold water"
      ]
    },
    {
      "id": 1316,
      "hanzi": "成语",
      "pinyin": "chéng yǔ",
      "translations": [
        "Chinese set expression",
        "often made up of 4 characters or two couplets of 4 characters each",
        "often alluding to a story or historical quotation",
        "idiom; proverb; saying; adage; set expression",
        "CL:條|条",
        "本",
        "句[jù]"
      ]
    },
    {
      "id": 1317,
      "hanzi": "成长",
      "pinyin": "chéng zhǎng",
      "translations": [
        "to mature",
        "to grow",
        "growth"
      ]
    },
    {
      "id": 1318,
      "hanzi": "程度",
      "pinyin": "chéng dù",
      "translations": [
        "degree (level or extent)",
        "level",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1319,
      "hanzi": "程序",
      "pinyin": "chéng xù",
      "translations": [
        "procedures",
        "sequence",
        "order",
        "computer program"
      ]
    },
    {
      "id": 1320,
      "hanzi": "诚恳",
      "pinyin": "chéng kěn",
      "translations": [
        "sincere",
        "honest",
        "cordial"
      ]
    },
    {
      "id": 1321,
      "hanzi": "吃亏",
      "pinyin": "chī kuī",
      "translations": [
        "to suffer losses",
        "to come to grief",
        "to lose out",
        "to get the worst of it",
        "to be at a disadvantage",
        "unfortunately"
      ]
    },
    {
      "id": 1322,
      "hanzi": "持续",
      "pinyin": "chí xù",
      "translations": [
        "to continue",
        "to persist",
        "sustainable",
        "preservation"
      ]
    },
    {
      "id": 1323,
      "hanzi": "池子",
      "pinyin": "chí zi",
      "translations": [
        "pond",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1324,
      "hanzi": "尺子",
      "pinyin": "chǐ zi",
      "translations": [
        "rule",
        "ruler (measuring instrument)",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 1325,
      "hanzi": "翅膀",
      "pinyin": "chì bǎng",
      "translations": [
        "wing",
        "CL:個|个",
        "對|对[duì]"
      ]
    },
    {
      "id": 1326,
      "hanzi": "冲",
      "pinyin": "chōng",
      "translations": [
        "thoroughfare",
        "to go straight ahead",
        "to rush",
        "to clash"
      ]
    },
    {
      "id": 1327,
      "hanzi": "充电器",
      "pinyin": "chōng diàn qì",
      "translations": [
        "battery charger"
      ]
    },
    {
      "id": 1328,
      "hanzi": "充分",
      "pinyin": "chōng fèn",
      "translations": [
        "ample",
        "sufficient",
        "adequate",
        "full",
        "fully",
        "to the full"
      ]
    },
    {
      "id": 1329,
      "hanzi": "充满",
      "pinyin": "chōng mǎn",
      "translations": [
        "full of",
        "brimming with",
        "very full",
        "permeated"
      ]
    },
    {
      "id": 1330,
      "hanzi": "重复",
      "pinyin": "chóng fù",
      "translations": [
        "to repeat",
        "to duplicate",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1331,
      "hanzi": "宠物",
      "pinyin": "chǒng wù",
      "translations": [
        "house pet"
      ]
    },
    {
      "id": 1332,
      "hanzi": "抽屉",
      "pinyin": "chōu ti",
      "translations": [
        "drawer"
      ]
    },
    {
      "id": 1333,
      "hanzi": "抽象",
      "pinyin": "chōu xiàng",
      "translations": [
        "abstract",
        "abstraction",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 1334,
      "hanzi": "丑",
      "pinyin": "chǒu",
      "translations": [
        "shameful",
        "ugly",
        "disgraceful"
      ]
    },
    {
      "id": 1335,
      "hanzi": "臭",
      "pinyin": "chòu",
      "translations": [
        "stench",
        "stink",
        "smelly",
        "to smell (bad)"
      ]
    },
    {
      "id": 1336,
      "hanzi": "出版",
      "pinyin": "chū bǎn",
      "translations": [
        "to publish",
        "to come off the press",
        "to put out"
      ]
    },
    {
      "id": 1337,
      "hanzi": "出口",
      "pinyin": "chū kǒu",
      "translations": [
        "an exit",
        "CL:個|个[gè]",
        "to speak",
        "to export",
        "(of a ship) to leave port"
      ]
    },
    {
      "id": 1338,
      "hanzi": "出色",
      "pinyin": "chū sè",
      "translations": [
        "remarkable",
        "outstanding"
      ]
    },
    {
      "id": 1339,
      "hanzi": "出席",
      "pinyin": "chū xí",
      "translations": [
        "to attend",
        "to participate",
        "present"
      ]
    },
    {
      "id": 1340,
      "hanzi": "初级",
      "pinyin": "chū jí",
      "translations": [
        "junior",
        "primary"
      ]
    },
    {
      "id": 1341,
      "hanzi": "除",
      "pinyin": "chú",
      "translations": [
        "to get rid of",
        "to remove",
        "to exclude",
        "to eliminate",
        "to wipe out",
        "to divide",
        "except",
        "not including"
      ]
    },
    {
      "id": 1342,
      "hanzi": "除非",
      "pinyin": "chú fēi",
      "translations": [
        "only if (..., or otherwise, ...)",
        "only when",
        "only in the case that",
        "unless"
      ]
    },
    {
      "id": 1343,
      "hanzi": "除夕",
      "pinyin": "chú xī",
      "translations": [
        "(New Year's) Eve"
      ]
    },
    {
      "id": 1344,
      "hanzi": "处理",
      "pinyin": "chǔ lǐ",
      "translations": [
        "to handle",
        "to treat",
        "to deal with",
        "to process",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1345,
      "hanzi": "传播",
      "pinyin": "chuán bō",
      "translations": [
        "to disseminate",
        "to propagate",
        "to spread"
      ]
    },
    {
      "id": 1346,
      "hanzi": "传递",
      "pinyin": "chuán dì",
      "translations": [
        "to transmit",
        "to pass on to sb else"
      ]
    },
    {
      "id": 1347,
      "hanzi": "传染",
      "pinyin": "chuán rǎn",
      "translations": [
        "to infect",
        "contagious"
      ]
    },
    {
      "id": 1348,
      "hanzi": "传说",
      "pinyin": "chuán shuō",
      "translations": [
        "legend",
        "folklore",
        "tradition",
        "it is said",
        "they say that..."
      ]
    },
    {
      "id": 1349,
      "hanzi": "传统",
      "pinyin": "chuán tǒng",
      "translations": [
        "tradition",
        "traditional",
        "convention",
        "conventional",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1350,
      "hanzi": "窗帘",
      "pinyin": "chuāng lián",
      "translations": [
        "window curtains"
      ]
    },
    {
      "id": 1351,
      "hanzi": "闯",
      "pinyin": "chuǎng",
      "translations": [
        "to rush",
        "to charge",
        "to dash",
        "to break through",
        "to temper oneself (through battling hardships)"
      ]
    },
    {
      "id": 1352,
      "hanzi": "创造",
      "pinyin": "chuàng zào",
      "translations": [
        "to create",
        "to bring about",
        "to produce",
        "to set (a record)"
      ]
    },
    {
      "id": 1353,
      "hanzi": "吹",
      "pinyin": "chuī",
      "translations": [
        "to blow",
        "to play a wind instrument",
        "to blast",
        "to puff",
        "to boast",
        "to brag",
        "to end in failure",
        "to fall through"
      ]
    },
    {
      "id": 1354,
      "hanzi": "磁带",
      "pinyin": "cí dài",
      "translations": [
        "magnetic tape",
        "CL:盤|盘",
        "盒[hé]"
      ]
    },
    {
      "id": 1355,
      "hanzi": "辞职",
      "pinyin": "cí zhí",
      "translations": [
        "to resign"
      ]
    },
    {
      "id": 1356,
      "hanzi": "此外",
      "pinyin": "cǐ wài",
      "translations": [
        "besides",
        "in addition",
        "moreover",
        "furthermore"
      ]
    },
    {
      "id": 1357,
      "hanzi": "刺激",
      "pinyin": "cì jī",
      "translations": [
        "to provoke",
        "to irritate",
        "to upset",
        "to stimulate",
        "to excite",
        "irritant"
      ]
    },
    {
      "id": 1358,
      "hanzi": "次要",
      "pinyin": "cì yào",
      "translations": [
        "secondary"
      ]
    },
    {
      "id": 1359,
      "hanzi": "匆忙",
      "pinyin": "cōng máng",
      "translations": [
        "hasty",
        "hurried"
      ]
    },
    {
      "id": 1360,
      "hanzi": "从此",
      "pinyin": "cóng cǐ",
      "translations": [
        "from now on",
        "since then",
        "henceforth"
      ]
    },
    {
      "id": 1361,
      "hanzi": "从而",
      "pinyin": "cóng ér",
      "translations": [
        "thus",
        "thereby"
      ]
    },
    {
      "id": 1362,
      "hanzi": "从前",
      "pinyin": "cóng qián",
      "translations": [
        "previously",
        "formerly",
        "once upon a time"
      ]
    },
    {
      "id": 1363,
      "hanzi": "从事",
      "pinyin": "cóng shì",
      "translations": [
        "to go for",
        "to engage in",
        "to undertake",
        "to deal with",
        "to handle",
        "to do"
      ]
    },
    {
      "id": 1364,
      "hanzi": "醋",
      "pinyin": "cù",
      "translations": [
        "vinegar"
      ]
    },
    {
      "id": 1365,
      "hanzi": "促进",
      "pinyin": "cù jìn",
      "translations": [
        "to promote (an idea or cause)",
        "to advance",
        "boost"
      ]
    },
    {
      "id": 1366,
      "hanzi": "促使",
      "pinyin": "cù shǐ",
      "translations": [
        "to induce",
        "to promote",
        "to urge",
        "to impel",
        "to bring about",
        "to provoke",
        "to drive (sb to do sth)",
        "to catalyze",
        "to actuate",
        "to contribute to (some development)"
      ]
    },
    {
      "id": 1367,
      "hanzi": "催",
      "pinyin": "cuī",
      "translations": [
        "to urge",
        "to press",
        "to prompt",
        "to rush sb",
        "to hasten sth",
        "to expedite"
      ]
    },
    {
      "id": 1368,
      "hanzi": "存",
      "pinyin": "cún",
      "translations": [
        "to exist",
        "to deposit",
        "to store",
        "to keep",
        "to survive"
      ]
    },
    {
      "id": 1369,
      "hanzi": "存在",
      "pinyin": "cún zài",
      "translations": [
        "to exist",
        "to be",
        "existence"
      ]
    },
    {
      "id": 1370,
      "hanzi": "错误",
      "pinyin": "cuò wù",
      "translations": [
        "error",
        "mistake",
        "CL:個|个[gè]",
        "mistaken",
        "false",
        "wrong"
      ]
    },
    {
      "id": 1371,
      "hanzi": "措施",
      "pinyin": "cuò shī",
      "translations": [
        "measure",
        "step",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1372,
      "hanzi": "答应",
      "pinyin": "dā ying",
      "translations": [
        "to promise",
        "to agree",
        "to reply",
        "to respond"
      ]
    },
    {
      "id": 1373,
      "hanzi": "达到",
      "pinyin": "dá dào",
      "translations": [
        "to reach",
        "to achieve",
        "to attain"
      ]
    },
    {
      "id": 1374,
      "hanzi": "打工",
      "pinyin": "dǎ gōng",
      "translations": [
        "to work a temporary or casual job",
        "(of students) to have a job outside of class time",
        "or during vacation"
      ]
    },
    {
      "id": 1375,
      "hanzi": "打交道",
      "pinyin": "dǎ jiāo dào",
      "translations": [
        "to come into contact with",
        "to have dealings"
      ]
    },
    {
      "id": 1376,
      "hanzi": "打喷嚏",
      "pinyin": "dǎ pēn tì",
      "translations": [
        "to sneeze"
      ]
    },
    {
      "id": 1377,
      "hanzi": "打听",
      "pinyin": "dǎ ting",
      "translations": [
        "to ask about",
        "to inquire about"
      ]
    },
    {
      "id": 1378,
      "hanzi": "打招呼",
      "pinyin": "dǎ zhāo hu",
      "translations": [
        "to greet sb by word or action",
        "to give prior notice"
      ]
    },
    {
      "id": 1379,
      "hanzi": "大方",
      "pinyin": "dà fang",
      "translations": [
        "generous",
        "magnanimous",
        "stylish",
        "in good taste",
        "easy-mannered",
        "natural and relaxed"
      ]
    },
    {
      "id": 1380,
      "hanzi": "大象",
      "pinyin": "dà xiàng",
      "translations": [
        "elephant",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 1381,
      "hanzi": "大型",
      "pinyin": "dà xíng",
      "translations": [
        "large",
        "large-scale"
      ]
    },
    {
      "id": 1382,
      "hanzi": "呆",
      "pinyin": "dāi",
      "translations": [
        "foolish",
        "stupid",
        "expressionless",
        "blank",
        "to stay"
      ]
    },
    {
      "id": 1383,
      "hanzi": "贷款",
      "pinyin": "dài kuǎn",
      "translations": [
        "a loan",
        "to provide a loan (e.g. bank)",
        "CL:筆|笔[bǐ]"
      ]
    },
    {
      "id": 1384,
      "hanzi": "待遇",
      "pinyin": "dài yù",
      "translations": [
        "treatment",
        "pay",
        "wages",
        "status",
        "salary"
      ]
    },
    {
      "id": 1385,
      "hanzi": "担任",
      "pinyin": "dān rèn",
      "translations": [
        "to hold a governmental office or post",
        "to assume office of",
        "to take charge of",
        "to serve as"
      ]
    },
    {
      "id": 1386,
      "hanzi": "单纯",
      "pinyin": "dān chún",
      "translations": [
        "simple",
        "pure",
        "alone",
        "merely"
      ]
    },
    {
      "id": 1387,
      "hanzi": "单调",
      "pinyin": "dān diào",
      "translations": [
        "monotonous"
      ]
    },
    {
      "id": 1388,
      "hanzi": "单独",
      "pinyin": "dān dú",
      "translations": [
        "alone",
        "by oneself",
        "on one's own"
      ]
    },
    {
      "id": 1389,
      "hanzi": "单位",
      "pinyin": "dān wèi",
      "translations": [
        "a unit",
        "unit (of measure)",
        "work unit (one's workplace)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1390,
      "hanzi": "单元",
      "pinyin": "dān yuán",
      "translations": [
        "unit",
        "entrance number",
        "staircase (for residential buildings)"
      ]
    },
    {
      "id": 1391,
      "hanzi": "耽误",
      "pinyin": "dān wu",
      "translations": [
        "to delay",
        "to hold up",
        "to waste time",
        "to interfere with"
      ]
    },
    {
      "id": 1392,
      "hanzi": "胆小鬼",
      "pinyin": "dǎn xiǎo guǐ",
      "translations": [
        "coward"
      ]
    },
    {
      "id": 1393,
      "hanzi": "淡",
      "pinyin": "dàn",
      "translations": [
        "insipid",
        "diluted",
        "weak",
        "mild",
        "light in color",
        "tasteless",
        "fresh",
        "indifferent",
        "nitrogen"
      ]
    },
    {
      "id": 1394,
      "hanzi": "当代",
      "pinyin": "dāng dài",
      "translations": [
        "the present age",
        "the contemporary era"
      ]
    },
    {
      "id": 1395,
      "hanzi": "挡",
      "pinyin": "dǎng",
      "translations": [
        "to resist",
        "to obstruct",
        "to hinder",
        "to keep off",
        "to block (a blow)",
        "to get in the way of",
        "cover",
        "gear"
      ]
    },
    {
      "id": 1396,
      "hanzi": "岛",
      "pinyin": "dǎo",
      "translations": [
        "island",
        "CL:個|个",
        "座[zuò]"
      ]
    },
    {
      "id": 1397,
      "hanzi": "倒霉",
      "pinyin": "dǎo méi",
      "translations": [
        "to have bad luck",
        "to be out of luck"
      ]
    },
    {
      "id": 1398,
      "hanzi": "导演",
      "pinyin": "dǎo yǎn",
      "translations": [
        "to direct",
        "director (film etc)"
      ]
    },
    {
      "id": 1399,
      "hanzi": "导致",
      "pinyin": "dǎo zhì",
      "translations": [
        "to lead to",
        "to create",
        "to cause",
        "to bring about"
      ]
    },
    {
      "id": 1400,
      "hanzi": "倒",
      "pinyin": "dào",
      "translations": [
        "to place upside down",
        "to invert",
        "to pour",
        "to throw out",
        "to move backwards",
        "however",
        "actually",
        "as a matter of fact",
        "contrary to expectation"
      ]
    },
    {
      "id": 1401,
      "hanzi": "到达",
      "pinyin": "dào dá",
      "translations": [
        "to reach",
        "to arrive"
      ]
    },
    {
      "id": 1402,
      "hanzi": "道德",
      "pinyin": "dào dé",
      "translations": [
        "virtue",
        "morality",
        "ethics",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 1403,
      "hanzi": "道理",
      "pinyin": "dào li",
      "translations": [
        "reason",
        "argument",
        "sense",
        "principle",
        "basis",
        "justification",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1404,
      "hanzi": "登机牌",
      "pinyin": "dēng jī pái",
      "translations": [
        "boarding pass"
      ]
    },
    {
      "id": 1405,
      "hanzi": "登记",
      "pinyin": "dēng jì",
      "translations": [
        "to register (one's name)"
      ]
    },
    {
      "id": 1406,
      "hanzi": "等待",
      "pinyin": "děng dài",
      "translations": [
        "to wait",
        "to wait for"
      ]
    },
    {
      "id": 1407,
      "hanzi": "等候",
      "pinyin": "děng hòu",
      "translations": [
        "to wait",
        "to wait for"
      ]
    },
    {
      "id": 1408,
      "hanzi": "等于",
      "pinyin": "děng yú",
      "translations": [
        "to equal",
        "to be tantamount to"
      ]
    },
    {
      "id": 1409,
      "hanzi": "滴",
      "pinyin": "dī",
      "translations": [
        "a drop",
        "to drip"
      ]
    },
    {
      "id": 1410,
      "hanzi": "的确",
      "pinyin": "dí què",
      "translations": [
        "really",
        "indeed"
      ]
    },
    {
      "id": 1411,
      "hanzi": "敌人",
      "pinyin": "dí rén",
      "translations": [
        "enemy",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1412,
      "hanzi": "递",
      "pinyin": "dì",
      "translations": [
        "to hand over",
        "to pass on sth",
        "to gradually increase or decrease",
        "progressively"
      ]
    },
    {
      "id": 1413,
      "hanzi": "地道",
      "pinyin": "dì dao",
      "translations": [
        "authentic",
        "genuine",
        "typical",
        "from a place known for the product",
        "thorough",
        "conscientious"
      ]
    },
    {
      "id": 1414,
      "hanzi": "地理",
      "pinyin": "dì lǐ",
      "translations": [
        "geography"
      ]
    },
    {
      "id": 1415,
      "hanzi": "地区",
      "pinyin": "dì qū",
      "translations": [
        "local",
        "regional",
        "district (not necessarily formal administrative unit)",
        "region",
        "area",
        "as suffix to city name",
        "means prefecture or county (area administered by a prefecture level city or county level city)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1416,
      "hanzi": "地毯",
      "pinyin": "dì tǎn",
      "translations": [
        "carpet",
        "rug"
      ]
    },
    {
      "id": 1417,
      "hanzi": "地位",
      "pinyin": "dì wèi",
      "translations": [
        "position",
        "status",
        "place",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1418,
      "hanzi": "地震",
      "pinyin": "dì zhèn",
      "translations": [
        "earthquake"
      ]
    },
    {
      "id": 1419,
      "hanzi": "点头",
      "pinyin": "diǎn tóu",
      "translations": [
        "to nod"
      ]
    },
    {
      "id": 1420,
      "hanzi": "点心",
      "pinyin": "diǎn xin",
      "translations": [
        "light refreshments",
        "pastry",
        "dimsum (in Cantonese cooking)",
        "dessert"
      ]
    },
    {
      "id": 1421,
      "hanzi": "电池",
      "pinyin": "diàn chí",
      "translations": [
        "battery",
        "CL:節|节",
        "組|组[zǔ]"
      ]
    },
    {
      "id": 1422,
      "hanzi": "电台",
      "pinyin": "diàn tái",
      "translations": [
        "transmitter-receiver",
        "broadcasting station",
        "radio station",
        "CL:個|个",
        "家[jiā]"
      ]
    },
    {
      "id": 1423,
      "hanzi": "钓",
      "pinyin": "diào",
      "translations": [
        "to fish with a hook and bait"
      ]
    },
    {
      "id": 1424,
      "hanzi": "丁",
      "pinyin": "dīng",
      "translations": [
        "fourth of 10 heavenly stems 十天干",
        "fourth in order",
        "letter \"D\" or roman \"IV\" in list \"A, B, C\"",
        "or \"I, II, III\" etc",
        "butyl",
        "cubes (of food)"
      ]
    },
    {
      "id": 1425,
      "hanzi": "顶",
      "pinyin": "dǐng",
      "translations": [
        "apex",
        "crown of the head",
        "top",
        "roof",
        "to carry on the head",
        "to push to the top",
        "to go against",
        "most",
        "to replace",
        "to substitute",
        "classifier for headwear",
        "hats",
        "veils etc",
        "to \"bump\" a forum thread to raise its profile (internet slang)"
      ]
    },
    {
      "id": 1426,
      "hanzi": "冻",
      "pinyin": "dòng",
      "translations": [
        "to freeze",
        "to feel very cold",
        "aspic or jelly"
      ]
    },
    {
      "id": 1427,
      "hanzi": "洞",
      "pinyin": "dòng",
      "translations": [
        "cave",
        "hole",
        "zero (unambiguous spoken form when spelling out numbers)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1428,
      "hanzi": "动画片",
      "pinyin": "dòng huà piàn",
      "translations": [
        "animated film"
      ]
    },
    {
      "id": 1429,
      "hanzi": "逗",
      "pinyin": "dòu",
      "translations": [
        "to stay",
        "to stop",
        "to pause (while reading)",
        "to tease (play with)"
      ]
    },
    {
      "id": 1430,
      "hanzi": "豆腐",
      "pinyin": "dòu fu",
      "translations": [
        "tofu",
        "bean curd"
      ]
    },
    {
      "id": 1431,
      "hanzi": "独立",
      "pinyin": "dú lì",
      "translations": [
        "independent",
        "independence",
        "to stand alone"
      ]
    },
    {
      "id": 1432,
      "hanzi": "独特",
      "pinyin": "dú tè",
      "translations": [
        "unique",
        "distinct",
        "having special characteristics"
      ]
    },
    {
      "id": 1433,
      "hanzi": "度过",
      "pinyin": "dù guò",
      "translations": [
        "to pass",
        "to spend (time)",
        "to survive",
        "to get through"
      ]
    },
    {
      "id": 1434,
      "hanzi": "短信",
      "pinyin": "duǎn xìn",
      "translations": [
        "text message",
        "SMS"
      ]
    },
    {
      "id": 1435,
      "hanzi": "堆",
      "pinyin": "duī",
      "translations": [
        "to pile up",
        "to heap up",
        "a mass",
        "pile",
        "heap",
        "stack",
        "large amount"
      ]
    },
    {
      "id": 1436,
      "hanzi": "对比",
      "pinyin": "duì bǐ",
      "translations": [
        "to contrast",
        "contrast",
        "ratio",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1437,
      "hanzi": "对待",
      "pinyin": "duì dài",
      "translations": [
        "to treat",
        "treatment"
      ]
    },
    {
      "id": 1438,
      "hanzi": "对方",
      "pinyin": "duì fāng",
      "translations": [
        "counterpart",
        "other person involved",
        "opposite side",
        "other side",
        "receiving party"
      ]
    },
    {
      "id": 1439,
      "hanzi": "对手",
      "pinyin": "duì shǒu",
      "translations": [
        "opponent",
        "adversary",
        "match"
      ]
    },
    {
      "id": 1440,
      "hanzi": "对象",
      "pinyin": "duì xiàng",
      "translations": [
        "target",
        "object",
        "partner",
        "boyfriend",
        "girlfriend",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1441,
      "hanzi": "对于",
      "pinyin": "duì yú",
      "translations": [
        "regarding",
        "as far as sth is concerned",
        "with regards to"
      ]
    },
    {
      "id": 1442,
      "hanzi": "吨",
      "pinyin": "dūn",
      "translations": [
        "ton",
        "Taiwan pr. [dùn]"
      ]
    },
    {
      "id": 1443,
      "hanzi": "蹲",
      "pinyin": "dūn",
      "translations": [
        "to crouch",
        "to squat"
      ]
    },
    {
      "id": 1444,
      "hanzi": "多亏",
      "pinyin": "duō kuī",
      "translations": [
        "thanks to",
        "luckily"
      ]
    },
    {
      "id": 1445,
      "hanzi": "多余",
      "pinyin": "duō yú",
      "translations": [
        "superfluous",
        "unnecessary",
        "surplus"
      ]
    },
    {
      "id": 1446,
      "hanzi": "躲藏",
      "pinyin": "duǒ cáng",
      "translations": [
        "to hide oneself"
      ]
    },
    {
      "id": 1447,
      "hanzi": "恶劣",
      "pinyin": "è liè",
      "translations": [
        "vile",
        "nasty",
        "of very poor quality"
      ]
    },
    {
      "id": 1448,
      "hanzi": "发表",
      "pinyin": "fā biǎo",
      "translations": [
        "to issue",
        "to publish"
      ]
    },
    {
      "id": 1449,
      "hanzi": "发愁",
      "pinyin": "fā chóu",
      "translations": [
        "to worry",
        "to fret",
        "to be anxious",
        "to become sad"
      ]
    },
    {
      "id": 1450,
      "hanzi": "发达",
      "pinyin": "fā dá",
      "translations": [
        "developed (country etc)",
        "flourishing",
        "to develop"
      ]
    },
    {
      "id": 1451,
      "hanzi": "发抖",
      "pinyin": "fā dǒu",
      "translations": [
        "to tremble",
        "to shake",
        "to shiver"
      ]
    },
    {
      "id": 1452,
      "hanzi": "发挥",
      "pinyin": "fā huī",
      "translations": [
        "to display",
        "to exhibit",
        "to bring out implicit or innate qualities",
        "to express (a thought or moral)",
        "to develop (an idea)",
        "to elaborate (on a theme)"
      ]
    },
    {
      "id": 1453,
      "hanzi": "发明",
      "pinyin": "fā míng",
      "translations": [
        "to invent",
        "invention",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1454,
      "hanzi": "发票",
      "pinyin": "fā piào",
      "translations": [
        "invoice",
        "receipt or bill for purchase"
      ]
    },
    {
      "id": 1455,
      "hanzi": "发言",
      "pinyin": "fā yán",
      "translations": [
        "to make a speech",
        "statement",
        "utterance",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1456,
      "hanzi": "罚款",
      "pinyin": "fá kuǎn",
      "translations": [
        "(impose a) fine",
        "penalty",
        "fine (monetary)"
      ]
    },
    {
      "id": 1457,
      "hanzi": "法院",
      "pinyin": "fǎ yuàn",
      "translations": [
        "court of law",
        "court"
      ]
    },
    {
      "id": 1458,
      "hanzi": "翻",
      "pinyin": "fān",
      "translations": [
        "to turn over",
        "to flip over",
        "to overturn",
        "to rummage through",
        "to translate",
        "to decode",
        "to double",
        "to climb over or into",
        "to cross"
      ]
    },
    {
      "id": 1459,
      "hanzi": "繁荣",
      "pinyin": "fán róng",
      "translations": [
        "prosperous",
        "booming (economy)"
      ]
    },
    {
      "id": 1460,
      "hanzi": "凡是",
      "pinyin": "fán shì",
      "translations": [
        "each and every",
        "every",
        "all",
        "any"
      ]
    },
    {
      "id": 1461,
      "hanzi": "反而",
      "pinyin": "fǎn ér",
      "translations": [
        "instead",
        "on the contrary",
        "contrary (to expectations)"
      ]
    },
    {
      "id": 1462,
      "hanzi": "反复",
      "pinyin": "fǎn fù",
      "translations": [
        "repeatedly",
        "over and over"
      ]
    },
    {
      "id": 1463,
      "hanzi": "反应",
      "pinyin": "fǎn yìng",
      "translations": [
        "to react",
        "to respond",
        "reaction",
        "response",
        "reply",
        "chemical reaction",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1464,
      "hanzi": "反正",
      "pinyin": "fǎn zhèng",
      "translations": [
        "anyway",
        "in any case",
        "to come over from the enemy's side"
      ]
    },
    {
      "id": 1465,
      "hanzi": "方",
      "pinyin": "fāng",
      "translations": [
        "square",
        "power or involution (mathematics)",
        "upright",
        "honest",
        "fair and square",
        "direction",
        "side",
        "party (to a contract, dispute etc)",
        "place",
        "method",
        "prescription (medicine)",
        "just when",
        "only or just",
        "classifier for square things",
        "abbr. for square or cubic meter"
      ]
    },
    {
      "id": 1466,
      "hanzi": "方案",
      "pinyin": "fāng àn",
      "translations": [
        "plan",
        "program (for action etc)",
        "proposal",
        "proposed bill",
        "CL:個|个",
        "套[tào]"
      ]
    },
    {
      "id": 1467,
      "hanzi": "方式",
      "pinyin": "fāng shì",
      "translations": [
        "way (of life)",
        "pattern",
        "style",
        "mode",
        "manner",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1468,
      "hanzi": "妨碍",
      "pinyin": "fáng ài",
      "translations": [
        "to hinder",
        "to obstruct"
      ]
    },
    {
      "id": 1469,
      "hanzi": "房东",
      "pinyin": "fáng dōng",
      "translations": [
        "landlord"
      ]
    },
    {
      "id": 1470,
      "hanzi": "仿佛",
      "pinyin": "fǎng fú",
      "translations": [
        "to seem",
        "as if",
        "alike",
        "similar"
      ]
    },
    {
      "id": 1471,
      "hanzi": "放松",
      "pinyin": "fàng sōng",
      "translations": [
        "to loosen",
        "to relax"
      ]
    },
    {
      "id": 1472,
      "hanzi": "非",
      "pinyin": "fēi",
      "translations": [
        "to not be",
        "not",
        "wrong",
        "incorrect",
        "non-",
        "un-",
        "in-",
        "to reproach or blame",
        "(colloquial) to insist on",
        "simply must"
      ]
    },
    {
      "id": 1473,
      "hanzi": "肥皂",
      "pinyin": "féi zào",
      "translations": [
        "soap",
        "CL:塊|块",
        "條|条[tiáo]"
      ]
    },
    {
      "id": 1474,
      "hanzi": "肺",
      "pinyin": "fèi",
      "translations": [
        "lung",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1475,
      "hanzi": "废话",
      "pinyin": "fèi huà",
      "translations": [
        "nonsense",
        "rubbish",
        "superfluous words",
        "You don't say!",
        "No kidding! (gently sarcastic)"
      ]
    },
    {
      "id": 1476,
      "hanzi": "费用",
      "pinyin": "fèi yòng",
      "translations": [
        "cost",
        "expenditure",
        "expense",
        "CL:筆|笔",
        "個|个[gè]"
      ]
    },
    {
      "id": 1477,
      "hanzi": "分别",
      "pinyin": "fēn bié",
      "translations": [
        "to part or leave each other",
        "to distinguish",
        "difference",
        "in different ways",
        "differently",
        "separately or individually"
      ]
    },
    {
      "id": 1478,
      "hanzi": "分布",
      "pinyin": "fēn bù",
      "translations": [
        "distributed",
        "to distribute"
      ]
    },
    {
      "id": 1479,
      "hanzi": "分配",
      "pinyin": "fēn pèi",
      "translations": [
        "to distribute",
        "to assign",
        "to allocate",
        "to partition (a hard drive)"
      ]
    },
    {
      "id": 1480,
      "hanzi": "分析",
      "pinyin": "fēn xī",
      "translations": [
        "to analyze",
        "analysis",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1481,
      "hanzi": "纷纷",
      "pinyin": "fēn fēn",
      "translations": [
        "one after another",
        "in succession",
        "one by one",
        "continuously",
        "diverse",
        "in profusion",
        "numerous and confused",
        "pell-mell"
      ]
    },
    {
      "id": 1482,
      "hanzi": "奋斗",
      "pinyin": "fèn dòu",
      "translations": [
        "to strive",
        "to struggle"
      ]
    },
    {
      "id": 1483,
      "hanzi": "愤怒",
      "pinyin": "fèn nù",
      "translations": [
        "angry",
        "indignant",
        "wrath",
        "ire"
      ]
    },
    {
      "id": 1484,
      "hanzi": "风格",
      "pinyin": "fēng gé",
      "translations": [
        "style"
      ]
    },
    {
      "id": 1485,
      "hanzi": "风俗",
      "pinyin": "fēng sú",
      "translations": [
        "social custom",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1486,
      "hanzi": "风险",
      "pinyin": "fēng xiǎn",
      "translations": [
        "risk",
        "hazard"
      ]
    },
    {
      "id": 1487,
      "hanzi": "疯狂",
      "pinyin": "fēng kuáng",
      "translations": [
        "madness",
        "extreme popularity"
      ]
    },
    {
      "id": 1488,
      "hanzi": "讽刺",
      "pinyin": "fěng cì",
      "translations": [
        "to satirize",
        "to mock",
        "irony",
        "satire",
        "sarcasm"
      ]
    },
    {
      "id": 1489,
      "hanzi": "否定",
      "pinyin": "fǒu dìng",
      "translations": [
        "to negate",
        "to deny",
        "to reject",
        "negative (answer)",
        "negation"
      ]
    },
    {
      "id": 1490,
      "hanzi": "否认",
      "pinyin": "fǒu rèn",
      "translations": [
        "to declare to be untrue",
        "to deny"
      ]
    },
    {
      "id": 1491,
      "hanzi": "扶",
      "pinyin": "fú",
      "translations": [
        "to support with the hand",
        "to help sb up",
        "to support oneself by holding onto something",
        "to help"
      ]
    },
    {
      "id": 1492,
      "hanzi": "幅",
      "pinyin": "fú",
      "translations": [
        "width",
        "roll",
        "classifier for textiles or pictures"
      ]
    },
    {
      "id": 1493,
      "hanzi": "服从",
      "pinyin": "fú cóng",
      "translations": [
        "to obey (an order)",
        "to comply",
        "to defer"
      ]
    },
    {
      "id": 1494,
      "hanzi": "服装",
      "pinyin": "fú zhuāng",
      "translations": [
        "dress",
        "clothing",
        "costume",
        "clothes",
        "CL:身[shēn]"
      ]
    },
    {
      "id": 1495,
      "hanzi": "辅导",
      "pinyin": "fǔ dǎo",
      "translations": [
        "to coach",
        "to tutor",
        "to give advice (in study)"
      ]
    },
    {
      "id": 1496,
      "hanzi": "复制",
      "pinyin": "fù zhì",
      "translations": [
        "to duplicate",
        "to make a copy of",
        "to copy",
        "to reproduce",
        "to clone"
      ]
    },
    {
      "id": 1497,
      "hanzi": "付款",
      "pinyin": "fù kuǎn",
      "translations": [
        "to pay a sum of money",
        "payment"
      ]
    },
    {
      "id": 1498,
      "hanzi": "妇女",
      "pinyin": "fù nǚ",
      "translations": [
        "woman"
      ]
    },
    {
      "id": 1499,
      "hanzi": "改革",
      "pinyin": "gǎi gé",
      "translations": [
        "reform",
        "CL:次",
        "種|种",
        "項|项[xiàng]",
        "to reform"
      ]
    },
    {
      "id": 1500,
      "hanzi": "改进",
      "pinyin": "gǎi jìn",
      "translations": [
        "to improve",
        "to make better",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1501,
      "hanzi": "改善",
      "pinyin": "gǎi shàn",
      "translations": [
        "to make better",
        "to improve",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1502,
      "hanzi": "改正",
      "pinyin": "gǎi zhèng",
      "translations": [
        "to correct",
        "to amend",
        "to put right",
        "correction",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1503,
      "hanzi": "盖",
      "pinyin": "gài",
      "translations": [
        "lid",
        "top",
        "cover",
        "canopy",
        "to cover",
        "to conceal",
        "to build"
      ]
    },
    {
      "id": 1504,
      "hanzi": "概括",
      "pinyin": "gài kuò",
      "translations": [
        "to summarize",
        "to generalize",
        "briefly",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1505,
      "hanzi": "概念",
      "pinyin": "gài niàn",
      "translations": [
        "concept",
        "idea",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1506,
      "hanzi": "干脆",
      "pinyin": "gān cuì",
      "translations": [
        "straightforward",
        "clear-cut",
        "blunt (e.g. statement)",
        "you might as well",
        "simply"
      ]
    },
    {
      "id": 1507,
      "hanzi": "感激",
      "pinyin": "gǎn jī",
      "translations": [
        "to be grateful",
        "to appreciate",
        "thankful"
      ]
    },
    {
      "id": 1508,
      "hanzi": "感受",
      "pinyin": "gǎn shòu",
      "translations": [
        "to sense",
        "perception",
        "to feel (through the senses)",
        "a feeling",
        "an impression",
        "an experience"
      ]
    },
    {
      "id": 1509,
      "hanzi": "感想",
      "pinyin": "gǎn xiǎng",
      "translations": [
        "impressions",
        "reflections",
        "thoughts",
        "CL:通",
        "個|个[gè]"
      ]
    },
    {
      "id": 1510,
      "hanzi": "赶紧",
      "pinyin": "gǎn jǐn",
      "translations": [
        "hurriedly",
        "without delay"
      ]
    },
    {
      "id": 1511,
      "hanzi": "赶快",
      "pinyin": "gǎn kuài",
      "translations": [
        "at once",
        "immediately"
      ]
    },
    {
      "id": 1512,
      "hanzi": "干活儿",
      "pinyin": "gàn huó r",
      "translations": [
        "to work",
        "manual labor"
      ]
    },
    {
      "id": 1513,
      "hanzi": "钢铁",
      "pinyin": "gāng tiě",
      "translations": [
        "steel"
      ]
    },
    {
      "id": 1514,
      "hanzi": "高档",
      "pinyin": "gāo dàng",
      "translations": [
        "superior quality",
        "high grade",
        "top grade"
      ]
    },
    {
      "id": 1515,
      "hanzi": "高速",
      "pinyin": "gāo sù",
      "translations": [
        "high speed"
      ]
    },
    {
      "id": 1516,
      "hanzi": "搞",
      "pinyin": "gǎo",
      "translations": [
        "to do",
        "to make",
        "to go in for",
        "to set up",
        "to get hold of",
        "to take care of"
      ]
    },
    {
      "id": 1517,
      "hanzi": "告别",
      "pinyin": "gào bié",
      "translations": [
        "to leave",
        "to bid farewell to",
        "to say good-bye to"
      ]
    },
    {
      "id": 1518,
      "hanzi": "胳膊",
      "pinyin": "gē bo",
      "translations": [
        "arm",
        "CL:隻|只",
        "條|条",
        "雙|双[shuāng]"
      ]
    },
    {
      "id": 1519,
      "hanzi": "鸽子",
      "pinyin": "gē zi",
      "translations": [
        "pigeon",
        "dove",
        "various birds of the species Columbidae"
      ]
    },
    {
      "id": 1520,
      "hanzi": "隔壁",
      "pinyin": "gé bì",
      "translations": [
        "next door",
        "neighbor"
      ]
    },
    {
      "id": 1521,
      "hanzi": "格外",
      "pinyin": "gé wài",
      "translations": [
        "especially",
        "particularly"
      ]
    },
    {
      "id": 1522,
      "hanzi": "革命",
      "pinyin": "gé mìng",
      "translations": [
        "revolution",
        "revolutionary (politics)",
        "CL:次[cì]"
      ]
    },
    {
      "id": 1523,
      "hanzi": "个别",
      "pinyin": "gè bié",
      "translations": [
        "individual",
        "specific",
        "respective",
        "just one or two"
      ]
    },
    {
      "id": 1524,
      "hanzi": "个人",
      "pinyin": "gè rén",
      "translations": [
        "individual",
        "personal",
        "oneself"
      ]
    },
    {
      "id": 1525,
      "hanzi": "个性",
      "pinyin": "gè xìng",
      "translations": [
        "individuality",
        "personality"
      ]
    },
    {
      "id": 1526,
      "hanzi": "各自",
      "pinyin": "gè zì",
      "translations": [
        "each",
        "respective",
        "apiece"
      ]
    },
    {
      "id": 1527,
      "hanzi": "根",
      "pinyin": "gēn",
      "translations": [
        "root",
        "basis",
        "classifier for long slender objects",
        "e.g. cigarettes",
        "guitar strings",
        "CL:條|条[tiáo]",
        "radical (chemistry)"
      ]
    },
    {
      "id": 1528,
      "hanzi": "根本",
      "pinyin": "gēn běn",
      "translations": [
        "fundamental",
        "basic",
        "root",
        "simply",
        "absolutely (not)",
        "(not) at all",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1529,
      "hanzi": "更加",
      "pinyin": "gèng jiā",
      "translations": [
        "more (than sth else)",
        "even more"
      ]
    },
    {
      "id": 1530,
      "hanzi": "公布",
      "pinyin": "gōng bù",
      "translations": [
        "to announce",
        "to make public",
        "to publish"
      ]
    },
    {
      "id": 1531,
      "hanzi": "公开",
      "pinyin": "gōng kāi",
      "translations": [
        "public",
        "to publish",
        "to make public"
      ]
    },
    {
      "id": 1532,
      "hanzi": "公平",
      "pinyin": "gōng píng",
      "translations": [
        "fair",
        "impartial"
      ]
    },
    {
      "id": 1533,
      "hanzi": "公寓",
      "pinyin": "gōng yù",
      "translations": [
        "apartment building",
        "block of flats",
        "CL:套[tào]"
      ]
    },
    {
      "id": 1534,
      "hanzi": "公元",
      "pinyin": "gōng yuán",
      "translations": [
        "CE (Common Era)",
        "Christian Era",
        "AD (Anno Domini)"
      ]
    },
    {
      "id": 1535,
      "hanzi": "公主",
      "pinyin": "gōng zhǔ",
      "translations": [
        "princess"
      ]
    },
    {
      "id": 1536,
      "hanzi": "工厂",
      "pinyin": "gōng chǎng",
      "translations": [
        "factory",
        "CL:家",
        "座[zuò]"
      ]
    },
    {
      "id": 1537,
      "hanzi": "工程师",
      "pinyin": "gōng chéng shī",
      "translations": [
        "engineer",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 1538,
      "hanzi": "工人",
      "pinyin": "gōng rén",
      "translations": [
        "worker",
        "CL:個|个",
        "名[míng]"
      ]
    },
    {
      "id": 1539,
      "hanzi": "工业",
      "pinyin": "gōng yè",
      "translations": [
        "industry"
      ]
    },
    {
      "id": 1540,
      "hanzi": "功夫",
      "pinyin": "gōng fu",
      "translations": [
        "skill",
        "art",
        "kung fu",
        "labor",
        "effort"
      ]
    },
    {
      "id": 1541,
      "hanzi": "功能",
      "pinyin": "gōng néng",
      "translations": [
        "function",
        "capability"
      ]
    },
    {
      "id": 1542,
      "hanzi": "贡献",
      "pinyin": "gòng xiàn",
      "translations": [
        "to contribute",
        "to dedicate",
        "to devote",
        "contribution",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1543,
      "hanzi": "沟通",
      "pinyin": "gōu tōng",
      "translations": [
        "to join",
        "to connect",
        "to link up",
        "to communicate"
      ]
    },
    {
      "id": 1544,
      "hanzi": "构成",
      "pinyin": "gòu chéng",
      "translations": [
        "to constitute",
        "to form",
        "to compose",
        "to make up",
        "to configure (computing)"
      ]
    },
    {
      "id": 1545,
      "hanzi": "姑姑",
      "pinyin": "gū gu",
      "translations": [
        "paternal aunt",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1546,
      "hanzi": "姑娘",
      "pinyin": "gū niang",
      "translations": [
        "girl",
        "young woman",
        "young lady",
        "daughter",
        "paternal aunt (old)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1547,
      "hanzi": "古代",
      "pinyin": "gǔ dài",
      "translations": [
        "ancient times",
        "olden times"
      ]
    },
    {
      "id": 1548,
      "hanzi": "古典",
      "pinyin": "gǔ diǎn",
      "translations": [
        "classical"
      ]
    },
    {
      "id": 1549,
      "hanzi": "古老",
      "pinyin": "gǔ lǎo",
      "translations": [
        "ancient",
        "old",
        "age-old"
      ]
    },
    {
      "id": 1550,
      "hanzi": "股票",
      "pinyin": "gǔ piào",
      "translations": [
        "share",
        "stock (market)"
      ]
    },
    {
      "id": 1551,
      "hanzi": "鼓舞",
      "pinyin": "gǔ wǔ",
      "translations": [
        "heartening (news)",
        "boost (morale)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1552,
      "hanzi": "骨头",
      "pinyin": "gǔ tou",
      "translations": [
        "bone",
        "CL:根",
        "塊|块[kuài]",
        "moral character",
        "bitterness"
      ]
    },
    {
      "id": 1553,
      "hanzi": "固定",
      "pinyin": "gù dìng",
      "translations": [
        "fixed",
        "set",
        "regular"
      ]
    },
    {
      "id": 1554,
      "hanzi": "固体",
      "pinyin": "gù tǐ",
      "translations": [
        "solid"
      ]
    },
    {
      "id": 1555,
      "hanzi": "雇佣",
      "pinyin": "gù yōng",
      "translations": [
        "to employ",
        "to hire"
      ]
    },
    {
      "id": 1556,
      "hanzi": "挂号",
      "pinyin": "guà hào",
      "translations": [
        "to register (a letter etc)"
      ]
    },
    {
      "id": 1557,
      "hanzi": "乖",
      "pinyin": "guāi",
      "translations": [
        "(of a child) obedient",
        "well-behaved",
        "clever",
        "shrewd",
        "alert",
        "perverse",
        "contrary to reason",
        "irregular",
        "abnormal"
      ]
    },
    {
      "id": 1558,
      "hanzi": "拐弯",
      "pinyin": "guǎi wān",
      "translations": [
        "to go round a curve",
        "to turn a corner",
        "fig. a new direction"
      ]
    },
    {
      "id": 1559,
      "hanzi": "怪不得",
      "pinyin": "guài bu de",
      "translations": [
        "no wonder!",
        "so that's why!"
      ]
    },
    {
      "id": 1560,
      "hanzi": "关闭",
      "pinyin": "guān bì",
      "translations": [
        "to close",
        "to shut"
      ]
    },
    {
      "id": 1561,
      "hanzi": "关怀",
      "pinyin": "guān huái",
      "translations": [
        "care",
        "solicitude",
        "to show care for",
        "concerned about",
        "attentive to"
      ]
    },
    {
      "id": 1562,
      "hanzi": "官",
      "pinyin": "guān",
      "translations": [
        "official",
        "government",
        "organ of body",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1563,
      "hanzi": "观察",
      "pinyin": "guān chá",
      "translations": [
        "to observe",
        "to watch",
        "to survey",
        "to examine",
        "observation",
        "view",
        "perspective",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1564,
      "hanzi": "观点",
      "pinyin": "guān diǎn",
      "translations": [
        "point of view",
        "viewpoint",
        "standpoint",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1565,
      "hanzi": "观念",
      "pinyin": "guān niàn",
      "translations": [
        "notion",
        "thought",
        "concept",
        "sense",
        "views",
        "ideology",
        "general impressions"
      ]
    },
    {
      "id": 1566,
      "hanzi": "管子",
      "pinyin": "guǎn zi",
      "translations": [
        "tube",
        "pipe",
        "drinking straw",
        "CL:根[gēn]"
      ]
    },
    {
      "id": 1567,
      "hanzi": "罐头",
      "pinyin": "guàn tou",
      "translations": [
        "tin",
        "can",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1568,
      "hanzi": "冠军",
      "pinyin": "guàn jūn",
      "translations": [
        "champion",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1569,
      "hanzi": "光滑",
      "pinyin": "guāng hua",
      "translations": [
        "glossy",
        "sleek",
        "smooth"
      ]
    },
    {
      "id": 1570,
      "hanzi": "光临",
      "pinyin": "guāng lín",
      "translations": [
        "(honorific) Welcome!",
        "You honor us with your presence.",
        "It is an honor to have you."
      ]
    },
    {
      "id": 1571,
      "hanzi": "光明",
      "pinyin": "guāng míng",
      "translations": [
        "light",
        "illumination",
        "radiance (esp. glory of Buddha etc)",
        "fig. bright prospects",
        "openhearted"
      ]
    },
    {
      "id": 1572,
      "hanzi": "光盘",
      "pinyin": "guāng pán",
      "translations": [
        "compact disc",
        "CD or DVD",
        "CD ROM",
        "CL:片",
        "張|张[zhāng]"
      ]
    },
    {
      "id": 1573,
      "hanzi": "光荣",
      "pinyin": "guāng róng",
      "translations": [
        "honor and glory",
        "glorious"
      ]
    },
    {
      "id": 1574,
      "hanzi": "广场",
      "pinyin": "guǎng chǎng",
      "translations": [
        "public square",
        "plaza"
      ]
    },
    {
      "id": 1575,
      "hanzi": "广大",
      "pinyin": "guǎng dà",
      "translations": [
        "(of an area) vast or extensive",
        "large-scale",
        "widespread",
        "(of people) numerous"
      ]
    },
    {
      "id": 1576,
      "hanzi": "广泛",
      "pinyin": "guǎng fàn",
      "translations": [
        "extensive",
        "wide range"
      ]
    },
    {
      "id": 1577,
      "hanzi": "规矩",
      "pinyin": "guī ju",
      "translations": [
        "lit. compass and set square",
        "fig. established standard",
        "rule",
        "customs",
        "practices",
        "fig. upright and honest",
        "well-behaved"
      ]
    },
    {
      "id": 1578,
      "hanzi": "规律",
      "pinyin": "guī lǜ",
      "translations": [
        "rule (e.g. of science)",
        "law of behavior",
        "regular pattern",
        "rhythm",
        "discipline"
      ]
    },
    {
      "id": 1579,
      "hanzi": "规模",
      "pinyin": "guī mó",
      "translations": [
        "scale",
        "scope",
        "extent",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1580,
      "hanzi": "规则",
      "pinyin": "guī zé",
      "translations": [
        "rule",
        "regulation",
        "rules and regulations"
      ]
    },
    {
      "id": 1581,
      "hanzi": "柜台",
      "pinyin": "guì tái",
      "translations": [
        "sales counter",
        "front desk",
        "bar",
        "over the counter"
      ]
    },
    {
      "id": 1582,
      "hanzi": "滚",
      "pinyin": "gǔn",
      "translations": [
        "to boil",
        "to roll",
        "to take a hike",
        "Get lost!"
      ]
    },
    {
      "id": 1583,
      "hanzi": "锅",
      "pinyin": "guō",
      "translations": [
        "pot",
        "pan",
        "boiler",
        "CL:口",
        "隻|只[zhī]"
      ]
    },
    {
      "id": 1584,
      "hanzi": "国籍",
      "pinyin": "guó jí",
      "translations": [
        "nationality"
      ]
    },
    {
      "id": 1585,
      "hanzi": "国庆节",
      "pinyin": "Guó qìng jié",
      "translations": [
        "PRC National Day (October 1st)"
      ]
    },
    {
      "id": 1586,
      "hanzi": "果实",
      "pinyin": "guǒ shí",
      "translations": [
        "fruit",
        "gains"
      ]
    },
    {
      "id": 1587,
      "hanzi": "过分",
      "pinyin": "guò fèn",
      "translations": [
        "excessive",
        "undue",
        "overly"
      ]
    },
    {
      "id": 1588,
      "hanzi": "过敏",
      "pinyin": "guò mǐn",
      "translations": [
        "to be allergic",
        "allergy"
      ]
    },
    {
      "id": 1589,
      "hanzi": "过期",
      "pinyin": "guò qī",
      "translations": [
        "to be overdue",
        "to exceed the time limit",
        "to expire (as in expiration date)"
      ]
    },
    {
      "id": 1590,
      "hanzi": "哈",
      "pinyin": "hā",
      "translations": [
        "laughter",
        "yawn"
      ]
    },
    {
      "id": 1591,
      "hanzi": "海关",
      "pinyin": "hǎi guān",
      "translations": [
        "customs (i.e. border crossing inspection)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1592,
      "hanzi": "海鲜",
      "pinyin": "hǎi xiān",
      "translations": [
        "seafood"
      ]
    },
    {
      "id": 1593,
      "hanzi": "喊",
      "pinyin": "hǎn",
      "translations": [
        "to yell",
        "to shout",
        "to call out for (a person)"
      ]
    },
    {
      "id": 1594,
      "hanzi": "行业",
      "pinyin": "háng yè",
      "translations": [
        "industry",
        "business"
      ]
    },
    {
      "id": 1595,
      "hanzi": "豪华",
      "pinyin": "háo huá",
      "translations": [
        "luxurious"
      ]
    },
    {
      "id": 1596,
      "hanzi": "好奇",
      "pinyin": "hào qí",
      "translations": [
        "inquisitive",
        "curious",
        "inquisitiveness",
        "curiosity"
      ]
    },
    {
      "id": 1597,
      "hanzi": "和平",
      "pinyin": "hé píng",
      "translations": [
        "peace"
      ]
    },
    {
      "id": 1598,
      "hanzi": "何必",
      "pinyin": "hé bì",
      "translations": [
        "there is no need",
        "why should"
      ]
    },
    {
      "id": 1599,
      "hanzi": "何况",
      "pinyin": "hé kuàng",
      "translations": [
        "let alone",
        "to say nothing of",
        "besides",
        "what's more"
      ]
    },
    {
      "id": 1600,
      "hanzi": "合法",
      "pinyin": "hé fǎ",
      "translations": [
        "lawful",
        "legitimate",
        "legal"
      ]
    },
    {
      "id": 1601,
      "hanzi": "合理",
      "pinyin": "hé lǐ",
      "translations": [
        "rational",
        "reasonable",
        "fair"
      ]
    },
    {
      "id": 1602,
      "hanzi": "合同",
      "pinyin": "hé tong",
      "translations": [
        "(business) contract",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1603,
      "hanzi": "合影",
      "pinyin": "hé yǐng",
      "translations": [
        "joint photo",
        "group photo"
      ]
    },
    {
      "id": 1604,
      "hanzi": "合作",
      "pinyin": "hé zuò",
      "translations": [
        "to cooperate",
        "to collaborate",
        "to work together",
        "cooperation",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1605,
      "hanzi": "核心",
      "pinyin": "hé xīn",
      "translations": [
        "core",
        "nucleus"
      ]
    },
    {
      "id": 1606,
      "hanzi": "恨",
      "pinyin": "hèn",
      "translations": [
        "to hate",
        "to regret"
      ]
    },
    {
      "id": 1607,
      "hanzi": "横",
      "pinyin": "héng",
      "translations": [
        "horizontal",
        "across",
        "(horizontal character stroke)"
      ]
    },
    {
      "id": 1608,
      "hanzi": "后果",
      "pinyin": "hòu guǒ",
      "translations": [
        "consequences",
        "aftermath"
      ]
    },
    {
      "id": 1609,
      "hanzi": "忽视",
      "pinyin": "hū shì",
      "translations": [
        "to neglect",
        "to ignore"
      ]
    },
    {
      "id": 1610,
      "hanzi": "呼吸",
      "pinyin": "hū xī",
      "translations": [
        "to breathe"
      ]
    },
    {
      "id": 1611,
      "hanzi": "壶",
      "pinyin": "hú",
      "translations": [
        "pot",
        "classifier for bottled liquid"
      ]
    },
    {
      "id": 1612,
      "hanzi": "蝴蝶",
      "pinyin": "hú dié",
      "translations": [
        "butterfly",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 1613,
      "hanzi": "胡说",
      "pinyin": "hú shuō",
      "translations": [
        "to talk nonsense",
        "drivel"
      ]
    },
    {
      "id": 1614,
      "hanzi": "胡同",
      "pinyin": "hú tòng",
      "translations": [
        "variant of 胡同[hú tòng]"
      ]
    },
    {
      "id": 1615,
      "hanzi": "胡须",
      "pinyin": "hú xū",
      "translations": [
        "beard",
        "CL:根",
        "綹|绺[liǔ]"
      ]
    },
    {
      "id": 1616,
      "hanzi": "糊涂",
      "pinyin": "hú tu",
      "translations": [
        "muddled",
        "silly",
        "confused"
      ]
    },
    {
      "id": 1617,
      "hanzi": "花生",
      "pinyin": "huā shēng",
      "translations": [
        "peanut",
        "groundnut",
        "CL:粒[lì]"
      ]
    },
    {
      "id": 1618,
      "hanzi": "滑冰",
      "pinyin": "huá bīng",
      "translations": [
        "to skate",
        "skating"
      ]
    },
    {
      "id": 1619,
      "hanzi": "划船",
      "pinyin": "huá chuán",
      "translations": [
        "to row a boat",
        "rowing boat",
        "rowing (sport)"
      ]
    },
    {
      "id": 1620,
      "hanzi": "华裔",
      "pinyin": "Huá yì",
      "translations": [
        "ethnic Chinese",
        "non-Chinese citizen of Chinese ancestry"
      ]
    },
    {
      "id": 1621,
      "hanzi": "化学",
      "pinyin": "huà xué",
      "translations": [
        "chemistry",
        "chemical"
      ]
    },
    {
      "id": 1622,
      "hanzi": "话题",
      "pinyin": "huà tí",
      "translations": [
        "subject (of a talk or conversation)",
        "topic"
      ]
    },
    {
      "id": 1623,
      "hanzi": "怀念",
      "pinyin": "huái niàn",
      "translations": [
        "to cherish the memory of",
        "to think of",
        "reminisce"
      ]
    },
    {
      "id": 1624,
      "hanzi": "缓解",
      "pinyin": "huǎn jiě",
      "translations": [
        "to blunt",
        "to dull",
        "to ease",
        "to help relieve (a crisis)",
        "to alleviate (pain)"
      ]
    },
    {
      "id": 1625,
      "hanzi": "幻想",
      "pinyin": "huàn xiǎng",
      "translations": [
        "delusion",
        "fantasy"
      ]
    },
    {
      "id": 1626,
      "hanzi": "慌张",
      "pinyin": "huāng zhāng",
      "translations": [
        "confused",
        "flustered"
      ]
    },
    {
      "id": 1627,
      "hanzi": "黄瓜",
      "pinyin": "huáng guā",
      "translations": [
        "cucumber",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 1628,
      "hanzi": "黄金",
      "pinyin": "huáng jīn",
      "translations": [
        "gold"
      ]
    },
    {
      "id": 1629,
      "hanzi": "皇帝",
      "pinyin": "huáng dì",
      "translations": [
        "emperor",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1630,
      "hanzi": "皇后",
      "pinyin": "huáng hòu",
      "translations": [
        "empress",
        "imperial consort"
      ]
    },
    {
      "id": 1631,
      "hanzi": "灰",
      "pinyin": "huī",
      "translations": [
        "ash",
        "dust",
        "lime",
        "gray",
        "discouraged",
        "dejected"
      ]
    },
    {
      "id": 1632,
      "hanzi": "灰尘",
      "pinyin": "huī chén",
      "translations": [
        "dust"
      ]
    },
    {
      "id": 1633,
      "hanzi": "灰心",
      "pinyin": "huī xīn",
      "translations": [
        "to lose heart",
        "to be discouraged"
      ]
    },
    {
      "id": 1634,
      "hanzi": "挥",
      "pinyin": "huī",
      "translations": [
        "to wave",
        "to brandish",
        "to wipe away",
        "to command",
        "to conduct",
        "to scatter",
        "to disperse"
      ]
    },
    {
      "id": 1635,
      "hanzi": "恢复",
      "pinyin": "huī fù",
      "translations": [
        "to reinstate",
        "to resume",
        "to restore",
        "to recover",
        "to regain",
        "to rehabilitate"
      ]
    },
    {
      "id": 1636,
      "hanzi": "汇率",
      "pinyin": "huì lǜ",
      "translations": [
        "exchange rate"
      ]
    },
    {
      "id": 1637,
      "hanzi": "婚礼",
      "pinyin": "hūn lǐ",
      "translations": [
        "wedding ceremony",
        "wedding"
      ]
    },
    {
      "id": 1638,
      "hanzi": "婚姻",
      "pinyin": "hūn yīn",
      "translations": [
        "matrimony",
        "wedding",
        "marriage",
        "CL:次[cì]"
      ]
    },
    {
      "id": 1639,
      "hanzi": "活跃",
      "pinyin": "huó yuè",
      "translations": [
        "active",
        "vigorous"
      ]
    },
    {
      "id": 1640,
      "hanzi": "火柴",
      "pinyin": "huǒ chái",
      "translations": [
        "match (for lighting fire)",
        "CL:根",
        "盒[hé]"
      ]
    },
    {
      "id": 1641,
      "hanzi": "伙伴",
      "pinyin": "huǒ bàn",
      "translations": [
        "partner",
        "companion",
        "comrade"
      ]
    },
    {
      "id": 1642,
      "hanzi": "基本",
      "pinyin": "jī běn",
      "translations": [
        "basic",
        "fundamental",
        "main",
        "elementary"
      ]
    },
    {
      "id": 1643,
      "hanzi": "机器",
      "pinyin": "jī qì",
      "translations": [
        "machine",
        "CL:臺|台",
        "部",
        "個|个[gè]"
      ]
    },
    {
      "id": 1644,
      "hanzi": "激烈",
      "pinyin": "jī liè",
      "translations": [
        "intense",
        "acute",
        "fierce"
      ]
    },
    {
      "id": 1645,
      "hanzi": "肌肉",
      "pinyin": "jī ròu",
      "translations": [
        "muscle",
        "flesh"
      ]
    },
    {
      "id": 1646,
      "hanzi": "及格",
      "pinyin": "jí gé",
      "translations": [
        "to pass a test"
      ]
    },
    {
      "id": 1647,
      "hanzi": "急忙",
      "pinyin": "jí máng",
      "translations": [
        "hastily"
      ]
    },
    {
      "id": 1648,
      "hanzi": "集体",
      "pinyin": "jí tǐ",
      "translations": [
        "collective",
        "social",
        "team",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1649,
      "hanzi": "集中",
      "pinyin": "jí zhōng",
      "translations": [
        "to concentrate",
        "to centralize",
        "to focus",
        "centralized",
        "concentrated",
        "to put together"
      ]
    },
    {
      "id": 1650,
      "hanzi": "记录",
      "pinyin": "jì lù",
      "translations": [
        "to record",
        "record (written account)",
        "record (in sports etc)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1651,
      "hanzi": "记忆",
      "pinyin": "jì yì",
      "translations": [
        "to remember",
        "to recall",
        "memory",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1652,
      "hanzi": "计算",
      "pinyin": "jì suàn",
      "translations": [
        "to count",
        "to calculate",
        "to compute",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1653,
      "hanzi": "寂寞",
      "pinyin": "jì mò",
      "translations": [
        "lonely",
        "lonesome",
        "quiet",
        "silent"
      ]
    },
    {
      "id": 1654,
      "hanzi": "系领带",
      "pinyin": "jì lǐng dài",
      "translations": [
        "to tie one's necktie"
      ]
    },
    {
      "id": 1655,
      "hanzi": "纪录",
      "pinyin": "jì lù",
      "translations": [
        "record"
      ]
    },
    {
      "id": 1656,
      "hanzi": "纪律",
      "pinyin": "jì lǜ",
      "translations": [
        "discipline"
      ]
    },
    {
      "id": 1657,
      "hanzi": "纪念",
      "pinyin": "jì niàn",
      "translations": [
        "to commemorate",
        "to remember",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1658,
      "hanzi": "家庭",
      "pinyin": "jiā tíng",
      "translations": [
        "family",
        "household",
        "CL:戶|户",
        "個|个[gè]"
      ]
    },
    {
      "id": 1659,
      "hanzi": "家务",
      "pinyin": "jiā wù",
      "translations": [
        "household duties",
        "housework"
      ]
    },
    {
      "id": 1660,
      "hanzi": "家乡",
      "pinyin": "jiā xiāng",
      "translations": [
        "hometown",
        "native place",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1661,
      "hanzi": "嘉宾",
      "pinyin": "jiā bīn",
      "translations": [
        "esteemed guest",
        "honored guest",
        "guest (on a show)"
      ]
    },
    {
      "id": 1662,
      "hanzi": "夹子",
      "pinyin": "jiā zi",
      "translations": [
        "clip",
        "clamp",
        "tongs",
        "folder",
        "wallet"
      ]
    },
    {
      "id": 1663,
      "hanzi": "甲",
      "pinyin": "jiǎ",
      "translations": [
        "first of the ten heavenly stems 十天干[shí tiān gān]",
        "(used for an unspecified person or thing)",
        "first (in a list, as a party to a contract etc)",
        "armor plating",
        "shell or carapace",
        "(of the fingers or toes) nail",
        "bladed leather or metal armor (old)",
        "ranking system used in the Imperial examinations (old)",
        "civil administration unit (old)"
      ]
    },
    {
      "id": 1664,
      "hanzi": "假如",
      "pinyin": "jiǎ rú",
      "translations": [
        "if"
      ]
    },
    {
      "id": 1665,
      "hanzi": "假装",
      "pinyin": "jiǎ zhuāng",
      "translations": [
        "to feign",
        "to pretend"
      ]
    },
    {
      "id": 1666,
      "hanzi": "嫁",
      "pinyin": "jià",
      "translations": [
        "(of a woman) to marry",
        "to marry off a daughter",
        "to shift (blame etc)"
      ]
    },
    {
      "id": 1667,
      "hanzi": "价值",
      "pinyin": "jià zhí",
      "translations": [
        "value",
        "worth",
        "fig. values (ethical, cultural etc)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1668,
      "hanzi": "驾驶",
      "pinyin": "jià shǐ",
      "translations": [
        "to pilot (ship, airplane etc)",
        "to drive"
      ]
    },
    {
      "id": 1669,
      "hanzi": "煎",
      "pinyin": "jiān",
      "translations": [
        "to pan fry",
        "to sauté"
      ]
    },
    {
      "id": 1670,
      "hanzi": "肩膀",
      "pinyin": "jiān bǎng",
      "translations": [
        "shoulder"
      ]
    },
    {
      "id": 1671,
      "hanzi": "坚决",
      "pinyin": "jiān jué",
      "translations": [
        "firm",
        "resolute",
        "determined"
      ]
    },
    {
      "id": 1672,
      "hanzi": "坚强",
      "pinyin": "jiān qiáng",
      "translations": [
        "staunch",
        "strong"
      ]
    },
    {
      "id": 1673,
      "hanzi": "尖锐",
      "pinyin": "jiān ruì",
      "translations": [
        "sharp",
        "intense",
        "penetrating",
        "pointed",
        "acute (illness)"
      ]
    },
    {
      "id": 1674,
      "hanzi": "艰巨",
      "pinyin": "jiān jù",
      "translations": [
        "arduous",
        "terrible (task)",
        "very difficult",
        "formidable"
      ]
    },
    {
      "id": 1675,
      "hanzi": "艰苦",
      "pinyin": "jiān kǔ",
      "translations": [
        "difficult",
        "hard",
        "arduous"
      ]
    },
    {
      "id": 1676,
      "hanzi": "捡",
      "pinyin": "jiǎn",
      "translations": [
        "to pick up",
        "to collect",
        "to gather"
      ]
    },
    {
      "id": 1677,
      "hanzi": "剪刀",
      "pinyin": "jiǎn dāo",
      "translations": [
        "scissors",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 1678,
      "hanzi": "简历",
      "pinyin": "jiǎn lì",
      "translations": [
        "Curriculum Vitae (CV)",
        "résumé (resume)",
        "biographical notes"
      ]
    },
    {
      "id": 1679,
      "hanzi": "简直",
      "pinyin": "jiǎn zhí",
      "translations": [
        "simply",
        "at all",
        "practically"
      ]
    },
    {
      "id": 1680,
      "hanzi": "健身房",
      "pinyin": "jiàn shēn fáng",
      "translations": [
        "gym",
        "gymnasium"
      ]
    },
    {
      "id": 1681,
      "hanzi": "建立",
      "pinyin": "jiàn lì",
      "translations": [
        "to establish",
        "to set up",
        "to found"
      ]
    },
    {
      "id": 1682,
      "hanzi": "建设",
      "pinyin": "jiàn shè",
      "translations": [
        "to build",
        "to construct",
        "construction",
        "constructive"
      ]
    },
    {
      "id": 1683,
      "hanzi": "建议",
      "pinyin": "jiàn yì",
      "translations": [
        "to propose",
        "to suggest",
        "to recommend",
        "proposal",
        "suggestion",
        "recommendation",
        "CL:個|个",
        "點|点[diǎn]"
      ]
    },
    {
      "id": 1684,
      "hanzi": "建筑",
      "pinyin": "jiàn zhù",
      "translations": [
        "to construct",
        "building",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1685,
      "hanzi": "键盘",
      "pinyin": "jiàn pán",
      "translations": [
        "keyboard"
      ]
    },
    {
      "id": 1686,
      "hanzi": "讲究",
      "pinyin": "jiǎng jiu",
      "translations": [
        "to pay particular attention to",
        "exquisite",
        "aesthetic"
      ]
    },
    {
      "id": 1687,
      "hanzi": "讲座",
      "pinyin": "jiǎng zuò",
      "translations": [
        "a course of lectures",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1688,
      "hanzi": "降落",
      "pinyin": "jiàng luò",
      "translations": [
        "to descend",
        "to land"
      ]
    },
    {
      "id": 1689,
      "hanzi": "酱油",
      "pinyin": "jiàng yóu",
      "translations": [
        "soy sauce"
      ]
    },
    {
      "id": 1690,
      "hanzi": "浇",
      "pinyin": "jiāo",
      "translations": [
        "to pour liquid",
        "to irrigate (using waterwheel)",
        "to water",
        "to cast (molten metal)",
        "to mold"
      ]
    },
    {
      "id": 1691,
      "hanzi": "交换",
      "pinyin": "jiāo huàn",
      "translations": [
        "to exchange",
        "to swap",
        "to switch (telecom)",
        "commutative (math)",
        "to commute"
      ]
    },
    {
      "id": 1692,
      "hanzi": "交际",
      "pinyin": "jiāo jì",
      "translations": [
        "communication",
        "social intercourse"
      ]
    },
    {
      "id": 1693,
      "hanzi": "郊区",
      "pinyin": "jiāo qū",
      "translations": [
        "suburban district",
        "outskirts",
        "suburbs",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1694,
      "hanzi": "胶水",
      "pinyin": "jiāo shuǐ",
      "translations": [
        "glue"
      ]
    },
    {
      "id": 1695,
      "hanzi": "角度",
      "pinyin": "jiǎo dù",
      "translations": [
        "angle",
        "point of view"
      ]
    },
    {
      "id": 1696,
      "hanzi": "狡猾",
      "pinyin": "jiǎo huá",
      "translations": [
        "crafty",
        "cunning",
        "sly"
      ]
    },
    {
      "id": 1697,
      "hanzi": "教材",
      "pinyin": "jiào cái",
      "translations": [
        "teaching material",
        "CL:本[běn]"
      ]
    },
    {
      "id": 1698,
      "hanzi": "教练",
      "pinyin": "jiào liàn",
      "translations": [
        "instructor",
        "sports coach",
        "trainer",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 1699,
      "hanzi": "教训",
      "pinyin": "jiào xun",
      "translations": [
        "lesson",
        "moral",
        "to chide sb",
        "to lecture sb"
      ]
    },
    {
      "id": 1700,
      "hanzi": "接触",
      "pinyin": "jiē chù",
      "translations": [
        "to touch",
        "to contact",
        "access",
        "in touch with"
      ]
    },
    {
      "id": 1701,
      "hanzi": "接待",
      "pinyin": "jiē dài",
      "translations": [
        "to receive (a visitor)",
        "to admit (allow sb to enter)"
      ]
    },
    {
      "id": 1702,
      "hanzi": "接近",
      "pinyin": "jiē jìn",
      "translations": [
        "to approach",
        "to get close to"
      ]
    },
    {
      "id": 1703,
      "hanzi": "接着",
      "pinyin": "jiē zhe",
      "translations": [
        "to catch and hold on",
        "to continue",
        "to go on to do sth",
        "to follow",
        "to carry on",
        "then",
        "after that",
        "subsequently",
        "to proceed",
        "to ensue",
        "in turn",
        "in one's turn"
      ]
    },
    {
      "id": 1704,
      "hanzi": "阶段",
      "pinyin": "jiē duàn",
      "translations": [
        "stage",
        "section",
        "phase",
        "period",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1705,
      "hanzi": "结实",
      "pinyin": "jiē shi",
      "translations": [
        "rugged",
        "sturdy"
      ]
    },
    {
      "id": 1706,
      "hanzi": "节",
      "pinyin": "jié",
      "translations": [
        "festival",
        "holiday",
        "node",
        "joint",
        "section",
        "segment",
        "part",
        "to economize",
        "to save",
        "to abridge",
        "moral integrity",
        "classifier for segments",
        "e.g. lessons",
        "train wagons",
        "biblical verses",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1707,
      "hanzi": "节省",
      "pinyin": "jié shěng",
      "translations": [
        "saving",
        "to save",
        "to use sparingly",
        "to cut down on"
      ]
    },
    {
      "id": 1708,
      "hanzi": "结构",
      "pinyin": "jié gòu",
      "translations": [
        "structure",
        "composition",
        "makeup",
        "architecture",
        "CL:座",
        "個|个[gè]"
      ]
    },
    {
      "id": 1709,
      "hanzi": "结合",
      "pinyin": "jié hé",
      "translations": [
        "to combine",
        "to link",
        "to integrate",
        "binding",
        "CL:次[cì]"
      ]
    },
    {
      "id": 1710,
      "hanzi": "结论",
      "pinyin": "jié lùn",
      "translations": [
        "conclusion",
        "verdict",
        "CL:個|个[gè]",
        "to conclude",
        "to reach a verdict"
      ]
    },
    {
      "id": 1711,
      "hanzi": "结账",
      "pinyin": "jié zhàng",
      "translations": [
        "to pay the bill",
        "to settle accounts",
        "also written 結帳|结帐"
      ]
    },
    {
      "id": 1712,
      "hanzi": "解放",
      "pinyin": "jiě fàng",
      "translations": [
        "to liberate",
        "to emancipate",
        "liberation",
        "refers to the Communists' victory over the Nationalists in 1949",
        "CL:次[cì]"
      ]
    },
    {
      "id": 1713,
      "hanzi": "解说员",
      "pinyin": "jiě shuō yuán",
      "translations": [
        "commentator"
      ]
    },
    {
      "id": 1714,
      "hanzi": "届",
      "pinyin": "jiè",
      "translations": [
        "to arrive at (place or time)",
        "period",
        "to become due",
        "classifier for events",
        "meetings",
        "elections",
        "sporting fixtures",
        "years (of graduation)"
      ]
    },
    {
      "id": 1715,
      "hanzi": "借口",
      "pinyin": "jiè kǒu",
      "translations": [
        "to use as an excuse",
        "on the pretext",
        "excuse",
        "pretext"
      ]
    },
    {
      "id": 1716,
      "hanzi": "戒烟",
      "pinyin": "jiè yān",
      "translations": [
        "to give up smoking"
      ]
    },
    {
      "id": 1717,
      "hanzi": "戒指",
      "pinyin": "jiè zhi",
      "translations": [
        "(finger) ring"
      ]
    },
    {
      "id": 1718,
      "hanzi": "金属",
      "pinyin": "jīn shǔ",
      "translations": [
        "metal",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 1719,
      "hanzi": "紧",
      "pinyin": "jǐn",
      "translations": [
        "tight",
        "strict",
        "close at hand",
        "near",
        "urgent",
        "tense",
        "hard up",
        "short of money",
        "to tighten"
      ]
    },
    {
      "id": 1720,
      "hanzi": "紧急",
      "pinyin": "jǐn jí",
      "translations": [
        "urgent",
        "emergency"
      ]
    },
    {
      "id": 1721,
      "hanzi": "尽量",
      "pinyin": "jǐn liàng",
      "translations": [
        "as much as possible",
        "to the greatest extent"
      ]
    },
    {
      "id": 1722,
      "hanzi": "谨慎",
      "pinyin": "jǐn shèn",
      "translations": [
        "cautious",
        "prudent"
      ]
    },
    {
      "id": 1723,
      "hanzi": "进步",
      "pinyin": "jìn bù",
      "translations": [
        "progress",
        "improvement",
        "to improve",
        "to progress",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1724,
      "hanzi": "进口",
      "pinyin": "jìn kǒu",
      "translations": [
        "to import",
        "imported"
      ]
    },
    {
      "id": 1725,
      "hanzi": "近代",
      "pinyin": "jìn dài",
      "translations": [
        "modern times"
      ]
    },
    {
      "id": 1726,
      "hanzi": "尽力",
      "pinyin": "jìn lì",
      "translations": [
        "to strive one's hardest",
        "to spare no effort"
      ]
    },
    {
      "id": 1727,
      "hanzi": "精力",
      "pinyin": "jīng lì",
      "translations": [
        "energy"
      ]
    },
    {
      "id": 1728,
      "hanzi": "经典",
      "pinyin": "jīng diǎn",
      "translations": [
        "the classics",
        "scriptures",
        "classical"
      ]
    },
    {
      "id": 1729,
      "hanzi": "经营",
      "pinyin": "jīng yíng",
      "translations": [
        "to engage in (business etc)",
        "to run",
        "to operate"
      ]
    },
    {
      "id": 1730,
      "hanzi": "景色",
      "pinyin": "jǐng sè",
      "translations": [
        "scenery",
        "scene",
        "landscape",
        "view"
      ]
    },
    {
      "id": 1731,
      "hanzi": "敬爱",
      "pinyin": "jìng ài",
      "translations": [
        "respect and love"
      ]
    },
    {
      "id": 1732,
      "hanzi": "酒吧",
      "pinyin": "jiǔ bā",
      "translations": [
        "bar",
        "pub",
        "saloon",
        "CL:家[jiā]"
      ]
    },
    {
      "id": 1733,
      "hanzi": "救",
      "pinyin": "jiù",
      "translations": [
        "to save",
        "to assist",
        "to rescue"
      ]
    },
    {
      "id": 1734,
      "hanzi": "救护车",
      "pinyin": "jiù hù chē",
      "translations": [
        "ambulance",
        "CL:輛|辆[liàng]"
      ]
    },
    {
      "id": 1735,
      "hanzi": "舅舅",
      "pinyin": "jiù jiu",
      "translations": [
        "mother's brother",
        "maternal uncle (informal)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1736,
      "hanzi": "居然",
      "pinyin": "jū rán",
      "translations": [
        "unexpectedly",
        "to one's surprise",
        "go so far as to"
      ]
    },
    {
      "id": 1737,
      "hanzi": "桔子",
      "pinyin": "jú zi",
      "translations": [
        "tangerine",
        "also written 橘子"
      ]
    },
    {
      "id": 1738,
      "hanzi": "举",
      "pinyin": "jǔ",
      "translations": [
        "to lift",
        "to hold up",
        "to cite",
        "to enumerate",
        "to act",
        "to raise",
        "to choose",
        "to elect"
      ]
    },
    {
      "id": 1739,
      "hanzi": "具备",
      "pinyin": "jù bèi",
      "translations": [
        "to possess",
        "to have",
        "equipped with",
        "able to fulfill (conditions or requirements)"
      ]
    },
    {
      "id": 1740,
      "hanzi": "具体",
      "pinyin": "jù tǐ",
      "translations": [
        "concrete",
        "definite",
        "specific"
      ]
    },
    {
      "id": 1741,
      "hanzi": "巨大",
      "pinyin": "jù dà",
      "translations": [
        "huge",
        "immense",
        "very large",
        "tremendous",
        "gigantic",
        "enormous"
      ]
    },
    {
      "id": 1742,
      "hanzi": "聚会",
      "pinyin": "jù huì",
      "translations": [
        "party",
        "gathering",
        "to meet",
        "to get together"
      ]
    },
    {
      "id": 1743,
      "hanzi": "俱乐部",
      "pinyin": "jù lè bù",
      "translations": [
        "club (i.e. a group or organization) (loanword)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1744,
      "hanzi": "据说",
      "pinyin": "jù shuō",
      "translations": [
        "it is said that",
        "reportedly"
      ]
    },
    {
      "id": 1745,
      "hanzi": "捐",
      "pinyin": "juān",
      "translations": [
        "to contribute",
        "to donate",
        "contribution",
        "tax",
        "to abandon"
      ]
    },
    {
      "id": 1746,
      "hanzi": "卷",
      "pinyin": "juǎn",
      "translations": [
        "to roll (up)",
        "to sweep up",
        "to carry on",
        "roll"
      ]
    },
    {
      "id": 1747,
      "hanzi": "决赛",
      "pinyin": "jué sài",
      "translations": [
        "finals (of a competition)"
      ]
    },
    {
      "id": 1748,
      "hanzi": "决心",
      "pinyin": "jué xīn",
      "translations": [
        "determination",
        "resolution",
        "determined",
        "firm and resolute",
        "to make up one's mind",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1749,
      "hanzi": "绝对",
      "pinyin": "jué duì",
      "translations": [
        "absolute",
        "unconditional"
      ]
    },
    {
      "id": 1750,
      "hanzi": "角色",
      "pinyin": "jué sè",
      "translations": [
        "role"
      ]
    },
    {
      "id": 1751,
      "hanzi": "军事",
      "pinyin": "jūn shì",
      "translations": [
        "military affairs",
        "military matters",
        "military"
      ]
    },
    {
      "id": 1752,
      "hanzi": "均匀",
      "pinyin": "jūn yún",
      "translations": [
        "even",
        "well-distributed",
        "homogeneous"
      ]
    },
    {
      "id": 1753,
      "hanzi": "卡车",
      "pinyin": "kǎ chē",
      "translations": [
        "truck",
        "CL:輛|辆[liàng]"
      ]
    },
    {
      "id": 1754,
      "hanzi": "开发",
      "pinyin": "kāi fā",
      "translations": [
        "to exploit (a resource)",
        "to open up (for development)",
        "to develop"
      ]
    },
    {
      "id": 1755,
      "hanzi": "开放",
      "pinyin": "kāi fàng",
      "translations": [
        "to bloom",
        "to open",
        "to be open-minded",
        "to be open (to the public)",
        "to open up (to the outside)"
      ]
    },
    {
      "id": 1756,
      "hanzi": "开幕式",
      "pinyin": "kāi mù shì",
      "translations": [
        "opening ceremony"
      ]
    },
    {
      "id": 1757,
      "hanzi": "开心",
      "pinyin": "kāi xīn",
      "translations": [
        "to feel happy",
        "to rejoice",
        "to have a great time",
        "to make fun of sb"
      ]
    },
    {
      "id": 1758,
      "hanzi": "砍",
      "pinyin": "kǎn",
      "translations": [
        "to chop",
        "to cut down",
        "to throw sth at sb"
      ]
    },
    {
      "id": 1759,
      "hanzi": "看不起",
      "pinyin": "kàn bu qǐ",
      "translations": [
        "to look down upon",
        "to despise"
      ]
    },
    {
      "id": 1760,
      "hanzi": "看来",
      "pinyin": "kàn lai",
      "translations": [
        "apparently",
        "it seems that"
      ]
    },
    {
      "id": 1761,
      "hanzi": "抗议",
      "pinyin": "kàng yì",
      "translations": [
        "to protest",
        "protest"
      ]
    },
    {
      "id": 1762,
      "hanzi": "烤鸭",
      "pinyin": "kǎo yā",
      "translations": [
        "roast duck"
      ]
    },
    {
      "id": 1763,
      "hanzi": "颗",
      "pinyin": "kē",
      "translations": [
        "classifier for small spheres",
        "pearls",
        "corn grains",
        "teeth",
        "hearts",
        "satellites etc"
      ]
    },
    {
      "id": 1764,
      "hanzi": "可见",
      "pinyin": "kě jiàn",
      "translations": [
        "it can clearly be seen (that this is the case)",
        "it is (thus) clear",
        "clear",
        "visible"
      ]
    },
    {
      "id": 1765,
      "hanzi": "可靠",
      "pinyin": "kě kào",
      "translations": [
        "reliable"
      ]
    },
    {
      "id": 1766,
      "hanzi": "可怕",
      "pinyin": "kě pà",
      "translations": [
        "awful",
        "dreadful",
        "fearful",
        "formidable",
        "frightful",
        "scary",
        "hideous",
        "horrible",
        "terrible",
        "terribly"
      ]
    },
    {
      "id": 1767,
      "hanzi": "刻苦",
      "pinyin": "kè kǔ",
      "translations": [
        "hardworking",
        "assiduous"
      ]
    },
    {
      "id": 1768,
      "hanzi": "课程",
      "pinyin": "kè chéng",
      "translations": [
        "course",
        "academic program",
        "CL:堂",
        "節|节",
        "門|门[mén]"
      ]
    },
    {
      "id": 1769,
      "hanzi": "克",
      "pinyin": "kè",
      "translations": [
        "variant of 克[kè]",
        "to subdue",
        "to overthrow",
        "to restrain"
      ]
    },
    {
      "id": 1770,
      "hanzi": "克服",
      "pinyin": "kè fú",
      "translations": [
        "(try to) overcome (hardships etc)",
        "to conquer",
        "to put up with",
        "to endure"
      ]
    },
    {
      "id": 1771,
      "hanzi": "客观",
      "pinyin": "kè guān",
      "translations": [
        "objective",
        "impartial"
      ]
    },
    {
      "id": 1772,
      "hanzi": "客厅",
      "pinyin": "kè tīng",
      "translations": [
        "drawing room (room for arriving guests)",
        "living room",
        "CL:間|间[jiān]"
      ]
    },
    {
      "id": 1773,
      "hanzi": "空间",
      "pinyin": "kōng jiān",
      "translations": [
        "space",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1774,
      "hanzi": "恐怖",
      "pinyin": "kǒng bù",
      "translations": [
        "terrible",
        "frightful",
        "frightening",
        "terror",
        "terrorist"
      ]
    },
    {
      "id": 1775,
      "hanzi": "空闲",
      "pinyin": "kòng xián",
      "translations": [
        "idle",
        "free time",
        "leisure"
      ]
    },
    {
      "id": 1776,
      "hanzi": "控制",
      "pinyin": "kòng zhì",
      "translations": [
        "control",
        "to exercise control over",
        "to contain"
      ]
    },
    {
      "id": 1777,
      "hanzi": "口味",
      "pinyin": "kǒu wèi",
      "translations": [
        "a person's preferences",
        "tastes (in food)",
        "flavor"
      ]
    },
    {
      "id": 1778,
      "hanzi": "夸",
      "pinyin": "kuā",
      "translations": [
        "to boast",
        "to exaggerate",
        "to praise"
      ]
    },
    {
      "id": 1779,
      "hanzi": "会计",
      "pinyin": "kuài jì",
      "translations": [
        "accountant",
        "accountancy",
        "accounting"
      ]
    },
    {
      "id": 1780,
      "hanzi": "矿泉水",
      "pinyin": "kuàng quán shuǐ",
      "translations": [
        "mineral spring water",
        "CL:瓶",
        "杯[bēi]"
      ]
    },
    {
      "id": 1781,
      "hanzi": "辣椒",
      "pinyin": "là jiāo",
      "translations": [
        "hot pepper",
        "chili"
      ]
    },
    {
      "id": 1782,
      "hanzi": "蜡烛",
      "pinyin": "là zhú",
      "translations": [
        "candle",
        "CL:根",
        "支[zhī]"
      ]
    },
    {
      "id": 1783,
      "hanzi": "来自",
      "pinyin": "lái zì",
      "translations": [
        "to come from (a place)",
        "From: (in email header)"
      ]
    },
    {
      "id": 1784,
      "hanzi": "拦",
      "pinyin": "lán",
      "translations": [
        "to cut off",
        "to hinder"
      ]
    },
    {
      "id": 1785,
      "hanzi": "烂",
      "pinyin": "làn",
      "translations": [
        "soft",
        "mushy",
        "well-cooked and soft",
        "to rot",
        "to decompose",
        "rotten",
        "worn out",
        "chaotic",
        "messy",
        "utterly",
        "thoroughly"
      ]
    },
    {
      "id": 1786,
      "hanzi": "狼",
      "pinyin": "láng",
      "translations": [
        "wolf",
        "CL:匹",
        "隻|只",
        "條|条[tiáo]"
      ]
    },
    {
      "id": 1787,
      "hanzi": "劳动",
      "pinyin": "láo dòng",
      "translations": [
        "work",
        "toil",
        "physical labor",
        "CL:次[cì]"
      ]
    },
    {
      "id": 1788,
      "hanzi": "劳驾",
      "pinyin": "láo jià",
      "translations": [
        "excuse me"
      ]
    },
    {
      "id": 1789,
      "hanzi": "老百姓",
      "pinyin": "lǎo bǎi xìng",
      "translations": [
        "ordinary people",
        "the \"person in the street\"",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1790,
      "hanzi": "老板",
      "pinyin": "lǎo bǎn",
      "translations": [
        "boss",
        "business proprietor",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1791,
      "hanzi": "老实",
      "pinyin": "lǎo shí",
      "translations": [
        "honest",
        "sincere",
        "open and guileless",
        "naive"
      ]
    },
    {
      "id": 1792,
      "hanzi": "老鼠",
      "pinyin": "lǎo shǔ",
      "translations": [
        "rat",
        "mouse",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 1793,
      "hanzi": "姥姥",
      "pinyin": "lǎo lao",
      "translations": [
        "(informal) mother's mother",
        "maternal grandmother"
      ]
    },
    {
      "id": 1794,
      "hanzi": "乐观",
      "pinyin": "lè guān",
      "translations": [
        "optimistic",
        "hopeful"
      ]
    },
    {
      "id": 1795,
      "hanzi": "雷",
      "pinyin": "léi",
      "translations": [
        "thunder",
        "(internet slang) terrifying",
        "terrific"
      ]
    },
    {
      "id": 1796,
      "hanzi": "类",
      "pinyin": "lèi",
      "translations": [
        "kind",
        "type",
        "class",
        "category",
        "similar",
        "like",
        "to resemble"
      ]
    },
    {
      "id": 1797,
      "hanzi": "梨",
      "pinyin": "lí",
      "translations": [
        "pear",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1798,
      "hanzi": "离婚",
      "pinyin": "lí hūn",
      "translations": [
        "to divorce",
        "divorced from (one's spouse)"
      ]
    },
    {
      "id": 1799,
      "hanzi": "厘米",
      "pinyin": "lí mǐ",
      "translations": [
        "centimeter",
        "also written 厘米"
      ]
    },
    {
      "id": 1800,
      "hanzi": "礼拜天",
      "pinyin": "lǐ bài tiān",
      "translations": [
        "Sunday"
      ]
    },
    {
      "id": 1801,
      "hanzi": "理论",
      "pinyin": "lǐ lùn",
      "translations": [
        "theory",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1802,
      "hanzi": "理由",
      "pinyin": "lǐ yóu",
      "translations": [
        "reason",
        "grounds",
        "justification",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1803,
      "hanzi": "粒",
      "pinyin": "lì",
      "translations": [
        "grain",
        "granule",
        "classifier for small round things (peas, bullets, peanuts, pills, grains etc)"
      ]
    },
    {
      "id": 1804,
      "hanzi": "立方",
      "pinyin": "lì fāng",
      "translations": [
        "cube"
      ]
    },
    {
      "id": 1805,
      "hanzi": "立即",
      "pinyin": "lì jí",
      "translations": [
        "immediately"
      ]
    },
    {
      "id": 1806,
      "hanzi": "立刻",
      "pinyin": "lì kè",
      "translations": [
        "forthwith",
        "immediate",
        "prompt",
        "promptly",
        "straightway",
        "thereupon",
        "at once"
      ]
    },
    {
      "id": 1807,
      "hanzi": "力量",
      "pinyin": "lì liang",
      "translations": [
        "power",
        "force",
        "strength"
      ]
    },
    {
      "id": 1808,
      "hanzi": "利润",
      "pinyin": "lì rùn",
      "translations": [
        "profits"
      ]
    },
    {
      "id": 1809,
      "hanzi": "利息",
      "pinyin": "lì xī",
      "translations": [
        "interest (on a loan)",
        "CL:筆|笔[bǐ]"
      ]
    },
    {
      "id": 1810,
      "hanzi": "利益",
      "pinyin": "lì yì",
      "translations": [
        "benefit",
        "(in sb's) interest",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1811,
      "hanzi": "利用",
      "pinyin": "lì yòng",
      "translations": [
        "exploit",
        "make use of",
        "to use",
        "to take advantage of",
        "to utilize"
      ]
    },
    {
      "id": 1812,
      "hanzi": "连忙",
      "pinyin": "lián máng",
      "translations": [
        "promptly",
        "at once"
      ]
    },
    {
      "id": 1813,
      "hanzi": "连续剧",
      "pinyin": "lián xù jù",
      "translations": [
        "serialized drama",
        "dramatic series",
        "show in parts"
      ]
    },
    {
      "id": 1814,
      "hanzi": "联合",
      "pinyin": "lián hé",
      "translations": [
        "to combine",
        "to join",
        "unite",
        "alliance"
      ]
    },
    {
      "id": 1815,
      "hanzi": "恋爱",
      "pinyin": "liàn ài",
      "translations": [
        "(romantic) love",
        "CL:個|个",
        "場|场[chǎng]",
        "in love",
        "to have an affair"
      ]
    },
    {
      "id": 1816,
      "hanzi": "良好",
      "pinyin": "liáng hǎo",
      "translations": [
        "good",
        "favorable",
        "well",
        "fine"
      ]
    },
    {
      "id": 1817,
      "hanzi": "粮食",
      "pinyin": "liáng shi",
      "translations": [
        "foodstuff",
        "cereals",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 1818,
      "hanzi": "了不起",
      "pinyin": "liǎo bu qǐ",
      "translations": [
        "amazing",
        "terrific",
        "extraordinary"
      ]
    },
    {
      "id": 1819,
      "hanzi": "临时",
      "pinyin": "lín shí",
      "translations": [
        "at the instant sth happens",
        "temporary",
        "interim",
        "ad hoc"
      ]
    },
    {
      "id": 1820,
      "hanzi": "铃",
      "pinyin": "líng",
      "translations": [
        "(small) bell",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 1821,
      "hanzi": "零件",
      "pinyin": "líng jiàn",
      "translations": [
        "part",
        "component"
      ]
    },
    {
      "id": 1822,
      "hanzi": "零钱",
      "pinyin": "líng qián",
      "translations": [
        "change (of money)",
        "small change",
        "pocket money"
      ]
    },
    {
      "id": 1823,
      "hanzi": "零食",
      "pinyin": "líng shí",
      "translations": [
        "between-meal nibbles",
        "snacks"
      ]
    },
    {
      "id": 1824,
      "hanzi": "灵活",
      "pinyin": "líng huó",
      "translations": [
        "flexible",
        "nimble",
        "agile"
      ]
    },
    {
      "id": 1825,
      "hanzi": "领导",
      "pinyin": "lǐng dǎo",
      "translations": [
        "lead",
        "leading",
        "to lead",
        "leadership",
        "leader",
        "CL:位",
        "個|个[gè]"
      ]
    },
    {
      "id": 1826,
      "hanzi": "领域",
      "pinyin": "lǐng yù",
      "translations": [
        "domain",
        "sphere",
        "field",
        "territory",
        "area"
      ]
    },
    {
      "id": 1827,
      "hanzi": "流传",
      "pinyin": "liú chuán",
      "translations": [
        "to spread",
        "to circulate",
        "to hand down"
      ]
    },
    {
      "id": 1828,
      "hanzi": "浏览",
      "pinyin": "liú lǎn",
      "translations": [
        "to skim over",
        "to browse"
      ]
    },
    {
      "id": 1829,
      "hanzi": "龙",
      "pinyin": "lóng",
      "translations": [
        "dragon",
        "CL:條|条[tiáo]",
        "imperial"
      ]
    },
    {
      "id": 1830,
      "hanzi": "漏",
      "pinyin": "lòu",
      "translations": [
        "to leak",
        "to divulge",
        "to leave out by mistake",
        "waterclock or hourglass (old)"
      ]
    },
    {
      "id": 1831,
      "hanzi": "露",
      "pinyin": "lù",
      "translations": [
        "dew",
        "syrup",
        "nectar",
        "outdoors (not under cover)",
        "to show",
        "to reveal",
        "to betray",
        "to expose"
      ]
    },
    {
      "id": 1832,
      "hanzi": "陆地",
      "pinyin": "lù dì",
      "translations": [
        "dry land (as opposed to the sea)"
      ]
    },
    {
      "id": 1833,
      "hanzi": "陆续",
      "pinyin": "lù xù",
      "translations": [
        "in turn",
        "successively",
        "one after the other",
        "bit by bit"
      ]
    },
    {
      "id": 1834,
      "hanzi": "录取",
      "pinyin": "lù qǔ",
      "translations": [
        "to recruit",
        "to enroll"
      ]
    },
    {
      "id": 1835,
      "hanzi": "录音",
      "pinyin": "lù yīn",
      "translations": [
        "to record (sound)",
        "sound recording",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1836,
      "hanzi": "轮流",
      "pinyin": "lún liú",
      "translations": [
        "to alternate",
        "to take turns"
      ]
    },
    {
      "id": 1837,
      "hanzi": "论文",
      "pinyin": "lùn wén",
      "translations": [
        "paper",
        "treatise",
        "thesis",
        "CL:篇[piān]",
        "to discuss a paper or thesis (old)"
      ]
    },
    {
      "id": 1838,
      "hanzi": "逻辑",
      "pinyin": "luó ji",
      "translations": [
        "logic (loanword)"
      ]
    },
    {
      "id": 1839,
      "hanzi": "落后",
      "pinyin": "luò hòu",
      "translations": [
        "to fall behind",
        "to lag (in technology etc)",
        "backward",
        "to retrogress"
      ]
    },
    {
      "id": 1840,
      "hanzi": "骂",
      "pinyin": "mà",
      "translations": [
        "to scold",
        "to abuse",
        "CL:通",
        "頓|顿[dùn]"
      ]
    },
    {
      "id": 1841,
      "hanzi": "麦克风",
      "pinyin": "mài kè fēng",
      "translations": [
        "microphone (loanword)"
      ]
    },
    {
      "id": 1842,
      "hanzi": "馒头",
      "pinyin": "mán tou",
      "translations": [
        "steamed roll",
        "steamed bun",
        "steamed bread",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1843,
      "hanzi": "满足",
      "pinyin": "mǎn zú",
      "translations": [
        "to satisfy",
        "to meet (the needs of)",
        "satisfied",
        "content"
      ]
    },
    {
      "id": 1844,
      "hanzi": "毛",
      "pinyin": "máo",
      "translations": [
        "hair",
        "feather",
        "down",
        "wool",
        "mildew",
        "mold",
        "coarse or semifinished",
        "young",
        "raw",
        "careless",
        "unthinking",
        "nervous",
        "scared",
        "(of currency) to devalue or depreciate",
        "classifier for Chinese fractional monetary unit ( = 角, = 1, 10 yuan or 10 fen 分)"
      ]
    },
    {
      "id": 1845,
      "hanzi": "毛病",
      "pinyin": "máo bìng",
      "translations": [
        "fault",
        "defect",
        "shortcomings",
        "ailment",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1846,
      "hanzi": "矛盾",
      "pinyin": "máo dùn",
      "translations": [
        "contradictory",
        "contradiction",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1847,
      "hanzi": "冒险",
      "pinyin": "mào xiǎn",
      "translations": [
        "to take risks",
        "to take chances",
        "foray",
        "adventure"
      ]
    },
    {
      "id": 1848,
      "hanzi": "贸易",
      "pinyin": "mào yì",
      "translations": [
        "(commercial) trade",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1849,
      "hanzi": "眉毛",
      "pinyin": "méi mao",
      "translations": [
        "eyebrow",
        "CL:根[gēn]"
      ]
    },
    {
      "id": 1850,
      "hanzi": "煤炭",
      "pinyin": "méi tàn",
      "translations": [
        "coal"
      ]
    },
    {
      "id": 1851,
      "hanzi": "美术",
      "pinyin": "měi shù",
      "translations": [
        "art",
        "fine arts",
        "painting",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 1852,
      "hanzi": "魅力",
      "pinyin": "mèi lì",
      "translations": [
        "charm",
        "fascination",
        "glamor",
        "charisma"
      ]
    },
    {
      "id": 1853,
      "hanzi": "迷路",
      "pinyin": "mí lù",
      "translations": [
        "to lose the way",
        "lost",
        "labyrinth",
        "labyrinthus vestibularis (of the inner ear)"
      ]
    },
    {
      "id": 1854,
      "hanzi": "谜语",
      "pinyin": "mí yǔ",
      "translations": [
        "riddle",
        "conundrum"
      ]
    },
    {
      "id": 1855,
      "hanzi": "密切",
      "pinyin": "mì qiè",
      "translations": [
        "close",
        "familiar",
        "intimate",
        "closely (related)",
        "to foster close ties",
        "to pay close attention"
      ]
    },
    {
      "id": 1856,
      "hanzi": "蜜蜂",
      "pinyin": "mì fēng",
      "translations": [
        "bee",
        "honeybee",
        "CL:隻|只",
        "群[qún]"
      ]
    },
    {
      "id": 1857,
      "hanzi": "秘密",
      "pinyin": "mì mì",
      "translations": [
        "secret",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1858,
      "hanzi": "秘书",
      "pinyin": "mì shū",
      "translations": [
        "secretary"
      ]
    },
    {
      "id": 1859,
      "hanzi": "棉花",
      "pinyin": "mián hua",
      "translations": [
        "cotton"
      ]
    },
    {
      "id": 1860,
      "hanzi": "面对",
      "pinyin": "miàn duì",
      "translations": [
        "to confront",
        "to face"
      ]
    },
    {
      "id": 1861,
      "hanzi": "面积",
      "pinyin": "miàn ji",
      "translations": [
        "area (of a floor, piece of land etc)",
        "surface area",
        "tract of land"
      ]
    },
    {
      "id": 1862,
      "hanzi": "面临",
      "pinyin": "miàn lín",
      "translations": [
        "to face sth",
        "to be confronted with"
      ]
    },
    {
      "id": 1863,
      "hanzi": "描写",
      "pinyin": "miáo xiě",
      "translations": [
        "to describe",
        "to depict",
        "to portray",
        "description"
      ]
    },
    {
      "id": 1864,
      "hanzi": "苗条",
      "pinyin": "miáo tiáo",
      "translations": [
        "slim",
        "slender",
        "graceful"
      ]
    },
    {
      "id": 1865,
      "hanzi": "秒",
      "pinyin": "miǎo",
      "translations": [
        "second (of time)",
        "unit of angle or arc equivalent to one sixtieth of a degree"
      ]
    },
    {
      "id": 1866,
      "hanzi": "民主",
      "pinyin": "mín zhǔ",
      "translations": [
        "democracy"
      ]
    },
    {
      "id": 1867,
      "hanzi": "明确",
      "pinyin": "míng què",
      "translations": [
        "clear-cut",
        "definite",
        "explicit",
        "to clarify",
        "to specify",
        "to make definite"
      ]
    },
    {
      "id": 1868,
      "hanzi": "明显",
      "pinyin": "míng xiǎn",
      "translations": [
        "clear",
        "distinct",
        "obvious"
      ]
    },
    {
      "id": 1869,
      "hanzi": "明信片",
      "pinyin": "míng xìn piàn",
      "translations": [
        "postcard"
      ]
    },
    {
      "id": 1870,
      "hanzi": "明星",
      "pinyin": "míng xīng",
      "translations": [
        "star",
        "celebrity"
      ]
    },
    {
      "id": 1871,
      "hanzi": "名牌",
      "pinyin": "míng pái",
      "translations": [
        "famous brand"
      ]
    },
    {
      "id": 1872,
      "hanzi": "名片",
      "pinyin": "míng piàn",
      "translations": [
        "(business) card"
      ]
    },
    {
      "id": 1873,
      "hanzi": "名胜",
      "pinyin": "míng shèng",
      "translations": [
        "a place famous for its scenery or historical relics",
        "scenic spot",
        "CL:處|处[chù]"
      ]
    },
    {
      "id": 1874,
      "hanzi": "命令",
      "pinyin": "mìng lìng",
      "translations": [
        "order",
        "command",
        "CL:道",
        "個|个[gè]"
      ]
    },
    {
      "id": 1875,
      "hanzi": "命运",
      "pinyin": "mìng yùn",
      "translations": [
        "fate",
        "destiny",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1876,
      "hanzi": "摸",
      "pinyin": "mō",
      "translations": [
        "to feel with the hand",
        "to touch",
        "to stroke",
        "to grope",
        "to feel (one's pulse)"
      ]
    },
    {
      "id": 1877,
      "hanzi": "摩托车",
      "pinyin": "mó tuō chē",
      "translations": [
        "motorbike",
        "motorcycle",
        "CL:輛|辆",
        "部[bù]"
      ]
    },
    {
      "id": 1878,
      "hanzi": "模仿",
      "pinyin": "mó fǎng",
      "translations": [
        "to imitate",
        "to copy",
        "to emulate",
        "to mimic",
        "model"
      ]
    },
    {
      "id": 1879,
      "hanzi": "模糊",
      "pinyin": "mó hu",
      "translations": [
        "vague",
        "indistinct",
        "fuzzy"
      ]
    },
    {
      "id": 1880,
      "hanzi": "陌生",
      "pinyin": "mò shēng",
      "translations": [
        "strange",
        "unfamiliar"
      ]
    },
    {
      "id": 1881,
      "hanzi": "某",
      "pinyin": "mǒu",
      "translations": [
        "some",
        "a certain",
        "sb or sth indefinite",
        "such-and-such"
      ]
    },
    {
      "id": 1882,
      "hanzi": "目标",
      "pinyin": "mù biāo",
      "translations": [
        "target",
        "goal",
        "objective",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1883,
      "hanzi": "目录",
      "pinyin": "mù lù",
      "translations": [
        "catalog",
        "table of contents",
        "directory (on computer hard drive)",
        "list",
        "contents"
      ]
    },
    {
      "id": 1884,
      "hanzi": "目前",
      "pinyin": "mù qián",
      "translations": [
        "at the present time",
        "currently"
      ]
    },
    {
      "id": 1885,
      "hanzi": "木头",
      "pinyin": "mù tou",
      "translations": [
        "slow-witted",
        "blockhead",
        "log (of wood, timber etc)",
        "CL:塊|块",
        "根[gēn]"
      ]
    },
    {
      "id": 1886,
      "hanzi": "哪怕",
      "pinyin": "nǎ pà",
      "translations": [
        "even",
        "even if",
        "even though",
        "no matter how"
      ]
    },
    {
      "id": 1887,
      "hanzi": "难怪",
      "pinyin": "nán guài",
      "translations": [
        "(it's) no wonder (that...)",
        "(it's) not surprising (that)"
      ]
    },
    {
      "id": 1888,
      "hanzi": "难看",
      "pinyin": "nán kàn",
      "translations": [
        "ugly",
        "unsightly"
      ]
    },
    {
      "id": 1889,
      "hanzi": "脑袋",
      "pinyin": "nǎo dài",
      "translations": [
        "head",
        "skull",
        "brains",
        "mental capability",
        "CL:顆|颗",
        "個|个[gè]"
      ]
    },
    {
      "id": 1890,
      "hanzi": "内科",
      "pinyin": "nèi kē",
      "translations": [
        "internal medicine",
        "general medicine"
      ]
    },
    {
      "id": 1891,
      "hanzi": "嫩",
      "pinyin": "nèn",
      "translations": [
        "tender",
        "soft",
        "delicate",
        "light (color)",
        "inexperienced",
        "unskilled"
      ]
    },
    {
      "id": 1892,
      "hanzi": "能干",
      "pinyin": "néng gàn",
      "translations": [
        "capable",
        "competent"
      ]
    },
    {
      "id": 1893,
      "hanzi": "能源",
      "pinyin": "néng yuán",
      "translations": [
        "energy",
        "power source",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1894,
      "hanzi": "年代",
      "pinyin": "nián dài",
      "translations": [
        "a decade of a century (e.g. the Sixties)",
        "age",
        "era",
        "period",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1895,
      "hanzi": "年纪",
      "pinyin": "nián jì",
      "translations": [
        "age",
        "CL:把",
        "個|个[gè]"
      ]
    },
    {
      "id": 1896,
      "hanzi": "念",
      "pinyin": "niàn",
      "translations": [
        "to read",
        "to study (a degree course)",
        "to read aloud",
        "to miss (sb)",
        "idea",
        "remembrance",
        "twenty (banker's anti-fraud numeral corresponding to 廿, 20)"
      ]
    },
    {
      "id": 1897,
      "hanzi": "宁可",
      "pinyin": "nìng kě",
      "translations": [
        "preferably",
        "one would prefer to...(or not to...)",
        "would rather",
        "(would) be better to",
        "(to pick) the lesser of two evils"
      ]
    },
    {
      "id": 1898,
      "hanzi": "牛仔裤",
      "pinyin": "niú zǎi kù",
      "translations": [
        "jeans",
        "CL:條|条[tiáo]",
        "also written 牛崽褲|牛崽裤"
      ]
    },
    {
      "id": 1899,
      "hanzi": "浓",
      "pinyin": "nóng",
      "translations": [
        "concentrated",
        "dense"
      ]
    },
    {
      "id": 1900,
      "hanzi": "农民",
      "pinyin": "nóng mín",
      "translations": [
        "peasant",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1901,
      "hanzi": "农业",
      "pinyin": "nóng yè",
      "translations": [
        "agriculture",
        "farming"
      ]
    },
    {
      "id": 1902,
      "hanzi": "女士",
      "pinyin": "nǚ shì",
      "translations": [
        "lady",
        "madam",
        "CL:個|个",
        "位[wèi]",
        "Miss",
        "Ms"
      ]
    },
    {
      "id": 1903,
      "hanzi": "偶然",
      "pinyin": "ǒu rán",
      "translations": [
        "incidentally",
        "occasional",
        "occasionally",
        "by chance",
        "randomly"
      ]
    },
    {
      "id": 1904,
      "hanzi": "拍",
      "pinyin": "pāi",
      "translations": [
        "to pat",
        "to clap",
        "to slap",
        "to swat",
        "to take (a photo)",
        "to shoot (a film)",
        "racket (sports)",
        "beat (music)"
      ]
    },
    {
      "id": 1905,
      "hanzi": "排队",
      "pinyin": "pái duì",
      "translations": [
        "to line up"
      ]
    },
    {
      "id": 1906,
      "hanzi": "排球",
      "pinyin": "pái qiú",
      "translations": [
        "volleyball",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1907,
      "hanzi": "派",
      "pinyin": "pài",
      "translations": [
        "clique",
        "school",
        "group",
        "faction",
        "to dispatch",
        "to send",
        "to assign",
        "to appoint",
        "pi (Greek letter Ππ)",
        "the circular ratio pi = 3.1415926",
        "(loanword) pie"
      ]
    },
    {
      "id": 1908,
      "hanzi": "盼望",
      "pinyin": "pàn wàng",
      "translations": [
        "to hope for",
        "to look forward to"
      ]
    },
    {
      "id": 1909,
      "hanzi": "赔偿",
      "pinyin": "péi cháng",
      "translations": [
        "to compensate"
      ]
    },
    {
      "id": 1910,
      "hanzi": "培养",
      "pinyin": "péi yǎng",
      "translations": [
        "to cultivate",
        "to breed",
        "to foster",
        "to nurture",
        "to educate",
        "to groom (for a position)",
        "education",
        "fostering",
        "culture (biology)"
      ]
    },
    {
      "id": 1911,
      "hanzi": "配合",
      "pinyin": "pèi hé",
      "translations": [
        "matching",
        "fitting in with",
        "compatible with",
        "to correspond",
        "to fit",
        "to conform to",
        "rapport",
        "to coordinate with",
        "to act in concert with",
        "to cooperate",
        "to become man and wife",
        "to combine parts of machine"
      ]
    },
    {
      "id": 1912,
      "hanzi": "佩服",
      "pinyin": "pèi fú",
      "translations": [
        "to admire"
      ]
    },
    {
      "id": 1913,
      "hanzi": "盆",
      "pinyin": "pén",
      "translations": [
        "basin",
        "flower pot",
        "unit of volume equal to 12 斗 and 8 升",
        "approx 128 liters",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1914,
      "hanzi": "碰见",
      "pinyin": "pèng jiàn",
      "translations": [
        "to run into",
        "to meet (unexpectedly)",
        "to bump into"
      ]
    },
    {
      "id": 1915,
      "hanzi": "披",
      "pinyin": "pī",
      "translations": [
        "to drape over one's shoulders",
        "to open",
        "to unroll",
        "to split open",
        "to spread out"
      ]
    },
    {
      "id": 1916,
      "hanzi": "批",
      "pinyin": "pī",
      "translations": [
        "to ascertain",
        "to act on",
        "to criticize",
        "to pass on",
        "classifier for batches",
        "lots",
        "military flights",
        "tier (for the ranking of universities and colleges)"
      ]
    },
    {
      "id": 1917,
      "hanzi": "批准",
      "pinyin": "pī zhǔn",
      "translations": [
        "to approve",
        "to ratify"
      ]
    },
    {
      "id": 1918,
      "hanzi": "疲劳",
      "pinyin": "pí láo",
      "translations": [
        "fatigue",
        "wearily",
        "weariness",
        "weary"
      ]
    },
    {
      "id": 1919,
      "hanzi": "皮鞋",
      "pinyin": "pí xié",
      "translations": [
        "leather shoes"
      ]
    },
    {
      "id": 1920,
      "hanzi": "匹",
      "pinyin": "pǐ",
      "translations": [
        "classifier for horses",
        "mules etc",
        "Taiwan pr. [pī]",
        "ordinary person",
        "classifier for cloth: bolt",
        "horsepower"
      ]
    },
    {
      "id": 1921,
      "hanzi": "片",
      "pinyin": "piàn",
      "translations": [
        "thin piece",
        "flake",
        "a slice",
        "film",
        "TV play",
        "to slice",
        "to carve thin",
        "partial",
        "incomplete",
        "one-sided",
        "classifier for slices",
        "tablets",
        "tract of land",
        "area of water",
        "classifier for CDs",
        "movies",
        "DVDs etc",
        "used with numeral 一: classifier for scenario",
        "scene",
        "feeling",
        "atmosphere",
        "sound etc"
      ]
    },
    {
      "id": 1922,
      "hanzi": "片面",
      "pinyin": "piàn miàn",
      "translations": [
        "unilateral",
        "one-sided"
      ]
    },
    {
      "id": 1923,
      "hanzi": "飘",
      "pinyin": "piāo",
      "translations": [
        "to float"
      ]
    },
    {
      "id": 1924,
      "hanzi": "频道",
      "pinyin": "pín dào",
      "translations": [
        "frequency",
        "(television) channel"
      ]
    },
    {
      "id": 1925,
      "hanzi": "品种",
      "pinyin": "pǐn zhǒng",
      "translations": [
        "breed",
        "variety",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1926,
      "hanzi": "凭",
      "pinyin": "píng",
      "translations": [
        "to lean against",
        "to rely on",
        "on the basis of",
        "no matter (how, what etc)",
        "proof"
      ]
    },
    {
      "id": 1927,
      "hanzi": "平",
      "pinyin": "píng",
      "translations": [
        "flat",
        "level",
        "equal",
        "to tie (make the same score)",
        "to draw (score)",
        "calm",
        "peaceful",
        "see also 平聲|平声[píng shēng]"
      ]
    },
    {
      "id": 1928,
      "hanzi": "平常",
      "pinyin": "píng cháng",
      "translations": [
        "ordinary",
        "common",
        "usually",
        "ordinarily"
      ]
    },
    {
      "id": 1929,
      "hanzi": "平等",
      "pinyin": "píng děng",
      "translations": [
        "equal",
        "equality"
      ]
    },
    {
      "id": 1930,
      "hanzi": "平方",
      "pinyin": "píng fāng",
      "translations": [
        "square (as in square foot, square mile, square root)"
      ]
    },
    {
      "id": 1931,
      "hanzi": "平衡",
      "pinyin": "píng héng",
      "translations": [
        "balance",
        "equilibrium"
      ]
    },
    {
      "id": 1932,
      "hanzi": "平静",
      "pinyin": "píng jìng",
      "translations": [
        "tranquil",
        "undisturbed",
        "serene"
      ]
    },
    {
      "id": 1933,
      "hanzi": "平均",
      "pinyin": "píng jūn",
      "translations": [
        "average"
      ]
    },
    {
      "id": 1934,
      "hanzi": "评价",
      "pinyin": "píng jià",
      "translations": [
        "to evaluate",
        "to assess"
      ]
    },
    {
      "id": 1935,
      "hanzi": "破产",
      "pinyin": "pò chǎn",
      "translations": [
        "to go bankrupt",
        "to become impoverished",
        "bankruptcy"
      ]
    },
    {
      "id": 1936,
      "hanzi": "破坏",
      "pinyin": "pò huài",
      "translations": [
        "destruction",
        "damage",
        "to wreck",
        "to break",
        "to destroy"
      ]
    },
    {
      "id": 1937,
      "hanzi": "迫切",
      "pinyin": "pò qiè",
      "translations": [
        "urgent",
        "pressing"
      ]
    },
    {
      "id": 1938,
      "hanzi": "朴素",
      "pinyin": "pǔ sù",
      "translations": [
        "plain and simple",
        "unadorned",
        "simple living",
        "not frivolous"
      ]
    },
    {
      "id": 1939,
      "hanzi": "期待",
      "pinyin": "qī dài",
      "translations": [
        "to look forward to",
        "to await",
        "expectation"
      ]
    },
    {
      "id": 1940,
      "hanzi": "期间",
      "pinyin": "qī jiān",
      "translations": [
        "period of time",
        "time",
        "time period",
        "period",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1941,
      "hanzi": "其余",
      "pinyin": "qí yú",
      "translations": [
        "the rest",
        "the others",
        "remaining",
        "remainder",
        "apart from them"
      ]
    },
    {
      "id": 1942,
      "hanzi": "奇迹",
      "pinyin": "qí jì",
      "translations": [
        "miracle",
        "miraculous",
        "wonder",
        "marvel"
      ]
    },
    {
      "id": 1943,
      "hanzi": "启发",
      "pinyin": "qǐ fā",
      "translations": [
        "to enlighten",
        "to explain and arouse interest",
        "to inspire",
        "inspiration",
        "heuristic (attributively)",
        "to teach",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1944,
      "hanzi": "企图",
      "pinyin": "qǐ tú",
      "translations": [
        "to attempt",
        "to try",
        "attempt",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 1945,
      "hanzi": "企业",
      "pinyin": "qǐ yè",
      "translations": [
        "company",
        "firm",
        "enterprise",
        "corporation",
        "CL:家[jiā]"
      ]
    },
    {
      "id": 1946,
      "hanzi": "气氛",
      "pinyin": "qì fēn",
      "translations": [
        "atmosphere",
        "mood"
      ]
    },
    {
      "id": 1947,
      "hanzi": "汽油",
      "pinyin": "qì yóu",
      "translations": [
        "gasoline"
      ]
    },
    {
      "id": 1948,
      "hanzi": "牵",
      "pinyin": "qiān",
      "translations": [
        "to pull (an animal on a tether)",
        "to lead along",
        "to hold hands"
      ]
    },
    {
      "id": 1949,
      "hanzi": "签字",
      "pinyin": "qiān zì",
      "translations": [
        "to sign (a signature)"
      ]
    },
    {
      "id": 1950,
      "hanzi": "谦虚",
      "pinyin": "qiān xū",
      "translations": [
        "modest",
        "self-effacing",
        "to make modest remarks"
      ]
    },
    {
      "id": 1951,
      "hanzi": "前途",
      "pinyin": "qián tú",
      "translations": [
        "prospects",
        "future outlook",
        "journey"
      ]
    },
    {
      "id": 1952,
      "hanzi": "浅",
      "pinyin": "qiǎn",
      "translations": [
        "shallow",
        "light (color)"
      ]
    },
    {
      "id": 1953,
      "hanzi": "欠",
      "pinyin": "qiàn",
      "translations": [
        "deficient",
        "to owe",
        "to lack",
        "yawn"
      ]
    },
    {
      "id": 1954,
      "hanzi": "枪",
      "pinyin": "qiāng",
      "translations": [
        "gun",
        "firearm",
        "rifle",
        "spear",
        "thing with shape or function similar to a gun",
        "CL:支",
        "把",
        "杆",
        "條|条",
        "枝[zhī]",
        "to substitute for another person in a test",
        "to knock",
        "classifier for rifle shots"
      ]
    },
    {
      "id": 1955,
      "hanzi": "强调",
      "pinyin": "qiáng diào",
      "translations": [
        "to emphasize (a statement)",
        "to stress"
      ]
    },
    {
      "id": 1956,
      "hanzi": "强烈",
      "pinyin": "qiáng liè",
      "translations": [
        "intense",
        "(violently) strong"
      ]
    },
    {
      "id": 1957,
      "hanzi": "抢",
      "pinyin": "qiǎng",
      "translations": [
        "to fight over",
        "to rush",
        "to scramble",
        "to grab",
        "to rob",
        "to snatch"
      ]
    },
    {
      "id": 1958,
      "hanzi": "悄悄",
      "pinyin": "qiāo qiāo",
      "translations": [
        "quietly",
        "secretly",
        "stealthily",
        "quiet",
        "worried",
        "Taiwan pr. [qiǎo qiǎo]"
      ]
    },
    {
      "id": 1959,
      "hanzi": "瞧",
      "pinyin": "qiáo",
      "translations": [
        "to look at",
        "to see",
        "to see (a doctor)",
        "to visit"
      ]
    },
    {
      "id": 1960,
      "hanzi": "巧妙",
      "pinyin": "qiǎo miào",
      "translations": [
        "ingenious",
        "clever",
        "ingenuity",
        "artifice"
      ]
    },
    {
      "id": 1961,
      "hanzi": "切",
      "pinyin": "qiē",
      "translations": [
        "to cut",
        "to slice",
        "tangent (math)"
      ]
    },
    {
      "id": 1962,
      "hanzi": "亲爱",
      "pinyin": "qīn ài",
      "translations": [
        "dear",
        "beloved",
        "darling"
      ]
    },
    {
      "id": 1963,
      "hanzi": "亲切",
      "pinyin": "qīn qiè",
      "translations": [
        "amiable",
        "cordial",
        "close and dear",
        "familiar"
      ]
    },
    {
      "id": 1964,
      "hanzi": "亲自",
      "pinyin": "qīn zì",
      "translations": [
        "personally"
      ]
    },
    {
      "id": 1965,
      "hanzi": "侵略",
      "pinyin": "qīn lvè",
      "translations": [
        "invasion",
        "encroachment"
      ]
    },
    {
      "id": 1966,
      "hanzi": "勤奋",
      "pinyin": "qín fèn",
      "translations": [
        "hardworking",
        "diligent"
      ]
    },
    {
      "id": 1967,
      "hanzi": "勤劳",
      "pinyin": "qín láo",
      "translations": [
        "hardworking",
        "industrious",
        "diligent"
      ]
    },
    {
      "id": 1968,
      "hanzi": "青",
      "pinyin": "qīng",
      "translations": [
        "nature's color",
        "green or blue",
        "greenish black",
        "youth",
        "young (of people)",
        "abbr. for Qinghai province 青海"
      ]
    },
    {
      "id": 1969,
      "hanzi": "青春",
      "pinyin": "qīng chūn",
      "translations": [
        "youth",
        "youthfulness"
      ]
    },
    {
      "id": 1970,
      "hanzi": "青少年",
      "pinyin": "qīng shào nián",
      "translations": [
        "adolescent",
        "youth",
        "teenager"
      ]
    },
    {
      "id": 1971,
      "hanzi": "轻视",
      "pinyin": "qīng shì",
      "translations": [
        "contempt",
        "contemptuous",
        "to despise",
        "to scorn",
        "scornful"
      ]
    },
    {
      "id": 1972,
      "hanzi": "清淡",
      "pinyin": "qīng dàn",
      "translations": [
        "light (of food, not greasy or strongly flavored)",
        "insipid",
        "slack (sales)"
      ]
    },
    {
      "id": 1973,
      "hanzi": "情景",
      "pinyin": "qíng jǐng",
      "translations": [
        "scene",
        "sight",
        "circumstances",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1974,
      "hanzi": "情绪",
      "pinyin": "qíng xù",
      "translations": [
        "mood",
        "state of mind",
        "moodiness",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 1975,
      "hanzi": "请求",
      "pinyin": "qǐng qiú",
      "translations": [
        "request",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1976,
      "hanzi": "庆祝",
      "pinyin": "qìng zhù",
      "translations": [
        "to celebrate"
      ]
    },
    {
      "id": 1977,
      "hanzi": "球迷",
      "pinyin": "qiú mí",
      "translations": [
        "soccer fan",
        "crazy about ball sports",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1978,
      "hanzi": "趋势",
      "pinyin": "qū shì",
      "translations": [
        "trend",
        "tendency"
      ]
    },
    {
      "id": 1979,
      "hanzi": "娶",
      "pinyin": "qǔ",
      "translations": [
        "to take a wife",
        "to marry (a woman)"
      ]
    },
    {
      "id": 1980,
      "hanzi": "取消",
      "pinyin": "qǔ xiāo",
      "translations": [
        "to cancel",
        "cancellation"
      ]
    },
    {
      "id": 1981,
      "hanzi": "去世",
      "pinyin": "qù shì",
      "translations": [
        "to pass away",
        "to die"
      ]
    },
    {
      "id": 1982,
      "hanzi": "圈",
      "pinyin": "quān",
      "translations": [
        "circle",
        "ring",
        "loop",
        "classifier for loops",
        "orbits",
        "laps of race etc",
        "CL:個|个[gè]",
        "to surround",
        "to circle"
      ]
    },
    {
      "id": 1983,
      "hanzi": "全面",
      "pinyin": "quán miàn",
      "translations": [
        "all-around",
        "comprehensive",
        "total",
        "overall"
      ]
    },
    {
      "id": 1984,
      "hanzi": "权力",
      "pinyin": "quán lì",
      "translations": [
        "power",
        "authority"
      ]
    },
    {
      "id": 1985,
      "hanzi": "权利",
      "pinyin": "quán lì",
      "translations": [
        "power",
        "right",
        "privilege"
      ]
    },
    {
      "id": 1986,
      "hanzi": "劝",
      "pinyin": "quàn",
      "translations": [
        "to advise",
        "to urge",
        "to try to persuade",
        "to exhort"
      ]
    },
    {
      "id": 1987,
      "hanzi": "缺乏",
      "pinyin": "quē fá",
      "translations": [
        "shortage",
        "be lacking",
        "to be short of",
        "to lack",
        "scarcity"
      ]
    },
    {
      "id": 1988,
      "hanzi": "确定",
      "pinyin": "què dìng",
      "translations": [
        "definite",
        "certain",
        "fixed",
        "to fix (on sth)",
        "to determine",
        "to be sure",
        "to ensure",
        "to make certain",
        "to ascertain",
        "to clinch",
        "to recognize",
        "to confirm",
        "OK (on computer dialog box)"
      ]
    },
    {
      "id": 1989,
      "hanzi": "确认",
      "pinyin": "què rèn",
      "translations": [
        "to confirm",
        "to verify",
        "confirmation"
      ]
    },
    {
      "id": 1990,
      "hanzi": "燃烧",
      "pinyin": "rán shāo",
      "translations": [
        "to ignite",
        "to combust",
        "to burn",
        "combustion",
        "flaming"
      ]
    },
    {
      "id": 1991,
      "hanzi": "嚷",
      "pinyin": "rǎng",
      "translations": [
        "blurt out",
        "to shout"
      ]
    },
    {
      "id": 1992,
      "hanzi": "绕",
      "pinyin": "rào",
      "translations": [
        "to wind",
        "to coil (thread)",
        "to rotate around",
        "to spiral",
        "to move around",
        "to go round (an obstacle)",
        "to by-pass",
        "to make a detour",
        "to confuse",
        "to perplex"
      ]
    },
    {
      "id": 1993,
      "hanzi": "热爱",
      "pinyin": "rè ài",
      "translations": [
        "to love ardently",
        "to adore"
      ]
    },
    {
      "id": 1994,
      "hanzi": "热烈",
      "pinyin": "rè liè",
      "translations": [
        "warm (welcome etc)"
      ]
    },
    {
      "id": 1995,
      "hanzi": "热心",
      "pinyin": "rè xīn",
      "translations": [
        "enthusiasm",
        "zeal",
        "zealous",
        "zest",
        "enthusiastic",
        "ardent",
        "warmhearted"
      ]
    },
    {
      "id": 1996,
      "hanzi": "人才",
      "pinyin": "rén cái",
      "translations": [
        "a person's talent",
        "talented person",
        "distinguished person",
        "a talent (worth head-hunting)",
        "person's looks",
        "an attractive woman",
        "used interchangeably with 人材",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 1997,
      "hanzi": "人口",
      "pinyin": "rén kǒu",
      "translations": [
        "population"
      ]
    },
    {
      "id": 1998,
      "hanzi": "人类",
      "pinyin": "rén lèi",
      "translations": [
        "humanity",
        "human race",
        "mankind"
      ]
    },
    {
      "id": 1999,
      "hanzi": "人生",
      "pinyin": "rén shēng",
      "translations": [
        "life (one's time on earth)"
      ]
    },
    {
      "id": 2000,
      "hanzi": "人事",
      "pinyin": "rén shì",
      "translations": [
        "human affairs",
        "ways of the world",
        "consciousness of the world",
        "what is humanly possible",
        "personnel matters",
        "sexual awareness",
        "sexual passion",
        "facts of life"
      ]
    },
    {
      "id": 2001,
      "hanzi": "人物",
      "pinyin": "rén wù",
      "translations": [
        "person",
        "character (in a play, novel etc)",
        "protagonist",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2002,
      "hanzi": "人员",
      "pinyin": "rén yuán",
      "translations": [
        "staff",
        "crew",
        "personnel",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2003,
      "hanzi": "忍不住",
      "pinyin": "rěn bu zhù",
      "translations": [
        "cannot help",
        "unable to bear"
      ]
    },
    {
      "id": 2004,
      "hanzi": "日常",
      "pinyin": "rì cháng",
      "translations": [
        "daily",
        "everyday"
      ]
    },
    {
      "id": 2005,
      "hanzi": "日程",
      "pinyin": "rì chéng",
      "translations": [
        "schedule",
        "itinerary",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2006,
      "hanzi": "日历",
      "pinyin": "rì lì",
      "translations": [
        "calendar",
        "CL:張|张",
        "本[běn]"
      ]
    },
    {
      "id": 2007,
      "hanzi": "日期",
      "pinyin": "rì qī",
      "translations": [
        "date",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2008,
      "hanzi": "日用品",
      "pinyin": "rì yòng pǐn",
      "translations": [
        "articles for daily use",
        "CL:件",
        "個|个[gè]"
      ]
    },
    {
      "id": 2009,
      "hanzi": "融化",
      "pinyin": "róng huà",
      "translations": [
        "to melt",
        "to thaw",
        "to dissolve",
        "to blend into",
        "to combine",
        "to fuse"
      ]
    },
    {
      "id": 2010,
      "hanzi": "荣幸",
      "pinyin": "róng xìng",
      "translations": [
        "honored"
      ]
    },
    {
      "id": 2011,
      "hanzi": "荣誉",
      "pinyin": "róng yù",
      "translations": [
        "honor",
        "credit",
        "glory",
        "(honorable) reputation",
        "honorary"
      ]
    },
    {
      "id": 2012,
      "hanzi": "如何",
      "pinyin": "rú hé",
      "translations": [
        "how",
        "what way",
        "what"
      ]
    },
    {
      "id": 2013,
      "hanzi": "如今",
      "pinyin": "rú jīn",
      "translations": [
        "nowadays",
        "now"
      ]
    },
    {
      "id": 2014,
      "hanzi": "软件",
      "pinyin": "ruǎn jiàn",
      "translations": [
        "(computer) software"
      ]
    },
    {
      "id": 2015,
      "hanzi": "弱",
      "pinyin": "ruò",
      "translations": [
        "weak",
        "feeble",
        "young",
        "inferior",
        "(following a decimal or fraction) slightly less than"
      ]
    },
    {
      "id": 2016,
      "hanzi": "洒",
      "pinyin": "sǎ",
      "translations": [
        "to sprinkle",
        "to spray",
        "to spill",
        "to shed"
      ]
    },
    {
      "id": 2017,
      "hanzi": "嗓子",
      "pinyin": "sǎng zi",
      "translations": [
        "throat",
        "voice",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 2018,
      "hanzi": "杀",
      "pinyin": "shā",
      "translations": [
        "to kill",
        "to murder",
        "to fight",
        "to weaken or reduce",
        "to smart (topolect)",
        "to counteract",
        "(used after a verb) extremely"
      ]
    },
    {
      "id": 2019,
      "hanzi": "沙漠",
      "pinyin": "shā mò",
      "translations": [
        "desert",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2020,
      "hanzi": "沙滩",
      "pinyin": "shā tān",
      "translations": [
        "beach",
        "sandy shore",
        "CL:片[piàn]"
      ]
    },
    {
      "id": 2021,
      "hanzi": "傻",
      "pinyin": "shǎ",
      "translations": [
        "foolish"
      ]
    },
    {
      "id": 2022,
      "hanzi": "晒",
      "pinyin": "shài",
      "translations": [
        "to dry in the sun",
        "to sunbathe",
        "to share files (loan from \"share\")"
      ]
    },
    {
      "id": 2023,
      "hanzi": "删除",
      "pinyin": "shān chú",
      "translations": [
        "to delete",
        "to cancel"
      ]
    },
    {
      "id": 2024,
      "hanzi": "闪电",
      "pinyin": "shǎn diàn",
      "translations": [
        "lightning",
        "CL:道[dào]"
      ]
    },
    {
      "id": 2025,
      "hanzi": "善良",
      "pinyin": "shàn liáng",
      "translations": [
        "good and honest",
        "kind-hearted"
      ]
    },
    {
      "id": 2026,
      "hanzi": "善于",
      "pinyin": "shàn yú",
      "translations": [
        "to be good at",
        "to be adept at"
      ]
    },
    {
      "id": 2027,
      "hanzi": "扇子",
      "pinyin": "shān zi",
      "translations": [
        "fan",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 2028,
      "hanzi": "商品",
      "pinyin": "shāng pǐn",
      "translations": [
        "good",
        "commodity",
        "merchandise",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2029,
      "hanzi": "商业",
      "pinyin": "shāng yè",
      "translations": [
        "business",
        "trade",
        "commerce"
      ]
    },
    {
      "id": 2030,
      "hanzi": "上当",
      "pinyin": "shàng dàng",
      "translations": [
        "taken in (by sb's deceit)",
        "to be fooled",
        "to be duped"
      ]
    },
    {
      "id": 2031,
      "hanzi": "勺子",
      "pinyin": "sháo zi",
      "translations": [
        "scoop",
        "ladle",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 2032,
      "hanzi": "蛇",
      "pinyin": "shé",
      "translations": [
        "snake",
        "serpent",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 2033,
      "hanzi": "舌头",
      "pinyin": "shé tou",
      "translations": [
        "tongue",
        "CL:個|个[gè]",
        "enemy soldier captured for the purpose of extracting information"
      ]
    },
    {
      "id": 2034,
      "hanzi": "舍不得",
      "pinyin": "shě bu de",
      "translations": [
        "to hate to do sth",
        "to hate to part with",
        "to begrudge"
      ]
    },
    {
      "id": 2035,
      "hanzi": "设备",
      "pinyin": "shè bèi",
      "translations": [
        "equipment",
        "facilities",
        "installations",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2036,
      "hanzi": "设计",
      "pinyin": "shè jì",
      "translations": [
        "plan",
        "design",
        "to design",
        "to plan",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2037,
      "hanzi": "设施",
      "pinyin": "shè shī",
      "translations": [
        "facilities",
        "installation"
      ]
    },
    {
      "id": 2038,
      "hanzi": "射击",
      "pinyin": "shè jī",
      "translations": [
        "to shoot",
        "to fire (a gun)"
      ]
    },
    {
      "id": 2039,
      "hanzi": "摄影",
      "pinyin": "shè yǐng",
      "translations": [
        "to take a photograph",
        "photography",
        "to shoot (a movie)"
      ]
    },
    {
      "id": 2040,
      "hanzi": "伸",
      "pinyin": "shēn",
      "translations": [
        "to stretch",
        "to extend"
      ]
    },
    {
      "id": 2041,
      "hanzi": "深刻",
      "pinyin": "shēn kè",
      "translations": [
        "profound",
        "deep",
        "deep-going"
      ]
    },
    {
      "id": 2042,
      "hanzi": "身材",
      "pinyin": "shēn cái",
      "translations": [
        "stature",
        "build (height and weight)",
        "figure"
      ]
    },
    {
      "id": 2043,
      "hanzi": "身份",
      "pinyin": "shēn fèn",
      "translations": [
        "identity",
        "status",
        "capacity",
        "dignity",
        "position",
        "rank"
      ]
    },
    {
      "id": 2044,
      "hanzi": "神话",
      "pinyin": "shén huà",
      "translations": [
        "legend",
        "fairy tale",
        "myth",
        "mythology"
      ]
    },
    {
      "id": 2045,
      "hanzi": "神经",
      "pinyin": "shén jīng",
      "translations": [
        "nerve"
      ]
    },
    {
      "id": 2046,
      "hanzi": "神秘",
      "pinyin": "shén mì",
      "translations": [
        "mysterious",
        "mystery"
      ]
    },
    {
      "id": 2047,
      "hanzi": "升",
      "pinyin": "shēng",
      "translations": [
        "variant of 升[shēng]"
      ]
    },
    {
      "id": 2048,
      "hanzi": "生产",
      "pinyin": "shēng chǎn",
      "translations": [
        "childbirth",
        "parturition",
        "to produce",
        "manufacture"
      ]
    },
    {
      "id": 2049,
      "hanzi": "生动",
      "pinyin": "shēng dòng",
      "translations": [
        "vivid",
        "lively"
      ]
    },
    {
      "id": 2050,
      "hanzi": "声调",
      "pinyin": "shēng diào",
      "translations": [
        "tone",
        "note",
        "a tone (on a Chinese syllable)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2051,
      "hanzi": "绳子",
      "pinyin": "shéng zi",
      "translations": [
        "cord",
        "string",
        "rope",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 2052,
      "hanzi": "省略",
      "pinyin": "shěng lvè",
      "translations": [
        "to leave out",
        "an omission"
      ]
    },
    {
      "id": 2053,
      "hanzi": "胜利",
      "pinyin": "shèng lì",
      "translations": [
        "victory",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2054,
      "hanzi": "诗",
      "pinyin": "shī",
      "translations": [
        "poem",
        "CL:首[shǒu]",
        "poetry",
        "verse",
        "abbr. for Book of Songs 詩經|诗经[Shī Jīng]"
      ]
    },
    {
      "id": 2055,
      "hanzi": "失眠",
      "pinyin": "shī mián",
      "translations": [
        "to suffer from insomnia"
      ]
    },
    {
      "id": 2056,
      "hanzi": "失去",
      "pinyin": "shī qù",
      "translations": [
        "to lose"
      ]
    },
    {
      "id": 2057,
      "hanzi": "失业",
      "pinyin": "shī yè",
      "translations": [
        "unemployment",
        "to lose one's job"
      ]
    },
    {
      "id": 2058,
      "hanzi": "时代",
      "pinyin": "shí dài",
      "translations": [
        "age",
        "era",
        "epoch",
        "period",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2059,
      "hanzi": "时刻",
      "pinyin": "shí kè",
      "translations": [
        "moment",
        "CL:個|个[gè]",
        "constantly",
        "always"
      ]
    },
    {
      "id": 2060,
      "hanzi": "时髦",
      "pinyin": "shí máo",
      "translations": [
        "in vogue",
        "fashionable"
      ]
    },
    {
      "id": 2061,
      "hanzi": "时期",
      "pinyin": "shí qī",
      "translations": [
        "period",
        "phase",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2062,
      "hanzi": "时尚",
      "pinyin": "shí shàng",
      "translations": [
        "fashion",
        "fad",
        "fashionable"
      ]
    },
    {
      "id": 2063,
      "hanzi": "实话",
      "pinyin": "shí huà",
      "translations": [
        "truth"
      ]
    },
    {
      "id": 2064,
      "hanzi": "实践",
      "pinyin": "shí jiàn",
      "translations": [
        "to practice",
        "to put into practice",
        "to fulfill"
      ]
    },
    {
      "id": 2065,
      "hanzi": "实习",
      "pinyin": "shí xí",
      "translations": [
        "to practice",
        "field work",
        "to intern",
        "internship"
      ]
    },
    {
      "id": 2066,
      "hanzi": "实现",
      "pinyin": "shí xiàn",
      "translations": [
        "to achieve",
        "to implement",
        "to realize",
        "to bring about"
      ]
    },
    {
      "id": 2067,
      "hanzi": "实行",
      "pinyin": "shí xíng",
      "translations": [
        "to implement",
        "to carry out",
        "to put into practice"
      ]
    },
    {
      "id": 2068,
      "hanzi": "实验",
      "pinyin": "shí yàn",
      "translations": [
        "experiment",
        "test",
        "CL:個|个",
        "次[cì]",
        "experimental",
        "to experiment"
      ]
    },
    {
      "id": 2069,
      "hanzi": "实用",
      "pinyin": "shí yòng",
      "translations": [
        "practical",
        "functional",
        "pragmatic",
        "applied (science)"
      ]
    },
    {
      "id": 2070,
      "hanzi": "食物",
      "pinyin": "shí wù",
      "translations": [
        "food",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 2071,
      "hanzi": "石头",
      "pinyin": "shí tou",
      "translations": [
        "stone",
        "CL:塊|块[kuài]"
      ]
    },
    {
      "id": 2072,
      "hanzi": "使劲儿",
      "pinyin": "shǐ jìn ér",
      "translations": [
        "Rearing"
      ]
    },
    {
      "id": 2073,
      "hanzi": "始终",
      "pinyin": "shǐ zhōng",
      "translations": [
        "from beginning to end",
        "all along"
      ]
    },
    {
      "id": 2074,
      "hanzi": "是否",
      "pinyin": "shì fǒu",
      "translations": [
        "whether (or not)",
        "if",
        "is or isn't"
      ]
    },
    {
      "id": 2075,
      "hanzi": "试卷",
      "pinyin": "shì juàn",
      "translations": [
        "examination paper",
        "test paper",
        "CL:份",
        "張|张[zhāng]"
      ]
    },
    {
      "id": 2076,
      "hanzi": "士兵",
      "pinyin": "shì bīng",
      "translations": [
        "soldier",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2077,
      "hanzi": "似的",
      "pinyin": "shì de",
      "translations": [
        "seems as if",
        "rather like"
      ]
    },
    {
      "id": 2078,
      "hanzi": "事实",
      "pinyin": "shì shí",
      "translations": [
        "fact",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2079,
      "hanzi": "事物",
      "pinyin": "shì wù",
      "translations": [
        "thing",
        "object",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2080,
      "hanzi": "事先",
      "pinyin": "shì xiān",
      "translations": [
        "in advance",
        "before the event",
        "beforehand",
        "prior"
      ]
    },
    {
      "id": 2081,
      "hanzi": "收获",
      "pinyin": "shōu huò",
      "translations": [
        "to harvest",
        "to reap",
        "to gain",
        "crop",
        "harvest",
        "profit",
        "gain",
        "bonus",
        "reward"
      ]
    },
    {
      "id": 2082,
      "hanzi": "收据",
      "pinyin": "shōu jù",
      "translations": [
        "receipt",
        "CL:張|张[zhāng]"
      ]
    },
    {
      "id": 2083,
      "hanzi": "手工",
      "pinyin": "shǒu gōng",
      "translations": [
        "handwork",
        "manual"
      ]
    },
    {
      "id": 2084,
      "hanzi": "手术",
      "pinyin": "shǒu shù",
      "translations": [
        "(surgical) operation",
        "surgery",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2085,
      "hanzi": "手套",
      "pinyin": "shǒu tào",
      "translations": [
        "glove",
        "mitten",
        "CL:雙|双",
        "隻|只[zhī]"
      ]
    },
    {
      "id": 2086,
      "hanzi": "手续",
      "pinyin": "shǒu xù",
      "translations": [
        "procedure",
        "CL:道",
        "個|个[gè]",
        "formalities"
      ]
    },
    {
      "id": 2087,
      "hanzi": "手指",
      "pinyin": "shǒu zhǐ",
      "translations": [
        "finger",
        "CL:個|个",
        "隻|只[zhī]"
      ]
    },
    {
      "id": 2088,
      "hanzi": "受伤",
      "pinyin": "shòu shāng",
      "translations": [
        "to sustain injuries",
        "wounded (in an accident etc)",
        "harmed"
      ]
    },
    {
      "id": 2089,
      "hanzi": "寿命",
      "pinyin": "shòu mìng",
      "translations": [
        "life span",
        "life expectancy"
      ]
    },
    {
      "id": 2090,
      "hanzi": "书架",
      "pinyin": "shū jià",
      "translations": [
        "bookshelf",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2091,
      "hanzi": "输入",
      "pinyin": "shū rù",
      "translations": [
        "to import",
        "to input"
      ]
    },
    {
      "id": 2092,
      "hanzi": "蔬菜",
      "pinyin": "shū cài",
      "translations": [
        "vegetables",
        "produce",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 2093,
      "hanzi": "舒适",
      "pinyin": "shū shì",
      "translations": [
        "cozy",
        "snug"
      ]
    },
    {
      "id": 2094,
      "hanzi": "梳子",
      "pinyin": "shū zi",
      "translations": [
        "comb",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 2095,
      "hanzi": "熟练",
      "pinyin": "shú liàn",
      "translations": [
        "practiced",
        "proficient",
        "skilled",
        "skillful"
      ]
    },
    {
      "id": 2096,
      "hanzi": "鼠标",
      "pinyin": "shǔ biāo",
      "translations": [
        "mouse (computing)"
      ]
    },
    {
      "id": 2097,
      "hanzi": "属于",
      "pinyin": "shǔ yú",
      "translations": [
        "to be classified as",
        "to belong to",
        "to be part of"
      ]
    },
    {
      "id": 2098,
      "hanzi": "数据",
      "pinyin": "shù jù",
      "translations": [
        "data",
        "numbers",
        "digital"
      ]
    },
    {
      "id": 2099,
      "hanzi": "数码",
      "pinyin": "shù mǎ",
      "translations": [
        "number",
        "numerals",
        "figures",
        "digital",
        "amount",
        "numerical code"
      ]
    },
    {
      "id": 2100,
      "hanzi": "摔",
      "pinyin": "shuāi",
      "translations": [
        "to throw down",
        "to fall",
        "to drop and break"
      ]
    },
    {
      "id": 2101,
      "hanzi": "甩",
      "pinyin": "shuǎi",
      "translations": [
        "to throw",
        "to fling",
        "to swing",
        "to leave behind",
        "to throw off",
        "to dump (sb)"
      ]
    },
    {
      "id": 2102,
      "hanzi": "双方",
      "pinyin": "shuāng fāng",
      "translations": [
        "bilateral",
        "both sides",
        "both parties involved"
      ]
    },
    {
      "id": 2103,
      "hanzi": "税",
      "pinyin": "shuì",
      "translations": [
        "taxes",
        "duties"
      ]
    },
    {
      "id": 2104,
      "hanzi": "说不定",
      "pinyin": "shuō bu dìng",
      "translations": [
        "can't say for sure",
        "maybe"
      ]
    },
    {
      "id": 2105,
      "hanzi": "说服",
      "pinyin": "shuō fú",
      "translations": [
        "to persuade",
        "to convince",
        "to talk sb over",
        "Taiwan pr. [shuì fú]"
      ]
    },
    {
      "id": 2106,
      "hanzi": "撕",
      "pinyin": "sī",
      "translations": [
        "to tear"
      ]
    },
    {
      "id": 2107,
      "hanzi": "丝绸",
      "pinyin": "sī chóu",
      "translations": [
        "silk cloth",
        "silk"
      ]
    },
    {
      "id": 2108,
      "hanzi": "丝毫",
      "pinyin": "sī háo",
      "translations": [
        "the slightest amount or degree",
        "a bit"
      ]
    },
    {
      "id": 2109,
      "hanzi": "思考",
      "pinyin": "sī kǎo",
      "translations": [
        "to reflect on",
        "to ponder over"
      ]
    },
    {
      "id": 2110,
      "hanzi": "思想",
      "pinyin": "sī xiǎng",
      "translations": [
        "thought",
        "thinking",
        "idea",
        "ideology",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2111,
      "hanzi": "私人",
      "pinyin": "sī rén",
      "translations": [
        "private",
        "personal",
        "interpersonal",
        "sb with whom one has a close personal relationship",
        "a member of one's clique"
      ]
    },
    {
      "id": 2112,
      "hanzi": "似乎",
      "pinyin": "sì hū",
      "translations": [
        "apparently",
        "to seem",
        "to appear",
        "as if",
        "seemingly"
      ]
    },
    {
      "id": 2113,
      "hanzi": "寺庙",
      "pinyin": "sì miào",
      "translations": [
        "temple",
        "monastery",
        "shrine"
      ]
    },
    {
      "id": 2114,
      "hanzi": "宿舍",
      "pinyin": "sù shè",
      "translations": [
        "dormitory",
        "dorm room",
        "living quarters",
        "hostel",
        "CL:間|间[jiān]"
      ]
    },
    {
      "id": 2115,
      "hanzi": "随时",
      "pinyin": "suí shí",
      "translations": [
        "at any time",
        "at all times",
        "at the right time"
      ]
    },
    {
      "id": 2116,
      "hanzi": "碎",
      "pinyin": "suì",
      "translations": [
        "to break down",
        "to break into pieces",
        "fragmentary"
      ]
    },
    {
      "id": 2117,
      "hanzi": "损失",
      "pinyin": "sǔn shī",
      "translations": [
        "loss",
        "damage",
        "CL:個|个[gè]",
        "to lose",
        "to damage"
      ]
    },
    {
      "id": 2118,
      "hanzi": "缩短",
      "pinyin": "suō duǎn",
      "translations": [
        "to curtail",
        "to cut down"
      ]
    },
    {
      "id": 2119,
      "hanzi": "缩小",
      "pinyin": "suō xiǎo",
      "translations": [
        "to reduce",
        "to decrease",
        "to shrink"
      ]
    },
    {
      "id": 2120,
      "hanzi": "锁",
      "pinyin": "suǒ",
      "translations": [
        "to lock up",
        "to lock",
        "CL:把[bǎ]"
      ]
    },
    {
      "id": 2121,
      "hanzi": "所",
      "pinyin": "suǒ",
      "translations": [
        "actually",
        "place",
        "classifier for houses",
        "small buildings",
        "institutions etc",
        "that which",
        "particle introducing a relative clause or passive",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2122,
      "hanzi": "所谓",
      "pinyin": "suǒ wèi",
      "translations": [
        "so-called",
        "what is called"
      ]
    },
    {
      "id": 2123,
      "hanzi": "塔",
      "pinyin": "tǎ",
      "translations": [
        "pagoda",
        "tower",
        "minaret",
        "stupa (abbr. loanword from Sanskrit tapo)",
        "CL:座[zuò]"
      ]
    },
    {
      "id": 2124,
      "hanzi": "台阶",
      "pinyin": "tái jiē",
      "translations": [
        "steps",
        "flight of steps",
        "step (over obstacle)",
        "fig. way out of an embarrassing situation",
        "bench (geology)"
      ]
    },
    {
      "id": 2125,
      "hanzi": "太极拳",
      "pinyin": "tài jí quán",
      "translations": [
        "shadowboxing or Taiji",
        "T'aichi or T'aichichuan",
        "traditional form of physical exercise or relaxation",
        "a martial art"
      ]
    },
    {
      "id": 2126,
      "hanzi": "太太",
      "pinyin": "tài tai",
      "translations": [
        "married woman",
        "Mrs.",
        "Madam",
        "wife",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 2127,
      "hanzi": "谈判",
      "pinyin": "tán pàn",
      "translations": [
        "to negotiate",
        "negotiation",
        "talks",
        "conference",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2128,
      "hanzi": "坦率",
      "pinyin": "tǎn shuài",
      "translations": [
        "frank (discussion)",
        "blunt",
        "open"
      ]
    },
    {
      "id": 2129,
      "hanzi": "烫",
      "pinyin": "tàng",
      "translations": [
        "to scald",
        "to burn",
        "to iron",
        "hot"
      ]
    },
    {
      "id": 2130,
      "hanzi": "桃",
      "pinyin": "táo",
      "translations": [
        "peach"
      ]
    },
    {
      "id": 2131,
      "hanzi": "逃",
      "pinyin": "táo",
      "translations": [
        "to escape",
        "to run away",
        "to flee"
      ]
    },
    {
      "id": 2132,
      "hanzi": "逃避",
      "pinyin": "táo bì",
      "translations": [
        "to escape",
        "to evade",
        "to avoid",
        "to shirk"
      ]
    },
    {
      "id": 2133,
      "hanzi": "套",
      "pinyin": "tào",
      "translations": [
        "cover",
        "sheath",
        "to encase",
        "a case",
        "to overlap",
        "to interleave",
        "bend (of a river or mountain range, in place names)",
        "harness",
        "classifier for sets",
        "collections",
        "tau (Greek letter Ττ)"
      ]
    },
    {
      "id": 2134,
      "hanzi": "特殊",
      "pinyin": "tè shū",
      "translations": [
        "special",
        "particular",
        "unusual",
        "extraordinary"
      ]
    },
    {
      "id": 2135,
      "hanzi": "特意",
      "pinyin": "tè yì",
      "translations": [
        "specially",
        "intentionally"
      ]
    },
    {
      "id": 2136,
      "hanzi": "特征",
      "pinyin": "tè zhēng",
      "translations": [
        "characteristic",
        "diagnostic property",
        "distinctive feature",
        "trait"
      ]
    },
    {
      "id": 2137,
      "hanzi": "疼爱",
      "pinyin": "téng ài",
      "translations": [
        "to love dearly"
      ]
    },
    {
      "id": 2138,
      "hanzi": "提",
      "pinyin": "tí",
      "translations": [
        "to carry (hanging down from the hand)",
        "to lift",
        "to put forward",
        "to mention",
        "to raise (an issue)",
        "upwards character stroke",
        "lifting brush stroke (in painting)",
        "scoop for measuring liquid"
      ]
    },
    {
      "id": 2139,
      "hanzi": "提倡",
      "pinyin": "tí chàng",
      "translations": [
        "to promote",
        "to advocate"
      ]
    },
    {
      "id": 2140,
      "hanzi": "提纲",
      "pinyin": "tí gāng",
      "translations": [
        "the key point",
        "outline"
      ]
    },
    {
      "id": 2141,
      "hanzi": "提问",
      "pinyin": "tí wèn",
      "translations": [
        "to question",
        "to quiz",
        "to grill"
      ]
    },
    {
      "id": 2142,
      "hanzi": "题目",
      "pinyin": "tí mù",
      "translations": [
        "subject",
        "title",
        "topic",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2143,
      "hanzi": "体会",
      "pinyin": "tǐ huì",
      "translations": [
        "to know from experience",
        "to learn through experience",
        "to realize",
        "understanding",
        "experience"
      ]
    },
    {
      "id": 2144,
      "hanzi": "体积",
      "pinyin": "tǐ jī",
      "translations": [
        "volume",
        "bulk",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2145,
      "hanzi": "体贴",
      "pinyin": "tǐ tiē",
      "translations": [
        "considerate (of other people's needs)"
      ]
    },
    {
      "id": 2146,
      "hanzi": "体现",
      "pinyin": "tǐ xiàn",
      "translations": [
        "to embody",
        "to reflect",
        "to incarnate"
      ]
    },
    {
      "id": 2147,
      "hanzi": "体验",
      "pinyin": "tǐ yàn",
      "translations": [
        "to experience for oneself"
      ]
    },
    {
      "id": 2148,
      "hanzi": "天空",
      "pinyin": "tiān kōng",
      "translations": [
        "sky"
      ]
    },
    {
      "id": 2149,
      "hanzi": "天真",
      "pinyin": "tiān zhēn",
      "translations": [
        "naive",
        "innocent",
        "artless"
      ]
    },
    {
      "id": 2150,
      "hanzi": "田野",
      "pinyin": "tián yě",
      "translations": [
        "field",
        "open land",
        "CL:片[piàn]"
      ]
    },
    {
      "id": 2151,
      "hanzi": "调皮",
      "pinyin": "tiáo pí",
      "translations": [
        "naughty",
        "mischievous",
        "unruly"
      ]
    },
    {
      "id": 2152,
      "hanzi": "调整",
      "pinyin": "tiáo zhěng",
      "translations": [
        "to adjust",
        "adjustment",
        "revision",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2153,
      "hanzi": "挑战",
      "pinyin": "tiǎo zhàn",
      "translations": [
        "to challenge",
        "challenge"
      ]
    },
    {
      "id": 2154,
      "hanzi": "通常",
      "pinyin": "tōng cháng",
      "translations": [
        "regular",
        "usual",
        "normal",
        "usually",
        "normally"
      ]
    },
    {
      "id": 2155,
      "hanzi": "通讯",
      "pinyin": "tōng xùn",
      "translations": [
        "communications",
        "news story",
        "dispatch",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2156,
      "hanzi": "铜",
      "pinyin": "tóng",
      "translations": [
        "copper (chemistry)",
        "see also 紅銅|红铜[hóng tóng]",
        "CL:塊|块[kuài]"
      ]
    },
    {
      "id": 2157,
      "hanzi": "同时",
      "pinyin": "tóng shí",
      "translations": [
        "at the same time",
        "simultaneously"
      ]
    },
    {
      "id": 2158,
      "hanzi": "统一",
      "pinyin": "tǒng yī",
      "translations": [
        "to unify",
        "to unite",
        "to integrate"
      ]
    },
    {
      "id": 2159,
      "hanzi": "统治",
      "pinyin": "tǒng zhì",
      "translations": [
        "to rule (a country)",
        "to govern",
        "rule",
        "regime"
      ]
    },
    {
      "id": 2160,
      "hanzi": "痛苦",
      "pinyin": "tòng kǔ",
      "translations": [
        "pain",
        "suffering",
        "painful",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2161,
      "hanzi": "痛快",
      "pinyin": "tòng kuài",
      "translations": [
        "overjoyed",
        "delighted",
        "happily",
        "heartily",
        "enjoying",
        "also pr. [tòng kuai]"
      ]
    },
    {
      "id": 2162,
      "hanzi": "投资",
      "pinyin": "tóu zī",
      "translations": [
        "investment",
        "to invest"
      ]
    },
    {
      "id": 2163,
      "hanzi": "透明",
      "pinyin": "tòu míng",
      "translations": [
        "transparent",
        "open (non-secretive)"
      ]
    },
    {
      "id": 2164,
      "hanzi": "突出",
      "pinyin": "tū chū",
      "translations": [
        "prominent",
        "outstanding",
        "to give prominence to",
        "to protrude",
        "to project"
      ]
    },
    {
      "id": 2165,
      "hanzi": "土地",
      "pinyin": "tǔ dì",
      "translations": [
        "land",
        "soil",
        "territory",
        "CL:片[piàn]"
      ]
    },
    {
      "id": 2166,
      "hanzi": "土豆",
      "pinyin": "tǔ dòu",
      "translations": [
        "potato",
        "CL:個|个[gè]",
        "peanut (Taiwan)",
        "CL:顆|颗[kē]"
      ]
    },
    {
      "id": 2167,
      "hanzi": "吐",
      "pinyin": "tù",
      "translations": [
        "to vomit",
        "to throw up"
      ]
    },
    {
      "id": 2168,
      "hanzi": "兔子",
      "pinyin": "tù zi",
      "translations": [
        "hare",
        "rabbit",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 2169,
      "hanzi": "团",
      "pinyin": "tuán",
      "translations": [
        "dumpling"
      ]
    },
    {
      "id": 2170,
      "hanzi": "推辞",
      "pinyin": "tuī cí",
      "translations": [
        "to decline (an appointment, invitation etc)"
      ]
    },
    {
      "id": 2171,
      "hanzi": "推广",
      "pinyin": "tuī guǎng",
      "translations": [
        "to extend",
        "to spread",
        "to popularize",
        "generalization",
        "promotion (of a product etc)"
      ]
    },
    {
      "id": 2172,
      "hanzi": "推荐",
      "pinyin": "tuī jiàn",
      "translations": [
        "to recommend",
        "recommendation"
      ]
    },
    {
      "id": 2173,
      "hanzi": "退",
      "pinyin": "tuì",
      "translations": [
        "to retreat",
        "to decline",
        "to move back",
        "to withdraw"
      ]
    },
    {
      "id": 2174,
      "hanzi": "退步",
      "pinyin": "tuì bù",
      "translations": [
        "to do less well than before",
        "to make a concession",
        "setback",
        "backward step",
        "leeway",
        "room to maneuver",
        "fallback"
      ]
    },
    {
      "id": 2175,
      "hanzi": "退休",
      "pinyin": "tuì xiū",
      "translations": [
        "to retire",
        "retirement (from work)"
      ]
    },
    {
      "id": 2176,
      "hanzi": "歪",
      "pinyin": "wāi",
      "translations": [
        "askew",
        "at a crooked angle",
        "devious",
        "noxious"
      ]
    },
    {
      "id": 2177,
      "hanzi": "外交",
      "pinyin": "wài jiāo",
      "translations": [
        "diplomacy",
        "diplomatic",
        "foreign affairs",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2178,
      "hanzi": "弯",
      "pinyin": "wān",
      "translations": [
        "bend",
        "bent",
        "CL:道[dào]"
      ]
    },
    {
      "id": 2179,
      "hanzi": "完美",
      "pinyin": "wán měi",
      "translations": [
        "perfect",
        "perfection",
        "perfectly"
      ]
    },
    {
      "id": 2180,
      "hanzi": "完善",
      "pinyin": "wán shàn",
      "translations": [
        "perfect",
        "to make perfect",
        "to improve"
      ]
    },
    {
      "id": 2181,
      "hanzi": "完整",
      "pinyin": "wán zhěng",
      "translations": [
        "complete",
        "intact"
      ]
    },
    {
      "id": 2182,
      "hanzi": "玩具",
      "pinyin": "wán jù",
      "translations": [
        "plaything",
        "toy"
      ]
    },
    {
      "id": 2183,
      "hanzi": "万一",
      "pinyin": "wàn yī",
      "translations": [
        "just in case",
        "if by any chance",
        "contingency"
      ]
    },
    {
      "id": 2184,
      "hanzi": "王子",
      "pinyin": "wáng zǐ",
      "translations": [
        "prince",
        "son of a king"
      ]
    },
    {
      "id": 2185,
      "hanzi": "往返",
      "pinyin": "wǎng fǎn",
      "translations": [
        "to go back and forth",
        "to go to and fro",
        "round trip"
      ]
    },
    {
      "id": 2186,
      "hanzi": "微笑",
      "pinyin": "wēi xiào",
      "translations": [
        "smile",
        "CL:個|个",
        "絲|丝[sī]",
        "to smile"
      ]
    },
    {
      "id": 2187,
      "hanzi": "威胁",
      "pinyin": "wēi xié",
      "translations": [
        "to threaten",
        "to menace"
      ]
    },
    {
      "id": 2188,
      "hanzi": "危害",
      "pinyin": "wēi hài",
      "translations": [
        "to jeopardize",
        "to harm",
        "to endanger",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2189,
      "hanzi": "违反",
      "pinyin": "wéi fǎn",
      "translations": [
        "to violate (a law)"
      ]
    },
    {
      "id": 2190,
      "hanzi": "维护",
      "pinyin": "wéi hù",
      "translations": [
        "to defend",
        "to safeguard",
        "to protect",
        "to uphold",
        "to maintain"
      ]
    },
    {
      "id": 2191,
      "hanzi": "围巾",
      "pinyin": "wéi jīn",
      "translations": [
        "scarf",
        "shawl",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 2192,
      "hanzi": "围绕",
      "pinyin": "wéi rào",
      "translations": [
        "to revolve around",
        "to center on (an issue)"
      ]
    },
    {
      "id": 2193,
      "hanzi": "唯一",
      "pinyin": "wéi yī",
      "translations": [
        "only",
        "sole"
      ]
    },
    {
      "id": 2194,
      "hanzi": "尾巴",
      "pinyin": "wěi ba",
      "translations": [
        "tail"
      ]
    },
    {
      "id": 2195,
      "hanzi": "伟大",
      "pinyin": "wěi dà",
      "translations": [
        "great",
        "mighty",
        "large"
      ]
    },
    {
      "id": 2196,
      "hanzi": "委屈",
      "pinyin": "wěi qu",
      "translations": [
        "to feel wronged",
        "to cause sb to feel wronged",
        "grievance"
      ]
    },
    {
      "id": 2197,
      "hanzi": "委托",
      "pinyin": "wěi tuō",
      "translations": [
        "to entrust",
        "to trust",
        "to commission"
      ]
    },
    {
      "id": 2198,
      "hanzi": "胃",
      "pinyin": "wèi",
      "translations": [
        "stomach",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2199,
      "hanzi": "位置",
      "pinyin": "wèi zhi",
      "translations": [
        "position",
        "place",
        "seat",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2200,
      "hanzi": "未必",
      "pinyin": "wèi bì",
      "translations": [
        "not necessarily",
        "maybe not"
      ]
    },
    {
      "id": 2201,
      "hanzi": "未来",
      "pinyin": "wèi lái",
      "translations": [
        "future",
        "tomorrow",
        "CL:個|个[gè]",
        "approaching",
        "coming",
        "pending"
      ]
    },
    {
      "id": 2202,
      "hanzi": "卫生间",
      "pinyin": "wèi shēng jiān",
      "translations": [
        "bathroom",
        "toilet",
        "WC",
        "CL:間|间[jiān]"
      ]
    },
    {
      "id": 2203,
      "hanzi": "温暖",
      "pinyin": "wēn nuǎn",
      "translations": [
        "warm"
      ]
    },
    {
      "id": 2204,
      "hanzi": "温柔",
      "pinyin": "wēn róu",
      "translations": [
        "gentle and soft",
        "tender"
      ]
    },
    {
      "id": 2205,
      "hanzi": "闻",
      "pinyin": "wén",
      "translations": [
        "to hear",
        "news",
        "well-known",
        "famous",
        "reputation",
        "fame",
        "to smell",
        "to sniff at"
      ]
    },
    {
      "id": 2206,
      "hanzi": "文件",
      "pinyin": "wén jiàn",
      "translations": [
        "document",
        "file",
        "CL:份[fèn]"
      ]
    },
    {
      "id": 2207,
      "hanzi": "文具",
      "pinyin": "wén jù",
      "translations": [
        "stationery",
        "item of stationery (pen, pencil, eraser, pencil sharpener etc)"
      ]
    },
    {
      "id": 2208,
      "hanzi": "文明",
      "pinyin": "wén míng",
      "translations": [
        "civilized",
        "civilization",
        "culture",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2209,
      "hanzi": "文学",
      "pinyin": "wén xué",
      "translations": [
        "literature",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 2210,
      "hanzi": "吻",
      "pinyin": "wěn",
      "translations": [
        "kiss",
        "to kiss",
        "mouth"
      ]
    },
    {
      "id": 2211,
      "hanzi": "稳定",
      "pinyin": "wěn dìng",
      "translations": [
        "steady",
        "stable",
        "stability",
        "to stabilize",
        "to pacify"
      ]
    },
    {
      "id": 2212,
      "hanzi": "问候",
      "pinyin": "wèn hòu",
      "translations": [
        "to give one's respects",
        "to send a greeting"
      ]
    },
    {
      "id": 2213,
      "hanzi": "卧室",
      "pinyin": "wò shì",
      "translations": [
        "bedroom",
        "CL:間|间[jiān]"
      ]
    },
    {
      "id": 2214,
      "hanzi": "屋子",
      "pinyin": "wū zi",
      "translations": [
        "house",
        "room",
        "CL:間|间[jiān]"
      ]
    },
    {
      "id": 2215,
      "hanzi": "无奈",
      "pinyin": "wú nài",
      "translations": [
        "helpless",
        "without choice",
        "for lack of better option",
        "grudgingly",
        "willy-nilly",
        "nolens volens",
        "abbr. for 無可奈何|无可奈何[wú kě nài hé]"
      ]
    },
    {
      "id": 2216,
      "hanzi": "无数",
      "pinyin": "wú shù",
      "translations": [
        "countless",
        "numberless",
        "innumerable"
      ]
    },
    {
      "id": 2217,
      "hanzi": "武器",
      "pinyin": "wǔ qì",
      "translations": [
        "weapon",
        "arms",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 2218,
      "hanzi": "武术",
      "pinyin": "wǔ shù",
      "translations": [
        "military skill or technique (in former times)",
        "all kinds of martial art sports (some claiming spiritual development)",
        "self-defense",
        "tradition of choreographed fights from opera and film (recent usage)",
        "also called kungfu 功夫",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 2219,
      "hanzi": "雾",
      "pinyin": "wù",
      "translations": [
        "fog",
        "mist",
        "CL:場|场",
        "陣|阵[zhèn]"
      ]
    },
    {
      "id": 2220,
      "hanzi": "物理",
      "pinyin": "wù lǐ",
      "translations": [
        "physics",
        "physical"
      ]
    },
    {
      "id": 2221,
      "hanzi": "物质",
      "pinyin": "wù zhì",
      "translations": [
        "matter",
        "substance",
        "material",
        "materialistic",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2222,
      "hanzi": "吸收",
      "pinyin": "xī shōu",
      "translations": [
        "to absorb",
        "to assimilate",
        "to ingest",
        "to recruit"
      ]
    },
    {
      "id": 2223,
      "hanzi": "系",
      "pinyin": "xì",
      "translations": [
        "to connect",
        "to arrest",
        "to worry"
      ]
    },
    {
      "id": 2224,
      "hanzi": "系统",
      "pinyin": "xì tǒng",
      "translations": [
        "system",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2225,
      "hanzi": "细节",
      "pinyin": "xì jié",
      "translations": [
        "details",
        "particulars"
      ]
    },
    {
      "id": 2226,
      "hanzi": "戏剧",
      "pinyin": "xì jù",
      "translations": [
        "drama",
        "play",
        "theater"
      ]
    },
    {
      "id": 2227,
      "hanzi": "瞎",
      "pinyin": "xiā",
      "translations": [
        "blind",
        "groundlessly",
        "foolishly",
        "to no purpose"
      ]
    },
    {
      "id": 2228,
      "hanzi": "吓",
      "pinyin": "xià",
      "translations": [
        "to frighten",
        "to scare"
      ]
    },
    {
      "id": 2229,
      "hanzi": "下载",
      "pinyin": "xià zǎi",
      "translations": [
        "to download",
        "also pr. [xià zài]"
      ]
    },
    {
      "id": 2230,
      "hanzi": "鲜艳",
      "pinyin": "xiān yàn",
      "translations": [
        "bright-colored",
        "gaily-colored"
      ]
    },
    {
      "id": 2231,
      "hanzi": "显得",
      "pinyin": "xiǎn de",
      "translations": [
        "to seem",
        "to look",
        "to appear"
      ]
    },
    {
      "id": 2232,
      "hanzi": "显然",
      "pinyin": "xiǎn rán",
      "translations": [
        "clear",
        "evident",
        "obvious(ly)"
      ]
    },
    {
      "id": 2233,
      "hanzi": "显示",
      "pinyin": "xiǎn shì",
      "translations": [
        "to show",
        "to illustrate",
        "to display",
        "to demonstrate"
      ]
    },
    {
      "id": 2234,
      "hanzi": "县",
      "pinyin": "xiàn",
      "translations": [
        "county"
      ]
    },
    {
      "id": 2235,
      "hanzi": "现金",
      "pinyin": "xiàn jīn",
      "translations": [
        "cash"
      ]
    },
    {
      "id": 2236,
      "hanzi": "现实",
      "pinyin": "xiàn shí",
      "translations": [
        "reality",
        "actuality",
        "real",
        "actual",
        "realistic"
      ]
    },
    {
      "id": 2237,
      "hanzi": "现象",
      "pinyin": "xiàn xiàng",
      "translations": [
        "appearance",
        "phenomenon",
        "CL:個|个",
        "種|种[zhǒng]"
      ]
    },
    {
      "id": 2238,
      "hanzi": "相处",
      "pinyin": "xiāng chǔ",
      "translations": [
        "to be in contact with",
        "to associate with",
        "to have dealings with"
      ]
    },
    {
      "id": 2239,
      "hanzi": "相当",
      "pinyin": "xiāng dāng",
      "translations": [
        "equivalent to",
        "appropriate",
        "considerably",
        "to a certain extent",
        "fairly",
        "quite"
      ]
    },
    {
      "id": 2240,
      "hanzi": "相对",
      "pinyin": "xiāng duì",
      "translations": [
        "relatively",
        "opposite",
        "to resist",
        "to oppose",
        "relative",
        "vis-a-vis",
        "counterpart"
      ]
    },
    {
      "id": 2241,
      "hanzi": "相关",
      "pinyin": "xiāng guān",
      "translations": [
        "to be interrelated",
        "(statistics) correlation"
      ]
    },
    {
      "id": 2242,
      "hanzi": "相似",
      "pinyin": "xiāng sì",
      "translations": [
        "to resemble",
        "similar",
        "like",
        "resemblance",
        "similarity"
      ]
    },
    {
      "id": 2243,
      "hanzi": "想念",
      "pinyin": "xiǎng niàn",
      "translations": [
        "to miss",
        "to remember with longing",
        "to long to see again"
      ]
    },
    {
      "id": 2244,
      "hanzi": "想象",
      "pinyin": "xiǎng xiàng",
      "translations": [
        "to imagine",
        "to fancy",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2245,
      "hanzi": "享受",
      "pinyin": "xiǎng shòu",
      "translations": [
        "to enjoy",
        "to live it up",
        "pleasure",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 2246,
      "hanzi": "项",
      "pinyin": "xiàng",
      "translations": [
        "back of neck",
        "item",
        "thing",
        "term (in a mathematical formula)",
        "sum (of money)",
        "classifier for principles",
        "items",
        "clauses",
        "tasks",
        "research projects etc"
      ]
    },
    {
      "id": 2247,
      "hanzi": "项链",
      "pinyin": "xiàng liàn",
      "translations": [
        "necklace",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 2248,
      "hanzi": "项目",
      "pinyin": "xiàng mù",
      "translations": [
        "item",
        "project",
        "sports event",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2249,
      "hanzi": "橡皮",
      "pinyin": "xiàng pí",
      "translations": [
        "rubber",
        "an eraser",
        "CL:塊|块[kuài]"
      ]
    },
    {
      "id": 2250,
      "hanzi": "象棋",
      "pinyin": "xiàng qí",
      "translations": [
        "Chinese chess",
        "CL:副[fù]"
      ]
    },
    {
      "id": 2251,
      "hanzi": "象征",
      "pinyin": "xiàng zhēng",
      "translations": [
        "emblem",
        "symbol",
        "token",
        "badge",
        "to symbolize",
        "to signify",
        "to stand for"
      ]
    },
    {
      "id": 2252,
      "hanzi": "消费",
      "pinyin": "xiāo fèi",
      "translations": [
        "to consume",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2253,
      "hanzi": "消化",
      "pinyin": "xiāo huà",
      "translations": [
        "to digest",
        "digestion",
        "digestive"
      ]
    },
    {
      "id": 2254,
      "hanzi": "消灭",
      "pinyin": "xiāo miè",
      "translations": [
        "to put an end to",
        "to annihilate",
        "to cause to perish",
        "to perish",
        "annihilation (in quantum field theory)"
      ]
    },
    {
      "id": 2255,
      "hanzi": "消失",
      "pinyin": "xiāo shī",
      "translations": [
        "to disappear",
        "to fade away"
      ]
    },
    {
      "id": 2256,
      "hanzi": "销售",
      "pinyin": "xiāo shòu",
      "translations": [
        "to sell",
        "market",
        "sales"
      ]
    },
    {
      "id": 2257,
      "hanzi": "小吃",
      "pinyin": "xiǎo chī",
      "translations": [
        "snack",
        "refreshments",
        "CL:家[jiā]"
      ]
    },
    {
      "id": 2258,
      "hanzi": "小伙子",
      "pinyin": "xiǎo huǒ zi",
      "translations": [
        "young man",
        "young guy",
        "lad",
        "youngster",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2259,
      "hanzi": "小麦",
      "pinyin": "xiǎo mài",
      "translations": [
        "wheat",
        "CL:粒[lì]"
      ]
    },
    {
      "id": 2260,
      "hanzi": "小气",
      "pinyin": "xiǎo qì",
      "translations": [
        "stingy",
        "petty",
        "miserly",
        "narrow-minded"
      ]
    },
    {
      "id": 2261,
      "hanzi": "小偷",
      "pinyin": "xiǎo tōu",
      "translations": [
        "thief"
      ]
    },
    {
      "id": 2262,
      "hanzi": "效率",
      "pinyin": "xiào lǜ",
      "translations": [
        "efficiency"
      ]
    },
    {
      "id": 2263,
      "hanzi": "孝顺",
      "pinyin": "xiào shùn",
      "translations": [
        "filial piety",
        "to be obedient to one's parents"
      ]
    },
    {
      "id": 2264,
      "hanzi": "歇",
      "pinyin": "xiē",
      "translations": [
        "to rest"
      ]
    },
    {
      "id": 2265,
      "hanzi": "斜",
      "pinyin": "xié",
      "translations": [
        "inclined",
        "slanting",
        "oblique",
        "tilting"
      ]
    },
    {
      "id": 2266,
      "hanzi": "协调",
      "pinyin": "xié tiáo",
      "translations": [
        "to coordinate",
        "to harmonize",
        "negotiation"
      ]
    },
    {
      "id": 2267,
      "hanzi": "心理",
      "pinyin": "xīn lǐ",
      "translations": [
        "mental",
        "psychological"
      ]
    },
    {
      "id": 2268,
      "hanzi": "心脏",
      "pinyin": "xīn zàng",
      "translations": [
        "heart",
        "CL:顆|颗",
        "個|个[gè]"
      ]
    },
    {
      "id": 2269,
      "hanzi": "欣赏",
      "pinyin": "xīn shǎng",
      "translations": [
        "to appreciate",
        "to enjoy",
        "to admire"
      ]
    },
    {
      "id": 2270,
      "hanzi": "信封",
      "pinyin": "xìn fēng",
      "translations": [
        "envelope",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2271,
      "hanzi": "信号",
      "pinyin": "xìn hào",
      "translations": [
        "signal"
      ]
    },
    {
      "id": 2272,
      "hanzi": "信息",
      "pinyin": "xìn xī",
      "translations": [
        "information",
        "news",
        "message"
      ]
    },
    {
      "id": 2273,
      "hanzi": "行动",
      "pinyin": "xíng dòng",
      "translations": [
        "operation",
        "action",
        "to move",
        "mobile",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2274,
      "hanzi": "行人",
      "pinyin": "xíng rén",
      "translations": [
        "pedestrian",
        "traveler on foot",
        "passer-by",
        "official responsible for arranging audiences with the emperor"
      ]
    },
    {
      "id": 2275,
      "hanzi": "行为",
      "pinyin": "xíng wéi",
      "translations": [
        "action",
        "conduct",
        "behavior",
        "activity"
      ]
    },
    {
      "id": 2276,
      "hanzi": "形成",
      "pinyin": "xíng chéng",
      "translations": [
        "to form",
        "to take shape"
      ]
    },
    {
      "id": 2277,
      "hanzi": "形容",
      "pinyin": "xíng róng",
      "translations": [
        "to describe",
        "description",
        "appearance",
        "look"
      ]
    },
    {
      "id": 2278,
      "hanzi": "形式",
      "pinyin": "xíng shì",
      "translations": [
        "form",
        "shape",
        "situation",
        "circumstance",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2279,
      "hanzi": "形势",
      "pinyin": "xíng shì",
      "translations": [
        "circumstances",
        "situation",
        "terrain",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2280,
      "hanzi": "形象",
      "pinyin": "xíng xiàng",
      "translations": [
        "image",
        "form",
        "figure",
        "CL:個|个[gè]",
        "visualization",
        "vivid"
      ]
    },
    {
      "id": 2281,
      "hanzi": "形状",
      "pinyin": "xíng zhuàng",
      "translations": [
        "form",
        "shape",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2282,
      "hanzi": "性质",
      "pinyin": "xìng zhì",
      "translations": [
        "nature",
        "characteristic",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2283,
      "hanzi": "幸亏",
      "pinyin": "xìng kuī",
      "translations": [
        "fortunately",
        "luckily"
      ]
    },
    {
      "id": 2284,
      "hanzi": "幸运",
      "pinyin": "xìng yùn",
      "translations": [
        "fortunate",
        "lucky",
        "fortune",
        "luck"
      ]
    },
    {
      "id": 2285,
      "hanzi": "胸",
      "pinyin": "xiōng",
      "translations": [
        "chest",
        "bosom",
        "heart",
        "mind",
        "thorax"
      ]
    },
    {
      "id": 2286,
      "hanzi": "兄弟",
      "pinyin": "xiōng dì",
      "translations": [
        "brothers",
        "younger brother",
        "CL:個|个[gè]",
        "I",
        "me (humble term used by men in public speech)",
        "brotherly",
        "fraternal"
      ]
    },
    {
      "id": 2287,
      "hanzi": "雄伟",
      "pinyin": "xióng wěi",
      "translations": [
        "grand",
        "imposing",
        "magnificent",
        "majestic"
      ]
    },
    {
      "id": 2288,
      "hanzi": "修改",
      "pinyin": "xiū gǎi",
      "translations": [
        "to amend",
        "to alter",
        "to modify"
      ]
    },
    {
      "id": 2289,
      "hanzi": "休闲",
      "pinyin": "xiū xián",
      "translations": [
        "leisure",
        "relaxation",
        "not working",
        "idle",
        "to enjoy leisure",
        "to lie fallow"
      ]
    },
    {
      "id": 2290,
      "hanzi": "虚心",
      "pinyin": "xū xīn",
      "translations": [
        "modest"
      ]
    },
    {
      "id": 2291,
      "hanzi": "叙述",
      "pinyin": "xù shù",
      "translations": [
        "to relate (a story or information)",
        "to tell or talk about",
        "to recount",
        "narration",
        "telling",
        "narrative",
        "account"
      ]
    },
    {
      "id": 2292,
      "hanzi": "宣布",
      "pinyin": "xuān bù",
      "translations": [
        "to declare",
        "to announce",
        "to proclaim"
      ]
    },
    {
      "id": 2293,
      "hanzi": "宣传",
      "pinyin": "xuān chuán",
      "translations": [
        "to disseminate",
        "to give publicity to",
        "propaganda",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2294,
      "hanzi": "选举",
      "pinyin": "xuǎn jǔ",
      "translations": [
        "to elect",
        "election",
        "CL:次",
        "個|个[gè]"
      ]
    },
    {
      "id": 2295,
      "hanzi": "学期",
      "pinyin": "xué qī",
      "translations": [
        "term",
        "semester",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2296,
      "hanzi": "学术",
      "pinyin": "xué shù",
      "translations": [
        "learning",
        "science",
        "academic",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2297,
      "hanzi": "学问",
      "pinyin": "xué wèn",
      "translations": [
        "learning",
        "knowledge",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2298,
      "hanzi": "寻找",
      "pinyin": "xún zhǎo",
      "translations": [
        "to seek",
        "to look for"
      ]
    },
    {
      "id": 2299,
      "hanzi": "询问",
      "pinyin": "xún wèn",
      "translations": [
        "to inquire"
      ]
    },
    {
      "id": 2300,
      "hanzi": "训练",
      "pinyin": "xùn liàn",
      "translations": [
        "to train",
        "to drill",
        "training",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2301,
      "hanzi": "迅速",
      "pinyin": "xùn sù",
      "translations": [
        "rapid",
        "speedy",
        "fast"
      ]
    },
    {
      "id": 2302,
      "hanzi": "延长",
      "pinyin": "yán cháng",
      "translations": [
        "to prolong",
        "to extend",
        "to delay"
      ]
    },
    {
      "id": 2303,
      "hanzi": "严肃",
      "pinyin": "yán sù",
      "translations": [
        "solemn",
        "grave",
        "serious",
        "earnest",
        "severe"
      ]
    },
    {
      "id": 2304,
      "hanzi": "宴会",
      "pinyin": "yàn huì",
      "translations": [
        "banquet",
        "feast",
        "dinner party",
        "CL:席",
        "個|个[gè]"
      ]
    },
    {
      "id": 2305,
      "hanzi": "阳台",
      "pinyin": "yáng tái",
      "translations": [
        "balcony",
        "porch"
      ]
    },
    {
      "id": 2306,
      "hanzi": "痒",
      "pinyin": "yǎng",
      "translations": [
        "to itch",
        "to tickle"
      ]
    },
    {
      "id": 2307,
      "hanzi": "样式",
      "pinyin": "yàng shì",
      "translations": [
        "type",
        "style"
      ]
    },
    {
      "id": 2308,
      "hanzi": "腰",
      "pinyin": "yāo",
      "translations": [
        "waist",
        "lower back",
        "pocket",
        "middle",
        "loins"
      ]
    },
    {
      "id": 2309,
      "hanzi": "摇",
      "pinyin": "yáo",
      "translations": [
        "to shake",
        "to rock",
        "to row"
      ]
    },
    {
      "id": 2310,
      "hanzi": "咬",
      "pinyin": "yǎo",
      "translations": [
        "to bite",
        "to nip"
      ]
    },
    {
      "id": 2311,
      "hanzi": "要不",
      "pinyin": "yào bù",
      "translations": [
        "otherwise",
        "or else",
        "how about...?",
        "either... (or...)"
      ]
    },
    {
      "id": 2312,
      "hanzi": "要是",
      "pinyin": "yào shi",
      "translations": [
        "if"
      ]
    },
    {
      "id": 2313,
      "hanzi": "夜",
      "pinyin": "yè",
      "translations": [
        "night"
      ]
    },
    {
      "id": 2314,
      "hanzi": "液体",
      "pinyin": "yè tǐ",
      "translations": [
        "liquid"
      ]
    },
    {
      "id": 2315,
      "hanzi": "业务",
      "pinyin": "yè wù",
      "translations": [
        "business",
        "professional work",
        "service",
        "CL:項|项[xiàng]"
      ]
    },
    {
      "id": 2316,
      "hanzi": "业余",
      "pinyin": "yè yú",
      "translations": [
        "spare time",
        "amateur",
        "extra-curricular"
      ]
    },
    {
      "id": 2317,
      "hanzi": "依然",
      "pinyin": "yī rán",
      "translations": [
        "still",
        "as before"
      ]
    },
    {
      "id": 2318,
      "hanzi": "一辈子",
      "pinyin": "yī bèi zi",
      "translations": [
        "(for) a lifetime"
      ]
    },
    {
      "id": 2319,
      "hanzi": "一旦",
      "pinyin": "yī dàn",
      "translations": [
        "in case (sth happens)",
        "if",
        "once (sth happens, then...)",
        "when",
        "in a short time",
        "in one day"
      ]
    },
    {
      "id": 2320,
      "hanzi": "一路",
      "pinyin": "yī lù",
      "translations": [
        "the whole journey",
        "all the way",
        "going the same way",
        "going in the same direction",
        "of the same kind"
      ]
    },
    {
      "id": 2321,
      "hanzi": "一致",
      "pinyin": "yī zhì",
      "translations": [
        "unanimous",
        "identical (views or opinions)"
      ]
    },
    {
      "id": 2322,
      "hanzi": "遗憾",
      "pinyin": "yí hàn",
      "translations": [
        "regret",
        "to regret",
        "to be sorry that"
      ]
    },
    {
      "id": 2323,
      "hanzi": "移动",
      "pinyin": "yí dòng",
      "translations": [
        "to move",
        "movement",
        "migration",
        "mobile",
        "portable"
      ]
    },
    {
      "id": 2324,
      "hanzi": "移民",
      "pinyin": "yí mín",
      "translations": [
        "to immigrate",
        "to migrate",
        "emigrant",
        "immigrant"
      ]
    },
    {
      "id": 2325,
      "hanzi": "疑问",
      "pinyin": "yí wèn",
      "translations": [
        "question",
        "interrogation",
        "doubt"
      ]
    },
    {
      "id": 2326,
      "hanzi": "乙",
      "pinyin": "yǐ",
      "translations": [
        "second of 10 heavenly stems 十天干",
        "second in order",
        "letter \"B\" or roman \"II\" in list \"A, B, C\"",
        "or \"I, II, III\" etc",
        "second party (in legal contract, usually 乙方, as opposed to 甲方)",
        "ethyl",
        "bent",
        "winding",
        "radical in Chinese characters (Kangxi radical 5)"
      ]
    },
    {
      "id": 2327,
      "hanzi": "以及",
      "pinyin": "yǐ jí",
      "translations": [
        "as well as",
        "too",
        "and"
      ]
    },
    {
      "id": 2328,
      "hanzi": "以来",
      "pinyin": "yǐ lái",
      "translations": [
        "since (a previous event)"
      ]
    },
    {
      "id": 2329,
      "hanzi": "意外",
      "pinyin": "yì wài",
      "translations": [
        "unexpected",
        "accident",
        "mishap",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2330,
      "hanzi": "意义",
      "pinyin": "yì yì",
      "translations": [
        "sense",
        "meaning",
        "significance",
        "importance",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2331,
      "hanzi": "议论",
      "pinyin": "yì lùn",
      "translations": [
        "to comment",
        "to talk about",
        "to discuss",
        "discussion",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2332,
      "hanzi": "义务",
      "pinyin": "yì wù",
      "translations": [
        "duty",
        "obligation",
        "commitment",
        "volunteer duty",
        "CL:項|项[xiàng]",
        "mandatory",
        "voluntary"
      ]
    },
    {
      "id": 2333,
      "hanzi": "因而",
      "pinyin": "yīn ér",
      "translations": [
        "therefore",
        "as a result",
        "thus",
        "and as a result",
        "..."
      ]
    },
    {
      "id": 2334,
      "hanzi": "因素",
      "pinyin": "yīn sù",
      "translations": [
        "element",
        "factor",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2335,
      "hanzi": "银",
      "pinyin": "yín",
      "translations": [
        "silver",
        "silver-colored",
        "relating to money or currency"
      ]
    },
    {
      "id": 2336,
      "hanzi": "英俊",
      "pinyin": "yīng jùn",
      "translations": [
        "handsome"
      ]
    },
    {
      "id": 2337,
      "hanzi": "英雄",
      "pinyin": "yīng xióng",
      "translations": [
        "hero",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2338,
      "hanzi": "迎接",
      "pinyin": "yíng jiē",
      "translations": [
        "to meet",
        "to welcome",
        "to greet"
      ]
    },
    {
      "id": 2339,
      "hanzi": "营养",
      "pinyin": "yíng yǎng",
      "translations": [
        "nutrition",
        "nourishment",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 2340,
      "hanzi": "营业",
      "pinyin": "yíng yè",
      "translations": [
        "to do business",
        "to trade"
      ]
    },
    {
      "id": 2341,
      "hanzi": "影子",
      "pinyin": "yǐng zi",
      "translations": [
        "shadow",
        "reflection",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2342,
      "hanzi": "硬币",
      "pinyin": "yìng bì",
      "translations": [
        "coin",
        "CL:枚[méi]"
      ]
    },
    {
      "id": 2343,
      "hanzi": "硬件",
      "pinyin": "yìng jiàn",
      "translations": [
        "hardware"
      ]
    },
    {
      "id": 2344,
      "hanzi": "应付",
      "pinyin": "yìng fu",
      "translations": [
        "to deal with",
        "to cope"
      ]
    },
    {
      "id": 2345,
      "hanzi": "应聘",
      "pinyin": "yìng pìn",
      "translations": [
        "to accept a job offer",
        "to apply for an advertised position"
      ]
    },
    {
      "id": 2346,
      "hanzi": "应用",
      "pinyin": "yìng yòng",
      "translations": [
        "to use",
        "to apply",
        "application",
        "applicable"
      ]
    },
    {
      "id": 2347,
      "hanzi": "拥抱",
      "pinyin": "yōng bào",
      "translations": [
        "to embrace",
        "to hug"
      ]
    },
    {
      "id": 2348,
      "hanzi": "拥挤",
      "pinyin": "yōng jǐ",
      "translations": [
        "crowded",
        "to throng",
        "congestion"
      ]
    },
    {
      "id": 2349,
      "hanzi": "勇气",
      "pinyin": "yǒng qì",
      "translations": [
        "courage",
        "valor"
      ]
    },
    {
      "id": 2350,
      "hanzi": "用途",
      "pinyin": "yòng tú",
      "translations": [
        "use",
        "application"
      ]
    },
    {
      "id": 2351,
      "hanzi": "优惠",
      "pinyin": "yōu huì",
      "translations": [
        "preferential",
        "favorable"
      ]
    },
    {
      "id": 2352,
      "hanzi": "优美",
      "pinyin": "yōu měi",
      "translations": [
        "graceful",
        "fine",
        "elegant"
      ]
    },
    {
      "id": 2353,
      "hanzi": "优势",
      "pinyin": "yōu shì",
      "translations": [
        "superiority",
        "dominance",
        "advantage"
      ]
    },
    {
      "id": 2354,
      "hanzi": "悠久",
      "pinyin": "yōu jiǔ",
      "translations": [
        "established",
        "long"
      ]
    },
    {
      "id": 2355,
      "hanzi": "邮局",
      "pinyin": "yóu jú",
      "translations": [
        "post office",
        "CL:家",
        "個|个[gè]"
      ]
    },
    {
      "id": 2356,
      "hanzi": "游览",
      "pinyin": "yóu lǎn",
      "translations": [
        "to go sight-seeing",
        "to tour",
        "to visit",
        "CL:次[cì]"
      ]
    },
    {
      "id": 2357,
      "hanzi": "油炸",
      "pinyin": "yóu zhá",
      "translations": [
        "to deep fry"
      ]
    },
    {
      "id": 2358,
      "hanzi": "犹豫",
      "pinyin": "yóu yù",
      "translations": [
        "to hesitate"
      ]
    },
    {
      "id": 2359,
      "hanzi": "有利",
      "pinyin": "yǒu lì",
      "translations": [
        "advantageous",
        "to have advantages",
        "favorable"
      ]
    },
    {
      "id": 2360,
      "hanzi": "幼儿园",
      "pinyin": "yòu ér yuán",
      "translations": [
        "kindergarten",
        "nursery school"
      ]
    },
    {
      "id": 2361,
      "hanzi": "娱乐",
      "pinyin": "yú lè",
      "translations": [
        "to entertain",
        "to amuse",
        "entertainment",
        "recreation",
        "amusement",
        "hobby",
        "fun",
        "joy"
      ]
    },
    {
      "id": 2362,
      "hanzi": "与其",
      "pinyin": "yǔ qí",
      "translations": [
        "rather than...",
        "與其|与其 A 不如 B (rather than A, better to B)"
      ]
    },
    {
      "id": 2363,
      "hanzi": "语气",
      "pinyin": "yǔ qì",
      "translations": [
        "tone",
        "manner of speaking",
        "mood",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2364,
      "hanzi": "宇宙",
      "pinyin": "yǔ zhòu",
      "translations": [
        "universe",
        "cosmos"
      ]
    },
    {
      "id": 2365,
      "hanzi": "预报",
      "pinyin": "yù bào",
      "translations": [
        "forecast"
      ]
    },
    {
      "id": 2366,
      "hanzi": "预订",
      "pinyin": "yù dìng",
      "translations": [
        "to place an order",
        "to book ahead"
      ]
    },
    {
      "id": 2367,
      "hanzi": "预防",
      "pinyin": "yù fáng",
      "translations": [
        "to prevent",
        "to take precautions against",
        "to protect",
        "to guard against",
        "precautionary",
        "prophylactic"
      ]
    },
    {
      "id": 2368,
      "hanzi": "玉米",
      "pinyin": "yù mǐ",
      "translations": [
        "corn",
        "maize",
        "CL:粒[lì]"
      ]
    },
    {
      "id": 2369,
      "hanzi": "元旦",
      "pinyin": "yuán dàn",
      "translations": [
        "New Year's Day"
      ]
    },
    {
      "id": 2370,
      "hanzi": "原料",
      "pinyin": "yuán liào",
      "translations": [
        "raw material",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2371,
      "hanzi": "原则",
      "pinyin": "yuán zé",
      "translations": [
        "principle",
        "doctrine",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2372,
      "hanzi": "缘故",
      "pinyin": "yuán gù",
      "translations": [
        "reason",
        "cause"
      ]
    },
    {
      "id": 2373,
      "hanzi": "愿望",
      "pinyin": "yuàn wàng",
      "translations": [
        "desire",
        "wish"
      ]
    },
    {
      "id": 2374,
      "hanzi": "晕",
      "pinyin": "yūn",
      "translations": [
        "confused",
        "dizzy",
        "giddy",
        "to faint",
        "to swoon",
        "to lose consciousness",
        "to pass out"
      ]
    },
    {
      "id": 2375,
      "hanzi": "运气",
      "pinyin": "yùn qi",
      "translations": [
        "luck (good or bad)"
      ]
    },
    {
      "id": 2376,
      "hanzi": "运输",
      "pinyin": "yùn shū",
      "translations": [
        "transport",
        "haulage",
        "transit",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2377,
      "hanzi": "运用",
      "pinyin": "yùn yòng",
      "translations": [
        "to use",
        "to put to use"
      ]
    },
    {
      "id": 2378,
      "hanzi": "灾害",
      "pinyin": "zāi hài",
      "translations": [
        "disastrous damage",
        "scourge",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2379,
      "hanzi": "再三",
      "pinyin": "zài sān",
      "translations": [
        "over and over again",
        "again and again"
      ]
    },
    {
      "id": 2380,
      "hanzi": "赞成",
      "pinyin": "zàn chéng",
      "translations": [
        "to approve",
        "to endorse",
        "(literary) to assist"
      ]
    },
    {
      "id": 2381,
      "hanzi": "赞美",
      "pinyin": "zàn měi",
      "translations": [
        "to admire",
        "to praise",
        "to eulogize"
      ]
    },
    {
      "id": 2382,
      "hanzi": "糟糕",
      "pinyin": "zāo gāo",
      "translations": [
        "too bad",
        "how terrible",
        "what bad luck",
        "terrible",
        "bad"
      ]
    },
    {
      "id": 2383,
      "hanzi": "造成",
      "pinyin": "zào chéng",
      "translations": [
        "to bring about",
        "to create",
        "to cause"
      ]
    },
    {
      "id": 2384,
      "hanzi": "则",
      "pinyin": "zé",
      "translations": [
        "conjunction used to express contrast with a previous sentence or clause",
        "standard",
        "norm",
        "rule",
        "to imitate",
        "to follow",
        "then",
        "principle",
        "classifier for written items (such as an official statement)"
      ]
    },
    {
      "id": 2385,
      "hanzi": "责备",
      "pinyin": "zé bèi",
      "translations": [
        "to blame",
        "to criticize",
        "condemnation",
        "reproach"
      ]
    },
    {
      "id": 2386,
      "hanzi": "摘",
      "pinyin": "zhāi",
      "translations": [
        "to take",
        "to borrow",
        "to pick (flowers, fruit etc)",
        "to pluck",
        "to select",
        "to remove",
        "to take off (glasses, hat etc)"
      ]
    },
    {
      "id": 2387,
      "hanzi": "粘贴",
      "pinyin": "zhān tiē",
      "translations": [
        "to stick",
        "to affix",
        "to adhere",
        "to paste (as in cut, copy and paste)",
        "Taiwan pr. [nián tiē]",
        "also written 黏貼|黏贴"
      ]
    },
    {
      "id": 2388,
      "hanzi": "展开",
      "pinyin": "zhǎn kāi",
      "translations": [
        "to unfold",
        "to carry out",
        "to be in full swing",
        "to launch"
      ]
    },
    {
      "id": 2389,
      "hanzi": "展览",
      "pinyin": "zhǎn lǎn",
      "translations": [
        "to put on display",
        "to exhibit",
        "exhibition",
        "show",
        "CL:個|个",
        "次[cì]"
      ]
    },
    {
      "id": 2390,
      "hanzi": "战争",
      "pinyin": "zhàn zhēng",
      "translations": [
        "war",
        "conflict",
        "CL:場|场",
        "次[cì]"
      ]
    },
    {
      "id": 2391,
      "hanzi": "占线",
      "pinyin": "zhàn xiàn",
      "translations": [
        "busy (telephone line)"
      ]
    },
    {
      "id": 2392,
      "hanzi": "涨",
      "pinyin": "zhǎng",
      "translations": [
        "to rise (of prices, rivers)"
      ]
    },
    {
      "id": 2393,
      "hanzi": "掌握",
      "pinyin": "zhǎng wò",
      "translations": [
        "to grasp (often fig.)",
        "to control",
        "to seize (initiative, opportunity, destiny)",
        "to master",
        "to know well",
        "to understand sth well and know how to use it",
        "fluency"
      ]
    },
    {
      "id": 2394,
      "hanzi": "账户",
      "pinyin": "zhàng hù",
      "translations": [
        "bank account",
        "online account"
      ]
    },
    {
      "id": 2395,
      "hanzi": "招待",
      "pinyin": "zhāo dài",
      "translations": [
        "to receive (guests)",
        "to entertain",
        "reception"
      ]
    },
    {
      "id": 2396,
      "hanzi": "着凉",
      "pinyin": "zháo liáng",
      "translations": [
        "to catch cold"
      ]
    },
    {
      "id": 2397,
      "hanzi": "照常",
      "pinyin": "zhào cháng",
      "translations": [
        "(business etc) as usual"
      ]
    },
    {
      "id": 2398,
      "hanzi": "召开",
      "pinyin": "zhào kāi",
      "translations": [
        "to convene (a conference or meeting)",
        "to convoke",
        "to call together"
      ]
    },
    {
      "id": 2399,
      "hanzi": "哲学",
      "pinyin": "zhé xué",
      "translations": [
        "philosophy",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2400,
      "hanzi": "真理",
      "pinyin": "zhēn lǐ",
      "translations": [
        "truth",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2401,
      "hanzi": "真实",
      "pinyin": "zhēn shí",
      "translations": [
        "true",
        "real"
      ]
    },
    {
      "id": 2402,
      "hanzi": "针对",
      "pinyin": "zhēn duì",
      "translations": [
        "to be directed against",
        "to be aimed at",
        "to counter",
        "in the light of",
        "in connection with"
      ]
    },
    {
      "id": 2403,
      "hanzi": "珍惜",
      "pinyin": "zhēn xī",
      "translations": [
        "to treasure",
        "to value",
        "to cherish"
      ]
    },
    {
      "id": 2404,
      "hanzi": "诊断",
      "pinyin": "zhěn duàn",
      "translations": [
        "diagnosis",
        "to diagnose"
      ]
    },
    {
      "id": 2405,
      "hanzi": "枕头",
      "pinyin": "zhěn tou",
      "translations": [
        "pillow"
      ]
    },
    {
      "id": 2406,
      "hanzi": "阵",
      "pinyin": "zhèn",
      "translations": [
        "disposition of troops",
        "wave",
        "spate",
        "burst",
        "spell",
        "short period of time",
        "classifier for events or states of short duration"
      ]
    },
    {
      "id": 2407,
      "hanzi": "振动",
      "pinyin": "zhèn dòng",
      "translations": [
        "vibration"
      ]
    },
    {
      "id": 2408,
      "hanzi": "睁",
      "pinyin": "zhēng",
      "translations": [
        "to open (one's eyes)"
      ]
    },
    {
      "id": 2409,
      "hanzi": "争论",
      "pinyin": "zhēng lùn",
      "translations": [
        "to argue",
        "to debate",
        "to contend",
        "argument",
        "contention",
        "controversy",
        "debate",
        "CL:次",
        "場|场[chǎng]"
      ]
    },
    {
      "id": 2410,
      "hanzi": "争取",
      "pinyin": "zhēng qǔ",
      "translations": [
        "to fight for",
        "to strive for",
        "to win over"
      ]
    },
    {
      "id": 2411,
      "hanzi": "征求",
      "pinyin": "zhēng qiú",
      "translations": [
        "to solicit",
        "to seek",
        "to request (opinions, feedback etc)",
        "to petition"
      ]
    },
    {
      "id": 2412,
      "hanzi": "整个",
      "pinyin": "zhěng gè",
      "translations": [
        "whole",
        "entire",
        "total"
      ]
    },
    {
      "id": 2413,
      "hanzi": "整体",
      "pinyin": "zhěng tǐ",
      "translations": [
        "whole entity",
        "entire body",
        "synthesis",
        "as a whole (situation, construction, team etc)",
        "global",
        "macrocosm",
        "integral",
        "holistic",
        "whole"
      ]
    },
    {
      "id": 2414,
      "hanzi": "正",
      "pinyin": "zhèng",
      "translations": [
        "just (right)",
        "main",
        "upright",
        "straight",
        "correct",
        "positive",
        "greater than zero",
        "principle"
      ]
    },
    {
      "id": 2415,
      "hanzi": "政策",
      "pinyin": "zhèng cè",
      "translations": [
        "policy",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2416,
      "hanzi": "政府",
      "pinyin": "zhèng fǔ",
      "translations": [
        "government",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2417,
      "hanzi": "政治",
      "pinyin": "zhèng zhì",
      "translations": [
        "politics",
        "political"
      ]
    },
    {
      "id": 2418,
      "hanzi": "证件",
      "pinyin": "zhèng jiàn",
      "translations": [
        "paperwork",
        "credentials"
      ]
    },
    {
      "id": 2419,
      "hanzi": "证据",
      "pinyin": "zhèng jù",
      "translations": [
        "evidence",
        "proof",
        "testimony"
      ]
    },
    {
      "id": 2420,
      "hanzi": "挣钱",
      "pinyin": "zhèng qián",
      "translations": [
        "to make money"
      ]
    },
    {
      "id": 2421,
      "hanzi": "支",
      "pinyin": "zhī",
      "translations": [
        "to support",
        "to sustain",
        "to erect",
        "to raise",
        "branch",
        "division",
        "to draw money",
        "classifier for rods such as pens and guns",
        "for army divisions and for songs or compositions"
      ]
    },
    {
      "id": 2422,
      "hanzi": "支票",
      "pinyin": "zhī piào",
      "translations": [
        "check (bank)",
        "cheque",
        "CL:本[běn]"
      ]
    },
    {
      "id": 2423,
      "hanzi": "直",
      "pinyin": "zhí",
      "translations": [
        "straight",
        "to straighten",
        "fair and reasonable",
        "frank",
        "straightforward",
        "(indicates continuing motion or action)",
        "vertical",
        "vertical downward stroke in Chinese characters"
      ]
    },
    {
      "id": 2424,
      "hanzi": "执行",
      "pinyin": "zhí xíng",
      "translations": [
        "to implement",
        "to carry out",
        "to execute",
        "to run"
      ]
    },
    {
      "id": 2425,
      "hanzi": "执照",
      "pinyin": "zhí zhào",
      "translations": [
        "a license",
        "a permit"
      ]
    },
    {
      "id": 2426,
      "hanzi": "指导",
      "pinyin": "zhǐ dǎo",
      "translations": [
        "to guide",
        "to give directions",
        "to direct",
        "to coach",
        "guidance",
        "tuition",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2427,
      "hanzi": "指挥",
      "pinyin": "zhǐ huī",
      "translations": [
        "to conduct",
        "to command",
        "to direct",
        "conductor (of an orchestra)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2428,
      "hanzi": "制定",
      "pinyin": "zhì dìng",
      "translations": [
        "to draw up",
        "to formulate"
      ]
    },
    {
      "id": 2429,
      "hanzi": "制度",
      "pinyin": "zhì dù",
      "translations": [
        "system (e.g. political, adminstrative etc)",
        "institution",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2430,
      "hanzi": "制作",
      "pinyin": "zhì zuò",
      "translations": [
        "to make",
        "to manufacture"
      ]
    },
    {
      "id": 2431,
      "hanzi": "智慧",
      "pinyin": "zhì huì",
      "translations": [
        "wisdom",
        "knowledge",
        "intelligent",
        "intelligence"
      ]
    },
    {
      "id": 2432,
      "hanzi": "至今",
      "pinyin": "zhì jīn",
      "translations": [
        "so far",
        "to this day",
        "until now"
      ]
    },
    {
      "id": 2433,
      "hanzi": "至于",
      "pinyin": "zhì yú",
      "translations": [
        "as for",
        "as to",
        "to go so far as to"
      ]
    },
    {
      "id": 2434,
      "hanzi": "治疗",
      "pinyin": "zhì liáo",
      "translations": [
        "to treat",
        "to cure",
        "medical treatment",
        "cure"
      ]
    },
    {
      "id": 2435,
      "hanzi": "志愿者",
      "pinyin": "zhì yuàn zhě",
      "translations": [
        "volunteer"
      ]
    },
    {
      "id": 2436,
      "hanzi": "秩序",
      "pinyin": "zhì xù",
      "translations": [
        "order (orderly)",
        "order (sequence)",
        "social order",
        "the state (of society)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2437,
      "hanzi": "钟",
      "pinyin": "zhōng",
      "translations": [
        "clock",
        "o'clock",
        "time as measured in hours and minutes",
        "bell",
        "CL:架",
        "座[zuò]"
      ]
    },
    {
      "id": 2438,
      "hanzi": "中介",
      "pinyin": "zhōng jiè",
      "translations": [
        "to act as intermediary",
        "to link",
        "intermediate",
        "inter-",
        "agency",
        "agent"
      ]
    },
    {
      "id": 2439,
      "hanzi": "中心",
      "pinyin": "zhōng xīn",
      "translations": [
        "center",
        "heart",
        "core",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2440,
      "hanzi": "中旬",
      "pinyin": "zhōng xún",
      "translations": [
        "middle third of a month"
      ]
    },
    {
      "id": 2441,
      "hanzi": "重",
      "pinyin": "zhòng",
      "translations": [
        "heavy",
        "serious",
        "to attach importance to"
      ]
    },
    {
      "id": 2442,
      "hanzi": "重量",
      "pinyin": "zhòng liàng",
      "translations": [
        "weight",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2443,
      "hanzi": "周到",
      "pinyin": "zhōu dao",
      "translations": [
        "thoughtful",
        "considerate",
        "attentive",
        "thorough"
      ]
    },
    {
      "id": 2444,
      "hanzi": "逐步",
      "pinyin": "zhú bù",
      "translations": [
        "progressively",
        "step by step"
      ]
    },
    {
      "id": 2445,
      "hanzi": "竹子",
      "pinyin": "zhú zi",
      "translations": [
        "bamboo",
        "CL:棵",
        "支",
        "根[gēn]"
      ]
    },
    {
      "id": 2446,
      "hanzi": "煮",
      "pinyin": "zhǔ",
      "translations": [
        "to cook",
        "to boil"
      ]
    },
    {
      "id": 2447,
      "hanzi": "主持",
      "pinyin": "zhǔ chí",
      "translations": [
        "to take charge of",
        "to manage or direct",
        "to preside over",
        "to uphold",
        "to stand for (justice etc)",
        "to host (a TV or radio program etc)"
      ]
    },
    {
      "id": 2448,
      "hanzi": "主观",
      "pinyin": "zhǔ guān",
      "translations": [
        "subjective"
      ]
    },
    {
      "id": 2449,
      "hanzi": "主人",
      "pinyin": "zhǔ rén",
      "translations": [
        "master",
        "host",
        "owner",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2450,
      "hanzi": "主席",
      "pinyin": "zhǔ xí",
      "translations": [
        "chairperson",
        "premier",
        "chairman",
        "CL:個|个",
        "位[wèi]"
      ]
    },
    {
      "id": 2451,
      "hanzi": "主张",
      "pinyin": "zhǔ zhāng",
      "translations": [
        "to advocate",
        "to stand for",
        "view",
        "position",
        "stand",
        "proposition",
        "viewpoint",
        "assertion",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2452,
      "hanzi": "嘱咐",
      "pinyin": "zhǔ fù",
      "translations": [
        "to tell",
        "to exhort",
        "injunction"
      ]
    },
    {
      "id": 2453,
      "hanzi": "祝福",
      "pinyin": "zhù fú",
      "translations": [
        "blessings",
        "to wish sb well"
      ]
    },
    {
      "id": 2454,
      "hanzi": "注册",
      "pinyin": "zhù cè",
      "translations": [
        "to register",
        "to enroll"
      ]
    },
    {
      "id": 2455,
      "hanzi": "抓紧",
      "pinyin": "zhuā jǐn",
      "translations": [
        "to grasp firmly",
        "to pay special attention to",
        "to rush in",
        "to make the most of"
      ]
    },
    {
      "id": 2456,
      "hanzi": "专家",
      "pinyin": "zhuān jiā",
      "translations": [
        "expert",
        "specialist",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2457,
      "hanzi": "专心",
      "pinyin": "zhuān xīn",
      "translations": [
        "to concentrate",
        "absorption",
        "concentration",
        "engrossed"
      ]
    },
    {
      "id": 2458,
      "hanzi": "转变",
      "pinyin": "zhuǎn biàn",
      "translations": [
        "to change",
        "to transform",
        "shift",
        "transformation",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2459,
      "hanzi": "转告",
      "pinyin": "zhuǎn gào",
      "translations": [
        "to pass on",
        "to communicate",
        "to transmit"
      ]
    },
    {
      "id": 2460,
      "hanzi": "装",
      "pinyin": "zhuāng",
      "translations": [
        "adornment",
        "to adorn",
        "dress",
        "clothing",
        "costume (of an actor in a play)",
        "to play a role",
        "to pretend",
        "to install",
        "to fix",
        "to wrap (sth in a bag)",
        "to load",
        "to pack"
      ]
    },
    {
      "id": 2461,
      "hanzi": "装饰",
      "pinyin": "zhuāng shì",
      "translations": [
        "to decorate",
        "decoration",
        "decorative",
        "ornamental"
      ]
    },
    {
      "id": 2462,
      "hanzi": "状况",
      "pinyin": "zhuàng kuàng",
      "translations": [
        "condition",
        "state",
        "situation",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2463,
      "hanzi": "状态",
      "pinyin": "zhuàng tài",
      "translations": [
        "state of affairs",
        "state",
        "mode",
        "situation",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2464,
      "hanzi": "追求",
      "pinyin": "zhuī qiú",
      "translations": [
        "to pursue (a goal etc) stubbornly",
        "to seek after",
        "to woo"
      ]
    },
    {
      "id": 2465,
      "hanzi": "资格",
      "pinyin": "zī gé",
      "translations": [
        "qualifications"
      ]
    },
    {
      "id": 2466,
      "hanzi": "资金",
      "pinyin": "zī jīn",
      "translations": [
        "funds",
        "funding",
        "capital"
      ]
    },
    {
      "id": 2467,
      "hanzi": "资料",
      "pinyin": "zī liào",
      "translations": [
        "material",
        "resources",
        "data",
        "information",
        "profile (Internet)",
        "CL:份",
        "個|个[gè]"
      ]
    },
    {
      "id": 2468,
      "hanzi": "资源",
      "pinyin": "zī yuán",
      "translations": [
        "natural resource (such as water or minerals)",
        "resource (such as manpower or tourism)"
      ]
    },
    {
      "id": 2469,
      "hanzi": "姿势",
      "pinyin": "zī shì",
      "translations": [
        "posture",
        "position"
      ]
    },
    {
      "id": 2470,
      "hanzi": "咨询",
      "pinyin": "zī xún",
      "translations": [
        "to consult",
        "to seek advice",
        "consultation",
        "(sales) inquiry (formal)"
      ]
    },
    {
      "id": 2471,
      "hanzi": "紫",
      "pinyin": "zǐ",
      "translations": [
        "purple",
        "violet",
        "amethyst",
        "Lithospermum erythrorhizon (flowering plant whose root provides red purple dye)",
        "Japanese: murasaki"
      ]
    },
    {
      "id": 2472,
      "hanzi": "字幕",
      "pinyin": "zì mù",
      "translations": [
        "caption",
        "subtitle"
      ]
    },
    {
      "id": 2473,
      "hanzi": "自从",
      "pinyin": "zì cóng",
      "translations": [
        "since (a time)",
        "ever since"
      ]
    },
    {
      "id": 2474,
      "hanzi": "自动",
      "pinyin": "zì dòng",
      "translations": [
        "automatic",
        "voluntarily"
      ]
    },
    {
      "id": 2475,
      "hanzi": "自豪",
      "pinyin": "zì háo",
      "translations": [
        "(feel a sense of) pride",
        "to be proud of sth (in a good way)"
      ]
    },
    {
      "id": 2476,
      "hanzi": "自觉",
      "pinyin": "zì jué",
      "translations": [
        "conscious",
        "aware",
        "on one's own initiative",
        "conscientious"
      ]
    },
    {
      "id": 2477,
      "hanzi": "自私",
      "pinyin": "zì sī",
      "translations": [
        "selfish",
        "selfishness"
      ]
    },
    {
      "id": 2478,
      "hanzi": "自信",
      "pinyin": "zì xìn",
      "translations": [
        "to have confidence in oneself",
        "self-confidence"
      ]
    },
    {
      "id": 2479,
      "hanzi": "自由",
      "pinyin": "zì yóu",
      "translations": [
        "freedom",
        "free",
        "liberty",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2480,
      "hanzi": "自愿",
      "pinyin": "zì yuàn",
      "translations": [
        "voluntary"
      ]
    },
    {
      "id": 2481,
      "hanzi": "综合",
      "pinyin": "zōng hé",
      "translations": [
        "comprehensive",
        "composite",
        "synthesized",
        "to sum up",
        "to integrate",
        "to synthesize"
      ]
    },
    {
      "id": 2482,
      "hanzi": "宗教",
      "pinyin": "zōng jiào",
      "translations": [
        "religion"
      ]
    },
    {
      "id": 2483,
      "hanzi": "总裁",
      "pinyin": "zǒng cái",
      "translations": [
        "chairman",
        "director-general (of a company etc)"
      ]
    },
    {
      "id": 2484,
      "hanzi": "总共",
      "pinyin": "zǒng gòng",
      "translations": [
        "altogether",
        "in sum",
        "in all",
        "in total"
      ]
    },
    {
      "id": 2485,
      "hanzi": "总理",
      "pinyin": "zǒng lǐ",
      "translations": [
        "premier",
        "prime minister",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 2486,
      "hanzi": "总算",
      "pinyin": "zǒng suàn",
      "translations": [
        "at long last",
        "finally",
        "on the whole"
      ]
    },
    {
      "id": 2487,
      "hanzi": "总统",
      "pinyin": "zǒng tǒng",
      "translations": [
        "president (of a country)",
        "CL:個|个",
        "位",
        "名",
        "屆|届[jiè]"
      ]
    },
    {
      "id": 2488,
      "hanzi": "总之",
      "pinyin": "zǒng zhī",
      "translations": [
        "in a word",
        "in short",
        "in brief"
      ]
    },
    {
      "id": 2489,
      "hanzi": "组合",
      "pinyin": "zǔ hé",
      "translations": [
        "to assemble",
        "combination",
        "combinatorial"
      ]
    },
    {
      "id": 2490,
      "hanzi": "阻止",
      "pinyin": "zǔ zhǐ",
      "translations": [
        "to prevent",
        "to block"
      ]
    },
    {
      "id": 2491,
      "hanzi": "祖国",
      "pinyin": "zǔ guó",
      "translations": [
        "ancestral land CL:個|个[gè]",
        "homeland",
        "used for PRC"
      ]
    },
    {
      "id": 2492,
      "hanzi": "祖先",
      "pinyin": "zǔ xiān",
      "translations": [
        "ancestor",
        "forebears"
      ]
    },
    {
      "id": 2493,
      "hanzi": "醉",
      "pinyin": "zuì",
      "translations": [
        "intoxicated"
      ]
    },
    {
      "id": 2494,
      "hanzi": "最初",
      "pinyin": "zuì chū",
      "translations": [
        "first",
        "primary",
        "initial"
      ]
    },
    {
      "id": 2495,
      "hanzi": "罪犯",
      "pinyin": "zuì fàn",
      "translations": [
        "criminal"
      ]
    },
    {
      "id": 2496,
      "hanzi": "尊敬",
      "pinyin": "zūn jìng",
      "translations": [
        "respect",
        "to revere"
      ]
    },
    {
      "id": 2497,
      "hanzi": "遵守",
      "pinyin": "zūn shǒu",
      "translations": [
        "to comply with",
        "to abide by",
        "to respect (an agreement)"
      ]
    },
    {
      "id": 2498,
      "hanzi": "作品",
      "pinyin": "zuò pǐn",
      "translations": [
        "work (of art)",
        "opus",
        "CL:部",
        "篇[piān]"
      ]
    },
    {
      "id": 2499,
      "hanzi": "作为",
      "pinyin": "zuò wéi",
      "translations": [
        "one's conduct",
        "deed",
        "activity",
        "accomplishment",
        "achievement",
        "to act as",
        "as (in the capacity of)",
        "qua",
        "to view as",
        "to look upon (sth as)",
        "to take sth to be"
      ]
    },
    {
      "id": 2500,
      "hanzi": "作文",
      "pinyin": "zuò wén",
      "translations": [
        "to write an essay",
        "composition (student essay)",
        "CL:篇[piān]"
      ]
    }
  ]
  
  private _hanzi_hsk_6 = () => [
    {
      "id": 2501,
      "hanzi": "哎哟",
      "pinyin": "āi yō",
      "translations": [
        "hey",
        "ow",
        "ouch",
        "interjection of pain or surprise"
      ]
    },
    {
      "id": 2502,
      "hanzi": "挨",
      "pinyin": "ái",
      "translations": [
        "to suffer",
        "to endure",
        "to pull through (hard times)",
        "to delay",
        "to stall",
        "to play for time",
        "to dawdle"
      ]
    },
    {
      "id": 2503,
      "hanzi": "癌症",
      "pinyin": "ái zhèng",
      "translations": [
        "cancer"
      ]
    },
    {
      "id": 2504,
      "hanzi": "爱不释手",
      "pinyin": "ài bù shì shǒu",
      "translations": [
        "to love sth too much to part with it (idiom); to fondle admiringly"
      ]
    },
    {
      "id": 2505,
      "hanzi": "爱戴",
      "pinyin": "ài dài",
      "translations": [
        "to love and respect",
        "love and respect"
      ]
    },
    {
      "id": 2506,
      "hanzi": "暧昧",
      "pinyin": "ài mèi",
      "translations": [
        "vague",
        "ambiguous",
        "equivocal",
        "dubious"
      ]
    },
    {
      "id": 2507,
      "hanzi": "安居乐业",
      "pinyin": "ān jū lè yè",
      "translations": [
        "live in peace and work happily (idiom)"
      ]
    },
    {
      "id": 2508,
      "hanzi": "安宁",
      "pinyin": "ān níng",
      "translations": [
        "peaceful",
        "tranquil",
        "calm",
        "composed",
        "free from worry"
      ]
    },
    {
      "id": 2509,
      "hanzi": "安详",
      "pinyin": "ān xiáng",
      "translations": [
        "serene"
      ]
    },
    {
      "id": 2510,
      "hanzi": "安置",
      "pinyin": "ān zhì",
      "translations": [
        "to find a place for",
        "to help settle down",
        "to arrange for",
        "to get into bed",
        "placement"
      ]
    },
    {
      "id": 2511,
      "hanzi": "暗示",
      "pinyin": "àn shì",
      "translations": [
        "to hint",
        "to suggest",
        "suggestion",
        "hint"
      ]
    },
    {
      "id": 2512,
      "hanzi": "案件",
      "pinyin": "àn jiàn",
      "translations": [
        "law case",
        "legal case",
        "judicial case",
        "CL:宗",
        "樁|桩",
        "起[qǐ]"
      ]
    },
    {
      "id": 2513,
      "hanzi": "案例",
      "pinyin": "àn lì",
      "translations": [
        "case (law)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2514,
      "hanzi": "按摩",
      "pinyin": "àn mó",
      "translations": [
        "massage",
        "to massage"
      ]
    },
    {
      "id": 2515,
      "hanzi": "昂贵",
      "pinyin": "áng guì",
      "translations": [
        "expensive",
        "costly"
      ]
    },
    {
      "id": 2516,
      "hanzi": "凹凸",
      "pinyin": "āo tū",
      "translations": [
        "bumpy",
        "uneven",
        "slotted and tabbed joint",
        "crenelation"
      ]
    },
    {
      "id": 2517,
      "hanzi": "熬",
      "pinyin": "áo",
      "translations": [
        "to cook on a slow fire",
        "to extract by heating",
        "to decoct",
        "to endure"
      ]
    },
    {
      "id": 2518,
      "hanzi": "奥秘",
      "pinyin": "ào mì",
      "translations": [
        "secret",
        "mystery"
      ]
    },
    {
      "id": 2519,
      "hanzi": "扒",
      "pinyin": "bā",
      "translations": [
        "to hold on to",
        "to cling to",
        "to dig up",
        "to rake",
        "to push aside",
        "to climb",
        "to pull out",
        "to strip off"
      ]
    },
    {
      "id": 2520,
      "hanzi": "疤",
      "pinyin": "bā",
      "translations": [
        "scar"
      ]
    },
    {
      "id": 2521,
      "hanzi": "巴不得",
      "pinyin": "bā bù dé",
      "translations": [
        "to be eager for",
        "to long for",
        "to look forward to"
      ]
    },
    {
      "id": 2522,
      "hanzi": "巴结",
      "pinyin": "bā jie",
      "translations": [
        "to fawn on",
        "to curry favor with",
        "to make up to"
      ]
    },
    {
      "id": 2523,
      "hanzi": "拔苗助长",
      "pinyin": "bá miáo zhù zhǎng",
      "translations": [
        "to spoil things through excessive enthusiasm (idiom)"
      ]
    },
    {
      "id": 2524,
      "hanzi": "把关",
      "pinyin": "bǎ guān",
      "translations": [
        "to guard a pass",
        "to check on sth"
      ]
    },
    {
      "id": 2525,
      "hanzi": "把手",
      "pinyin": "bǎ shǒu",
      "translations": [
        "handle",
        "grip",
        "knob"
      ]
    },
    {
      "id": 2526,
      "hanzi": "把戏",
      "pinyin": "bǎ xì",
      "translations": [
        "acrobatics",
        "jugglery",
        "cheap trick",
        "game"
      ]
    },
    {
      "id": 2527,
      "hanzi": "霸道",
      "pinyin": "bà dào",
      "translations": [
        "the Way of the Hegemon",
        "abbr. of 霸王之道",
        "despotic rule",
        "rule by might",
        "evil as opposed to the Way of the King 王道",
        "overbearing",
        "tyranny",
        "(of liquor, medicine etc) strong",
        "potent"
      ]
    },
    {
      "id": 2528,
      "hanzi": "罢工",
      "pinyin": "bà gōng",
      "translations": [
        "a strike",
        "to go on strike"
      ]
    },
    {
      "id": 2529,
      "hanzi": "掰",
      "pinyin": "bāi",
      "translations": [
        "to break with both hands"
      ]
    },
    {
      "id": 2530,
      "hanzi": "百分点",
      "pinyin": "bǎi fēn diǎn",
      "translations": [
        "percentage point"
      ]
    },
    {
      "id": 2531,
      "hanzi": "摆脱",
      "pinyin": "bǎi tuō",
      "translations": [
        "to break away from",
        "to cast off (old ideas etc)",
        "to get rid of",
        "to break away (from)",
        "to break out (of)",
        "to free oneself from",
        "to extricate oneself"
      ]
    },
    {
      "id": 2532,
      "hanzi": "拜访",
      "pinyin": "bài fǎng",
      "translations": [
        "to pay a visit",
        "to call on"
      ]
    },
    {
      "id": 2533,
      "hanzi": "拜年",
      "pinyin": "bài nián",
      "translations": [
        "pay a New Year call",
        "wish sb a Happy New Year"
      ]
    },
    {
      "id": 2534,
      "hanzi": "拜托",
      "pinyin": "bài tuō",
      "translations": [
        "to request sb to do sth",
        "please!"
      ]
    },
    {
      "id": 2535,
      "hanzi": "败坏",
      "pinyin": "bài huài",
      "translations": [
        "to ruin",
        "to corrupt",
        "to undermine"
      ]
    },
    {
      "id": 2536,
      "hanzi": "颁布",
      "pinyin": "bān bù",
      "translations": [
        "to issue",
        "to proclaim",
        "to enact (laws, decrees etc)"
      ]
    },
    {
      "id": 2537,
      "hanzi": "颁发",
      "pinyin": "bān fā",
      "translations": [
        "to issue",
        "to promulgate",
        "to award"
      ]
    },
    {
      "id": 2538,
      "hanzi": "斑纹",
      "pinyin": "bān wén",
      "translations": [
        "stripe",
        "streak"
      ]
    },
    {
      "id": 2539,
      "hanzi": "版本",
      "pinyin": "bǎn běn",
      "translations": [
        "version",
        "edition",
        "release"
      ]
    },
    {
      "id": 2540,
      "hanzi": "半途而废",
      "pinyin": "bàn tú ér fèi",
      "translations": [
        "to give up halfway (idiom); leave sth unfinished"
      ]
    },
    {
      "id": 2541,
      "hanzi": "伴侣",
      "pinyin": "bàn lǚ",
      "translations": [
        "companion",
        "mate",
        "partner"
      ]
    },
    {
      "id": 2542,
      "hanzi": "伴随",
      "pinyin": "bàn suí",
      "translations": [
        "to accompany",
        "to follow",
        "to occur together with",
        "concomitant"
      ]
    },
    {
      "id": 2543,
      "hanzi": "扮演",
      "pinyin": "bàn yǎn",
      "translations": [
        "to play the role of",
        "to act"
      ]
    },
    {
      "id": 2544,
      "hanzi": "绑架",
      "pinyin": "bǎng jià",
      "translations": [
        "to kidnap",
        "to abduct",
        "to hijack",
        "a kidnapping",
        "abduction",
        "staking"
      ]
    },
    {
      "id": 2545,
      "hanzi": "榜样",
      "pinyin": "bǎng yàng",
      "translations": [
        "example",
        "model",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2546,
      "hanzi": "磅",
      "pinyin": "bàng",
      "translations": [
        "see 磅秤 scale",
        "platform balance",
        "pound (unit of weight, about 454 grams)"
      ]
    },
    {
      "id": 2547,
      "hanzi": "包庇",
      "pinyin": "bāo bì",
      "translations": [
        "to shield",
        "to harbor",
        "to cover up"
      ]
    },
    {
      "id": 2548,
      "hanzi": "包袱",
      "pinyin": "bāo fu",
      "translations": [
        "cloth-wrapper",
        "a bundle wrapped in cloth",
        "load",
        "weight",
        "burden"
      ]
    },
    {
      "id": 2549,
      "hanzi": "包围",
      "pinyin": "bāo wéi",
      "translations": [
        "to surround",
        "to encircle",
        "to hem in"
      ]
    },
    {
      "id": 2550,
      "hanzi": "包装",
      "pinyin": "bāo zhuāng",
      "translations": [
        "to pack",
        "to package",
        "to wrap",
        "packaging"
      ]
    },
    {
      "id": 2551,
      "hanzi": "饱和",
      "pinyin": "bǎo hé",
      "translations": [
        "saturation"
      ]
    },
    {
      "id": 2552,
      "hanzi": "饱经沧桑",
      "pinyin": "bǎo jīng cāng sāng",
      "translations": [
        "having lived through many changes"
      ]
    },
    {
      "id": 2553,
      "hanzi": "保管",
      "pinyin": "bǎo guǎn",
      "translations": [
        "to assure",
        "to guarantee",
        "to take care of",
        "to safeguard",
        "certainly",
        "surely"
      ]
    },
    {
      "id": 2554,
      "hanzi": "保密",
      "pinyin": "bǎo mì",
      "translations": [
        "to keep sth confidential",
        "to maintain secrecy"
      ]
    },
    {
      "id": 2555,
      "hanzi": "保姆",
      "pinyin": "bǎo mǔ",
      "translations": [
        "nanny",
        "housekeeper"
      ]
    },
    {
      "id": 2556,
      "hanzi": "保守",
      "pinyin": "bǎo shǒu",
      "translations": [
        "(politically) conservative",
        "to guard",
        "to keep"
      ]
    },
    {
      "id": 2557,
      "hanzi": "保卫",
      "pinyin": "bǎo wèi",
      "translations": [
        "to defend",
        "to safeguard"
      ]
    },
    {
      "id": 2558,
      "hanzi": "保养",
      "pinyin": "bǎo yǎng",
      "translations": [
        "to take good care of (or conserve) one's health",
        "to keep in good repair",
        "to maintain",
        "maintenance"
      ]
    },
    {
      "id": 2559,
      "hanzi": "保障",
      "pinyin": "bǎo zhàng",
      "translations": [
        "to ensure",
        "to guarantee",
        "to safeguard"
      ]
    },
    {
      "id": 2560,
      "hanzi": "保重",
      "pinyin": "bǎo zhòng",
      "translations": [
        "to take care of oneself"
      ]
    },
    {
      "id": 2561,
      "hanzi": "抱负",
      "pinyin": "bào fù",
      "translations": [
        "aspiration",
        "ambition"
      ]
    },
    {
      "id": 2562,
      "hanzi": "抱怨",
      "pinyin": "bào yuàn",
      "translations": [
        "to complain",
        "to grumble"
      ]
    },
    {
      "id": 2563,
      "hanzi": "报仇",
      "pinyin": "bào chóu",
      "translations": [
        "to take revenge",
        "to avenge"
      ]
    },
    {
      "id": 2564,
      "hanzi": "报酬",
      "pinyin": "bào chóu",
      "translations": [
        "reward",
        "remuneration"
      ]
    },
    {
      "id": 2565,
      "hanzi": "报答",
      "pinyin": "bào dá",
      "translations": [
        "to repay",
        "to requite"
      ]
    },
    {
      "id": 2566,
      "hanzi": "报到",
      "pinyin": "bào dào",
      "translations": [
        "to report for duty",
        "to check in",
        "to register"
      ]
    },
    {
      "id": 2567,
      "hanzi": "报复",
      "pinyin": "bào fù",
      "translations": [
        "to make reprisals",
        "to retaliate",
        "revenge",
        "retaliation"
      ]
    },
    {
      "id": 2568,
      "hanzi": "报社",
      "pinyin": "bào shè",
      "translations": [
        "general office of a newspaper",
        "newspaper office",
        "CL:家[jiā]"
      ]
    },
    {
      "id": 2569,
      "hanzi": "报销",
      "pinyin": "bào xiāo",
      "translations": [
        "to submit an expense account",
        "to apply for reimbursement",
        "to write off",
        "to wipe out"
      ]
    },
    {
      "id": 2570,
      "hanzi": "爆发",
      "pinyin": "bào fā",
      "translations": [
        "to break out",
        "to erupt",
        "to explode",
        "to burst out"
      ]
    },
    {
      "id": 2571,
      "hanzi": "爆炸",
      "pinyin": "bào zhà",
      "translations": [
        "explosion",
        "to explode",
        "to blow up",
        "to detonate"
      ]
    },
    {
      "id": 2572,
      "hanzi": "曝光",
      "pinyin": "bào guāng",
      "translations": [
        "light meter",
        "exposure meter"
      ]
    },
    {
      "id": 2573,
      "hanzi": "暴力",
      "pinyin": "bào lì",
      "translations": [
        "violence",
        "(use) force",
        "violent"
      ]
    },
    {
      "id": 2574,
      "hanzi": "暴露",
      "pinyin": "bào lù",
      "translations": [
        "to expose",
        "to reveal",
        "to lay bare",
        "also pr. [pù lù]"
      ]
    },
    {
      "id": 2575,
      "hanzi": "悲哀",
      "pinyin": "bēi āi",
      "translations": [
        "grieved",
        "sorrowful"
      ]
    },
    {
      "id": 2576,
      "hanzi": "悲惨",
      "pinyin": "bēi cǎn",
      "translations": [
        "miserable",
        "tragic"
      ]
    },
    {
      "id": 2577,
      "hanzi": "卑鄙",
      "pinyin": "bēi bǐ",
      "translations": [
        "base",
        "mean",
        "contemptible",
        "despicable"
      ]
    },
    {
      "id": 2578,
      "hanzi": "北极",
      "pinyin": "běi jí",
      "translations": [
        "the North Pole",
        "the Arctic Pole",
        "the north magnetic pole"
      ]
    },
    {
      "id": 2579,
      "hanzi": "被动",
      "pinyin": "bèi dòng",
      "translations": [
        "passive"
      ]
    },
    {
      "id": 2580,
      "hanzi": "被告",
      "pinyin": "bèi gào",
      "translations": [
        "defendant"
      ]
    },
    {
      "id": 2581,
      "hanzi": "背叛",
      "pinyin": "bèi pàn",
      "translations": [
        "to betray"
      ]
    },
    {
      "id": 2582,
      "hanzi": "背诵",
      "pinyin": "bèi sòng",
      "translations": [
        "recite",
        "repeat from memory"
      ]
    },
    {
      "id": 2583,
      "hanzi": "备份",
      "pinyin": "bèi fèn",
      "translations": [
        "backup"
      ]
    },
    {
      "id": 2584,
      "hanzi": "备忘录",
      "pinyin": "bèi wàng lù",
      "translations": [
        "memorandum",
        "aide-memoire",
        "memorandum book"
      ]
    },
    {
      "id": 2585,
      "hanzi": "贝壳",
      "pinyin": "bèi ké",
      "translations": [
        "shell",
        "conch",
        "cowry",
        "mother of pearl",
        "hard outer skin",
        "alternative reading",
        "mostly written"
      ]
    },
    {
      "id": 2586,
      "hanzi": "奔波",
      "pinyin": "bēn bō",
      "translations": [
        "to rush about",
        "to be constantly on the move"
      ]
    },
    {
      "id": 2587,
      "hanzi": "奔驰",
      "pinyin": "bēn chí",
      "translations": [
        "to run quickly",
        "to speed",
        "to gallop"
      ]
    },
    {
      "id": 2588,
      "hanzi": "本能",
      "pinyin": "běn néng",
      "translations": [
        "instinct"
      ]
    },
    {
      "id": 2589,
      "hanzi": "本钱",
      "pinyin": "běn qián",
      "translations": [
        "capital"
      ]
    },
    {
      "id": 2590,
      "hanzi": "本人",
      "pinyin": "běn rén",
      "translations": [
        "the person himself",
        "I (humble form used in speeches)",
        "oneself",
        "myself",
        "in person",
        "personal"
      ]
    },
    {
      "id": 2591,
      "hanzi": "本身",
      "pinyin": "běn shēn",
      "translations": [
        "itself",
        "in itself",
        "per se"
      ]
    },
    {
      "id": 2592,
      "hanzi": "本事",
      "pinyin": "běn shi",
      "translations": [
        "ability",
        "skill"
      ]
    },
    {
      "id": 2593,
      "hanzi": "本着",
      "pinyin": "běn zhe",
      "translations": [
        "based on...",
        "in conformance with..",
        "taking as one's main principle"
      ]
    },
    {
      "id": 2594,
      "hanzi": "笨拙",
      "pinyin": "bèn zhuō",
      "translations": [
        "clumsy",
        "awkward",
        "stupid"
      ]
    },
    {
      "id": 2595,
      "hanzi": "崩溃",
      "pinyin": "bēng kuì",
      "translations": [
        "to collapse",
        "to crumble",
        "to fall apart"
      ]
    },
    {
      "id": 2596,
      "hanzi": "甭",
      "pinyin": "béng",
      "translations": [
        "need not",
        "(contraction of 不 and 用)"
      ]
    },
    {
      "id": 2597,
      "hanzi": "蹦",
      "pinyin": "bèng",
      "translations": [
        "to jump",
        "to bounce",
        "to hop"
      ]
    },
    {
      "id": 2598,
      "hanzi": "迸发",
      "pinyin": "bèng fā",
      "translations": [
        "to burst forth"
      ]
    },
    {
      "id": 2599,
      "hanzi": "逼迫",
      "pinyin": "bī pò",
      "translations": [
        "to force",
        "to compel",
        "to coerce"
      ]
    },
    {
      "id": 2600,
      "hanzi": "鼻涕",
      "pinyin": "bí tì",
      "translations": [
        "nasal mucus",
        "snivel"
      ]
    },
    {
      "id": 2601,
      "hanzi": "比方",
      "pinyin": "bǐ fang",
      "translations": [
        "analogy",
        "instance"
      ]
    },
    {
      "id": 2602,
      "hanzi": "比喻",
      "pinyin": "bǐ yù",
      "translations": [
        "to compare",
        "to liken to",
        "metaphor",
        "analogy",
        "figure of speech",
        "figuratively"
      ]
    },
    {
      "id": 2603,
      "hanzi": "比重",
      "pinyin": "bǐ zhòng",
      "translations": [
        "proportion",
        "specific gravity"
      ]
    },
    {
      "id": 2604,
      "hanzi": "臂",
      "pinyin": "bì",
      "translations": [
        "arm"
      ]
    },
    {
      "id": 2605,
      "hanzi": "弊病",
      "pinyin": "bì bìng",
      "translations": [
        "malady",
        "evil",
        "malpractice",
        "drawback",
        "disadvantage"
      ]
    },
    {
      "id": 2606,
      "hanzi": "弊端",
      "pinyin": "bì duān",
      "translations": [
        "malpractice",
        "abuse",
        "corrupt practice"
      ]
    },
    {
      "id": 2607,
      "hanzi": "必定",
      "pinyin": "bì dìng",
      "translations": [
        "be bound to",
        "be sure to"
      ]
    },
    {
      "id": 2608,
      "hanzi": "闭塞",
      "pinyin": "bì sè",
      "translations": [
        "to stop up",
        "to close up",
        "hard to get to",
        "out of the way",
        "inaccessible",
        "unenlightened",
        "blocking"
      ]
    },
    {
      "id": 2609,
      "hanzi": "碧玉",
      "pinyin": "bì yù",
      "translations": [
        "jasper"
      ]
    },
    {
      "id": 2610,
      "hanzi": "鞭策",
      "pinyin": "biān cè",
      "translations": [
        "to spur on",
        "to urge on",
        "to encourage sb (e.g. to make progress)"
      ]
    },
    {
      "id": 2611,
      "hanzi": "编织",
      "pinyin": "biān zhī",
      "translations": [
        "to weave",
        "to knit",
        "to plait",
        "to braid"
      ]
    },
    {
      "id": 2612,
      "hanzi": "边疆",
      "pinyin": "biān jiāng",
      "translations": [
        "border area",
        "borderland",
        "frontier",
        "frontier region"
      ]
    },
    {
      "id": 2613,
      "hanzi": "边界",
      "pinyin": "biān jiè",
      "translations": [
        "boundary",
        "border"
      ]
    },
    {
      "id": 2614,
      "hanzi": "边境",
      "pinyin": "biān jìng",
      "translations": [
        "frontier",
        "border"
      ]
    },
    {
      "id": 2615,
      "hanzi": "边缘",
      "pinyin": "biān yuán",
      "translations": [
        "edge",
        "fringe",
        "verge",
        "brink",
        "periphery",
        "marginal",
        "borderline"
      ]
    },
    {
      "id": 2616,
      "hanzi": "扁",
      "pinyin": "biǎn",
      "translations": [
        "flat",
        "(old form of character 匾, horizontal tablet with inscription)"
      ]
    },
    {
      "id": 2617,
      "hanzi": "贬低",
      "pinyin": "biǎn dī",
      "translations": [
        "to belittle",
        "to disparage",
        "to play down",
        "to demean",
        "to degrade",
        "to devalue"
      ]
    },
    {
      "id": 2618,
      "hanzi": "贬义",
      "pinyin": "biǎn yì",
      "translations": [
        "derogatory sense",
        "negative connotation"
      ]
    },
    {
      "id": 2619,
      "hanzi": "遍布",
      "pinyin": "biàn bù",
      "translations": [
        "to cover the whole (area)",
        "to be found throughout"
      ]
    },
    {
      "id": 2620,
      "hanzi": "便利",
      "pinyin": "biàn lì",
      "translations": [
        "convenient",
        "easy",
        "to facilitate"
      ]
    },
    {
      "id": 2621,
      "hanzi": "便条",
      "pinyin": "biàn tiáo",
      "translations": [
        "(informal) note",
        "CL:張|张",
        "個|个[gè]"
      ]
    },
    {
      "id": 2622,
      "hanzi": "便于",
      "pinyin": "biàn yú",
      "translations": [
        "easy to",
        "convenient for"
      ]
    },
    {
      "id": 2623,
      "hanzi": "变故",
      "pinyin": "biàn gù",
      "translations": [
        "an unforeseen event",
        "accident",
        "misfortune"
      ]
    },
    {
      "id": 2624,
      "hanzi": "变迁",
      "pinyin": "biàn qiān",
      "translations": [
        "changes",
        "vicissitudes"
      ]
    },
    {
      "id": 2625,
      "hanzi": "变质",
      "pinyin": "biàn zhì",
      "translations": [
        "to degenerate",
        "to go bad",
        "to deteriorate",
        "metamorphosis"
      ]
    },
    {
      "id": 2626,
      "hanzi": "辩护",
      "pinyin": "biàn hù",
      "translations": [
        "to speak in defense of",
        "to argue in favor of",
        "to defend",
        "to plead"
      ]
    },
    {
      "id": 2627,
      "hanzi": "辩解",
      "pinyin": "biàn jiě",
      "translations": [
        "to explain",
        "to justify",
        "to defend (a point of view etc)",
        "to provide an explanation",
        "to try to defend oneself"
      ]
    },
    {
      "id": 2628,
      "hanzi": "辩证",
      "pinyin": "biàn zhèng",
      "translations": [
        "to investigate",
        "dialectical"
      ]
    },
    {
      "id": 2629,
      "hanzi": "辨认",
      "pinyin": "biàn rèn",
      "translations": [
        "to recognize",
        "to identify"
      ]
    },
    {
      "id": 2630,
      "hanzi": "辫子",
      "pinyin": "biàn zi",
      "translations": [
        "plait",
        "braid",
        "pigtail",
        "a mistake or shortcoming that may be exploited by an opponent",
        "handle",
        "CL:根",
        "條|条[tiáo]"
      ]
    },
    {
      "id": 2631,
      "hanzi": "标本",
      "pinyin": "biāo běn",
      "translations": [
        "specimen",
        "sample",
        "the root cause and symptoms of a disease"
      ]
    },
    {
      "id": 2632,
      "hanzi": "标记",
      "pinyin": "biāo jì",
      "translations": [
        "sign",
        "mark",
        "symbol",
        "to mark up"
      ]
    },
    {
      "id": 2633,
      "hanzi": "标题",
      "pinyin": "biāo tí",
      "translations": [
        "title",
        "heading",
        "headline",
        "caption",
        "subject"
      ]
    },
    {
      "id": 2634,
      "hanzi": "飙升",
      "pinyin": "biāo shēng",
      "translations": [
        "to rise rapidly",
        "to soar"
      ]
    },
    {
      "id": 2635,
      "hanzi": "表决",
      "pinyin": "biǎo jué",
      "translations": [
        "to decide by vote",
        "to vote"
      ]
    },
    {
      "id": 2636,
      "hanzi": "表态",
      "pinyin": "biǎo tài",
      "translations": [
        "to declare one's position",
        "to say where one stands"
      ]
    },
    {
      "id": 2637,
      "hanzi": "表彰",
      "pinyin": "biǎo zhāng",
      "translations": [
        "to honor",
        "to commend",
        "to cite (in dispatches)"
      ]
    },
    {
      "id": 2638,
      "hanzi": "憋",
      "pinyin": "biē",
      "translations": [
        "to choke",
        "to stifle",
        "to restrain",
        "to hold back",
        "to hold in (urine)",
        "to hold (one's breath)"
      ]
    },
    {
      "id": 2639,
      "hanzi": "别墅",
      "pinyin": "bié shù",
      "translations": [
        "villa",
        "CL:幢",
        "座[zuò]"
      ]
    },
    {
      "id": 2640,
      "hanzi": "别致",
      "pinyin": "bié zhì",
      "translations": [
        "variant of 別緻|别致[bié zhì]"
      ]
    },
    {
      "id": 2641,
      "hanzi": "别扭",
      "pinyin": "biè niu",
      "translations": [
        "awkward",
        "difficult",
        "uncomfortable",
        "not agreeing",
        "at loggerheads",
        "gauche",
        "awkward (writing or speech)"
      ]
    },
    {
      "id": 2642,
      "hanzi": "濒临",
      "pinyin": "bīn lín",
      "translations": [
        "on the verge of",
        "close to"
      ]
    },
    {
      "id": 2643,
      "hanzi": "冰雹",
      "pinyin": "bīng báo",
      "translations": [
        "hail",
        "hailstone",
        "CL:場|场",
        "粒[lì]"
      ]
    },
    {
      "id": 2644,
      "hanzi": "并存",
      "pinyin": "bìng cún",
      "translations": [
        "to exist at the same time",
        "to coexist"
      ]
    },
    {
      "id": 2645,
      "hanzi": "并非",
      "pinyin": "bìng fēi",
      "translations": [
        "really isn't"
      ]
    },
    {
      "id": 2646,
      "hanzi": "并列",
      "pinyin": "bìng liè",
      "translations": [
        "to stand side by side",
        "to be juxtaposed"
      ]
    },
    {
      "id": 2647,
      "hanzi": "拨打",
      "pinyin": "bō dǎ",
      "translations": [
        "to call",
        "to dial"
      ]
    },
    {
      "id": 2648,
      "hanzi": "播放",
      "pinyin": "bō fàng",
      "translations": [
        "to broadcast",
        "to transmit"
      ]
    },
    {
      "id": 2649,
      "hanzi": "播种",
      "pinyin": "bō zhǒng",
      "translations": [
        "to sow seeds",
        "sowing",
        "seed"
      ]
    },
    {
      "id": 2650,
      "hanzi": "波浪",
      "pinyin": "bō làng",
      "translations": [
        "wave"
      ]
    },
    {
      "id": 2651,
      "hanzi": "波涛汹涌",
      "pinyin": "bō tāo xiōng yǒng",
      "translations": [
        "waves surging forth",
        "roaring sea"
      ]
    },
    {
      "id": 2652,
      "hanzi": "剥削",
      "pinyin": "bō xuē",
      "translations": [
        "to exploit",
        "exploitation"
      ]
    },
    {
      "id": 2653,
      "hanzi": "博大精深",
      "pinyin": "bó dà jīng shēn",
      "translations": [
        "wide-ranging and profound",
        "broad and deep"
      ]
    },
    {
      "id": 2654,
      "hanzi": "博览会",
      "pinyin": "bó lǎn huì",
      "translations": [
        "exposition",
        "international fair"
      ]
    },
    {
      "id": 2655,
      "hanzi": "搏斗",
      "pinyin": "bó dòu",
      "translations": [
        "to wrestle",
        "to fight",
        "to struggle"
      ]
    },
    {
      "id": 2656,
      "hanzi": "伯母",
      "pinyin": "bó mǔ",
      "translations": [
        "wife of father's elder brother",
        "aunt",
        "(polite form of address for a woman who is about the age of one's mother)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2657,
      "hanzi": "薄弱",
      "pinyin": "bó ruò",
      "translations": [
        "weak",
        "frail"
      ]
    },
    {
      "id": 2658,
      "hanzi": "不顾",
      "pinyin": "bù gù",
      "translations": [
        "in spite of",
        "regardless of"
      ]
    },
    {
      "id": 2659,
      "hanzi": "不愧",
      "pinyin": "bù kuì",
      "translations": [
        "to be worthy of",
        "to deserve to be called",
        "to prove oneself to be"
      ]
    },
    {
      "id": 2660,
      "hanzi": "不料",
      "pinyin": "bù liào",
      "translations": [
        "unexpectedly",
        "to one's surprise"
      ]
    },
    {
      "id": 2661,
      "hanzi": "不像话",
      "pinyin": "bù xiàng huà",
      "translations": [
        "unreasonable",
        "shocking",
        "outrageous"
      ]
    },
    {
      "id": 2662,
      "hanzi": "不屑一顾",
      "pinyin": "bù xiè yī gù",
      "translations": [
        "to disdain as beneath contempt"
      ]
    },
    {
      "id": 2663,
      "hanzi": "补偿",
      "pinyin": "bǔ cháng",
      "translations": [
        "to compensate",
        "to make up"
      ]
    },
    {
      "id": 2664,
      "hanzi": "补救",
      "pinyin": "bǔ jiù",
      "translations": [
        "to remedy"
      ]
    },
    {
      "id": 2665,
      "hanzi": "补贴",
      "pinyin": "bǔ tiē",
      "translations": [
        "to subsidize",
        "subsidy",
        "allowance"
      ]
    },
    {
      "id": 2666,
      "hanzi": "哺乳",
      "pinyin": "bǔ rǔ",
      "translations": [
        "breast feeding",
        "to suckle",
        "to nurse"
      ]
    },
    {
      "id": 2667,
      "hanzi": "捕捉",
      "pinyin": "bǔ zhuō",
      "translations": [
        "to catch",
        "to seize",
        "to capture"
      ]
    },
    {
      "id": 2668,
      "hanzi": "不得已",
      "pinyin": "bù dé yǐ",
      "translations": [
        "to act against one's will",
        "to have no alternative but to",
        "to have to",
        "to have no choice",
        "must"
      ]
    },
    {
      "id": 2669,
      "hanzi": "不妨",
      "pinyin": "bù fáng",
      "translations": [
        "there is no harm in",
        "might as well"
      ]
    },
    {
      "id": 2670,
      "hanzi": "不敢当",
      "pinyin": "bù gǎn dāng",
      "translations": [
        "lit. I dare not (accept the honor); fig. I don't deserve your praise",
        "you flatter me"
      ]
    },
    {
      "id": 2671,
      "hanzi": "不禁",
      "pinyin": "bù jīn",
      "translations": [
        "can't help (doing sth)",
        "can't refrain from"
      ]
    },
    {
      "id": 2672,
      "hanzi": "不堪",
      "pinyin": "bù kān",
      "translations": [
        "cannot bear",
        "cannot stand",
        "utterly",
        "extremely"
      ]
    },
    {
      "id": 2673,
      "hanzi": "不可思议",
      "pinyin": "bù kě sī yì",
      "translations": [
        "inconceivable (idiom); unimaginable",
        "unfathomable"
      ]
    },
    {
      "id": 2674,
      "hanzi": "不时",
      "pinyin": "bù shí",
      "translations": [
        "from time to time",
        "now and then",
        "occasionally"
      ]
    },
    {
      "id": 2675,
      "hanzi": "不惜",
      "pinyin": "bù xī",
      "translations": [
        "not stint",
        "not spare",
        "not hesitate (to do sth)",
        "not scruple (to do sth)"
      ]
    },
    {
      "id": 2676,
      "hanzi": "不相上下",
      "pinyin": "bù xiāng shàng xià",
      "translations": [
        "equally matched",
        "about the same"
      ]
    },
    {
      "id": 2677,
      "hanzi": "不言而喻",
      "pinyin": "bù yán ér yù",
      "translations": [
        "it goes without saying",
        "it is self-evident"
      ]
    },
    {
      "id": 2678,
      "hanzi": "不由得",
      "pinyin": "bù yóu de",
      "translations": [
        "can't help",
        "cannot but"
      ]
    },
    {
      "id": 2679,
      "hanzi": "不择手段",
      "pinyin": "bù zé shǒu duàn",
      "translations": [
        "by fair means or foul",
        "by hook or by crook",
        "unscrupulously"
      ]
    },
    {
      "id": 2680,
      "hanzi": "不止",
      "pinyin": "bù zhǐ",
      "translations": [
        "incessantly",
        "without end",
        "more than",
        "not limited to"
      ]
    },
    {
      "id": 2681,
      "hanzi": "布告",
      "pinyin": "bù gào",
      "translations": [
        "posting on a bulletin board",
        "notice",
        "bulletin",
        "to announce"
      ]
    },
    {
      "id": 2682,
      "hanzi": "布局",
      "pinyin": "bù jú",
      "translations": [
        "arrangement",
        "composition",
        "layout",
        "opening (chess jargon)"
      ]
    },
    {
      "id": 2683,
      "hanzi": "布置",
      "pinyin": "bù zhì",
      "translations": [
        "to put in order",
        "to arrange",
        "to decorate",
        "to fix up",
        "to deploy"
      ]
    },
    {
      "id": 2684,
      "hanzi": "步伐",
      "pinyin": "bù fá",
      "translations": [
        "pace",
        "(measured) step",
        "march"
      ]
    },
    {
      "id": 2685,
      "hanzi": "部署",
      "pinyin": "bù shǔ",
      "translations": [
        "to dispose",
        "to deploy",
        "deployment"
      ]
    },
    {
      "id": 2686,
      "hanzi": "部位",
      "pinyin": "bù wèi",
      "translations": [
        "position",
        "place"
      ]
    },
    {
      "id": 2687,
      "hanzi": "才干",
      "pinyin": "cái gàn",
      "translations": [
        "ability",
        "competence"
      ]
    },
    {
      "id": 2688,
      "hanzi": "财富",
      "pinyin": "cái fù",
      "translations": [
        "wealth",
        "riches"
      ]
    },
    {
      "id": 2689,
      "hanzi": "财务",
      "pinyin": "cái wù",
      "translations": [
        "financial affairs"
      ]
    },
    {
      "id": 2690,
      "hanzi": "财政",
      "pinyin": "cái zhèng",
      "translations": [
        "finances (public)",
        "financial"
      ]
    },
    {
      "id": 2691,
      "hanzi": "裁缝",
      "pinyin": "cái féng",
      "translations": [
        "tailor",
        "dressmaker"
      ]
    },
    {
      "id": 2692,
      "hanzi": "裁判",
      "pinyin": "cái pàn",
      "translations": [
        "judgment",
        "to referee",
        "umpire",
        "judge",
        "referee",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 2693,
      "hanzi": "裁员",
      "pinyin": "cái yuán",
      "translations": [
        "to cut staff",
        "to lay off employees"
      ]
    },
    {
      "id": 2694,
      "hanzi": "采购",
      "pinyin": "cǎi gòu",
      "translations": [
        "to procure (for an enterprise etc)",
        "to purchase"
      ]
    },
    {
      "id": 2695,
      "hanzi": "采集",
      "pinyin": "cǎi jí",
      "translations": [
        "to gather",
        "to collect",
        "to harvest"
      ]
    },
    {
      "id": 2696,
      "hanzi": "采纳",
      "pinyin": "cǎi nà",
      "translations": [
        "to accept",
        "to adopt"
      ]
    },
    {
      "id": 2697,
      "hanzi": "彩票",
      "pinyin": "cǎi piào",
      "translations": [
        "lottery ticket"
      ]
    },
    {
      "id": 2698,
      "hanzi": "参谋",
      "pinyin": "cān móu",
      "translations": [
        "staff officer",
        "to give advice"
      ]
    },
    {
      "id": 2699,
      "hanzi": "参照",
      "pinyin": "cān zhào",
      "translations": [
        "to consult a reference",
        "to refer to (another document)"
      ]
    },
    {
      "id": 2700,
      "hanzi": "残酷",
      "pinyin": "cán kù",
      "translations": [
        "cruel",
        "cruelty"
      ]
    },
    {
      "id": 2701,
      "hanzi": "残留",
      "pinyin": "cán liú",
      "translations": [
        "to remain",
        "left over",
        "surplus",
        "remnant"
      ]
    },
    {
      "id": 2702,
      "hanzi": "残忍",
      "pinyin": "cán rěn",
      "translations": [
        "cruel",
        "mean",
        "merciless",
        "ruthless"
      ]
    },
    {
      "id": 2703,
      "hanzi": "灿烂",
      "pinyin": "càn làn",
      "translations": [
        "to glitter",
        "brilliant",
        "splendid"
      ]
    },
    {
      "id": 2704,
      "hanzi": "舱",
      "pinyin": "cāng",
      "translations": [
        "cabin",
        "the hold of a ship or airplane"
      ]
    },
    {
      "id": 2705,
      "hanzi": "苍白",
      "pinyin": "cāng bái",
      "translations": [
        "pale",
        "wan"
      ]
    },
    {
      "id": 2706,
      "hanzi": "仓促",
      "pinyin": "cāng cù",
      "translations": [
        "all of a sudden",
        "hurriedly"
      ]
    },
    {
      "id": 2707,
      "hanzi": "仓库",
      "pinyin": "cāng kù",
      "translations": [
        "depot",
        "storehouse",
        "warehouse"
      ]
    },
    {
      "id": 2708,
      "hanzi": "操劳",
      "pinyin": "cāo láo",
      "translations": [
        "to work hard",
        "to look after"
      ]
    },
    {
      "id": 2709,
      "hanzi": "操练",
      "pinyin": "cāo liàn",
      "translations": [
        "drill",
        "practice"
      ]
    },
    {
      "id": 2710,
      "hanzi": "操纵",
      "pinyin": "cāo zòng",
      "translations": [
        "to operate",
        "to control",
        "to rig",
        "to manipulate"
      ]
    },
    {
      "id": 2711,
      "hanzi": "操作",
      "pinyin": "cāo zuò",
      "translations": [
        "to work",
        "to operate",
        "to manipulate"
      ]
    },
    {
      "id": 2712,
      "hanzi": "嘈杂",
      "pinyin": "cáo zá",
      "translations": [
        "noisy",
        "clamorous"
      ]
    },
    {
      "id": 2713,
      "hanzi": "草案",
      "pinyin": "cǎo àn",
      "translations": [
        "draft (legislation, proposal etc)"
      ]
    },
    {
      "id": 2714,
      "hanzi": "草率",
      "pinyin": "cǎo shuài",
      "translations": [
        "careless",
        "negligent",
        "sloppy",
        "not serious"
      ]
    },
    {
      "id": 2715,
      "hanzi": "策划",
      "pinyin": "cè huà",
      "translations": [
        "to plot",
        "to scheme",
        "to bring about",
        "to engineer",
        "planning",
        "producer",
        "planner"
      ]
    },
    {
      "id": 2716,
      "hanzi": "策略",
      "pinyin": "cè lvè",
      "translations": [
        "tactics",
        "to be tactful"
      ]
    },
    {
      "id": 2717,
      "hanzi": "测量",
      "pinyin": "cè liáng",
      "translations": [
        "survey",
        "to measure",
        "to gauge",
        "to determine"
      ]
    },
    {
      "id": 2718,
      "hanzi": "侧面",
      "pinyin": "cè miàn",
      "translations": [
        "lateral side",
        "side",
        "aspect",
        "profile"
      ]
    },
    {
      "id": 2719,
      "hanzi": "层出不穷",
      "pinyin": "céng chū bù qióng",
      "translations": [
        "more and more emerge",
        "innumerable succession",
        "breeding like flies (idiom)"
      ]
    },
    {
      "id": 2720,
      "hanzi": "层次",
      "pinyin": "céng cì",
      "translations": [
        "arrangement of ideas",
        "administrative level",
        "level",
        "stage",
        "phase"
      ]
    },
    {
      "id": 2721,
      "hanzi": "差距",
      "pinyin": "chā jù",
      "translations": [
        "disparity",
        "gap"
      ]
    },
    {
      "id": 2722,
      "hanzi": "查获",
      "pinyin": "chá huò",
      "translations": [
        "to investigate and capture (a criminal)",
        "to ferret out",
        "to hunt down and arrest"
      ]
    },
    {
      "id": 2723,
      "hanzi": "岔",
      "pinyin": "chà",
      "translations": [
        "fork in road",
        "bifurcation",
        "branch in road",
        "river",
        "mountain range etc",
        "to branch off",
        "to turn off",
        "to diverge",
        "to stray (from the path)",
        "to change the subject",
        "to interrupt",
        "to stagger (times)"
      ]
    },
    {
      "id": 2724,
      "hanzi": "刹那",
      "pinyin": "chà nà",
      "translations": [
        "an instant (Sanskrit: ksana)",
        "split second",
        "the twinkling of an eye"
      ]
    },
    {
      "id": 2725,
      "hanzi": "诧异",
      "pinyin": "chà yì",
      "translations": [
        "flabbergasted",
        "astonished"
      ]
    },
    {
      "id": 2726,
      "hanzi": "柴油",
      "pinyin": "chái yóu",
      "translations": [
        "diesel fuel"
      ]
    },
    {
      "id": 2727,
      "hanzi": "搀",
      "pinyin": "chān",
      "translations": [
        "to assist by the arm",
        "to mix",
        "to support",
        "to sustain"
      ]
    },
    {
      "id": 2728,
      "hanzi": "馋",
      "pinyin": "chán",
      "translations": [
        "gluttonous",
        "greedy",
        "to have a craving"
      ]
    },
    {
      "id": 2729,
      "hanzi": "缠绕",
      "pinyin": "chán rào",
      "translations": [
        "twisting",
        "to twine",
        "to wind",
        "to pester",
        "to bother"
      ]
    },
    {
      "id": 2730,
      "hanzi": "产业",
      "pinyin": "chǎn yè",
      "translations": [
        "industry",
        "estate",
        "property",
        "industrial"
      ]
    },
    {
      "id": 2731,
      "hanzi": "阐述",
      "pinyin": "chǎn shù",
      "translations": [
        "to expound (a position)",
        "to elaborate (on a topic)",
        "to treat (a subject)"
      ]
    },
    {
      "id": 2732,
      "hanzi": "颤抖",
      "pinyin": "chàn dǒu",
      "translations": [
        "to shudder",
        "to shiver",
        "to shake",
        "to tremble"
      ]
    },
    {
      "id": 2733,
      "hanzi": "猖狂",
      "pinyin": "chāng kuáng",
      "translations": [
        "savage",
        "furious"
      ]
    },
    {
      "id": 2734,
      "hanzi": "昌盛",
      "pinyin": "chāng shèng",
      "translations": [
        "prosperous"
      ]
    },
    {
      "id": 2735,
      "hanzi": "尝试",
      "pinyin": "cháng shì",
      "translations": [
        "to try",
        "to attempt",
        "CL:次[cì]"
      ]
    },
    {
      "id": 2736,
      "hanzi": "偿还",
      "pinyin": "cháng huán",
      "translations": [
        "to repay",
        "to reimburse"
      ]
    },
    {
      "id": 2737,
      "hanzi": "常年",
      "pinyin": "cháng nián",
      "translations": [
        "all year round",
        "for years on end",
        "average year"
      ]
    },
    {
      "id": 2738,
      "hanzi": "常务",
      "pinyin": "cháng wù",
      "translations": [
        "routine",
        "everyday business",
        "daily operation (of a company)"
      ]
    },
    {
      "id": 2739,
      "hanzi": "场合",
      "pinyin": "chǎng hé",
      "translations": [
        "situation",
        "occasion"
      ]
    },
    {
      "id": 2740,
      "hanzi": "场面",
      "pinyin": "chǎng miàn",
      "translations": [
        "scene",
        "spectacle",
        "occasion",
        "situation"
      ]
    },
    {
      "id": 2741,
      "hanzi": "场所",
      "pinyin": "chǎng suǒ",
      "translations": [
        "location",
        "place"
      ]
    },
    {
      "id": 2742,
      "hanzi": "敞开",
      "pinyin": "chǎng kāi",
      "translations": [
        "to open wide",
        "unrestrictedly"
      ]
    },
    {
      "id": 2743,
      "hanzi": "倡导",
      "pinyin": "chàng dǎo",
      "translations": [
        "to advocate",
        "to initiate",
        "to propose",
        "to be a proponent of (an idea or school of thought)"
      ]
    },
    {
      "id": 2744,
      "hanzi": "倡议",
      "pinyin": "chàng yì",
      "translations": [
        "to suggest",
        "to initiate",
        "proposal",
        "initiative"
      ]
    },
    {
      "id": 2745,
      "hanzi": "畅通",
      "pinyin": "chàng tōng",
      "translations": [
        "unimpeded",
        "free-flowing",
        "straight path",
        "unclogged",
        "move without obstruction"
      ]
    },
    {
      "id": 2746,
      "hanzi": "畅销",
      "pinyin": "chàng xiāo",
      "translations": [
        "to sell well",
        "best seller",
        "chart-topping"
      ]
    },
    {
      "id": 2747,
      "hanzi": "超级",
      "pinyin": "chāo jí",
      "translations": [
        "super-",
        "ultra-",
        "hyper-"
      ]
    },
    {
      "id": 2748,
      "hanzi": "超越",
      "pinyin": "chāo yuè",
      "translations": [
        "to surpass",
        "to exceed",
        "to transcend"
      ]
    },
    {
      "id": 2749,
      "hanzi": "钞票",
      "pinyin": "chāo piào",
      "translations": [
        "paper money",
        "a bill (e.g. 100 yuan)",
        "CL:張|张",
        "扎[zā]"
      ]
    },
    {
      "id": 2750,
      "hanzi": "潮流",
      "pinyin": "cháo liú",
      "translations": [
        "tide",
        "current",
        "trend"
      ]
    },
    {
      "id": 2751,
      "hanzi": "潮湿",
      "pinyin": "cháo shī",
      "translations": [
        "damp",
        "moist"
      ]
    },
    {
      "id": 2752,
      "hanzi": "嘲笑",
      "pinyin": "cháo xiào",
      "translations": [
        "to jeer at",
        "to deride",
        "to ridicule",
        "mockery",
        "derision"
      ]
    },
    {
      "id": 2753,
      "hanzi": "撤退",
      "pinyin": "chè tuì",
      "translations": [
        "to retreat"
      ]
    },
    {
      "id": 2754,
      "hanzi": "撤销",
      "pinyin": "chè xiāo",
      "translations": [
        "to repeal",
        "to revoke",
        "to undo (computing)"
      ]
    },
    {
      "id": 2755,
      "hanzi": "沉淀",
      "pinyin": "chén diàn",
      "translations": [
        "to settle",
        "to precipitate (solid sediment out of a solution)"
      ]
    },
    {
      "id": 2756,
      "hanzi": "沉闷",
      "pinyin": "chén mèn",
      "translations": [
        "oppressive (of weather)",
        "heavy",
        "depressed",
        "not happy"
      ]
    },
    {
      "id": 2757,
      "hanzi": "沉思",
      "pinyin": "chén sī",
      "translations": [
        "to contemplate",
        "to ponder",
        "contemplation",
        "meditation"
      ]
    },
    {
      "id": 2758,
      "hanzi": "沉重",
      "pinyin": "chén zhòng",
      "translations": [
        "heavy",
        "hard",
        "serious",
        "critical"
      ]
    },
    {
      "id": 2759,
      "hanzi": "沉着",
      "pinyin": "chén zhuó",
      "translations": [
        "steady",
        "calm and collected",
        "not nervous"
      ]
    },
    {
      "id": 2760,
      "hanzi": "陈旧",
      "pinyin": "chén jiù",
      "translations": [
        "old-fashioned"
      ]
    },
    {
      "id": 2761,
      "hanzi": "陈列",
      "pinyin": "chén liè",
      "translations": [
        "to display",
        "to exhibit"
      ]
    },
    {
      "id": 2762,
      "hanzi": "陈述",
      "pinyin": "chén shù",
      "translations": [
        "an assertion",
        "to declare",
        "to state"
      ]
    },
    {
      "id": 2763,
      "hanzi": "称心如意",
      "pinyin": "chèn xīn rú yì",
      "translations": [
        "after one's heart (idiom); gratifying and satisfactory",
        "everything one could wish"
      ]
    },
    {
      "id": 2764,
      "hanzi": "称号",
      "pinyin": "chēng hào",
      "translations": [
        "name",
        "term of address",
        "title"
      ]
    },
    {
      "id": 2765,
      "hanzi": "盛",
      "pinyin": "chéng",
      "translations": [
        "to hold",
        "to contain",
        "to ladle",
        "to pick up with a utensil"
      ]
    },
    {
      "id": 2766,
      "hanzi": "橙",
      "pinyin": "chéng",
      "translations": [
        "orange tree",
        "orange (color)"
      ]
    },
    {
      "id": 2767,
      "hanzi": "乘务员",
      "pinyin": "chéng wù yuán",
      "translations": [
        "attendant on an airplane",
        "train",
        "boat etc"
      ]
    },
    {
      "id": 2768,
      "hanzi": "承办",
      "pinyin": "chéng bàn",
      "translations": [
        "to undertake",
        "to accept a contract"
      ]
    },
    {
      "id": 2769,
      "hanzi": "承包",
      "pinyin": "chéng bāo",
      "translations": [
        "to contract",
        "to undertake (a job)"
      ]
    },
    {
      "id": 2770,
      "hanzi": "承诺",
      "pinyin": "chéng nuò",
      "translations": [
        "to promise",
        "to undertake to do something",
        "commitment"
      ]
    },
    {
      "id": 2771,
      "hanzi": "城堡",
      "pinyin": "chéng bǎo",
      "translations": [
        "castle",
        "rook (chess piece)"
      ]
    },
    {
      "id": 2772,
      "hanzi": "成本",
      "pinyin": "chéng běn",
      "translations": [
        "(manufacturing, production etc) costs"
      ]
    },
    {
      "id": 2773,
      "hanzi": "成交",
      "pinyin": "chéng jiāo",
      "translations": [
        "to complete a contract",
        "to reach a deal"
      ]
    },
    {
      "id": 2774,
      "hanzi": "成天",
      "pinyin": "chéng tiān",
      "translations": [
        "(coll.) all day long",
        "all the time"
      ]
    },
    {
      "id": 2775,
      "hanzi": "成效",
      "pinyin": "chéng xiào",
      "translations": [
        "effect",
        "result"
      ]
    },
    {
      "id": 2776,
      "hanzi": "成心",
      "pinyin": "chéng xīn",
      "translations": [
        "intentional",
        "deliberate",
        "on purpose"
      ]
    },
    {
      "id": 2777,
      "hanzi": "成员",
      "pinyin": "chéng yuán",
      "translations": [
        "member"
      ]
    },
    {
      "id": 2778,
      "hanzi": "惩罚",
      "pinyin": "chéng fá",
      "translations": [
        "penalty",
        "punishment",
        "to punish"
      ]
    },
    {
      "id": 2779,
      "hanzi": "诚挚",
      "pinyin": "chéng zhì",
      "translations": [
        "sincere",
        "cordial"
      ]
    },
    {
      "id": 2780,
      "hanzi": "澄清",
      "pinyin": "chéng qīng",
      "translations": [
        "clear (of liquid)",
        "limpid",
        "to clarify",
        "to make sth clear",
        "to be clear (about the facts)"
      ]
    },
    {
      "id": 2781,
      "hanzi": "呈现",
      "pinyin": "chéng xiàn",
      "translations": [
        "to appear",
        "to emerge",
        "to present (a certain appearance)",
        "to demonstrate"
      ]
    },
    {
      "id": 2782,
      "hanzi": "秤",
      "pinyin": "chèng",
      "translations": [
        "steelyard",
        "Roman balance",
        "CL:臺|台[tái]"
      ]
    },
    {
      "id": 2783,
      "hanzi": "吃苦",
      "pinyin": "chī kǔ",
      "translations": [
        "to bear",
        "hardships"
      ]
    },
    {
      "id": 2784,
      "hanzi": "吃力",
      "pinyin": "chī lì",
      "translations": [
        "to entail strenuous effort",
        "to toil at a task",
        "strenuous",
        "laborious",
        "strain"
      ]
    },
    {
      "id": 2785,
      "hanzi": "迟缓",
      "pinyin": "chí huǎn",
      "translations": [
        "slow",
        "sluggish"
      ]
    },
    {
      "id": 2786,
      "hanzi": "迟疑",
      "pinyin": "chí yí",
      "translations": [
        "to hesitate"
      ]
    },
    {
      "id": 2787,
      "hanzi": "持久",
      "pinyin": "chí jiǔ",
      "translations": [
        "lasting",
        "enduring",
        "persistent",
        "permanent",
        "protracted",
        "endurance",
        "persistence",
        "to last long"
      ]
    },
    {
      "id": 2788,
      "hanzi": "池塘",
      "pinyin": "chí táng",
      "translations": [
        "pool",
        "pond"
      ]
    },
    {
      "id": 2789,
      "hanzi": "赤道",
      "pinyin": "chì dào",
      "translations": [
        "equator (of the earth or astronomical body)"
      ]
    },
    {
      "id": 2790,
      "hanzi": "赤字",
      "pinyin": "chì zì",
      "translations": [
        "(financial) deficit",
        "red letter"
      ]
    },
    {
      "id": 2791,
      "hanzi": "冲动",
      "pinyin": "chōng dòng",
      "translations": [
        "to have an urge",
        "to be impetuous",
        "impulse",
        "urge"
      ]
    },
    {
      "id": 2792,
      "hanzi": "冲击",
      "pinyin": "chōng jī",
      "translations": [
        "an attack",
        "under attack",
        "a shock"
      ]
    },
    {
      "id": 2793,
      "hanzi": "冲突",
      "pinyin": "chōng tū",
      "translations": [
        "conflict",
        "to conflict",
        "clash of opposing forces",
        "collision (of interests)",
        "contention"
      ]
    },
    {
      "id": 2794,
      "hanzi": "充当",
      "pinyin": "chōng dāng",
      "translations": [
        "to serve as",
        "to act as",
        "to play the role of"
      ]
    },
    {
      "id": 2795,
      "hanzi": "充沛",
      "pinyin": "chōng pèi",
      "translations": [
        "abundant",
        "plentiful",
        "vigorous"
      ]
    },
    {
      "id": 2796,
      "hanzi": "充实",
      "pinyin": "chōng shí",
      "translations": [
        "rich",
        "full",
        "substantial",
        "to enrich",
        "to augment",
        "to substantiate (an argument)"
      ]
    },
    {
      "id": 2797,
      "hanzi": "充足",
      "pinyin": "chōng zú",
      "translations": [
        "adequate",
        "sufficient",
        "abundant"
      ]
    },
    {
      "id": 2798,
      "hanzi": "崇拜",
      "pinyin": "chóng bài",
      "translations": [
        "to worship",
        "adoration"
      ]
    },
    {
      "id": 2799,
      "hanzi": "崇高",
      "pinyin": "chóng gāo",
      "translations": [
        "majestic",
        "sublime"
      ]
    },
    {
      "id": 2800,
      "hanzi": "崇敬",
      "pinyin": "chóng jìng",
      "translations": [
        "to revere",
        "high esteem"
      ]
    },
    {
      "id": 2801,
      "hanzi": "重叠",
      "pinyin": "chóng dié",
      "translations": [
        "to overlap",
        "to superimpose",
        "to telescope",
        "to run together",
        "to duplicate",
        "one over another",
        "superposition",
        "an overlap",
        "redundancy",
        "reduplication (in Chinese grammar, e.g. 散散步 to have a stroll)"
      ]
    },
    {
      "id": 2802,
      "hanzi": "重阳节",
      "pinyin": "Chóng yáng jié",
      "translations": [
        "Double Ninth or Yang Festival",
        "9th day of 9th lunar month"
      ]
    },
    {
      "id": 2803,
      "hanzi": "抽空",
      "pinyin": "chōu kòng",
      "translations": [
        "to find the time to do sth"
      ]
    },
    {
      "id": 2804,
      "hanzi": "筹备",
      "pinyin": "chóu bèi",
      "translations": [
        "preparations",
        "to get ready for sth"
      ]
    },
    {
      "id": 2805,
      "hanzi": "踌躇",
      "pinyin": "chóu chú",
      "translations": [
        "to hesitate"
      ]
    },
    {
      "id": 2806,
      "hanzi": "稠密",
      "pinyin": "chóu mì",
      "translations": [
        "dense"
      ]
    },
    {
      "id": 2807,
      "hanzi": "丑恶",
      "pinyin": "chǒu è",
      "translations": [
        "ugly",
        "repulsive"
      ]
    },
    {
      "id": 2808,
      "hanzi": "出路",
      "pinyin": "chū lù",
      "translations": [
        "a way out (of a difficulty etc)"
      ]
    },
    {
      "id": 2809,
      "hanzi": "出卖",
      "pinyin": "chū mài",
      "translations": [
        "to offer for sale",
        "to sell",
        "to sell out or betray"
      ]
    },
    {
      "id": 2810,
      "hanzi": "出身",
      "pinyin": "chū shēn",
      "translations": [
        "to be born of",
        "to come from",
        "family background",
        "class origin"
      ]
    },
    {
      "id": 2811,
      "hanzi": "出神",
      "pinyin": "chū shén",
      "translations": [
        "entranced",
        "Trance (music genre)"
      ]
    },
    {
      "id": 2812,
      "hanzi": "出息",
      "pinyin": "chū xi",
      "translations": [
        "future prospects",
        "profit",
        "to mature",
        "to grow up"
      ]
    },
    {
      "id": 2813,
      "hanzi": "出洋相",
      "pinyin": "chū yáng xiàng",
      "translations": [
        "to make a fool of oneself"
      ]
    },
    {
      "id": 2814,
      "hanzi": "初步",
      "pinyin": "chū bù",
      "translations": [
        "initial",
        "preliminary",
        "tentative"
      ]
    },
    {
      "id": 2815,
      "hanzi": "储备",
      "pinyin": "chǔ bèi",
      "translations": [
        "reserves",
        "to store up"
      ]
    },
    {
      "id": 2816,
      "hanzi": "储存",
      "pinyin": "chǔ cún",
      "translations": [
        "stockpile",
        "to store",
        "to stockpile",
        "storage"
      ]
    },
    {
      "id": 2817,
      "hanzi": "储蓄",
      "pinyin": "chǔ xù",
      "translations": [
        "to deposit money",
        "to save",
        "savings"
      ]
    },
    {
      "id": 2818,
      "hanzi": "处分",
      "pinyin": "chǔ fèn",
      "translations": [
        "to discipline sb",
        "to punish",
        "disciplinary action",
        "to deal with (a matter)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2819,
      "hanzi": "处境",
      "pinyin": "chǔ jìng",
      "translations": [
        "plight",
        "unfavorable situation"
      ]
    },
    {
      "id": 2820,
      "hanzi": "处置",
      "pinyin": "chǔ zhì",
      "translations": [
        "to handle",
        "to take care of",
        "to punish"
      ]
    },
    {
      "id": 2821,
      "hanzi": "触犯",
      "pinyin": "chù fàn",
      "translations": [
        "to offend"
      ]
    },
    {
      "id": 2822,
      "hanzi": "穿越",
      "pinyin": "chuān yuè",
      "translations": [
        "to pass through",
        "to cross",
        "to overcome"
      ]
    },
    {
      "id": 2823,
      "hanzi": "川流不息",
      "pinyin": "chuān liú bù xī",
      "translations": [
        "the stream flows without stopping (idiom); unending flow"
      ]
    },
    {
      "id": 2824,
      "hanzi": "船舶",
      "pinyin": "chuán bó",
      "translations": [
        "shipping",
        "boats"
      ]
    },
    {
      "id": 2825,
      "hanzi": "传达",
      "pinyin": "chuán dá",
      "translations": [
        "to pass on",
        "to convey",
        "to relay",
        "to transmit",
        "transmission"
      ]
    },
    {
      "id": 2826,
      "hanzi": "传单",
      "pinyin": "chuán dān",
      "translations": [
        "leaflet",
        "flier",
        "pamphlet"
      ]
    },
    {
      "id": 2827,
      "hanzi": "传授",
      "pinyin": "chuán shòu",
      "translations": [
        "to impart",
        "to pass on",
        "to teach"
      ]
    },
    {
      "id": 2828,
      "hanzi": "喘气",
      "pinyin": "chuǎn qì",
      "translations": [
        "to breathe deeply",
        "to pant"
      ]
    },
    {
      "id": 2829,
      "hanzi": "串",
      "pinyin": "chuàn",
      "translations": [
        "to string together",
        "to mix up",
        "to conspire",
        "to rove",
        "to make a swift or abrupt linear movement (like a bead on an abacus)",
        "to move across",
        "bunch or cluster",
        "string (computing)",
        "classifier for rows or strings"
      ]
    },
    {
      "id": 2830,
      "hanzi": "床单",
      "pinyin": "chuáng dān",
      "translations": [
        "bed sheet",
        "CL:條|条",
        "件",
        "張|张",
        "床[chuáng]"
      ]
    },
    {
      "id": 2831,
      "hanzi": "创立",
      "pinyin": "chuàng lì",
      "translations": [
        "to establish",
        "to set up",
        "to found"
      ]
    },
    {
      "id": 2832,
      "hanzi": "创新",
      "pinyin": "chuàng xīn",
      "translations": [
        "innovation",
        "to bring forth new ideas",
        "to blaze new trails"
      ]
    },
    {
      "id": 2833,
      "hanzi": "创业",
      "pinyin": "chuàng yè",
      "translations": [
        "to begin an undertaking",
        "to start a major task",
        "to initiate",
        "to venture",
        "venture",
        "entrepreneurship"
      ]
    },
    {
      "id": 2834,
      "hanzi": "创作",
      "pinyin": "chuàng zuò",
      "translations": [
        "to create",
        "to produce",
        "to write",
        "creative work",
        "creation",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2835,
      "hanzi": "吹牛",
      "pinyin": "chuī niú",
      "translations": [
        "to talk big",
        "to shoot off one's mouth",
        "to chat (dialect)"
      ]
    },
    {
      "id": 2836,
      "hanzi": "吹捧",
      "pinyin": "chuī pěng",
      "translations": [
        "to flatter",
        "to laud sb's accomplishments",
        "adulation"
      ]
    },
    {
      "id": 2837,
      "hanzi": "锤",
      "pinyin": "chuí",
      "translations": [
        "hammer",
        "to hammer into shape",
        "weight (e.g. of a steelyard or balance)"
      ]
    },
    {
      "id": 2838,
      "hanzi": "垂直",
      "pinyin": "chuí zhí",
      "translations": [
        "perpendicular",
        "vertical"
      ]
    },
    {
      "id": 2839,
      "hanzi": "纯粹",
      "pinyin": "chún cuì",
      "translations": [
        "purely"
      ]
    },
    {
      "id": 2840,
      "hanzi": "纯洁",
      "pinyin": "chún jié",
      "translations": [
        "pure",
        "clean and honest",
        "to purify"
      ]
    },
    {
      "id": 2841,
      "hanzi": "词汇",
      "pinyin": "cí huì",
      "translations": [
        "vocabulary",
        "list of words (e.g. for language teaching purposes)"
      ]
    },
    {
      "id": 2842,
      "hanzi": "慈祥",
      "pinyin": "cí xiáng",
      "translations": [
        "kindly",
        "benevolent (often of older person)"
      ]
    },
    {
      "id": 2843,
      "hanzi": "雌雄",
      "pinyin": "cí xióng",
      "translations": [
        "male and female"
      ]
    },
    {
      "id": 2844,
      "hanzi": "刺",
      "pinyin": "cì",
      "translations": [
        "thorn",
        "sting",
        "thrust",
        "to prick",
        "to pierce",
        "to stab",
        "to assassinate",
        "to murder"
      ]
    },
    {
      "id": 2845,
      "hanzi": "次品",
      "pinyin": "cì pǐn",
      "translations": [
        "substandard products",
        "defective",
        "seconds"
      ]
    },
    {
      "id": 2846,
      "hanzi": "次序",
      "pinyin": "cì xù",
      "translations": [
        "sequence",
        "order"
      ]
    },
    {
      "id": 2847,
      "hanzi": "伺候",
      "pinyin": "cì hòu",
      "translations": [
        "to serve",
        "to wait upon"
      ]
    },
    {
      "id": 2848,
      "hanzi": "丛",
      "pinyin": "cóng",
      "translations": [
        "cluster",
        "collection",
        "collection of books",
        "thicket"
      ]
    },
    {
      "id": 2849,
      "hanzi": "从容不迫",
      "pinyin": "cóng róng bù pò",
      "translations": [
        "calm",
        "unruffled"
      ]
    },
    {
      "id": 2850,
      "hanzi": "凑合",
      "pinyin": "còu he",
      "translations": [
        "to bring together",
        "to make do in a bad situation",
        "to just get by",
        "to improvise",
        "passable",
        "not too bad"
      ]
    },
    {
      "id": 2851,
      "hanzi": "粗鲁",
      "pinyin": "cū lǔ",
      "translations": [
        "crude",
        "coarse",
        "rough"
      ]
    },
    {
      "id": 2852,
      "hanzi": "窜",
      "pinyin": "cuàn",
      "translations": [
        "to flee",
        "to scuttle",
        "to exile or banish",
        "to amend or edit"
      ]
    },
    {
      "id": 2853,
      "hanzi": "摧残",
      "pinyin": "cuī cán",
      "translations": [
        "to ravage",
        "to ruin"
      ]
    },
    {
      "id": 2854,
      "hanzi": "脆弱",
      "pinyin": "cuì ruò",
      "translations": [
        "weak",
        "frail"
      ]
    },
    {
      "id": 2855,
      "hanzi": "搓",
      "pinyin": "cuō",
      "translations": [
        "to rub or roll between the hands or fingers",
        "to twist"
      ]
    },
    {
      "id": 2856,
      "hanzi": "磋商",
      "pinyin": "cuō shāng",
      "translations": [
        "to consult",
        "to discuss seriously",
        "to negotiate",
        "to confer",
        "negotiations",
        "consultations"
      ]
    },
    {
      "id": 2857,
      "hanzi": "挫折",
      "pinyin": "cuò zhé",
      "translations": [
        "setback",
        "reverse",
        "check",
        "defeat",
        "frustration",
        "disappointment",
        "to frustrate",
        "to discourage",
        "to set sb back",
        "to blunt",
        "to subdue"
      ]
    },
    {
      "id": 2858,
      "hanzi": "搭",
      "pinyin": "dā",
      "translations": [
        "to put up",
        "to build (scaffolding)",
        "to hang (clothes on a pole)",
        "to connect",
        "to join",
        "to arrange in pairs",
        "to match",
        "to add",
        "to throw in (resources)",
        "to take (boat, train)"
      ]
    },
    {
      "id": 2859,
      "hanzi": "搭档",
      "pinyin": "dā dàng",
      "translations": [
        "to cooperate",
        "partner"
      ]
    },
    {
      "id": 2860,
      "hanzi": "搭配",
      "pinyin": "dā pèi",
      "translations": [
        "to pair up",
        "to match",
        "to arrange in pairs",
        "to add sth into a group"
      ]
    },
    {
      "id": 2861,
      "hanzi": "答辩",
      "pinyin": "dá biàn",
      "translations": [
        "to reply (to an accusation)",
        "to defend one's dissertation"
      ]
    },
    {
      "id": 2862,
      "hanzi": "答复",
      "pinyin": "dá fù",
      "translations": [
        "to answer",
        "to reply",
        "Reply to: (in email header)"
      ]
    },
    {
      "id": 2863,
      "hanzi": "达成",
      "pinyin": "dá chéng",
      "translations": [
        "to reach (an agreement)",
        "to accomplish"
      ]
    },
    {
      "id": 2864,
      "hanzi": "打包",
      "pinyin": "dǎ bāo",
      "translations": [
        "to wrap",
        "to pack",
        "to ask for a doggy bag (at a restaurant)"
      ]
    },
    {
      "id": 2865,
      "hanzi": "打官司",
      "pinyin": "dǎ guān si",
      "translations": [
        "to file a lawsuit",
        "to sue",
        "to dispute"
      ]
    },
    {
      "id": 2866,
      "hanzi": "打击",
      "pinyin": "dǎ jī",
      "translations": [
        "to hit",
        "to strike",
        "to attack",
        "to crack down on sth",
        "a setback",
        "a blow",
        "percussion (music)"
      ]
    },
    {
      "id": 2867,
      "hanzi": "打架",
      "pinyin": "dǎ jià",
      "translations": [
        "to fight",
        "to scuffle",
        "to come to blows",
        "CL:場|场[cháng]"
      ]
    },
    {
      "id": 2868,
      "hanzi": "打量",
      "pinyin": "dǎ liang",
      "translations": [
        "to size sb up",
        "to take measure of",
        "to suppose",
        "to reckon"
      ]
    },
    {
      "id": 2869,
      "hanzi": "打猎",
      "pinyin": "dǎ liè",
      "translations": [
        "to go hunting"
      ]
    },
    {
      "id": 2870,
      "hanzi": "打仗",
      "pinyin": "dǎ zhàng",
      "translations": [
        "to fight a battle",
        "to go to war"
      ]
    },
    {
      "id": 2871,
      "hanzi": "大不了",
      "pinyin": "dà bù liǎo",
      "translations": [
        "at worst",
        "if worst comes to worst",
        "serious",
        "alarming"
      ]
    },
    {
      "id": 2872,
      "hanzi": "大臣",
      "pinyin": "dà chén",
      "translations": [
        "chancellor (of a monarchy)",
        "cabinet minister"
      ]
    },
    {
      "id": 2873,
      "hanzi": "大伙儿",
      "pinyin": "dà huǒ r",
      "translations": [
        "erhua variant of 大伙[dà huǒ]"
      ]
    },
    {
      "id": 2874,
      "hanzi": "大厦",
      "pinyin": "dà shà",
      "translations": [
        "large building",
        "edifice",
        "mansion",
        "CL:座[zuò]"
      ]
    },
    {
      "id": 2875,
      "hanzi": "大肆",
      "pinyin": "dà sì",
      "translations": [
        "wantonly",
        "without restraint (of enemy or malefactor)",
        "unbridled"
      ]
    },
    {
      "id": 2876,
      "hanzi": "大体",
      "pinyin": "dà tǐ",
      "translations": [
        "in general",
        "more or less",
        "in rough terms",
        "basically",
        "on the whole"
      ]
    },
    {
      "id": 2877,
      "hanzi": "大意",
      "pinyin": "dà yi",
      "translations": [
        "careless"
      ]
    },
    {
      "id": 2878,
      "hanzi": "大致",
      "pinyin": "dà zhì",
      "translations": [
        "more or less",
        "roughly",
        "approximately"
      ]
    },
    {
      "id": 2879,
      "hanzi": "歹徒",
      "pinyin": "dǎi tú",
      "translations": [
        "evil-doer",
        "malefactor",
        "gangster",
        "hoodlum"
      ]
    },
    {
      "id": 2880,
      "hanzi": "带领",
      "pinyin": "dài lǐng",
      "translations": [
        "to guide",
        "to lead"
      ]
    },
    {
      "id": 2881,
      "hanzi": "代价",
      "pinyin": "dài jià",
      "translations": [
        "price",
        "cost",
        "consideration (in share dealing)"
      ]
    },
    {
      "id": 2882,
      "hanzi": "代理",
      "pinyin": "dài lǐ",
      "translations": [
        "to act on behalf of sb in a responsible position",
        "to act as an agent or proxy",
        "surrogate"
      ]
    },
    {
      "id": 2883,
      "hanzi": "逮捕",
      "pinyin": "dài bǔ",
      "translations": [
        "to arrest",
        "to apprehend",
        "an arrest"
      ]
    },
    {
      "id": 2884,
      "hanzi": "怠慢",
      "pinyin": "dài màn",
      "translations": [
        "to slight",
        "to neglect"
      ]
    },
    {
      "id": 2885,
      "hanzi": "担保",
      "pinyin": "dān bǎo",
      "translations": [
        "to guarantee",
        "to vouch for"
      ]
    },
    {
      "id": 2886,
      "hanzi": "胆怯",
      "pinyin": "dǎn qiè",
      "translations": [
        "timid",
        "cowardly"
      ]
    },
    {
      "id": 2887,
      "hanzi": "淡季",
      "pinyin": "dàn jì",
      "translations": [
        "off season",
        "slow business season",
        "see also 旺季[wàng jì]"
      ]
    },
    {
      "id": 2888,
      "hanzi": "淡水",
      "pinyin": "dàn shuǐ",
      "translations": [
        "potable water (water with low salt content)",
        "fresh water"
      ]
    },
    {
      "id": 2889,
      "hanzi": "蛋白质",
      "pinyin": "dàn bái zhì",
      "translations": [
        "protein"
      ]
    },
    {
      "id": 2890,
      "hanzi": "诞辰",
      "pinyin": "dàn chén",
      "translations": [
        "birthday"
      ]
    },
    {
      "id": 2891,
      "hanzi": "诞生",
      "pinyin": "dàn shēng",
      "translations": [
        "to be born"
      ]
    },
    {
      "id": 2892,
      "hanzi": "当场",
      "pinyin": "dāng chǎng",
      "translations": [
        "at the scene",
        "on the spot"
      ]
    },
    {
      "id": 2893,
      "hanzi": "当初",
      "pinyin": "dāng chū",
      "translations": [
        "at that time",
        "originally"
      ]
    },
    {
      "id": 2894,
      "hanzi": "当面",
      "pinyin": "dāng miàn",
      "translations": [
        "to sb's face",
        "in sb's presence"
      ]
    },
    {
      "id": 2895,
      "hanzi": "当前",
      "pinyin": "dāng qián",
      "translations": [
        "current",
        "today's",
        "modern",
        "present",
        "to be facing (us)"
      ]
    },
    {
      "id": 2896,
      "hanzi": "当事人",
      "pinyin": "dāng shì rén",
      "translations": [
        "persons involved or implicated",
        "party (to an affair)"
      ]
    },
    {
      "id": 2897,
      "hanzi": "当务之急",
      "pinyin": "dāng wù zhī jí",
      "translations": [
        "top priority job",
        "matter of vital importance"
      ]
    },
    {
      "id": 2898,
      "hanzi": "当心",
      "pinyin": "dāng xīn",
      "translations": [
        "to take care",
        "to look out"
      ]
    },
    {
      "id": 2899,
      "hanzi": "当选",
      "pinyin": "dāng xuǎn",
      "translations": [
        "to be elected"
      ]
    },
    {
      "id": 2900,
      "hanzi": "党",
      "pinyin": "dǎng",
      "translations": [
        "party",
        "association",
        "club",
        "society",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2901,
      "hanzi": "档案",
      "pinyin": "dàng àn",
      "translations": [
        "file",
        "record",
        "archive"
      ]
    },
    {
      "id": 2902,
      "hanzi": "档次",
      "pinyin": "dàng cì",
      "translations": [
        "grade",
        "class",
        "quality",
        "level"
      ]
    },
    {
      "id": 2903,
      "hanzi": "岛屿",
      "pinyin": "dǎo yǔ",
      "translations": [
        "island"
      ]
    },
    {
      "id": 2904,
      "hanzi": "倒闭",
      "pinyin": "dǎo bì",
      "translations": [
        "to go bankrupt",
        "to close down"
      ]
    },
    {
      "id": 2905,
      "hanzi": "导弹",
      "pinyin": "dǎo dàn",
      "translations": [
        "guided missile",
        "cruise missile",
        "missile",
        "CL:枚[méi]"
      ]
    },
    {
      "id": 2906,
      "hanzi": "导航",
      "pinyin": "dǎo háng",
      "translations": [
        "navigation"
      ]
    },
    {
      "id": 2907,
      "hanzi": "导向",
      "pinyin": "dǎo xiàng",
      "translations": [
        "to be oriented towards",
        "orientation"
      ]
    },
    {
      "id": 2908,
      "hanzi": "捣乱",
      "pinyin": "dǎo luàn",
      "translations": [
        "to disturb",
        "to look for trouble",
        "to stir up a row",
        "to bother sb intentionally"
      ]
    },
    {
      "id": 2909,
      "hanzi": "稻谷",
      "pinyin": "dào gǔ",
      "translations": [
        "rice crops"
      ]
    },
    {
      "id": 2910,
      "hanzi": "盗窃",
      "pinyin": "dào qiè",
      "translations": [
        "to steal"
      ]
    },
    {
      "id": 2911,
      "hanzi": "得不偿失",
      "pinyin": "dé bù cháng shī",
      "translations": [
        "(saying) the gains do not make up for the losses"
      ]
    },
    {
      "id": 2912,
      "hanzi": "得力",
      "pinyin": "dé lì",
      "translations": [
        "able",
        "capable",
        "competent",
        "efficient"
      ]
    },
    {
      "id": 2913,
      "hanzi": "得天独厚",
      "pinyin": "dé tiān dú hòu",
      "translations": [
        "(of an area) rich in resources",
        "(of a person) gifted or able (idiom)"
      ]
    },
    {
      "id": 2914,
      "hanzi": "得罪",
      "pinyin": "dé zuì",
      "translations": [
        "to commit an offense",
        "to violate the law",
        "excuse me! (formal)",
        "see also 得罪[dé zui]"
      ]
    },
    {
      "id": 2915,
      "hanzi": "蹬",
      "pinyin": "dēng",
      "translations": [
        "to step on",
        "to tread on",
        "to wear",
        "Taiwan pr. [dèng]"
      ]
    },
    {
      "id": 2916,
      "hanzi": "灯笼",
      "pinyin": "dēng lóng",
      "translations": [
        "lantern"
      ]
    },
    {
      "id": 2917,
      "hanzi": "登陆",
      "pinyin": "dēng lù",
      "translations": [
        "to land",
        "to come ashore",
        "to make landfall (of typhoon etc)",
        "to log in"
      ]
    },
    {
      "id": 2918,
      "hanzi": "登录",
      "pinyin": "dēng lù",
      "translations": [
        "to register",
        "to log in"
      ]
    },
    {
      "id": 2919,
      "hanzi": "等级",
      "pinyin": "děng jí",
      "translations": [
        "grade",
        "rank",
        "status"
      ]
    },
    {
      "id": 2920,
      "hanzi": "瞪",
      "pinyin": "dèng",
      "translations": [
        "to open (one's eyes) wide",
        "to stare at",
        "to glare at"
      ]
    },
    {
      "id": 2921,
      "hanzi": "堤坝",
      "pinyin": "dī bà",
      "translations": [
        "dam"
      ]
    },
    {
      "id": 2922,
      "hanzi": "敌视",
      "pinyin": "dí shì",
      "translations": [
        "hostile",
        "malevolence",
        "antagonism",
        "to view as enemy",
        "to stand against"
      ]
    },
    {
      "id": 2923,
      "hanzi": "抵达",
      "pinyin": "dǐ dá",
      "translations": [
        "to arrive",
        "to reach (a destination)"
      ]
    },
    {
      "id": 2924,
      "hanzi": "抵抗",
      "pinyin": "dǐ kàng",
      "translations": [
        "to resist",
        "resistance"
      ]
    },
    {
      "id": 2925,
      "hanzi": "抵制",
      "pinyin": "dǐ zhì",
      "translations": [
        "to resist",
        "to boycott",
        "to refuse (to cooperate)",
        "to reject",
        "resistance",
        "refusal"
      ]
    },
    {
      "id": 2926,
      "hanzi": "递增",
      "pinyin": "dì zēng",
      "translations": [
        "to increase by degrees",
        "in increasing order",
        "incremental",
        "progressive"
      ]
    },
    {
      "id": 2927,
      "hanzi": "地步",
      "pinyin": "dì bù",
      "translations": [
        "condition",
        "situation",
        "plight",
        "extent",
        "room for action"
      ]
    },
    {
      "id": 2928,
      "hanzi": "地势",
      "pinyin": "dì shì",
      "translations": [
        "terrain",
        "topography relief"
      ]
    },
    {
      "id": 2929,
      "hanzi": "地质",
      "pinyin": "dì zhì",
      "translations": [
        "geology"
      ]
    },
    {
      "id": 2930,
      "hanzi": "颠簸",
      "pinyin": "diān bǒ",
      "translations": [
        "to shake",
        "to jolt",
        "to bump"
      ]
    },
    {
      "id": 2931,
      "hanzi": "颠倒",
      "pinyin": "diān dǎo",
      "translations": [
        "to turn upside-down",
        "to reverse",
        "back-to-front",
        "confused",
        "deranged",
        "crazy"
      ]
    },
    {
      "id": 2932,
      "hanzi": "点缀",
      "pinyin": "diǎn zhuì",
      "translations": [
        "to decorate",
        "to adorn",
        "sprinkled",
        "studded",
        "only for show"
      ]
    },
    {
      "id": 2933,
      "hanzi": "典礼",
      "pinyin": "diǎn lǐ",
      "translations": [
        "celebration",
        "ceremony"
      ]
    },
    {
      "id": 2934,
      "hanzi": "典型",
      "pinyin": "diǎn xíng",
      "translations": [
        "model",
        "typical case",
        "archetype",
        "typical",
        "representative"
      ]
    },
    {
      "id": 2935,
      "hanzi": "垫",
      "pinyin": "diàn",
      "translations": [
        "pad",
        "cushion",
        "mat",
        "to pad out",
        "to fill a gap",
        "to pay for sb",
        "to advance (money)"
      ]
    },
    {
      "id": 2936,
      "hanzi": "电源",
      "pinyin": "diàn yuán",
      "translations": [
        "electric power source"
      ]
    },
    {
      "id": 2937,
      "hanzi": "奠定",
      "pinyin": "diàn dìng",
      "translations": [
        "to establish",
        "to fix",
        "to settle"
      ]
    },
    {
      "id": 2938,
      "hanzi": "惦记",
      "pinyin": "diàn jì",
      "translations": [
        "to think of",
        "to keep thinking about",
        "to be concerned about"
      ]
    },
    {
      "id": 2939,
      "hanzi": "叼",
      "pinyin": "diāo",
      "translations": [
        "to hold in the mouth"
      ]
    },
    {
      "id": 2940,
      "hanzi": "雕刻",
      "pinyin": "diāo kè",
      "translations": [
        "to carve",
        "to engrave",
        "carving"
      ]
    },
    {
      "id": 2941,
      "hanzi": "雕塑",
      "pinyin": "diāo sù",
      "translations": [
        "a statue",
        "a Buddhist image",
        "sculpture",
        "to carve"
      ]
    },
    {
      "id": 2942,
      "hanzi": "吊",
      "pinyin": "diào",
      "translations": [
        "a string of 100 cash (arch.)",
        "to lament",
        "to condole with"
      ]
    },
    {
      "id": 2943,
      "hanzi": "调动",
      "pinyin": "diào dòng",
      "translations": [
        "to transfer",
        "to maneuver (troops etc)",
        "to mobilize",
        "to bring into play"
      ]
    },
    {
      "id": 2944,
      "hanzi": "跌",
      "pinyin": "diē",
      "translations": [
        "to drop",
        "to fall",
        "to tumble",
        "Taiwan pr. [dié]"
      ]
    },
    {
      "id": 2945,
      "hanzi": "盯",
      "pinyin": "dīng",
      "translations": [
        "to watch attentively",
        "to fix attention on",
        "to stare",
        "to gaze",
        "to follow",
        "to shadow sb"
      ]
    },
    {
      "id": 2946,
      "hanzi": "叮嘱",
      "pinyin": "dīng zhǔ",
      "translations": [
        "to warn repeatedly",
        "to urge",
        "to exhort again and again"
      ]
    },
    {
      "id": 2947,
      "hanzi": "定期",
      "pinyin": "dìng qī",
      "translations": [
        "regularly",
        "at regular intervals"
      ]
    },
    {
      "id": 2948,
      "hanzi": "定义",
      "pinyin": "dìng yì",
      "translations": [
        "definition"
      ]
    },
    {
      "id": 2949,
      "hanzi": "丢人",
      "pinyin": "diū rén",
      "translations": [
        "to lose face"
      ]
    },
    {
      "id": 2950,
      "hanzi": "丢三落四",
      "pinyin": "diū sān là sì",
      "translations": [
        "forgetful",
        "empty-headed"
      ]
    },
    {
      "id": 2951,
      "hanzi": "东道主",
      "pinyin": "dōng dào zhǔ",
      "translations": [
        "host",
        "official host (e.g. venue for games or a conference)"
      ]
    },
    {
      "id": 2952,
      "hanzi": "东张西望",
      "pinyin": "dōng zhāng xī wàng",
      "translations": [
        "to look in all directions (idiom)",
        "to glance around"
      ]
    },
    {
      "id": 2953,
      "hanzi": "董事长",
      "pinyin": "dǒng shì zhǎng",
      "translations": [
        "chairman of the board",
        "chairman"
      ]
    },
    {
      "id": 2954,
      "hanzi": "栋",
      "pinyin": "dòng",
      "translations": [
        "classifier for houses or buildings",
        "ridgepole (old)"
      ]
    },
    {
      "id": 2955,
      "hanzi": "冻结",
      "pinyin": "dòng jié",
      "translations": [
        "to freeze (loan, wage, price etc)"
      ]
    },
    {
      "id": 2956,
      "hanzi": "洞穴",
      "pinyin": "dòng xué",
      "translations": [
        "cave",
        "cavern"
      ]
    },
    {
      "id": 2957,
      "hanzi": "动荡",
      "pinyin": "dòng dàng",
      "translations": [
        "unrest (social or political)",
        "turmoil",
        "upheaval",
        "commotion"
      ]
    },
    {
      "id": 2958,
      "hanzi": "动机",
      "pinyin": "dòng jī",
      "translations": [
        "motor",
        "locomotive",
        "motive",
        "motivation",
        "intention"
      ]
    },
    {
      "id": 2959,
      "hanzi": "动静",
      "pinyin": "dòng jìng",
      "translations": [
        "sound of activity or people talking",
        "news of activity"
      ]
    },
    {
      "id": 2960,
      "hanzi": "动力",
      "pinyin": "dòng lì",
      "translations": [
        "power",
        "motion",
        "propulsion",
        "force"
      ]
    },
    {
      "id": 2961,
      "hanzi": "动脉",
      "pinyin": "dòng mài",
      "translations": [
        "artery"
      ]
    },
    {
      "id": 2962,
      "hanzi": "动身",
      "pinyin": "dòng shēn",
      "translations": [
        "to go on a journey",
        "to leave"
      ]
    },
    {
      "id": 2963,
      "hanzi": "动手",
      "pinyin": "dòng shǒu",
      "translations": [
        "to set about (a task)",
        "to hit",
        "to punch",
        "to touch"
      ]
    },
    {
      "id": 2964,
      "hanzi": "动态",
      "pinyin": "dòng tài",
      "translations": [
        "development",
        "trend",
        "dynamic state",
        "movement",
        "moving"
      ]
    },
    {
      "id": 2965,
      "hanzi": "动员",
      "pinyin": "dòng yuán",
      "translations": [
        "to mobilize",
        "to arouse",
        "mobilization",
        "CL:次",
        "個|个[gè]"
      ]
    },
    {
      "id": 2966,
      "hanzi": "兜",
      "pinyin": "dōu",
      "translations": [
        "pocket",
        "bag",
        "to wrap up or hold in a bag",
        "to move in a circle",
        "to canvas or solicit",
        "to take responsibility for",
        "to disclose in detail",
        "combat armor (old)"
      ]
    },
    {
      "id": 2967,
      "hanzi": "陡峭",
      "pinyin": "dǒu qiào",
      "translations": [
        "precipitous"
      ]
    },
    {
      "id": 2968,
      "hanzi": "斗争",
      "pinyin": "dòu zhēng",
      "translations": [
        "a struggle",
        "fight",
        "battle"
      ]
    },
    {
      "id": 2969,
      "hanzi": "督促",
      "pinyin": "dū cù",
      "translations": [
        "to supervise and urge completion of a task",
        "to urge on"
      ]
    },
    {
      "id": 2970,
      "hanzi": "都市",
      "pinyin": "dū shì",
      "translations": [
        "city",
        "metropolis"
      ]
    },
    {
      "id": 2971,
      "hanzi": "独裁",
      "pinyin": "dú cái",
      "translations": [
        "dictatorship"
      ]
    },
    {
      "id": 2972,
      "hanzi": "毒品",
      "pinyin": "dú pǐn",
      "translations": [
        "drugs",
        "narcotics",
        "poison"
      ]
    },
    {
      "id": 2973,
      "hanzi": "赌博",
      "pinyin": "dǔ bó",
      "translations": [
        "to gamble"
      ]
    },
    {
      "id": 2974,
      "hanzi": "堵塞",
      "pinyin": "dǔ sè",
      "translations": [
        "to block",
        "to stop",
        "blockage"
      ]
    },
    {
      "id": 2975,
      "hanzi": "杜绝",
      "pinyin": "dù jué",
      "translations": [
        "to put an end to"
      ]
    },
    {
      "id": 2976,
      "hanzi": "端",
      "pinyin": "duān",
      "translations": [
        "end",
        "extremity",
        "item",
        "port",
        "to hold sth level with both hands",
        "to carry",
        "regular"
      ]
    },
    {
      "id": 2977,
      "hanzi": "端午节",
      "pinyin": "Duān wǔ jié",
      "translations": [
        "the Dragon Boat Festival (5th day of the 5th lunar month)"
      ]
    },
    {
      "id": 2978,
      "hanzi": "端正",
      "pinyin": "duān zhèng",
      "translations": [
        "upright",
        "regular",
        "proper",
        "correct"
      ]
    },
    {
      "id": 2979,
      "hanzi": "短促",
      "pinyin": "duǎn cù",
      "translations": [
        "short in time",
        "fleeting",
        "brief"
      ]
    },
    {
      "id": 2980,
      "hanzi": "断定",
      "pinyin": "duàn dìng",
      "translations": [
        "to conclude",
        "to determine",
        "to come to a judgment"
      ]
    },
    {
      "id": 2981,
      "hanzi": "断断续续",
      "pinyin": "duàn duàn xù xù",
      "translations": [
        "intermittent",
        "off and on",
        "discontinuous",
        "stop-go",
        "stammering",
        "disjointed",
        "inarticulate"
      ]
    },
    {
      "id": 2982,
      "hanzi": "断绝",
      "pinyin": "duàn jué",
      "translations": [
        "to sever",
        "to break off"
      ]
    },
    {
      "id": 2983,
      "hanzi": "堆积",
      "pinyin": "duī jī",
      "translations": [
        "to pile up",
        "to heap",
        "accumulation"
      ]
    },
    {
      "id": 2984,
      "hanzi": "对策",
      "pinyin": "duì cè",
      "translations": [
        "countermeasure for dealing with a situation"
      ]
    },
    {
      "id": 2985,
      "hanzi": "对称",
      "pinyin": "duì chèn",
      "translations": [
        "symmetry",
        "symmetrical"
      ]
    },
    {
      "id": 2986,
      "hanzi": "对付",
      "pinyin": "duì fu",
      "translations": [
        "to handle",
        "to deal with",
        "to cope",
        "to get by with"
      ]
    },
    {
      "id": 2987,
      "hanzi": "对抗",
      "pinyin": "duì kàng",
      "translations": [
        "to withstand",
        "to resist",
        "to stand off",
        "antagonism",
        "confrontation"
      ]
    },
    {
      "id": 2988,
      "hanzi": "对立",
      "pinyin": "duì lì",
      "translations": [
        "to oppose",
        "to set sth against",
        "to be antagonistic to",
        "antithetical",
        "relative opposite",
        "opposing",
        "diametrical"
      ]
    },
    {
      "id": 2989,
      "hanzi": "对联",
      "pinyin": "duì lián",
      "translations": [
        "rhyming couplet",
        "pair of lines of verse written vertically down the sides of a doorway",
        "CL:幅[fú]"
      ]
    },
    {
      "id": 2990,
      "hanzi": "对应",
      "pinyin": "duì yìng",
      "translations": [
        "to correspond",
        "a correspondence",
        "corresponding",
        "homologous",
        "matching with sth",
        "counterpart"
      ]
    },
    {
      "id": 2991,
      "hanzi": "对照",
      "pinyin": "duì zhào",
      "translations": [
        "to contrast",
        "to compare",
        "to place side by side for comparison (as parallel texts)",
        "to check"
      ]
    },
    {
      "id": 2992,
      "hanzi": "兑换",
      "pinyin": "duì huàn",
      "translations": [
        "to convert",
        "to exchange"
      ]
    },
    {
      "id": 2993,
      "hanzi": "兑现",
      "pinyin": "duì xiàn",
      "translations": [
        "(of a cheque etc) to cash",
        "to honor a commitment"
      ]
    },
    {
      "id": 2994,
      "hanzi": "队伍",
      "pinyin": "duì wǔ",
      "translations": [
        "ranks",
        "troops",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 2995,
      "hanzi": "顿时",
      "pinyin": "dùn shí",
      "translations": [
        "immediately",
        "suddenly"
      ]
    },
    {
      "id": 2996,
      "hanzi": "多元化",
      "pinyin": "duō yuán huà",
      "translations": [
        "diversification",
        "pluralism",
        "to diversify"
      ]
    },
    {
      "id": 2997,
      "hanzi": "哆嗦",
      "pinyin": "duō suo",
      "translations": [
        "to tremble",
        "to shiver",
        "uncontrolled shaking of the body"
      ]
    },
    {
      "id": 2998,
      "hanzi": "堕落",
      "pinyin": "duò luò",
      "translations": [
        "to morally degenerate",
        "to become depraved",
        "a fall from grace",
        "a fall into sin or depravity"
      ]
    },
    {
      "id": 2999,
      "hanzi": "额外",
      "pinyin": "é wài",
      "translations": [
        "extra",
        "added",
        "additional"
      ]
    },
    {
      "id": 3000,
      "hanzi": "恶心",
      "pinyin": "è xīn",
      "translations": [
        "bad habit",
        "vicious habit",
        "vice"
      ]
    },
    {
      "id": 3001,
      "hanzi": "恶化",
      "pinyin": "è huà",
      "translations": [
        "to worsen"
      ]
    },
    {
      "id": 3002,
      "hanzi": "遏制",
      "pinyin": "è zhì",
      "translations": [
        "to check",
        "to contain",
        "to hold back",
        "to keep within limits",
        "to constrain",
        "to restrain"
      ]
    },
    {
      "id": 3003,
      "hanzi": "恩怨",
      "pinyin": "ēn yuàn",
      "translations": [
        "(feeling of) resentment",
        "(longstanding) grudge"
      ]
    },
    {
      "id": 3004,
      "hanzi": "而已",
      "pinyin": "ér yǐ",
      "translations": [
        "that's all",
        "nothing more"
      ]
    },
    {
      "id": 3005,
      "hanzi": "耳环",
      "pinyin": "ěr huán",
      "translations": [
        "earring",
        "CL:隻|只",
        "對|对[duì]"
      ]
    },
    {
      "id": 3006,
      "hanzi": "二氧化碳",
      "pinyin": "èr yǎng huà tàn",
      "translations": [
        "carbon dioxide CO2"
      ]
    },
    {
      "id": 3007,
      "hanzi": "发布",
      "pinyin": "fā bù",
      "translations": [
        "to release",
        "to issue",
        "to announce",
        "to distribute"
      ]
    },
    {
      "id": 3008,
      "hanzi": "发财",
      "pinyin": "fā cái",
      "translations": [
        "to get rich"
      ]
    },
    {
      "id": 3009,
      "hanzi": "发呆",
      "pinyin": "fā dāi",
      "translations": [
        "to stare blankly",
        "to be stunned",
        "to be lost in thought"
      ]
    },
    {
      "id": 3010,
      "hanzi": "发动",
      "pinyin": "fā dòng",
      "translations": [
        "to start",
        "to launch",
        "to unleash",
        "to mobilize",
        "to arouse"
      ]
    },
    {
      "id": 3011,
      "hanzi": "发火",
      "pinyin": "fā huǒ",
      "translations": [
        "to catch fire",
        "to ignite",
        "to detonate",
        "to get angry"
      ]
    },
    {
      "id": 3012,
      "hanzi": "发觉",
      "pinyin": "fā jué",
      "translations": [
        "to find",
        "to detect",
        "to discover"
      ]
    },
    {
      "id": 3013,
      "hanzi": "发射",
      "pinyin": "fā shè",
      "translations": [
        "to shoot (a projectile)",
        "to fire (a rocket)",
        "to launch",
        "to emit (a particle)",
        "to discharge",
        "emanation",
        "emission"
      ]
    },
    {
      "id": 3014,
      "hanzi": "发誓",
      "pinyin": "fā shì",
      "translations": [
        "to vow",
        "to pledge",
        "to swear"
      ]
    },
    {
      "id": 3015,
      "hanzi": "发行",
      "pinyin": "fā xíng",
      "translations": [
        "to publish",
        "to issue (stocks, currency etc)",
        "to release",
        "to distribute (a film)"
      ]
    },
    {
      "id": 3016,
      "hanzi": "发炎",
      "pinyin": "fā yán",
      "translations": [
        "to become inflamed",
        "inflammation"
      ]
    },
    {
      "id": 3017,
      "hanzi": "发扬",
      "pinyin": "fā yáng",
      "translations": [
        "to develop",
        "to make full use of"
      ]
    },
    {
      "id": 3018,
      "hanzi": "发育",
      "pinyin": "fā yù",
      "translations": [
        "to develop",
        "growth",
        "development"
      ]
    },
    {
      "id": 3019,
      "hanzi": "法人",
      "pinyin": "fǎ rén",
      "translations": [
        "legal person",
        "corporation",
        "see also 自然人[zì rán rén]"
      ]
    },
    {
      "id": 3020,
      "hanzi": "番",
      "pinyin": "fān",
      "translations": [
        "foreign",
        "ethnic groups from outside China",
        "(when used after a verb) times or fold",
        "classifier for the number of iterations of an action or deed etc"
      ]
    },
    {
      "id": 3021,
      "hanzi": "繁华",
      "pinyin": "fán huá",
      "translations": [
        "flourishing",
        "bustling"
      ]
    },
    {
      "id": 3022,
      "hanzi": "繁忙",
      "pinyin": "fán máng",
      "translations": [
        "busy",
        "bustling"
      ]
    },
    {
      "id": 3023,
      "hanzi": "繁体字",
      "pinyin": "fán tǐ zì",
      "translations": [
        "traditional Chinese character"
      ]
    },
    {
      "id": 3024,
      "hanzi": "繁殖",
      "pinyin": "fán zhí",
      "translations": [
        "to breed",
        "to reproduce",
        "to propagate"
      ]
    },
    {
      "id": 3025,
      "hanzi": "反驳",
      "pinyin": "fǎn bó",
      "translations": [
        "to retort",
        "to refute"
      ]
    },
    {
      "id": 3026,
      "hanzi": "反常",
      "pinyin": "fǎn cháng",
      "translations": [
        "unusual",
        "abnormal"
      ]
    },
    {
      "id": 3027,
      "hanzi": "反倒",
      "pinyin": "fǎn dào",
      "translations": [
        "but on the contrary",
        "but expectedly"
      ]
    },
    {
      "id": 3028,
      "hanzi": "反动",
      "pinyin": "fǎn dòng",
      "translations": [
        "reaction",
        "reactionary"
      ]
    },
    {
      "id": 3029,
      "hanzi": "反感",
      "pinyin": "fǎn gǎn",
      "translations": [
        "to be disgusted with",
        "to dislike",
        "bad reaction",
        "antipathy"
      ]
    },
    {
      "id": 3030,
      "hanzi": "反抗",
      "pinyin": "fǎn kàng",
      "translations": [
        "to resist",
        "to rebel"
      ]
    },
    {
      "id": 3031,
      "hanzi": "反馈",
      "pinyin": "fǎn kuì",
      "translations": [
        "to send back information",
        "feedback"
      ]
    },
    {
      "id": 3032,
      "hanzi": "反面",
      "pinyin": "fǎn miàn",
      "translations": [
        "reverse side",
        "backside",
        "the other side (of a problem etc)",
        "negative",
        "bad"
      ]
    },
    {
      "id": 3033,
      "hanzi": "反射",
      "pinyin": "fǎn shè",
      "translations": [
        "to reflect",
        "reflection (from a mirror etc)",
        "reflex (i.e. automatic reaction of organism)"
      ]
    },
    {
      "id": 3034,
      "hanzi": "反思",
      "pinyin": "fǎn sī",
      "translations": [
        "to think back over sth",
        "to review",
        "to revisit",
        "to rethink",
        "reflection",
        "reassessment"
      ]
    },
    {
      "id": 3035,
      "hanzi": "反问",
      "pinyin": "fǎn wèn",
      "translations": [
        "to ask (a question) in reply",
        "to answer a question with a question",
        "rhetorical question"
      ]
    },
    {
      "id": 3036,
      "hanzi": "反之",
      "pinyin": "fǎn zhī",
      "translations": [
        "on the other hand...",
        "conversely..."
      ]
    },
    {
      "id": 3037,
      "hanzi": "范畴",
      "pinyin": "fàn chóu",
      "translations": [
        "category"
      ]
    },
    {
      "id": 3038,
      "hanzi": "泛滥",
      "pinyin": "fàn làn",
      "translations": [
        "to be in flood",
        "to overflow (the banks)",
        "to inundate",
        "to spread unchecked"
      ]
    },
    {
      "id": 3039,
      "hanzi": "贩卖",
      "pinyin": "fàn mài",
      "translations": [
        "to sell",
        "to peddle",
        "to traffic"
      ]
    },
    {
      "id": 3040,
      "hanzi": "方位",
      "pinyin": "fāng wèi",
      "translations": [
        "direction",
        "points of the compass",
        "bearing",
        "position",
        "azimuth"
      ]
    },
    {
      "id": 3041,
      "hanzi": "方言",
      "pinyin": "fāng yán",
      "translations": [
        "dialect"
      ]
    },
    {
      "id": 3042,
      "hanzi": "方针",
      "pinyin": "fāng zhēn",
      "translations": [
        "policy",
        "guidelines",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3043,
      "hanzi": "防守",
      "pinyin": "fáng shǒu",
      "translations": [
        "to defend",
        "to protect (against)"
      ]
    },
    {
      "id": 3044,
      "hanzi": "防疫",
      "pinyin": "fáng yì",
      "translations": [
        "disease prevention",
        "protection against epidemic"
      ]
    },
    {
      "id": 3045,
      "hanzi": "防御",
      "pinyin": "fáng yù",
      "translations": [
        "defense",
        "to defend"
      ]
    },
    {
      "id": 3046,
      "hanzi": "防止",
      "pinyin": "fáng zhǐ",
      "translations": [
        "to prevent",
        "to guard against",
        "to take precautions"
      ]
    },
    {
      "id": 3047,
      "hanzi": "防治",
      "pinyin": "fáng zhì",
      "translations": [
        "prevention and cure"
      ]
    },
    {
      "id": 3048,
      "hanzi": "纺织",
      "pinyin": "fǎng zhī",
      "translations": [
        "spinning and weaving"
      ]
    },
    {
      "id": 3049,
      "hanzi": "放大",
      "pinyin": "fàng dà",
      "translations": [
        "to enlarge",
        "to magnify"
      ]
    },
    {
      "id": 3050,
      "hanzi": "放射",
      "pinyin": "fàng shè",
      "translations": [
        "to radiate",
        "radioactive"
      ]
    },
    {
      "id": 3051,
      "hanzi": "放手",
      "pinyin": "fàng shǒu",
      "translations": [
        "to let go one's hold",
        "to give up",
        "to have a free hand"
      ]
    },
    {
      "id": 3052,
      "hanzi": "非法",
      "pinyin": "fēi fǎ",
      "translations": [
        "illegal"
      ]
    },
    {
      "id": 3053,
      "hanzi": "飞禽走兽",
      "pinyin": "fēi qín zǒu shòu",
      "translations": [
        "birds and animals",
        "the beasts of the field and the birds of the air"
      ]
    },
    {
      "id": 3054,
      "hanzi": "飞翔",
      "pinyin": "fēi xiáng",
      "translations": [
        "to fly"
      ]
    },
    {
      "id": 3055,
      "hanzi": "飞跃",
      "pinyin": "fēi yuè",
      "translations": [
        "to leap"
      ]
    },
    {
      "id": 3056,
      "hanzi": "肥沃",
      "pinyin": "féi wò",
      "translations": [
        "fertile"
      ]
    },
    {
      "id": 3057,
      "hanzi": "诽谤",
      "pinyin": "fěi bàng",
      "translations": [
        "to slander",
        "to libel"
      ]
    },
    {
      "id": 3058,
      "hanzi": "匪徒",
      "pinyin": "fěi tú",
      "translations": [
        "gangster",
        "bandit"
      ]
    },
    {
      "id": 3059,
      "hanzi": "废除",
      "pinyin": "fèi chú",
      "translations": [
        "to abolish",
        "to abrogate",
        "to repeal"
      ]
    },
    {
      "id": 3060,
      "hanzi": "废墟",
      "pinyin": "fèi xū",
      "translations": [
        "ruins"
      ]
    },
    {
      "id": 3061,
      "hanzi": "沸腾",
      "pinyin": "fèi téng",
      "translations": [
        "boiling",
        "ebullition"
      ]
    },
    {
      "id": 3062,
      "hanzi": "分辨",
      "pinyin": "fēn biàn",
      "translations": [
        "to distinguish",
        "to differentiate",
        "to resolve"
      ]
    },
    {
      "id": 3063,
      "hanzi": "分寸",
      "pinyin": "fēn cùn",
      "translations": [
        "propriety",
        "appropriate behavior",
        "proper speech or action",
        "within the norms"
      ]
    },
    {
      "id": 3064,
      "hanzi": "分红",
      "pinyin": "fēn hóng",
      "translations": [
        "a bonus",
        "to award a bonus"
      ]
    },
    {
      "id": 3065,
      "hanzi": "分解",
      "pinyin": "fēn jiě",
      "translations": [
        "to resolve",
        "to decompose",
        "to break down"
      ]
    },
    {
      "id": 3066,
      "hanzi": "分裂",
      "pinyin": "fēn liè",
      "translations": [
        "to split up",
        "to divide",
        "to break up",
        "fission",
        "schism"
      ]
    },
    {
      "id": 3067,
      "hanzi": "分泌",
      "pinyin": "fēn mì",
      "translations": [
        "to secrete",
        "secretion"
      ]
    },
    {
      "id": 3068,
      "hanzi": "分明",
      "pinyin": "fēn míng",
      "translations": [
        "clearly demarcated",
        "sharply contoured"
      ]
    },
    {
      "id": 3069,
      "hanzi": "分歧",
      "pinyin": "fēn qí",
      "translations": [
        "difference (of opinion, position)",
        "bifurcation"
      ]
    },
    {
      "id": 3070,
      "hanzi": "分散",
      "pinyin": "fēn sàn",
      "translations": [
        "to scatter",
        "to disperse",
        "to distribute"
      ]
    },
    {
      "id": 3071,
      "hanzi": "分手",
      "pinyin": "fēn shǒu",
      "translations": [
        "to split up",
        "to break up"
      ]
    },
    {
      "id": 3072,
      "hanzi": "吩咐",
      "pinyin": "fēn fù",
      "translations": [
        "to tell",
        "to instruct",
        "to command"
      ]
    },
    {
      "id": 3073,
      "hanzi": "坟墓",
      "pinyin": "fén mù",
      "translations": [
        "sepulcher",
        "tomb"
      ]
    },
    {
      "id": 3074,
      "hanzi": "粉末",
      "pinyin": "fěn mò",
      "translations": [
        "fine powder",
        "dust"
      ]
    },
    {
      "id": 3075,
      "hanzi": "粉色",
      "pinyin": "fěn sè",
      "translations": [
        "white",
        "light pink",
        "erotic",
        "beautiful woman",
        "powdered (with make-up)"
      ]
    },
    {
      "id": 3076,
      "hanzi": "粉碎",
      "pinyin": "fěn suì",
      "translations": [
        "to crush",
        "to smash",
        "to shatter"
      ]
    },
    {
      "id": 3077,
      "hanzi": "分量",
      "pinyin": "fèn liang",
      "translations": [
        "quantity",
        "weight",
        "measure"
      ]
    },
    {
      "id": 3078,
      "hanzi": "风暴",
      "pinyin": "fēng bào",
      "translations": [
        "storm",
        "violent commotion",
        "fig. crisis (e.g. revolution, uprising, financial crisis etc)"
      ]
    },
    {
      "id": 3079,
      "hanzi": "风度",
      "pinyin": "fēng dù",
      "translations": [
        "elegance (for men)",
        "elegant demeanor",
        "grace",
        "poise"
      ]
    },
    {
      "id": 3080,
      "hanzi": "风光",
      "pinyin": "fēng guāng",
      "translations": [
        "scene",
        "view",
        "sight",
        "landscape",
        "to be well-regarded",
        "to be well-off",
        "grand (topolect)",
        "impressive (topolect)"
      ]
    },
    {
      "id": 3081,
      "hanzi": "风气",
      "pinyin": "fēng qì",
      "translations": [
        "general mood",
        "atmosphere",
        "common practice"
      ]
    },
    {
      "id": 3082,
      "hanzi": "风趣",
      "pinyin": "fēng qù",
      "translations": [
        "humor",
        "wit",
        "humorous",
        "witty"
      ]
    },
    {
      "id": 3083,
      "hanzi": "风土人情",
      "pinyin": "fēng tǔ rén qíng",
      "translations": [
        "local conditions and customs (idiom)"
      ]
    },
    {
      "id": 3084,
      "hanzi": "风味",
      "pinyin": "fēng wèi",
      "translations": [
        "local flavor",
        "local style"
      ]
    },
    {
      "id": 3085,
      "hanzi": "封闭",
      "pinyin": "fēng bì",
      "translations": [
        "to seal",
        "to close",
        "to confine",
        "to seal off",
        "to close down",
        "sealed",
        "confined",
        "closed",
        "unreceptive"
      ]
    },
    {
      "id": 3086,
      "hanzi": "封建",
      "pinyin": "fēng jiàn",
      "translations": [
        "system of enfeoffment",
        "feudalism",
        "feudal",
        "feudalistic"
      ]
    },
    {
      "id": 3087,
      "hanzi": "封锁",
      "pinyin": "fēng suǒ",
      "translations": [
        "to blockade",
        "to seal off"
      ]
    },
    {
      "id": 3088,
      "hanzi": "丰满",
      "pinyin": "fēng mǎn",
      "translations": [
        "ample",
        "well developed",
        "fully rounded"
      ]
    },
    {
      "id": 3089,
      "hanzi": "丰盛",
      "pinyin": "fēng shèng",
      "translations": [
        "rich",
        "sumptuous"
      ]
    },
    {
      "id": 3090,
      "hanzi": "丰收",
      "pinyin": "fēng shōu",
      "translations": [
        "bumper harvest"
      ]
    },
    {
      "id": 3091,
      "hanzi": "锋利",
      "pinyin": "fēng lì",
      "translations": [
        "sharp (e.g. knife blade)",
        "incisive",
        "to the point"
      ]
    },
    {
      "id": 3092,
      "hanzi": "逢",
      "pinyin": "féng",
      "translations": [
        "to meet by chance",
        "to come across",
        "to fawn upon"
      ]
    },
    {
      "id": 3093,
      "hanzi": "奉献",
      "pinyin": "fèng xiàn",
      "translations": [
        "to consecrate",
        "to dedicate",
        "to devote"
      ]
    },
    {
      "id": 3094,
      "hanzi": "否决",
      "pinyin": "fǒu jué",
      "translations": [
        "veto"
      ]
    },
    {
      "id": 3095,
      "hanzi": "夫妇",
      "pinyin": "fū fù",
      "translations": [
        "a (married) couple",
        "husband and wife",
        "CL:對|对[duì]"
      ]
    },
    {
      "id": 3096,
      "hanzi": "夫人",
      "pinyin": "fū ren",
      "translations": [
        "lady",
        "madam",
        "Mrs.",
        "CL:位[wèi]"
      ]
    },
    {
      "id": 3097,
      "hanzi": "敷衍",
      "pinyin": "fū yǎn",
      "translations": [
        "to elaborate (on a theme)",
        "to expound (the classics)",
        "perfunctory",
        "to skimp",
        "to botch",
        "to do sth half-heartedly or just for show",
        "barely enough to get by"
      ]
    },
    {
      "id": 3098,
      "hanzi": "幅度",
      "pinyin": "fú dù",
      "translations": [
        "width",
        "extent",
        "range",
        "scope"
      ]
    },
    {
      "id": 3099,
      "hanzi": "服气",
      "pinyin": "fú qì",
      "translations": [
        "to be convinced",
        "to accept"
      ]
    },
    {
      "id": 3100,
      "hanzi": "符号",
      "pinyin": "fú hào",
      "translations": [
        "symbol",
        "mark",
        "sign"
      ]
    },
    {
      "id": 3101,
      "hanzi": "福利",
      "pinyin": "fú lì",
      "translations": [
        "(material) welfare",
        "well-being"
      ]
    },
    {
      "id": 3102,
      "hanzi": "福气",
      "pinyin": "fú qi",
      "translations": [
        "good fortune",
        "to enjoy good fortune"
      ]
    },
    {
      "id": 3103,
      "hanzi": "俘虏",
      "pinyin": "fú lǔ",
      "translations": [
        "captive"
      ]
    },
    {
      "id": 3104,
      "hanzi": "辐射",
      "pinyin": "fú shè",
      "translations": [
        "radiation"
      ]
    },
    {
      "id": 3105,
      "hanzi": "腐败",
      "pinyin": "fǔ bài",
      "translations": [
        "corruption",
        "to corrupt",
        "to rot",
        "rotten"
      ]
    },
    {
      "id": 3106,
      "hanzi": "腐烂",
      "pinyin": "fǔ làn",
      "translations": [
        "to rot",
        "to become gangrenous"
      ]
    },
    {
      "id": 3107,
      "hanzi": "腐蚀",
      "pinyin": "fǔ shí",
      "translations": [
        "corrosion",
        "to corrode (degrade chemically)",
        "to rot",
        "corruption"
      ]
    },
    {
      "id": 3108,
      "hanzi": "腐朽",
      "pinyin": "fǔ xiǔ",
      "translations": [
        "rotten",
        "decayed",
        "decadent",
        "degenerate"
      ]
    },
    {
      "id": 3109,
      "hanzi": "辅助",
      "pinyin": "fǔ zhù",
      "translations": [
        "to assist",
        "to aid",
        "supplementary",
        "auxiliary",
        "subsidiary"
      ]
    },
    {
      "id": 3110,
      "hanzi": "抚养",
      "pinyin": "fǔ yǎng",
      "translations": [
        "to foster",
        "to bring up",
        "to raise"
      ]
    },
    {
      "id": 3111,
      "hanzi": "俯仰",
      "pinyin": "fǔ yǎng",
      "translations": [
        "lowering and raising of the head",
        "(fig.) small move",
        "pitch (position angle)"
      ]
    },
    {
      "id": 3112,
      "hanzi": "富裕",
      "pinyin": "fù yù",
      "translations": [
        "prosperous",
        "well-to-do",
        "well-off"
      ]
    },
    {
      "id": 3113,
      "hanzi": "副",
      "pinyin": "fù",
      "translations": [
        "secondary",
        "auxiliary",
        "deputy",
        "assistant",
        "vice-",
        "abbr. for 副詞|副词 adverb",
        "classifier for pairs",
        "sets of things & facial expressions"
      ]
    },
    {
      "id": 3114,
      "hanzi": "副作用",
      "pinyin": "fù zuò yòng",
      "translations": [
        "side effect"
      ]
    },
    {
      "id": 3115,
      "hanzi": "负担",
      "pinyin": "fù dān",
      "translations": [
        "burden",
        "to bear a burden"
      ]
    },
    {
      "id": 3116,
      "hanzi": "覆盖",
      "pinyin": "fù gài",
      "translations": [
        "to cover"
      ]
    },
    {
      "id": 3117,
      "hanzi": "附和",
      "pinyin": "fù hè",
      "translations": [
        "to parrot",
        "to crib",
        "to copy sb's action or words",
        "to trail sb's footsteps",
        "copy-cat"
      ]
    },
    {
      "id": 3118,
      "hanzi": "附件",
      "pinyin": "fù jiàn",
      "translations": [
        "enclosure",
        "attachment (email)",
        "appendix"
      ]
    },
    {
      "id": 3119,
      "hanzi": "附属",
      "pinyin": "fù shǔ",
      "translations": [
        "subsidiary",
        "auxiliary",
        "attached",
        "affiliated",
        "subordinate",
        "subordinating"
      ]
    },
    {
      "id": 3120,
      "hanzi": "复活",
      "pinyin": "fù huó",
      "translations": [
        "resurrection"
      ]
    },
    {
      "id": 3121,
      "hanzi": "复兴",
      "pinyin": "fù xīng",
      "translations": [
        "to revive",
        "to rejuvenate"
      ]
    },
    {
      "id": 3122,
      "hanzi": "腹泻",
      "pinyin": "fù xiè",
      "translations": [
        "diarrhea",
        "to have the runs"
      ]
    },
    {
      "id": 3123,
      "hanzi": "赋予",
      "pinyin": "fù yǔ",
      "translations": [
        "to assign",
        "to entrust (a task)",
        "to give",
        "to bestow"
      ]
    },
    {
      "id": 3124,
      "hanzi": "改良",
      "pinyin": "gǎi liáng",
      "translations": [
        "to improve"
      ]
    },
    {
      "id": 3125,
      "hanzi": "盖章",
      "pinyin": "gài zhāng",
      "translations": [
        "to affix a seal (to sth)"
      ]
    },
    {
      "id": 3126,
      "hanzi": "干旱",
      "pinyin": "gān hàn",
      "translations": [
        "drought",
        "arid",
        "dry"
      ]
    },
    {
      "id": 3127,
      "hanzi": "干扰",
      "pinyin": "gān rǎo",
      "translations": [
        "to interfere",
        "obstruction"
      ]
    },
    {
      "id": 3128,
      "hanzi": "干涉",
      "pinyin": "gān shè",
      "translations": [
        "to interfere",
        "to meddle",
        "interference"
      ]
    },
    {
      "id": 3129,
      "hanzi": "干预",
      "pinyin": "gān yù",
      "translations": [
        "to meddle",
        "to intervene",
        "intervention"
      ]
    },
    {
      "id": 3130,
      "hanzi": "尴尬",
      "pinyin": "gān gà",
      "translations": [
        "awkward",
        "embarrassed"
      ]
    },
    {
      "id": 3131,
      "hanzi": "甘心",
      "pinyin": "gān xīn",
      "translations": [
        "to be willing to",
        "to resign oneself to"
      ]
    },
    {
      "id": 3132,
      "hanzi": "感慨",
      "pinyin": "gǎn kǎi",
      "translations": [
        "to sigh with sorrow",
        "regret etc",
        "rueful",
        "deeply moved"
      ]
    },
    {
      "id": 3133,
      "hanzi": "感染",
      "pinyin": "gǎn rǎn",
      "translations": [
        "infection",
        "to infect",
        "to influence"
      ]
    },
    {
      "id": 3134,
      "hanzi": "干劲",
      "pinyin": "gàn jìn",
      "translations": [
        "enthusiasm for doing sth"
      ]
    },
    {
      "id": 3135,
      "hanzi": "纲领",
      "pinyin": "gāng lǐng",
      "translations": [
        "program",
        "guiding principle"
      ]
    },
    {
      "id": 3136,
      "hanzi": "港口",
      "pinyin": "gǎng kǒu",
      "translations": [
        "port",
        "harbor"
      ]
    },
    {
      "id": 3137,
      "hanzi": "港湾",
      "pinyin": "gǎng wān",
      "translations": [
        "natural harbor",
        "bay serving as harbor"
      ]
    },
    {
      "id": 3138,
      "hanzi": "岗位",
      "pinyin": "gǎng wèi",
      "translations": [
        "a post",
        "a job"
      ]
    },
    {
      "id": 3139,
      "hanzi": "杠杆",
      "pinyin": "gàng gǎn",
      "translations": [
        "lever",
        "pry bar",
        "crowbar",
        "financial leverage"
      ]
    },
    {
      "id": 3140,
      "hanzi": "高超",
      "pinyin": "gāo chāo",
      "translations": [
        "excellent",
        "superlative"
      ]
    },
    {
      "id": 3141,
      "hanzi": "高潮",
      "pinyin": "gāo cháo",
      "translations": [
        "high tide",
        "high water",
        "upsurge",
        "climax",
        "orgasm",
        "chorus (part of a song)"
      ]
    },
    {
      "id": 3142,
      "hanzi": "高峰",
      "pinyin": "gāo fēng",
      "translations": [
        "peak",
        "summit",
        "height"
      ]
    },
    {
      "id": 3143,
      "hanzi": "高考",
      "pinyin": "gāo kǎo",
      "translations": [
        "college entrance exam (abbr. for 普通高等學校招生全國統一考試|普通高等学校招生全国统一考试)",
        "entrance exam for senior government service posts (Taiwan)"
      ]
    },
    {
      "id": 3144,
      "hanzi": "高明",
      "pinyin": "gāo míng",
      "translations": [
        "brilliant",
        "superior",
        "tall and bright"
      ]
    },
    {
      "id": 3145,
      "hanzi": "高尚",
      "pinyin": "gāo shàng",
      "translations": [
        "noble",
        "lofty",
        "refined",
        "exquisite"
      ]
    },
    {
      "id": 3146,
      "hanzi": "高涨",
      "pinyin": "gāo zhǎng",
      "translations": [
        "upsurge",
        "(tensions etc) run high"
      ]
    },
    {
      "id": 3147,
      "hanzi": "稿件",
      "pinyin": "gǎo jiàn",
      "translations": [
        "rough draft",
        "material contributing to a final document"
      ]
    },
    {
      "id": 3148,
      "hanzi": "告辞",
      "pinyin": "gào cí",
      "translations": [
        "to say goodbye",
        "to take one's leave"
      ]
    },
    {
      "id": 3149,
      "hanzi": "告诫",
      "pinyin": "gào jiè",
      "translations": [
        "to warn",
        "to admonish"
      ]
    },
    {
      "id": 3150,
      "hanzi": "割",
      "pinyin": "gē",
      "translations": [
        "to cut",
        "to cut apart"
      ]
    },
    {
      "id": 3151,
      "hanzi": "搁",
      "pinyin": "gē",
      "translations": [
        "to place",
        "to put aside",
        "to shelve"
      ]
    },
    {
      "id": 3152,
      "hanzi": "疙瘩",
      "pinyin": "gē da",
      "translations": [
        "swelling or lump on skin",
        "pimple",
        "knot",
        "preoccupation",
        "problem"
      ]
    },
    {
      "id": 3153,
      "hanzi": "歌颂",
      "pinyin": "gē sòng",
      "translations": [
        "to sing the praises of",
        "to extol",
        "to eulogize"
      ]
    },
    {
      "id": 3154,
      "hanzi": "隔阂",
      "pinyin": "gé hé",
      "translations": [
        "estrangement"
      ]
    },
    {
      "id": 3155,
      "hanzi": "隔离",
      "pinyin": "gé lí",
      "translations": [
        "to separate",
        "to isolate"
      ]
    },
    {
      "id": 3156,
      "hanzi": "格局",
      "pinyin": "gé jú",
      "translations": [
        "structure",
        "pattern",
        "layout"
      ]
    },
    {
      "id": 3157,
      "hanzi": "格式",
      "pinyin": "gé shì",
      "translations": [
        "form",
        "specification",
        "format"
      ]
    },
    {
      "id": 3158,
      "hanzi": "个体",
      "pinyin": "gè tǐ",
      "translations": [
        "individual"
      ]
    },
    {
      "id": 3159,
      "hanzi": "各抒己见",
      "pinyin": "gè shū jǐ jiàn",
      "translations": [
        "everyone gives their own view"
      ]
    },
    {
      "id": 3160,
      "hanzi": "根深蒂固",
      "pinyin": "gēn shēn dì gù",
      "translations": [
        "deep-rooted (problem etc)"
      ]
    },
    {
      "id": 3161,
      "hanzi": "根源",
      "pinyin": "gēn yuán",
      "translations": [
        "origin",
        "root (cause)"
      ]
    },
    {
      "id": 3162,
      "hanzi": "跟前",
      "pinyin": "gēn qián",
      "translations": [
        "in front of",
        "close to",
        "nearby",
        "the time just before"
      ]
    },
    {
      "id": 3163,
      "hanzi": "跟随",
      "pinyin": "gēn suí",
      "translations": [
        "to follow"
      ]
    },
    {
      "id": 3164,
      "hanzi": "跟踪",
      "pinyin": "gēn zōng",
      "translations": [
        "to follow sb's tracks",
        "to tail",
        "to shadow"
      ]
    },
    {
      "id": 3165,
      "hanzi": "耕地",
      "pinyin": "gēng dì",
      "translations": [
        "arable land",
        "to plow land"
      ]
    },
    {
      "id": 3166,
      "hanzi": "更新",
      "pinyin": "gēng xīn",
      "translations": [
        "to replace the old with new",
        "to renew",
        "to renovate",
        "to upgrade",
        "to update",
        "to regenerate"
      ]
    },
    {
      "id": 3167,
      "hanzi": "更正",
      "pinyin": "gēng zhèng",
      "translations": [
        "to correct",
        "to make a correction"
      ]
    },
    {
      "id": 3168,
      "hanzi": "公安局",
      "pinyin": "gōng ān jú",
      "translations": [
        "public security bureau"
      ]
    },
    {
      "id": 3169,
      "hanzi": "公道",
      "pinyin": "gōng dao",
      "translations": [
        "fair",
        "equitable"
      ]
    },
    {
      "id": 3170,
      "hanzi": "公告",
      "pinyin": "gōng gào",
      "translations": [
        "post",
        "announcement"
      ]
    },
    {
      "id": 3171,
      "hanzi": "公关",
      "pinyin": "gōng guān",
      "translations": [
        "public relations"
      ]
    },
    {
      "id": 3172,
      "hanzi": "公民",
      "pinyin": "gōng mín",
      "translations": [
        "citizen"
      ]
    },
    {
      "id": 3173,
      "hanzi": "公婆",
      "pinyin": "gōng pó",
      "translations": [
        "husband's parents",
        "parents-in-law"
      ]
    },
    {
      "id": 3174,
      "hanzi": "公然",
      "pinyin": "gōng rán",
      "translations": [
        "openly",
        "publicly",
        "undisguised"
      ]
    },
    {
      "id": 3175,
      "hanzi": "公认",
      "pinyin": "gōng rèn",
      "translations": [
        "publicly known (to be)",
        "accepted (as)"
      ]
    },
    {
      "id": 3176,
      "hanzi": "公式",
      "pinyin": "gōng shì",
      "translations": [
        "formula"
      ]
    },
    {
      "id": 3177,
      "hanzi": "公务",
      "pinyin": "gōng wù",
      "translations": [
        "official business"
      ]
    },
    {
      "id": 3178,
      "hanzi": "公正",
      "pinyin": "gōng zhèng",
      "translations": [
        "just",
        "fair",
        "equitable"
      ]
    },
    {
      "id": 3179,
      "hanzi": "公证",
      "pinyin": "gōng zhèng",
      "translations": [
        "notarization",
        "notarized",
        "acknowledgement"
      ]
    },
    {
      "id": 3180,
      "hanzi": "供不应求",
      "pinyin": "gōng bù yìng qiú",
      "translations": [
        "supply does not meet demand"
      ]
    },
    {
      "id": 3181,
      "hanzi": "供给",
      "pinyin": "gōng jǐ",
      "translations": [
        "to furnish",
        "to provide",
        "supply (as in supply and demand)"
      ]
    },
    {
      "id": 3182,
      "hanzi": "工夫",
      "pinyin": "gōng fu",
      "translations": [
        "time",
        "spare time",
        "skill",
        "labor",
        "effort"
      ]
    },
    {
      "id": 3183,
      "hanzi": "工艺品",
      "pinyin": "gōng yì pǐn",
      "translations": [
        "handicraft article",
        "handiwork",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3184,
      "hanzi": "宫殿",
      "pinyin": "gōng diàn",
      "translations": [
        "palace",
        "CL:座[zuò]"
      ]
    },
    {
      "id": 3185,
      "hanzi": "功课",
      "pinyin": "gōng kè",
      "translations": [
        "homework",
        "assignment",
        "task",
        "classwork",
        "lesson",
        "study",
        "CL:門|门[mén]"
      ]
    },
    {
      "id": 3186,
      "hanzi": "功劳",
      "pinyin": "gōng láo",
      "translations": [
        "contribution",
        "meritorious service",
        "credit"
      ]
    },
    {
      "id": 3187,
      "hanzi": "功效",
      "pinyin": "gōng xiào",
      "translations": [
        "efficacy"
      ]
    },
    {
      "id": 3188,
      "hanzi": "攻击",
      "pinyin": "gōng jī",
      "translations": [
        "to attack",
        "to accuse",
        "to charge",
        "an attack (terrorist or military)"
      ]
    },
    {
      "id": 3189,
      "hanzi": "攻克",
      "pinyin": "gōng kè",
      "translations": [
        "to capture",
        "to take",
        "to overcome",
        "to solve"
      ]
    },
    {
      "id": 3190,
      "hanzi": "恭敬",
      "pinyin": "gōng jìng",
      "translations": [
        "deferential",
        "respectful"
      ]
    },
    {
      "id": 3191,
      "hanzi": "巩固",
      "pinyin": "gǒng gù",
      "translations": [
        "to consolidate",
        "consolidation",
        "to strengthen"
      ]
    },
    {
      "id": 3192,
      "hanzi": "共和国",
      "pinyin": "gòng hé guó",
      "translations": [
        "republic"
      ]
    },
    {
      "id": 3193,
      "hanzi": "共计",
      "pinyin": "gòng jì",
      "translations": [
        "to sum up to",
        "to total"
      ]
    },
    {
      "id": 3194,
      "hanzi": "共鸣",
      "pinyin": "gòng míng",
      "translations": [
        "resonance (physics)",
        "sympathetic response to sth"
      ]
    },
    {
      "id": 3195,
      "hanzi": "勾结",
      "pinyin": "gōu jié",
      "translations": [
        "to collude with",
        "to collaborate with",
        "to gang up with"
      ]
    },
    {
      "id": 3196,
      "hanzi": "钩子",
      "pinyin": "gōu zi",
      "translations": [
        "hook"
      ]
    },
    {
      "id": 3197,
      "hanzi": "构思",
      "pinyin": "gòu sī",
      "translations": [
        "to design",
        "to plot",
        "to plan out",
        "to compose",
        "to draw a mental sketch",
        "conception",
        "plan",
        "idea",
        "composition"
      ]
    },
    {
      "id": 3198,
      "hanzi": "孤独",
      "pinyin": "gū dú",
      "translations": [
        "lonely",
        "solitary"
      ]
    },
    {
      "id": 3199,
      "hanzi": "孤立",
      "pinyin": "gū lì",
      "translations": [
        "isolate",
        "isolated"
      ]
    },
    {
      "id": 3200,
      "hanzi": "辜负",
      "pinyin": "gū fù",
      "translations": [
        "to fail to live up (to expectations)",
        "unworthy (of trust)",
        "to let down",
        "to betray (hopes)",
        "to disappoint"
      ]
    },
    {
      "id": 3201,
      "hanzi": "姑且",
      "pinyin": "gū qiě",
      "translations": [
        "temporarily",
        "the time being",
        "for the moment",
        "provisional",
        "tentatively"
      ]
    },
    {
      "id": 3202,
      "hanzi": "古董",
      "pinyin": "gǔ dǒng",
      "translations": [
        "curio",
        "antique"
      ]
    },
    {
      "id": 3203,
      "hanzi": "古怪",
      "pinyin": "gǔ guài",
      "translations": [
        "eccentric",
        "grotesque",
        "oddly",
        "queer"
      ]
    },
    {
      "id": 3204,
      "hanzi": "股东",
      "pinyin": "gǔ dōng",
      "translations": [
        "shareholder",
        "stockholder"
      ]
    },
    {
      "id": 3205,
      "hanzi": "股份",
      "pinyin": "gǔ fèn",
      "translations": [
        "a share (in a company)",
        "stock"
      ]
    },
    {
      "id": 3206,
      "hanzi": "鼓动",
      "pinyin": "gǔ dòng",
      "translations": [
        "to agitate",
        "to arouse",
        "to instigate",
        "to encite"
      ]
    },
    {
      "id": 3207,
      "hanzi": "骨干",
      "pinyin": "gǔ gàn",
      "translations": [
        "diaphysis (long segment of a bone)",
        "fig. backbone"
      ]
    },
    {
      "id": 3208,
      "hanzi": "固然",
      "pinyin": "gù rán",
      "translations": [
        "admittedly (it's true that...)"
      ]
    },
    {
      "id": 3209,
      "hanzi": "固有",
      "pinyin": "gù yǒu",
      "translations": [
        "intrinsic to sth",
        "inherent",
        "native"
      ]
    },
    {
      "id": 3210,
      "hanzi": "固执",
      "pinyin": "gù zhí",
      "translations": [
        "obstinate",
        "stubborn"
      ]
    },
    {
      "id": 3211,
      "hanzi": "顾虑",
      "pinyin": "gù lǜ",
      "translations": [
        "misgivings",
        "apprehensions"
      ]
    },
    {
      "id": 3212,
      "hanzi": "顾问",
      "pinyin": "gù wèn",
      "translations": [
        "adviser",
        "consultant"
      ]
    },
    {
      "id": 3213,
      "hanzi": "故乡",
      "pinyin": "gù xiāng",
      "translations": [
        "home",
        "homeland",
        "native place",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3214,
      "hanzi": "故障",
      "pinyin": "gù zhàng",
      "translations": [
        "malfunction",
        "breakdown",
        "defect",
        "shortcoming",
        "fault",
        "failure",
        "impediment",
        "error",
        "bug (in software)"
      ]
    },
    {
      "id": 3215,
      "hanzi": "拐杖",
      "pinyin": "guǎi zhàng",
      "translations": [
        "crutches",
        "crutch",
        "walking stick"
      ]
    },
    {
      "id": 3216,
      "hanzi": "关照",
      "pinyin": "guān zhào",
      "translations": [
        "to take care",
        "to keep an eye on",
        "to look after",
        "to tell",
        "to remind"
      ]
    },
    {
      "id": 3217,
      "hanzi": "官方",
      "pinyin": "guān fāng",
      "translations": [
        "official",
        "(by the) government"
      ]
    },
    {
      "id": 3218,
      "hanzi": "观光",
      "pinyin": "guān guāng",
      "translations": [
        "to tour",
        "sightseeing",
        "tourism"
      ]
    },
    {
      "id": 3219,
      "hanzi": "管辖",
      "pinyin": "guǎn xiá",
      "translations": [
        "to administer",
        "to have jurisdiction (over)"
      ]
    },
    {
      "id": 3220,
      "hanzi": "罐",
      "pinyin": "guàn",
      "translations": [
        "can",
        "jar",
        "pot"
      ]
    },
    {
      "id": 3221,
      "hanzi": "贯彻",
      "pinyin": "guàn chè",
      "translations": [
        "to implement",
        "to put into practice",
        "to carry out"
      ]
    },
    {
      "id": 3222,
      "hanzi": "灌溉",
      "pinyin": "guàn gài",
      "translations": [
        "to irrigate"
      ]
    },
    {
      "id": 3223,
      "hanzi": "惯例",
      "pinyin": "guàn lì",
      "translations": [
        "convention",
        "usual practice"
      ]
    },
    {
      "id": 3224,
      "hanzi": "光彩",
      "pinyin": "guāng cǎi",
      "translations": [
        "luster",
        "splendor",
        "radiance",
        "brilliance"
      ]
    },
    {
      "id": 3225,
      "hanzi": "光辉",
      "pinyin": "guāng huī",
      "translations": [
        "radiance",
        "glory",
        "brilliant",
        "magnificent"
      ]
    },
    {
      "id": 3226,
      "hanzi": "光芒",
      "pinyin": "guāng máng",
      "translations": [
        "rays of light",
        "brilliant rays",
        "radiance"
      ]
    },
    {
      "id": 3227,
      "hanzi": "广阔",
      "pinyin": "guǎng kuò",
      "translations": [
        "wide",
        "vast"
      ]
    },
    {
      "id": 3228,
      "hanzi": "规范",
      "pinyin": "guī fàn",
      "translations": [
        "norm",
        "standard",
        "specification",
        "regulation",
        "rule",
        "within the rules",
        "to fix rules",
        "to regulate",
        "to specify"
      ]
    },
    {
      "id": 3229,
      "hanzi": "规格",
      "pinyin": "guī gé",
      "translations": [
        "standard",
        "norm",
        "specification"
      ]
    },
    {
      "id": 3230,
      "hanzi": "规划",
      "pinyin": "guī huà",
      "translations": [
        "to plan (how to do sth)",
        "planning",
        "plan",
        "program"
      ]
    },
    {
      "id": 3231,
      "hanzi": "规章",
      "pinyin": "guī zhāng",
      "translations": [
        "rule",
        "regulation"
      ]
    },
    {
      "id": 3232,
      "hanzi": "归根到底",
      "pinyin": "guī gēn dào dǐ",
      "translations": [
        "(saying) to sum it up..."
      ]
    },
    {
      "id": 3233,
      "hanzi": "归还",
      "pinyin": "guī huán",
      "translations": [
        "to return sth",
        "to revert"
      ]
    },
    {
      "id": 3234,
      "hanzi": "归纳",
      "pinyin": "guī nà",
      "translations": [
        "to sum up",
        "to summarize",
        "to conclude from facts",
        "induction (method of deduction in logic)"
      ]
    },
    {
      "id": 3235,
      "hanzi": "轨道",
      "pinyin": "guǐ dào",
      "translations": [
        "orbit",
        "railway or tram line",
        "fig. conventional way of thinking"
      ]
    },
    {
      "id": 3236,
      "hanzi": "跪",
      "pinyin": "guì",
      "translations": [
        "to kneel"
      ]
    },
    {
      "id": 3237,
      "hanzi": "贵族",
      "pinyin": "guì zú",
      "translations": [
        "lord",
        "nobility",
        "nobleman",
        "noblewoman",
        "aristocrat",
        "aristocracy"
      ]
    },
    {
      "id": 3238,
      "hanzi": "棍棒",
      "pinyin": "gùn bàng",
      "translations": [
        "club"
      ]
    },
    {
      "id": 3239,
      "hanzi": "国防",
      "pinyin": "guó fáng",
      "translations": [
        "national defense"
      ]
    },
    {
      "id": 3240,
      "hanzi": "国务院",
      "pinyin": "Guó Wù Yuàn",
      "translations": [
        "State Council (PRC)",
        "State Department (USA)"
      ]
    },
    {
      "id": 3241,
      "hanzi": "果断",
      "pinyin": "guǒ duàn",
      "translations": [
        "firm",
        "decisive"
      ]
    },
    {
      "id": 3242,
      "hanzi": "过度",
      "pinyin": "guò dù",
      "translations": [
        "excessive",
        "over-",
        "excess",
        "going too far",
        "extravagant",
        "intemperate",
        "overdue"
      ]
    },
    {
      "id": 3243,
      "hanzi": "过渡",
      "pinyin": "guò dù",
      "translations": [
        "to cross over (by ferry)",
        "transition",
        "interim",
        "caretaker (administration)"
      ]
    },
    {
      "id": 3244,
      "hanzi": "过奖",
      "pinyin": "guò jiǎng",
      "translations": [
        "to over-praise",
        "to flatter"
      ]
    },
    {
      "id": 3245,
      "hanzi": "过滤",
      "pinyin": "guò lǜ",
      "translations": [
        "to filter",
        "filter"
      ]
    },
    {
      "id": 3246,
      "hanzi": "过失",
      "pinyin": "guò shī",
      "translations": [
        "defect",
        "fault"
      ]
    },
    {
      "id": 3247,
      "hanzi": "过问",
      "pinyin": "guò wèn",
      "translations": [
        "to show an interest in",
        "to get involved with"
      ]
    },
    {
      "id": 3248,
      "hanzi": "过瘾",
      "pinyin": "guò yǐn",
      "translations": [
        "to satisfy a craving",
        "to get a kick out of sth",
        "gratifying",
        "immensely enjoyable",
        "satisfying",
        "fulfilling"
      ]
    },
    {
      "id": 3249,
      "hanzi": "过于",
      "pinyin": "guò yú",
      "translations": [
        "too much",
        "excessively"
      ]
    },
    {
      "id": 3250,
      "hanzi": "嗨",
      "pinyin": "hāi",
      "translations": [
        "oh alas",
        "hey!",
        "hi! (loanword)"
      ]
    },
    {
      "id": 3251,
      "hanzi": "海拔",
      "pinyin": "hǎi bá",
      "translations": [
        "height above sea level",
        "elevation"
      ]
    },
    {
      "id": 3252,
      "hanzi": "海滨",
      "pinyin": "hǎi bīn",
      "translations": [
        "shore",
        "seaside"
      ]
    },
    {
      "id": 3253,
      "hanzi": "含糊",
      "pinyin": "hán hú",
      "translations": [
        "obscurity",
        "vague"
      ]
    },
    {
      "id": 3254,
      "hanzi": "含义",
      "pinyin": "hán yì",
      "translations": [
        "meaning (implicit in a phrase)",
        "implied meaning",
        "hidden meaning",
        "hint",
        "connotation"
      ]
    },
    {
      "id": 3255,
      "hanzi": "寒暄",
      "pinyin": "hán xuān",
      "translations": [
        "exchanging conventional greetings",
        "to talk about the weather"
      ]
    },
    {
      "id": 3256,
      "hanzi": "罕见",
      "pinyin": "hǎn jiàn",
      "translations": [
        "rare",
        "rarely seen"
      ]
    },
    {
      "id": 3257,
      "hanzi": "捍卫",
      "pinyin": "hàn wèi",
      "translations": [
        "to defend",
        "to uphold",
        "to safeguard"
      ]
    },
    {
      "id": 3258,
      "hanzi": "航空",
      "pinyin": "háng kōng",
      "translations": [
        "aviation"
      ]
    },
    {
      "id": 3259,
      "hanzi": "航天",
      "pinyin": "háng tiān",
      "translations": [
        "space flight"
      ]
    },
    {
      "id": 3260,
      "hanzi": "航行",
      "pinyin": "háng xíng",
      "translations": [
        "to sail",
        "to fly",
        "to navigate"
      ]
    },
    {
      "id": 3261,
      "hanzi": "行列",
      "pinyin": "háng liè",
      "translations": [
        "procession"
      ]
    },
    {
      "id": 3262,
      "hanzi": "豪迈",
      "pinyin": "háo mài",
      "translations": [
        "bold",
        "open-minded",
        "heroic"
      ]
    },
    {
      "id": 3263,
      "hanzi": "毫米",
      "pinyin": "háo mǐ",
      "translations": [
        "millimeter"
      ]
    },
    {
      "id": 3264,
      "hanzi": "毫无",
      "pinyin": "háo wú",
      "translations": [
        "not in the least",
        "to completely lack"
      ]
    },
    {
      "id": 3265,
      "hanzi": "号召",
      "pinyin": "hào zhào",
      "translations": [
        "to call",
        "to appeal"
      ]
    },
    {
      "id": 3266,
      "hanzi": "耗费",
      "pinyin": "hào fèi",
      "translations": [
        "to waste",
        "to spend",
        "to consume",
        "to squander"
      ]
    },
    {
      "id": 3267,
      "hanzi": "好客",
      "pinyin": "hào kè",
      "translations": [
        "hospitality",
        "to treat guests well",
        "to enjoy having guests",
        "hospitable",
        "friendly"
      ]
    },
    {
      "id": 3268,
      "hanzi": "呵",
      "pinyin": "hē",
      "translations": [
        "expel breath",
        "my goodness"
      ]
    },
    {
      "id": 3269,
      "hanzi": "和蔼",
      "pinyin": "hé ǎi",
      "translations": [
        "kindly",
        "nice",
        "amiable"
      ]
    },
    {
      "id": 3270,
      "hanzi": "和解",
      "pinyin": "hé jiě",
      "translations": [
        "to settle (a dispute out of court)",
        "to reconcile",
        "settlement",
        "conciliation",
        "to become reconciled"
      ]
    },
    {
      "id": 3271,
      "hanzi": "和睦",
      "pinyin": "hé mù",
      "translations": [
        "peaceful relations",
        "harmonious"
      ]
    },
    {
      "id": 3272,
      "hanzi": "和气",
      "pinyin": "hé qi",
      "translations": [
        "friendly",
        "polite",
        "amiable"
      ]
    },
    {
      "id": 3273,
      "hanzi": "和谐",
      "pinyin": "hé xié",
      "translations": [
        "harmonious",
        "harmony"
      ]
    },
    {
      "id": 3274,
      "hanzi": "合并",
      "pinyin": "hé bìng",
      "translations": [
        "to merge",
        "to annex"
      ]
    },
    {
      "id": 3275,
      "hanzi": "合成",
      "pinyin": "hé chéng",
      "translations": [
        "to compose",
        "to constitute",
        "compound",
        "synthesis",
        "mixture",
        "synthetic"
      ]
    },
    {
      "id": 3276,
      "hanzi": "合乎",
      "pinyin": "hé hū",
      "translations": [
        "to accord with",
        "conforming to"
      ]
    },
    {
      "id": 3277,
      "hanzi": "合伙",
      "pinyin": "hé huǒ",
      "translations": [
        "to act jointly",
        "to form a partnership"
      ]
    },
    {
      "id": 3278,
      "hanzi": "合身",
      "pinyin": "hé shēn",
      "translations": [
        "well-fitting (of clothes)"
      ]
    },
    {
      "id": 3279,
      "hanzi": "合算",
      "pinyin": "hé suàn",
      "translations": [
        "worthwhile",
        "be a good deal",
        "be a bargain",
        "reckon up",
        "calculate"
      ]
    },
    {
      "id": 3280,
      "hanzi": "嘿",
      "pinyin": "hēi",
      "translations": [
        "hey"
      ]
    },
    {
      "id": 3281,
      "hanzi": "痕迹",
      "pinyin": "hén jì",
      "translations": [
        "vestige",
        "mark",
        "trace"
      ]
    },
    {
      "id": 3282,
      "hanzi": "狠心",
      "pinyin": "hěn xīn",
      "translations": [
        "callous",
        "heartless"
      ]
    },
    {
      "id": 3283,
      "hanzi": "恨不得",
      "pinyin": "hèn bu dé",
      "translations": [
        "wishing one could do sth",
        "to hate to be unable",
        "itching to do sth",
        "can't wait for",
        "to wish one could do sth",
        "to desire strongly"
      ]
    },
    {
      "id": 3284,
      "hanzi": "哼",
      "pinyin": "hēng",
      "translations": [
        "to groan",
        "to snort",
        "to hum",
        "to croon",
        "humph!"
      ]
    },
    {
      "id": 3285,
      "hanzi": "哄",
      "pinyin": "hōng",
      "translations": [
        "roar of laughter (onomatopoeia)",
        "hubbub",
        "to roar (as a crowd)"
      ]
    },
    {
      "id": 3286,
      "hanzi": "烘",
      "pinyin": "hōng",
      "translations": [
        "to bake",
        "to heat by fire",
        "to set off by contrast"
      ]
    },
    {
      "id": 3287,
      "hanzi": "轰动",
      "pinyin": "hōng dòng",
      "translations": [
        "to cause a sensation"
      ]
    },
    {
      "id": 3288,
      "hanzi": "红包",
      "pinyin": "hóng bāo",
      "translations": [
        "lit. money wrapped in red as a gift",
        "a bonus payment",
        "a kickback",
        "a bribe"
      ]
    },
    {
      "id": 3289,
      "hanzi": "宏观",
      "pinyin": "hóng guān",
      "translations": [
        "macro-",
        "macroscopic",
        "holistic"
      ]
    },
    {
      "id": 3290,
      "hanzi": "宏伟",
      "pinyin": "hóng wěi",
      "translations": [
        "grand",
        "imposing",
        "magnificent"
      ]
    },
    {
      "id": 3291,
      "hanzi": "洪水",
      "pinyin": "hóng shuǐ",
      "translations": [
        "deluge",
        "flood"
      ]
    },
    {
      "id": 3292,
      "hanzi": "喉咙",
      "pinyin": "hóu lóng",
      "translations": [
        "throat",
        "larynx"
      ]
    },
    {
      "id": 3293,
      "hanzi": "吼",
      "pinyin": "hǒu",
      "translations": [
        "roar or howl of an animal",
        "bellow of rage"
      ]
    },
    {
      "id": 3294,
      "hanzi": "后代",
      "pinyin": "hòu dài",
      "translations": [
        "posterity",
        "later periods",
        "later ages",
        "later generations"
      ]
    },
    {
      "id": 3295,
      "hanzi": "后顾之忧",
      "pinyin": "hòu gù zhī yōu",
      "translations": [
        "fears of trouble in the rear (idiom); family worries (obstructing freedom of action)",
        "worries about the future consequences",
        "often in negative expressions",
        "meaning \"no worries about anything\""
      ]
    },
    {
      "id": 3296,
      "hanzi": "后勤",
      "pinyin": "hòu qín",
      "translations": [
        "logistics"
      ]
    },
    {
      "id": 3297,
      "hanzi": "候选",
      "pinyin": "hòu xuǎn",
      "translations": [
        "candidate"
      ]
    },
    {
      "id": 3298,
      "hanzi": "忽略",
      "pinyin": "hū lvè",
      "translations": [
        "to neglect",
        "to overlook",
        "to ignore"
      ]
    },
    {
      "id": 3299,
      "hanzi": "呼啸",
      "pinyin": "hū xiào",
      "translations": [
        "to whistle",
        "to scream",
        "to whiz"
      ]
    },
    {
      "id": 3300,
      "hanzi": "呼吁",
      "pinyin": "hū yù",
      "translations": [
        "to call on (sb to do sth)",
        "to appeal (to)",
        "an appeal"
      ]
    },
    {
      "id": 3301,
      "hanzi": "胡乱",
      "pinyin": "hú luàn",
      "translations": [
        "careless",
        "reckless",
        "casually",
        "absent-mindedly",
        "at will",
        "at random",
        "any old how"
      ]
    },
    {
      "id": 3302,
      "hanzi": "湖泊",
      "pinyin": "hú pō",
      "translations": [
        "lake"
      ]
    },
    {
      "id": 3303,
      "hanzi": "互联网",
      "pinyin": "Hù lián wǎng",
      "translations": [
        "the Internet"
      ]
    },
    {
      "id": 3304,
      "hanzi": "花瓣",
      "pinyin": "huā bàn",
      "translations": [
        "petal",
        "CL:片[piàn]"
      ]
    },
    {
      "id": 3305,
      "hanzi": "华丽",
      "pinyin": "huá lì",
      "translations": [
        "gorgeous"
      ]
    },
    {
      "id": 3306,
      "hanzi": "华侨",
      "pinyin": "huá qiáo",
      "translations": [
        "overseas Chinese",
        "(in a restricted sense) Chinese emigrant who still retains Chinese nationality",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 3307,
      "hanzi": "画蛇添足",
      "pinyin": "huà shé tiān zú",
      "translations": [
        "lit. draw legs on a snake (idiom); fig. to ruin the effect by adding sth superfluous",
        "to overdo it"
      ]
    },
    {
      "id": 3308,
      "hanzi": "化肥",
      "pinyin": "huà féi",
      "translations": [
        "fertilizer"
      ]
    },
    {
      "id": 3309,
      "hanzi": "化石",
      "pinyin": "huà shí",
      "translations": [
        "fossil"
      ]
    },
    {
      "id": 3310,
      "hanzi": "化验",
      "pinyin": "huà yàn",
      "translations": [
        "laboratory test",
        "chemical experiment",
        "assay"
      ]
    },
    {
      "id": 3311,
      "hanzi": "化妆",
      "pinyin": "huà zhuāng",
      "translations": [
        "to put on makeup"
      ]
    },
    {
      "id": 3312,
      "hanzi": "划分",
      "pinyin": "huà fēn",
      "translations": [
        "to divide"
      ]
    },
    {
      "id": 3313,
      "hanzi": "话筒",
      "pinyin": "huà tǒng",
      "translations": [
        "microphone",
        "(telephone) receiver",
        "handset"
      ]
    },
    {
      "id": 3314,
      "hanzi": "怀孕",
      "pinyin": "huái yùn",
      "translations": [
        "pregnant",
        "to have conceived",
        "gestation",
        "pregnancy"
      ]
    },
    {
      "id": 3315,
      "hanzi": "欢乐",
      "pinyin": "huān lè",
      "translations": [
        "gaiety",
        "gladness",
        "glee",
        "merriment",
        "pleasure",
        "happy",
        "joyous",
        "gay"
      ]
    },
    {
      "id": 3316,
      "hanzi": "还原",
      "pinyin": "huán yuán",
      "translations": [
        "to restore to the original state",
        "reduction (chemistry)"
      ]
    },
    {
      "id": 3317,
      "hanzi": "环节",
      "pinyin": "huán jié",
      "translations": [
        "round segment",
        "segment (of annelid worms)",
        "connection",
        "link",
        "sector",
        "annular ring"
      ]
    },
    {
      "id": 3318,
      "hanzi": "缓和",
      "pinyin": "huǎn hé",
      "translations": [
        "to ease (tension)",
        "to alleviate",
        "to moderate",
        "to allay",
        "to make more mild"
      ]
    },
    {
      "id": 3319,
      "hanzi": "患者",
      "pinyin": "huàn zhě",
      "translations": [
        "patient",
        "sufferer"
      ]
    },
    {
      "id": 3320,
      "hanzi": "荒凉",
      "pinyin": "huāng liáng",
      "translations": [
        "desolate"
      ]
    },
    {
      "id": 3321,
      "hanzi": "荒谬",
      "pinyin": "huāng miù",
      "translations": [
        "absurd",
        "ridiculous"
      ]
    },
    {
      "id": 3322,
      "hanzi": "荒唐",
      "pinyin": "huāng táng",
      "translations": [
        "beyond belief",
        "preposterous",
        "absurd",
        "intemperate",
        "dissipated"
      ]
    },
    {
      "id": 3323,
      "hanzi": "慌忙",
      "pinyin": "huāng máng",
      "translations": [
        "in a great rush",
        "in a flurry"
      ]
    },
    {
      "id": 3324,
      "hanzi": "黄昏",
      "pinyin": "huáng hūn",
      "translations": [
        "dusk",
        "evening",
        "nightfall"
      ]
    },
    {
      "id": 3325,
      "hanzi": "恍然大悟",
      "pinyin": "huǎng rán dà wù",
      "translations": [
        "to suddenly realize",
        "to suddenly see the light"
      ]
    },
    {
      "id": 3326,
      "hanzi": "挥霍",
      "pinyin": "huī huò",
      "translations": [
        "to squander money",
        "extravagant",
        "prodigal",
        "free and easy",
        "agile"
      ]
    },
    {
      "id": 3327,
      "hanzi": "辉煌",
      "pinyin": "huī huáng",
      "translations": [
        "splendid",
        "glorious"
      ]
    },
    {
      "id": 3328,
      "hanzi": "回报",
      "pinyin": "huí bào",
      "translations": [
        "(in) return",
        "reciprocation",
        "payback",
        "retaliation",
        "to report back",
        "to reciprocate"
      ]
    },
    {
      "id": 3329,
      "hanzi": "回避",
      "pinyin": "huí bì",
      "translations": [
        "to shun",
        "to avoid (sb)",
        "to skirt",
        "to evade (an issue)",
        "to step back",
        "to withdraw",
        "to recuse (a judge etc)"
      ]
    },
    {
      "id": 3330,
      "hanzi": "回顾",
      "pinyin": "huí gù",
      "translations": [
        "to look back",
        "to review"
      ]
    },
    {
      "id": 3331,
      "hanzi": "回收",
      "pinyin": "huí shōu",
      "translations": [
        "to recycle",
        "to reclaim",
        "to retrieve",
        "to recover",
        "to recall (a defective product)"
      ]
    },
    {
      "id": 3332,
      "hanzi": "悔恨",
      "pinyin": "huǐ hèn",
      "translations": [
        "remorse",
        "repentance"
      ]
    },
    {
      "id": 3333,
      "hanzi": "毁灭",
      "pinyin": "huǐ miè",
      "translations": [
        "to perish",
        "to ruin",
        "to destroy"
      ]
    },
    {
      "id": 3334,
      "hanzi": "会晤",
      "pinyin": "huì wù",
      "translations": [
        "to meet",
        "meeting",
        "conference"
      ]
    },
    {
      "id": 3335,
      "hanzi": "汇报",
      "pinyin": "huì bào",
      "translations": [
        "to report",
        "to give an account of",
        "report"
      ]
    },
    {
      "id": 3336,
      "hanzi": "贿赂",
      "pinyin": "huì lù",
      "translations": [
        "to bribe",
        "a bribe"
      ]
    },
    {
      "id": 3337,
      "hanzi": "昏迷",
      "pinyin": "hūn mí",
      "translations": [
        "to lose consciousness",
        "to be in a coma",
        "stupor",
        "coma",
        "stunned",
        "disoriented"
      ]
    },
    {
      "id": 3338,
      "hanzi": "浑身",
      "pinyin": "hún shēn",
      "translations": [
        "all over",
        "from head to foot"
      ]
    },
    {
      "id": 3339,
      "hanzi": "混合",
      "pinyin": "hùn hé",
      "translations": [
        "to mix",
        "to blend"
      ]
    },
    {
      "id": 3340,
      "hanzi": "混乱",
      "pinyin": "hùn luàn",
      "translations": [
        "confusion",
        "chaos",
        "disorder"
      ]
    },
    {
      "id": 3341,
      "hanzi": "混淆",
      "pinyin": "hùn xiáo",
      "translations": [
        "to obscure",
        "to confuse",
        "to mix up",
        "to blur",
        "to mislead"
      ]
    },
    {
      "id": 3342,
      "hanzi": "混浊",
      "pinyin": "hùn zhuó",
      "translations": [
        "turbid",
        "muddy",
        "dirty"
      ]
    },
    {
      "id": 3343,
      "hanzi": "活该",
      "pinyin": "huó gāi",
      "translations": [
        "(coll.) serve sb right",
        "deservedly",
        "ought",
        "should"
      ]
    },
    {
      "id": 3344,
      "hanzi": "活力",
      "pinyin": "huó lì",
      "translations": [
        "energy",
        "vitality",
        "vigor",
        "vital force"
      ]
    },
    {
      "id": 3345,
      "hanzi": "火箭",
      "pinyin": "huǒ jiàn",
      "translations": [
        "rocket",
        "CL:枚[méi]"
      ]
    },
    {
      "id": 3346,
      "hanzi": "火焰",
      "pinyin": "huǒ yàn",
      "translations": [
        "blaze",
        "flame"
      ]
    },
    {
      "id": 3347,
      "hanzi": "火药",
      "pinyin": "huǒ yào",
      "translations": [
        "gunpowder"
      ]
    },
    {
      "id": 3348,
      "hanzi": "货币",
      "pinyin": "huò bì",
      "translations": [
        "currency",
        "monetary",
        "money"
      ]
    },
    {
      "id": 3349,
      "hanzi": "或许",
      "pinyin": "huò xǔ",
      "translations": [
        "perhaps",
        "maybe"
      ]
    },
    {
      "id": 3350,
      "hanzi": "基地",
      "pinyin": "jī dì",
      "translations": [
        "base (of operations)",
        "industrial or military base",
        "al-Qaeda"
      ]
    },
    {
      "id": 3351,
      "hanzi": "基金",
      "pinyin": "jī jīn",
      "translations": [
        "fund"
      ]
    },
    {
      "id": 3352,
      "hanzi": "基因",
      "pinyin": "jī yīn",
      "translations": [
        "gene (loanword)"
      ]
    },
    {
      "id": 3353,
      "hanzi": "机动",
      "pinyin": "jī dòng",
      "translations": [
        "locomotive",
        "motorized",
        "power-driven",
        "adaptable",
        "flexible (use, treatment, timing etc)"
      ]
    },
    {
      "id": 3354,
      "hanzi": "机构",
      "pinyin": "jī gòu",
      "translations": [
        "mechanism",
        "structure",
        "organization",
        "agency",
        "institution",
        "CL:所[suǒ]"
      ]
    },
    {
      "id": 3355,
      "hanzi": "机关",
      "pinyin": "jī guān",
      "translations": [
        "mechanism",
        "gear",
        "machine-operated",
        "office",
        "agency",
        "organ",
        "organization",
        "establishment",
        "institution",
        "body",
        "strategum",
        "scheme",
        "intrigue",
        "plot",
        "trick",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3356,
      "hanzi": "机灵",
      "pinyin": "jī líng",
      "translations": [
        "clever",
        "quick-witted"
      ]
    },
    {
      "id": 3357,
      "hanzi": "机密",
      "pinyin": "jī mì",
      "translations": [
        "secret",
        "classified (information)"
      ]
    },
    {
      "id": 3358,
      "hanzi": "机械",
      "pinyin": "jī xiè",
      "translations": [
        "machine",
        "machinery",
        "mechanical",
        "(old) cunning",
        "scheming"
      ]
    },
    {
      "id": 3359,
      "hanzi": "机遇",
      "pinyin": "jī yù",
      "translations": [
        "opportunity",
        "favorable circumstance",
        "stroke of luck"
      ]
    },
    {
      "id": 3360,
      "hanzi": "机智",
      "pinyin": "jī zhì",
      "translations": [
        "quick-witted",
        "tact",
        "witty",
        "resourceful"
      ]
    },
    {
      "id": 3361,
      "hanzi": "激发",
      "pinyin": "jī fā",
      "translations": [
        "to arouse",
        "to excite"
      ]
    },
    {
      "id": 3362,
      "hanzi": "激励",
      "pinyin": "jī lì",
      "translations": [
        "to encourage",
        "to urge",
        "motivation",
        "incentive"
      ]
    },
    {
      "id": 3363,
      "hanzi": "激情",
      "pinyin": "jī qíng",
      "translations": [
        "passion",
        "fervor",
        "enthusiasm",
        "strong emotion"
      ]
    },
    {
      "id": 3364,
      "hanzi": "饥饿",
      "pinyin": "jī è",
      "translations": [
        "hunger",
        "starvation",
        "famine"
      ]
    },
    {
      "id": 3365,
      "hanzi": "讥笑",
      "pinyin": "jī xiào",
      "translations": [
        "to sneer"
      ]
    },
    {
      "id": 3366,
      "hanzi": "极端",
      "pinyin": "jí duān",
      "translations": [
        "extreme"
      ]
    },
    {
      "id": 3367,
      "hanzi": "极限",
      "pinyin": "jí xiàn",
      "translations": [
        "limit",
        "extreme boundary"
      ]
    },
    {
      "id": 3368,
      "hanzi": "即便",
      "pinyin": "jí biàn",
      "translations": [
        "even if",
        "even though",
        "right away",
        "immediately"
      ]
    },
    {
      "id": 3369,
      "hanzi": "即将",
      "pinyin": "jí jiāng",
      "translations": [
        "on the eve of",
        "to be about to",
        "to be on the verge of"
      ]
    },
    {
      "id": 3370,
      "hanzi": "级别",
      "pinyin": "jí bié",
      "translations": [
        "(military) rank",
        "level",
        "grade"
      ]
    },
    {
      "id": 3371,
      "hanzi": "疾病",
      "pinyin": "jí bìng",
      "translations": [
        "disease",
        "sickness",
        "ailment"
      ]
    },
    {
      "id": 3372,
      "hanzi": "嫉妒",
      "pinyin": "jí dù",
      "translations": [
        "to be jealous",
        "to envy",
        "to hate"
      ]
    },
    {
      "id": 3373,
      "hanzi": "及早",
      "pinyin": "jí zǎo",
      "translations": [
        "at the earliest possible time",
        "as soon as possible"
      ]
    },
    {
      "id": 3374,
      "hanzi": "急功近利",
      "pinyin": "jí gōng jìn lì",
      "translations": [
        "seeking instant benefit (idiom); shortsighted vision",
        "looking only for fast return"
      ]
    },
    {
      "id": 3375,
      "hanzi": "急剧",
      "pinyin": "jí jù",
      "translations": [
        "rapid",
        "sudden"
      ]
    },
    {
      "id": 3376,
      "hanzi": "急切",
      "pinyin": "jí qiè",
      "translations": [
        "eager",
        "impatient"
      ]
    },
    {
      "id": 3377,
      "hanzi": "急于求成",
      "pinyin": "jí yú qiú chéng",
      "translations": [
        "anxious for quick results (idiom); to demand instant success",
        "impatient for result",
        "impetuous"
      ]
    },
    {
      "id": 3378,
      "hanzi": "急躁",
      "pinyin": "jí zào",
      "translations": [
        "irritable",
        "irascible",
        "impetuous"
      ]
    },
    {
      "id": 3379,
      "hanzi": "籍贯",
      "pinyin": "jí guàn",
      "translations": [
        "one's native place",
        "place of ancestry",
        "registered birthplace"
      ]
    },
    {
      "id": 3380,
      "hanzi": "集团",
      "pinyin": "jí tuán",
      "translations": [
        "group",
        "bloc",
        "corporation",
        "conglomerate"
      ]
    },
    {
      "id": 3381,
      "hanzi": "吉祥",
      "pinyin": "jí xiáng",
      "translations": [
        "lucky",
        "auspicious",
        "propitious"
      ]
    },
    {
      "id": 3382,
      "hanzi": "给予",
      "pinyin": "jǐ yǔ",
      "translations": [
        "to accord",
        "to give",
        "to show (respect)"
      ]
    },
    {
      "id": 3383,
      "hanzi": "寄托",
      "pinyin": "jì tuō",
      "translations": [
        "to have sb look after sb",
        "to entrust the care of sb",
        "to place (hope etc) on"
      ]
    },
    {
      "id": 3384,
      "hanzi": "继承",
      "pinyin": "jì chéng",
      "translations": [
        "to inherit",
        "to carry on",
        "to succeed"
      ]
    },
    {
      "id": 3385,
      "hanzi": "继往开来",
      "pinyin": "jì wǎng kāi lái",
      "translations": [
        "to follow the past and herald the future (idiom); part of a historical transition",
        "forming a bridge between earlier and later stages"
      ]
    },
    {
      "id": 3386,
      "hanzi": "记性",
      "pinyin": "jì xìng",
      "translations": [
        "memory"
      ]
    },
    {
      "id": 3387,
      "hanzi": "记载",
      "pinyin": "jì zǎi",
      "translations": [
        "to write down",
        "to record",
        "written account"
      ]
    },
    {
      "id": 3388,
      "hanzi": "季度",
      "pinyin": "jì dù",
      "translations": [
        "quarter of a year",
        "season (sports)"
      ]
    },
    {
      "id": 3389,
      "hanzi": "季军",
      "pinyin": "jì jūn",
      "translations": [
        "third in a race",
        "bronze medalist"
      ]
    },
    {
      "id": 3390,
      "hanzi": "计较",
      "pinyin": "jì jiào",
      "translations": [
        "to bother about",
        "to haggle",
        "to bicker",
        "to argue",
        "plan",
        "stratagem"
      ]
    },
    {
      "id": 3391,
      "hanzi": "忌讳",
      "pinyin": "jì huì",
      "translations": [
        "taboo",
        "to avoid as taboo",
        "to abstain from"
      ]
    },
    {
      "id": 3392,
      "hanzi": "寂静",
      "pinyin": "jì jìng",
      "translations": [
        "quiet"
      ]
    },
    {
      "id": 3393,
      "hanzi": "纪要",
      "pinyin": "jì yào",
      "translations": [
        "minutes",
        "written summary of a meeting"
      ]
    },
    {
      "id": 3394,
      "hanzi": "技能",
      "pinyin": "jì néng",
      "translations": [
        "technical ability",
        "skill"
      ]
    },
    {
      "id": 3395,
      "hanzi": "技巧",
      "pinyin": "jì qiǎo",
      "translations": [
        "skill",
        "technique"
      ]
    },
    {
      "id": 3396,
      "hanzi": "迹象",
      "pinyin": "jì xiàng",
      "translations": [
        "mark",
        "indication",
        "sign",
        "indicator"
      ]
    },
    {
      "id": 3397,
      "hanzi": "家常",
      "pinyin": "jiā cháng",
      "translations": [
        "the daily life of a family"
      ]
    },
    {
      "id": 3398,
      "hanzi": "家伙",
      "pinyin": "jiā huo",
      "translations": [
        "household dish",
        "implement or furniture",
        "domestic animal",
        "guy (slang)",
        "chap"
      ]
    },
    {
      "id": 3399,
      "hanzi": "家属",
      "pinyin": "jiā shǔ",
      "translations": [
        "family member",
        "(family) dependent"
      ]
    },
    {
      "id": 3400,
      "hanzi": "家喻户晓",
      "pinyin": "jiā yù hù xiǎo",
      "translations": [
        "understood by everyone (idiom); well known",
        "a household name"
      ]
    },
    {
      "id": 3401,
      "hanzi": "加工",
      "pinyin": "jiā gōng",
      "translations": [
        "to process",
        "processing",
        "working (of machinery)"
      ]
    },
    {
      "id": 3402,
      "hanzi": "加剧",
      "pinyin": "jiā jù",
      "translations": [
        "to intensify",
        "to sharpen",
        "to accelerate",
        "to aggravate",
        "to exacerbate",
        "to embitter"
      ]
    },
    {
      "id": 3403,
      "hanzi": "佳肴",
      "pinyin": "jiā yáo",
      "translations": [
        "fine food",
        "delicacies",
        "delicious food"
      ]
    },
    {
      "id": 3404,
      "hanzi": "夹杂",
      "pinyin": "jiā zá",
      "translations": [
        "to mix together (disparate substances)",
        "to mingle",
        "a mix",
        "to be tangled up with"
      ]
    },
    {
      "id": 3405,
      "hanzi": "假设",
      "pinyin": "jiǎ shè",
      "translations": [
        "suppose that...",
        "hypothesis",
        "conjecture"
      ]
    },
    {
      "id": 3406,
      "hanzi": "假使",
      "pinyin": "jiǎ shǐ",
      "translations": [
        "if",
        "in case",
        "suppose",
        "given ..."
      ]
    },
    {
      "id": 3407,
      "hanzi": "坚定",
      "pinyin": "jiān dìng",
      "translations": [
        "firm",
        "steady",
        "staunch",
        "resolute"
      ]
    },
    {
      "id": 3408,
      "hanzi": "坚固",
      "pinyin": "jiān gù",
      "translations": [
        "firm",
        "firmly",
        "hard",
        "stable"
      ]
    },
    {
      "id": 3409,
      "hanzi": "坚韧",
      "pinyin": "jiān rèn",
      "translations": [
        "tough and durable",
        "tenacious"
      ]
    },
    {
      "id": 3410,
      "hanzi": "坚实",
      "pinyin": "jiān shí",
      "translations": [
        "firm and substantial",
        "solid"
      ]
    },
    {
      "id": 3411,
      "hanzi": "坚硬",
      "pinyin": "jiān yìng",
      "translations": [
        "hard",
        "solid"
      ]
    },
    {
      "id": 3412,
      "hanzi": "监督",
      "pinyin": "jiān dū",
      "translations": [
        "to control",
        "to supervise",
        "to inspect"
      ]
    },
    {
      "id": 3413,
      "hanzi": "监视",
      "pinyin": "jiān shì",
      "translations": [
        "to monitor",
        "to oversee",
        "to keep a close watch over",
        "to spy on"
      ]
    },
    {
      "id": 3414,
      "hanzi": "监狱",
      "pinyin": "jiān yù",
      "translations": [
        "prison"
      ]
    },
    {
      "id": 3415,
      "hanzi": "尖端",
      "pinyin": "jiān duān",
      "translations": [
        "sharp pointed end",
        "the tip",
        "the cusp",
        "tip-top",
        "most advanced and sophisticated",
        "highest peak",
        "the best"
      ]
    },
    {
      "id": 3416,
      "hanzi": "艰难",
      "pinyin": "jiān nán",
      "translations": [
        "difficult",
        "hard",
        "challenging"
      ]
    },
    {
      "id": 3417,
      "hanzi": "兼职",
      "pinyin": "jiān zhí",
      "translations": [
        "to hold concurrent posts",
        "concurrent job",
        "moonlighting"
      ]
    },
    {
      "id": 3418,
      "hanzi": "拣",
      "pinyin": "jiǎn",
      "translations": [
        "to choose",
        "to pick",
        "to sort out",
        "to pick up"
      ]
    },
    {
      "id": 3419,
      "hanzi": "剪彩",
      "pinyin": "jiǎn cǎi",
      "translations": [
        "to cut the ribbon (at a launching or opening ceremony)"
      ]
    },
    {
      "id": 3420,
      "hanzi": "检讨",
      "pinyin": "jiǎn tǎo",
      "translations": [
        "to examine or inspect",
        "self-criticism",
        "review"
      ]
    },
    {
      "id": 3421,
      "hanzi": "检验",
      "pinyin": "jiǎn yàn",
      "translations": [
        "to inspect",
        "to examine",
        "to test"
      ]
    },
    {
      "id": 3422,
      "hanzi": "简化",
      "pinyin": "jiǎn huà",
      "translations": [
        "to simplify"
      ]
    },
    {
      "id": 3423,
      "hanzi": "简陋",
      "pinyin": "jiǎn lòu",
      "translations": [
        "simple and crude (of a room or building)"
      ]
    },
    {
      "id": 3424,
      "hanzi": "简体字",
      "pinyin": "jiǎn tǐ zì",
      "translations": [
        "simplified Chinese character",
        "as opposed to traditional Chinese character 繁體字|繁体字[fán tǐ zì]"
      ]
    },
    {
      "id": 3425,
      "hanzi": "简要",
      "pinyin": "jiǎn yào",
      "translations": [
        "concise",
        "brief"
      ]
    },
    {
      "id": 3426,
      "hanzi": "溅",
      "pinyin": "jiàn",
      "translations": [
        "splash"
      ]
    },
    {
      "id": 3427,
      "hanzi": "鉴别",
      "pinyin": "jiàn bié",
      "translations": [
        "to differentiate",
        "to distinguish"
      ]
    },
    {
      "id": 3428,
      "hanzi": "鉴定",
      "pinyin": "jiàn dìng",
      "translations": [
        "to appraise",
        "to identify",
        "to evaluate"
      ]
    },
    {
      "id": 3429,
      "hanzi": "鉴于",
      "pinyin": "jiàn yú",
      "translations": [
        "in view of",
        "seeing that",
        "considering",
        "whereas"
      ]
    },
    {
      "id": 3430,
      "hanzi": "间谍",
      "pinyin": "jiàn dié",
      "translations": [
        "spy"
      ]
    },
    {
      "id": 3431,
      "hanzi": "间隔",
      "pinyin": "jiàn gé",
      "translations": [
        "compartment",
        "gap",
        "interval",
        "to divide"
      ]
    },
    {
      "id": 3432,
      "hanzi": "间接",
      "pinyin": "jiàn jiē",
      "translations": [
        "indirect"
      ]
    },
    {
      "id": 3433,
      "hanzi": "见多识广",
      "pinyin": "jiàn duō shí guǎng",
      "translations": [
        "experienced and knowledgeable (idiom)"
      ]
    },
    {
      "id": 3434,
      "hanzi": "见解",
      "pinyin": "jiàn jiě",
      "translations": [
        "opinion",
        "view",
        "understanding"
      ]
    },
    {
      "id": 3435,
      "hanzi": "见闻",
      "pinyin": "jiàn wén",
      "translations": [
        "what one sees and hears",
        "knowledge",
        "information"
      ]
    },
    {
      "id": 3436,
      "hanzi": "见义勇为",
      "pinyin": "jiàn yì yǒng wéi",
      "translations": [
        "to see what is right and act courageously (idiom, from Analects); to stand up bravely for the truth",
        "acting heroically in a just cause"
      ]
    },
    {
      "id": 3437,
      "hanzi": "健全",
      "pinyin": "jiàn quán",
      "translations": [
        "robust",
        "sound"
      ]
    },
    {
      "id": 3438,
      "hanzi": "践踏",
      "pinyin": "jiàn tà",
      "translations": [
        "to trample"
      ]
    },
    {
      "id": 3439,
      "hanzi": "舰艇",
      "pinyin": "jiàn tǐng",
      "translations": [
        "warship",
        "naval vessel"
      ]
    },
    {
      "id": 3440,
      "hanzi": "将近",
      "pinyin": "jiāng jìn",
      "translations": [
        "almost",
        "nearly",
        "close to"
      ]
    },
    {
      "id": 3441,
      "hanzi": "将军",
      "pinyin": "jiāng jūn",
      "translations": [
        "general",
        "high-ranking military officer",
        "to check or checkmate",
        "fig. to embarrass",
        "to challenge",
        "to put sb on the spot"
      ]
    },
    {
      "id": 3442,
      "hanzi": "僵硬",
      "pinyin": "jiāng yìng",
      "translations": [
        "stiff",
        "rigid"
      ]
    },
    {
      "id": 3443,
      "hanzi": "桨",
      "pinyin": "jiǎng",
      "translations": [
        "oar",
        "paddle"
      ]
    },
    {
      "id": 3444,
      "hanzi": "奖励",
      "pinyin": "jiǎng lì",
      "translations": [
        "to reward",
        "reward (as encouragement)"
      ]
    },
    {
      "id": 3445,
      "hanzi": "奖赏",
      "pinyin": "jiǎng shǎng",
      "translations": [
        "reward",
        "prize",
        "award"
      ]
    },
    {
      "id": 3446,
      "hanzi": "降临",
      "pinyin": "jiàng lín",
      "translations": [
        "to descend to"
      ]
    },
    {
      "id": 3447,
      "hanzi": "交叉",
      "pinyin": "jiāo chā",
      "translations": [
        "to cross",
        "to intersect",
        "to overlap"
      ]
    },
    {
      "id": 3448,
      "hanzi": "交代",
      "pinyin": "jiāo dài",
      "translations": [
        "to hand over",
        "to explain",
        "to make clear",
        "to brief (sb)",
        "to account for",
        "to justify oneself",
        "to confess",
        "to finish (colloquial)"
      ]
    },
    {
      "id": 3449,
      "hanzi": "交涉",
      "pinyin": "jiāo shè",
      "translations": [
        "to negotiate",
        "relating to"
      ]
    },
    {
      "id": 3450,
      "hanzi": "交往",
      "pinyin": "jiāo wǎng",
      "translations": [
        "to associate",
        "to contact",
        "association",
        "contact"
      ]
    },
    {
      "id": 3451,
      "hanzi": "交易",
      "pinyin": "jiāo yì",
      "translations": [
        "(business) transaction",
        "business deal",
        "CL:筆|笔[bǐ]"
      ]
    },
    {
      "id": 3452,
      "hanzi": "焦点",
      "pinyin": "jiāo diǎn",
      "translations": [
        "focus",
        "focal point"
      ]
    },
    {
      "id": 3453,
      "hanzi": "焦急",
      "pinyin": "jiāo jí",
      "translations": [
        "anxiety",
        "anxious"
      ]
    },
    {
      "id": 3454,
      "hanzi": "娇气",
      "pinyin": "jiāo qì",
      "translations": [
        "delicate",
        "squeamish",
        "finicky"
      ]
    },
    {
      "id": 3455,
      "hanzi": "角落",
      "pinyin": "jiǎo luò",
      "translations": [
        "nook",
        "corner"
      ]
    },
    {
      "id": 3456,
      "hanzi": "搅拌",
      "pinyin": "jiǎo bàn",
      "translations": [
        "to stir",
        "to agitate"
      ]
    },
    {
      "id": 3457,
      "hanzi": "缴纳",
      "pinyin": "jiǎo nà",
      "translations": [
        "to pay (taxes etc)"
      ]
    },
    {
      "id": 3458,
      "hanzi": "教养",
      "pinyin": "jiào yǎng",
      "translations": [
        "to train",
        "to educate",
        "to bring up",
        "to nurture",
        "education",
        "culture",
        "upbringing",
        "early conditioning"
      ]
    },
    {
      "id": 3459,
      "hanzi": "较量",
      "pinyin": "jiào liàng",
      "translations": [
        "to have a contest with sb",
        "to cross swords",
        "to measure up against",
        "to compete with",
        "to haggle",
        "to quibble"
      ]
    },
    {
      "id": 3460,
      "hanzi": "皆",
      "pinyin": "jiē",
      "translations": [
        "all",
        "each and every",
        "in all cases"
      ]
    },
    {
      "id": 3461,
      "hanzi": "接连",
      "pinyin": "jiē lián",
      "translations": [
        "on end",
        "in a row",
        "in succession"
      ]
    },
    {
      "id": 3462,
      "hanzi": "阶层",
      "pinyin": "jiē céng",
      "translations": [
        "hierarchy",
        "stratum"
      ]
    },
    {
      "id": 3463,
      "hanzi": "揭发",
      "pinyin": "jiē fā",
      "translations": [
        "to expose",
        "to bring to light",
        "to disclose",
        "revelation"
      ]
    },
    {
      "id": 3464,
      "hanzi": "揭露",
      "pinyin": "jiē lù",
      "translations": [
        "to expose",
        "to unmask",
        "to ferret out",
        "to disclose",
        "disclosure"
      ]
    },
    {
      "id": 3465,
      "hanzi": "节奏",
      "pinyin": "jié zòu",
      "translations": [
        "rhythm",
        "tempo",
        "musical pulse",
        "cadence",
        "beat"
      ]
    },
    {
      "id": 3466,
      "hanzi": "杰出",
      "pinyin": "jié chū",
      "translations": [
        "outstanding",
        "distinguished",
        "remarkable",
        "prominent",
        "illustrious"
      ]
    },
    {
      "id": 3467,
      "hanzi": "结晶",
      "pinyin": "jié jīng",
      "translations": [
        "crystallization",
        "crystalline",
        "crystal"
      ]
    },
    {
      "id": 3468,
      "hanzi": "结局",
      "pinyin": "jié jú",
      "translations": [
        "conclusion",
        "ending"
      ]
    },
    {
      "id": 3469,
      "hanzi": "结算",
      "pinyin": "jié suàn",
      "translations": [
        "to settle a bill",
        "to close an account"
      ]
    },
    {
      "id": 3470,
      "hanzi": "竭尽全力",
      "pinyin": "jié jìn quán lì",
      "translations": [
        "to spare no effort (idiom); to do one's utmost"
      ]
    },
    {
      "id": 3471,
      "hanzi": "截至",
      "pinyin": "jié zhì",
      "translations": [
        "up to (a time)",
        "by (a time)"
      ]
    },
    {
      "id": 3472,
      "hanzi": "解除",
      "pinyin": "jiě chú",
      "translations": [
        "to remove",
        "to sack",
        "to get rid of",
        "to relieve (sb of their duties)",
        "to free",
        "to lift (an embargo)",
        "to rescind (an agreement)"
      ]
    },
    {
      "id": 3473,
      "hanzi": "解雇",
      "pinyin": "jiě gù",
      "translations": [
        "to fire",
        "to sack",
        "to dismiss"
      ]
    },
    {
      "id": 3474,
      "hanzi": "解剖",
      "pinyin": "jiě pōu",
      "translations": [
        "to dissect (an animal)",
        "to analyze",
        "anatomy"
      ]
    },
    {
      "id": 3475,
      "hanzi": "解散",
      "pinyin": "jiě sàn",
      "translations": [
        "to dissolve",
        "to disband"
      ]
    },
    {
      "id": 3476,
      "hanzi": "解体",
      "pinyin": "jiě tǐ",
      "translations": [
        "to break up into components",
        "to disintegrate",
        "to collapse",
        "to crumble"
      ]
    },
    {
      "id": 3477,
      "hanzi": "借鉴",
      "pinyin": "jiè jiàn",
      "translations": [
        "to use other people's experience",
        "to borrow from a source",
        "to use as reference"
      ]
    },
    {
      "id": 3478,
      "hanzi": "借助",
      "pinyin": "jiè zhù",
      "translations": [
        "to draw support from",
        "with the help of"
      ]
    },
    {
      "id": 3479,
      "hanzi": "戒备",
      "pinyin": "jiè bèi",
      "translations": [
        "to take precautions",
        "to guard against (emergency)"
      ]
    },
    {
      "id": 3480,
      "hanzi": "界限",
      "pinyin": "jiè xiàn",
      "translations": [
        "boundary",
        "marginal"
      ]
    },
    {
      "id": 3481,
      "hanzi": "津津有味",
      "pinyin": "jīn jīn yǒu wèi",
      "translations": [
        "with keen interest pleasure (idiom); with gusto",
        "to relish",
        "eagerly",
        "with great interest"
      ]
    },
    {
      "id": 3482,
      "hanzi": "金融",
      "pinyin": "jīn róng",
      "translations": [
        "banking",
        "finance",
        "financial"
      ]
    },
    {
      "id": 3483,
      "hanzi": "紧密",
      "pinyin": "jǐn mì",
      "translations": [
        "inseparably close"
      ]
    },
    {
      "id": 3484,
      "hanzi": "紧迫",
      "pinyin": "jǐn pò",
      "translations": [
        "pressing",
        "urgent"
      ]
    },
    {
      "id": 3485,
      "hanzi": "尽快",
      "pinyin": "jǐn kuài",
      "translations": [
        "as quickly as possible",
        "as soon as possible",
        "with all speed"
      ]
    },
    {
      "id": 3486,
      "hanzi": "锦绣前程",
      "pinyin": "jǐn xiù qián chéng",
      "translations": [
        "bright future",
        "bright prospects"
      ]
    },
    {
      "id": 3487,
      "hanzi": "进而",
      "pinyin": "jìn ér",
      "translations": [
        "and then (what follows next)"
      ]
    },
    {
      "id": 3488,
      "hanzi": "进攻",
      "pinyin": "jìn gōng",
      "translations": [
        "to attack",
        "to assault",
        "to go on the offensive",
        "attack",
        "assault",
        "offense (sports)"
      ]
    },
    {
      "id": 3489,
      "hanzi": "进化",
      "pinyin": "jìn huà",
      "translations": [
        "evolution",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3490,
      "hanzi": "进展",
      "pinyin": "jìn zhǎn",
      "translations": [
        "to make headway",
        "to make progress"
      ]
    },
    {
      "id": 3491,
      "hanzi": "近来",
      "pinyin": "jìn lái",
      "translations": [
        "recently",
        "lately"
      ]
    },
    {
      "id": 3492,
      "hanzi": "近视",
      "pinyin": "jìn shì",
      "translations": [
        "shortsighted",
        "nearsighted",
        "myopia"
      ]
    },
    {
      "id": 3493,
      "hanzi": "浸泡",
      "pinyin": "jìn pào",
      "translations": [
        "to steep",
        "to soak",
        "to immerse"
      ]
    },
    {
      "id": 3494,
      "hanzi": "晋升",
      "pinyin": "jìn shēng",
      "translations": [
        "to promote to a higher position"
      ]
    },
    {
      "id": 3495,
      "hanzi": "劲头",
      "pinyin": "jìn tóu",
      "translations": [
        "enthusiasm",
        "zeal",
        "vigor",
        "strength"
      ]
    },
    {
      "id": 3496,
      "hanzi": "茎",
      "pinyin": "jīng",
      "translations": [
        "stalk",
        "stem",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 3497,
      "hanzi": "精打细算",
      "pinyin": "jīng dǎ xì suàn",
      "translations": [
        "(saying) meticulous planning and careful accounting"
      ]
    },
    {
      "id": 3498,
      "hanzi": "精华",
      "pinyin": "jīng huá",
      "translations": [
        "best feature",
        "most important part of an object",
        "quintessence",
        "essence",
        "soul"
      ]
    },
    {
      "id": 3499,
      "hanzi": "精简",
      "pinyin": "jīng jiǎn",
      "translations": [
        "to simplify",
        "to reduce"
      ]
    },
    {
      "id": 3500,
      "hanzi": "精密",
      "pinyin": "jīng mì",
      "translations": [
        "accuracy",
        "exact",
        "precise",
        "refined"
      ]
    },
    {
      "id": 3501,
      "hanzi": "精确",
      "pinyin": "jīng què",
      "translations": [
        "accurate",
        "precise"
      ]
    },
    {
      "id": 3502,
      "hanzi": "精通",
      "pinyin": "jīng tōng",
      "translations": [
        "proficient"
      ]
    },
    {
      "id": 3503,
      "hanzi": "精心",
      "pinyin": "jīng xīn",
      "translations": [
        "with utmost care",
        "fine",
        "meticulous",
        "detailed"
      ]
    },
    {
      "id": 3504,
      "hanzi": "精益求精",
      "pinyin": "jīng yì qiú jīng",
      "translations": [
        "to perfect sth that is already outstanding (idiom); constantly improving"
      ]
    },
    {
      "id": 3505,
      "hanzi": "精致",
      "pinyin": "jīng zhì",
      "translations": [
        "delicate",
        "fine",
        "exquisite",
        "refined"
      ]
    },
    {
      "id": 3506,
      "hanzi": "经费",
      "pinyin": "jīng fèi",
      "translations": [
        "funds",
        "expenditure",
        "CL:筆|笔[bǐ]"
      ]
    },
    {
      "id": 3507,
      "hanzi": "经商",
      "pinyin": "jīng shāng",
      "translations": [
        "to trade",
        "to carry out commercial activities",
        "in business"
      ]
    },
    {
      "id": 3508,
      "hanzi": "经纬",
      "pinyin": "jīng wěi",
      "translations": [
        "warp and woof",
        "longitude and latitude",
        "main points"
      ]
    },
    {
      "id": 3509,
      "hanzi": "惊动",
      "pinyin": "jīng dòng",
      "translations": [
        "alarm",
        "alert",
        "disturb"
      ]
    },
    {
      "id": 3510,
      "hanzi": "惊奇",
      "pinyin": "jīng qí",
      "translations": [
        "to be amazed",
        "to be surprised",
        "to wonder"
      ]
    },
    {
      "id": 3511,
      "hanzi": "惊讶",
      "pinyin": "jīng yà",
      "translations": [
        "amazed",
        "astonished",
        "to surprise",
        "amazing",
        "astonishment",
        "awe"
      ]
    },
    {
      "id": 3512,
      "hanzi": "兢兢业业",
      "pinyin": "jīng jīng yè yè",
      "translations": [
        "cautious and conscientious"
      ]
    },
    {
      "id": 3513,
      "hanzi": "井",
      "pinyin": "jǐng",
      "translations": [
        "a well",
        "CL:口[kǒu]",
        "neat",
        "orderly"
      ]
    },
    {
      "id": 3514,
      "hanzi": "警告",
      "pinyin": "jǐng gào",
      "translations": [
        "to warn",
        "to admonish"
      ]
    },
    {
      "id": 3515,
      "hanzi": "警惕",
      "pinyin": "jǐng tì",
      "translations": [
        "to be on the alert",
        "vigilant",
        "alert",
        "on guard",
        "to warn"
      ]
    },
    {
      "id": 3516,
      "hanzi": "颈椎",
      "pinyin": "jǐng zhuī",
      "translations": [
        "cervical vertebra",
        "the seven cervical vertebrae in the neck of humans and most mammals"
      ]
    },
    {
      "id": 3517,
      "hanzi": "敬礼",
      "pinyin": "jìng lǐ",
      "translations": [
        "to salute",
        "salute"
      ]
    },
    {
      "id": 3518,
      "hanzi": "境界",
      "pinyin": "jìng jiè",
      "translations": [
        "boundary",
        "state",
        "realm"
      ]
    },
    {
      "id": 3519,
      "hanzi": "竞赛",
      "pinyin": "jìng sài",
      "translations": [
        "race",
        "competition",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3520,
      "hanzi": "竞选",
      "pinyin": "jìng xuǎn",
      "translations": [
        "to take part in an election",
        "to run for office"
      ]
    },
    {
      "id": 3521,
      "hanzi": "镜头",
      "pinyin": "jìng tóu",
      "translations": [
        "camera lens",
        "camera shot (in a movie etc)",
        "scene"
      ]
    },
    {
      "id": 3522,
      "hanzi": "纠纷",
      "pinyin": "jiū fēn",
      "translations": [
        "a dispute",
        "entanglement (law)"
      ]
    },
    {
      "id": 3523,
      "hanzi": "纠正",
      "pinyin": "jiū zhèng",
      "translations": [
        "to correct",
        "to make right"
      ]
    },
    {
      "id": 3524,
      "hanzi": "酒精",
      "pinyin": "jiǔ jīng",
      "translations": [
        "alcohol",
        "ethanol CH3CH2OH",
        "ethyl alcohol",
        "also written 乙醇",
        "grain alcohol"
      ]
    },
    {
      "id": 3525,
      "hanzi": "救济",
      "pinyin": "jiù jì",
      "translations": [
        "emergency relief",
        "to help the needy with cash or goods"
      ]
    },
    {
      "id": 3526,
      "hanzi": "就近",
      "pinyin": "jiù jìn",
      "translations": [
        "nearby",
        "in a close neighborhood"
      ]
    },
    {
      "id": 3527,
      "hanzi": "就业",
      "pinyin": "jiù yè",
      "translations": [
        "looking for employment",
        "getting a job",
        "to start a career"
      ]
    },
    {
      "id": 3528,
      "hanzi": "就职",
      "pinyin": "jiù zhí",
      "translations": [
        "to take office",
        "to assume a post"
      ]
    },
    {
      "id": 3529,
      "hanzi": "鞠躬",
      "pinyin": "jū gōng",
      "translations": [
        "to bow"
      ]
    },
    {
      "id": 3530,
      "hanzi": "拘留",
      "pinyin": "jū liú",
      "translations": [
        "to detain (a prisoner)",
        "to keep sb in custody"
      ]
    },
    {
      "id": 3531,
      "hanzi": "拘束",
      "pinyin": "jū shù",
      "translations": [
        "to restrict",
        "to restrain",
        "constrained",
        "awkward",
        "ill at ease",
        "uncomfortable",
        "reticent"
      ]
    },
    {
      "id": 3532,
      "hanzi": "居住",
      "pinyin": "jū zhù",
      "translations": [
        "to reside",
        "to dwell",
        "to live in a place",
        "resident in"
      ]
    },
    {
      "id": 3533,
      "hanzi": "局部",
      "pinyin": "jú bù",
      "translations": [
        "part",
        "local"
      ]
    },
    {
      "id": 3534,
      "hanzi": "局面",
      "pinyin": "jú miàn",
      "translations": [
        "aspect",
        "phase",
        "situation"
      ]
    },
    {
      "id": 3535,
      "hanzi": "局势",
      "pinyin": "jú shì",
      "translations": [
        "situation",
        "state (of affairs)"
      ]
    },
    {
      "id": 3536,
      "hanzi": "局限",
      "pinyin": "jú xiàn",
      "translations": [
        "to limit",
        "to confine",
        "to restrict sth within set boundaries"
      ]
    },
    {
      "id": 3537,
      "hanzi": "举动",
      "pinyin": "jǔ dòng",
      "translations": [
        "act",
        "action",
        "activity",
        "move",
        "movement"
      ]
    },
    {
      "id": 3538,
      "hanzi": "举世闻名",
      "pinyin": "jǔ shì wén míng",
      "translations": [
        "(saying) world famous"
      ]
    },
    {
      "id": 3539,
      "hanzi": "举世瞩目",
      "pinyin": "jǔ shì zhǔ mù",
      "translations": [
        "to receive worldwide attention"
      ]
    },
    {
      "id": 3540,
      "hanzi": "举足轻重",
      "pinyin": "jǔ zú qīng zhòng",
      "translations": [
        "a foot's move sways the balance (idiom); to hold the balance of power",
        "to play the decisive role"
      ]
    },
    {
      "id": 3541,
      "hanzi": "咀嚼",
      "pinyin": "jǔ jué",
      "translations": [
        "to chew",
        "to think over"
      ]
    },
    {
      "id": 3542,
      "hanzi": "沮丧",
      "pinyin": "jǔ sàng",
      "translations": [
        "dispirited",
        "dejected",
        "dismayed"
      ]
    },
    {
      "id": 3543,
      "hanzi": "剧本",
      "pinyin": "jù běn",
      "translations": [
        "script for play",
        "opera",
        "movie etc",
        "screenplay",
        "scenario"
      ]
    },
    {
      "id": 3544,
      "hanzi": "剧烈",
      "pinyin": "jù liè",
      "translations": [
        "violent",
        "acute",
        "severe",
        "fierce"
      ]
    },
    {
      "id": 3545,
      "hanzi": "聚精会神",
      "pinyin": "jù jīng huì shén",
      "translations": [
        "to concentrate one's attention (idiom)"
      ]
    },
    {
      "id": 3546,
      "hanzi": "据悉",
      "pinyin": "jù xī",
      "translations": [
        "according to reports",
        "it is reported (that)"
      ]
    },
    {
      "id": 3547,
      "hanzi": "决策",
      "pinyin": "jué cè",
      "translations": [
        "strategic decision",
        "decision-making",
        "policy decision",
        "to determine policy"
      ]
    },
    {
      "id": 3548,
      "hanzi": "觉悟",
      "pinyin": "jué wù",
      "translations": [
        "consciousness",
        "awareness",
        "Buddhist enlightenment (Sanskrit: cittotpāda)"
      ]
    },
    {
      "id": 3549,
      "hanzi": "觉醒",
      "pinyin": "jué xǐng",
      "translations": [
        "to awaken",
        "to come to realize",
        "awakened to the truth",
        "the truth dawns upon one",
        "scales fall from the eyes",
        "to become aware"
      ]
    },
    {
      "id": 3550,
      "hanzi": "绝望",
      "pinyin": "jué wàng",
      "translations": [
        "desperation",
        "forlorn",
        "hopeless"
      ]
    },
    {
      "id": 3551,
      "hanzi": "军队",
      "pinyin": "jūn duì",
      "translations": [
        "army troops",
        "CL:支",
        "個|个[gè]"
      ]
    },
    {
      "id": 3552,
      "hanzi": "卡通",
      "pinyin": "kǎ tōng",
      "translations": [
        "cartoon"
      ]
    },
    {
      "id": 3553,
      "hanzi": "开采",
      "pinyin": "kāi cǎi",
      "translations": [
        "to extract (ore or other resource from a mine)",
        "to exploit",
        "to mine"
      ]
    },
    {
      "id": 3554,
      "hanzi": "开除",
      "pinyin": "kāi chú",
      "translations": [
        "to expel"
      ]
    },
    {
      "id": 3555,
      "hanzi": "开阔",
      "pinyin": "kāi kuò",
      "translations": [
        "wide",
        "open (spaces)",
        "to open up"
      ]
    },
    {
      "id": 3556,
      "hanzi": "开朗",
      "pinyin": "kāi lǎng",
      "translations": [
        "spacious and well-lit",
        "open and clear",
        "to open out (onto a wider vista)",
        "optimistic",
        "cheerful",
        "carefree",
        "easy-going",
        "open-minded"
      ]
    },
    {
      "id": 3557,
      "hanzi": "开明",
      "pinyin": "kāi míng",
      "translations": [
        "enlightened",
        "open-minded",
        "enlightenment"
      ]
    },
    {
      "id": 3558,
      "hanzi": "开辟",
      "pinyin": "kāi pì",
      "translations": [
        "to open up",
        "to set up",
        "to establish"
      ]
    },
    {
      "id": 3559,
      "hanzi": "开水",
      "pinyin": "kāi shuǐ",
      "translations": [
        "boiled water",
        "boiling water"
      ]
    },
    {
      "id": 3560,
      "hanzi": "开拓",
      "pinyin": "kāi tuò",
      "translations": [
        "to break new ground (for agriculture)",
        "to open up (a new seam)",
        "to develop (border regions)",
        "fig. to open up (new horizons)"
      ]
    },
    {
      "id": 3561,
      "hanzi": "开展",
      "pinyin": "kāi zhǎn",
      "translations": [
        "(begin to) develop",
        "unfold",
        "to start",
        "to launch",
        "to open",
        "to carry out"
      ]
    },
    {
      "id": 3562,
      "hanzi": "开支",
      "pinyin": "kāi zhī",
      "translations": [
        "expenditures",
        "pay",
        "expenses",
        "CL:筆|笔[bǐ]"
      ]
    },
    {
      "id": 3563,
      "hanzi": "刊登",
      "pinyin": "kān dēng",
      "translations": [
        "to carry a story",
        "to publish (in a newspaper or magazine)"
      ]
    },
    {
      "id": 3564,
      "hanzi": "刊物",
      "pinyin": "kān wù",
      "translations": [
        "publication"
      ]
    },
    {
      "id": 3565,
      "hanzi": "勘探",
      "pinyin": "kān tàn",
      "translations": [
        "exploration"
      ]
    },
    {
      "id": 3566,
      "hanzi": "看待",
      "pinyin": "kàn dài",
      "translations": [
        "to look upon",
        "to regard"
      ]
    },
    {
      "id": 3567,
      "hanzi": "看望",
      "pinyin": "kàn wàng",
      "translations": [
        "to visit",
        "to pay a call to"
      ]
    },
    {
      "id": 3568,
      "hanzi": "慷慨",
      "pinyin": "kāng kǎi",
      "translations": [
        "vehement",
        "fervent",
        "generous",
        "giving",
        "liberal"
      ]
    },
    {
      "id": 3569,
      "hanzi": "扛",
      "pinyin": "káng",
      "translations": [
        "to carry on one's shoulder"
      ]
    },
    {
      "id": 3570,
      "hanzi": "考察",
      "pinyin": "kǎo chá",
      "translations": [
        "to inspect",
        "to observe and study",
        "on-the-spot investigation"
      ]
    },
    {
      "id": 3571,
      "hanzi": "考古",
      "pinyin": "kǎo gǔ",
      "translations": [
        "archaeology"
      ]
    },
    {
      "id": 3572,
      "hanzi": "考核",
      "pinyin": "kǎo hé",
      "translations": [
        "to examine",
        "to check up on",
        "to assess",
        "to review",
        "appraisal",
        "review",
        "evaluation"
      ]
    },
    {
      "id": 3573,
      "hanzi": "考验",
      "pinyin": "kǎo yàn",
      "translations": [
        "to test",
        "to put to the test"
      ]
    },
    {
      "id": 3574,
      "hanzi": "靠拢",
      "pinyin": "kào lǒng",
      "translations": [
        "to draw close to"
      ]
    },
    {
      "id": 3575,
      "hanzi": "磕",
      "pinyin": "kē",
      "translations": [
        "to tap",
        "knock"
      ]
    },
    {
      "id": 3576,
      "hanzi": "颗粒",
      "pinyin": "kē lì",
      "translations": [
        "kernel",
        "granule",
        "granulated (sugar, chemical product)"
      ]
    },
    {
      "id": 3577,
      "hanzi": "科目",
      "pinyin": "kē mù",
      "translations": [
        "subject"
      ]
    },
    {
      "id": 3578,
      "hanzi": "渴望",
      "pinyin": "kě wàng",
      "translations": [
        "to thirst for",
        "to long for"
      ]
    },
    {
      "id": 3579,
      "hanzi": "可观",
      "pinyin": "kě guān",
      "translations": [
        "considerable",
        "impressive",
        "significant"
      ]
    },
    {
      "id": 3580,
      "hanzi": "可口",
      "pinyin": "kě kǒu",
      "translations": [
        "tasty",
        "to taste good"
      ]
    },
    {
      "id": 3581,
      "hanzi": "可恶",
      "pinyin": "kě wù",
      "translations": [
        "repulsive",
        "vile",
        "hateful",
        "abominable"
      ]
    },
    {
      "id": 3582,
      "hanzi": "可笑",
      "pinyin": "kě xiào",
      "translations": [
        "funny",
        "ridiculous"
      ]
    },
    {
      "id": 3583,
      "hanzi": "可行",
      "pinyin": "kě xíng",
      "translations": [
        "feasible"
      ]
    },
    {
      "id": 3584,
      "hanzi": "刻不容缓",
      "pinyin": "kè bù róng huǎn",
      "translations": [
        "to brook no delay",
        "to demand immediate action"
      ]
    },
    {
      "id": 3585,
      "hanzi": "课题",
      "pinyin": "kè tí",
      "translations": [
        "task",
        "problem",
        "issue"
      ]
    },
    {
      "id": 3586,
      "hanzi": "客户",
      "pinyin": "kè hù",
      "translations": [
        "client",
        "customer"
      ]
    },
    {
      "id": 3587,
      "hanzi": "啃",
      "pinyin": "kěn",
      "translations": [
        "to gnaw",
        "to nibble",
        "to bite"
      ]
    },
    {
      "id": 3588,
      "hanzi": "恳切",
      "pinyin": "kěn qiè",
      "translations": [
        "earnest",
        "sincere"
      ]
    },
    {
      "id": 3589,
      "hanzi": "坑",
      "pinyin": "kēng",
      "translations": [
        "hole",
        "pit",
        "tunnel",
        "to defraud"
      ]
    },
    {
      "id": 3590,
      "hanzi": "空洞",
      "pinyin": "kōng dòng",
      "translations": [
        "cavity",
        "empty",
        "vacuous"
      ]
    },
    {
      "id": 3591,
      "hanzi": "空前绝后",
      "pinyin": "kōng qián jué hòu",
      "translations": [
        "unprecedented and never to be duplicated",
        "the first and the last",
        "unmatched",
        "unique"
      ]
    },
    {
      "id": 3592,
      "hanzi": "空想",
      "pinyin": "kōng xiǎng",
      "translations": [
        "daydream",
        "fantasy",
        "to fantasize"
      ]
    },
    {
      "id": 3593,
      "hanzi": "空虚",
      "pinyin": "kōng xū",
      "translations": [
        "hollow",
        "emptiness",
        "meaningless"
      ]
    },
    {
      "id": 3594,
      "hanzi": "孔",
      "pinyin": "kǒng",
      "translations": [
        "hole",
        "CL:個|个[gè]",
        "classifier for cave dwellings"
      ]
    },
    {
      "id": 3595,
      "hanzi": "恐吓",
      "pinyin": "kǒng hè",
      "translations": [
        "to threaten",
        "to menace"
      ]
    },
    {
      "id": 3596,
      "hanzi": "恐惧",
      "pinyin": "kǒng jù",
      "translations": [
        "fear",
        "dread",
        "phobia"
      ]
    },
    {
      "id": 3597,
      "hanzi": "空白",
      "pinyin": "kòng bái",
      "translations": [
        "blank space"
      ]
    },
    {
      "id": 3598,
      "hanzi": "空隙",
      "pinyin": "kòng xì",
      "translations": [
        "crack",
        "gap between two objects",
        "gap in time between two events"
      ]
    },
    {
      "id": 3599,
      "hanzi": "口气",
      "pinyin": "kǒu qì",
      "translations": [
        "tone of voice",
        "the way one speaks",
        "manner of expression",
        "tone"
      ]
    },
    {
      "id": 3600,
      "hanzi": "口腔",
      "pinyin": "kǒu qiāng",
      "translations": [
        "oral cavity"
      ]
    },
    {
      "id": 3601,
      "hanzi": "口头",
      "pinyin": "kǒu tóu",
      "translations": [
        "oral",
        "verbal"
      ]
    },
    {
      "id": 3602,
      "hanzi": "口音",
      "pinyin": "kǒu yīn",
      "translations": [
        "oral speech sounds (linguistics)"
      ]
    },
    {
      "id": 3603,
      "hanzi": "枯竭",
      "pinyin": "kū jié",
      "translations": [
        "used up",
        "dried up",
        "exhausted (of resources)"
      ]
    },
    {
      "id": 3604,
      "hanzi": "枯燥",
      "pinyin": "kū zào",
      "translations": [
        "dry and dull",
        "uninteresting",
        "dry-as-dust"
      ]
    },
    {
      "id": 3605,
      "hanzi": "苦尽甘来",
      "pinyin": "kǔ jìn gān lái",
      "translations": [
        "bitterness finishes",
        "sweetness begins (idiom); the hard times are over",
        "the good times just beginning"
      ]
    },
    {
      "id": 3606,
      "hanzi": "挎",
      "pinyin": "kuà",
      "translations": [
        "to carry (esp. slung over the arm, shoulder or side)"
      ]
    },
    {
      "id": 3607,
      "hanzi": "跨",
      "pinyin": "kuà",
      "translations": [
        "to step across",
        "to stride over",
        "to straddle",
        "to span"
      ]
    },
    {
      "id": 3608,
      "hanzi": "快活",
      "pinyin": "kuài huo",
      "translations": [
        "happy",
        "cheerful"
      ]
    },
    {
      "id": 3609,
      "hanzi": "宽敞",
      "pinyin": "kuān chang",
      "translations": [
        "spacious",
        "wide"
      ]
    },
    {
      "id": 3610,
      "hanzi": "款待",
      "pinyin": "kuǎn dài",
      "translations": [
        "to entertain",
        "to be hospitable to"
      ]
    },
    {
      "id": 3611,
      "hanzi": "款式",
      "pinyin": "kuǎn shì",
      "translations": [
        "pattern",
        "style",
        "design",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 3612,
      "hanzi": "筐",
      "pinyin": "kuāng",
      "translations": [
        "basket",
        "CL:隻|只[zhī]"
      ]
    },
    {
      "id": 3613,
      "hanzi": "旷课",
      "pinyin": "kuàng kè",
      "translations": [
        "to play truant",
        "to cut classes"
      ]
    },
    {
      "id": 3614,
      "hanzi": "框架",
      "pinyin": "kuàng jià",
      "translations": [
        "frame",
        "framework",
        "fig. pattern",
        "outline",
        "organizing plan"
      ]
    },
    {
      "id": 3615,
      "hanzi": "况且",
      "pinyin": "kuàng qiě",
      "translations": [
        "moreover",
        "besides",
        "in addition",
        "furthermore"
      ]
    },
    {
      "id": 3616,
      "hanzi": "亏待",
      "pinyin": "kuī dài",
      "translations": [
        "to treat sb unfairly"
      ]
    },
    {
      "id": 3617,
      "hanzi": "亏损",
      "pinyin": "kuī sǔn",
      "translations": [
        "deficit",
        "(financial) loss"
      ]
    },
    {
      "id": 3618,
      "hanzi": "昆虫",
      "pinyin": "kūn chóng",
      "translations": [
        "insect",
        "CL:隻|只",
        "群",
        "堆[duī]"
      ]
    },
    {
      "id": 3619,
      "hanzi": "捆绑",
      "pinyin": "kǔn bǎng",
      "translations": [
        "to bind"
      ]
    },
    {
      "id": 3620,
      "hanzi": "扩充",
      "pinyin": "kuò chōng",
      "translations": [
        "to expand"
      ]
    },
    {
      "id": 3621,
      "hanzi": "扩散",
      "pinyin": "kuò sàn",
      "translations": [
        "to spread",
        "to proliferate",
        "to diffuse",
        "spread",
        "proliferation",
        "diffusion"
      ]
    },
    {
      "id": 3622,
      "hanzi": "扩张",
      "pinyin": "kuò zhāng",
      "translations": [
        "expansion",
        "dilation",
        "to expand (e.g. one's power or influence)",
        "to broaden"
      ]
    },
    {
      "id": 3623,
      "hanzi": "喇叭",
      "pinyin": "lǎ ba",
      "translations": [
        "horn (automobile etc)",
        "loudspeaker",
        "brass wind instrument",
        "trumpet",
        "suona 鎖吶|锁呐[suǒ nà]"
      ]
    },
    {
      "id": 3624,
      "hanzi": "啦",
      "pinyin": "la",
      "translations": [
        "sentence-final particle",
        "contraction of 了啊",
        "indicating exclamation",
        "particle placed after each item in a list of examples"
      ]
    },
    {
      "id": 3625,
      "hanzi": "来历",
      "pinyin": "lái lì",
      "translations": [
        "history",
        "antecedents",
        "origin"
      ]
    },
    {
      "id": 3626,
      "hanzi": "来源",
      "pinyin": "lái yuán",
      "translations": [
        "source (of information etc)",
        "origin"
      ]
    },
    {
      "id": 3627,
      "hanzi": "栏目",
      "pinyin": "lán mù",
      "translations": [
        "regular column or segment (in a publication or broadcast program)",
        "program (TV or radio)"
      ]
    },
    {
      "id": 3628,
      "hanzi": "懒惰",
      "pinyin": "lǎn duò",
      "translations": [
        "idle",
        "lazy"
      ]
    },
    {
      "id": 3629,
      "hanzi": "狼狈",
      "pinyin": "láng bèi",
      "translations": [
        "in a difficult situation",
        "to cut a sorry figure",
        "scoundrel! (derogatory)"
      ]
    },
    {
      "id": 3630,
      "hanzi": "朗读",
      "pinyin": "lǎng dú",
      "translations": [
        "read aloud",
        "read loudly and clearly"
      ]
    },
    {
      "id": 3631,
      "hanzi": "捞",
      "pinyin": "lāo",
      "translations": [
        "to fish up",
        "to dredge up"
      ]
    },
    {
      "id": 3632,
      "hanzi": "唠叨",
      "pinyin": "láo dao",
      "translations": [
        "to prattle",
        "to chatter",
        "talkative",
        "garrulous",
        "to nag"
      ]
    },
    {
      "id": 3633,
      "hanzi": "牢固",
      "pinyin": "láo gù",
      "translations": [
        "firm",
        "secure"
      ]
    },
    {
      "id": 3634,
      "hanzi": "牢骚",
      "pinyin": "láo sāo",
      "translations": [
        "discontent",
        "complaint",
        "to complain"
      ]
    },
    {
      "id": 3635,
      "hanzi": "乐趣",
      "pinyin": "lè qù",
      "translations": [
        "delight",
        "pleasure",
        "joy"
      ]
    },
    {
      "id": 3636,
      "hanzi": "乐意",
      "pinyin": "lè yì",
      "translations": [
        "to be willing to do sth",
        "to be ready to do sth",
        "to be happy to do sth",
        "content",
        "satisfied"
      ]
    },
    {
      "id": 3637,
      "hanzi": "雷达",
      "pinyin": "léi dá",
      "translations": [
        "radar (loanword)"
      ]
    },
    {
      "id": 3638,
      "hanzi": "类似",
      "pinyin": "lèi sì",
      "translations": [
        "similar",
        "analogous"
      ]
    },
    {
      "id": 3639,
      "hanzi": "冷淡",
      "pinyin": "lěng dàn",
      "translations": [
        "cold",
        "indifferent"
      ]
    },
    {
      "id": 3640,
      "hanzi": "冷酷",
      "pinyin": "lěng kù",
      "translations": [
        "grim",
        "unfeeling",
        "callous"
      ]
    },
    {
      "id": 3641,
      "hanzi": "冷却",
      "pinyin": "lěng què",
      "translations": [
        "to cool off",
        "cooling"
      ]
    },
    {
      "id": 3642,
      "hanzi": "愣",
      "pinyin": "lèng",
      "translations": [
        "to look distracted",
        "to stare blankly",
        "distracted",
        "blank",
        "(coll.) unexpectedly",
        "rash",
        "rashly"
      ]
    },
    {
      "id": 3643,
      "hanzi": "黎明",
      "pinyin": "lí míng",
      "translations": [
        "dawn",
        "daybreak"
      ]
    },
    {
      "id": 3644,
      "hanzi": "里程碑",
      "pinyin": "lǐ chéng bēi",
      "translations": [
        "milestone"
      ]
    },
    {
      "id": 3645,
      "hanzi": "礼节",
      "pinyin": "lǐ jié",
      "translations": [
        "etiquette"
      ]
    },
    {
      "id": 3646,
      "hanzi": "理睬",
      "pinyin": "lǐ cǎi",
      "translations": [
        "to heed",
        "to pay attention to"
      ]
    },
    {
      "id": 3647,
      "hanzi": "理所当然",
      "pinyin": "lǐ suǒ dāng rán",
      "translations": [
        "as it should be by rights (idiom); proper and to be expected as a matter of course",
        "inevitable and right"
      ]
    },
    {
      "id": 3648,
      "hanzi": "理直气壮",
      "pinyin": "lǐ zhí qì zhuàng",
      "translations": [
        "in the right and self-confident (idiom); bold and confident with justice on one's side",
        "to have the courage of one's convictions",
        "just and forceful"
      ]
    },
    {
      "id": 3649,
      "hanzi": "理智",
      "pinyin": "lǐ zhì",
      "translations": [
        "reason",
        "intellect",
        "rationality"
      ]
    },
    {
      "id": 3650,
      "hanzi": "立场",
      "pinyin": "lì chǎng",
      "translations": [
        "position",
        "standpoint",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3651,
      "hanzi": "立交桥",
      "pinyin": "lì jiāo qiáo",
      "translations": [
        "overpass",
        "flyover"
      ]
    },
    {
      "id": 3652,
      "hanzi": "立体",
      "pinyin": "lì tǐ",
      "translations": [
        "three-dimensional",
        "solid",
        "stereoscopic"
      ]
    },
    {
      "id": 3653,
      "hanzi": "立足",
      "pinyin": "lì zú",
      "translations": [
        "to stand",
        "to have a footing",
        "to be established",
        "to base oneself on"
      ]
    },
    {
      "id": 3654,
      "hanzi": "历代",
      "pinyin": "lì dài",
      "translations": [
        "successive generations",
        "successive dynasties",
        "past dynasties"
      ]
    },
    {
      "id": 3655,
      "hanzi": "历来",
      "pinyin": "lì lái",
      "translations": [
        "always",
        "throughout (a period of time)",
        "(of) all-time"
      ]
    },
    {
      "id": 3656,
      "hanzi": "利害",
      "pinyin": "lì hài",
      "translations": [
        "pros and cons",
        "advantages and disadvantages",
        "gains and losses"
      ]
    },
    {
      "id": 3657,
      "hanzi": "利率",
      "pinyin": "lì lǜ",
      "translations": [
        "interest rates"
      ]
    },
    {
      "id": 3658,
      "hanzi": "力所能及",
      "pinyin": "lì suǒ néng jí",
      "translations": [
        "as far as one's capabilities extend (idiom); to the best of one's ability",
        "within one's powers"
      ]
    },
    {
      "id": 3659,
      "hanzi": "力图",
      "pinyin": "lì tú",
      "translations": [
        "to try hard to",
        "to strive to"
      ]
    },
    {
      "id": 3660,
      "hanzi": "力争",
      "pinyin": "lì zhēng",
      "translations": [
        "to work hard for",
        "to do all one can",
        "to contend strongly"
      ]
    },
    {
      "id": 3661,
      "hanzi": "例外",
      "pinyin": "lì wài",
      "translations": [
        "(make an) exception"
      ]
    },
    {
      "id": 3662,
      "hanzi": "连年",
      "pinyin": "lián nián",
      "translations": [
        "successive years",
        "over many years"
      ]
    },
    {
      "id": 3663,
      "hanzi": "连锁",
      "pinyin": "lián suǒ",
      "translations": [
        "to interlock",
        "to be linked",
        "chain (store etc)"
      ]
    },
    {
      "id": 3664,
      "hanzi": "连同",
      "pinyin": "lián tóng",
      "translations": [
        "together with",
        "along with"
      ]
    },
    {
      "id": 3665,
      "hanzi": "联欢",
      "pinyin": "lián huān",
      "translations": [
        "have a get-together"
      ]
    },
    {
      "id": 3666,
      "hanzi": "联络",
      "pinyin": "lián luò",
      "translations": [
        "communication",
        "to get in touch with",
        "to contact",
        "connection (math.)"
      ]
    },
    {
      "id": 3667,
      "hanzi": "联盟",
      "pinyin": "lián méng",
      "translations": [
        "alliance",
        "union",
        "coalition"
      ]
    },
    {
      "id": 3668,
      "hanzi": "联想",
      "pinyin": "lián xiǎng",
      "translations": [
        "to associate (cognitively)",
        "to make an associative connection",
        "mental association",
        "word prediction and auto-complete functions of input method editing programs"
      ]
    },
    {
      "id": 3669,
      "hanzi": "廉洁",
      "pinyin": "lián jié",
      "translations": [
        "honest",
        "not coercive",
        "honesty",
        "integrity",
        "incorruptible"
      ]
    },
    {
      "id": 3670,
      "hanzi": "良心",
      "pinyin": "liáng xīn",
      "translations": [
        "conscience"
      ]
    },
    {
      "id": 3671,
      "hanzi": "晾",
      "pinyin": "liàng",
      "translations": [
        "to dry in the air"
      ]
    },
    {
      "id": 3672,
      "hanzi": "谅解",
      "pinyin": "liàng jiě",
      "translations": [
        "to understand",
        "to make allowances for",
        "understanding"
      ]
    },
    {
      "id": 3673,
      "hanzi": "辽阔",
      "pinyin": "liáo kuò",
      "translations": [
        "vast",
        "extensive"
      ]
    },
    {
      "id": 3674,
      "hanzi": "列举",
      "pinyin": "liè jǔ",
      "translations": [
        "a list",
        "to list",
        "to enumerate"
      ]
    },
    {
      "id": 3675,
      "hanzi": "淋",
      "pinyin": "lín",
      "translations": [
        "to drain",
        "to drench",
        "to drip",
        "diseases of the bladder"
      ]
    },
    {
      "id": 3676,
      "hanzi": "临床",
      "pinyin": "lín chuáng",
      "translations": [
        "clinical"
      ]
    },
    {
      "id": 3677,
      "hanzi": "吝啬",
      "pinyin": "lìn sè",
      "translations": [
        "stingy",
        "mean",
        "miserly"
      ]
    },
    {
      "id": 3678,
      "hanzi": "零星",
      "pinyin": "líng xīng",
      "translations": [
        "fragmentary",
        "random",
        "bits and pieces",
        "sporadic"
      ]
    },
    {
      "id": 3679,
      "hanzi": "凌晨",
      "pinyin": "líng chén",
      "translations": [
        "very early in the morning",
        "in the wee hours"
      ]
    },
    {
      "id": 3680,
      "hanzi": "灵感",
      "pinyin": "líng gǎn",
      "translations": [
        "inspiration",
        "insight",
        "a burst of creativity in scientific or artistic endeavor"
      ]
    },
    {
      "id": 3681,
      "hanzi": "灵魂",
      "pinyin": "líng hún",
      "translations": [
        "soul",
        "spirit"
      ]
    },
    {
      "id": 3682,
      "hanzi": "灵敏",
      "pinyin": "líng mǐn",
      "translations": [
        "smart",
        "clever",
        "sensitive",
        "keen",
        "quick",
        "sharp"
      ]
    },
    {
      "id": 3683,
      "hanzi": "伶俐",
      "pinyin": "líng lì",
      "translations": [
        "clever",
        "witty",
        "intelligent"
      ]
    },
    {
      "id": 3684,
      "hanzi": "领会",
      "pinyin": "lǐng huì",
      "translations": [
        "to understand",
        "to comprehend",
        "to grasp"
      ]
    },
    {
      "id": 3685,
      "hanzi": "领事馆",
      "pinyin": "lǐng shì guǎn",
      "translations": [
        "consulate"
      ]
    },
    {
      "id": 3686,
      "hanzi": "领土",
      "pinyin": "lǐng tǔ",
      "translations": [
        "territory"
      ]
    },
    {
      "id": 3687,
      "hanzi": "领悟",
      "pinyin": "lǐng wù",
      "translations": [
        "to understand",
        "to comprehend"
      ]
    },
    {
      "id": 3688,
      "hanzi": "领先",
      "pinyin": "lǐng xiān",
      "translations": [
        "to lead",
        "to be in front"
      ]
    },
    {
      "id": 3689,
      "hanzi": "领袖",
      "pinyin": "lǐng xiù",
      "translations": [
        "leader",
        "CL:個|个",
        "位",
        "名[míng]"
      ]
    },
    {
      "id": 3690,
      "hanzi": "溜",
      "pinyin": "liū",
      "translations": [
        "to slip away",
        "to escape in stealth",
        "to skate"
      ]
    },
    {
      "id": 3691,
      "hanzi": "留恋",
      "pinyin": "liú liàn",
      "translations": [
        "reluctant to leave",
        "to hate to have to go",
        "to recall fondly"
      ]
    },
    {
      "id": 3692,
      "hanzi": "留念",
      "pinyin": "liú niàn",
      "translations": [
        "to keep as a souvenir",
        "to recall fondly"
      ]
    },
    {
      "id": 3693,
      "hanzi": "留神",
      "pinyin": "liú shén",
      "translations": [
        "to take care",
        "to be careful"
      ]
    },
    {
      "id": 3694,
      "hanzi": "流浪",
      "pinyin": "liú làng",
      "translations": [
        "to drift about",
        "to wander",
        "to roam",
        "nomadic",
        "homeless",
        "unsettled (e.g. population)",
        "vagrant"
      ]
    },
    {
      "id": 3695,
      "hanzi": "流露",
      "pinyin": "liú lù",
      "translations": [
        "to express",
        "to reveal (one's thoughts or feelings)"
      ]
    },
    {
      "id": 3696,
      "hanzi": "流氓",
      "pinyin": "liú máng",
      "translations": [
        "rogue",
        "hoodlum",
        "gangster",
        "immoral behavior"
      ]
    },
    {
      "id": 3697,
      "hanzi": "流通",
      "pinyin": "liú tōng",
      "translations": [
        "to circulate",
        "to distribute",
        "circulation",
        "distribution"
      ]
    },
    {
      "id": 3698,
      "hanzi": "聋哑",
      "pinyin": "lóng yǎ",
      "translations": [
        "deaf and dumb"
      ]
    },
    {
      "id": 3699,
      "hanzi": "隆重",
      "pinyin": "lóng zhòng",
      "translations": [
        "grand",
        "prosperous",
        "ceremonious",
        "solemn"
      ]
    },
    {
      "id": 3700,
      "hanzi": "垄断",
      "pinyin": "lǒng duàn",
      "translations": [
        "to enjoy market dominance",
        "to monopolize"
      ]
    },
    {
      "id": 3701,
      "hanzi": "笼罩",
      "pinyin": "lǒng zhào",
      "translations": [
        "to envelop",
        "to shroud"
      ]
    },
    {
      "id": 3702,
      "hanzi": "搂",
      "pinyin": "lǒu",
      "translations": [
        "to hug",
        "to embrace",
        "to hold in one's arms"
      ]
    },
    {
      "id": 3703,
      "hanzi": "炉灶",
      "pinyin": "lú zào",
      "translations": [
        "stove"
      ]
    },
    {
      "id": 3704,
      "hanzi": "轮船",
      "pinyin": "lún chuán",
      "translations": [
        "steamship",
        "steamer",
        "ocean liner",
        "ship",
        "CL:艘[sōu]"
      ]
    },
    {
      "id": 3705,
      "hanzi": "轮廓",
      "pinyin": "lún kuò",
      "translations": [
        "an outline",
        "silhouette"
      ]
    },
    {
      "id": 3706,
      "hanzi": "轮胎",
      "pinyin": "lún tāi",
      "translations": [
        "tire",
        "pneumatic tire"
      ]
    },
    {
      "id": 3707,
      "hanzi": "论坛",
      "pinyin": "lùn tán",
      "translations": [
        "forum (for discussion)"
      ]
    },
    {
      "id": 3708,
      "hanzi": "论证",
      "pinyin": "lùn zhèng",
      "translations": [
        "to prove a point",
        "to expound on",
        "to demonstrate or prove (through argument)",
        "proof"
      ]
    },
    {
      "id": 3709,
      "hanzi": "啰唆",
      "pinyin": "luō suō",
      "translations": [
        "see 囉嗦|啰嗦[luō suo]"
      ]
    },
    {
      "id": 3710,
      "hanzi": "螺丝钉",
      "pinyin": "luó sī dīng",
      "translations": [
        "screw"
      ]
    },
    {
      "id": 3711,
      "hanzi": "落成",
      "pinyin": "luò chéng",
      "translations": [
        "to complete a construction project"
      ]
    },
    {
      "id": 3712,
      "hanzi": "落实",
      "pinyin": "luò shí",
      "translations": [
        "practical",
        "workable",
        "to implement",
        "to carry out",
        "to decide"
      ]
    },
    {
      "id": 3713,
      "hanzi": "络绎不绝",
      "pinyin": "luò yì bù jué",
      "translations": [
        "continuously; in an endless stream (idiom)"
      ]
    },
    {
      "id": 3714,
      "hanzi": "屡次",
      "pinyin": "lǚ cì",
      "translations": [
        "repeatedly",
        "time and again"
      ]
    },
    {
      "id": 3715,
      "hanzi": "履行",
      "pinyin": "lǚ xíng",
      "translations": [
        "to fulfill (one's obligations)",
        "to carry out (a task)",
        "to implement (an agreement)",
        "to perform"
      ]
    },
    {
      "id": 3716,
      "hanzi": "掠夺",
      "pinyin": "lvè duó",
      "translations": [
        "to plunder",
        "to rob",
        "also written 略奪|略夺"
      ]
    },
    {
      "id": 3717,
      "hanzi": "略微",
      "pinyin": "lvè wēi",
      "translations": [
        "a little bit",
        "slightly"
      ]
    },
    {
      "id": 3718,
      "hanzi": "麻痹",
      "pinyin": "má bì",
      "translations": [
        "paralysis",
        "palsy",
        "numbness",
        "to benumb"
      ]
    },
    {
      "id": 3719,
      "hanzi": "麻木",
      "pinyin": "má mù",
      "translations": [
        "numb",
        "insensitive",
        "apathetic"
      ]
    },
    {
      "id": 3720,
      "hanzi": "麻醉",
      "pinyin": "má zuì",
      "translations": [
        "anesthesia",
        "fig. to poison (sb's mind)"
      ]
    },
    {
      "id": 3721,
      "hanzi": "码头",
      "pinyin": "mǎ tóu",
      "translations": [
        "dock",
        "pier",
        "wharf",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3722,
      "hanzi": "嘛",
      "pinyin": "ma",
      "translations": [
        "modal particle indicating that sth is obvious",
        "particle indicating a pause for emphasis"
      ]
    },
    {
      "id": 3723,
      "hanzi": "埋伏",
      "pinyin": "mái fú",
      "translations": [
        "to ambush",
        "to lie in wait for",
        "to lie low",
        "ambush"
      ]
    },
    {
      "id": 3724,
      "hanzi": "埋没",
      "pinyin": "mái mò",
      "translations": [
        "to engulf",
        "to bury",
        "to overlook",
        "to stifle",
        "to neglect",
        "to fall into oblivion"
      ]
    },
    {
      "id": 3725,
      "hanzi": "埋葬",
      "pinyin": "mái zàng",
      "translations": [
        "to bury"
      ]
    },
    {
      "id": 3726,
      "hanzi": "迈",
      "pinyin": "mài",
      "translations": [
        "take a step"
      ]
    },
    {
      "id": 3727,
      "hanzi": "脉搏",
      "pinyin": "mài bó",
      "translations": [
        "a pulse (both medical and figurative)"
      ]
    },
    {
      "id": 3728,
      "hanzi": "埋怨",
      "pinyin": "mán yuàn",
      "translations": [
        "to complain",
        "to grumble (about)",
        "to reproach",
        "to blame"
      ]
    },
    {
      "id": 3729,
      "hanzi": "慢性",
      "pinyin": "màn xìng",
      "translations": [
        "slow and patient",
        "chronic (disease)",
        "slow to take effect (e.g. a slow poison)"
      ]
    },
    {
      "id": 3730,
      "hanzi": "漫长",
      "pinyin": "màn cháng",
      "translations": [
        "very long",
        "endless"
      ]
    },
    {
      "id": 3731,
      "hanzi": "漫画",
      "pinyin": "màn huà",
      "translations": [
        "caricature",
        "cartoon",
        "Japanese manga"
      ]
    },
    {
      "id": 3732,
      "hanzi": "蔓延",
      "pinyin": "màn yán",
      "translations": [
        "to extend",
        "to spread"
      ]
    },
    {
      "id": 3733,
      "hanzi": "忙碌",
      "pinyin": "máng lù",
      "translations": [
        "busy",
        "bustling"
      ]
    },
    {
      "id": 3734,
      "hanzi": "茫茫",
      "pinyin": "máng máng",
      "translations": [
        "boundless",
        "vast and obscure"
      ]
    },
    {
      "id": 3735,
      "hanzi": "茫然",
      "pinyin": "máng rán",
      "translations": [
        "blankly",
        "vacantly",
        "at a loss"
      ]
    },
    {
      "id": 3736,
      "hanzi": "盲目",
      "pinyin": "máng mù",
      "translations": [
        "blind",
        "blindly",
        "ignorant",
        "lacking understanding"
      ]
    },
    {
      "id": 3737,
      "hanzi": "冒充",
      "pinyin": "mào chōng",
      "translations": [
        "to feign",
        "to pretend to be",
        "to pass oneself off as"
      ]
    },
    {
      "id": 3738,
      "hanzi": "茂盛",
      "pinyin": "mào shèng",
      "translations": [
        "lush"
      ]
    },
    {
      "id": 3739,
      "hanzi": "枚",
      "pinyin": "méi",
      "translations": [
        "classifier for coins",
        "rings",
        "badges",
        "pearls",
        "sporting medals",
        "rockets",
        "satellites etc",
        "tree trunk",
        "whip",
        "wooden peg",
        "used as a gag for marching soldiers (old)"
      ]
    },
    {
      "id": 3740,
      "hanzi": "没辙",
      "pinyin": "méi zhé",
      "translations": [
        "(idiom) unable to solve; no way to escape a problem"
      ]
    },
    {
      "id": 3741,
      "hanzi": "媒介",
      "pinyin": "méi jiè",
      "translations": [
        "media",
        "medium"
      ]
    },
    {
      "id": 3742,
      "hanzi": "媒体",
      "pinyin": "méi tǐ",
      "translations": [
        "media",
        "esp. news media"
      ]
    },
    {
      "id": 3743,
      "hanzi": "美观",
      "pinyin": "měi guān",
      "translations": [
        "pleasing to the eye",
        "beautiful",
        "artistic"
      ]
    },
    {
      "id": 3744,
      "hanzi": "美满",
      "pinyin": "měi mǎn",
      "translations": [
        "happy",
        "blissful"
      ]
    },
    {
      "id": 3745,
      "hanzi": "美妙",
      "pinyin": "měi miào",
      "translations": [
        "beautiful",
        "wonderful",
        "splendid"
      ]
    },
    {
      "id": 3746,
      "hanzi": "门诊",
      "pinyin": "mén zhěn",
      "translations": [
        "outpatient service"
      ]
    },
    {
      "id": 3747,
      "hanzi": "蒙",
      "pinyin": "méng",
      "translations": [
        "to cover",
        "ignorant",
        "to suffer (misfortune)",
        "to receive (a favor)",
        "to cheat"
      ]
    },
    {
      "id": 3748,
      "hanzi": "萌芽",
      "pinyin": "méng yá",
      "translations": [
        "sprout",
        "germ of a plant"
      ]
    },
    {
      "id": 3749,
      "hanzi": "猛烈",
      "pinyin": "měng liè",
      "translations": [
        "fierce",
        "violent (criticism etc)"
      ]
    },
    {
      "id": 3750,
      "hanzi": "梦想",
      "pinyin": "mèng xiǎng",
      "translations": [
        "(figuratively) to dream of",
        "dream"
      ]
    },
    {
      "id": 3751,
      "hanzi": "眯",
      "pinyin": "mī",
      "translations": [
        "to narrow one's eyes",
        "to squint"
      ]
    },
    {
      "id": 3752,
      "hanzi": "弥补",
      "pinyin": "mí bǔ",
      "translations": [
        "to complement",
        "to make up for a deficiency"
      ]
    },
    {
      "id": 3753,
      "hanzi": "弥漫",
      "pinyin": "mí màn",
      "translations": [
        "variant of 彌漫|弥漫[mí màn]"
      ]
    },
    {
      "id": 3754,
      "hanzi": "迷惑",
      "pinyin": "mí huo",
      "translations": [
        "to puzzle",
        "to confuse",
        "to baffle"
      ]
    },
    {
      "id": 3755,
      "hanzi": "迷人",
      "pinyin": "mí rén",
      "translations": [
        "fascinating",
        "enchanting",
        "charming",
        "tempting"
      ]
    },
    {
      "id": 3756,
      "hanzi": "迷失",
      "pinyin": "mí shī",
      "translations": [
        "lost",
        "not knowing one's location"
      ]
    },
    {
      "id": 3757,
      "hanzi": "迷信",
      "pinyin": "mí xìn",
      "translations": [
        "superstition",
        "to have a superstitious belief (in sth)"
      ]
    },
    {
      "id": 3758,
      "hanzi": "密度",
      "pinyin": "mì dù",
      "translations": [
        "density",
        "thickness"
      ]
    },
    {
      "id": 3759,
      "hanzi": "密封",
      "pinyin": "mì fēng",
      "translations": [
        "to seal up"
      ]
    },
    {
      "id": 3760,
      "hanzi": "免得",
      "pinyin": "miǎn de",
      "translations": [
        "so as not to",
        "so as to avoid"
      ]
    },
    {
      "id": 3761,
      "hanzi": "免疫",
      "pinyin": "miǎn yì",
      "translations": [
        "immunity (to disease)"
      ]
    },
    {
      "id": 3762,
      "hanzi": "勉励",
      "pinyin": "miǎn lì",
      "translations": [
        "to encourage"
      ]
    },
    {
      "id": 3763,
      "hanzi": "勉强",
      "pinyin": "miǎn qiǎng",
      "translations": [
        "to do with difficulty",
        "to force sb to do sth",
        "reluctant",
        "barely enough"
      ]
    },
    {
      "id": 3764,
      "hanzi": "面貌",
      "pinyin": "miàn mào",
      "translations": [
        "appearance",
        "face",
        "features",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3765,
      "hanzi": "面子",
      "pinyin": "miàn zi",
      "translations": [
        "outer surface",
        "outside",
        "honor",
        "reputation",
        "face (as in \"losing face\")",
        "self-respect",
        "feelings",
        "(medicinal) powder"
      ]
    },
    {
      "id": 3766,
      "hanzi": "描绘",
      "pinyin": "miáo huì",
      "translations": [
        "to describe",
        "to portray"
      ]
    },
    {
      "id": 3767,
      "hanzi": "渺小",
      "pinyin": "miǎo xiǎo",
      "translations": [
        "minute",
        "tiny",
        "negligible",
        "insignificant"
      ]
    },
    {
      "id": 3768,
      "hanzi": "蔑视",
      "pinyin": "miè shì",
      "translations": [
        "to loathe",
        "to despise",
        "contempt"
      ]
    },
    {
      "id": 3769,
      "hanzi": "灭亡",
      "pinyin": "miè wáng",
      "translations": [
        "to be destroyed",
        "to become extinct",
        "to perish",
        "to die out",
        "to destroy",
        "to exterminate"
      ]
    },
    {
      "id": 3770,
      "hanzi": "民间",
      "pinyin": "mín jiān",
      "translations": [
        "among the people",
        "popular",
        "folk",
        "non-governmental",
        "involving people rather than governments"
      ]
    },
    {
      "id": 3771,
      "hanzi": "民用",
      "pinyin": "mín yòng",
      "translations": [
        "(for) civilian use"
      ]
    },
    {
      "id": 3772,
      "hanzi": "敏感",
      "pinyin": "mǐn gǎn",
      "translations": [
        "sensitive",
        "susceptible",
        "politically sensitive (pretext for censorship)"
      ]
    },
    {
      "id": 3773,
      "hanzi": "敏捷",
      "pinyin": "mǐn jié",
      "translations": [
        "nimble",
        "quick",
        "shrewd"
      ]
    },
    {
      "id": 3774,
      "hanzi": "敏锐",
      "pinyin": "mǐn ruì",
      "translations": [
        "keen",
        "sharp",
        "acute"
      ]
    },
    {
      "id": 3775,
      "hanzi": "明明",
      "pinyin": "míng míng",
      "translations": [
        "obviously",
        "plainly",
        "undoubtedly",
        "definitely"
      ]
    },
    {
      "id": 3776,
      "hanzi": "名次",
      "pinyin": "míng cì",
      "translations": [
        "position in a ranking of names"
      ]
    },
    {
      "id": 3777,
      "hanzi": "名额",
      "pinyin": "míng é",
      "translations": [
        "quota",
        "number of places",
        "place (in an institution, a group etc)"
      ]
    },
    {
      "id": 3778,
      "hanzi": "名副其实",
      "pinyin": "míng fù qí shí",
      "translations": [
        "not just in name only",
        "but also in reality (idiom)"
      ]
    },
    {
      "id": 3779,
      "hanzi": "名誉",
      "pinyin": "míng yù",
      "translations": [
        "fame",
        "reputation",
        "honor",
        "honorary",
        "emeritus (of retired professor)"
      ]
    },
    {
      "id": 3780,
      "hanzi": "命名",
      "pinyin": "mìng míng",
      "translations": [
        "to give a name to",
        "to dub",
        "to christen",
        "to designate",
        "named after",
        "naming"
      ]
    },
    {
      "id": 3781,
      "hanzi": "摸索",
      "pinyin": "mō suo",
      "translations": [
        "to feel about",
        "to grope about",
        "to fumble",
        "to do things slowly"
      ]
    },
    {
      "id": 3782,
      "hanzi": "膜",
      "pinyin": "mó",
      "translations": [
        "membrane",
        "film"
      ]
    },
    {
      "id": 3783,
      "hanzi": "摩擦",
      "pinyin": "mó cā",
      "translations": [
        "friction",
        "rubbing",
        "chafing",
        "fig. disharmony",
        "conflict",
        "same as 磨擦"
      ]
    },
    {
      "id": 3784,
      "hanzi": "磨合",
      "pinyin": "mó hé",
      "translations": [
        "to break in",
        "to wear in"
      ]
    },
    {
      "id": 3785,
      "hanzi": "模范",
      "pinyin": "mó fàn",
      "translations": [
        "model",
        "fine example"
      ]
    },
    {
      "id": 3786,
      "hanzi": "模式",
      "pinyin": "mó shì",
      "translations": [
        "mode",
        "method"
      ]
    },
    {
      "id": 3787,
      "hanzi": "模型",
      "pinyin": "mó xíng",
      "translations": [
        "model",
        "mould",
        "matrix",
        "pattern"
      ]
    },
    {
      "id": 3788,
      "hanzi": "魔鬼",
      "pinyin": "mó guǐ",
      "translations": [
        "devil"
      ]
    },
    {
      "id": 3789,
      "hanzi": "魔术",
      "pinyin": "mó shù",
      "translations": [
        "magic"
      ]
    },
    {
      "id": 3790,
      "hanzi": "抹杀",
      "pinyin": "mǒ shā",
      "translations": [
        "to erase",
        "to cover traces",
        "to obliterate evidence",
        "to expunge",
        "to blot out",
        "to suppress"
      ]
    },
    {
      "id": 3791,
      "hanzi": "莫名其妙",
      "pinyin": "mò míng qí miào",
      "translations": [
        "unfathomable mystery (idiom); subtle and ineffable",
        "unable to make head or tail of it",
        "boring (e.g. movie)"
      ]
    },
    {
      "id": 3792,
      "hanzi": "默默",
      "pinyin": "mò mò",
      "translations": [
        "in silence",
        "not speaking"
      ]
    },
    {
      "id": 3793,
      "hanzi": "墨水儿",
      "pinyin": "mò shuǐ r",
      "translations": [
        "erhua variant of 墨水",
        "ink"
      ]
    },
    {
      "id": 3794,
      "hanzi": "谋求",
      "pinyin": "móu qiú",
      "translations": [
        "to seek",
        "to strive for"
      ]
    },
    {
      "id": 3795,
      "hanzi": "模样",
      "pinyin": "mú yàng",
      "translations": [
        "look",
        "style",
        "appearance",
        "approximation",
        "about",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3796,
      "hanzi": "母语",
      "pinyin": "mǔ yǔ",
      "translations": [
        "native language",
        "mother tongue",
        "(linguistics) parent language"
      ]
    },
    {
      "id": 3797,
      "hanzi": "目睹",
      "pinyin": "mù dǔ",
      "translations": [
        "to witness",
        "to see at first hand",
        "to see with one's own eyes"
      ]
    },
    {
      "id": 3798,
      "hanzi": "目光",
      "pinyin": "mù guāng",
      "translations": [
        "sight",
        "vision",
        "view",
        "gaze",
        "look"
      ]
    },
    {
      "id": 3799,
      "hanzi": "沐浴",
      "pinyin": "mù yù",
      "translations": [
        "to take a bath",
        "to bathe",
        "to immerse"
      ]
    },
    {
      "id": 3800,
      "hanzi": "拿手",
      "pinyin": "ná shǒu",
      "translations": [
        "expert in",
        "good at"
      ]
    },
    {
      "id": 3801,
      "hanzi": "纳闷儿",
      "pinyin": "nà mèn r",
      "translations": [
        "puzzled",
        "bewildered"
      ]
    },
    {
      "id": 3802,
      "hanzi": "耐用",
      "pinyin": "nài yòng",
      "translations": [
        "durable"
      ]
    },
    {
      "id": 3803,
      "hanzi": "难得",
      "pinyin": "nán dé",
      "translations": [
        "seldom",
        "rare",
        "hard to come by"
      ]
    },
    {
      "id": 3804,
      "hanzi": "难堪",
      "pinyin": "nán kān",
      "translations": [
        "hard to take",
        "embarrassed"
      ]
    },
    {
      "id": 3805,
      "hanzi": "难免",
      "pinyin": "nán miǎn",
      "translations": [
        "hard to avoid",
        "difficult to escape from"
      ]
    },
    {
      "id": 3806,
      "hanzi": "难能可贵",
      "pinyin": "nán néng kě guì",
      "translations": [
        "rare and precious",
        "valuable",
        "remarkable"
      ]
    },
    {
      "id": 3807,
      "hanzi": "恼火",
      "pinyin": "nǎo huǒ",
      "translations": [
        "to get angry",
        "irritated",
        "to annoy",
        "to aggravate",
        "annoying"
      ]
    },
    {
      "id": 3808,
      "hanzi": "内涵",
      "pinyin": "nèi hán",
      "translations": [
        "meaning",
        "content",
        "essential properties implied or reflected by a notion",
        "intention",
        "connotation",
        "self-possessed"
      ]
    },
    {
      "id": 3809,
      "hanzi": "内幕",
      "pinyin": "nèi mù",
      "translations": [
        "inside story",
        "non-public information",
        "behind the scenes",
        "internal"
      ]
    },
    {
      "id": 3810,
      "hanzi": "内在",
      "pinyin": "nèi zài",
      "translations": [
        "intrinsic",
        "innate"
      ]
    },
    {
      "id": 3811,
      "hanzi": "能量",
      "pinyin": "néng liàng",
      "translations": [
        "energy",
        "capabilities"
      ]
    },
    {
      "id": 3812,
      "hanzi": "嗯",
      "pinyin": "en",
      "translations": [
        "interjection indicating approval",
        "appreciation or agreement"
      ]
    },
    {
      "id": 3813,
      "hanzi": "拟定",
      "pinyin": "nǐ dìng",
      "translations": [
        "to draw up",
        "to draft",
        "to formulate"
      ]
    },
    {
      "id": 3814,
      "hanzi": "年度",
      "pinyin": "nián dù",
      "translations": [
        "year (e.g. school year, fiscal year)",
        "annual"
      ]
    },
    {
      "id": 3815,
      "hanzi": "捏",
      "pinyin": "niē",
      "translations": [
        "to pinch (with one's fingers)",
        "to knead",
        "to make up"
      ]
    },
    {
      "id": 3816,
      "hanzi": "拧",
      "pinyin": "níng",
      "translations": [
        "to pinch",
        "wring"
      ]
    },
    {
      "id": 3817,
      "hanzi": "凝固",
      "pinyin": "níng gù",
      "translations": [
        "to freeze",
        "to solidify",
        "to congeal",
        "fig. with rapt attention"
      ]
    },
    {
      "id": 3818,
      "hanzi": "凝聚",
      "pinyin": "níng jù",
      "translations": [
        "to condense",
        "to coagulate",
        "coacervation (i.e. form tiny droplets)",
        "aggregation",
        "coherent"
      ]
    },
    {
      "id": 3819,
      "hanzi": "凝视",
      "pinyin": "níng shì",
      "translations": [
        "to gaze at",
        "to fix one's eyes on"
      ]
    },
    {
      "id": 3820,
      "hanzi": "宁肯",
      "pinyin": "nìng kěn",
      "translations": [
        "would rather...",
        "it would be better...",
        "would prefer"
      ]
    },
    {
      "id": 3821,
      "hanzi": "宁愿",
      "pinyin": "nìng yuàn",
      "translations": [
        "would rather",
        "better"
      ]
    },
    {
      "id": 3822,
      "hanzi": "纽扣儿",
      "pinyin": "niǔ kòu ér",
      "translations": [
        "Buttons children"
      ]
    },
    {
      "id": 3823,
      "hanzi": "扭转",
      "pinyin": "niǔ zhuǎn",
      "translations": [
        "to reverse",
        "to turn around (an undesirable situation)"
      ]
    },
    {
      "id": 3824,
      "hanzi": "浓厚",
      "pinyin": "nóng hòu",
      "translations": [
        "dense",
        "thick (fog, clouds etc)",
        "to have a strong interest in",
        "deep",
        "fully saturated (color)"
      ]
    },
    {
      "id": 3825,
      "hanzi": "农历",
      "pinyin": "nóng lì",
      "translations": [
        "the traditional Chinese calendar",
        "the lunar calendar"
      ]
    },
    {
      "id": 3826,
      "hanzi": "奴隶",
      "pinyin": "nú lì",
      "translations": [
        "slave"
      ]
    },
    {
      "id": 3827,
      "hanzi": "挪",
      "pinyin": "nuó",
      "translations": [
        "to shift",
        "to move"
      ]
    },
    {
      "id": 3828,
      "hanzi": "虐待",
      "pinyin": "nvè dài",
      "translations": [
        "to mistreat",
        "to maltreat",
        "to abuse",
        "mistreatment",
        "maltreatment"
      ]
    },
    {
      "id": 3829,
      "hanzi": "哦",
      "pinyin": "ò",
      "translations": [
        "oh (interjection indicating that one has just learned sth)"
      ]
    },
    {
      "id": 3830,
      "hanzi": "殴打",
      "pinyin": "ōu dǎ",
      "translations": [
        "to beat up",
        "to come to blows",
        "battery (law)"
      ]
    },
    {
      "id": 3831,
      "hanzi": "欧洲",
      "pinyin": "Oū zhōu",
      "translations": [
        "Europe",
        "European"
      ]
    },
    {
      "id": 3832,
      "hanzi": "呕吐",
      "pinyin": "ǒu tù",
      "translations": [
        "to vomit"
      ]
    },
    {
      "id": 3833,
      "hanzi": "趴",
      "pinyin": "pā",
      "translations": [
        "to lie on one's stomach",
        "to lean forward",
        "resting one's upper body (on a desktop etc)",
        "(Taiwan) percent"
      ]
    },
    {
      "id": 3834,
      "hanzi": "排斥",
      "pinyin": "pái chì",
      "translations": [
        "to reject",
        "to exclude",
        "to eliminate",
        "to remove",
        "to repel"
      ]
    },
    {
      "id": 3835,
      "hanzi": "排除",
      "pinyin": "pái chú",
      "translations": [
        "to eliminate",
        "to get rid of",
        "to remove"
      ]
    },
    {
      "id": 3836,
      "hanzi": "排放",
      "pinyin": "pái fàng",
      "translations": [
        "emission",
        "discharge",
        "exhaust (gas etc)"
      ]
    },
    {
      "id": 3837,
      "hanzi": "徘徊",
      "pinyin": "pái huái",
      "translations": [
        "to dither",
        "to hesitate",
        "to pace back and forth",
        "by ext. to hover around",
        "to linger"
      ]
    },
    {
      "id": 3838,
      "hanzi": "派别",
      "pinyin": "pài bié",
      "translations": [
        "denomination",
        "group",
        "school",
        "faction",
        "school of thought"
      ]
    },
    {
      "id": 3839,
      "hanzi": "派遣",
      "pinyin": "pài qiǎn",
      "translations": [
        "to send (on a mission)",
        "to dispatch"
      ]
    },
    {
      "id": 3840,
      "hanzi": "攀登",
      "pinyin": "pān dēng",
      "translations": [
        "to climb",
        "to pull oneself up",
        "to clamber",
        "to scale",
        "fig. to forge ahead in the face of hardships and danger"
      ]
    },
    {
      "id": 3841,
      "hanzi": "盘旋",
      "pinyin": "pán xuán",
      "translations": [
        "to spiral",
        "to circle",
        "to go around",
        "to hover",
        "to orbit"
      ]
    },
    {
      "id": 3842,
      "hanzi": "畔",
      "pinyin": "pàn",
      "translations": [
        "bank",
        "field-path"
      ]
    },
    {
      "id": 3843,
      "hanzi": "判决",
      "pinyin": "pàn jué",
      "translations": [
        "judgment (by a court of law)",
        "to pass judgment on",
        "to sentence"
      ]
    },
    {
      "id": 3844,
      "hanzi": "庞大",
      "pinyin": "páng dà",
      "translations": [
        "huge",
        "enormous",
        "tremendous"
      ]
    },
    {
      "id": 3845,
      "hanzi": "抛弃",
      "pinyin": "pāo qì",
      "translations": [
        "to abandon",
        "to discard",
        "to renounce",
        "to dump (sb)"
      ]
    },
    {
      "id": 3846,
      "hanzi": "泡沫",
      "pinyin": "pào mò",
      "translations": [
        "foam",
        "(soap) bubble",
        "(economic) bubble"
      ]
    },
    {
      "id": 3847,
      "hanzi": "培训",
      "pinyin": "péi xùn",
      "translations": [
        "to cultivate",
        "to train",
        "to groom",
        "training"
      ]
    },
    {
      "id": 3848,
      "hanzi": "培育",
      "pinyin": "péi yù",
      "translations": [
        "to train",
        "to breed"
      ]
    },
    {
      "id": 3849,
      "hanzi": "配备",
      "pinyin": "pèi bèi",
      "translations": [
        "to allocate",
        "to provide",
        "to outfit with"
      ]
    },
    {
      "id": 3850,
      "hanzi": "配偶",
      "pinyin": "pèi ǒu",
      "translations": [
        "consort",
        "mate",
        "spouse"
      ]
    },
    {
      "id": 3851,
      "hanzi": "配套",
      "pinyin": "pèi tào",
      "translations": [
        "to form a complete set",
        "coherent"
      ]
    },
    {
      "id": 3852,
      "hanzi": "盆地",
      "pinyin": "pén dì",
      "translations": [
        "basin (low-lying geographical feature)",
        "depression"
      ]
    },
    {
      "id": 3853,
      "hanzi": "烹饪",
      "pinyin": "pēng rèn",
      "translations": [
        "cooking",
        "culinary arts"
      ]
    },
    {
      "id": 3854,
      "hanzi": "捧",
      "pinyin": "pěng",
      "translations": [
        "to clasp",
        "to cup the hands",
        "to hold up with both hands",
        "to offer (esp. in cupped hands)",
        "to praise",
        "to flatter"
      ]
    },
    {
      "id": 3855,
      "hanzi": "劈",
      "pinyin": "pī",
      "translations": [
        "to hack",
        "to chop",
        "to split open",
        "(of lightning) to strike"
      ]
    },
    {
      "id": 3856,
      "hanzi": "批发",
      "pinyin": "pī fā",
      "translations": [
        "wholesale",
        "bulk trade",
        "distribution"
      ]
    },
    {
      "id": 3857,
      "hanzi": "批判",
      "pinyin": "pī pàn",
      "translations": [
        "to criticize",
        "critique",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3858,
      "hanzi": "疲惫",
      "pinyin": "pí bèi",
      "translations": [
        "beaten",
        "exhausted",
        "tired"
      ]
    },
    {
      "id": 3859,
      "hanzi": "疲倦",
      "pinyin": "pí juàn",
      "translations": [
        "to tire",
        "tired"
      ]
    },
    {
      "id": 3860,
      "hanzi": "皮革",
      "pinyin": "pí gé",
      "translations": [
        "leather",
        "CL:張|张[zhāng]"
      ]
    },
    {
      "id": 3861,
      "hanzi": "屁股",
      "pinyin": "pì gu",
      "translations": [
        "buttocks",
        "bottom",
        "butt",
        "back part"
      ]
    },
    {
      "id": 3862,
      "hanzi": "譬如",
      "pinyin": "pì rú",
      "translations": [
        "for example",
        "for instance",
        "such as"
      ]
    },
    {
      "id": 3863,
      "hanzi": "偏差",
      "pinyin": "piān chā",
      "translations": [
        "bias",
        "deviation"
      ]
    },
    {
      "id": 3864,
      "hanzi": "偏见",
      "pinyin": "piān jiàn",
      "translations": [
        "prejudice"
      ]
    },
    {
      "id": 3865,
      "hanzi": "偏僻",
      "pinyin": "piān pì",
      "translations": [
        "remote",
        "desolate",
        "far from the city"
      ]
    },
    {
      "id": 3866,
      "hanzi": "偏偏",
      "pinyin": "piān piān",
      "translations": [
        "(indicates that sth turns out just the opposite of what one would expect or what would be normal)",
        "unfortunately",
        "against expectations"
      ]
    },
    {
      "id": 3867,
      "hanzi": "片断",
      "pinyin": "piàn duàn",
      "translations": [
        "section",
        "fragment",
        "segment"
      ]
    },
    {
      "id": 3868,
      "hanzi": "片刻",
      "pinyin": "piàn kè",
      "translations": [
        "short period of time",
        "a moment"
      ]
    },
    {
      "id": 3869,
      "hanzi": "飘扬",
      "pinyin": "piāo yáng",
      "translations": [
        "to wave",
        "to flutter",
        "to fly"
      ]
    },
    {
      "id": 3870,
      "hanzi": "漂浮",
      "pinyin": "piāo fú",
      "translations": [
        "to float",
        "to hover",
        "to drift (also fig., to lead a wandering life)",
        "to rove",
        "showy",
        "superficial"
      ]
    },
    {
      "id": 3871,
      "hanzi": "拼搏",
      "pinyin": "pīn bó",
      "translations": [
        "to struggle",
        "to wrestle"
      ]
    },
    {
      "id": 3872,
      "hanzi": "拼命",
      "pinyin": "pīn mìng",
      "translations": [
        "to do one's utmost",
        "with all one's might",
        "at all costs",
        "(to work or fight) as if one's life depends on it"
      ]
    },
    {
      "id": 3873,
      "hanzi": "频繁",
      "pinyin": "pín fán",
      "translations": [
        "frequently",
        "often"
      ]
    },
    {
      "id": 3874,
      "hanzi": "频率",
      "pinyin": "pín lǜ",
      "translations": [
        "frequency"
      ]
    },
    {
      "id": 3875,
      "hanzi": "贫乏",
      "pinyin": "pín fá",
      "translations": [
        "lack",
        "incomplete"
      ]
    },
    {
      "id": 3876,
      "hanzi": "贫困",
      "pinyin": "pín kùn",
      "translations": [
        "impoverished",
        "poverty"
      ]
    },
    {
      "id": 3877,
      "hanzi": "品尝",
      "pinyin": "pǐn cháng",
      "translations": [
        "to taste a small amount",
        "to sample"
      ]
    },
    {
      "id": 3878,
      "hanzi": "品德",
      "pinyin": "pǐn dé",
      "translations": [
        "moral character"
      ]
    },
    {
      "id": 3879,
      "hanzi": "品行",
      "pinyin": "pǐn xíng",
      "translations": [
        "behavior",
        "moral conduct"
      ]
    },
    {
      "id": 3880,
      "hanzi": "品质",
      "pinyin": "pǐn zhì",
      "translations": [
        "quality"
      ]
    },
    {
      "id": 3881,
      "hanzi": "平凡",
      "pinyin": "píng fán",
      "translations": [
        "commonplace",
        "ordinary",
        "mediocre"
      ]
    },
    {
      "id": 3882,
      "hanzi": "平面",
      "pinyin": "píng miàn",
      "translations": [
        "plane (flat surface)",
        "print media"
      ]
    },
    {
      "id": 3883,
      "hanzi": "平坦",
      "pinyin": "píng tǎn",
      "translations": [
        "level",
        "even",
        "smooth",
        "flat"
      ]
    },
    {
      "id": 3884,
      "hanzi": "平行",
      "pinyin": "píng xíng",
      "translations": [
        "parallel",
        "of equal rank",
        "simultaneous"
      ]
    },
    {
      "id": 3885,
      "hanzi": "平原",
      "pinyin": "píng yuán",
      "translations": [
        "field",
        "plain",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3886,
      "hanzi": "评估",
      "pinyin": "píng gū",
      "translations": [
        "to evaluate",
        "to assess",
        "assessment",
        "evaluation"
      ]
    },
    {
      "id": 3887,
      "hanzi": "评论",
      "pinyin": "píng lùn",
      "translations": [
        "to comment on",
        "to discuss",
        "comment",
        "commentary",
        "CL:篇[piān]"
      ]
    },
    {
      "id": 3888,
      "hanzi": "屏障",
      "pinyin": "píng zhàng",
      "translations": [
        "protective screen"
      ]
    },
    {
      "id": 3889,
      "hanzi": "坡",
      "pinyin": "pō",
      "translations": [
        "slope",
        "CL:個|个[gè]",
        "sloping",
        "slanted"
      ]
    },
    {
      "id": 3890,
      "hanzi": "泼",
      "pinyin": "pō",
      "translations": [
        "to splash",
        "to spill",
        "rough and coarse",
        "brutish"
      ]
    },
    {
      "id": 3891,
      "hanzi": "颇",
      "pinyin": "pō",
      "translations": [
        "rather",
        "quite",
        "considerably (Taiwan pr. )",
        "oblique",
        "inclined",
        "slanting"
      ]
    },
    {
      "id": 3892,
      "hanzi": "破例",
      "pinyin": "pò lì",
      "translations": [
        "to make an exception"
      ]
    },
    {
      "id": 3893,
      "hanzi": "迫不及待",
      "pinyin": "pò bù jí dài",
      "translations": [
        "impatient (idiom); in a hurry",
        "itching to get on with it"
      ]
    },
    {
      "id": 3894,
      "hanzi": "迫害",
      "pinyin": "pò hài",
      "translations": [
        "to persecute",
        "persecution"
      ]
    },
    {
      "id": 3895,
      "hanzi": "魄力",
      "pinyin": "pò lì",
      "translations": [
        "courage",
        "daring",
        "boldness",
        "resolution",
        "drive"
      ]
    },
    {
      "id": 3896,
      "hanzi": "扑",
      "pinyin": "pū",
      "translations": [
        "to throw oneself at",
        "to pounce on",
        "to devote one's energies",
        "to flap",
        "to flutter",
        "to dab",
        "to pat",
        "to bend over"
      ]
    },
    {
      "id": 3897,
      "hanzi": "铺",
      "pinyin": "pū",
      "translations": [
        "to spread",
        "to display",
        "to set up",
        "(old) holder for door-knocker"
      ]
    },
    {
      "id": 3898,
      "hanzi": "普及",
      "pinyin": "pǔ jí",
      "translations": [
        "popular",
        "to popularize",
        "universal",
        "ubiquitous",
        "pervasive"
      ]
    },
    {
      "id": 3899,
      "hanzi": "朴实",
      "pinyin": "pǔ shí",
      "translations": [
        "plain",
        "simple",
        "guileless",
        "down-to-earth",
        "sincere and honest"
      ]
    },
    {
      "id": 3900,
      "hanzi": "瀑布",
      "pinyin": "pù bù",
      "translations": [
        "waterfall"
      ]
    },
    {
      "id": 3901,
      "hanzi": "期望",
      "pinyin": "qī wàng",
      "translations": [
        "to have expectations",
        "to earnestly hope",
        "expectation",
        "hope"
      ]
    },
    {
      "id": 3902,
      "hanzi": "期限",
      "pinyin": "qī xiàn",
      "translations": [
        "time limit",
        "deadline",
        "allotted time"
      ]
    },
    {
      "id": 3903,
      "hanzi": "欺负",
      "pinyin": "qī fu",
      "translations": [
        "to bully"
      ]
    },
    {
      "id": 3904,
      "hanzi": "欺骗",
      "pinyin": "qī piàn",
      "translations": [
        "to deceive",
        "to cheat"
      ]
    },
    {
      "id": 3905,
      "hanzi": "凄凉",
      "pinyin": "qī liáng",
      "translations": [
        "desolate"
      ]
    },
    {
      "id": 3906,
      "hanzi": "奇妙",
      "pinyin": "qí miào",
      "translations": [
        "fantastic",
        "wonderful"
      ]
    },
    {
      "id": 3907,
      "hanzi": "旗袍",
      "pinyin": "qí páo",
      "translations": [
        "Chinese-style dress",
        "cheongsam"
      ]
    },
    {
      "id": 3908,
      "hanzi": "旗帜",
      "pinyin": "qí zhì",
      "translations": [
        "ensign",
        "flag"
      ]
    },
    {
      "id": 3909,
      "hanzi": "齐全",
      "pinyin": "qí quán",
      "translations": [
        "complete"
      ]
    },
    {
      "id": 3910,
      "hanzi": "齐心协力",
      "pinyin": "qí xīn xié lì",
      "translations": [
        "to work with a common purpose (idiom); to make concerted efforts",
        "to pull together",
        "to work as one"
      ]
    },
    {
      "id": 3911,
      "hanzi": "歧视",
      "pinyin": "qí shì",
      "translations": [
        "to discriminate against",
        "discrimination"
      ]
    },
    {
      "id": 3912,
      "hanzi": "起草",
      "pinyin": "qǐ cǎo",
      "translations": [
        "draft (a bill)",
        "draw up (plans)"
      ]
    },
    {
      "id": 3913,
      "hanzi": "起初",
      "pinyin": "qǐ chū",
      "translations": [
        "originally",
        "at first",
        "at the outset"
      ]
    },
    {
      "id": 3914,
      "hanzi": "起伏",
      "pinyin": "qǐ fú",
      "translations": [
        "to move up and down",
        "to undulate",
        "ups and downs"
      ]
    },
    {
      "id": 3915,
      "hanzi": "起哄",
      "pinyin": "qǐ hòng",
      "translations": [
        "to heckle",
        "rowdy jeering",
        "to create a disturbance"
      ]
    },
    {
      "id": 3916,
      "hanzi": "起码",
      "pinyin": "qǐ mǎ",
      "translations": [
        "at the minimum",
        "at the very least"
      ]
    },
    {
      "id": 3917,
      "hanzi": "起义",
      "pinyin": "qǐ yì",
      "translations": [
        "uprising",
        "insurrection",
        "revolt"
      ]
    },
    {
      "id": 3918,
      "hanzi": "起源",
      "pinyin": "qǐ yuán",
      "translations": [
        "origin",
        "to originate",
        "to come from"
      ]
    },
    {
      "id": 3919,
      "hanzi": "启程",
      "pinyin": "qǐ chéng",
      "translations": [
        "to set out on a journey"
      ]
    },
    {
      "id": 3920,
      "hanzi": "启示",
      "pinyin": "qǐ shì",
      "translations": [
        "enlightenment",
        "revelation",
        "apocalypse"
      ]
    },
    {
      "id": 3921,
      "hanzi": "启事",
      "pinyin": "qǐ shì",
      "translations": [
        "announcement (written, on billboard, letter, newspaper or website)",
        "to post information",
        "a notice"
      ]
    },
    {
      "id": 3922,
      "hanzi": "乞丐",
      "pinyin": "qǐ gài",
      "translations": [
        "beggar"
      ]
    },
    {
      "id": 3923,
      "hanzi": "岂有此理",
      "pinyin": "qǐ yǒu cǐ lǐ",
      "translations": [
        "how can this be so? (idiom); preposterous",
        "ridiculous",
        "absurd"
      ]
    },
    {
      "id": 3924,
      "hanzi": "器材",
      "pinyin": "qì cái",
      "translations": [
        "equipment",
        "material"
      ]
    },
    {
      "id": 3925,
      "hanzi": "器官",
      "pinyin": "qì guān",
      "translations": [
        "organ (part of body tissue)",
        "apparatus"
      ]
    },
    {
      "id": 3926,
      "hanzi": "气概",
      "pinyin": "qì gài",
      "translations": [
        "lofty quality",
        "mettle",
        "spirit"
      ]
    },
    {
      "id": 3927,
      "hanzi": "气功",
      "pinyin": "qì gōng",
      "translations": [
        "qigong",
        "a system of deep breathing exercises"
      ]
    },
    {
      "id": 3928,
      "hanzi": "气魄",
      "pinyin": "qì pò",
      "translations": [
        "spirit",
        "boldness",
        "positive outlook",
        "imposing attitude"
      ]
    },
    {
      "id": 3929,
      "hanzi": "气色",
      "pinyin": "qì sè",
      "translations": [
        "complexion"
      ]
    },
    {
      "id": 3930,
      "hanzi": "气势",
      "pinyin": "qì shì",
      "translations": [
        "imposing manner",
        "loftiness",
        "grandeur",
        "energetic looks",
        "vigor"
      ]
    },
    {
      "id": 3931,
      "hanzi": "气味",
      "pinyin": "qì wèi",
      "translations": [
        "odor",
        "scent"
      ]
    },
    {
      "id": 3932,
      "hanzi": "气象",
      "pinyin": "qì xiàng",
      "translations": [
        "meteorological feature",
        "CL:個|个[gè]",
        "meteorology",
        "atmosphere",
        "ambience",
        "scene"
      ]
    },
    {
      "id": 3933,
      "hanzi": "气压",
      "pinyin": "qì yā",
      "translations": [
        "atmospheric pressure",
        "barometric pressure"
      ]
    },
    {
      "id": 3934,
      "hanzi": "迄今为止",
      "pinyin": "qì jīn wéi zhǐ",
      "translations": [
        "so far",
        "up to now",
        "still (not)"
      ]
    },
    {
      "id": 3935,
      "hanzi": "掐",
      "pinyin": "qiā",
      "translations": [
        "to pick (flowers)",
        "to pinch",
        "to nip",
        "to pinch off",
        "to clutch",
        "(slang) to fight"
      ]
    },
    {
      "id": 3936,
      "hanzi": "恰当",
      "pinyin": "qià dàng",
      "translations": [
        "appropriate",
        "suitable"
      ]
    },
    {
      "id": 3937,
      "hanzi": "恰到好处",
      "pinyin": "qià dào hǎo chù",
      "translations": [
        "it's just perfect",
        "it's just right"
      ]
    },
    {
      "id": 3938,
      "hanzi": "恰巧",
      "pinyin": "qià qiǎo",
      "translations": [
        "fortunately",
        "unexpectedly",
        "by coincidence"
      ]
    },
    {
      "id": 3939,
      "hanzi": "洽谈",
      "pinyin": "qià tán",
      "translations": [
        "to discuss"
      ]
    },
    {
      "id": 3940,
      "hanzi": "牵扯",
      "pinyin": "qiān chě",
      "translations": [
        "to involve",
        "to implicate"
      ]
    },
    {
      "id": 3941,
      "hanzi": "牵制",
      "pinyin": "qiān zhì",
      "translations": [
        "to control",
        "to curb",
        "to restrict",
        "to impede",
        "to pin down (enemy troops)"
      ]
    },
    {
      "id": 3942,
      "hanzi": "千方百计",
      "pinyin": "qiān fāng bǎi jì",
      "translations": [
        "lit. thousand ways",
        "a hundred plans (idiom); by every possible means"
      ]
    },
    {
      "id": 3943,
      "hanzi": "签订",
      "pinyin": "qiān dìng",
      "translations": [
        "to agree to and sign (a treaty etc)"
      ]
    },
    {
      "id": 3944,
      "hanzi": "签署",
      "pinyin": "qiān shǔ",
      "translations": [
        "to sign (an agreement)"
      ]
    },
    {
      "id": 3945,
      "hanzi": "迁就",
      "pinyin": "qiān jiù",
      "translations": [
        "to yield",
        "to adapt to",
        "to accommodate to (sth)"
      ]
    },
    {
      "id": 3946,
      "hanzi": "迁徙",
      "pinyin": "qiān xǐ",
      "translations": [
        "to migrate",
        "to move"
      ]
    },
    {
      "id": 3947,
      "hanzi": "谦逊",
      "pinyin": "qiān xùn",
      "translations": [
        "humble",
        "modest",
        "unpretentious",
        "modesty"
      ]
    },
    {
      "id": 3948,
      "hanzi": "前景",
      "pinyin": "qián jǐng",
      "translations": [
        "foreground",
        "vista",
        "(future) prospects",
        "perspective"
      ]
    },
    {
      "id": 3949,
      "hanzi": "前提",
      "pinyin": "qián tí",
      "translations": [
        "premise",
        "precondition",
        "prerequisite"
      ]
    },
    {
      "id": 3950,
      "hanzi": "潜力",
      "pinyin": "qián lì",
      "translations": [
        "potential",
        "capacity"
      ]
    },
    {
      "id": 3951,
      "hanzi": "潜水",
      "pinyin": "qián shuǐ",
      "translations": [
        "to dive",
        "to go under water",
        "lurker (Internet slang for sb who reads forum posts but never replies)"
      ]
    },
    {
      "id": 3952,
      "hanzi": "潜移默化",
      "pinyin": "qián yí mò huà",
      "translations": [
        "imperceptible influence",
        "to influence secretly"
      ]
    },
    {
      "id": 3953,
      "hanzi": "谴责",
      "pinyin": "qiǎn zé",
      "translations": [
        "to denounce",
        "to condemn",
        "to criticize",
        "condemnation",
        "criticism"
      ]
    },
    {
      "id": 3954,
      "hanzi": "强制",
      "pinyin": "qiáng zhì",
      "translations": [
        "to enforce",
        "enforcement",
        "forcibly",
        "compulsory"
      ]
    },
    {
      "id": 3955,
      "hanzi": "抢劫",
      "pinyin": "qiǎng jié",
      "translations": [
        "to rob",
        "looting"
      ]
    },
    {
      "id": 3956,
      "hanzi": "抢救",
      "pinyin": "qiǎng jiù",
      "translations": [
        "rescue"
      ]
    },
    {
      "id": 3957,
      "hanzi": "强迫",
      "pinyin": "qiǎng pò",
      "translations": [
        "to compel",
        "to force"
      ]
    },
    {
      "id": 3958,
      "hanzi": "桥梁",
      "pinyin": "qiáo liáng",
      "translations": [
        "bridge",
        "fig. connection between two areas"
      ]
    },
    {
      "id": 3959,
      "hanzi": "翘",
      "pinyin": "qiào",
      "translations": [
        "to stick up",
        "to rise on one end",
        "to tilt"
      ]
    },
    {
      "id": 3960,
      "hanzi": "锲而不舍",
      "pinyin": "qiè ér bù shě",
      "translations": [
        "to chip away at a task and not abandon it (idiom); to chisel away at sth",
        "to persevere",
        "unflagging efforts"
      ]
    },
    {
      "id": 3961,
      "hanzi": "切实",
      "pinyin": "qiè shí",
      "translations": [
        "feasible",
        "earnestly",
        "conscientiously",
        "realistic",
        "practical"
      ]
    },
    {
      "id": 3962,
      "hanzi": "亲热",
      "pinyin": "qīn rè",
      "translations": [
        "affectionate",
        "intimate",
        "warm-hearted"
      ]
    },
    {
      "id": 3963,
      "hanzi": "亲身",
      "pinyin": "qīn shēn",
      "translations": [
        "personal",
        "oneself"
      ]
    },
    {
      "id": 3964,
      "hanzi": "侵犯",
      "pinyin": "qīn fàn",
      "translations": [
        "to infringe on",
        "to encroach on",
        "to violate"
      ]
    },
    {
      "id": 3965,
      "hanzi": "钦佩",
      "pinyin": "qīn pèi",
      "translations": [
        "to admire",
        "to look up to",
        "to respect sb greatly"
      ]
    },
    {
      "id": 3966,
      "hanzi": "勤俭",
      "pinyin": "qín jiǎn",
      "translations": [
        "hardworking and frugal"
      ]
    },
    {
      "id": 3967,
      "hanzi": "勤恳",
      "pinyin": "qín kěn",
      "translations": [
        "diligent and attentive",
        "assiduous",
        "sincere"
      ]
    },
    {
      "id": 3968,
      "hanzi": "氢",
      "pinyin": "qīng",
      "translations": [
        "hydrogen (chemistry)"
      ]
    },
    {
      "id": 3969,
      "hanzi": "轻而易举",
      "pinyin": "qīng ér yì jǔ",
      "translations": [
        "easy",
        "with no difficulty"
      ]
    },
    {
      "id": 3970,
      "hanzi": "清澈",
      "pinyin": "qīng chè",
      "translations": [
        "clear",
        "limpid"
      ]
    },
    {
      "id": 3971,
      "hanzi": "清晨",
      "pinyin": "qīng chén",
      "translations": [
        "early morning"
      ]
    },
    {
      "id": 3972,
      "hanzi": "清除",
      "pinyin": "qīng chú",
      "translations": [
        "to eliminate",
        "to get rid of"
      ]
    },
    {
      "id": 3973,
      "hanzi": "清洁",
      "pinyin": "qīng jié",
      "translations": [
        "clean"
      ]
    },
    {
      "id": 3974,
      "hanzi": "清理",
      "pinyin": "qīng lǐ",
      "translations": [
        "to clear up",
        "to tidy up",
        "to dispose of"
      ]
    },
    {
      "id": 3975,
      "hanzi": "清晰",
      "pinyin": "qīng xī",
      "translations": [
        "clear",
        "distinct"
      ]
    },
    {
      "id": 3976,
      "hanzi": "清醒",
      "pinyin": "qīng xǐng",
      "translations": [
        "clear-headed",
        "sober",
        "awake"
      ]
    },
    {
      "id": 3977,
      "hanzi": "清真",
      "pinyin": "qīng zhēn",
      "translations": [
        "Islamic",
        "Muslim",
        "halal (of food)",
        "clean",
        "pure"
      ]
    },
    {
      "id": 3978,
      "hanzi": "倾听",
      "pinyin": "qīng tīng",
      "translations": [
        "to listen attentively"
      ]
    },
    {
      "id": 3979,
      "hanzi": "倾向",
      "pinyin": "qīng xiàng",
      "translations": [
        "trend",
        "tendency",
        "orientation"
      ]
    },
    {
      "id": 3980,
      "hanzi": "倾斜",
      "pinyin": "qīng xié",
      "translations": [
        "to incline",
        "to lean",
        "to slant",
        "to slope",
        "to tilt"
      ]
    },
    {
      "id": 3981,
      "hanzi": "晴朗",
      "pinyin": "qíng lǎng",
      "translations": [
        "sunny and cloudless"
      ]
    },
    {
      "id": 3982,
      "hanzi": "情报",
      "pinyin": "qíng bào",
      "translations": [
        "(spy) intelligence",
        "information-gathering"
      ]
    },
    {
      "id": 3983,
      "hanzi": "情节",
      "pinyin": "qíng jié",
      "translations": [
        "plot",
        "circumstances"
      ]
    },
    {
      "id": 3984,
      "hanzi": "情理",
      "pinyin": "qíng lǐ",
      "translations": [
        "reason",
        "sense"
      ]
    },
    {
      "id": 3985,
      "hanzi": "情形",
      "pinyin": "qíng xing",
      "translations": [
        "circumstances",
        "situation",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 3986,
      "hanzi": "请柬",
      "pinyin": "qǐng jiǎn",
      "translations": [
        "invitation card",
        "written invitation"
      ]
    },
    {
      "id": 3987,
      "hanzi": "请教",
      "pinyin": "qǐng jiào",
      "translations": [
        "to ask for guidance",
        "to consult"
      ]
    },
    {
      "id": 3988,
      "hanzi": "请示",
      "pinyin": "qǐng shì",
      "translations": [
        "to ask for instructions"
      ]
    },
    {
      "id": 3989,
      "hanzi": "请帖",
      "pinyin": "qǐng tiě",
      "translations": [
        "invitation card",
        "written invitation"
      ]
    },
    {
      "id": 3990,
      "hanzi": "丘陵",
      "pinyin": "qiū líng",
      "translations": [
        "hills"
      ]
    },
    {
      "id": 3991,
      "hanzi": "区分",
      "pinyin": "qū fēn",
      "translations": [
        "to differentiate",
        "to find differing aspects"
      ]
    },
    {
      "id": 3992,
      "hanzi": "区域",
      "pinyin": "qū yù",
      "translations": [
        "area",
        "region",
        "district"
      ]
    },
    {
      "id": 3993,
      "hanzi": "屈服",
      "pinyin": "qū fú",
      "translations": [
        "to surrender",
        "to yield"
      ]
    },
    {
      "id": 3994,
      "hanzi": "曲折",
      "pinyin": "qū zhé",
      "translations": [
        "complicated",
        "winding"
      ]
    },
    {
      "id": 3995,
      "hanzi": "驱逐",
      "pinyin": "qū zhú",
      "translations": [
        "to expel",
        "to deport",
        "banishment"
      ]
    },
    {
      "id": 3996,
      "hanzi": "渠道",
      "pinyin": "qú dào",
      "translations": [
        "irrigation ditch",
        "medium or channel of communication"
      ]
    },
    {
      "id": 3997,
      "hanzi": "取缔",
      "pinyin": "qǔ dì",
      "translations": [
        "to ban",
        "to prohibit (publications, customs etc)",
        "to outlaw",
        "to suppress (violators)"
      ]
    },
    {
      "id": 3998,
      "hanzi": "曲子",
      "pinyin": "qǔ zi",
      "translations": [
        "poem for singing",
        "tune",
        "music",
        "CL:支[zhī]"
      ]
    },
    {
      "id": 3999,
      "hanzi": "趣味",
      "pinyin": "qù wèi",
      "translations": [
        "fun",
        "interest",
        "delight",
        "taste",
        "liking",
        "preference"
      ]
    },
    {
      "id": 4000,
      "hanzi": "圈套",
      "pinyin": "quān tào",
      "translations": [
        "trap",
        "snare",
        "trick"
      ]
    },
    {
      "id": 4001,
      "hanzi": "全局",
      "pinyin": "quán jú",
      "translations": [
        "overall situation"
      ]
    },
    {
      "id": 4002,
      "hanzi": "全力以赴",
      "pinyin": "quán lì yǐ fù",
      "translations": [
        "to do at all costs",
        "to make an all-out effort"
      ]
    },
    {
      "id": 4003,
      "hanzi": "权衡",
      "pinyin": "quán héng",
      "translations": [
        "to weigh",
        "to consider",
        "to assess",
        "to balance",
        "to trade-off"
      ]
    },
    {
      "id": 4004,
      "hanzi": "权威",
      "pinyin": "quán wēi",
      "translations": [
        "authority",
        "authoritative",
        "power and prestige"
      ]
    },
    {
      "id": 4005,
      "hanzi": "权益",
      "pinyin": "quán yì",
      "translations": [
        "rights and benefits"
      ]
    },
    {
      "id": 4006,
      "hanzi": "拳头",
      "pinyin": "quán tou",
      "translations": [
        "fist",
        "clenched fist",
        "CL:個|个[gè]",
        "competitive (product)"
      ]
    },
    {
      "id": 4007,
      "hanzi": "犬",
      "pinyin": "quǎn",
      "translations": [
        "dog"
      ]
    },
    {
      "id": 4008,
      "hanzi": "缺口",
      "pinyin": "quē kǒu",
      "translations": [
        "nick",
        "jag",
        "gap",
        "shortfall"
      ]
    },
    {
      "id": 4009,
      "hanzi": "缺席",
      "pinyin": "quē xí",
      "translations": [
        "absence",
        "absent"
      ]
    },
    {
      "id": 4010,
      "hanzi": "缺陷",
      "pinyin": "quē xiàn",
      "translations": [
        "defect",
        "flaw",
        "physical defect"
      ]
    },
    {
      "id": 4011,
      "hanzi": "瘸",
      "pinyin": "qué",
      "translations": [
        "lame"
      ]
    },
    {
      "id": 4012,
      "hanzi": "确保",
      "pinyin": "què bǎo",
      "translations": [
        "to ensure",
        "to guarantee"
      ]
    },
    {
      "id": 4013,
      "hanzi": "确立",
      "pinyin": "què lì",
      "translations": [
        "to establish",
        "to institute"
      ]
    },
    {
      "id": 4014,
      "hanzi": "确切",
      "pinyin": "què qiè",
      "translations": [
        "definite",
        "exact",
        "precise"
      ]
    },
    {
      "id": 4015,
      "hanzi": "确信",
      "pinyin": "què xìn",
      "translations": [
        "to be convinced",
        "to be sure",
        "to firmly believe",
        "to be positive that",
        "definite news"
      ]
    },
    {
      "id": 4016,
      "hanzi": "群众",
      "pinyin": "qún zhòng",
      "translations": [
        "mass",
        "multitude",
        "the masses"
      ]
    },
    {
      "id": 4017,
      "hanzi": "染",
      "pinyin": "rǎn",
      "translations": [
        "to dye",
        "to catch (a disease)",
        "to acquire (bad habits etc)",
        "to contaminate",
        "to add colour washes to a painting"
      ]
    },
    {
      "id": 4018,
      "hanzi": "让步",
      "pinyin": "ràng bù",
      "translations": [
        "to concede",
        "to give in",
        "to yield",
        "a concession"
      ]
    },
    {
      "id": 4019,
      "hanzi": "饶恕",
      "pinyin": "ráo shù",
      "translations": [
        "to forgive",
        "to pardon",
        "to spare"
      ]
    },
    {
      "id": 4020,
      "hanzi": "扰乱",
      "pinyin": "rǎo luàn",
      "translations": [
        "to disturb",
        "to perturb",
        "to harass"
      ]
    },
    {
      "id": 4021,
      "hanzi": "惹祸",
      "pinyin": "rě huò",
      "translations": [
        "stirring up trouble",
        "to invite disaster"
      ]
    },
    {
      "id": 4022,
      "hanzi": "热泪盈眶",
      "pinyin": "rè lèi yíng kuàng",
      "translations": [
        "eyes brimming with tears of excitement (idiom)",
        "extremely moved"
      ]
    },
    {
      "id": 4023,
      "hanzi": "热门",
      "pinyin": "rè mén",
      "translations": [
        "popular",
        "hot",
        "in vogue"
      ]
    },
    {
      "id": 4024,
      "hanzi": "人道",
      "pinyin": "rén dào",
      "translations": [
        "human sympathy",
        "humanitarianism",
        "humane",
        "the \"human way\"",
        "one of the stages in the cycle of reincarnation (Buddhism)",
        "sexual intercourse"
      ]
    },
    {
      "id": 4025,
      "hanzi": "人格",
      "pinyin": "rén gé",
      "translations": [
        "personality",
        "integrity",
        "dignity"
      ]
    },
    {
      "id": 4026,
      "hanzi": "人工",
      "pinyin": "rén gōng",
      "translations": [
        "artificial",
        "manpower",
        "manual work"
      ]
    },
    {
      "id": 4027,
      "hanzi": "人家",
      "pinyin": "rén jia",
      "translations": [
        "other people",
        "sb else",
        "he",
        "she or they",
        "I",
        "me (referring to oneself as \"one\" or \"people\")"
      ]
    },
    {
      "id": 4028,
      "hanzi": "人间",
      "pinyin": "rén jiān",
      "translations": [
        "the human world",
        "the earth"
      ]
    },
    {
      "id": 4029,
      "hanzi": "人士",
      "pinyin": "rén shì",
      "translations": [
        "person",
        "figure",
        "public figure"
      ]
    },
    {
      "id": 4030,
      "hanzi": "人为",
      "pinyin": "rén wéi",
      "translations": [
        "artificial",
        "man-made",
        "having human cause or origin",
        "human attempt or effort"
      ]
    },
    {
      "id": 4031,
      "hanzi": "人性",
      "pinyin": "rén xìng",
      "translations": [
        "human nature",
        "humanity",
        "human",
        "the totality of human attributes"
      ]
    },
    {
      "id": 4032,
      "hanzi": "人质",
      "pinyin": "rén zhì",
      "translations": [
        "hostage"
      ]
    },
    {
      "id": 4033,
      "hanzi": "仁慈",
      "pinyin": "rén cí",
      "translations": [
        "benevolent",
        "charitable",
        "kind",
        "kindly",
        "kindness",
        "merciful"
      ]
    },
    {
      "id": 4034,
      "hanzi": "忍耐",
      "pinyin": "rěn nài",
      "translations": [
        "to show restraint",
        "to repress (anger etc)",
        "to exercise patience"
      ]
    },
    {
      "id": 4035,
      "hanzi": "忍受",
      "pinyin": "rěn shòu",
      "translations": [
        "to bear",
        "to endure"
      ]
    },
    {
      "id": 4036,
      "hanzi": "认定",
      "pinyin": "rèn dìng",
      "translations": [
        "to maintain (that sth is true)",
        "to determine (a fact)",
        "determination (of an amount)",
        "of the firm opinion",
        "to believe firmly",
        "to set one's mind on",
        "to identify with"
      ]
    },
    {
      "id": 4037,
      "hanzi": "认可",
      "pinyin": "rèn kě",
      "translations": [
        "to approve",
        "approval",
        "acknowledgment",
        "OK"
      ]
    },
    {
      "id": 4038,
      "hanzi": "任命",
      "pinyin": "rèn mìng",
      "translations": [
        "to appoint and nominate",
        "(job) appointment",
        "CL:紙|纸[zhǐ]"
      ]
    },
    {
      "id": 4039,
      "hanzi": "任性",
      "pinyin": "rèn xìng",
      "translations": [
        "willful",
        "headstrong",
        "uninhibited"
      ]
    },
    {
      "id": 4040,
      "hanzi": "任意",
      "pinyin": "rèn yì",
      "translations": [
        "arbitrary",
        "at will",
        "at random"
      ]
    },
    {
      "id": 4041,
      "hanzi": "任重道远",
      "pinyin": "rèn zhòng dào yuǎn",
      "translations": [
        "a heavy load and a long road",
        "fig. to bear heavy responsibilities through a long struggle (cf Confucian Analects, 8.7)"
      ]
    },
    {
      "id": 4042,
      "hanzi": "仍旧",
      "pinyin": "réng jiù",
      "translations": [
        "still (remaining)",
        "to remain (the same)",
        "yet"
      ]
    },
    {
      "id": 4043,
      "hanzi": "日新月异",
      "pinyin": "rì xīn yuè yì",
      "translations": [
        "daily renewal",
        "monthly change (idiom); every day sees new developments",
        "rapid progress"
      ]
    },
    {
      "id": 4044,
      "hanzi": "日益",
      "pinyin": "rì yì",
      "translations": [
        "day by day",
        "more and more",
        "increasingly",
        "more and more with each passing day"
      ]
    },
    {
      "id": 4045,
      "hanzi": "融洽",
      "pinyin": "róng qià",
      "translations": [
        "harmonious",
        "friendly relations",
        "on good terms with one another"
      ]
    },
    {
      "id": 4046,
      "hanzi": "溶解",
      "pinyin": "róng jiě",
      "translations": [
        "to dissolve"
      ]
    },
    {
      "id": 4047,
      "hanzi": "容貌",
      "pinyin": "róng mào",
      "translations": [
        "one's appearance",
        "one's aspect",
        "looks",
        "features"
      ]
    },
    {
      "id": 4048,
      "hanzi": "容纳",
      "pinyin": "róng nà",
      "translations": [
        "to hold",
        "to contain",
        "to accommodate",
        "to tolerate (different opinions)"
      ]
    },
    {
      "id": 4049,
      "hanzi": "容器",
      "pinyin": "róng qì",
      "translations": [
        "receptacle",
        "vessel"
      ]
    },
    {
      "id": 4050,
      "hanzi": "容忍",
      "pinyin": "róng rěn",
      "translations": [
        "to put up with",
        "to tolerate"
      ]
    },
    {
      "id": 4051,
      "hanzi": "揉",
      "pinyin": "róu",
      "translations": [
        "to knead",
        "to massage",
        "to rub"
      ]
    },
    {
      "id": 4052,
      "hanzi": "柔和",
      "pinyin": "róu hé",
      "translations": [
        "gentle",
        "soft"
      ]
    },
    {
      "id": 4053,
      "hanzi": "弱点",
      "pinyin": "ruò diǎn",
      "translations": [
        "weak point",
        "failing"
      ]
    },
    {
      "id": 4054,
      "hanzi": "若干",
      "pinyin": "ruò gān",
      "translations": [
        "a certain number or amount",
        "how many?",
        "how much?"
      ]
    },
    {
      "id": 4055,
      "hanzi": "撒谎",
      "pinyin": "sā huǎng",
      "translations": [
        "to tell lies"
      ]
    },
    {
      "id": 4056,
      "hanzi": "腮",
      "pinyin": "sāi",
      "translations": [
        "cheek"
      ]
    },
    {
      "id": 4057,
      "hanzi": "三角",
      "pinyin": "sān jiǎo",
      "translations": [
        "triangle"
      ]
    },
    {
      "id": 4058,
      "hanzi": "散文",
      "pinyin": "sǎn wén",
      "translations": [
        "prose",
        "essay"
      ]
    },
    {
      "id": 4059,
      "hanzi": "散布",
      "pinyin": "sàn bù",
      "translations": [
        "to disseminate"
      ]
    },
    {
      "id": 4060,
      "hanzi": "散发",
      "pinyin": "sàn fā",
      "translations": [
        "to distribute",
        "to emit",
        "to issue"
      ]
    },
    {
      "id": 4061,
      "hanzi": "丧失",
      "pinyin": "sàng shī",
      "translations": [
        "to lose",
        "to forfeit"
      ]
    },
    {
      "id": 4062,
      "hanzi": "嫂子",
      "pinyin": "sǎo zi",
      "translations": [
        "(informal) older brother's wife",
        "sister-in-law",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4063,
      "hanzi": "色彩",
      "pinyin": "sè cǎi",
      "translations": [
        "tint",
        "coloring",
        "coloration",
        "character"
      ]
    },
    {
      "id": 4064,
      "hanzi": "刹车",
      "pinyin": "shā chē",
      "translations": [
        "to brake (when driving)",
        "to stop",
        "to switch off",
        "to check (bad habits)",
        "a brake"
      ]
    },
    {
      "id": 4065,
      "hanzi": "啥",
      "pinyin": "shá",
      "translations": [
        "dialectal equivalent of 什麼|什么[shén me]"
      ]
    },
    {
      "id": 4066,
      "hanzi": "筛选",
      "pinyin": "shāi xuǎn",
      "translations": [
        "to filter"
      ]
    },
    {
      "id": 4067,
      "hanzi": "山脉",
      "pinyin": "shān mài",
      "translations": [
        "mountain range",
        "CL:條|条[tiáo]"
      ]
    },
    {
      "id": 4068,
      "hanzi": "闪烁",
      "pinyin": "shǎn shuò",
      "translations": [
        "flickering",
        "twinkling",
        "evasive",
        "vague (of speech)"
      ]
    },
    {
      "id": 4069,
      "hanzi": "擅长",
      "pinyin": "shàn cháng",
      "translations": [
        "to be good at",
        "to be expert in"
      ]
    },
    {
      "id": 4070,
      "hanzi": "擅自",
      "pinyin": "shàn zì",
      "translations": [
        "without permission",
        "of one's own initiative"
      ]
    },
    {
      "id": 4071,
      "hanzi": "商标",
      "pinyin": "shāng biāo",
      "translations": [
        "trademark",
        "logo"
      ]
    },
    {
      "id": 4072,
      "hanzi": "伤脑筋",
      "pinyin": "shāng nǎo jīn",
      "translations": [
        "knotty",
        "troublesome",
        "bothersome"
      ]
    },
    {
      "id": 4073,
      "hanzi": "上级",
      "pinyin": "shàng jí",
      "translations": [
        "higher authorities",
        "superiors",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4074,
      "hanzi": "上进心",
      "pinyin": "shàng jìn xīn",
      "translations": [
        "motivation",
        "ambition"
      ]
    },
    {
      "id": 4075,
      "hanzi": "上任",
      "pinyin": "shàng rèn",
      "translations": [
        "to take office"
      ]
    },
    {
      "id": 4076,
      "hanzi": "上瘾",
      "pinyin": "shàng yǐn",
      "translations": [
        "to get into a habit",
        "to become addicted"
      ]
    },
    {
      "id": 4077,
      "hanzi": "上游",
      "pinyin": "shàng yóu",
      "translations": [
        "upper reaches (of a river)",
        "upper level",
        "upper echelon",
        "upstream"
      ]
    },
    {
      "id": 4078,
      "hanzi": "捎",
      "pinyin": "shāo",
      "translations": [
        "to bring sth to sb",
        "to deliver"
      ]
    },
    {
      "id": 4079,
      "hanzi": "梢",
      "pinyin": "shāo",
      "translations": [
        "tip of branch"
      ]
    },
    {
      "id": 4080,
      "hanzi": "哨",
      "pinyin": "shào",
      "translations": [
        "a whistle",
        "sentry"
      ]
    },
    {
      "id": 4081,
      "hanzi": "奢侈",
      "pinyin": "shē chǐ",
      "translations": [
        "luxurious",
        "extravagant",
        "wasteful"
      ]
    },
    {
      "id": 4082,
      "hanzi": "设立",
      "pinyin": "shè lì",
      "translations": [
        "to set up",
        "to establish"
      ]
    },
    {
      "id": 4083,
      "hanzi": "设想",
      "pinyin": "shè xiǎng",
      "translations": [
        "to imagine",
        "to assume",
        "to envisage",
        "tentative plan",
        "to have consideration for"
      ]
    },
    {
      "id": 4084,
      "hanzi": "设置",
      "pinyin": "shè zhì",
      "translations": [
        "to set up",
        "to install"
      ]
    },
    {
      "id": 4085,
      "hanzi": "社区",
      "pinyin": "shè qū",
      "translations": [
        "community"
      ]
    },
    {
      "id": 4086,
      "hanzi": "涉及",
      "pinyin": "shè jí",
      "translations": [
        "to involve",
        "to touch upon (a topic)"
      ]
    },
    {
      "id": 4087,
      "hanzi": "摄取",
      "pinyin": "shè qǔ",
      "translations": [
        "absorb (nutrition)",
        "take a photo"
      ]
    },
    {
      "id": 4088,
      "hanzi": "摄氏度",
      "pinyin": "shè shì dù",
      "translations": [
        "degrees centigrade"
      ]
    },
    {
      "id": 4089,
      "hanzi": "深奥",
      "pinyin": "shēn ào",
      "translations": [
        "profound",
        "abstruse",
        "recondite",
        "profoundly"
      ]
    },
    {
      "id": 4090,
      "hanzi": "深沉",
      "pinyin": "shēn chén",
      "translations": [
        "deep",
        "extreme",
        "dull",
        "low pitched (sound)"
      ]
    },
    {
      "id": 4091,
      "hanzi": "深情厚谊",
      "pinyin": "shēn qíng hòu yì",
      "translations": [
        "deep friendship"
      ]
    },
    {
      "id": 4092,
      "hanzi": "申报",
      "pinyin": "shēn bào",
      "translations": [
        "to report (to the authorities)",
        "to declare (to customs)"
      ]
    },
    {
      "id": 4093,
      "hanzi": "绅士",
      "pinyin": "shēn shì",
      "translations": [
        "gentleman"
      ]
    },
    {
      "id": 4094,
      "hanzi": "呻吟",
      "pinyin": "shēn yín",
      "translations": [
        "to moan",
        "to groan"
      ]
    },
    {
      "id": 4095,
      "hanzi": "神奇",
      "pinyin": "shén qí",
      "translations": [
        "magical",
        "mystical",
        "miraculous"
      ]
    },
    {
      "id": 4096,
      "hanzi": "神气",
      "pinyin": "shén qì",
      "translations": [
        "expression",
        "manner",
        "spirited",
        "vigorous"
      ]
    },
    {
      "id": 4097,
      "hanzi": "神情",
      "pinyin": "shén qíng",
      "translations": [
        "look",
        "expression"
      ]
    },
    {
      "id": 4098,
      "hanzi": "神色",
      "pinyin": "shén sè",
      "translations": [
        "expression",
        "look"
      ]
    },
    {
      "id": 4099,
      "hanzi": "神圣",
      "pinyin": "shén shèng",
      "translations": [
        "divine",
        "hallow",
        "holy",
        "sacred"
      ]
    },
    {
      "id": 4100,
      "hanzi": "神态",
      "pinyin": "shén tài",
      "translations": [
        "appearance",
        "manner",
        "bearing",
        "deportment",
        "look",
        "expression",
        "mien"
      ]
    },
    {
      "id": 4101,
      "hanzi": "神仙",
      "pinyin": "shén xiān",
      "translations": [
        "Daoist immortal",
        "supernatural entity",
        "(in modern fiction) fairy",
        "elf",
        "leprechaun etc",
        "fig. lighthearted person"
      ]
    },
    {
      "id": 4102,
      "hanzi": "审查",
      "pinyin": "shěn chá",
      "translations": [
        "to examine",
        "to investigate",
        "to censor out",
        "censorship"
      ]
    },
    {
      "id": 4103,
      "hanzi": "审理",
      "pinyin": "shěn lǐ",
      "translations": [
        "to hear (a case)"
      ]
    },
    {
      "id": 4104,
      "hanzi": "审美",
      "pinyin": "shěn měi",
      "translations": [
        "esthetics",
        "appreciating the arts",
        "taste"
      ]
    },
    {
      "id": 4105,
      "hanzi": "审判",
      "pinyin": "shěn pàn",
      "translations": [
        "a trial",
        "to try sb"
      ]
    },
    {
      "id": 4106,
      "hanzi": "渗透",
      "pinyin": "shèn tòu",
      "translations": [
        "to permeate",
        "to infiltrate",
        "to pervade",
        "osmosis"
      ]
    },
    {
      "id": 4107,
      "hanzi": "慎重",
      "pinyin": "shèn zhòng",
      "translations": [
        "cautious",
        "careful",
        "prudent"
      ]
    },
    {
      "id": 4108,
      "hanzi": "生存",
      "pinyin": "shēng cún",
      "translations": [
        "to exist",
        "to survive"
      ]
    },
    {
      "id": 4109,
      "hanzi": "生机",
      "pinyin": "shēng jī",
      "translations": [
        "opportunity to live",
        "to reprieve from death",
        "life force",
        "vitality"
      ]
    },
    {
      "id": 4110,
      "hanzi": "生理",
      "pinyin": "shēng lǐ",
      "translations": [
        "physiology"
      ]
    },
    {
      "id": 4111,
      "hanzi": "生疏",
      "pinyin": "shēng shū",
      "translations": [
        "unfamiliar",
        "strange",
        "out of practice",
        "not accustomed"
      ]
    },
    {
      "id": 4112,
      "hanzi": "生态",
      "pinyin": "shēng tài",
      "translations": [
        "way of life",
        "ecology"
      ]
    },
    {
      "id": 4113,
      "hanzi": "生物",
      "pinyin": "shēng wù",
      "translations": [
        "organism",
        "living creature",
        "life form",
        "biological",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4114,
      "hanzi": "生效",
      "pinyin": "shēng xiào",
      "translations": [
        "to take effect",
        "to go into effect"
      ]
    },
    {
      "id": 4115,
      "hanzi": "生锈",
      "pinyin": "shēng xiù",
      "translations": [
        "to rust",
        "to grow rusty",
        "to corrode",
        "oxidization"
      ]
    },
    {
      "id": 4116,
      "hanzi": "生育",
      "pinyin": "shēng yù",
      "translations": [
        "to bear",
        "to give birth",
        "to grow",
        "to rear",
        "to bring up (children)"
      ]
    },
    {
      "id": 4117,
      "hanzi": "牲畜",
      "pinyin": "shēng chù",
      "translations": [
        "domesticated animals",
        "livestock"
      ]
    },
    {
      "id": 4118,
      "hanzi": "声明",
      "pinyin": "shēng míng",
      "translations": [
        "statement",
        "declaration",
        "CL:項|项",
        "份[fèn]"
      ]
    },
    {
      "id": 4119,
      "hanzi": "声势",
      "pinyin": "shēng shì",
      "translations": [
        "fame and power",
        "prestige",
        "influence",
        "impetus",
        "momentum"
      ]
    },
    {
      "id": 4120,
      "hanzi": "声誉",
      "pinyin": "shēng yù",
      "translations": [
        "reputation",
        "fame"
      ]
    },
    {
      "id": 4121,
      "hanzi": "省会",
      "pinyin": "shěng huì",
      "translations": [
        "provincial capital"
      ]
    },
    {
      "id": 4122,
      "hanzi": "盛产",
      "pinyin": "shèng chǎn",
      "translations": [
        "superabundant",
        "to teem with",
        "to produce in abundance",
        "to abound in"
      ]
    },
    {
      "id": 4123,
      "hanzi": "盛开",
      "pinyin": "shèng kāi",
      "translations": [
        "blooming",
        "in full flower"
      ]
    },
    {
      "id": 4124,
      "hanzi": "盛情",
      "pinyin": "shèng qíng",
      "translations": [
        "great kindness",
        "magnificent hospitality"
      ]
    },
    {
      "id": 4125,
      "hanzi": "盛行",
      "pinyin": "shèng xíng",
      "translations": [
        "to be in vogue",
        "to be prevalent"
      ]
    },
    {
      "id": 4126,
      "hanzi": "胜负",
      "pinyin": "shèng fù",
      "translations": [
        "victory or defeat",
        "the outcome of a battle"
      ]
    },
    {
      "id": 4127,
      "hanzi": "失误",
      "pinyin": "shī wù",
      "translations": [
        "lapse",
        "mistake",
        "to make a mistake",
        "fault",
        "service fault (in volleyball, tennis etc)"
      ]
    },
    {
      "id": 4128,
      "hanzi": "失踪",
      "pinyin": "shī zōng",
      "translations": [
        "to be missing",
        "to disappear",
        "unaccounted for"
      ]
    },
    {
      "id": 4129,
      "hanzi": "师范",
      "pinyin": "shī fàn",
      "translations": [
        "teacher-training",
        "pedagogical",
        "normal (school, e.g. Beijing Normal University)"
      ]
    },
    {
      "id": 4130,
      "hanzi": "施加",
      "pinyin": "shī jiā",
      "translations": [
        "to exert (effort or pressure)"
      ]
    },
    {
      "id": 4131,
      "hanzi": "施展",
      "pinyin": "shī zhǎn",
      "translations": [
        "to use fully",
        "to put to use"
      ]
    },
    {
      "id": 4132,
      "hanzi": "尸体",
      "pinyin": "shī tǐ",
      "translations": [
        "dead body",
        "corpse",
        "carcass",
        "CL:具[jù]"
      ]
    },
    {
      "id": 4133,
      "hanzi": "拾",
      "pinyin": "shí",
      "translations": [
        "to pick up",
        "to collate or arrange",
        "ten (banker's anti-fraud numeral)"
      ]
    },
    {
      "id": 4134,
      "hanzi": "十足",
      "pinyin": "shí zú",
      "translations": [
        "ample",
        "complete",
        "hundred percent",
        "a pure shade (of some color)"
      ]
    },
    {
      "id": 4135,
      "hanzi": "识别",
      "pinyin": "shí bié",
      "translations": [
        "to distinguish",
        "to discern"
      ]
    },
    {
      "id": 4136,
      "hanzi": "时差",
      "pinyin": "shí chā",
      "translations": [
        "time difference",
        "time lag",
        "jet lag"
      ]
    },
    {
      "id": 4137,
      "hanzi": "时常",
      "pinyin": "shí cháng",
      "translations": [
        "often",
        "frequently"
      ]
    },
    {
      "id": 4138,
      "hanzi": "时而",
      "pinyin": "shí ér",
      "translations": [
        "occasionally",
        "from time to time"
      ]
    },
    {
      "id": 4139,
      "hanzi": "时光",
      "pinyin": "shí guāng",
      "translations": [
        "time",
        "era",
        "period of time"
      ]
    },
    {
      "id": 4140,
      "hanzi": "时机",
      "pinyin": "shí jī",
      "translations": [
        "fortunate timing",
        "occasion",
        "opportunity"
      ]
    },
    {
      "id": 4141,
      "hanzi": "时事",
      "pinyin": "shí shì",
      "translations": [
        "current trends",
        "the present situation",
        "how things are going"
      ]
    },
    {
      "id": 4142,
      "hanzi": "时装",
      "pinyin": "shí zhuāng",
      "translations": [
        "the latest fashion in clothes",
        "fashionable"
      ]
    },
    {
      "id": 4143,
      "hanzi": "实惠",
      "pinyin": "shí huì",
      "translations": [
        "tangible benefit",
        "material advantages",
        "advantageous (deal)",
        "substantial (discount)"
      ]
    },
    {
      "id": 4144,
      "hanzi": "实力",
      "pinyin": "shí lì",
      "translations": [
        "strength"
      ]
    },
    {
      "id": 4145,
      "hanzi": "实施",
      "pinyin": "shí shī",
      "translations": [
        "to implement",
        "to carry out"
      ]
    },
    {
      "id": 4146,
      "hanzi": "实事求是",
      "pinyin": "shí shì qiú shì",
      "translations": [
        "to seek truth from facts (idiom)",
        "to be practical and realistic"
      ]
    },
    {
      "id": 4147,
      "hanzi": "实质",
      "pinyin": "shí zhì",
      "translations": [
        "substance",
        "essence"
      ]
    },
    {
      "id": 4148,
      "hanzi": "石油",
      "pinyin": "shí yóu",
      "translations": [
        "oil",
        "petroleum"
      ]
    },
    {
      "id": 4149,
      "hanzi": "使命",
      "pinyin": "shǐ mìng",
      "translations": [
        "mission (diplomatic or other)",
        "set task"
      ]
    },
    {
      "id": 4150,
      "hanzi": "是非",
      "pinyin": "shì fēi",
      "translations": [
        "right and wrong",
        "quarrel"
      ]
    },
    {
      "id": 4151,
      "hanzi": "试图",
      "pinyin": "shì tú",
      "translations": [
        "to attempt",
        "to try"
      ]
    },
    {
      "id": 4152,
      "hanzi": "试验",
      "pinyin": "shì yàn",
      "translations": [
        "experiment",
        "test",
        "experimental",
        "CL:次",
        "個|个[gè]"
      ]
    },
    {
      "id": 4153,
      "hanzi": "势必",
      "pinyin": "shì bì",
      "translations": [
        "to be bound to",
        "undoubtedly will"
      ]
    },
    {
      "id": 4154,
      "hanzi": "势力",
      "pinyin": "shì li",
      "translations": [
        "power",
        "(ability to) influence"
      ]
    },
    {
      "id": 4155,
      "hanzi": "世代",
      "pinyin": "shì dài",
      "translations": [
        "generation",
        "an era",
        "accumulation of years",
        "passing on from generation to generation"
      ]
    },
    {
      "id": 4156,
      "hanzi": "世界观",
      "pinyin": "shì jiè guān",
      "translations": [
        "worldview",
        "world outlook",
        "Weltanschauung"
      ]
    },
    {
      "id": 4157,
      "hanzi": "示范",
      "pinyin": "shì fàn",
      "translations": [
        "to demonstrate",
        "to show how to do sth",
        "demonstration",
        "a model example"
      ]
    },
    {
      "id": 4158,
      "hanzi": "示威",
      "pinyin": "shì wēi",
      "translations": [
        "to demonstrate (as a protest)",
        "a demonstration",
        "a military show of force"
      ]
    },
    {
      "id": 4159,
      "hanzi": "示意",
      "pinyin": "shì yì",
      "translations": [
        "to hint",
        "to indicate (an idea to sb)"
      ]
    },
    {
      "id": 4160,
      "hanzi": "释放",
      "pinyin": "shì fàng",
      "translations": [
        "to release",
        "to set free",
        "to liberate (a prisoner)",
        "to discharge"
      ]
    },
    {
      "id": 4161,
      "hanzi": "事故",
      "pinyin": "shì gù",
      "translations": [
        "accident",
        "CL:樁|桩",
        "起",
        "次[cì]"
      ]
    },
    {
      "id": 4162,
      "hanzi": "事迹",
      "pinyin": "shì jì",
      "translations": [
        "deed",
        "past achievement",
        "important event of the past"
      ]
    },
    {
      "id": 4163,
      "hanzi": "事件",
      "pinyin": "shì jiàn",
      "translations": [
        "event",
        "happening",
        "incident",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4164,
      "hanzi": "事态",
      "pinyin": "shì tài",
      "translations": [
        "situation",
        "existing state of affairs"
      ]
    },
    {
      "id": 4165,
      "hanzi": "事务",
      "pinyin": "shì wù",
      "translations": [
        "(political, economic etc) affairs",
        "work"
      ]
    },
    {
      "id": 4166,
      "hanzi": "事项",
      "pinyin": "shì xiàng",
      "translations": [
        "matter",
        "item"
      ]
    },
    {
      "id": 4167,
      "hanzi": "事业",
      "pinyin": "shì yè",
      "translations": [
        "undertaking",
        "project",
        "activity",
        "(charitable, political or revolutionary) cause",
        "publicly funded institution",
        "enterprise or foundation",
        "career",
        "occupation",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4168,
      "hanzi": "适宜",
      "pinyin": "shì yí",
      "translations": [
        "suitable",
        "appropriate"
      ]
    },
    {
      "id": 4169,
      "hanzi": "视力",
      "pinyin": "shì lì",
      "translations": [
        "vision",
        "eyesight"
      ]
    },
    {
      "id": 4170,
      "hanzi": "视线",
      "pinyin": "shì xiàn",
      "translations": [
        "line of sight"
      ]
    },
    {
      "id": 4171,
      "hanzi": "视野",
      "pinyin": "shì yě",
      "translations": [
        "field of view",
        "horizon"
      ]
    },
    {
      "id": 4172,
      "hanzi": "逝世",
      "pinyin": "shì shì",
      "translations": [
        "to pass away",
        "to die"
      ]
    },
    {
      "id": 4173,
      "hanzi": "收藏",
      "pinyin": "shōu cáng",
      "translations": [
        "to hoard",
        "to collect",
        "collection",
        "to bookmark (internet)"
      ]
    },
    {
      "id": 4174,
      "hanzi": "收缩",
      "pinyin": "shōu suō",
      "translations": [
        "to pull back",
        "to shrink",
        "to contract"
      ]
    },
    {
      "id": 4175,
      "hanzi": "收益",
      "pinyin": "shōu yì",
      "translations": [
        "earnings",
        "profit"
      ]
    },
    {
      "id": 4176,
      "hanzi": "收音机",
      "pinyin": "shōu yīn jī",
      "translations": [
        "radio",
        "CL:臺|台[tái]"
      ]
    },
    {
      "id": 4177,
      "hanzi": "手法",
      "pinyin": "shǒu fǎ",
      "translations": [
        "technique",
        "trick",
        "skill"
      ]
    },
    {
      "id": 4178,
      "hanzi": "手势",
      "pinyin": "shǒu shì",
      "translations": [
        "gesture",
        "sign",
        "signal"
      ]
    },
    {
      "id": 4179,
      "hanzi": "手艺",
      "pinyin": "shǒu yì",
      "translations": [
        "craftmanship",
        "workmanship",
        "handicraft",
        "trade"
      ]
    },
    {
      "id": 4180,
      "hanzi": "首要",
      "pinyin": "shǒu yào",
      "translations": [
        "the most important",
        "of chief importance"
      ]
    },
    {
      "id": 4181,
      "hanzi": "守护",
      "pinyin": "shǒu hù",
      "translations": [
        "to guard",
        "to protect"
      ]
    },
    {
      "id": 4182,
      "hanzi": "受罪",
      "pinyin": "shòu zuì",
      "translations": [
        "to endure",
        "to suffer",
        "hardships",
        "torments",
        "a hard time",
        "a nuisance"
      ]
    },
    {
      "id": 4183,
      "hanzi": "授予",
      "pinyin": "shòu yǔ",
      "translations": [
        "to award",
        "to confer"
      ]
    },
    {
      "id": 4184,
      "hanzi": "书法",
      "pinyin": "shū fǎ",
      "translations": [
        "calligraphy",
        "handwriting",
        "penmanship"
      ]
    },
    {
      "id": 4185,
      "hanzi": "书籍",
      "pinyin": "shū jí",
      "translations": [
        "books",
        "works"
      ]
    },
    {
      "id": 4186,
      "hanzi": "书记",
      "pinyin": "shū ji",
      "translations": [
        "secretary",
        "clerk",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4187,
      "hanzi": "书面",
      "pinyin": "shū miàn",
      "translations": [
        "in writing",
        "written"
      ]
    },
    {
      "id": 4188,
      "hanzi": "舒畅",
      "pinyin": "shū chàng",
      "translations": [
        "happy",
        "entirely free from worry"
      ]
    },
    {
      "id": 4189,
      "hanzi": "疏忽",
      "pinyin": "shū hu",
      "translations": [
        "to neglect",
        "to overlook",
        "negligence",
        "carelessness"
      ]
    },
    {
      "id": 4190,
      "hanzi": "数",
      "pinyin": "shǔ",
      "translations": [
        "to count",
        "to enumerate",
        "to criticize (i.e. enumerate shortcomings)"
      ]
    },
    {
      "id": 4191,
      "hanzi": "竖",
      "pinyin": "shù",
      "translations": [
        "to erect",
        "vertical",
        "vertical stroke (in Chinese characters)"
      ]
    },
    {
      "id": 4192,
      "hanzi": "束",
      "pinyin": "shù",
      "translations": [
        "to bind",
        "bunch",
        "bundle",
        "classifier for bunches",
        "bundles",
        "beams of light etc",
        "to control"
      ]
    },
    {
      "id": 4193,
      "hanzi": "束缚",
      "pinyin": "shù fù",
      "translations": [
        "to bind",
        "to restrict",
        "to tie",
        "to commit",
        "fetters"
      ]
    },
    {
      "id": 4194,
      "hanzi": "树立",
      "pinyin": "shù lì",
      "translations": [
        "to set up",
        "to establish"
      ]
    },
    {
      "id": 4195,
      "hanzi": "数额",
      "pinyin": "shù é",
      "translations": [
        "amount",
        "sum of money",
        "fixed number"
      ]
    },
    {
      "id": 4196,
      "hanzi": "数目",
      "pinyin": "shù mù",
      "translations": [
        "amount",
        "number"
      ]
    },
    {
      "id": 4197,
      "hanzi": "耍",
      "pinyin": "shuǎ",
      "translations": [
        "to play with",
        "to wield",
        "to act (cool etc)",
        "to display (a skill, one's temper etc)"
      ]
    },
    {
      "id": 4198,
      "hanzi": "衰老",
      "pinyin": "shuāi lǎo",
      "translations": [
        "to age",
        "to deteriorate with age",
        "old and weak"
      ]
    },
    {
      "id": 4199,
      "hanzi": "衰退",
      "pinyin": "shuāi tuì",
      "translations": [
        "to decline",
        "to fall",
        "to drop",
        "to falter",
        "a decline",
        "recession (in economics)"
      ]
    },
    {
      "id": 4200,
      "hanzi": "率领",
      "pinyin": "shuài lǐng",
      "translations": [
        "to lead",
        "to command",
        "to head"
      ]
    },
    {
      "id": 4201,
      "hanzi": "涮",
      "pinyin": "shuàn",
      "translations": [
        "to rinse",
        "to trick",
        "to fool sb",
        "to cook by dipping finely sliced ingredients briefly in boiling water or soup (generally done at the dining table)"
      ]
    },
    {
      "id": 4202,
      "hanzi": "双胞胎",
      "pinyin": "shuāng bāo tāi",
      "translations": [
        "twin",
        "CL:對|对[duì]"
      ]
    },
    {
      "id": 4203,
      "hanzi": "爽快",
      "pinyin": "shuǎng kuai",
      "translations": [
        "refreshed",
        "rejuvenated",
        "frank and straightforward"
      ]
    },
    {
      "id": 4204,
      "hanzi": "水利",
      "pinyin": "shuǐ lì",
      "translations": [
        "water conservancy",
        "irrigation works"
      ]
    },
    {
      "id": 4205,
      "hanzi": "水龙头",
      "pinyin": "shuǐ lóng tóu",
      "translations": [
        "faucet",
        "tap"
      ]
    },
    {
      "id": 4206,
      "hanzi": "水泥",
      "pinyin": "shuǐ ní",
      "translations": [
        "cement",
        "CL:袋[dài]"
      ]
    },
    {
      "id": 4207,
      "hanzi": "司法",
      "pinyin": "sī fǎ",
      "translations": [
        "judicial",
        "(administration of) justice"
      ]
    },
    {
      "id": 4208,
      "hanzi": "司令",
      "pinyin": "sī lìng",
      "translations": [
        "commanding officer"
      ]
    },
    {
      "id": 4209,
      "hanzi": "思念",
      "pinyin": "sī niàn",
      "translations": [
        "to think of",
        "to long for",
        "to miss"
      ]
    },
    {
      "id": 4210,
      "hanzi": "思索",
      "pinyin": "sī suǒ",
      "translations": [
        "to think deeply",
        "to ponder"
      ]
    },
    {
      "id": 4211,
      "hanzi": "思维",
      "pinyin": "sī wéi",
      "translations": [
        "(line of) thought",
        "thinking"
      ]
    },
    {
      "id": 4212,
      "hanzi": "思绪",
      "pinyin": "sī xù",
      "translations": [
        "train of thought",
        "emotional state",
        "mood",
        "feeling"
      ]
    },
    {
      "id": 4213,
      "hanzi": "私自",
      "pinyin": "sī zì",
      "translations": [
        "private",
        "personal",
        "secretly",
        "without explicit approval"
      ]
    },
    {
      "id": 4214,
      "hanzi": "斯文",
      "pinyin": "sī wén",
      "translations": [
        "refined",
        "educate",
        "cultured",
        "intellectual",
        "polite",
        "gentle"
      ]
    },
    {
      "id": 4215,
      "hanzi": "死亡",
      "pinyin": "sǐ wáng",
      "translations": [
        "to die",
        "death"
      ]
    },
    {
      "id": 4216,
      "hanzi": "四肢",
      "pinyin": "sì zhī",
      "translations": [
        "the four limbs of the body"
      ]
    },
    {
      "id": 4217,
      "hanzi": "肆无忌惮",
      "pinyin": "sì wú jì dàn",
      "translations": [
        "absolutely unrestrained",
        "unbridled",
        "without the slightest scruple"
      ]
    },
    {
      "id": 4218,
      "hanzi": "饲养",
      "pinyin": "sì yǎng",
      "translations": [
        "to raise",
        "to rear"
      ]
    },
    {
      "id": 4219,
      "hanzi": "耸",
      "pinyin": "sǒng",
      "translations": [
        "to excite",
        "to raise up",
        "to shrug",
        "high",
        "lofty",
        "towering"
      ]
    },
    {
      "id": 4220,
      "hanzi": "艘",
      "pinyin": "sōu",
      "translations": [
        "classifier for ships",
        "Taiwan pr. [sāo]"
      ]
    },
    {
      "id": 4221,
      "hanzi": "搜索",
      "pinyin": "sōu suǒ",
      "translations": [
        "to search",
        "to look for sth",
        "to scour (search meticulously)",
        "to look sth up",
        "internet search",
        "database search"
      ]
    },
    {
      "id": 4222,
      "hanzi": "苏醒",
      "pinyin": "sū xǐng",
      "translations": [
        "to wake up",
        "to regain consciousness"
      ]
    },
    {
      "id": 4223,
      "hanzi": "俗话",
      "pinyin": "sú huà",
      "translations": [
        "common saying",
        "proverb"
      ]
    },
    {
      "id": 4224,
      "hanzi": "塑造",
      "pinyin": "sù zào",
      "translations": [
        "to model",
        "to mould",
        "plastic (arts)",
        "flexible",
        "to portray (in sculpture or in words)"
      ]
    },
    {
      "id": 4225,
      "hanzi": "素食",
      "pinyin": "sù shí",
      "translations": [
        "vegetables",
        "vegetarian food"
      ]
    },
    {
      "id": 4226,
      "hanzi": "素质",
      "pinyin": "sù zhì",
      "translations": [
        "inner quality",
        "basic essence",
        "change over time"
      ]
    },
    {
      "id": 4227,
      "hanzi": "诉讼",
      "pinyin": "sù sòng",
      "translations": [
        "lawsuit"
      ]
    },
    {
      "id": 4228,
      "hanzi": "算了",
      "pinyin": "suàn le",
      "translations": [
        "let it be",
        "let it pass",
        "forget about it"
      ]
    },
    {
      "id": 4229,
      "hanzi": "算数",
      "pinyin": "suàn shù",
      "translations": [
        "to count numbers",
        "to keep to one's word",
        "to hold (i.e. to remain valid)",
        "to count (i.e. to be important)"
      ]
    },
    {
      "id": 4230,
      "hanzi": "随即",
      "pinyin": "suí jí",
      "translations": [
        "immediately",
        "presently",
        "following which"
      ]
    },
    {
      "id": 4231,
      "hanzi": "随身",
      "pinyin": "suí shēn",
      "translations": [
        "to (carry) on one's person",
        "to (take) with one"
      ]
    },
    {
      "id": 4232,
      "hanzi": "随手",
      "pinyin": "suí shǒu",
      "translations": [
        "conveniently",
        "without extra trouble",
        "while doing it",
        "in passing"
      ]
    },
    {
      "id": 4233,
      "hanzi": "随意",
      "pinyin": "suí yì",
      "translations": [
        "as one wishes",
        "according to one's wishes",
        "at will",
        "voluntary",
        "conscious"
      ]
    },
    {
      "id": 4234,
      "hanzi": "岁月",
      "pinyin": "suì yuè",
      "translations": [
        "years",
        "passing of time"
      ]
    },
    {
      "id": 4235,
      "hanzi": "隧道",
      "pinyin": "suì dào",
      "translations": [
        "tunnel"
      ]
    },
    {
      "id": 4236,
      "hanzi": "损坏",
      "pinyin": "sǔn huài",
      "translations": [
        "to damage",
        "to injure"
      ]
    },
    {
      "id": 4237,
      "hanzi": "索赔",
      "pinyin": "suǒ péi",
      "translations": [
        "to ask for compensation",
        "to claim damages",
        "claim for damages"
      ]
    },
    {
      "id": 4238,
      "hanzi": "索性",
      "pinyin": "suǒ xìng",
      "translations": [
        "you might as well (do it)",
        "simply",
        "just"
      ]
    },
    {
      "id": 4239,
      "hanzi": "塌",
      "pinyin": "tā",
      "translations": [
        "collapse"
      ]
    },
    {
      "id": 4240,
      "hanzi": "踏实",
      "pinyin": "tā shi",
      "translations": [
        "practical",
        "down-to-earth",
        "realistic",
        "firmly based",
        "steadfast",
        "to have peace of mind",
        "free from anxiety"
      ]
    },
    {
      "id": 4241,
      "hanzi": "台风",
      "pinyin": "tái fēng",
      "translations": [
        "hurricane",
        "typhoon"
      ]
    },
    {
      "id": 4242,
      "hanzi": "太空",
      "pinyin": "tài kōng",
      "translations": [
        "outer space"
      ]
    },
    {
      "id": 4243,
      "hanzi": "泰斗",
      "pinyin": "tài dǒu",
      "translations": [
        "leading scholar of his time",
        "magnate"
      ]
    },
    {
      "id": 4244,
      "hanzi": "瘫痪",
      "pinyin": "tān huàn",
      "translations": [
        "paralysis",
        "be paralyzed (body, transportation, etc)"
      ]
    },
    {
      "id": 4245,
      "hanzi": "贪婪",
      "pinyin": "tān lán",
      "translations": [
        "avaricious",
        "greedy",
        "rapacious",
        "insatiable",
        "avid"
      ]
    },
    {
      "id": 4246,
      "hanzi": "贪污",
      "pinyin": "tān wū",
      "translations": [
        "corruption"
      ]
    },
    {
      "id": 4247,
      "hanzi": "摊儿",
      "pinyin": "tān r",
      "translations": [
        "erhua variant of 攤|摊[tān]"
      ]
    },
    {
      "id": 4248,
      "hanzi": "弹性",
      "pinyin": "tán xìng",
      "translations": [
        "flexibility",
        "elasticity"
      ]
    },
    {
      "id": 4249,
      "hanzi": "坦白",
      "pinyin": "tǎn bái",
      "translations": [
        "honest",
        "forthcoming",
        "to confess"
      ]
    },
    {
      "id": 4250,
      "hanzi": "探测",
      "pinyin": "tàn cè",
      "translations": [
        "to probe",
        "to take readings",
        "to explore",
        "exploration"
      ]
    },
    {
      "id": 4251,
      "hanzi": "探索",
      "pinyin": "tàn suǒ",
      "translations": [
        "to explore",
        "to probe"
      ]
    },
    {
      "id": 4252,
      "hanzi": "探讨",
      "pinyin": "tàn tǎo",
      "translations": [
        "to investigate",
        "to probe"
      ]
    },
    {
      "id": 4253,
      "hanzi": "探望",
      "pinyin": "tàn wàng",
      "translations": [
        "to visit"
      ]
    },
    {
      "id": 4254,
      "hanzi": "叹气",
      "pinyin": "tàn qì",
      "translations": [
        "to sigh",
        "to heave a sigh"
      ]
    },
    {
      "id": 4255,
      "hanzi": "糖葫芦",
      "pinyin": "táng hú lu",
      "translations": [
        "sugar-coated Chinese hawthorn fruit on a stick",
        "tanghulu"
      ]
    },
    {
      "id": 4256,
      "hanzi": "倘若",
      "pinyin": "tǎng ruò",
      "translations": [
        "provided that",
        "supposing that",
        "if"
      ]
    },
    {
      "id": 4257,
      "hanzi": "掏",
      "pinyin": "tāo",
      "translations": [
        "variant of 掏[tāo]"
      ]
    },
    {
      "id": 4258,
      "hanzi": "滔滔不绝",
      "pinyin": "tāo tāo bù jué",
      "translations": [
        "unceasing torrent (idiom)",
        "talking non-stop",
        "gabbling forty to the dozen"
      ]
    },
    {
      "id": 4259,
      "hanzi": "陶瓷",
      "pinyin": "táo cí",
      "translations": [
        "pottery and porcelain",
        "ceramics"
      ]
    },
    {
      "id": 4260,
      "hanzi": "淘气",
      "pinyin": "táo qì",
      "translations": [
        "naughty",
        "bad"
      ]
    },
    {
      "id": 4261,
      "hanzi": "淘汰",
      "pinyin": "táo tài",
      "translations": [
        "to wash out",
        "elimination (by selection)",
        "natural selection",
        "to knock out (in a competition)",
        "to die out",
        "to phase out"
      ]
    },
    {
      "id": 4262,
      "hanzi": "讨价还价",
      "pinyin": "tǎo jià huán jià",
      "translations": [
        "to haggle over price"
      ]
    },
    {
      "id": 4263,
      "hanzi": "特长",
      "pinyin": "tè cháng",
      "translations": [
        "personal strength",
        "one's special ability or strong points"
      ]
    },
    {
      "id": 4264,
      "hanzi": "特定",
      "pinyin": "tè dìng",
      "translations": [
        "special",
        "specific",
        "designated",
        "particular"
      ]
    },
    {
      "id": 4265,
      "hanzi": "特色",
      "pinyin": "tè sè",
      "translations": [
        "characteristic",
        "distinguishing feature or quality"
      ]
    },
    {
      "id": 4266,
      "hanzi": "提拔",
      "pinyin": "tí bá",
      "translations": [
        "to promote to a higher job",
        "to select for promotion"
      ]
    },
    {
      "id": 4267,
      "hanzi": "提炼",
      "pinyin": "tí liàn",
      "translations": [
        "to extract (ore, minerals etc)",
        "to refine",
        "to purify",
        "to process"
      ]
    },
    {
      "id": 4268,
      "hanzi": "提示",
      "pinyin": "tí shì",
      "translations": [
        "to prompt",
        "to present",
        "to point out",
        "to draw attention to sth",
        "hint",
        "brief",
        "cue"
      ]
    },
    {
      "id": 4269,
      "hanzi": "提议",
      "pinyin": "tí yì",
      "translations": [
        "proposal",
        "suggestion",
        "to propose",
        "to suggest"
      ]
    },
    {
      "id": 4270,
      "hanzi": "题材",
      "pinyin": "tí cái",
      "translations": [
        "subject matter"
      ]
    },
    {
      "id": 4271,
      "hanzi": "体谅",
      "pinyin": "tǐ liàng",
      "translations": [
        "to empathize",
        "to allow (for something)",
        "to show understanding",
        "to appreciate"
      ]
    },
    {
      "id": 4272,
      "hanzi": "体面",
      "pinyin": "tǐ miàn",
      "translations": [
        "dignity",
        "face (as in \"losing face\")",
        "honorable",
        "creditable",
        "pretty"
      ]
    },
    {
      "id": 4273,
      "hanzi": "体系",
      "pinyin": "tǐ xì",
      "translations": [
        "system",
        "setup",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4274,
      "hanzi": "天才",
      "pinyin": "tiān cái",
      "translations": [
        "talent",
        "gift",
        "genius",
        "talented",
        "gifted"
      ]
    },
    {
      "id": 4275,
      "hanzi": "天伦之乐",
      "pinyin": "tiān lún zhī lè",
      "translations": [
        "family love and joy",
        "domestic bliss"
      ]
    },
    {
      "id": 4276,
      "hanzi": "天然气",
      "pinyin": "tiān rán qì",
      "translations": [
        "natural gas"
      ]
    },
    {
      "id": 4277,
      "hanzi": "天生",
      "pinyin": "tiān shēng",
      "translations": [
        "nature",
        "disposition",
        "innate",
        "natural"
      ]
    },
    {
      "id": 4278,
      "hanzi": "天堂",
      "pinyin": "tiān táng",
      "translations": [
        "paradise",
        "heaven"
      ]
    },
    {
      "id": 4279,
      "hanzi": "天文",
      "pinyin": "tiān wén",
      "translations": [
        "astronomy"
      ]
    },
    {
      "id": 4280,
      "hanzi": "田径",
      "pinyin": "tián jìng",
      "translations": [
        "track and field (athletics)"
      ]
    },
    {
      "id": 4281,
      "hanzi": "舔",
      "pinyin": "tiǎn",
      "translations": [
        "to lick",
        "to lap"
      ]
    },
    {
      "id": 4282,
      "hanzi": "挑剔",
      "pinyin": "tiāo ti",
      "translations": [
        "picky",
        "fussy"
      ]
    },
    {
      "id": 4283,
      "hanzi": "条款",
      "pinyin": "tiáo kuǎn",
      "translations": [
        "clause (of contract or law)",
        "CL:項|项[xiàng]"
      ]
    },
    {
      "id": 4284,
      "hanzi": "条理",
      "pinyin": "tiáo lǐ",
      "translations": [
        "arrangement",
        "order",
        "tidiness"
      ]
    },
    {
      "id": 4285,
      "hanzi": "条约",
      "pinyin": "tiáo yuē",
      "translations": [
        "treaty",
        "pact",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4286,
      "hanzi": "调和",
      "pinyin": "tiáo hé",
      "translations": [
        "harmonious",
        "to mediate",
        "to reconcile",
        "to compromise",
        "mediation",
        "to mix",
        "to blend",
        "blended",
        "to season",
        "seasoning",
        "to placate"
      ]
    },
    {
      "id": 4287,
      "hanzi": "调剂",
      "pinyin": "tiáo jì",
      "translations": [
        "to adjust",
        "to balance",
        "to make up a medical prescription"
      ]
    },
    {
      "id": 4288,
      "hanzi": "调节",
      "pinyin": "tiáo jié",
      "translations": [
        "to adjust",
        "to regulate",
        "to harmonize",
        "to reconcile (accountancy etc)"
      ]
    },
    {
      "id": 4289,
      "hanzi": "调解",
      "pinyin": "tiáo jiě",
      "translations": [
        "to mediate",
        "to bring parties to an agreement"
      ]
    },
    {
      "id": 4290,
      "hanzi": "调料",
      "pinyin": "tiáo liào",
      "translations": [
        "condiment",
        "seasoning",
        "flavoring"
      ]
    },
    {
      "id": 4291,
      "hanzi": "挑拨",
      "pinyin": "tiǎo bō",
      "translations": [
        "to incite disharmony",
        "to instigate"
      ]
    },
    {
      "id": 4292,
      "hanzi": "挑衅",
      "pinyin": "tiǎo xìn",
      "translations": [
        "to provoke",
        "provocation"
      ]
    },
    {
      "id": 4293,
      "hanzi": "跳跃",
      "pinyin": "tiào yuè",
      "translations": [
        "to jump",
        "to leap",
        "to bound",
        "to skip"
      ]
    },
    {
      "id": 4294,
      "hanzi": "停泊",
      "pinyin": "tíng bó",
      "translations": [
        "to anchor",
        "anchorage",
        "mooring (of a ship)"
      ]
    },
    {
      "id": 4295,
      "hanzi": "停顿",
      "pinyin": "tíng dùn",
      "translations": [
        "to halt",
        "to break off",
        "pause (in speech)"
      ]
    },
    {
      "id": 4296,
      "hanzi": "停滞",
      "pinyin": "tíng zhì",
      "translations": [
        "stagnation",
        "at a standstill",
        "bogged down"
      ]
    },
    {
      "id": 4297,
      "hanzi": "亭子",
      "pinyin": "tíng zi",
      "translations": [
        "pavilion"
      ]
    },
    {
      "id": 4298,
      "hanzi": "挺拔",
      "pinyin": "tǐng bá",
      "translations": [
        "tall and straight"
      ]
    },
    {
      "id": 4299,
      "hanzi": "通货",
      "pinyin": "tōng huò",
      "translations": [
        "currency",
        "exchange of goods"
      ]
    },
    {
      "id": 4300,
      "hanzi": "通俗",
      "pinyin": "tōng sú",
      "translations": [
        "common",
        "everyday",
        "average"
      ]
    },
    {
      "id": 4301,
      "hanzi": "通用",
      "pinyin": "tōng yòng",
      "translations": [
        "common (use)",
        "interchangeable"
      ]
    },
    {
      "id": 4302,
      "hanzi": "铜矿",
      "pinyin": "tóng kuàng",
      "translations": [
        "Copper"
      ]
    },
    {
      "id": 4303,
      "hanzi": "同胞",
      "pinyin": "tóng bāo",
      "translations": [
        "born of the same parents",
        "sibling",
        "fellow citizen",
        "compatriot"
      ]
    },
    {
      "id": 4304,
      "hanzi": "同志",
      "pinyin": "tóng zhì",
      "translations": [
        "comrade",
        "homosexual (slang)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4305,
      "hanzi": "童话",
      "pinyin": "tóng huà",
      "translations": [
        "children's fairy tales"
      ]
    },
    {
      "id": 4306,
      "hanzi": "统筹兼顾",
      "pinyin": "tǒng chóu jiān gù",
      "translations": [
        "an overall plan taking into account all factors"
      ]
    },
    {
      "id": 4307,
      "hanzi": "统计",
      "pinyin": "tǒng jì",
      "translations": [
        "statistics",
        "to count",
        "to add up"
      ]
    },
    {
      "id": 4308,
      "hanzi": "统统",
      "pinyin": "tǒng tǒng",
      "translations": [
        "totally"
      ]
    },
    {
      "id": 4309,
      "hanzi": "投机",
      "pinyin": "tóu jī",
      "translations": [
        "to speculate (on financial markets)",
        "opportunistic",
        "congenial",
        "agreeable"
      ]
    },
    {
      "id": 4310,
      "hanzi": "投票",
      "pinyin": "tóu piào",
      "translations": [
        "to vote",
        "vote"
      ]
    },
    {
      "id": 4311,
      "hanzi": "投降",
      "pinyin": "tóu xiáng",
      "translations": [
        "to surrender",
        "surrender"
      ]
    },
    {
      "id": 4312,
      "hanzi": "投掷",
      "pinyin": "tóu zhì",
      "translations": [
        "to throw sth a long distance",
        "to hurl",
        "to throw at",
        "to throw (dice etc)",
        "to flip (a coin)"
      ]
    },
    {
      "id": 4313,
      "hanzi": "秃",
      "pinyin": "tū",
      "translations": [
        "bald",
        "blunt"
      ]
    },
    {
      "id": 4314,
      "hanzi": "突破",
      "pinyin": "tū pò",
      "translations": [
        "to break through",
        "to make a breakthrough",
        "to surmount or break the back of (a task etc)",
        "(of ball sports) to break through a defense"
      ]
    },
    {
      "id": 4315,
      "hanzi": "图案",
      "pinyin": "tú àn",
      "translations": [
        "design",
        "pattern"
      ]
    },
    {
      "id": 4316,
      "hanzi": "徒弟",
      "pinyin": "tú dì",
      "translations": [
        "apprentice",
        "disciple"
      ]
    },
    {
      "id": 4317,
      "hanzi": "途径",
      "pinyin": "tú jìng",
      "translations": [
        "way",
        "channel"
      ]
    },
    {
      "id": 4318,
      "hanzi": "涂抹",
      "pinyin": "tú mǒ",
      "translations": [
        "to paint",
        "to smear",
        "to apply (makeup etc)",
        "to doodle",
        "to erase",
        "to obliterate"
      ]
    },
    {
      "id": 4319,
      "hanzi": "土壤",
      "pinyin": "tǔ rǎng",
      "translations": [
        "soil"
      ]
    },
    {
      "id": 4320,
      "hanzi": "团结",
      "pinyin": "tuán jié",
      "translations": [
        "a rally",
        "to hold a rally",
        "to join forces"
      ]
    },
    {
      "id": 4321,
      "hanzi": "团体",
      "pinyin": "tuán tǐ",
      "translations": [
        "group",
        "organization",
        "team",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4322,
      "hanzi": "团圆",
      "pinyin": "tuán yuán",
      "translations": [
        "to have a reunion"
      ]
    },
    {
      "id": 4323,
      "hanzi": "推测",
      "pinyin": "tuī cè",
      "translations": [
        "speculation",
        "to conjecture",
        "to surmise",
        "to speculate"
      ]
    },
    {
      "id": 4324,
      "hanzi": "推翻",
      "pinyin": "tuī fān",
      "translations": [
        "to overthrow"
      ]
    },
    {
      "id": 4325,
      "hanzi": "推理",
      "pinyin": "tuī lǐ",
      "translations": [
        "reasoning",
        "speculative",
        "inference"
      ]
    },
    {
      "id": 4326,
      "hanzi": "推论",
      "pinyin": "tuī lùn",
      "translations": [
        "to infer",
        "inference",
        "corollary",
        "reasoned conclusion"
      ]
    },
    {
      "id": 4327,
      "hanzi": "推销",
      "pinyin": "tuī xiāo",
      "translations": [
        "to market",
        "to sell"
      ]
    },
    {
      "id": 4328,
      "hanzi": "吞咽",
      "pinyin": "tūn yàn",
      "translations": [
        "to swallow",
        "to gulp"
      ]
    },
    {
      "id": 4329,
      "hanzi": "脱离",
      "pinyin": "tuō lí",
      "translations": [
        "to separate oneself from",
        "to break away from",
        "diastasis (medicine)",
        "abscission",
        "abjunction (botany)"
      ]
    },
    {
      "id": 4330,
      "hanzi": "拖延",
      "pinyin": "tuō yán",
      "translations": [
        "to adjourn",
        "to delay",
        "to defer",
        "adjournment",
        "procrastination"
      ]
    },
    {
      "id": 4331,
      "hanzi": "托运",
      "pinyin": "tuō yùn",
      "translations": [
        "to consign (goods)",
        "to check through (baggage)"
      ]
    },
    {
      "id": 4332,
      "hanzi": "妥当",
      "pinyin": "tuǒ dang",
      "translations": [
        "appropriate",
        "proper",
        "ready"
      ]
    },
    {
      "id": 4333,
      "hanzi": "妥善",
      "pinyin": "tuǒ shàn",
      "translations": [
        "appropriate",
        "proper"
      ]
    },
    {
      "id": 4334,
      "hanzi": "妥协",
      "pinyin": "tuǒ xié",
      "translations": [
        "to compromise",
        "to reach terms",
        "a compromise"
      ]
    },
    {
      "id": 4335,
      "hanzi": "椭圆",
      "pinyin": "tuǒ yuán",
      "translations": [
        "oval",
        "ellipse",
        "elliptic"
      ]
    },
    {
      "id": 4336,
      "hanzi": "唾沫",
      "pinyin": "tuò mo",
      "translations": [
        "spittle",
        "saliva"
      ]
    },
    {
      "id": 4337,
      "hanzi": "挖掘",
      "pinyin": "wā jué",
      "translations": [
        "to excavate",
        "to dig",
        "to unearth"
      ]
    },
    {
      "id": 4338,
      "hanzi": "娃娃",
      "pinyin": "wá wa",
      "translations": [
        "baby",
        "small child",
        "doll"
      ]
    },
    {
      "id": 4339,
      "hanzi": "瓦解",
      "pinyin": "wǎ jiě",
      "translations": [
        "to collapse",
        "to disintegrate",
        "to crumble"
      ]
    },
    {
      "id": 4340,
      "hanzi": "哇",
      "pinyin": "wa",
      "translations": [
        "replaces 啊 when following the vowel \"u\" or \"ao\""
      ]
    },
    {
      "id": 4341,
      "hanzi": "歪曲",
      "pinyin": "wāi qū",
      "translations": [
        "to distort",
        "to misrepresent"
      ]
    },
    {
      "id": 4342,
      "hanzi": "外表",
      "pinyin": "wài biǎo",
      "translations": [
        "external",
        "outside",
        "outward appearance"
      ]
    },
    {
      "id": 4343,
      "hanzi": "外行",
      "pinyin": "wài háng",
      "translations": [
        "layman",
        "amateur"
      ]
    },
    {
      "id": 4344,
      "hanzi": "外界",
      "pinyin": "wài jiè",
      "translations": [
        "the outside world",
        "external"
      ]
    },
    {
      "id": 4345,
      "hanzi": "外向",
      "pinyin": "wài xiàng",
      "translations": [
        "outward-looking",
        "extrovert",
        "extroverted (personality)",
        "export-oriented (economy)"
      ]
    },
    {
      "id": 4346,
      "hanzi": "丸",
      "pinyin": "wán",
      "translations": [
        "pill"
      ]
    },
    {
      "id": 4347,
      "hanzi": "完备",
      "pinyin": "wán bèi",
      "translations": [
        "faultless",
        "complete",
        "perfect",
        "to leave nothing to be desired"
      ]
    },
    {
      "id": 4348,
      "hanzi": "完毕",
      "pinyin": "wán bì",
      "translations": [
        "to finish",
        "to end",
        "to complete"
      ]
    },
    {
      "id": 4349,
      "hanzi": "玩弄",
      "pinyin": "wán nòng",
      "translations": [
        "to play with",
        "to toy with",
        "to dally with",
        "to engage in",
        "to resort to"
      ]
    },
    {
      "id": 4350,
      "hanzi": "玩意儿",
      "pinyin": "wán yì r",
      "translations": [
        "erhua variant of 玩意[wán yì]"
      ]
    },
    {
      "id": 4351,
      "hanzi": "顽固",
      "pinyin": "wán gù",
      "translations": [
        "stubborn",
        "obstinate"
      ]
    },
    {
      "id": 4352,
      "hanzi": "顽强",
      "pinyin": "wán qiáng",
      "translations": [
        "tenacious",
        "hard to defeat"
      ]
    },
    {
      "id": 4353,
      "hanzi": "挽回",
      "pinyin": "wǎn huí",
      "translations": [
        "to retrieve",
        "to redeem"
      ]
    },
    {
      "id": 4354,
      "hanzi": "挽救",
      "pinyin": "wǎn jiù",
      "translations": [
        "to save",
        "to remedy",
        "to rescue"
      ]
    },
    {
      "id": 4355,
      "hanzi": "惋惜",
      "pinyin": "wǎn xī",
      "translations": [
        "to feel sorry for a person over sth that should have happened"
      ]
    },
    {
      "id": 4356,
      "hanzi": "万分",
      "pinyin": "wàn fēn",
      "translations": [
        "very much",
        "extremely",
        "one ten thousandth part"
      ]
    },
    {
      "id": 4357,
      "hanzi": "往常",
      "pinyin": "wǎng cháng",
      "translations": [
        "habitually (in the past)",
        "as one used to do formerly",
        "as it used to be"
      ]
    },
    {
      "id": 4358,
      "hanzi": "往事",
      "pinyin": "wǎng shì",
      "translations": [
        "past events",
        "former happenings"
      ]
    },
    {
      "id": 4359,
      "hanzi": "网络",
      "pinyin": "wǎng luò",
      "translations": [
        "network (computing, telecommunications, transport etc)"
      ]
    },
    {
      "id": 4360,
      "hanzi": "妄想",
      "pinyin": "wàng xiǎng",
      "translations": [
        "to attempt vainly",
        "a vain attempt"
      ]
    },
    {
      "id": 4361,
      "hanzi": "微不足道",
      "pinyin": "wēi bù zú dào",
      "translations": [
        "negligible",
        "insignificant"
      ]
    },
    {
      "id": 4362,
      "hanzi": "微观",
      "pinyin": "wēi guān",
      "translations": [
        "micro-",
        "sub-atomic"
      ]
    },
    {
      "id": 4363,
      "hanzi": "威风",
      "pinyin": "wēi fēng",
      "translations": [
        "might",
        "awe-inspiring authority",
        "impressive"
      ]
    },
    {
      "id": 4364,
      "hanzi": "威力",
      "pinyin": "wēi lì",
      "translations": [
        "might",
        "formidable power"
      ]
    },
    {
      "id": 4365,
      "hanzi": "威望",
      "pinyin": "wēi wàng",
      "translations": [
        "prestige"
      ]
    },
    {
      "id": 4366,
      "hanzi": "威信",
      "pinyin": "wēi xìn",
      "translations": [
        "prestige",
        "reputation",
        "trust",
        "credit with the people"
      ]
    },
    {
      "id": 4367,
      "hanzi": "危机",
      "pinyin": "wēi jī",
      "translations": [
        "crisis",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4368,
      "hanzi": "违背",
      "pinyin": "wéi bèi",
      "translations": [
        "to violate",
        "to be contrary to"
      ]
    },
    {
      "id": 4369,
      "hanzi": "维持",
      "pinyin": "wéi chí",
      "translations": [
        "to keep",
        "to maintain",
        "to preserve"
      ]
    },
    {
      "id": 4370,
      "hanzi": "维生素",
      "pinyin": "wéi shēng sù",
      "translations": [
        "vitamin"
      ]
    },
    {
      "id": 4371,
      "hanzi": "维修",
      "pinyin": "wéi xiū",
      "translations": [
        "maintenance (of equipment)",
        "to protect and maintain"
      ]
    },
    {
      "id": 4372,
      "hanzi": "唯独",
      "pinyin": "wéi dú",
      "translations": [
        "only",
        "just (i.e. it is only that...)",
        "all except",
        "unique"
      ]
    },
    {
      "id": 4373,
      "hanzi": "为难",
      "pinyin": "wéi nán",
      "translations": [
        "to feel embarrassed or awkward",
        "to make things difficult (for someone)",
        "to find things difficult (to do or manage)"
      ]
    },
    {
      "id": 4374,
      "hanzi": "为期",
      "pinyin": "wéi qī",
      "translations": [
        "(to be done) by (a certain date)",
        "lasting (a certain time)"
      ]
    },
    {
      "id": 4375,
      "hanzi": "为首",
      "pinyin": "wéi shǒu",
      "translations": [
        "head",
        "be headed by"
      ]
    },
    {
      "id": 4376,
      "hanzi": "委员",
      "pinyin": "wěi yuán",
      "translations": [
        "committee member",
        "committee",
        "council",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4377,
      "hanzi": "伪造",
      "pinyin": "wěi zào",
      "translations": [
        "to forge",
        "to fake",
        "to counterfeit"
      ]
    },
    {
      "id": 4378,
      "hanzi": "胃口",
      "pinyin": "wèi kǒu",
      "translations": [
        "appetite"
      ]
    },
    {
      "id": 4379,
      "hanzi": "位于",
      "pinyin": "wèi yú",
      "translations": [
        "to be located at",
        "to be situated at",
        "to lie"
      ]
    },
    {
      "id": 4380,
      "hanzi": "未免",
      "pinyin": "wèi miǎn",
      "translations": [
        "unavoidable",
        "a bit too much",
        "over the top (you exaggerate)"
      ]
    },
    {
      "id": 4381,
      "hanzi": "畏惧",
      "pinyin": "wèi jù",
      "translations": [
        "to fear",
        "to dread",
        "foreboding"
      ]
    },
    {
      "id": 4382,
      "hanzi": "卫星",
      "pinyin": "wèi xīng",
      "translations": [
        "(space) satellite",
        "CL:顆|颗[kē]"
      ]
    },
    {
      "id": 4383,
      "hanzi": "慰问",
      "pinyin": "wèi wèn",
      "translations": [
        "to express sympathy",
        "greetings",
        "consolation etc"
      ]
    },
    {
      "id": 4384,
      "hanzi": "温带",
      "pinyin": "wēn dài",
      "translations": [
        "temperate zone"
      ]
    },
    {
      "id": 4385,
      "hanzi": "温和",
      "pinyin": "wēn hé",
      "translations": [
        "mild",
        "gentle",
        "moderate"
      ]
    },
    {
      "id": 4386,
      "hanzi": "文凭",
      "pinyin": "wén píng",
      "translations": [
        "diploma"
      ]
    },
    {
      "id": 4387,
      "hanzi": "文物",
      "pinyin": "wén wù",
      "translations": [
        "cultural relic",
        "historical relic",
        "CL:件",
        "個|个[gè]"
      ]
    },
    {
      "id": 4388,
      "hanzi": "文献",
      "pinyin": "wén xiàn",
      "translations": [
        "document"
      ]
    },
    {
      "id": 4389,
      "hanzi": "文雅",
      "pinyin": "wén yǎ",
      "translations": [
        "elegant",
        "refined"
      ]
    },
    {
      "id": 4390,
      "hanzi": "文艺",
      "pinyin": "wén yì",
      "translations": [
        "literature and art"
      ]
    },
    {
      "id": 4391,
      "hanzi": "问世",
      "pinyin": "wèn shì",
      "translations": [
        "to be published",
        "to come out"
      ]
    },
    {
      "id": 4392,
      "hanzi": "窝",
      "pinyin": "wō",
      "translations": [
        "nest",
        "pit or hollow on the human body",
        "lair",
        "den",
        "place",
        "to harbor or shelter",
        "to hold in check",
        "to bend",
        "classifier for litters and broods"
      ]
    },
    {
      "id": 4393,
      "hanzi": "乌黑",
      "pinyin": "wū hēi",
      "translations": [
        "jet-black",
        "dark"
      ]
    },
    {
      "id": 4394,
      "hanzi": "污蔑",
      "pinyin": "wū miè",
      "translations": [
        "to slander",
        "to smear",
        "to tarnish"
      ]
    },
    {
      "id": 4395,
      "hanzi": "诬陷",
      "pinyin": "wū xiàn",
      "translations": [
        "to entrap",
        "to frame",
        "to plant false evidence against sb"
      ]
    },
    {
      "id": 4396,
      "hanzi": "无比",
      "pinyin": "wú bǐ",
      "translations": [
        "incomparable",
        "matchless"
      ]
    },
    {
      "id": 4397,
      "hanzi": "无偿",
      "pinyin": "wú cháng",
      "translations": [
        "free",
        "no charge",
        "at no cost"
      ]
    },
    {
      "id": 4398,
      "hanzi": "无耻",
      "pinyin": "wú chǐ",
      "translations": [
        "without any sense of shame",
        "unembarrassed",
        "shameless"
      ]
    },
    {
      "id": 4399,
      "hanzi": "无从",
      "pinyin": "wú cóng",
      "translations": [
        "not to have access",
        "beyond one's authority or capability",
        "sth one has no way of doing"
      ]
    },
    {
      "id": 4400,
      "hanzi": "无动于衷",
      "pinyin": "wú dòng yú zhōng",
      "translations": [
        "aloof",
        "indifferent",
        "unconcerned"
      ]
    },
    {
      "id": 4401,
      "hanzi": "无非",
      "pinyin": "wú fēi",
      "translations": [
        "only",
        "nothing else"
      ]
    },
    {
      "id": 4402,
      "hanzi": "无精打采",
      "pinyin": "wú jīng dǎ cǎi",
      "translations": [
        "dispirited and downcast (idiom); listless",
        "in low spirits",
        "washed out"
      ]
    },
    {
      "id": 4403,
      "hanzi": "无可奉告",
      "pinyin": "wú kě fèng gào",
      "translations": [
        "(idiom) \"no comment\""
      ]
    },
    {
      "id": 4404,
      "hanzi": "无可奈何",
      "pinyin": "wú kě nài hé",
      "translations": [
        "have no way out",
        "have no alternative",
        "abbr. to 無奈|无奈[wú nài]"
      ]
    },
    {
      "id": 4405,
      "hanzi": "无赖",
      "pinyin": "wú lài",
      "translations": [
        "hoodlum",
        "rascal",
        "rogue",
        "rascally",
        "scoundrelly"
      ]
    },
    {
      "id": 4406,
      "hanzi": "无理取闹",
      "pinyin": "wú lǐ qǔ nào",
      "translations": [
        "to make trouble without reason (idiom); to be deliberately provocative"
      ]
    },
    {
      "id": 4407,
      "hanzi": "无能为力",
      "pinyin": "wú néng wéi lì",
      "translations": [
        "impotent (idiom)",
        "powerless",
        "helpless"
      ]
    },
    {
      "id": 4408,
      "hanzi": "无穷无尽",
      "pinyin": "wú qióng wú jìn",
      "translations": [
        "vast and limitless (idiom); endless span of time",
        "no vestige of a beginning",
        "no prospect of an end"
      ]
    },
    {
      "id": 4409,
      "hanzi": "无微不至",
      "pinyin": "wú wēi bù zhì",
      "translations": [
        "in every possible way (idiom); meticulous"
      ]
    },
    {
      "id": 4410,
      "hanzi": "无忧无虑",
      "pinyin": "wú yōu wú lǜ",
      "translations": [
        "carefree and without worries (idiom)"
      ]
    },
    {
      "id": 4411,
      "hanzi": "无知",
      "pinyin": "wú zhī",
      "translations": [
        "ignorant",
        "ignorance"
      ]
    },
    {
      "id": 4412,
      "hanzi": "舞蹈",
      "pinyin": "wǔ dǎo",
      "translations": [
        "dance"
      ]
    },
    {
      "id": 4413,
      "hanzi": "武侠",
      "pinyin": "wǔ xiá",
      "translations": [
        "martial arts chivalry (Chinese literary, theatrical and cinema genre)",
        "knight-errant"
      ]
    },
    {
      "id": 4414,
      "hanzi": "武装",
      "pinyin": "wǔ zhuāng",
      "translations": [
        "arms",
        "equipment",
        "to arm",
        "military",
        "armed (forces)"
      ]
    },
    {
      "id": 4415,
      "hanzi": "侮辱",
      "pinyin": "wǔ rǔ",
      "translations": [
        "to insult",
        "to humiliate",
        "dishonor"
      ]
    },
    {
      "id": 4416,
      "hanzi": "勿",
      "pinyin": "wù",
      "translations": [
        "do not"
      ]
    },
    {
      "id": 4417,
      "hanzi": "务必",
      "pinyin": "wù bì",
      "translations": [
        "must",
        "to need to",
        "to be sure to"
      ]
    },
    {
      "id": 4418,
      "hanzi": "务实",
      "pinyin": "wù shí",
      "translations": [
        "pragmatic",
        "dealing with concrete issues"
      ]
    },
    {
      "id": 4419,
      "hanzi": "误差",
      "pinyin": "wù chā",
      "translations": [
        "difference",
        "error",
        "inaccuracy"
      ]
    },
    {
      "id": 4420,
      "hanzi": "误解",
      "pinyin": "wù jiě",
      "translations": [
        "to misunderstand",
        "to misread",
        "misunderstanding"
      ]
    },
    {
      "id": 4421,
      "hanzi": "物美价廉",
      "pinyin": "wù měi jià lián",
      "translations": [
        "good quality and cheap",
        "a bargain"
      ]
    },
    {
      "id": 4422,
      "hanzi": "物资",
      "pinyin": "wù zī",
      "translations": [
        "goods",
        "supplies"
      ]
    },
    {
      "id": 4423,
      "hanzi": "溪",
      "pinyin": "xī",
      "translations": [
        "variant of 溪",
        "creek",
        "rivulet"
      ]
    },
    {
      "id": 4424,
      "hanzi": "膝盖",
      "pinyin": "xī gài",
      "translations": [
        "knee"
      ]
    },
    {
      "id": 4425,
      "hanzi": "熄灭",
      "pinyin": "xī miè",
      "translations": [
        "to stop burning",
        "to go out (of fire)",
        "to die out",
        "extinguished"
      ]
    },
    {
      "id": 4426,
      "hanzi": "吸取",
      "pinyin": "xī qǔ",
      "translations": [
        "to absorb",
        "to draw (a lesson, insight etc)",
        "to assimilate"
      ]
    },
    {
      "id": 4427,
      "hanzi": "昔日",
      "pinyin": "xī rì",
      "translations": [
        "formerly",
        "in olden days"
      ]
    },
    {
      "id": 4428,
      "hanzi": "牺牲",
      "pinyin": "xī shēng",
      "translations": [
        "to sacrifice oneself",
        "to lay down one's life",
        "to do sth at the expense of",
        "beast slaughtered for sacrifice",
        "sacrifice",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4429,
      "hanzi": "夕阳",
      "pinyin": "xī yáng",
      "translations": [
        "sunset",
        "the setting sun"
      ]
    },
    {
      "id": 4430,
      "hanzi": "媳妇",
      "pinyin": "xí fù",
      "translations": [
        "daughter-in-law",
        "wife (of a younger man)",
        "young married woman",
        "young woman"
      ]
    },
    {
      "id": 4431,
      "hanzi": "习俗",
      "pinyin": "xí sú",
      "translations": [
        "custom",
        "tradition",
        "local tradition",
        "convention"
      ]
    },
    {
      "id": 4432,
      "hanzi": "袭击",
      "pinyin": "xí jī",
      "translations": [
        "attack (esp. surprise attack)",
        "raid",
        "to attack"
      ]
    },
    {
      "id": 4433,
      "hanzi": "喜闻乐见",
      "pinyin": "xǐ wén lè jiàn",
      "translations": [
        "a delight to see (idiom); an attractive spectacle"
      ]
    },
    {
      "id": 4434,
      "hanzi": "喜悦",
      "pinyin": "xǐ yuè",
      "translations": [
        "happy",
        "joyous"
      ]
    },
    {
      "id": 4435,
      "hanzi": "系列",
      "pinyin": "xì liè",
      "translations": [
        "series"
      ]
    },
    {
      "id": 4436,
      "hanzi": "细胞",
      "pinyin": "xì bāo",
      "translations": [
        "cell (biology)"
      ]
    },
    {
      "id": 4437,
      "hanzi": "细菌",
      "pinyin": "xì jūn",
      "translations": [
        "bacterium",
        "germ"
      ]
    },
    {
      "id": 4438,
      "hanzi": "细致",
      "pinyin": "xì zhì",
      "translations": [
        "delicate",
        "fine",
        "careful",
        "meticulous",
        "painstaking"
      ]
    },
    {
      "id": 4439,
      "hanzi": "霞",
      "pinyin": "xiá",
      "translations": [
        "red clouds"
      ]
    },
    {
      "id": 4440,
      "hanzi": "狭隘",
      "pinyin": "xiá ài",
      "translations": [
        "narrow",
        "tight",
        "narrow minded",
        "lacking in experience"
      ]
    },
    {
      "id": 4441,
      "hanzi": "狭窄",
      "pinyin": "xiá zhǎi",
      "translations": [
        "narrow"
      ]
    },
    {
      "id": 4442,
      "hanzi": "峡谷",
      "pinyin": "xiá gǔ",
      "translations": [
        "canyon",
        "gill",
        "ravine"
      ]
    },
    {
      "id": 4443,
      "hanzi": "夏令营",
      "pinyin": "xià lìng yíng",
      "translations": [
        "summer camp"
      ]
    },
    {
      "id": 4444,
      "hanzi": "下属",
      "pinyin": "xià shǔ",
      "translations": [
        "subordinate",
        "underling"
      ]
    },
    {
      "id": 4445,
      "hanzi": "先进",
      "pinyin": "xiān jìn",
      "translations": [
        "advanced (technology)",
        "to advance"
      ]
    },
    {
      "id": 4446,
      "hanzi": "先前",
      "pinyin": "xiān qián",
      "translations": [
        "before",
        "previously"
      ]
    },
    {
      "id": 4447,
      "hanzi": "鲜明",
      "pinyin": "xiān míng",
      "translations": [
        "bright",
        "clear-cut",
        "distinct"
      ]
    },
    {
      "id": 4448,
      "hanzi": "掀起",
      "pinyin": "xiān qǐ",
      "translations": [
        "to lift",
        "to raise in height",
        "to begin",
        "upsurge",
        "to set off (a campaign)"
      ]
    },
    {
      "id": 4449,
      "hanzi": "纤维",
      "pinyin": "xiān wéi",
      "translations": [
        "fiber",
        "CL:種|种[zhǒng]"
      ]
    },
    {
      "id": 4450,
      "hanzi": "弦",
      "pinyin": "xián",
      "translations": [
        "bow string",
        "string of musical instrument",
        "watchspring",
        "chord (segment of curve)",
        "hypotenuse",
        "CL:根[gēn]"
      ]
    },
    {
      "id": 4451,
      "hanzi": "嫌",
      "pinyin": "xián",
      "translations": [
        "to dislike",
        "suspicion",
        "resentment",
        "enmity",
        "abbr. for 嫌犯",
        "criminal suspect"
      ]
    },
    {
      "id": 4452,
      "hanzi": "嫌疑",
      "pinyin": "xián yí",
      "translations": [
        "suspicion",
        "(be) suspected (of)"
      ]
    },
    {
      "id": 4453,
      "hanzi": "闲话",
      "pinyin": "xián huà",
      "translations": [
        "digression",
        "gossip",
        "complaint",
        "scandal",
        "CL:段[duàn]"
      ]
    },
    {
      "id": 4454,
      "hanzi": "贤惠",
      "pinyin": "xián huì",
      "translations": [
        "chaste",
        "virtuous"
      ]
    },
    {
      "id": 4455,
      "hanzi": "衔接",
      "pinyin": "xián jiē",
      "translations": [
        "to join together",
        "to combine"
      ]
    },
    {
      "id": 4456,
      "hanzi": "显著",
      "pinyin": "xiǎn zhù",
      "translations": [
        "outstanding",
        "notable",
        "remarkable",
        "statistically significant"
      ]
    },
    {
      "id": 4457,
      "hanzi": "现场",
      "pinyin": "xiàn chǎng",
      "translations": [
        "lit. actual location",
        "the scene (of the incident)",
        "on-the-spot"
      ]
    },
    {
      "id": 4458,
      "hanzi": "现成",
      "pinyin": "xiàn chéng",
      "translations": [
        "ready-made",
        "readily available"
      ]
    },
    {
      "id": 4459,
      "hanzi": "现状",
      "pinyin": "xiàn zhuàng",
      "translations": [
        "current situation"
      ]
    },
    {
      "id": 4460,
      "hanzi": "宪法",
      "pinyin": "xiàn fǎ",
      "translations": [
        "constitution (of a country)",
        "CL:部[bù]"
      ]
    },
    {
      "id": 4461,
      "hanzi": "陷害",
      "pinyin": "xiàn hài",
      "translations": [
        "to entrap",
        "to set up",
        "to frame (up)",
        "to make false charges against"
      ]
    },
    {
      "id": 4462,
      "hanzi": "陷入",
      "pinyin": "xiàn rù",
      "translations": [
        "to sink into",
        "to get caught up in",
        "to land in (a predicament)"
      ]
    },
    {
      "id": 4463,
      "hanzi": "馅儿",
      "pinyin": "xiàn r",
      "translations": [
        "erhua variant of 餡|馅",
        "stuffing",
        "filling",
        "e.g. in 包子 or 饺子[jiǎo zi]"
      ]
    },
    {
      "id": 4464,
      "hanzi": "线索",
      "pinyin": "xiàn suǒ",
      "translations": [
        "trail",
        "clues",
        "thread (of a story)"
      ]
    },
    {
      "id": 4465,
      "hanzi": "相差",
      "pinyin": "xiāng chà",
      "translations": [
        "to differ",
        "discrepancy between"
      ]
    },
    {
      "id": 4466,
      "hanzi": "相等",
      "pinyin": "xiāng děng",
      "translations": [
        "equal",
        "equally",
        "equivalent"
      ]
    },
    {
      "id": 4467,
      "hanzi": "相辅相成",
      "pinyin": "xiāng fǔ xiāng chéng",
      "translations": [
        "to complement one another (idiom)"
      ]
    },
    {
      "id": 4468,
      "hanzi": "相应",
      "pinyin": "xiāng yìng",
      "translations": [
        "to correspond",
        "answering (one another)",
        "to agree (among the part)",
        "corresponding",
        "relevant",
        "appropriate",
        "(modify) accordingly"
      ]
    },
    {
      "id": 4469,
      "hanzi": "镶嵌",
      "pinyin": "xiāng qiàn",
      "translations": [
        "to inlay",
        "to embed",
        "to set (e.g. a jewel in a ring)",
        "tiling",
        "tesselation"
      ]
    },
    {
      "id": 4470,
      "hanzi": "乡镇",
      "pinyin": "xiāng zhèn",
      "translations": [
        "village",
        "township"
      ]
    },
    {
      "id": 4471,
      "hanzi": "想方设法",
      "pinyin": "xiǎng fāng shè fǎ",
      "translations": [
        "to think up every possible method (idiom); to devise ways and means",
        "to try this",
        "that and the other"
      ]
    },
    {
      "id": 4472,
      "hanzi": "响亮",
      "pinyin": "xiǎng liàng",
      "translations": [
        "loud and clear",
        "resounding"
      ]
    },
    {
      "id": 4473,
      "hanzi": "响应",
      "pinyin": "xiǎng yìng",
      "translations": [
        "respond to",
        "answer",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4474,
      "hanzi": "巷",
      "pinyin": "xiàng",
      "translations": [
        "lane",
        "alley"
      ]
    },
    {
      "id": 4475,
      "hanzi": "向导",
      "pinyin": "xiàng dǎo",
      "translations": [
        "guide"
      ]
    },
    {
      "id": 4476,
      "hanzi": "向来",
      "pinyin": "xiàng lái",
      "translations": [
        "always (previously)"
      ]
    },
    {
      "id": 4477,
      "hanzi": "向往",
      "pinyin": "xiàng wǎng",
      "translations": [
        "to yearn for",
        "to look forward to"
      ]
    },
    {
      "id": 4478,
      "hanzi": "消除",
      "pinyin": "xiāo chú",
      "translations": [
        "to eliminate",
        "to remove"
      ]
    },
    {
      "id": 4479,
      "hanzi": "消毒",
      "pinyin": "xiāo dú",
      "translations": [
        "to disinfect",
        "to sterilize"
      ]
    },
    {
      "id": 4480,
      "hanzi": "消防",
      "pinyin": "xiāo fáng",
      "translations": [
        "fire-fighting",
        "fire control"
      ]
    },
    {
      "id": 4481,
      "hanzi": "消耗",
      "pinyin": "xiāo hào",
      "translations": [
        "to use up",
        "to consume"
      ]
    },
    {
      "id": 4482,
      "hanzi": "消极",
      "pinyin": "xiāo jí",
      "translations": [
        "negative",
        "passive",
        "inactive"
      ]
    },
    {
      "id": 4483,
      "hanzi": "销毁",
      "pinyin": "xiāo huǐ",
      "translations": [
        "to destroy (by melting or burning)",
        "to obliterate"
      ]
    },
    {
      "id": 4484,
      "hanzi": "小心翼翼",
      "pinyin": "xiǎo xīn yì yì",
      "translations": [
        "cautious and solemn (idiom); very carefully",
        "prudent",
        "gently and cautiously"
      ]
    },
    {
      "id": 4485,
      "hanzi": "效益",
      "pinyin": "xiào yì",
      "translations": [
        "benefit",
        "effectiveness",
        "efficiency"
      ]
    },
    {
      "id": 4486,
      "hanzi": "肖像",
      "pinyin": "xiào xiàng",
      "translations": [
        "portrait"
      ]
    },
    {
      "id": 4487,
      "hanzi": "携带",
      "pinyin": "xié dài",
      "translations": [
        "to carry (on one's person)",
        "to support (old)",
        "Taiwan pr. [xī dài]"
      ]
    },
    {
      "id": 4488,
      "hanzi": "协会",
      "pinyin": "xié huì",
      "translations": [
        "an association",
        "a society",
        "CL:個|个",
        "家[jiā]"
      ]
    },
    {
      "id": 4489,
      "hanzi": "协商",
      "pinyin": "xié shāng",
      "translations": [
        "to consult with",
        "to talk things over",
        "agreement"
      ]
    },
    {
      "id": 4490,
      "hanzi": "协议",
      "pinyin": "xié yì",
      "translations": [
        "agreement",
        "pact",
        "protocol",
        "CL:項|项[xiàng]"
      ]
    },
    {
      "id": 4491,
      "hanzi": "协助",
      "pinyin": "xié zhù",
      "translations": [
        "to provide assistance",
        "to aid"
      ]
    },
    {
      "id": 4492,
      "hanzi": "写作",
      "pinyin": "xiě zuò",
      "translations": [
        "writing",
        "written works"
      ]
    },
    {
      "id": 4493,
      "hanzi": "屑",
      "pinyin": "xiè",
      "translations": [
        "bits",
        "fragments",
        "crumbs",
        "filings",
        "trifling",
        "trivial",
        "to condescend to"
      ]
    },
    {
      "id": 4494,
      "hanzi": "谢绝",
      "pinyin": "xiè jué",
      "translations": [
        "to refuse politely"
      ]
    },
    {
      "id": 4495,
      "hanzi": "泄露",
      "pinyin": "xiè lù",
      "translations": [
        "to leak (information)",
        "to divulge"
      ]
    },
    {
      "id": 4496,
      "hanzi": "泄气",
      "pinyin": "xiè qì",
      "translations": [
        "to leak (gas)",
        "to be discouraged",
        "to despair",
        "(disparaging) pathetic",
        "to vent one's anger",
        "(of a tire) to be flat"
      ]
    },
    {
      "id": 4497,
      "hanzi": "新陈代谢",
      "pinyin": "xīn chén dài xiè",
      "translations": [
        "metabolism (biology)",
        "the new replaces the old (idiom)"
      ]
    },
    {
      "id": 4498,
      "hanzi": "新郎",
      "pinyin": "xīn láng",
      "translations": [
        "bridegroom",
        "groom"
      ]
    },
    {
      "id": 4499,
      "hanzi": "新娘",
      "pinyin": "xīn niáng",
      "translations": [
        "bride"
      ]
    },
    {
      "id": 4500,
      "hanzi": "新颖",
      "pinyin": "xīn yǐng",
      "translations": [
        "lit. new bud",
        "fig. new and original"
      ]
    },
    {
      "id": 4501,
      "hanzi": "心得",
      "pinyin": "xīn dé",
      "translations": [
        "knowledge gained",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4502,
      "hanzi": "心灵",
      "pinyin": "xīn líng",
      "translations": [
        "bright",
        "smart",
        "quick-witted",
        "heart",
        "thoughts",
        "spirit"
      ]
    },
    {
      "id": 4503,
      "hanzi": "心态",
      "pinyin": "xīn tài",
      "translations": [
        "attitude (of the heart)",
        "state of one's psyche",
        "way of thinking",
        "mentality"
      ]
    },
    {
      "id": 4504,
      "hanzi": "心疼",
      "pinyin": "xīn téng",
      "translations": [
        "to love dearly",
        "the pain of love"
      ]
    },
    {
      "id": 4505,
      "hanzi": "心血",
      "pinyin": "xīn xuè",
      "translations": [
        "heart's blood",
        "expenditure (for some project)",
        "meticulous care"
      ]
    },
    {
      "id": 4506,
      "hanzi": "心眼儿",
      "pinyin": "xīn yǎn r",
      "translations": [
        "one's thoughts",
        "mind",
        "intention",
        "willingness to accept new ideas",
        "baseless suspicions"
      ]
    },
    {
      "id": 4507,
      "hanzi": "辛勤",
      "pinyin": "xīn qín",
      "translations": [
        "hardworking",
        "industrious"
      ]
    },
    {
      "id": 4508,
      "hanzi": "欣慰",
      "pinyin": "xīn wèi",
      "translations": [
        "to be gratified"
      ]
    },
    {
      "id": 4509,
      "hanzi": "欣欣向荣",
      "pinyin": "xīn xīn xiàng róng",
      "translations": [
        "luxuriant growth (idiom); flourishing",
        "thriving"
      ]
    },
    {
      "id": 4510,
      "hanzi": "薪水",
      "pinyin": "xīn shuǐ",
      "translations": [
        "salary",
        "wage"
      ]
    },
    {
      "id": 4511,
      "hanzi": "信赖",
      "pinyin": "xìn lài",
      "translations": [
        "to trust",
        "to have confidence in",
        "to have faith in",
        "to rely on"
      ]
    },
    {
      "id": 4512,
      "hanzi": "信念",
      "pinyin": "xìn niàn",
      "translations": [
        "faith",
        "belief",
        "conviction"
      ]
    },
    {
      "id": 4513,
      "hanzi": "信仰",
      "pinyin": "xìn yǎng",
      "translations": [
        "to believe in (a religion)",
        "firm belief",
        "conviction"
      ]
    },
    {
      "id": 4514,
      "hanzi": "信誉",
      "pinyin": "xìn yù",
      "translations": [
        "prestige",
        "distinction",
        "reputation",
        "trust"
      ]
    },
    {
      "id": 4515,
      "hanzi": "腥",
      "pinyin": "xīng",
      "translations": [
        "fishy (smell)"
      ]
    },
    {
      "id": 4516,
      "hanzi": "兴隆",
      "pinyin": "xīng lóng",
      "translations": [
        "prosperous",
        "thriving",
        "flourishing"
      ]
    },
    {
      "id": 4517,
      "hanzi": "兴旺",
      "pinyin": "xīng wàng",
      "translations": [
        "prosperous",
        "thriving",
        "to prosper",
        "to flourish"
      ]
    },
    {
      "id": 4518,
      "hanzi": "行政",
      "pinyin": "xíng zhèng",
      "translations": [
        "administrative",
        "executive (adjective)"
      ]
    },
    {
      "id": 4519,
      "hanzi": "形态",
      "pinyin": "xíng tài",
      "translations": [
        "shape",
        "form",
        "pattern",
        "morphology"
      ]
    },
    {
      "id": 4520,
      "hanzi": "刑事",
      "pinyin": "xíng shì",
      "translations": [
        "criminal",
        "penal"
      ]
    },
    {
      "id": 4521,
      "hanzi": "性感",
      "pinyin": "xìng gǎn",
      "translations": [
        "sex appeal",
        "eroticism",
        "sexuality",
        "sexy"
      ]
    },
    {
      "id": 4522,
      "hanzi": "性命",
      "pinyin": "xìng mìng",
      "translations": [
        "life"
      ]
    },
    {
      "id": 4523,
      "hanzi": "性能",
      "pinyin": "xìng néng",
      "translations": [
        "function",
        "performance"
      ]
    },
    {
      "id": 4524,
      "hanzi": "性情",
      "pinyin": "xìng qíng",
      "translations": [
        "nature",
        "temperament"
      ]
    },
    {
      "id": 4525,
      "hanzi": "幸好",
      "pinyin": "xìng hǎo",
      "translations": [
        "fortunately"
      ]
    },
    {
      "id": 4526,
      "hanzi": "兴高采烈",
      "pinyin": "xīng gāo cǎi liè",
      "translations": [
        "happy and excited (idiom); in high spirits",
        "in great delight"
      ]
    },
    {
      "id": 4527,
      "hanzi": "兴致勃勃",
      "pinyin": "xìng zhì bó bó",
      "translations": [
        "to become exhilarated (idiom); in high spirits",
        "full of zest"
      ]
    },
    {
      "id": 4528,
      "hanzi": "胸怀",
      "pinyin": "xiōng huái",
      "translations": [
        "one's bosom (the seat of emotions)",
        "breast",
        "broad-minded and open",
        "to think about",
        "to cherish"
      ]
    },
    {
      "id": 4529,
      "hanzi": "胸膛",
      "pinyin": "xiōng táng",
      "translations": [
        "chest"
      ]
    },
    {
      "id": 4530,
      "hanzi": "凶恶",
      "pinyin": "xiōng è",
      "translations": [
        "variant of 兇惡|凶恶",
        "fierce",
        "ferocious",
        "fiendish",
        "frightening"
      ]
    },
    {
      "id": 4531,
      "hanzi": "凶手",
      "pinyin": "xiōng shǒu",
      "translations": [
        "murderer",
        "assassin"
      ]
    },
    {
      "id": 4532,
      "hanzi": "雄厚",
      "pinyin": "xióng hòu",
      "translations": [
        "robust",
        "strong and solid"
      ]
    },
    {
      "id": 4533,
      "hanzi": "修复",
      "pinyin": "xiū fù",
      "translations": [
        "to restore",
        "to renovate",
        "restoration"
      ]
    },
    {
      "id": 4534,
      "hanzi": "修建",
      "pinyin": "xiū jiàn",
      "translations": [
        "to build",
        "to construct"
      ]
    },
    {
      "id": 4535,
      "hanzi": "修理",
      "pinyin": "xiū lǐ",
      "translations": [
        "to repair",
        "to perform maintenance",
        "to overhaul",
        "to fix",
        "to prune",
        "to trim"
      ]
    },
    {
      "id": 4536,
      "hanzi": "羞耻",
      "pinyin": "xiū chǐ",
      "translations": [
        "(a feeling of) shame"
      ]
    },
    {
      "id": 4537,
      "hanzi": "休养",
      "pinyin": "xiū yǎng",
      "translations": [
        "to recuperate",
        "to recover",
        "to convalesce"
      ]
    },
    {
      "id": 4538,
      "hanzi": "绣",
      "pinyin": "xiù",
      "translations": [
        "to embroider",
        "embroidery"
      ]
    },
    {
      "id": 4539,
      "hanzi": "嗅觉",
      "pinyin": "xiù jué",
      "translations": [
        "sense of smell"
      ]
    },
    {
      "id": 4540,
      "hanzi": "虚假",
      "pinyin": "xū jiǎ",
      "translations": [
        "false",
        "phony",
        "pretense"
      ]
    },
    {
      "id": 4541,
      "hanzi": "虚荣",
      "pinyin": "xū róng",
      "translations": [
        "vanity"
      ]
    },
    {
      "id": 4542,
      "hanzi": "虚伪",
      "pinyin": "xū wěi",
      "translations": [
        "false",
        "hypocritical",
        "artificial",
        "sham"
      ]
    },
    {
      "id": 4543,
      "hanzi": "需求",
      "pinyin": "xū qiú",
      "translations": [
        "requirement",
        "demand (economics)"
      ]
    },
    {
      "id": 4544,
      "hanzi": "须知",
      "pinyin": "xū zhī",
      "translations": [
        "prerequisites",
        "rules that must be known before starting sth"
      ]
    },
    {
      "id": 4545,
      "hanzi": "许可",
      "pinyin": "xǔ kě",
      "translations": [
        "to allow",
        "to permit"
      ]
    },
    {
      "id": 4546,
      "hanzi": "酗酒",
      "pinyin": "xù jiǔ",
      "translations": [
        "heavy drinking",
        "to get drunk",
        "to drink to excess"
      ]
    },
    {
      "id": 4547,
      "hanzi": "畜牧",
      "pinyin": "xù mù",
      "translations": [
        "to raise animals"
      ]
    },
    {
      "id": 4548,
      "hanzi": "序言",
      "pinyin": "xù yán",
      "translations": [
        "preface",
        "introductory remarks",
        "preamble",
        "prelude"
      ]
    },
    {
      "id": 4549,
      "hanzi": "宣誓",
      "pinyin": "xuān shì",
      "translations": [
        "to swear an oath (of office)",
        "to make a vow"
      ]
    },
    {
      "id": 4550,
      "hanzi": "宣扬",
      "pinyin": "xuān yáng",
      "translations": [
        "to proclaim",
        "to make public or well known"
      ]
    },
    {
      "id": 4551,
      "hanzi": "悬挂",
      "pinyin": "xuán guà",
      "translations": [
        "to suspend",
        "to hang",
        "suspension (cable car)"
      ]
    },
    {
      "id": 4552,
      "hanzi": "悬念",
      "pinyin": "xuán niàn",
      "translations": [
        "suspense in a movie",
        "play etc",
        "concern for sb's welfare"
      ]
    },
    {
      "id": 4553,
      "hanzi": "悬崖峭壁",
      "pinyin": "xuán yá qiào bì",
      "translations": [
        "sheer cliffs and precipitous rock faces (idiom)"
      ]
    },
    {
      "id": 4554,
      "hanzi": "旋律",
      "pinyin": "xuán lǜ",
      "translations": [
        "melody",
        "rhythm"
      ]
    },
    {
      "id": 4555,
      "hanzi": "旋转",
      "pinyin": "xuán zhuǎn",
      "translations": [
        "to rotate",
        "to revolve",
        "to spin",
        "to whirl"
      ]
    },
    {
      "id": 4556,
      "hanzi": "选拔",
      "pinyin": "xuǎn bá",
      "translations": [
        "to select the best"
      ]
    },
    {
      "id": 4557,
      "hanzi": "选手",
      "pinyin": "xuǎn shǒu",
      "translations": [
        "athlete",
        "contestant"
      ]
    },
    {
      "id": 4558,
      "hanzi": "削弱",
      "pinyin": "xuē ruò",
      "translations": [
        "to weaken",
        "to impair",
        "to cripple"
      ]
    },
    {
      "id": 4559,
      "hanzi": "学历",
      "pinyin": "xué lì",
      "translations": [
        "educational background",
        "academic qualifications"
      ]
    },
    {
      "id": 4560,
      "hanzi": "学说",
      "pinyin": "xué shuō",
      "translations": [
        "theory",
        "doctrine"
      ]
    },
    {
      "id": 4561,
      "hanzi": "学位",
      "pinyin": "xué wèi",
      "translations": [
        "academic degree",
        "e.g.: BSc 學士學位|学士学位",
        "MSc 碩士學位|硕士学位",
        "Diploma 學位證書|学位证书",
        "PhD 博士學位|博士学位[bó shì xué wèi]"
      ]
    },
    {
      "id": 4562,
      "hanzi": "雪上加霜",
      "pinyin": "xuě shàng jiā shuāng",
      "translations": [
        "to add hail to snow (idiom); one disaster on top of another",
        "to make things worse in a bad situation"
      ]
    },
    {
      "id": 4563,
      "hanzi": "血压",
      "pinyin": "xuè yā",
      "translations": [
        "blood pressure"
      ]
    },
    {
      "id": 4564,
      "hanzi": "熏陶",
      "pinyin": "xūn táo",
      "translations": [
        "to seep in",
        "to influence",
        "to nurture",
        "influence",
        "training"
      ]
    },
    {
      "id": 4565,
      "hanzi": "循环",
      "pinyin": "xún huán",
      "translations": [
        "to cycle",
        "to circulate",
        "circle",
        "loop"
      ]
    },
    {
      "id": 4566,
      "hanzi": "循序渐进",
      "pinyin": "xún xù jiàn jìn",
      "translations": [
        "in sequence",
        "step by step (idiom); to make steady progress incrementally"
      ]
    },
    {
      "id": 4567,
      "hanzi": "巡逻",
      "pinyin": "xún luó",
      "translations": [
        "to patrol (police, army or navy)"
      ]
    },
    {
      "id": 4568,
      "hanzi": "寻觅",
      "pinyin": "xún mì",
      "translations": [
        "to look for"
      ]
    },
    {
      "id": 4569,
      "hanzi": "押金",
      "pinyin": "yā jīn",
      "translations": [
        "deposit",
        "down payment"
      ]
    },
    {
      "id": 4570,
      "hanzi": "压迫",
      "pinyin": "yā pò",
      "translations": [
        "to oppress",
        "to repress",
        "to constrict",
        "oppression",
        "stress (physics)"
      ]
    },
    {
      "id": 4571,
      "hanzi": "压岁钱",
      "pinyin": "yā suì qián",
      "translations": [
        "money given to children as new year present"
      ]
    },
    {
      "id": 4572,
      "hanzi": "压缩",
      "pinyin": "yā suō",
      "translations": [
        "to compress",
        "compression"
      ]
    },
    {
      "id": 4573,
      "hanzi": "压抑",
      "pinyin": "yā yì",
      "translations": [
        "to constrain or repress emotions",
        "oppressive",
        "stifling",
        "depressing",
        "repression"
      ]
    },
    {
      "id": 4574,
      "hanzi": "压榨",
      "pinyin": "yā zhà",
      "translations": [
        "to press",
        "to squeeze",
        "to extract juice",
        "oil etc by squeezing"
      ]
    },
    {
      "id": 4575,
      "hanzi": "压制",
      "pinyin": "yā zhì",
      "translations": [
        "to suppress",
        "to inhibit",
        "to stifle"
      ]
    },
    {
      "id": 4576,
      "hanzi": "亚军",
      "pinyin": "yà jūn",
      "translations": [
        "second place (in a sports contest)",
        "runner-up"
      ]
    },
    {
      "id": 4577,
      "hanzi": "烟花",
      "pinyin": "yān huā",
      "translations": [
        "fireworks",
        "prostitute (esp. in Yuan theater)"
      ]
    },
    {
      "id": 4578,
      "hanzi": "淹没",
      "pinyin": "yān mò",
      "translations": [
        "to submerge",
        "to drown",
        "to flood",
        "to drown out (also fig.)"
      ]
    },
    {
      "id": 4579,
      "hanzi": "延期",
      "pinyin": "yán qī",
      "translations": [
        "to delay",
        "to extend",
        "to postpone",
        "to defer"
      ]
    },
    {
      "id": 4580,
      "hanzi": "延伸",
      "pinyin": "yán shēn",
      "translations": [
        "to extend",
        "to spread"
      ]
    },
    {
      "id": 4581,
      "hanzi": "延续",
      "pinyin": "yán xù",
      "translations": [
        "to continue",
        "to go on",
        "to last"
      ]
    },
    {
      "id": 4582,
      "hanzi": "严寒",
      "pinyin": "yán hán",
      "translations": [
        "bitter cold",
        "severe winter"
      ]
    },
    {
      "id": 4583,
      "hanzi": "严禁",
      "pinyin": "yán jìn",
      "translations": [
        "strictly prohibit"
      ]
    },
    {
      "id": 4584,
      "hanzi": "严峻",
      "pinyin": "yán jùn",
      "translations": [
        "grim",
        "severe",
        "rigorous"
      ]
    },
    {
      "id": 4585,
      "hanzi": "严厉",
      "pinyin": "yán lì",
      "translations": [
        "severe",
        "strict"
      ]
    },
    {
      "id": 4586,
      "hanzi": "严密",
      "pinyin": "yán mì",
      "translations": [
        "strict",
        "tight (organization, surveillance etc)"
      ]
    },
    {
      "id": 4587,
      "hanzi": "沿海",
      "pinyin": "yán hǎi",
      "translations": [
        "coastal"
      ]
    },
    {
      "id": 4588,
      "hanzi": "言论",
      "pinyin": "yán lùn",
      "translations": [
        "speech",
        "expression of opinion",
        "public opinion"
      ]
    },
    {
      "id": 4589,
      "hanzi": "炎热",
      "pinyin": "yán rè",
      "translations": [
        "blistering hot",
        "sizzling hot (weather)"
      ]
    },
    {
      "id": 4590,
      "hanzi": "岩石",
      "pinyin": "yán shí",
      "translations": [
        "rock"
      ]
    },
    {
      "id": 4591,
      "hanzi": "演变",
      "pinyin": "yǎn biàn",
      "translations": [
        "to develop",
        "to evolve"
      ]
    },
    {
      "id": 4592,
      "hanzi": "演讲",
      "pinyin": "yǎn jiǎng",
      "translations": [
        "lecture",
        "to make a speech"
      ]
    },
    {
      "id": 4593,
      "hanzi": "演习",
      "pinyin": "yǎn xí",
      "translations": [
        "maneuver",
        "exercise",
        "practice",
        "to maneuver"
      ]
    },
    {
      "id": 4594,
      "hanzi": "演绎",
      "pinyin": "yǎn yì",
      "translations": [
        "to deduce",
        "to infer"
      ]
    },
    {
      "id": 4595,
      "hanzi": "演奏",
      "pinyin": "yǎn zòu",
      "translations": [
        "to play a musical instrument",
        "to perform music"
      ]
    },
    {
      "id": 4596,
      "hanzi": "掩盖",
      "pinyin": "yǎn gài",
      "translations": [
        "to conceal",
        "to hide behind",
        "to cover up"
      ]
    },
    {
      "id": 4597,
      "hanzi": "掩护",
      "pinyin": "yǎn hù",
      "translations": [
        "to screen",
        "to shield",
        "to cover",
        "protection",
        "cover",
        "CL:面[miàn]"
      ]
    },
    {
      "id": 4598,
      "hanzi": "掩饰",
      "pinyin": "yǎn shì",
      "translations": [
        "to conceal a fault",
        "to gloss over"
      ]
    },
    {
      "id": 4599,
      "hanzi": "眼光",
      "pinyin": "yǎn guāng",
      "translations": [
        "gaze",
        "insight",
        "foresight",
        "vision",
        "way of looking at things"
      ]
    },
    {
      "id": 4600,
      "hanzi": "眼色",
      "pinyin": "yǎn sè",
      "translations": [
        "a wink",
        "to signal with one's eyes"
      ]
    },
    {
      "id": 4601,
      "hanzi": "眼神",
      "pinyin": "yǎn shén",
      "translations": [
        "expression or emotion showing in one's eyes",
        "meaningful glance",
        "wink",
        "eyesight (topolect)"
      ]
    },
    {
      "id": 4602,
      "hanzi": "眼下",
      "pinyin": "yǎn xià",
      "translations": [
        "now",
        "at present",
        "subocular (medicine)"
      ]
    },
    {
      "id": 4603,
      "hanzi": "验收",
      "pinyin": "yàn shōu",
      "translations": [
        "to check on receipt",
        "an inventory of received goods",
        "to verify and accept (a delivery)"
      ]
    },
    {
      "id": 4604,
      "hanzi": "验证",
      "pinyin": "yàn zhèng",
      "translations": [
        "to inspect and verify",
        "experimental verification",
        "to validate (a theory)",
        "to authenticate"
      ]
    },
    {
      "id": 4605,
      "hanzi": "厌恶",
      "pinyin": "yàn wù",
      "translations": [
        "to loathe",
        "to hate",
        "disgusted with sth"
      ]
    },
    {
      "id": 4606,
      "hanzi": "氧气",
      "pinyin": "yǎng qì",
      "translations": [
        "oxygen"
      ]
    },
    {
      "id": 4607,
      "hanzi": "样品",
      "pinyin": "yàng pǐn",
      "translations": [
        "sample",
        "specimen"
      ]
    },
    {
      "id": 4608,
      "hanzi": "摇摆",
      "pinyin": "yáo bǎi",
      "translations": [
        "to sway",
        "to wobble",
        "to waver"
      ]
    },
    {
      "id": 4609,
      "hanzi": "摇滚",
      "pinyin": "yáo gǔn",
      "translations": [
        "to shake and boil",
        "rock and roll (music)"
      ]
    },
    {
      "id": 4610,
      "hanzi": "摇晃",
      "pinyin": "yáo huàng",
      "translations": [
        "to rock",
        "to shake",
        "to sway"
      ]
    },
    {
      "id": 4611,
      "hanzi": "遥控",
      "pinyin": "yáo kòng",
      "translations": [
        "remote control"
      ]
    },
    {
      "id": 4612,
      "hanzi": "遥远",
      "pinyin": "yáo yuǎn",
      "translations": [
        "distant",
        "remote"
      ]
    },
    {
      "id": 4613,
      "hanzi": "谣言",
      "pinyin": "yáo yán",
      "translations": [
        "rumor"
      ]
    },
    {
      "id": 4614,
      "hanzi": "咬牙切齿",
      "pinyin": "yǎo yá qiè chǐ",
      "translations": [
        "gnashing one's teeth (idiom); displaying extreme anger",
        "fuming with rage between gritted teeth"
      ]
    },
    {
      "id": 4615,
      "hanzi": "要不然",
      "pinyin": "yào bù rán",
      "translations": [
        "otherwise",
        "or else",
        "or"
      ]
    },
    {
      "id": 4616,
      "hanzi": "要点",
      "pinyin": "yào diǎn",
      "translations": [
        "main point",
        "essential"
      ]
    },
    {
      "id": 4617,
      "hanzi": "要命",
      "pinyin": "yào mìng",
      "translations": [
        "to cause sb's death",
        "very",
        "extremely",
        "frightening",
        "annoying"
      ]
    },
    {
      "id": 4618,
      "hanzi": "要素",
      "pinyin": "yào sù",
      "translations": [
        "essential factor",
        "key constituent"
      ]
    },
    {
      "id": 4619,
      "hanzi": "耀眼",
      "pinyin": "yào yǎn",
      "translations": [
        "to dazzle",
        "dazzling"
      ]
    },
    {
      "id": 4620,
      "hanzi": "野蛮",
      "pinyin": "yě mán",
      "translations": [
        "barbarous",
        "uncivilized"
      ]
    },
    {
      "id": 4621,
      "hanzi": "野心",
      "pinyin": "yě xīn",
      "translations": [
        "ambition",
        "wild schemes",
        "careerism"
      ]
    },
    {
      "id": 4622,
      "hanzi": "一流",
      "pinyin": "yī liú",
      "translations": [
        "top quality",
        "front ranking"
      ]
    },
    {
      "id": 4623,
      "hanzi": "依次",
      "pinyin": "yī cì",
      "translations": [
        "in order",
        "in succession"
      ]
    },
    {
      "id": 4624,
      "hanzi": "依旧",
      "pinyin": "yī jiù",
      "translations": [
        "as before",
        "still"
      ]
    },
    {
      "id": 4625,
      "hanzi": "依据",
      "pinyin": "yī jù",
      "translations": [
        "according to",
        "basis",
        "foundation"
      ]
    },
    {
      "id": 4626,
      "hanzi": "依靠",
      "pinyin": "yī kào",
      "translations": [
        "to rely on sth (for support etc)",
        "to depend on"
      ]
    },
    {
      "id": 4627,
      "hanzi": "依赖",
      "pinyin": "yī lài",
      "translations": [
        "to depend on",
        "to be dependent on"
      ]
    },
    {
      "id": 4628,
      "hanzi": "依托",
      "pinyin": "yī tuō",
      "translations": [
        "to rely on",
        "to depend on"
      ]
    },
    {
      "id": 4629,
      "hanzi": "衣裳",
      "pinyin": "yī shang",
      "translations": [
        "clothes"
      ]
    },
    {
      "id": 4630,
      "hanzi": "一度",
      "pinyin": "yī dù",
      "translations": [
        "for a time",
        "at one time",
        "one time",
        "once"
      ]
    },
    {
      "id": 4631,
      "hanzi": "一贯",
      "pinyin": "yī guàn",
      "translations": [
        "consistent",
        "constant",
        "from start to finish",
        "all along",
        "persistent"
      ]
    },
    {
      "id": 4632,
      "hanzi": "一律",
      "pinyin": "yī lǜ",
      "translations": [
        "same",
        "uniformly",
        "all",
        "without exception"
      ]
    },
    {
      "id": 4633,
      "hanzi": "一目了然",
      "pinyin": "yī mù liǎo rán",
      "translations": [
        "obvious at a glance (idiom)"
      ]
    },
    {
      "id": 4634,
      "hanzi": "一向",
      "pinyin": "yī xiàng",
      "translations": [
        "always (previously)",
        "a period of time in the recent past"
      ]
    },
    {
      "id": 4635,
      "hanzi": "一再",
      "pinyin": "yī zài",
      "translations": [
        "repeatedly"
      ]
    },
    {
      "id": 4636,
      "hanzi": "遗产",
      "pinyin": "yí chǎn",
      "translations": [
        "heritage",
        "legacy",
        "inheritance",
        "bequest",
        "CL:筆|笔[bǐ]"
      ]
    },
    {
      "id": 4637,
      "hanzi": "遗传",
      "pinyin": "yí chuán",
      "translations": [
        "heredity",
        "inheritance",
        "to transmit"
      ]
    },
    {
      "id": 4638,
      "hanzi": "遗留",
      "pinyin": "yí liú",
      "translations": [
        "(leave or be a) legacy",
        "left over",
        "hand down (to next generation)"
      ]
    },
    {
      "id": 4639,
      "hanzi": "遗失",
      "pinyin": "yí shī",
      "translations": [
        "to lose",
        "lost"
      ]
    },
    {
      "id": 4640,
      "hanzi": "疑惑",
      "pinyin": "yí huò",
      "translations": [
        "to doubt",
        "to distrust",
        "unconvincing",
        "to puzzle over",
        "misgivings",
        "suspicions"
      ]
    },
    {
      "id": 4641,
      "hanzi": "仪器",
      "pinyin": "yí qì",
      "translations": [
        "instrument",
        "apparatus",
        "CL:臺|台[tái]"
      ]
    },
    {
      "id": 4642,
      "hanzi": "仪式",
      "pinyin": "yí shì",
      "translations": [
        "ceremony"
      ]
    },
    {
      "id": 4643,
      "hanzi": "以便",
      "pinyin": "yǐ biàn",
      "translations": [
        "so that",
        "so as to",
        "in order to"
      ]
    },
    {
      "id": 4644,
      "hanzi": "以免",
      "pinyin": "yǐ miǎn",
      "translations": [
        "in order to avoid",
        "so as not to"
      ]
    },
    {
      "id": 4645,
      "hanzi": "以往",
      "pinyin": "yǐ wǎng",
      "translations": [
        "in the past",
        "formerly"
      ]
    },
    {
      "id": 4646,
      "hanzi": "以至",
      "pinyin": "yǐ zhì",
      "translations": [
        "down to",
        "up to",
        "to such an extent as to ... (also written 以至於|以至于)"
      ]
    },
    {
      "id": 4647,
      "hanzi": "以致",
      "pinyin": "yǐ zhì",
      "translations": [
        "to such an extent as to",
        "down to",
        "up to"
      ]
    },
    {
      "id": 4648,
      "hanzi": "亦",
      "pinyin": "yì",
      "translations": [
        "also"
      ]
    },
    {
      "id": 4649,
      "hanzi": "翼",
      "pinyin": "yì",
      "translations": [
        "wing",
        "area surrounding the bullseye of a target",
        "to assist",
        "one of the 28 constellations of Chinese astronomy",
        "old variant of 翌"
      ]
    },
    {
      "id": 4650,
      "hanzi": "一帆风顺",
      "pinyin": "yī fān fēng shùn",
      "translations": [
        "propitious wind throughout the journey (idiom)",
        "plain sailing",
        "to go smoothly",
        "have a nice trip!"
      ]
    },
    {
      "id": 4651,
      "hanzi": "一举两得",
      "pinyin": "yī jǔ liǎng dé",
      "translations": [
        "one move",
        "two gains (idiom); two birds with one stone"
      ]
    },
    {
      "id": 4652,
      "hanzi": "一如既往",
      "pinyin": "yī rú jì wǎng",
      "translations": [
        "just as in the past (idiom); as before",
        "continuing as always"
      ]
    },
    {
      "id": 4653,
      "hanzi": "一丝不苟",
      "pinyin": "yī sī bù gǒu",
      "translations": [
        "not one thread loose (idiom); strictly according to the rules",
        "meticulous",
        "not one hair out of place"
      ]
    },
    {
      "id": 4654,
      "hanzi": "异常",
      "pinyin": "yì cháng",
      "translations": [
        "exceptional",
        "abnormal",
        "an anomaly"
      ]
    },
    {
      "id": 4655,
      "hanzi": "意料",
      "pinyin": "yì liào",
      "translations": [
        "to anticipate",
        "to expect"
      ]
    },
    {
      "id": 4656,
      "hanzi": "意识",
      "pinyin": "yì shí",
      "translations": [
        "consciousness",
        "awareness",
        "consciously (i.e. deliberately)",
        "to be aware"
      ]
    },
    {
      "id": 4657,
      "hanzi": "意图",
      "pinyin": "yì tú",
      "translations": [
        "intent",
        "intention",
        "intend",
        "schematic diagram"
      ]
    },
    {
      "id": 4658,
      "hanzi": "意味着",
      "pinyin": "yì wèi zhe",
      "translations": [
        "to signify",
        "to mean",
        "to imply"
      ]
    },
    {
      "id": 4659,
      "hanzi": "意向",
      "pinyin": "yì xiàng",
      "translations": [
        "intention",
        "purpose",
        "intent",
        "inclination",
        "disposition"
      ]
    },
    {
      "id": 4660,
      "hanzi": "意志",
      "pinyin": "yì zhì",
      "translations": [
        "will",
        "willpower",
        "determination",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4661,
      "hanzi": "毅力",
      "pinyin": "yì lì",
      "translations": [
        "perseverance",
        "willpower"
      ]
    },
    {
      "id": 4662,
      "hanzi": "毅然",
      "pinyin": "yì rán",
      "translations": [
        "firmly",
        "resolutely",
        "without hesitation"
      ]
    },
    {
      "id": 4663,
      "hanzi": "抑制",
      "pinyin": "yì zhì",
      "translations": [
        "to inhibit",
        "to keep down",
        "to suppress"
      ]
    },
    {
      "id": 4664,
      "hanzi": "阴谋",
      "pinyin": "yīn móu",
      "translations": [
        "plot",
        "conspiracy"
      ]
    },
    {
      "id": 4665,
      "hanzi": "音响",
      "pinyin": "yīn xiǎng",
      "translations": [
        "speakers or speaker (electronic)",
        "acoustics",
        "sound field (in a room or theater)"
      ]
    },
    {
      "id": 4666,
      "hanzi": "隐蔽",
      "pinyin": "yǐn bì",
      "translations": [
        "to conceal",
        "to hide",
        "covert",
        "under cover"
      ]
    },
    {
      "id": 4667,
      "hanzi": "隐患",
      "pinyin": "yǐn huàn",
      "translations": [
        "a danger concealed within sth",
        "hidden damage",
        "misfortune not visible from the surface"
      ]
    },
    {
      "id": 4668,
      "hanzi": "隐瞒",
      "pinyin": "yǐn mán",
      "translations": [
        "to conceal",
        "to hide (a taboo subject)",
        "to cover up the truth"
      ]
    },
    {
      "id": 4669,
      "hanzi": "隐私",
      "pinyin": "yǐn sī",
      "translations": [
        "secrets",
        "private business",
        "privacy"
      ]
    },
    {
      "id": 4670,
      "hanzi": "隐约",
      "pinyin": "yǐn yuē",
      "translations": [
        "vague",
        "faint",
        "indistinct"
      ]
    },
    {
      "id": 4671,
      "hanzi": "引导",
      "pinyin": "yǐn dǎo",
      "translations": [
        "to guide",
        "to lead (around)",
        "to conduct",
        "to boot",
        "introduction",
        "primer"
      ]
    },
    {
      "id": 4672,
      "hanzi": "引擎",
      "pinyin": "yǐn qíng",
      "translations": [
        "engine (loanword)",
        "CL:臺|台[tái]"
      ]
    },
    {
      "id": 4673,
      "hanzi": "引用",
      "pinyin": "yǐn yòng",
      "translations": [
        "to quote",
        "to cite",
        "to recommend",
        "to appoint"
      ]
    },
    {
      "id": 4674,
      "hanzi": "饮食",
      "pinyin": "yǐn shí",
      "translations": [
        "food and drink",
        "diet"
      ]
    },
    {
      "id": 4675,
      "hanzi": "印刷",
      "pinyin": "yìn shuā",
      "translations": [
        "print"
      ]
    },
    {
      "id": 4676,
      "hanzi": "婴儿",
      "pinyin": "yīng ér",
      "translations": [
        "infant",
        "baby",
        "CL:個|个[gè]",
        "lead (Pb)"
      ]
    },
    {
      "id": 4677,
      "hanzi": "英明",
      "pinyin": "yīng míng",
      "translations": [
        "wise",
        "brilliant"
      ]
    },
    {
      "id": 4678,
      "hanzi": "英勇",
      "pinyin": "yīng yǒng",
      "translations": [
        "bravery",
        "gallant",
        "valiant"
      ]
    },
    {
      "id": 4679,
      "hanzi": "迎面",
      "pinyin": "yíng miàn",
      "translations": [
        "directly",
        "head-on (collision)",
        "in one's face (of wind)"
      ]
    },
    {
      "id": 4680,
      "hanzi": "盈利",
      "pinyin": "yíng lì",
      "translations": [
        "profit",
        "gain"
      ]
    },
    {
      "id": 4681,
      "hanzi": "荧屏",
      "pinyin": "yíng píng",
      "translations": [
        "fluorescent screen",
        "TV screen"
      ]
    },
    {
      "id": 4682,
      "hanzi": "应酬",
      "pinyin": "yìng chou",
      "translations": [
        "social niceties",
        "social interaction",
        "a dinner party"
      ]
    },
    {
      "id": 4683,
      "hanzi": "应邀",
      "pinyin": "yìng yāo",
      "translations": [
        "at sb's invitation",
        "on invitation"
      ]
    },
    {
      "id": 4684,
      "hanzi": "拥护",
      "pinyin": "yōng hù",
      "translations": [
        "to endorse",
        "to support"
      ]
    },
    {
      "id": 4685,
      "hanzi": "拥有",
      "pinyin": "yōng yǒu",
      "translations": [
        "to have",
        "to possess"
      ]
    },
    {
      "id": 4686,
      "hanzi": "庸俗",
      "pinyin": "yōng sú",
      "translations": [
        "filthy",
        "vulgar",
        "debased"
      ]
    },
    {
      "id": 4687,
      "hanzi": "勇于",
      "pinyin": "yǒng yú",
      "translations": [
        "to dare to",
        "to be brave enough to"
      ]
    },
    {
      "id": 4688,
      "hanzi": "永恒",
      "pinyin": "yǒng héng",
      "translations": [
        "eternal",
        "everlasting",
        "fig. to pass into eternity (i.e. to die)"
      ]
    },
    {
      "id": 4689,
      "hanzi": "涌现",
      "pinyin": "yǒng xiàn",
      "translations": [
        "to emerge in large numbers",
        "to spring up",
        "to emerge prominently"
      ]
    },
    {
      "id": 4690,
      "hanzi": "踊跃",
      "pinyin": "yǒng yuè",
      "translations": [
        "to leap",
        "to jump",
        "eager",
        "enthusiastically"
      ]
    },
    {
      "id": 4691,
      "hanzi": "用功",
      "pinyin": "yòng gōng",
      "translations": [
        "diligent",
        "industrious (in one's studies)",
        "to study hard",
        "to make great effort"
      ]
    },
    {
      "id": 4692,
      "hanzi": "用户",
      "pinyin": "yòng hù",
      "translations": [
        "user",
        "consumer",
        "subscriber",
        "customer"
      ]
    },
    {
      "id": 4693,
      "hanzi": "优胜劣汰",
      "pinyin": "yōu shèng liè tài",
      "translations": [
        "survival of the fittest (idiom)"
      ]
    },
    {
      "id": 4694,
      "hanzi": "优先",
      "pinyin": "yōu xiān",
      "translations": [
        "priority"
      ]
    },
    {
      "id": 4695,
      "hanzi": "优异",
      "pinyin": "yōu yì",
      "translations": [
        "exceptional",
        "outstandingly good"
      ]
    },
    {
      "id": 4696,
      "hanzi": "优越",
      "pinyin": "yōu yuè",
      "translations": [
        "superior",
        "superiority"
      ]
    },
    {
      "id": 4697,
      "hanzi": "忧郁",
      "pinyin": "yōu yù",
      "translations": [
        "sullen",
        "depressed",
        "melancholy",
        "dejected"
      ]
    },
    {
      "id": 4698,
      "hanzi": "油腻",
      "pinyin": "yóu nì",
      "translations": [
        "grease",
        "greasy food",
        "oily",
        "rich (of food)",
        "fatty",
        "greasy and dirty",
        "a slippery character"
      ]
    },
    {
      "id": 4699,
      "hanzi": "油漆",
      "pinyin": "yóu qī",
      "translations": [
        "oil paints",
        "lacquer",
        "to paint",
        "CL:層|层[céng]"
      ]
    },
    {
      "id": 4700,
      "hanzi": "犹如",
      "pinyin": "yóu rú",
      "translations": [
        "similar to",
        "appearing to be"
      ]
    },
    {
      "id": 4701,
      "hanzi": "有条不紊",
      "pinyin": "yǒu tiáo bù wěn",
      "translations": [
        "regular and thorough (idiom); methodically arranged"
      ]
    },
    {
      "id": 4702,
      "hanzi": "幼稚",
      "pinyin": "yòu zhì",
      "translations": [
        "young",
        "childish",
        "naive"
      ]
    },
    {
      "id": 4703,
      "hanzi": "诱惑",
      "pinyin": "yòu huò",
      "translations": [
        "to entice",
        "to lure",
        "to induce",
        "to attract"
      ]
    },
    {
      "id": 4704,
      "hanzi": "愚蠢",
      "pinyin": "yú chǔn",
      "translations": [
        "silly",
        "stupid"
      ]
    },
    {
      "id": 4705,
      "hanzi": "愚昧",
      "pinyin": "yú mèi",
      "translations": [
        "ignorant",
        "uneducated"
      ]
    },
    {
      "id": 4706,
      "hanzi": "舆论",
      "pinyin": "yú lùn",
      "translations": [
        "public opinion"
      ]
    },
    {
      "id": 4707,
      "hanzi": "渔民",
      "pinyin": "yú mín",
      "translations": [
        "fisherman",
        "fisher folk"
      ]
    },
    {
      "id": 4708,
      "hanzi": "与日俱增",
      "pinyin": "yǔ rì jù zēng",
      "translations": [
        "to increase steadily",
        "to grow with each passing day"
      ]
    },
    {
      "id": 4709,
      "hanzi": "羽绒服",
      "pinyin": "yǔ róng fú",
      "translations": [
        "down-filled garment"
      ]
    },
    {
      "id": 4710,
      "hanzi": "予以",
      "pinyin": "yǔ yǐ",
      "translations": [
        "to give",
        "to impose",
        "to apply"
      ]
    },
    {
      "id": 4711,
      "hanzi": "愈",
      "pinyin": "yù",
      "translations": [
        "to heal"
      ]
    },
    {
      "id": 4712,
      "hanzi": "预料",
      "pinyin": "yù liào",
      "translations": [
        "to forecast",
        "to anticipate",
        "expectation"
      ]
    },
    {
      "id": 4713,
      "hanzi": "预期",
      "pinyin": "yù qī",
      "translations": [
        "to expect",
        "to anticipate"
      ]
    },
    {
      "id": 4714,
      "hanzi": "预赛",
      "pinyin": "yù sài",
      "translations": [
        "preliminary competition",
        "to hold preliminary heats"
      ]
    },
    {
      "id": 4715,
      "hanzi": "预算",
      "pinyin": "yù suàn",
      "translations": [
        "budget"
      ]
    },
    {
      "id": 4716,
      "hanzi": "预先",
      "pinyin": "yù xiān",
      "translations": [
        "beforehand",
        "in advance"
      ]
    },
    {
      "id": 4717,
      "hanzi": "预言",
      "pinyin": "yù yán",
      "translations": [
        "to predict",
        "prophecy"
      ]
    },
    {
      "id": 4718,
      "hanzi": "预兆",
      "pinyin": "yù zhào",
      "translations": [
        "omen",
        "prognosis (in medicine)"
      ]
    },
    {
      "id": 4719,
      "hanzi": "欲望",
      "pinyin": "yù wàng",
      "translations": [
        "desire",
        "longing",
        "appetite",
        "craving"
      ]
    },
    {
      "id": 4720,
      "hanzi": "寓言",
      "pinyin": "yù yán",
      "translations": [
        "fable",
        "CL:則|则[zé]"
      ]
    },
    {
      "id": 4721,
      "hanzi": "冤枉",
      "pinyin": "yuān wang",
      "translations": [
        "hatred",
        "injustice",
        "bad luck",
        "unjust treatment",
        "wronged",
        "not worthwhile"
      ]
    },
    {
      "id": 4722,
      "hanzi": "元首",
      "pinyin": "yuán shǒu",
      "translations": [
        "head of state"
      ]
    },
    {
      "id": 4723,
      "hanzi": "元素",
      "pinyin": "yuán sù",
      "translations": [
        "element",
        "element of a set",
        "chemical element"
      ]
    },
    {
      "id": 4724,
      "hanzi": "元宵节",
      "pinyin": "Yuán xiāo jié",
      "translations": [
        "Lantern Festival",
        "the final event of the Spring Festival 春節|春节",
        "on 15th of first month of the lunar calendar"
      ]
    },
    {
      "id": 4725,
      "hanzi": "圆满",
      "pinyin": "yuán mǎn",
      "translations": [
        "satisfactory",
        "consummate",
        "perfect"
      ]
    },
    {
      "id": 4726,
      "hanzi": "原告",
      "pinyin": "yuán gào",
      "translations": [
        "complainant",
        "plaintiff"
      ]
    },
    {
      "id": 4727,
      "hanzi": "原理",
      "pinyin": "yuán lǐ",
      "translations": [
        "principle",
        "theory"
      ]
    },
    {
      "id": 4728,
      "hanzi": "原始",
      "pinyin": "yuán shǐ",
      "translations": [
        "first",
        "original",
        "primitive",
        "original (document etc)"
      ]
    },
    {
      "id": 4729,
      "hanzi": "原先",
      "pinyin": "yuán xiān",
      "translations": [
        "former",
        "original"
      ]
    },
    {
      "id": 4730,
      "hanzi": "园林",
      "pinyin": "yuán lín",
      "translations": [
        "gardens",
        "park",
        "landscape garden"
      ]
    },
    {
      "id": 4731,
      "hanzi": "源泉",
      "pinyin": "yuán quán",
      "translations": [
        "fountainhead",
        "well-spring",
        "water source",
        "fig. origin"
      ]
    },
    {
      "id": 4732,
      "hanzi": "约束",
      "pinyin": "yuē shù",
      "translations": [
        "to restrict",
        "to limit to",
        "to constrain",
        "restriction",
        "constraint"
      ]
    },
    {
      "id": 4733,
      "hanzi": "岳父",
      "pinyin": "yuè fù",
      "translations": [
        "wife's father",
        "father-in-law"
      ]
    },
    {
      "id": 4734,
      "hanzi": "乐谱",
      "pinyin": "yuè pǔ",
      "translations": [
        "a musical score",
        "sheet music"
      ]
    },
    {
      "id": 4735,
      "hanzi": "熨",
      "pinyin": "yùn",
      "translations": [
        "an iron",
        "to iron"
      ]
    },
    {
      "id": 4736,
      "hanzi": "蕴藏",
      "pinyin": "yùn cáng",
      "translations": [
        "to hold in store",
        "to contain (untapped reserves etc)"
      ]
    },
    {
      "id": 4737,
      "hanzi": "运算",
      "pinyin": "yùn suàn",
      "translations": [
        "(mathematical) operation"
      ]
    },
    {
      "id": 4738,
      "hanzi": "运行",
      "pinyin": "yùn xíng",
      "translations": [
        "to be in motion",
        "to move",
        "(of a computer) to run"
      ]
    },
    {
      "id": 4739,
      "hanzi": "酝酿",
      "pinyin": "yùn niàng",
      "translations": [
        "(of alcohol) to ferment",
        "(of a crisis) to be brewing",
        "to mull over (an issue)",
        "to hold exploratory discussions"
      ]
    },
    {
      "id": 4740,
      "hanzi": "孕育",
      "pinyin": "yùn yù",
      "translations": [
        "to be pregnant",
        "to produce offspring",
        "to nurture (a development, school of thought, artwork etc)",
        "fig. replete with (culture etc)"
      ]
    },
    {
      "id": 4741,
      "hanzi": "砸",
      "pinyin": "zá",
      "translations": [
        "smash",
        "smashed",
        "to fail",
        "to get it wrong"
      ]
    },
    {
      "id": 4742,
      "hanzi": "杂技",
      "pinyin": "zá jì",
      "translations": [
        "acrobatics",
        "CL:場|场[chǎng]"
      ]
    },
    {
      "id": 4743,
      "hanzi": "杂交",
      "pinyin": "zá jiāo",
      "translations": [
        "a hybrid"
      ]
    },
    {
      "id": 4744,
      "hanzi": "咋",
      "pinyin": "zǎ",
      "translations": [
        "dialectal equivalent of 怎麼|怎么[zěn me]"
      ]
    },
    {
      "id": 4745,
      "hanzi": "灾难",
      "pinyin": "zāi nàn",
      "translations": [
        "disaster",
        "catastrophe"
      ]
    },
    {
      "id": 4746,
      "hanzi": "栽培",
      "pinyin": "zāi péi",
      "translations": [
        "to grow",
        "to cultivate",
        "to train",
        "to educate",
        "to patronize"
      ]
    },
    {
      "id": 4747,
      "hanzi": "宰",
      "pinyin": "zǎi",
      "translations": [
        "to slaughter livestock",
        "to govern or rule",
        "to cheat customers",
        "Imperial official in dynastic China"
      ]
    },
    {
      "id": 4748,
      "hanzi": "在乎",
      "pinyin": "zài hu",
      "translations": [
        "determined by",
        "to care about",
        "to mind"
      ]
    },
    {
      "id": 4749,
      "hanzi": "在意",
      "pinyin": "zài yì",
      "translations": [
        "to care about",
        "to mind"
      ]
    },
    {
      "id": 4750,
      "hanzi": "再接再厉",
      "pinyin": "zài jiē zài lì",
      "translations": [
        "to continue the struggle (idiom); to persist",
        "unremitting efforts"
      ]
    },
    {
      "id": 4751,
      "hanzi": "攒",
      "pinyin": "zǎn",
      "translations": [
        "to collect",
        "to hoard",
        "to accumulate",
        "to save"
      ]
    },
    {
      "id": 4752,
      "hanzi": "赞叹",
      "pinyin": "zàn tàn",
      "translations": [
        "to sigh or gasp in admiration",
        "high praise"
      ]
    },
    {
      "id": 4753,
      "hanzi": "赞同",
      "pinyin": "zàn tóng",
      "translations": [
        "to approve of",
        "to endorse",
        "(vote) in favor"
      ]
    },
    {
      "id": 4754,
      "hanzi": "赞扬",
      "pinyin": "zàn yáng",
      "translations": [
        "to praise",
        "to approve of",
        "to show approval"
      ]
    },
    {
      "id": 4755,
      "hanzi": "赞助",
      "pinyin": "zàn zhù",
      "translations": [
        "to support",
        "to assist",
        "to sponsor"
      ]
    },
    {
      "id": 4756,
      "hanzi": "暂且",
      "pinyin": "zàn qiě",
      "translations": [
        "for now",
        "for the time being",
        "temporarily"
      ]
    },
    {
      "id": 4757,
      "hanzi": "糟蹋",
      "pinyin": "zāo tà",
      "translations": [
        "to waste",
        "to defile",
        "to abuse",
        "to insult",
        "to defile",
        "to trample on",
        "to wreck",
        "also pr. [zāo ta]"
      ]
    },
    {
      "id": 4758,
      "hanzi": "遭受",
      "pinyin": "zāo shòu",
      "translations": [
        "to suffer",
        "to sustain (loss, misfortune)"
      ]
    },
    {
      "id": 4759,
      "hanzi": "遭殃",
      "pinyin": "zāo yāng",
      "translations": [
        "to suffer a calamity"
      ]
    },
    {
      "id": 4760,
      "hanzi": "遭遇",
      "pinyin": "zāo yù",
      "translations": [
        "to meet with",
        "to encounter",
        "(bitter) experience"
      ]
    },
    {
      "id": 4761,
      "hanzi": "造反",
      "pinyin": "zào fǎn",
      "translations": [
        "to rebel",
        "to revolt"
      ]
    },
    {
      "id": 4762,
      "hanzi": "造型",
      "pinyin": "zào xíng",
      "translations": [
        "modeling",
        "mold-making",
        "model or mold",
        "molding",
        "pose"
      ]
    },
    {
      "id": 4763,
      "hanzi": "噪音",
      "pinyin": "zào yīn",
      "translations": [
        "rumble",
        "noise",
        "static (in a signal)"
      ]
    },
    {
      "id": 4764,
      "hanzi": "责怪",
      "pinyin": "zé guài",
      "translations": [
        "to blame",
        "to rebuke"
      ]
    },
    {
      "id": 4765,
      "hanzi": "贼",
      "pinyin": "zéi",
      "translations": [
        "thief",
        "traitor",
        "wily",
        "deceitful",
        "evil",
        "extremely"
      ]
    },
    {
      "id": 4766,
      "hanzi": "增添",
      "pinyin": "zēng tiān",
      "translations": [
        "to add",
        "to increase"
      ]
    },
    {
      "id": 4767,
      "hanzi": "赠送",
      "pinyin": "zèng sòng",
      "translations": [
        "to present as a gift"
      ]
    },
    {
      "id": 4768,
      "hanzi": "渣",
      "pinyin": "zhā",
      "translations": [
        "slag (in mining or smelting)",
        "dregs"
      ]
    },
    {
      "id": 4769,
      "hanzi": "扎",
      "pinyin": "zhā",
      "translations": [
        "to prick",
        "to run or stick (a needle etc) into",
        "jug (a classifier for liquids such as beer)"
      ]
    },
    {
      "id": 4770,
      "hanzi": "扎实",
      "pinyin": "zhā shi",
      "translations": [
        "strong",
        "solid",
        "sturdy",
        "firm",
        "practical"
      ]
    },
    {
      "id": 4771,
      "hanzi": "眨",
      "pinyin": "zhǎ",
      "translations": [
        "to blink",
        "to wink"
      ]
    },
    {
      "id": 4772,
      "hanzi": "诈骗",
      "pinyin": "zhà piàn",
      "translations": [
        "to defraud",
        "to swindle",
        "to blackmail"
      ]
    },
    {
      "id": 4773,
      "hanzi": "摘要",
      "pinyin": "zhāi yào",
      "translations": [
        "summary",
        "abstract"
      ]
    },
    {
      "id": 4774,
      "hanzi": "债券",
      "pinyin": "zhài quàn",
      "translations": [
        "bond",
        "debenture"
      ]
    },
    {
      "id": 4775,
      "hanzi": "沾光",
      "pinyin": "zhān guāng",
      "translations": [
        "to bask in the light",
        "fig. to benefit from association with sb or sth",
        "reflected glory"
      ]
    },
    {
      "id": 4776,
      "hanzi": "瞻仰",
      "pinyin": "zhān yǎng",
      "translations": [
        "to revere",
        "to admire"
      ]
    },
    {
      "id": 4777,
      "hanzi": "斩钉截铁",
      "pinyin": "zhǎn dīng jié tiě",
      "translations": [
        "to chop the nail and slice the iron (idiom); resolute and decisive",
        "unhesitating",
        "definitely",
        "without any doubt"
      ]
    },
    {
      "id": 4778,
      "hanzi": "展示",
      "pinyin": "zhǎn shì",
      "translations": [
        "to reveal",
        "to display",
        "to show",
        "to exhibit sth"
      ]
    },
    {
      "id": 4779,
      "hanzi": "展望",
      "pinyin": "zhǎn wàng",
      "translations": [
        "outlook",
        "prospect",
        "to look ahead",
        "to look forward to"
      ]
    },
    {
      "id": 4780,
      "hanzi": "展现",
      "pinyin": "zhǎn xiàn",
      "translations": [
        "to come out",
        "to emerge"
      ]
    },
    {
      "id": 4781,
      "hanzi": "崭新",
      "pinyin": "zhǎn xīn",
      "translations": [
        "brand new"
      ]
    },
    {
      "id": 4782,
      "hanzi": "战斗",
      "pinyin": "zhàn dòu",
      "translations": [
        "to fight",
        "to battle",
        "CL:場|场",
        "次[cì]"
      ]
    },
    {
      "id": 4783,
      "hanzi": "战略",
      "pinyin": "zhàn lvè",
      "translations": [
        "strategy"
      ]
    },
    {
      "id": 4784,
      "hanzi": "战术",
      "pinyin": "zhàn shù",
      "translations": [
        "tactics"
      ]
    },
    {
      "id": 4785,
      "hanzi": "战役",
      "pinyin": "zhàn yì",
      "translations": [
        "military campaign"
      ]
    },
    {
      "id": 4786,
      "hanzi": "占据",
      "pinyin": "zhàn jù",
      "translations": [
        "to occupy",
        "to hold"
      ]
    },
    {
      "id": 4787,
      "hanzi": "占领",
      "pinyin": "zhàn lǐng",
      "translations": [
        "to occupy (a territory)",
        "to hold"
      ]
    },
    {
      "id": 4788,
      "hanzi": "占有",
      "pinyin": "zhàn yǒu",
      "translations": [
        "to have",
        "to own",
        "to hold",
        "to possess"
      ]
    },
    {
      "id": 4789,
      "hanzi": "章程",
      "pinyin": "zhāng chéng",
      "translations": [
        "rules",
        "regulations",
        "constitution",
        "statute",
        "articles of association (of company)",
        "articles of incorporation",
        "charter (of a corporation)",
        "by-laws"
      ]
    },
    {
      "id": 4790,
      "hanzi": "长辈",
      "pinyin": "zhǎng bèi",
      "translations": [
        "one's elders",
        "older generation"
      ]
    },
    {
      "id": 4791,
      "hanzi": "障碍",
      "pinyin": "zhàng ài",
      "translations": [
        "barrier",
        "obstruction",
        "hindrance",
        "impediment",
        "obstacle"
      ]
    },
    {
      "id": 4792,
      "hanzi": "帐篷",
      "pinyin": "zhàng peng",
      "translations": [
        "tent",
        "CL:頂|顶",
        "座[zuò]"
      ]
    },
    {
      "id": 4793,
      "hanzi": "招收",
      "pinyin": "zhāo shōu",
      "translations": [
        "to hire",
        "to recruit"
      ]
    },
    {
      "id": 4794,
      "hanzi": "招投标",
      "pinyin": "zhāo tóu biāo",
      "translations": [
        "bid inviting and bid offering",
        "bidding",
        "auction"
      ]
    },
    {
      "id": 4795,
      "hanzi": "朝气蓬勃",
      "pinyin": "zhāo qì péng bó",
      "translations": [
        "full of youthful energy (idiom); vigorous",
        "energetic",
        "a bright spark"
      ]
    },
    {
      "id": 4796,
      "hanzi": "着迷",
      "pinyin": "zháo mí",
      "translations": [
        "to be fascinated",
        "to be captivated"
      ]
    },
    {
      "id": 4797,
      "hanzi": "沼泽",
      "pinyin": "zhǎo zé",
      "translations": [
        "marsh",
        "swamp",
        "wetlands",
        "glade"
      ]
    },
    {
      "id": 4798,
      "hanzi": "照料",
      "pinyin": "zhào liào",
      "translations": [
        "to tend",
        "to take care of sb"
      ]
    },
    {
      "id": 4799,
      "hanzi": "照样",
      "pinyin": "zhào yàng",
      "translations": [
        "as before",
        "(same) as usual"
      ]
    },
    {
      "id": 4800,
      "hanzi": "照耀",
      "pinyin": "zhào yào",
      "translations": [
        "to shine",
        "to illuminate"
      ]
    },
    {
      "id": 4801,
      "hanzi": "照应",
      "pinyin": "zhào yìng",
      "translations": [
        "to correlate with",
        "to correspond to"
      ]
    },
    {
      "id": 4802,
      "hanzi": "遮挡",
      "pinyin": "zhē dǎng",
      "translations": [
        "to shelter",
        "to shelter from"
      ]
    },
    {
      "id": 4803,
      "hanzi": "折腾",
      "pinyin": "zhē teng",
      "translations": [
        "to toss from side to side (e.g. sleeplessly)",
        "to repeat sth over and over again",
        "to torment sb",
        "to play crazy"
      ]
    },
    {
      "id": 4804,
      "hanzi": "折",
      "pinyin": "zhé",
      "translations": [
        "variant of 折[zhé]",
        "to fold"
      ]
    },
    {
      "id": 4805,
      "hanzi": "折磨",
      "pinyin": "zhé mó",
      "translations": [
        "to persecute",
        "to torment"
      ]
    },
    {
      "id": 4806,
      "hanzi": "真相",
      "pinyin": "zhēn xiàng",
      "translations": [
        "the truth about sth",
        "the actual facts"
      ]
    },
    {
      "id": 4807,
      "hanzi": "真挚",
      "pinyin": "zhēn zhì",
      "translations": [
        "sincere",
        "sincerity"
      ]
    },
    {
      "id": 4808,
      "hanzi": "珍贵",
      "pinyin": "zhēn guì",
      "translations": [
        "precious"
      ]
    },
    {
      "id": 4809,
      "hanzi": "珍稀",
      "pinyin": "zhēn xī",
      "translations": [
        "rare",
        "precious and uncommon"
      ]
    },
    {
      "id": 4810,
      "hanzi": "珍珠",
      "pinyin": "zhēn zhū",
      "translations": [
        "pearl",
        "CL:顆|颗[kē]"
      ]
    },
    {
      "id": 4811,
      "hanzi": "侦探",
      "pinyin": "zhēn tàn",
      "translations": [
        "detective",
        "to do detective work"
      ]
    },
    {
      "id": 4812,
      "hanzi": "斟酌",
      "pinyin": "zhēn zhuó",
      "translations": [
        "to consider",
        "to deliberate",
        "to fill up a cup to the brim"
      ]
    },
    {
      "id": 4813,
      "hanzi": "阵地",
      "pinyin": "zhèn dì",
      "translations": [
        "position",
        "front"
      ]
    },
    {
      "id": 4814,
      "hanzi": "阵容",
      "pinyin": "zhèn róng",
      "translations": [
        "troop arrangement",
        "battle formation",
        "line-up (of a sports team etc)"
      ]
    },
    {
      "id": 4815,
      "hanzi": "镇定",
      "pinyin": "zhèn dìng",
      "translations": [
        "calm",
        "unperturbed",
        "cool"
      ]
    },
    {
      "id": 4816,
      "hanzi": "镇静",
      "pinyin": "zhèn jìng",
      "translations": [
        "calm",
        "cool"
      ]
    },
    {
      "id": 4817,
      "hanzi": "镇压",
      "pinyin": "zhèn yā",
      "translations": [
        "suppression",
        "repression",
        "to suppress",
        "to put down",
        "to quell"
      ]
    },
    {
      "id": 4818,
      "hanzi": "振奋",
      "pinyin": "zhèn fèn",
      "translations": [
        "to stir oneself up",
        "to raise one's spirits",
        "to inspire"
      ]
    },
    {
      "id": 4819,
      "hanzi": "振兴",
      "pinyin": "zhèn xīng",
      "translations": [
        "to revive",
        "to revitalize",
        "to invigorate",
        "to re-energize"
      ]
    },
    {
      "id": 4820,
      "hanzi": "震惊",
      "pinyin": "zhèn jīng",
      "translations": [
        "to shock",
        "to astonish"
      ]
    },
    {
      "id": 4821,
      "hanzi": "争端",
      "pinyin": "zhēng duān",
      "translations": [
        "dispute",
        "controversy",
        "conflict"
      ]
    },
    {
      "id": 4822,
      "hanzi": "争夺",
      "pinyin": "zhēng duó",
      "translations": [
        "to fight over",
        "to contest",
        "to vie over"
      ]
    },
    {
      "id": 4823,
      "hanzi": "争气",
      "pinyin": "zhēng qì",
      "translations": [
        "to work hard for sth",
        "to resolve on improvement",
        "determined not to fall short"
      ]
    },
    {
      "id": 4824,
      "hanzi": "争先恐后",
      "pinyin": "zhēng xiān kǒng hòu",
      "translations": [
        "striving to be first and fearing to be last (idiom); outdoing one another"
      ]
    },
    {
      "id": 4825,
      "hanzi": "争议",
      "pinyin": "zhēng yì",
      "translations": [
        "controversy",
        "dispute",
        "to dispute"
      ]
    },
    {
      "id": 4826,
      "hanzi": "蒸发",
      "pinyin": "zhēng fā",
      "translations": [
        "to evaporate",
        "evaporation"
      ]
    },
    {
      "id": 4827,
      "hanzi": "征服",
      "pinyin": "zhēng fú",
      "translations": [
        "to conquer",
        "to subdue",
        "to vanquish"
      ]
    },
    {
      "id": 4828,
      "hanzi": "征收",
      "pinyin": "zhēng shōu",
      "translations": [
        "to levy (a fine)",
        "to impose (a tariff)"
      ]
    },
    {
      "id": 4829,
      "hanzi": "正月",
      "pinyin": "zhēng yuè",
      "translations": [
        "first month of the lunar year"
      ]
    },
    {
      "id": 4830,
      "hanzi": "挣扎",
      "pinyin": "zhēng zhá",
      "translations": [
        "to struggle"
      ]
    },
    {
      "id": 4831,
      "hanzi": "整顿",
      "pinyin": "zhěng dùn",
      "translations": [
        "to tidy up",
        "to reorganize",
        "to consolidate",
        "to rectify"
      ]
    },
    {
      "id": 4832,
      "hanzi": "正当",
      "pinyin": "zhèng dāng",
      "translations": [
        "honest",
        "reasonable",
        "fair",
        "sensible",
        "timely",
        "just (when needed)"
      ]
    },
    {
      "id": 4833,
      "hanzi": "正负",
      "pinyin": "zhèng fù",
      "translations": [
        "positive and negative"
      ]
    },
    {
      "id": 4834,
      "hanzi": "正规",
      "pinyin": "zhèng guī",
      "translations": [
        "regular",
        "according to standards"
      ]
    },
    {
      "id": 4835,
      "hanzi": "正经",
      "pinyin": "zhèng jīng",
      "translations": [
        "decent",
        "honorable",
        "proper",
        "serious",
        "according to standards"
      ]
    },
    {
      "id": 4836,
      "hanzi": "正气",
      "pinyin": "zhèng qì",
      "translations": [
        "healthy environment",
        "healthy atmosphere",
        "righteousness",
        "vital energy (in Chinese medicine)"
      ]
    },
    {
      "id": 4837,
      "hanzi": "正义",
      "pinyin": "zhèng yì",
      "translations": [
        "justice",
        "righteous",
        "righteousness"
      ]
    },
    {
      "id": 4838,
      "hanzi": "政权",
      "pinyin": "zhèng quán",
      "translations": [
        "regime",
        "(wield) political power"
      ]
    },
    {
      "id": 4839,
      "hanzi": "证实",
      "pinyin": "zhèng shí",
      "translations": [
        "to confirm (sth to be true)",
        "to verify"
      ]
    },
    {
      "id": 4840,
      "hanzi": "证书",
      "pinyin": "zhèng shū",
      "translations": [
        "credentials",
        "certificate"
      ]
    },
    {
      "id": 4841,
      "hanzi": "郑重",
      "pinyin": "zhèng zhòng",
      "translations": [
        "serious",
        "solemn"
      ]
    },
    {
      "id": 4842,
      "hanzi": "症状",
      "pinyin": "zhèng zhuàng",
      "translations": [
        "symptom (of an illness)"
      ]
    },
    {
      "id": 4843,
      "hanzi": "枝",
      "pinyin": "zhī",
      "translations": [
        "branch",
        "classifier for sticks",
        "rods",
        "pencils etc"
      ]
    },
    {
      "id": 4844,
      "hanzi": "支撑",
      "pinyin": "zhī chēng",
      "translations": [
        "to prop up",
        "to support",
        "strut",
        "brace"
      ]
    },
    {
      "id": 4845,
      "hanzi": "支出",
      "pinyin": "zhī chū",
      "translations": [
        "to spend",
        "to pay out",
        "expense"
      ]
    },
    {
      "id": 4846,
      "hanzi": "支流",
      "pinyin": "zhī liú",
      "translations": [
        "tributary (river)"
      ]
    },
    {
      "id": 4847,
      "hanzi": "支配",
      "pinyin": "zhī pèi",
      "translations": [
        "to control",
        "to dominate",
        "to allocate"
      ]
    },
    {
      "id": 4848,
      "hanzi": "支援",
      "pinyin": "zhī yuán",
      "translations": [
        "to provide assistance",
        "to support",
        "to back"
      ]
    },
    {
      "id": 4849,
      "hanzi": "支柱",
      "pinyin": "zhī zhù",
      "translations": [
        "mainstay",
        "pillar",
        "prop",
        "backbone"
      ]
    },
    {
      "id": 4850,
      "hanzi": "知觉",
      "pinyin": "zhī jué",
      "translations": [
        "perception",
        "consciousness"
      ]
    },
    {
      "id": 4851,
      "hanzi": "知足常乐",
      "pinyin": "zhī zú cháng lè",
      "translations": [
        "satisfied with what one has (idiom)"
      ]
    },
    {
      "id": 4852,
      "hanzi": "脂肪",
      "pinyin": "zhī fáng",
      "translations": [
        "body fat"
      ]
    },
    {
      "id": 4853,
      "hanzi": "直播",
      "pinyin": "zhí bō",
      "translations": [
        "live broadcast (not recorded)",
        "direct internet broadcasting"
      ]
    },
    {
      "id": 4854,
      "hanzi": "值班",
      "pinyin": "zhí bān",
      "translations": [
        "to work a shift",
        "on duty"
      ]
    },
    {
      "id": 4855,
      "hanzi": "殖民地",
      "pinyin": "zhí mín dì",
      "translations": [
        "colony"
      ]
    },
    {
      "id": 4856,
      "hanzi": "职能",
      "pinyin": "zhí néng",
      "translations": [
        "function",
        "role"
      ]
    },
    {
      "id": 4857,
      "hanzi": "职位",
      "pinyin": "zhí wèi",
      "translations": [
        "post",
        "office",
        "position"
      ]
    },
    {
      "id": 4858,
      "hanzi": "职务",
      "pinyin": "zhí wù",
      "translations": [
        "post",
        "position",
        "job",
        "duties"
      ]
    },
    {
      "id": 4859,
      "hanzi": "指标",
      "pinyin": "zhǐ biāo",
      "translations": [
        "norm",
        "index",
        "target"
      ]
    },
    {
      "id": 4860,
      "hanzi": "指定",
      "pinyin": "zhǐ dìng",
      "translations": [
        "to appoint",
        "to assign",
        "to indicate clearly and with certainty",
        "designated"
      ]
    },
    {
      "id": 4861,
      "hanzi": "指甲",
      "pinyin": "zhǐ jia",
      "translations": [
        "fingernail"
      ]
    },
    {
      "id": 4862,
      "hanzi": "指令",
      "pinyin": "zhǐ lìng",
      "translations": [
        "order",
        "command",
        "instruction"
      ]
    },
    {
      "id": 4863,
      "hanzi": "指南针",
      "pinyin": "zhǐ nán zhēn",
      "translations": [
        "compass"
      ]
    },
    {
      "id": 4864,
      "hanzi": "指示",
      "pinyin": "zhǐ shì",
      "translations": [
        "to point out",
        "to indicate",
        "to instruct",
        "directives",
        "instructions",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4865,
      "hanzi": "指望",
      "pinyin": "zhǐ wàng",
      "translations": [
        "to hope for sth",
        "to count on",
        "hope"
      ]
    },
    {
      "id": 4866,
      "hanzi": "指责",
      "pinyin": "zhǐ zé",
      "translations": [
        "to criticize",
        "to find fault with",
        "to denounce"
      ]
    },
    {
      "id": 4867,
      "hanzi": "治安",
      "pinyin": "zhì ān",
      "translations": [
        "law and order",
        "public security"
      ]
    },
    {
      "id": 4868,
      "hanzi": "治理",
      "pinyin": "zhì lǐ",
      "translations": [
        "to govern",
        "to administer",
        "to manage",
        "to control",
        "governance"
      ]
    },
    {
      "id": 4869,
      "hanzi": "制裁",
      "pinyin": "zhì cái",
      "translations": [
        "to punish",
        "punishment",
        "sanctions (incl. economic)"
      ]
    },
    {
      "id": 4870,
      "hanzi": "制订",
      "pinyin": "zhì dìng",
      "translations": [
        "to work out",
        "to formulate"
      ]
    },
    {
      "id": 4871,
      "hanzi": "制服",
      "pinyin": "zhì fú",
      "translations": [
        "to subdue",
        "to check",
        "to bring under control",
        "(in former times) what one is allowed to wear depending on social status",
        "uniform (army, party, school etc)",
        "livery (for company employees)",
        "CL:套[tào]"
      ]
    },
    {
      "id": 4872,
      "hanzi": "制约",
      "pinyin": "zhì yuē",
      "translations": [
        "to restrict",
        "condition"
      ]
    },
    {
      "id": 4873,
      "hanzi": "制止",
      "pinyin": "zhì zhǐ",
      "translations": [
        "to curb",
        "to put a stop to",
        "to stop",
        "to check",
        "to limit"
      ]
    },
    {
      "id": 4874,
      "hanzi": "致辞",
      "pinyin": "zhì cí",
      "translations": [
        "to express in words or writing",
        "to make a speech (esp. short introduction, vote of thanks, afterword, funeral homily etc)",
        "to address (an audience)",
        "same as 致詞|致词"
      ]
    },
    {
      "id": 4875,
      "hanzi": "致力于",
      "pinyin": "zhì lì yú",
      "translations": [
        "Committed to"
      ]
    },
    {
      "id": 4876,
      "hanzi": "致使",
      "pinyin": "zhì shǐ",
      "translations": [
        "to cause",
        "to result in"
      ]
    },
    {
      "id": 4877,
      "hanzi": "智力",
      "pinyin": "zhì lì",
      "translations": [
        "intelligence",
        "intellect"
      ]
    },
    {
      "id": 4878,
      "hanzi": "智能",
      "pinyin": "zhì néng",
      "translations": [
        "intelligent",
        "able",
        "smart (phone, system, bomb etc)"
      ]
    },
    {
      "id": 4879,
      "hanzi": "智商",
      "pinyin": "zhì shāng",
      "translations": [
        "IQ (intelligence quotient)"
      ]
    },
    {
      "id": 4880,
      "hanzi": "滞留",
      "pinyin": "zhì liú",
      "translations": [
        "to detain",
        "retention"
      ]
    },
    {
      "id": 4881,
      "hanzi": "志气",
      "pinyin": "zhì qì",
      "translations": [
        "ambition",
        "resolve",
        "backbone",
        "drive",
        "spirit"
      ]
    },
    {
      "id": 4882,
      "hanzi": "忠诚",
      "pinyin": "zhōng chéng",
      "translations": [
        "devoted",
        "fidelity",
        "loyal",
        "loyalty"
      ]
    },
    {
      "id": 4883,
      "hanzi": "忠实",
      "pinyin": "zhōng shí",
      "translations": [
        "faithful"
      ]
    },
    {
      "id": 4884,
      "hanzi": "终点",
      "pinyin": "zhōng diǎn",
      "translations": [
        "the end",
        "end point",
        "finishing line (in a race)",
        "destination",
        "terminus",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4885,
      "hanzi": "终究",
      "pinyin": "zhōng jiū",
      "translations": [
        "in the end",
        "after all is said and done"
      ]
    },
    {
      "id": 4886,
      "hanzi": "终年",
      "pinyin": "zhōng nián",
      "translations": [
        "entire year",
        "throughout the year",
        "age at death"
      ]
    },
    {
      "id": 4887,
      "hanzi": "终身",
      "pinyin": "zhōng shēn",
      "translations": [
        "lifelong",
        "all one's life",
        "marriage"
      ]
    },
    {
      "id": 4888,
      "hanzi": "终止",
      "pinyin": "zhōng zhǐ",
      "translations": [
        "to stop",
        "to terminate (law)"
      ]
    },
    {
      "id": 4889,
      "hanzi": "中断",
      "pinyin": "zhōng duàn",
      "translations": [
        "to cut short",
        "to break off",
        "to discontinue",
        "to interrupt"
      ]
    },
    {
      "id": 4890,
      "hanzi": "中立",
      "pinyin": "zhōng lì",
      "translations": [
        "neutral"
      ]
    },
    {
      "id": 4891,
      "hanzi": "中央",
      "pinyin": "zhōng yāng",
      "translations": [
        "central",
        "middle",
        "center",
        "central authorities (of a state)"
      ]
    },
    {
      "id": 4892,
      "hanzi": "衷心",
      "pinyin": "zhōng xīn",
      "translations": [
        "heartfelt",
        "wholehearted",
        "cordial"
      ]
    },
    {
      "id": 4893,
      "hanzi": "种子",
      "pinyin": "zhǒng zi",
      "translations": [
        "seed",
        "CL:顆|颗",
        "粒[lì]"
      ]
    },
    {
      "id": 4894,
      "hanzi": "种族",
      "pinyin": "zhǒng zú",
      "translations": [
        "race",
        "ethnicity"
      ]
    },
    {
      "id": 4895,
      "hanzi": "肿瘤",
      "pinyin": "zhǒng liú",
      "translations": [
        "tumor"
      ]
    },
    {
      "id": 4896,
      "hanzi": "重心",
      "pinyin": "zhòng xīn",
      "translations": [
        "center of gravity",
        "central core",
        "main part"
      ]
    },
    {
      "id": 4897,
      "hanzi": "众所周知",
      "pinyin": "zhòng suǒ zhōu zhī",
      "translations": [
        "see 眾所周知|众所周知[zhòng suǒ zhōu zhī]"
      ]
    },
    {
      "id": 4898,
      "hanzi": "州",
      "pinyin": "zhōu",
      "translations": [
        "prefecture",
        "state (e.g. of US)",
        "province (old)",
        "administrative division (old)"
      ]
    },
    {
      "id": 4899,
      "hanzi": "舟",
      "pinyin": "zhōu",
      "translations": [
        "boat"
      ]
    },
    {
      "id": 4900,
      "hanzi": "粥",
      "pinyin": "zhōu",
      "translations": [
        "congee",
        "gruel",
        "porridge",
        "CL:碗[wǎn]"
      ]
    },
    {
      "id": 4901,
      "hanzi": "周边",
      "pinyin": "zhōu biān",
      "translations": [
        "periphery",
        "rim",
        "also written 周邊|周边"
      ]
    },
    {
      "id": 4902,
      "hanzi": "周密",
      "pinyin": "zhōu mì",
      "translations": [
        "careful",
        "thorough"
      ]
    },
    {
      "id": 4903,
      "hanzi": "周年",
      "pinyin": "zhōu nián",
      "translations": [
        "anniversary",
        "annual"
      ]
    },
    {
      "id": 4904,
      "hanzi": "周期",
      "pinyin": "zhōu qī",
      "translations": [
        "period",
        "cycle"
      ]
    },
    {
      "id": 4905,
      "hanzi": "周折",
      "pinyin": "zhōu zhé",
      "translations": [
        "complication",
        "twists and turns",
        "problem",
        "setback"
      ]
    },
    {
      "id": 4906,
      "hanzi": "周转",
      "pinyin": "zhōu zhuǎn",
      "translations": [
        "turnover (in cash or personnel)",
        "to have enough resources to cover a need",
        "also written 周轉|周转"
      ]
    },
    {
      "id": 4907,
      "hanzi": "皱纹",
      "pinyin": "zhòu wén",
      "translations": [
        "wrinkle",
        "CL:道[dào]"
      ]
    },
    {
      "id": 4908,
      "hanzi": "昼夜",
      "pinyin": "zhòu yè",
      "translations": [
        "day and night",
        "period of 24 hours",
        "continuously",
        "without stop"
      ]
    },
    {
      "id": 4909,
      "hanzi": "株",
      "pinyin": "zhū",
      "translations": [
        "tree trunk",
        "stump (tree root)",
        "a plant",
        "classifier for trees or plants",
        "to involve others (in shady business)"
      ]
    },
    {
      "id": 4910,
      "hanzi": "诸位",
      "pinyin": "zhū wèi",
      "translations": [
        "(pron) everyone",
        "Ladies and Gentlemen",
        "Sirs"
      ]
    },
    {
      "id": 4911,
      "hanzi": "逐年",
      "pinyin": "zhú nián",
      "translations": [
        "year after year",
        "with each passing year",
        "over the years"
      ]
    },
    {
      "id": 4912,
      "hanzi": "拄",
      "pinyin": "zhǔ",
      "translations": [
        "to lean on",
        "to prop on"
      ]
    },
    {
      "id": 4913,
      "hanzi": "主办",
      "pinyin": "zhǔ bàn",
      "translations": [
        "to organize",
        "to host (a conference or sports event)"
      ]
    },
    {
      "id": 4914,
      "hanzi": "主导",
      "pinyin": "zhǔ dǎo",
      "translations": [
        "to lead",
        "to manage"
      ]
    },
    {
      "id": 4915,
      "hanzi": "主管",
      "pinyin": "zhǔ guǎn",
      "translations": [
        "in charge",
        "responsible for"
      ]
    },
    {
      "id": 4916,
      "hanzi": "主流",
      "pinyin": "zhǔ liú",
      "translations": [
        "main stream (of a river)",
        "fig. the essential point",
        "main viewpoint of a matter",
        "mainstream (culture etc)"
      ]
    },
    {
      "id": 4917,
      "hanzi": "主权",
      "pinyin": "zhǔ quán",
      "translations": [
        "sovereignty"
      ]
    },
    {
      "id": 4918,
      "hanzi": "主题",
      "pinyin": "zhǔ tí",
      "translations": [
        "theme",
        "subject"
      ]
    },
    {
      "id": 4919,
      "hanzi": "住宅",
      "pinyin": "zhù zhái",
      "translations": [
        "residence",
        "tenement"
      ]
    },
    {
      "id": 4920,
      "hanzi": "注射",
      "pinyin": "zhù shè",
      "translations": [
        "injection",
        "to inject"
      ]
    },
    {
      "id": 4921,
      "hanzi": "注视",
      "pinyin": "zhù shì",
      "translations": [
        "to watch attentively",
        "to gaze"
      ]
    },
    {
      "id": 4922,
      "hanzi": "注释",
      "pinyin": "zhù shì",
      "translations": [
        "marginal notes",
        "annotation",
        "to annotate",
        "to add comments to text"
      ]
    },
    {
      "id": 4923,
      "hanzi": "注重",
      "pinyin": "zhù zhòng",
      "translations": [
        "to pay attention to",
        "to emphasize"
      ]
    },
    {
      "id": 4924,
      "hanzi": "助理",
      "pinyin": "zhù lǐ",
      "translations": [
        "assistant"
      ]
    },
    {
      "id": 4925,
      "hanzi": "助手",
      "pinyin": "zhù shǒu",
      "translations": [
        "assistant",
        "helper"
      ]
    },
    {
      "id": 4926,
      "hanzi": "著作",
      "pinyin": "zhù zuò",
      "translations": [
        "to write",
        "literary work",
        "book",
        "article",
        "writings",
        "CL:部[bù]"
      ]
    },
    {
      "id": 4927,
      "hanzi": "驻扎",
      "pinyin": "zhù zhā",
      "translations": [
        "to station",
        "to garrison (troops)"
      ]
    },
    {
      "id": 4928,
      "hanzi": "铸造",
      "pinyin": "zhù zào",
      "translations": [
        "to cast (pour metal into a mold)"
      ]
    },
    {
      "id": 4929,
      "hanzi": "拽",
      "pinyin": "zhuài",
      "translations": [
        "to pull",
        "to tug at (sth)"
      ]
    },
    {
      "id": 4930,
      "hanzi": "专长",
      "pinyin": "zhuān cháng",
      "translations": [
        "specialty",
        "special knowledge or ability"
      ]
    },
    {
      "id": 4931,
      "hanzi": "专程",
      "pinyin": "zhuān chéng",
      "translations": [
        "special-purpose trip"
      ]
    },
    {
      "id": 4932,
      "hanzi": "专科",
      "pinyin": "zhuān kē",
      "translations": [
        "specialized subject",
        "branch (of medicine)",
        "specialized training school"
      ]
    },
    {
      "id": 4933,
      "hanzi": "专利",
      "pinyin": "zhuān lì",
      "translations": [
        "patent"
      ]
    },
    {
      "id": 4934,
      "hanzi": "专题",
      "pinyin": "zhuān tí",
      "translations": [
        "special topic"
      ]
    },
    {
      "id": 4935,
      "hanzi": "砖瓦",
      "pinyin": "zhuān wǎ",
      "translations": [
        "tiles and bricks"
      ]
    },
    {
      "id": 4936,
      "hanzi": "转达",
      "pinyin": "zhuǎn dá",
      "translations": [
        "to pass on",
        "to convey",
        "to communicate"
      ]
    },
    {
      "id": 4937,
      "hanzi": "转让",
      "pinyin": "zhuǎn ràng",
      "translations": [
        "transfer (technology, goods etc)",
        "conveyancing (property)"
      ]
    },
    {
      "id": 4938,
      "hanzi": "转移",
      "pinyin": "zhuǎn yí",
      "translations": [
        "to shift",
        "to divert or distract (attention etc)",
        "to change",
        "to transform",
        "metastasis (medicine)"
      ]
    },
    {
      "id": 4939,
      "hanzi": "转折",
      "pinyin": "zhuǎn zhé",
      "translations": [
        "shift in the trend of events",
        "plot shift in a book",
        "twists and turns"
      ]
    },
    {
      "id": 4940,
      "hanzi": "传记",
      "pinyin": "zhuàn jì",
      "translations": [
        "biography",
        "CL:篇",
        "部[bù]"
      ]
    },
    {
      "id": 4941,
      "hanzi": "装备",
      "pinyin": "zhuāng bèi",
      "translations": [
        "equipment",
        "to equip",
        "to outfit"
      ]
    },
    {
      "id": 4942,
      "hanzi": "装卸",
      "pinyin": "zhuāng xiè",
      "translations": [
        "to load or unload",
        "to transfer",
        "to assemble and disassemble"
      ]
    },
    {
      "id": 4943,
      "hanzi": "庄严",
      "pinyin": "zhuāng yán",
      "translations": [
        "stately"
      ]
    },
    {
      "id": 4944,
      "hanzi": "庄重",
      "pinyin": "zhuāng zhòng",
      "translations": [
        "grave",
        "solemn",
        "dignified"
      ]
    },
    {
      "id": 4945,
      "hanzi": "幢",
      "pinyin": "zhuàng",
      "translations": [
        "classifier for buildings",
        "carriage curtain (old)"
      ]
    },
    {
      "id": 4946,
      "hanzi": "壮观",
      "pinyin": "zhuàng guān",
      "translations": [
        "spectacular",
        "magnificent sight"
      ]
    },
    {
      "id": 4947,
      "hanzi": "壮丽",
      "pinyin": "zhuàng lì",
      "translations": [
        "magnificence",
        "magnificent",
        "majestic",
        "glorious"
      ]
    },
    {
      "id": 4948,
      "hanzi": "壮烈",
      "pinyin": "zhuàng liè",
      "translations": [
        "brave",
        "heroic"
      ]
    },
    {
      "id": 4949,
      "hanzi": "追悼",
      "pinyin": "zhuī dào",
      "translations": [
        "to mourn",
        "to pay last respects",
        "mourning",
        "memorial (service etc)"
      ]
    },
    {
      "id": 4950,
      "hanzi": "追究",
      "pinyin": "zhuī jiū",
      "translations": [
        "to investigate",
        "to look into"
      ]
    },
    {
      "id": 4951,
      "hanzi": "准则",
      "pinyin": "zhǔn zé",
      "translations": [
        "norm",
        "standard",
        "criterion"
      ]
    },
    {
      "id": 4952,
      "hanzi": "琢磨",
      "pinyin": "zhuó mó",
      "translations": [
        "to carve and polish (jade)",
        "to polish and refine a literary work"
      ]
    },
    {
      "id": 4953,
      "hanzi": "着手",
      "pinyin": "zhuó shǒu",
      "translations": [
        "to put one's hand to it",
        "to start out on a task",
        "to set out"
      ]
    },
    {
      "id": 4954,
      "hanzi": "着想",
      "pinyin": "zhuó xiǎng",
      "translations": [
        "to give thought (to others)",
        "to consider (other people's needs)"
      ]
    },
    {
      "id": 4955,
      "hanzi": "着重",
      "pinyin": "zhuó zhòng",
      "translations": [
        "put emphasis on",
        "to stress",
        "to emphasize"
      ]
    },
    {
      "id": 4956,
      "hanzi": "卓越",
      "pinyin": "zhuó yuè",
      "translations": [
        "outstanding",
        "surpassing",
        "distinguished",
        "splendid"
      ]
    },
    {
      "id": 4957,
      "hanzi": "资本",
      "pinyin": "zī běn",
      "translations": [
        "capital (economics)"
      ]
    },
    {
      "id": 4958,
      "hanzi": "资产",
      "pinyin": "zī chǎn",
      "translations": [
        "property",
        "assets"
      ]
    },
    {
      "id": 4959,
      "hanzi": "资深",
      "pinyin": "zī shēn",
      "translations": [
        "senior (in terms of depth of accumulated experience)",
        "deeply qualified"
      ]
    },
    {
      "id": 4960,
      "hanzi": "资助",
      "pinyin": "zī zhù",
      "translations": [
        "to subsidize",
        "to provide financial aid",
        "subsidy"
      ]
    },
    {
      "id": 4961,
      "hanzi": "姿态",
      "pinyin": "zī tài",
      "translations": [
        "attitude",
        "posture",
        "stance"
      ]
    },
    {
      "id": 4962,
      "hanzi": "滋味",
      "pinyin": "zī wèi",
      "translations": [
        "taste",
        "flavor",
        "feeling"
      ]
    },
    {
      "id": 4963,
      "hanzi": "滋长",
      "pinyin": "zī zhǎng",
      "translations": [
        "to grow (usually of abstract things)",
        "to yield",
        "to develop"
      ]
    },
    {
      "id": 4964,
      "hanzi": "子弹",
      "pinyin": "zǐ dàn",
      "translations": [
        "bullet",
        "CL:粒",
        "顆|颗",
        "發|发[fā]"
      ]
    },
    {
      "id": 4965,
      "hanzi": "字母",
      "pinyin": "zì mǔ",
      "translations": [
        "letter (of the alphabet)",
        "CL:個|个[gè]"
      ]
    },
    {
      "id": 4966,
      "hanzi": "自卑",
      "pinyin": "zì bēi",
      "translations": [
        "feeling inferior",
        "self-abased"
      ]
    },
    {
      "id": 4967,
      "hanzi": "自发",
      "pinyin": "zì fā",
      "translations": [
        "spontaneous"
      ]
    },
    {
      "id": 4968,
      "hanzi": "自力更生",
      "pinyin": "zì lì gēng shēng",
      "translations": [
        "regeneration through one's own effort (idiom)",
        "self-reliance"
      ]
    },
    {
      "id": 4969,
      "hanzi": "自满",
      "pinyin": "zì mǎn",
      "translations": [
        "complacent",
        "self-satisfied"
      ]
    },
    {
      "id": 4970,
      "hanzi": "自主",
      "pinyin": "zì zhǔ",
      "translations": [
        "independent",
        "to act for oneself",
        "autonomous"
      ]
    },
    {
      "id": 4971,
      "hanzi": "踪迹",
      "pinyin": "zōng jì",
      "translations": [
        "tracks",
        "trail",
        "footprint",
        "trace",
        "vestige"
      ]
    },
    {
      "id": 4972,
      "hanzi": "宗旨",
      "pinyin": "zōng zhǐ",
      "translations": [
        "objective",
        "aim",
        "goal"
      ]
    },
    {
      "id": 4973,
      "hanzi": "棕色",
      "pinyin": "zōng sè",
      "translations": [
        "brown"
      ]
    },
    {
      "id": 4974,
      "hanzi": "总而言之",
      "pinyin": "zǒng ér yán zhī",
      "translations": [
        "in short",
        "in a word",
        "in brief"
      ]
    },
    {
      "id": 4975,
      "hanzi": "总和",
      "pinyin": "zǒng hé",
      "translations": [
        "sum"
      ]
    },
    {
      "id": 4976,
      "hanzi": "纵横",
      "pinyin": "zòng héng",
      "translations": [
        "lit. warp and weft in weaving; vertically and horizontal",
        "length and breadth",
        "criss-crossed",
        "able to move unhindered",
        "abbr. for 合縱連橫|合纵连横",
        "School of Diplomacy during the Warring States Period (475-221 BC)"
      ]
    },
    {
      "id": 4977,
      "hanzi": "走廊",
      "pinyin": "zǒu láng",
      "translations": [
        "corridor",
        "aisle",
        "hallway",
        "colonnade",
        "passageway",
        "piazza",
        "veranda"
      ]
    },
    {
      "id": 4978,
      "hanzi": "走漏",
      "pinyin": "zǒu lòu",
      "translations": [
        "to leak (of information, liquid etc)",
        "to divulge"
      ]
    },
    {
      "id": 4979,
      "hanzi": "走私",
      "pinyin": "zǒu sī",
      "translations": [
        "to smuggle",
        "to have an illicit affair"
      ]
    },
    {
      "id": 4980,
      "hanzi": "揍",
      "pinyin": "zòu",
      "translations": [
        "to beat up",
        "to break to pieces"
      ]
    },
    {
      "id": 4981,
      "hanzi": "租赁",
      "pinyin": "zū lìn",
      "translations": [
        "to rent",
        "to lease",
        "to hire"
      ]
    },
    {
      "id": 4982,
      "hanzi": "足以",
      "pinyin": "zú yǐ",
      "translations": [
        "sufficient to...",
        "so much so that",
        "so that"
      ]
    },
    {
      "id": 4983,
      "hanzi": "组",
      "pinyin": "zǔ",
      "translations": [
        "to form",
        "to organize",
        "group",
        "team",
        "classifier for sets",
        "series",
        "groups of people",
        "batteries"
      ]
    },
    {
      "id": 4984,
      "hanzi": "阻碍",
      "pinyin": "zǔ ài",
      "translations": [
        "to obstruct",
        "to hinder",
        "to block"
      ]
    },
    {
      "id": 4985,
      "hanzi": "阻拦",
      "pinyin": "zǔ lán",
      "translations": [
        "to stop",
        "to obstruct"
      ]
    },
    {
      "id": 4986,
      "hanzi": "阻挠",
      "pinyin": "zǔ náo",
      "translations": [
        "to thwart",
        "to obstruct (sth)"
      ]
    },
    {
      "id": 4987,
      "hanzi": "祖父",
      "pinyin": "zǔ fù",
      "translations": [
        "father's father",
        "paternal grandfather"
      ]
    },
    {
      "id": 4988,
      "hanzi": "钻研",
      "pinyin": "zuān yán",
      "translations": [
        "to study meticulously",
        "to delve into"
      ]
    },
    {
      "id": 4989,
      "hanzi": "钻石",
      "pinyin": "zuàn shí",
      "translations": [
        "diamond",
        "CL:顆|颗[kē]"
      ]
    },
    {
      "id": 4990,
      "hanzi": "嘴唇",
      "pinyin": "zuǐ chún",
      "translations": [
        "lip",
        "CL:片[piàn]"
      ]
    },
    {
      "id": 4991,
      "hanzi": "尊严",
      "pinyin": "zūn yán",
      "translations": [
        "dignity",
        "sanctity",
        "honor",
        "majesty"
      ]
    },
    {
      "id": 4992,
      "hanzi": "遵循",
      "pinyin": "zūn xún",
      "translations": [
        "to follow",
        "to abide by",
        "to comply with",
        "compliance"
      ]
    },
    {
      "id": 4993,
      "hanzi": "左右",
      "pinyin": "zuǒ yòu",
      "translations": [
        "left and right",
        "approximately",
        "attendant",
        "to control",
        "to influence"
      ]
    },
    {
      "id": 4994,
      "hanzi": "做东",
      "pinyin": "zuò dōng",
      "translations": [
        "to act as host"
      ]
    },
    {
      "id": 4995,
      "hanzi": "做主",
      "pinyin": "zuò zhǔ",
      "translations": [
        "make the decision",
        "take charge of",
        "back up",
        "support",
        "be host"
      ]
    },
    {
      "id": 4996,
      "hanzi": "座右铭",
      "pinyin": "zuò yòu míng",
      "translations": [
        "motto",
        "maxim"
      ]
    },
    {
      "id": 4997,
      "hanzi": "作弊",
      "pinyin": "zuò bì",
      "translations": [
        "to practice fraud",
        "to cheat",
        "to engage in corrupt practices"
      ]
    },
    {
      "id": 4998,
      "hanzi": "作废",
      "pinyin": "zuò fèi",
      "translations": [
        "to become invalid",
        "to cancel",
        "to delete",
        "to nullify"
      ]
    },
    {
      "id": 4999,
      "hanzi": "作风",
      "pinyin": "zuò fēng",
      "translations": [
        "style",
        "style of work",
        "way"
      ]
    },
    {
      "id": 5000,
      "hanzi": "作息",
      "pinyin": "zuò xī",
      "translations": [
        "work and rest"
      ]
    }
  ]
}
