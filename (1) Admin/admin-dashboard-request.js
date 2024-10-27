const logoutButton = document.getElementById('logout-nav');  // Logout button
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
    window.location.href = 'index.html';  // Replace with actual logout URL
});




// Modal handling
const modal = document.getElementById('modal-overlay');
const closeModal = document.querySelector('.close-button');
const viewButtons = document.querySelectorAll('.view-icon');

// Sample data for the modal (You can replace this with dynamic data)
const userData = {
    "John Doe": {
        email: "johndoe@school.edu",
        school: "Benigno “Ninoy” Aquino High School",
        address: "Taguig City, NCR",
        type: "Public",
        id: "300951",
        contact: "09123456789"
    },
    "Liam Carter": {
        email: "liamcarter@school.edu",
        school: "Upper Bicutan National High School",
        address: "Taguig City, NCR",
        type: "Public",
        id: "320605",
        contact: "09122334455"
    }
};

// Show modal with specific user data
viewButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const name = btn.closest('.school-row').querySelector('.school-column').textContent.trim();
        const data = userData[name];

        document.getElementById('modal-name').textContent = name;
        document.getElementById('modal-email').textContent = data.email;
        document.getElementById('modal-school').textContent = data.school;
        document.getElementById('modal-address').textContent = data.address;
        document.getElementById('modal-type').textContent = data.type;
        document.getElementById('modal-id').textContent = data.id;
        document.getElementById('modal-contact').textContent = data.contact;

        modal.style.display = 'flex';
    });
});

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

