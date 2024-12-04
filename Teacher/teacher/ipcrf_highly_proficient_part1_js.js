// KRA 1 - Objective 1
const efficiency1_5 = document.getElementById('Efficiency1_5');
efficiency1_5.addEventListener('change', function () {
    if (efficiency1_5.checked) { 
        employee_id && localStorage.setItem(employee_id + 'Efficiency1', '5');
    }
});
const efficiency1_3 = document.getElementById('Efficiency1_3');
efficiency1_3.addEventListener('change', function () {
    if (efficiency1_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency1', '3');
    }
});
const efficiency1_1 = document.getElementById('Efficiency1_1');
efficiency1_1.addEventListener('change', function () {
    if (efficiency1_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency1', '1');
    }
});

function getRateEfficiency1(){
    console.log("GgGGGGG");
    if(efficiency1_5.checked){
        return 5;
    }else if(efficiency1_3.checked){
        return 3;
    }else if(efficiency1_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 1 - Objective 2
const quality2_5 = document.getElementById('Quality2_5');
const quality2_4 = document.getElementById('Quality2_4');
const quality2_3 = document.getElementById('Quality2_3');
const quality2_2 = document.getElementById('Quality2_2');
const quality2_1 = document.getElementById('Quality2_1');

function getRateQuality2(){
    if(quality2_5.checked){
        return 5;
    }else if(quality2_4.checked){
        return 4;
    }else if(quality2_3.checked){
        return 3;
    }else if(quality2_2.checked){
        return 2;
    }else if(quality2_1.checked){
        return 1;
    }else{
        return 0;
    }
}

const timeliness2_5 = document.getElementById('Timeliness2_5');
timeliness2_5.addEventListener('change', function () {
    if (timeliness2_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness2', '5');
    }
});
const timeliness2_4 = document.getElementById('Timeliness2_4');
timeliness2_4.addEventListener('change', function () {
    if (timeliness2_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness2', '4');
    }
});
const timeliness2_3 = document.getElementById('Timeliness2_3');
timeliness2_3.addEventListener('change', function () {
    if (timeliness2_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness2', '3');
    }
});
const timeliness2_2 = document.getElementById('Timeliness2_2');
timeliness2_2.addEventListener('change', function () {
    if (timeliness2_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness2', '2');
    }
});
const timeliness2_1 = document.getElementById('Timeliness2_1');
timeliness2_1.addEventListener('change', function () {
    if (timeliness2_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness2', '1');
    }
});

function getRateTimeliness2(){
    if(timeliness2_5.checked){
        return 5;
    }else if(timeliness2_4.checked){
        return 4;
    }else if(timeliness2_3.checked){
        return 3;
    }else if(timeliness2_2.checked){
        return 2;
    }else if(timeliness2_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 2 - Objective 3
const efficiency3_5 = document.getElementById('Efficiency3_5');
efficiency3_5.addEventListener('change', function () {
    if (efficiency3_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency3', '5');
    }
}); 
const efficiency3_3 = document.getElementById('Efficiency3_3');
efficiency3_3.addEventListener('change', function () {
    if (efficiency3_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency3', '3');
    }
});
const efficiency3_1 = document.getElementById('Efficiency3_1');
efficiency3_1.addEventListener('change', function () {
    if (efficiency3_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency3', '1');
    }
});

function getRateEfficiency3(){
    if(efficiency3_5.checked){
        return 5;
    }else if(efficiency3_3.checked){
        return 3;
    }else if(efficiency3_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 2 - Objective 4
const efficiency4_5 = document.getElementById('Efficiency4_5');
efficiency4_5.addEventListener('change', function () {
    if (efficiency4_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency4', '5');
    }
}); 
const efficiency4_3 = document.getElementById('Efficiency4_3');
efficiency4_3.addEventListener('change', function () {
    if (efficiency4_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency4', '3');
    }
});
const efficiency4_1 = document.getElementById('Efficiency4_1');
efficiency4_1.addEventListener('change', function () {
    if (efficiency4_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency4', '1');
    }
});

function getRateEfficiency4(){
    if(efficiency4_5.checked){
        return 5;
    }else if(efficiency4_3.checked){
        return 3;
    }else if(efficiency4_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 2 - Objective 5
const efficiency5_5 = document.getElementById('Efficiency5_5');
efficiency5_5.addEventListener('change', function () {
    if (efficiency5_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency5', '5');
    }
}); 
const efficiency5_3 = document.getElementById('Efficiency5_3');
efficiency5_3.addEventListener('change', function () {
    if (efficiency5_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency5', '3');
    }
});
const efficiency5_1 = document.getElementById('Efficiency5_1');
efficiency5_1.addEventListener('change', function () {
    if (efficiency5_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency5', '1');
    }
});

function getRateEfficiency5(){
    if(efficiency5_5.checked){
        return 5;
    }else if(efficiency5_3.checked){
        return 3;
    }else if(efficiency5_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 2 - Objective 6
const efficiency6_5 = document.getElementById('Efficiency6_5');
efficiency6_5.addEventListener('change', function () {
    if (efficiency6_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency6', '5');
    }
});
const efficiency6_3 = document.getElementById('Efficiency6_3');
efficiency6_3.addEventListener('change', function () {
    if (efficiency6_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency6', '3');
    }
});
const efficiency6_1 = document.getElementById('Efficiency6_1');
efficiency6_1.addEventListener('change', function () {
    if (efficiency6_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency6', '1');
    }
});

function getRateEfficiency6(){
    if(efficiency6_5.checked){
        return 5;
    }else if(efficiency6_3.checked){
        return 3;
    }else if(efficiency6_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 2 - Objective 7
const efficiency7_5 = document.getElementById('Efficiency7_5');
efficiency7_5.addEventListener('change', function () {
    if (efficiency7_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency7', '5');
    }
});
const efficiency7_3 = document.getElementById('Efficiency7_3');
efficiency7_3.addEventListener('change', function () {
    if (efficiency7_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency7', '3');
    }
});
const efficiency7_1 = document.getElementById('Efficiency7_1');
efficiency7_1.addEventListener('change', function () {
    if (efficiency7_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency7', '1');
    }
});

function getRateEfficiency7(){
    if(efficiency7_5.checked){
        return 5;
    }else if(efficiency7_3.checked){
        return 3;
    }else if(efficiency7_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 2 - Objective 8
const quality8_5 = document.getElementById('Quality8_5');
quality8_5.addEventListener('change', function () {
    if (quality8_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality8', '5');
    }
});
const quality8_4 = document.getElementById('Quality8_4');
quality8_4.addEventListener('change', function () {
    if (quality8_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality8', '4');
    }
});
const quality8_3 = document.getElementById('Quality8_3');
quality8_3.addEventListener('change', function () {
    if (quality8_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality8', '3');
    }
});
const quality8_2 = document.getElementById('Quality8_2');
quality8_2.addEventListener('change', function () {
    if (quality8_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality8', '2');
    }
});
const quality8_1 = document.getElementById('Quality8_1');
quality8_1.addEventListener('change', function () {
    if (quality8_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality8', '1');
    }
});

function getRateQuality8(){
    if(quality8_5.checked){
        return 5;
    }else if(quality8_4.checked){
        return 4;
    }else if(quality8_3.checked){
        return 3;
    }else if(quality8_2.checked){
        return 2;
    }else if(quality8_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 3 - Objective 9
const quality9_1 = document.getElementById('Quality9_1');
quality9_1.addEventListener('change', function () {
    if (quality9_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality9', '1');
    }
});
const quality9_2 = document.getElementById('Quality9_2');
quality9_2.addEventListener('change', function () {
    if (quality9_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality9', '2');
    }
});
const quality9_3 = document.getElementById('Quality9_3');
quality9_3.addEventListener('change', function () {
    if (quality9_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality9', '3');
    }
});
const quality9_4 = document.getElementById('Quality9_4');
quality9_4.addEventListener('change', function () {
    if (quality9_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality9', '4');
    }
});
const quality9_5 = document.getElementById('Quality9_5');
quality9_5.addEventListener('change', function () {
    if (quality9_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality9', '5');
    }
});

function getRateQuality9(){
    if(quality9_5.checked){
        return 5;
    }else if(quality9_4.checked){
        return 4;
    }else if(quality9_3.checked){
        return 3;
    }else if(quality9_2.checked){
        return 2;
    }else if(quality9_1.checked){
        return 1;
    }else{
        return 0;
    }
}

const timeliness9_1 = document.getElementById('Timeliness9_1');
timeliness9_1.addEventListener('change', function () {
    if (timeliness9_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness9', '1');
    }
});
const timeliness9_2 = document.getElementById('Timeliness9_2');
timeliness9_2.addEventListener('change', function () {
    if (timeliness9_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness9', '2');
    }
});
const timeliness9_3 = document.getElementById('Timeliness9_3');
timeliness9_3.addEventListener('change', function () {
    if (timeliness9_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness9', '3');
    }
});
const timeliness9_4 = document.getElementById('Timeliness9_4');
timeliness9_4.addEventListener('change', function () {
    if (timeliness9_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness9', '4');
    }
});
const timeliness9_5 = document.getElementById('Timeliness9_5');
timeliness9_5.addEventListener('change', function () {
    if (timeliness9_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness9', '5');
    }
});

function getRateTimeliness9(){
    if(timeliness9_5.checked){
        return 5;
    }else if(timeliness9_4.checked){
        return 4;
    }else if(timeliness9_3.checked){
        return 3;
    }else if(timeliness9_2.checked){
        return 2;
    }else if(timeliness9_1.checked){
        return 1;
    }else{
        return 0;
    }
}


// KRA 4 - Objective 10
const efficiency10_1 = document.getElementById('Efficiency10_1');
efficiency10_1.addEventListener('change', function () {
    if (efficiency10_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency10', '1');
    }
});
const efficiency10_3 = document.getElementById('Efficiency10_3');
efficiency10_3.addEventListener('change', function () {
    if (efficiency10_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency10', '3');
    }
});
const efficiency10_5 = document.getElementById('Efficiency10_5');
efficiency10_5.addEventListener('change', function () {
    if (efficiency10_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency10', '5');
    }
});

function getRateEfficiency10(){
    if(efficiency10_5.checked){
        return 5;
    }else if(efficiency10_3.checked){
        return 3;
    }else if(efficiency10_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 3 - Objective 11
const quality11_1 = document.getElementById('Quality11_1');
quality11_1.addEventListener('change', function () {
    if (quality11_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality11', '1');
    }
});
const quality11_2 = document.getElementById('Quality11_2');
quality11_2.addEventListener('change', function () {
    if (quality11_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality11', '2');
    }
});
const quality11_3 = document.getElementById('Quality11_3');
quality11_3.addEventListener('change', function () {
    if (quality11_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality11', '3');
    }
});
const quality11_4 = document.getElementById('Quality11_4');
quality11_4.addEventListener('change', function () {
    if (quality11_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality11', '4');
    }
});
const quality11_5 = document.getElementById('Quality11_5');
quality11_5.addEventListener('change', function () {
    if (quality11_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality11', '5');
    }
});


function getRateQuality11(){
    if(quality11_5.checked){
        return 5;
    }else if(quality11_4.checked){
        return 4;
    }else if(quality11_3.checked){
        return 3;
    }else if(quality11_2.checked){
        return 2;
    }else if(quality11_1.checked){
        return 1;
    }else{
        return 0;
    }
}

const timeliness11_1 = document.getElementById('Timeliness11_1');
timeliness11_1.addEventListener('change', function () {
    if (timeliness11_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '1');
    }
});
const timeliness11_2 = document.getElementById('Timeliness11_2');
timeliness11_2.addEventListener('change', function () {
    if (timeliness11_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '2');
    }
});
const timeliness11_3 = document.getElementById('Timeliness11_3');
timeliness11_3.addEventListener('change', function () {
    if (timeliness11_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '3');
    }
});
const timeliness11_4 = document.getElementById('Timeliness11_4');
timeliness11_4.addEventListener('change', function () {
    if (timeliness11_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '4');
    }
});
const timeliness11_5 = document.getElementById('Timeliness11_5');
timeliness11_5.addEventListener('change', function () {
    if (timeliness11_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness11', '5');
    }
});

function getRateTimeliness11(){
    if(timeliness11_5.checked){
        return 5;
    }else if(timeliness11_4.checked){
        return 4;
    }else if(timeliness11_3.checked){
        return 3;
    }else if(timeliness11_2.checked){
        return 2;
    }else if(timeliness11_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 4 - Objective 12
const quality12_1 = document.getElementById('Quality12_1');
quality12_1.addEventListener('change', function () {
    if (quality12_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality12', '1');
    }
});
const quality12_2 = document.getElementById('Quality12_2');
quality12_2.addEventListener('change', function () {
    if (quality12_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality12', '2');
    }
});
const quality12_3 = document.getElementById('Quality12_3');
quality12_3.addEventListener('change', function () {
    if (quality12_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality12', '3');
    }
});
const quality12_4 = document.getElementById('Quality12_4');
quality12_4.addEventListener('change', function () {
    if (quality12_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality12', '4');
    }
});
const quality12_5 = document.getElementById('Quality12_5');
quality12_5.addEventListener('change', function () {
    if (quality12_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality12', '5');
    }
});

function getRateQuality12(){
    if(quality12_5.checked){
        return 5;
    }else if(quality12_4.checked){
        return 4;
    }else if(quality12_3.checked){
        return 3;
    }else if(quality12_2.checked){
        return 2;
    }else if(quality12_1.checked){
        return 1;
    }else{
        return 0;
    }
}

const timeliness12_1 = document.getElementById('Timeliness12_1');
timeliness12_1.addEventListener('change', function () {
    if (timeliness12_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '1');
    }
});
const timeliness12_2 = document.getElementById('Timeliness12_2');
timeliness12_2.addEventListener('change', function () {
    if (timeliness12_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '2');
    }
});
const timeliness12_3 = document.getElementById('Timeliness12_3');
timeliness12_3.addEventListener('change', function () {
    if (timeliness12_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '3');
    }
});
const timeliness12_4 = document.getElementById('Timeliness12_4');
timeliness12_4.addEventListener('change', function () {
    if (timeliness12_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '4');
    }
});
const timeliness12_5 = document.getElementById('Timeliness12_5');
timeliness12_5.addEventListener('change', function () {
    if (timeliness12_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness12', '5');
    }
});

function getRateTimeliness12(){
    if(timeliness12_5.checked){
        return 5;
    }else if(timeliness12_4.checked){
        return 4;
    }else if(timeliness12_3.checked){
        return 3;
    }else if(timeliness12_2.checked){
        return 2;
    }else if(timeliness12_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 4 - Objective 13
const quality13_1 = document.getElementById('Quality13_1');
quality13_1.addEventListener('change', function () {
    if (quality13_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality13', '1');
    }
});
const quality13_2 = document.getElementById('Quality13_2');
quality13_2.addEventListener('change', function () {
    if (quality13_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality13', '2');
    }
});
const quality13_3 = document.getElementById('Quality13_3');
quality13_3.addEventListener('change', function () {
    if (quality13_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality13', '3');
    }
});
const quality13_4 = document.getElementById('Quality13_4');
quality13_4.addEventListener('change', function () {
    if (quality13_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality13', '4');
    }
});
const quality13_5 = document.getElementById('Quality13_5');
quality13_5.addEventListener('change', function () {
    if (quality13_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality13', '5');
    }
});

function getRateQuality13(){
    if(quality13_5.checked){
        return 5;
    }else if(quality13_4.checked){
        return 4;
    }else if(quality13_3.checked){
        return 3;
    }else if(quality13_2.checked){
        return 2;
    }else if(quality13_1.checked){
        return 1;
    }else{
        return 0;
    }
}

const timeliness13_1 = document.getElementById('Timeliness13_1');
timeliness13_1.addEventListener('change', function () {
    if (timeliness13_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '1');
    }
});
const timeliness13_2 = document.getElementById('Timeliness13_2');
timeliness13_2.addEventListener('change', function () {
    if (timeliness13_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '2');
    }
});
const timeliness13_3 = document.getElementById('Timeliness13_3');
timeliness13_3.addEventListener('change', function () {
    if (timeliness13_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '3');
    }
});
const timeliness13_4 = document.getElementById('Timeliness13_4');
timeliness13_4.addEventListener('change', function () {
    if (timeliness13_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '4');
    }
});
const timeliness13_5 = document.getElementById('Timeliness13_5');
timeliness13_5.addEventListener('change', function () {
    if (timeliness13_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness13', '5');
    }
});


function getRateTimeliness13(){
    if(timeliness13_5.checked){
        return 5;
    }else if(timeliness13_4.checked){
        return 4;
    }else if(timeliness13_3.checked){
        return 3;
    }else if(timeliness13_2.checked){
        return 2;
    }else if(timeliness13_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// KRA 4 - Objective 14
const quality14_1 = document.getElementById('Quality14_1');
quality14_1.addEventListener('change', function () {
    if (quality14_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality14', '1');
    }
});
const quality14_2 = document.getElementById('Quality14_2');
quality14_2.addEventListener('change', function () {
    if (quality14_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality14', '2');
    }
});
const quality14_3 = document.getElementById('Quality14_3');
quality14_3.addEventListener('change', function () {
    if (quality14_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality14', '3');
    }
});
const quality14_4 = document.getElementById('Quality14_4');
quality14_4.addEventListener('change', function () {
    if (quality14_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality14', '4');
    }
});
const quality14_5 = document.getElementById('Quality14_5');
quality14_5.addEventListener('change', function () {
    if (quality14_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality14', '5');
    }
});

function getRateQuality14(){
    if(quality14_5.checked){
        return 5;
    }else if(quality14_4.checked){
        return 4;
    }else if(quality14_3.checked){
        return 3;
    }else if(quality14_2.checked){
        return 2;
    }else if(quality14_1.checked){
        return 1;
    }else{
        return 0;
    }
}

const efficiency14_1 = document.getElementById('Efficiency14_1');
efficiency14_1.addEventListener('change', function () {
    if (efficiency14_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '1');
    }
});
const efficiency14_2 = document.getElementById('Efficiency14_2');
efficiency14_2.addEventListener('change', function () {
    if (efficiency14_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '2');
    }
})
const efficiency14_3 = document.getElementById('Efficiency14_3');
efficiency14_3.addEventListener('change', function () {
    if (efficiency14_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '3');
    }
});
const efficiency14_4 = document.getElementById('Efficiency14_4');
efficiency14_4.addEventListener('change', function () {
    if (efficiency14_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '4');
    }
});
const efficiency14_5 = document.getElementById('Efficiency14_5');
efficiency14_5.addEventListener('change', function () {
    if (efficiency14_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency14', '5');
    }
});

function getRateEfficiency14(){
    if(efficiency14_5.checked){
        return 5;
    }else if(efficiency14_4.checked){
        return 4;
    }else if(efficiency14_3.checked){
        return 3;
    }else if(efficiency14_2.checked){
        return 2;
    }else if(efficiency14_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// Plus Factor Form Elements
const quality15_5 = document.getElementById('Quality15_5');
quality15_5.addEventListener('change', function () {
    if (quality15_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality15', '5');
    }
});
const quality15_4 = document.getElementById('Quality15_4');
quality15_4.addEventListener('change', function () {
    if (quality15_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality15', '4');
    }
});
const quality15_3 = document.getElementById('Quality15_3');
quality15_3.addEventListener('change', function () {
    if (quality15_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality15', '3');
    }
});
const quality15_2 = document.getElementById('Quality15_2');
quality15_2.addEventListener('change', function () {
    if (quality15_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Quality15', '2');
    }
});
const quality15_1 = document.getElementById('Quality15_1');
quality15_1.addEventListener('change', function () {
    if (quality15_1.checked) {
     employee_id && localStorage.setItem(employee_id + 'Quality15', '1');
    }
 });

function getRateQuality15(){
    if(quality15_5.checked){
        return 5;
    }else if(quality15_4.checked){
        return 4;
    }else if(quality15_3.checked){
        return 3;
    }else if(quality15_2.checked){
        return 2;
    }else if(quality15_1.checked){
        return 1;
    }else{
        return 0;
    }
}


const efficiency15_5 = document.getElementById('Efficiency15_5');
efficiency15_5.addEventListener('change', function () {
    if (efficiency15_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '5');
    }
});
const efficiency15_4 = document.getElementById('Efficiency15_4');
efficiency15_4.addEventListener('change', function () {
    if (efficiency15_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '4');
    }
});
const efficiency15_3 = document.getElementById('Efficiency15_3');
efficiency15_3.addEventListener('change', function () {
    if (efficiency15_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '3');
    }
})
const efficiency15_2 = document.getElementById('Efficiency15_2');
efficiency15_2.addEventListener('change', function () {
    if (efficiency15_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '2');
    }
})
const efficiency15_1 = document.getElementById('Efficiency15_1');
efficiency15_1.addEventListener('change', function () {
    if (efficiency15_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Efficiency15', '1');
    }
});

function getRateEfficiency15(){
    if(efficiency15_5.checked){
        return 5;
    }else if(efficiency15_4.checked){
        return 4;
    }else if(efficiency15_3.checked){
        return 3;
    }else if(efficiency15_2.checked){
        return 2;
    }else if(efficiency15_1.checked){
        return 1;
    }else{
        return 0;
    }
}

const timeliness15_5 = document.getElementById('Timeliness15_5');
timeliness15_5.addEventListener('change', function () {
    if (timeliness15_5.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '5');
    }
})
const timeliness15_4 = document.getElementById('Timeliness15_4');
timeliness15_4.addEventListener('change', function () {
    if (timeliness15_4.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '4');
    }
})
const timeliness15_3 = document.getElementById('Timeliness15_3');
timeliness15_3.addEventListener('change', function () {
    if (timeliness15_3.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '3');
    }
})
const timeliness15_2 = document.getElementById('Timeliness15_2');
timeliness15_2.addEventListener('change', function () {
    if (timeliness15_2.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '2');
    }
})
const timeliness15_1 = document.getElementById('Timeliness15_1');
timeliness15_2.addEventListener('change', function () {
    if (timeliness15_1.checked) {
        employee_id && localStorage.setItem(employee_id + 'Timeliness15', '1');
    }
});

function getRateTimeliness15(){
    console.log("Happen");
    if(timeliness15_5.checked){
        return 5;
    }else if(timeliness15_4.checked){
        return 4;
    }else if(timeliness15_3.checked){
        return 3;
    }else if(timeliness15_2.checked){
        return 2;
    }else if(timeliness15_1.checked){
        return 1;
    }else{
        return 0;
    }
}

// Average Score Elements
const averageScoreLabel = document.getElementById('average-score');
const ratingDiv = document.getElementById('rating');

// Buttons
const backBtn = document.querySelector('.back-btn');
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


    kra1 =  ((efficiency1 + 1) / 2) * 0.07 +     
    ((quality2 + timeliness2) / 2) * 0.07 +  
    ((efficiency3 + 1) / 2) * 0.07 +     
    ((efficiency4 + 1) / 2) * 0.07 ;

    kra2 = ((efficiency5 + 1) / 2) * 0.07 +     // KRA 5
    ((efficiency6 + 1) / 2) * 0.07 +     // KRA 6
    ((efficiency7 + 1) / 2) * 0.07 +     // KRA 7
    ((quality8 + 1) / 2) * 0.07;

    kra3 = ((quality9 + timeliness9) / 2) * 0.07 +  // KRA 9
    ((efficiency10 + 1) / 2) * 0.07 +    // KRA 10
    ((quality11 + timeliness11) / 2) * 0.07;

    kra4 = ((quality12 + timeliness12) / 2) * 0.07 + // KRA 12
    ((quality13 + timeliness13) / 2) * 0.07 + // KRA 13
    ((efficiency14 + quality14) / 2) * 0.07;

    plus_factor_main = ((quality15 + timeliness15 + efficiency15) / 3) * 0.02;


    // Total score for main KRAs
    let totalKraScore = 
        //KRA 1
        ((efficiency1 + 5) / 2) * 0.07 +     
        ((quality2 + timeliness2) / 2) * 0.07 +  
        ((efficiency3 + 5) / 2) * 0.07 +     
        ((efficiency4 + 5) / 2) * 0.07 +     

        //KRA 2
        ((efficiency5 + 5) / 2) * 0.07 +     // KRA 5
        ((efficiency6 + 5) / 2) * 0.07 +     // KRA 6
        ((efficiency7 + 5) / 2) * 0.07 +     // KRA 7
        ((quality8 + 5) / 2) * 0.07 +        // KRA 8

        //KRA 3
        ((quality9 + timeliness9) / 2) * 0.07 +  // KRA 9
        ((efficiency10 + 5) / 2) * 0.07 +    // KRA 10
        ((quality11 + timeliness11) / 2) * 0.07 + // KRA 11

        //KRA 4
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


let employee_id = undefined;

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

        ipcrf_content = await response.json();
        if (response.ok) {
            console.log("Success Data : ", ipcrf_content);  
            employee_id = ipcrf_content['ipcrf']['employee_id']
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
    

        let teacher_content = ipcrf_content['ipcrf']['content_for_teacher'];

        teacher_content['Content Knowledge and Pedagogy']['1']["EFFICIENCY"]["Rate"] = getRateEfficiency1();
        teacher_content['Content Knowledge and Pedagogy']['2']["QUALITY"]["Rate"] = getRateQuality2();
        teacher_content['Content Knowledge and Pedagogy']['2']["TIMELINESS"]["Rate"] = getRateTimeliness2();
        teacher_content['Content Knowledge and Pedagogy']['3']["EFFICIENCY"]["Rate"] = getRateEfficiency3();
        teacher_content['Content Knowledge and Pedagogy']['4']["EFFICIENCY"]["Rate"] = getRateEfficiency4();
        teacher_content['Learning Environment & Diversity of Learners']['5']["EFFICIENCY"]["Rate"] = getRateEfficiency5();
        teacher_content['Learning Environment & Diversity of Learners']['6']["EFFICIENCY"]["Rate"] = getRateEfficiency6();
        teacher_content['Learning Environment & Diversity of Learners']['7']["EFFICIENCY"]["Rate"] = getRateEfficiency7();
        teacher_content['Learning Environment & Diversity of Learners']['8']["QUALITY"]["Rate"] = getRateQuality8();
        teacher_content['Curriculum and Planning & Assessment and Reporting']['9']["QUALITY"]["Rate"] = getRateQuality9();
        teacher_content['Curriculum and Planning & Assessment and Reporting']['9']["TIMELINESS"]["Rate"] = getRateTimeliness9();
        teacher_content['Curriculum and Planning & Assessment and Reporting']['10']["EFFICIENCY"]["Rate"] = getRateEfficiency10();
        teacher_content['Curriculum and Planning & Assessment and Reporting']['11']["QUALITY"]["Rate"] = getRateQuality11();
        teacher_content['Curriculum and Planning & Assessment and Reporting']['11']["TIMELINES"]["Rate"] = getRateTimeliness11();
        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['12']["QUALITY"]["Rate"] = getRateQuality12();
        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['12']["TIMELINES"]["Rate"] = getRateTimeliness12();
        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['13']["QUALITY"]["Rate"] = getRateQuality13();
        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['13']["TIMELINES"]["Rate"] = getRateTimeliness13();
        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['14']["QUALITY"]["Rate"] = getRateQuality14();
        teacher_content['Community Linkages and Professional Engagement & Personal Growth and Professional Development']['14']["EFFICIENCY"]["Rate"] = getRateEfficiency14();
        teacher_content['PLUS FACTOR']['15']["QUALITY"]["Rate"] = getRateQuality15();
        teacher_content['PLUS FACTOR']['15']["EFFICIENCY"]["Rate"] = getRateEfficiency15();
        teacher_content['PLUS FACTOR']['15']["TIMELINES"]["Rate"] = getRateTimeliness15();

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
        } else {
            console.log("Error Data : ", data);
            // alert("Login Failed.")
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}









