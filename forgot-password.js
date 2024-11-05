function closeModal() {
    document.getElementById("emailModal").style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("emailModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (!form) {
          console.error("Form element not found.");
          return;
      }
    form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!emailInput || !password || !confirmPassword) {
        alert("Please fill in all required fields.");
        return false; 
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; 
    }
    const formData = new FormData();
    formData.append('email', String(emailInput));
    formData.append('new_password', String(password));
    formData.append('confirm_password', String(confirmPassword));

    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/forgot-password/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: formData,
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            const emailLink = document.getElementById("emailLink");
            emailLink.textContent = emailInput.value;

            document.getElementById("emailModal").style.display = "flex";
            return false; 
        } else {
            console.log("Error Data:", data);
            alert("Something went wrong.");
        }
    } catch (error) {
        console.error("Fetch error:", error);
        window.alert("Network error occurred.");
    }
    });
});
