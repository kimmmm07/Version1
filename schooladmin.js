const loginForm = document.querySelector('form');

window.addEventListener('load', async function() {
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const employeeId = document.querySelector('input[name="employeeid').value;
        const password = document.querySelector('input[name="password"]').value; 
        const rememberMeCheckbox = document.querySelector('input[name="remember-me"]');
        const rememberMe = rememberMeCheckbox.checked ? true : false;
    
        console.log('Employee ID:', employeeId);
        console.log('Password:', password);
        console.log("Remember:", rememberMe);
    
        const formData = new FormData();
        formData.append('employee_id', employeeId); 
        formData.append('password', password);
        formData.append('remember_me', rememberMe);
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
    
        try {
            const response = await fetch('https://bnahs.pythonanywhere.com/api/login_school/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': getCookie('csrftoken') 
                },
                credentials: 'include',
                body: formData,
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log("Success Data : ", data); 
                window.location.href = 'SchoolAdmin/schooladmin/schooladmin_home.html'; 
            } else {
                console.log("Error Data : ", data);
                alert("Login Failed.")
            }
        } catch (error) {
            console.error("Error during fetch:", error);
        }
    });
    
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

});

