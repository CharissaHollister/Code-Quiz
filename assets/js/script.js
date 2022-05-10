// Code Quiz - Javascript
//authored by Charissa Hollister 05/04/2022
//**************************** */

////---------Global variables-----------////

//--------Section variables-----------

var highScoreLink = document.querySelector(".leftHeader");
var TimerArea = document.querySelector(".rightHeader");
var introSection = document.getElementById("introSummary");
var startButtonSection = document.querySelector(".startButtonsArea");
var answerAreaSection = document.querySelector(".answerArea");
var endAreaSection = document.querySelector(".endArea");
var highScoresPageSection = document.querySelector(".highScoresPage");

//never hidden: titleIntro, Header, footer

//------------item variables---------

var timerEl = document.getElementById("countDown");
var titleBlockVar = document.getElementById("titleBlock");
var startButton = document.querySelector("#startQuiz");
var answer1Button = document.querySelector("#answer1");
var answer2Button = document.querySelector("#answer2");
var answer3Button = document.querySelector("#answer3");
var answer4Button = document.querySelector("#answer4");
//var rightWrongSection = document.getElementById('rightWrong');
var submitButton = document.getElementById("submitBtn");
var submitScoreButton = document.getElementById("submitScoreBtn");
var initialsSection = document.getElementById("initials");
// var scoreTitleSection = document.getElementById('scoreTitle');
// var yourScoreArea = document.getElementById('scoreYours');
var wrongAnswerArea = document.getElementById("wrongAnswer");
var goBackButton = document.querySelector("#goBack");
var clearScoresButton = document.querySelector("#clearScores");

//-------value variables-------

var userScore = {
  // name: "",
  // highScore: ""
};
var userScoreSets;
var userScorePrev = localStorage.getItem("userScoreSets");
if (userScorePrev) {
  userScoreSets = JSON.parse(userScorePrev);
} else {
  userScoreSets = [];
}

var i = 0;
var answerSet = {};
var rightWrong = 0;
var timeLeft = 180;
var endTime = "";
var userInitials = "";
var highScoreResult = "";
var timeInterval;

//-----------quiz questions array------------
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "none of the above",
    },
    correctAnswer: "C",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "none of the above",
    },
    correctAnswer: "C",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "D",
  },
];

//---------define functions---------

//--------timer-----------
function countdown() {
  timeInterval = setInterval(function () {
    // the timer still has more than 1 second and states "# of seconds remaining"
    if (timeLeft > 1) {
      timerEl.textContent = " " + timeLeft + " seconds remaining";
      timeLeft--;
    } // the timer is at one second and states "1 second" remaining"
    else if (timeLeft === 1) {
      timerEl.textContent = " " + timeLeft + " second remaining";
      timeLeft--;
    } // timer is out of time the function stops, and calls display message function
    else {
      timerEl.textContent = " End";
      clearInterval(timeInterval);
      failedPage();
    }
  }, 1000);
}

//-----------when to show which sections---------
function hideShowStart() {
  wrongAnswerArea.textContent = " ";
  highScoreLink.style.display = "block";
  TimerArea.style.display = "block";
  introSection.style.display = "block";
  startButtonSection.style.display = "block";
  answerAreaSection.style.display = "none";
  endAreaSection.style.display = "none";
  highScoresPageSection.style.display = "none";
}

function hideShowMain() {
  highScoreLink.style.display = "block";
  TimerArea.style.display = "block";
  introSection.style.display = "none";
  startButtonSection.style.display = "none";
  answerAreaSection.style.display = "block";
  endAreaSection.style.display = "none";
  highScoresPageSection.style.display = "none";
}

function hideShowEnd() {
  highScoreLink.style.display = "block";
  TimerArea.style.display = "block";
  introSection.style.display = "none";
  startButtonSection.style.display = "none";
  answerAreaSection.style.display = "none";
  endAreaSection.style.display = "block";
  highScoresPageSection.style.display = "none";
}

