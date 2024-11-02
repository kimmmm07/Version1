// Function to handle the logic for each competency
function evaluateCompetency(formId, competencyName, threshold) {
    const form = document.getElementById(formId);
    const checkedItems = form.querySelectorAll('input[type="checkbox"]:checked').length;
    
    // Check if the competency should be added to Strengths or Development Needs
    if (checkedItems >= threshold) {
        // Add to Strengths
        addCompetencyToSection('strengths-list', competencyName);
    } else {
        // Add to Development Needs
        addCompetencyToSection('development-needs-list', competencyName);
    }
}

// Function to add competency to a specific section
function addCompetencyToSection(sectionId, competencyName) {
    const section = document.getElementById(sectionId);
    const listItem = document.createElement('li');
    listItem.textContent = competencyName;
    section.appendChild(listItem);
}

// Function to evaluate all competencies when the page loads
function evaluateAllCompetencies() {
    // Evaluate each competency, with different thresholds
    evaluateCompetency('self-management-form', 'SELF MANAGEMENT', 2); // Threshold of 2 for strengths
    evaluateCompetency('professionalism-ethics-form', 'PROFESSIONALISM AND ETHICS', 2); // Threshold of 2 for strengths
    evaluateCompetency('results-focus-form', 'RESULT FOCUS', 2); // Threshold of 2 for strengths
    evaluateCompetency('teamwork-form', 'TEAMWORK', 2); // Threshold of 2 for strengths
    evaluateCompetency('service-orientation-form', 'SERVICE ORIENTATION', 2); // Threshold of 2 for strengths
    evaluateCompetency('innovation-form', 'INNOVATION', 2); // Threshold of 2 for strengths
}

// Run the evaluation when the page loads
window.onload = function() {
    evaluateAllCompetencies();
};

