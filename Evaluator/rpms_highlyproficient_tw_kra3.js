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

const class_work_id = sessionStorage.getItem('kra_3_id');
console.log(class_work_id);
const teacher_id = sessionStorage.getItem('teacher_id');
console.log(teacher_id);
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
//     console.log("Toggle clicked!");
// });

// nameCheckbox.addEventListener("change", () => {
//     console.log(`Checkbox for "Jessica Sanchez Ramirez" changed: ${nameCheckbox.checked}`);
// });



// Main Content List
const mainContentList = document.getElementById('main-content-list');

// Objective 9 Elements
const objective9Item = document.getElementById('objective9-item');
const objective9Icon = document.getElementById('objective9-icon');
const objective9TextContainer = document.getElementById('objective9-text-container');
const objective9Title = document.getElementById('objective9-title');

// Objective 10 Elements
const objective10Item = document.getElementById('objective10-item');
const objective10Icon = document.getElementById('objective10-icon');
const objective10TextContainer = document.getElementById('objective10-text-container');
const objective10Title = document.getElementById('objective10-title');

// Objective 11 Elements
const objective11Item = document.getElementById('objective11-item');
const objective11Icon = document.getElementById('objective11-icon');
const objective11TextContainer = document.getElementById('objective11-text-container');
const objective11Title = document.getElementById('objective11-title');




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
            console.log("Success Data : ", data); 
            window.location.href = '../../get-started.html'; 
        } else {
            console.log("Error Data : ", data);
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
const stepItem9 = document.getElementById('step-item9');
const stepItem10 = document.getElementById('step-item10');
const stepItem11 = document.getElementById('step-item11');


function openAttachment(){
    window.location.href = "rpms_proficient_attachment3.html";
}


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
            console.log("Success Data : ", data);  
            teacher = data.teacher;
            submitted = data.submitted?.[0];

                
            objective9Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective9Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective9Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file_is_checked) {
                        window.location.href = "rpms_highlyproficient_attachment_objective9.html" ; 
                    }
                } 
            })

            objective10Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective10Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective10Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file2_is_checked) {
                        window.location.href = "rpms_highlyproficient_attachment_objective10.html";
                    }
                } 
            })

            objective11Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective11Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective11Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file3_is_checked) {
                        window.location.href = "rpms_highlyproficient_attachment_objective11.html";
                    }
                } 
            })


            

            let has_active = true;
            if (submitted?.file_is_checked) {
                stepItem9.classList.add('completed');
                objective9Item.style.opacity = !submitted?.file_is_checked ? 1 : 0.5;
                objective9Item.style.cursor = !submitted?.file_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem9.classList.add('active'); 
                has_active = false;
            }
            
            if (submitted?.file2_is_checked) {
                stepItem10.classList.add('completed');
                objective10Item.style.opacity = !submitted?.file2_is_checked ? 1 : 0.5;
                objective10Item.style.cursor = !submitted?.file2_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem10.classList.add('active'); 
                has_active = false;
            }

            if (submitted?.file3_is_checked) {
                stepItem11.classList.add('completed');
                objective11Item.style.opacity = !submitted?.file3_is_checked ? 1 : 0.5;
                objective11Item.style.cursor = !submitted?.file3_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem11.classList.add('active'); 
                has_active = false;
            }


        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getTeacherAttachments();