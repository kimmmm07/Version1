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

// Report Table Titles
const plusFactorTitle = document.getElementById("plusFactorTitle");
const kra4Title = document.getElementById("kra4Title");
const kra3Title = document.getElementById("kra3Title");
const kra2Title = document.getElementById("kra2Title");
const kra1Title = document.getElementById("kra1Title");

// Report Table "Out Of"
const plusFactorOutOf = document.getElementById("plusFactorOutOf");
const kra4OutOf = document.getElementById("kra4OutOf");
const kra3OutOf = document.getElementById("kra3OutOf");
const kra2OutOf = document.getElementById("kra2OutOf");
const kra1OutOf = document.getElementById("kra1OutOf");

// Report Table Scores
const plusFactorScore = document.getElementById("plusFactorScore");
const kra4Score = document.getElementById("kra4Score");
const kra3Score = document.getElementById("kra3Score");
const kra2Score = document.getElementById("kra2Score");
const kra1Score = document.getElementById("kra1Score");
const totalScore = document.getElementById("totalScore");

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
