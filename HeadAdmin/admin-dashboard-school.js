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
            
            window.location.href = '../../get-started.html'; 
        } else {
            
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
        
    
        // Reference the container where you want to append each school row
        const schoolContainer = document.querySelector('.school-logo-container'); // Use the correct container
        const baseURL = 'https://bnahs.pythonanywhere.com';
    
        // Clear previous logos
        schoolContainer.innerHTML = '';

        // Iterate over each school and create a row
        data.schools.forEach((school) => {
            if(school.is_accepted !== true){
                return;
            }
            // Create a new div for each school row
            const schoolRow = document.createElement('div');
            schoolRow.classList.add('school-logo'); // Just a single class

            // Set the inner HTML for each school logo
            schoolRow.innerHTML = `
                <img src="${baseURL}${school.school_logo}" alt="School Logo">
                <p class="school-name">${school.school_name}</p>
            `;

            // Append the created row to the container
            schoolContainer.appendChild(schoolRow);
        });
    } else {
        window.location.href = '../../get-started.html'; 
        
    }
});

