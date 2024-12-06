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


const feedPost = document.getElementById('feed-post');
const profilePic = document.getElementById('profile-pic');
const user = document.getElementById('user');
const date = document.getElementById('date');
const text = document.getElementById('text');
const postActions = document.getElementById('post-actions');
const likeButton = document.getElementById('like-btn');
const commentButton = document.getElementById('comment-btn');
const commentsSection = document.getElementById('comments-section');
const commentInputWrapper = document.getElementById('comment-input-wrapper');
const commentInput = document.getElementById('comment-input');
const sendIcon = document.getElementById('send-icon');


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



// window.addEventListener('load', async function () {
    
// });

function sendComment(inputId) {
    const commentInput = document.getElementById(inputId);
    const commentText = commentInput.value.trim();

    if (commentText) {
        console.log(`Comment sent: ${commentText}`);
        commentInput.value = ""; // Clear the input field after sending
        alert("Your comment has been sent!");
    } else {
        alert("Please enter a comment before sending.");
    }
}

function toggleLike(button) {
    // Toggle the 'active' class on the button
    button.classList.toggle('active');
}

function sendComment(inputId) {
    const inputElement = document.getElementById(inputId);
    const commentText = inputElement.value.trim();

    if (commentText) {
        const commentList = document.getElementById('comment-list');

        // Create a new comment element
        const comment = document.createElement('div');
        comment.classList.add('comment');

        comment.innerHTML = `
            <div class="profile-pic">
                <img src="User_Circle.png" alt="User Icon">
            </div>
            <div class="comment-content">
                <p class="user-name">Current User</p>
                <p class="comment-text">${commentText}</p>
                <div class="comment-actions">
                    <button class="like-btn" id="like-btn" onclick="toggleLike(this)">
                        <i class="fa fa-thumbs-up" id="like-icon" style="color:lightgray;"></i> Like
                    </button>
                    <button class="reply-btn" onclick="showReplyInput(this)">
                        <i class="fas fa-reply" style="color:lightgray;"></i> Reply
                    </button>
                </div>
                <div class="reply-list"></div>
            </div>
        `;

        // Append the comment to the list
        commentList.appendChild(comment);

        // Clear the input field
        inputElement.value = '';
    }
}

function toggleLike(button) {
    button.classList.toggle('active');
}

function showReplyInput(button) {
    const commentContent = button.closest('.comment-content');
    let replyInputWrapper = commentContent.querySelector('.reply-input-wrapper');

    if (!replyInputWrapper) {
        // Create the reply input wrapper
        replyInputWrapper = document.createElement('div');
        replyInputWrapper.classList.add('reply-input-wrapper');

        replyInputWrapper.innerHTML = `
            <input type="text" class="reply-input" placeholder="Write a reply...">
            <img src="Paper_Plane.png" alt="Send" class="reply-icon" onclick="sendReply(this)">
        `;

        commentContent.appendChild(replyInputWrapper);
    }
}

function sendReply(icon) {
    const replyInput = icon.previousElementSibling;
    const replyText = replyInput.value.trim();

    if (replyText) {
        const replyList = icon.closest('.comment-content').querySelector('.reply-list');

        // Create a new reply element
        const reply = document.createElement('div');
        reply.classList.add('reply');

        reply.innerHTML = `
            <div class="profile-pic">
                <img src="User_Circle.png" alt="User Icon">
            </div>
            <div class="reply-content">
                <p class="user-name">Current User</p>
                <p class="reply-text">${replyText}</p>
                <div class="comment-actions">
                    <button class="like-btn" onclick="toggleLike(this)">
                        <i class="fas fa-thumbs-up" style="color:lightgray;"></i> Like
                    </button>
                    <button class="reply-btn" onclick="showReplyInput(this)">
                        <i class="fas fa-reply" style="color:lightgray;"></i> Reply
                    </button>
                </div>
                <div class="reply-list"></div>
            </div>
        `;

        // Append the reply to the list
        replyList.appendChild(reply);

        // Clear the reply input field
        replyInput.value = '';
    }
}
