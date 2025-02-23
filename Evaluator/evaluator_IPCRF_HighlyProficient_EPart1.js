// const Efficiency1 = document.getElementById("Efficiency1_5");
// const Quality2 = document.getElementById("Quality2_5");
// const Timeliness2 = document.getElementById("Timeliness2_5");
// const Efficiency3 = document.getElementById("Efficiency3_5");
// const Quality4 = document.getElementById("Quality4_5");
// const Efficiency5 = document.getElementById("Efficiency5_5");
// const Efficiency6 = document.getElementById("Efficiency6_5");
// const Efficiency7 = document.getElementById("Efficiency7_5");
// const Quality8 = document.getElementById("Quality8_5");
// const Quality9 = document.getElementById("Quality9_5");
// const Timeliness9 = document.getElementById("Timeliness9_5");
// const Efficiency10 = document.getElementById("Efficiency10_5");
// const Quality11 = document.getElementById("Quality11_5");
// const Timeliness11 = document.getElementById("Timeliness11_5");
// const Quality12 = document.getElementById("Quality12_5");
// const Timeliness12 = document.getElementById("Timeliness12_5");
// const Quality13 = document.getElementById("Quality13_5");
// const Timeliness13 = document.getElementById("Timeliness13_5");
// const Quality14 = document.getElementById("Quality14_5");
// const Efficiency14 = document.getElementById("Efficiency14_5");
// const Quality15 = document.getElementById("Quality15_5");
// const Efficiency15 = document.getElementById("Efficiency15_5");
// const Timeliness15 = document.getElementById("Timeliness15_5");


let kra1 = 0;
let kra2 = 0;
let kra3 = 0;
let kra4 = 0;
let plus_factor_main = 0;
let plusFactor = 0;
let averageScore = 0;
let totalScore = 0;

// KRA 1: Content Knowledge and Pedagogy - Efficiency Ratings
const Efficiency1_5 = document.getElementById('Efficiency1_5');
const efficiency1_5_option = document.getElementById("efficiency1_5_option");
efficiency1_5_option.addEventListener('change', function () {
    if (efficiency1_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency1', '5');
    }
});
const efficiency1_3_option = document.getElementById("efficiency1_3_option");
efficiency1_3_option.addEventListener('change', function () {
    if (efficiency1_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency1', '3');
    }
})
const efficiency1_1_option = document.getElementById("efficiency1_1_option");
efficiency1_1_option.addEventListener('change', function () {
    if (efficiency1_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency1', '1');
    }
})

function autofillEfficiency1(){
    const efficiency1 = localStorage.getItem(employee_id + 'Efficiency1');

    if(efficiency1 == '5'){
        efficiency1_5_option.checked = true;
    } else if(efficiency1 == '3'){
        efficiency1_3_option.checked = true;
    } else if(efficiency1 == '1'){
        efficiency1_1_option.checked = true;
    }
}

