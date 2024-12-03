// Objective 1 Variables
const efficiency1Self = document.getElementById("Efficiency1_5");
const evaluatorEfficiency1 = document.getElementById("EvaluatorEfficiency1_5");

// Objective 2 Variables
const efficiency2Self = document.getElementById("Efficiency2_5");
const evaluatorEfficiency2 = document.getElementById("EvaluatorEfficiency2_5");

// Objective 3 Variables
const efficiency3Self = document.getElementById("Efficiency3_5");
const evaluatorEfficiency3 = document.getElementById("EvaluatorEfficiency3_5");

// Objective 4 Variables
const efficiency4Self = document.getElementById("Efficiency4_5");
const evaluatorEfficiency4 = document.getElementById("EvaluatorEfficiency4_5");

// Objective 5 Variables
const efficiency5Self = document.getElementById("Efficiency5_5");
const evaluatorEfficiency5 = document.getElementById("EvaluatorEfficiency5_5");

// Objective 6 Variables
const efficiency6Self = document.getElementById("Efficiency6_5");
const evaluatorEfficiency6 = document.getElementById("EvaluatorEfficiency6_5");

// Objective 7 Variables
const efficiency7Self = document.getElementById("Efficiency7_5");
const evaluatorEfficiency7 = document.getElementById("EvaluatorEfficiency7_5");

// Objective 8 Variables
const efficiency8Self = document.getElementById("Efficiency8_5");
const evaluatorEfficiency8 = document.getElementById("EvaluatorEfficiency8_5");

// Objective 9 Variables
const quality9Self = document.getElementById("Quality9_5");
const evaluatorQuality9 = document.getElementById("EvaluatorQuality9_5");
const efficiency9Self = document.getElementById("Efficiency9_5");
const evaluatorEfficiency9 = document.getElementById("EvaluatorEfficiency9_5");

// Objective 10 Variables
const efficiency10Self = document.getElementById("Efficiency10_5");
const evaluatorEfficiency10 = document.getElementById("EvaluatorEfficiency10_5");

// Objective 11 Variables
const quality11Self = document.getElementById("Quality11_5");
const evaluatorQuality11 = document.getElementById("EvaluatorQuality11_5");
const timeliness11Self = document.getElementById("Timeliness11_5");
const evaluatorTimeliness11 = document.getElementById("EvaluatorTimeliness11_5");

// Objective 12 Variables
const quality12Self = document.getElementById("Quality12_5");
const evaluatorQuality12 = document.getElementById("EvaluatorQuality12_5");
const timeliness12Self = document.getElementById("Timeliness12_5");
const evaluatorTimeliness12 = document.getElementById("EvaluatorTimeliness12_5");

// Objective 13 Variables
const quality13Self = document.getElementById("Quality13_5");
const evaluatorQuality13 = document.getElementById("EvaluatorQuality13_5");
const timeliness13Self = document.getElementById("Timeliness13_5");
const evaluatorTimeliness13 = document.getElementById("EvaluatorTimeliness13_5");

// Objective 14 Variables
const quality14Self = document.getElementById("Quality14_5");
const evaluatorQuality14 = document.getElementById("EvaluatorQuality14_5");
const efficiency14Self = document.getElementById("Efficiency14_5");
const evaluatorEfficiency14 = document.getElementById("EvaluatorEfficiency14_5");
const timeliness14Self = document.getElementById("Timeliness14_5");
const evaluatorTimeliness14 = document.getElementById("EvaluatorTimeliness14_5");

// PLUS FACTOR Objective 15 Variables
const quality15Self = document.getElementById("Quality15_5");
const evaluatorQuality15 = document.getElementById("EvaluatorQuality15_5");
const efficiency15Self = document.getElementById("Efficiency15_5");
const evaluatorEfficiency15 = document.getElementById("EvaluatorEfficiency15_5");
const timeliness15Self = document.getElementById("Timeliness15_5");
const evaluatorTimeliness15 = document.getElementById("EvaluatorTimeliness15_5");

// Adjectival Ratings Variables
const teacherAverageScore = document.getElementById("teacher-average-score");
const teacherRating = document.getElementById("teacher-rating");

