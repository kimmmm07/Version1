function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.getElementById('profileImage');
        img.src = e.target.result; // Set the image source to the uploaded file
    };
    reader.readAsDataURL(file);
}

window.addEventListener('load', async function () {
    const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/profile/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );
    
    const data = await response.json();
    if (response.ok) {
        console.log("Success Data : ",data);
        const evaluatorData = data.evaluator;

        // Populate the profile details
        document.getElementById('name').textContent = `${evaluatorData.first_name} ${evaluatorData.middle_name} ${evaluatorData.last_name}`;
        document.getElementById('position').textContent = evaluatorData.position;
        document.getElementById('email-address').textContent = evaluatorData.email_address;
        document.getElementById('email-address').href = `mailto:${evaluatorData.email_address}`;
        document.getElementById('contact-no').textContent = evaluatorData.contact_number || "No contact number";    

        // Populate the information section
        document.getElementById('emp-id').textContent = evaluatorData.employee_id;
        document.getElementById('dept').textContent = evaluatorData.department;
        document.getElementById('job-started').textContent = new Date(evaluatorData.job_started).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' });

    } else {
        console.log("Error Data : ",data);
    }
     

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