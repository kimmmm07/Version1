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

    uploadedFiles.forEach((file, index) => {
        const fileDiv = document.createElement('div');
        fileDiv.classList.add('file-preview');

        // Create an image element for the file type icon
        const icon = document.createElement('img');
        icon.classList.add('file-icon'); // Add class for styling

        // Set the icon based on file type
        if (file.type.startsWith('image/')) {
            icon.src = URL.createObjectURL(file);
            icon.classList.add('file-thumb');
            icon.onload = () => URL.revokeObjectURL(icon.src); // Clean up memory
        } else if (file.type.startsWith('application/pdf')) {
            icon.src = 'asset/pdf.png'; // Use the PDF icon
        } else if (file.type.startsWith('application/msword') || file.type.startsWith('application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
            icon.src = 'asset/doc.png'; // Use the Word icon
        } else if (file.type.startsWith('application/vnd.ms-excel') || file.type.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
            icon.src = 'asset/xls.png'; // Use the Excel icon
        } else {
            // Default placeholder for other file types
            icon.src = 'file-placeholder.png'; // You can create a generic file icon
        }

        // Set the size of the icon (example: 50x50)
        icon.style.width = '20px';
        icon.style.height = '20px';

        fileDiv.appendChild(icon); // Add the icon to the file preview

        // Display file name
        const fileName = document.createElement('div');
        fileName.classList.add('file-name');
        fileName.textContent = file.name;

        // Make the file name clickable to show in modal
        fileName.style.cursor = 'pointer'; // Change cursor to pointer
        fileName.addEventListener('click', () => {
            const fileURL = URL.createObjectURL(file); // Create a URL for the file
            showModal(fileURL, file.type); // Show modal with the file
        });

        // Create remove button
        const removeBtn = document.createElement('span');
        removeBtn.classList.add('remove-file');
        removeBtn.textContent = 'X';
        removeBtn.addEventListener('click', () => {
            uploadedFiles.splice(index, 1); // Remove file from array
            renderFileList(); // Re-render the file list
        });

        fileDiv.appendChild(fileName);
        fileDiv.appendChild(removeBtn);
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
    const fileCountText = `${uploadedFiles.length} attachment(s) will be submitted for "PLUS FACTOR".`;
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
    submissionModal.style.display = 'none'; // Close the modal on cancel
});

// Confirm Turn In Action
confirmBtn.addEventListener('click', function () {
    // Set submitted flag to true
    isSubmitted = true;

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
