// Function to close the modal
function closeModal() {
    document.getElementById('formModal').style.display = 'none';
}

// Hide modal initially when forms are displayed
document.addEventListener("DOMContentLoaded", closeModal);

const selectedYears = [];  // Array to store selected school years

function createFolder() {
    const selectedYear = document.getElementById('form2').value;

    if (selectedYear) {
        // Check if the selected year has already been created
        if (selectedYears.includes(selectedYear)) {
            alert('The selected school year already exists.');
            return;
        }

        // Add the selected year to the array
        selectedYears.push(selectedYear);

        const categoryContainer = document.getElementById('categoryContainer');
        const newCategory = document.createElement('div');
        newCategory.className = 'form-category';
        newCategory.innerHTML = `
            <div class="horizontal-background"></div>
            <h3 class="category-label">${selectedYear}</h3>
            <a href="admin-form-Proficient-COT-Quarters.html" class="form-link">
                <div class="form-item">
                    <i class="fas fa-file-alt custom-icon"></i>
                    Rating Sheet for Proficient Teacher
                </div>
            </a>
            
        `;

        // Insert the new category at the top of the categoryContainer
        categoryContainer.insertAdjacentElement('afterbegin', newCategory);

        // Disable the selected year option
        document.querySelector(`#form2 option[value="${selectedYear}"]`).disabled = true;

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
            console.log("Success Data : ", data); 
            window.location.href = '../../get-started.html'; 
        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});

