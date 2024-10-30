function validateAndShowModal() {
    const emailInput = document.getElementById("email");
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validate if all fields are filled
    if (!emailInput.value || !password || !confirmPassword) {
        alert("Please fill in all required fields.");
        return false; // Prevent form submission
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    // Update the email link in the modal
    const emailLink = document.getElementById("emailLink");
    emailLink.href = `mailto:${emailInput.value}`;
    emailLink.textContent = emailInput.value;

    // Show modal if validation is successful
    document.getElementById("emailModal").style.display = "flex";
    return false; // Prevent form submission to stay on the same page
}

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
