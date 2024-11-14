// Main Content Elements
const mainContent = document.getElementById("main-content");
const recordsHeading = document.getElementById("records-heading");

// Tabs
const tabs = document.getElementById("tabs");
const cotTab = document.getElementById("cot-tab");
const ipcrfTab = document.getElementById("ipcrf-tab");
const rpmsTab = document.getElementById("rpms-tab");
const viewSummaryLink = document.getElementById("view-summary-link");

// Records Section
const recordsSection = document.getElementById("records-section");

// KRA 1: Content Knowledge and Pedagogy
const kra1Heading = document.getElementById("kra1-heading");
const kra1List = document.getElementById("kra1-list");
const kra1File1 = document.getElementById("kra1-file1");
const kra1File2 = document.getElementById("kra1-file2");
const kra1File3 = document.getElementById("kra1-file3");

// KRA 2: Learning Environment and Diversity
const kra2Heading = document.getElementById("kra2-heading");
const kra2List = document.getElementById("kra2-list");
const kra2File1 = document.getElementById("kra2-file1");
const kra2File2 = document.getElementById("kra2-file2");
const kra2File3 = document.getElementById("kra2-file3");

// KRA 3: Curriculum and Planning
const kra3Heading = document.getElementById("kra3-heading");
const kra3List = document.getElementById("kra3-list");
const kra3File1 = document.getElementById("kra3-file1");
const kra3File2 = document.getElementById("kra3-file2");
const kra3File3 = document.getElementById("kra3-file3");

// KRA 4: Curriculum and Planning & Assessment
const kra4Heading = document.getElementById("kra4-heading");
const kra4List = document.getElementById("kra4-list");
const kra4File1 = document.getElementById("kra4-file1");
const kra4File2 = document.getElementById("kra4-file2");
const kra4File3 = document.getElementById("kra4-file3");

// PLUS FACTOR
const plusFactorHeading = document.getElementById("plus-factor-heading");
const plusFactorList = document.getElementById("plus-factor-list");
const plusFactorFile1 = document.getElementById("plus-factor-file1");
const plusFactorFile2 = document.getElementById("plus-factor-file2");




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