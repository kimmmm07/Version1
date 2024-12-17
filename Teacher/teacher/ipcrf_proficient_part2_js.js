// Self-Management Objective Form
const selfManagementForm = document.getElementById('self-management-form');
const obj1Checkboxes = document.querySelectorAll('#Obj1');

// Professionalism and Ethics Objective Form
const professionalismEthicsForm = document.getElementById('professionalism-ethics-form');
const obj2Checkboxes = document.querySelectorAll('#Obj2');

// Results Focus Objective Form
const resultsFocusForm = document.getElementById('results-focus-form');
const obj3Checkboxes = document.querySelectorAll('#Obj3');

// Teamwork Objective Form
const teamworkForm = document.getElementById('teamwork-form');
const obj4Checkboxes = document.querySelectorAll('#Obj4');

// Service Orientation Objective Form
const serviceOrientationForm = document.getElementById('service-orientation-form');
const obj5Checkboxes = document.querySelectorAll('#Obj5');

// Innovation Objective Form
const innovationForm = document.getElementById('innovation-form');
const obj6Checkboxes = document.querySelectorAll('#Obj6');

// Buttons
const backButton = document.querySelector('.back-btn');
const proceedButton = document.querySelector('.proceed-btn');

 
// Function to get values of selected checkboxes
function getSelectedCheckboxValues(element) {
    const selectedValues = [];
    element.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });
    return selectedValues;
}

function checkTheBoxValues(element , value) {
    element.forEach(checkbox => {
        if (checkbox.value == value) {
            checkbox.checked = true;
        }
    });
}

setInterval(function() {
    employee_id && localStorage.setItem(employee_id + 'self_management_selected', JSON.stringify(getSelectedCheckboxValues(obj1Checkboxes)));
    employee_id && localStorage.setItem(employee_id + 'professional_ethics_selected', JSON.stringify(getSelectedCheckboxValues(obj2Checkboxes)));
    employee_id && localStorage.setItem(employee_id + 'results_focus_selected', JSON.stringify(getSelectedCheckboxValues(obj3Checkboxes)));
    employee_id && localStorage.setItem(employee_id + 'teamwork_selected', JSON.stringify(getSelectedCheckboxValues(obj4Checkboxes)));
    employee_id && localStorage.setItem(employee_id + 'service_orientation_selected', JSON.stringify(getSelectedCheckboxValues(obj5Checkboxes)));
    employee_id && localStorage.setItem(employee_id + 'innovation_selected', JSON.stringify(getSelectedCheckboxValues(obj6Checkboxes)));
}, 100);


// Example usage
// const selectedValues = getSelectedCheckboxValues();
// console.log(selectedValues); // Logs an array of selected checkbox values



let ipcrf_content = undefined;
// TODO : REMOVE THE 4 , 5 WHEN THE LOGIC IN FRONT END IS FIX 
let self_management_selected = [];
let professional_ethics_selected = [];
let results_focus_selected = [];
let teamwork_selected = [];
let service_orientation_selected = [];
let innovation_selected = [];


function saveCompetencies() {
    const competencies = {
        selfManagement: document.querySelectorAll('#self-management-form input[type="checkbox"]:checked').length,
        professionalismEthics: document.querySelectorAll('#professionalism-ethics-form input[type="checkbox"]:checked').length,
        resultsFocus: document.querySelectorAll('#results-focus-form input[type="checkbox"]:checked').length,
        teamwork: document.querySelectorAll('#teamwork-form input[type="checkbox"]:checked').length,
        serviceOrientation: document.querySelectorAll('#service-orientation-form input[type="checkbox"]:checked').length,
        innovation: document.querySelectorAll('#innovation-form input[type="checkbox"]:checked').length
    };

    updateIPCRF2(); // update IPCRF
    // Store data in localStorage
    localStorage.setItem('competencies', JSON.stringify(competencies));
    // console.log( JSON.stringify(competencies) );
    // Redirect to the next page
    // window.location.href = 'ipcrf_proficient_part3.html';
}

let employee_id = null;

async function getIPCRF(){
    const formData = new FormData();
    // formData.append('employee_id', employeeId); 
    // formData.append('password', password); 

    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/ipcrf/part2/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
            // body: formData,
        });

        ipcrf_content = await response.json();
        if (response.ok) {
            console.log("Success Data : ", ipcrf_content);
            employee_id = ipcrf_content.ipcrf.employee_id;

            employee_id && autofill()
        } else {
            window.location.href = '../../get-started.html'; 
            console.log("Error Data : ", ipcrf_content);
            // alert("Login Failed.")
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getIPCRF();

async function updateIPCRF2(){
    const formData = new FormData();
    // formData.append('employee_id', employeeId); 
    // formData.append('password', password); 

    try {
        let content = ipcrf_content['ipcrf']['content_for_teacher'];
        content['1']["Selected"] = getSelectedCheckboxValues(obj1Checkboxes);
        content['2']["Selected"] = getSelectedCheckboxValues(obj2Checkboxes);
        content['3']["Selected"] = getSelectedCheckboxValues(obj3Checkboxes);
        content['4']["Selected"] = getSelectedCheckboxValues(obj4Checkboxes);
        content['5']["Selected"] = getSelectedCheckboxValues(obj5Checkboxes);
        content['6']["Selected"] = getSelectedCheckboxValues(obj6Checkboxes);
        formData.append('ipcrf_id', ipcrf_content['ipcrf']['connection_to_other']); // TODO: Get from IPCRF
        formData.append('content', JSON.stringify(content) );
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/update/ipcrf/part2/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },  
            credentials: 'include',
            body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data);  
            alert("Form submitted successfully!");
            setTimeout(() => {
                location.href = 'teacher_choices_form.html';
            }, 2000);
        } else {
            console.log("Error Data : ", data);
            // alert("Login Failed.")
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}



function autofill(){
    self_management_selected = JSON.parse(localStorage.getItem(employee_id + 'self_management_selected'));
    professional_ethics_selected = JSON.parse(localStorage.getItem(employee_id + 'professional_ethics_selected'));
    results_focus_selected = JSON.parse(localStorage.getItem(employee_id + 'results_focus_selected'));
    teamwork_selected = JSON.parse(localStorage.getItem(employee_id + 'teamwork_selected'));
    service_orientation_selected = JSON.parse(localStorage.getItem(employee_id + 'service_orientation_selected'));
    innovation_selected = JSON.parse(localStorage.getItem(employee_id + 'innovation_selected'));

    console.log(self_management_selected)
    if(self_management_selected){
        self_management_selected.forEach(item => {
            checkTheBoxValues(obj1Checkboxes, item);
        });
    }

    if(professional_ethics_selected){
        professional_ethics_selected.forEach(item => {
            checkTheBoxValues(obj2Checkboxes, item);
        });
    }
    
    if(results_focus_selected){
        results_focus_selected.forEach(item => {
            checkTheBoxValues(obj3Checkboxes, item);
        }); 
    }

    if(teamwork_selected){
        teamwork_selected.forEach(item => {
            checkTheBoxValues(obj4Checkboxes, item);
        });
    }

    if(service_orientation_selected){
        service_orientation_selected.forEach(item => {
            checkTheBoxValues(obj5Checkboxes, item);
        });
    }

    if(innovation_selected){
        innovation_selected.forEach(item => {   
            checkTheBoxValues(obj6Checkboxes, item);
        });
    }
}