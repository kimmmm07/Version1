// Function to close the modal
function closeModal() {
    document.getElementById('formModal').style.display = 'none';
}

// Function to open the modal
function openModal() {
    document.getElementById('formModal').style.display = 'flex';
}

// Hide modal initially when forms are displayed
document.addEventListener("DOMContentLoaded", closeModal);

const selectedYears = [];  // Array to store selected school years

// function createFolder() {
//     const selectedYear = document.getElementById('form2').value;

//     if (selectedYear) {
//         // Check if the selected year has already been created
//         if (selectedYears.includes(selectedYear)) {
//             alert('The selected school year already exists.');
//             return;
//         }

//         // Add the selected year to the array
//         selectedYears.push(selectedYear);

//         const categoryContainer = document.getElementById('categoryContainer');
//         const newCategory = document.createElement('div');
//         newCategory.className = 'form-category';
//         newCategory.innerHTML = `
//             <div class="horizontal-background"></div>
//             <h3 class="category-label">${selectedYear}</h3>
//             <a href="admin-form-Proficient-COT-Quarters.html" class="form-link">
//                 <div class="form-item">
//                     <i class="fas fa-file-alt custom-icon"></i>
//                     Rating Sheet for Proficient Teacher
//                 </div>
//             </a>
            
//         `;

//         // Insert the new category at the top of the categoryContainer
//         categoryContainer.insertAdjacentElement('afterbegin', newCategory);

//         // Disable the selected year option
//         document.querySelector(`#form2 option[value="${selectedYear}"]`).disabled = true;

//         // Optional: Add margin to the new category to pull it closer to the divider
//         newCategory.style.marginTop = '-10px';  // Adjust this value as needed

//         // Close the modal after creating the category
//         closeModal();
//     } else {
//         alert('Please select a school year.');
//     }
// }

// Event listener to show the modal when the "Create" button is clicked

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
        formData.append('type_proficient', 'Proficient');

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

        const categoryContainer = document.getElementById('categoryContainer');
        const newCategory = document.createElement('div');
        newCategory.className = 'form-category';
        newCategory.innerHTML = `
            <div class="horizontal-background"></div>
            <h3 class="category-label">${selectedYear}</h3>
            
            <a href="admin-form-HighlyProficient-COT-Quarters.html" class="form-link">
                <div class="form-item">
                    <i class="fas fa-file-alt"  style="color: #28a745;"></i>
                    Rating Sheet for Highly Proficient Teacher
                </div>
            </a>
        `;
        categoryContainer.insertAdjacentElement('afterbegin', newCategory);
        closeModal();
    } catch (error) {
        console.error('Error creating folder:', error);
    }
}

// document.getElementById('createBtn').addEventListener('click', createFolder);

async function populateFolders() {
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/evaluator/get/cot/proficient', {
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
                selectedYears.push(school_year);

                const categoryContainer = document.getElementById('categoryContainer');
                const newCategory = document.createElement('div');
                newCategory.className = 'form-category';
                newCategory.innerHTML = `
                    <div class="horizontal-background"></div>
                    <h3 class="category-label">${school_year}</h3>
                    <a href="admin-form-Proficient-COT-Quarters.html" class="form-link">
                        <div class="form-item">
                            <i class="fas fa-file-alt custom-icon"  style="color: #28a745;"></i>
                            Rating Sheet for Proficient Teacher
                        </div>
                    </a>
                    
                `;

                // Insert the new category at the top of the categoryContainer
                categoryContainer.insertAdjacentElement('afterbegin', newCategory);
            });
        } else {
            console.log("Error Data: ", data);
        }
    } catch (error) {
        console.error('Error fetching folders:', error);
    }
};


populateFolders();

document.querySelector('.create-btn').addEventListener('click', function() {
    document.getElementById('formModal').style.display = 'flex'; // Change to 'block' if necessary
});


// Okay button functionality to close duplicate modal
const okayButton = document.getElementById('okayBtn');  // Ensure the correct ID

okayButton.addEventListener('click', function() {
    document.getElementById('duplicateYearModal').classList.add('hidden');  // Close duplicate modal
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

