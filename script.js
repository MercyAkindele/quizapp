const quizData = [
  {
    question: "What is Mercy's favorite color?",
    a: "Red",
    b: "Blue",
    c: "purple",
    d: "pink",
    correct: "b",
  },
  {
    question: "What is Mercy's favorite food?",
    a: "Steak",
    b: "pasta",
    c: "eggs",
    d: "chicken",
    correct: "a",
  },
  {
    question: "What is Mercy's favorite JavaScript project?",
    a: "countdown-timer",
    b: "quizapp",
    c: "restaurant reservation app",
    d: "ThinkfulBnB",
    correct: "c",
  },
  {
    question:
      "What was the first programming language that Mercy learned well?",
    a: "Java",
    b: "C",
    c: "JavaScript",
    d: "Ruby",
    correct: "c",
  },
];

let currentQuestion = 0;
let score = 0;
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const h2El = document.querySelector("h2");
const submitButton = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const quizEl = document.getElementById("quiz");

loadQuiz();

function loadQuiz() {
  deSelectAnswers();
  let quizInformation = quizData[currentQuestion];
  h2El.innerText = quizInformation.question;
  aText.innerText = quizInformation.a;
  bText.innerText = quizInformation.b;
  cText.innerText = quizInformation.c;
  dText.innerText = quizInformation.d;
}

function getUserSelection() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitButton.addEventListener("click", () => {
  const answer = getUserSelection();
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      if ((score / quizData.length) * 100 < 69) {
        quizEl.innerHTML = `<h2> You got ${score} out of ${quizData.length} correct! You failed! </h2> <button onclick="location.reload()">Try Again</button>`;
      } else if (
        (score / quizData.length) * 100 >= 69 &&
        (score / quizData.length) * 100 < 100
      ) {
        quizEl.innerHTML = `<h2> You got ${score} out of ${quizData.length} correct! You passed! </h2> <button onclick="location.reload()">Try Again</button>`;
      } else if ((score / quizData.length) * 100 === 100) {
        quizEl.innerHTML = `<h2> You got ${score} out of ${quizData.length} a perfect score! </h2> <button onclick="location.reload()">Try Again</button>`;
      }
    }
  }
});
