// Header Section
const headerImage = document.querySelector('.header-image');
const headerTitle = document.querySelectorAll('.header-title'); // There are two h1 elements with the class 'header-title'
const headerSubtitle = document.getElementById('schoolYear'); // School Year subtitle in the header

// Tabs
const streamTab = document.querySelector('.tabs a[href="rpms_highly_proficient_stream.html"]');
const resultsTab = document.querySelector('.tabs a[href="rpms_highly_proficient_results.html"]');

// Container Section
const studentName = document.getElementById('name');
const academicYear = document.getElementById('schoolYear'); // Academic year under student name

// Report Table
const reportTable = document.querySelector('.report-table');
const rows = reportTable.querySelectorAll('.row');
const titleCells = rows[0].querySelectorAll('.cell.title'); // Title cells for each KRA and Plus Factor
const scoreCells = rows[2].querySelectorAll('.cell.score'); // Score cells for each KRA and Plus Factor

// Individual KRA and Plus Factor Scores
const plusFactorScore = document.getElementById('plusFactorScore');
const kra4Score = document.getElementById('kra4Score');
const kra3Score = document.getElementById('kra3Score');
const kra2Score = document.getElementById('kra2Score');
const kra1Score = document.getElementById('kra1Score');
const totalScore = document.getElementById('totalScore');


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