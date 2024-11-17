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


// Floating menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
const floatingMenu = document.getElementById('floating-menu');
floatingMenu.style.display = floatingMenu.style.display === 'block' ? 'none' : 'block';
});

function closeMenu() {
document.getElementById('floating-menu').style.display = 'none';
}

const fileInput = document.getElementById('fileInput');
const addCreateBtn = document.getElementById('addCreateBtn');
const turnInBtn = document.getElementById('turnInBtn');
const unsubmitBtn = document.createElement('button'); // Create Unsubmit button dynamically
unsubmitBtn.classList.add('btn-secondary'); // Add class for styling
unsubmitBtn.textContent = 'Unsubmit'; // Set button text
unsubmitBtn.style.display = 'none'; // Hide it initially
document.querySelector('.turn-in-panel').appendChild(unsubmitBtn); // Append it to the panel
const fileList = document.getElementById('fileList');
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
    console.log(newFiles);

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

    uploadedFiles.forEach((file, index) => {
        const fileDiv = document.createElement('div');
        fileDiv.classList.add('file-preview');

        // Create an icon for the file type
        const icon = document.createElement('img');
        icon.classList.add('file-icon');

        if (file.type === "submitted" || file.type === "unsubmitted") {
            icon.src = 'asset/file-placeholder.png'; // Placeholder for submitted/unsubmitted files
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

        // File actions
        fileName.style.cursor = 'pointer';
        fileName.addEventListener('click', () => {
            if (file.file) {
                // Open file URL in a new tab
                window.open(file.file, '_blank');
            } else if (file instanceof File) {
                const fileURL = URL.createObjectURL(file);
                showModal(fileURL, file.type);
            } else {
                console.error("Unable to preview file: Invalid file type.");
            }
        });

        fileDiv.appendChild(fileName);

        // Add a remove button for "uploaded" files only
        if (file.type === "uploaded") {
            const removeBtn = document.createElement('span');
            removeBtn.classList.add('remove-file');
            removeBtn.textContent = 'X';
            removeBtn.addEventListener('click', () => {
                uploadedFiles.splice(index, 1); // Remove the file
                renderFileList();
            });
            fileDiv.appendChild(removeBtn);
        }

        fileList.appendChild(fileDiv);
    });

    // Disable the "Turn In" button if no files remain
    turnInBtn.disabled = uploadedFiles.length === 0;
}




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
    // Get the modal element
    const modal = submissionModal;

    // Display the modal
    modal.style.display = 'block';

    // Update file count text
    const fileCountText = `${uploadedFiles.length} attachment(s) will be submitted for "KRA 3: Curriculum and Planning".`;
    fileCount.textContent = fileCountText;

    // Generate file preview HTML
    fileListPreview.innerHTML = ''; // Clear previous content
    uploadedFiles.forEach((file) => {
        const filePreviewDiv = document.createElement('div');
        filePreviewDiv.classList.add('file-preview');

        // Create a clickable element (you can use a div or a span)
        const filePreviewLink = document.createElement('span');
        filePreviewLink.textContent = file.name;
        filePreviewLink.style.cursor = 'pointer'; // Make it look clickable

        // Add a click event listener to show the modal with file preview
        filePreviewLink.addEventListener('click', () => {
            const fileURL = URL.createObjectURL(file); // Create object URL for the file
            showModal(fileURL, file.type); // Call the showModal function
        });

        // Append the clickable link to the preview div
        filePreviewDiv.appendChild(filePreviewLink);

        // Append the entire file preview div to the preview container
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
        // const class_work_id = "61a83494-7bea-480d-a915-a9e884ed149f";
        const class_work_id = sessionStorage.getItem('class_work_id');
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

            // Process submitted files
            const submitted = responseData.submitted.map(item => ({
                name: item.title || item.file.split('/').pop(),
                type: "submitted",
                file: "https://bnahs.pythonanywhere.com/" + item.file,
                attachmentId: item.attachment_id,
            }));

            // Process unsubmitted files
            const unsubmitted = responseData.unsumitted.map(item => ({
                name: item.title || item.file.split('/').pop(),
                type: "unsubmitted",
                file: "https://bnahs.pythonanywhere.com/" + item.file,
                attachmentId: item.attachment_id,
            }));

            // Merge into uploadedFiles
            uploadedFiles = [...submitted, ...unsubmitted];

            // Set flags for UI adjustments
            isSubmitted = submitted.length > 0;

            // UI updates based on submission status
            addCreateBtn.style.display = isSubmitted ? 'none' : 'block';
            turnInBtn.style.display = isSubmitted ? 'none' : 'block';
            unsubmitBtn.style.display = isSubmitted ? 'block' : 'none';
            turnInBtn.disabled = !isSubmitted && uploadedFiles.length === 0;

            renderFileList();
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


    // Use fetch to send the data
    try {

        // Create a FormData object
        const formData = new FormData();

        const class_work_id = sessionStorage.getItem('class_work_id'); // Ito gamitin mo sample lang yan sa baba
        // const class_work_id = "61a83494-7bea-480d-a915-a9e884ed149f";

        formData.append('class_work_id', class_work_id); // Include the classowrk ID
        // Append each file to the FormData object
        uploadedFiles.forEach((file, index) => {
            formData.append(`file${index}`, file);
        });

        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/turnin/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData
        });

        // Check the response status
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



async function unSubmitAttachment() {
    
    // Use fetch to send the data
    try {

        // Create a FormData object
        const formData = new FormData();

        const class_work_id = sessionStorage.getItem('class_work_id'); // Ito gamitin mo sample lang yan sa baba
        // const class_work_id = "61a83494-7bea-480d-a915-a9e884ed149f";

        formData.append('class_work_id', class_work_id); // Include the classowrk ID
        // Append each file to the FormData object

        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/rpms/folder/classwork/unsubmit/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData
        });

        // Check the response status
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


// Confirm Turn In Action
confirmBtn.addEventListener('click', function () {
    // Set submitted flag to true
    isSubmitted = true;

    sendFilesToBackend();

    // Hide the Add or Create button and Turn In button
    addCreateBtn.style.display = 'none'; // Keep space occupied
    turnInBtn.style.display = 'none';     // Keep space occupied

    // Disable all remove buttons in the file list
    const removeButtons = document.querySelectorAll('.remove-file');
    removeButtons.forEach(button => {
        button.style.display = 'none'; // Hide each remove button
    });

    // Show unsubmit button
    unsubmitBtn.style.display = 'block';

    // Close the modal
    submissionModal.style.display = 'none'; // Close submission modal
});

// Unsubmit button functionality
unsubmitBtn.addEventListener('click', function () {
    // Set submitted flag to false
    isSubmitted = false;

    unSubmitAttachment();


    // Show Add or Create button and Turn In button again
    addCreateBtn.style.display = 'block'; // Maintain position
    turnInBtn.style.display = 'block';     // Maintain position

    // Enable the remove buttons again
    const removeButtons = document.querySelectorAll('.remove-file');
    removeButtons.forEach(button => {
        button.style.display = 'inline'; // Show each remove button again
    });

    // Hide unsubmit button
    unsubmitBtn.style.display = 'none';

    // Enable turn in button
    turnInBtn.disabled = false;
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
