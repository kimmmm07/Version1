// Container and Title
const rpmsContainer = document.getElementById("rpmsContainer");
const rpmsTitle = document.getElementById("rpmsTitle");

// Table and Rows
const teacherTable = document.getElementById("teacherTable");



function addTeacherRow(teacherData) { 

    rater = teacherData.rater;
    teacher_status = teacherData.status;
    teacherData = teacherData['teacher'];

    const tr = document.createElement('tr');
    const statusClass = `${teacher_status === "In Progress" ? "progress" 
        : teacher_status === "No Attachments" ? "pending" 
        : "submitted"}`;

    tr.innerHTML = `
        <td><img src="User_Circle.png" alt="User Icon" width="25"> ${teacherData.fullname}</td>
        <td>${teacherData.position}</td>
        <td>${teacherData.grade_level}</td>
        <td>${teacherData.rater ?? 'Not Assigned'}</td>
        <td class="status ${statusClass}">${teacher_status}</td>
        <td><a id="${teacherData.employee_id}" class="review">Review</a></td>
    `;

    teacherTable.appendChild(tr);

    // Add the event listener to the action link
    const actionLink = document.getElementById(`${teacherData.employee_id}`);
    actionLink.addEventListener('click', function(event) {
        event.preventDefault();

        sessionStorage.setItem('teacher_id', teacherData.employee_id);


        // Call the appropriate function based on the teacher's status
        window.location.href = "rpms_proficient_homepage.html"

        // if (teacherData.status.toLowerCase() === 'pending') {
        //     evaluateTeacher(teacherData);
        // } else {
        //     viewTeacher(teacherData);
        // }
    });
}






async function fetchData() {
    try {
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/all/rpms/attachment/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data);  
            data.teachers.forEach(teacherData => {
                if (teacherData.teacher.is_proficient){
                    addTeacherRow(teacherData);  
                }
            })
        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
};


fetchData();









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
