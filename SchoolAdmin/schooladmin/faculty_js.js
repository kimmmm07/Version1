document.addEventListener('DOMContentLoaded', function() {
            // Filter button functionality
            const filterButtons = document.querySelectorAll('.filter');
    
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove the active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add the active class to the clicked button
                    this.classList.add('active');
                });
            });
    
            // Dropdown functionality for "Manage" button
            const manageButtons = document.querySelectorAll('.manage-btn');
    
            manageButtons.forEach(button => {
                button.addEventListener('click', function(event) {
                    // Prevent the click event from bubbling up to the window
                    event.stopPropagation();
                    // Toggle the "show" class on the sibling .dropdown element
                    const dropdown = this.nextElementSibling; // Get the dropdown that follows the button
                    dropdown.classList.toggle('show');
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
    
            // Deactivate button functionality
            const deactivateButtons = document.querySelectorAll('.deactivate-btn a');
    
            deactivateButtons.forEach(button => {
                button.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default anchor behavior
    
                    // Get the faculty row
                    const facultyRow = this.closest('tr');
    
                    // Move the faculty member to the deactivated list (if you have an array or state to track)
                    const facultyId = facultyRow.dataset.facultyId; // Get the ID of the faculty
                    console.log(`Deactivating faculty ID: ${facultyId}`); // Log for verification
                    // You can use AJAX to send this ID to your server if needed
    
                    // For demo purposes, let's just remove it from the table for now
                    facultyRow.style.display = 'none'; // Or you could remove it completely
                });
            });
    
            // Delete button functionality
            const deleteButtons = document.querySelectorAll('.delete-btn a');
    
            deleteButtons.forEach(button => {
                button.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default anchor behavior
    
                    // Get the faculty row
                    const facultyRow = this.closest('tr');
    
                    // Remove the faculty member completely
                    facultyRow.remove(); // Remove the row from the table
                });
            });
        });

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
                    if (person.role === 'Teacher' || person.role === 'Evaluator') {
                        
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
        
                        // Populate row with data
                        row.innerHTML = `
                            <th>
                                <div class="user-icon"></div>
                                ${fullName}
                            </th>
                            <th>${person.position || 'N/A'}</th>
                            <th>${person.grade_level || 'N/A'}</th>
                            <th>${jobStartedDate}</th>
                            <th>
                                <button class="manage-btn">Manage <span>&#9662;</span></button>
                                <div class="dropdown">
                                    <ul class="dropdown-menu">
                                        <li class="deactivate-btn">
                                            <a href="#">
                                                <img src="assets/Shutdown.png" alt="Deactivate Icon" class="icon">
                                                Deactivate
                                            </a>
                                        </li>
                                        <li class="delete-btn">
                                            <a href="#" style="color: #A21718;">
                                                <img src="assets/Trash.png" alt="Delete Icon" class="icon">
                                                Delete
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </th>
                        `;
        
                        // Append the row to the table body
                        facultyList.appendChild(row);
                    }
                });
            } else {
                console.log("Error Data : ", data);
            }
        });
        