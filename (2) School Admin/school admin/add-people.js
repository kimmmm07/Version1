const formData = new FormData();
formData.append('role', 'Teacher');
formData.append('school_id', '12345');
formData.append('employee_id', '12345');
formData.append('first_name', 'John');
formData.append('middle_name', 'Rezo');
formData.append('last_name', 'Doe');
formData.append('email_address', 'johndoe@me.com');
formData.append('position', 'Teacher I');
formData.append('job_started', 'AUGUST 20, 2021');
formData.append('grade_level', 'Junior High School');
formData.append('department', 'Science');
formData.append('password', 'password123');
formData.append('confirm_password', 'password123');

const response = await fetch('https://bnahs.pythonanywhere.com/api/school/register/people/',
    {
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }, 
        body: formData, 
        credentials: 'include', 
    }
);


const data = await response.json();
if (response.ok) {
    console.log("Success Data : ",data);
} else {
    console.log("Error Data : ",data);
}