// Breadcrumb Links
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

const thisWeekDropdown = document.getElementById('thisWeekDropdown');
const thisWeekHeader = document.getElementById('thisWeekHeader');
const thisWeekLabel = document.getElementById('thisWeekLabel');
const thisWeekCount = document.getElementById('thisWeekCount');
const thisWeekToggle = document.getElementById('thisWeekToggle');
const thisWeekContent = document.getElementById('thisWeekContent');

const nextWeekDropdown = document.getElementById('nextWeekDropdown');
const nextWeekHeader = document.getElementById('nextWeekHeader');
const nextWeekLabel = document.getElementById('nextWeekLabel');
const nextWeekCount = document.getElementById('nextWeekCount');
const nextWeekToggle = document.getElementById('nextWeekToggle');
const nextWeekContent = document.getElementById('nextWeekContent');

const laterDropdown = document.getElementById('laterDropdown');
const laterHeader = document.getElementById('laterHeader');
const laterLabel = document.getElementById('laterLabel');
const laterCount = document.getElementById('laterCount');
const laterToggle = document.getElementById('laterToggle');
const laterContent = document.getElementById('laterContent');

// Content Items for KRA
const kra1Item = document.getElementById('kra1Item');
const kra2Item = document.getElementById('kra2Item');
const kra3Item = document.getElementById('kra3Item');
const kra4Item = document.getElementById('kra4Item');
const plusFactorItem = document.getElementById('plusFactorItem');

// School Year Text
const schoolYearText = document.getElementById('schoolYear');


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