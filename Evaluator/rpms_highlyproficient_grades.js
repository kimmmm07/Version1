// Header Section
const headerSection = document.querySelector('.header-section');
const headerImage = headerSection.querySelector('.header-image');
const textOverlay = headerSection.querySelector('.text-overlay');
const headerTitle = textOverlay.querySelector('#header-title');
const headerSubtitle = textOverlay.querySelector('#header-subtitle');

// Tabs Section
const tabs = document.querySelector('.tabs');
const tabLinks = tabs.querySelectorAll('.tab');
const streamTab = tabs.querySelector('.tab[href="rpms_highlyproficient_stream.html"]');
const gradesTab = tabs.querySelector('.tab[href="rpms_highlyproficient_grades.html"]');

// Main Table
const mainTable = document.querySelector('main table');
const sortSelect = mainTable.querySelector('#sort-select');

// User Info Section
const userInfo = mainTable.querySelector('#user-info');

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
            
            window.location.href = '../../get-started.html'; 
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});



async function getClassworksResult(){
    try {
        
        const rpms_folder_id = sessionStorage.getItem('rpms_folder_id'); // 
        const teacher_id = sessionStorage.getItem('teacher_id');

        const formData = new FormData();
        formData.append('rpms_folder_id', rpms_folder_id);
        formData.append('teacher_id', teacher_id);

        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/rpms/attachment/result/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            
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
            window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getClassworksResult();
