//Function to close the modal
function closeModal() {
    document.getElementById('formModal').style.display = 'none';
}

// Function to open the modal
function openModal() {
    document.getElementById('formModal').style.display = 'flex';
}


// Event listeners
document.getElementById('openModalBtn').addEventListener('click', openModal);
document.getElementById('cancelBtn').addEventListener('click', closeModal);

async function createFolder() {
    const selectedYear = String(document.getElementById('form2').value);
    if (selectedYear) {
        const formData = new FormData();
        formData.append('school_year', selectedYear);
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
        } else {
            console.log("Error Data: ", data);
        }

        // const categoryContainer = document.getElementById('categoryContainer');
        // const newCategory = document.createElement('div');
        // newCategory.className = 'form-category';
        // newCategory.innerHTML = `
        //     <div class="horizontal-background"></div>
        //     <h3 class="category-label">${selectedYear}</h3>
            
        //     <a href="admin-form-view-COT-HighlyProficient.html" class="form-link">
        //         <div class="form-item">
        //             <i class="fas fa-file-alt"></i>
        //             Rating Sheet for Highly Proficient Teacher
        //         </div>
        //     </a>
        // `;
        // categoryContainer.insertAdjacentElement('afterbegin', newCategory);
        closeModal();
    } else {
        alert('Please select a school year.');
    }
}

document.getElementById('createBtn').addEventListener('click', createFolder);



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
 
