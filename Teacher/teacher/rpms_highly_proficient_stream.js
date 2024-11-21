// Header Section
const headerImage = document.querySelector('.header-image');
const headerTitles = document.querySelectorAll('.header-title'); // Two h1 elements with the class 'header-title'
const headerSubtitle = document.getElementById('schoolYear'); // School year subtitle

// Tabs Section
const streamTab = document.querySelector('.tabs a[href="rpms_highly_proficient_stream.html"]');
const resultsTab = document.querySelector('.tabs a[href="rpms_highly_proficient_results.html"]');

// Upcoming Section
const upcomingSection = document.querySelector('.upcoming');
const upcomingList = document.querySelector('.upcoming-list');
const viewAllLink = upcomingList.querySelector('.view-all a');

// Main Content Section
const mainContentList = document.querySelector('.main-content-list');
const kra1Content = mainContentList.querySelector('a[href="rpms_highly_proficient_content1.html"]'); // KRA 1 link
const kra2Content = mainContentList.querySelector('a[href="rpms_highly_proficient_content2.html"]'); // KRA 2 link
const kra3Content = mainContentList.querySelector('a[href="rpms_highly_proficient_content3.html"]'); // KRA 3 link
const kra4Content = mainContentList.querySelector('a[href="rpms_highly_proficient_content4.html"]'); // KRA 4 link
const plusFactorContent = mainContentList.querySelector('a[href="rpms_highly_proficient_content5.html"]'); // PLUS FACTOR link


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



let kra_1_id = undefined;
let kra_2_id = undefined;
let kra_3_id = undefined;
let kra_4_id = undefined;
let plus_factor_id = undefined;

function onclickKRA1(){
    sessionStorage.setItem('kra_1_id', kra_1_id);
    console.log(kra_1_id);
    window.location.href = 'rpms_highly_proficient_content1.html';
}

function onclickKRA2(){
    sessionStorage.setItem('kra_2_id', kra_2_id);
    window.location.href = 'rpms_highly_proficient_content2.html';
}

function onclickKRA3(){
    sessionStorage.setItem('kra_3_id', kra_3_id);
    window.location.href = 'rpms_highly_proficient_content3.html';
}

function onclickKRA4(){
    sessionStorage.setItem('kra_4_id', kra_4_id);
    window.location.href = 'rpms_highly_proficient_content4.html';
}

function onclickPlusFactor(){
    sessionStorage.setItem('plus_factor_id', plus_factor_id);
    window.location.href = 'rpms_highly_proficient_content5.html';
}



let folder = undefined;
async function getClassworks(){
    try {
        
        const rpms_folder_id = sessionStorage.getItem('rpms_folder_id'); // 

        const formData = new FormData();
        formData.append('rpms_folder_id', rpms_folder_id);
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/rpms/folder/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,
        });

        folder = await response.json();

        if (response.ok) {
            console.log("Success Data : ", folder);  
            folder.rpms_classworks.forEach(classwork => {
                if (classwork.title == "PLUS FACTOR") {
                    plus_factor_id = classwork.class_work_id;
                } else if (classwork.title == "KRA 4:  Curriculum and Planning & Assessment and Reporting") {
                    kra_4_id = classwork.class_work_id;
                } else if (classwork.title == "KRA 3: Curriculum and Planning") {
                    kra_3_id = classwork.class_work_id;
                } else if (classwork.title == "KRA 2: Learning Environment and Diversity of Learners") {
                    kra_2_id = classwork.class_work_id;
                } else if (classwork.title == "KRA 1: Content Knowledge and Pedagogy") {
                    kra_1_id = classwork.class_work_id;
                }
            })
        } else {
            console.log("Error Data : ", folder);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getClassworks();