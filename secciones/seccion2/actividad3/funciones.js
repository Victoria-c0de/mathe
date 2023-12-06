const questions = [
    {
        question: "¿Cuál es la función trigonométrica que representa la relación entre el lado opuesto y la hipotenusa en un triángulo rectángulo?",
        options: ["Seno", "Coseno", "Tangente", "Cotangente"],
        correctAnswer: "Seno"
    },
    {
        question: "Si el seno de un ángulo agudo en un triángulo rectángulo es 0.6, ¿cuál es el coseno de ese ángulo?",
        options: ["0.4", "0.6", "0.8", "1.0"],
        correctAnswer: "0.8"
    },
    {
        question: "¿Cuál es la relación fundamental de la trigonometría que se expresa como 'sen^2(θ) + cos^2(θ) = 1'?",
        options: ["Identidad pitagórica", "Identidad recíproca", "Fórmula de suma de ángulos", "Ley de senos"],
        correctAnswer: "Identidad pitagórica"
    },
    {
        question: "En un triángulo rectángulo, si el cateto opuesto mide 8 y el cateto adyacente mide 15, ¿cuál es el valor del seno del ángulo agudo?",
        options: ["0.53", "0.67", "0.72", "0.80"],
        correctAnswer: "0.53"
    },
    {
        question: "Si el coseno de un ángulo es -0.8, ¿en qué cuadrante se encuentra el ángulo?",
        options: ["Primer cuadrante", "Segundo cuadrante", "Tercer cuadrante", "Cuarto cuadrante"],
        correctAnswer: "Segundo cuadrante"
    },
    {
        question: "¿Cuál es la función trigonométrica que representa la relación entre el lado adyacente y la hipotenusa en un triángulo rectángulo?",
        options: ["Seno", "Coseno", "Tangente", "Cotangente"],
        correctAnswer: "Coseno"
    },
    {
        question: "Si el ángulo en un triángulo rectángulo es de 30 grados, ¿cuál es el valor de la tangente de ese ángulo?",
        options: ["0.5", "√3/2", "1/√3", "2/√3"],
        correctAnswer: "√3/3"
    },
    {
        question: "¿Cuál es la relación trigonométrica que se expresa como 'tan(θ) = sen(θ)/cos(θ)'?",
        options: ["Identidad pitagórica", "Identidad recíproca", "Identidad de la tangente", "Ley de cosenos"],
        correctAnswer: "Identidad de la tangente"
    },
    {
        question: "En un triángulo rectángulo, si la hipotenusa mide 10 y el seno del ángulo agudo es 0.6, ¿cuánto mide el cateto opuesto?",
        options: ["3", "6", "7", "8"],
        correctAnswer: "6"
    },
    {
        question: "¿Cuál es la función trigonométrica que representa la relación entre el lado opuesto y el lado adyacente en un triángulo rectángulo?",
        options: ["Seno", "Coseno", "Tangente", "Cotangente"],
        correctAnswer: "Tangente"
    },
    // Pregunta adicional sobre la distancia Tierra-Marte
    {
        question: "¿Cuál es la distancia promedio entre la Tierra y Marte en millones de kilómetros?",
        options: ["75", "100", "225", "300"],
        correctAnswer: "225"
    }
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultModal = new bootstrap.Modal(document.getElementById('result-modal'), { backdrop: 'static' });
const modalScoreText = document.getElementById("modal-score-text");
const modalAnswersComparisonList = document.getElementById("modal-answers-comparison-list");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "btn btn-outline-primary me-2";
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    userAnswers.push({ question: currentQuestion.question, userAnswer: selectedOption });

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    modalScoreText.innerText = `¡Has respondido ${score} preguntas correctamente de ${questions.length}!`;

    userAnswers.forEach((userAnswer, index) => {
        const listItem = document.createElement("tr");

        const questionCell = document.createElement("td");
        questionCell.textContent = userAnswer.question;

        const userAnswerCell = document.createElement("td");
        userAnswerCell.textContent = userAnswer.userAnswer;

        const correctAnswerCell = document.createElement("td");
        correctAnswerCell.textContent = questions[index].correctAnswer;

        listItem.appendChild(questionCell);
        listItem.appendChild(userAnswerCell);
        listItem.appendChild(correctAnswerCell);

        modalAnswersComparisonList.appendChild(listItem);
    });

    resultModal.show();
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Mostrar la primera pregunta al cargar la página
showQuestion();

