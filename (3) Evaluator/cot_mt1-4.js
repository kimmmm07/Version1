function showQuarter(quarter) {
    document.querySelectorAll('.quarter-content').forEach(function(content) {
        content.classList.add('hidden');
    });

    document.querySelectorAll('.tabs a').forEach(function(tab) {
        tab.classList.remove('active');
    });

    document.getElementById(quarter).classList.remove('hidden');
    document.querySelector(`[onclick="showQuarter('${quarter}')"]`).classList.add('active');
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('status') === 'observed') {
    document.querySelectorAll('.button').forEach(function(button) {
        button.textContent = 'Observed';
        button.classList.remove('button');
        button.classList.add('disabled');
    });

    document.querySelectorAll('.disabled').forEach(function(button) {
        button.classList.remove('disabled');
        button.classList.add('button');
        button.style.cursor = 'pointer';
        button.style.color = '#007bff';
    });
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
yesButton.addEventListener('click', function() {
    window.location.href = 'logout_page.html';  // Replace with actual logout URL
});