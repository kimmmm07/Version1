// Header Section
const headerSection = document.querySelector('.header-section');
const headerImage = headerSection.querySelector('.header-image');
const textOverlay = headerSection.querySelector('.text-overlay');
const headerTitle = textOverlay.querySelector('#header-title');
const headerSubtitle = textOverlay.querySelector('#header-subtitle');

// Tabs Section
const tabs = document.querySelector('.tabs');
const tabLinks = tabs.querySelectorAll('.tab');
const streamTab = tabs.querySelector('.tab[href="rpms_highlyproficient_stream.html"]');
const gradesTab = tabs.querySelector('.tab[href="rpms_highlyproficient_grades.html"]');

// Main Table
const mainTable = document.querySelector('main table');
const sortSelect = mainTable.querySelector('#sort-select');
const plusFactorScore = mainTable.querySelector('#plus-factor-score');
const kra4Score = mainTable.querySelector('#kra4-score');
const kra3Score = mainTable.querySelector('#kra3-score');
const kra2Score = mainTable.querySelector('#kra2-score');
const kra1Score = mainTable.querySelector('#kra1-score');

// User Info Section
const userInfo = mainTable.querySelector('#user-info');
const userIcon = userInfo.querySelector('img');
const userName = userInfo.querySelector('#user-name');

// Highlighted Score Cells
const plusFactor = mainTable.querySelector('#plus-factor');
const kra4 = mainTable.querySelector('#kra4');
const kra3 = mainTable.querySelector('#kra3');
const kra2 = mainTable.querySelector('#kra2');
const kra1 = mainTable.querySelector('#kra1');
const totalScore = mainTable.querySelector('#total-score');


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