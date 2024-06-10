//set questions and 4 answers for each, only one correct.
const questionsBio =b[
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
   c         4:"answer3"
        },
        correctAnswer: "3"
    }
    
];

const questionsGeo =b[
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





// Wait for DOM to finish loading , get buttons and add events listeners to them


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

