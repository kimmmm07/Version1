// Sidebar elements
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu-icon");
const homeIcon = document.getElementById("home-icon");
const settingsIcon = document.getElementById("settings-icon");

// Floating menu elements
const floatingMenu = document.getElementById("floating-menu");
const closeBtn = document.getElementById("close-btn");
const floatingMenuList = document.getElementById("floating-menu-list");
const homeLink = document.getElementById("home-link");
const settingsLink = document.getElementById("settings-link");
const schoolYearLink = document.getElementById("school-year-link");

// Header elements
const depedLogoContainer = document.getElementById("deped-logo-container");
const depedLogo = document.getElementById("deped-logo");
const mainNav = document.getElementById("main-nav");
const homeNavLink = document.getElementById("home-nav-link");
const formsNavLink = document.getElementById("forms-nav-link");
const recordsNavLink = document.getElementById("records-nav-link");
const summaryNavLink = document.getElementById("summary-nav-link");
const profileNavLink = document.getElementById("profile-nav-link");
const logoutLink = document.getElementById("logoutLink");

// Cards section elements
const cardsSection = document.getElementById("cards-section");
const cardLink = document.getElementById("card-link");
const performanceCard = document.getElementById("performance-card");
const cardHeader = document.getElementById("card-header");
const cardHeaderContent = document.getElementById("card-header-content");
const cardSubheader = document.getElementById("card-subheader");
const headerIcon = document.getElementById("header-icon");
const headerIconImg = document.getElementById("header-icon-img");
const cardBody = document.getElementById("card-body");
const cardDescription = document.getElementById("card-description");
const cardList = document.getElementById("card-list");
const cardItem1 = document.getElementById("card-item-1");
const cardItem2 = document.getElementById("card-item-2");
const cardItem3 = document.getElementById("card-item-3");
const cardItem4 = document.getElementById("card-item-4");
const cardItem5 = document.getElementById("card-item-5");
const cardIconBottom = document.getElementById("card-icon-bottom");
const cardIconImg = document.getElementById("card-icon-img");




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