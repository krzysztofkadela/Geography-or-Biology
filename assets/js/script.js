//questions and 4 answers with one correct

const questionsBio = [{
        question: "What land animal is the fastest in the world?",
        a: "Giraffe",
        b: "wolf",
        c: "Cheetah",
        d: "Gazelles",
        correctAnswer: "c",
    },
    {
        question: "What kind of tree is the tallest in the world?",
        a: "Sequoia",
        b: "Oak",
        c: "Pine",
        d: "Bamboo",
        correctAnswer: "a",
    },
    {
        question: "Which of the following animals is not a mammal?",
        a: "Elephant",
        b: "Tiger",
        c: "Dolphin",
        d: "Turtle",
        correctAnswer: "d",
    },
    {
        question: "What animal is the largest on earth?",
        a: "Bison",
        b: "Giraffe",
        c: "Elephant",
        d: "Blue whale",
        correctAnswer: "d",
    }

];

const questionsGeo = [{
        question: "What mountain is the highest in the world?",
        a: "Sagarmatha",
        b: "Lhotse",
        c: "K2",
        d: "Manaslu",
        correctAnswer: "c",
    },
    {
        question: "Which of the following rivers is the longest?",
        a: "Brahmaputra",
        b: "Mississipi",
        c: "Missouri",
        d: "Ganges",
        correctAnswer: "c",
    },
    {
        question: "How many continents are there on earth?",
        a: "5",
        b: "8",
        c: "3",
        d: "7",
        correctAnswer: "d",
    },
    {
        question: "Which city is the capital of the Republic of Ireland?",
        a: "Cork",
        b: "Belfast",
        c: "Dublin",
        d: "Golway",
        correctAnswer: "c",
    }

];
//decaray player name varible empty string.
let playerName = '';

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "start") {
                document.getElementById("welcome").classList.add("invisible");
                document.getElementById("select_game").classList.remove("invisible");
                const userName = document.getElementById("myInput").value;
                playerName=userName;
            } else if (this.getAttribute("id") === "geo_next_submit") {

                const answer = submitAnswer()
                if (answer) {
                    if (answer === questionsGeo[currentQuiz].correctAnswer) {
                        score++
                    }
                    currentQuiz++ //ned to add random number.

                    if (currentQuiz < questionsGeo.length) {
                        loadGeoQuestions()
                    } else {
                        //display score function
                        displayScore(score, playerName);
                    }
                }
            } else if (this.getAttribute("id") === "bio_next_submit") {
                const answer = submitAnswer()
                if (answer) {
                    if (answer === questionsBio[currentQuiz].correctAnswer) {
                        score++
                    }
                    currentQuiz++ //need to add random number.

                    if (currentQuiz < questionsBio.length) {
                        loadBioQuestions()
                    } else {
                        displayScore(score, playerName);
                    }

                }
            } else if(this.getAttribute("id") === "restart"){
                restartGame();

            }else{
                let quizType = this.getAttribute("id");
                startQuize(quizType);

            }
        });
    }


});
//global variables

let score = 0;
const nextQuestion = document.getElementById("next_submit");
// to point quiz container.
const quize = document.getElementById("question_area");
// select all elements with class answer
const quizAnswers = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");

//Setting up variables for each answer.

const answer1 = document.getElementById("answerText1");
const answer2 = document.getElementById("answerText2");
const answer3 = document.getElementById("answerText3");
const answer4 = document.getElementById("answerText4");

// Call the function to get an array with 4 numbers in random positions
let result = setQuestionsInRandomPositions();


let currentQuiz = 0; //need to add rendom numbers 
//number of questions to be drawn.
let questionNumber = 4;
//number of questions available.
let questionFrom = 4;



function startQuize(quizType) {

    //if geography
    if (quizType === "game_geography") {
        document.getElementById("select_game").classList.add("invisible");
        document.getElementById("question_area").classList.remove("invisible");
        document.getElementById("bio_next_submit").classList.add("invisible");
        loadGeoQuestions();

    } else if (quizType === "game_biology") {
        document.getElementById("select_game").classList.add("invisible");
        document.getElementById("question_area").classList.remove("invisible");
        document.getElementById("geo_next_submit").classList.add("invisible");
        loadBioQuestions();

    }

}

//Function to set numbers in random position
function setQuestionsInRandomPositions() {
    let numbers = [1, 2, 3, 4]; // Number of questions
    let shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    return shuffledNumbers;
}



function loadGeoQuestions() {
    deselectAnswers();

    const currentQuizData = questionsGeo[currentQuiz]

    questionElement.innerText = currentQuizData.question

    answer1.innerText = currentQuizData.a
    answer2.innerText = currentQuizData.b
    answer3.innerText = currentQuizData.c
    answer4.innerText = currentQuizData.d

}

function loadBioQuestions() {

    deselectAnswers();

    const currentQuizData = questionsBio[currentQuiz]

    questionElement.innerText = currentQuizData.question

    answer1.innerText = currentQuizData.a
    answer2.innerText = currentQuizData.b
    answer3.innerText = currentQuizData.c
    answer4.innerText = currentQuizData.d
}

function deselectAnswers() {
    quizAnswers.forEach(quizAnswers => quizAnswers.checked = false)
}

//Check ansver function, to check answer and increase conter for correct or inncorect.

function submitAnswer() {
    let answer
    quizAnswers.forEach(quizAnswers => {
        if (quizAnswers.checked) {
            answer = quizAnswers.id
        }
    })
    return answer
}

function displayScore(score, name) {
    document.getElementById("question_area").classList.add("invisible");
    document.getElementById("score").classList.remove("hidden");
    let myScore = document.getElementById("correct");
    let myInncorect = document.getElementById("incorrect");
    let userName = document.getElementById("player_name");
    userName.innerText=name;
    myInncorect.innerText = 4 - score;
    myScore.innerText = score;
}

function restartGame() {
    score = 0;
    currentQuiz = 0;
    playerName = '';
    cleareInput();
    document.getElementById("welcome").classList.remove("invisible");
    document.getElementById("score").classList.add("hidden");
    document.getElementById("bio_next_submit").classList.remove("invisible");
    document.getElementById("geo_next_submit").classList.remove("invisible");

}

function cleareInput() {
    document.getElementById('myInput').value = ''; // Set the value to an empty string
}