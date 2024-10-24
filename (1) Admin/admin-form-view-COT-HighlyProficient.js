// Function to handle rating button selection
function selectRating(button) {
    const buttons = button.closest('.rating-scale').querySelectorAll('.rating-button');
    buttons.forEach(btn => btn.classList.remove('active')); // Remove 'active' class from all buttons
    button.classList.add('active'); // Add 'active' class to the clicked button
}

// Validation function to check if all questions are answered
function validateForm() {
    const questions = document.querySelectorAll('.question-container');
    let allAnswered = true;

    questions.forEach(question => {
        const isAnswered = question.querySelector('.rating-button.active'); // Check if there's an active rating button
        if (!isAnswered) {
            allAnswered = false; // If any question is unanswered, set allAnswered to false
        }
    });

    return allAnswered; // Return whether all questions are answered or not
}

// Event listener for form submission
document.getElementById('ratingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    if (validateForm()) { // Check if the form is valid (all questions answered)
        alert('Form submitted successfully!'); // Notify user of successful submission
        // You can add additional form submission logic here (e.g., sending data via AJAX)
    } else {
        alert('Please answer all questions before submitting.'); // Notify user if there are unanswered questions
    }
});

// Event listeners for each rating button
const ratingButtons = document.querySelectorAll('.rating-button');
ratingButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectRating(button); // Handle rating button selection
    });
});

// Optional: go back functionality for a back button
document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'admin-dashboard-form.html'; // Redirect to the specified page
});
