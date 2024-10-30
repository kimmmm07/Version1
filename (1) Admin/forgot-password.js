function showModal() {
    document.getElementById("emailModal").style.display = "flex";
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
