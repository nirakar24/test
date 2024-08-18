function startQuiz() {
    const username = document.getElementById("username").value;
    if (username) {
        localStorage.setItem("quizUsername", username);
        window.location.href = "quiz.html"; // Redirect to the quiz page
    } else {
        alert("Please enter your username.");
    }
}
