// Sidebar icons
const menuIcon = document.getElementById('menu-icon');
const homeIcon = document.getElementById('home-icon');
const settingsIcon = document.getElementById('settings-icon');

// Floating menu
const floatingMenu = document.getElementById('floating-menu');
const closeButton = document.getElementById('close-btn');
const schoolYearLink = document.getElementById('floating-school-year-link');

// Header section
const headerLogo = document.getElementById('header-logo');
const headerImage = document.getElementById('header-image');
const textOverlay = document.getElementById('text-overlay');

// Tabs
const streamTab = document.getElementById('stream-tab');
const gradesTab = document.getElementById('grades-tab');

// Content items
const upcomingList = document.getElementById('upcomingList');
const kra1Item = document.getElementById('kra1-item');
const kra2Item = document.getElementById('kra2-item');
const kra3Item = document.getElementById('kra3-item');
const kra4Item = document.getElementById('kra4-item');
const plusFactorItem = document.getElementById('plus-factor-item');

// Event listeners
closeButton.addEventListener('click', () => {
    floatingMenu.classList.toggle('active');
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