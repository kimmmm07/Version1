// Sidebar
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu-icon");
const homeIcon = document.getElementById("home-icon");
const settingsIcon = document.getElementById("settings-icon");

// Floating Menu
const floatingMenu = document.getElementById("floating-menu");
const closeBtn = document.getElementById("close-btn");
const menuDivider = document.getElementById("menu-divider");
const syCircle = document.getElementById("sy-circle");


// Main Content
const mainContent = document.getElementById("mainContent");
const mainSection = document.getElementById("main-section");
const headerImage = document.getElementById("header-image");
const textOverlay = document.getElementById("text-overlay");
const headerTitle = document.getElementById("header-title");
const headerSubtitle = document.getElementById("header-subtitle");
const tabs = document.getElementById("tabs");
const streamTab = document.getElementById("stream-tab");
const gradesTab = document.getElementById("grades-tab");
const contentWrapper = document.getElementById("content-wrapper");
const upcomingSection = document.getElementById("upcoming-section");
const upcomingTitle = document.getElementById("upcoming-title");
const upcomingList = document.getElementById("upcoming-list");
const upcomingItem = document.getElementById("upcoming-item");

// Interactions 
function closeMenu() {
    floatingMenu.style.display = "none";
}

menuIcon.addEventListener("click", function() {
    floatingMenu.style.display = "block";
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
