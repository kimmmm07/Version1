
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

// // On page load, restore the selected form type from localStorage
// document.addEventListener("DOMContentLoaded", function () {
//     const savedFormType = localStorage.getItem('selectedFormType');
    
//     if (savedFormType) {
//         // Set the dropdown value to the previously selected option
//         document.getElementById('formType').value = savedFormType;
//     }
// });

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
