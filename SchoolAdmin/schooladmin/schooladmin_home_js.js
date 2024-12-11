// Get the modal elements
const modal = document.getElementById("postModal");
const startPostButton = document.getElementById("startPostButton");
const closeModalBtn = document.querySelector(".close");
const submitModalPostBtn = document.getElementById("submitModalPost");
const mediaButton = document.querySelector('.media-btn');

// Get the image modal elements
var imageModal = document.getElementById("imageModal");
var imageButton = document.getElementById("imageButton");
var closeImageModal = document.querySelector(".close-image-modal");

// Get the image upload button and input
const uploadImageButton = document.getElementById("uploadImageButton");
const uploadImageInput = document.getElementById("uploadImage");

// Get the post image preview elements
const postImagePreview = document.getElementById("postImagePreview"); 
const removeImageBtn = document.getElementById("removeImageBtn");



const SchoolAdminUserIcon = document.getElementById("SchoolAdminUserIcon"); 





// Array to store posts
let school_name = "";
let school_image = "";
let posts = [];
let notifications = [];
const commentsVisibility = {}; // Track visibility of comments sections

// Ensure the modals are hidden when the page loads
window.onload = function() {
    imageModal.style.display = "none"; // Hide image modal on page load
    modal.style.display = "none"; // Hide post modal on page load
    postImagePreview.style.display = "none"; // Hide the image preview by default
};

// Open the post modal when clicking on "Start a post" input
startPostButton.addEventListener("click", function() {
    modal.style.display = "block";
});

// Close the post modal when clicking on the close button
closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the post modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


let school = undefined;

async function getFeeds() {
    try{
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/feeds/',
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
                    comments: data[key]?.comments,
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
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/post/notifications/',
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
        const response1 = await fetch('https://bnahs.pythonanywhere.com/api/school/profile/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            }, 
            credentials: 'include',
        });
    
        school = await response1.json();
        if (response1.ok) {
            console.log("Success Data : ", school); 
            school_name = school.school_name
            school_image = school.school_logo ? 'https://bnahs.pythonanywhere.com' + school.school_logo : 'assets\User_Circle.png' ; // Update the school admin user icon with the retrieved image URL
            SchoolAdminUserIcon.src = school_image;
                        
            getFeeds();
            getNotifications();
        } else {
            console.log("Error Data : ", school);
        }

    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

getSchoolDetails();





async function commentOnPost(){
    try{
        const formData = new FormData(); 
        formData.append('post_id', '');
        formData.append('comment', '');
        formData.append('replied_to', '');

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
        } else {
            console.log("Error Data : ", data1);
        }
    } catch (e){
        console.log(e)
    }
}








 
// Ensure the modals are hidden when the page loads
window.onload = function() {
    imageModal.style.display = "none"; // Hide image modal on page load
    modal.style.display = "none"; // Hide post modal on page load
    postImagePreview.style.display = "none"; // Hide the image preview by default
};


  

submitModalPostBtn.addEventListener("click", async function() {
    const modalPostContent = document.getElementById('modalPostContent').value;
    
    if (!modalPostContent){
        alert("Please Enter Content");
        return;
    }

    // Get image sources from preview
    const imageSrcs = Array.from(postImagePreview.getElementsByTagName('img')).map(img => img.src);

    // console.log(imageSrcs)

    if (modalPostContent || imageSrcs.length > 0) { // Check for content or images
        // const postId = posts.length;
        // const post = {
        //     content: modalPostContent,
        //     imageSrc: imageSrcs,
        //     likes: 0,
        //     is_liked : false,
        //     comments: [],
        //     id: postId,
        //     user: school_name,
        //     date: new Date().toLocaleString('en-US', { 
        //         month: 'long', day: 'numeric', year: 'numeric', 
        //         hour: 'numeric', minute: 'numeric', hour12: true 
        //     })
        // };
        // // console.log(post);
        // posts.unshift(post); // Add post to the beginning of the array

        const formData = new FormData();
        formData.append('content', modalPostContent);

        // Fetch all images and append them to formData
        const fetchPromises = imageSrcs.map(async (imageSrc, index) => {
            const response = await fetch(imageSrc);
            const blob = await response.blob();
            formData.append(`content_file_${index}`, blob, `image_${index}.jpg`);
        });

        // Wait for all image fetches to complete
        await Promise.all(fetchPromises);

        // Now log formData after all images have been appended
        // for (let [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }
         

        // Send POST request
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/post/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            body: formData,
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data: ", data);
        } else {
            console.log("Error Data: ", data);
        }

        // commentsVisibility[postId] = false; // Initialize comments visibility 
        getFeeds();
        getNotifications();
        modal.style.display = "none"; // Close modal
        document.getElementById('modalPostContent').value = ''; // Clear textarea
        clearImagePreview(); // Clear image preview
    }
});





 

