// Sidebar elements
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu-icon");
const homeIcon = document.getElementById("home-icon");
const settingsIcon = document.getElementById("settings-icon");

// Floating Menu elements
const floatingMenu = document.getElementById("floating-menu");
const closeBtn = document.getElementById("close-btn");
const floatingMenuList = document.getElementById("floating-menu-list");
const homeLink = document.getElementById("home-link");
const settingsLink = document.getElementById("settings-link");
const schoolYearLink = document.getElementById("school-year-link");


const class_work_id = sessionStorage.getItem('kra_1_id');

const teacher_id = sessionStorage.getItem('teacher_id');



// Container and content elements
const container = document.getElementById("container");
const breadcrumb = document.getElementById("breadcrumb");
const tabs = document.getElementById("tabs");
const kraHeader = document.getElementById("kra-header");
const kraIcon = document.getElementById("kra-icon");
const kraTitle = document.getElementById("kra-title");
const kraDetails = document.getElementById("kra-details");
const dotsMenu = document.getElementById("dots-menu");
const dotsSpan = document.getElementById("dots-span");

// KRA objectives
const kraObjective1 = document.getElementById('kraObjective1');
const objective1 = document.getElementById('Objective1');
const kraObjective2 = document.getElementById('kraObjective2');
const objective2 = document.getElementById('Objective2');
const kraObjective3 = document.getElementById('kraObjective3');
const objective3 = document.getElementById('Objectvie3'); // Fixed typo in the ID
const kraObjective4 = document.getElementById('kraObjective4');
const objective4 = document.getElementById('Objective4');

// Comments section
const commentsSection = document.getElementById("comments-section");
const addComment = document.getElementById("add-comment");
const commentInput = document.getElementById("comment-input");
const sendCommentBtn = document.getElementById("send-comment-btn");





// document.querySelector('.dots-menu').addEventListener('click', function() {
//     alert("Options menu clicked.");
// });

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
            
            window.location.href = '../../get-started.html'; 
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});


