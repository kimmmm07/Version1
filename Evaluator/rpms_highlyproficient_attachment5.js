// Main Content Section
const contentSection = document.querySelector('.content');
const plusFactorTitle = contentSection.querySelector('h1');

// Student Info and Dropdown
const studentInfo = contentSection.querySelector('.student-info');
const studentSelect = studentInfo.querySelector('select');
const statusText = studentInfo.querySelector('span');

// File Preview and Actions
const filePreview = contentSection.querySelector('.file-preview');
const attachmentPreview = filePreview.querySelector('img');
const fileActions = filePreview.querySelector('.file-actions');
const threeDotsBtn = fileActions.querySelector('.three-dots');
const dropdownMenu = fileActions.querySelector('.dropdown-menu');
const downloadBtn = dropdownMenu.querySelector('button:nth-child(1)');
const printBtn = dropdownMenu.querySelector('button:nth-child(2)');

// Sidebar Section
const detailsSidebar = document.querySelector('.sidebar1');

// Return Button in Sidebar
const sidebarReturn = detailsSidebar.querySelector('.sidebar-return');
const returnBtn = sidebarReturn.querySelector('#return-btn');

// File Section in Sidebar
const fileSection = detailsSidebar.querySelector('.file-section');
const sampleAttachment = fileSection.querySelector('img');

// Report Table Scores
const plusFactorScore = document.getElementById("plusFactorScore");

// Grade Section in Sidebar
const gradeSection = detailsSidebar.querySelector('.grade-section');
const gradeItem = gradeSection.querySelector('li');
const gradeSpan = gradeItem.querySelector('span');

// Total Score in Sidebar
const totalScore = detailsSidebar.querySelector('.total-score');
const totalScoreValue = document.getElementById('total-score-value');

// Private Comments Section in Sidebar
const privateCommentsSection = detailsSidebar.querySelector('.private-comments-section');
const commentTextarea = privateCommentsSection.querySelector('textarea');
const postCommentBtn = privateCommentsSection.querySelector('.post-button');


document.getElementById('three-dots-btn').addEventListener('click', function() {
const menu = document.getElementById('dropdown-menu');
menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});


// Floating menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
const floatingMenu = document.getElementById('floating-menu');
floatingMenu.style.display = floatingMenu.style.display === 'block' ? 'none' : 'block';
});

function closeMenu() {
document.getElementById('floating-menu').style.display = 'none';
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