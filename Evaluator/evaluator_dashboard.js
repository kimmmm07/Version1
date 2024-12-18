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
// const notifications = document.getElementById('notifications');

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
                        <i class="fa fa-thumbs-up" id="like-icon" style="color:lightgray;"></i> Like (0)
                    </button>
                    <button class="reply-btn" onclick="showReplyInput(this)">
                        <i class="fas fa-reply" style="color:lightgray;"></i> Reply (0)
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
                        <i class="fas fa-thumbs-up" style="color:lightgray;"></i> Like (0)
                    </button>
                    <button class="reply-btn" onclick="showReplyInput(this)">
                        <i class="fas fa-reply" style="color:lightgray;"></i> Reply (0)
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






























// Array to store posts 
let school_name = "";
let school = undefined;
let school_image = "";
let faculty = undefined;
let faculty_name = "";
let faculty_image = "";
let posts = [];
let notifications = [];
let faculties = [];
const commentsVisibility = {}; // Track visibility of comments sections




 


async function getFeeds() {
    try{
        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/feeds/',
            {
                method: 'GET',
                credentials: 'include'
            }
        );
        
        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ",data); 
            posts = [];
            Object.keys(data).forEach(key => { 
    
                let attachments = []
                data[key]?.attachments.map((attachment)=>{
                    const url = attachment?.attachment ? 'https://bnahs.pythonanywhere.com' + attachment?.attachment : '';
                    attachments.push(url)
                })
    
                const dateString = data[key]?.post?.created_at ;  // Your date string
                const dateObject = new Date(dateString);  // Parse the date string into a Date object
    
                // Format the date using toLocaleString
                const formattedDate = dateObject.toLocaleString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric', 
                    hour: 'numeric', 
                    minute: 'numeric', 
                    hour12: true 
                });
                
                commentsVisibility[key] = false;
    
                const post = {
                    post : data[key]?.post,
                    comments : data[key]?.comments,
                    content: data[key]?.post?.content,
                    imageSrc: attachments,
                    likes: data[key]?.post?.number_of_likes,
                    is_liked : data[key]?.post?.liked ? true : false,
                    comments_count: data[key]?.post?.number_of_comments,
                    id: key,
                    user: school_name,
                    date: formattedDate
                }; 
                // console.log(post);
                posts.push(post); // Add post to the beginning of the array
                // data[key]?.post?.notifications?.map((notification)=>{
                //     notifications.push(notification[1]);
                // })
            });
            renderPosts();
            // renderNotifications();
            
            
    
        } else {
            console.log("Error Data : ",data);
        }
    } catch (e) {
        console.log(e)

    }
    
};


async function getNotifications(){
    try{
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/post/notifications/',
            {
                method: 'GET',
                credentials: 'include'
            }
        );
        
        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ",data); 
            notifications = [];
            data?.notifications?.map((notification)=>{
                notifications.push(notification[1]);
            })
            renderNotifications();
        } else {
            console.log("Error Data : ",data);
        }
    } catch (e) {
        console.log(e)

    }
}

async function getFaculties(){
    try{
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/faculties/',
            {
                method: 'GET',
                credentials: 'include'
            }
        );
        
        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ",data); 
            notifications = [];
            data?.people?.map((person)=>{
                faculties.push(person);
            }) 
        } else {
            console.log("Error Data : ",data);
        }
    } catch (e) {
        console.log(e)

    }
}

async function getlDetailsByActionId(action_id) {
    const formData = new FormData();
    // formData.append('action_id', 'e9a7fdea-c6d0-40d8-8324-47aa18c60074')
    formData.append('action_id', action_id);
    const response1 = await fetch('https://bnahs.pythonanywhere.com/api/user/get/owner/action_id/', {
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            
        },
        body: formData,
        credentials: 'include',
    });

    const data1 = await response1.json();
    if (response1.ok) {
        console.log("Success Data : ", data1); 
    } else {
        console.log("Error Data : ", data1);
    }
}

