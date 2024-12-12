// Breadcrumb Links
const rpmsLink = document.getElementById('rpmsLink');
const kraLink = document.getElementById('kraLink');

// KRA Objectives
const kraObjective9 = document.getElementById('kraObjective9');
const objective9 = document.getElementById('Objective9');
const kraObjective10 = document.getElementById('kraObjective10');
const objective10 = document.getElementById('Objective10');
const kraObjective11 = document.getElementById('kraObjective11');
const objective11 = document.getElementById('Objective11');

// Content Wrapper
const contentWrapper = document.getElementById('contentWrapper');

// Action and Comments Panel
const actionsCommentsPanel = document.getElementById('actionsCommentsPanel');
const turnInPanel = document.getElementById('turnInPanel');

// Private Comments
const privateComments = document.getElementById('privateComments');
const privateCommentsHeader = document.getElementById('privateCommentsHeader');
const privateIcon = document.getElementById('privateIcon');
const privateCommentsTitle = document.getElementById('privateCommentsTitle');
const privateCommentList = document.getElementById('privateCommentList');

// Modal Structure
const modalContent = document.getElementById('modalContent');
const fileModalCloseBtn = document.getElementById('fileModalCloseBtn');
const fileModalTitle = document.getElementById('fileModalTitle');

// Submission Modal
const submissionModalContent = document.getElementById('submissionModalContent');
const submissionModalCloseBtn = document.getElementById('submissionModalCloseBtn');
const submissionModalTitle = document.getElementById('submissionModalTitle');

const class_work_id = sessionStorage.getItem('kra_1_id');
console.log(class_work_id);


// Stepper Item 1 Elements
const stepItem1 = document.getElementById('step-item1');
const stepCounter1 = document.getElementById('step-counter1');
const stepName1 = document.getElementById('step-name1');

// Stepper Item 2 Elements
const stepItem2 = document.getElementById('step-item2');
const stepCounter2 = document.getElementById('step-counter2');
const stepName2 = document.getElementById('step-name2');

// Stepper Item 3 Elements
const stepItem3 = document.getElementById('step-item3');
const stepCounter3 = document.getElementById('step-counter3');
const stepName3 = document.getElementById('step-name3');

// Stepper Item 4 Elements
const stepItem4 = document.getElementById('step-item4');
const stepCounter4 = document.getElementById('step-counter4');
const stepName4 = document.getElementById('step-name4');


// Floating menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
const floatingMenu = document.getElementById('floating-menu');
floatingMenu.style.display = floatingMenu.style.display === 'block' ? 'none' : 'block';
});

function closeMenu() {
    document.getElementById('floating-menu').style.display = 'none';
}

// Objective 1 Elements
const overallScore = document.getElementById('overall-score');
const reflectedScore = document.getElementById('reflected-score');
const fileList = document.getElementById('fileList');
const fileInput = document.getElementById('fileInput');
const addCreateBtn = document.getElementById('addCreateBtn');
const turnInBtn = document.getElementById('turnInBtn');

// Objective 2 Elements
const overallScore2 = document.getElementById('overall-score2');
const reflectedScore2 = document.getElementById('reflected-score2');
const fileList2 = document.getElementById('fileList2');
const fileInput2 = document.getElementById('fileInput2');
const addCreateBtn2 = document.getElementById('addCreateBtn2');
const turnInBtn2 = document.getElementById('turnInBtn2');
const unsubmitBtn2 = document.createElement('button'); 
unsubmitBtn2.classList.add('btn-secondary'); 
unsubmitBtn2.textContent = 'Unsubmit'; 
unsubmitBtn2.style.display = 'none';
document.querySelector('.turn-in-panel2').appendChild(unsubmitBtn2);
const fileModal2 = document.getElementById('fileModal2');
const modalBody2 = document.getElementById('modalBody2');
const submissionModal2 = document.getElementById('submissionModal2');
const closeSubmissionModal2 = submissionModal2.querySelector('.close2'); 
const cancelBtn2 = document.getElementById('cancelBtn2');
const confirmBtn2 = document.getElementById('confirmBtn2');
const fileCount2 = document.getElementById('fileCount2');
const fileListPreview2 = document.getElementById('fileListPreview2');

// Objective 3 Elements
const overallScore3 = document.getElementById('overall-score3');
const reflectedScore3 = document.getElementById('reflected-score3');
const fileList3 = document.getElementById('fileList3');
const fileInput3 = document.getElementById('fileInput3');
const addCreateBtn3 = document.getElementById('addCreateBtn3');
const turnInBtn3 = document.getElementById('turnInBtn3');
const unsubmitBtn3 = document.createElement('button'); 
unsubmitBtn3.classList.add('btn-secondary'); 
unsubmitBtn3.textContent = 'Unsubmit'; 
unsubmitBtn3.style.display = 'none';
document.querySelector('.turn-in-panel3').appendChild(unsubmitBtn3);
const fileModal3 = document.getElementById('fileModal3');
const modalBody3 = document.getElementById('modalBody3');
const submissionModal3 = document.getElementById('submissionModal3');
const closeSubmissionModal3 = submissionModal3.querySelector('.close3'); 
const cancelBtn3 = document.getElementById('cancelBtn3');
const confirmBtn3 = document.getElementById('confirmBtn3');
const fileCount3 = document.getElementById('fileCount3');
const fileListPreview3 = document.getElementById('fileListPreview3');