function getRateEfficiency1(){
    if (efficiency1_5_option.checked) {
        return 5;
    } else if (efficiency1_3_option.checked) {
        return 3;
    } else if (efficiency1_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}



// KRA 2: Evaluated with colleagues - Quality Ratings
const Quality2_5 = document.getElementById('Quality2_5');
const quality2_5_option = document.getElementById("quality2_5_option");
quality2_5_option.addEventListener('change', function () {
    if (quality2_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality2', '5');
    }
});
const quality2_4_option = document.getElementById("quality2_4_option");
quality2_4_option.addEventListener('change', function () {
    if (quality2_4_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality2', '4');
    }
});
const quality2_3_option = document.getElementById("quality2_3_option");
quality2_3_option.addEventListener('change', function () {
    if (quality2_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality2', '3');
    }
});
const quality2_2_option = document.getElementById("quality2_2_option");
quality2_2_option.addEventListener('change', function () {
    if (quality2_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality2', '2');
    }
});
const quality2_1_option = document.getElementById("quality2_1_option");
quality2_1_option.addEventListener('change', function () {
    if (quality2_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality2', '1');
    }
})

function autofillQuality2(){
    const quality2 = localStorage.getItem(employee_id + 'Quality2');
    if(quality2 == '5'){
        quality2_5_option.checked = true;
    } else if(quality2 == '4'){
        quality2_4_option.checked = true;
    } else if(quality2 == '3'){
        quality2_3_option.checked = true;
    } else if(quality2 == '2'){
        quality2_2_option.checked = true;
    } else if(quality2 == '1'){
        quality2_1_option.checked = true;
    }
}

function getRateQuality2(){
    if (quality2_5_option.checked) {
        return 5;
    } else if (quality2_4_option.checked) {
        return 4;
    } else if (quality2_3_option.checked) {
        return 3;
    } else if (quality2_2_option.checked) {
        return 2;
    } else if (quality2_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 2: Evaluated with colleagues - Timeliness Ratings
const Timeliness2_5 = document.getElementById('Timeliness2_5');

const timeliness2_5_option = document.getElementById("timeliness2_5_option");
timeliness2_5_option.addEventListener('change', function () {
    if (timeliness2_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness2', '5');
    }
});
const timeliness2_4_option = document.getElementById("timeliness2_4_option");
timeliness2_4_option.addEventListener('change', function () {
    if (timeliness2_4_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness2', '4');
    }
});
const timeliness2_3_option = document.getElementById("timeliness2_3_option");
timeliness2_3_option.addEventListener('change', function () {
    if (timeliness2_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness2', '3');
    }
});
const timeliness2_2_option = document.getElementById("timeliness2_2_option");
timeliness2_2_option.addEventListener('change', function () {
    if (timeliness2_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness2', '2');
    }
})
const timeliness2_1_option = document.getElementById("timeliness2_1_option");
timeliness2_1_option.addEventListener('change', function () {
    if (timeliness2_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness2', '1');
    }
})

function autofillTimeliness2(){
    const timeliness2 = localStorage.getItem(employee_id + 'Timeliness2');
    if(timeliness2 == '5'){
        timeliness2_5_option.checked = true;
    } else if(timeliness2 == '4'){
        timeliness2_4_option.checked = true;
    } else if(timeliness2 == '3'){
        timeliness2_3_option.checked = true;
    } else if(timeliness2 == '2'){
        timeliness2_2_option.checked = true;
    } else if(timeliness2 == '1'){
        timeliness2_1_option.checked = true;
    }
}

function getRateTimeliness2(){
    if (timeliness2_5_option.checked) {
        return 5;
    } else if (timeliness2_4_option.checked) {
        return 4;
    } else if (timeliness2_3_option.checked) {
        return 3;
    } else if (timeliness2_2_option.checked) {
        return 2;
    } else if (timeliness2_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 3: Developed and applied effective teaching strategies - Efficiency Ratings
const Efficiency3_5 = document.getElementById('Efficiency3_5');

const efficiency3_5_option = document.getElementById("efficiency3_5_option");
efficiency3_5_option.addEventListener('change', function () {
    if (efficiency3_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency3', '5');
    }
});
const efficiency3_3_option = document.getElementById("efficiency3_3_option");
efficiency3_3_option.addEventListener('change', function () {
    if (efficiency3_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency3', '3');
    }
})
const efficiency3_1_option = document.getElementById("efficiency3_1_option");
efficiency3_1_option.addEventListener('change', function () {
    if (efficiency3_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency3', '1');
    }
})

function autofillEfficiency3(){
    const efficiency3 = localStorage.getItem(employee_id + 'Efficiency3');
    if(efficiency3 == '5'){
        efficiency3_5_option.checked = true;
    } else if(efficiency3 == '3'){
        efficiency3_3_option.checked = true;
    } else if(efficiency3 == '1'){
        efficiency3_1_option.checked = true;
    }
}

function getRateEfficiency3(){
    if (efficiency3_5_option.checked) {
        return 5;
    } else if (efficiency3_3_option.checked) {
        return 3;
    } else if (efficiency3_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 4: Modeled and supported colleagues - Efficiency Ratings
const Efficiency4_5 = document.getElementById('Efficiency4_5');
const efficiency4_5_option = document.getElementById("efficiency4_5_option");
efficiency4_5_option.addEventListener('change', function () {
    if (efficiency4_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency4', '5');
    }
})
const efficiency4_3_option = document.getElementById("efficiency4_3_option");
efficiency4_3_option.addEventListener('change', function () {
    if (efficiency4_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency4', '3');
    }
})
const efficiency4_1_option = document.getElementById("efficiency4_1_option");
efficiency4_1_option.addEventListener('change', function () {
    if (efficiency4_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency4', '1');
    }
})
function autofillEfficiency4(){
    const efficiency4 = localStorage.getItem(employee_id + 'Efficiency4');
    if(efficiency4 == '5'){
        efficiency4_5_option.checked = true;
    } else if(efficiency4 == '3'){
        efficiency4_3_option.checked = true;
    } else if(efficiency4 == '1'){
        efficiency4_1_option.checked = true;
    }
}

function getRateEfficiency4(){
    if (efficiency4_5_option.checked) {
        return 5;
    } else if (efficiency4_3_option.checked) {
        return 3;
    } else if (efficiency4_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 2: Learning Environment & Diversity of Learners - Efficiency Ratings for Objective 5
const Efficiency5_5 = document.getElementById('Efficiency5_5');
const efficiency5_5_option = document.getElementById("efficiency5_5_option");
efficiency5_5_option.addEventListener('change', function () {
    if (efficiency5_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency5', '5');
    }
});
const efficiency5_3_option = document.getElementById("efficiency5_3_option");
efficiency5_3_option.addEventListener('change', function () {
    if (efficiency5_3_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Efficiency5', '3');
    }
});
const efficiency5_1_option = document.getElementById("efficiency5_1_option");
efficiency5_1_option.addEventListener('change', function () {
    if (efficiency5_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency5', '1');
    }
})

function autofillEfficiency5(){
    const efficiency5 = localStorage.getItem(employee_id + 'Efficiency5');
    if(efficiency5 == '5'){
        efficiency5_5_option.checked = true;
    } else if(efficiency5 == '3'){
        efficiency5_3_option.checked = true;
    } else if(efficiency5 == '1'){
        efficiency5_1_option.checked = true;
    }
}

function getRateEfficiency5(){
    if (efficiency5_5_option.checked) {
        return 5;
    } else if (efficiency5_3_option.checked) {
        return 3;
    } else if (efficiency5_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 2: Learning Environment & Diversity of Learners - Efficiency Ratings for Objective 6
const Efficiency6_5 = document.getElementById('Efficiency6_5');
const efficiency6_5_option = document.getElementById("efficiency6_5_option");
efficiency6_5_option.addEventListener('change', function () {
    if (efficiency6_5_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Efficiency6', '5');
    }
});
const efficiency6_3_option = document.getElementById("efficiency6_3_option");
efficiency6_3_option.addEventListener('change', function () {
    if (efficiency6_3_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Efficiency6', '3');
    }
});
const efficiency6_1_option = document.getElementById("efficiency6_1_option");
efficiency6_1_option.addEventListener('change', function () {
    if (efficiency6_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency6', '1');
    }
})

function autofillEfficiency6(){
        const efficiency6 = localStorage.getItem(employee_id + 'Efficiency6');
        if(efficiency6 == '5'){
            efficiency6_5_option.checked = true;
        } else if(efficiency6 == '3'){
            efficiency6_3_option.checked = true;
        } else if(efficiency6 == '1'){
            efficiency6_1_option.checked = true;
        }
    }

function getRateEfficiency6(){
    if (efficiency6_5_option.checked) {
        return 5;
    } else if (efficiency6_3_option.checked) {
        return 3;
    } else if (efficiency6_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 2: Learning Environment & Diversity of Learners - Efficiency Ratings for Objective 7
const Efficiency7_5 = document.getElementById('Efficiency7_5');
const efficiency7_5_option = document.getElementById("efficiency7_5_option");
efficiency7_5_option.addEventListener('change', function () {
    if (efficiency7_5_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Efficiency7', '5');
    }
});
const efficiency7_3_option = document.getElementById("efficiency7_3_option");
efficiency7_3_option.addEventListener('change', function () {
    if (efficiency7_3_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Efficiency7', '3');
    }
});
const efficiency7_1_option = document.getElementById("efficiency7_1_option");
efficiency7_1_option.addEventListener('change', function () {
    if (efficiency7_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency7', '1');
    }
})

function autofillEfficiency7(){
        const efficiency7 = localStorage.getItem(employee_id + 'Efficiency7');
        if(efficiency7 == '5'){
            efficiency7_5_option.checked = true;
        } else if(efficiency7 == '3'){
            efficiency7_3_option.checked = true;
        } else if(efficiency7 == '1'){
            efficiency7_1_option.checked = true;
        }
    }

function getRateEfficiency7(){
    if (efficiency7_5_option.checked) {
        return 5;
    } else if (efficiency7_3_option.checked) {
        return 3;
    } else if (efficiency7_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 2: Learning Environment & Diversity of Learners - Quality Ratings for Objective 8
const Quality8_5 = document.getElementById('Quality8_5');
const quality8_5_option = document.getElementById("quality8_5_option");
quality8_5_option.addEventListener('change', function () {
    if (quality8_5_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality8', '5');
    }
});
const quality8_4_option = document.getElementById("quality8_4_option");
quality8_4_option.addEventListener('change', function () {
    if (quality8_4_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality8', '4');
    }
});
const quality8_3_option = document.getElementById("quality8_3_option");
quality8_3_option.addEventListener('change', function () {
    if (quality8_3_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality8', '3');
    }
})
const quality8_2_option = document.getElementById("quality8_2_option");
quality8_2_option.addEventListener('change', function () {
    if (quality8_2_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality8', '2');
    }
}) 
const quality8_1_option = document.getElementById("quality8_1_option");
quality8_1_option.addEventListener('change', function () {
    if (quality8_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality8', '1');
    }
})

function autofillQuality8(){
        const quality8 = localStorage.getItem(employee_id + 'Quality8');
        if(quality8 == '5'){
            quality8_5_option.checked = true;
        } else if(quality8 == '4'){
            quality8_4_option.checked = true;
        } else if(quality8 == '3'){
            quality8_3_option.checked = true;
        } else if(quality8 == '2'){
            quality8_2_option.checked = true;
        } else if(quality8 == '1'){
            quality8_1_option.checked = true;
        }
    }

function getRateQuality8(){
    if (quality8_5_option.checked) {
        return 5;
    } else if (quality8_4_option.checked) {
        return 4;
    } else if (quality8_3_option.checked) {
        return 3;
    } else if (quality8_2_option.checked) {
        return 2;
    } else if (quality8_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 3: Curriculum and Planning & Assessment and Reporting - Quality Ratings for Objective 9
const Quality9_5 = document.getElementById('Quality9_5');
const quality9_5_option = document.getElementById("quality9_5_option");
quality9_5_option.addEventListener('change', function () {
    if (quality9_5_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality9', '5');
    }
});
const quality9_4_option = document.getElementById("quality9_4_option");
quality9_4_option.addEventListener('change', function () {
    if (quality9_4_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality9', '4');
    }
});
const quality9_3_option = document.getElementById("quality9_3_option");
quality9_3_option.addEventListener('change', function () {
    if (quality9_3_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality9', '3');
    }
})
const quality9_2_option = document.getElementById("quality9_2_option");
quality9_2_option.addEventListener('change', function () {
    if (quality9_2_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality9', '2');
    }
}) 
const quality9_1_option = document.getElementById("quality9_1_option");
quality9_1_option.addEventListener('change', function () {
    if (quality9_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality9', '1');
    }
})

function autofillQuality9(){
        const quality9 = localStorage.getItem(employee_id + 'Quality9');
        if(quality9 == '5'){
            quality9_5_option.checked = true;
        } else if(quality9 == '4'){
            quality9_4_option.checked = true;
        } else if(quality9 == '3'){
            quality9_3_option.checked = true;
        } else if(quality9 == '2'){
            quality9_2_option.checked = true;
        } else if(quality9 == '1'){
            quality9_1_option.checked = true;
        }
    }   

function getRateQuality9(){
    if (quality9_5_option.checked) {
        return 5;
    } else if (quality9_4_option.checked) {
        return 4;
    } else if (quality9_3_option.checked) {
        return 3;
    } else if (quality9_2_option.checked) {
        return 2;
    } else if (quality9_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 3: Curriculum and Planning & Assessment and Reporting - Timeliness Ratings for Objective 9
const Timeliness9_5 = document.getElementById('Timeliness9_5');
const timeliness9_5_option = document.getElementById("timeliness9_5_option");
timeliness9_5_option.addEventListener('change', function () {
        if (timeliness9_5_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Timeliness9', '5');
    }
}); 
const timeliness9_4_option = document.getElementById("timeliness9_4_option");
timeliness9_4_option.addEventListener('change', function () {
    if (timeliness9_4_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Timeliness9', '4');
    }
});
const timeliness9_3_option = document.getElementById("timeliness9_3_option");
timeliness9_3_option.addEventListener('change', function () {
    if (timeliness9_3_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Timeliness9', '3');
    }
})
const timeliness9_2_option = document.getElementById("timeliness9_2_option");
timeliness9_2_option.addEventListener('change', function () {
    if (timeliness9_2_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Timeliness9', '2');
    }
})
const timeliness9_1_option = document.getElementById("timeliness9_1_option");
timeliness9_1_option.addEventListener('change', function () {
    if (timeliness9_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness9', '1');
    }
})

function autofillTimeliness9(){
        const timeliness9 = localStorage.getItem(employee_id + 'Timeliness9');
        if(timeliness9 == '5'){
            timeliness9_5_option.checked = true;
        } else if(timeliness9 == '4'){
            timeliness9_4_option.checked = true;
        } else if(timeliness9 == '3'){
            timeliness9_3_option.checked = true;
        } else if(timeliness9 == '2'){
            timeliness9_2_option.checked = true;
        } else if(timeliness9 == '1'){
            timeliness9_1_option.checked = true;
        }
    }


function getRateTimeliness9(){
    if (timeliness9_5_option.checked) {
        return 5;
    } else if (timeliness9_4_option.checked) {
        return 4;
    } else if (timeliness9_3_option.checked) {
        return 3;
    } else if (timeliness9_2_option.checked) {
        return 2;
    } else if (timeliness9_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 3: Curriculum and Planning & Assessment and Reporting - Efficiency Ratings for Objective 10
const Efficiency10_5 = document.getElementById('Efficiency10_5');
const efficiency10_5_option = document.getElementById("efficiency10_5_option");
efficiency10_5_option.addEventListener('change', function () {
    if (efficiency10_5_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Efficiency10', '5');
    }
});
const efficiency10_3_option = document.getElementById("efficiency10_3_option");
efficiency10_3_option.addEventListener('change', function () {
    if (efficiency10_3_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Efficiency10', '3');
    }
})
const efficiency10_1_option = document.getElementById("efficiency10_1_option");
efficiency10_1_option.addEventListener('change', function () {
    if (efficiency10_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency10', '1');
    }
})

function autofillEfficiency10(){
        const efficiency10 = localStorage.getItem(employee_id + 'Efficiency10');
        if(efficiency10 == '5'){
            efficiency10_5_option.checked = true;
        } else if(efficiency10 == '3'){
            efficiency10_3_option.checked = true;
        } else if(efficiency10 == '1'){
            efficiency10_1_option.checked = true;
        }
    }


function getRateEfficiency10(){
    if (efficiency10_5_option.checked) {
        return 5;
    } else if (efficiency10_3_option.checked) {
        return 3;
    } else if (efficiency10_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 3: Curriculum and Planning & Assessment and Reporting - Quality Ratings for Objective 11
const Quality11_5 = document.getElementById('Quality11_5');
const quality11_5_option = document.getElementById("quality11_5_option");
quality11_5_option.addEventListener('change', function () {
    if (quality11_5_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality11', '5');
    }
}); 
const quality11_4_option = document.getElementById("quality11_4_option");
quality11_4_option.addEventListener('change', function () {
    if (quality11_4_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality11', '4');
    }
}); 
const quality11_3_option = document.getElementById("quality11_3_option");
quality11_3_option.addEventListener('change', function () {
    if (quality11_3_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality11', '3');
    }
}); 
const quality11_2_option = document.getElementById("quality11_2_option");
quality11_2_option.addEventListener('change', function () {
    if (quality11_2_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Quality11', '2');
    }
})
const quality11_1_option = document.getElementById("quality11_1_option");
quality11_1_option.addEventListener('change', function () {
    if (quality11_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality11', '1');
    }
})

function autofillQuality11(){
        const quality11 = localStorage.getItem(employee_id + 'Quality11');
        if(quality11 == '5'){
            quality11_5_option.checked = true;
        } else if(quality11 == '4'){
            quality11_4_option.checked = true;
        } else if(quality11 == '3'){
            quality11_3_option.checked = true;
        } else if(quality11 == '2'){
            quality11_2_option.checked = true;
        } else if(quality11 == '1'){
            quality11_1_option.checked = true;
        }
    }


function getRateQuality11(){
    if (quality11_5_option.checked) {
        return 5;
    } else if (quality11_4_option.checked) {
        return 4;
    } else if (quality11_3_option.checked) {
        return 3;
    } else if (quality11_2_option.checked) {
        return 2;
    } else if (quality11_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 3: Curriculum and Planning & Assessment and Reporting - Timeliness Ratings for Objective 11
const Timeliness11_5 = document.getElementById('Timeliness11_5');
const timeliness11_5_option = document.getElementById("timeliness11_5_option");
timeliness11_5_option.addEventListener('change', function () {
    if (timeliness11_5_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Timeliness11', '5');
    }
});
const timeliness11_4_option = document.getElementById("timeliness11_4_option");
timeliness11_4_option.addEventListener('change', function () {
    if (timeliness11_4_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Timeliness11', '4');
    }
}); 
const timeliness11_3_option = document.getElementById("timeliness11_3_option");
timeliness11_3_option.addEventListener('change', function () {
    if (timeliness11_3_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Timeliness11', '3');
    }
})
const timeliness11_2_option = document.getElementById("timeliness11_2_option");
timeliness11_2_option.addEventListener('change', function () {
    if (timeliness11_2_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Timeliness11', '2');
    }
})
const timeliness11_1_option = document.getElementById("timeliness11_1_option");
timeliness11_1_option.addEventListener('change', function () {
    if (timeliness11_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '1');
    }
}) 

function autofillTimeliness11(){
        const timeliness11 = localStorage.getItem(employee_id + 'Timeliness11');
        if(timeliness11 == '5'){
            timeliness11_5_option.checked = true;
        } else if(timeliness11 == '4'){
            timeliness11_4_option.checked = true;
        } else if(timeliness11 == '3'){
            timeliness11_3_option.checked = true;
        } else if(timeliness11 == '2'){
            timeliness11_2_option.checked = true;
        } else if(timeliness11 == '1'){
            timeliness11_1_option.checked = true;
        }
    }

function getRateTimeliness11(){
    if (timeliness11_5_option.checked) {
        return 5;
    } else if (timeliness11_4_option.checked) {
        return 4;
    } else if (timeliness11_3_option.checked) {
        return 3;
    } else if (timeliness11_2_option.checked) {
        return 2;
    } else if (timeliness11_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 4, Objective 12 Variables
const Quality12_5 = document.getElementById('Quality12_5');
const quality12_5_option = document.getElementById('quality12_5_option');
quality12_5_option.addEventListener('change', function () {
    if (quality12_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality12', '5');
    }
})
const quality12_4_option = document.getElementById('quality12_4_option');
quality12_4_option.addEventListener('change', function () {
    if (quality12_4_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality12', '4');
    }
})
const quality12_3_option = document.getElementById('quality12_3_option');
quality12_3_option.addEventListener('change', function () {
    if (quality12_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality12', '3');
    }
})
const quality12_2_option = document.getElementById('quality12_2_option');
quality12_2_option.addEventListener('change', function () {
    if (quality12_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality12', '2');
    }
})
const quality12_1_option = document.getElementById('quality12_1_option');
quality12_1_option.addEventListener('change', function () {
    if (quality12_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality12', '1');
    }
})

function autofillQuality12(){
    const quality12 = localStorage.getItem(employee_id + 'Quality12');
    if(quality12 == '5'){
        quality12_5_option.checked = true;
    } else if(quality12 == '4'){
        quality12_4_option.checked = true;
    } else if(quality12 == '3'){
        quality12_3_option.checked = true;
    } else if(quality12 == '2'){
        quality12_2_option.checked = true;
    } else if(quality12 == '1'){
        quality12_1_option.checked = true;
    }
}

function getRateQuality12(){
    if (quality12_5_option.checked) {
        return 5;
    } else if (quality12_4_option.checked) {
        return 4;
    } else if (quality12_3_option.checked) {
        return 3;
    } else if (quality12_2_option.checked) {
        return 2;
    } else if (quality12_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

const Timeliness12_5 = document.getElementById('Timeliness12_5');
const timeliness12_5_option = document.getElementById('timeliness12_5_option');
timeliness12_5_option.addEventListener('change', function () {
    if (timeliness12_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '5');
    }
})
const timeliness12_4_option = document.getElementById('timeliness12_4_option');
timeliness12_4_option.addEventListener('change', function () {
    if (timeliness12_4_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '4');
    }
})
const timeliness12_3_option = document.getElementById('timeliness12_3_option');
timeliness12_3_option.addEventListener('change', function () {
    if (timeliness12_3_option.checked) {
    employee_id && localStorage.setItem(employee_id + 'Timeliness12', '3');
    } 
})
const timeliness12_2_option = document.getElementById('timeliness12_2_option');
timeliness12_2_option.addEventListener('change', function () {
    if (timeliness12_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '2');
    }
})
const timeliness12_1_option = document.getElementById('timeliness12_1_option');
timeliness12_1_option.addEventListener('change', function () {
    if (timeliness12_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '1');
    }
})

function autofillTimeliness12(){
    const timeliness12 = localStorage.getItem(employee_id + 'Timeliness12');
    if(timeliness12 == '5'){
        timeliness12_5_option.checked = true;
    } else if(timeliness12 == '4'){
        timeliness12_4_option.checked = true;
    } else if(timeliness12 == '3'){
        timeliness12_3_option.checked = true;
    } else if(timeliness12 == '2'){
        timeliness12_2_option.checked = true;
    } else if(timeliness12 == '1'){
        timeliness12_1_option.checked = true;
    }
}


function getRateTimeliness12(){
    if (timeliness12_5_option.checked) {
        return 5;
    } else if (timeliness12_4_option.checked) {
        return 4;
    } else if (timeliness12_3_option.checked) {
        return 3;
    } else if (timeliness12_2_option.checked) {
        return 2;
    } else if (timeliness12_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 4, Objective 13 Variables
const Quality13_5 = document.getElementById('Quality13_5');
const quality13_5_option = document.getElementById('quality13_5_option');
quality13_5_option.addEventListener('change', function () {
    if (quality13_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality13', '5');
    }
})
const quality13_4_option = document.getElementById('quality13_4_option');
quality13_4_option.addEventListener('change', function () { 
    if (quality13_4_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality13', '4');
    }
})
const quality13_3_option = document.getElementById('quality13_3_option');
quality13_3_option.addEventListener('change', function () {
    if (quality13_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality13', '3');
    }
})
const quality13_2_option = document.getElementById('quality13_2_option');
quality13_2_option.addEventListener('change', function () {
    if (quality13_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality13', '2');
    }
})
const quality13_1_option = document.getElementById('quality13_1_option');
quality13_1_option.addEventListener('change', function () {
    if (quality13_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality13', '1');
    }
})

function autofillQuality13(){
    const quality13 = localStorage.getItem(employee_id + 'Quality13');
    if(quality13 == '5'){
        quality13_5_option.checked = true;
    } else if(quality13 == '4'){
        quality13_4_option.checked = true;
    } else if(quality13 == '3'){
        quality13_3_option.checked = true;
    } else if(quality13 == '2'){
        quality13_2_option.checked = true;
    } else if(quality13 == '1'){
        quality13_1_option.checked = true;
    }
}


function getRateQuality13(){
    if (quality13_5_option.checked) {
        return 5;
    } else if (quality13_4_option.checked) {
        return 4;
    } else if (quality13_3_option.checked) {
        return 3;
    } else if (quality13_2_option.checked) {
        return 2;
    } else if (quality13_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

const Timeliness13_5 = document.getElementById('Timeliness13_5');
const timeliness13_5_option = document.getElementById('timeliness13_5_option');
timeliness13_5_option.addEventListener('change', function () {
    if (timeliness13_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '5');
    }
})
const timeliness13_4_option = document.getElementById('timeliness13_4_option');
    timeliness13_4_option.addEventListener('change', function () {
        if (timeliness13_4_option.checked) {
            employee_id && localStorage.setItem(employee_id + 'Timeliness13', '4');
        }
    })
const timeliness13_3_option = document.getElementById('timeliness13_3_option');
timeliness13_3_option.addEventListener('change', function () {
    if (timeliness13_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '3');
    }
})
const timeliness13_2_option = document.getElementById('timeliness13_2_option');
timeliness13_2_option.addEventListener('change', function () {
    if (timeliness13_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '2');
    }
})
const timeliness13_1_option = document.getElementById('timeliness13_1_option');
timeliness13_1_option.addEventListener('change', function () {
    if (timeliness13_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '1');
    }
})

function autofillTimeliness13(){
    const timeliness13 = localStorage.getItem(employee_id + 'Timeliness13');
    if(timeliness13 == '5'){
        timeliness13_5_option.checked = true;
    } else if(timeliness13 == '4'){
        timeliness13_4_option.checked = true;
    } else if(timeliness13 == '3'){
        timeliness13_3_option.checked = true;
    } else if(timeliness13 == '2'){
        timeliness13_2_option.checked = true;
    } else if(timeliness13 == '1'){
        timeliness13_1_option.checked = true;
    }
}

function getRateTimeliness13(){
    if (timeliness13_5_option.checked) {
        return 5;
    } else if (timeliness13_4_option.checked) {
        return 4;
    } else if (timeliness13_3_option.checked) {
        return 3;
    } else if (timeliness13_2_option.checked) {
        return 2;
    } else if (timeliness13_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// KRA 4, Objective 14 Variables
const Quality14_5 = document.getElementById('Quality14_5');
const quality14_5_option = document.getElementById('quality14_5_option');
quality14_5_option.addEventListener('change', function () {
    if (quality14_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality14', '5');
    }
})
const quality14_4_option = document.getElementById('quality14_4_option');
quality14_4_option.addEventListener('change', function () {
    if (quality14_4_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality14', '4');
    }
})
const quality14_3_option = document.getElementById('quality14_3_option');
quality14_3_option.addEventListener('change', function () {
    if (quality14_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality14', '3');
    }
})
const quality14_2_option = document.getElementById('quality14_2_option');
quality14_2_option.addEventListener('change', function () {
    if (quality14_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality14', '2');
    }
})
const quality14_1_option = document.getElementById('quality14_1_option');
quality14_1_option.addEventListener('change', function () {
    if (quality14_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality14', '1');
    }
})

function autofillQuality14(){
    const quality14 = localStorage.getItem(employee_id + 'Quality14');
    if(quality14 == '5'){
        quality14_5_option.checked = true;
    } else if(quality14 == '4'){
        quality14_4_option.checked = true;
    } else if(quality14 == '3'){
        quality14_3_option.checked = true;
    } else if(quality14 == '2'){
        quality14_2_option.checked = true;
    } else if(quality14 == '1'){
        quality14_1_option.checked = true;
    }
}

function getRateQuality14(){
    if (quality14_5_option.checked) {
        return 5;
    } else if (quality14_4_option.checked) {
        return 4;
    } else if (quality14_3_option.checked) {
        return 3;
    } else if (quality14_2_option.checked) {
        return 2;
    } else if (quality14_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

const Efficiency14_5 = document.getElementById('Efficiency14_5');
const efficiency14_5_option = document.getElementById('efficiency14_5_option');
efficiency14_5_option.addEventListener('change', function () {
    if (efficiency14_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '5');
    }
})
const efficiency14_4_option = document.getElementById('efficiency14_4_option');
efficiency14_4_option.addEventListener('change', function () {
    if (efficiency14_4_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '4');
    }
})
const efficiency14_3_option = document.getElementById('efficiency14_3_option');
efficiency14_3_option.addEventListener('change', function () {
    if (efficiency14_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '3');
    }
})
const efficiency14_2_option = document.getElementById('efficiency14_2_option');
efficiency14_2_option.addEventListener('change', function () {
    if (efficiency14_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '2');
    }
})
const efficiency14_1_option = document.getElementById('efficiency14_1_option');
efficiency14_1_option.addEventListener('change', function () {
    if (efficiency14_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '1');
    }
})

function autofillEfficiency14(){
    const efficiency14 = localStorage.getItem(employee_id + 'Efficiency14');
    if(efficiency14 == '5'){
        efficiency14_5_option.checked = true;
    } else if(efficiency14 == '4'){
        efficiency14_4_option.checked = true;
    } else if(efficiency14 == '3'){
        efficiency14_3_option.checked = true;
    } else if(efficiency14 == '2'){
        efficiency14_2_option.checked = true;
    } else if(efficiency14 == '1'){
        efficiency14_1_option.checked = true;
    }
}


function getRateEfficiency14(){
    if (efficiency14_5_option.checked) {
        return 5;
    } else if (efficiency14_4_option.checked) {
        return 4;
    } else if (efficiency14_3_option.checked) {
        return 3;
    } else if (efficiency14_2_option.checked) {
        return 2;
    } else if (efficiency14_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

// const Timeliness14_5 = document.getElementById('Timeliness14_5');
// const timeliness14_5_option = document.getElementById('timeliness14_5_option');
// timeliness14_5_option.addEventListener('change', function () {
//     if (timeliness14_5_option.checked) {
//         employee_id && localStorage.setItem(employee_id + 'Timeliness14', '5');
//     }
// })
// const timeliness14_4_option = document.getElementById('timeliness14_4_option');
// timeliness14_4_option.addEventListener('change', function () {
//     if (timeliness14_4_option.checked) {
//         employee_id && localStorage.setItem(employee_id + 'Timeliness14', '4');
//     }
// })
// const timeliness14_3_option = document.getElementById('timeliness14_3_option');
// timeliness14_3_option.addEventListener('change', function () {
//     if (timeliness14_3_option.checked) {
//         employee_id && localStorage.setItem(employee_id + 'Timeliness14', '3');
//     }
// })
// const timeliness14_2_option = document.getElementById('timeliness14_2_option');
// timeliness14_2_option.addEventListener('change', function () {
//     if (timeliness14_2_option.checked) {
//         employee_id && localStorage.setItem(employee_id + 'Timeliness14', '2');
//     }
// })
// const timeliness14_1_option = document.getElementById('timeliness14_1_option');
// timeliness14_1_option.addEventListener('change', function () {
//     if (timeliness14_1_option.checked) {
//         employee_id && localStorage.setItem(employee_id + 'Timeliness14', '1');
//     }
// })

// function getRateTimeliness14(){
//     if (timeliness14_5_option.checked) {
//         return 5;
//     } else if (timeliness14_4_option.checked) {
//         return 4;
//     } else if (timeliness14_3_option.checked) {
//         return 3;
//     } else if (timeliness14_2_option.checked) {
//         return 2;
//     } else if (timeliness14_1_option.checked) {
//         return 1;
//     } else {
//         return 0; // Default case if none are checked
//     }
// }

// PLUS FACTOR Variables
const Quality15_5 = document.getElementById('Quality15_5');
const quality15_5_option = document.getElementById('quality15_5_option');
quality15_5_option.addEventListener('change', function () {
    if (quality15_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality15', '5');
    }
})
const quality15_4_option = document.getElementById('quality15_4_option');
quality15_4_option.addEventListener('change', function () {
    if (quality15_4_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality15', '4');
    }
})
const quality15_3_option = document.getElementById('quality15_3_option');
quality15_3_option.addEventListener('change', function () {
    if (quality15_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality15', '3');
    }
})
const quality15_2_option = document.getElementById('quality15_2_option');
quality15_2_option.addEventListener('change', function () {
    if (quality15_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality15', '2');
    }
})
const quality15_1_option = document.getElementById('quality15_1_option');
quality15_1_option.addEventListener('change', function () {
    if (quality15_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality15', '1');
    }
})

 function autofillQuality15(){
    const quality15 = localStorage.getItem(employee_id + 'Quality15');
    if(quality15 == '5'){
        quality15_5_option.checked = true;
    } else if(quality15 == '4'){
        quality15_4_option.checked = true;
    } else if(quality15 == '3'){
        quality15_3_option.checked = true;
    } else if(quality15 == '2'){
        quality15_2_option.checked = true;
    } else if(quality15 == '1'){
        quality15_1_option.checked = true;
    }
}

function getRateQuality15(){
    if (quality15_5_option.checked) {
        return 5;
    } else if (quality15_4_option.checked) {
        return 4;
    } else if (quality15_3_option.checked) {
        return 3;
    } else if (quality15_2_option.checked) {
        return 2;
    } else if (quality15_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

const Efficiency15_5 = document.getElementById('Efficiency15_5');
const efficiency15_5_option = document.getElementById('efficiency15_5_option');
efficiency15_5_option.addEventListener('change', function () {
    if (efficiency15_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '5');
    }
})
const efficiency15_4_option = document.getElementById('efficiency15_4_option');
efficiency15_4_option.addEventListener('change', function () {
    if (efficiency15_4_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '4');
    }
})
const efficiency15_3_option = document.getElementById('efficiency15_3_option');
efficiency15_3_option.addEventListener('change', function () {
    if (efficiency15_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '3');
    }
})
const efficiency15_2_option = document.getElementById('efficiency15_2_option');
efficiency15_2_option.addEventListener('change', function () {
    if (efficiency15_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '2');
    }
})
const efficiency15_1_option = document.getElementById('efficiency15_1_option');
efficiency15_1_option.addEventListener('change', function () {
    if (efficiency15_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '1');
    }
})

function autofillEfficiency15(){
    const efficiency15 = localStorage.getItem(employee_id + 'Efficiency15');
    if(efficiency15 == '5'){
        efficiency15_5_option.checked = true;
    } else if(efficiency15 == '4'){
        efficiency15_4_option.checked = true;
    } else if(efficiency15 == '3'){
        efficiency15_3_option.checked = true;
    } else if(efficiency15 == '2'){
        efficiency15_2_option.checked = true;
    } else if(efficiency15 == '1'){
        efficiency15_1_option.checked = true;
    }
}

function getRateEfficiency15(){
    if (efficiency15_5_option.checked) {
        return 5;
    } else if (efficiency15_4_option.checked) {
        return 4;
    } else if (efficiency15_3_option.checked) {
        return 3;
    } else if (efficiency15_2_option.checked) {
        return 2;
    } else if (efficiency15_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

const Timeliness15_5 = document.getElementById('Timeliness15_5');
const timeliness15_5_option = document.getElementById('timeliness15_5_option');
timeliness15_5_option.addEventListener('change', function () {
    if (timeliness15_5_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '5');
    }
})
const timeliness15_4_option = document.getElementById('timeliness15_4_option');
timeliness15_4_option.addEventListener('change', function () {
    if (timeliness15_4_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '4');
    }
})
const timeliness15_3_option = document.getElementById('timeliness15_3_option');
timeliness15_3_option.addEventListener('change', function () {
    if (timeliness15_3_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '3');
    }
})
const timeliness15_2_option = document.getElementById('timeliness15_2_option');
timeliness15_2_option.addEventListener('change', function () {
    if (timeliness15_2_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '2');
    }
})
const timeliness15_1_option = document.getElementById('timeliness15_1_option');
timeliness15_1_option.addEventListener('change', function () {
    if (timeliness15_1_option.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '1');
    }
})

function autofillTimeliness15(){
    const timeliness15 = localStorage.getItem(employee_id + 'Timeliness15');
    if(timeliness15 == '5'){
        timeliness15_5_option.checked = true;
    } else if(timeliness15 == '4'){
        timeliness15_4_option.checked = true;
    } else if(timeliness15 == '3'){
        timeliness15_3_option.checked = true;
    } else if(timeliness15 == '2'){
        timeliness15_2_option.checked = true;
    } else if(timeliness15 == '1'){
        timeliness15_1_option.checked = true;
    }
}

function getRateTimeliness15(){
    if (timeliness15_5_option.checked) {
        return 5;
    } else if (timeliness15_4_option.checked) {
        return 4;
    } else if (timeliness15_3_option.checked) {
        return 3;
    } else if (timeliness15_2_option.checked) {
        return 2;
    } else if (timeliness15_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}


function activateAllAutofillFunction(){
    autofillEfficiency1(); 
    autofillEfficiency3();
    autofillEfficiency4();
    autofillEfficiency5();
    autofillEfficiency6();
    autofillEfficiency7();  
    autofillEfficiency10(); 
    autofillEfficiency14();
    autofillEfficiency15();
    autofillTimeliness2();
    autofillTimeliness9();
    autofillTimeliness11(); 
    autofillTimeliness12();
    autofillTimeliness13(); 
    autofillTimeliness15(); 
    autofillQuality11();
    autofillQuality12();
    autofillQuality13();
    autofillQuality14(); 
    autofillQuality15();
    autofillQuality2();
    autofillQuality8();
    autofillQuality9();

    const savedAverageScore = parseFloat(localStorage.getItem(employee_id + 'AverageScore'));
    if (savedAverageScore) {
        document.getElementById('average-score').innerText = savedAverageScore.toFixed(3); // Show three decimal places
        // Determine the adjectival rating based on the average score
        let rating = getRating(savedAverageScore);
        document.getElementById('rating').innerText = rating; // Display the rating
    } 
}


// Teacher's and Evaluator's Adjectival Rating Variables
const teacherAverageScore = document.getElementById('teacher-average-score');
const teacherRating = document.getElementById('teacher-rating');

const evaluatorRating = document.getElementById('rating');


document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('change', calculateAverageScore);
});


// Function to handle rating selection
function selectRating(button, questionId, rating) {
    
    // Add your validation or processing logic here
}


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

    kra1 =  ((efficiency1 + 5) / 2) * 0.07 +     
    ((quality2 + timeliness2) / 2) * 0.07 +  
    ((efficiency3 + 5) / 2) * 0.07 +     
    ((efficiency4 + 5) / 2) * 0.07 ;

    kra2 = ((efficiency5 + 5) / 2) * 0.07 +     // KRA 5
    ((efficiency6 + 5) / 2) * 0.07 +     // KRA 6
    ((efficiency7 + 5) / 2) * 0.07 +     // KRA 7
    ((quality8 + 5) / 2) * 0.07;

    kra3 = ((quality9 + timeliness9) / 2) * 0.07 +  // KRA 9
    ((efficiency10 + 5) / 2) * 0.07 +    // KRA 10
    ((quality11 + timeliness11) / 2) * 0.07;

    kra4 = ((quality12 + timeliness12) / 2) * 0.07 + // KRA 12
    ((quality13 + timeliness13) / 2) * 0.07 + // KRA 13
    ((efficiency14 + quality14) / 2) * 0.07;

    plus_factor_main = ((quality15 + timeliness15 + efficiency15) / 3) * 0.02;

    // Total score for main KRAs
    let totalKraScore = 
        ((efficiency1 + 5) / 2) * 0.07 +     // KRA 1
        ((quality2 + timeliness2) / 2) * 0.07 +  // KRA 2
        ((efficiency3 + 5) / 2) * 0.07 +     // KRA 3
        ((efficiency4 + 5) / 2) * 0.07 +     // KRA 4
        ((efficiency5 + 5) / 2) * 0.07 +     // KRA 5
        ((efficiency6 + 5) / 2) * 0.07 +     // KRA 6
        ((efficiency7 + 5) / 2) * 0.07 +     // KRA 7
        ((quality8 + 5) / 2) * 0.07 +        // KRA 8
        ((quality9 + timeliness9) / 2) * 0.07 +  // KRA 9
        ((efficiency10 + 5) / 2) * 0.07 +    // KRA 10
        ((quality11 + timeliness11) / 2) * 0.07 + // KRA 11
        ((quality12 + timeliness12) / 2) * 0.07 + // KRA 12
        ((quality13 + timeliness13) / 2) * 0.07 + // KRA 13
        ((efficiency14 + quality14) / 2) * 0.07;  // KRA 14



    // Total score for the Plus Factor KRA (KRA 15)
    let plusFactorScore = quality15 + timeliness15 + efficiency15;

    // Average Score calculation
    averageScore = totalKraScore;

    // Plus Factor calculation
    plusFactor = (plusFactorScore / 3) * 0.02;

    // Final Total Score
    totalScore = averageScore + plusFactor;

    // Display the result in the "average-score" label
    document.getElementById('average-score').innerText = totalScore.toFixed(3); // Show three decimal places

    // Determine the adjectival rating based on the average score
    let rating = getRating(totalScore);
    document.getElementById('rating').innerText = rating; // Display the rating
    employee_id && localStorage.setItem(employee_id + 'AverageScore', totalScore.toFixed(3));
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

function toggleDisable() {
    var radio = document.getElementById('ratingRadio');
    var label = document.getElementById('ratingLabel');
    var div = document.getElementById('ratingDiv');
    
    if (radio.disabled) {
        // Enable radio button and make text clickable
        radio.disabled = false;
        label.style.color = "black";
        label.style.pointerEvents = "auto";
        div.style.backgroundColor = "rgba(255, 255, 255, 0.89)";
    } else {
        // Disable radio button and gray out text
        radio.disabled = true;
        label.style.color = "gray";
        label.style.pointerEvents = "none";
        div.style.backgroundColor = "rgba(245, 245, 245, 0.89)";
    }
}

// Modal logic
const logoutButton = document.getElementById('logoutLink');  // Logout button
const logoutModal = document.getElementById('logoutModal');
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Show modal when logout is clicked
logoutButton.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default logout behavior
    logoutModal.classList.remove('hidden');  // Show modal by removing 'hidden' class
});

// Hide modal when "No" is clicked
noButton.addEventListener('click', function() {
    logoutModal.classList.add('hidden');  // Hide modal by adding 'hidden' class
});

// Redirect when "Yes" is clicked
yesButton.addEventListener('click', async function() {
    try {
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/logout/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            
            window.location.href = '../../get-started.html'; 
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});











let employee_id = undefined;
let ipcrf = undefined;

async function getIPCRF() {
    try {

        let teacher_id = sessionStorage.getItem('teacher_id');  
        const formData = new FormData();
        formData.append('teacher_id', teacher_id);
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/ipcrf/part1/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData
        });

        ipcrf = await response.json();
        if (response.ok) {
            
            employee_id = ipcrf.employee_id;
            

            if (employee_id){
                employee_id = employee_id + '_evhp_';
                activateAllAutofillFunction();
            }

            teacherAverageScore.textContent = ipcrf.rating.toFixed(2);
            teacherRating.textContent = getRating(ipcrf.rating); 
            
            const content = ipcrf["content_for_teacher"];
            const con1 = content["Content Knowledge and Pedagogy"];
            const con2 = content["Learning Environment & Diversity of Learners"];
            const con3 = content["Curriculum and Planning & Assessment and Reporting"];
            const con4 = content["Community Linkages and Professional Engagement & Personal Growth and Professional Development"];
            const con5 = content["PLUS FACTOR"];

            
            
            
            
            
 
            Efficiency1_5.innerHTML = `<input type="radio"   value="5" checked disabled>  
            ${con1["1"]["EFFICIENCY"]["Rate"]} - ${con1["1"]["EFFICIENCY"][con1["1"]["EFFICIENCY"]["Rate"]]}`;
            Quality2_5.innerHTML = `<input type="radio"  value="5" checked disabled>  
            ${con1["2"]["QUALITY"]["Rate"]} - ${con1["2"]["QUALITY"][con1["2"]["QUALITY"]["Rate"]]}`;
            Timeliness2_5.innerHTML = `<input type="radio"  value="5" checked disabled>  
            ${con1["2"]["TIMELINESS"]["Rate"]} - ${con1["2"]["TIMELINESS"][con1["2"]["TIMELINESS"]["Rate"]]}`;
            Efficiency3_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con1["3"]["EFFICIENCY"]["Rate"]} - ${con1["3"]["EFFICIENCY"][con1["3"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency4_5.innerHTML = `<input type="radio"  value="5" checked disabled> 
            ${con1["4"]["EFFICIENCY"]["Rate"]} - ${con1["4"]["EFFICIENCY"][con1["4"]["EFFICIENCY"]["Rate"]]}`;
            
            Efficiency5_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con2["5"]["EFFICIENCY"]["Rate"]} - ${con2["5"]["EFFICIENCY"][con2["5"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency6_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con2["6"]["EFFICIENCY"]["Rate"]} - ${con2["6"]["EFFICIENCY"][con2["6"]["EFFICIENCY"]["Rate"]]}`;
            Efficiency7_5.innerHTML = `<input type="radio"  value="5" checked disabled> 
            ${con2["7"]["EFFICIENCY"]["Rate"]} - ${con2["7"]["EFFICIENCY"][con2["7"]["EFFICIENCY"]["Rate"]]}`;
            Quality8_5.innerHTML = `<input type="radio"  value="5" checked disabled> 
            ${con2["8"]["QUALITY"]["Rate"]} - ${con2["8"]["QUALITY"][con2["8"]["QUALITY"]["Rate"]]}`;
            
            Quality9_5.innerHTML = `<input type="radio"  value="5" checked disabled> 
            ${con3["9"]["QUALITY"]["Rate"]} - ${con3["9"]["QUALITY"][con3["9"]["QUALITY"]["Rate"]]}`;
            Timeliness9_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con3["9"]["TIMELINESS"]["Rate"]} - ${con3["9"]["TIMELINESS"][con3["9"]["TIMELINESS"]["Rate"]]}`;
            Efficiency10_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con3["10"]["EFFICIENCY"]["Rate"]} - ${con3["10"]["EFFICIENCY"][con3["10"]["EFFICIENCY"]["Rate"]]}`;
            Quality11_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con3["11"]["QUALITY"]["Rate"]} - ${con3["11"]["QUALITY"][con3["11"]["QUALITY"]["Rate"]]}`;
            Timeliness11_5.innerHTML = `<input type="radio"  value="5" checked disabled> 
            ${con3["11"]["TIMELINES"]["Rate"]} -${con3["11"]["TIMELINES"][con3["11"]["TIMELINES"]["Rate"]]}`; 
            
            Quality12_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con4["12"]["QUALITY"]["Rate"]} - ${con4["12"]["QUALITY"][con4["12"]["QUALITY"]["Rate"]]}`;
            Timeliness12_5.innerHTML = `<input type="radio" value="5" checked disabled> 
            ${con4["12"]["TIMELINES"]["Rate"]} - ${con4["12"]["TIMELINES"][con4["12"]["TIMELINES"]["Rate"]]}`;
            Quality13_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con4["13"]["QUALITY"]["Rate"]} - ${con4["13"]["QUALITY"][con4["13"]["QUALITY"]["Rate"]]}`;
            Timeliness13_5.innerHTML = `<input type="radio"  _5" value="5" checked disabled> 
            ${con4["13"]["TIMELINES"]["Rate"]} - ${con4["13"]["TIMELINES"][con4["13"]["TIMELINES"]["Rate"]]}`;
            Quality14_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con4["14"]["QUALITY"]["Rate"]} - ${con4["14"]["QUALITY"][con4["14"]["QUALITY"]["Rate"]]}`; 
            Efficiency14_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con4["14"]["EFFICIENCY"]["Rate"]} - ${con4["14"]["EFFICIENCY"][con4["14"]["EFFICIENCY"]["Rate"]]}`;

            Quality15_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con5["15"]["QUALITY"]["Rate"]} - ${con5["15"]["QUALITY"][con5["15"]["QUALITY"]["Rate"]]}`; 
            Efficiency15_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con5["15"]["EFFICIENCY"]["Rate"]} - ${con5["15"]["EFFICIENCY"][con5["15"]["EFFICIENCY"]["Rate"]]}`;
            Timeliness15_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con5["15"]["TIMELINES"]["Rate"]} - ${con5["15"]["TIMELINES"][con5["15"]["TIMELINES"]["Rate"]]}`;
 

        } else {
            window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getIPCRF();


async function updateIPCRF() {
    try {
        
        let content = ipcrf['content_for_evaluator']
                
        content['Content Knowledge and Pedagogy']['1']["EFFICIENCY"]["Rate"] = getRateEfficiency1();
        content['Content Knowledge and Pedagogy']['2']["QUALITY"]["Rate"] = getRateQuality2();
        content['Content Knowledge and Pedagogy']['2']["TIMELINESS"]["Rate"] = getRateTimeliness2();
        content['Content Knowledge and Pedagogy']['3']["EFFICIENCY"]["Rate"] = getRateEfficiency3();
        content['Content Knowledge and Pedagogy']['4']["EFFICIENCY"]["Rate"] = getRateEfficiency4();
        content['Learning Environment & Diversity of Learners']['5']["EFFICIENCY"]["Rate"] = getRateEfficiency5();
        content['Learning Environment & Diversity of Learners']['6']["EFFICIENCY"]["Rate"] = getRateEfficiency6();
        content['Learning Environment & Diversity of Learners']['7']["EFFICIENCY"]["Rate"] = getRateEfficiency7();
        content['Learning Environment & Diversity of Learners']['8']["QUALITY"]["Rate"] = getRateQuality8();
        content['Curriculum and Planning & Assessment and Reporting']['9']["QUALITY"]["Rate"] = getRateQuality9();
        content['Curriculum and Planning & Assessment and Reporting']['9']["TIMELINESS"]["Rate"] = getRateTimeliness9();
        content['Curriculum and Planning & Assessment and Reporting']['10']["EFFICIENCY"]["Rate"] = getRateEfficiency10();
        content['Curriculum and Planning & Assessment and Reporting']['11']["QUALITY"]["Rate"] = getRateQuality11();
        content['Curriculum and Planning & Assessment and Reporting']['11']["TIMELINES"]["Rate"] = getRateTimeliness11();
        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['12']["QUALITY"]["Rate"] = getRateQuality12();
        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['12']["TIMELINES"]["Rate"] = getRateTimeliness12();
        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['13']["QUALITY"]["Rate"] = getRateQuality13();
        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['13']["TIMELINES"]["Rate"] = getRateTimeliness13();
        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['14']["QUALITY"]["Rate"] = getRateQuality14();
        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['14']["EFFICIENCY"]["Rate"] = getRateEfficiency14();
        content['PLUS FACTOR']['15']["QUALITY"]["Rate"] = getRateQuality15();
        content['PLUS FACTOR']['15']["EFFICIENCY"]["Rate"] = getRateEfficiency15();
        content['PLUS FACTOR']['15']["TIMELINES"]["Rate"] = getRateTimeliness15();




        const formData = new FormData();
        formData.append('ipcrf_id', ipcrf['connection_to_other']);
        formData.append('content', JSON.stringify(content));
        formData.append('total_score', totalScore);
        formData.append('plus_factor', plusFactor);
        formData.append('average_score', averageScore);
        formData.append('plus_factor_main', plus_factor_main);
        formData.append('kra1', kra1);
        formData.append('kra2', kra2);
        formData.append('kra3', kra3);
        formData.append('kra4', kra4);

        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/check/ipcrf/part1/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData
        });

        const result = await response.json();
        if (response.ok) {
            
            alert("Form is submitted successfully");
            setTimeout(()=>{
                location.href = 'ipcrf_mt1-4.html';

            },1000)

        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}






















const requiredFields = [
    "efficiency1", "quality2", "timeliness2",
    "efficiency3", "efficiency4", "efficiency5",
    "efficiency6", "quality8", "efficiency7",
    "quality9", "timeliness9", "efficiency10",
    "quality11", "timeliness11", "quality12",
    "timeliness12", "quality13", "timeliness13",
    "quality14", "efficiency14", "quality15",
    "efficiency15", "timeliness15"
];




const saveButton = document.getElementById("saveButton");

// Function to validate the form
function validateForm() {
        let isValid = true;

        requiredFields.forEach((name) => {
            const selectedOption = document.querySelector(`input[name="${name}"]:checked`);
            const ratingWrapper = document.querySelector(`input[name="${name}"]`).closest('.ratings, .rating-options').querySelector('.rating-wrapper');

            if (!selectedOption) {
                isValid = false;

                // Add error class to show red border and background
                if (ratingWrapper) {
                    ratingWrapper.classList.add("error");
                }
            } else {
                // Remove error class if answered
                if (ratingWrapper) {
                    ratingWrapper.classList.remove("error");
                }
            }
        });

        if (!isValid) {
            alert("Please answer all sections before saving.");
        }

        return isValid;
    }

// Add click event listener to the "Save" button
saveButton.addEventListener("click", function () {
    const isFormValid = validateForm();

    // If the form is valid, proceed to the next page
    if (isFormValid) {
        updateIPCRF();
    }
});
















