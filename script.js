let timer;
let totalSeconds = 10800; // 3 hours in seconds

let quizData = {
    mcqs: [
        { image: "questions/physics_MCQ/1.jpg", options: ["A", "B", "C", "D"], answer: "C" },
        { image: "questions/physics_MCQ/2.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/physics_MCQ/3.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/physics_MCQ/4.jpg", options: ["A", "B", "C", "D"], answer: "C" },
        { image: "questions/physics_MCQ/5.jpg", options: ["A", "B", "C", "D"], answer: "C" },
        { image: "questions/physics_MCQ/6.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/physics_MCQ/7.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/physics_MCQ/8.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/physics_MCQ/9.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/physics_MCQ/10.jpg", options: ["A", "B", "C", "D"], answer: "C" },
        { image: "questions/physics_MCQ/11.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/physics_MCQ/12.jpg", options: ["A", "B", "C", "D"], answer: "C" },
        { image: "questions/physics_MCQ/13.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/physics_MCQ/14.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/physics_MCQ/15.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/physics_MCQ/16.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/physics_MCQ/17.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/physics_MCQ/18.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/physics_MCQ/19.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/physics_MCQ/20.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/chem_mcq/1.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/chem_mcq/2.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/chem_mcq/3.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/chem_mcq/4.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/chem_mcq/5.jpg", options: ["A", "B", "C", "D"], answer: "C" },
        { image: "questions/chem_mcq/6.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/chem_mcq/7.jpg", options: ["A", "B", "C", "D"], answer: "C" },
        { image: "questions/chem_mcq/8.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/chem_mcq/9.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/chem_mcq/10.jpg", options: ["A", "B", "C", "D"], answer: "C" },
        { image: "questions/chem_mcq/11.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/chem_mcq/12.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/chem_mcq/13.jpg", options: ["A", "B", "C", "D"], answer: "C" },
        { image: "questions/chem_mcq/14.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/chem_mcq/15.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/chem_mcq/16.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/chem_mcq/17.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/chem_mcq/18.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/chem_mcq/19.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/chem_mcq/20.jpg", options: ["A", "B", "C", "D"], answer: "C" },
        { image: "questions/maths_mcq/1.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/maths_mcq/2.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/maths_mcq/3.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/maths_mcq/4.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/maths_mcq/5.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/maths_mcq/6.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/maths_mcq/7.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/maths_mcq/8.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/maths_mcq/9.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/maths_mcq/10.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/maths_mcq/11.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/maths_mcq/12.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/maths_mcq/13.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/maths_mcq/14.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/maths_mcq/15.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/maths_mcq/16.jpg", options: ["A", "B", "C", "D"], answer: "D" },
        { image: "questions/maths_mcq/17.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/maths_mcq/18.jpg", options: ["A", "B", "C", "D"], answer: "B" },
        { image: "questions/maths_mcq/19.jpg", options: ["A", "B", "C", "D"], answer: "A" },
        { image: "questions/maths_mcq/20.jpg", options: ["A", "B", "C", "D"], answer: "D" }
    ],
    subjective: [
        { image: "questions/physics_sub/1.jpg", answer: "5" },
        { image: "questions/physics_sub/2.jpg", answer: "3" },
        { image: "questions/physics_sub/3.jpg", answer: "24" },
        { image: "questions/physics_sub/4.jpg", answer: "3" },
        { image: "questions/physics_sub/5.jpg", answer: "1" },
        { image: "questions/chem_sub/1.jpg", answer: "1" },
        { image: "questions/chem_sub/2.jpg", answer: "8" },
        { image: "questions/chem_sub/3.jpg", answer: "14" },
        { image: "questions/chem_sub/4.jpg", answer: "3" },
        { image: "questions/chem_sub/5.jpg", answer: "3" },
        { image: "questions/maths_sub/1.jpg", answer: "107" },
        { image: "questions/maths_sub/2.jpg", answer: "8" },
        { image: "questions/maths_sub/3.jpg", answer: "107" },
        { image: "questions/maths_sub/4.jpg", answer: "107" },
        { image: "questions/maths_sub/5.jpg", answer: "8" }
    ]
};

let responses = {
    mcqs: new Array(quizData.mcqs.length).fill(null),
    subjective: new Array(quizData.subjective.length).fill(null)
};

let currentQuestionIndex = 0;

window.onload = function() {
    startTimer();
    displayQuestion();
};