// Objective 4 Elements
const overallScore4 = document.getElementById('overall-score4');
const reflectedScore4 = document.getElementById('reflected-score4');
const fileList4 = document.getElementById('fileList4');
const fileInput4 = document.getElementById('fileInput4');
const addCreateBtn4 = document.getElementById('addCreateBtn4');
const turnInBtn4 = document.getElementById('turnInBtn4');
const unsubmitBtn4 = document.createElement('button'); 
unsubmitBtn4.classList.add('btn-secondary'); 
unsubmitBtn4.textContent = 'Unsubmit'; 
unsubmitBtn4.style.display = 'none';
document.querySelector('.turn-in-panel4').appendChild(unsubmitBtn4);
const fileModal4 = document.getElementById('fileModal4');
const modalBody4 = document.getElementById('modalBody4');
const submissionModal4 = document.getElementById('submissionModal4');
const closeSubmissionModal4 = submissionModal4.querySelector('.close4'); 
const cancelBtn4 = document.getElementById('cancelBtn4');
const confirmBtn4 = document.getElementById('confirmBtn4');
const fileCount4 = document.getElementById('fileCount4');
const fileListPreview4 = document.getElementById('fileListPreview4');

// Total Score Elements
const overallScoreKRA1 = document.getElementById('overall-score-kra1');
const reflectedScoreKRA1 = document.getElementById('reflected-score-kra1');

const unsubmitBtn = document.createElement('button'); // Create Unsubmit button dynamically
unsubmitBtn.classList.add('btn-secondary'); // Add class for styling
unsubmitBtn.textContent = 'Unsubmit'; // Set button text
unsubmitBtn.style.display = 'none'; // Hide it initially
document.querySelector('.turn-in-panel').appendChild(unsubmitBtn); // Append it to the panel
const fileModal = document.getElementById('fileModal');
const modalBody = document.getElementById('modalBody');
const submitCommentBtn = document.getElementById('submitCommentBtn');
const privateCommentInput = document.getElementById('privateCommentInput');
const commentList = document.getElementById('commentList');

// Elements related to submission confirmation modal
const submissionModal = document.getElementById('submissionModal');
const closeSubmissionModal = submissionModal.querySelector('.close'); // Get close button for submission modal
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');
const fileCount = document.getElementById('fileCount');
const fileListPreview = document.getElementById('fileListPreview');

// Array to keep track of uploaded files
let uploadedFiles = [];
let uploadedFiles2 = [];
let uploadedFiles3 = [];
let uploadedFiles4 = [];

// Flag to check if files have been submitted
let isSubmitted = false;
let isSubmitted2 = false;
let isSubmitted3 = false;
let isSubmitted4 = false;


