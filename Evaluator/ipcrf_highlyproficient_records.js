// Tabs
const cotTab = document.getElementById('cot-tab');
const ipcrfTab = document.getElementById('ipcrf-tab');
const rpmsTab = document.getElementById('rpms-tab');

// Filters
const schoolYearSelect = document.getElementById('school-year');
const teacherTypeSelect = document.getElementById('teacher-type');
const quarterSelect = document.getElementById('selectQuarter');

// Table elements
const recordsTbody = document.getElementById('records-tbody');
const record1 = document.getElementById('record1');

// Specific record details
const teacherName = document.getElementById('teacher-name');
const teacherPosition = document.getElementById('teacher-position');
const teacherGradeLevel = document.getElementById('teacher-grade-level');
const raterName = document.getElementById('rater-name');
const evaluationResult = document.getElementById('evaluation-result');

// Links
const viewRecordLink = document.getElementById('view-record');

// User Icon
const userIcon = document.getElementById('user-icon');


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