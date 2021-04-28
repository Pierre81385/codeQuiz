//Initialize page

document.getElementById("startQuiz").style.display = "block";
document.getElementById("questions").style.display = "none";
document.getElementById("endQuiz").style.display = "none";
document.getElementById("scoreList").style.display = "none";

var score = 0;
var name = "";

//Questions and Answers Arrays contained in object

var questions = {
  questionText: [
    "Q1: Commonly used Data Types do NOT include:",
    "Q2: Arrays in Javascrip can be used to:",
    "Q3: A commonly used tool for debugging is:",
    "Q4: Javascrip is:",
  ],

  row1Answers: [
    "Kittens",
    "Pick up TV signals.",
    "Gorrila Glue",
    "The a longer version of Java.",
  ],
  row2Answers: [
    "Int",
    "Debug code.",
    "The Console",
    "A coffee based programming language.",
  ],
  row3Answers: [
    "String",
    "Store multiple values.",
    "Google Maps",
    "Cool, but not useful.",
  ],
  row4Answers: [
    "Num",
    "Avoid homework.",
    "Fly Swatters",
    "Creates the functionality of a website.",
  ],

  answerKey: [1, 3, 2, 4],
};

//Function to cycle through the questions

var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");

var i = 0;

function startGame(i) {
  document.getElementById("startQuiz").style.display = "none";
  document.getElementById("questions").style.display = "block";

  console.log("Start score is: " + score);
  console.log("Start value of i is: " + i);

  if (i === 0) {
    setTime();
  }

  if (i < questions.questionText.length) {
    var p = document.querySelector("p");
    var selection = 0;

    p.textContent = questions.questionText[i];

    a1.textContent = questions.row1Answers[i];

    a1.addEventListener("click", function (event) {
      selection = 1;
      checkAnswers(selection);
      event.stopImmediatePropagation();
    });

    a2.textContent = questions.row2Answers[i];
    a2.addEventListener("click", function (event) {
      selection = 2;
      checkAnswers(selection);
      event.stopImmediatePropagation();
    });

    a3.textContent = questions.row3Answers[i];
    a3.addEventListener("click", function (event) {
      selection = 3;
      checkAnswers(selection);
      event.stopImmediatePropagation();
    });

    a4.textContent = questions.row4Answers[i];
    a4.addEventListener("click", function (event) {
      selection = 4;
      checkAnswers(selection);
      event.stopImmediatePropagation();
    });
  }
}

//evaluate the answers

function checkAnswers(value) {
  if (value == questions.answerKey[i]) {
    console.log("Correct Answer");
    score++;
    i++;
    console.log(i);
    if (i < questions.questionText.length) {
      startGame(i);
    } else {
      console.log("Game Over");
      document.getElementById("questions").style.display = "none";
      document.getElementById("endQuiz").style.display = "block";
      theEnd();
    }
  } else {
    console.log("Incorrect Answer");
    i++;
    console.log(i);
    if (i < questions.questionText.length) {
      startGame(i);
    } else {
      console.log("Game Over");
      document.getElementById("questions").style.display = "none";
      document.getElementById("endQuiz").style.display = "block";
      theEnd();
    }
  }
}

//switch to end game screen, end timer

function theEnd() {
  i = 5;
  timeEl.textContent = "###";
  document.getElementById("score").textContent = score;
}

//submit high score

function submitHighScore() {
  var name = document.getElementById("userName").value;
  if (name == "Name") {
    alert("Please enter your name!");
  } else {
    console.log(name);

    //saveScore();

    var scoreObject = {
      name: name,
      score: score,
    };

    var storedScore = JSON.parse(localStorage.getItem("userScore")) || []; //

    storedScore.push(scoreObject);

    localStorage.setItem("userScore", JSON.stringify(storedScore));

    //...

    document.getElementById("endQuiz").style.display = "none";
    document.getElementById("scoreList").style.display = "block";
    return name;
  }
}

function writeScore() {
  for (var w = 0; w < storedScore.length; w++) {
    var liEl = document.createElement("li");

    liEl.textContent = storedScore[w];
    var ul = document.getElementById("winners");
    ul.appendChild(liEl);
  }
}

//timer function

var timeEl = document.getElementById("timeRemaining");
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    if (i < 5) {
      timeEl.textContent = "" + secondsLeft + "";
    }

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      console.log("Game Over");
      document.getElementById("questions").style.display = "none";
      document.getElementById("endQuiz").style.display = "block";
      timeEl.textContent = "---";
      theEnd();
    }
  }, 1000);
}

var reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  window.location.reload();
});

// function saveScore() {
//   var userScore = [];
//   userScore[0] = score;

//   var userInfo {

//   }

//   localStorage.setItem("userScore", JSON.stringify(userScore));

//   //...
//   var storedScore = JSON.parse(localStorage.getItem("userScore")) || [];
//   console.log(storedScore);
// }

// var userScore = {
//   userName: submitHighScore.name,
//   userScore: score,
// };
