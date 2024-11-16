

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
                     <div class="school-column status"></div>
                 `;
                 schoolRowWrapper.appendChild(row);
             }
         });
     } else {
         console.log("Error Data:", data);
     }
  
 });