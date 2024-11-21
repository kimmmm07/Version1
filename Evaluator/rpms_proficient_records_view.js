// Main Content Elements
const mainContent = document.getElementById("main-content");
const recordsHeading = document.getElementById("records-heading");

// Tabs
const tabs = document.getElementById("tabs");
const cotTab = document.getElementById("cot-tab");
const ipcrfTab = document.getElementById("ipcrf-tab");
const rpmsTab = document.getElementById("rpms-tab");
const viewSummaryLink = document.getElementById("view-summary-link");

// Records Section
const recordsSection = document.getElementById("records-section");

// KRA 1: Content Knowledge and Pedagogy
const kra1Heading = document.getElementById("kra1-heading");
const kra1List = document.getElementById("kra1-list");
const kra1File1 = document.getElementById("kra1-file1");
const kra1File2 = document.getElementById("kra1-file2");
const kra1File3 = document.getElementById("kra1-file3");

// KRA 2: Learning Environment and Diversity
const kra2Heading = document.getElementById("kra2-heading");
const kra2List = document.getElementById("kra2-list");
const kra2File1 = document.getElementById("kra2-file1");
const kra2File2 = document.getElementById("kra2-file2");
const kra2File3 = document.getElementById("kra2-file3");

// KRA 3: Curriculum and Planning
const kra3Heading = document.getElementById("kra3-heading");
const kra3List = document.getElementById("kra3-list");
const kra3File1 = document.getElementById("kra3-file1");
const kra3File2 = document.getElementById("kra3-file2");
const kra3File3 = document.getElementById("kra3-file3");

// KRA 4: Curriculum and Planning & Assessment
const kra4Heading = document.getElementById("kra4-heading");
const kra4List = document.getElementById("kra4-list");
const kra4File1 = document.getElementById("kra4-file1");
const kra4File2 = document.getElementById("kra4-file2");
const kra4File3 = document.getElementById("kra4-file3");

// PLUS FACTOR
const plusFactorHeading = document.getElementById("plus-factor-heading");
const plusFactorList = document.getElementById("plus-factor-list");
const plusFactorFile1 = document.getElementById("plus-factor-file1");
const plusFactorFile2 = document.getElementById("plus-factor-file2");




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



function populateKraList( data , element) {
    element.innerHTML = ''; // Clear existing list items
    data.forEach((item, index) => {
        console.log(item); 
        const filename = item.file.substring(item.file.lastIndexOf('/') + 1);

        console.log(filename);  // Output: IPCRF_Summary_Sheet_8dFHmCw.pdf

        const randomInteger = Math.floor(Math.random() * 10000) + 1;

        const listItem = document.createElement('li');
        listItem.innerHTML = `📄 <a id="${randomInteger}-link" style="cursor:pointer;" >${filename}</a>`;
        element.appendChild(listItem);

        
        const linkElement = document.getElementById(`${randomInteger}-link`);
        linkElement.addEventListener('click', async () => {
            try {
                const formData = new FormData();
                formData.append("rpms_id", item.attachment_id);
                const response = await fetch('https://bnahs.pythonanywhere.com/api/download/rpms/', {
                    method: 'POST',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                    credentials: 'include',
                    body: formData,
                });
            
                if (response.ok) {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'filename.pdf';  // Set a default file name or use one from the response
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    console.log("File downloaded successfully"); 
                } else {
                    const errorData = await response.json();
                    console.log("Error Data : ", errorData);
                }
            } catch (error) {
                console.error("Error during fetch:", error);
            }
            
        });






    });
}





async function fetchRPMSList(){
    try {
        
        const teacher_id = sessionStorage.getItem("teacher_id");
        const formData = new FormData();
        formData.append('teacher_id', teacher_id);

        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/get/rpms/attachments', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data);
 
            populateKraList(data['KRA 1: Content Knowledge and Pedagogy'] , kra1List); 
            populateKraList(data['KRA 2: Learning Environment and Diversity of Learners'] , kra2List); 
            populateKraList(data['KRA 3: Curriculum and Planning'] , kra3List); 
            populateKraList(data['KRA 4:  Curriculum and Planning & Assessment and Reporting'] , kra4List); 
            populateKraList(data['PLUS FACTOR'] , plusFactorList); 


        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}



fetchRPMSList();






