

let kra_1_id = undefined;
let kra_2_id = undefined;
let kra_3_id = undefined;
let kra_4_id = undefined;
let plus_factor_id = undefined;


// PARA MAKUHA AN DATA SA CLASSWORKS
async function getClassworks() {
    try{
        // const rpms_folder_id = sessionStorage.getItem("rpms_folder_id"); // ito yung gamitin mo
        const rpms_folder_id = sessionStorage.getItem('rpms_folder_id'); //  
        const formData = new FormData();
        formData.append('rpms_folder_id', rpms_folder_id); 


        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/forms/rpms/classworks/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
            body: formData,
        });
        const data = await response.json();

        if (response.ok){
            console.log("Success Data : ",data);
            data.rpms_classworks.forEach(classwork => {
                if (classwork.title == "PLUS FACTOR") {
                    plus_factor_id = classwork.class_work_id;
                } else if (classwork.title == "KRA 4:  Curriculum and Planning & Assessment and Reporting") {
                    kra_4_id = classwork.class_work_id;
                } else if (classwork.title == "KRA 3: Curriculum and Planning") {
                    kra_3_id = classwork.class_work_id;
                } else if (classwork.title == "KRA 2: Learning Environment and Diversity of Learners") {
                    kra_2_id = classwork.class_work_id;
                } else if (classwork.title == "KRA 1: Content Knowledge and Pedagogy") {
                    kra_1_id = classwork.class_work_id;
                }
            })

            console.log("KRA 1 ID: ", kra_1_id);
            console.log("KRA 2 ID: ", kra_2_id);
            console.log("KRA 3 ID: ", kra_3_id);
            console.log("KRA 4 ID: ", kra_4_id);
            console.log("PLUS FACTOR ID: ", plus_factor_id);
        } else {
            console.log("Error Data : ",data); 
        }

    } catch (err){
        console.error("Error fetching classworks: ", err);
    }
}

getClassworks();

function onclickKRA1() {
    sessionStorage.setItem("classwrork_id", kra_1_id);
    window.location.href = `sadmin-RPMS-Proficient-KRA1.html?class_work_id=${kra_1_id}`; // DITO MO NALANG ILAGAY YUNG LINK
}


function onclickKRA2() {
    sessionStorage.setItem("classwrork_id", kra_2_id);
    window.location.href = `sadmin-RPMS-Proficient-KRA1.html?class_work_id=${kra_1_id}`; // DITO MO NALANG ILAGAY YUNG LINK
}

function onclickKRA3() {
    sessionStorage.setItem("classwrork_id", kra_3_id);
    window.location.href = `sadmin-RPMS-Proficient-KRA1.html?class_work_id=${kra_1_id}`; // DITO MO NALANG ILAGAY YUNG LINK
}

function onclickKRA4() {
    sessionStorage.setItem("classwrork_id", kra_4_id);
    window.location.href = `sadmin-RPMS-Proficient-KRA1.html?class_work_id=${kra_1_id}`; // DITO MO NALANG ILAGAY YUNG LINK
}


function onclickPLUSFACTOR() {
    sessionStorage.setItem("classwrork_id", plus_factor_id);
    window.location.href = `sadmin-RPMS-Proficient-KRA1.html?class_work_id=${kra_1_id}`; // DITO MO NALANG ILAGAY YUNG LINK
}































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


// Toggle the floating menu display
function toggleFloatingMenu() {
    const floatingMenu = document.getElementById('floating-menu');
    floatingMenu.style.display = (floatingMenu.style.display === 'block') ? 'none' : 'block';
}

// Close the floating menu
function closeMenu() {
    document.getElementById('floating-menu').style.display = 'none';
}






