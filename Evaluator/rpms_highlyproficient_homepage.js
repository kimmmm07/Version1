
// Floating menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
    const floatingMenu = document.getElementById('floating-menu');
    floatingMenu.style.display = floatingMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    function closeMenu() {
    document.getElementById('floating-menu').style.display = 'none';
    }
    
    // Modal logic
    const logoutButton = document.getElementById('logoutLink');  // Logout button
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
    
    



// Cards Section
const cardsSection = document.querySelector('#cards-section');

// Card Link
const cardLink = document.querySelector('#card-link');

// Card Elements
const card = document.querySelector('#card');
const cardHeader = document.querySelector('#card-header');
const headerContent = document.querySelector('#header-content');
const subheader = document.querySelector('#subheader');
const headerIcon = document.querySelector('#header-icon');
const syIcon = document.querySelector('#sy-icon');

// Card Body
const cardBody = document.querySelector('#card-body');
const cardBodyText = document.querySelector('#card-body-text');
const cardBodyList = document.querySelector('#card-body-list');
const listItem1 = document.querySelector('#list-item-1');
const listItem2 = document.querySelector('#list-item-2');
const listItem3 = document.querySelector('#list-item-3');
const listItem4 = document.querySelector('#list-item-4');
const listItem5 = document.querySelector('#list-item-5');

// Card Icon Bottom
const cardIconBottom = document.querySelector('#card-icon-bottom');
const userIcon = document.querySelector('#user-icon');










function generateCard(folder) {
    // Create the anchor tag
    const anchor = document.createElement('a');
    // anchor.href = "rpms_proficient_stream.html";
    anchor.onclick = function(event) {
        event.preventDefault();
        sessionStorage.setItem('rpms_folder_id', folder.rpms_folder_id);
        window.location.href = 'rpms_proficient_stream.html';
    };
    anchor.className = "card-link";
    // anchor.id = "cardLink";

    // Create the card div
    const card = document.createElement('div');
    card.className = "card";
    // card.id = "card";

    // Create the card header
    const cardHeader = document.createElement('div');
    cardHeader.className = "card-header blue";
    cardHeader.style.backgroundColor = folder.rpms_folder_background_color;
    // cardHeader.id = "cardHeader";

    // Create the header content div
    const headerContent = document.createElement('div');
    headerContent.className = "header-content";
    // headerContent.id = "headerContent";
    headerContent.textContent = folder.rpms_folder_name;

    // Function to darken a color
    function darkenColor(hex, percent) {
        const num = parseInt(hex.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.max((num >> 16) - amt, 0);
        const G = Math.max((num >> 8 & 0x00FF) - amt, 0);
        const B = Math.max((num & 0x0000FF) - amt, 0);
        return `#${(0x1000000 + (R * 0x10000 + G * 0x100 + B)).toString(16).slice(1)}`;
    }

    // Create the school year span
    const schoolYear = document.createElement('span');
    schoolYear.className = "subheader";
    // schoolYear.id = "schoolYear";
    schoolYear.textContent = folder.rpms_folder_school_year;

    // Append the school year span to the header content
    headerContent.appendChild(schoolYear);

    // Create the header icon div
    const headerIcon = document.createElement('div');
    headerIcon.className = "header-icon";
    headerIcon.id = "headerIcon";


    // Generate a darker color for the SY icon
    const darkerColor = darkenColor(folder.rpms_folder_background_color, 20);


    // Create the dynamic School Year icon
    const schoolYearIcon = document.createElement('div');
    schoolYearIcon.className = "sy-icon";
    schoolYearIcon.style.backgroundColor = darkerColor;
    schoolYearIcon.textContent = "SY"; // Dynamic text or placeholder

    // Append the image to the header icon
    headerIcon.appendChild(schoolYearIcon);

    // Append header content and header icon to card header
    cardHeader.appendChild(headerContent);
    cardHeader.appendChild(headerIcon);

    // Create the card body
    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    // cardBody.id = "cardBody";

    // Create the card body text paragraph
    const cardBodyText = document.createElement('p');
    // cardBodyText.id = "cardBodyText";

    // Create the list in the card body
    const cardBodyList = document.createElement('ul');
    // cardBodyList.id = "cardBodyList";

    // Create list items
    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement('li');
        listItem.id = `listItem${i}`;
        cardBodyList.appendChild(listItem);
    }

    // Create the card icon bottom
    const cardIconBottom = document.createElement('div');
    cardIconBottom.className = "card-icon-bottom";
    // cardIconBottom.id = "cardIconBottom";

    // Create the user icon image
    const userIcon = document.createElement('img');
    userIcon.src = "Name.png";
    userIcon.alt = "User Icon";
    // userIcon.id = "userIcon";

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

    // Find the cards section element 

    // Append anchor to the cards section
    cardsSection.appendChild(anchor);
}


let folders = undefined;
async function getFolders(){
    try {
        
        const formData = new FormData();
        formData.append('folder_type', 'highly_proficient');

        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/all/rpms/folders/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData
        });

        folders = await response.json();
        if (response.ok) {
            console.log("Success Data : ", folders);
            folders.rpms_folders.forEach(folder => {
                generateCard(folder);
            })
        } else {
            console.log("Error Data : ", folders);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getFolders();

