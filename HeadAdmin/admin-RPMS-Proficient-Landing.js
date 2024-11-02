
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
 



const imageUpload = document.getElementById('imageUpload');
const headerImage = document.getElementById('headerImage');

imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            headerImage.src = e.target.result;
        };
        reader.readAsDataURL(file); // Convert image to base64 format
    }
});

// Function to open the date picker when the calendar icon is clicked
function openDatePicker(event, icon) {
    event.stopPropagation(); // Prevent the click event from propagating to the parent link
    event.preventDefault(); // Prevent the default behavior (redirecting)

    let datePicker = icon.nextElementSibling; // Get the hidden date input

    // Toggle visibility of the date picker
    if (datePicker.style.display === 'none' || datePicker.style.display === '') {
        datePicker.style.display = 'block'; // Make it visible
        datePicker.focus(); // Focus on the date picker so it opens
    } else {
        datePicker.style.display = 'none'; // Hide it if already visible
    }
}

// Function to update the 'due' date when a date is selected
function updatePostedDate(dateInput) {
    let selectedDate = new Date(dateInput.value);

    // Check if selectedDate is valid
    if (isNaN(selectedDate)) {
        console.error("Invalid date selected");
        return;
    }

    // Format the date to a readable string (e.g., "October 24, 2024")
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = selectedDate.toLocaleDateString('en-US', options);

    // Find the corresponding 'due' element and update it
    let dueElement = dateInput.closest('.content-item').querySelector('.due');
    dueElement.innerHTML = `Due date: ${formattedDate}`;
    
    // Hide the date picker again after selection
    dateInput.style.display = 'none';
}



