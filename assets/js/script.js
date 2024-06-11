// setings some variable.
//const question = document.querySelector('#question');

//varible with all answers for question.

//const answer = Arrayfrom(document.querySelectorAll(".p_answer"));







//set questions and 4 answers for each, only one correct.
const questionsBio = [
    {
        question: "What animal is the fastest in the world?",
        answers: {
            1:"answer1",
            2:"answer2",
            3:"answer3",
            4:"answer3"
        },
        correctAnswer: "3"
    },
    {
        question: "Question2",
        answers: {
            1:"answer1",
            2:"answer2",
            3:"answer3",
            4:"answer3"
        },
        correctAnswer: "3"
    },
    {
        question: "Question2",
        answers: {
            1:"answer1",
            2:"answer2",
            3:"answer3",
            4:"answer3"
        },
        correctAnswer: "3"
    },
    {
        question: "Question2",
        answers: {
            1:"answer1",
            2:"answer2",
            3:"answer3",
            4:"answer3"
        },
        correctAnswer: "3"
    }
    
];

const questionsGeo = [
    {
        question: "Question1",
        answers: {
            1:"answer1",
            2:"answer2",
            3:"answer3",
            4:"answer3"
        },
        correctAnswer: "3"
    },
    {
        question: "Question1",
        answers: {
            1:"answer1",
            2:"answer2",
            3:"answer3",
            4:"answer3"
        },
        correctAnswer: "3"
    },
    {
        question: "Question1",
        answers: {
            1:"answer1",
            2:"answer2",
            3:"answer3",
            4:"answer3"
        },
        correctAnswer: "3"
    },
    {
        question: "Question1",
        answers: {
            1:"answer1",
            2:"answer2",
            3:"answer3",
            4:"answer3"
        },
        correctAnswer: "3"
    }
    
];





// Wait for DOM to finish loading , get buttons and add events listeners to them.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }

    startQuize("geografi");

});




// Start quiz function , takes a parameter to select the appropriate quiz.

function startQuize(quizType){
// if Geo
loadGeoQuestions();
// else
loadBioQuestions();
}



// 2 functions to display(load) questions for diferent quiz type.

function loadGeoQuestions(){

}

function loadBioQuestions(){

}

//Check ansver function, to check answer and increase conter for correct or inncorect.

function checkAnswer(){

}