async function getScoreAndMilestone() {
    try {
        const formData = new FormData();
        formData.append('class_work_id', class_work_id);

        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/rpms/folder/classwork/attachments/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Fetched attachments:', responseData);
            
            const submit = responseData.submitted;

            if(submit.length > 0){
                if(submit['0']['file']){
                    document.getElementById(`step-item1`).classList.add('active');
                    document.getElementById(`obj1-img`).src = "asset/Check Mark1.png";
                }
                if(submit['0']['file2']){
                    document.getElementById(`step-item2`).classList.add('active');
                    document.getElementById(`obj2-img`).src = "asset/Check Mark1.png";
                }
                if(submit['0']['file3']){
                    document.getElementById(`step-item3`).classList.add('active');
                    document.getElementById(`obj3-img`).src = "asset/Check Mark1.png";
                }
                if(submit['0']['file4']){
                    document.getElementById(`step-item4`).classList.add('active');
                    document.getElementById(`obj4-img`).src = "asset/Check Mark1.png";
                }
                
                if(submit['0']['is_checked'] === true){
    
                    reflectedScoreKRA1.value = String(submit['0']['Overall Score']);
                }
            }
            
        } else {
            console.error('Failed to fetch attachments:', response.statusText);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}


getScoreAndMilestone();


// Trigger file upload dialog when "Add or Create" is clicked
addCreateBtn.addEventListener('click', () => {
    fileInput.click();
});

// Handle file selection
fileInput.addEventListener('change', () => {
    const newFiles = Array.from(fileInput.files); // Get selected files

    // Add new files to the uploaded files array
    uploadedFiles = uploadedFiles.concat(newFiles);

    // Clear fileList display
    fileList.innerHTML = '';

    // Display all uploaded files
    renderFileList();

    // Enable the "Turn In" button if there are any files uploaded
    turnInBtn.disabled = uploadedFiles.length === 0;

    // Clear the file input after processing
    fileInput.value = '';
});

// Function to render the file list
function renderFileList() {
    fileList.innerHTML = ''; // Clear current list

    if (uploadedFiles.length > 0) {
        addCreateBtn.style.display = 'none';
    }
    console.log(uploadedFiles);

    uploadedFiles.forEach((file, index) => {
        const fileDiv = document.createElement('div');
        fileDiv.classList.add('file-preview');
        // Create an icon for the file type
        const icon = document.createElement('img');
        icon.classList.add('file-icon');

        if (file.type === "submitted") {
            icon.src = 'asset/file-placeholder.png'; 
        } else if (file instanceof File && file.type.startsWith('image/')) {
            icon.src = URL.createObjectURL(file);
            icon.classList.add('file-thumb');
            icon.onload = () => URL.revokeObjectURL(icon.src);
        } else {
            icon.src = 'asset/img-placeholder.png'; // Placeholder for unsupported types
        }

        icon.style.width = '20px';
        icon.style.height = '20px';
        fileDiv.appendChild(icon);

        // Display file name
        const fileName = document.createElement('div');
        fileName.classList.add('file-name');
        fileName.textContent = file.name || "Unknown File";

        fileName.style.cursor = 'pointer';
        fileName.addEventListener('click', () => {
            if (file instanceof File) {
                const fileURL = URL.createObjectURL(file);
                showModal(fileURL, file.type);
            }
        });

        fileDiv.appendChild(fileName);

        // Add a remove button for non-"submitted" files only
        if (file instanceof File) {
            const removeBtn = document.createElement('span');
            removeBtn.classList.add('remove-file');
            removeBtn.textContent = 'X';
            removeBtn.addEventListener('click', () => {
                uploadedFiles.splice(index, 1); // Remove the file
                addCreateBtn.style.display = 'block';
                renderFileList();
            });
            fileDiv.appendChild(removeBtn);
        }

        fileList.appendChild(fileDiv);
    });

    // Disable the "Turn In" button if no files remain
    turnInBtn.disabled = uploadedFiles.length === 0;
}




let mainfile = undefined;
// Function to show the modal
function showModal(fileURL, fileType) {
    if (fileType.startsWith('image/')) {
        modalBody.innerHTML = `<img src="${fileURL}" style="max-width: 100%; height: auto;"/>`;
        fileModal.style.display = 'block';
        return;
    } else if (fileType.startsWith('application/pdf')) {
        modalBody.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
        fileModal.style.display = 'block';
        return;
    } else if (fileType.startsWith('application/msword') || fileType.startsWith('application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
        modalBody.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
        fileModal.style.display = 'block';
        return;
    } else if (fileType.startsWith('application/vnd.ms-excel') || fileType.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
        modalBody.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
        fileModal.style.display = 'block';
        return;
    } else {
        modalBody.innerHTML = `<p>Preview not available for this file type.</p>`;
    }

    fileModal.style.display = 'block'; // Show the modal
    const url = "https://bnahs.pythonanywhere.com" + mainfile.file;
    modalBody.innerHTML = `<p> <a href="${url}"> Clicking this will allow you to view the file.</a></p>`;
}

// Close the modal when the close button is clicked for submission modal
closeSubmissionModal.addEventListener('click', () => {
    submissionModal.style.display = 'none'; // Hide the submission modal
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === fileModal) {
        fileModal.style.display = 'none'; // Hide the file modal
    }
});

// Handle "Turn In" button click - Show Confirmation Modal
turnInBtn.addEventListener('click', () => {
    const modal = submissionModal;

    // Display the modal and update the file count
    modal.style.display = 'block';

    const fileCountText = `${uploadedFiles.length} attachment(s) will be submitted for "KRA 3: Curriculum and Planning".`;
    fileCount.textContent = fileCountText;

    fileListPreview.innerHTML = ''; // Clear previous content
    uploadedFiles.forEach((file) => {
        const filePreviewDiv = document.createElement('div');
        filePreviewDiv.classList.add('file-preview');

        const filePreviewLink = document.createElement('span');
        filePreviewLink.textContent = file.name;
        filePreviewLink.style.cursor = 'pointer';

        filePreviewLink.addEventListener('click', () => {
            const fileURL = URL.createObjectURL(file);
            showModal(fileURL, file.type);
        });

        filePreviewDiv.appendChild(filePreviewLink);
        fileListPreview.appendChild(filePreviewDiv);
    });
});


// Cancel button functionality to close the submission modal
cancelBtn.addEventListener('click', function () {
    submissionModal.style.display = 'none';
});

async function getAttachments() {
    try {
        const formData = new FormData();
        formData.append('class_work_id', class_work_id);

        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/rpms/folder/classwork/attachments/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Fetched attachments:', responseData);

            mainfile = responseData.submitted?.[0];
            
            const submit = responseData.submitted;
            // Handle fetched submitted files
            const submitted = responseData.submitted.map(item => {
                const cleanedFileName = item.file.replace('/media/rpms_attachments/', '');
                
                // Create a new File object with the cleaned name
                return new File([cleanedFileName], cleanedFileName, { type: item.streams_type || '' });
            });
            console.log(submitted);
            // Choose either submitted or unsubmitted, not both
            if (submitted.length > 0) {
                uploadedFiles = submitted;
                isSubmitted = true;
            }
            // UI adjustments based on the submission status
            addCreateBtn.style.display = isSubmitted ? 'none' : 'block';
            turnInBtn.style.display = isSubmitted ? 'none' : 'block';
            unsubmitBtn.style.display = isSubmitted ? 'block' : 'none';

            turnInBtn.disabled = uploadedFiles.length === 0;
            renderFileList();
            if(submit['0']['file_is_checked'] === true){

                document.getElementById('reflected-score').value = String(submit['0']['1']['Score']);
                unsubmitBtn.style.display = 'none';
            }






            const attachment = submit['0'];
            attachment?.teacher_comments?.map((comment)=>{
                const dateObject = new Date(comment?.date);  // Parse the date string into a Date object

                // Create a date formatter
                const options = { 
                    month: 'numeric', 
                    day: 'numeric', 
                    year: 'numeric', 
                    hour: 'numeric', 
                    minute: 'numeric', 
                    second: 'numeric', 
                    hour12: true 
                };
                const formatter = new Intl.DateTimeFormat('en-US', options);

                // Format the date
                const formattedDate = formatter.format(dateObject);
                const profilePicture = comment.image ? `https://bnahs.pythonanywhere.com${comment.image}` : "asset/User_Circle.png";

                const commentItem = `
                    <div class="private-comment-item">
                        <img src="${profilePicture}" class="comment-user-icon" alt="User Icon" />
                        <div>
                            <div class="comment-header">
                                <span class="comment-username">${comment.name}</span>
                                <span class="comment-timestamp">${formattedDate}</span>
                            </div>
                            <div class="comment-text">${comment.comment}</div>
                        </div>
                    </div>
                `;
                
                // Append the new comment to the comment list
                document.querySelector('.private-comment-list').insertAdjacentHTML('afterbegin', commentItem);
            })















        } else {
            console.error('Failed to fetch attachments:', response.statusText);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}


getAttachments();




// Function to send files to backend
async function sendFilesToBackend() {
    try {
        // Create a FormData object for sending files
        const formData = new FormData();
        formData.append('class_work_id', class_work_id); // Include the classwork ID
        formData.append('index', '1')

        // Append each file to the FormData object (as actual file objects)
        uploadedFiles.forEach(file => {
            formData.append('file1', file);
        });

        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/turnin/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
            body: formData
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Files successfully uploaded:', responseData);
            location.reload();
        } else {
            console.error('Failed to upload files:', response.statusText);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}

// Function to unsubmit files (send unsubmit request to backend)
async function unSubmitAttachment() {
    try {
        // Create a FormData object for unsubmit request
        const formData = new FormData();
        formData.append('class_work_id', class_work_id);
        formData.append('index', '1');

        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/unsubmit/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
            body: formData
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Files successfully unsubmitted:', responseData);
            location.reload();
        } else {
            console.error('Failed to unsubmit files:', response.statusText);
            return;
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}


// Confirm Turn In Action
confirmBtn.addEventListener('click', function () {
    // Set submitted flag to true
    isSubmitted = true;

    sendFilesToBackend();
    // Hide buttons
    addCreateBtn.style.display = 'none';
    turnInBtn.style.display = 'none';

    // Disable all remove buttons in the file list
    const removeButtons = document.querySelectorAll('.remove-file');
    removeButtons.forEach(button => {
        button.style.display = 'none';
    });

    // Show unsubmit button
    unsubmitBtn.style.display = 'block';

    submissionModal.style.display = 'none'; // Close submission modal
});

// Event listener for Unsubmit button
unsubmitBtn.addEventListener('click', function () {
    // Set submitted flag to false
    isSubmitted = false;

    unSubmitAttachment();

    // Show buttons again
    addCreateBtn.style.display = 'block';
    turnInBtn.style.display = 'block';

    const removeButtons = document.querySelectorAll('.remove-file');
    removeButtons.forEach(button => {
        button.style.display = 'inline'; // Show each remove button again
    });

    unsubmitBtn.style.display = 'none'; // Hide unsubmit button
    turnInBtn.disabled = false; // Enable Turn In button
});





//OBJECTIVE 2   
addCreateBtn2.addEventListener('click', () => {
    fileInput2.click();
});

// Handle file selection
fileInput2.addEventListener('change', () => {
    const newFiles = Array.from(fileInput2.files); // Get selected files
    uploadedFiles2 = uploadedFiles2.concat(newFiles);

    fileList2.innerHTML = ''; // Clear fileList display
    renderFileList2(); // Render updated file list
    turnInBtn2.disabled = uploadedFiles2.length === 0; // Enable "Turn In" button if files exist
    fileInput2.value = ''; // Clear the file input after processing
});

// Function to render the file list
function renderFileList2() {
    fileList2.innerHTML = ''; // Clear current list

    if (uploadedFiles2.length > 0) {
        addCreateBtn2.style.display = 'none';
    }

    uploadedFiles2.forEach((file, index) => {
        const fileDiv = document.createElement('div');
        fileDiv.classList.add('file-preview');

        const icon = document.createElement('img');
        icon.classList.add('file-icon');
        if (file.type === "submitted") {
            icon.src = 'asset/file-placeholder.png'; 
        } else if (file instanceof File && file.type.startsWith('image/')) {
            icon.src = URL.createObjectURL(file);
            icon.classList.add('file-thumb');
            icon.onload = () => URL.revokeObjectURL(icon.src);
        } else {
            icon.src = 'asset/img-placeholder.png'; // Placeholder for unsupported types
        }

        icon.style.width = '20px';
        icon.style.height = '20px';
        fileDiv.appendChild(icon);

        const fileName = document.createElement('div');
        fileName.classList.add('file-name');
        fileName.textContent = file.name || "Unknown File";
        fileName.style.cursor = 'pointer';

        fileName.addEventListener('click', () => {
            if (file instanceof File) {
                const fileURL = URL.createObjectURL(file);
                showModal2(fileURL, file.type); // Updated to showModal2
            }
        });

        fileDiv.appendChild(fileName);

        if (file instanceof File) {
            const removeBtn = document.createElement('span');
            removeBtn.classList.add('remove-file');
            removeBtn.textContent = 'X';
            removeBtn.addEventListener('click', () => {
                uploadedFiles2.splice(index, 1); // Remove the file
                addCreateBtn2.style.display = 'block';
                renderFileList2(); // Render updated list
            });
            fileDiv.appendChild(removeBtn);
        }

        fileList2.appendChild(fileDiv);
    });

    turnInBtn2.disabled = uploadedFiles2.length === 0; // Disable button if no files remain
}

let mainfile2 = undefined;

// Function to show the modal
function showModal2(fileURL, fileType) {
    if (fileType.startsWith('image/')) {
        modalBody2.innerHTML = `<img src="${fileURL}" style="max-width: 100%; height: auto;"/>`;
        fileModal2.style.display = 'block';
        return;
    } else if (fileType.startsWith('application/pdf')) {
        modalBody2.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
        fileModal2.style.display = 'block';
        return;
    } else if (fileType.startsWith('application/msword') || fileType.startsWith('application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
        modalBody2.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
        fileModal2.style.display = 'block';
        return;
    } else if (fileType.startsWith('application/vnd.ms-excel') || fileType.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
        modalBody2.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
        fileModal2.style.display = 'block';
        return;
    } else {
        modalBody2.innerHTML = `<p>Preview not available for this file type.</p>`;
    }

    fileModal2.style.display = 'block'; // Show the modal
    const url = "https://bnahs.pythonanywhere.com" + mainfile2.file;
    modalBody2.innerHTML = `<p><a href="${url}">Clicking this will allow you to view the file.</a></p>`;
}

// Close the modal when the close button is clicked
closeSubmissionModal2.addEventListener('click', () => {
    submissionModal2.style.display = 'none'; 
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === fileModal2) {
        fileModal2.style.display = 'none'; // Hide the file modal
    }
});

// Handle "Turn In" button click
turnInBtn2.addEventListener('click', () => {
    const modal2 = submissionModal2;

    modal2.style.display = 'block';

    const fileCountText2 = `${uploadedFiles2.length} attachment(s) will be submitted for "KRA 3: Curriculum and Planning".`;
    fileCount2.textContent = fileCountText2;

    fileListPreview2.innerHTML = ''; // Clear previous content
    uploadedFiles2.forEach((file) => {
        const filePreviewDiv2 = document.createElement('div');
        filePreviewDiv2.classList.add('file-preview');

        const filePreviewLink2 = document.createElement('span');
        filePreviewLink2.textContent = file.name;
        filePreviewLink2.style.cursor = 'pointer';

        filePreviewLink2.addEventListener('click', () => {
            const fileURL2 = URL.createObjectURL(file);
            showModal2(fileURL2, file.type);
        });

        filePreviewDiv2.appendChild(filePreviewLink2);
        fileListPreview2.appendChild(filePreviewDiv2);
    });
});

// Cancel button functionality
cancelBtn2.addEventListener('click', () => {
    submissionModal2.style.display = 'none';
});

// Function to fetch attachments
async function getAttachments2() {
    try {
        const formData2 = new FormData();
        formData2.append('class_work_id', class_work_id);

        const response2 = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/rpms/folder/classwork/attachments/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData2
        });

        if (response2.ok) {
            const responseData2 = await response2.json();
            console.log('Fetched attachments:', responseData2);

            mainfile2 = responseData2.submitted?.[0];

            const submitted2 = responseData2.submitted.map(item => {
                const cleanedFileName2 = item.file2.replace('/media/rpms_attachments/', '');
                return new File([cleanedFileName2], cleanedFileName2, { type: item.streams_type || '' });
            });

            if (submitted2.length > 0) {
                uploadedFiles2 = submitted2;
                isSubmitted2 = true;
                
            }

            console.log(isSubmitted2);
            addCreateBtn2.style.display = isSubmitted2 ? 'none' : 'block';
            turnInBtn2.style.display = isSubmitted2 ? 'none' : 'block';
            unsubmitBtn2.style.display = isSubmitted2 ? 'block' : 'none';

            turnInBtn2.disabled = uploadedFiles2.length === 0;

            renderFileList2();
            const submit = responseData2.submitted;
            if(submit['0']['file2_is_checked'] === true){

                document.getElementById('reflected-score2').value = String(submit['0']['2']['Score']);
                unsubmitBtn2.style.display = 'none';
            }
        } else {
            console.error('Failed to fetch attachments:', response2.statusText);
        }
    } catch (error2) {
        console.error('Error during fetch:', error2);
    }
}

getAttachments2();

// Function to send files to the backend
async function sendFilesToBackend2() {
    try {
        const formData2 = new FormData();
        formData2.append('class_work_id', class_work_id);
        formData2.append('index', '2')

        uploadedFiles2.forEach(file => {
            formData2.append('file2', file);
        });

        const response2 = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/turnin/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData2
        });

        if (response2.ok) {
            const responseData2 = await response2.json();
            console.log('Files successfully uploaded:', responseData2);
            location.reload();
        } else {
            console.error('Failed to upload files:', response2.statusText);
        }
    } catch (error2) {
        console.error('Error during fetch:', error2);
    }
}

