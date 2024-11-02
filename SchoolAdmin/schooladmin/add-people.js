window.addEventListener('load', async function () {
    const response = await fetch('https://bnahs.pythonanywhere.com/api/school/profile/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );
    
    const data = await response.json();
    if (response.ok) {
        console.log("Success Data : ",data);
    } else {
        console.log("Error Data : ",data);
    }
    const school_id = String(data.school_id);

    document.querySelector('.register-btn').addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
    
        const formData = new FormData();
    
        // Format the date to "August 20, 2024"
        const jobStartedInput = document.getElementById('job-started').value;
        let formattedDate = '';
        if (jobStartedInput) {
            const date = new Date(jobStartedInput);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            formattedDate = date.toLocaleDateString('en-US', options);
        }
    
        // Manually append each form field to formData, casting each value to a string
        formData.append('employee_id', String(document.getElementById('employee-id').value));
        formData.append('school_id', String(school_id));
        formData.append('first_name', String(document.getElementById('first-name').value));
        formData.append('middle_name', String(document.getElementById('middle-name').value));
        formData.append('last_name', String(document.getElementById('last-name').value));
        formData.append('email_address', String(document.getElementById('email').value));
        formData.append('job_started', formattedDate);
        formData.append('position', String(document.getElementById('position').value));
        const position = String(document.getElementById('position').value);
        let role;

        if(position.includes('Head Teacher')){
            role = 'Evaluator';
        }
        else if (position.includes('Teacher') || position.includes('Master Teacher')) {
            role = 'Teacher';
        } else {
            role = 'Evaluator';
        }

        formData.append('grade_level', String(document.getElementById('grade-level').value));
        formData.append('role', role);
        formData.append('department', String(document.getElementById('department').value));
        formData.append('password', String(document.getElementById('password').value));
        formData.append('confirm_password', String(document.getElementById('confirm-password').value));
    
        if(String(document.getElementById('password').value) !== String(document.getElementById('confirm-password').value)){
            alert("Password doesn't match.");
            return
        }

        // Make the fetch request
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/register/people/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: formData,
            credentials: 'include',
        });
    
        const data = await response.json();
    
        if (response.ok) {
            console.log("Success Data: ", data);
            alert("Registration succeeded");
            window.location.href = 'faculty.html'; 
        } else {
            console.log("Error Data: ", data);
            alert("Registration failed");
        }
    });
});




