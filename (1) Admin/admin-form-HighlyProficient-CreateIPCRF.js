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
            <a href="admin-form-Proficient-IPCRF-Parts.html" class="form-link">
                <div class="form-item">
                    <i class="fas fa-file-alt"></i>
                    IPCRF for Proficient Teacher
                </div>
            </a>
            <a href="admin-form-HighlyProficient-IPCRF-Parts.html" class="form-link">
                <div class="form-item">
                    <i class="fas fa-file-alt"></i>
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

