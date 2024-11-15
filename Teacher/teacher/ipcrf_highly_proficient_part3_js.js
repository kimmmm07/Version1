// Container for the entire section
const container = document.querySelector('.container');

// Functional Competencies Section
const functionalCompetencies = container.querySelector('.functional-competencies');
const fcStrengthsSection = functionalCompetencies.querySelector('#fcStrengths');
const fcDevelopmentNeedsSection = functionalCompetencies.querySelector('#fcDevelopmentNeeds');

// Strengths and Development Needs in Functional Competencies
const fcStrengthsList = fcStrengthsSection.querySelector('ul');
const fcDevelopmentNeedsList = fcDevelopmentNeedsSection.querySelector('ul');

// Action Plan for Functional Competencies
const actionPlanFc = container.querySelector('.action-plan');
const learningObjectivesFc = actionPlanFc.querySelector('#learning-objectives');
const interventionFc = actionPlanFc.querySelector('#intervention');
const timelinessFc = actionPlanFc.querySelector('#timeliness');
const resourcesNeedsFc = actionPlanFc.querySelector('#resources-needs');

// Behavioral Competencies Section
const behavioralCompetencies = container.querySelector('.behavioral-competencies');
const bcStrengthsSection = behavioralCompetencies.querySelector('#bcStrengths');
const bcDevelopmentNeedsSection = behavioralCompetencies.querySelector('#bcDevelopmentNeeds');

// Strengths and Development Needs in Behavioral Competencies
const bcStrengthsList = bcStrengthsSection.querySelector('ul');
const bcDevelopmentNeedsList = bcDevelopmentNeedsSection.querySelector('ul');

// Action Plan for Behavioral Competencies
const actionPlanBc = container.querySelector('.action-plan');
const learningObjectivesBc = actionPlanBc.querySelector('#learning-objectives');
const interventionBc = actionPlanBc.querySelector('#intervention');
const timelinessBc = actionPlanBc.querySelector('#timeliness');
const resourcesNeedsBc = actionPlanBc.querySelector('#resources-needs');

// Buttons Section
const buttonsContainer = container.querySelector('.buttons-container');
const backButton = buttonsContainer.querySelector('.back-btn');
const proceedButton = buttonsContainer.querySelector('.proceed-btn');



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

