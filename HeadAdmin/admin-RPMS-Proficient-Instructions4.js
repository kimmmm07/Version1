
const logoutButton = document.getElementById('logout-nav');  // Logout button
const logoutModal = document.getElementById('logoutModal');
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Show modal when logout is clicked
logoutButton.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default logout behavior
    logoutModal.classList.remove('hidden');  // Show modal by removing 'hidden' class
});

// Hide modal when "No" is clicked
noButton.addEventListener('click', function() {
    logoutModal.classList.add('hidden');  // Hide modal by adding 'hidden' class
});

// Redirect when "Yes" is clicked
yesButton.addEventListener('click', function() {
    window.location.href = 'index.html';  // Replace with actual logout URL
});
 




function editContent() {
    const kraTitle = document.getElementById('kraTitle');
    const objectivesElem = document.querySelectorAll(".objective-item");

    // Toggle contentEditable attribute for KRA
    kraTitle.contentEditable = kraTitle.contentEditable === "false" ? "true" : "false";

    // Loop through each objective and toggle contentEditable for each h3 and MOV
    objectivesElem.forEach((item) => {
        const objectiveTitle = item.querySelector('h3');
        const movParagraph = item.querySelector('p');
        const ulItems = item.querySelectorAll('ul li');

        // Toggle contentEditable for objective title, MOV, and each li
        objectiveTitle.contentEditable = objectiveTitle.contentEditable === "false" ? "true" : "false";
        movParagraph.contentEditable = movParagraph.contentEditable === "false" ? "true" : "false";

        ulItems.forEach(li => {
            li.contentEditable = li.contentEditable === "false" ? "true" : "false";
        });
    });

    // Change button icon, color, and set saveContent onclick when in edit mode
    const editBtn = document.querySelector('.edit-btn i');
    const btnContainer = document.querySelector('.edit-btn');

    if (kraTitle.contentEditable === "true") {
        editBtn.classList.remove('fa-edit');
        editBtn.classList.add('fa-save');
        btnContainer.style.color = '#0780ac'; // Blue for save button
        btnContainer.setAttribute("onclick", "saveContent()"); // Set save function
    } else {
        editBtn.classList.remove('fa-save');
        editBtn.classList.add('fa-edit');
        btnContainer.style.color = '#28a745'; // Green for edit button
    }
}

function saveContent() {
    const kraTitle = document.getElementById('kraTitle');
    const kraTitleText = kraTitle.innerText;

    const objectivesElem = document.querySelectorAll(".objective-item");

    objectivesElem.forEach((item) => {
        const objectiveTitle = item.querySelector('h3');
        const movParagraph = item.querySelector('p');

        // Save each li item
        const liItems = item.querySelectorAll('ul li');
        const savedLiItems = Array.from(liItems).map(li => li.innerText);

        // Update only the editable content (objective title and list items)
        objectiveTitle.innerText = objectiveTitle.innerText; // No need to reassign, just for clarity
        const ulElement = item.querySelector('ul');
        ulElement.innerHTML = savedLiItems.map(li => `<li>${li}</li>`).join("");

        // After saving, ensure contentEditable is turned off
        objectiveTitle.contentEditable = "false";
        movParagraph.contentEditable = "false";
        liItems.forEach(li => {
            li.contentEditable = "false";
        });
    });

    // Disable editing for KRA title
    kraTitle.contentEditable = "false";

    // Change button back to edit mode
    const editBtn = document.querySelector('.edit-btn i');
    const btnContainer = document.querySelector('.edit-btn');

    editBtn.classList.remove('fa-save');
    editBtn.classList.add('fa-edit');
    btnContainer.style.color = '#28a745'; // Green for edit button
    btnContainer.setAttribute("onclick", "editContent()"); // Reset to edit
}
