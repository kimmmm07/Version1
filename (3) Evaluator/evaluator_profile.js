function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.getElementById('profileImage');
        img.src = e.target.result; // Set the image source to the uploaded file
    };
    reader.readAsDataURL(file);
}
// JavaScript to toggle overlay visibility
document.getElementById("edit-education").addEventListener("click", function() {
    document.getElementById("education-overlay").style.display = "flex";
});

document.getElementById("close-overlay").addEventListener("click", function() {
    document.getElementById("education-overlay").style.display = "none";
});

document.getElementById("cancel-overlay").addEventListener("click", function() {
    document.getElementById("education-overlay").style.display = "none";
});

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
yesButton.addEventListener('click', function() {
    window.location.href = 'logout_page.html';  // Replace with actual logout URL
});