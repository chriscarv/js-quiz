var startBtnEl = document.getElementById("start-btn");
var showQuiz = document.getElementById("quiz");
var showFinalScore = document.getElementById("final-score")
var startPage = document.getElementById("start");
var questionEl = document.getElementById("questions");
var questionIndex = 0;
// button variables
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");

var timerEl = document.getElementById("time");
var timerValue = 75;
var setTime;

var finalScore = document.getElementById("show-score");



function countdown(){

    timerValue-=1;
    timerEl.textContent = "Time: " + timerValue;
    if(timerValue  <= 0){
        showScore();
    }
   
}


function startQuiz(){
    showQuiz.removeAttribute("id");
    startPage.style.display = "none";
    setTime = setInterval(countdown, 1000);
    countdown();
    displayQuestions();
}

function showScore(){
    clearInterval(setTime);
    showQuiz.setAttribute("id","quiz");
    showFinalScore.removeAttribute("id");
    finalScore.innerText = "your final score is  " + timerValue;
}
var questions = [
    {question: "Commonly used data types DO Not Include",
    answer1: "1. strings",
    answer2: "2. booleans",
    answer3: "3. alerts",
    answer4: "4. numbers",
    answer: "3"},
    {question: "The condition in an if/ else statement is enclosed with ____.",
    answer1: "1. quotes",
    answer2: "2. curly brackets",
    answer3: "3. parenthesis",
    answer4: "4. square brackets",
    answer: "3"},
    {question: "Arrays in JavaScript can be used to store ____.",
    answer1: "1. numbers and strings",
    answer2: "2. other arrays",
    answer3: "3. booleans",
    answer4: "4. all of the above",
    answer: "4"},
    {question: "String values must be enclosed within ____ when being assigned to vairables",
    answer1: "1. commas",
    answer2: "2. curly brackets",
    answer3: "3. quotes",
    answer4: "4. parenthesis",
    answer: "3"},
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "1. JavaScript",
    answer2: "2. terminal/bash",
    answer3: "3. for loops",
    answer4: "4. console.log",
    answer: "4"}
];

function displayQuestions(){
    if(questionIndex === lastindex){
     return showScore();
    }
    var showQuestion = questions[questionIndex];
    questionEl.innerHTML = "<p>" + showQuestion.question + "</p>";
    button1.innerHTML = showQuestion.answer1;
    button2.innerHTML = showQuestion.answer2;
    button3.innerHTML = showQuestion.answer3;
    button4.innerHTML = showQuestion.answer4;
};
var correct;
var lastindex = questions.length;

function isCorrect(event){
correct = questions[questionIndex].answer;
if(event === correct && questionIndex !== lastindex){
    console.log("right");
    questionIndex ++;
    displayQuestions();
}
else if (event !== correct && questionIndex !== lastindex){
    console.log("wrong");
    questionIndex ++;
    timerValue -= 10;
    displayQuestions();
}
else{
    return;
}
};


startBtnEl.addEventListener("click",function(){
    console.log("start quiz");
    startQuiz();
});

