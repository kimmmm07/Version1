// Container and Title
const rpmsContainer = document.getElementById("rpmsContainer");
const rpmsTitle = document.getElementById("rpmsTitle");

// Table and Rows
const teacherTable = document.getElementById("teacherTable");

// Teacher 1 Elements
const teacher1Row = document.getElementById("teacher1Row");
const teacher1Name = document.getElementById("teacher1Name");
const teacher1Position = document.getElementById("teacher1Position");
const teacher1GradeLevel = document.getElementById("teacher1GradeLevel");
const teacher1Rater = document.getElementById("teacher1Rater");
const teacher1Status = document.getElementById("teacher1Status");
const teacher1Action = document.getElementById("teacher1Action");

// Teacher 2 Elements
const teacher2Row = document.getElementById("teacher2Row");
const teacher2Name = document.getElementById("teacher2Name");
const teacher2Position = document.getElementById("teacher2Position");
const teacher2GradeLevel = document.getElementById("teacher2GradeLevel");
const teacher2Rater = document.getElementById("teacher2Rater");
const teacher2Status = document.getElementById("teacher2Status");
const teacher2Action = document.getElementById("teacher2Action");

// Example of updating teacher status
teacher1Status.textContent = "Approved";
teacher2Action.href = ""; 





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