// Function to unsubmit files
async function unSubmitAttachment2() {
    try {
        const formData2 = new FormData();
        formData2.append('class_work_id', class_work_id);
        formData2.append('index', '2');

        const response2 = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/unsubmit/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData2
        });

        if (response2.ok) {
            const responseData2 = await response2.json();
            console.log('Files successfully unsubmitted:', responseData2);
            location.reload();
        } else {
            console.error('Failed to unsubmit files:', response2.statusText);
        }
    } catch (error2) {
        console.error('Error during fetch:', error2);
    }
}

// Confirm Turn In Action
confirmBtn2.addEventListener('click', function () {
    isSubmitted2 = true;

    sendFilesToBackend2();

    addCreateBtn2.style.display = 'none';
    turnInBtn2.style.display = 'none';

    document.querySelectorAll('.remove-file').forEach(button => {
        button.style.display = 'none';
    });

    unsubmitBtn2.style.display = 'block';
    submissionModal2.style.display = 'none';
});

// Event listener for Unsubmit button
unsubmitBtn2.addEventListener('click', function () {
    isSubmitted2 = false;

    unSubmitAttachment2();

    addCreateBtn2.style.display = 'block';
    turnInBtn2.style.display = 'block';

    document.querySelectorAll('.remove-file').forEach(button => {
        button.style.display = 'inline';
    });

    unsubmitBtn2.style.display = 'none';
    turnInBtn2.disabled = false;
});




