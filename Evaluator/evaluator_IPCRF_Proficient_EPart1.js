// KRA 1 Efficiency objectives

// Efficiency for 1
const Efficiency1_5 = document.getElementById('Efficiency1_5');
const efficiency1_5_option = document.getElementById('efficiency1_5_option');
efficiency1_5_option.addEventListener('change', function () {
    if (efficiency1_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency1', '5');
    }
});

const efficiency1_3_option = document.getElementById('efficiency1_3_option');
efficiency1_3_option.addEventListener('change', function () {
    if (efficiency1_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency1', '3');
    }
});

const efficiency1_1_option = document.getElementById('efficiency1_1_option');
efficiency1_1_option.addEventListener('change', function () {
    if (efficiency1_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency1', '1');
    }
});
 
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




// Efficiency for 2
const Efficiency2_5 = document.getElementById('Efficiency2_5');
const efficiency2_5_option = document.getElementById('efficiency2_5_option');
efficiency2_5_option.addEventListener('change', function () {
    if (efficiency1_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency2', '5');
    }
});

const efficiency2_3_option = document.getElementById('efficiency2_3_option');
efficiency2_3_option.addEventListener('change', function () {
    if (efficiency2_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency2', '3');
    }
});

const efficiency2_1_option = document.getElementById('efficiency2_1_option');
efficiency2_1_option.addEventListener('change', function () {
    if (efficiency2_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency2', '1');
    }
});

function autofillEfficiency2(){
    const efficiency2 = localStorage.getItem(employee_id + 'Efficiency2');

    if(efficiency2 == '5'){
        efficiency1_5_option.checked = true;
    } else if(efficiency2 == '3'){
        efficiency2_3_option.checked = true;
    } else if(efficiency2 == '1'){
        efficiency2_1_option.checked = true;
    }
}

// Efficiency for 3
const Efficiency3_5 = document.getElementById('Efficiency3_5');
const efficiency3_5_option = document.getElementById('efficiency3_5_option');
efficiency3_5_option.addEventListener('change', function () {
    if (efficiency3_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency3', '5');
    }
});

const efficiency3_3_option = document.getElementById('efficiency3_3_option');
efficiency3_3_option.addEventListener('change', function () {
    if (efficiency3_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency3', '3');
    }
});

const efficiency3_1_option = document.getElementById('efficiency3_1_option');
efficiency3_1_option.addEventListener('change', function () {
    if (efficiency3_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency3', '1');
    }
});

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
// Efficiency for 4
const Efficiency4_5 = document.getElementById('Efficiency4_5');
const efficiency4_5_option = document.getElementById('efficiency4_5_option');
efficiency4_5_option.addEventListener('change', function () {
    if (efficiency4_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency4', '5');
    }
});

const efficiency4_3_option = document.getElementById('efficiency4_3_option');
efficiency4_3_option.addEventListener('change', function () {
    if (efficiency4_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency4', '3');
    }
});

const efficiency4_1_option = document.getElementById('efficiency4_1_option');
efficiency4_1_option.addEventListener('change', function () {
    if (efficiency4_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency4', '1');
    }
});


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
// KRA 2 Efficiency options

// 5
const Efficiency5_5 = document.getElementById('Efficiency5_5');
const efficiency5_5_option = document.getElementById('efficiency5_5_option');
efficiency5_5_option.addEventListener('change', function () {
    if (efficiency1_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency5', '5');
    }
});

const efficiency5_3_option = document.getElementById('efficiency5_3_option');
efficiency5_3_option.addEventListener('change', function () {
    if (efficiency5_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency5', '3');
    }
});

const efficiency5_1_option = document.getElementById('efficiency5_1_option');
efficiency5_1_option.addEventListener('change', function () {
    if (efficiency5_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency5', '1');
    }
});

function autofillEfficiency5(){
    const efficiency5 = localStorage.getItem(employee_id + 'Efficiency5');

    if(efficiency5 == '5'){
        efficiency1_5_option.checked = true;
    } else if(efficiency5 == '3'){
        efficiency5_3_option.checked = true;
    } else if(efficiency5 == '1'){
        efficiency5_1_option.checked = true;
    }
}

// 6
const Efficiency6_5 = document.getElementById('Efficiency6_5');
const efficiency6_5_option = document.getElementById('efficiency6_5_option');
efficiency6_5_option.addEventListener('change', function () {
    if (efficiency6_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency6', '5');
    }
});

const efficiency6_3_option = document.getElementById('efficiency6_3_option');
efficiency6_3_option.addEventListener('change', function () {
    if (efficiency6_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency6', '3');
    }
});

