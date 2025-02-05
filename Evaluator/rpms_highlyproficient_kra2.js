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
const kraObjective5 = document.getElementById('kraObjective5');
const objective5 = document.getElementById('Objective5');
const kraObjective6 = document.getElementById('kraObjective6');
const objective6 = document.getElementById('Objective6');
const kraObjective7 = document.getElementById('kraObjective7');
const objective7 = document.getElementById('Objective7');
const kraObjective8 = document.getElementById('kraObjective8');
const objective8 = document.getElementById('Objective8');

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