function hideShowHighScores() {
  highScoreLink.style.display = "none";
  TimerArea.style.display = "none";
  introSection.style.display = "none";
  startButtonSection.style.display = "none";
  answerAreaSection.style.display = "none";
  endAreaSection.style.display = "none";
  highScoresPageSection.style.display = "block";
}

//----- player's results--------

//------If you run out of time page--------
function failedPage() {
  highScoreLink.style.display = "none";
  TimerArea.style.display = "block";
  introSection.style.display = "none";
  startButtonSection.style.display = "none";
  answerAreaSection.style.display = "none";
  endAreaSection.style.display = "none";
  highScoresPageSection.style.display = "none";
  titleBlockVar.textContent = "You are Out of Time";
  wrongAnswerArea.textContent = "Refresh and Try Again";
}

function finalPage() {
  //grabs time at quiz completion
  clearInterval(timeInterval);
  titleBlockVar.textContent = "All Done!";
  var scoreTitleSection = document.getElementById("scoreTitle");
  scoreTitleSection.textContent = "Your Score is " + timeLeft;
}

//----- test is player picked the correct answer for each question

function answerCreation() {
  var answerOptions = document.querySelectorAll('input[name="answerSelect"]');
  console.log(answerOptions);
  var answerA = document.getElementById("answer1Select").checked;
  var answerB = document.getElementById("answer2Select").checked;
  var answerC = document.getElementById("answer3Select").checked;
  var answerD = document.getElementById("answer4Select").checked;
  if (answerA == true) {
    answerNow = "A";
  } else if (answerB == true) {
    answerNow = "B";
  } else if (answerC == true) {
    answerNow = "C";
  } else if (answerD == true) {
    answerNow = "D";
  } else {
    answerNow = null;
  }
  if (answerNow == null) {
    wrongAnswerArea.textContent = "must select one answer";
  } else if (myQuestions[i].correctAnswer === answerNow) {
    rightWrong = rightWrong;
    wrongAnswerArea.textContent = " ";
    // uncheck radio buttons
    answer1Select.checked = false;
    answer2Select.checked = false;
    answer3Select.checked = false;
    answer4Select.checked = false;
    i++;
  } else {
    rightWrong = rightWrong + 1;
    ////add to minus 10 seconds from timer //
    timeLeft = timeLeft - 10;
    wrongAnswerArea.textContent = "Incorrect";
  }
  displayQuestion();
}

//-------what question to pull from array---------

function displayQuestion() {
  if (i < 3) {
    titleBlockVar.textContent = myQuestions[i].question;
    answer1Button.textContent = myQuestions[i].answers.a;
    answer2Button.textContent = myQuestions[i].answers.b;
    answer3Button.textContent = myQuestions[i].answers.c;
    answer4Button.textContent = myQuestions[i].answers.d;
  } else {
    hideShowEnd();
    finalPage();
  }
}

//--------------highscores page------------
function highScoresPage() {
  //grab initials from final page
  userInitials = document.getElementById("initials").value;
  //userInitials = userInitials.toUpperCase
  if (userInitials == "") {
    alert("You need to fill out your initials!");
    finalPage();
  } else {
    //current player results
    userScore.name = userInitials;
    userScore.highScore = timeLeft;
    var yourScoreArea = document.getElementById("scoreYours");
    yourScoreArea.textContent = "Your High Score is " + userScore.highScore;
  }
  userScoreSets.push(userScore);
  userScoreSets.sort(function (a, b) {
    return b.highScore - a.highScore;
  });

  localStorage.setItem("userScoreSets", JSON.stringify(userScoreSets));

  hideShowHighScores();
  titleBlockVar.textContent = " ✨ High Scores ✨ ";
  yourScoreArea.textContent =
    "Congrats " + userScore.name + " your score is: " + userScore.highScore;

  ////create div elements to list all the high scores from overallscores array
  ////no idea if this is correct, fix later
  var listScores = document.querySelector(".highScoresList");

  // var li1 = document.createElement("li");
  // var c = 0

  var c = 0;

  while (c < userScoreSets.length) {
    var li = document.createElement("li");
    li.classList.add("pastScores");
    li.innerText =
      c +
      1 +
      ".    " +
      userScoreSets[c].name +
      " scored " +
      userScoreSets[c].highScore;
    listScores.appendChild(li);
    c++;
  }
}

