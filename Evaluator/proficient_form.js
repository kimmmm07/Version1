
// Form Type selection
const formTypeSelect = document.getElementById("formType");


// Form Details
const reviewsProficient = document.getElementById("reviews-proficient");
const reviewsHighlyProficient = document.getElementById("reviews-highlyproficient");
const reviewsIpcrfProficient = document.getElementById("reviews-ipcrf-proficient");
const reviewsIpcrfHighlyProficient = document.getElementById("reviews-ipcrf-highlyproficient");
const reviewsRpmsProficient = document.getElementById("reviews-rpms-proficient");
const reviewsRpmsHighlyProficient = document.getElementById("reviews-rpms-highlyproficient");



// Function to navigate to the selected form
function navigateToLink() {
    const selectedForm = formTypeSelect.value;
    if (selectedForm !== "#") {
        window.location.href = selectedForm;
    }
}





// Container and title
const container = document.querySelector('.container');
const evaluationTitle = document.getElementById('evaluation-title');

// Select form dropdown
const formType = document.getElementById('formType');

// Section Titles
const sectionTitleCot = document.getElementById('section-title-cot');
const sectionTitleIpcrf = document.getElementById('section-title-ipcrf');
const sectionTitleRpms = document.getElementById('section-title-rpms');

// Form Cards and their details
const formCardProficient = document.getElementById('form-card-proficient');
const formDetailsProficient = document.getElementById('form-details-proficient');
const conductedReviewsProficient = document.getElementById('conducted-reviews-proficient');
const fullResponseCountProficient = document.getElementById('full-response-count-proficient');
const attentionCountProficient = document.getElementById('attention-count-proficient');
const responseRateProficient = document.getElementById('response-rate-proficient');
const responsePercentageProficient = document.getElementById('response-percentage-proficient');

const formCardHighlyProficient = document.getElementById('form-card-highlyproficient');
const formDetailsHighlyProficient = document.getElementById('form-details-highlyproficient');
const conductedReviewsHighlyProficient = document.getElementById('conducted-reviews-highlyproficient');
const fullResponseCountHighlyProficient = document.getElementById('full-response-count-highlyproficient');
const attentionCountHighlyProficient = document.getElementById('attention-count-highlyproficient');
const responseRateHighlyProficient = document.getElementById('response-rate-highlyproficient');
const responsePercentageHighlyProficient = document.getElementById('response-percentage-highlyproficient');

const formCardIpcrfProficient = document.getElementById('form-card-ipcrf-proficient');
const formDetailsIpcrfProficient = document.getElementById('form-details-ipcrf-proficient');
const conductedReviewsIpcrfProficient = document.getElementById('conducted-reviews-ipcrf-proficient');
const fullResponseCountIpcrfProficient = document.getElementById('full-response-count-ipcrf-proficient');
const attentionCountIpcrfProficient = document.getElementById('attention-count-ipcrf-proficient');
const responseRateIpcrfProficient = document.getElementById('response-rate-ipcrf-proficient');
const responsePercentageIpcrfProficient = document.getElementById('response-percentage-ipcrf-proficient');

const formCardIpcrfHighlyProficient = document.getElementById('form-card-ipcrf-highlyproficient');
const formDetailsIpcrfHighlyProficient = document.getElementById('form-details-ipcrf-highlyproficient');
const conductedReviewsIpcrfHighlyProficient = document.getElementById('conducted-reviews-ipcrf-highlyproficient');
const fullResponseCountIpcrfHighlyProficient = document.getElementById('full-response-count-ipcrf-highlyproficient');
const attentionCountIpcrfHighlyProficient = document.getElementById('attention-count-ipcrf-highlyproficient');
const responseRateIpcrfHighlyProficient = document.getElementById('response-rate-ipcrf-highlyproficient');
const responsePercentageIpcrfHighlyProficient = document.getElementById('response-percentage-ipcrf-highlyproficient');

const formCardRpmsProficient = document.getElementById('form-card-rpms-proficient');
const formDetailsRpmsProficient = document.getElementById('form-details-rpms-proficient');
const conductedReviewsRpmsProficient = document.getElementById('conducted-reviews-rpms-proficient');
const fullResponseCountRpmsProficient = document.getElementById('full-response-count-rpms-proficient');
const attentionCountRpmsProficient = document.getElementById('attention-count-rpms-proficient');
const responseRateRpmsProficient = document.getElementById('response-rate-rpms-proficient');
const responsePercentageRpmsProficient = document.getElementById('response-percentage-rpms-proficient');

const formCardRpmsHighlyProficient = document.getElementById('form-card-rpms-highlyproficient');
const formDetailsRpmsHighlyProficient = document.getElementById('form-details-rpms-highlyproficient');
const conductedReviewsRpmsHighlyProficient = document.getElementById('conducted-reviews-rpms-highlyproficient');
const fullResponseCountRpmsHighlyProficient = document.getElementById('full-response-count-rpms-highlyproficient');
const attentionCountRpmsHighlyProficient = document.getElementById('attention-count-rpms-highlyproficient');
const responseRateRpmsHighlyProficient = document.getElementById('response-rate-rpms-highlyproficient');
const responsePercentageRpmsHighlyProficient = document.getElementById('response-percentage-rpms-highlyproficient');



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
