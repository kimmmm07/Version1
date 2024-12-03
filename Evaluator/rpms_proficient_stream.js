// Sidebar Elements
const menuIcon = document.getElementById("menu-icon");
const homeIcon = document.getElementById("home-icon");
const settingsIcon = document.getElementById("settings-icon");

// Floating Menu Elements
const floatingMenu = document.getElementById("floating-menu");
const closeBtn = document.getElementById("close-btn");
const floatingHomeLink = document.getElementById("floating-home-link");
const floatingSettingsLink = document.getElementById("floating-settings-link");
const floatingSchoolYearLink = document.getElementById("floating-school-year-link");
const schoolYearText = document.getElementById("schoolYear");


// Header Section with Image and Text Overlay
const headerSection = document.getElementById("header-section");
const headerImage = document.getElementById("header-image");
const textOverlay = document.getElementById("text-overlay");
const headerTitle = document.getElementById("header-title");
const schoolYearSubtitle = document.getElementById("schoolYear-subtitle");

// Tabs
const streamTab = document.getElementById("stream-tab");
const gradesTab = document.getElementById("grades-tab");

// Content Wrapper Elements
const contentWrapper = document.getElementById("content-wrapper");
const upcomingSection = document.getElementById("upcoming");
const upcomingTitle = document.getElementById("upcoming-title");
const upcomingList = document.getElementById("upcomingList");
const kra1Link = document.getElementById("kra1-link");
const kra2Link = document.getElementById("kra2-link");
const kra3Link = document.getElementById("kra3-link");
const viewAllLink = document.getElementById("view-all-link");

// Main Content List Elements
const mainContentList = document.getElementById("main-content-list");
const kra1Item = document.getElementById("kra1-item");
const kra1Icon = document.getElementById("kra1-icon");
const kra1TextContainer = document.getElementById("kra1-text-container");
const kra1Title = document.getElementById("kra1-title");
const kra1Posted = document.getElementById("kra1-posted");
const kra1MenuDots = document.getElementById("kra1-menu-dots");

const kra2Item = document.getElementById("kra2-item");
const kra2Icon = document.getElementById("kra2-icon");
const kra2TextContainer = document.getElementById("kra2-text-container");
const kra2Title = document.getElementById("kra2-title");
const kra2Posted = document.getElementById("kra2-posted");
const kra2MenuDots = document.getElementById("kra2-menu-dots");

const kra3Item = document.getElementById("kra3-item");
const kra3Icon = document.getElementById("kra3-icon");
const kra3TextContainer = document.getElementById("kra3-text-container");
const kra3Title = document.getElementById("kra3-title");
const kra3Posted = document.getElementById("kra3-posted");
const kra3MenuDots = document.getElementById("kra3-menu-dots");

const kra4Item = document.getElementById("kra4-item");
const kra4Icon = document.getElementById("kra4-icon");
const kra4TextContainer = document.getElementById("kra4-text-container");
const kra4Title = document.getElementById("kra4-title");
const kra4Posted = document.getElementById("kra4-posted");
const kra4MenuDots = document.getElementById("kra4-menu-dots");

const plusFactorItem = document.getElementById("plus-factor-item");
const plusFactorIcon = document.getElementById("plus-factor-icon");
const plusFactorTextContainer = document.getElementById("plus-factor-text-container");
const plusFactorTitle = document.getElementById("plus-factor-title");
const plusFactorPosted = document.getElementById("plus-factor-posted");
const plusFactorMenuDots = document.getElementById("plus-factor-menu-dots");


const checkkra1Status = document.getElementById("kra1Status");
const checkkra2Status = document.getElementById("kra2Status");
const checkkra3Status = document.getElementById("kra3Status");
const checkkra4Status = document.getElementById("kra4Status");
const checkplusfactorStatus = document.getElementById("plusfactorStatus");

// // Event listeners
// closeButton.addEventListener('click', () => {
//     floatingMenu.classList.toggle('active');
// });


 


let kra_1_id = undefined;
let kra_2_id = undefined;
let kra_3_id = undefined;
let kra_4_id = undefined;
let plus_factor_id = undefined;

function onclickKRA1(){
    sessionStorage.setItem('kra_1_id', kra_1_id);
    window.location.href = 'rpms_proficient_kra1.html';
}

function onclickKRA2(){
    sessionStorage.setItem('kra_2_id', kra_2_id);
    window.location.href = 'rpms_proficient_kra2.html';
}

function onclickKRA3(){
    sessionStorage.setItem('kra_3_id', kra_3_id);
    window.location.href = 'rpms_proficient_kra3.html';
}

function onclickKRA4(){
    sessionStorage.setItem('kra_4_id', kra_4_id);
    window.location.href = 'rpms_proficient_kra4.html';
}

function onclickPlusFactor(){
    sessionStorage.setItem('plus_factor_id', plus_factor_id);
    window.location.href = 'rpms_proficient_plusfactor.html';
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
                    checkplusfactorStatus.src = classwork?.attachment?.is_checked ? "Assets/Check Mark1.png" : "Assets/Check Mark.png";
                } else if (classwork.title == "KRA 4:  Curriculum and Planning & Assessment and Reporting") {
                    kra_4_id = classwork.class_work_id;
                    checkkra4Status.src = classwork?.attachment?.is_checked ? "Assets/Check Mark1.png" : "Assets/Check Mark.png";
                } else if (classwork.title == "KRA 3: Curriculum and Planning") {
                    kra_3_id = classwork.class_work_id;
                    checkkra3Status.src = classwork?.attachment?.is_checked ? "Assets/Check Mark1.png" : "Assets/Check Mark.png";
                } else if (classwork.title == "KRA 2: Learning Environment and Diversity of Learners") {
                    kra_2_id = classwork.class_work_id;
                    checkkra2Status.src = classwork?.attachment?.is_checked ? "Assets/Check Mark1.png" : "Assets/Check Mark.png";
                } else if (classwork.title == "KRA 1: Content Knowledge and Pedagogy") {
                    kra_1_id = classwork.class_work_id;
                    checkkra1Status.src = classwork?.attachment?.is_checked ? "Assets/Check Mark1.png" : "Assets/Check Mark.png";
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