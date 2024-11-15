// Breadcrumb Links
const rpmsLink = document.querySelector('.breadcrumb ul li a:nth-child(1)');
const toDoLink = document.querySelector('.breadcrumb ul li a:nth-child(2)');

// Tabs
const pendingTab = document.getElementById('pending');
const doneTab = document.getElementById('done');

// Dropdown Container
const dropdownContainer = document.querySelector('.dropdown-container');

// Dropdown Items
const noDueDateItem = document.querySelector('.dropdown-item:nth-child(1)');
const thisWeekItem = document.querySelector('.dropdown-item:nth-child(2)');
const nextWeekItem = document.querySelector('.dropdown-item:nth-child(3)');
const laterItem = document.querySelector('.dropdown-item:nth-child(4)');

// Content for KRA Objectives and PLUS FACTOR
const kra1Content = document.querySelector('.content-item:nth-child(1)'); // KRA 1
const kra2Content = document.querySelector('.content-item:nth-child(2)'); // KRA 2
const kra3Content = document.querySelector('.content-item:nth-child(3)'); // KRA 3
const kra4Content = document.querySelector('.content-item:nth-child(4)'); // KRA 4
const plusFactorContent = document.querySelector('.content-item:nth-child(5)'); // PLUS FACTOR

// School Year Element
const schoolYear = document.querySelectorAll('#schoolYear');

// Dropdown Content for Time Frames
const thisWeekContent = document.getElementById('thisWeekContent');
const nextWeekContent = document.getElementById('nextWeekContent');
const laterContent = document.getElementById('laterContent');


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

// Get all dropdown headers
const dropdownHeaders = document.querySelectorAll('.dropdown-header');

dropdownHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
        // Toggle the active class on the parent dropdown item
        const parentItem = header.parentElement;
        parentItem.classList.toggle('active');
    });
});