//// Go Back button -- returns to start page
function goBack() {
  location.reload();
}

//// clear all scores button -- clear local storage
function clearScores() {
  localStorage.clear();
  location.reload();
}

function highScoresPageNoResults() {
  highScoresPage();
  yourScoreArea.style.display = "none";
}

//---------------Event listener-----------
hideShowStart();
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", hideShowMain);
startButton.addEventListener("click", displayQuestion);
submitButton.addEventListener("click", answerCreation);
submitScoreButton.addEventListener("click", highScoresPage);
goBackButton.addEventListener("click", goBack);
clearScoresButton.addEventListener("click", clearScores);
highScoreLink.addEventListener("click", highScoresPageNoResults);

//---------------------old code attempts---------------------

// var goBack = document.querySelector('#goBack');
// goBack.addEventListener("click", openURL);
// check localStorage for high score, if it's not there, use 0

// var yourScoreSection = document.getElementById('endScore')
// // if (highScore === null) {
// var highScore = 0;
// yourScoreSection.textContent = "highscore";
//}

//var yourScore = localStorage.setItem("yourScore");

// function finalscore(){
//     //calculate final score

// }

// var answerA = document.querySelectorAll("input[type='radio'][name='answer1Select']:checked");
// console.log(answerA)
// console.log(answerB)
// console.log(answerC)
// console.log(answerD)
// var answerRecord = JSON.stringify(answerNow);
// localStorage.setItem("lastAnswer", answerRecord);
// answers.push(answerRecord)

//return(answerSet)}
// i++;
// displayQuestion();

// if(answerA == true){
//     var answerNow = ([i] + "A");
// }
// var answerRecord = JSON.stringify(answerNow);
// localStorage.setItem("lastAnswer", answerRecord);
// answers.push(answerRecord)
// // console.log(userScore)
// console.log(answers)
// return answers;
// }
//let selectedSize;
// for (const radioButton of answerOptions) {
// if (answerSelect[1].checked) {
//     var answerNow = ([i] + "A");
//     console.log(answerNow);
// }
//     }
// answerSet.a = answer1Button
// answers.push(answerSet)
// const btn = document.querySelector('#btn');
//     const radioButtons = document.querySelectorAll('input[name="size"]');
//     btn.addEventListener("click", () => {
//         let selectedSize;
//         for (const radioButton of radioButtons) {
//             if (radioButton.checked) {
//                 selectedSize = radioButton.value;
//                 break;
//             }
//         }
// answer1Select.click(
// answer1Select = true)
// console.log(answer1Select);

// if(answer1Select == true){
// var answerNow = ([i] + "A");
// console.log(answerNow);
// // answerSet[].appendChild(answerNow);
// }
//console.log(answerSet)
//if b

//if c

//id d
// for(var i=0; i<questions.length; i++){

//     // first reset the list of answers
//     answers = [];

//     // for each available answer...
//     for(letter in myQuestions[i].answers){

//       // ...add an html radio button
//       answers.push(
//         '<label>'
//           + '<input type="radio" name="question'+i+'" value="'+letter+'">'
//           + letter + ': '
//           + myQuestions[i].answers[letter]
//         + '</label>'
//       );
//     }

//     displayQuestion();
// }

// userScoreSets.appendChild(userScore);
// var taskNameInput = document.querySelector("input[name='task-name']").value;
// check if input values are empty strings
//   if (!taskNameInput || !taskTypeInput) {
//     alert("You need to fill out your initials!");
//     return false;
//    // yourScoreSection.textContent = (highScore);
// function enterName(){
//     document.querySelector("input[name='initialsEntry']").value = initials;
// }
//     introSection.textContent = 'High Scores';
//document.querySelector("input[name='initialsEntry']");

//     userInitials.setAttribute("data-task-id", taskId);
//     var yourScoreSection = document.getElementById('endScore');
// var highScore = 0;
// yourScoreSection.textContent = (highScore);
