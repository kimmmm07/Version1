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
const efficiency1_3_option = document.getElementById("efficiency1_3_option");
const efficiency1_1_option = document.getElementById("efficiency1_1_option");

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
const quality2_4_option = document.getElementById("quality2_4_option");
const quality2_3_option = document.getElementById("quality2_3_option");
const quality2_2_option = document.getElementById("quality2_2_option");
const quality2_1_option = document.getElementById("quality2_1_option");

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
const timeliness2_4_option = document.getElementById("timeliness2_4_option");
const timeliness2_3_option = document.getElementById("timeliness2_3_option");
const timeliness2_2_option = document.getElementById("timeliness2_2_option");
const timeliness2_1_option = document.getElementById("timeliness2_1_option");

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
const efficiency3_3_option = document.getElementById("efficiency3_3_option");
const efficiency3_1_option = document.getElementById("efficiency3_1_option");

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
const efficiency4_3_option = document.getElementById("efficiency4_3_option");
const efficiency4_1_option = document.getElementById("efficiency4_1_option");


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
const efficiency5_3_option = document.getElementById("efficiency5_3_option");
const efficiency5_1_option = document.getElementById("efficiency5_1_option");

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
const efficiency6_3_option = document.getElementById("efficiency6_3_option");
const efficiency6_1_option = document.getElementById("efficiency6_1_option");

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
const efficiency7_3_option = document.getElementById("efficiency7_3_option");
const efficiency7_1_option = document.getElementById("efficiency7_1_option");


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
const quality8_4_option = document.getElementById("quality8_4_option");
const quality8_3_option = document.getElementById("quality8_3_option");
const quality8_2_option = document.getElementById("quality8_2_option");
const quality8_1_option = document.getElementById("quality8_1_option");


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
const quality9_4_option = document.getElementById("quality9_4_option");
const quality9_3_option = document.getElementById("quality9_3_option");
const quality9_2_option = document.getElementById("quality9_2_option");
const quality9_1_option = document.getElementById("quality9_1_option");


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
const timeliness9_4_option = document.getElementById("timeliness9_4_option");
const timeliness9_3_option = document.getElementById("timeliness9_3_option");
const timeliness9_2_option = document.getElementById("timeliness9_2_option");
const timeliness9_1_option = document.getElementById("timeliness9_1_option");


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
const efficiency10_3_option = document.getElementById("efficiency10_3_option");
const efficiency10_1_option = document.getElementById("efficiency10_1_option");

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
const quality11_4_option = document.getElementById("quality11_4_option");
const quality11_3_option = document.getElementById("quality11_3_option");
const quality11_2_option = document.getElementById("quality11_2_option");
const quality11_1_option = document.getElementById("quality11_1_option");

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
const timeliness11_4_option = document.getElementById("timeliness11_4_option");
const timeliness11_3_option = document.getElementById("timeliness11_3_option");
const timeliness11_2_option = document.getElementById("timeliness11_2_option");
const timeliness11_1_option = document.getElementById("timeliness11_1_option");


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
const quality12_4_option = document.getElementById('quality12_4_option');
const quality12_3_option = document.getElementById('quality12_3_option');
const quality12_2_option = document.getElementById('quality12_2_option');
const quality12_1_option = document.getElementById('quality12_1_option');

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
const timeliness12_4_option = document.getElementById('timeliness12_4_option');
const timeliness12_3_option = document.getElementById('timeliness12_3_option');
const timeliness12_2_option = document.getElementById('timeliness12_2_option');
const timeliness12_1_option = document.getElementById('timeliness12_1_option');

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
const quality13_4_option = document.getElementById('quality13_4_option');
const quality13_3_option = document.getElementById('quality13_3_option');
const quality13_2_option = document.getElementById('quality13_2_option');
const quality13_1_option = document.getElementById('quality13_1_option');

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
const timeliness13_4_option = document.getElementById('timeliness13_4_option');
const timeliness13_3_option = document.getElementById('timeliness13_3_option');
const timeliness13_2_option = document.getElementById('timeliness13_2_option');
const timeliness13_1_option = document.getElementById('timeliness13_1_option');

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
const quality14_4_option = document.getElementById('quality14_4_option');
const quality14_3_option = document.getElementById('quality14_3_option');
const quality14_2_option = document.getElementById('quality14_2_option');
const quality14_1_option = document.getElementById('quality14_1_option');

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
const efficiency14_4_option = document.getElementById('efficiency14_4_option');
const efficiency14_3_option = document.getElementById('efficiency14_3_option');
const efficiency14_2_option = document.getElementById('efficiency14_2_option');
const efficiency14_1_option = document.getElementById('efficiency14_1_option');

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

