// Objective 1 Variables
const efficiency1Self = document.getElementById("TeacherEfficiency1_5");
const evaluatorEfficiency1 = document.getElementById("EvaluatorEfficiency1_5");

// Objective 2 Variables
const efficiency2Self = document.getElementById("TeacherEfficiency2_5");
const evaluatorEfficiency2 = document.getElementById("EvaluatorEfficiency2_5");

// Objective 3 Variables
const efficiency3Self = document.getElementById("TeacherEfficiency3_5");
const evaluatorEfficiency3 = document.getElementById("EvaluatorEfficiency3_5");

// Objective 4 Variables
const efficiency4Self = document.getElementById("TeacherEfficiency4_5");
const evaluatorEfficiency4 = document.getElementById("EvaluatorEfficiency4_5");

// Objective 5 Variables
const efficiency5Self = document.getElementById("TeacherEfficiency5_5");
const evaluatorEfficiency5 = document.getElementById("EvaluatorEfficiency5_5");

// Objective 6 Variables
const efficiency6Self = document.getElementById("TeacherEfficiency6_5");
const evaluatorEfficiency6 = document.getElementById("EvaluatorEfficiency6_5");

// Objective 7 Variables
const efficiency7Self = document.getElementById("TeacherEfficiency7_5");
const evaluatorEfficiency7 = document.getElementById("EvaluatorEfficiency7_5");

// Objective 8 Variables
const efficiency8Self = document.getElementById("TeacherEfficiency8_5");
const evaluatorEfficiency8 = document.getElementById("EvaluatorEfficiency8_5");

// Objective 9 Variables
const quality9Self = document.getElementById("TeacherQuality9_5");
const evaluatorQuality9 = document.getElementById("EvaluatorQuality9_5");

const efficiency9Self = document.getElementById("TeacherEfficiency9_5");
const evaluatorEfficiency9 = document.getElementById("EvaluatorEfficiency9_5");

// Objective 10 Variables
const efficiency10Self = document.getElementById("TeacherEfficiency10_5");
const evaluatorEfficiency10 = document.getElementById("EvaluatorEfficiency10_5");

// Objective 11 Variables
const quality11Self = document.getElementById("TeacherQuality11_5");
const evaluatorQuality11 = document.getElementById("EvaluatorQuality11_5");

const timeliness11Self = document.getElementById("TeacherTimeliness11_5");
const evaluatorTimeliness11 = document.getElementById("EvaluatorTimeliness11_5");

// Objective 12 Variables
const quality12Self = document.getElementById("TeacherQuality12_5");
const evaluatorQuality12 = document.getElementById("EvaluatorQuality12_5");

const timeliness12Self = document.getElementById("TeacherTimeliness12_5");
const evaluatorTimeliness12 = document.getElementById("EvaluatorTimeliness12_5");

// Objective 13 Variables
const quality13Self = document.getElementById("TeacherQuality13_5");
const evaluatorQuality13 = document.getElementById("EvaluatorQuality13_5");

const timeliness13Self = document.getElementById("TeacherTimeliness13_5");
const evaluatorTimeliness13 = document.getElementById("EvaluatorTimeliness13_5");

// Objective 14 Variables
const quality14Self = document.getElementById("TeacherQuality14_5");
const evaluatorQuality14 = document.getElementById("EvaluatorQuality14_5");

const efficiency14Self = document.getElementById("TeacherEfficiency14_5");
const evaluatorEfficiency14 = document.getElementById("EvaluatorEfficiency14_5");

const timeliness14Self = document.getElementById("TeacherTimeliness14_5");
const evaluatorTimeliness14 = document.getElementById("EvaluatorTimeliness14_5");

// PLUS FACTOR Objective 15 Variables
const quality15Self = document.getElementById("TeacherQuality15_5");
const evaluatorQuality15 = document.getElementById("EvaluatorQuality15_5");

const efficiency15Self = document.getElementById("TeacherEfficiency15_5");
const evaluatorEfficiency15 = document.getElementById("EvaluatorEfficiency15_5");