const efficiency6_1_option = document.getElementById('efficiency6_1_option');
efficiency6_1_option.addEventListener('change', function () {
    if (efficiency6_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency6', '1');
    }
});

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





// 7
const Efficiency7_5 = document.getElementById('Efficiency7_5');
const efficiency7_5_option = document.getElementById('efficiency7_5_option');
efficiency7_5_option.addEventListener('change', function () {
    if (efficiency7_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency7', '5');
    }
});

const efficiency7_3_option = document.getElementById('efficiency7_3_option');
efficiency7_3_option.addEventListener('change', function () {
    if (efficiency7_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency7', '3');
    }
});

const efficiency7_1_option = document.getElementById('efficiency7_1_option');
efficiency7_1_option.addEventListener('change', function () {
    if (efficiency7_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency7', '1');
    }
});

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

// 8
const Efficiency8_5 = document.getElementById('Efficiency8_5');
const efficiency8_5_option = document.getElementById('efficiency8_5_option');
efficiency8_5_option.addEventListener('change', function () {
    if (efficiency8_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency8', '5');
    }
});

const efficiency8_3_option = document.getElementById('efficiency8_3_option');
efficiency8_3_option.addEventListener('change', function () {
    if (efficiency8_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency8', '3');
    }
});

const efficiency8_1_option = document.getElementById('efficiency8_1_option');
efficiency8_1_option.addEventListener('change', function () {
    if (efficiency8_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency8', '1');
    }
});

function autofillEfficiency8(){
    const efficiency8 = localStorage.getItem(employee_id + 'Efficiency8');

    if(efficiency8 == '5'){
        efficiency8_5_option.checked = true;
    } else if(efficiency8 == '3'){
        efficiency8_3_option.checked = true;
    } else if(efficiency8 == '1'){
        efficiency8_1_option.checked = true;
    }
}



// KRA 3 Quality and Efficiency options

// 9
const Quality9_5 = document.getElementById('Quality9_5');
const quality9_5_option = document.getElementById('quality9_5_option');
quality9_5_option.addEventListener('change', function () {
    if (quality9_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality9', '5');
    }
});

const quality9_4_option = document.getElementById('quality9_4_option');
quality9_4_option.addEventListener('change', function () {
    if (quality9_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality9', '4');
    }
});

const quality9_3_option = document.getElementById('quality9_3_option');
quality9_3_option.addEventListener('change', function () {
    if (quality9_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality9', '3');
    }
});

const quality9_2_option = document.getElementById('quality9_2_option');
quality9_2_option.addEventListener('change', function () {
    if (quality9_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality9', '2');
    }
});

const quality9_1_option = document.getElementById('quality9_1_option');
quality9_1_option.addEventListener('change', function () {
    if (quality9_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality9', '1');
    }
});
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


const Efficiency9_5 = document.getElementById('Efficiency9_5');
const efficiency9_5_option = document.getElementById('efficiency9_5_option');
efficiency9_5_option.addEventListener('change', function () {
    if (efficiency9_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency9', '5');
    }
});

const efficiency9_4_option = document.getElementById('efficiency9_4_option');
efficiency9_4_option.addEventListener('change', function () {
    if (efficiency9_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency9', '4');
    }
});

const efficiency9_3_option = document.getElementById('efficiency9_3_option');
efficiency9_3_option.addEventListener('change', function () {
    if (efficiency9_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency9', '3');
    }
});

const efficiency9_2_option = document.getElementById('efficiency9_2_option');
efficiency9_2_option.addEventListener('change', function () {
    if (efficiency9_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency9', '2');
    }
});

const efficiency9_1_option = document.getElementById('efficiency9_1_option');
efficiency9_1_option.addEventListener('change', function () {
    if (efficiency9_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency9', '1');
    }
});


function autofillEfficiency9(){
    const efficiency9 = localStorage.getItem(employee_id + 'Efficiency9');

    if(efficiency9 == '5'){
        efficiency9_5_option.checked = true;
    } else if(efficiency9 == '4'){
        efficiency9_4_option.checked = true;
    } else if(efficiency9 == '3'){
        efficiency9_3_option.checked = true;    
    } else if(efficiency9 == '2'){
        efficiency9_2_option.checked = true;
    } else if(efficiency9 == '1'){
        efficiency9_1_option.checked = true;
    }
}


// 10
const Efficiency10_5 = document.getElementById('Efficiency10_5');
const efficiency10_5_option = document.getElementById('efficiency10_5_option');
efficiency10_5_option.addEventListener('change', function () {
    if (efficiency10_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency10', '5');
    }
});

