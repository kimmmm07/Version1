// Main Container
const rpmsContainer2 = document.getElementById("rpmsContainer2");

// Action Buttons
const downloadPdfButton2 = document.getElementById("downloadPdf");
const printFormButton2 = document.getElementById("printForm");

// Title and Section Headers
const formTitle2 = document.getElementById("formTitle2");
const teacherLevel2 = document.getElementById("teacherLevel2");
const ratingSheetTitle2 = document.getElementById("ratingSheetTitle2");

// Info Section Elements
const observerName2 = document.getElementById("observerName2");
const observationDate2 = document.getElementById("observationDate2");
const teacherObserved2 = document.getElementById("teacherObserved2");
const observationQuarter2 = document.getElementById("observationQuarter2");
const subjectGradeLevel2 = document.getElementById("subjectGradeLevel2");
const schoolYear2 = document.getElementById("schoolYear2");

// Observation Section Checkboxes
const observation1 = document.getElementById("observation1");
const observation2 = document.getElementById("observation2");
const observation3 = document.getElementById("observation3");
const observation4 = document.getElementById("observation4");

// Rating Table
const ratingTable2 = document.getElementById("ratingTable2");

// Example: Accessing specific ratings
const indicator1Rating3 = document.getElementById("indicator1Rating3");
const indicator2Rating7 = document.getElementById("indicator2Rating7");
const indicator3Rating7 = document.getElementById("indicator3Rating7");
const indicator4Rating7 = document.getElementById("indicator4Rating7");
const indicator5Rating7 = document.getElementById("indicator5Rating7");
const indicator6Rating7 = document.getElementById("indicator6Rating7");
const indicator7Rating5 = document.getElementById("indicator7Rating5");

// Comments Section
const comments2 = document.getElementById("comments2");

// Signatures Section
const teacherSignature2 = document.getElementById("teacherSignature2");
const observerSignature2 = document.getElementById("observerSignature2");

// Back Button
const backButton2 = document.getElementById("backButton2");




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
