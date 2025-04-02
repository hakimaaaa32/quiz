let currentQuestionIndex = 0; 
const questions = [
    
    {
        question: " Qui a écrit la pièce de théâtre'Roméo et Juliette' ?",
        options: ["William Shakespeare", "Émile Zola", "Molière", "Balzac"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
        correctAnswer: "Pacifique"
    },
    
    {
        question: "Quel est le symbole chimique de l'or ?",
        options: ["Au", "o", "fe", "he"],
        correctAnswer: "Au"
    }
];

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;

    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.disabled = false; 
    });

    document.getElementById('result').textContent = ''; 
}

function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    const resultContainer = document.getElementById('result');
    
    if (answer === question.correctAnswer) {
        resultContainer.textContent = 'Bonne réponse ! 🎉';
        resultContainer.style.color = 'green';
    } else {
        resultContainer.textContent = 'Mauvaise réponse. Essayez encore ! ❌';
        resultContainer.style.color = 'red';
    }

    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(button => {
        button.disabled = true;
    });

   
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById('next-button').style.display = 'none'; 
    } else {
        document.getElementById('result').textContent = 'Félicitations, vous avez terminé le quiz ! 🎉';
        document.getElementById('next-button').style.display = 'none'; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(); 
    document.getElementById('next-button').style.display = 'none'; 
});
