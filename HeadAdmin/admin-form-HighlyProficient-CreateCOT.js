// Function to close the modal
function closeModal() {
    document.getElementById('formModal').style.display = 'none';
}

// Function to open the modal
function openModal() {
    document.getElementById('formModal').style.display = 'flex';
}

// Event listeners for opening and closing the modal
document.getElementById('openModalBtn').addEventListener('click', openModal);
document.getElementById('cancelBtn').addEventListener('click', closeModal);

const selectedYears = [];  // Array to store selected school years

// Function to check and create folder for a selected school year
async function createFolder() {
    const selectedYear = String(document.getElementById('form2').value);

    // Check if a school year is selected
    if (!selectedYear) {
        alert('Please select a school year.');
        return;
    }

    // Check for duplicate school year
    if (selectedYears.includes(selectedYear)) {
        document.getElementById('duplicateYearModal').classList.remove('hidden');
        return;
    }

    const formData = new FormData();
    formData.append('school_year', selectedYear);
    formData.append('type_proficient', 'Highly Proficient');  // Add other necessary data

    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/evaluator/create/cot/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: formData,
            credentials: 'include',
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Success Data: ", data);
            selectedYears.push(selectedYear);  // Store the selected year to prevent duplicates
        } else {
            console.log("Error Data: ", data);
        }

        // Create and display the new category
        const categoryContainer = document.getElementById('categoryContainer');
        const newCategory = document.createElement('div');
        newCategory.className = 'form-category';
        newCategory.innerHTML = `
            <div class="horizontal-background"></div>
            <h3 class="category-label">${selectedYear}</h3>
            <a href="admin-form-HighlyProficient-COT-Quarters.html" class="form-link">
                <div class="form-item">
                    <i class="fas fa-file-alt"></i>
                    Rating Sheet for Highly Proficient Teacher
                </div>
            </a>
        `;
        categoryContainer.insertAdjacentElement('afterbegin', newCategory);
        closeModal();  // Close the modal after folder creation
    } catch (error) {
        console.error('Error creating folder:', error);
    }
}

// Event listener for folder creation
document.getElementById('createBtn').addEventListener('click', createFolder);

// Function to populate existing folders
async function populateFolders() {
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/evaluator/get/cot/highly_proficient', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Success Data: ", data);
            data.school_years.forEach(school_year => {
                selectedYears.push(school_year);  // Store existing school years

                // Create and display each existing category
                const categoryContainer = document.getElementById('categoryContainer');
                const newCategory = document.createElement('div');
                newCategory.className = 'form-category';
                newCategory.innerHTML = `
                    <div class="horizontal-background"></div>
                    <h3 class="category-label">${school_year}</h3>
                    <a href="admin-form-HighlyProficient-COT-Quarters.html" class="form-link">
                        <div class="form-item">
                            <i class="fas fa-file-alt custom-icon"></i>
                            Rating Sheet for Highly Proficient Teacher
                        </div>
                    </a>
                `;
                categoryContainer.insertAdjacentElement('afterbegin', newCategory);
            });
        } else {
            window.location.href = '../../get-started.html'; 
            console.log("Error Data: ", data);
        }
    } catch (error) {
        console.error('Error fetching folders:', error);
    }
}

// Call function to populate folders when the page loads
populateFolders();


// Okay button functionality to close duplicate modal
const okayButton = document.getElementById('okayBtn');  // Ensure the correct ID

okayButton.addEventListener('click', function() {
    document.getElementById('duplicateYearModal').classList.add('hidden');  // Close duplicate modal
});



// Logout functionality
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

// Handle logout action when "Yes" is clicked
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
            window.location.href = '../../get-started.html';  // Redirect after logout
        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});

