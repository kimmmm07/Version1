// Main Content Elements
const mainContent = document.getElementById("main-content");
const recordsHeading = document.getElementById("records-heading");

// Tabs
const tabs = document.getElementById("tabs");
const cotTab = document.getElementById("cot-tab");
const ipcrfTab = document.getElementById("ipcrf-tab");
const rpmsTab = document.getElementById("rpms-tab");

// Filters
const filters = document.getElementById("filters");
const schoolYearSelect = document.getElementById("school-year-select");
const teacherTypeSelect = document.getElementById("teacher-type-select");
 

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
            
            window.location.href = '../../get-started.html'; 
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});










let p_school_year = undefined;
let hp_school_year = undefined;
let school_year = undefined;
let quarter = undefined;
let takers = undefined;

async function fetchData() {
    try{
        
        const formData = new FormData();
        school_year && formData.append('school_year', school_year);
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/get/records/rpms/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData, 
        });
        
        const data = await response.json();
        if (response.ok) {
            

            hp_school_year = data.hp_school_year;  
            takers = data.rpms_taker;

            if (!p_school_year){
                p_school_year = data.p_school_year;
                schoolYearSelect.innerHTML = `<option value="all">All School Year</option> `;
                p_school_year.forEach(year => {
                    addOption(year);
                }); 
            }

            document.getElementById("teacherTableBody").innerHTML = "";
            takers.forEach(taker => {
                addTeacherRow(taker);
            }); 


 
        } else {
            window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        
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
    const taker_data = taker.rpms_taker;
    const taker_evaluator = taker.rpms_rater;
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
    var actionCell = document.createElement('td');

    // Set IDs for new cells
    nameCell.id = 'teacherName' + rowCount;
    positionCell.id = 'position' + rowCount;
    gradeLevelCell.id = 'gradeLevel' + rowCount;
    raterCell.id = 'rater' + rowCount;

    // Set the inner HTML for each cell
    // nameCell.innerHTML = '<img src="User_Circle.png" alt="User Icon" width="25" id="userIcon' + rowCount + '">' + taker_data.fullname;
    nameCell.innerHTML = `<img class="user-icon" id="userIcon${rowCount}" src="${ taker_data.profile ? "https://bnahs.pythonanywhere.com" + taker_data.profile : "User_Circle.png"}" >${taker_data.fullname}`;
    positionCell.textContent = taker_data.position;
    gradeLevelCell.textContent = taker_data.grade_level;
    raterCell.textContent = taker_evaluator ? taker_evaluator.fullname : 'N/A';

    // Create the anchor tag
    var anchor = document.createElement('a');
    anchor.classList.add('view-link');
    anchor.id = 'viewLink' + rowCount;
    anchor.style.cursor = 'pointer';
    anchor.style.textDecoration = 'none';

    // Add the event listener
    anchor.addEventListener('click', function() {
        viewCOTForm(taker_data.employee_id);
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
    newRow.appendChild(actionCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
}






function viewCOTForm(teacher_id ){

    sessionStorage.setItem('teacher_id', teacher_id); 
    window.location.href = 'rpms_proficient_records_view.html';
}





teacherTypeSelect.addEventListener("change", function() {
    const selectedValue = this.value;
    if (selectedValue) {
        
    } 

    let new_data = []; 
    takers.forEach(taker => { 
        
        if (taker.rpms_taker.is_proficient && selectedValue == "Proficient") {
            new_data.push(taker);
        } else if ( !taker.rpms_taker.is_proficient && selectedValue == "Highly Proficient") {
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









schoolYearSelect.addEventListener("change", async function() {
    const selectedYear = this.value;
    
    if (selectedYear == "all") {
        school_year = null;
    } else {
        school_year = selectedYear;
    }

        
    fetchData();


});
















