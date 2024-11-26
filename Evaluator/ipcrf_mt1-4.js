// Container and Form Title
const container = document.querySelector('.container');
const formTitle = document.getElementById('form-title');

// Table and tbody
const recordsTbody = document.getElementById('records-tbody');

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


document.querySelectorAll('#records-tbody tr').forEach(row => {
    const isReviewed = row.getAttribute('data-reviewed') === 'true';
    const statusCell = row.querySelector('.status');
    const reviewLink = row.querySelector('.review');

    if (isReviewed) {
        // Set status and styles for "Reviewed" state
        statusCell.textContent = 'Submitted';
        statusCell.style.color = 'green';  // Green for 'Submitted'
        reviewLink.textContent = 'Reviewed';
        reviewLink.style.color = 'gray';  // Gray for 'Reviewed'
        reviewLink.style.cursor = 'pointer';  // Pointer cursor for clickable
        reviewLink.style.textDecoration = 'none';  // Remove underline
        reviewLink.href = '#';  // Disable link
    } else {
        // Set status and styles for "Pending" state
        statusCell.textContent = 'Pending';
        statusCell.style.color = 'red';  // Red for 'Pending'
        reviewLink.textContent = 'Review';
        reviewLink.style.color = '';  // Default color for 'Review'
        reviewLink.style.cursor = 'pointer';  // Pointer cursor for clickable
        reviewLink.style.textDecoration = 'none';  // Remove underline
        reviewLink.href = 'evaluator_IPCRF_HighlyProficient_EPart1.html';  // Set link for 'Review'
    }
});












function clickToRate( employee_id ){
    sessionStorage.setItem('teacher_id', employee_id);
    window.location.href = 'evaluator_IPCRF_HighlyProficient_EPart1.html';
}


function addRecord(record) {
    console.log(record)
    const teacher = record['teacher'];
    const ipcrf = record['ipcrf_form'];

    console.log(teacher);
    console.log(ipcrf);

    const tbody = document.getElementById("records-tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>
            <img class="user-icon" src="${ teacher.profile ? "https://bnahs.pythonanywhere.com" + teacher.profile : "User_Circle.png"}" alt="User Icon"> 
            <span>${teacher.fullname}</span>
        </td>
        <td>${teacher.position}</td>
        <td>${teacher.grade_level}</td>
        <td>${ipcrf.rater ?? "Waiting To Be Rated"}</td>
        <td class="status ${ipcrf.is_checked ? "submitted" : "pending"}">${ipcrf.is_checked ? "Submitted" : "Pending"}</td>
        <td><a onclick="clickToRate(${teacher.employee_id})" class="review" style="cursor: pointer; text-decoration: none;">Review</a></td>
    `;
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
            data.ipcrf_forms_data_highly_proficient.forEach(record => {
                addRecord(record);
            });
        } else {
            console.log("Error Data : ", data);
        }

    } catch(err){
        console.log(err);
    }
}








getIPCRFTakers();


