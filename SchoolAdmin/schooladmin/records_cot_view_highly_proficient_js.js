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
            
            window.location.href = '../../get-started.html'; 
        } else {
            
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




const indicator1Row = document.getElementById('indicator1Row');
const indicator2Row = document.getElementById('indicator2Row'); 
const indicator3Row = document.getElementById('indicator3Row');
const indicator4Row = document.getElementById('indicator4Row');
const indicator5Row = document.getElementById('indicator5Row');
const indicator6Row = document.getElementById('indicator6Row');
const indicator7Row = document.getElementById('indicator7Row');
const indicator8Row = document.getElementById('indicator8Row');






async function checkRow(idrow , comparisonValue) {
    var row = document.getElementById(idrow);

    let selectedData;
    if (comparisonValue == 4){
        selectedData = row.cells[1];
    } else if (comparisonValue == 5){
        selectedData = row.cells[2];
    } else if (comparisonValue == 6){
        selectedData = row.cells[3];
    } else if (comparisonValue == 7){
        selectedData = row.cells[4];
    } else if (comparisonValue == 8){
        selectedData = row.cells[5];
    } else {
        selectedData = row.cells[6];
    }
    
    // Add class name correctly
    selectedData.classList.add("checked");
    
    // Access specific cells
    // var firstCell = row.cells[0]; // First cell
    // var secondCell = row.cells[1]; // Second cell

    // // Manipulate cell data
    // // Logs the content of the first cell
    // secondCell.innerHTML = "Updated content for second cell"; // Updates the content of the second cell

    // Log the updated row content
    // 
    
}



let cot = undefined;
let teacher = undefined;
let cot_content = undefined;

async function getCot() {
    try {
        
        const teacher_id = sessionStorage.getItem('teacher_id');
        const quarter = sessionStorage.getItem('quarter');
        const cot_id = sessionStorage.getItem('cot_id');

        const formData = new FormData();
        formData.append('teacher_id', teacher_id);
        formData.append('quarter', quarter);
        formData.append('cot_id', cot_id);

        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/forms/cot/get/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,

        });

        const data = await response.json();
        if (response.ok) {
            
            cot = data.cot;
            teacher = data.teacher;
            cot_content = data.cot.content;
            rater = data.rater

            

            for (var i = 0; i < 8; i++) {
                let res = i + 1;
                if (cot_content['Questions'][res]['Selected'] == 4){
                    checkRow('indicator'+(res)+'Row', 4);
                } else if (cot_content['Questions'][res]['Selected'] == 5){
                    checkRow('indicator'+(res)+'Row', 5);
                } else if (cot_content['Questions'][res]['Selected'] == 6){
                    checkRow('indicator'+(res)+'Row', 6);
                } else if (cot_content['Questions'][res]['Selected'] == 7){
                    checkRow('indicator'+(res)+'Row', 7);
                } else if (cot_content['Questions'][res]['Selected'] == 8){
                    checkRow('indicator'+(res)+'Row', 8);
                } else {
                    checkRow('indicator'+(res)+'Row', 0);
                }
            }


            observerName.textContent = rater ? rater.fullname : "Not Observed Yet" ;
            observationDate.textContent = cot.check_date ? new Date(cot.check_date).toLocaleDateString() : "Not Rated Yet";
            teacherObserved.textContent = teacher.fullname;
            observationQuarter.textContent = cot_content['Quarter'];
            subjectGradeLevel.textContent = teacher.grade_level;
            schoolYear.textContent = cot.school_year;
            additionalComments.value = cot_content["Comments"];
            teacherSignature2.value = teacher?.fullname ? teacher.fullname : "Not Rated Yet";
            observerSignature2.value = rater?.fullname ? rater?.fullname : "Not Rated Yet";








            
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

getCot();






