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


document.addEventListener("DOMContentLoaded", function () {
        const requiredFields = [
            "efficiency1", "efficiency2", "efficiency3",
            "efficiency4", "efficiency5", "efficiency6",
            "efficiency7", "efficiency8", "quality9",
            "efficiency9", "efficiency10", "quality11",
            "timeliness11", "quality12", "timeliness12",
            "quality13", "timeliness13",
            "quality14", "efficiency14", "timeliness14",
            "quality15", "efficiency15", "timeliness15"
        ];
    
        const saveButton = document.querySelector("#saveButton");

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
    
        saveButton.addEventListener("click", function () {
            const isFormValid = validateForm();
            if (isFormValid) {
                location.href = 'teacher_forms.html';
            }
        });
    });





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