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
var userScoreSets = []; //need to pull in from local storage
var i = 0;
var answerSet = {};
var rightWrong = 0;
var timeLeft = 180;
////figure out how to clear answer set Name so it returns to starting at name = 1


//-----------quiz questions array------------
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",//answer:"A",
        b: "Sheryl Sandberg",//answer:"B",
        c: "Brendan Eich",//answer:"C",
        d: "answer4"//answer:"D",
      },
      correctAnswer: "C"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "answer444"
      },
     correctAnswer: "C"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "D"
    }
  ];

var answers = [];

//-----------Code:startUp------------




//-----------Code:questions------------



//-----------Code:endScreen------------



//---------define functions---------


function countdown() {


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
//console.log("finalpage is running")

///add countdown stopping
    titleBlockVar.textContent = "All Done!";
   // var userInitials = window.prompt("What are your intials?")
   //oText = oForm.elements["text_element_name"];
   //console.log(document.getElementById('initials').value)
   var userInitials = (document.getElementById('initials').value)
    if (userInitials == null) {
            alert("You need to fill out your initials!");
            finalPage();
    }else{
        console.log(userInitials)
        // userScore = {
        // name: userInitials,
        // highScore: 10 //highScore.value;
        // };
        userScore.name = userInitials,
////retrieve countdown stopped value to create highscore
        userScore.highScore = 10 //highScore.value;

      initialsSection.textContent = userScore.name;
      scoreTitleSection.textContent = 'Your High Score is ' + userScore.highScore;
    }

  // set new submission to local storage 
 var highScoreRecord = JSON.stringify(userScore);
 //console.log(highScoreRecord);
localStorage.setItem("lastUser", highScoreRecord);
userScoreSets.push(userScore)
console.log(userScore)
//console.log(userScoreSets)
return userScoreSets;
}

function answerCreation(){
var answerOptions = document.querySelectorAll('input[name="answerSelect"]');
  console.log(answerOptions);

// console.log(answerNow);
   var answerA = (document.getElementById('answer1Select').checked);
   var answerB = (document.getElementById('answer2Select').checked);
   var answerC = (document.getElementById('answer3Select').checked);
   var answerD = (document.getElementById('answer4Select').checked);
   //var answerMatch = myQuestions[i].correctAnswer
   if(answerA ==true){
       answerNow = "A";
   }else if(answerB == true){
       answerNow = "B";
   }else if(answerC == true){
       answerNow = "C";
    }else if(answerD == true){
        answerNow = "D";
    }else{window.alert("must select one answer")};
    // answerSet.questionID = (i + 1),
    // answerSet.a = answerA,
    // answerSet.b = answerB,
    // answerSet.c = answerC,
    // answerSet.d = answerD,
    if(myQuestions[i].correctAnswer === answerNow){
        rightWrong = rightWrong
            i++}
        else{rightWrong = (rightWrong + 1)
            ////add to minus 10 seconds from timer //
            timeLeft = (timeLeft - 10)}


    console.log(answerSet)
    console.log(rightWrong)
    
    displayQuestion()
}

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



  function displayQuestion() {
    if(i < 3){
    titleBlockVar.textContent = myQuestions[i].question;
    answer1Button.textContent = myQuestions[i].answers.a;
    answer2Button.textContent = myQuestions[i].answers.b;
    answer3Button.textContent = myQuestions[i].answers.c;
    answer4Button.textContent = myQuestions[i].answers.d;

    
    //i++;
    ////need to move to next level i
      }else{
        hideShowEnd();
        //finalpage();
        
   }
  }

//   function runThru(){

//   }

//---------------Add event listener-----------
hideShowStart();
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", hideShowMain);
startButton.addEventListener("click", displayQuestion);
submitButton.addEventListener("click", answerCreation);
submitScoreButton.addEventListener("click", finalPage);


// var goBack = document.querySelector('#goBack');
// goBack.addEventListener("click", openURL);
// check localStorage for high score, if it's not there, use 0

// var yourScoreSection = document.getElementById('endScore')
// // if (highScore === null) {
// var highScore = 0;
// yourScoreSection.textContent = "highscore";
//}

//var yourScore = localStorage.setItem("yourScore");
