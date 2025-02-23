
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



// Function to close the modal
function closeModal() {
    document.getElementById('formModal').style.display = 'none';
}

// Hide modal initially when forms are displayed
document.addEventListener("DOMContentLoaded", closeModal);

function createFolder() {
    const selectedYear = document.getElementById('form2').value;
    if (selectedYear) {
        const categoryContainer = document.getElementById('categoryContainer');
        const newCategory = document.createElement('div');
        newCategory.className = 'form-category';
        newCategory.innerHTML = `
            <div class="horizontal-background"></div>
            <h3 class="category-label">${selectedYear} - IPCRF</h3>
            
            <a href="admin-form-HighlyProficient-COT-Quarters.html" class="form-link">
                <div class="form-item">
                    <i class="fas fa-th-large"></i>
                    IPCRF for Highly Proficient Teacher
                </div>
            </a>
        `;

        // Insert the new category at the top of the categoryContainer
        categoryContainer.insertAdjacentElement('afterbegin', newCategory);
        
        // Optional: Add margin to the new category to pull it closer to the divider
        newCategory.style.marginTop = '-10px';  // Adjust this value as needed

        // Close the modal after creating the category
        closeModal();
    } else {
        alert('Please select a school year.');
    }
}

// Event listener to show the modal when the "Create" button is clicked
document.querySelector('.create-btn').addEventListener('click', function() {
    document.getElementById('formModal').style.display = 'flex'; // Change to 'block' if necessary
});

