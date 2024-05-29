// 從 URL 中獲取用戶提交的答案
const urlParams = new URLSearchParams(window.location.search);
const userAnswers = [];

// 將用戶的答案添加到用戶答案列表中
for (const [key, value] of urlParams) {
    userAnswers.push(value);
}

// 從 localStorage 中獲取正確答案
const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'));

// 更新用戶答案和正確答案的列表
const userAnswersList = document.getElementById('user-answers');
const correctAnswersList = document.getElementById('correct-answers');

userAnswers.forEach((answer, index) => {
    const li = document.createElement('li');
    li.textContent = `第${index + 1}題： ${answer}`;
    userAnswersList.appendChild(li);
});

correctAnswers.forEach((answer, index) => {
    const li = document.createElement('li');
    li.textContent = `第${index + 1}題： ${answer}`;
    correctAnswersList.appendChild(li);
});
