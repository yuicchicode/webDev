const quizzData = [
    {
        question: 'Which year morse code was invented?',
        a1: '1712',
        a2: '1835',
        a3: '1844',
        a4: '1713',
        correct: 'a2'
    },
    {
        question: 'Who unraveled the Enigma Machine?',
        a1: 'Alan Turin',
        a2: 'Jeff Bezos',
        a3: 'Julios Ceaser',
        a4: 'Alanzoka',
        correct: 'a1'
    },
    {
        question: 'What is a Black Hole?',
        a1: 'A Black Hole is a hole in a street',
        a2: 'A Black Hole is a Dark Star in the center of the Universe',
        a3: 'A Black Hole is the closest solar system side of the Milky Way',
        a4: 'A Black Hole is a place in space where gravity pulls so much that even light can not get out',
        correct: 'a4'  
    },
    {
        question: 'What is the meaning of the word Enigma?',
        a1: 'Distraction, Hard and Difficulty',
        a2: 'Time, Dimension, Space and Math',
        a3: 'Mystery, problem, puzzle and riddle',
        a4: 'Dance, Painting, Art and Sing',
        correct: 'a3'  
    },
    {
        question: 'Wich year the first rocket was launched?',
        a1: '1954',
        a2: '1959',
        a3: '1926',
        a4: '1945',
        correct: 'a3'  
    },
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");
const questionElement = document.getElementById('question');
const a1_text = document.getElementById("um");
const a2_text = document.getElementById("dois");
const a3_text = document.getElementById("tres");
const a4_text = document.getElementById("quatro");

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
    const currentQuizData = quizzData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a1_text.innerText = currentQuizData.a1;
    a2_text.innerText = currentQuizData.a2;
    a3_text.innerText = currentQuizData.a3;
    a4_text.innerText = currentQuizData.a4;

}

function getSelected() {
    let answer = undefined
    
    answerEls.forEach((answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    }));

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizzData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizzData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizzData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


