// KRA 1: Content Knowledge and Pedagogy
const efficiency1_5 = document.getElementById('Efficiency1_5');
const efficiency1_3 = document.getElementById('Efficiency1_3');
const efficiency1_1 = document.getElementById('Efficiency1_1');

const efficiency2_5 = document.getElementById('Efficiency2_5');
const efficiency2_3 = document.getElementById('Efficiency2_3');
const efficiency2_1 = document.getElementById('Efficiency2_1');

const efficiency3_5 = document.getElementById('Efficiency3_5');
const efficiency3_3 = document.getElementById('Efficiency3_3');
const efficiency3_1 = document.getElementById('Efficiency3_1');

const efficiency4_5 = document.getElementById('Efficiency4_5');
const efficiency4_3 = document.getElementById('Efficiency4_3');
const efficiency4_1 = document.getElementById('Efficiency4_1');

// KRA 2: Learning Environment & Diversity of Learners
const efficiency5_5 = document.getElementById('Efficiency5_5');
const efficiency5_3 = document.getElementById('Efficiency5_3');
const efficiency5_1 = document.getElementById('Efficiency5_1');

const efficiency6_5 = document.getElementById('Efficiency6_5');
const efficiency6_3 = document.getElementById('Efficiency6_3');
const efficiency6_1 = document.getElementById('Efficiency6_1');

const efficiency7_5 = document.getElementById('Efficiency7_5');
const efficiency7_3 = document.getElementById('Efficiency7_3');
const efficiency7_1 = document.getElementById('Efficiency7_1');

const efficiency8_5 = document.getElementById('Efficiency8_5');
const efficiency8_3 = document.getElementById('Efficiency8_3');
const efficiency8_1 = document.getElementById('Efficiency8_1');

// KRA 3: Curriculum and Planning & Assessment and Reporting
const quality9_5 = document.getElementById('Quality9_5');
const quality9_4 = document.getElementById('Quality9_4');
const quality9_3 = document.getElementById('Quality9_3');
const quality9_2 = document.getElementById('Quality9_2');
const quality9_1 = document.getElementById('Quality9_1');

const efficiency9_5 = document.getElementById('Efficiency9_5');
const efficiency9_4 = document.getElementById('Efficiency9_4');
const efficiency9_3 = document.getElementById('Efficiency9_3');
const efficiency9_2 = document.getElementById('Efficiency9_2');
const efficiency9_1 = document.getElementById('Efficiency9_1');

// KRA 4: Community Linkages and Professional Engagement & Personal Growth and Professional Development
const quality12_5 = document.getElementById('Quality12_5');
const quality12_4 = document.getElementById('Quality12_4');
const quality12_3 = document.getElementById('Quality12_3');
const quality12_2 = document.getElementById('Quality12_2');
const quality12_1 = document.getElementById('Quality12_1');

const timeliness12_5 = document.getElementById('Timeliness12_5');
const timeliness12_4 = document.getElementById('Timeliness12_4');
const timeliness12_3 = document.getElementById('Timeliness12_3');
const timeliness12_2 = document.getElementById('Timeliness12_2');
const timeliness12_1 = document.getElementById('Timeliness12_1');

// KRA 3: Utilized assessment data
const efficiency10_5 = document.getElementById('Efficiency10_5');
const efficiency10_3 = document.getElementById('Efficiency10_3');
const efficiency10_1 = document.getElementById('Efficiency10_1');


const quality11_5 = document.getElementById('Quality11_5');
const quality11_4 = document.getElementById('Quality11_4');
const quality11_3 = document.getElementById('Quality11_3');
const quality11_2 = document.getElementById('Quality11_2');
const quality11_1 = document.getElementById('Quality11_1');

const timeliness11_5 = document.getElementById('Timeliness11_5');
const timeliness11_4 = document.getElementById('Timeliness11_4');
const timeliness11_3 = document.getElementById('Timeliness11_3');
const timeliness11_2 = document.getElementById('Timeliness11_2');
const timeliness11_1 = document.getElementById('Timeliness11_1');