addCreateBtn3.addEventListener('click', () => {
    fileInput3.click();
});

// Handle file selection
fileInput3.addEventListener('change', () => {
    const newFiles = Array.from(fileInput3.files); // Get selected files
    uploadedFiles3 = uploadedFiles3.concat(newFiles);

    fileList3.innerHTML = ''; // Clear fileList display
    renderFileList3(); // Render updated file list
    turnInBtn3.disabled = uploadedFiles3.length === 0; // Enable "Turn In" button if files exist
    fileInput3.value = ''; // Clear the file input after processing
});

// Function to render the file list for KRA 3
function renderFileList3() {
    fileList3.innerHTML = ''; // Clear current list

    if (uploadedFiles3.length > 0) {
        addCreateBtn3.style.display = 'none';
    }

    uploadedFiles3.forEach((file, index) => {
        const fileDiv = document.createElement('div');
        fileDiv.classList.add('file-preview');

        const icon = document.createElement('img');
        icon.classList.add('file-icon');
        if (file.type === "submitted") {
            icon.src = 'asset/file-placeholder.png'; 
        } else if (file instanceof File && file.type.startsWith('image/')) {
            icon.src = URL.createObjectURL(file);
            icon.classList.add('file-thumb');
            icon.onload = () => URL.revokeObjectURL(icon.src);
        } else {
            icon.src = 'asset/img-placeholder.png'; // Placeholder for unsupported types
        }

        icon.style.width = '20px';
        icon.style.height = '20px';
        fileDiv.appendChild(icon);

        const fileName = document.createElement('div');
        fileName.classList.add('file-name');
        fileName.textContent = file.name || "Unknown File";
        fileName.style.cursor = 'pointer';

        fileName.addEventListener('click', () => {
            if (file instanceof File) {
                const fileURL = URL.createObjectURL(file);
                showModal3(fileURL, file.type); // Show modal for KRA 3
            }
        });

        fileDiv.appendChild(fileName);

        if (file instanceof File) {
            const removeBtn = document.createElement('span');
            removeBtn.classList.add('remove-file');
            removeBtn.textContent = 'X';
            removeBtn.addEventListener('click', () => {
                uploadedFiles3.splice(index, 1); // Remove the file
                addCreateBtn3.style.display = 'block';
                renderFileList3(); // Render updated list
            });
            fileDiv.appendChild(removeBtn);
        }

        fileList3.appendChild(fileDiv);
    });

    turnInBtn3.disabled = uploadedFiles3.length === 0; // Disable button if no files remain
}

