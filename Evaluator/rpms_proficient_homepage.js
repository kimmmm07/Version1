// Sidebar elements
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu-icon");
const homeIcon = document.getElementById("home-icon");
const settingsIcon = document.getElementById("settings-icon");

// Floating menu elements
const floatingMenu = document.getElementById("floating-menu");
const closeBtn = document.getElementById("close-btn");
const floatingMenuList = document.getElementById("floating-menu-list");
const homeLink = document.getElementById("home-link");
const settingsLink = document.getElementById("settings-link");
const schoolYearLink = document.getElementById("school-year-link");

// Header elements
const depedLogoContainer = document.getElementById("deped-logo-container");
const depedLogo = document.getElementById("deped-logo");
const mainNav = document.getElementById("main-nav");
const homeNavLink = document.getElementById("home-nav-link");
const formsNavLink = document.getElementById("forms-nav-link");
const recordsNavLink = document.getElementById("records-nav-link");
const summaryNavLink = document.getElementById("summary-nav-link");
const profileNavLink = document.getElementById("profile-nav-link");
const logoutLink = document.getElementById("logoutLink");

// Cards section elements
const cardsSection = document.getElementById("cards-section");
const cardLink = document.getElementById("card-link");
const performanceCard = document.getElementById("performance-card");
const cardHeader = document.getElementById("card-header");
const cardHeaderContent = document.getElementById("card-header-content");
const cardSubheader = document.getElementById("card-subheader");
const headerIcon = document.getElementById("header-icon");
const headerIconImg = document.getElementById("header-icon-img");
const cardBody = document.getElementById("card-body");
const cardDescription = document.getElementById("card-description");
const cardList = document.getElementById("card-list");
const cardItem1 = document.getElementById("card-item-1");
const cardItem2 = document.getElementById("card-item-2");
const cardItem3 = document.getElementById("card-item-3");
const cardItem4 = document.getElementById("card-item-4");
const cardItem5 = document.getElementById("card-item-5");
const cardIconBottom = document.getElementById("card-icon-bottom");
const cardIconImg = document.getElementById("card-icon-img");








function generateCard(folder) {
    // Create the anchor tag
    const anchor = document.createElement('a');
    // anchor.href = "rpms_proficient_stream.html";
    anchor.onclick = function(event) {
        event.preventDefault();
        sessionStorage.setItem('rpms_folder_id', folder.rpms_folder_id);
        sessionStorage.setItem('rpms_school_year', folder.rpms_folder_school_year);
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
    // headerIcon.className = "header-icon";
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
        formData.append('folder_type', 'proficient');

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
            
            folders.rpms_folders.forEach(folder => {
                generateCard(folder);
            })
        } else {
            window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getFolders();



async function openFolder( folder_id ){
    sessionStorage.setItem('rpms_folder_id', folder_id);
    window.location.href = '../../rpms_highlyproficient_folder.html';
}












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
            
            window.location.href = '../../get-started.html'; 
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});