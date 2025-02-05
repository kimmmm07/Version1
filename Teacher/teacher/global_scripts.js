

async function logout(){
    // Implement your logout logic here
    // For example, you can use the fetch API to send a POST request to the logout endpoint
    // Example: fetch('/logout', { method: 'POST' });

    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/logout/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
            // body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            
        } else {
            
            // alert("Login Failed.")
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }

    
    // After successful logout, redirect the user to the login page
    window.location.href = 'http://127.0.0.1:5502/';
}