// KRA 4: Participated in professional networks
const quality13_5 = document.getElementById('Quality13_5');
const quality13_4 = document.getElementById('Quality13_4');
const quality13_3 = document.getElementById('Quality13_3');
const quality13_2 = document.getElementById('Quality13_2');
const quality13_1 = document.getElementById('Quality13_1');

const timeliness13_5 = document.getElementById('Timeliness13_5');
const timeliness13_4 = document.getElementById('Timeliness13_4');
const timeliness13_3 = document.getElementById('Timeliness13_3');
const timeliness13_2 = document.getElementById('Timeliness13_2');
const timeliness13_1 = document.getElementById('Timeliness13_1');

// KRA 4: Developed personal improvement plan
const quality14_5 = document.getElementById('Quality14_5');
const quality14_4 = document.getElementById('Quality14_4');
const quality14_3 = document.getElementById('Quality14_3');
const quality14_2 = document.getElementById('Quality14_2');
const quality14_1 = document.getElementById('Quality14_1');

const efficiency14_5 = document.getElementById('Efficiency14_5');
const efficiency14_4 = document.getElementById('Efficiency14_4');
const efficiency14_3 = document.getElementById('Efficiency14_3');
const efficiency14_2 = document.getElementById('Efficiency14_2');
const efficiency14_1 = document.getElementById('Efficiency14_1');

const timeliness14_5 = document.getElementById('Timeliness14_5');
const timeliness14_4 = document.getElementById('Timeliness14_4');
const timeliness14_3 = document.getElementById('Timeliness14_3');
const timeliness14_2 = document.getElementById('Timeliness14_2');
const timeliness14_1 = document.getElementById('Timeliness14_1');


// PLUS FACTOR

// Quality
const quality15_5 = document.getElementById('Quality15_5');
const quality15_4 = document.getElementById('Quality15_4');
const quality15_3 = document.getElementById('Quality15_3');
const quality15_2 = document.getElementById('Quality15_2');
const quality15_1 = document.getElementById('Quality15_1');

// Efficiency
const efficiency15_5 = document.getElementById('Efficiency15_5');
const efficiency15_4 = document.getElementById('Efficiency15_4');
const efficiency15_3 = document.getElementById('Efficiency15_3');
const efficiency15_2 = document.getElementById('Efficiency15_2');
const efficiency15_1 = document.getElementById('Efficiency15_1');

// Timeliness
const timeliness15_5 = document.getElementById('Timeliness15_5');
const timeliness15_4 = document.getElementById('Timeliness15_4');
const timeliness15_3 = document.getElementById('Timeliness15_3');
const timeliness15_2 = document.getElementById('Timeliness15_2');
const timeliness15_1 = document.getElementById('Timeliness15_1');

// Average Score Section
const rating = document.getElementById('rating');

// Buttons
const backButton = document.querySelector('.back-btn');
const saveButton = document.getElementById('saveButton');

