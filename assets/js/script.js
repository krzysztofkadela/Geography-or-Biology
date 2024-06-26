//add eversion: 6 to remove warnings about  wrong type of variable use.

/*jshint esversion: 6 */

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
        correctAnswer: "a",
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
        d: "Galway",
        correctAnswer: "c",
    }

];
let id = 'score';
let score = 0;
const nextQuestion = document.getElementById("next_submit");

// to point quiz container.
const quize = document.getElementById("question_area");

// select all elements with class answer
const quizAnswers = document.querySelectorAll(".answer");

// select element with ID 'question'.
const questionElement = document.getElementById("question");


//Setting up variables for each answer.

const answer1 = document.getElementById("answerText1");
const answer2 = document.getElementById("answerText2");
const answer3 = document.getElementById("answerText3");
const answer4 = document.getElementById("answerText4");



//declares a variable to store user Nname.
let playerName = '';

//declares a variable to store question numbers in random order.
let result;

//a variable used to display questions in a random order and used to check the correctness of answers.
let currentQuiz = 0; 

//number of questions to be drawn.(not in use yet)
let questionNumber = 4;

//number of questions available.(not in use yet)
let questionFrom = 4;

//assigns Event Listeners to each button after DOM is loaded.
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {

        button.addEventListener("click", function () {
            //buton 'start' when clicked, it starts the quiz
            if (this.getAttribute("id") === "start") {
                //hide 'welcom' section and show 'choice game' options.
                document.getElementById("welcome").classList.add("invisible");
                document.getElementById("select_game").classList.remove("invisible");
                //take the name entered by the user and assign it to a variable userName.
                const userName = document.getElementById("myInput").value;
                playerName=userName;
                //the number of questions set in random order and assigned to the variable 'result'.
                result = setQuestionsInRandomPositions();
            //part used to check answers after selecting a geography quiz.
            } else if (this.getAttribute("id") === "geo_next_submit") {
                //if the user selects a geography quiz, questions.
                const answer = submitAnswer();
                if (answer) {
                    if (answer === questionsGeo[result[currentQuiz]].correctAnswer) {
                        score++;
                    }
                    currentQuiz++;
                
                    if (currentQuiz < questionsGeo.length) {
                        loadGeoQuestions();
                    } else {
                        //display score function
                        displayScore(score, playerName);
                    }
                }
            //   //part used to check answers after selecting a biology quiz. 
            } else if (this.getAttribute("id") === "bio_next_submit") {
                const answer = submitAnswer();
                if (answer) {
                    if (answer === questionsBio[result[currentQuiz]].correctAnswer) {
                        score++;
                    }
                    currentQuiz++; 

                    if (currentQuiz < questionsBio.length) {
                        loadBioQuestions();
                    } else {
                        displayScore(score, playerName);
                    }

                }
            //After finishing the quiz, the restart button activates the quiz reset function.
            } else if(this.getAttribute("id") === "restart"){
                restartGame();
            //After the user selects the quiz type, the appropriate game starts.
            }else{
                //the value of the "button pressed by user" is assigned into the quizType variable and passed to satrt quiz function.
                let quizType = this.getAttribute("id");
                //launches the appropriate quiz selected by the user. 
                startQuize(quizType);

            }
        });
    }


});


//launches the appropriate quiz selected by the user.

function startQuize(quizType) {

    //if geography selected:
    if (quizType === "game_geography") {
        //replacing class elements to display the questions of the appropriate quiz. 
        document.getElementById("select_game").classList.add("invisible");//'select_game' set to invisible.
        document.getElementById("question_area").classList.remove("invisible");//'question_area' set to invisible.
        document.getElementById("bio_next_submit").classList.add("invisible");//button to submit bio quiz question 'visible' :-).
        loadGeoQuestions();
    // if biology selected:
    } else if (quizType === "game_biology") {
        document.getElementById("select_game").classList.add("invisible");
        document.getElementById("question_area").classList.remove("invisible");
        document.getElementById("geo_next_submit").classList.add("hidden");
        loadBioQuestions();

    }

}

//Function to set numbers in random position
function setQuestionsInRandomPositions() {
    let numbers = [0, 1, 2, 3]; // Number of questions
    let shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    return shuffledNumbers;
}


// Function to load questions to geoagraphy quiz.
function loadGeoQuestions() {
    deselectAnswers();

    const currentQuizData = questionsGeo[result[currentQuiz]];

    questionElement.innerText = currentQuizData.question;
 // displays question.
    answer1.innerText = currentQuizData.a;
    answer2.innerText = currentQuizData.b;
    answer3.innerText = currentQuizData.c;
    answer4.innerText = currentQuizData.d;

}
// function to load questions for Bio quize.
function loadBioQuestions() {

    deselectAnswers();

    const currentQuizData = questionsBio[result[currentQuiz]];

    questionElement.innerText = currentQuizData.question;
 // displays question.
    answer1.innerText = currentQuizData.a;
    answer2.innerText = currentQuizData.b;
    answer3.innerText = currentQuizData.c;
    answer4.innerText = currentQuizData.d;
}

//deselectiong all selected answer to strat quiz again.
function deselectAnswers() {
    quizAnswers.forEach(quizAnswers => quizAnswers.checked = false);
}

//Check answer function, to check answer and increase counter for correct or inncorect answers.

function submitAnswer() {
    let answer;
    quizAnswers.forEach(quizAnswers => {
        if (quizAnswers.checked) {
            answer = quizAnswers.id;
        }
    });
    return answer;
}

//the function retrieves the data stored in the score variable and the player's name, displays the result.

function displayScore(score, name) {
   
    document.getElementById("question_area").classList.add("invisible");
    document.getElementById("score").classList.remove("hidden");
    let myScore = document.getElementById("correct");
    let myInncorect = document.getElementById("incorrect");
    let userName = document.getElementById("player_name");
    let scoreComment = document.getElementById("score_comment");
    
    if(name===''){
        userName.innerText='Player';
    }else{
        userName.innerText=name;
    }
   //different comments depending on good answers.
    if(score===4){
        scoreComment.innerText="Perfect!! You are the best!";
    }else if(score>0 && score <0){
        scoreComment.innerText="Good Job ! ";
    }else {
        scoreComment.innerText="You still need to study a bit.";
    }
    //userName.innerText=name;
    myInncorect.innerText = 4 - score;
    myScore.innerText = score;
}
//the function sets the basic values ​​of variables to their initial values.
function restartGame() {
    score = 0;
    currentQuiz = 0;
    playerName = '';
    cleareInput();
    document.getElementById("welcome").classList.remove("invisible");//shows welcom section
    document.getElementById("score").classList.add("hidden");//hides score element.
    document.getElementById("bio_next_submit").classList.remove("invisible");
    document.getElementById("geo_next_submit").classList.remove("hidden");

}

function cleareInput() {
    document.getElementById('myInput').value = ''; // Set the value to an empty string
}


// changes the background for the selected element (unused part of a larger project).
function changeBackgroundImage(id){

 let elementId = document.getElementById(id);
 elementId.style.background='url(assets/images/pexels-sadface_100.jpg) no-repeat center center/cover';
}
//function returns array with 5 random numbers (warning!! in final version  need to take 2 paramiters  )
function randomQuestions() {
    let questionsRandomOrder= [];

    while (questionsRandomOrder.length < 5) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        if (!questionsRandomOrder.includes(randomNumber)) {
            wylosowaneLiczby.push(randomNumber);
        }
    }

    return questionsRandomOrder;
}