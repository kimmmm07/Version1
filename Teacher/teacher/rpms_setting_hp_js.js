// Breadcrumbs
const breadcrumbs = document.getElementById('breadcrumbs');
const settingsLink = document.getElementById('settingsLink');

// Settings container
const settingsContainer = document.getElementById('settingsContainer');
const notificationsSettings = document.getElementById('notificationsSettings');

// Email section
const emailSection = document.getElementById('emailSection');
const emailNotificationsCheckbox = document.getElementById('email-notifications');

// Comments section
const commentsSection = document.getElementById('commentsSection');
const commentsPostsCheckbox = document.getElementById('comments-posts');
const commentsMentionCheckbox = document.getElementById('comments-mention');
const privateCommentsCheckbox = document.getElementById('private-comments');

// RPMS section
const rpmsSection = document.getElementById('rpmsSection');
const rpmsWorkPostsCheckbox = document.getElementById('rpms-work-posts');
const returnedWorkCheckbox = document.getElementById('returned-work');
const invitationsCheckbox = document.getElementById('invitations');
const dueDateRemindersCheckbox = document.getElementById('due-date-reminders');


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