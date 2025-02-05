function setActiveTab(tab) {
    const allStatus = document.getElementById('all-status');
    const archivedStatus = document.getElementById('archived-status');

    // Remove active class from both tabs
    allStatus.classList.remove('active');
    archivedStatus.classList.remove('active');

    // Set active tab based on the clicked tab
    if (tab === 'all') {
        allStatus.classList.add('active');
        // Add your logic to show "All" content
    } else if (tab === 'archived') {
        archivedStatus.classList.add('active');
        // Add your logic to show "Archived" content
    }
}

// Function to open modal
function openModal() {
    document.getElementById('formModal').style.display = 'flex';
}

// Function to close modal
function closeModal() {
    document.getElementById('formModal').style.display = 'none';
}

// Hide modal initially when forms are displayed
document.addEventListener("DOMContentLoaded", function() {
    closeModal();
});

// Redirect to a specific page when checkbox is checked
function redirectToPage(url) {
    const checkbox = event.target; // Get the checkbox that triggered the event
    if (checkbox.checked) {
        window.location.href = url; // Redirect to the specified URL
    }
}




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