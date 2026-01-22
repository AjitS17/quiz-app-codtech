document.addEventListener("DOMContentLoaded", function () {

    const quizData = [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language"
            ],
            correct: 0
        },
        {
            question: "Which language is used for styling web pages?",
            options: ["HTML", "JQuery", "CSS", "XML"],
            correct: 2
        },
        {
            question: "Which is not a JavaScript framework?",
            options: ["React", "Angular", "Vue", "Django"],
            correct: 3
        }
    ];

    const questionEl = document.getElementById("question");
    const optionsEls = document.querySelectorAll(".option");
    const feedbackEl = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");
    const scoreEl = document.getElementById("score");

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        feedbackEl.textContent = "";
        nextBtn.style.display = "none";

        const currentData = quizData[currentQuestion];
        questionEl.textContent = currentData.question;

        optionsEls.forEach((button, index) => {
            button.textContent = currentData.options[index];
            button.disabled = false;
            button.style.backgroundColor = "#3498db";
        });
    }

    optionsEls.forEach((button, index) => {
        button.addEventListener("click", function () {
            const correctIndex = quizData[currentQuestion].correct;

            if (index === correctIndex) {
                button.style.backgroundColor = "green";
                feedbackEl.textContent = "Correct!";
                score++;
            } else {
                button.style.backgroundColor = "red";
                feedbackEl.textContent = "Wrong!";
                optionsEls[correctIndex].style.backgroundColor = "green";
            }

            scoreEl.textContent = "Score: " + score;

            optionsEls.forEach(btn => btn.disabled = true);
            nextBtn.style.display = "block";
        });
    });

    nextBtn.addEventListener("click", function () {
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            questionEl.textContent = "Quiz Completed!";
            document.getElementById("options").style.display = "none";
            feedbackEl.textContent =
                "Final Score: " + score + "/" + quizData.length;
            nextBtn.style.display = "none";
        }
    });

    loadQuestion();
});
