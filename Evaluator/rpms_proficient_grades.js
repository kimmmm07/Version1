// Sidebar and Menu elements
const menuIcon = document.getElementById('menu-icon');
const floatingMenu = document.getElementById('floating-menu');
const closeBtn = document.getElementById('close-btn');

// Header and Navigation elements
const homeLink = document.getElementById('home-link');
const formsLink = document.getElementById('forms-link');
const recordsLink = document.getElementById('records-link');
const summaryLink = document.getElementById('summary-link');
const profileLink = document.getElementById('profile-link');
const logoutLink = document.getElementById('logoutLink');
const depedLogo = document.getElementById('deped-logo');

// Header Section elements
const headerSection = document.getElementById('header-section');
const headerTitle = document.getElementById('header-title');
const headerSubtitle = document.getElementById('header-subtitle');

// Tab elements
const streamTab = document.getElementById('stream-tab');
const gradesTab = document.getElementById('grades-tab');

// Grades Table elements
const gradesTable = document.getElementById('grades-table');
const sortBy = document.getElementById('sort-by');
const sortSelect = document.getElementById('sort-select');

// User Info and Grade values
const userInfo = document.getElementById('user-info');
const plusFactor = document.getElementById('plus-factor');
const kra4 = document.getElementById('kra-4');
const kra3 = document.getElementById('kra-3');
const kra2 = document.getElementById('kra-2');
const kra1 = document.getElementById('kra-1');

// Values in the table
const plusFactorValue = document.getElementById('plus-factor-value');
const kra4Value = document.getElementById('kra-4-value');
const kra3Value = document.getElementById('kra-3-value');
const kra2Value = document.getElementById('kra-2-value');
const kra1Value = document.getElementById('kra-1-value');
const totalValue = document.getElementById('total-value');

// Event listeners for sidebar menu actions
menuIcon.addEventListener('click', () => {
  floatingMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  floatingMenu.style.display = 'none';
});

// Example event listener for tab switch (Grades/Stream)
gradesTab.addEventListener('click', () => {
  console.log("Grades tab clicked");
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
