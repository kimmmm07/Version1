// Function to handle the logic for each competency
function evaluateCompetency(competencyCount, competencyName, threshold) {
    if (competencyCount >= threshold) {
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
    const competencies = JSON.parse(localStorage.getItem('competencies'));

    // Evaluate each competency, with different thresholds
    evaluateCompetency(competencies.selfManagement, 'SELF MANAGEMENT', 2);
    evaluateCompetency(competencies.professionalismEthics, 'PROFESSIONALISM AND ETHICS', 2);
    evaluateCompetency(competencies.resultsFocus, 'RESULT FOCUS', 2);
    evaluateCompetency(competencies.teamwork, 'TEAMWORK', 2);
    evaluateCompetency(competencies.serviceOrientation, 'SERVICE ORIENTATION', 2);
    evaluateCompetency(competencies.innovation, 'INNOVATION', 2);
}

// Run the evaluation when the page loads
window.onload = function() {
    evaluateAllCompetencies();
};