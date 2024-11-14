// Main Content
const mainContent = document.getElementById("main-content");

// Records Heading
const recordsHeading = document.getElementById("records-heading");

// Tabs
const tabs = document.getElementById("tabs");
const cotTab = document.getElementById("cot-tab");
const ipcrfTab = document.getElementById("ipcrf-tab");
const rpmsTab = document.getElementById("rpms-tab");
const viewSummaryTab = document.getElementById("view-summary-tab");

// Records Section
const recordsSection = document.getElementById("records-section");

// KRA 1
const kra1Heading = document.getElementById("kra-1-heading");
const kra1List = document.getElementById("kra-1-list");
const kra1Item1 = document.getElementById("kra-1-item-1");
const kra1Pdf1 = document.getElementById("kra-1-pdf-1");
const kra1Item2 = document.getElementById("kra-1-item-2");
const kra1Pdf2 = document.getElementById("kra-1-pdf-2");
const kra1Item3 = document.getElementById("kra-1-item-3");
const kra1Pdf3 = document.getElementById("kra-1-pdf-3");

// KRA 2
const kra2Heading = document.getElementById("kra-2-heading");
const kra2List = document.getElementById("kra-2-list");
const kra2Item1 = document.getElementById("kra-2-item-1");
const kra2Pdf1 = document.getElementById("kra-2-pdf-1");
const kra2Item2 = document.getElementById("kra-2-item-2");
const kra2Pdf2 = document.getElementById("kra-2-pdf-2");
const kra2Item3 = document.getElementById("kra-2-item-3");
const kra2Pdf3 = document.getElementById("kra-2-pdf-3");

// KRA 3
const kra3Heading = document.getElementById("kra-3-heading");
const kra3List = document.getElementById("kra-3-list");
const kra3Item1 = document.getElementById("kra-3-item-1");
const kra3Pdf1 = document.getElementById("kra-3-pdf-1");
const kra3Item2 = document.getElementById("kra-3-item-2");
const kra3Pdf2 = document.getElementById("kra-3-pdf-2");
const kra3Item3 = document.getElementById("kra-3-item-3");
const kra3Pdf3 = document.getElementById("kra-3-pdf-3");

// KRA 4
const kra4Heading = document.getElementById("kra-4-heading");
const kra4List = document.getElementById("kra-4-list");
const kra4Item1 = document.getElementById("kra-4-item-1");
const kra4Pdf1 = document.getElementById("kra-4-pdf-1");
const kra4Item2 = document.getElementById("kra-4-item-2");
const kra4Pdf2 = document.getElementById("kra-4-pdf-2");
const kra4Item3 = document.getElementById("kra-4-item-3");
const kra4Pdf3 = document.getElementById("kra-4-pdf-3");

// Plus Factor
const plusFactorHeading = document.getElementById("plus-factor-heading");
const plusFactorList = document.getElementById("plus-factor-list");
const plusFactorItem1 = document.getElementById("plus-factor-item-1");
const plusFactorPdf1 = document.getElementById("plus-factor-pdf-1");
const plusFactorItem2 = document.getElementById("plus-factor-item-2");
const plusFactorPdf2 = document.getElementById("plus-factor-pdf-2");



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