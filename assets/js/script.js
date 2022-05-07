// Code Quiz - Javascript
//authored by Charissa Hollister 05/04/2022
//**************************** */


////---------Global variables-----------////

//--------Section variables-----------

var highScoreLink = document.querySelector('.leftHeader');
var TimerArea = document.querySelector('.rightHeader');
var introSection = document.getElementById('introSummary');
var startButtonSection = document.querySelector('.startButtonsArea');
var answerAreaSection = document.querySelector('.answerArea');
var endAreaSection = document.querySelector('.endArea');
// var highScoresPageSection = document.querySelector('.highScorePage')

//never hidden: titleIntro, Header, 


//------------item variables---------

var timerEl = document.getElementById('countDown');
var titleBlockVar = document.getElementById('titleBlock');
var startButton = document.querySelector('#startQuiz');
var answer1Button = document.querySelector('#answer1');
var answer2Button = document.querySelector('#answer2');
var answer3Button = document.querySelector('#answer3');
var answer4Button = document.querySelector('#answer4');
//var rightWrongSection = document.getElementById('rightWrong');
var submitButton = document.getElementById('submitBtn');
var submitScoreButton = document.getElementById('submitScoreBtn');
var initialsSection = document.getElementById('initials');
var scoreTitleSection = document.getElementById('scoreTitle');


//-------value variables-------

var userScore = {};
var userScoreSets = [];
var i = 0;


//-----------quiz questions array------------
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "answer4"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "answer444"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

const answers = [];

//-----------Code:startUp------------




//-----------Code:questions------------



//-----------Code:endScreen------------



//---------define functions---------


function countdown() {
    var timeLeft = 180;

    // repeats at these given how long between events

    var timeInterval = setInterval(function () {
      // the timer still has more than 1 second and states "# of seconds remaining"
      if (timeLeft > 1) {
        timerEl.textContent = ' ' + timeLeft + ' seconds remaining';
        timeLeft--;
      } // the timer is at one second and states "1 second" remaining"
      else if (timeLeft === 1) {
        timerEl.textContent = ' ' + timeLeft + ' second remaining';
        timeLeft--;
        
      } // timer is out of time the function stops, and calls display message function
      else {
        timerEl.textContent = ' End';
        clearInterval(timeInterval);
        displayMessage();

      }
    }, 1000);
  }

  function hideShowStart(){
highScoreLink.style.display = 'block';
TimerArea.style.display = 'block';
introSection.style.display = 'block';
startButtonSection.style.display = 'block';
answerAreaSection.style.display = 'none';
endAreaSection.style.display = 'none';
// highScoresPageSection.style.display = 'none';
  }

  function hideShowMain(){
    highScoreLink.style.display = 'block';
    TimerArea.style.display = 'block';
    introSection.style.display = 'none';
    startButtonSection.style.display = 'none';
    answerAreaSection.style.display = 'block';
    endAreaSection.style.display = 'none';
    // highScoresPageSection.style.display = 'none';
  }

  function hideShowEnd(){
    highScoreLink.style.display = 'block';
    TimerArea.style.display = 'block';
    introSection.style.display = 'none';
    startButtonSection.style.display = 'none';
    answerAreaSection.style.display = 'none';
    endAreaSection.style.display = 'block';
    
    console.log("hideshowend working")

    // highScoresPageSection.style.display = 'none';
  }

//   function hideShowHighScores(){
//     highScoreLink.style.display = 'none';
//     TimerArea.style.display = 'none';
//     introSection.style.display = 'none';
//     startButtonSection.style.display = 'none';
//     answerAreaSection.style.display = 'none';
//     endAreaSection.style.display = 'none';
//     highScoresPageSection.style.display = 'block';
//   }

function finalPage(){
console.log("finalpage is running")
    titleBlockVar.textContent = "All Done!";
   // var userInitials = window.prompt("What are your intials?")
   //oText = oForm.elements["text_element_name"];
   console.log(document.getElementById('initials').value)
    if (!document.getElementById('intials').value) {
            alert("You need to fill out your initials!");
            finalPage();
    }else{
        var userInitials = document.getElementById('intials').value;
        console.log(userInitials)
        // userScore = {
        // name: userInitials,
        // highScore: 10 //highScore.value;
        // };
        userScore.name = userInitials,
        userScore.highScore = 10 //highScore.value;

      initialsSection.textContent = userScore.name;
      scoreTitleSection.textContent = 'Your High Score is ' + userScore.highScore;
    }

  // set new submission to local storage 
 var highScoreRecord = JSON.stringify(userScore);
 //console.log(highScoreRecord);
localStorage.setItem("LastUser", highScoreRecord);
return userScore;
}

console.log(userScore)
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



  function displayQuestion() {
    if(i < 3){
    titleBlockVar.textContent = myQuestions[i].question;
    answer1Button.textContent = myQuestions[i].answers.a;
    answer2Button.textContent = myQuestions[i].answers.b;
    answer3Button.textContent = myQuestions[i].answers.c;
    answer4Button.textContent = myQuestions[i].answers.d;
    i++;
      }else{
        hideShowEnd();
        

   }
  }


//---------------Add event listener-----------
hideShowStart();
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", hideShowMain);
startButton.addEventListener("click", displayQuestion);

submitButton.addEventListener("click", displayQuestion);
submitScoreButton.addEventListener("submit", finalPage);


// var goBack = document.querySelector('#goBack');
// goBack.addEventListener("click", openURL);
// check localStorage for high score, if it's not there, use 0

// var yourScoreSection = document.getElementById('endScore')
// // if (highScore === null) {
// var highScore = 0;
// yourScoreSection.textContent = "highscore";
//}

//var yourScore = localStorage.setItem("yourScore");