const efficiency10_3_option = document.getElementById('efficiency10_3_option');
efficiency10_3_option.addEventListener('change', function () {
    if (efficiency10_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency10', '3');
    }
});

const efficiency10_1_option = document.getElementById('efficiency10_1_option');
efficiency10_1_option.addEventListener('change', function () {
    if (efficiency10_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency10', '`1`');
    }
});
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

// KRA 3 Quality and Timeliness options

// 11
const Quality11_5 = document.getElementById('Quality11_5');
const quality11_5_option = document.getElementById('quality11_5_option');
quality11_5_option.addEventListener('change', function () {
    if (quality11_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality11', '5');
    }
});

const quality11_4_option = document.getElementById('quality11_4_option');
quality11_4_option.addEventListener('change', function () {
    if (quality11_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality11', '4');
    }
});

const quality11_3_option = document.getElementById('quality11_3_option');
quality11_3_option.addEventListener('change', function () {
    if (quality11_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality11', '3');
    }
});

const quality11_2_option = document.getElementById('quality11_2_option');
quality11_2_option.addEventListener('change', function () {
    if (quality11_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality11', '2');
    }
});

const quality11_1_option = document.getElementById('quality11_1_option');
quality11_1_option.addEventListener('change', function () {
    if (quality11_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality11', '1');
    }
});
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



const Timeliness11_5 = document.getElementById('Timeliness11_5');
const timeliness11_5_option = document.getElementById('timeliness11_5_option');
timeliness11_5_option.addEventListener('change', function () {
    if (timeliness11_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '5');
    }
});

const timeliness11_4_option = document.getElementById('timeliness11_4_option');
timeliness11_4_option.addEventListener('change', function () {
    if (timeliness11_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '4');
    }
});

const timeliness11_3_option = document.getElementById('timeliness11_3_option');
timeliness11_3_option.addEventListener('change', function () {
    if (timeliness11_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '3');
    }
});

const timeliness11_2_option = document.getElementById('timeliness11_2_option');
timeliness11_2_option.addEventListener('change', function () {
    if (timeliness11_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '2');
    }
});

const timeliness11_1_option = document.getElementById('timeliness11_1_option');
timeliness11_1_option.addEventListener('change', function () {
    if (timeliness11_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '1');
    }
});

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



// KRA 4: Community Linkages and Professional Engagement & Personal Growth and Professional Development

// 12
const Quality12_5 = document.getElementById('Quality12_5');
const quality12_5_option = document.getElementById("quality12_5_option");
quality12_5_option.addEventListener('change', function () {
    if (quality12_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality12', '5');
    }
});


const quality12_4_option = document.getElementById("quality12_4_option");
quality12_4_option.addEventListener('change', function () {
    if (quality12_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality12', '4');
    }
});

const quality12_3_option = document.getElementById("quality12_3_option");
quality12_3_option.addEventListener('change', function () {
    if (quality12_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality12', '3');
    }
});

const quality12_2_option = document.getElementById("quality12_2_option");
quality12_2_option.addEventListener('change', function () {
    if (quality12_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality12', '2');
    }
});

const quality12_1_option = document.getElementById("quality12_1_option");
quality12_1_option.addEventListener('change', function () {
    if (quality12_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality12', '1');
    }
});

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


const TImeliness12_5 = document.getElementById('Timeliness12_5');
const timeliness12_5_option = document.getElementById("timeliness12_5_option");
timeliness12_5_option.addEventListener('change', function () {
    if (timeliness12_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '5');
    }
});

const timeliness12_4_option = document.getElementById("timeliness12_4_option");
timeliness12_4_option.addEventListener('change', function () {
    if (timeliness12_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '5');
    }
});

const timeliness12_3_option = document.getElementById("timeliness12_3_option");
timeliness12_3_option.addEventListener('change', function () {
    if (timeliness12_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '2');
    }
});

const timeliness12_2_option = document.getElementById("timeliness12_2_option");
timeliness12_2_option.addEventListener('change', function () {
    if (timeliness12_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '2');
    }
});

const timeliness12_1_option = document.getElementById("timeliness12_1_option");
timeliness12_1_option.addEventListener('change', function () {
    if (timeliness12_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '1');
    }
});
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



// 13
const Quality13_5 = document.getElementById('Quality13_5');
const quality13_5_option = document.getElementById("quality13_5_option");
quality13_5_option.addEventListener('change', function () {
    if (quality13_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality13', '5');
    }
});

const quality13_4_option = document.getElementById("quality13_4_option");
quality13_4_option.addEventListener('change', function () {
    if (quality13_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality13', '4');
    }
});

