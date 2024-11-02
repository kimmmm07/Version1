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