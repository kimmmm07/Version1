




window.addEventListener('load', async function () {
   // Fetch school data
    const response = await fetch('https://bnahs.pythonanywhere.com/api/school/people/get/by_status/', {
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
        data.accepted.forEach(school => { 
                const row = document.createElement('div');
                row.classList.add('school-row');
                row.innerHTML = `
                    <div class="school-column">${school.fullname}</div>
                    <div class="school-column school">${school.position}</div>
                    <div class="school-column">${school.grade_level}</div>
                    <div class="school-column">${school.employee_id}</div>
                    <div class="school-column status">Accepted</div>
                `;
                schoolRowWrapper.appendChild(row); 
        });
    } else {
        window.location.href = '../../get-started.html'; 
        console.log("Error Data:", data);
    }
 
});