const quality13_3_option = document.getElementById("quality13_3_option");
quality13_3_option.addEventListener('change', function () {
    if (quality13_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality13', '3');
    }
});

const quality13_2_option = document.getElementById("quality13_2_option");
quality13_2_option.addEventListener('change', function () {
    if (quality13_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality13', '2');
    }
});

const quality13_1_option = document.getElementById("quality13_1_option");
quality13_1_option.addEventListener('change', function () {
    if (quality13_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality13', '1');
    }
});
function autofillQuality13(){
    const quality13 = localStorage.getItem(employee_id + 'Quality13');

    if(quality13 == '5'){
        quality13_5_option.checked = true;
    } else if(quality13 == '4'){
        quality13_4_option.checked = true;
    } else if(quality13 == '3'){
        quality13_2_option.checked = true;
    } else if(quality13 == '2'){
        quality13_2_option.checked = true;
    } else if(quality13 == '1'){
        quality13_1_option.checked = true;
    }
}

const Timeliness13_5 = document.getElementById('Timeliness13_5');
const timeliness13_5_option = document.getElementById("timeliness13_5_option");
timeliness13_5_option.addEventListener('change', function () {
    if (timeliness13_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '5');
    }
});

const timeliness13_4_option = document.getElementById("timeliness13_4_option");
timeliness13_4_option.addEventListener('change', function () {
    if (timeliness13_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '5');
    }
});

const timeliness13_3_option = document.getElementById("timeliness13_3_option");
timeliness13_3_option.addEventListener('change', function () {
    if (timeliness13_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '5');
    }
});

const timeliness13_2_option = document.getElementById("timeliness13_2_option");
timeliness13_2_option.addEventListener('change', function () {
    if (timeliness13_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '5');
    }
});

const timeliness13_1_option = document.getElementById("timeliness13_1_option");
timeliness13_1_option.addEventListener('change', function () {
    if (timeliness13_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '5');
    }
});

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




// 14
const Quality14_5 = document.getElementById('Quality14_5');
const quality14_5_option = document.getElementById("quality14_5_option");
quality14_5_option.addEventListener('change', function () {
    if (quality14_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality14', '5');
    }
});

const quality14_4_option = document.getElementById("quality14_4_option");
quality14_4_option.addEventListener('change', function () {
    if (quality14_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality14', '4');
    }
});

const quality14_3_option = document.getElementById("quality14_3_option");
quality14_3_option.addEventListener('change', function () {
    if (quality14_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality14', '3');
    }
});

const quality14_2_option = document.getElementById("quality14_2_option");
quality14_2_option.addEventListener('change', function () {
    if (quality14_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality14', '2');
    }
});

const quality14_1_option = document.getElementById("quality14_1_option");
quality14_1_option.addEventListener('change', function () {
    if (quality14_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality14', '1');
    }
});

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




const Efficiency14_5 = document.getElementById('Efficiency14_5');
const efficiency14_5_option = document.getElementById("efficiency14_5_option");
efficiency14_5_option.addEventListener('change', function () {
    if (efficiency14_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '5');
    }
});

const efficiency14_4_option = document.getElementById("efficiency14_4_option");
efficiency14_4_option.addEventListener('change', function () {
    if (efficiency14_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '4');
    }
});

const efficiency14_3_option = document.getElementById("efficiency14_3_option");
efficiency14_3_option.addEventListener('change', function () {
    if (efficiency14_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '3');
    }
});

const efficiency14_2_option = document.getElementById("efficiency14_2_option");
efficiency14_2_option.addEventListener('change', function () {
    if (efficiency14_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '2');
    }
});

const efficiency14_1_option = document.getElementById("efficiency14_1_option");
efficiency14_1_option.addEventListener('change', function () {
    if (efficiency14_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '1');
    }
});


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


const Timeliness14_5 = document.getElementById('Timeliness14_5');
const timeliness14_5_option = document.getElementById("timeliness14_5_option");
timeliness14_5_option.addEventListener('change', function () {
    if (timeliness14_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness14', '5');
    }
});

const timeliness14_4_option = document.getElementById("timeliness14_4_option");
timeliness14_4_option.addEventListener('change', function () {
    if (timeliness14_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness14', '4');
    }
});

const timeliness14_3_option = document.getElementById("timeliness14_3_option");
timeliness14_3_option.addEventListener('change', function () {
    if (timeliness14_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness14', '3');
    }
});

const timeliness14_2_option = document.getElementById("timeliness14_2_option");
timeliness14_2_option.addEventListener('change', function () {
    if (timeliness14_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness14', '2');
    }
});

