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
yesButton.addEventListener('click', function() {
    window.location.href = 'logout_page.html';  // Replace with actual logout URL
});