async function getSchoolDetails(){
    try{
        const response1 = await fetch('https://bnahs.pythonanywhere.com/api/user/get/school/details/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            }, 
            credentials: 'include',
        });
    
        const data = await response1.json();
        if (response1.ok) {
            console.log("Success Data : ", data); 
            school = data ;
            school_name = school.school_name
            school_image = school.school_logo ? 'https://bnahs.pythonanywhere.com' + school.school_logo : 'assets\User_Circle.png' ; // Update the school admin user icon with the retrieved image URL
 
        } else {
            console.log("Error Data : ", data);
        }

    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

async function getFacultyDetails(){
    try{
        const response1 = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/profile/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            }, 
            credentials: 'include',
        });
    
        const data = await response1.json();
        if (response1.ok) {
            console.log("Success Data : ", data); 
            faculty = data?.faculty;
            
            
            getNotifications();
            await getSchoolDetails();
            await getFaculties();
            getFeeds();
        } else {
            window.location.href = '../../get-started.html'; 
            console.log("Error Data : ", data);
        }

    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

window.addEventListener('load', async function () {
    setTimeout(getFacultyDetails, 100); 
});

 
  
// Create a likedPosts object to track liked posts by their IDs
let likedPosts = {};

async function toggleLike(postId, btn, post) { 
    
    if (likedPosts[postId]) {
        post.likes -= 1;
        likedPosts[postId] = false; 
        btn.innerHTML = `<i><img src="Facebook Like.png" alt="Like Icon"></i> Like (${post.likes})`;
        btn.classList.remove('liked'); 
    } else {
        post.likes += 1;
        likedPosts[postId] = true;
        btn.innerHTML = `<i><img src="Blue Like.png" alt="Like Icon"></i> Like (${post.likes})`; 
        btn.classList.add('liked');  
        // addNotification(`${post.user} liked your post: "${post.content}"`);
    }

    try{
        const formData = new FormData(); 
        formData.append('post_id', postId);
        formData.append('liked', likedPosts[postId] ? 'true' : 'false');

        const response = await fetch(`https://bnahs.pythonanywhere.com/api/user/react/post/`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            body: formData,
            credentials: 'include',
        });
        const data = await response.json();
        if (response.ok) {
            console.log("Success Data: ", data);
            getNotifications();
        } else {
            console.log("Error Data: ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }

 
}


async function toggleLikeComment(commentId, btn, comment , post) { 
    if (likedPosts[commentId]) {
        comment.number_of_likes -= 1;
        likedPosts[commentId] = false; 
        btn.innerHTML = `<i><img src="Facebook Like.png" alt="Like Icon"></i> Like (${comment.number_of_likes})`;
        btn.classList.remove('liked'); 
    } else {
        comment.number_of_likes += 1;
        likedPosts[commentId] = true;
        btn.innerHTML = `<i><img src="Blue Like.png" alt="Like Icon"></i> Like (${comment.number_of_likes})`; 
        btn.classList.add('liked');  
        // addNotification(`${post.user} liked your post: "${comment.content}"`);
    }

    try{
        const formData = new FormData(); 
        formData.append('comment_id', commentId);
        formData.append('liked', likedPosts[commentId] ? 'true' : 'false');

        const response = await fetch(`https://bnahs.pythonanywhere.com/api/user/react/comment/`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            body: formData,
            credentials: 'include',
        });
        const data = await response.json();
        if (response.ok) {
            console.log("Success Data: ", data);
            getNotifications();
        } else {
            console.log("Error Data: ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }


}



// Toggle comments section
function toggleComments(postId) { 
    const commentsSection = document.getElementById(`comments-${postId}`);
    commentsVisibility[postId] = commentsVisibility[postId] ? false : true; // Toggle visibility state
    commentsSection.style.display = commentsVisibility[postId] ? 'block' : 'none'; // Set display based on state
}

 
// Function to handle comment submission with Send button
async function submitCommentOnSend(postId, commentText , replied_to) {
    if (commentText.trim() !== "") {
        const currentTime = new Date().toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        const user = "John Doe"; // Replace with dynamic user data if available

        const comment = {
            text: commentText.trim(),
            user: user,
            time: currentTime
        };


        try{
            const formData = new FormData(); 
            formData.append('post_id', postId);
            formData.append('comment', commentText);
            replied_to && formData.append('replied_to', replied_to);
    
            const response1 = await fetch('https://bnahs.pythonanywhere.com/api/user/comment/post/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    
                },
                body: formData,
                credentials: 'include',
            });
        
            const data1 = await response1.json();
            if (response1.ok) {
                console.log("Success Data : ", data1);  
                getFeeds();
            } else {
                console.log("Error Data : ", data1);
            }
        } catch (e){
            console.log(e)
        }

 
    }
}


// Add a notification
function addNotification(message) {
    console.log(notifications);
    notifications.unshift(message);
    console.log(notifications);
    renderNotifications();
}

// Render the notifications
function renderNotifications() {
    const notificationList = document.getElementById('notificationList');
    notificationList.innerHTML = ''; // Clear previous notifications
    notifications.forEach((notification, index) => {
        notificationList.innerHTML += `
            <li>${notification}</li>
            ${index < notifications.length - 1 ? '<hr>' : ''} <!-- Add divider except for the last item -->
        `;
    });
}





function renderPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = ''; // Clear the feed

    posts.map((post) => {
        const postId = post.id;
        const commentCount = post.comments_count;

        // Create post container
        const postContent = document.createElement('div');
        postContent.classList.add('post-content');

        // Add user icon
        const userIcon = document.createElement('img');
        userIcon.src = school_image;
        userIcon.alt = "User Icon";
        userIcon.classList.add('small-user-icon');
        postContent.appendChild(userIcon);

        // Add user name
        const userName = document.createElement('p');
        userName.classList.add('user');
        userName.style.marginLeft = '65px';
        userName.style.marginTop = '-45px';
        userName.textContent = post.user;
        postContent.appendChild(userName);

        // Add post date
        const postDate = document.createElement('p');
        postDate.classList.add('date');
        postDate.textContent = post.date;
        postContent.appendChild(postDate);

        // Add post content
        const postText = document.createElement('p');
        postText.classList.add('text');
        postText.textContent = post.content;
        postContent.appendChild(postText);

        // Add post images
        post.imageSrc.forEach((src) => {
            const postImage = document.createElement('img');
            postImage.src = src;
            postImage.classList.add('feed-image');
            postContent.appendChild(postImage);
        });

        // Create post actions
        const postActions = document.createElement('div');
        postActions.classList.add('post-actions');

        const likeButton = document.createElement('button');
        likeButton.id = `likeButton-${postId}`;
        likeButton.classList.add('like-btn');
        likeButton.addEventListener('click', async () => toggleLike(postId, likeButton, post)); // Add click event listener = () => toggleLike(postId, likeButton , post);
        // likeButton.innerHTML = `<i><img src="assets/Facebook Like.png" alt="Like Icon"></i> Like (${post.likes})`;
        if (!post.is_liked) {
            likedPosts[postId] = false; 
            likeButton.innerHTML = `<i><img src="Facebook Like.png" alt="Like Icon"></i> Like (${post.likes})`; 
        } else{
            likedPosts[postId] = true;
            likeButton.innerHTML = `<i><img src="Blue Like.png" alt="Like Icon"></i> Like (${post.likes})`; 
        }
        postActions.appendChild(likeButton);

        const commentButton = document.createElement('button');
        commentButton.classList.add('comment-btn');
        commentButton.onclick = () => toggleComments(postId);
        commentButton.innerHTML = `<i><img src="Chat Bubble.png" alt="Comment Icon"></i> Comment (${commentCount})`;
        postActions.appendChild(commentButton);

        postContent.appendChild(postActions);

        // Create comments section
        const commentsSection = document.createElement('div');
        commentsSection.classList.add('comments-section');
        commentsSection.id = `comments-${postId}`;
        commentsSection.style.display = commentsVisibility[postId] ? 'block' : 'none';

        const commentInputWrapper = document.createElement('div');
        commentInputWrapper.classList.add('comment-input-wrapper');

        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.classList.add('comment-input');
        commentInput.id = `commentInput-${postId}`;
        commentInput.placeholder = 'Write a comment...';
        commentInputWrapper.appendChild(commentInput);

        const sendButton = document.createElement('button');
        sendButton.classList.add('send-btn');
        sendButton.onclick = () => submitCommentOnSend(postId, document.getElementById(`commentInput-${postId}`).value , null);
        sendButton.innerHTML = `<img src="Paper_Plane.png" alt="Send Icon" class="send-icon">`;
        commentInputWrapper.appendChild(sendButton);

        commentsSection.appendChild(commentInputWrapper);

        const commentList = document.createElement('div');
        commentList.classList.add('comment-list');


        post.comments.map((comment) => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            const commentUserIcon = document.createElement('img');
            let selected_faculty = undefined;
            faculties.map((faculty) => {
                if (faculty?.action_id == comment?.comment_owner) {
                    selected_faculty = faculty;
                }
            })

            if(selected_faculty?.profile){
                commentUserIcon.src = `https://bnahs.pythonanywhere.com${selected_faculty?.profile}`;
            } else if (selected_faculty?.school_logo) {
                commentUserIcon.src = `https://bnahs.pythonanywhere.com${selected_faculty?.school_logo}`;
            } else {
                commentUserIcon.src = "assets/User_Circle.png";
            }
            
            commentUserIcon.alt = "User Icon";
            commentUserIcon.classList.add('small-user-icon');
            commentDiv.appendChild(commentUserIcon);

            const commentUser = document.createElement('p');
            commentUser.classList.add('user');
            commentUser.style.marginLeft = '65px';
            commentUser.style.marginTop = '-35px';
            commentUser.textContent = selected_faculty?.fullname ? selected_faculty.fullname : selected_faculty?.school_name;
            commentDiv.appendChild(commentUser);

            const dateString = comment?.created_at ;  // Your date string
            const dateObject = new Date(dateString);  // Parse the date string into a Date object

            // Format the date using toLocaleString
            const formattedDate = dateObject.toLocaleString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric', 
                hour: 'numeric', 
                minute: 'numeric', 
                hour12: true 
            }); 
            // Add post date
            const commentPostDate = document.createElement('p');
            commentPostDate.classList.add('date');
            commentPostDate.textContent = formattedDate; 
            commentDiv.appendChild(commentPostDate);

            const commentText = document.createElement('p');
            commentText.style.marginLeft = '45px';
            commentText.style.marginTop = '10px';
            commentText.textContent = comment?.content;
            commentDiv.appendChild(commentText);

            const commentActions = document.createElement('div');
            commentActions.classList.add('post-actions');

            const commentLikeButton = document.createElement('button');
            commentLikeButton.classList.add('like-btn');
            commentLikeButton.onclick = () => toggleLikeComment(comment?.comment_id, commentLikeButton, comment , post);
            // commentLikeButton.innerHTML = `<i class="fas fa-thumbs-up" style="color:lightgray"></i> Like (${comment?.number_of_likes})`;

            if (!comment.liked) {
                likedPosts[comment?.comment_id] = false; 
                commentLikeButton.innerHTML = `<i><img src="Facebook Like.png" alt="Like Icon"></i> Like (${comment?.number_of_likes})`; 
            } else{
                likedPosts[comment?.comment_id] = true;
                commentLikeButton.innerHTML = `<i><img src="Blue Like.png" alt="Like Icon"></i> Like (${comment?.number_of_likes})`; 
            }



            commentActions.appendChild(commentLikeButton);

            // const replyButton = document.createElement('button');
            // replyButton.classList.add('reply-btn');
            // replyButton.onclick = () => showReplyInput(comment?.id);
            // replyButton.innerHTML = `<i class="fas fa-reply" style="color:lightgray"></i> Reply`;
            // commentActions.appendChild(replyButton);

            commentDiv.appendChild(commentActions);

            // const replyInputContainer = document.createElement('div');
            // replyInputContainer.classList.add('reply-input-container');
            // replyInputContainer.id = `replyInput-${comment?.id}`;
            // replyInputContainer.style.display = 'none';

            // const replyInputWrapper = document.createElement('div');
            // replyInputWrapper.classList.add('comment-input-wrapper');

            // const replyInput = document.createElement('input');
            // replyInput.type = 'text';
            // replyInput.classList.add('comment-input');
            // replyInput.id = `commentInput-${comment?.id}`;
            // replyInput.placeholder = 'Write a reply...';
            // replyInputWrapper.appendChild(replyInput);

            // const replySendButton = document.createElement('button');
            // replySendButton.classList.add('send-btn');
            // replySendButton.onclick = () => submitCommentOnSend(comment?.id, document.getElementById(`commentInput-${comment?.id}`).value , null);
            // replySendButton.innerHTML = `<img src="assets/Paper_Plane.png" alt="Send Icon" class="send-icon">`;
            // replyInputWrapper.appendChild(replySendButton);

            // replyInputContainer.appendChild(replyInputWrapper);

            // commentDiv.appendChild(replyInputContainer);

            commentList.appendChild(commentDiv);
        });

        commentsSection.appendChild(commentList);
        postContent.appendChild(commentsSection);

        feed.appendChild(postContent);
    });
}































































