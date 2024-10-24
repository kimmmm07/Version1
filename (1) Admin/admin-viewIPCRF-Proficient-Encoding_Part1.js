function toggleEditMode(elementSelector, buttonSelector) {
    const element = document.querySelector(elementSelector);
    const button = document.querySelector(buttonSelector);

    // Toggle the contentEditable attribute
    element.contentEditable = element.contentEditable === "false" ? "true" : "false";

    // Switch between edit and save modes
    if (element.contentEditable === "true") {
        button.innerHTML = '<i class="fas fa-save"></i>';
        button.setAttribute("onclick", `saveChanges('${elementSelector}', '${buttonSelector}')`);
    } else {
        button.innerHTML = '<i class="fas fa-edit"></i>';
        button.setAttribute("onclick", `toggleEditMode('${elementSelector}', '${buttonSelector}')`);
    }
}

function saveChanges(elementSelector, buttonSelector) {
    const element = document.querySelector(elementSelector);
    element.contentEditable = "false"; // Disable edit mode

    // Restore the edit button
    const button = document.querySelector(buttonSelector);
    button.innerHTML = '<i class="fas fa-edit"></i>';
    button.setAttribute("onclick", `toggleEditMode('${elementSelector}', '${buttonSelector}')`);
}
