// Container and Title
const rpmsContainer = document.getElementById("rpmsContainer");
const rpmsTitle = document.getElementById("rpmsTitle");

// Table and Rows
const teacherTable = document.getElementById("teacherTable");


function addTeacherRow(teacherData) {
    const rater = teacherData.rater;
    const teacher_status = teacherData.status;
    const teacher = teacherData.teacher;

    const tr = document.createElement('tr');
    const statusClass = `${teacher_status === "In Progress" ? "progress" 
        : teacher_status === "No Attachments" ? "pending" 
        : "submitted"}`;

    tr.innerHTML = `
        <td><img src="User_Circle.png" alt="User Icon" width="25"> ${teacher.fullname}</td>
        <td>${teacher.position}</td>
        <td>${teacher.grade_level}</td>
        <td>${rater ? rater.fullname  : 'Not Assigned'}</td>
        <td class="status ${statusClass}">${teacher_status}</td>
        <td><a href="#" class="review">Review</a></td>
    `;

    // Attach the row to the table
    teacherTable.appendChild(tr);

    // Add an event listener to the review link
    const actionLink = tr.querySelector('.review');
    actionLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Store the employee ID in sessionStorage
        sessionStorage.setItem('teacher_id', teacher.employee_id);

        // Redirect to the homepage or handle status-specific logic
        window.location.href = "rpms_proficient_homepage.html";
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
            console.log("Success Data:", data);  
            data.teachers.forEach(teacherData => {
                if (teacherData.teacher.is_proficient) {
                    addTeacherRow(teacherData);  
                }
            });
        } else {
            console.log("Error Data:", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

// Fetch the data on page load
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
