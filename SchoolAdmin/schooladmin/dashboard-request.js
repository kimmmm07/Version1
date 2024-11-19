window.addEventListener('load', async function() { 
    // Modal handling
    const modal = document.getElementById('modal-overlay');
    const closeModal = document.querySelector('.close-button');

    const response = await fetch('https://bnahs.pythonanywhere.com/api/school/people/get/by_status/', {
        method: 'GET',
        credentials: 'include'
    });

    const result = await response.json();

    if (response.ok) {
        const data = result.all;
        console.log("Success Data:", data);
        const baseURL = 'https://bnahs.pythonanywhere.com';
        // Create the userData object
        const userData = [];

        // Loop through each school in the data and populate userData as an array
        data.forEach(people => { 
                userData.push({
                    name: people.fullname,
                    email: people.email_address,
                    people: people.fullname,
                    address: people.grade_level,
                    type: people.position,
                    id: people.employee_id,
                    contact: people.email_address,
                    school: people.position,
                }); 
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
                document.getElementById('modal-job-started').textContent = data.school;
                document.getElementById('modal-position').textContent = data.address;
                document.getElementById('modal-department').textContent = data.type;
                document.getElementById('modal-grade-level').textContent = data.id;
        
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

    

    // document.getElementById("decline-btn").addEventListener('click', async function () {
    //     const formData = new FormData();
        
    //     // Make sure to add data to formData before sending the request
    //     formData.append('school_id', String(document.getElementById('modal-id').textContent));

    //     const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/reject/', {
    //         method: 'POST',
    //         headers: {
    //             'X-Requested-With': 'XMLHttpRequest',
    //         },
    //         body: formData,
    //         credentials: 'include',
    //     });

    //     const data = await response.json();

    //     if (response.ok) {
    //         console.log("Success Data: ", data);
    //         alert("Request succeeded");
    //         window.location.href = 'admin-dashboard-request.html';
    //     } else {
    //         console.log("Error Data: ", data);
    //         alert("Request denied.");
    //     }
        
    // });


});
