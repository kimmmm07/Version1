// Main Container
const rpmsContainer = document.getElementById("rpmsContainer");

// Action Buttons
const downloadPdfButton = document.getElementById("downloadPdf");
const printFormButton = document.getElementById("printForm");

// Title and Section Headers
const formTitle = document.getElementById("formTitle");
const teacherLevel = document.getElementById("teacherLevel");
const ratingSheetTitle = document.getElementById("ratingSheetTitle");

// Info Section Elements
const observerName = document.getElementById("observerName");
const observationDate = document.getElementById("observationDate");
const teacherObserved = document.getElementById("teacherObserved");
const observationQuarter = document.getElementById("observationQuarter");
const subjectGradeLevel = document.getElementById("subjectGradeLevel");
const schoolYear = document.getElementById("schoolYear");

// Observation Section Checkboxes
const observation1 = document.getElementById("observation1");
const observation2 = document.getElementById("observation2");
const observation3 = document.getElementById("observation3");
const observation4 = document.getElementById("observation4");

// Rating Table
const ratingTable = document.getElementById("ratingTable");

// Example: Accessing specific ratings
const indicator1Rating7 = document.getElementById("indicator1Rating7");
const indicator2Rating8 = document.getElementById("indicator2Rating8");
const indicator3Rating7 = document.getElementById("indicator3Rating7");
const indicator4Rating8 = document.getElementById("indicator4Rating8");
const indicator5Rating8 = document.getElementById("indicator5Rating8");
const indicator6Rating8 = document.getElementById("indicator6Rating8");
const indicator7Rating8 = document.getElementById("indicator7Rating8");
const indicator8Rating8 = document.getElementById("indicator8Rating8");

// Comments Section
const additionalComments = document.getElementById("additionalComments");

// Signatures Section
const observerSignature = document.getElementById("observerSignature");
const teacherSignature = document.getElementById("teacherSignature");

// Back Button
const backButton = document.getElementById("backButton");






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

// Function to download the form as a PDF
document.getElementById('downloadPdf').addEventListener('click', function () {
    const formContent = document.querySelector('.container');

    // Use html2canvas to convert the HTML to canvas
    html2canvas(formContent).then(function (canvas) {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        
        // Add image to PDF
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adjust dimensions as needed
        
        // Save the generated PDF
        pdf.save('Teacher_Rating_Sheet.pdf');
    });
});


// Function to print the form
document.getElementById('printForm').addEventListener('click', function () {
    window.print();
});
