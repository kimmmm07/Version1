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

// Modal logic
const logoutButton = document.getElementById('logoutLink');  // Logout button
const logoutModal = document.getElementById('logoutModal');
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Show modal when logout is clicked
logoutButton.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default logout behavior
    logoutModal.classList.remove('hidden');  // Show modal by removing 'hidden' class
});

// Hide modal when "No" is clicked
noButton.addEventListener('click', function() {
    logoutModal.classList.add('hidden');  // Hide modal by adding 'hidden' class
});

// Redirect when "Yes" is clicked
yesButton.addEventListener('click', function() {
    window.location.href = 'logout_page.html';  // Replace with actual logout URL
});