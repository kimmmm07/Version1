// Container Section
const container = document.querySelector('#container');

// Breadcrumb
const breadcrumb = document.querySelector('#breadcrumb');

// Tabs
const tabs = document.querySelector('#tabs');
const instructionsTab = document.querySelector('#instructions-tab');
const teacherWorkTab = document.querySelector('#teacher-work-tab');

// KRA Header Section
const kraHeader = document.querySelector('#kra-header');
const kraIcon = document.querySelector('#kra-icon');
const kraIconImg = document.querySelector('#kra-icon-img');
const kraDetails = document.querySelector('#kra-details');
const kraTitle = document.querySelector('#kra-title');
const postedBy = document.querySelector('#posted-by');
const points = document.querySelector('#points');
const dotsMenu = document.querySelector('#dots-menu');
const dots = document.querySelector('#dots');

// KRA Content (Objectives)
const kraObjective9 = document.getElementById('kraObjective9');
const objective9 = document.getElementById('Objective9');
const kraObjective10 = document.getElementById('kraObjective10');
const objective10 = document.getElementById('Objective10');
const kraObjective11 = document.getElementById('kraObjective11');
const objective11 = document.getElementById('Objective11');

// Comments Section
const commentsSection = document.querySelector('#comments-section');
const commentsHeading = document.querySelector('#comments-heading');
const addComment = document.querySelector('#add-comment');
const commentInput = document.querySelector('#comment-input');
const commentSubmit = document.querySelector('#comment-submit');




document.querySelector('.dots-menu').addEventListener('click', function() {
    alert("Options menu clicked.");
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
            
            window.location.href = '../../get-started.html'; 
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});