async function getAttachments3() {
    try {
        const formData3 = new FormData();
        formData3.append('class_work_id', class_work_id);

        const response3 = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/rpms/folder/classwork/attachments/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData3
        });

        if (response3.ok) {
            const responseData3 = await response3.json();
            console.log('Fetched attachments:', responseData3);

            mainfile3 = responseData3.submitted?.[0];

            const submitted3 = responseData3.submitted.map(item => {
                const cleanedFileName3 = item.file3.replace('/media/rpms_attachments/', '');
                return new File([cleanedFileName3], cleanedFileName3, { type: item.streams_type || '' });
            });

            if (submitted3.length > 0) {
                uploadedFiles3 = submitted3;
                isSubmitted3 = true;
            }

            addCreateBtn3.style.display = isSubmitted3 ? 'none' : 'block';
            turnInBtn3.style.display = isSubmitted3 ? 'none' : 'block';
            unsubmitBtn3.style.display = isSubmitted3 ? 'block' : 'none';

            turnInBtn3.disabled = uploadedFiles3.length === 0;
            renderFileList3();

            const submit = responseData3.submitted;
            if (submit['0']['file3_is_checked'] === true) {
                document.getElementById('reflected-score3').value = String(submit['0']['3']['Score']);
                unsubmitBtn3.style.display = 'none';
            }
        } else {
            console.error('Failed to fetch attachments:', response3.statusText);
        }
    } catch (error3) {
        console.error('Error during fetch:', error3);
    }
}

getAttachments3();

// Function to send files to the backend for KRA 3
async function sendFilesToBackend3() {
    try {
        const formData3 = new FormData();
        formData3.append('class_work_id', class_work_id);
        formData3.append('index', '3');

        uploadedFiles3.forEach(file => {
            formData3.append('file3', file);
        });

        const response3 = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/turnin/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData3
        });

        if (response3.ok) {
            const responseData3 = await response3.json();
            console.log('Files successfully uploaded:', responseData3);
            location.reload();
        } else {
            console.error('Failed to upload files:', response3.statusText);
        }
    } catch (error3) {
        console.error('Error during fetch:', error3);
    }
}

// Function to unsubmit files for KRA 3
async function unSubmitAttachment3() {
    try {
        const formData3 = new FormData();
        formData3.append('class_work_id', class_work_id);
        formData3.append('index', '3');

        const response3 = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/unsubmit/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData3
        });

        if (response3.ok) {
            const responseData3 = await response3.json();
            console.log('Files successfully unsubmitted:', responseData3);
            location.reload();
        } else {
            console.error('Failed to unsubmit files:', response3.statusText);
        }
    } catch (error3) {
        console.error('Error during fetch:', error3);
    }
}


// Function to show the modal for KRA 3
function showModal3(fileURL, fileType) {
    if (fileType.startsWith('image/')) {
        modalBody3.innerHTML = `<img src="${fileURL}" style="max-width: 100%; height: auto;"/>`;
        fileModal3.style.display = 'block';
        return;
    } else if (fileType.startsWith('application/pdf')) {
        modalBody3.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
        fileModal3.style.display = 'block';
        return;
    } else {
        modalBody3.innerHTML = `<p>Preview not available for this file type.</p>`;
    }

    fileModal3.style.display = 'block'; // Show the modal
    const url = "https://bnahs.pythonanywhere.com" + mainfile3.file;
    modalBody3.innerHTML = `<p><a href="${url}">Clicking this will allow you to view the file.</a></p>`;
}

let mainfile3 = undefined;

// Function to send files to the backend for KRA 3
async function sendFilesToBackend3() {
    try {
        const formData3 = new FormData();
        formData3.append('class_work_id', class_work_id);
        formData3.append('index', '3');

        uploadedFiles3.forEach(file => {
            formData3.append('file3', file);
        });

        const response3 = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/turnin/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData3
        });

        if (response3.ok) {
            const responseData3 = await response3.json();
            console.log('Files successfully uploaded:', responseData3);
            location.reload();
        } else {
            console.error('Failed to upload files:', response3.statusText);
        }
    } catch (error3) {
        console.error('Error during fetch:', error3);
    }
}

// Function to unsubmit files for KRA 3
async function unSubmitAttachment3() {
    try {
        const formData3 = new FormData();
        formData3.append('class_work_id', class_work_id);
        formData3.append('index', '3');

        const response3 = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/unsubmit/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData3
        });

        if (response3.ok) {
            const responseData3 = await response3.json();
            console.log('Files successfully unsubmitted:', responseData3);
            location.reload();
        } else {
            console.error('Failed to unsubmit files:', response3.statusText);
        }
    } catch (error3) {
        console.error('Error during fetch:', error3);
    }
}

closeSubmissionModal.addEventListener('click', () => {
    submissionModal3.style.display = 'none'; 
});

