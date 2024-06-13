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
            if (this.getAttribute("id") === "submit") {
                submitAnswer();
                alert("You clicked Submit!");
            } else {
                let quizType = this.getAttribute("id");
                startQuize(quizType);

                alert(`You clicked ${quizType}`);
            }
        });
    }

    //startQuize("geografi");

});




// Start quiz function , takes a parameter to select the appropriate quiz.

function startQuize(quizType){
    let correctAnswer = document.getElementById("correct");//to be check.

    //if geography
if(quizType === "game_geography"){
    document.getElementById("game_geography").classList.add("hidden");
    document.getElementById("question_area").style.backgroundColor="lightblue"; 
    loadGeoQuestions();

}else if(quizType === "game_biology"){
    document.getElementById("game_biology").classList.add("hidden");
    document.getElementById("question_area").style.backgroundColor="lightgray";
   
    domi = rendomNumber();
    console.log(domi);
    loadBioQuestions(domi);
}else{
    alert(`something went wrong, please try again`);
    resetQuize();
}

}

// 2 functions to display(load) questions for diferent quiz type.

function loadGeoQuestions(){
    


}

function loadBioQuestions(){
 document.getElementById("question").innerHTML=questionsBio[2].question;
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
      let rand = Math.round(Math.random()*(questionNumber-1))+1;
      let exist=false;
      //if number exist in array numbers , get new number.
      for (let j=0;j<numbers.length;j++) if (numbers[j]===rand) {exist=true;}
      if (rand) {i--;} else {numbers[i]=rand;}
    }
    return numbers;  
}



