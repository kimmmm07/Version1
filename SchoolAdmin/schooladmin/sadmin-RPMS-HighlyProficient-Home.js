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

// Function to open duplicate year modal
function openDuplicateYearModal() {
    document.getElementById('duplicateYearModalContent').style.display = 'flex';
}

// Function to close duplicate year modal
function closeDuplicateYearModal() {
    document.getElementById('closeDuplicateYearBtn').style.display = 'none';
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



// // Modal for Duplicate Year
// document.addEventListener("DOMContentLoaded", function () {
//     const duplicateYearModal = document.getElementById('duplicateYearModal');
//     const formModal = document.getElementById('formModal');
//     const createFolderBtn = document.getElementById('createFolderBtn');
//     const closeDuplicateYearModalBtn = document.querySelector('#duplicateYearModal button');
//     const form1 = document.getElementById('form1'); // Folder Name input
//     const form2 = document.getElementById('form2'); // School Year dropdown
//     const cardsSection = document.querySelector('.cards-section');
//     const createBtn = document.querySelector('.create');
//     const closeModalBtn = document.querySelector('.modal-close-btn');

//     // Function to open duplicate year modal
//     function openDuplicateYearModal() {
//         duplicateYearModal.classList.remove('hidden');
//     }

//     // Function to close duplicate year modal
//     function closeDuplicateYearModal() {
//         duplicateYearModal.classList.add('hidden');
//     }

//     closeDuplicateYearModalBtn.addEventListener('click', closeDuplicateYearModal);

//     // Open modal function
//     function openModal() {
//         formModal.style.display = 'flex';
//     }

//     // Close modal function
//     function closeModal() {
//         formModal.style.display = 'none';
//         form1.value = ''; // Reset input fields
//         form2.selectedIndex = 0; // Reset dropdown
//     }

//     // Hide modal initially when forms are displayed
//     document.addEventListener("DOMContentLoaded", closeModal);

//     // Attach event listener to the Create Folder button
//     createFolderBtn.addEventListener('click', openModal);


// List of color pairs (background + white text)
const colorPairs = {
    "School Year 2023-2024": { background: "#3498DB", text: "#FFFFFF" },
    "School Year 2024-2025": { background: "#2ECC71", text: "#FFFFFF" },
    "School Year 2025-2026": { background: "#E74C3C", text: "#FFFFFF" },
    "School Year 2026-2027": { background: "#9B59B6", text: "#FFFFFF" },
    "School Year 2027-2028": { background: "#F39C12", text: "#FFFFFF" },
    "School Year 2028-2029": { background: "#1ABC9C", text: "#FFFFFF" },
    "School Year 2029-2030": { background: "#34495E", text: "#FFFFFF" },
    "School Year 2030-2031": { background: "#E67E22", text: "#FFFFFF" },
    "School Year 2031-2032": { background: "#16A085", text: "#FFFFFF" },
    "School Year 2032-2033": { background: "#8E44AD", text: "#FFFFFF" },
    "School Year 2033-2034": { background: "#2980B9", text: "#FFFFFF" },
    "School Year 2034-2035": { background: "#D35400", text: "#FFFFFF" },
    "School Year 2035-2036": { background: "#C0392B", text: "#FFFFFF" },
    "School Year 2036-2037": { background: "#27AE60", text: "#FFFFFF" }
};
    // { background: "#2C3E50", text: "#FFFFFF" },
    // { background: "#F1C40F", text: "#FFFFFF" },
    // { background: "#1F618D", text: "#FFFFFF" },
    // { background: "#D98880", text: "#FFFFFF" },
    // { background: "#AF7AC5", text: "#FFFFFF" },
    // { background: "#1D8348", text: "#FFFFFF" },
    // { background: "#D4AC0D", text: "#FFFFFF" },
    // { background: "#C0392B", text: "#FFFFFF" },
    // { background: "#117A65", text: "#FFFFFF" },
    // { background: "#7D3C98", text: "#FFFFFF" },
    // { background: "#148F77", text: "#FFFFFF" },
    // { background: "#2471A3", text: "#FFFFFF" },
    // { background: "#D68910", text: "#FFFFFF" },
    // { background: "#6C3483", text: "#FFFFFF" },
    // { background: "#BA4A00", text: "#FFFFFF" },
    // { background: "#1A5276", text: "#FFFFFF" }

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

// Function to assign fixed color based on school year
function assignFixedColor(folderElement, schoolYear) {
    const selectedPair = colorPairs[schoolYear];

    if (selectedPair) {
        folderElement.style.backgroundColor = selectedPair.background;
        folderElement.style.color = selectedPair.text;

        // Set the SY icon background to a darker color and text to a lighter color
        const syIcon = folderElement.querySelector('.sy-icon');
        if (syIcon) {
            syIcon.style.backgroundColor = darkenColor(selectedPair.background, 10);
            syIcon.style.color = lightenColor(selectedPair.background, 50);
        }
    }
}















 
function generateCard(folder) {
    // Create the anchor tag
    const anchor = document.createElement('a');
    anchor.onclick = function (event) {
        event.preventDefault();
        sessionStorage.setItem('rpms_folder_id', folder.rpms_folder_id); 
        window.location.href = 'sadmin-RPMS-Proficient-Landing.html';
    };
    anchor.className = "card-link";

    // Create the card div
    const card = document.createElement('div');
    card.className = "card";

    // Create the card header
    const cardHeader = document.createElement('div');
    cardHeader.className = "card-header";
    cardHeader.style.backgroundColor = folder.rpms_folder_background_color;

    // Create the header content div
    const headerContent = document.createElement('div');
    headerContent.className = "header-content";
    headerContent.textContent = folder.rpms_folder_name;

    // Create the school year span
    const schoolYear = document.createElement('span');
    schoolYear.className = "subheader";
    schoolYear.textContent = folder.rpms_folder_school_year;

    // Append the school year span to the header content
    headerContent.appendChild(schoolYear);

    // Create the header icon div
    const headerIcon = document.createElement('div');
    headerIcon.className = "header-icon";

    // Dynamically generate the SY icon
    const syIcon = document.createElement('div');
    syIcon.className = "sy-icon";
    syIcon.textContent = "SY"; // Always display "SY" as the text
    
    // Dynamically assign colors to the SY Icon
    const selectedPair = colorPairs[folder.rpms_folder_school_year];
    if (selectedPair) {
        syIcon.style.backgroundColor = darkenColor(selectedPair.background, 10);
        syIcon.style.color = "#FFFFFF";
        // syIcon.style.color = lightenColor(selectedPair.background, 50);
        syIcon.style.width = '60px';
        syIcon.style.height = '60px';
        syIcon.style.borderRadius = '50%';
        syIcon.style.display = 'flex';
        syIcon.style.alignItems = 'center';
        syIcon.style.justifyContent = 'center';
        syIcon.style.fontWeight = 'bold'; // Make "SY" bold
        syIcon.style.fontSize = '22px'; // Adjust font size for better visibility
    }

    // Append the SY icon to the header icon container
    headerIcon.appendChild(syIcon);

    // Append header content and header icon to card header
    cardHeader.appendChild(headerContent);
    cardHeader.appendChild(headerIcon);

    // Create the card body
    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    // Create the card body text paragraph
    const cardBodyText = document.createElement('p');

    // Create the list in the card body
    const cardBodyList = document.createElement('ul');

    // Create list items
    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement('li');
        cardBodyList.appendChild(listItem);
    }

    // Create the card icon bottom
    const cardIconBottom = document.createElement('div');
    cardIconBottom.className = "card-icon-bottom";

    // Create the user icon image
    const userIcon = document.createElement('img');
    userIcon.src = "assets/Name.png";
    userIcon.alt = "User Icon";

    // Append the user icon to the card icon bottom
    cardIconBottom.appendChild(userIcon);

    // Append card body text, list, and icon bottom to card body
    cardBody.appendChild(cardBodyText);
    cardBody.appendChild(cardBodyList);
    cardBody.appendChild(cardIconBottom);

    // Append card header and card body to card
    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    // Append card to anchor
    anchor.appendChild(card);

    // Append anchor to the cards section
    cardsSection.appendChild(anchor);
}



