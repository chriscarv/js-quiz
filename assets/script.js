var startBtnEl = document.getElementById("start-btn");
var showQuiz = document.getElementById("quiz");
var showFinalScore = document.getElementById("final-score")
var showHighScores = document.getElementById("highscores");
var startPage = document.getElementById("start");
var questionEl = document.getElementById("questions");
var questionIndex = 0;
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");
var feedback = document.getElementById("response");
var goBack = document.getElementById("restart");
var clearScores = document.getElementById("clear");
var timerEl = document.getElementById("time");
var timerValue = 75;
var setTime;
var getList = document.getElementById("show-list");
var finalScore = document.getElementById("show-score");
var scores = [];
var submitInit = document.getElementById("submit");

submitInit.addEventListener("click", function(event){
    event.preventDefault()
    var initalsEl = document.querySelector('#user').value;
    //console.log(initalsEl);
    var setScore = {
        initials: initalsEl,
        score: timerValue,
    };
    scores.push(setScore);
    logScore();
    highScores();
});

function logScore(){
    localStorage.setItem("scores",JSON.stringify(scores));
}


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


function highScores(){
showHighScores.removeAttribute("id");
showFinalScore.setAttribute("id","final-score");
highScoreList();

}

function highScoreList(){
    var scoreList = JSON.parse(window.localStorage.getItem("scores")) || [];
    scoreList.sort(function(a,b){
        return b.score - a.score;
    });
    scoreList.forEach(function(scores){
        var liEl = document.createElement("li");
        liEl.textContent = scores.initials + " - " + scores.score;
        getList.appendChild(liEl);
    });
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
var valid;
var lastindex = questions.length;

function isCorrect(event){
valid= questions[questionIndex].answer;
if(event === valid&& questionIndex !== lastindex){
    feedback.innerText = "correct";
    console.log("right");
    questionIndex ++;
    displayQuestions();
}
else if (event !== valid&& questionIndex !== lastindex){
    feedback.innerText = "wrong";
    console.log("wrong");
    questionIndex ++;
    timerValue -= 10;
    displayQuestions();
}
else{
    return;
}
};

function clearLocalStorage(){
    window.localStorage.clear();
}
clearScores.addEventListener("click",function(){
    clearLocalStorage();
});

startBtnEl.addEventListener("click",function(){
    console.log("start quiz");
    startQuiz();
});
goBack.addEventListener("click",function(){
    location.reload();
})

