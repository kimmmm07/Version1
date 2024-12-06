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
const previewImage = document.getElementById("previewImage");
const removeImageBtn = document.getElementById("removeImageBtn");



const SchoolAdminUserIcon = document.getElementById("SchoolAdminUserIcon");











// Array to store posts
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
    const response = await fetch('https://bnahs.pythonanywhere.com/api/school/feeds/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );
    
    const data = await response.json();
    if (response.ok) {
        console.log("Success Data : ",data);
    } else {
        console.log("Error Data : ",data);
    }
};

getFeeds();

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
        } else {
            console.log("Error Data : ", school);
        }

    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

getSchoolDetails();


// // Get the announcement and mention buttons
// const announcementButton = document.querySelector('.announcement-btn');
// const mentionButton = document.querySelector('.mention-btn');

// // Open the post modal when the announcement or mention button is clicked
// announcementButton.addEventListener("click", function() {
//     modal.style.display = "block"; // Show the post modal
// });

// mentionButton.addEventListener("click", function() {
//     modal.style.display = "block"; // Show the post modal
// });

// Ensure the modals are hidden when the page loads
window.onload = function() {
    imageModal.style.display = "none"; // Hide image modal on page load
    modal.style.display = "none"; // Hide post modal on page load
    postImagePreview.style.display = "none"; // Hide the image preview by default
};


// Handle submitting the post from the modal
submitModalPostBtn.addEventListener("click", async function() {
    const modalPostContent = document.getElementById('modalPostContent').value;
    
    // Collect image sources from the preview
    const imageSrcs = Array.from(postImagePreview.getElementsByTagName('img')).map(img => img.src);

    if (modalPostContent || imageSrcs.length > 0) { // Check if there is content or images
        const postId = posts.length; // Use the current length as the post ID
        const post = {
            content: modalPostContent,
            imageSrc: imageSrcs, 
            likes: 0,
            comments: [],
            id: postId,
            user: "John Doe", // Replace with dynamic user data if needed
            date: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }) + ', ' + new Date().toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true // Makes time 12-hour format (AM/PM)
            })
        };
        posts.push(post);
        console.log(post);
        const formData = new FormData();
        formData.append('content', String(post.content));
        imageSrcs.forEach((imageSrc, index) => {
            // Create the key name for each image
            const keyName = `content_file_${index}`;
            
            // If imageSrc is a URL, fetch it as a Blob; otherwise, if it's already a Blob or File, append directly
            if (typeof imageSrc === 'string') {
                // Fetch the image as a Blob for uploading
                fetch(imageSrc)
                    .then(response => response.blob())
                    .then(blob => {
                        formData.append(keyName, blob, `image_${index}.jpg`); // Provide a filename
                    })
                    .catch(error => console.error("Error fetching image:", error));
            } else {
                // If imageSrc is already a File/Blob (like from a file input), directly append it
                formData.append(keyName, imageSrc);
            }
        });

        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/post/',
            {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                }, 
                body: formData, 
                credentials: 'include', 
            }
        );
        
        
        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ",data);
        } else {
            console.log("Error Data : ",data);
        }
        


        commentsVisibility[postId] = false; // Initialize visibility for the new post
        renderPosts();
        modal.style.display = "none"; // Close the modal
        document.getElementById('modalPostContent').value = ''; // Clear the textarea
        clearImagePreview(); // Clear the image preview
    }
});


function renderPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = ''; // Clear the feed before rendering
    posts.forEach((post) => {
        const commentCount = post.comments.length;

        let postHTML = `
            <div class="post-content">
                <p class="user">${post.user}</p>
                <p class="date">${post.date}</p>
                <p class="text">${post.content}</p>
        `;

        // Check if the post has images and render them
        if (post.imageSrc.length > 0) {
            post.imageSrc.forEach(src => {
                postHTML += `<img src="${src}" class="uploaded-image" alt="Uploaded Image" onerror="this.style.display='none';" />`;
            });
        }

        // Check if the post is liked to adjust the button
        const likedStatus = likedPosts[post.id] ? 'assets/blue like.png' : 'assets/Facebook Like.png';

        postHTML += `
                <div class="post-actions">
                    <button class="like-btn" onclick="toggleLike(${post.id}, this)">
                        <i><img src="${likedStatus}" alt="Like Icon"></i> Like (${post.likes})
                    </button>
                    <button class="comment-btn" onclick="toggleComments(${post.id})">
                        <i><img src="assets/Chat Bubble.png" alt="Comment Icon"></i> Comment (${commentCount})
                    </button>
                </div>
                <div class="comments-section" id="comments-${post.id}" style="display: ${commentsVisibility[post.id] ? 'block' : 'none'};">
                    <input type="text" class="comment-input" placeholder="Write a comment..." onkeypress="submitComment(event, ${post.id})">
                    <img src="assets/Paper_Plane.png" alt="Send Icon" class="send-icon">
                </div>
        `;

        if (commentCount > 0) {
            postHTML += `<div class="comment-list">`;
            post.comments.forEach((comment) => {
                postHTML += `
                    <div class="comment">
                        <p><strong>${comment.user}</strong> <em>${comment.time}</em></p>
                        <p>${comment.text}</p>
                    </div>
                `;
            });
            postHTML += `</div>`;
        }

        postHTML += `</div></div>`;

        feed.innerHTML += postHTML;
    });
}



// Create a likedPosts object to track liked posts by their IDs
let likedPosts = {};

function toggleLike(postId, btn) {
    const likeIcon = btn.querySelector('i img'); 

    console.log(`Toggling like for post ID: ${postId}`);
    console.log(`Current likes: ${posts[postId].likes}`);
    console.log(`Liked status before: ${likedPosts[postId]}`);

    if (likedPosts[postId]) {
        posts[postId].likes -= 1;
        likedPosts[postId] = false;
        likeIcon.src = 'assets/Facebook Like.png'; // Change back to default like icon
        btn.classList.remove('liked');
    } else {
        posts[postId].likes += 1;
        likedPosts[postId] = true;
        likeIcon.src = 'assets/blue like.png'; // Change to the blue like icon
        btn.classList.add('liked');

        addNotification(`Someone liked your post: "${posts[postId].content}"`);
    }

    console.log(`New likes: ${posts[postId].likes}`);
    renderPosts();
}



// // Open the image modal when the media button is clicked
// mediaButton.addEventListener("click", function() {
//     if (imageUploaded) {
//         // If an image is already uploaded, collapse the image modal content
//         postImagePreview.style.display = "none"; // Hide the image preview
//         clearImagePreview(); // Clear existing images
//         imageUploaded = false; // Reset the upload state
//     } else {
//         // Show the image modal content
//         imageModal.style.display = "flex"; // Show the image modal
//     }
// });


// Toggle comments section
function toggleComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    commentsVisibility[postId] = !commentsVisibility[postId]; // Toggle visibility state
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

// Add a notification
function addNotification(message) {
    notifications.push(message);
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
        postImagePreview.style.display = "none"; // Hide the image preview
        clearImagePreview(); // Clear existing images
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
    clearImagePreview(); // Clear previous images

    if (files.length > 0) {
        // Create an image element for each selected file
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img'); // Create an image element
                img.src = e.target.result; // Set the image source
                img.className = "uploaded-image"; // Add a class for styling
                img.style.maxWidth = '100%'; // Optionally style the image
                img.style.height = 'auto'; // Maintain aspect ratio

                // Append the image to the preview container
                postImagePreview.appendChild(img); // Add the image to the preview container
                postImagePreview.style.display = "block"; // Show the preview section
                imageUploaded = true; // Set the state to indicate an image is uploaded
            };
            reader.readAsDataURL(file); // Read the file
        });
    }
});

// Remove the image from the preview (clear all images)
removeImageBtn.addEventListener("click", function() {
    clearImagePreview(); // Clear all images from the preview
    postImagePreview.style.display = "none"; // Hide the preview section
    imageUploaded = false; // Reset the image upload state
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
        
