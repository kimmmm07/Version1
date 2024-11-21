// Main container and title
const mainContainer = document.querySelector('main');
const recordsTitle = document.getElementById('records-title');

// Tabs for different records
const tabCOT = document.getElementById('tab-cot');
const tabIPCRF = document.getElementById('tab-ipcrf');
const tabRPMS = document.getElementById('tab-rpms');

// Filters
const schoolYearSelect = document.getElementById('school-year-filter');
const teacherTypeSelect = document.getElementById('teacher-type-filter');

// Table and tbody
const recordsTable = document.getElementById('records-table');
const recordsTbody = document.getElementById('records-tbody');

// // Record 1
// const record1 = document.getElementById('record1');
// const userIcon1 = document.getElementById('user-icon1');
// const teacherName1 = document.getElementById('teacher-name1');
// const teacherPosition1 = document.getElementById('teacher-position1');
// const teacherGradeLevel1 = document.getElementById('teacher-grade-level1');
// const raterName1 = document.getElementById('rater-name1');
// const result1 = document.getElementById('result1');
// const viewLink1 = document.getElementById('view-link1');


// document.addEventListener("DOMContentLoaded", function () {
//     const schoolYearDropdown = document.querySelector('select[name="school-year"]');
//     const teacherTypeDropdown = document.querySelector('select[name="teacher-type"]');

//     // Load the selected values from localStorage if they exist
//     const savedSchoolYear = localStorage.getItem('selectedSchoolYear');
//     const savedTeacherType = localStorage.getItem('selectedTeacherType');

//     if (savedSchoolYear) {
//         schoolYearDropdown.value = savedSchoolYear;
//     }

//     if (savedTeacherType) {
//         teacherTypeDropdown.value = savedTeacherType;
//     }

//     // Handle school year selection
//     schoolYearDropdown.addEventListener("change", function () {
//         console.log("Selected School Year:", schoolYearDropdown.value);
//         // Save the selected value to localStorage
//         localStorage.setItem('selectedSchoolYear', schoolYearDropdown.value);
//     });

//     // Handle teacher type selection and redirect to the selected page
//     teacherTypeDropdown.addEventListener("change", function () {
//         const selectedValue = teacherTypeDropdown.value;
//         if (selectedValue) {
//             // Save the selected value to localStorage
//             localStorage.setItem('selectedTeacherType', selectedValue);
//             // Redirect to the selected page based on the value
//             window.location.href = selectedValue;
//         }
//     });
// });

// Modal logic
const logoutButton = document.getElementById('logoutLink');  // Logout button
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






let school_year = undefined;
let quarter = undefined;
let takers = undefined;


async function fetchData() {
    try{
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/get/records/ipcrf/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });
        
        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data); 

            school_year = data.school_year;
            quarter = data.quarter;
            takers = data.ipcrf_taker;


            school_year.forEach(year => {
                addOption(year);
            });

            takers.forEach(taker => {
                if(taker.ipcrf_taker.is_proficient){
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

fetchData();





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
    const taker_evaluator = taker.ipcrf_evaluator;
    const school_year = taker.school_year;
    const taker_quarter = taker.quarter;

    // Get the table body
    var tableBody = document.getElementById('teacherTableBody');

    // Create a new row
    var newRow = document.createElement('tr');

    // Generate a unique row ID (e.g., based on current row count)
    var rowCount = tableBody.rows.length + 1;
    newRow.id = 'recordRow' + rowCount;

    // Create new cells
    var nameCell = document.createElement('td');
    var positionCell = document.createElement('td');
    var gradeLevelCell = document.createElement('td');
    var raterCell = document.createElement('td');
    var ratingCell = document.createElement('td');
    var actionCell = document.createElement('td');

    // Set IDs for new cells
    nameCell.id = 'teacherName' + rowCount;
    positionCell.id = 'position' + rowCount;
    gradeLevelCell.id = 'gradeLevel' + rowCount;
    raterCell.id = 'rater' + rowCount;

    // Set the inner HTML for each cell
    nameCell.innerHTML = '<img src="User_Circle.png" alt="User Icon" width="25" id="userIcon' + rowCount + '">' + taker_data.fullname;
    positionCell.textContent = taker_data.position;
    gradeLevelCell.textContent = taker_data.grade_level;
    raterCell.textContent = taker_evaluator ? taker_evaluator.fullname : 'N/A';
    ratingCell.textContent = taker.ipcrf.evaluator_rating;  // Assuming rating is stored in the 'rating' property of the taker object

    // Create the anchor tag
    var anchor = document.createElement('a');
    anchor.classList.add('view-link');
    anchor.id = 'viewLink' + rowCount;

    // Add the event listener
    anchor.addEventListener('click', function() {
        viewCOTForm(taker_data.employee_id, taker_quarter);
    });

    // Create the image tag
    var img = document.createElement('img');
    img.src = 'Eye.png';
    img.classList.add('eye-icon');
    img.id = 'eyeIcon';

    // Append the image to the anchor
    anchor.appendChild(img);
    anchor.appendChild(document.createTextNode('View'));

    // Append the anchor to the action cell
    actionCell.appendChild(anchor);

    // Append cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(positionCell);
    newRow.appendChild(gradeLevelCell);
    newRow.appendChild(raterCell);
    newRow.appendChild(ratingCell);  // Assuming rating is stored in the 'rating' property of the taker object
    newRow.appendChild(actionCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
}






function viewCOTForm(teacher_id , quarter){

    sessionStorage.setItem('teacher_id', teacher_id);
    sessionStorage.setItem('quarter', quarter);
    window.location.href = 'records_view_ipcrf.html';
}




teacherTypeSelect.addEventListener("change", function() {
    const selectedValue = this.value;
    if (selectedValue) {
        console.log("Selected value:", selectedValue);
    } 

    let new_data = []; 
    takers.forEach(taker => { 
        console.log("Result" , taker.ipcrf_taker.is_proficient && selectedValue == "Highly Proficient");
        if (taker.ipcrf_taker.is_proficient && selectedValue == "Proficient") {
            new_data.push(taker);
        } else if ( !taker.ipcrf_taker.is_proficient && selectedValue == "Highly Proficient") {
            new_data.push(taker);
        } else if(selectedValue == "all") {
            new_data.push(taker);
        }
    });

 
    tableBody = document.getElementById("teacherTableBody");
    tableBody.innerHTML = "";
    new_data.forEach( teacher =>{
        addTeacherRow(teacher);
    })
})















