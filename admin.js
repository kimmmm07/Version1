const loginForm = document.querySelector('form');
window.addEventListener('load', async function() { 
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const employeeId = document.querySelector('input[name="employeeid').value;
        const password = document.querySelector('input[name="password"]').value;
    
        console.log('Employee ID:', employeeId);
        console.log('Password:', password);
    
        const formData = new FormData();
        formData.append('employee_id', employeeId); 
        formData.append('password', password); 
    
        try {
            const response = await fetch('https://bnahs.pythonanywhere.com/api/login_admin/', {
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
                window.location.href = '(1) Admin/admin-dashboard-home.html'; 
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



// const response = await fetch('https://bnahs.pythonanywhere.com/api/create/admin/',
//     {
//         method: 'GET',
//         credentials: 'include'
//     }
// );

// const data = await response.json();
// if (response.ok) {
//     console.log("Success Data : ",data);
// } else {
//     console.log("Error Data : ",data);
// }

// const formData = new FormData();
// formData.append('school_id', '12345');


