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

const conductedReviewsProficient = document.getElementById('conducted-reviews-proficient');
const fullResponseCountProficient = document.getElementById('full-response-count-proficient');
const attentionCountProficient = document.getElementById('attention-count-proficient');
const responsePercentageProficient = document.getElementById('response-percentage-proficient');

const conductedReviewsHighlyProficient = document.getElementById('conducted-reviews-highlyproficient');
const fullResponseCountHighlyProficient = document.getElementById('full-response-count-highlyproficient');
const attentionCountHighlyProficient = document.getElementById('attention-count-highlyproficient');
const responsePercentageHighlyProficient = document.getElementById('response-percentage-highlyproficient');

const conductedReviewsIpcrfProficient = document.getElementById('conducted-reviews-ipcrf-proficient');
const fullResponseCountIpcrfProficient = document.getElementById('full-response-count-ipcrf-proficient');
const attentionCountIpcrfProficient = document.getElementById('attention-count-ipcrf-proficient');
const responsePercentageIpcrfProficient = document.getElementById('response-percentage-ipcrf-proficient');

const conductedReviewsIpcrfHighlyProficient = document.getElementById('conducted-reviews-ipcrf-highlyproficient');
const fullResponseCountIpcrfHighlyProficient = document.getElementById('full-response-count-ipcrf-highlyproficient');
const attentionCountIpcrfHighlyProficient = document.getElementById('attention-count-ipcrf-highlyproficient');
const responsePercentageIpcrfHighlyProficient = document.getElementById('response-percentage-ipcrf-highlyproficient');

const conductedReviewsRpmsProficient = document.getElementById('conducted-reviews-rpms-proficient');
const fullResponseCountRpmsProficient = document.getElementById('full-response-count-rpms-proficient');
const attentionCountRpmsProficient = document.getElementById('attention-count-rpms-proficient');
const responsePercentageRpmsProficient = document.getElementById('response-percentage-rpms-proficient');

const conductedReviewsRpmsHighlyProficient = document.getElementById('conducted-reviews-rpms-highlyproficient');
const fullResponseCountRpmsHighlyProficient = document.getElementById('full-response-count-rpms-highlyproficient');
const attentionCountRpmsHighlyProficient = document.getElementById('attention-count-rpms-highlyproficient');
const responsePercentageRpmsHighlyProficient = document.getElementById('response-percentage-rpms-highlyproficient');

async function getFORMS(){ 

    

    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/forms/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include', 
        });

        ipcrf_content = await response.json();
        if (response.ok) {
            console.log("Success Data : ", ipcrf_content);

            conductedReviewsProficient.textContent = ipcrf_content.number_of_conducted_cot_proficient;
            fullResponseCountProficient.textContent = ipcrf_content.number_of_evaluated_cot_proficient;
            attentionCountProficient.textContent = ipcrf_content.number_of_pending_cot_proficient;


        } else {
            console.log("Error Data : ", ipcrf_content);
            // alert("Login Failed.")
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getFORMS();
