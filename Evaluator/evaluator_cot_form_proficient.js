// Department Dropdown
const departmentSelect = document.getElementById('department');

// Rating buttons for each question
const ratingButtonsQ1 = document.querySelectorAll('#question1 .rating-button');
const ratingButtonsQ2 = document.querySelectorAll('#question2 .rating-button');
const ratingButtonsQ3 = document.querySelectorAll('#question3 .rating-button');
const ratingButtonsQ4 = document.querySelectorAll('#question4 .rating-button');
const ratingButtonsQ5 = document.querySelectorAll('#question5 .rating-button');
const ratingButtonsQ6 = document.querySelectorAll('#question6 .rating-button');
const ratingButtonsQ7 = document.querySelectorAll('#question7 .rating-button');
const ratingButtonsQ8 = document.querySelectorAll('#question8 .rating-button');
const ratingButtonsQ9 = document.querySelectorAll('#question9 .rating-button');

// Comment textarea
const commentsTextarea = document.getElementById('comments');

// Form buttons
const backButton = document.getElementById('backBtn');
const submitButton = document.getElementById('SubmitBtn');

// Instructions container
const instructionsContainer = document.getElementById('instructions');

// Form ID for submission
const ratingForm = document.getElementById('ratingForm');

// Example of assigning event listeners
// For the "Back" button
backButton.addEventListener('click', function() {
    window.history.back();
});

// For the "Submit" button
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
});

// Example of handling rating button selection
function selectRating(button, questionId) {
    // Deselect previous selections for the given question
    const ratingButtons = document.querySelectorAll(`#${questionId} .rating-button`);
    ratingButtons.forEach(btn => btn.classList.remove('selected'));

    // Add the "selected" class to the clicked button
    button.classList.add('selected');
}


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




//submitting form for proficient
document.getElementById('ratingForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    if (validateForm()) {
        const forms = {};
        
        //All questions
        const questions = document.querySelectorAll('.question-container');

        questions.forEach((questionContainer, index) => {
            const questionText = questionContainer.querySelector('.question').textContent.trim();
            const selectedButton = questionContainer.querySelector('.rating-button.active');
            
            // added to forms object
            if (selectedButton) {
                forms[index + 1] = {
                    question: questionText,
                    selectedRating: selectedButton.textContent
                };
            }
        });

        const department = String(document.getElementById('department').value); //subject selected
        const comment = String(document.getElementById('comments').value);
        console.log(department);
        console.log(comment);
        console.log(forms);  //display forms
        alert('Form submitted successfully!');
    } else {
        alert('Please answer all questions before submitting.');
    }
});










//logout func
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
yesButton.addEventListener('click', async function() {
    try {
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/logout/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data); 
            window.location.href = '../../get-started.html'; 
        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});