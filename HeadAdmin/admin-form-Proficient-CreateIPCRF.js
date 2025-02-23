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

// Initialize the selected years array
let selectedYears = [];

// Function to create the folder for Proficient
async function createFolder() {
    const selectedYear = document.getElementById('form2').value;

    // Check if a year is selected
    if (!selectedYear) {
        alert('Please select a school year.');
        return;
    }

    // Check if the selected year already exists
    if (selectedYears.includes(selectedYear)) {
        // Show duplicate year modal if there's a duplicate school year
        document.getElementById('duplicateYearModal').classList.remove('hidden');
        return;
    }

    // Prepare the form data to send to the backend API
    const formData = new FormData();
    formData.append('position', 'Proficient');
    formData.append('school_year', selectedYear);

    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/forms/ipcrf/create/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: formData,
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            
            selectedYears.push(selectedYear); // Add the new school year to prevent future duplicates

            // Create and add the new category HTML
            const categoryContainer = document.getElementById('categoryContainer');
            const newCategory = document.createElement('div');
            newCategory.className = 'form-category';
            newCategory.innerHTML = `
                <div class="horizontal-background"></div>
                <h3 class="category-label">${selectedYear}</h3>
                <a href="admin-form-Proficient-IPCRF-Parts.html" class="form-link">
                    <div class="form-item">
                        <i class="fas fa-th-large custom-icon"></i>
                        IPCRF for Proficient Teacher
                    </div>
                </a>
            `;
            // Insert the new category at the top of the categoryContainer
            categoryContainer.insertAdjacentElement('afterbegin', newCategory);

            // Optional: Add margin to the new category to pull it closer to the divider
            newCategory.style.marginTop = '-10px';  // Adjust this value as needed

            // Close the modal after creating the category
            alert('Form created successfully.');
            closeModal();
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

// Function to close the duplicate year modal
function closeDuplicateYearModal() {
    document.getElementById('duplicateYearModal').classList.add('hidden');
}

// Function to populate existing folders
async function populateFolders() {
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/forms/ipcrf/get/proficient', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
        });
        const data = await response.json();
        if (response.ok) {
            
            data.school_years.forEach(school_year => {
                selectedYears.push(school_year);

                const categoryContainer = document.getElementById('categoryContainer');
                const newCategory = document.createElement('div');
                newCategory.className = 'form-category';
                newCategory.innerHTML = `
                    <div class="horizontal-background"></div>
                    <h3 class="category-label">${school_year}</h3>
                    <a href="admin-form-Proficient-IPCRF-Parts.html" class="form-link">
                        <div class="form-item">
                            <i class="fas fa-th-large custom-icon"></i>
                            IPCRF for Proficient Teacher
                        </div>
                    </a>
                `;
                // Insert the new category at the top of the categoryContainer
                categoryContainer.insertAdjacentElement('afterbegin', newCategory);
            });
        } else {
            window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        console.error('Error fetching folders:', error);
    }
}

// Call populateFolders when the page loads to display existing folders
populateFolders();

// Event listener to show the modal when the "Create" button is clicked
document.querySelector('.create-btn').addEventListener('click', function() {
    document.getElementById('formModal').style.display = 'flex';
});

// Hide duplicate year modal when the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("duplicateYearModal").classList.add("hidden");
});
