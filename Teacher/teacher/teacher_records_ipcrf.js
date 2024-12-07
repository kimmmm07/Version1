// Main container and header
const container = document.getElementById('container');
const header = document.getElementById('header');

// Tabs
const cotTab = document.getElementById('cot-tab');
const ipcrfTab = document.getElementById('ipcrf-tab');
const rpmsTab = document.getElementById('rpms-tab');

// Filters
const filters = document.getElementById('filters');
const filterBox = document.getElementById('filter-box');
const schoolYearFilter = document.getElementById('school-year-filter');
const teacherStatusFilter = document.getElementById('teacher-status-filter');

// Table and rows
const recordsTable = document.getElementById('recordsTable');
const tableHeader = document.getElementById('tableHeader');
const facultyList = document.getElementById('faculty-list');

// Individual row elements
const userIcon = document.getElementById('userIcon');
const viewLink = document.getElementById('viewLink');
const eyeIcon = document.getElementById('eyeIcon');

// Dropdown menu and buttons
const threeDotsBtn = document.getElementById('threeDotsBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownOptions = document.getElementById('dropdownOptions');
const deactivateIcon = document.getElementById('deactivateIcon');
const downloadIcon = document.getElementById('downloadIcon');




// Modal logic
const logoutButton = document.getElementById('logoutLink');  // Logout button
const logoutModal = document.getElementById('logoutModal');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');

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
// yesButton.addEventListener('click', async function() {
//     try {
        
//         const response = await fetch('https://bnahs.pythonanywhere.com/api/user/logout/', {
//             method: 'POST',
//             headers: {
//                 'X-Requested-With': 'XMLHttpRequest',
                
//             },
//             credentials: 'include',
//         });

//         const data = await response.json();
//         if (response.ok) {
//             console.log("Success Data : ", data); 
//             window.location.href = '../../get-started.html'; 
//         } else {
//             console.log("Error Data : ", data);
//         }
//     } catch (error) {
//         console.error("Error during fetch:", error);
//     }
// });





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
    const manageButtons = document.querySelectorAll('.three-dots-btn');

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
        if (!event.target.matches('.three-dots-btn')) {
            var dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(function(dropdown) {
                dropdown.classList.remove('show');
            });
        }
    }

    // Delete button functionality (previously deactivate-btn)
    const deleteButtons = document.querySelectorAll('.deactivate-btn a'); // Previously deactivate-btn

    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the faculty row
            const facultyRow = this.closest('tr');

            // Remove the faculty member completely (delete functionality)
            facultyRow.remove(); // Remove the row from the table
        });
    });

    // Download button functionality (previously delete-btn)
    const downloadButtons = document.querySelectorAll('.delete-btn a'); // Previously delete-btn

    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Initiate file download
            const fileUrl = 'path/to/your/file.pdf'; // Change this to your file path
            const anchor = document.createElement('a');
            anchor.href = fileUrl;
            anchor.download = 'file.pdf'; // The name of the downloaded file
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        });
    });
});





// Function to get adjectival rating based on average score
function getRating(averageScore) {
    if (averageScore >= 4.500) return "Outstanding";
    if (averageScore >= 3.500) return "Very Satisfactory";
    if (averageScore >= 2.500) return "Satisfactory";
    if (averageScore >= 1.500) return "Unsatisfactory";
    return "Poor"; // below 1.499
}




let profile = undefined;





async function fetchProfile() {
try{

const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/profile/', {
    method: 'GET',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        
    },
    credentials: 'include',
});

profile = await response.json();
if (response.ok) {
    console.log("Success Data : ", profile); 

                

    fetchData();



} else {
    console.log("Error Data : ", profile);
}
} catch (error) {
console.log("Error Data : ", error);
} 
}



fetchProfile();

let school_year = undefined;

async function fetchData() {
try{
const formData = new FormData();
school_year && formData.append('school_year',school_year);


const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/get/records/ipcrf/', {
    method: 'POST',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        
    },
    credentials: 'include',
});

