// const logoutButton = document.getElementById('logout-nav');  // Logout button
// const logoutModal = document.getElementById('logoutModal');
// const yesButton = document.querySelector('.yes-btn');
// const noButton = document.querySelector('.no-btn');

// // Show modal when logout is clicked
// logoutButton.addEventListener('click', function(event) {
//     event.preventDefault();  // Prevent default logout behavior
//     logoutModal.classList.remove('hidden');  // Show modal by removing 'hidden' class
// });

// // Hide modal when "No" is clicked
// noButton.addEventListener('click', function() {
//     logoutModal.classList.add('hidden');  // Hide modal by adding 'hidden' class
// });

// // Redirect when "Yes" is clicked
// yesButton.addEventListener('click', async function() {
//     try {
        
//         const response = await fetch('https://bnahs.pythonanywhere.com/api/user/logout/', {
//             method: 'POST',
//             headers: {
//                 'X-Requested-With': 'XMLHttpRequest',
                
//             },
//             credentials: 'include',
//         });

//         const data = await response.json();
//         if (response.ok) {
//             console.log("Success Data : ", data); 
//             window.location.href = '../../get-started.html'; 
//         } else {
//             console.log("Error Data : ", data);
//         }
//     } catch (error) {
//         console.error("Error during fetch:", error);
//     }
// });




// // Function to handle rating button selection
// function selectRating(button) {
//     const buttons = button.closest('.rating-scale').querySelectorAll('.rating-button');
//     buttons.forEach(btn => btn.classList.remove('active')); // Remove 'active' class from all buttons
//     button.classList.add('active'); // Add 'active' class to the clicked button
// }

// // Validation function to check if all questions are answered
// function validateForm() {
//     const questions = document.querySelectorAll('.question-container');
//     let allAnswered = true;

//     questions.forEach(question => {
//         const isAnswered = question.querySelector('.rating-button.active'); // Check if there's an active rating button
//         if (!isAnswered) {
//             allAnswered = false; // If any question is unanswered, set allAnswered to false
//         }
//     });

//     return allAnswered; // Return whether all questions are answered or not
// }

// // Event listener for form submission
// document.getElementById('ratingForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent the default form submission behavior

//     if (validateForm()) { // Check if the form is valid (all questions answered)
//         alert('Form submitted successfully!'); // Notify user of successful submission
//         // You can add additional form submission logic here (e.g., sending data via AJAX)
//     } else {
//         alert('Please answer all questions before submitting.'); // Notify user if there are unanswered questions
//     }
// });

// // Event listeners for each rating button
// const ratingButtons = document.querySelectorAll('.rating-button');
// ratingButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         selectRating(button); // Handle rating button selection
//     });
// });

// // Optional: go back functionality for a back button
// document.getElementById('backBtn').addEventListener('click', function() {
//     window.location.href = 'admin-dashboard-form.html'; // Redirect to the specified page
// });


