// Edit Profile Section
const editProfileSection = document.getElementById('edit-profile');
const editProfileTitle = document.getElementById('edit-profile-title');

// Profile Image Section
const profileContainer = document.getElementById('profile-container');
const profileImageContainer = document.getElementById('profile-image-container');
const profileImage = document.getElementById('profileImage');
const profileImageOverlay = document.getElementById('profile-image');
const imageUpload = document.getElementById('imageUpload');

// Profile Form
const profileForm = document.getElementById('profile-form');

// Name Inputs
const nameGroup = document.getElementById('name-group');
const firstNameWrapper = document.getElementById('first-name-wrapper');
const firstName = document.getElementById('first-name');
const firstNameWarning = document.getElementById('first-name-warning');

const middleNameWrapper = document.getElementById('middle-name-wrapper');
const middleName = document.getElementById('middle-name');
const middleNameWarning = document.getElementById('middle-name-warning');

const lastNameWrapper = document.getElementById('last-name-wrapper');
const lastName = document.getElementById('last-name');
const lastNameWarning = document.getElementById('last-name-warning');

// Job Title
const jobTitleGroup = document.getElementById('job-title-group');
const jobTitleWrapper = document.getElementById('job-title-wrapper');
const jobTitle = document.getElementById('job-title');
const jobTitleWarning = document.getElementById('job-title-warning');

// Department
const departmentGroup = document.getElementById('department-group');
const departmentWrapper = document.getElementById('department-wrapper');
const department = document.getElementById('department');
const departmentWarning = document.getElementById('department-warning');

// Password
const passwordGroup = document.getElementById('password-group');
const passwordWrapper = document.getElementById('password-wrapper');
const password = document.getElementById('password');
const passwordWarning = document.getElementById('password-warning');

// Confirm Password
const confirmPasswordGroup = document.getElementById('confirm-password-group');
const confirmPasswordWrapper = document.getElementById('confirm-password-wrapper');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordWarning = document.getElementById('confirm-password-warning');

// Form Buttons
const formButtons = document.getElementById('form-buttons');
const cancelButton = document.getElementById('cancel-btn');
const updateButton = document.getElementById('update-btn');


function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.getElementById('profileImage');
        img.src = e.target.result; // Set the image source to the uploaded file
    };
    reader.readAsDataURL(file);
}

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





let user = undefined;

async function getProfile() {
    try{
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/profile/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data); 
            user = data;
        } else {
            console.log("Error Data : ", data);
        }
    }
    catch (error) {
        console.error("Error during fetch:", error);
    }
}

getProfile();


async function updateProfile() {
    try{
        
        const formData = new FormData();
        formData.append('firstname', firstName.value);
        formData.append('middlename', middleName.value);
        formData.append('lastname', lastName.value);
        formData.append('jobtitle', jobTitle.value);
        formData.append('department', department.value);
        formData.append('password', password.value);
        formData.append('confirm_password', confirmPassword.value);
        formData.append('profile', imageUpload.files[0]);

        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/update_profile/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data); 
        } else {
            console.log("Error Data : ", data);
        }


    } catch (error) {
        console.error("Error during fetch:", error);
    }


}



updateButton.addEventListener('click', async function() {
    updateProfile();
});


