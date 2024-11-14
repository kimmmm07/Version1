// document.addEventListener("DOMContentLoaded", function () {
//     const schoolYearDropdown = document.querySelector('select[name="school-year"]');
//     const teacherTypeDropdown = document.querySelector('select[name="teacher-type"]');

//     // Load the selected values from localStorage if they exist
//     const savedSchoolYear = localStorage.getItem('selectedSchoolYear');
//     const savedTeacherType = localStorage.getItem('selectedTeacherType');

//     if (savedSchoolYear) {
//         schoolYearDropdown.value = savedSchoolYear;
//     }

//     if (savedTeacherType) {
//         teacherTypeDropdown.value = savedTeacherType;
//     }

//     // Handle school year selection
//     schoolYearDropdown.addEventListener("change", function () {
//         console.log("Selected School Year:", schoolYearDropdown.value);
//         // Save the selected value to localStorage
//         localStorage.setItem('selectedSchoolYear', schoolYearDropdown.value);
//     });

//     // Handle teacher type selection and redirect to the selected page
//     teacherTypeDropdown.addEventListener("change", function () {
//         const selectedValue = teacherTypeDropdown.value;
//         if (selectedValue) {
//             // Save the selected value to localStorage
//             localStorage.setItem('selectedTeacherType', selectedValue);
//             // Redirect to the selected page based on the value
//             window.location.href = selectedValue;
//         }
//     });
// });

// Main Content and Title
const mainContent = document.getElementById('mainContent');
const title = document.getElementById('title');

// Tabs
const tabs = document.getElementById('tabs');
const cotTab = document.getElementById('cotTab');
const ipcrfTab = document.getElementById('ipcrfTab');
const rpmsTab = document.getElementById('rpmsTab');

// Filters
const filters = document.getElementById('filters');
const schoolYearSelect = document.getElementById('schoolYearSelect');
const teacherTypeSelect = document.getElementById('teacherTypeSelect');
const selectQuarter = document.getElementById('selectQuarter');

// Records Table
const recordsTable = document.getElementById('recordsTable');

// First Row in Records Table
const recordRow1 = document.getElementById('recordRow1');
const teacherName1 = document.getElementById('teacherName1');
const userIcon1 = document.getElementById('userIcon1');
const position1 = document.getElementById('position1');
const gradeLevel1 = document.getElementById('gradeLevel1');
const rater1 = document.getElementById('rater1');
const viewLink1 = document.getElementById('viewLink1');



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