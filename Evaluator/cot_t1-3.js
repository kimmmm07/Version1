// Title
const ratingSheetTitle = document.getElementById("ratingSheetTitle");

// Tabs
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const tab4 = document.getElementById("tab4");

// Quarter sections
const quarter1Content = document.getElementById("quarter1");
const quarter2Content = document.getElementById("quarter2");
const quarter3Content = document.getElementById("quarter3");
const quarter4Content = document.getElementById("quarter4");

// Tables for each quarter
const quarter1Table = document.getElementById("quarter1Table");
const quarter2Table = document.getElementById("quarter2Table");
const quarter3Table = document.getElementById("quarter3Table");
const quarter4Table = document.getElementById("quarter4Table");

// Table bodies for each quarter (for adding rows dynamically)
const teacherTableBodyQuarter1 = document.getElementById("teacherTableBodyQuarter1");
const teacherTableBodyQuarter2 = document.getElementById("teacherTableBodyQuarter2");
const teacherTableBodyQuarter3 = document.getElementById("teacherTableBodyQuarter3");
const teacherTableBodyQuarter4 = document.getElementById("teacherTableBodyQuarter4");

// Individual table rows for each quarter
const teacherRowQuarter2 = document.getElementById("teacherRowQuarter2");
const teacherRowQuarter3 = document.getElementById("teacherRowQuarter3");
const teacherRowQuarter4 = document.getElementById("teacherRowQuarter4");

// Action links within the table rows for each quarter
const observeLinkQuarter2 = document.getElementById("observeLinkQuarter2");
const viewLinkQuarter2 = document.getElementById("viewLinkQuarter2");
const observeLinkQuarter3 = document.getElementById("observeLinkQuarter3");
const viewLinkQuarter3 = document.getElementById("viewLinkQuarter3");
const observeLinkQuarter4 = document.getElementById("observeLinkQuarter4");
const viewLinkQuarter4 = document.getElementById("viewLinkQuarter4");


function showQuarter(quarter) {

document.querySelectorAll('.quarter-content').forEach(function(content) {
    content.classList.add('hidden');
});

document.querySelectorAll('.tabs a').forEach(function(tab) {
    tab.classList.remove('active');
});

document.getElementById(quarter).classList.remove('hidden');
document.querySelector(`[onclick="showQuarter('${quarter}')"]`).classList.add('active');
}

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






function observeTeacher() {
    // Handle the teacher data
    console.log("Observing teacher:", teacher);
    
    window.location.href = 'evaluator_cot_form_proficient.html';
}



