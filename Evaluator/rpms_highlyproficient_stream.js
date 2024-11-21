// Header section
const headerImage = document.getElementById('header-image');
const headerTitle = document.getElementById('header-title');
const headerSubtitle = document.getElementById('header-subtitle');

// Tabs
const streamTab = document.getElementById('stream-tab');
const gradesTab = document.getElementById('grades-tab');

// Upcoming section
const upcomingSection = document.getElementById('upcoming');
const upcomingList = document.getElementById('upcoming-list');
const kra1Upcoming = document.getElementById('kra1-upcoming');
const kra2Upcoming = document.getElementById('kra2-upcoming');
const kra3Upcoming = document.getElementById('kra3-upcoming');
const kra4Upcoming = document.getElementById('kra4-upcoming');
const plusFactorUpcoming = document.getElementById('plusfactor-upcoming');
const viewAllUpcoming = document.getElementById('view-all');

// Main Content List
const mainContentList = document.getElementById('main-content-list');
const kra1Link = document.getElementById('kra1-link');
const kra1Icon = document.getElementById('kra1-icon');
const kra1TextContainer = document.getElementById('kra1-text-container');
const kra1Title = document.getElementById('kra1-title');
const kra1Posted = document.getElementById('kra1-posted');
const kra1Dots = document.getElementById('kra1-dots');

const kra2Link = document.getElementById('kra2-link');
const kra2Icon = document.getElementById('kra2-icon');
const kra2TextContainer = document.getElementById('kra2-text-container');
const kra2Title = document.getElementById('kra2-title');
const kra2Posted = document.getElementById('kra2-posted');
const kra2Dots = document.getElementById('kra2-dots');

const kra3Link = document.getElementById('kra3-link');
const kra3Icon = document.getElementById('kra3-icon');
const kra3TextContainer = document.getElementById('kra3-text-container');
const kra3Title = document.getElementById('kra3-title');
const kra3Posted = document.getElementById('kra3-posted');
const kra3Dots = document.getElementById('kra3-dots');

const kra4Link = document.getElementById('kra4-link');
const kra4Icon = document.getElementById('kra4-icon');
const kra4TextContainer = document.getElementById('kra4-text-container');
const kra4Title = document.getElementById('kra4-title');
const kra4Posted = document.getElementById('kra4-posted');
const kra4Dots = document.getElementById('kra4-dots');

const plusFactorLink = document.getElementById('plusfactor-link');
const plusFactorIcon = document.getElementById('plusfactor-icon');
const plusFactorTextContainer = document.getElementById('plusfactor-text-container');
const plusFactorTitle = document.getElementById('plusfactor-title');
const plusFactorPosted = document.getElementById('plusfactor-posted');
const plusFactorDots = document.getElementById('plusfactor-dots');


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
    window.location.href = 'rpms_highlyproficient_kra1.html';
}

function onclickKRA2(){
    sessionStorage.setItem('kra_2_id', kra_2_id);
    window.location.href = 'rpms_highlyproficient_kra2.html';
}

function onclickKRA3(){
    sessionStorage.setItem('kra_3_id', kra_3_id);
    window.location.href = 'rpms_highlyproficient_kra3.html';
}

function onclickKRA4(){
    sessionStorage.setItem('kra_4_id', kra_4_id);
    window.location.href = 'rpms_highlyproficient_kra4.html';
}

function onclickPlusFactor(){
    sessionStorage.setItem('plus_factor_id', plus_factor_id);
    window.location.href = 'rpms_highlyproficient_plusfactor.html';
}

let folder = undefined;
async function getClassworks(){
    try {
        
        const rpms_folder_id = sessionStorage.getItem('rpms_folder_id'); // 

        const formData = new FormData();
        formData.append('rpms_folder_id', rpms_folder_id);
        formData.append('folder_type', 'proficient' );

        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/rpms/folder/', {
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