const timeliness14_1_option = document.getElementById("timeliness14_1_option");
timeliness14_1_option.addEventListener('change', function () {
    if (timeliness14_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness14', '1');
    }
});

function autofillTimeliness14(){
    const timeliness14 = localStorage.getItem(employee_id + 'Timeliness14');

    if(timeliness14 == '5'){
        timeliness14_5_option.checked = true;
    } else if(timeliness14 == '4'){
        timeliness14_4_option.checked = true;
    } else if(timeliness14 == '3'){
        timeliness14_3_option.checked = true;
    } else if(timeliness14 == '2'){
        timeliness14_2_option.checked = true;
    } else if(timeliness14 == '1'){
        timeliness14_1_option.checked = true;
    }
}
 

// plus factor

// 15
const Quality15_5 = document.getElementById('Quality15_5');
const quality15_5_option = document.getElementById("quality15_5_option");
quality15_5_option.addEventListener('change', function () {
    if (quality15_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality15', '5');
    }
});

const quality15_4_option = document.getElementById("quality15_4_option");
quality15_4_option.addEventListener('change', function () {
    if (quality15_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality15', '4');
    }
});

const quality15_3_option = document.getElementById("quality15_3_option");
quality15_3_option.addEventListener('change', function () {
    if (quality15_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality15', '3');
    }
});

const quality15_2_option = document.getElementById("quality15_2_option");
quality15_2_option.addEventListener('change', function () {
    if (quality15_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality15', '2');
    }
});

const quality15_1_option = document.getElementById("quality15_1_option");
quality15_1_option.addEventListener('change', function () {
    if (quality15_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Quality15', '1');
    }
});
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


const Efficiency15_5 = document.getElementById('Efficiency15_5');
const efficiency15_5_option = document.getElementById("efficiency15_5_option");
efficiency15_5_option.addEventListener('change', function () {
    if (efficiency15_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '5');
    }
});

const efficiency15_4_option = document.getElementById("efficiency15_4_option");
efficiency15_4_option.addEventListener('change', function () {
    if (efficiency15_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '4');
    }
});

const efficiency15_3_option = document.getElementById("efficiency15_3_option");
efficiency15_3_option.addEventListener('change', function () {
    if (efficiency15_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '3');
    }
});

const efficiency15_2_option = document.getElementById("efficiency15_2_option");
efficiency15_2_option.addEventListener('change', function () {
    if (efficiency15_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '2');
    }
});
const efficiency15_1_option = document.getElementById("efficiency15_1_option");
efficiency15_1_option.addEventListener('change', function () {
    if (efficiency15_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '1');
    }
});
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


const Timeliness15_5 = document.getElementById('Timeliness15_5');
const timeliness15_5_option = document.getElementById("timeliness15_5_option");
timeliness15_5_option.addEventListener('change', function () {
    if (timeliness15_5_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '5');
    }
});

const timeliness15_4_option = document.getElementById("timeliness15_4_option");
timeliness15_4_option.addEventListener('change', function () {
    if (timeliness15_4_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '4');
    }
});

const timeliness15_3_option = document.getElementById("timeliness15_3_option");
timeliness15_3_option.addEventListener('change', function () {
    if (timeliness15_3_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '3');
    }
});

const timeliness15_2_option = document.getElementById("timeliness15_2_option");
timeliness15_2_option.addEventListener('change', function () {
    if (timeliness15_2_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '2');
    }
});

const timeliness15_1_option = document.getElementById("timeliness15_1_option");
timeliness15_1_option.addEventListener('change', function () {
    if (timeliness15_1_option.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '1');
    }
});

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



function activateAllAutoFill(){
    autofillEfficiency1();
    autofillEfficiency2();
    autofillEfficiency3();
    autofillEfficiency4();
    autofillEfficiency5();
    autofillEfficiency6();
    autofillEfficiency7();
    autofillEfficiency8();
    autofillEfficiency9();
    autofillEfficiency10();
    autofillEfficiency14();  
    autofillEfficiency15(); 
    autofillQuality9();
    autofillQuality11();
    autofillQuality12();
    autofillQuality13();
    autofillQuality14();
    autofillQuality15();
    autofillTimeliness11();
    autofillTimeliness12();
    autofillTimeliness13();
    autofillTimeliness14();
    autofillTimeliness15();

    const savedAverageScore = parseFloat(localStorage.getItem(employee_id + 'AverageScore'));
    if (savedAverageScore) {
        document.getElementById('evaluator-average-score').innerText = savedAverageScore.toFixed(3); // Show three decimal places
        // Determine the adjectival rating based on the average score
        let rating = getRating(savedAverageScore);
        document.getElementById('evaluator-rating').innerText = rating; // Display the rating
    } 
 
}



