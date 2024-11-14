// Sidebar icons
const menuIcon = document.getElementById('menu-icon');
const homeIcon = document.getElementById('home-icon');
const settingsIcon = document.getElementById('settings-icon');

// Floating Menu
const floatingMenu = document.getElementById('floating-menu');
const floatingHomeLink = document.getElementById('floating-home-link');
const floatingSettingsLink = document.getElementById('floating-settings-link');
const schoolYearLink = document.getElementById('school-year-link');
const schoolYearText = document.getElementById('schoolYear');

// Main Content
const mainContent = document.getElementById('main-content');
const breadcrumb = document.getElementById('breadcrumb');
const tabs = document.getElementById('tabs');
const reviewTab = document.getElementById('review-tab');
const reviewedTab = document.getElementById('reviewed-tab');

// Dropdown Container
const dropdownContainer = document.getElementById('dropdown-container');
const noDueDateItem = document.getElementById('no-due-date-item');
const noDueDateCount = document.getElementById('no-due-date-count');
const workInProgressItem = document.getElementById('work-in-progress-item');
const workInProgressCount = document.getElementById('work-in-progress-count');
const workInProgressContent = document.getElementById('work-in-progress-content');

// KRA Items
const kra1Item = document.getElementById('kra1-item');
const kra1Title = document.getElementById('kra1-title');
const kra1Posted = document.getElementById('kra1-posted');
const kra1Status = document.getElementById('kra1-status');
const statusNumberTurnedIn1 = document.getElementById('statusNumberTurnedIn1');
const statusNumberAssigned1 = document.getElementById('statusNumberAssigned1');
const statusNumberGraded1 = document.getElementById('statusNumberGraded1');
const menuDots1 = document.getElementById('menu-dots1');

const kra2Item = document.getElementById('kra2-item');
const kra2Title = document.getElementById('kra2-title');
const kra2Posted = document.getElementById('kra2-posted');
const kra2Status = document.getElementById('kra2-status');
const statusNumberTurnedIn2 = document.getElementById('statusNumberTurnedIn2');
const statusNumberAssigned2 = document.getElementById('statusNumberAssigned2');
const statusNumberGraded2 = document.getElementById('statusNumberGraded2');
const menuDots2 = document.getElementById('menu-dots2');

const kra3Item = document.getElementById('kra3-item');
const kra3Title = document.getElementById('kra3-title');
const kra3Posted = document.getElementById('kra3-posted');
const kra3Status = document.getElementById('kra3-status');
const statusNumberTurnedIn3 = document.getElementById('statusNumberTurnedIn3');
const statusNumberAssigned3 = document.getElementById('statusNumberAssigned3');
const statusNumberGraded3 = document.getElementById('statusNumberGraded3');
const menuDots3 = document.getElementById('menu-dots3');

const kra4Item = document.getElementById('kra4-item');
const kra4Title = document.getElementById('kra4-title');
const kra4Posted = document.getElementById('kra4-posted');
const kra4Status = document.getElementById('kra4-status');
const statusNumberTurnedIn4 = document.getElementById('statusNumberTurnedIn4');
const statusNumberAssigned4 = document.getElementById('statusNumberAssigned4');
const statusNumberGraded4 = document.getElementById('statusNumberGraded4');
const menuDots4 = document.getElementById('menu-dots4');

const plusFactorItem = document.getElementById('plus-factor-item');
const plusFactorTitle = document.getElementById('plus-factor-title');
const plusFactorPosted = document.getElementById('plus-factor-posted');
const plusFactorStatus = document.getElementById('plus-factor-status');
const statusNumberTurnedInPlus = document.getElementById('statusNumberTurnedInPlus');
const statusNumberAssignedPlus = document.getElementById('statusNumberAssignedPlus');
const statusNumberGradedPlus = document.getElementById('statusNumberGradedPlus');
const menuDotsPlus = document.getElementById('menu-dots-plus');






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



// Update the status counts dynamically (Example for KRA 1)
function updateStatusCounts() {
    document.getElementById('statusNumberTurnedIn1').innerText = '5'; 
    document.getElementById('statusNumberAssigned1').innerText = '3'; 
    document.getElementById('statusNumberGraded1').innerText = '2'; 
    // add other KRAs here.
}

// Call updateStatusCounts on page load
document.addEventListener('DOMContentLoaded', updateStatusCounts);