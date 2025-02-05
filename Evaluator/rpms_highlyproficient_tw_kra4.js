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

const class_work_id = sessionStorage.getItem('kra_4_id');

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

// Objective 12 Elements
const objective12Item = document.getElementById('objective12-item');
const objective12Icon = document.getElementById('objective12-icon');
const objective12TextContainer = document.getElementById('objective12-text-container');
const objective12Title = document.getElementById('objective12-title');

// Objective 13 Elements
const objective13Item = document.getElementById('objective13-item');
const objective13Icon = document.getElementById('objective13-icon');
const objective13TextContainer = document.getElementById('objective13-text-container');
const objective13Title = document.getElementById('objective13-title');

// Objective 14 Elements
const objective14Item = document.getElementById('objective14-item');
const objective14Icon = document.getElementById('objective14-icon');
const objective14TextContainer = document.getElementById('objective14-text-container');
const objective14Title = document.getElementById('objective14-title');






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



let teacher = undefined;
let submitted = undefined;


const stepItem12 = document.getElementById('step-item12');
const stepItem13 = document.getElementById('step-item13');
const stepItem14 = document.getElementById('step-item14');


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

            objective12Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective12Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective12Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    // if (!submitted?.file_is_checked) {
                         window.location.href = "rpms_highlyproficient_attachment_objective12.html"; 
                    // }
                } 
            })

            objective13Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective13Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective13Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (submitted?.file2_is_checked || submitted?.file_is_checked) {
                        window.location.href = "rpms_highlyproficient_attachment_objective13.html" ;
                    }
                } 
            })

            objective14Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective14Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective14Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (submitted?.file3_is_checked || submitted?.file2_is_checked) {
                        window.location.href = "rpms_highlyproficient_attachment_objective14.html";
                    }
                } 
            })


            

            let has_active = true;
            if (submitted?.file_is_checked) {
                stepItem12.classList.add('completed');
                // objective12Item.style.opacity = !submitted?.file_is_checked ? 1 : 0.5;
                // objective12Item.style.cursor = !submitted?.file_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem12.classList.add('active'); 
                has_active = false;
            }
            
            if (submitted?.file2_is_checked) {
                stepItem13.classList.add('completed');
                // objective13Item.style.opacity =  0.5;
                // objective13Item.style.cursor =   "not-allowed";
            } else {
                has_active && stepItem13.classList.add('active'); 
                has_active = false;
                if (!submitted?.file_is_checked) { 
                    objective13Item.style.opacity =  0.5;
                    objective13Item.style.cursor =  "not-allowed";
                } 
            }

            if (submitted?.file3_is_checked) {
                stepItem14.classList.add('completed');
                // objective14Item.style.opacity =   0.5;
                // objective14Item.style.cursor =   "not-allowed";
            } else {
                has_active && stepItem14.classList.add('active'); 
                has_active = false;
                if (!submitted?.file2_is_checked) { 
                    objective14Item.style.opacity =  0.5;
                    objective14Item.style.cursor =  "not-allowed";
                } 
            }


        } else {
            window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getTeacherAttachments();