window.addEventListener('click', (event) => {
    if (event.target === fileModal3) {
        fileModal3.style.display = 'none'; // Hide the file modal
    }
});

// Handle "Turn In" button click
turnInBtn3.addEventListener('click', () => {
    const modal3 = submissionModal3;

    modal3.style.display = 'block';

    const fileCountText3 = `${uploadedFiles3.length} attachment(s) will be submitted for "KRA 3: Curriculum and Planning".`;
    fileCount3.textContent = fileCountText3;

    fileListPreview3.innerHTML = ''; // Clear previous content
    uploadedFiles3.forEach((file) => {
        const filePreviewDiv3 = document.createElement('div');
        filePreviewDiv3.classList.add('file-preview');

        const filePreviewLink3 = document.createElement('span');
        filePreviewLink3.textContent = file.name;
        filePreviewLink3.style.cursor = 'pointer';

        filePreviewLink3.addEventListener('click', () => {
            const fileURL3 = URL.createObjectURL(file);
            showModal3(fileURL3, file.type);
        });

        filePreviewDiv3.appendChild(filePreviewLink3);
        fileListPreview3.appendChild(filePreviewDiv3);
    });
});

cancelBtn3.addEventListener('click', () => {
    submissionModal3.style.display = 'none';
});

confirmBtn3.addEventListener('click', function () {
    isSubmitted3 = true;

    sendFilesToBackend3();

    addCreateBtn3.style.display = 'none';
    turnInBtn3.style.display = 'none';

    document.querySelectorAll('.remove-file').forEach(button => {
        button.style.display = 'none';
    });

    unsubmitBtn3.style.display = 'block';
    submissionModal3.style.display = 'none';
});

unsubmitBtn3.addEventListener('click', function () {
    isSubmitted3 = false;

    unSubmitAttachment3();

    addCreateBtn3.style.display = 'block';
    turnInBtn3.style.display = 'block';

    document.querySelectorAll('.remove-file').forEach(button => {
        button.style.display = 'inline';
    });

    unsubmitBtn3.style.display = 'none';
    turnInBtn3.disabled = false;
});



addCreateBtn4.addEventListener('click', () => {
    fileInput4.click();
});

// Handle file selection
fileInput4.addEventListener('change', () => {
    const newFiles = Array.from(fileInput4.files); // Get selected files

    // Add new files to the uploaded files array
    uploadedFiles4 = uploadedFiles4.concat(newFiles);

    // Clear fileList display
    fileList4.innerHTML = '';

    // Display all uploaded files
    renderFileList4();

    // Enable the "Turn In" button if there are any files uploaded
    turnInBtn4.disabled = uploadedFiles4.length === 0;

    // Clear the file input after processing
    fileInput4.value = '';
});

// Function to render the file list
function renderFileList4() {
    fileList4.innerHTML = ''; // Clear current list

    if (uploadedFiles4.length > 0) {
        addCreateBtn4.style.display = 'none';
    }
    console.log(uploadedFiles4);

    uploadedFiles4.forEach((file, index) => {
        const fileDiv = document.createElement('div');
        fileDiv.classList.add('file-preview');

        // Create an icon for the file type
        const icon = document.createElement('img');
        icon.classList.add('file-icon');

        if (file.type === "submitted") {
            icon.src = 'asset/file-placeholder.png'; 
        } else if (file instanceof File && file.type.startsWith('image/')) {
            icon.src = URL.createObjectURL(file);
            icon.classList.add('file-thumb');
            icon.onload = () => URL.revokeObjectURL(icon.src);
        } else {
            icon.src = 'asset/img-placeholder.png'; // Placeholder for unsupported types
        }

        icon.style.width = '20px';
        icon.style.height = '20px';
        fileDiv.appendChild(icon);

        // Display file name
        const fileName = document.createElement('div');
        fileName.classList.add('file-name');
        fileName.textContent = file.name || "Unknown File";

        fileName.style.cursor = 'pointer';
        fileName.addEventListener('click', () => {
            if (file instanceof File) {
                const fileURL = URL.createObjectURL(file);
                showModal4(fileURL, file.type);
            }
        });

        fileDiv.appendChild(fileName);

        // Add a remove button for non-"submitted" files only
        if (file instanceof File) {
            const removeBtn = document.createElement('span');
            removeBtn.classList.add('remove-file');
            removeBtn.textContent = 'X';
            removeBtn.addEventListener('click', () => {
                uploadedFiles4.splice(index, 1); // Remove the file
                addCreateBtn4.style.display = 'block';
                renderFileList4();
            });
            fileDiv.appendChild(removeBtn);
        }

        fileList4.appendChild(fileDiv);
    });

    // Disable the "Turn In" button if no files remain
    turnInBtn4.disabled = uploadedFiles4.length === 0;
}

let mainfile4 = undefined;
// Function to show the modal
function showModal4(fileURL, fileType) {
    if (fileType.startsWith('image/')) {
        modalBody4.innerHTML = `<img src="${fileURL}" style="max-width: 100%; height: auto;"/>`;
        fileModal4.style.display = 'block';
        return;
    } else if (fileType.startsWith('application/pdf')) {
        modalBody4.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
        fileModal4.style.display = 'block';
        return;
    } else if (fileType.startsWith('application/msword') || fileType.startsWith('application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
        modalBody4.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
        fileModal4.style.display = 'block';
        return;
    } else if (fileType.startsWith('application/vnd.ms-excel') || fileType.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
        modalBody4.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
        fileModal4.style.display = 'block';
        return;
    } else {
        modalBody4.innerHTML = `<p>Preview not available for this file type.</p>`;
    }

    fileModal4.style.display = 'block'; // Show the modal
    const url = "https://bnahs.pythonanywhere.com" + mainfile4.file;
    modalBody4.innerHTML = `<p> <a href="${url}"> Clicking this will allow you to view the file.</a></p>`;
}

// Close the modal when the close button is clicked for submission modal
closeSubmissionModal4.addEventListener('click', () => {
    submissionModal4.style.display = 'none'; // Hide the submission modal
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === fileModal4) {
        fileModal4.style.display = 'none'; // Hide the file modal
    }
});

