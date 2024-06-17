

//questions and 4 answers with one correct

const questionsBio = [
    {
        question: "What land animal is the fastest in the world?",
        1:"Giraffe",
        2:"wolf",
        3:"Cheetah",
        4:"Gazelles",
        correctAnswer: "3",
    },
    {
        question: "What kind of tree is the tallest in the world?",
        1:"Sequoia",
        2:"Oak",
        3:"Pine",
        4:"Bamboo",
        correctAnswer: "1",
    },
    {
        question: "Which of the following animals is not a mammal?",
        1:"Elephant",
        2:"Tiger",
        3:"Dolphin",
        4:"Turtle",
        correctAnswer: "4",
    },
    {
        question: "What animal is the largest on earth?",
        1:"Bison",
        2:"Giraffe",
        3:"Elephant",
        4:"Blue whale",
        correctAnswer: "4",
    }
    
];

const questionsGeo = [
    {
        question: "What mountain is the highest in the world?",
        a:"Sagarmatha",
        b:"Lhotse",
        c:"K2",
        d:"Manaslu",
        correctAnswer: "c",
    },
    {
        question: "Which of the following rivers is the longest?",
        a:"Brahmaputra",
        b:"Mississipi",
        c:"Missouri",
        d:"Ganges",
        correctAnswer: "c",
    },
    {
        question: "How many continents are there on earth?",
        a:"5",
        b:"8",
        c:"3",
        d:"7",
        correctAnswer: "d",
    },
    {
        question: "Which city is the capital of the Republic of Ireland?",
        a:"Cork",
        b:"Belfast",
        c:"Dublin",
        d:"Golway",
        correctAnswer: "c",
    }
    
];


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "start") {
                alert(`You clicked start`);
                document.getElementById("welcome").classList.add("invisible");
                document.getElementById("select_game").classList.remove("invisible");
            } else if (this.getAttribute("id") === "submit") {
                clicked();
                alert("You clicked Submit!");
            } else {
                let quizType = this.getAttribute("id");
                startQuize(quizType);

                alert(`You clicked ${quizType}`);
            }
        });
    }


});
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



function startQuize(quizType){
    
    //if geography
if(quizType === "game_geography"){
    document.getElementById("select_game").classList.add("invisible");
    //document.getElementById("game_geography").classList.add("hidden");
    document.getElementById("question_area").classList.remove("invisible"); 
    loadGeoQuestions();

}else if(quizType === "game_biology"){
    document.getElementById("game_biology").classList.add("hidden");
    document.getElementById("question_area").style.backgroundColor="lightgray";
   
    domi =rendomNumber();
    loadBioQuestions(domi[1]);
}else{
    alert(`something went wrong, please try again`);
    resetQuize();
}

}

// 2 functions to display(load) questions for diferent quiz type.
let currentQuiz = 0; //need to add rendom numbers 
let score = 0;

function loadGeoQuestions(){
    deselectAnswers();

    const currentQuizData = questionsGeo[currentQuiz]

    questionElement.innerText = currentQuizData.question
    
    answer1.innerText = currentQuizData.a
    answer2.innerText = currentQuizData.b
    answer3.innerText = currentQuizData.c
    answer4.innerText = currentQuizData.d

}

function loadBioQuestions(){

 deselectAnswers();

    const currentQuizData = questionsBio[currentQuiz]

    questionElement.innerText = currentQuizData.question
    
    answer1.innerText = currentQuizData.a
    answer2.innerText = currentQuizData.b
    answer3.innerText = currentQuizData.c
    answer4.innerText = currentQuizData.d
}

//Check ansver function, to check answer and increase conter for correct or inncorect.

function submitAnswer(){


}

function resetQuize(){};

//rendom number function for  placing questions in random order

function rendomNumber(){
    //number of questions to be drawn.
    let questionNumber = 4;
    //number of questions available.
    let questionFrom = 4;
     
    //new array to hold qustions numbers.
    let numbers=new Array();

    for (let i=0;i<questionNumber.length;i++) {
      let rand = Math.round(Math.random()*(questionFrom-1))+1;
      let exist=false;
      //if number exist in array numbers , get new number.
      for (let j=0;j<numbers.length;j++) if (numbers[j]===rand) {exist=true;}
      if (rand) {i--;} else {numbers[i]=rand;}
    }
    return numbers;
}