function startTimer() {
    timer = setInterval(function() {
        if (totalSeconds <= 0) {
            submitQuiz();
        } else {
            totalSeconds--;
            document.getElementById("timer").innerText = formatTime(totalSeconds);
        }
    }, 1000);
}

function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function displayQuestion() {
    const questionIndex = currentQuestionIndex;
    const question = quizData.mcqs[questionIndex] || quizData.subjective[questionIndex - quizData.mcqs.length];
    const questionImage = document.getElementById("questionImage");
    const optionsContainer = document.getElementById("options");

    // Clear previous content
    questionImage.innerHTML = '';
    optionsContainer.innerHTML = '';

    if (question) {
        // Display question image
        if (question.image) {
            questionImage.innerHTML = `<img src="${question.image}" alt="Question Image">`;
        }

        // Display options
        if (question.options) {
            question.options.forEach(option => {
                const checked = responses.mcqs[questionIndex] === option ? 'checked' : '';
                optionsContainer.innerHTML += `
                    <label class="option">
                        <input type="radio" name="mcq${questionIndex}" value="${option}" ${checked} onclick="saveResponse('mcq', ${questionIndex}, this.value)"> ${option}
                    </label>
                `;
            });
        } else {
            // Subjective question (textarea)
            const response = responses.subjective[questionIndex - quizData.mcqs.length] || '';
            optionsContainer.innerHTML = `
                <textarea rows="4" cols="50" oninput="saveResponse('subjective', ${questionIndex - quizData.mcqs.length}, this.value)">${response}</textarea>
            `;
        }
    }

    // Navigation button visibility
    document.getElementById("prevButton").style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById("nextButton").style.display = currentQuestionIndex === (quizData.mcqs.length + quizData.subjective.length - 1) ? 'none' : 'inline-block';
}

function saveResponse(type, index, value) {
    if (type === 'mcq') {
        responses.mcqs[index] = value;
    } else if (type === 'subjective') {
        responses.subjective[index] = value;
    }
}


function nextQuestion() {
    if (currentQuestionIndex < (quizData.mcqs.length + quizData.subjective.length - 1)) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function submitQuiz() {
    clearInterval(timer);

    const totalAttempted = responses.mcqs.filter(response => response !== null).length +
        Math.min(responses.subjective.filter(response => response !== null && response.trim() !== "").length, 15);

    let totalMarks = 0;

    // Calculate MCQ results
    responses.mcqs.forEach((response, index) => {
        if (response !== null) {
            totalMarks += response === quizData.mcqs[index].answer ? 4 : -1;
        }
    });

    // Calculate Subjective results
    let subjectiveAttempted = 0;
    responses.subjective.forEach((response, index) => {
        if (response !== null && response.trim() !== "") {
            subjectiveAttempted++;
            if (subjectiveAttempted <= 15) {
                totalMarks += response.trim().toLowerCase() === quizData.subjective[index].answer.toLowerCase() ? 4 : -1;
            }
        }
    });

    // Confirm submission
    const confirmationMessage = `You have attempted ${totalAttempted} questions. Are you sure you want to submit the quiz?`;
    if (window.confirm(confirmationMessage)) {
        // Display results
        document.getElementById("quizForm").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("totalAttempted").innerText = `Total Attempted: ${totalAttempted}`;
        document.getElementById("totalMarks").innerText = `Total Marks: ${totalMarks}`;

        const username = localStorage.getItem("quizUsername");
        downloadResponses();
    } else {
        startTimer();
    }

    function downloadResponses() {
        // Create CSV content
        let csvContent = "data:text/csv;charset=utf-8,";
        
        // Add headers
        csvContent += "Type,Question No.,Your Response,Correct Answer\n";
        
        // Add MCQ responses
        responses.mcqs.forEach((response, index) => {
            const correctAnswer = quizData.mcqs[index].answer;
            csvContent += `MCQ,${index + 1},${response || ''},${correctAnswer}\n`;
        });
        
        // Add Subjective responses
        responses.subjective.forEach((response, index) => {
            const correctAnswer = quizData.subjective[index].answer;
            csvContent += `Subjective,${index + 1},${response || ''},${correctAnswer}\n`;
        });
        
        // Encode CSV content
        const encodedUri = encodeURI(csvContent);
        
        // Create a temporary link element
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "response_with_answers.csv");
        document.body.appendChild(link);
        
        // Trigger the download
        link.click();
        
        // Clean up
        document.body.removeChild(link);
    }
    
    
    
    
}
