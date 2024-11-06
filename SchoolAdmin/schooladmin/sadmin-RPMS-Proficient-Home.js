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
yesButton.addEventListener('click', async function() {
    try {
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/logout/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data); 
            window.location.href = '../../get-started.html'; 
        } else {
            console.log("Error Data : ", data);
        }

        
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});



// Function to open modal
function openModal() {
    document.getElementById('formModal').style.display = 'flex';
}

// Function to close modal
function closeModal() {
    document.getElementById('formModal').style.display = 'none';
    form1.value = ''; // Reset input fields
    form2.selectedIndex = 0; // Reset dropdown
}

// Hide modal initially when forms are displayed
document.addEventListener("DOMContentLoaded", closeModal);

// Attach event listener to the Create Folder button
document.getElementById('createFolderBtn').addEventListener('click', openModal);

// JavaScript for handling folder creation

// Get elements
const createFolderBtn = document.getElementById('createFolderBtn');
const formModal = document.getElementById('formModal');
const form1 = document.getElementById('form1'); // Folder Name input
const form2 = document.getElementById('form2'); // School Year dropdown
const cardsSection = document.querySelector('.cards-section');
const createBtn = document.querySelector('.create');
const closeModalBtn = document.querySelector('.modal-close-btn');

// List of appealing color pairs (background + white text)
const colorPairs = [
    { background: "#3498DB", text: "#FFFFFF" },
    { background: "#2ECC71", text: "#FFFFFF" },
    { background: "#E74C3C", text: "#FFFFFF" },
    { background: "#9B59B6", text: "#FFFFFF" },
    { background: "#F39C12", text: "#FFFFFF" },
    { background: "#1ABC9C", text: "#FFFFFF" },
    { background: "#34495E", text: "#FFFFFF" },
    { background: "#E67E22", text: "#FFFFFF" },
    { background: "#16A085", text: "#FFFFFF" }, 
    { background: "#8E44AD", text: "#FFFFFF" },
    { background: "#2980B9", text: "#FFFFFF" },
    { background: "#D35400", text: "#FFFFFF" },
    { background: "#C0392B", text: "#FFFFFF" },
    { background: "#27AE60", text: "#FFFFFF" },
    { background: "#2C3E50", text: "#FFFFFF" },
    { background: "#F1C40F", text: "#FFFFFF" },
    { background: "#1F618D", text: "#FFFFFF" },
    { background: "#D98880", text: "#FFFFFF" },
    { background: "#AF7AC5", text: "#FFFFFF" },
    { background: "#1D8348", text: "#FFFFFF" },
    { background: "#D4AC0D", text: "#FFFFFF" },
    { background: "#C0392B", text: "#FFFFFF" },
    { background: "#117A65", text: "#FFFFFF" },
    { background: "#7D3C98", text: "#FFFFFF" },
    { background: "#148F77", text: "#FFFFFF" },
    { background: "#2471A3", text: "#FFFFFF" },
    { background: "#D68910", text: "#FFFFFF" },
    { background: "#6C3483", text: "#FFFFFF" },
    { background: "#BA4A00", text: "#FFFFFF" },
    { background: "#1A5276", text: "#FFFFFF" }
];

// Initialize an array to keep track of used color indices
const usedColorIndices = [];

// Function to lighten a color
function lightenColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min((num >> 16) + amt, 255);
    const G = Math.min((num >> 8 & 0x00FF) + amt, 255);
    const B = Math.min((num & 0x0000FF) + amt, 255);
    return `#${(0x1000000 + (R * 0x10000 + G * 0x100 + B)).toString(16).slice(1)}`;
}

// Function to darken a color
function darkenColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max((num >> 16) - amt, 0);
    const G = Math.max((num >> 8 & 0x00FF) - amt, 0);
    const B = Math.max((num & 0x0000FF) - amt, 0);
    return `#${(0x1000000 + (R * 0x10000 + G * 0x100 + B)).toString(16).slice(1)}`;
}

// Function to assign a random color pair
function assignRandomColor(folderElement) {
    // Check if all colors have been used
    if (usedColorIndices.length === colorPairs.length) {
        alert("All color pairs have been used. Resetting.");
        usedColorIndices.length = 0; // Clear the array to reuse colors
    }

    let randomIndex;

    // Select a random index that hasn't been used yet
    do {
        randomIndex = Math.floor(Math.random() * colorPairs.length);
    } while (usedColorIndices.includes(randomIndex));

    // Store the used index
    usedColorIndices.push(randomIndex);
    const selectedPair = colorPairs[randomIndex];

    // Apply the selected background and text colors
    folderElement.style.backgroundColor = selectedPair.background;
    folderElement.style.color = selectedPair.text;

    // Set the SY icon background to a darker color and text to a lighter color
    const syIcon = folderElement.querySelector('.sy-icon');
    if (syIcon) {
        syIcon.style.backgroundColor = darkenColor(selectedPair.background, 10); // Darken by 10%
        syIcon.style.color = lightenColor(selectedPair.background, 50); // Lighten by 50%
    }
}

// Handle folder creation
createBtn.addEventListener('click', () => {
    const folderName = form1.value.trim();
    const schoolYear = form2.value;

    // Ensure folder name and school year are filled
    if (folderName && schoolYear) {
        // Check if a folder for the selected school year already exists
        const existingFolder = Array.from(cardsSection.querySelectorAll('.card-link')).find(card => {
            return card.querySelector('.subheader').textContent === schoolYear;
        });

        if (existingFolder) {
            alert('A folder for this school year already exists. Please select a different year.');
            return; // Exit if a folder for the school year already exists
        }

        // Create new folder card
        const newCard = document.createElement('a');
        newCard.href = "admin-RPMS-Proficient-Landing.html"; // Redirect to this page when clicked
        newCard.classList.add('card-link');

        newCard.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <div class="header-content">
                        ${folderName}
                        <span class="subheader">${schoolYear}</span>
                    </div>
                    <button class="delete-btn" onclick="deleteFolder(this)">&#10006;</button>
                    <div class="header-icon sy-icon">SY</div>
                </div>
                <div class="card-body">
                    <p></p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div class="card-icon-bottom">
                        <img src="Assets\\Name.png" alt="User Icon">
                    </div>
                </div>
            </div>
        `;

        // Append the new folder card to the cards-section
        cardsSection.appendChild(newCard);

        // Assign random color to the new card
        const cardHeader = newCard.querySelector('.card-header');
        assignRandomColor(cardHeader);

        // Close the modal and reset the form fields
        closeModal();
    } else {
        alert('Please fill in both Folder Name and School Year.');
    }
});

// Function to delete a folder
function deleteFolder(button) {
    const card = button.closest('.card-link'); // Find the closest card-link element
    if (card) {
        card.remove(); // Remove the card-link element (and the card inside)
    }
}

// Close modal when "Cancel" is clicked
closeModalBtn.addEventListener('click', closeModal);

// Close modal if clicked outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === formModal) {
        closeModal();
    }
});


// Toggle the floating menu display
function toggleFloatingMenu() {
    const floatingMenu = document.getElementById('floating-menu');
    floatingMenu.style.display = (floatingMenu.style.display === 'block') ? 'none' : 'block';
}

// Close the floating menu
function closeMenu() {
    document.getElementById('floating-menu').style.display = 'none';
}
 