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


const class_work_id = sessionStorage.getItem('kra_3_id');
console.log(class_work_id);

// Stepper Item 9 Elements
const stepItem9 = document.getElementById('step-item9');
const stepCounter9 = document.getElementById('step-counter9');
const stepName9 = document.getElementById('step-name9');

// Stepper Item 10 Elements
const stepItem10 = document.getElementById('step-item10');
const stepCounter10 = document.getElementById('step-counter10');
const stepName10 = document.getElementById('step-name10');

// Stepper Item 11 Elements
const stepItem11 = document.getElementById('step-item11');
const stepCounter11 = document.getElementById('step-counter11');
const stepName11 = document.getElementById('step-name11');

// Floating menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
const floatingMenu = document.getElementById('floating-menu');
floatingMenu.style.display = floatingMenu.style.display === 'block' ? 'none' : 'block';
});

function closeMenu() {
document.getElementById('floating-menu').style.display = 'none';
}

// Objective 9 Elements
const overallScore9 = document.getElementById('overall-score9');
const reflectedScore9 = document.getElementById('reflected-score9');
const fileList9 = document.getElementById('fileList9');
const fileInput9 = document.getElementById('fileInput9');
const addCreateBtn9 = document.getElementById('addCreateBtn9');
const turnInBtn9 = document.getElementById('turnInBtn9');

// Objective 10 Elements
const overallScore10 = document.getElementById('overall-score10');
const reflectedScore10 = document.getElementById('reflected-score10');
const fileList10 = document.getElementById('fileList10');
const fileInput10 = document.getElementById('fileInput10');
const addCreateBtn10 = document.getElementById('addCreateBtn10');
const turnInBtn10 = document.getElementById('turnInBtn10');

// Objective 11 Elements
const overallScore11 = document.getElementById('overall-score11');
const reflectedScore11 = document.getElementById('reflected-score11');
const fileList11 = document.getElementById('fileList11');
const fileInput11 = document.getElementById('fileInput11');
const addCreateBtn11 = document.getElementById('addCreateBtn11');
const turnInBtn11 = document.getElementById('turnInBtn11');

// Total Score Elements (KRA 3)
const overallScoreKRA3 = document.getElementById('overall-score-kra3');
const reflectedScoreKRA3 = document.getElementById('reflected-score-kra3');

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

// Flag to check if files have been submitted
let isSubmitted = false;

let submittedFiles = []; // submitted files fetched from the API
let unsubmittedFiles = [];

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
    } else if (fileType.startsWith('application/pdf')) {
        modalBody.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
    } else if (fileType.startsWith('application/msword') || fileType.startsWith('application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
        modalBody.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
    } else if (fileType.startsWith('application/vnd.ms-excel') || fileType.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
        modalBody.innerHTML = `<iframe src="${fileURL}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
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




let submitted_attachments = [];
let unsubmitted_attachments = [];


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
            // Handle fetched submitted files
            const submitted = responseData.submitted.map(item => {
                const cleanedFileName = item.file.replace('/media/rpms_attachments/', '');
                
                // Create a new File object with the cleaned name
                return new File([cleanedFileName], cleanedFileName, { type: item.streams_type || '' });
            });
            
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
            
            const submit = responseData.submitted;

            const score = parseInt(submit['0']['Overall Score']);

            if(score > 0){

                document.getElementById('reflected-score').value = String(submit['0']['Overall Score']);

                unsubmitBtn.style.display = 'none';

            }
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

        // Append each file to the FormData object (as actual file objects)
        uploadedFiles.forEach(file => {
            formData.append('file', file);
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
        formData.append('class_work_id', class_work_id); // Include the classwork ID

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
