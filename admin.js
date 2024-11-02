const loginForm = document.querySelector('form');
window.addEventListener('load', async function() { 
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const employeeId = document.querySelector('input[name="employeeid').value;
        const password = document.querySelector('input[name="password"]').value;

        const formData = new FormData();
        formData.append('employee_id', employeeId); 
        formData.append('password', password); 
    
        try {
            const response = await fetch('https://bnahs.pythonanywhere.com/api/login_admin/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                credentials: 'include',
                body: formData,
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log("Success Data : ", data); 
                window.location.href = 'HeadAdmin/admin-dashboard-home.html'; 
            } else {
                console.log("Error Data : ", data);
                alert("Login Failed.")
            }
        } catch (error) {
            console.error("Error during fetch:", error);
        }
    });
});


