const logoutButton = document.getElementById('logout-nav');  // Logout button
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
yesButton.addEventListener('click', function() {
    window.location.href = 'index.html';  // Replace with actual logout URL
});

window.addEventListener('load', async function () {
    // Fetch school data
     const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/schools/', {
         method: 'GET',
         credentials: 'include'
     });
 
     const data = await response.json();
     if (response.ok) {
         console.log("Success Data:", data);
 
         const schoolRowWrapper = document.querySelector('.school-row-wrapper');
 
         // Remove existing rows except for the header
         document.querySelectorAll('.school-row:not(.header)').forEach(row => row.remove());
 
         // Loop through schools and create rows if they are accepted
         data.schools.forEach(school => {
             if (school.is_declined) {
                 const row = document.createElement('div');
                 row.classList.add('school-row');
                 row.innerHTML = `
                     <div class="school-column">${school.name}</div>
                     <div class="school-column school">${school.school_name}</div>
                     <div class="school-column">${school.school_address}</div>
                     <div class="school-column">${school.school_id}</div>
                     <div class="school-column status">Declined</div>
                 `;
                 schoolRowWrapper.appendChild(row);
             }
         });
     } else {
         console.log("Error Data:", data);
     }
  
 });