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