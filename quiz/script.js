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
        a2: '1926',
        a3: '1969',
        a4: '1945',
        correct: 'a2'  
    }
]

const questionElement = document.getElementById('question');
const a1_text = document.getElementById("um");
const a2_text = document.getElementById("dois");
const a3_text = document.getElementById("tres");
const a4_text = document.getElementById("quatro");

let currentQuiz = 0;

loadQuiz();


function loadQuiz() {
    const currentQuizData = quizzData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a1_text.innerText = currentQuizData.a1;
    a2_text.innerText = currentQuizData.a2;
    a3_text.innerText = currentQuizData.a3;
    a4_text.innerText = currentQuizData.a4;


    currentQuiz++;
}