const timeliness15Self = document.getElementById("TeacherTimeliness15_5");
const evaluatorTimeliness15 = document.getElementById("EvaluatorTimeliness15_5");



// Adjectival Ratings Variables
const teacherAverageScore = document.getElementById("teacher-average-score");
const teacherRating = document.getElementById("teacher-rating");

const evaluatorAverageScore = document.getElementById("evaluator-average-score");
const evaluatorRating = document.getElementById("evaluator-rating");

// const evaluatorRating = document.getElementById('rating');

// document.querySelectorAll('input[type="radio"]').forEach((input) => {
//     input.addEventListener('change', calculateAverageScore);
// });



// Function to get adjectival rating based on average score
function getRating(averageScore) {
    if (averageScore >= 4.500) return "Outstanding";
    if (averageScore >= 3.500) return "Very Satisfactory";
    if (averageScore >= 2.500) return "Satisfactory";
    if (averageScore >= 1.500) return "Unsatisfactory";
    return "Poor"; // below 1.499
}



let ipcrf_content = undefined;

async function getIPCRF(){
    // const formData = new FormData();
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

        const result = await response.json();
        if (response.ok) {
            ipcrf_content = result['ipcrf']
            console.log("Success Data : ", ipcrf_content);



            // Evaluator

            const content1 = ipcrf_content["content_for_evaluator"];
            const e_con1 = content1["Content Knowledge and Pedagogy"];
            const e_con2 = content1["Learning Environment & Diversity of Learners"];
            const e_con3 = content1["Curriculum and Planning & Assessment and Reporting"];
            const e_con4 = content1["Community Linkages and Professional Engagement & Personal Growth and Professional Development"];
            const e_con5 = content1["PLUS FACTOR"];

            // console.log("Content 1 : ", e_con1);
            // console.log("Content 2 : ", e_con2);
            // console.log("Content 3 : ", e_con3);
            // console.log("Content 4 : ", e_con4);
            // console.log("Content 5 : ", e_con5);

            evaluatorEfficiency1.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${e_con1["1"]["EFFICIENCY"]["Rate"]} - ${e_con1["1"]["EFFICIENCY"][e_con1["1"]["EFFICIENCY"]["Rate"]]}`;
            evaluatorEfficiency2.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${e_con1["2"]["EFFICIENCY"]["Rate"]} - ${e_con1["2"]["EFFICIENCY"][e_con1["2"]["EFFICIENCY"]["Rate"]]}`;
            evaluatorEfficiency3.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${e_con1["3"]["EFFICIENCY"]["Rate"]} - ${e_con1["3"]["EFFICIENCY"][e_con1["3"]["EFFICIENCY"]["Rate"]]}`;
            evaluatorEfficiency4.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con1["4"]["EFFICIENCY"]["Rate"]} - ${e_con1["4"]["EFFICIENCY"][e_con1["4"]["EFFICIENCY"]["Rate"]]}`;
            evaluatorEfficiency5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con2["5"]["EFFICIENCY"]["Rate"]} - ${e_con2["5"]["EFFICIENCY"][e_con2["5"]["EFFICIENCY"]["Rate"]]}`;
            evaluatorEfficiency6.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con2["6"]["EFFICIENCY"]["Rate"]} - ${e_con2["6"]["EFFICIENCY"][e_con2["6"]["EFFICIENCY"]["Rate"]]}`;
            evaluatorEfficiency7.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con2["7"]["EFFICIENCY"]["Rate"]} - ${e_con2["7"]["EFFICIENCY"][e_con2["7"]["EFFICIENCY"]["Rate"]]}`;
            evaluatorEfficiency8.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con2["8"]["EFFICIENCY"]["Rate"]} - ${e_con2["8"]["EFFICIENCY"][e_con2["8"]["EFFICIENCY"]["Rate"]]}`;
            evaluatorQuality9.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con3["9"]["QUALITY"]["Rate"]} - ${e_con3["9"]["QUALITY"][e_con3["9"]["QUALITY"]["Rate"]]}`;
            evaluatorEfficiency9.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con3["9"]["EFFICIENCY"]["Rate"]} - ${e_con3["9"]["EFFICIENCY"][e_con3["9"]["EFFICIENCY"]["Rate"]]}`;
            evaluatorEfficiency10.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con3["10"]["EFFICIENCY"]["Rate"]} - ${e_con3["10"]["EFFICIENCY"][e_con3["10"]["EFFICIENCY"]["Rate"]]}`;
            evaluatorQuality11.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con3["11"]["QUALITY"]["Rate"]} - ${e_con3["11"]["QUALITY"][e_con3["11"]["QUALITY"]["Rate"]]}`;
            evaluatorTimeliness11.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con3["11"]["TIMELINES"]["Rate"]} - ${e_con3["11"]["TIMELINES"][e_con3["11"]["TIMELINES"]["Rate"]]}`;
            evaluatorQuality12.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con4["12"]["QUALITY"]["Rate"]} - ${e_con4["12"]["QUALITY"][e_con4["12"]["QUALITY"]["Rate"]]}`;
            evaluatorTimeliness12.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con4["12"]["TIMELINES"]["Rate"]} - ${e_con4["12"]["TIMELINES"][e_con4["12"]["TIMELINES"]["Rate"]]}`;
            evaluatorQuality13.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con4["13"]["QUALITY"]["Rate"]} - ${e_con4["13"]["QUALITY"][e_con4["13"]["QUALITY"]["Rate"]]}`;
            evaluatorTimeliness13.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con4["13"]["TIMELINES"]["Rate"]} - ${e_con4["13"]["TIMELINES"][e_con4["13"]["TIMELINES"]["Rate"]]}`;
            evaluatorQuality14.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con4["14"]["QUALITY"]["Rate"]} - ${e_con4["14"]["QUALITY"][e_con4["14"]["QUALITY"]["Rate"]]}`;
            evaluatorTimeliness14.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con4["14"]["TIMELINES"]["Rate"]} - ${e_con4["14"]["TIMELINES"][e_con4["14"]["TIMELINES"]["Rate"]]}`;
            evaluatorQuality15.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con5["15"]["QUALITY"]["Rate"]} - ${e_con5["15"]["QUALITY"][e_con5["15"]["QUALITY"]["Rate"]]}`;
            evaluatorTimeliness15.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con5["15"]["TIMELINES"]["Rate"]} - ${e_con5["15"]["TIMELINES"][e_con5["15"]["TIMELINES"]["Rate"]]}`;
            evaluatorEfficiency15.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${e_con5["15"]["EFFICIENCY"]["Rate"]} - ${e_con5["15"]["EFFICIENCY"][e_con5["15"]["EFFICIENCY"]["Rate"]]}`;
 


            //Teacher

            const content2 = ipcrf_content["content_for_teacher"];
            const t_con1 = content2["Content Knowledge and Pedagogy"];
            const t_con2 = content2["Learning Environment & Diversity of Learners"];
            const t_con3 = content2["Curriculum and Planning & Assessment and Reporting"];
            const t_con4 = content2["Community Linkages and Professional Engagement & Personal Growth and Professional Development"];
            const t_con5 = content2["PLUS FACTOR"];

            console.log("Content 1 : ", t_con1);
            console.log("Content 2 : ", t_con2);
            console.log("Content 3 : ", t_con3);
            console.log("Content 4 : ", t_con4);
            console.log("Content 5 : ", t_con5);

            efficiency1Self.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${t_con1["1"]["EFFICIENCY"]["Rate"]} - ${t_con1["1"]["EFFICIENCY"][t_con1["1"]["EFFICIENCY"]["Rate"]]}`;
            efficiency2Self.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${t_con1["2"]["EFFICIENCY"]["Rate"]} - ${t_con1["2"]["EFFICIENCY"][t_con1["2"]["EFFICIENCY"]["Rate"]]}`;
            efficiency3Self.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${t_con1["3"]["EFFICIENCY"]["Rate"]} - ${t_con1["3"]["EFFICIENCY"][t_con1["3"]["EFFICIENCY"]["Rate"]]}`;
            efficiency4Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con1["4"]["EFFICIENCY"]["Rate"]} - ${t_con1["4"]["EFFICIENCY"][t_con1["4"]["EFFICIENCY"]["Rate"]]}`;
            efficiency5Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con2["5"]["EFFICIENCY"]["Rate"]} - ${t_con2["5"]["EFFICIENCY"][t_con2["5"]["EFFICIENCY"]["Rate"]]}`;
            efficiency6Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con2["6"]["EFFICIENCY"]["Rate"]} - ${t_con2["6"]["EFFICIENCY"][t_con2["6"]["EFFICIENCY"]["Rate"]]}`;
            efficiency7Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con2["7"]["EFFICIENCY"]["Rate"]} - ${t_con2["7"]["EFFICIENCY"][t_con2["7"]["EFFICIENCY"]["Rate"]]}`;
            efficiency8Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con2["8"]["EFFICIENCY"]["Rate"]} - ${t_con2["8"]["EFFICIENCY"][t_con2["8"]["EFFICIENCY"]["Rate"]]}`;
            quality9Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con3["9"]["QUALITY"]["Rate"]} - ${t_con3["9"]["QUALITY"][t_con3["9"]["QUALITY"]["Rate"]]}`;
            efficiency9Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con3["9"]["EFFICIENCY"]["Rate"]} - ${t_con3["9"]["EFFICIENCY"][t_con3["9"]["EFFICIENCY"]["Rate"]]}`;
            efficiency10Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con3["10"]["EFFICIENCY"]["Rate"]} - ${t_con3["10"]["EFFICIENCY"][t_con3["10"]["EFFICIENCY"]["Rate"]]}`;
            quality11Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con3["11"]["QUALITY"]["Rate"]} - ${t_con3["11"]["QUALITY"][t_con3["11"]["QUALITY"]["Rate"]]}`;
            timeliness11Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con3["11"]["TIMELINES"]["Rate"]} - ${t_con3["11"]["TIMELINES"][t_con3["11"]["TIMELINES"]["Rate"]]}`;
            quality12Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con4["12"]["QUALITY"]["Rate"]} - ${t_con4["12"]["QUALITY"][t_con4["12"]["QUALITY"]["Rate"]]}`;
            timeliness12Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con4["12"]["TIMELINES"]["Rate"]} - ${t_con4["12"]["TIMELINES"][t_con4["12"]["TIMELINES"]["Rate"]]}`;
            quality13Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con4["13"]["QUALITY"]["Rate"]} - ${t_con4["13"]["QUALITY"][t_con4["13"]["QUALITY"]["Rate"]]}`;
            timeliness13Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con4["13"]["TIMELINES"]["Rate"]} - ${t_con4["13"]["TIMELINES"][t_con4["13"]["TIMELINES"]["Rate"]]}`;
            quality14Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con4["14"]["QUALITY"]["Rate"]} - ${t_con4["14"]["QUALITY"][t_con4["14"]["QUALITY"]["Rate"]]}`;
            timeliness14Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con4["14"]["TIMELINES"]["Rate"]} - ${t_con4["14"]["TIMELINES"][t_con4["14"]["TIMELINES"]["Rate"]]}`;
            quality15Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con5["15"]["QUALITY"]["Rate"]} - ${t_con5["15"]["QUALITY"][t_con5["15"]["QUALITY"]["Rate"]]}`;
            timeliness15Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con5["15"]["TIMELINES"]["Rate"]} - ${t_con5["15"]["TIMELINES"][t_con5["15"]["TIMELINES"]["Rate"]]}`;
            efficiency15Self.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${t_con5["15"]["EFFICIENCY"]["Rate"]} - ${t_con5["15"]["EFFICIENCY"][t_con5["15"]["EFFICIENCY"]["Rate"]]}`;
 


            teacherAverageScore.textContent = ipcrf_content.rating.toFixed(2);
            teacherRating.textContent = getRating(ipcrf_content.rating);


            evaluatorAverageScore.textContent = ipcrf_content.evaluator_rating.toFixed(2);
            evaluatorRating.textContent = getRating(ipcrf_content.evaluator_rating);


        } else {
            console.log("Error Data : ", ipcrf_content);
            // alert("Login Failed.")
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getIPCRF();
 





