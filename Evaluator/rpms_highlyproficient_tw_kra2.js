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
const nameCheckbox = document.getElementById("name"); 

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



// Main Content List
const mainContentList = document.getElementById('main-content-list');

// Objective 5 Elements
const objective5Item = document.getElementById('objective5-item');
const objective5Icon = document.getElementById('objective5-icon');
const objective5TextContainer = document.getElementById('objective5-text-container');
const objective5Title = document.getElementById('objective5-title');

// Objective 6 Elements
const objective6Item = document.getElementById('objective6-item');
const objective6Icon = document.getElementById('objective6-icon');
const objective6TextContainer = document.getElementById('objective6-text-container');
const objective6Title = document.getElementById('objective6-title');

// Objective 7 Elements
const objective7Item = document.getElementById('objective7-item');
const objective7Icon = document.getElementById('objective7-icon');
const objective7TextContainer = document.getElementById('objective7-text-container');
const objective7Title = document.getElementById('objective7-title');

// Objective 8 Elements
const objective8Item = document.getElementById('objective8-item');
const objective8Icon = document.getElementById('objective8-icon');
const objective8TextContainer = document.getElementById('objective8-text-container');
const objective8Title = document.getElementById('objective8-title');




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



const stepItem5 = document.getElementById('step-item5');
const stepItem6 = document.getElementById('step-item6');
const stepItem7 = document.getElementById('step-item7');
const stepItem8 = document.getElementById('step-item8');

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

                
            objective5Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective5Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective5Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective5.html"; 
                    }
                } 
            })

            objective6Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective6Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective6Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file2_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective6.html";
                    }
                } 
            })

            objective7Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective7Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective7Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file3_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective7.html";
                    }
                } 
            })

 
            objective8Item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective8Item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective8Item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file4_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective8.html";
                    }
                } 
            })
            

            let has_active = true;
            if (submitted?.file_is_checked) {
                stepItem5.classList.add('completed');
                objective5Item.style.opacity = !submitted?.file_is_checked ? 1 : 0.5;
                objective5Item.style.cursor = !submitted?.file_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem5.classList.add('active'); 
                has_active = false;
            }
            
            if (submitted?.file2_is_checked) {
                stepItem6.classList.add('completed');
                objective6Item.style.opacity = !submitted?.file2_is_checked ? 1 : 0.5;
                objective6Item.style.cursor = !submitted?.file2_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem6.classList.add('active'); 
                has_active = false;
            }

            if (submitted?.file3_is_checked) {
                stepItem7.classList.add('completed');
                objective7Item.style.opacity = !submitted?.file3_is_checked ? 1 : 0.5;
                objective7Item.style.cursor = !submitted?.file3_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem7.classList.add('active'); 
                has_active = false;
            }

            if (submitted?.file4_is_checked) {
                stepItem8.classList.add('completed');
                objective8Item.style.opacity = !submitted?.file4_is_checked ? 1 : 0.5;
                objective8Item.style.cursor = !submitted?.file4_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem8.classList.add('active'); 
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