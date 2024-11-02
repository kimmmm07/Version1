function saveCompetencies() {
    const competencies = {
        selfManagement: document.querySelectorAll('#self-management-form input[type="checkbox"]:checked').length,
        professionalismEthics: document.querySelectorAll('#professionalism-ethics-form input[type="checkbox"]:checked').length,
        resultsFocus: document.querySelectorAll('#results-focus-form input[type="checkbox"]:checked').length,
        teamwork: document.querySelectorAll('#teamwork-form input[type="checkbox"]:checked').length,
        serviceOrientation: document.querySelectorAll('#service-orientation-form input[type="checkbox"]:checked').length,
        innovation: document.querySelectorAll('#innovation-form input[type="checkbox"]:checked').length
    };

    // Store data in localStorage
    localStorage.setItem('competencies', JSON.stringify(competencies));

    // Redirect to the next page
    window.location.href = 'ipcrf_proficient_part3.html';
}