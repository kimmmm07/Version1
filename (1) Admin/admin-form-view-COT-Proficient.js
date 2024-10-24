function selectRating(button, question) {
    // Get all buttons in the same question group
    const buttons = button.parentNode.querySelectorAll('.rating-button');
    
    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add 'active' class to the clicked button
    button.classList.add('active');
}

// Check if all questions have been answered
function validateForm() {
    const questions = document.querySelectorAll('.question-container');
    let allAnswered = true;

    questions.forEach(question => {
        // Check if any button in the current question is active
        const isAnswered = question.querySelector('.rating-button.active');
        if (!isAnswered) {
            allAnswered = false;
        }
    });

    return allAnswered;
}

document.getElementById('backBtn').addEventListener('click', function() {
    window.history.back();
});

document.getElementById('ratingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission by default
    if (validateForm()) {
        alert('Form submitted successfully!');
        // Add logic for form submission here (e.g., AJAX request)
    } else {
        alert('Please answer all questions before submitting.');
    }
});
