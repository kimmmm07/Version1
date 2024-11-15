// Card Section
const cardsSection = document.getElementById('cardsSection');

// Card Link
const cardLink = document.getElementById('cardLink');

// Card and its components
const card = document.getElementById('card');
const cardHeader = document.getElementById('cardHeader');
const headerContent = document.getElementById('headerContent');
const schoolYear = document.getElementById('schoolYear');
const headerIcon = document.getElementById('headerIcon');
const schoolYearIcon = document.getElementById('schoolYearIcon');

// Card Body
const cardBody = document.getElementById('cardBody');
const cardBodyText = document.getElementById('cardBodyText');
const cardBodyList = document.getElementById('cardBodyList');

// List Items
const listItem1 = document.getElementById('listItem1');
const listItem2 = document.getElementById('listItem2');
const listItem3 = document.getElementById('listItem3');
const listItem4 = document.getElementById('listItem4');
const listItem5 = document.getElementById('listItem5');

// Card Icon Bottom
const cardIconBottom = document.getElementById('cardIconBottom');
const userIcon = document.getElementById('userIcon');


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




let folders = undefined;
async function getFolders(){
    try {
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/rpms/folders/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        folders = await response.json();
        if (response.ok) {
            console.log("Success Data : ", folders);  
        } else {
            console.log("Error Data : ", folders);
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