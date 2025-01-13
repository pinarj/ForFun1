// Array of people and spin again option
const people = ["Limar", "Luna", "Lin", "Spin Again"];
const quizzes = [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language"], correct: 0 },
    { question: "Which tag is used for paragraphs?", options: ["<p>", "<text>"], correct: 0 },
    { question: "Which tag is used to create links?", options: ["<a>", "<link>"], correct: 0 },
    { question: "Which tag is used to insert an image?", options: ["<img>", "<picture>"], correct: 0 },
    { question: "Which tag is used for the largest heading?", options: ["<h1>", "<h6>"], correct: 0 },
    { question: "Which tag is used to create an ordered list?", options: ["<ol>", "<ul>"], correct: 0 },
    { question: "Which tag is used to create an unordered list?", options: ["<ul>", "<li>"], correct: 0 },
    { question: "Which attribute is used to specify a link's destination?", options: ["href", "src"], correct: 0 },
    { question: "Which attribute is used to specify an image's source?", options: ["src", "alt"], correct: 0 },
    { question: "Which attribute provides alternative text for an image?", options: ["alt", "href"], correct: 0 },
    { question: "Which tag is used to add a table row?", options: ["<tr>", "<td>"], correct: 0 },
    { question: "Which tag is used to add a table cell?", options: ["<td>", "<th>"], correct: 0 },
    { question: "Which tag is used to add a table header cell?", options: ["<th>", "<td>"], correct: 0 },
    { question: "Which tag is used to define a division or section?", options: ["<div>", "<section>"], correct: 0 },
    { question: "Which tag is used to emphasize text?", options: ["<em>", "<strong>"], correct: 0 },
    { question: "Which tag is used to make text bold?", options: ["<strong>", "<em>"], correct: 0 },
    { question: "Which tag is used to make text italic?", options: ["<em>", "<b>"], correct: 0 },
    { question: "Which tag is used to add a line break?", options: ["<br>", "<hr>"], correct: 0 },
    { question: "Which tag is used to add a horizontal rule?", options: ["<hr>", "<br>"], correct: 0 },
    { question: "Which tag is used to add metadata to an HTML document?", options: ["<meta>", "<head>"], correct: 0 }
];


// HTML Elements
const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spin-button');
const quizSection = document.getElementById('quiz-section');
const selectedPerson = document.getElementById('selected-person');
const quizQuestion = document.getElementById('quiz-question');
const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const quizFeedback = document.getElementById('quiz-feedback');

// Event listener for spin button
spinButton.addEventListener('click', spinWheel);

// Function to spin the wheel
function spinWheel() {
    const rotation = Math.floor(Math.random() * 360) + 1080; // 3 full spins + random angle
    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        const selectedIndex = getSelectedIndex(rotation % 360);
        const selectedName = people[selectedIndex];

        // Apply additional effects after selection
        applySelectionEffects(selectedName);

        if (selectedName === "Spin Again") {
            selectedPerson.textContent = "Spin Again! 🎡";
            spinWheel(); // Automatically spin again
        } else {
            selectedPerson.textContent = `${selectedName}, it's your turn!`;
            showQuiz();
        }
    }, 4000);
}

// Function to get the selected index based on angle
function getSelectedIndex(angle) {
    const segmentSize = 360 / people.length; // Segment başına düşen açı
    const index = Math.floor(angle / segmentSize); // Açıyı segmente çevir
    return index % people.length; // Mod alarak segment sınırını aşmayı engelle
}

// Function to apply selection effects
function applySelectionEffects(selectedName) {
    wheel.style.transition = "transform 0.2s ease-in-out";
    wheel.style.transform += "rotate(10deg)"; // Small additional spin
    setTimeout(() => {
        wheel.style.transform += "rotate(-10deg)";
    }, 200);

    // Add blinking effect to the selected person
    selectedPerson.style.animation = "blink 1s infinite alternate";
}

// Function to display a quiz question
function showQuiz() {
    quizSection.style.display = 'block';
    const quiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    quizQuestion.textContent = quiz.question;
    option1.textContent = quiz.options[0];
    option2.textContent = quiz.options[1];

    option1.onclick = () => checkAnswer(quiz, 0);
    option2.onclick = () => checkAnswer(quiz, 1);
}

// Function to check the answer
function checkAnswer(quiz, selected) {
    if (selected === quiz.correct) {
        quizFeedback.textContent = "Correct! 🎉 Well done!";
        quizFeedback.style.color = "green";
    } else {
        quizFeedback.textContent = "Oops! Try again!";
        quizFeedback.style.color = "red";
    }
}
