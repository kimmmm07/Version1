// Header Section
const headerSection = document.getElementById('headerSection');
const headerImage = document.getElementById('headerImage');
const textOverlay = document.getElementById('textOverlay');
const headerTitle1 = document.getElementById('headerTitle1');
const headerTitle2 = document.getElementById('headerTitle2');
const rpmsProficientSchoolYear = document.getElementById('rpmsProficientSchoolYear');

// Tabs
const tabs = document.getElementById('tabs');
const streamTab = document.getElementById('streamTab');
const resultsTab = document.getElementById('resultsTab');

// Content Wrapper
const contentWrapper = document.getElementById('contentWrapper');

// Upcoming Section
const upcomingSection = document.getElementById('upcomingSection');
const upcomingTitle = document.getElementById('upcomingTitle');
const rpmsProficientUpcomingList = document.getElementById('rpmsProficientUpcomingList');
const upcomingKRA1 = document.getElementById('upcomingKRA1');
const upcomingKRA2 = document.getElementById('upcomingKRA2');
const upcomingKRA3 = document.getElementById('upcomingKRA3');
const viewAllLink = document.getElementById('viewAllLink');

// Main Content Section
const mainContentList = document.getElementById('mainContentList');
const kra1Item = document.getElementById('kra1Item');
const kra1Icon = document.getElementById('kra1Icon');
const kra1TextContainer = document.getElementById('kra1TextContainer');
const kra1Title = document.getElementById('kra1Title');

const kra2Item = document.getElementById('kra2Item');
const kra2Icon = document.getElementById('kra2Icon');
const kra2TextContainer = document.getElementById('kra2TextContainer');
const kra2Title = document.getElementById('kra2Title');

const kra3Item = document.getElementById('kra3Item');
const kra3Icon = document.getElementById('kra3Icon');
const kra3TextContainer = document.getElementById('kra3TextContainer');
const kra3Title = document.getElementById('kra3Title');

const kra4Item = document.getElementById('kra4Item');
const kra4Icon = document.getElementById('kra4Icon');
const kra4TextContainer = document.getElementById('kra4TextContainer');
const kra4Title = document.getElementById('kra4Title');

const plusFactorItem = document.getElementById('plusFactorItem');
const plusFactorIcon = document.getElementById('plusFactorIcon');
const plusFactorTextContainer = document.getElementById('plusFactorTextContainer');
const plusFactorTitle = document.getElementById('plusFactorTitle');

// Change the school year text
rpmsProficientSchoolYear.textContent = "School Year 2024-2025";

// Toggle active class on tabs
streamTab.classList.toggle('active');
resultsTab.classList.toggle('active');


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
        } else {
            console.log("Error Data : ", folder);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getClassworks();