// Handle "Turn In" button click - Show Confirmation Modal
turnInBtn4.addEventListener('click', () => {
    const modal = submissionModal4;

    // Display the modal and update the file count
    modal.style.display = 'block';

    const fileCountText = `${uploadedFiles4.length} attachment(s) will be submitted for "KRA 3: Curriculum and Planning".`;
    fileCount4.textContent = fileCountText;

    fileListPreview4.innerHTML = ''; // Clear previous content
    uploadedFiles4.forEach((file) => {
        const filePreviewDiv = document.createElement('div');
        filePreviewDiv.classList.add('file-preview');

        const filePreviewLink = document.createElement('span');
        filePreviewLink.textContent = file.name;
        filePreviewLink.style.cursor = 'pointer';

        filePreviewLink.addEventListener('click', () => {
            const fileURL = URL.createObjectURL(file);
            showModal4(fileURL, file.type);
        });

        filePreviewDiv.appendChild(filePreviewLink);
        fileListPreview4.appendChild(filePreviewDiv);
    });
});

// Cancel button functionality to close the submission modal
cancelBtn4.addEventListener('click', function () {
    submissionModal4.style.display = 'none';
});

async function getAttachments4() {
    try {
        const formData = new FormData();
        formData.append('class_work_id', class_work_id);

        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/rpms/folder/classwork/attachments/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Fetched attachments:', responseData);

            mainfile4 = responseData.submitted?.[0];
            
            const submit = responseData.submitted;
                       
            // Handle fetched submitted files
            const submitted = responseData.submitted.map(item => {
                const cleanedFileName = item.file4.replace('/media/rpms_attachments/', '');
                
                // Create a new File object with the cleaned name
                return new File([cleanedFileName], cleanedFileName, { type: item.streams_type || '' });
            });
            
            // Choose either submitted or unsubmitted, not both
            if (submitted.length > 0) {
                uploadedFiles4 = submitted;
                isSubmitted4 = true;
            }
            // UI adjustments based on the submission status
            addCreateBtn4.style.display = isSubmitted4 ? 'none' : 'block';
            turnInBtn4.style.display = isSubmitted4 ? 'none' : 'block';
            unsubmitBtn4.style.display = isSubmitted4 ? 'block' : 'none';

            turnInBtn4.disabled = uploadedFiles4.length === 0;

            renderFileList4();
            if(submit['0']['file4_is_checked'] === true){

                document.getElementById('reflected-score4').value = String(submit['0']['4']['Score']);
                unsubmitBtn4.style.display = 'none';
            }
        } else {
            console.error('Failed to fetch attachments:', response.statusText);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}

getAttachments4();

// Function to send files to backend
async function sendFilesToBackend4() {
    try {
        // Create a FormData object for sending files
        const formData = new FormData();
        formData.append('class_work_id', class_work_id); // Include the classwork ID
        formData.append('index', '4')

        // Append each file to the FormData object (as actual file objects)
        uploadedFiles4.forEach(file => {
            formData.append('file4', file);
        });

        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/turnin/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
            body: formData
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Files successfully uploaded:', responseData);
            location.reload();
        } else {
            console.error('Failed to submit files:', response.statusText);
        }
    } catch (error) {
        console.error('Error during file submission:', error);
    }
}

async function unSubmitAttachment4() {
    try {
        const formData3 = new FormData();
        formData3.append('class_work_id', class_work_id);
        formData3.append('index', '4');

        const response3 = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/unsubmit/', {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
            body: formData3
        });

        if (response3.ok) {
            const responseData3 = await response3.json();
            console.log('Files successfully unsubmitted:', responseData3);
            location.reload();
        } else {
            console.error('Failed to unsubmit files:', response3.statusText);
        }
    } catch (error3) {
        console.error('Error during fetch:', error3);
    }
}

confirmBtn4.addEventListener('click', function () {
    isSubmitted4 = true;

    sendFilesToBackend4();

    addCreateBtn4.style.display = 'none';
    turnInBtn4.style.display = 'none';

    document.querySelectorAll('.remove-file').forEach(button => {
        button.style.display = 'none';
    });

    unsubmitBtn4.style.display = 'block';
    submissionModal4.style.display = 'none';
});

unsubmitBtn4.addEventListener('click', function () {
    isSubmitted4 = false;

    unSubmitAttachment4();

    addCreateBtn4.style.display = 'block';
    turnInBtn4.style.display = 'block';

    document.querySelectorAll('.remove-file').forEach(button => {
        button.style.display = 'inline';
    });

    unsubmitBtn4.style.display = 'none';
    turnInBtn4.disabled = false;
});



// Replace with the actual user's name and image
const userName = "John Doe"; // Example user name
const userImage = "asset/User_01.png"; // Example user image source

// Event listener for the comment submission button
submitCommentBtn.addEventListener('click', function () {
    const commentText = privateCommentInput.value.trim();

    // Check if the comment is not empty
    if (commentText !== '') {
        // Get the current date and time
        const now = new Date();
        const timestamp = now.toLocaleString(); // Format timestamp (you can customize this)

        // Create a new comment element
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-item'); // Add class for styling
        
        // Create the comment structure
        commentDiv.innerHTML = `
            <div class="comment-header">
                <img src="${userImage}" alt="User Icon" class="comment-user-icon">
                <span class="comment-username">${userName}</span>
                <span class="comment-timestamp">${timestamp}</span>
            </div>
            <div class="comment-text">${commentText}</div>
        `;

        // Append the new comment to the comment list
        commentList.appendChild(commentDiv);

        // Clear the input field
        privateCommentInput.value = '';
    }
});
