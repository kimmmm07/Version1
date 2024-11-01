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
yesButton.addEventListener('click', function() {
    window.location.href = 'index.html';  // Replace with actual logout URL
});
 



window.addEventListener('load', async function() { 
    // Modal handling
    const modal = document.getElementById('modal-overlay');
    const closeModal = document.querySelector('.close-button');

    const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/schools/', {
        method: 'GET',
        credentials: 'include'
    });

    const data = await response.json();

    if (response.ok) {
        console.log("Success Data:", data);

        // Create the userData object
        const userData = [];

        // Loop through each school in the data and populate userData as an array
        data.schools.forEach(school => {
            if (school.is_verified == true && school.is_accepted == false){
                userData.push({
                    name: school.name,
                    email: school.email_address,
                    school: school.school_name,
                    address: school.school_address,
                    type: school.school_type,
                    id: school.school_id,
                    contact: school.contact_number,
                    school_logo: school.school_logo
                });
            }
        });
        
        console.log("Formatted userData:", userData);
        
        // Populate HTML with the data
        const schoolRowWrapper = document.querySelector('.school-row-wrapper');
        
        // Remove existing example rows if any
        document.querySelectorAll('.school-row:not(.header)').forEach(row => row.remove());
        
        // Loop through userData array and create rows
        userData.forEach(details => {
            const row = document.createElement('div');
            row.classList.add('school-row');
        
            row.innerHTML = `
                <div class="school-column">${details.name}</div>
                <div class="school-column school">${details.school}</div>
                <div class="school-column">${details.address}</div>
                <div class="school-column">${details.id}</div>
                <div class="school-column action">
                    <i class="fas fa-eye view-icon"></i> View
                </div>
            `;
        
            // Attach school data to the row for easy access in modal
            row.schoolData = details;
        
            schoolRowWrapper.appendChild(row);
        });
        
        // Add event listener for View icon click
        schoolRowWrapper.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-icon')) {
                const row = e.target.closest('.school-row');
                const data = row.schoolData;  // Access the row's attached school data
        
                // Populate modal fields with the specific school's data
                document.getElementById('modal-name').textContent = data.name;
                document.getElementById('modal-email').textContent = data.email;
                document.getElementById('modal-school').textContent = data.school;
                document.getElementById('modal-address').textContent = data.address;
                document.getElementById('modal-type').textContent = data.type;
                document.getElementById('modal-id').textContent = data.id;
                document.getElementById('modal-contact').textContent = data.contact;
                document.getElementById('modal-logo').src = data.school_logo;
        
                // Display modal
                modal.style.display = 'flex';
            }   
        });
    } else {
        console.log("Error Data:", data);
    }
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById("accept-btn").addEventListener('click', async function () {
        const formData = new FormData();
        
        // Make sure to add data to formData before sending the request
        formData.append('school_id', String(document.getElementById('modal-id').textContent));

        const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/schools/add/', {
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
            alert("Request succeeded");
            window.location.href = 'admin-dashboard-request.html';
        } else {
            console.log("Error Data: ", data);
            alert("Request denied.");
        }
    });

    document.getElementById("decline-btn").addEventListener('click', async function () {
        const formData = new FormData();
        
        // Make sure to add data to formData before sending the request
        formData.append('school_id', String(document.getElementById('modal-id').textContent));

        const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/reject/', {
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
            alert("Request succeeded");
            window.location.href = 'admin-dashboard-request.html';
        } else {
            console.log("Error Data: ", data);
            alert("Request denied.");
        }
    });


});
