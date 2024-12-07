// Sidebar Icon Elements
const menuIcon = document.getElementById("menu-icon");

// Floating Menu Elements
const floatingMenu = document.getElementById("floating-menu");
const closeBtn = document.querySelector(".close-btn"); 

// Header Section
const logoutLink = document.getElementById("logoutLink");

// Breadcrumb and Tabs
const kra2Score = document.getElementById("kra2Score"); // kra 2
const statusDropdown = document.getElementById("status");

// Content Section
// const nameCheckbox = document.getElementById("name"); 

const class_work_id = sessionStorage.getItem('kra_2_id');
console.log(class_work_id);
const teacher_id = sessionStorage.getItem('teacher_id');
console.log(teacher_id);
let teacher_name = undefined;

// Right Section (KRA 2: Learning Environment and Diversity of Learners)
const statusNumberTurnedIn = document.getElementById("statusNumberTurnedIn");
const statusNumberAssigned = document.getElementById("statusNumberAssigned");
const toggleContainer = document.getElementById("toggleContainer");
const toggleCircle = document.getElementById("toggleCircle");
const toggleText = document.getElementById("toggleText");
const teacherName = document.getElementById("name"); 
const attachmentKra2 = document.getElementById("attachmentKra2");

// Event listener examples for testing interactions
// toggleContainer.addEventListener("click", () => {
//     console.log("Toggle clicked!");
// });

// nameCheckbox.addEventListener("change", () => {
//     console.log(`Checkbox for ${teacherName.textContent} changed: ${nameCheckbox.checked}`);
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

// Stepper Item 5 Elements
const stepItem5 = document.getElementById('step-item5');
const stepCounter5 = document.getElementById('step-counter5');
const stepName5 = document.getElementById('step-name5');

// Stepper Item 6 Elements
const stepItem6 = document.getElementById('step-item6');
const stepCounter6 = document.getElementById('step-counter6');
const stepName6 = document.getElementById('step-name6');

// Stepper Item 7 Elements
const stepItem7 = document.getElementById('step-item7');
const stepCounter7 = document.getElementById('step-counter7');
const stepName7 = document.getElementById('step-name7');

// Stepper Item 8 Elements
const stepItem8 = document.getElementById('step-item8');
const stepCounter8 = document.getElementById('step-counter8');
const stepName8 = document.getElementById('step-name8');

// Floating menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
const floatingMenu = document.getElementById('floating-menu');
floatingMenu.style.display = floatingMenu.style.display === 'block' ? 'none' : 'block';
});

function closeMenu() {
document.getElementById('floating-menu').style.display = 'none';
}

// Modal logic
const logoutButton = document.getElementById('logoutLink');  
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













const objective5_item = document.getElementById("objective5-item");
const objective6_item = document.getElementById("objective6-item");
const objective7_item = document.getElementById("objective7-item");
const objective8_item = document.getElementById("objective8-item");





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

                
            objective5_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective5_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective5_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    // if (!submitted?.file_is_checked) { 
                        window.location.href = "rpms_proficient_attachment_objective5.html"; 
                    // }
                } 
            })

            objective6_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective6_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective6_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (submitted?.file2_is_checked || submitted?.file_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective6.html";
                    }
                } 
            })

            objective7_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective7_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective7_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file3_is_checked || submitted?.file2_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective7.html";
                    }
                } 
            })

 
            objective8_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective8_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective8_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (submitted?.file4_is_checked || submitted?.file3_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective8.html";
                    }
                } 
            })
            

            let has_active = true;
            if (submitted?.file_is_checked) {
                stepItem5.classList.add('completed');
                // objective5_item.style.opacity =   0.5;
                // objective5_item.style.cursor =   "not-allowed";
            } else {
                has_active && stepItem5.classList.add('active'); 
                has_active = false;
            }
            
            if (submitted?.file2_is_checked) {
                stepItem6.classList.add('completed');
                // objective6_item.style.opacity =   0.5;
                // objective6_item.style.cursor =  "not-allowed";
            } else {
                has_active && stepItem6.classList.add('active'); 
                has_active = false;
                if (!submitted?.file_is_checked) { 
                    // objective6_item.style.opacity =  0.5;
                    // objective6_item.style.cursor =  "not-allowed";
                }  
            }

            if (submitted?.file3_is_checked) {
                stepItem7.classList.add('completed');
                // objective7_item.style.opacity = 0.5;
                // objective7_item.style.cursor =   "not-allowed";
                
            } else {
                has_active && stepItem7.classList.add('active'); 
                has_active = false;
                if (!submitted?.file2_is_checked) { 
                    objective7_item.style.opacity =  0.5;
                    objective7_item.style.cursor =  "not-allowed";
                }  
            }

            if (submitted?.file4_is_checked) {
                stepItem8.classList.add('completed');
                objective8_item.style.opacity = 0.5;
                objective8_item.style.cursor =   "not-allowed";
            } else {
                has_active && stepItem8.classList.add('active'); 
                has_active = false;
                if (!submitted?.file3_is_checked) { 
                    objective8_item.style.opacity =  0.5;
                    objective8_item.style.cursor =  "not-allowed";
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