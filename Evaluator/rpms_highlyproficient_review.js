// Main Content
const mainContent = document.getElementById("main-content");

// Breadcrumbs
const breadcrumb = document.getElementById("breadcrumb");
const breadcrumbList = document.getElementById("breadcrumb-list");
const rpmsBreadcrumbLink = document.getElementById("rpms-breadcrumb-link");
const toReviewBreadcrumbLink = document.getElementById("to-review-breadcrumb-link");

// Tabs
const tabs = document.getElementById("tabs");
const reviewTab = document.getElementById("review-tab");
const reviewedTab = document.getElementById("reviewed-tab");

// Dropdown Container
const dropdownContainer = document.getElementById("dropdown-container");

// No Due Date Dropdown
const noDueDateDropdown = document.getElementById("no-due-date-dropdown");
const noDueDateHeader = document.getElementById("no-due-date-header");
const noDueDateSpan = document.getElementById("no-due-date-span");
const noDueDateCount = document.getElementById("no-due-date-count");
const noDueDateToggle = document.getElementById("no-due-date-toggle");

// Work in Progress Dropdown
const workInProgressDropdown = document.getElementById("work-in-progress-dropdown");
const workInProgressHeader = document.getElementById("work-in-progress-header");
const workInProgressSpan = document.getElementById("work-in-progress-span");
const workInProgressCount = document.getElementById("work-in-progress-count");
const workInProgressToggle = document.getElementById("work-in-progress-toggle");
const workInProgressContent = document.getElementById("work-in-progress-content");
const workInProgressList = document.getElementById("work-in-progress-list");

// Content Items for KRA and Plus Factor
const kra1Link = document.getElementById("kra1-link");
const kra1Icon = document.getElementById("kra1-icon");
const kra1TextContainer = document.getElementById("kra1-text-container");
const kra1Title = document.getElementById("kra1-title");
const kra1Posted = document.getElementById("kra1-posted");
const kra1Status = document.getElementById("kra1-status");
const kra1TurnedIn = document.getElementById("kra1-turned-in");
const kra1TurnedInNumber = document.getElementById("kra1-turned-in-number");
const kra1TurnedInText = document.getElementById("kra1-turned-in-text");
const kra1Assigned = document.getElementById("kra1-assigned");
const kra1AssignedNumber = document.getElementById("kra1-assigned-number");
const kra1AssignedText = document.getElementById("kra1-assigned-text");
const kra1Graded = document.getElementById("kra1-graded");
const kra1GradedNumber = document.getElementById("kra1-graded-number");
const kra1GradedText = document.getElementById("kra1-graded-text");
const kra1Dots = document.getElementById("kra1-dots");

const kra2Link = document.getElementById("kra2-link");
const kra2Icon = document.getElementById("kra2-icon");
const kra2TextContainer = document.getElementById("kra2-text-container");
const kra2Title = document.getElementById("kra2-title");
const kra2Posted = document.getElementById("kra2-posted");
const kra2Status = document.getElementById("kra2-status");
const kra2TurnedIn = document.getElementById("kra2-turned-in");
const kra2TurnedInNumber = document.getElementById("kra2-turned-in-number");
const kra2TurnedInText = document.getElementById("kra2-turned-in-text");
const kra2Assigned = document.getElementById("kra2-assigned");
const kra2AssignedNumber = document.getElementById("kra2-assigned-number");
const kra2AssignedText = document.getElementById("kra2-assigned-text");
const kra2Graded = document.getElementById("kra2-graded");
const kra2GradedNumber = document.getElementById("kra2-graded-number");
const kra2GradedText = document.getElementById("kra2-graded-text");
const kra2Dots = document.getElementById("kra2-dots");

const kra3Link = document.getElementById("kra3-link");
const kra3Icon = document.getElementById("kra3-icon");
const kra3TextContainer = document.getElementById("kra3-text-container");
const kra3Title = document.getElementById("kra3-title");
const kra3Posted = document.getElementById("kra3-posted");
const kra3Status = document.getElementById("kra3-status");
const kra3TurnedIn = document.getElementById("kra3-turned-in");
const kra3TurnedInNumber = document.getElementById("kra3-turned-in-number");
const kra3TurnedInText = document.getElementById("kra3-turned-in-text");
const kra3Assigned = document.getElementById("kra3-assigned");
const kra3AssignedNumber = document.getElementById("kra3-assigned-number");
const kra3AssignedText = document.getElementById("kra3-assigned-text");
const kra3Graded = document.getElementById("kra3-graded");
const kra3GradedNumber = document.getElementById("kra3-graded-number");
const kra3GradedText = document.getElementById("kra3-graded-text");
const kra3Dots = document.getElementById("kra3-dots");

const kra4Link = document.getElementById("kra4-link");
const kra4Icon = document.getElementById("kra4-icon");
const kra4TextContainer = document.getElementById("kra4-text-container");
const kra4Title = document.getElementById("kra4-title");
const kra4Posted = document.getElementById("kra4-posted");
const kra4Status = document.getElementById("kra4-status");
const kra4TurnedIn = document.getElementById("kra4-turned-in");
const kra4TurnedInNumber = document.getElementById("kra4-turned-in-number");
const kra4TurnedInText = document.getElementById("kra4-turned-in-text");
const kra4Assigned = document.getElementById("kra4-assigned");
const kra4AssignedNumber = document.getElementById("kra4-assigned-number");
const kra4AssignedText = document.getElementById("kra4-assigned-text");
const kra4Graded = document.getElementById("kra4-graded");
const kra4GradedNumber = document.getElementById("kra4-graded-number");
const kra4GradedText = document.getElementById("kra4-graded-text");
const kra4Dots = document.getElementById("kra4-dots");

const plusFactorLink = document.getElementById("plusfactor-link");
const plusFactorIcon = document.getElementById("plusfactor-icon");
const plusFactorTextContainer = document.getElementById("plusfactor-text-container");
const plusFactorTitle = document.getElementById("plusfactor-title");
const plusFactorPosted = document.getElementById("plusfactor-posted");
const plusFactorStatus = document.getElementById("plusfactor-status");
const plusFactorTurnedIn = document.getElementById("plusfactor-turned-in");
const plusFactorTurnedInNumber = document.getElementById("plusfactor-turned-in-number");
const plusFactorTurnedInText = document.getElementById("plusfactor-turned-in-text");
const plusFactorAssigned = document.getElementById("plusfactor-assigned");
const plusFactorAssignedNumber = document.getElementById("plusfactor-assigned-number");
const plusFactorAssignedText = document.getElementById("plusfactor-assigned-text");
const plusFactorGraded = document.getElementById("plusfactor-graded");
const plusFactorGradedNumber = document.getElementById("plusfactor-graded-number");
const plusFactorGradedText = document.getElementById("plusfactor-graded-text");
const plusFactorDots = document.getElementById("plusfactor-dots");



// Get all dropdown headers
const dropdownHeaders = document.querySelectorAll('.dropdown-header');

dropdownHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
        // Toggle the active class on the parent dropdown item
        const parentItem = header.parentElement;
        parentItem.classList.toggle('active');
    });
});


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