const evaluatorAverageScore = document.getElementById("evaluator-average-score");
const evaluatorRating = document.getElementById("evaluator-rating");


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


            const content = ipcrf_content["content_for_teacher"];
            const con1 = content["Content Knowledge and Pedagogy"];
            const con2 = content["Learning Environment & Diversity of Learners"];
            const con3 = content["Curriculum and Planning & Assessment and Reporting"];
            const con4 = content["Community Linkages and Professional Engagement & Personal Growth and Professional Development"];
            const con5 = content["PLUS FACTOR"];

            console.log("Content 1 : ", con1);
            console.log("Content 2 : ", con2);
            console.log("Content 3 : ", con3);
            console.log("Content 4 : ", con4);
            console.log("Content 5 : ", con5);

            Efficiency1_5.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${con1["1"]["EFFICIENCY"]["Rate"]} - ${con1["1"]["EFFICIENCY"][con1["1"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency2_5.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${con1["2"]["EFFICIENCY"]["Rate"]} - ${con1["2"]["EFFICIENCY"][con1["2"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency3_5.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${con1["3"]["EFFICIENCY"]["Rate"]} - ${con1["3"]["EFFICIENCY"][con1["3"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency4_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con1["4"]["EFFICIENCY"]["Rate"]} - ${con1["4"]["EFFICIENCY"][con1["4"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency5_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con2["5"]["EFFICIENCY"]["Rate"]} - ${con2["5"]["EFFICIENCY"][con2["5"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency6_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con2["6"]["EFFICIENCY"]["Rate"]} - ${con2["6"]["EFFICIENCY"][con2["6"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency7_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con2["7"]["EFFICIENCY"]["Rate"]} - ${con2["7"]["EFFICIENCY"][con2["7"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency8_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con2["8"]["EFFICIENCY"]["Rate"]} - ${con2["8"]["EFFICIENCY"][con2["8"]["EFFICIENCY"]["Rate"]]}`;
            Quality9_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con3["9"]["QUALITY"]["Rate"]} - ${con3["9"]["QUALITY"][con3["9"]["QUALITY"]["Rate"]]}`;
            Efficiency9_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con3["9"]["EFFICIENCY"]["Rate"]} - ${con3["9"]["EFFICIENCY"][con3["9"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency10_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con3["10"]["EFFICIENCY"]["Rate"]} - ${con3["10"]["EFFICIENCY"][con3["10"]["EFFICIENCY"]["Rate"]]}`;
            Quality11_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con3["11"]["QUALITY"]["Rate"]} - ${con3["11"]["QUALITY"][con3["11"]["QUALITY"]["Rate"]]}`;
            Timeliness11_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con3["11"]["TIMELINES"]["Rate"]} - ${con3["11"]["TIMELINES"][con3["11"]["TIMELINES"]["Rate"]]}`;
            Quality12_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["12"]["QUALITY"]["Rate"]} - ${con4["12"]["QUALITY"][con4["12"]["QUALITY"]["Rate"]]}`;
            TImeliness12_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["12"]["TIMELINES"]["Rate"]} - ${con4["12"]["TIMELINES"][con4["12"]["TIMELINES"]["Rate"]]}`;
            Quality13_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["13"]["QUALITY"]["Rate"]} - ${con4["13"]["QUALITY"][con4["13"]["QUALITY"]["Rate"]]}`;
            Timeliness13_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["13"]["TIMELINES"]["Rate"]} - ${con4["13"]["TIMELINES"][con4["13"]["TIMELINES"]["Rate"]]}`;
            Quality14_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["14"]["QUALITY"]["Rate"]} - ${con4["14"]["QUALITY"][con4["14"]["QUALITY"]["Rate"]]}`;
            Timeliness14_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["14"]["TIMELINES"]["Rate"]} - ${con4["14"]["TIMELINES"][con4["14"]["TIMELINES"]["Rate"]]}`;
            Quality15_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con5["15"]["QUALITY"]["Rate"]} - ${con5["15"]["QUALITY"][con5["15"]["QUALITY"]["Rate"]]}`;
            Timeliness15_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con5["15"]["TIMELINES"]["Rate"]} - ${con5["15"]["TIMELINES"][con5["15"]["TIMELINES"]["Rate"]]}`;
            Efficiency15_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con5["15"]["EFFICIENCY"]["Rate"]} - ${con5["15"]["EFFICIENCY"][con5["15"]["EFFICIENCY"]["Rate"]]}`;
 

            const content = ipcrf_content["content_for_evaluator"];
            const con1 = content["Content Knowledge and Pedagogy"];
            const con2 = content["Learning Environment & Diversity of Learners"];
            const con3 = conten2["Curriculum and Planning & Assessment and Reporting"];
            const con4 = content["Community Linkages and Professional Engagement & Personal Growth and Professional Development"];
            const con5 = content["PLUS FACTOR"];

            console.log("Content 1 : ", con1);
            console.log("Content 2 : ", con2);
            console.log("Content 3 : ", con3);
            console.log("Content 4 : ", con4);
            console.log("Content 5 : ", con5);

            Efficiency1_5.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${con1["1"]["EFFICIENCY"]["Rate"]} - ${con1["1"]["EFFICIENCY"][con1["1"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency2_5.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${con1["2"]["EFFICIENCY"]["Rate"]} - ${con1["2"]["EFFICIENCY"][con1["2"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency3_5.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${con1["3"]["EFFICIENCY"]["Rate"]} - ${con1["3"]["EFFICIENCY"][con1["3"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency4_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con1["4"]["EFFICIENCY"]["Rate"]} - ${con1["4"]["EFFICIENCY"][con1["4"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency5_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con2["5"]["EFFICIENCY"]["Rate"]} - ${con2["5"]["EFFICIENCY"][con2["5"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency6_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con2["6"]["EFFICIENCY"]["Rate"]} - ${con2["6"]["EFFICIENCY"][con2["6"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency7_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con2["7"]["EFFICIENCY"]["Rate"]} - ${con2["7"]["EFFICIENCY"][con2["7"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency8_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con2["8"]["EFFICIENCY"]["Rate"]} - ${con2["8"]["EFFICIENCY"][con2["8"]["EFFICIENCY"]["Rate"]]}`;
            Quality9_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con3["9"]["QUALITY"]["Rate"]} - ${con3["9"]["QUALITY"][con3["9"]["QUALITY"]["Rate"]]}`;
            Efficiency9_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con3["9"]["EFFICIENCY"]["Rate"]} - ${con3["9"]["EFFICIENCY"][con3["9"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency10_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con3["10"]["EFFICIENCY"]["Rate"]} - ${con3["10"]["EFFICIENCY"][con3["10"]["EFFICIENCY"]["Rate"]]}`;
            Quality11_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con3["11"]["QUALITY"]["Rate"]} - ${con3["11"]["QUALITY"][con3["11"]["QUALITY"]["Rate"]]}`;
            Timeliness11_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con3["11"]["TIMELINES"]["Rate"]} - ${con3["11"]["TIMELINES"][con3["11"]["TIMELINES"]["Rate"]]}`;
            Quality12_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["12"]["QUALITY"]["Rate"]} - ${con4["12"]["QUALITY"][con4["12"]["QUALITY"]["Rate"]]}`;
            TImeliness12_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["12"]["TIMELINES"]["Rate"]} - ${con4["12"]["TIMELINES"][con4["12"]["TIMELINES"]["Rate"]]}`;
            Quality13_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["13"]["QUALITY"]["Rate"]} - ${con4["13"]["QUALITY"][con4["13"]["QUALITY"]["Rate"]]}`;
            Timeliness13_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["13"]["TIMELINES"]["Rate"]} - ${con4["13"]["TIMELINES"][con4["13"]["TIMELINES"]["Rate"]]}`;
            Quality14_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["14"]["QUALITY"]["Rate"]} - ${con4["14"]["QUALITY"][con4["14"]["QUALITY"]["Rate"]]}`;
            Timeliness14_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con4["14"]["TIMELINES"]["Rate"]} - ${con4["14"]["TIMELINES"][con4["14"]["TIMELINES"]["Rate"]]}`;
            Quality15_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con5["15"]["QUALITY"]["Rate"]} - ${con5["15"]["QUALITY"][con5["15"]["QUALITY"]["Rate"]]}`;
            Timeliness15_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con5["15"]["TIMELINES"]["Rate"]} - ${con5["15"]["TIMELINES"][con5["15"]["TIMELINES"]["Rate"]]}`;
            Efficiency15_5.innerHTML = `<input type="radio"   value="5" checked disabled>
            ${con5["15"]["EFFICIENCY"]["Rate"]} - ${con5["15"]["EFFICIENCY"][con5["15"]["EFFICIENCY"]["Rate"]]}`;
 



        } else {
            console.log("Error Data : ", ipcrf_content);
            // alert("Login Failed.")
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getIPCRF();
 






