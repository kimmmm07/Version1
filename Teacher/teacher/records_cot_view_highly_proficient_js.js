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
const observerName2 = document.getElementById("observerName");
const observationDate2 = document.getElementById("observationDate");
const teacherObserved2 = document.getElementById("teacherObserved");
const observationQuarter2 = document.getElementById("observationQuarter");
const subjectGradeLevel2 = document.getElementById("subjectGradeLevel");
const schoolYear2 = document.getElementById("schoolYear");

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
const additionalComments = document.getElementById("comments2");

// Signatures Section
const teacherSignature2 = document.getElementById("teacherSignature2");
const observerSignature2 = document.getElementById("observerSignature2");

// Back Button
const backButton2 = document.getElementById("backButton2");


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

        const formData = new FormData();
        formData.append('teacher_id', teacher_id);
        formData.append('quarter', quarter);

        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/cot/', {
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
            rater = data.rater;


            

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

            // Info Section Elements

            observerName2.textContent = data.rater ? data.rater.fullname : "Not Rated Yet";
            observationDate2.textContent = cot.check_date ? new Date(cot.check_date).toLocaleDateString() : "Not Rated Yet";
            teacherObserved2.textContent = teacher.fullname;
            observationQuarter2.textContent = cot_content['Quarter'];
            subjectGradeLevel2.textContent = teacher.grade_level;
            schoolYear2.textContent = cot.school_year;
            additionalComments.value = cot_content["Comments"];
            teacherSignature2.value = teacher?.fullname ? teacher.fullname : "Not Rated Yet";
            observerSignature2.value = rater?.fullname ? rater?.fullname : "Not Rated Yet";








            
        } else {
            window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

getCot();






