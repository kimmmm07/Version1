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
        statusCell.textContent = 'Submitted';
        statusCell.style.color = 'green';
        reviewLink.textContent = 'Reviewed';
        reviewLink.style.color = 'gray';
        reviewLink.href = '#';
    } else {
        statusCell.textContent = 'Pending';
        statusCell.style.color = 'red';
        reviewLink.textContent = 'Review';
        reviewLink.style.color = '';
        reviewLink.href = 'evaluator_IPCRF_HighlyProficient_EPart1.html';
    }
});