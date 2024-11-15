const logoutButton = document.getElementById('logout-nav');  // Logout button
const logoutModal = document.getElementById('logoutModal');
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Show modal when logout is clicked
logoutButton.addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default logout behavior
    logoutModal.classList.remove('hidden');  // Show modal by removing 'hidden' class
});

// Hide modal when "No" is clicked
noButton.addEventListener('click', function () {
    logoutModal.classList.add('hidden');  // Hide modal by adding 'hidden' class
});

// Redirect when "Yes" is clicked
yesButton.addEventListener('click', async function () {
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
            console.log("Success Data:", data);
            window.location.href = '../../get-started.html';
        } else {
            console.log("Error Data:", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});

// Load school data
window.addEventListener('load', async function () {
    const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/schools/', {
        method: 'GET',
        credentials: 'include'
    });

    const data = await response.json();
    if (response.ok) {
        console.log("Success Data:", data);

        const schoolRowWrapper = document.querySelector('.school-row-wrapper');

        // Remove existing rows except for the header
        document.querySelectorAll('.school-row:not(.header)').forEach(row => row.remove());

        // Loop through schools and create rows if they are accepted
        data.schools.forEach(school => {
            if (school.is_declined) {
                const row = document.createElement('div');
                row.classList.add('school-row');
                row.innerHTML = `
                    <div class="school-column">${school.name}</div>
                    <div class="school-column school">${school.school_name}</div>
                    <div class="school-column">${school.school_address}</div>
                    <div class="school-column">${school.school_id}</div>
                    <div class="school-column status">Declined</div>
                    <div class="school-column status"></div>
                    <div class="school-column action">
                        <i class="fas fa-trash-alt delete-icon" data-id="${school.school_id}"></i> Delete
                    </div>
                `;
                schoolRowWrapper.appendChild(row);
            }
        });

        // Add event listener to delete icons
        document.querySelectorAll('.delete-icon').forEach(icon => {
            icon.addEventListener('click', handleDelete);
        });

    } else {
        console.log("Error Data:", data);
    }
});

// Function to handle delete confirmation
function handleDelete(event) {
    const schoolId = event.target.getAttribute('data-id');
    
    // Debug log to check if schoolId is correctly captured
    console.log("Deleting school with ID:", schoolId);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                // Send DELETE request to the server
                const response = await fetch(`https://bnahs.pythonanywhere.com/api/admin/delete-school/${schoolId}/`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    credentials: 'include'
                });

                // Parse the response data
                const data = await response.json();

                // Check if the deletion was successful
                if (response.ok) {
                    console.log("Delete successful:", data);
                    Swal.fire("Deleted!", "The school has been deleted.", "success");
                    
                    // Remove the row from the DOM
                    event.target.closest('.school-row').remove();
                } else {
                    console.log("Failed to delete:", data);
                    Swal.fire("Error!", "Failed to delete the school.", "error");
                }
            } catch (error) {
                console.error("Error during delete:", error);
                Swal.fire("Error!", "An error occurred while deleting.", "error");
            }
        }
    });
}