const data = await response.json();
if (response.ok) {
    console.log("Success Data : ", data); 

    school_year = data.school_year; 
    takers = data.ipcrf_taker;


    // school_year.forEach(year => {
    //     addOption(year);
    // });

    takers.forEach(taker => {
        if (taker.ipcrf_taker.employee_id == profile.user.employee_id ){
            addTeacherRow(taker); 
        }
    });



} else {
    console.log("Error Data : ", data);
}
} catch (error) {
console.log("Error Data : ", error);
} 
}





function addOption(year) {


// Create a new option element
var option = document.createElement('option');

// Set the value and text of the new option
option.value = year;
option.text = year;

// Add the new option to the select element
schoolYearSelect.appendChild(option);
}





// {/* <button onclick="addTeacherRow('John Doe', 'Teacher I', 'Elementary', 'Jane Smith', 987654)">Add Row</button> */}
function addTeacherRow(taker) {
const taker_data = taker.ipcrf_taker;
const taker_evaluator = taker.ipcrf_rater;
const school_year = taker.school_year;
const taker_quarter = taker.quarter;

// Get the table body 

// Create a new row
var newRow = document.createElement('tr');
newRow.classList.add('second-row');
newRow.dataset.facultyId = rowCount;  // Assuming you generate this ID dynamically

// Generate a unique row ID (e.g., based on current row count)
var rowCount = facultyList.rows.length + 1;
newRow.id = 'recordRow' + rowCount;

// Create new cells
var nameCell = document.createElement('th');
var positionCell = document.createElement('th');
var gradeLevelCell = document.createElement('th');
var subjectCell = document.createElement('th');
var raterCell = document.createElement('th');
var emptyCell = document.createElement('th');
var actionCell = document.createElement('th');
var optionsCell = document.createElement('th');

// Set the inner HTML for each cell
nameCell.innerHTML = `<img class="user-icon" id="userIcon${rowCount}" src="${ taker_data.profile ? "https://bnahs.pythonanywhere.com" + taker_data.profile : "asset/User_Circle.png"}" >${taker_data.fullname}`;
positionCell.textContent = taker_data.position;
gradeLevelCell.textContent = taker_data.grade_level;
subjectCell.textContent = taker_data.department || "N/A";  // Assuming taker_data has a subject field
raterCell.textContent = taker_evaluator ? taker_evaluator.fullname : 'N/A';
emptyCell.textContent =  taker.ipcrf?.evaluator_rating ? taker.ipcrf.evaluator_rating.toFixed(2) + " - " + getRating(taker.ipcrf.evaluator_rating) : "Not Rated Yet"; // Assuming no data for this cell

// Create the anchor tag for the action cell
var anchor = document.createElement('a');
//anchor.href = 'records_ipcrf_view.html';  // Assuming this is the correct link
anchor.addEventListener('click', function(event) {
viewCOTForm(taker_data.employee_id, taker.ipcrf.connection_to_other);
})
anchor.style.textDecoration = 'none';
anchor.style.color = 'inherit';
anchor.id = 'viewLink' + rowCount;

// Create the image tag for the anchor
var img = document.createElement('img');
img.src = 'asset/Eye.png';
img.classList.add('eye-icon');
img.id = 'eyeIcon';

// Append the image to the anchor
anchor.appendChild(img);
anchor.appendChild(document.createTextNode(' View'));

// Append the anchor to the action cell
actionCell.style.color = '#032F97';
actionCell.style.textAlign = 'center';
actionCell.appendChild(anchor);

// Append cells to the row
newRow.appendChild(nameCell);
newRow.appendChild(positionCell);
newRow.appendChild(gradeLevelCell);
newRow.appendChild(subjectCell);
newRow.appendChild(raterCell);
newRow.appendChild(emptyCell);
newRow.appendChild(actionCell);

// Append the new row to the table body
facultyList.appendChild(newRow);
}





function viewCOTForm(teacher_id , quarter){

    sessionStorage.setItem('teacher_id', teacher_id);
    sessionStorage.setItem('ipcrf_id', quarter);
    window.location.href = 'records_ipcrf_view.html';
}




 