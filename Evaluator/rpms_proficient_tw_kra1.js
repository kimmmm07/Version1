// Sidebar Icon Elements
const menuIcon = document.getElementById("menu-icon");

// Floating Menu Elements
const floatingMenu = document.getElementById("floating-menu");
const closeBtn = document.querySelector(".close-btn"); 

// Header Section
const logoutLink = document.getElementById("logoutLink");

// Breadcrumb and Tabs
const kra1Score = document.getElementById("kra1Score"); // kra 1
const statusDropdown = document.getElementById("status");

// Content Section
// const nameCheckbox = document.getElementById("name"); 

const class_work_id = sessionStorage.getItem('kra_1_id');
console.log(class_work_id);
const teacher_id = sessionStorage.getItem('teacher_id');
console.log(teacher_id);
let teacher_name = undefined;


// Right Section (KRA 1: Content Knowledge and Pedagogy)
const statusNumberTurnedIn = document.getElementById("statusNumberTurnedIn");
const statusNumberAssigned = document.getElementById("statusNumberAssigned");
const toggleContainer = document.getElementById("toggleContainer");
const toggleCircle = document.getElementById("toggleCircle");
const toggleText = document.getElementById("toggleText");
const attachmentKra1 = document.getElementById("attachmentKra1");

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

// Stepper Item 1 Elements
const stepItem1 = document.getElementById('step-item1');
const stepCounter1 = document.getElementById('step-counter1');
const stepName1 = document.getElementById('step-name1');

// Stepper Item 2 Elements
const stepItem2 = document.getElementById('step-item2');
const stepCounter2 = document.getElementById('step-counter2');
const stepName2 = document.getElementById('step-name2');

// Stepper Item 3 Elements
const stepItem3 = document.getElementById('step-item3');
const stepCounter3 = document.getElementById('step-counter3');
const stepName3 = document.getElementById('step-name3');

// Stepper Item 4 Elements
const stepItem4 = document.getElementById('step-item4');
const stepCounter4 = document.getElementById('step-counter4');
const stepName4 = document.getElementById('step-name4');

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




const objective1_item = document.getElementById("objective1-item");
const objective2_item = document.getElementById("objective2-item");
const objective3_item = document.getElementById("objective3-item");
const objective4_item = document.getElementById("objective4-item");


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

                
            objective1_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective1_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective1_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective5.html"; 
                    }
                } 
            })

            objective2_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective2_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective2_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file2_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective6.html";
                    }
                } 
            })

            objective3_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective3_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective3_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file3_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective7.html";
                    }
                } 
            })

 
            objective4_item.style.opacity = submitted?.is_submitted ? 1 : 0.5;
            objective4_item.style.cursor = submitted?.is_submitted ? "pointer" : "not-allowed";
            objective4_item.addEventListener("click", () => {
                if (submitted?.is_submitted) {
                    if (!submitted?.file4_is_checked) {
                        window.location.href = "rpms_proficient_attachment_objective8.html";
                    }
                } 
            })
            

            let has_active = true;
            if (submitted?.file_is_checked) {
                stepItem1.classList.add('completed');
                objective1_item.style.opacity = !submitted?.file_is_checked ? 1 : 0.5;
                objective1_item.style.cursor = !submitted?.file_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem1.classList.add('active'); 
                has_active = false;
            }
            
            if (submitted?.file2_is_checked) {
                stepItem2.classList.add('completed');
                objective2_item.style.opacity = !submitted?.file2_is_checked ? 1 : 0.5;
                objective2_item.style.cursor = !submitted?.file2_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem2.classList.add('active'); 
                has_active = false;
            }

            if (submitted?.file3_is_checked) {
                stepItem3.classList.add('completed');
                objective3_item.style.opacity = !submitted?.file3_is_checked ? 1 : 0.5;
                objective3_item.style.cursor = !submitted?.file3_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem3.classList.add('active'); 
                has_active = false;
            }

            if (submitted?.file4_is_checked) {
                stepItem4.classList.add('completed');
                objective4_item.style.opacity = !submitted?.file4_is_checked ? 1 : 0.5;
                objective4_item.style.cursor = !submitted?.file4_is_checked ? "pointer" : "not-allowed";
            } else {
                has_active && stepItem4.classList.add('active'); 
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
