// Cards Section
const cardsSection = document.querySelector('#cards-section');

// Card Link
const cardLink = document.querySelector('#card-link');

// Card Elements
const card = document.querySelector('#card');
const cardHeader = document.querySelector('#card-header');
const headerContent = document.querySelector('#header-content');
const subheader = document.querySelector('#subheader');
const headerIcon = document.querySelector('#header-icon');
const syIcon = document.querySelector('#sy-icon');

// Card Body
const cardBody = document.querySelector('#card-body');
const cardBodyText = document.querySelector('#card-body-text');
const cardBodyList = document.querySelector('#card-body-list');
const listItem1 = document.querySelector('#list-item-1');
const listItem2 = document.querySelector('#list-item-2');
const listItem3 = document.querySelector('#list-item-3');
const listItem4 = document.querySelector('#list-item-4');
const listItem5 = document.querySelector('#list-item-5');

// Card Icon Bottom
const cardIconBottom = document.querySelector('#card-icon-bottom');
const userIcon = document.querySelector('#user-icon');


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