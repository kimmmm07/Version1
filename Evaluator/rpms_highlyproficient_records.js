// Main Content
const main = document.getElementById("main");

// Page Title
const pageTitle = document.getElementById("page-title");

// Tabs
const tabs = document.getElementById("tabs");
const cotTab = document.getElementById("cot-tab");
const ipcrfTab = document.getElementById("ipcrf-tab");
const rpmsTab = document.getElementById("rpms-tab");

// Filters
const filters = document.getElementById("filters");
const schoolYearSelect = document.getElementById("school-year-select");
const selectSchoolYear = document.getElementById("select-school-year");
const sy20232024 = document.getElementById("sy-2023-2024");
const sy20222023 = document.getElementById("sy-2022-2023");
const sy20212022 = document.getElementById("sy-2021-2022");

const teacherTypeSelect = document.getElementById("teacher-type-select");
const selectTeacherType = document.getElementById("select-teacher-type");
const proficientTeacher = document.getElementById("proficient-teacher");
const highlyProficientTeacher = document.getElementById("highlyproficient-teacher");

// Teacher Records Table
const teacherRecordsTable = document.getElementById("teacher-records-table");
const tableBody = document.getElementById("table-body");

// Teacher Row
const teacherRow = document.getElementById("teacher-row");
const teacherName = document.getElementById("teacher-name");
const teacherPosition = document.getElementById("teacher-position");
const teacherGradeLevel = document.getElementById("teacher-grade-level");
const teacherRater = document.getElementById("teacher-rater");
const viewAction = document.getElementById("view-action");
const viewLink = document.getElementById("view-link");

// User Icon
const userIcon = document.getElementById("user-icon");


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