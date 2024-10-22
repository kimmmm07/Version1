function editInstruction() {
    const instructions = document.querySelector('.instructions');
    const instructionText = instructions.querySelector('.instruction-text');
    const newContent = prompt("Edit the instructions:", instructionText.innerHTML);
    
    if (newContent) {
        instructionText.innerHTML = newContent;
    }
}

function deleteInstruction() {
    if (confirm("Are you sure you want to delete the instructions?")) {
        document.querySelector('.instructions').remove();
    }
}

function editQuestion(index) {
    const questionContainer = document.querySelector(`.question-container:nth-child(${index})`);
    const questionText = questionContainer.querySelector('.question');
    const newContent = prompt("Edit the question:", questionText.innerHTML);
    
    if (newContent) {
        questionText.innerHTML = newContent;
    }
}

function deleteQuestion(index) {
    if (confirm(`Are you sure you want to delete question ${index}?`)) {
        document.querySelector(`.question-container:nth-child(${index})`).remove();
    }
}

function deleteComment() {
    const commentSection = document.querySelector('.comment-section');
    if (confirm("Are you sure you want to delete your comment section?")) {
        commentSection.remove(); // Remove the entire comment section
    }
}

let questionCount = 9; // Initialize question count to start at 9 (or adjust as needed)

function addQuestion() {
    console.log("addQuestion function called"); // Debugging output

    // Get the form where questions are added
    const form = document.getElementById('ratingForm');
    if (!form) {
        console.error("Form with ID 'ratingForm' not found.");
        return;
    }

    console.log("Form found, proceeding to add question"); // Debugging output

    // Increment question count for the new question index
    questionCount++;

    // Create a new question container div
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');

    // Set the inner HTML for the new question container
    questionContainer.innerHTML = `
        <hr class="question-separator">
        <div class="question">${questionCount}. New Question <span style="color: red;">*</span></div>
        <div class="rating-scale">
            <button class="rating-button" type="button" onclick="selectRating(this, 'q${questionCount}')">3</button>
            <button class="rating-button" type="button" onclick="selectRating(this, 'q${questionCount}')">4</button>
            <button class="rating-button" type="button" onclick="selectRating(this, 'q${questionCount}')">5</button>
            <button class="rating-button" type="button" onclick="selectRating(this, 'q${questionCount}')">6</button>
            <button class="rating-button" type="button" onclick="selectRating(this, 'q${questionCount}')">7</button>
            <button class="rating-button no" type="button" onclick="selectRating(this, 'q${questionCount}')">NO*</button>
        </div>
        <div class="questions-buttons">
            <button class="icon-button edit-button" onclick="editQuestion(${questionCount})"><i class="fas fa-edit"></i></button>
            <button class="icon-button delete-button" onclick="deleteQuestion(${questionCount})"><i class="fas fa-trash"></i></button>
        </div>
    `;

    // Append the new question container to the form
    form.appendChild(questionContainer);

    console.log("New question added successfully"); // Debugging output
}
