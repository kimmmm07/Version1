





// Get all dropdown headers
const dropdownHeaders = document.querySelectorAll('.dropdown-header');

dropdownHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
        // Toggle the active class on the parent dropdown item
        const parentItem = header.parentElement;
        parentItem.classList.toggle('active');
    });
});


// Floating menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
const floatingMenu = document.getElementById('floating-menu');
floatingMenu.style.display = floatingMenu.style.display === 'block' ? 'none' : 'block';
});

function closeMenu() {
document.getElementById('floating-menu').style.display = 'none';
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



// Update the status counts dynamically (Example for KRA 1)
function updateStatusCounts() {
    document.getElementById('statusNumberTurnedIn1').innerText = '5'; 
    document.getElementById('statusNumberAssigned1').innerText = '3'; 
    document.getElementById('statusNumberGraded1').innerText = '2'; 
    // add other KRAs here.
}

// Call updateStatusCounts on page load
document.addEventListener('DOMContentLoaded', updateStatusCounts);