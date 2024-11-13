
let ipcrf_content = undefined;
// TODO : REMOVE THE 4 , 5 WHEN THE LOGIC IN FRONT END IS FIX 
let self_management_selected = [4, 5];
let professional_ethics_selected = [4, 5];
let results_focus_selected = [4, 5];
let teamwork_selected = [4, 5];
let service_orientation_selected = [4, 5];
let innovation_selected = [4, 5];


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
        } else {
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
        content['1']["Selected"] = self_management_selected;
        content['2']["Selected"] = professional_ethics_selected;
        content['3']["Selected"] = results_focus_selected;
        content['4']["Selected"] = teamwork_selected;
        content['5']["Selected"] = service_orientation_selected;
        content['6']["Selected"] = innovation_selected;
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
        } else {
            console.log("Error Data : ", data);
            // alert("Login Failed.")
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}