// Teacher's Adjectival Rating Section
const teacherAverageScoreLabel = document.getElementById("teacher-average-score");
const teacherRatingDiv = document.getElementById("teacher-rating");

// Evaluator's Adjectival Rating Section
const evaluatorAverageScoreLabel = document.getElementById("evaluator-average-score");
const evaluatorRatingDiv = document.getElementById("evaluator-rating");


document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('change', calculateAverageScore);
});


// Function to handle rating selection
function selectRating(button, questionId, rating) {
    console.log(`Question ${questionId} rated: ${rating}`);
    // Add your validation or processing logic here
}

let kra1 = 0;
let kra2 = 0;
let kra3 = 0;
let kra4 = 0;
let plus_factor_main = 0;
let plusFactor = 0;
let averageScore = 0;
let totalScore = 0;

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
    ((efficiency2 + 5) / 2) * 0.07 +
    ((efficiency3 + 5) / 2) * 0.07 +
    ((efficiency4 + 5) / 2) * 0.07;

    kra2 = ((efficiency5 + 1) / 2 ) * 0.07 +
    ((efficiency6 + 5) / 2) * 0.07 +
    ((efficiency7 + 5) / 2) * 0.07 +
    ((efficiency8 + 5) / 2) * 0.07 ;

    kra3 =  ((quality9 + efficiency9) / 2) * 0.07 +
    ((efficiency10 + 5) / 2) * 0.07 +
    ((quality11 + timeliness11) / 2) * 0.07 ;

    kra4 = ((quality12 + timeliness12) / 2) * 0.07 +
    ((quality13 + timeliness13) / 2) * 0.07 +
    ((efficiency14 + quality14 + timeliness14) / 3) * 0.07;

    plus_factor_main = quality15 + timeliness15 + efficiency15;
    
    // Total score for main KRAs
    let totalKraScore = 
        ((efficiency1 + 1) / 2) * 0.07 +
        ((efficiency2 + 1) / 2) * 0.07 +
        ((efficiency3 + 1) / 2) * 0.07 +
        ((efficiency4 + 1) / 2) * 0.07 +
        ((efficiency5 + 1) / 2 ) * 0.07 +
        ((efficiency6 + 1) / 2) * 0.07 +
        ((efficiency7 + 1) / 2) * 0.07 +
        ((efficiency8 + 1) / 2) * 0.07 +
        ((quality9 + efficiency9) / 2) * 0.07 +
        ((efficiency10 + 1) / 2) * 0.07 +
        ((quality11 + timeliness11) / 2) * 0.07 +
        ((quality12 + timeliness12) / 2) * 0.07 +
        ((quality13 + timeliness13) / 2) * 0.07 +
        ((efficiency14 + quality14 + timeliness14) / 3) * 0.07;


    // Total score for the Plus Factor KRA (KRA 15)
    let plusFactorScore = quality15 + timeliness15 + efficiency15;

    // Average Score calculation
    averageScore = totalKraScore;

    // Plus Factor calculation
    plusFactor = (plusFactorScore / 3) * 0.02;

    // Final Total Score
    totalScore = averageScore + plusFactor;

    // Display the result in the "average-score" label
    document.getElementById('evaluator-average-score').innerText = totalScore.toFixed(3); // Show three decimal places

    // Determine the adjectival rating based on the average score
    let rating = getRating(totalScore);
    document.getElementById('evaluator-rating').innerText = rating; // Display the rating
    employee_id && localStorage.setItem(employee_id + 'AverageScore', totalScore.toFixed(3));
}