let kra1 = 0;
let kra2 = 0;
let kra3 = 0;
let kra4 = 0;
let plus_factor_main = 0;
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
    const efficiency2 = getValue('efficiency2');
    const efficiency3 = getValue('efficiency3');
    const efficiency4 = getValue('efficiency4');
    const efficiency5 = getValue('efficiency5');
    const efficiency6 = getValue('efficiency6');
    const efficiency7 = getValue('efficiency7');
    const efficiency8 = getValue('efficiency8');
    const quality9 = getValue('quality9');
    const efficiency9 = getValue('efficiency9');
    const efficiency10 = getValue('efficiency10');
    const quality11 = getValue('quality11');
    const timeliness11 = getValue('timeliness11');
    const quality12 = getValue('quality12');
    const timeliness12 = getValue('timeliness12');
    const quality13 = getValue('quality13');
    const timeliness13 = getValue('timeliness13');
    const quality14 = getValue('quality14');
    const timeliness14 = getValue('timeliness14');
    const efficiency14 = getValue('efficiency14');
    const quality15 = getValue('quality15');
    const timeliness15 = getValue('timeliness15');
    const efficiency15 = getValue('efficiency15');


    kra1 = ((efficiency1 + 1) / 2) * 0.07 +
    ((efficiency2 + 1) / 2) * 0.07 +
    ((efficiency3 + 1) / 2) * 0.07 +
    ((efficiency4 + 1) / 2) * 0.07;

    kra2 = ((efficiency5 + 1) / 2 ) * 0.07 +
    ((efficiency6 + 1) / 2) * 0.07 +
    ((efficiency7 + 1) / 2) * 0.07 +
    ((efficiency8 + 1) / 2) * 0.07 ;

    kra3 =  ((quality9 + efficiency9) / 2) * 0.07 +
    ((efficiency10 + 1) / 2) * 0.07 +
    ((quality11 + timeliness11) / 2) * 0.07 ;

    kra4 = ((quality12 + timeliness12) / 2) * 0.07 +
    ((quality13 + timeliness13) / 2) * 0.07 +
    ((efficiency14 + quality14 + timeliness14) / 3) * 0.07;

    plus_factor_main = ((quality15 + timeliness15 + efficiency15) / 3) * 0.02;

    // Total score for main KRAs
    let totalKraScore = 
        ((efficiency1 + 5) / 2) * 0.07 +
        ((efficiency2 + 5) / 2) * 0.07 +
        ((efficiency3 + 5) / 2) * 0.07 +
        ((efficiency4 + 5) / 2) * 0.07 +
        ((efficiency5 + 5) / 2 ) * 0.07 +
        ((efficiency6 + 5) / 2) * 0.07 +
        ((efficiency7 + 5) / 2) * 0.07 +
        ((efficiency8 + 5) / 2) * 0.07 +
        ((quality9 + efficiency9) / 2) * 0.07 +
        ((efficiency10 + 5) / 2) * 0.07 +
        ((quality11 + timeliness11) / 2) * 0.07 +
        ((quality12 + timeliness12) / 2) * 0.07 +
        ((quality13 + timeliness13) / 2) * 0.07 +
        ((efficiency14 + quality14 + timeliness14) / 3) * 0.07;


    // Total score for the Plus Factor KRA (KRA 15)
    let plusFactorScore = quality15 + timeliness15 + efficiency15;

    // Average Score calculation
    averageScore = totalKraScore; // TODO : IPASA TO SA BACKEND

    // Plus Factor calculation
    plusFactor = (plusFactorScore / 3) * 0.02; // TODO : IPASA TO SA BACKEND

    // Final Total Score
    totalScore = averageScore + plusFactor; // TODO : IPASA TO SA BACKEND

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






