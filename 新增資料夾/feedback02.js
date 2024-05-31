
var total_score;
document.addEventListener("DOMContentLoaded", function() {
    const feedbackSection = document.getElementById("feedback-section");
    const urlParams = new URLSearchParams(window.location.search);
    const userAnswers = [];

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

    feedbackHTML += `<h2 id="total-score">您的總分是：${score}</h2>`;
    feedbackSection.innerHTML = feedbackHTML;

    // 抓取 id="total-score" 的元素並儲存到全域變數
    
    window.total_score = document.getElementById("total-score");
});