function populateTable(teachers) {
    const tableBody = document.getElementById('teacherTableBody');
    
    teachers.forEach(teacher => {
        const row = document.createElement('tr');

        // Check if teacher is evaluated
        if (!teacher.is_evaluated) {
            row.innerHTML = `
                <td><img src="User_Circle.png" alt="User Icon" width="25"> ${teacher.first_name} ${teacher.middle_name} ${teacher.last_name}</td>
                <td>${teacher.position}</td>
                <td>${teacher.grade_level}</td>
                <td>${new Date(teacher.job_started).toLocaleDateString()}</td>
                <td>
                    <a href="evaluator_cot_form_proficient.html" class="button">Observe</a> | 
                    <a href="#" class="disabled">View</a>
                </td>
            `;
        } else {
            row.innerHTML = `
                <td><img src="User_Circle.png" alt="User Icon" width="25"> ${teacher.first_name} ${teacher.middle_name} ${teacher.last_name}</td>
                <td>${teacher.position}</td>
                <td>${teacher.grade_level}</td>
                <td>${new Date(teacher.job_started).toLocaleDateString()}</td>
                <td><span class="status">Observed</span> | <a href="view_cot_form_t1-3.html">View</a></td>
            `;
        }

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}


let data_quarter_1 = undefined;
let data_quarter_2 = undefined;
let data_quarter_3 = undefined;
let data_quarter_4 = undefined;


function evaluatedTeacher(teacher_id, quarter){
    sessionStorage.setItem('teacher_id', teacher_id);
    sessionStorage.setItem('quarter', quarter);
    window.location.href = 'evaluator_cot_form_proficient.html';
};


function viewTeacher(teacher_id, quarter){
    sessionStorage.setItem('teacher_id', teacher_id);
    sessionStorage.setItem('quarter', quarter);

    window.location.href = 'view_cot_form_t1-3.html';
};

function addRow(data, quarter, tbody , table , is_open) {
    const teacher = data.teacher;
    const cot = data.cot;
    const tr = document.createElement('tr'); 
    const randomInteger = Math.floor(Math.random() * 1000) + 1;

    if (!cot.is_checked) {
        tr.innerHTML = `
            <td><img src="User_Circle.png" alt="User Icon" width="25"> ${teacher.fullname}</td>
            <td>${teacher.position}</td>
            <td>${cot.subject}</td>
            <td>${teacher.grade_level}</td>
            <td>${cot.rater ?? 'N/A'}</td>
            <td>${cot.check_date ? new Date(cot.check_date).toLocaleDateString() : "Not Rated Yet"}</td>
            <td>
                <a id="${teacher.employee_id}-${table}-${randomInteger}-observe" class="${ is_open ? 'button' : 'disabled' }" style="cursor: pointer;">Observe</a> | 
                <a class="disabled">View</a>
            </td>
        `; 
        tbody.appendChild(tr); 
        if (is_open){
            const observeLink = document.getElementById(`${teacher.employee_id}-${table}-${randomInteger}-observe`);
            observeLink.addEventListener('click', () => evaluatedTeacher(teacher.employee_id, quarter));
        }
    } else { 
        tr.innerHTML = `
            <td><img src="User_Circle.png" alt="User Icon" width="25"> ${teacher.fullname}</td>
            <td>${teacher.position}</td>
            <td>${cot.subject}</td>
            <td>${teacher.grade_level}</td>
            <td>${cot.rater ?? 'N/A'}</td>
            <td>${ cot.check_date ? new Date(cot.check_date).toLocaleDateString() : "Not Rated Yet"}</td>
            <td>
                <a class="status">Observed</a> | 
                <a id="${teacher.employee_id}-${table}-${randomInteger}-view" style="cursor: pointer;">View</a>
            </td>
        `;
        tbody.appendChild(tr);
        const viewLink = document.getElementById(`${teacher.employee_id}-${table}-${randomInteger}-view`);
        viewLink.addEventListener('click', () => viewTeacher(teacher.employee_id, quarter));

    }
};



async function getTeachers() {
    try {

        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/all/cot/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data);  
            
            data_quarter_1 = data['Quarter 1'];
            data_quarter_2 = data['Quarter 2'];
            data_quarter_3 = data['Quarter 3'];
            data_quarter_4 = data['Quarter 4'];

            data_quarter_1.forEach(quarter => {
                if (quarter.cot.is_for_teacher_proficient){
                    addRow(quarter, 'Quarter 1', teacherTableBodyQuarter1 , '1' , true);
                }
            });
            data_quarter_2.forEach((quarter , index) => {
                if (quarter.cot.is_for_teacher_proficient){
                    const is_open = data_quarter_1[index]?.cot?.is_checked;
                    addRow(quarter, 'Quarter 2', teacherTableBodyQuarter2, '2' , is_open);
                }
                    
            });
            data_quarter_3.forEach((quarter , index)  => {
                if (quarter.cot.is_for_teacher_proficient){
                    const is_open = data_quarter_2[index]?.cot?.is_checked;
                    console.log("Disabled : ", is_open);
                    addRow(quarter, 'Quarter 3', teacherTableBodyQuarter3, '3' , is_open);
                    
                }
            });
            data_quarter_4.forEach((quarter , index)  => {
                if (quarter.cot.is_for_teacher_proficient){
                    const is_open = data_quarter_3[index]?.cot?.is_checked;
                    addRow(quarter, 'Quarter 4', teacherTableBodyQuarter4, '4' , is_open); 
                }
            });




        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}



getTeachers();
