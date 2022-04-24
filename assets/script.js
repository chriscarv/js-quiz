var startBtnEl = document.getElementById("start-btn");
var showQuiz = document.getElementById("quiz");
var startPage = document.getElementById("start");
var questionEl = document.getElementById("questions");
var questionIndex = 0;
// button variables
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");


startBtnEl.addEventListener("click",function(){
  showQuiz.removeAttribute("id");
  startPage.style.display = "none";
  displayQuestions();
});

var questions = [
    {question: "question 1",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    answer: "1"},
    {question: "question 2",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    answer: "1"},
    {question: "question 3",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    answer: "1"},
    {question: "question 4",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    answer: "1"}
];

function displayQuestions(){
    var showQuestion = questions[questionIndex];
    questionEl.innerHTML = "<p>" + showQuestion.question + "</p>";
    button1.innerHTML = showQuestion.answer1;
    button2.innerHTML = showQuestion.answer2;
    button3.innerHTML = showQuestion.answer3;
    button4.innerHTML = showQuestion.answer4;
}