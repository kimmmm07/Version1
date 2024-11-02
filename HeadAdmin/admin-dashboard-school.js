const logoutButton = document.getElementById('logout-nav');  // Logout button
const logoutModal = document.getElementById('logoutModal');
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Show modal when logout is clicked
logoutButton.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default logout behavior
    logoutModal.classList.remove('hidden');  
});

// Hide modal when "No" is clicked
noButton.addEventListener('click', function() {
    logoutModal.classList.add('hidden'); 
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

window.addEventListener('load', async function() {
    const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/schools/', {
        method: 'GET',
        credentials: 'include'
    });
    
    const data = await response.json();
    
    if (response.ok) {
        console.log("Success Data:", data);
    
        // Reference the container where you want to append each school row
        const schoolContainer = document.querySelector('.dashboard-content');
        const baseURL = 'https://bnahs.pythonanywhere.com';
    
        // Clear previous rows if any (optional)
        schoolContainer.innerHTML = `
            <h1>Admin</h1>
            <h2 class="section-title">All</h2>
            <div class="horizontal-line"></div>
            <div class="search-container">
                <div class="search-input-wrapper">
                    <i class="fas fa-search search-icon"></i>
                    <input type="text" class="search-input" placeholder="Search">
                </div>
            </div>`;
    
        // Iterate over each school and create a row
        data.schools.forEach((school) => {
            // Create a new div for each school row
            const schoolRow = document.createElement('div');
            schoolRow.classList.add('school-row');
    
            // Set the inner HTML for each school row
            schoolRow.innerHTML = `
                <div class="school-logo-container">
                    <img src="${baseURL}${school.school_logo}" alt="School Logo">
                    <p class="school-name">${school.school_name}</p>
                </div>`;
    
            // Append the created row to the container
            schoolContainer.appendChild(schoolRow);
        });
    } else {
        console.log("Error Data:", data);
    }
    
 });

