// Container and title
const container = document.querySelector('.container');
const ipcrfTitle = document.getElementById('ipcrf-title');

// Table and tbody
const ipcrfTable = document.getElementById('ipcrf-table');
const ipcrfTbody = document.getElementById('ipcrf-tbody');

// Record 1
const record1 = document.getElementById('record1');
const userIcon1 = document.getElementById('user-icon1');
const teacherName1 = document.getElementById('teacher-name1');
const teacherPosition1 = document.getElementById('teacher-position1');
const teacherGradeLevel1 = document.getElementById('teacher-grade-level1');
const raterName1 = document.getElementById('rater-name1');
const status1 = document.getElementById('status1');
const reviewLink1 = document.getElementById('review-link1');


// Record 2
const record2 = document.getElementById('record2');
const userIcon2 = document.getElementById('user-icon2');
const teacherName2 = document.getElementById('teacher-name2');
const teacherPosition2 = document.getElementById('teacher-position2');
const teacherGradeLevel2 = document.getElementById('teacher-grade-level2');
const raterName2 = document.getElementById('rater-name2');
const status2 = document.getElementById('status2');
const reviewLink2 = document.getElementById('review-link2');


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

document.querySelectorAll('#ipcrf-tbody tr').forEach(row => {
    const isReviewed = row.getAttribute('data-reviewed') === 'true';
    const statusCell = row.querySelector('.status');
    const reviewLink = row.querySelector('.review');

    if (isReviewed) {
        statusCell.textContent = 'Submitted';
        statusCell.style.color = 'green';  // Set color to green for Submitted
        reviewLink.textContent = 'Reviewed';
        reviewLink.style.color = 'gray';
        reviewLink.style.cursor = 'default';  // Set cursor to default (not clickable)
        reviewLink.style.textDecoration = 'none'; // Remove underline
        reviewLink.href = '#';  // Disable the link
    } else {
        statusCell.textContent = 'Pending';
        statusCell.style.color = 'red';  // Set color to red for Pending
        reviewLink.textContent = 'Review';
        reviewLink.style.color = '';  // Default color
        reviewLink.style.cursor = 'pointer';  // Set cursor to pointer (clickable)
        reviewLink.style.textDecoration = 'none'; // Remove underline
        reviewLink.href = 'evaluator_IPCRF_Proficient_EPart1.html';  // Enable the link
    }
});






function clickToRate( teacher ){ 
    sessionStorage.setItem('teacher_id', teacher.employee_id);  // Store the value

    window.location.href = 'evaluator_IPCRF_Proficient_EPart1.html';
}


function addRecord(record) {
    console.log(record)
    const teacher = record['teacher'];
    const ipcrf = record['ipcrf_form'];

    console.log(teacher);
    console.log(ipcrf);

    let status;
    let is_open = true;
    if (ipcrf.is_checked_by_evaluator){
        status = "Submitted"
        is_open = false;
    } else {
        status = "Pending"

    }

    if (!ipcrf.is_checked){
        is_open = false;
    }
 
    const tbody = document.getElementById("ipcrf-tbody");
    const tr = document.createElement("tr");

    // Create the first cell
    const td1 = document.createElement("td");
    const img = document.createElement("img");
    img.className = "user-icon";
    img.src = teacher.profile ? "https://bnahs.pythonanywhere.com" + teacher.profile : "User_Circle.png";
    img.alt = "User Icon";
    const span = document.createElement("span");
    span.textContent = teacher.fullname;

    td1.appendChild(img);
    td1.appendChild(span);
    tr.appendChild(td1);

    // Create the second cell
    const td2 = document.createElement("td");
    td2.textContent = teacher.position;
    tr.appendChild(td2);

    // Create the third cell
    const td3 = document.createElement("td");
    td3.textContent = teacher.grade_level;
    tr.appendChild(td3);

    // Create the fourth cell
    const td4 = document.createElement("td");
    td4.textContent = ipcrf.rater ?? "Waiting To Be Rated";
    tr.appendChild(td4);

    // Create the fifth cell with a class based on condition
    const td5 = document.createElement("td");
    td5.className = `status ${ipcrf.is_checked ? "submitted" : "pending"}`;
    td5.textContent = ipcrf.is_checked ? "Submitted" : "Pending";
    tr.appendChild(td5);

    // Create the sixth cell with a link and conditional onclick
    const td6 = document.createElement("td");
    const a = document.createElement("a");
    a.style.cursor = "pointer";
    a.style.textDecoration = "none";
    if (!ipcrf.is_checked_by_evaluator) {
        a.onclick = () => clickToRate(teacher);
    } else {
        a.style.color = "gray";
    }
    a.textContent = "Review";
    td6.appendChild(a);
    tr.appendChild(td6);

    // Append the row to the tbody
    tbody.appendChild(tr);

}


async function getIPCRFTakers(){
    try{


        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/all/ipcrf/part1/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });


        const data = await response.json();
        if(response.ok){
            console.log("Success Data : ", data);
            data.ipcrf_forms_data_proficient.forEach(record => {
                if(record?.teacher?.is_deactivated == false){
                    addRecord(record);
                } 
            });
        } else {
            console.log("Error Data : ", data);
        }

    } catch(err){
        console.log(err);
    }
}








getIPCRFTakers();


