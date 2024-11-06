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