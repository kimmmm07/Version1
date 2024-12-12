// document.addEventListener('DOMContentLoaded', function() {
//             // Filter button functionality
            
//         });
window.addEventListener('load', async function () {
    const response = await fetch('https://bnahs.pythonanywhere.com/api/school/faculties/', {
        method: 'GET',
        credentials: 'include'
    });

    const data = await response.json();
    if (response.ok) {
        console.log("Success Data : ", data);

        // Extract the people array from the data
        const people = data.people;

        // Select the table body where rows will be appended
        const facultyList = document.getElementById('faculty-list');

        // Loop through the people array and filter by role
        people.forEach(person => {
            if ((person.role === 'Teacher' || person.role === 'Evaluator') && !person.is_deactivated) { 
                
                // Create a new table row
                const row = document.createElement('tr');
                row.classList.add('second-row');
                row.setAttribute('data-faculty-id', person.employee_id);

                // Extract full name
                const fullName = `${person.first_name} ${person.middle_name} ${person.last_name}`;

                // Format job started date
                const jobStartedDate = person.job_started 
                    ? new Date(person.job_started).toLocaleDateString("en-US", { month: 'numeric', day: 'numeric', year: 'numeric' }) 
                    : 'N/A';
                console.log("Profile ", person.profile);
                // Populate row with data
                row.innerHTML = `
                    <th>
                        <img class="user-icon" src="${person.profile ? `https://bnahs.pythonanywhere.com${person.profile}` : 'assets/User_Circle.png'}" alt="User Icon">
                        ${fullName}
                    </th>
                    <th>${person.position || 'N/A'}</th>
                    <th>${person.grade_level || 'N/A'}</th>
                    <th>${jobStartedDate}</th>
                    <th>
                        <button class="manage-btn deactivate-btn">Deactivate</button>
                    </th>
                `;

                // Append the row to the table body
                facultyList.appendChild(row);

                // Attach event listeners for new elements
                const manageButton = row.querySelector('.manage-btn');
                manageButton.addEventListener('click', function(event) {
                    // Prevent the click event from bubbling up to the window
                    event.stopPropagation();
                    // Toggle the "show" class on the sibling .dropdown element
                    const dropdown = this.nextElementSibling; // Get the dropdown that follows the button
                    if (dropdown) {
                        dropdown.classList.toggle('show');
                        console.log("Dropdown: ", dropdown);
                    }
                });

                const deactivateButton = row.querySelector('.deactivate-btn');
                deactivateButton.addEventListener('click', async function(event) {
                    event.preventDefault(); // Prevent default anchor behavior

                    // Get the faculty row
                    const facultyRow = this.closest('tr');
                    const facultyId = facultyRow.dataset.facultyId; 

                    const formData = new FormData();
                    formData.append('teacher_id', facultyId);
                    const response = await fetch('https://bnahs.pythonanywhere.com/api/school/faculty/deactivate/', {
                        method: 'POST',
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                        },  
                        credentials: 'include',
                        body: formData,
                    });
                
                    const data = await response.json();
                    if (!response.ok) {
                        console.log("Error Deactivating faculty member : ", data);
                        alert('Error deactivating faculty member');
                        return;
                    }  else {
                        alert("Deactivation succeeded");
                    }

                    // Move the faculty member to the deactivated list (if you have an array or state to track)
                    // Get the ID of the faculty
                    console.log(`Deactivating faculty ID: ${facultyId}`); // Log for verification
                    // You can use AJAX to send this ID to your server if needed

                    // For demo purposes, let's just remove it from the table for now
                    facultyRow.style.display = 'none'; // Or you could remove it completely
                });

                // Add delete button functionality if necessary
                const deleteButton = row.querySelector('.delete-btn');
                if (deleteButton) {
                    deleteButton.addEventListener('click', function(event) {
                        event.preventDefault(); // Prevent default anchor behavior

                        // Get the faculty row
                        const facultyRow = this.closest('tr');

                        // Remove the faculty member completely
                        facultyRow.remove(); // Remove the row from the table
                    });
                }
            }
        });
    } else {
        console.log("Error Data : ", data);
    }

    const filterButtons = document.querySelectorAll('.filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove the active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add the active class to the clicked button
            this.classList.add('active');
        });
    });

    // Close the dropdown if clicking outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.manage-btn')) {
            var dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(function(dropdown) {
                dropdown.classList.remove('show');
            });
        }
    }
});