let folders = undefined;

// Fetch RPMS Folders
async function getRPMSFolder() {
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/forms/rpms/folders/highly_proficient', {
            method: 'GET',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
        });
        const folders = await response.json();
        if (response.ok) {
            console.log("Success Data: ", folders);
            folders.rpms_folders.forEach(folder => {
                generateCard(folder);
            });
        } else {
            window.location.href = '../../get-started.html'; 
            console.log("Error Data: ", folders);
        }
    } catch (error) {
        console.error(error);
    }
}

getRPMSFolder();





// Handle folder creation
// const createBtn = document.querySelector('.create');
// const form1 = document.getElementById('form1');
// const form2 = document.getElementById('form2');
// const cardsSection = document.querySelector('.cards-section');


// Handle folder creation
createBtn.addEventListener('click', async () => {
    const folderName = form1.value.trim();
    const schoolYear = form2.value;

    if (folderName && schoolYear) {
        // Check if a folder for the selected school year already exists
        const existingFolder = Array.from(cardsSection.querySelectorAll('.card-link')).find(card => {
            return card.querySelector('.subheader').textContent === schoolYear;
        });

        if (existingFolder) {
            openDuplicateYearModal(); // Show the modal if a duplicate school year is found
            return; // Exit if a folder for the school year already exists
        }

        try {
            const formData = new FormData();
            formData.append('folder_name', folderName);
            formData.append('school_year', schoolYear);
            formData.append('position_rpms', 'Highly Proficient');
            formData.append('background_color', colorPairs[schoolYear].background);
            formData.append('color', colorPairs[schoolYear].text);

            const response = await fetch('https://bnahs.pythonanywhere.com/api/school/forms/rpms/folders/create/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                credentials: 'include',
                body: formData,
            });
            const data = await response.json();

            if (response.ok) {
                console.log('Folder created successfully:', data);
            } else {
                console.error('Error creating folder:', data.error);
            }
        } catch (e) {
            console.error("Error creating folder:", e);
        }

        
        // Refresh the page
        window.location.href = window.location.href;

        // // Create new folder card
        // const newCard = document.createElement('a');
        // newCard.href = "sadmin-RPMS-HighlyProficient-Landing.html"; // Redirect to this page when clicked
        // newCard.classList.add('card-link');

        // newCard.innerHTML = `
        //     <div class="card">
        //         <div class="card-header">
        //             <div class="header-content">
        //                 ${folderName}
        //                 <span class="subheader">${schoolYear}</span>
        //             </div>
        //             <button class="delete-btn" onclick="deleteFolder(this)">&#10006;</button>
        //             <div class="header-icon sy-icon">SY</div>
        //         </div>
        //         <div class="card-body">
        //             <p></p>
        //             <ul>
        //                 <li></li>
        //                 <li></li>
        //                 <li></li>
        //                 <li></li>
        //             </ul>
        //             <div class="card-icon-bottom">
        //                 <img src="Assets\\Name.png" alt="User Icon">
        //             </div>
        //         </div>
        //     </div>
        // `;

        // // Append the new folder card to the cards-section
        // cardsSection.appendChild(newCard);

        // // Assign fixed color to the new card based on the selected school year
        // const cardHeader = newCard.querySelector('.card-header');
        // assignFixedColor(cardHeader, schoolYear);

        // // Close the modal and reset the form fields
        // closeModal();
    } else {
        alert('Please fill in both Folder Name and School Year.');
    }
});







// // Function to delete a folder
// function deleteFolder(button) {
//     const card = button.closest('.card-link'); // Find the closest card-link element
//     if (card) {
//         card.remove(); // Remove the card-link element (and the card inside)
//     }
// }

// // Close modal when "Cancel" is clicked
// closeModalBtn.addEventListener('click', closeModal);

// // Close modal if clicked outside the modal content
// window.addEventListener('click', (e) => {
//     if (e.target === formModal) {
//         closeModal();
//     }
// });





// Toggle the floating menu display
function toggleFloatingMenu() {
    const floatingMenu = document.getElementById('floating-menu');
    floatingMenu.style.display = (floatingMenu.style.display === 'block') ? 'none' : 'block';
}

// Close the floating menu
function closeMenu() {
    document.getElementById('floating-menu').style.display = 'none';
}
