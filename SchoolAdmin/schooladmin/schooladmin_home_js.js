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
let faculties = [];
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
                // 
                posts.push(post); // Add post to the beginning of the array
                // data[key]?.post?.notifications?.map((notification)=>{
                //     notifications.push(notification[1]);
                // })
            });
            renderPosts();
            // renderNotifications();
            
            
    
        } else {
            
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
            
            notifications = [];
            data?.notifications?.map((notification)=>{
                notifications.push(notification[1]);
            })
            renderNotifications();
        } else {
            
        }
    } catch (e) {
        console.log(e)

    }
}

async function getFaculties(){
    try{
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/faculties/',
            {
                method: 'GET',
                credentials: 'include'
            }
        );
        
        const data = await response.json();
        if (response.ok) {
            
            data?.people?.map((person)=>{
                faculties.push(person);
            }) 
        } else {
            
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
        
    } else {
        
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
            
            school_name = school.school_name
            school_image = school.school_logo ? 'https://bnahs.pythonanywhere.com' + school.school_logo : 'assets\User_Circle.png' ; // Update the school admin user icon with the retrieved image URL
            SchoolAdminUserIcon.src = school_image;
            
            getNotifications();
            await getFaculties();
            getFeeds();
        } else {
            window.location.href = '../../get-started.html'; 
            
        }

    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

window.addEventListener('load', async function () {
    setTimeout(getSchoolDetails, 100); 
});

 
 
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


    if (modalPostContent || imageSrcs.length > 0) {  
 
        const formData = new FormData();
        formData.append('content', modalPostContent);

        // Fetch all images and append them to formData
        const fetchPromises = imageSrcs.map(async (imageSrc, index) => {
            const response = await fetch(imageSrc);
            const blob = await response.blob();
            formData.append(`content_file_${index}`, blob, `image_${index}.jpg`);
        });
 
        await Promise.all(fetchPromises); 

        // Send POST request
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/post/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            body: formData,
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            
        } else {
            
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
            
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }

 
}


async function toggleLikeComment(commentId, btn, comment , post) {
    // Get the src of the likeButtonImg${postId}; 
  
  if (likedPosts[commentId]) {
        comment.number_of_likes -= 1;
      likedPosts[commentId] = false; 
      btn.innerHTML = `<i><img src="assets/Facebook Like.png" alt="Like Icon"></i> Like (${comment.number_of_likes})`;
      btn.classList.remove('liked'); 
  } else {
    comment.number_of_likes += 1;
      likedPosts[commentId] = true;
      btn.innerHTML = `<i><img src="assets/Blue Like.png" alt="Like Icon"></i> Like (${comment.number_of_likes})`; 
      btn.classList.add('liked');  
      addNotification(`${post.user} liked your post: "${comment.content}"`);
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
          
      } else {
          
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
                
                getFeeds();
            } else {
                
            }
        } catch (e){
            console.log(e)
        }

 
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
            
            window.location.href = '../../get-started.html'; 
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});
    




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
        sendButton.onclick = () => submitCommentOnSend(postId, document.getElementById(`commentInput-${postId}`).value , null);
        sendButton.innerHTML = `<img src="assets/Paper_Plane.png" alt="Send Icon" class="send-icon">`;
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
            commentUser.style.marginLeft = '45px';
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
                commentLikeButton.innerHTML = `<i><img src="assets/Facebook Like.png" alt="Like Icon"></i> Like (${comment?.number_of_likes})`; 
            } else{
                likedPosts[comment?.comment_id] = true;
                commentLikeButton.innerHTML = `<i><img src="assets/Blue Like.png" alt="Like Icon"></i> Like (${comment?.number_of_likes})`; 
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


























