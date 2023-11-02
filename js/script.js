const questions = [
    {
        question: "Какой язык работает в браузере?",
        answers: ["Java", "C", "Python", "Javascript"],
        correct: 4,
    },
    {
        question: "Что означает CSS?",
        answers: ["Central Steel Sheets", "Cascading Style Sheets", "Cascading Symple", "Cars Suvs Saiboats"],
        correct: 2,
    },
    {
        question: "Что означает HTML?",
        answers: ["Hyper Text", "Hyper Text Mark Level", "Hyper Text Markage Language", "Hyper Too Must Leader"],
        correct: 4,
    },
];

// находим элементы
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitButton = document.querySelector('#submit');


// переменные игры
let score = 0; // кол-во правильных ответов
let questionIndex = 0; // еукущий вопрос

clearPage();
showQuestion();
submit.onclick = checkAnswer;

// очищаем разметку

function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

// отображаем вопросы викторины

function showQuestion() {
    // вопрос
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);

    headerContainer.innerHTML = title;

    // варианты ответов

    for ([index, item] of questions[questionIndex]['answers'].entries()) {
        console.log(index + 1, item);
        const questionTemplate = 
            `<li>
                <label>
                    <input value="%number%" type="radio" class="answer" name="answer" />
                    <span>%answer%</span>
                </label>
            </li>`;

            const answerHTML = questionTemplate.replace('%answer%', item);
            listContainer.innerHTML += answerHTML;
    }
}


function checkAnswer() {
    // находим выбранную радиокнопку
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
    console.log(checkedRadio);

    console.log('checkAnswer started');

    // проверка выбранного ответа, если не выбран - выходим из функции
    if (checkedRadio === questions.correct) {
        console.log('ok - awesome!');
    } else {
        return
    }
}
