



async function fixRedirections(){
    try{

        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/profile/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data);
            if (data.evaluator.is_proficient){
                window.location.href = 'proficient_records.html';
            } 
            //window.location.href = '../../get-started.html'; 
        } else {
            console.log("Error Data : ", data);
        }
    }catch(error){
        console.log(error);
    }
}

fixRedirections();



















// Main Content and Title
const mainContent = document.getElementById('mainContent');
const title = document.getElementById('title');

// Tabs
const tabs = document.getElementById('tabs');
const cotTab = document.getElementById('cot-tab');
const ipcrfTab = document.getElementById('ipcrf-tab');
const rpmsTab = document.getElementById('rpms-tab');

// Filters
const filters = document.getElementById('filters');
// const schoolYearSelect = document.getElementById('schoolYearSelect');
// const teacherTypeSelect = document.getElementById('teacherTypeSelect');
const selectQuarter = document.getElementById('selectQuarter');

// Records Table
const recordsTable = document.getElementById('recordsTable');

// First Row in Records Table
// const recordRow1 = document.getElementById('recordRow1');
// const teacherName1 = document.getElementById('teacherName1');
// const userIcon1 = document.getElementById('userIcon1');
// const position1 = document.getElementById('position1');
// const gradeLevel1 = document.getElementById('gradeLevel1');
// const rater1 = document.getElementById('rater1');
// const viewLink1 = document.getElementById('viewLink1');


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

//dropdowns
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('schoolYearSelect').addEventListener('change', function() {
//         const schoolYear = String(this.value);
//         console.log("Selected School Year:", schoolYear);
//     });

//     document.getElementById('teacherTypeSelect').addEventListener('change', function() {  //proficient or highly proficient
//         const teacherType = String(this.value);
//         console.log("Selected Teacher Type:", teacherType);
//     });

//     document.getElementById('selectQuarter').addEventListener('change', function() {  
//         const quarter = String(this.value);
//         console.log("Selected Quarter:", quarter);
//     });
// });





let school_year = undefined;
let quarter = undefined;
let takers = undefined;





async function fetchData() {
    try{
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/get/records/cot/', {
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
            takers = data.cot_taker;


            // school_year.forEach(year => {
            //     addOption(year);
            // });

            takers.forEach(taker => {
                if (!taker.cot_taker.is_proficient){
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
    const taker_data = taker.cot_taker;
    const taker_evaluator = taker.cot_evaluator;
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
    var dateCell = document.createElement('td');
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
    dateCell.textContent = taker.cot?.check_date ? new Date(taker.cot.check_date).toLocaleDateString() : 'Not Rated Yet';

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
    newRow.appendChild(dateCell);
    newRow.appendChild(actionCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
}






function viewCOTForm(teacher_id , quarter){

    sessionStorage.setItem('teacher_id', teacher_id);
    sessionStorage.setItem('quarter', quarter);
    window.location.href = 'view_cot_form_mt1-4.html';
}



document.getElementById("selectQuarter").addEventListener("change", function() {


    // const selectedValue = document.getElementById("teacherTypeSelect").value;
    // if (selectedValue) {
    //     console.log("Selected Value:", selectedValue);
    // }

    let new_data = [];
    let filtered_data = [];
    takers.forEach(taker => { 
        if (!taker.cot_taker.is_proficient) {
            new_data.push(taker);
        }
    });


    const selectedQuarter = this.value;
    if (selectedQuarter) {
        console.log("Selected Quarter:", selectedQuarter);
    }

    new_data.forEach(taker => { 
        console.log("Result", taker.quarter == selectedQuarter, selectedQuarter != "all");
        console.log("Result", taker.quarter)
        if (taker.quarter == selectedQuarter) {
            filtered_data.push(taker);
        } else if ("all" == selectedQuarter) {
            filtered_data.push(taker);
        }
    });

    console.log(filtered_data);
    tableBody = document.getElementById("teacherTableBody");
    tableBody.innerHTML = "";
    filtered_data.forEach( teacher =>{
        addTeacherRow(teacher);
    })
})




// const schoolYearSelect = document.getElementById('schoolYearSelect');
// const teacherTypeSelect = document.getElementById('teacherTypeSelect');
// const selectQuarter = document.getElementById('selectQuarter');

// schoolYearSelect.addEventListener('change', function() {
//     what_school_year = this.value;
//     const teacherTableBody = document.getElementById('teacherTableBody');
//     teacherTableBody.innerHTML = '';

//     takers.forEach(taker => {

//         const taker_data = taker.cot_taker;
//         const taker_evaluator = taker.cot_evaluator;
//         const school_year = taker.school_year;
//         const taker_quarter = taker.quarter;
        
//         if (what_teacher == "Proficient" && taker.is_proficient == true){
            
//             if (what_quarter != "all"){
//                 if (school_year == what_school_year){
//                     if (what_quarter == taker_quarter){
//                         addTeacherRow(taker);
//                     }
//                 }
//             } 
//         } 
//     });
// });


// TODO : FIX THE FILTERING 



