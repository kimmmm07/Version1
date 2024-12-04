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
                document.getElementById("attachmentKra2").textContent = '';
                document.getElementById('status').textContent = 'No Attachment';
                document.getElementById('attachment-anchor').removeAttribute('href');
            }
            if(parseInt(submitted[0]["Overall Score"]) > 0){
                document.getElementById('kra2Score').textContent = String(submitted[0]["Overall Score"]) + " /28"
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