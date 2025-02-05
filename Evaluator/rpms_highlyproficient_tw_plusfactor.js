// Sidebar Icon Elements
const menuIcon = document.getElementById("menu-icon");

// Floating Menu Elements
const floatingMenu = document.getElementById("floating-menu");
const closeBtn = document.querySelector(".close-btn"); 

// Header Section
const logoutLink = document.getElementById("logoutLink");

// Breadcrumb and Tabs
const kra3Score = document.getElementById("kra3Score"); // kra 3
const statusDropdown = document.getElementById("status");

// Content Section
const nameCheckbox = document.getElementById("name"); 

const class_work_id = sessionStorage.getItem('plus_factor_id');

const teacher_id = sessionStorage.getItem('teacher_id');

let teacher_name = undefined;

// Right Section (KRA 3: Curriculum and Planning)
const statusNumberTurnedIn = document.getElementById("statusNumberTurnedIn");
const statusNumberAssigned = document.getElementById("statusNumberAssigned");
const toggleContainer = document.getElementById("toggleContainer");
const toggleCircle = document.getElementById("toggleCircle");
const toggleText = document.getElementById("toggleText");
const attachmentKra3 = document.getElementById("attachmentKra3");

// Event listener examples for testing interactions
// toggleContainer.addEventListener("click", () => {
//     
// });

// nameCheckbox.addEventListener("change", () => {
//     
// });




// Main Content List
const mainContentList = document.getElementById('main-content-list');

const stepItem = document.getElementById('step-item');
// Objective 15 Elements
const objective15Item = document.getElementById('objective15-item');
const objective15Icon = document.getElementById('objective15-icon');
const objective15TextContainer = document.getElementById('objective15-text-container');
const objective15Title = document.getElementById('objective15-title');





function toggleStatus() {
    const toggleContainer = document.getElementById('toggleContainer');
    const toggleCircle = document.getElementById('toggleCircle');
    const toggleText = document.getElementById('toggleText');

    toggleContainer.classList.toggle('active');
    if (toggleContainer.classList.contains('active')) {
        toggleText.innerHTML = "Accepting submissions";
    } else {
        toggleText.innerHTML = "Closed for submissions";
    }
}

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

















// Get the element by its ID
const submissionDiv = document.getElementById('teacher-submission');
const h3Element = document.getElementById('teacher-submission-name');
const aElement = document.getElementById('teacher-submission-name');
const nameTag = document.getElementById('name');


const stepItem15 = document.getElementById('step-item15');

let teacher = undefined;
let submitted = undefined;

 


async function getTeacherAttachments() {
    try {

        const formData = new FormData();
        formData.append('class_work_id ', class_work_id);
        formData.append('teacher_id', teacher_id);


        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/rpms/folder/classwork/attachments/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            
            teacher = data.teacher;
            submitted = data.submitted?.[0];
            
            
            


            objective15Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective15Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective15Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    window.location.href = "rpms_highlyproficient_attachment_objective15.html" ;
                } 
            })

            if (submitted?.file_is_checked) {
                stepItem.classList.add('completed');
                stepItem15.classList.add('completed');
                // objective15Item.style.opacity =   0.5;
                // objective15Item.style.cursor =  "not-allowed";
            }

        } else {
            window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getTeacherAttachments();