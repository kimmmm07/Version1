// Container and Title
const container = document.getElementById('container');
const title = document.getElementById('title');

// Tabs
const tabs = document.getElementById('tabs');
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');

// Quarter Content Sections
const quarter1Content = document.getElementById('quarter1');
const quarter2Content = document.getElementById('quarter2');
const quarter3Content = document.getElementById('quarter3');
const quarter4Content = document.getElementById('quarter4');

// Tables for Each Quarter
const tableQuarter1 = document.getElementById('tableQuarter1');
const tableQuarter2 = document.getElementById('tableQuarter2');
const tableQuarter3 = document.getElementById('tableQuarter3');
const tableQuarter4 = document.getElementById('tableQuarter4');

// Rows and Data Cells for Quarter 1
const rowQuarter1_1 = document.getElementById('rowQuarter1_1');
const userIcon1 = document.getElementById('userIcon1');
const position1 = document.getElementById('position1');
const subject1 = document.getElementById('subject1');
const gradeLevel1 = document.getElementById('gradeLevel1');
const rater1 = document.getElementById('rater1');
const date1 = document.getElementById('date1');
const observe1 = document.getElementById('observe1');
const view1 = document.getElementById('view1');

// Rows and Data Cells for Quarter 1, Row 2
const rowQuarter1_2 = document.getElementById('rowQuarter1_2');
const userIcon2 = document.getElementById('userIcon2');
const position2 = document.getElementById('position2');
const subject2 = document.getElementById('subject2');
const gradeLevel2 = document.getElementById('gradeLevel2');
const rater2 = document.getElementById('rater2');
const date2 = document.getElementById('date2');
const status2 = document.getElementById('status2');
const viewLink2 = document.getElementById('viewLink2');

// Rows and Data Cells for Quarter 2
const rowQuarter2_1 = document.getElementById('rowQuarter2_1');
const userIcon3 = document.getElementById('userIcon3');
const position3 = document.getElementById('position3');
const subject3 = document.getElementById('subject3');
const gradeLevel3 = document.getElementById('gradeLevel3');
const rater3 = document.getElementById('rater3');
const date3 = document.getElementById('date3');
const observe2 = document.getElementById('observe2');
const view2 = document.getElementById('view2');

// Rows and Data Cells for Quarter 3
const rowQuarter3_1 = document.getElementById('rowQuarter3_1');
const userIcon4 = document.getElementById('userIcon4');
const position4 = document.getElementById('position4');
const subject4 = document.getElementById('subject4');
const gradeLevel4 = document.getElementById('gradeLevel4');
const rater4 = document.getElementById('rater4');
const date4 = document.getElementById('date4');
const observe3 = document.getElementById('observe3');
const view3 = document.getElementById('view3');

// Rows and Data Cells for Quarter 4
const rowQuarter4_1 = document.getElementById('rowQuarter4_1');
const userIcon5 = document.getElementById('userIcon5');
const position5 = document.getElementById('position5');
const subject5 = document.getElementById('subject5');
const gradeLevel5 = document.getElementById('gradeLevel5');
const rater5 = document.getElementById('rater5');
const date5 = document.getElementById('date5');
const observe4 = document.getElementById('observe4');
const view4 = document.getElementById('view4');

const teacherTableBodyQuarter1 = document.getElementById('teacherTableBodyQuarter1');
const teacherTableBodyQuarter2 = document.getElementById('teacherTableBodyQuarter2');
const teacherTableBodyQuarter3 = document.getElementById('teacherTableBodyQuarter3');
const teacherTableBodyQuarter4 = document.getElementById('teacherTableBodyQuarter4');


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

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('status') === 'observed') {
    document.querySelectorAll('.button').forEach(function(button) {
        button.textContent = 'Observed';
        button.classList.remove('button');
        button.classList.add('disabled');
    });

    document.querySelectorAll('.disabled').forEach(function(button) {
        button.classList.remove('disabled');
        button.classList.add('button');
        button.style.cursor = 'pointer';
        button.style.color = '#007bff';
    });
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

function addRow(data, quarter, tbody , table) {
    const teacher = data.teacher;
    const cot = data.cot;
    const tr = document.createElement('tr'); 
    const randomInteger = Math.floor(Math.random() * 10) + 1;

    if (!cot.is_checked) {
        tr.innerHTML = `
            <td><img src="User_Circle.png" alt="User Icon" width="25"> ${teacher.fullname}</td>
            <td>${teacher.position}</td>
            <td>${cot.subject}</td>
            <td>${teacher.grade_level}</td>
            <td>${cot.rater ?? 'N/A'}</td>
            <td>${new Date(teacher.job_started).toLocaleDateString()}</td>
            <td>
                <a id="${teacher.employee_id}-${table}-${randomInteger}-observe" class="button">Observe</a> | 
                <a class="disabled">View</a>
            </td>
        `; 
        tbody.appendChild(tr); 
        const observeLink = document.getElementById(`${teacher.employee_id}-${table}-${randomInteger}-observe`);
        observeLink.addEventListener('click', () => evaluatedTeacher(teacher.employee_id, quarter));
    } else { 
        tr.innerHTML = `
            <td><img src="User_Circle.png" alt="User Icon" width="25"> ${teacher.fullname}</td>
            <td>${teacher.position}</td>
            <td>${cot.subject}</td>
            <td>${teacher.grade_level}</td>
            <td>${cot.rater ?? 'N/A'}</td>
            <td>${new Date(teacher.job_started).toLocaleDateString()}</td>
            <td>
                <a class="status">Observed</a> | 
                <a id="${teacher.employee_id}-${table}-${randomInteger}-view">View</a>
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
                if (!quarter.cot.is_for_teacher_proficient){
                    addRow(quarter, 'Quarter 1', teacherTableBodyQuarter1 , '1');
                }
            });
            data_quarter_2.forEach(quarter => {
                if (!quarter.cot.is_for_teacher_proficient){
                    addRow(quarter, 'Quarter 2', teacherTableBodyQuarter2, '2');
                }
                    
            });
            data_quarter_3.forEach(quarter => {
                if (!quarter.cot.is_for_teacher_proficient){
                    addRow(quarter, 'Quarter 3', teacherTableBodyQuarter3, '3');
                    
                }
            });
            data_quarter_4.forEach(quarter => {
                if (!quarter.cot.is_for_teacher_proficient){
                    addRow(quarter, 'Quarter 4', teacherTableBodyQuarter4, '4'); 
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

