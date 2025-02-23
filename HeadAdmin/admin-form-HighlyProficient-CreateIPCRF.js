
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





async function createFolder() {
    const selectedYear = document.getElementById('form2').value;
    if (selectedYear) {

        const formData = new FormData();
        formData.append('position', 'Proficient');
        formData.append('school_year', String(document.getElementById('form2').value));


        const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/forms/ipcrf/create/',
            {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                }, 
                body: formData, 
                credentials: 'include', 
            }
        );


        const data = await response.json();
        if (response.ok) {
            
        } else {
            
        }

        const categoryContainer = document.getElementById('categoryContainer');
        const newCategory = document.createElement('div');
        newCategory.className = 'form-category';
        newCategory.innerHTML = `
            <div class="horizontal-background"></div>
            <h3 class="category-label">${selectedYear}</h3>
            <a href="admin-form-HighlyProficient-IPCRF-Parts.html" class="form-link">
                <div class="form-item">
                    <i class="fas fa-th-large custom-icon" style="color: #082F96;"></i>
                    IPCRF for Highly Proficient Teacher
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
        alert('Please select a school year.');
    }
}

selectedYears = []

async function populateFolders() {
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/forms/ipcrf/get/highly_proficient', {
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
                    <a href="admin-form-HighlyProficient-IPCRF-Parts.html" class="form-link">
                        <div class="form-item">
                            <i class="fas fa-th-large custom-icon" style="color: #082F96;"></i>
                            IPCRF for Highly Proficient Teacher
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
};


populateFolders();






// Function to close the modal
function closeModal() {
    document.getElementById('formModal').style.display = 'none';
}

// Hide modal initially when forms are displayed
document.addEventListener("DOMContentLoaded", closeModal);

async function createFolder() {
    const selectedYear = document.getElementById('form2').value;
    if (selectedYear) {
        const formData = new FormData();
        formData.append('position', 'Highly Proficient');
        formData.append('school_year', String(document.getElementById('form2').value));


        const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/forms/ipcrf/create/',
            {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                }, 
                body: formData, 
                credentials: 'include', 
            }
        );


        const data = await response.json();
        if (response.ok) {
            
        } else {
            
        }

        const categoryContainer = document.getElementById('categoryContainer');
        const newCategory = document.createElement('div');
        newCategory.className = 'form-category';
        newCategory.innerHTML = `
            <div class="horizontal-background"></div>
            <h3 class="category-label">${selectedYear}</h3>
            
            <a href="admin-form-HighlyProficient-IPCRF-Parts.html" class="form-link">
                <div class="form-item">
                    <i class="fas fa-th-large custom-icon" style="color: #082F96;"></i>
                    IPCRF for Highly Proficient Teacher
                </div>
            </a>
        `;

        // Insert the new category at the top of the categoryContainer
        categoryContainer.insertAdjacentElement('afterbegin', newCategory);
        
        // Optional: Add margin to the new category to pull it closer to the divider
        newCategory.style.marginTop = '-10px';  // Adjust this value as needed

        // Close the modal after creating the category
        alert('Form created succesfully.');
        closeModal();
    } else {
        alert('Please select a school year.');
    }
}

// Event listener to show the modal when the "Create" button is clicked
document.querySelector('.create-btn').addEventListener('click', async function() {
    document.getElementById('formModal').style.display = 'flex'; 

    
 
});



async function createFolder() {
    const selectedYear = document.getElementById('form2').value;

    if (!selectedYear) {
        alert('Please select a school year.');
        return;
    }

    if (selectedYears.includes(selectedYear)) {
        // Show duplicate year modal if there's a duplicate school year
        document.getElementById('duplicateYearModal').classList.remove('hidden');
        return;
    }    

    const formData = new FormData();
    formData.append('position', 'Highly Proficient');
    formData.append('school_year', selectedYear);

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
    } else {
        
    }

    // Create and add the new category HTML
    const categoryContainer = document.getElementById('categoryContainer');
    const newCategory = document.createElement('div');
    newCategory.className = 'form-category';
    newCategory.innerHTML = `
        <div class="horizontal-background"></div>
        <h3 class="category-label">${selectedYear}</h3>
        <a href="admin-form-HighlyProficient-IPCRF-Parts.html" class="form-link">
            <div class="form-item">
                <i class="fas fa-th-large custom-icon" style="color: #082F96;"></i>
                IPCRF for Highly Proficient Teacher
            </div>
        </a>
    `;
    categoryContainer.insertAdjacentElement('afterbegin', newCategory);

    // Close the modal after creation
    closeModal();
}


function closeDuplicateYearModal() {
    document.getElementById('duplicateYearModal').classList.add('hidden');
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("duplicateYearModal").classList.add("hidden");
});