// Create a likedPosts object to track liked posts by their IDs
let likedPosts = {};

async function toggleLike(postId, btn, post) {
      // Get the src of the likeButtonImg${postId}; 
    
    if (likedPosts[postId]) {
        post.likes -= 1;
        likedPosts[postId] = false; 
        btn.innerHTML = `<i><img src="assets/Facebook Like.png" alt="Like Icon"></i> Like (${post.likes})`;
        btn.classList.remove('liked'); 
    } else {
        post.likes += 1;
        likedPosts[postId] = true;
        btn.innerHTML = `<i><img src="assets/Blue Like.png" alt="Like Icon"></i> Like (${post.likes})`; 
        btn.classList.add('liked');  
        addNotification(`${post.user} liked your post: "${post.content}"`);
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

// Function to handle comment submission
function submitComment(event, postId) {
    if (event.key === 'Enter' && event.target.value.trim() !== "") {
        const commentText = event.target.value.trim(); // Get the comment text
        const currentTime = new Date().toLocaleString('en-US', {
            month: 'long', // Full month name
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true // Makes time 12-hour format (AM/PM)
        }); // Get current date and time
        const user = "John Doe"; // Hardcoded user name (replace this with dynamic user info)

        // Create a comment object
        const comment = {
            text: commentText,
            user: user,
            time: currentTime // Use the formatted currentTime here
        };

        // Add the comment to the correct post
        posts[postId].comments.push(comment);

        // Clear the input field after submission
        event.target.value = '';

        // Add a notification in the format "(Name) commented on your post"
        addNotification(`${user} commented on your post: "${posts[postId].content}"`);

        // Re-render the posts to show the new comment and updated count
        renderPosts();
    }
}

// Function to handle comment submission with Send button
function submitCommentOnSend(postId, commentText) {
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

        // Add the comment to the appropriate post
        posts[postId].comments.push(comment);

        // Re-render the posts to show the new comment
        renderPosts();
    }
}


function showReplyInput(commentId) {
    const replyInput = document.getElementById(`replyInput-${commentId}`);
    if (replyInput.style.display === "none" || replyInput.style.display === "") {
        replyInput.style.display = "block"; // Show reply input
    } else {
        replyInput.style.display = "none"; // Hide reply input
    }
}


// Add a notification
function addNotification(message) {
    notifications.unshift(message);
    renderNotifications();
}

// Render the notifications
function renderNotifications() {
    const notificationList = document.getElementById('notificationList');
    notificationList.innerHTML = ''; // Clear previous notifications
    notifications.forEach((notification) => {
        notificationList.innerHTML += `<li>${notification}</li>`;
    });
}

/* Custom Dropdown JavaScript */

// Get elements
const dropdownSelected = document.querySelector('.dropdown-selected');
const dropdownOptions = document.querySelector('.dropdown-options');
const dropdownItems = document.querySelectorAll('.dropdown-options li');

// Toggle dropdown options on click
dropdownSelected.addEventListener('click', function () {
    dropdownOptions.style.display = dropdownOptions.style.display === 'block' ? 'none' : 'block';
});

// Handle selecting an option
dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
        // Update selected option
        const iconSrc = item.querySelector('img').src;
        const text = item.textContent.trim();
        dropdownSelected.innerHTML = `<img src="${iconSrc}" alt="Selected Icon" class="option-icon" /><span>${text}</span>`;

        // Hide options
        dropdownOptions.style.display = 'none';
    });
});

// Hide dropdown if clicked outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.custom-dropdown')) {
        dropdownOptions.style.display = 'none';
    }
});

// Add a variable to track if an image is uploaded
let imageUploaded = false;

// Open the image modal when the image button is clicked
imageButton.addEventListener("click", function() {
    if (imageUploaded) {
        // If an image is already uploaded, collapse the image modal content
        // postImagePreview.style.display = "none"; // Hide the image preview
        // clearImagePreview(); // Clear existing images
        imageUploaded = false; // Reset the upload state
    } else {
        // Show the image modal content
        modal.style.display = "none"; // Hide the post modal
        imageModal.style.display = "flex"; // Show the image modal
    }
});

// Clear the existing images before showing new ones
function clearImagePreview() {
    postImagePreview.innerHTML = ''; // Clear previous images
}

// Handle file upload and preview for multiple images
uploadImageInput.addEventListener("change", function() {
    const files = this.files; // Get the selected files
    // clearImagePreview(); // Clear previous images

    if (files.length > 0) {
        // Create an image element for each selected file
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img'); // Create an image element
                img.src = e.target.result; // Set the image source
                img.className = "uploaded-image"; // Add a class for styling  
                // Append the image to the preview container
                postImagePreview.appendChild(img); // Add the image to the preview container
                postImagePreview.style.display = "flex"; // Show the preview section
                imageUploaded = true; // Set the state to indicate an image is uploaded
            };
            reader.readAsDataURL(file); // Read the file
        });
        imageModal.style.display = "none"; // Hide the image modal
        modal.style.display = "block"; // Show the post modal again
    }

});