function getRateEfficiency1() {
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


function getRateEfficiency2() {
    if (efficiency2_5_option.checked) {
        return 5;
    } else if (efficiency2_3_option.checked) {
        return 3;
    } else if (efficiency2_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency3() {
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

function getRateEfficiency4() {
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



function getRateEfficiency5() {
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

function getRateEfficiency6() {
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

function getRateEfficiency7() {
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

function getRateEfficiency8() {
    if (efficiency8_5_option.checked) {
        return 5;
    } else if (efficiency8_3_option.checked) {
        return 3;
    } else if (efficiency8_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}


function getRateQuality9() {
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

function getRateEfficiency9() {
    if (efficiency9_5_option.checked) {
        return 5;
    } else if (efficiency9_4_option.checked) {
        return 4;
    } else if (efficiency9_3_option.checked) {
        return 3;
    } else if (efficiency9_2_option.checked) {
        return 2;
    } else if (efficiency9_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}

function getRateEfficiency10() {
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

// Quality for 11
function getRateQuality11() {
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

// Timeliness for 11
function getRateTimeliness11() {
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

// Quality for 12
function getRateQuality12() {
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

// Timeliness for 12
function getRateTimeliness12() {
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

// Quality for 13
function getRateQuality13() {
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

// Timeliness for 13
function getRateTimeliness13() {
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

// Quality for 14
function getRateQuality14() {
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

// Efficiency for 14
function getRateEfficiency14() {
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

// Timeliness for 14
function getRateTimeliness14() {
    if (timeliness14_5_option.checked) {
        return 5;
    } else if (timeliness14_4_option.checked) {
        return 4;
    } else if (timeliness14_3_option.checked) {
        return 3;
    } else if (timeliness14_2_option.checked) {
        return 2;
    } else if (timeliness14_1_option.checked) {
        return 1;
    } else {
        return 0; // Default case if none are checked
    }
}



function getRatetimeliness15(){
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
        return 0;
    }
}

function getRateEfficiency15() {
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



function getRateQuality15() {
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




let employee_id = undefined;
let ipcrf = undefined;

async function getIPCRF() {
    try {

        const teacher_id = sessionStorage.getItem('teacher_id');
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
            console.log("Success Data : ", ipcrf); 
            employee_id = ipcrf.employee_id;
            console.log("Success Data : ", employee_id); 
            
            if (employee_id){
                employee_id = employee_id + "_evp_";
                activateAllAutoFill();
            }

            teacherAverageScoreLabel.textContent = ipcrf.rating.toFixed(2);
            teacherRatingDiv.textContent = getRating(ipcrf.rating);

            const content = ipcrf["content_for_teacher"];
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
 


        } else {
            console.log("Error Data : ", ipcrf);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getIPCRF();


async function updateIPCRF1() {
    try {
        
        let content = ipcrf['content_for_evaluator']
                
        content['Content Knowledge and Pedagogy']['1']['EFFICIENCY']['Rate'] = getRateEfficiency1();
        content['Content Knowledge and Pedagogy']['2']['EFFICIENCY']['Rate'] = getRateEfficiency2();
        content['Content Knowledge and Pedagogy']['3']['EFFICIENCY']['Rate'] = getRateEfficiency3();
        content['Content Knowledge and Pedagogy']['4']['EFFICIENCY']['Rate'] = getRateEfficiency4();

        content['Learning Environment & Diversity of Learners']['5']['EFFICIENCY']['Rate'] = getRateEfficiency5();
        content['Learning Environment & Diversity of Learners']['6']['EFFICIENCY']['Rate'] = getRateEfficiency6();
        content['Learning Environment & Diversity of Learners']['7']['EFFICIENCY']['Rate'] = getRateEfficiency7();
        content['Learning Environment & Diversity of Learners']['8']['EFFICIENCY']['Rate'] = getRateEfficiency8();

        content['Curriculum and Planning & Assessment and Reporting']['9']['EFFICIENCY']['Rate'] = getRateEfficiency9();
        content['Curriculum and Planning & Assessment and Reporting']['9']['QUALITY']['Rate'] = getRateQuality9();
        
        content['Curriculum and Planning & Assessment and Reporting']['10']['EFFICIENCY']['Rate'] = getRateEfficiency10();

        content['Curriculum and Planning & Assessment and Reporting']['11']['QUALITY']['Rate'] = getRateQuality11();
        content['Curriculum and Planning & Assessment and Reporting']['11']['TIMELINES']['Rate'] = getRateTimeliness11();

        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['12']['QUALITY']['Rate'] = getRateQuality12();
        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['12']['TIMELINES']['Rate'] = getRateTimeliness12();

        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['13']['QUALITY']['Rate'] = getRateQuality13();
        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['13']['TIMELINES']['Rate'] = getRateTimeliness13();

        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['14']['QUALITY']['Rate'] = getRateQuality14();
        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['14']['TIMELINES']['Rate'] = getRateTimeliness14();
        content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['14']['EFFICIENCY']['Rate'] = getRateEfficiency14();

        content['PLUS FACTOR']['15']['EFFICIENCY']['Rate'] = getRateEfficiency15();
        content['PLUS FACTOR']['15']['TIMELINES']['Rate'] = getRatetimeliness15();
        content['PLUS FACTOR']['15']['QUALITY']['Rate'] = getRateQuality15();


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
            console.log("Success Data : ", result); 
            location.href = 'ipcrf_t1-3.html';

        } else {
            console.log("Error Data : ", result);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}




// const saveButton = document.getElementById("saveButton");

// function validateForm() {
//     let isValid = true;

//     requiredFields.forEach((name) => {
//         const selectedOption = document.querySelector(`input[name="${name}"]:checked`);
//         const ratingWrapper = document.querySelector(`input[name="${name}"]`).closest('.ratings, .rating-options').querySelector('.rating-wrapper');

//         if (!selectedOption) {
//             isValid = false;

//             // Add error class to show red border and background
//             if (ratingWrapper) {
//                 ratingWrapper.classList.add("error");
//             }
//         } else {
//             // Remove error class if answered
//             if (ratingWrapper) {
//                 ratingWrapper.classList.remove("error");
//             }
//         }
//     });

//     if (!isValid) {
//         alert("Please answer all sections before saving.");
//     }

//     return isValid;
// }

// saveButton.addEventListener("click", function () {
//     const isFormValid = validateForm();
//     if (isFormValid) {
//         location.href = 'teacher_forms.html';
//     }
// });
















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
            console.log("Success Data : ", data); 
            // window.location.href = '../../get-started.html'; 
        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});


// document.addEventListener("DOMContentLoaded", function () {
//         const requiredFields = [
//             "efficiency1", "efficiency2", "efficiency3",
//             "efficiency4", "efficiency5", "efficiency6",
//             "efficiency7", "efficiency8", "quality9",
//             "efficiency9", "efficiency10", "quality11",
//             "timeliness11", "quality12", "timeliness12",
//             "quality13", "timeliness13",
//             "quality14", "efficiency14", "timeliness14",
//             "quality15", "efficiency15", "timeliness15"
//         ];
    
//         const saveButton = document.querySelector("#saveButton");

//         function validateForm() {
//             let isValid = true;
    
//             requiredFields.forEach((name) => {
//                 const selectedOption = document.querySelector(`input[name="${name}"]:checked`);
//                 const ratingWrapper = document.querySelector(`input[name="${name}"]`).closest('.ratings, .rating-options').querySelector('.rating-wrapper');
    
//                 if (!selectedOption) {
//                     isValid = false;
    
//                     // Add error class to show red border and background
//                     if (ratingWrapper) {
//                         ratingWrapper.classList.add("error");
//                     }
//                 } else {
//                     // Remove error class if answered
//                     if (ratingWrapper) {
//                         ratingWrapper.classList.remove("error");
//                     }
//                 }
//             });
    
//             if (!isValid) {
//                 alert("Please answer all sections before saving.");
//             }
    
//             return isValid;
//         }
    
//         saveButton.addEventListener("click", function () {
//             const isFormValid = validateForm();
//             if (isFormValid) {
//                 location.href = 'teacher_forms.html';
//             }
//         });
//     });





    // document.addEventListener("DOMContentLoaded", function () {
    //     const requiredFields = [
    //         "efficiency1", "efficiency2", "efficiency3",
    //         "efficiency4", "efficiency5", "efficiency6",
    //         "efficiency7", "efficiency8", "quality9",
    //         "efficiency9", "efficiency10", "quality11",
    //         "timeliness11", "quality12", "timeliness12",
    //         "quality13", "timeliness13",
    //         "quality14", "efficiency14", "timeliness14",
    //         "quality15", "efficiency15", "timeliness15"
    //     ];
    
    //     const saveButton = document.querySelector("#saveButton");
    
    //     // Function to validate the form
    //     function validateForm() {
    //         let isValid = true;
    
    //         // Loop through each required field to check if an option is selected
    //         requiredFields.forEach((name) => {
    //         const selectedOption = document.querySelector(`input[name="${name}"]:checked`);
    //         const ratingContainer = document.querySelector(`input[name="${name}"]`).closest('.ratings, .rating-options');
    
    
    //         if (!selectedOption) {
    //             isValid = false;
    
    //             // Highlight the .rating-options section in red
    //             if (ratingContainer) {
    //                 ratingContainer.style.border = "2px solid red";
    //                 ratingContainer.style.padding = "60px";
    //                 ratingContainer.style.borderRadius = "5px";
    //             }
    //         } else {
    //             // Reset the border if answered
    //             if (ratingContainer) {
    //                 ratingContainer.style.border = "";
    //                 ratingContainer.style.padding = "";
    //             }
    //         }
    //     });
    
    
    
    
    //         // If any required field is not filled, show alert
    //         if (!isValid) {
    //             alert("Please answer all sections before saving.");
    //         }
    
    //         return isValid;
    //     }
    
    //     // Add click event listener to the "Save" button
    //     saveButton.addEventListener("click", function () {
    //         const isFormValid = validateForm();
    
    //         // If the form is valid, proceed to the next page
    //         if (isFormValid) {
    //             location.href = 'teacher_forms.html';
    //         }
    //     });
    // });