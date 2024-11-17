// Feed Container and Posts
const feedContainer = document.getElementById('feed-container');
const feeds = document.getElementById('feeds');

// Individual Feed Posts
const feedPost1 = document.getElementById('feed-post-1');
const feedPost2 = document.getElementById('feed-post-2');

// Profile Images in the Posts
const profilePic1 = feedPost1.querySelector('.profile-pic img');
const profilePic2 = feedPost2.querySelector('.profile-pic img');

// User Names in the Posts
const userName1 = feedPost1.querySelector('.user');
const userName2 = feedPost2.querySelector('.user');

// Date in the Posts
const date1 = feedPost1.querySelector('.date');
const date2 = feedPost2.querySelector('.date');

// Post Content
const postContent1 = feedPost1.querySelector('.text');
const postContent2 = feedPost2.querySelector('.text');

// Like Buttons
const likeButton1 = document.getElementById('like-btn-1');
const likeButton2 = document.getElementById('like-btn-2');

// Comment Buttons
const commentButton1 = document.getElementById('comment-btn-1');
const commentButton2 = document.getElementById('comment-btn-2');

// Comment Inputs
const commentInput1 = document.getElementById('comment-input-1');
const commentInput2 = document.getElementById('comment-input-2');

// Notifications Section
const notifications = document.getElementById('notifications');

// To Do Section
const todo = document.getElementById('todo');


function toggleLike(button) {
    button.classList.toggle('active');
}

function toggleComments(button) {
    const commentSection = button.parentElement.nextElementSibling;
    commentSection.style.display = commentSection.style.display === 'block' ? 'none' : 'block';
    button.classList.toggle('active');
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
    const response = await fetch('https://bnahs.pythonanywhere.com/api/user/logout/',
        {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            }, 
            credentials: 'include', 
        }
    );
    
    
    const data = await response.json();
    if (response.ok) {
        window.location.href = '../../get-started.html'; 
    } else {
        console.log("Error Data : ",data);
    }
});

// window.addEventListener('load', async function () {
    
// });