// Close the image modal when the close button is clicked and show the post modal again
closeImageModal.addEventListener("click", function() {
    imageModal.style.display = "none"; // Hide the image modal
    modal.style.display = "block"; // Show the post modal again
});

// Close the image modal when user clicks anywhere outside of the modal and show the post modal again
window.addEventListener("click", function(event) {
    if (event.target == imageModal) {
        imageModal.style.display = "none"; // Hide the image modal
        modal.style.display = "block"; // Show the post modal again
    }
});

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
    




function renderPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = ''; // Clear the feed

    posts.forEach((post) => {
        const postId = post.id;
        const commentCount = post.comments.length;

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
        userName.style.marginLeft = '45px';
        userName.style.marginTop = '-35px';
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
            likeButton.innerHTML = `<i><img src="assets/Facebook Like.png" alt="Like Icon"></i> Like (${post.likes})`; 
        } else{
            likedPosts[postId] = true;
            likeButton.innerHTML = `<i><img src="assets/Blue Like.png" alt="Like Icon"></i> Like (${post.likes})`; 
        }
        postActions.appendChild(likeButton);

        const commentButton = document.createElement('button');
        commentButton.classList.add('comment-btn');
        commentButton.onclick = () => toggleComments(postId);
        commentButton.innerHTML = `<i><img src="assets/Chat Bubble.png" alt="Comment Icon"></i> Comment (${commentCount})`;
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
        sendButton.onclick = () => submitCommentOnSend(postId, document.getElementById(`commentInput-${postId}`).value);
        sendButton.innerHTML = `<img src="assets/Paper_Plane.png" alt="Send Icon" class="send-icon">`;
        commentInputWrapper.appendChild(sendButton);

        commentsSection.appendChild(commentInputWrapper);

        const commentList = document.createElement('div');
        commentList.classList.add('comment-list');

        post.comments.forEach((comment) => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            const commentUserIcon = document.createElement('img');
            commentUserIcon.src = "assets/User_Circle.png";
            commentUserIcon.alt = "User Icon";
            commentUserIcon.classList.add('small-user-icon');
            commentDiv.appendChild(commentUserIcon);

            const commentUser = document.createElement('p');
            commentUser.classList.add('user');
            commentUser.style.marginLeft = '45px';
            commentUser.style.marginTop = '-35px';
            commentUser.textContent = comment.user;
            commentDiv.appendChild(commentUser);

            const commentText = document.createElement('p');
            commentText.style.marginLeft = '45px';
            commentText.style.marginTop = '10px';
            commentText.textContent = comment.text;
            commentDiv.appendChild(commentText);

            const commentActions = document.createElement('div');
            commentActions.classList.add('post-actions');

            const commentLikeButton = document.createElement('button');
            commentLikeButton.classList.add('like-btn');
            commentLikeButton.onclick = () => toggleLike(comment.id, commentLikeButton);
            commentLikeButton.innerHTML = `<i class="fas fa-thumbs-up" style="color:lightgray"></i> Like (${comment.likes})`;
            commentActions.appendChild(commentLikeButton);

            const replyButton = document.createElement('button');
            replyButton.classList.add('reply-btn');
            replyButton.onclick = () => showReplyInput(comment.id);
            replyButton.innerHTML = `<i class="fas fa-reply" style="color:lightgray"></i> Reply`;
            commentActions.appendChild(replyButton);

            commentDiv.appendChild(commentActions);

            const replyInputContainer = document.createElement('div');
            replyInputContainer.classList.add('reply-input-container');
            replyInputContainer.id = `replyInput-${comment.id}`;
            replyInputContainer.style.display = 'none';

            const replyInputWrapper = document.createElement('div');
            replyInputWrapper.classList.add('comment-input-wrapper');

            const replyInput = document.createElement('input');
            replyInput.type = 'text';
            replyInput.classList.add('comment-input');
            replyInput.id = `commentInput-${comment.id}`;
            replyInput.placeholder = 'Write a reply...';
            replyInputWrapper.appendChild(replyInput);

            const replySendButton = document.createElement('button');
            replySendButton.classList.add('send-btn');
            replySendButton.onclick = () => submitCommentOnSend(comment.id, document.getElementById(`commentInput-${comment.id}`).value);
            replySendButton.innerHTML = `<img src="assets/Paper_Plane.png" alt="Send Icon" class="send-icon">`;
            replyInputWrapper.appendChild(replySendButton);

            replyInputContainer.appendChild(replyInputWrapper);

            commentDiv.appendChild(replyInputContainer);

            commentList.appendChild(commentDiv);
        });

        commentsSection.appendChild(commentList);
        postContent.appendChild(commentsSection);

        feed.appendChild(postContent);
    });
}


