function getRateEfficiency10(){
    if (efficiency10_5.checked) {
        return 5;
    } else if (efficiency10_3.checked) {
        return 3;
    } else if (efficiency10_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}


function getRateEfficiency1() {
    if (efficiency1_5.checked) {
        return 5;
    } else if (efficiency1_3.checked) {
        return 3;
    } else if (efficiency1_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency2() {
    if (efficiency2_5.checked) {
        return 5;
    } else if (efficiency2_3.checked) {
        return 3;
    } else if (efficiency2_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency3() {
    if (efficiency3_5.checked) {
        return 5;
    } else if (efficiency3_3.checked) {
        return 3;
    } else if (efficiency3_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency4() {
    if (efficiency4_5.checked) {
        return 5;
    } else if (efficiency4_3.checked) {
        return 3;
    } else if (efficiency4_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency5() {
    if (efficiency5_5.checked) {
        return 5;
    } else if (efficiency5_3.checked) {
        return 3;
    } else if (efficiency5_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency6() {
    if (efficiency6_5.checked) {
        return 5;
    } else if (efficiency6_3.checked) {
        return 3;
    } else if (efficiency6_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency7() {
    if (efficiency7_5.checked) {
        return 5;
    } else if (efficiency7_3.checked) {
        return 3;
    } else if (efficiency7_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency8() {
    if (efficiency8_5.checked) {
        return 5;
    } else if (efficiency8_3.checked) {
        return 3;
    } else if (efficiency8_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateQuality9() {
    if (quality9_5.checked) {
        return 5;
    } else if (quality9_4.checked) {
        return 4;
    } else if (quality9_3.checked) {
        return 3;
    } else if (quality9_2.checked) {
        return 2;
    } else if (quality9_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency9() {
    if (efficiency9_5.checked) {
        return 5;
    } else if (efficiency9_4.checked) {
        return 4;
    } else if (efficiency9_3.checked) {
        return 3;
    } else if (efficiency9_2.checked) {
        return 2;
    } else if (efficiency9_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateQuality12() {
    if (quality12_5.checked) {
        return 5;
    } else if (quality12_4.checked) {
        return 4;
    } else if (quality12_3.checked) {
        return 3;
    } else if (quality12_2.checked) {
        return 2;
    } else if (quality12_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateTimeliness12() {
    if (timeliness12_5.checked) {
        return 5;
    } else if (timeliness12_4.checked) {
        return 4;
    } else if (timeliness12_3.checked) {
        return 3;
    } else if (timeliness12_2.checked) {
        return 2;
    } else if (timeliness12_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateQuality11() {
    if (quality11_5.checked) {
        return 5;
    } else if (quality11_4.checked) {
        return 4;
    } else if (quality11_3.checked) {
        return 3;
    } else if (quality11_2.checked) {
        return 2;
    } else if (quality11_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateTimeliness11() {
    if (timeliness11_5.checked) {
        return 5;
    } else if (timeliness11_4.checked) {
        return 4;
    } else if (timeliness11_3.checked) {
        return 3;
    } else if (timeliness11_2.checked) {
        return 2;
    } else if (timeliness11_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}


function getRateQuality13() {
    if (quality13_5.checked) {
        return 5;
    } else if (quality13_4.checked) {
        return 4;
    } else if (quality13_3.checked) {
        return 3;
    } else if (quality13_2.checked) {
        return 2;
    } else if (quality13_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateTimeliness13() {
    if (timeliness13_5.checked) {
        return 5;
    } else if (timeliness13_4.checked) {
        return 4;
    } else if (timeliness13_3.checked) {
        return 3;
    } else if (timeliness13_2.checked) {
        return 2;
    } else if (timeliness13_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateQuality14() {
    if (quality14_5.checked) {
        return 5;
    } else if (quality14_4.checked) {
        return 4;
    } else if (quality14_3.checked) {
        return 3;
    } else if (quality14_2.checked) {
        return 2;
    } else if (quality14_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency14() {
    if (efficiency14_5.checked) {
        return 5;
    } else if (efficiency14_4.checked) {
        return 4;
    } else if (efficiency14_3.checked) {
        return 3;
    } else if (efficiency14_2.checked) {
        return 2;
    } else if (efficiency14_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateTimeliness14() {
    if (timeliness14_5.checked) {
        return 5;
    } else if (timeliness14_4.checked) {
        return 4;
    } else if (timeliness14_3.checked) {
        return 3;
    } else if (timeliness14_2.checked) {
        return 2;
    } else if (timeliness14_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}


function getRatetimeliness15(){
    if (timeliness15_5.checked) {
        return 5;
    } else if (timeliness15_4.checked) {
        return 4;
    } else if (timeliness15_3.checked) {
        return 3;
    } else if (timeliness15_2.checked) {
        return 2;
    } else if (timeliness15_1.checked) {
        return 1;
    } else {
        return 0;
    }
}

function getRateEfficiency15() {
    if (efficiency15_5.checked) {
        return 5;
    } else if (efficiency15_4.checked) {
        return 4;
    } else if (efficiency15_3.checked) {
        return 3;
    } else if (efficiency15_2.checked) {
        return 2;
    } else if (efficiency15_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateQuality15() {
    if (quality15_5.checked) {
        return 5;
    } else if (quality15_4.checked) {
        return 4;
    } else if (quality15_3.checked) {
        return 3;
    } else if (quality15_2.checked) {
        return 2;
    } else if (quality15_1.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
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
            console.log('ipcrf :', ipcrf_content['ipcrf']['content_for_teacher']);
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
    try {

            
        let teacher_content = ipcrf_content['ipcrf']['content_for_teacher']
        
        teacher_content['Content Knowledge and Pedagogy']['1']['EFFICIENCY']['Rate'] = getRateEfficiency1();
        teacher_content['Content Knowledge and Pedagogy']['2']['EFFICIENCY']['Rate'] = getRateEfficiency2();
        teacher_content['Content Knowledge and Pedagogy']['3']['EFFICIENCY']['Rate'] = getRateEfficiency3();
        teacher_content['Content Knowledge and Pedagogy']['4']['EFFICIENCY']['Rate'] = getRateEfficiency4();

        teacher_content['Learning Environment & Diversity of Learners']['5']['EFFICIENCY']['Rate'] = getRateEfficiency5();
        teacher_content['Learning Environment & Diversity of Learners']['6']['EFFICIENCY']['Rate'] = getRateEfficiency6();
        teacher_content['Learning Environment & Diversity of Learners']['7']['EFFICIENCY']['Rate'] = getRateEfficiency7();
        teacher_content['Learning Environment & Diversity of Learners']['8']['EFFICIENCY']['Rate'] = getRateEfficiency8();

        teacher_content['Curriculum and Planning & Assessment and Reporting']['9']['EFFICIENCY']['Rate'] = getRateEfficiency9();
        teacher_content['Curriculum and Planning & Assessment and Reporting']['9']['QUALITY']['Rate'] = getRateQuality9();
        
        teacher_content['Curriculum and Planning & Assessment and Reporting']['10']['EFFICIENCY']['Rate'] = getRateEfficiency10();

        teacher_content['Curriculum and Planning & Assessment and Reporting']['11']['QUALITY']['Rate'] = getRateQuality11();
        teacher_content['Curriculum and Planning & Assessment and Reporting']['11']['TIMELINES']['Rate'] = getRateTimeliness11();

        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['12']['QUALITY']['Rate'] = getRateQuality12();
        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['12']['TIMELINES']['Rate'] = getRateTimeliness12();

        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['13']['QUALITY']['Rate'] = getRateQuality13();
        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['13']['TIMELINES']['Rate'] = getRateTimeliness13();

        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['14']['QUALITY']['Rate'] = getRateQuality14();
        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['14']['TIMELINES']['Rate'] = getRateTimeliness14();
        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['14']['EFFICIENCY']['Rate'] = getRateEfficiency14();

        teacher_content['PLUS FACTOR']['15']['EFFICIENCY']['Rate'] = getRateEfficiency15();
        teacher_content['PLUS FACTOR']['15']['TIMELINES']['Rate'] = getRatetimeliness15();
        teacher_content['PLUS FACTOR']['15']['QUALITY']['Rate'] = getRateQuality15();


        const formData = new FormData();
        // formData.append('employee_id', employeeId); 
        // formData.append('password', password); 

        formData.append('ipcrf_id', ipcrf_content['ipcrf']['connection_to_other']); // TODO: Get from IPCRF
        formData.append('average_score', averageScore); 
        formData.append('plus_factor', plusFactor); 
        formData.append('total_score', totalScore);
        formData.append('content', JSON.stringify(teacher_content));
        formData.append('plus_factor_main', plus_factor_main);
        formData.append('kra1', kra1);
        formData.append('kra2', kra2);
        formData.append('kra3', kra3);
        formData.append('kra4', kra4);



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
            location.href = 'teacher_choices_form.html';
        } else {
            console.log("Error Data : ", data);
            // alert("Login Failed.")
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


