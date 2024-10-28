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
        const userData = {};

        // Loop through each school in the data and populate userData
        data.schools.forEach(school => {
            userData[school.name] = {
                email: school.email_address,
                school: school.school_name,
                address: school.school_address,
                type: school.school_type,
                id: school.school_id,
                contact: school.contact_number,
                school_logo: school.school_logo
            };
        });

        console.log("Formatted userData:", userData);

        // Populate HTML with the data
        const schoolRowWrapper = document.querySelector('.school-row-wrapper');

        // Remove existing example rows if any
        document.querySelectorAll('.school-row:not(.header)').forEach(row => row.remove());

        // Loop through userData and create rows
        for (const [name, details] of Object.entries(userData)) {
            const row = document.createElement('div');
            row.classList.add('school-row');

            row.innerHTML = `
                <div class="school-column">${name}</div>
                <div class="school-column school">${details.school}</div>
                <div class="school-column">${details.address}</div>
                <div class="school-column">${details.id}</div>
                <div class="school-column action">
                    <i class="fas fa-eye view-icon"></i> View
                </div>
            `;

            schoolRowWrapper.appendChild(row);
        }

        // Event delegation for view buttons
        schoolRowWrapper.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-icon')) {
                const row = e.target.closest('.school-row');
                const name = row.querySelector('.school-column').textContent.trim();
                const data = userData[name];

                document.getElementById('modal-name').textContent = name;
                document.getElementById('modal-email').textContent = data.email;
                document.getElementById('modal-school').textContent = data.school;
                document.getElementById('modal-address').textContent = data.address;
                document.getElementById('modal-type').textContent = data.type;
                document.getElementById('modal-id').textContent = data.id;
                document.getElementById('modal-contact').textContent = data.contact;
                document.getElementById('modal-logo').src = data.school_logo;

                modal.style.display = 'flex';
            }
        });
    } else {
        console.log("Error Data:", data);
    }
    
    // Close the modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal on clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
