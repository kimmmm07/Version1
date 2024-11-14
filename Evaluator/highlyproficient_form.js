// Container and Heading
const container = document.querySelector('.container');
const heading = container.querySelector('h1');

// Form Type Dropdown
const formTypeSelect = document.getElementById('formType');

// Proficient Teacher Form
const proficientTeacherForm = document.getElementById('proficient-teacher-form');
const proficientFormIcon = document.getElementById('proficient-form-icon');
const proficientConductedReviews = document.getElementById('proficient-conducted-reviews');
const proficientFullyRespondedReviews = document.getElementById('proficient-fully-responded-reviews');
const proficientNeedsAttention = document.getElementById('proficient-needs-attention');
const proficientResponseRate = document.getElementById('proficient-response-rate');

// Highly Proficient Teacher Form
const highlyProficientTeacherForm = document.getElementById('highly-proficient-teacher-form');
const highlyProficientFormIcon = document.getElementById('highly-proficient-form-icon');
const highlyProficientConductedReviews = document.getElementById('highly-proficient-conducted-reviews');
const highlyProficientFullyRespondedReviews = document.getElementById('highly-proficient-fully-responded-reviews');
const highlyProficientNeedsAttention = document.getElementById('highly-proficient-needs-attention');
const highlyProficientResponseRate = document.getElementById('highly-proficient-response-rate');

// IPCRF Proficient Form
const ipcrfProficientForm = document.getElementById('ipcrf-proficient-form');
const ipcrfProficientFormIcon = document.getElementById('ipcrf-proficient-form-icon');
const ipcrfProficientConductedReviews = document.getElementById('ipcrf-proficient-conducted-reviews');
const ipcrfProficientFullyRespondedReviews = document.getElementById('ipcrf-proficient-fully-responded-reviews');
const ipcrfProficientNeedsAttention = document.getElementById('ipcrf-proficient-needs-attention');
const ipcrfProficientResponseRate = document.getElementById('ipcrf-proficient-response-rate');

// IPCRF Highly Proficient Form
const ipcrfHighlyProficientForm = document.getElementById('ipcrf-highly-proficient-form');
const ipcrfHighlyProficientFormIcon = document.getElementById('ipcrf-highly-proficient-form-icon');
const ipcrfHighlyProficientConductedReviews = document.getElementById('ipcrf-highly-proficient-conducted-reviews');
const ipcrfHighlyProficientFullyRespondedReviews = document.getElementById('ipcrf-highly-proficient-fully-responded-reviews');
const ipcrfHighlyProficientNeedsAttention = document.getElementById('ipcrf-highly-proficient-needs-attention');
const ipcrfHighlyProficientResponseRate = document.getElementById('ipcrf-highly-proficient-response-rate');

// RPMS Proficient Form
const rpmsProficientForm = document.getElementById('rpms-proficient-form');
const rpmsProficientFormIcon = document.getElementById('rpms-proficient-form-icon');
const rpmsProficientConductedReviews = document.getElementById('rpms-proficient-conducted-reviews');
const rpmsProficientFullyRespondedReviews = document.getElementById('rpms-proficient-fully-responded-reviews');
const rpmsProficientNeedsAttention = document.getElementById('rpms-proficient-needs-attention');
const rpmsProficientResponseRate = document.getElementById('rpms-proficient-response-rate');

// RPMS Highly Proficient Form
const rpmsHighlyProficientForm = document.getElementById('rpms-highly-proficient-form');
const rpmsHighlyProficientFormIcon = document.getElementById('rpms-highly-proficient-form-icon');
const rpmsHighlyProficientConductedReviews = document.getElementById('rpms-highly-proficient-conducted-reviews');
const rpmsHighlyProficientFullyRespondedReviews = document.getElementById('rpms-highly-proficient-fully-responded-reviews');
const rpmsHighlyProficientNeedsAttention = document.getElementById('rpms-highly-proficient-needs-attention');
const rpmsHighlyProficientResponseRate = document.getElementById('rpms-highly-proficient-response-rate');

// Section Titles
const classroomObservationToolsTitle = document.querySelector('.section-title');
const individualPerformanceReviewTitle = document.querySelectorAll('.section-title')[1];
const resultsBasedPerformanceTitle = document.querySelectorAll('.section-title')[2];


// Save the selected form type and navigate to the link
function navigateToLink() {
    const formType = document.getElementById('formType').value;
    
    if (formType !== "#") {
        // Save the selected value in localStorage
        localStorage.setItem('selectedFormType', formType);
        
        // Redirect to the selected page
        window.location.href = formType;
    }
}

// On page load, restore the selected form type from localStorage
document.addEventListener("DOMContentLoaded", function () {
    const savedFormType = localStorage.getItem('selectedFormType');
    
    if (savedFormType) {
        // Set the dropdown value to the previously selected option
        document.getElementById('formType').value = savedFormType;
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