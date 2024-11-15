// Header Section
const headerImage = document.getElementById("headerImage");
const textOverlay = document.getElementById("textOverlay");
const headerTitle1 = document.getElementById("headerTitle1");
const headerTitle2 = document.getElementById("headerTitle2");
const schoolYear = document.getElementById("schoolYear");

// Tabs
const tabs = document.getElementById("tabs");
const streamTab = document.getElementById("streamTab");
const resultsTab = document.getElementById("resultsTab");

// Container
const container = document.getElementById("container");
const name = document.getElementById("name");
const academicYear = document.getElementById("academicYear");

// Report Table
const reportTable = document.getElementById("reportTable");
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");

// Report Table Titles
const plusFactorTitle = document.getElementById("plusFactorTitle");
const kra4Title = document.getElementById("kra4Title");
const kra3Title = document.getElementById("kra3Title");
const kra2Title = document.getElementById("kra2Title");
const kra1Title = document.getElementById("kra1Title");

// Report Table "Out Of"
const plusFactorOutOf = document.getElementById("plusFactorOutOf");
const kra4OutOf = document.getElementById("kra4OutOf");
const kra3OutOf = document.getElementById("kra3OutOf");
const kra2OutOf = document.getElementById("kra2OutOf");
const kra1OutOf = document.getElementById("kra1OutOf");

// Report Table Scores
const plusFactorScore = document.getElementById("plusFactorScore");
const kra4Score = document.getElementById("kra4Score");
const kra3Score = document.getElementById("kra3Score");
const kra2Score = document.getElementById("kra2Score");
const kra1Score = document.getElementById("kra1Score");
const totalScore = document.getElementById("totalScore");



async function getClassworksResult(){
    try {
        
        const rpms_folder_id = sessionStorage.getItem('rpms_folder_id'); // 

        const formData = new FormData();
        formData.append('rpms_folder_id', rpms_folder_id);
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/rpms/attachment/result/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            console.log("Success Data : ", result);  
            let overallScoreData = 0;
            result.scores.forEach(classwork => {
                if (classwork.title == "PLUS FACTOR") {
                    plusFactorScore.textContent = `${classwork.grade['Total'] ?? 0}/2`;
                    overallScoreData += classwork.grade['Total']?? 0;
                } else if (classwork.title == "KRA 4:  Curriculum and Planning & Assessment and Reporting") {
                    kra4Score.textContent = `${classwork.grade['Total'] ?? 0}/21`;
                    overallScoreData += classwork.grade['Total']?? 0;
                } else if (classwork.title == "KRA 3: Curriculum and Planning") {
                    kra3Score.textContent = `${classwork.grade['Total'] ?? 0}/21`;
                    overallScoreData += classwork.grade['Total'] ?? 0;
                } else if (classwork.title == "KRA 2: Learning Environment and Diversity of Learners") {
                    kra2Score.textContent = `${classwork.grade['Total'] ?? 0}/28`;
                    overallScoreData += classwork.grade['Total']?? 0;
                } else if (classwork.title == "KRA 1: Content Knowledge and Pedagogy") {
                    kra1Score.textContent = `${classwork.grade['Total'] ?? 0}/28`;
                    overallScoreData += classwork.grade['Total']?? 0;
                }
            });

            totalScore.textContent = `${overallScoreData}/100`;




        } else {
            console.log("Error Data : ", result);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getClassworksResult();










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