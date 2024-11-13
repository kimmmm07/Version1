
let averageScore = 0;
let plusFactor = 0;
let totalScore = 0;
let ipcrf_content = undefined;



document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('change', calculateAverageScore);
});

function calculateAverageScore() {
    // Capture values from all KRAs
    const efficiency1 = getValue('efficiency1');
    const efficiency3 = getValue('efficiency3');
    const efficiency4 = getValue('efficiency4');
    const efficiency5 = getValue('efficiency5');
    const efficiency6 = getValue('efficiency6');
    const efficiency7 = getValue('efficiency7');
    const quality2 = getValue('quality2');
    const timeliness2 = getValue('timeliness2');
    const quality8 = getValue('quality8');
    const quality9 = getValue('quality9');
    const timeliness9 = getValue('timeliness9');
    const efficiency10 = getValue('efficiency10');
    const quality11 = getValue('quality11');
    const timeliness11 = getValue('timeliness11');
    const quality12 = getValue('quality12');
    const timeliness12 = getValue('timeliness12');
    const quality13 = getValue('quality13');
    const timeliness13 = getValue('timeliness13');
    const quality14 = getValue('quality14');
    const efficiency14 = getValue('efficiency14');
    const quality15 = getValue('quality15');
    const timeliness15 = getValue('timeliness15');
    const efficiency15 = getValue('efficiency15');

    // Total score for main KRAs
    let totalKraScore = 
        ((efficiency1 + 1) / 2) * 0.07 +     // KRA 1
        ((quality2 + timeliness2) / 2) * 0.07 +  // KRA 2
        ((efficiency3 + 1) / 2) * 0.07 +     // KRA 3
        ((efficiency4 + 1) / 2) * 0.07 +     // KRA 4
        ((efficiency5 + 1) / 2) * 0.07 +     // KRA 5
        ((efficiency6 + 1) / 2) * 0.07 +     // KRA 6
        ((efficiency7 + 1) / 2) * 0.07 +     // KRA 7
        ((quality8 + 1) / 2) * 0.07 +        // KRA 8
        ((quality9 + timeliness9) / 2) * 0.07 +  // KRA 9
        ((efficiency10 + 1) / 2) * 0.07 +    // KRA 10
        ((quality11 + timeliness11) / 2) * 0.07 + // KRA 11
        ((quality12 + timeliness12) / 2) * 0.07 + // KRA 12
        ((quality13 + timeliness13) / 2) * 0.07 + // KRA 13
        ((efficiency14 + quality14) / 2) * 0.07;  // KRA 14



    // Total score for the Plus Factor KRA (KRA 15)
    let plusFactorScore = quality15 + timeliness15 + efficiency15;

    // Average Score calculation
    let averageScore = totalKraScore;

    // Plus Factor calculation
    let plusFactor = (plusFactorScore / 3) * 0.02;

    // Final Total Score
    let totalScore = averageScore + plusFactor;

    // Display the result in the "average-score" label
    document.getElementById('average-score').innerText = totalScore.toFixed(3); // Show three decimal places

    // Determine the adjectival rating based on the average score
    let rating = getRating(totalScore);
    document.getElementById('rating').innerText = rating; // Display the rating
}

// Helper function to retrieve values
function getValue(name) {
    return document.querySelector(`input[name="${name}"]:checked`) ? 
           parseInt(document.querySelector(`input[name="${name}"]:checked`).value) : 0;
}

// Function to get adjectival rating based on average score
function getRating(averageScore) {
    if (averageScore >= 4.500) return "Outstanding";
    if (averageScore >= 3.500) return "Very Satisfactory";
    if (averageScore >= 2.500) return "Satisfactory";
    if (averageScore >= 1.500) return "Unsatisfactory";
    return "Poor"; // below 1.499
}


async function getIPCRF(){
    const formData = new FormData();
    // formData.append('employee_id', employeeId); 
    // formData.append('password', password); 

    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/get/ipcrf/part1/', {
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



async function updateIPCRF1(){
    const formData = new FormData();
    // formData.append('employee_id', employeeId); 
    // formData.append('password', password); 

    formData.append('ipcrf_id', ipcrf_content['ipcrf']['connection_to_other']); // TODO: Get from IPCRF
    formData.append('average_score', averageScore); 
    formData.append('plus_factor', plusFactor); 
    formData.append('total_score', totalScore);
    formData.append('content', JSON.stringify(ipcrf_content['ipcrf']['content_for_teacher']));

    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/school/update/ipcrf/part1/', {
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