const Timeliness14_5 = document.getElementById('Timeliness14_5');
const timeliness14_5_option = document.getElementById('timeliness14_5_option');
const timeliness14_4_option = document.getElementById('timeliness14_4_option');
const timeliness14_3_option = document.getElementById('timeliness14_3_option');
const timeliness14_2_option = document.getElementById('timeliness14_2_option');
const timeliness14_1_option = document.getElementById('timeliness14_1_option');

function getRateTimeliness14(){
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

// PLUS FACTOR Variables
const Quality15_5 = document.getElementById('Quality15_5');
const quality15_5_option = document.getElementById('quality15_5_option');
const quality15_4_option = document.getElementById('quality15_4_option');
const quality15_3_option = document.getElementById('quality15_3_option');
const quality15_2_option = document.getElementById('quality15_2_option');
const quality15_1_option = document.getElementById('quality15_1_option');

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
const efficiency15_4_option = document.getElementById('efficiency15_4_option');
const efficiency15_3_option = document.getElementById('efficiency15_3_option');
const efficiency15_2_option = document.getElementById('efficiency15_2_option');
const efficiency15_1_option = document.getElementById('efficiency15_1_option');

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
const timeliness15_4_option = document.getElementById('timeliness15_4_option');
const timeliness15_3_option = document.getElementById('timeliness15_3_option');
const timeliness15_2_option = document.getElementById('timeliness15_2_option');
const timeliness15_1_option = document.getElementById('timeliness15_1_option');

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



// Teacher's and Evaluator's Adjectival Rating Variables
const teacherAverageScore = document.getElementById('teacher-average-score');
const teacherRating = document.getElementById('teacher-rating');

const evaluatorRating = document.getElementById('rating');


document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('change', calculateAverageScore);
});


// Function to handle rating selection
function selectRating(button, questionId, rating) {
    console.log(`Question ${questionId} rated: ${rating}`);
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
            console.log("Success Data : ", data); 
            window.location.href = '../../get-started.html'; 
        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});











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

            teacherAverageScore.textContent = ipcrf.rating.toFixed(2);
            teacherRating.textContent = getRating(ipcrf.rating); 
            
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
            Quality2_5.innerHTML = `<input type="radio"  value="5" checked disabled>  
            ${con1["2"]["QUALITY"]["Rate"]} - ${con1["2"]["QUALITY"][con1["2"]["QUALITY"]["Rate"]]}`;
            Timeliness2_5.innerHTML = `<input type="radio"  value="5" checked disabled>  
            ${con1["2"]["TIMELINESS"]["Rate"]} - ${con1["2"]["TIMELINESS"][con1["2"]["TIMELINESS"]["Rate"]]}`;
            Efficiency3_5.innerHTML = `<input type="radio"   value="5" checked disabled> 
            ${con1["3"]["EFFICIENCY"]["Rate"]} - ${con1["3"]["EFFICIENCY"][con1["3"]["EFFICIENCY"]["Rate"]]}`;
            Quality4_5.innerHTML = `<input type="radio"  value="5" checked disabled> 
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
            console.log("Error Data : ", ipcrf);
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
            console.log("Success Data : ", result);
            alert("Form is submitted successfully");
            setTimeout(()=>{
                location.href = 'ipcrf_mt1-4.html';

            },1000)

        } else {
            console.log("Error Data : ", result);
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
















