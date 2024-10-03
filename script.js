const quizData = [
    {
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Home Tool Markup Language",
        d: "HyperTool Markup Language",
        correct: "A"
    },
    {
        question: "Which HTML element is used for creating hyperlinks?",
        a: "<link>",
        b: "<href>",
        c: "<a>",
        d: "<hyper>",
        correct: "C"
    },
    {
        question: "Which of the following is an HTML5 semantic element?",
        a: "<div>",
        b: "<span>",
        c: "<section>",
        d: "<big>",
        correct: "C"
    },
    {
        question: "What is the purpose of the <meta> tag in HTML?",
        a: "To link external resources",
        b: "To display an image",
        c: "To create a table",
        d: "To provide metadata like description and keywords",
        correct: "D"
    },
    {
        question: "Which attribute is used to open a link in a new tab?",
        a: "href='_newtab'",
        b: "target='_blank'",
        c: "target='_new'",
        d: "href='_tab'",
        correct: "B"
    },
    {
        question: "What is the default HTML tag used to create a numbered list?",
        a: "<ul>",
        b: "<list>",
        c: "<ol>",
        d: "<li>",
        correct: "C"
    },
    {
        question: "Which HTML tag is used for adding an image?",
        a: "<picture>",
        b: "<src>",
        c: "<figure>",
        d: "<img>",
        correct: "D"
    },
    {
        question: "What does the 'alt' attribute in <img> tag represent?",
        a: "Image alignment",
        b: "Alternative text for the image",
        c: "Image size",
        d: "Image title",
        correct: "B"
    },
    {
        question: "Which tag is used to create a table in HTML?",
        a: "<tab>",
        b: "<td>",
        c: "<table>",
        d: "<th>",
        correct: "C"
    },
    {
        question: "Which HTML tag is used to define the document's title?",
        a: "<head>",
        b: "<meta>",
        c: "<header>",
        d: "<title>",
        correct: "D"
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionTitle = document.getElementById('question-title');
const questionText = document.getElementById('question-text');
const options = document.querySelectorAll('.option input');
const submitButton = document.getElementById('submit');
const resultDiv = document.getElementById('result');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestionIndex];
    questionTitle.textContent = `Question ${currentQuestionIndex + 1}/10`;
    questionText.textContent = currentQuizData.question;
    options[0].nextElementSibling.textContent = currentQuizData.a;
    options[1].nextElementSibling.textContent = currentQuizData.b;
    options[2].nextElementSibling.textContent = currentQuizData.c;
    options[3].nextElementSibling.textContent = currentQuizData.d;
}

function getSelectedAnswer() {
    let answer = undefined;
    options.forEach(option => {
        if (option.checked) {
            answer = option.value;
        }
    });
    return answer;
}

function resetOptions() {
    options.forEach(option => option.checked = false);
}

submitButton.addEventListener('click', function() {
    const answer = getSelectedAnswer();
    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            alert('Correct!');
            score += 5; // 5 marks for each correct answer
        } else {
            alert('Incorrect!');
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            // Determine the feedback message with emojis based on the score
            let feedbackMessage;
            if (score >= 50) {
                feedbackMessage = `Congratulations! 🎉 Your score is ${score}/50. 😊`;
            } else if (score >= 25) {
                feedbackMessage = `Good effort! Your score is ${score}/50. 👍`;
            } else {
                feedbackMessage = `You did your best! Your score is ${score}/50. 😔`;
            }

            resultDiv.textContent = feedbackMessage;
            submitButton.disabled = true;
        }
    } else {
        alert('Please select an answer.');
    }
    resetOptions();
});



