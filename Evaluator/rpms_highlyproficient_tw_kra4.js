// Container
const container = document.getElementById('container');

// Breadcrumb
const breadcrumb = document.getElementById('breadcrumb');

// Tabs
const instructionsTab = document.getElementById('instructions-tab');
const teacherWorkTab = document.getElementById('teacher-work-tab');

// Top Bar
const topBar = document.getElementById('top-bar');
const returnButton = document.getElementById('return-button');
const kra4Score = document.getElementById("kra4Score"); // kra 4

// Content Section
const content = document.getElementById('content');

// Left Section
const leftSection = document.getElementById('left-section');
const teacherWorkHeading = document.getElementById('teacher-work-heading');
const allTeachersCheckbox = document.getElementById('all-teachers-checkbox');
const sortLabel = document.getElementById('sort-label');
const statusSelect = document.getElementById('status');
const turnedInCheckbox = document.getElementById('turned-in-checkbox');
const namePointsContainer = document.getElementById('name-points-container');
const teacherCheckbox = document.getElementById('teacher-checkbox');
const dividerLine = document.getElementById('divider-line');
const pointsWithBorder = document.getElementById('points-with-border');

// Right Section
const rightSection = document.getElementById('right-section');
const kraHeading = document.getElementById('kra-heading');

// Submission Status
const submissionStatus = document.getElementById('submission-status');
const statusItem1 = document.getElementById('status-item-1');
const statusNumber1 = document.getElementById('status-number-1');
const statusText1 = document.getElementById('status-text-1');
const statusItem2 = document.getElementById('status-item-2');
const statusNumber2 = document.getElementById('status-number-2');
const statusText2 = document.getElementById('status-text-2');
const dividerLine1 = document.getElementById('divider-line1');

// Toggle Container
const toggleContainer = document.getElementById('toggleContainer');
const toggleCircle = document.getElementById('toggleCircle');
const toggleText = document.getElementById('toggleText');

// Teacher Submission
const teacherSubmission = document.getElementById('teacher-submission');
const teacherName = document.getElementById('teacher-name');
const attachmentLink = document.getElementById('attachment-link');
const submittedImage = document.getElementById('submitted-image');
const attachmentText = document.getElementById('attachment-text');
const turnedInText = document.getElementById('turned-in-text');


function toggleStatus() {
    const toggleContainer = document.getElementById('toggleContainer');
    const toggleCircle = document.getElementById('toggleCircle');
    const toggleText = document.getElementById('toggleText');

    toggleContainer.classList.toggle('active');
    if (toggleContainer.classList.contains('active')) {
        toggleText.innerHTML = "Accepting submissions";
    } else {
        toggleText.innerHTML = "Closed for submissions";
    }
}

    // Floating menu toggle
    document.getElementById('menu-icon').addEventListener('click', function() {
const floatingMenu = document.getElementById('floating-menu');
floatingMenu.style.display = floatingMenu.style.display === 'block' ? 'none' : 'block';
});

function closeMenu() {
document.getElementById('floating-menu').style.display = 'none';
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