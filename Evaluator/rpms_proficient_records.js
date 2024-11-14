// Main Content Elements
const mainContent = document.getElementById("main-content");
const recordsHeading = document.getElementById("records-heading");

// Tabs
const tabs = document.getElementById("tabs");
const cotTab = document.getElementById("cot-tab");
const ipcrfTab = document.getElementById("ipcrf-tab");
const rpmsTab = document.getElementById("rpms-tab");

// Filters
const filters = document.getElementById("filters");
const schoolYearSelect = document.getElementById("school-year-select");
const teacherTypeSelect = document.getElementById("teacher-type-select");

// Table and Records
const recordsTable = document.getElementById("records-table");
const recordsBody = document.getElementById("records-body");

// Teacher Record
const teacherRecord1 = document.getElementById("teacher-record-1");
const teacherName = document.getElementById("teacher-name");
const teacherPosition = document.getElementById("teacher-position");
const teacherGradeLevel = document.getElementById("teacher-grade-level");
const teacherRater = document.getElementById("teacher-rater");
const teacherAction = document.getElementById("teacher-action");
const viewRecordLink = document.getElementById("view-record-link");

// School Year Options
const sy2023_2024 = document.getElementById("sy2023-2024");
const sy2022_2023 = document.getElementById("sy2022-2023");
const sy2021_2022 = document.getElementById("sy2021_2022");

// Teacher Type Options
const proficientTeacher = document.getElementById("proficient-teacher");
const highlyProficientTeacher = document.getElementById("highly-proficient-teacher");




document.addEventListener("DOMContentLoaded", function () {
    const schoolYearDropdown = document.querySelector('select[name="school-year"]');
    const teacherTypeDropdown = document.querySelector('select[name="teacher-type"]');

    // Load the selected values from localStorage if they exist
    const savedSchoolYear = localStorage.getItem('selectedSchoolYear');
    const savedTeacherType = localStorage.getItem('selectedTeacherType');

    if (savedSchoolYear) {
        schoolYearDropdown.value = savedSchoolYear;
    }

    if (savedTeacherType) {
        teacherTypeDropdown.value = savedTeacherType;
    }

    // Handle school year selection
    schoolYearDropdown.addEventListener("change", function () {
        console.log("Selected School Year:", schoolYearDropdown.value);
        // Save the selected value to localStorage
        localStorage.setItem('selectedSchoolYear', schoolYearDropdown.value);
    });

    // Handle teacher type selection and redirect to the selected page
    teacherTypeDropdown.addEventListener("change", function () {
        const selectedValue = teacherTypeDropdown.value;
        if (selectedValue) {
            // Save the selected value to localStorage
            localStorage.setItem('selectedTeacherType', selectedValue);
            // Redirect to the selected page based on the value
            window.location.href = selectedValue;
        }
    });
});


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