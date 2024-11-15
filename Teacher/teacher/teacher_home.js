// Main content and feed section
const mainContent = document.getElementById('mainContent');
const feedSection = document.getElementById('feedSection');
const feedHeader = document.getElementById('feedHeader');
const feed = document.getElementById('feed');

// Right sidebar
const rightSidebar = document.getElementById('rightSidebar');

// Notification section
const notificationSection = document.getElementById('notificationSection');
const notificationHeader = document.getElementById('notificationHeader');
const notificationList = document.getElementById('notificationList');

// To-Do section
const toDoSection = document.getElementById('toDoSection');
const toDoHeader = document.getElementById('toDoHeader');
const toDoList = document.getElementById('toDoList');



let feeds = undefined;

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

window.addEventListener('load', async function () {
    const response = await fetch('https://bnahs.pythonanywhere.com/api/user/feeds/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );
    
    feeds = await response.json();
    if (response.ok) {
        console.log("Success Data : ",feeds);

    } else {
        console.log("Error Data : ",feeds);
    }
      
});