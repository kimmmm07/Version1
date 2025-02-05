// Breadcrumb links
const rpmsLink = document.getElementById('rpmsLink');
const toDoLink = document.getElementById('toDoLink');

// Tabs
const pendingTab = document.getElementById('pendingTab');
const doneTab = document.getElementById('doneTab');

// Dropdown Containers
const noDueDateDropdown = document.getElementById('noDueDateDropdown');
const noDueDateHeader = document.getElementById('noDueDateHeader');
const noDueDateLabel = document.getElementById('noDueDateLabel');
const noDueDateCount = document.getElementById('noDueDateCount');
const noDueDateToggle = document.getElementById('noDueDateToggle');
const noDueDateContent = document.getElementById('noDueDateContent');

// KRA 1 Content
const kra1Item = document.getElementById('kra1Item');
const kra1Icon = document.getElementById('kra1Icon');
const kra1Title = document.getElementById('kra1Title');
const kra1SchoolYear = document.getElementById('kra1SchoolYear');
const kra1Score = document.getElementById('kra1Score');

// KRA 2 Content
const kra2Item = document.getElementById('kra2Item');
const kra2Icon = document.getElementById('kra2Icon');
const kra2Title = document.getElementById('kra2Title');
const kra2SchoolYear = document.getElementById('kra2SchoolYear');
const kra2Score = document.getElementById('kra2Score');

// KRA 3 Content
const kra3Item = document.getElementById('kra3Item');
const kra3Icon = document.getElementById('kra3Icon');
const kra3Title = document.getElementById('kra3Title');
const kra3SchoolYear = document.getElementById('kra3SchoolYear');
const kra3Score = document.getElementById('kra3Score');

// KRA 4 Content
const kra4Item = document.getElementById('kra4Item');
const kra4Icon = document.getElementById('kra4Icon');
const kra4Title = document.getElementById('kra4Title');
const kra4SchoolYear = document.getElementById('kra4SchoolYear');
const kra4Score = document.getElementById('kra4Score');

// Plus Factor Content
const plusFactorItem = document.getElementById('plusFactorItem');
const plusFactorIcon = document.getElementById('plusFactorIcon');
const plusFactorTitle = document.getElementById('plusFactorTitle');
const plusFactorSchoolYear = document.getElementById('plusFactorSchoolYear');
const plusFactorScore = document.getElementById('plusFactorScore');

// This Week Dropdown
const thisWeekDropdown = document.getElementById('thisWeekDropdown');
const thisWeekHeader = document.getElementById('thisWeekHeader');
const thisWeekLabel = document.getElementById('thisWeekLabel');
const thisWeekCount = document.getElementById('thisWeekCount');
const thisWeekToggle = document.getElementById('thisWeekToggle');
const thisWeekContent = document.getElementById('thisWeekContent');

// Next Week Dropdown
const nextWeekDropdown = document.getElementById('nextWeekDropdown');
const nextWeekHeader = document.getElementById('nextWeekHeader');
const nextWeekLabel = document.getElementById('nextWeekLabel');
const nextWeekCount = document.getElementById('nextWeekCount');
const nextWeekToggle = document.getElementById('nextWeekToggle');
const nextWeekContent = document.getElementById('nextWeekContent');

// Later Dropdown
const laterDropdown = document.getElementById('laterDropdown');
const laterHeader = document.getElementById('laterHeader');
const laterLabel = document.getElementById('laterLabel');
const laterCount = document.getElementById('laterCount');
const laterToggle = document.getElementById('laterToggle');
const laterContent = document.getElementById('laterContent');

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

// Get all dropdown headers
const dropdownHeaders = document.querySelectorAll('.dropdown-header');
    
dropdownHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
        // Toggle the active class on the parent dropdown item
        const parentItem = header.parentElement;
        parentItem.classList.toggle('active');
    });
});