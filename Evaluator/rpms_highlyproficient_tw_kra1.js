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
const nameCheckbox = document.getElementById("name"); 

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

nameCheckbox.addEventListener("change", () => {
    console.log(`Checkbox for ${teacherName.textContent} changed: ${nameCheckbox.checked}`);
});




// Main Content List
const mainContentList = document.getElementById('main-content-list');

// Objective 1 Elements
const objective1Item = document.getElementById('objective1-item');
const objective1Icon = document.getElementById('objective1-icon');
const objective1TextContainer = document.getElementById('objective1-text-container');
const objective1Title = document.getElementById('objective1-title');

// Objective 2 Elements
const objective2Item = document.getElementById('objective2-item');
const objective2Icon = document.getElementById('objective2-icon');
const objective2TextContainer = document.getElementById('objective2-text-container');
const objective2Title = document.getElementById('objective2-title');

// Objective 3 Elements
const objective3Item = document.getElementById('objective3-item');
const objective3Icon = document.getElementById('objective3-icon');
const objective3TextContainer = document.getElementById('objective3-text-container');
const objective3Title = document.getElementById('objective3-title');

// Objective 4 Elements
const objective4Item = document.getElementById('objective4-item');
const objective4Icon = document.getElementById('objective4-icon');
const objective4TextContainer = document.getElementById('objective4-text-container');
const objective4Title = document.getElementById('objective4-title');




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
            const teacher = data.teacher;
            document.getElementById("name").textContent = teacher.fullname; 
            document.getElementById("name1").textContent = teacher.fullname; 
            const submitted = data.submitted;
            if(submitted.length === 0){
                document.getElementById("attachmentKra1").textContent = ''
                document.getElementById('status').textContent = 'No Attachment';
                document.getElementById('attachment-anchor').removeAttribute('href');
            }
            if(parseInt(submitted[0]["Overall Score"]) > 0){
                document.getElementById('kra1Score').textContent = String(submitted[0]["Overall Score"]) + " /28"
            }
            
            console.log(teacher);
            console.log(submitted);

        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getTeacherAttachments();