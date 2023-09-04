// nb-56+%=
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {text:"Hyper Transfer Markup Language", correct:false},
            {text:"Hyperlink and Text Markup Language", correct:false},
            {text:"Hyper Text Markup Language", correct:true},
            {text:"Hyperlink Text Makeup Language", correct:false}
        ]
    },

    {
        question: "What is the result of 2 + 2 * 3?",
        answers: [
            {text:"4", correct:false},
            {text:"8", correct:true},
            {text:"7", correct:false},
            {text:"10", correct:false}
        ]
    },

    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text:"Mars", correct:false},
            {text:"Earth", correct:false},
            {text:"Venus", correct:false},
            {text:"Jupiter", correct:true}
        ]
    },

    {
        question: "What is the capital of France?",
        answers: [
            {text:"Paris", correct:true},
            {text:"Berlin", correct:false},
            {text:"Madrid", correct:false},
            {text:"London", correct:false}
        ]
    },

    {
        question: "In JavaScript, how do you declare a variable?",
        answers: [
            {text:"const", correct:false},
            {text:"int", correct:false},
            {text:"let", correct:true},
            {text:"var", correct:false}
        ]
    },

    {
        question: " What is a closure in JavaScript?",
        answers: [
            {text:"A function that has no return statement.", correct:false},
            {text:"A way to create private variables in a function.", correct:true},
            {text:"A method for closing browser tabs.", correct:false},
            {text:"A data type in JavaScript.", correct:false}
        ]
    },

    {
        question: "Which of the following is not a valid HTTP status code?",
        answers: [
            {text:"200 OK", correct:false},
            {text:"404 Not Found", correct:false},
            {text:" 500 Internal Server Error", correct:false},
            {text:"300 Redirection", correct:true}
        ]
    },



]

// nb-56+%=

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-button");
const nextButton = document.querySelector("#next-btn");


let currentQuestionIndex = 0;
let scores = 0;

function startQuiz(){
    let currentQuestionIndex = 0;
    let scores = 0;
    nextButton.innerHTML = "next"
    showQuestion()
}

