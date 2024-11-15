// Cards Section
const cardsSection = document.querySelector('.cards-section');

// Card Link
const cardLink = cardsSection.querySelector('.card-link'); // The anchor tag that wraps the card

// Card Elements
const card = cardsSection.querySelector('.card');
const cardHeader = card.querySelector('.card-header'); // The card header
const cardBody = card.querySelector('.card-body'); // The card body

// Header Content
const headerContent = cardHeader.querySelector('.header-content'); // The content inside the card header (e.g., text)
const headerSubheader = cardHeader.querySelector('.subheader'); // The subheader with the school year
const headerIcon = cardHeader.querySelector('.header-icon img'); // The image inside the header

// Card Body Content
const cardText = cardBody.querySelector('p'); // The paragraph inside the card body (empty in this case)
const cardList = cardBody.querySelector('ul'); // The unordered list inside the card body
const cardListItems = cardList.querySelectorAll('li'); // All list items inside the unordered list

// Card Icon Bottom
const cardIconBottom = cardBody.querySelector('.card-icon-bottom img'); // The image at the bottom of the card body (user icon)


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


let folders = undefined;
async function getFolders(){
    try {
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/rpms/folders/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        folders = await response.json();
        if (response.ok) {
            console.log("Success Data : ", folders);  
        } else {
            console.log("Error Data : ", folders);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getFolders();
