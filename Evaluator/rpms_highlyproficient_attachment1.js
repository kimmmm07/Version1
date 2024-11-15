// Main Content Section
const contentSection = document.getElementById('content-section');
const kraTitle = document.getElementById('kra-title');

// Student Info and Dropdown
const studentInfo = document.getElementById('student-info');
const studentSelect = document.getElementById('student-select');
const statusText = document.getElementById('status-text');

// File Preview and Actions
const filePreview = document.getElementById('file-preview');
const attachmentPreview = document.getElementById('attachment-preview');
const fileActions = document.getElementById('file-actions');
const threeDotsBtn = document.getElementById('three-dots-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const downloadBtn = document.getElementById('download-btn');
const printBtn = document.getElementById('print-btn');

// Sidebar Section
const detailsSidebar = document.getElementById('details-sidebar');

// Return Button in Sidebar
const sidebarReturn = document.getElementById('sidebar-return');
const returnBtn = document.getElementById('return-btn');

// File Section in Sidebar
const fileSection = document.getElementById('file-section');
const sampleAttachment = document.getElementById('sample-attachment');

// Grade Section in Sidebar
const gradeSection = document.getElementById('grade-section');
const plusFactorScore = document.getElementById("plusFactorScore");
const kra4Score = document.getElementById("kra4Score");
const kra3Score = document.getElementById("kra3Score");
const kra2Score = document.getElementById("kra2Score");
const kra1Score = document.getElementById("kra1Score");

// Total Score in Sidebar
const totalScore = document.getElementById('total-score');
const totalScoreValue = document.getElementById('total-score-value');

// Private Comments Section in Sidebar
const privateCommentsSection = document.getElementById('private-comments');
const commentTextarea = document.getElementById('comment-textarea');
const postCommentBtn = document.getElementById('post-comment-btn');


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