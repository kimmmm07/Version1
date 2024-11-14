// Access individual teacher rows and elements using numeric ids
let teacher1 = document.getElementById("teacher-1");
let teacher2 = document.getElementById("teacher-2");

// Access specific data for teacher 1
let name1 = document.getElementById("name-1");
let position1 = document.getElementById("position-1");
let gradeLevel1 = document.getElementById("grade-level-1");
let rater1 = document.getElementById("rater-1");
let status1 = document.getElementById("status-1");
let action1 = document.getElementById("action-1");

// Access specific data for teacher 2
let name2 = document.getElementById("name-2");
let position2 = document.getElementById("position-2");
let gradeLevel2 = document.getElementById("grade-level-2");
let rater2 = document.getElementById("rater-2");
let status2 = document.getElementById("status-2");
let action2 = document.getElementById("action-2");

// Checking the status and dynamically updating the text
if (status1.classList.contains('pending')) {
    status1.innerText = 'In Progress';  // Update status dynamically
}

if (status2.innerText === 'Submitted') {
    action2.innerHTML = '<a href="rpms_highlyproficient_homepage.html" class="review" id="review-2">Review</a>';
}





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