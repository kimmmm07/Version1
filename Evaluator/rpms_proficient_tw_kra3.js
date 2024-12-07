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

// Stepper Item 9 Elements
const stepItem9 = document.getElementById('step-item9');
const stepCounter9 = document.getElementById('step-counter9');
const stepName9 = document.getElementById('step-name9');

// Stepper Item 10 Elements
const stepItem10 = document.getElementById('step-item10');
const stepCounter10 = document.getElementById('step-counter10');
const stepName10 = document.getElementById('step-name10');

// Stepper Item 11 Elements
const stepItem11 = document.getElementById('step-item11');
const stepCounter11 = document.getElementById('step-counter11');
const stepName11 = document.getElementById('step-name11');


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


const objective9_item = document.getElementById("objective9-item");
const objective10_item = document.getElementById("objective10-item");
const objective11_item = document.getElementById("objective11-item");


let teacher = undefined;
let submitted = undefined;


const class_work_id = sessionStorage.getItem('kra_3_id');
console.log(class_work_id);
const teacher_id = sessionStorage.getItem('teacher_id');
console.log(teacher_id);
let teacher_name = undefined;

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

                
            objective9_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective9_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective9_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    // if (!submitted?.file_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective9.html"; 
                    // }
                } 
            })

            objective10_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective10_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective10_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (submitted?.file2_is_checked || submitted?.file_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective10.html";
                    }
                } 
            })

            objective11_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective11_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective11_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (submitted?.file3_is_checked || submitted?.file2_is_checked ) {
                        window.location.href = "rpms_proficient_attachment_objective11.html";
                    }
                } 
            })


            

            let has_active = true;
            if (submitted?.file_is_checked) {
                stepItem9.classList.add('completed');
                // objective9_item.style.opacity =   0.5;
                // objective9_item.style.cursor =   "not-allowed";
            } else {
                has_active && stepItem9.classList.add('active'); 
                has_active = false;
            }
            
            if (submitted?.file2_is_checked) {
                stepItem10.classList.add('completed');
                // objective10_item.style.opacity =   0.5;
                // objective10_item.style.cursor =   "not-allowed";
            } else {
                has_active && stepItem10.classList.add('active'); 
                has_active = false;

                if (!submitted?.file_is_checked) { 
                    objective10_item.style.opacity =  0.5;
                    objective10_item.style.cursor =  "not-allowed";
                }  
            }

            if (submitted?.file3_is_checked) {
                stepItem11.classList.add('completed');
                // objective11_item.style.opacity =   0.5;
                // objective11_item.style.cursor =   "not-allowed";
            } else {
                has_active && stepItem11.classList.add('active'); 
                has_active = false;
                if (!submitted?.file2_is_checked) { 
                    objective11_item.style.opacity =  0.5;
                    objective11_item.style.cursor =  "not-allowed";
                }  
            }


        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getTeacherAttachments();