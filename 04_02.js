// 題目數據
const questions = [
    {
        question: "股票代表公司的一部分所有權。這種說法是否正確？",
        options: ["正確", "錯誤", "部分正確", "視情況而定"],
        answer: "A"
    },
    {
        question: "哪一種股票通常支付固定的股息？",
        options: ["普通股", "優先股", "成長股", "垃圾股"],
        answer: "B"
    },
    {
        question: "下列哪一項不是股票市場的主要指數？",
        options: ["道瓊斯工業平均指數", "標準普爾500指數", "納斯達克綜合指數", "美元指數"],
        answer: "D"
    },
    {
        question: "股票的市盈率是指",
        options: ["股票價格與每股收益之比", "公司總收益與股票價格之比", "股票價格與公司總收入之比", "公司市值與收益之比"],
        answer: "A"
    },
    {
        question: "藍籌股通常指：",
        options: ["高風險、高回報的股票", "營收穩定且業績良好的大公司股票", "新興市場的小公司股票", "沒有固定股息的股票"],
        answer: "B"
    },
    {
        question: "短期內頻繁買賣股票以獲取利潤的投資者稱為：",
        options: ["長期投資者", "日內交易者", "基本面分析師", "技術分析師"],
        answer: "B"
    },
    {
        question: "股票分紅通常以什麼形式支付？",
        options: ["現金", "新股票", "產品折扣", "以上皆是"],
        answer: "D"
    },
    {
        question: "當公司宣布股票拆分（stock split）時，通常會發生什麼？",
        options: ["每股價格下降", "每股價格上升", "股東數量減少", "公司市值減少"],
        answer: "A"
    },
    {
        question: "IPO是指：",
        options: ["內部收購", "股票回購", "首次公開發行", "公司破產"],
        answer: "C"
    },
    {
        question: "下列哪一種股票是代表未來收益潛力大但現階段盈利較少的公司？",
        options: ["成長股", "藍籌股", "收益股", "垃圾股"],
        answer: "A"
    },
    {
        question: "股息收益率dividend yield是指：",
        options: ["股息與每股收益之比", "股息與每股價格之比", "公司總收益與股息之比", "股息與公司市值之比"],
        answer: "B"
    },
    {
        question: "哪一種投資策略是基於股票價格和交易量的歷史數據來預測未來價格？",
        options: ["基本面分析", "技術分析", "宏觀經濟分析", "心理分析"],
        answer: "B"
    },
    {
        question: "公司回購股票的主要原因之一是：",
        options: ["增加股票的流動性", "提高每股收益（EPS）", "降低公司市值", "減少股東數量"],
        answer: "B"
    },
    {
        question: "“熊市”通常是指什麼？",
        options: ["股票價格普遍上漲", "股票價格普遍下跌", "股票價格保持穩定", "股票價格波動不定"],
        answer: "B"
    },
    {
        question: "“多頭市場”是指：",
        options: ["股票價格普遍下跌", "股票價格普遍上漲", "股票價格保持穩定", "股票價格波動不定"],
        answer: "B"
    },
    {
        question: "當你擁有某公司的股票時，你通常會參加哪一類會議？",
        options: ["管理層會議", "董事會會議", "股東大會", "員工大會"],
        answer: "C"
    },
    {
        question: "哪一種指數通常包括小市值公司的股票？",
        options: ["道瓊斯工業平均指數", "羅素2000指數", "標準普爾500指數", "納斯達克100指數"],
        answer: "B"
    },
    {
        question: "買空short selling是指",
        options: ["購買低價股票", "借入股票賣出，期望價格下降後買回", "購買高價股票", "長期持有股票"],
        answer: "B"
    },
    {
        question: "市值market capitalization是指",
        options: ["股票價格乘以每股收益", "股票價格乘以流通股數", "公司總資產減去負債", "公司總收益"],
        answer: "B"
    }, 
    {
        question: "分紅再投資計劃DRIP是指",
        options: ["公司將股息支付給股東", "股東將股息再投資於公司的額外股票", "公司支付特別股息", "股東出售股票獲取收益"],
        answer: "B"
    },

];

document.addEventListener("DOMContentLoaded", function() {
    const feedbackSection = document.getElementById("feedback-section");
    const urlParams = new URLSearchParams(window.location.search);
    const userAnswers = [];
    const questions = [];

    for (let i = 1; i <= 5; i++) {
        const userAnswer = urlParams.get(`q${i}`);
        const question = urlParams.get(`question${i}`);
        const answer = urlParams.get(`answer${i}`);
        userAnswers.push({ userAnswer, question, answer });
    }

    let score = 0;
    let feedbackHTML = '';

    userAnswers.forEach((item, index) => {
        const { userAnswer, question, answer } = item;
        const correct = answer === userAnswer;
        if (correct) {
            score += 20;
        }
        feedbackHTML += `
            <section>
                <h2>第${index + 1}題：${question}</h2>
                <p>您的回答：${userAnswer !== null ? userAnswer : '未回答'}</p>
                <p>正確答案：${answer}</p>
                <p>${correct ? "正確" : "錯誤"}</p>
            </section>
        `;
    });

    feedbackHTML += `<h2 id="total-score">您的總分是：${score}</h2>`; // 添加 ID
    feedbackSection.innerHTML = feedbackHTML;
});


// 打亂陣列順序
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
