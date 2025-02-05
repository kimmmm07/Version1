// Back link
const backLink = document.querySelector(".back-link");

// Department Dropdown
const departmentSelect = document.getElementById('department');

// Instructions container
const instructionsContainer = document.getElementById('instructions');

// Form and Questions
const ratingForm = document.getElementById("ratingForm");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");
const question6 = document.getElementById("question6");
const question7 = document.getElementById("question7");
const question8 = document.getElementById("question8");
const question9 = document.getElementById("question9");

// Rating buttons for each question
const ratingButtonsQ1 = document.querySelectorAll('#question1 .rating-button');
const ratingButtonsQ2 = document.querySelectorAll('#question2 .rating-button');
const ratingButtonsQ3 = document.querySelectorAll('#question3 .rating-button');
const ratingButtonsQ4 = document.querySelectorAll('#question4 .rating-button');
const ratingButtonsQ5 = document.querySelectorAll('#question5 .rating-button');
const ratingButtonsQ6 = document.querySelectorAll('#question6 .rating-button');
const ratingButtonsQ7 = document.querySelectorAll('#question7 .rating-button');
const ratingButtonsQ8 = document.querySelectorAll('#question8 .rating-button');
const ratingButtonsQ9 = document.querySelectorAll('#question9 .rating-button');

// Variables for Question 1 rating buttons
const q1Rating3 = document.getElementById('q1-rating-3');
const q1Rating4 = document.getElementById('q1-rating-4');
const q1Rating5 = document.getElementById('q1-rating-5');
const q1Rating6 = document.getElementById('q1-rating-6');
const q1Rating7 = document.getElementById('q1-rating-7');
const q1RatingNo = document.getElementById('q1-rating-no');
 
// Variables for Question 2 rating buttons
const q2Rating3 = document.getElementById('q2-rating-3');
const q2Rating4 = document.getElementById('q2-rating-4');
const q2Rating5 = document.getElementById('q2-rating-5');
const q2Rating6 = document.getElementById('q2-rating-6');
const q2Rating7 = document.getElementById('q2-rating-7');
const q2RatingNo = document.getElementById('q2-rating-no');

// Variables for Question 3 rating buttons
const q3Rating3 = document.getElementById('q3-rating-3');
const q3Rating4 = document.getElementById('q3-rating-4');
const q3Rating5 = document.getElementById('q3-rating-5');
const q3Rating6 = document.getElementById('q3-rating-6');
const q3Rating7 = document.getElementById('q3-rating-7');
const q3RatingNo = document.getElementById('q3-rating-no');

// Variables for Question 4 rating buttons
const q4Rating3 = document.getElementById('q4-rating-3');
const q4Rating4 = document.getElementById('q4-rating-4');
const q4Rating5 = document.getElementById('q4-rating-5');
const q4Rating6 = document.getElementById('q4-rating-6');
const q4Rating7 = document.getElementById('q4-rating-7');
const q4RatingNo = document.getElementById('q4-rating-no');

// Variables for Question 5 rating buttons
const q5Rating3 = document.getElementById('q5-rating-3');
const q5Rating4 = document.getElementById('q5-rating-4');
const q5Rating5 = document.getElementById('q5-rating-5');
const q5Rating6 = document.getElementById('q5-rating-6');
const q5Rating7 = document.getElementById('q5-rating-7');
const q5RatingNo = document.getElementById('q5-rating-no');

// Variables for Question 6 rating buttons
const q6Rating3 = document.getElementById('q6-rating-3');
const q6Rating4 = document.getElementById('q6-rating-4');
const q6Rating5 = document.getElementById('q6-rating-5');
const q6Rating6 = document.getElementById('q6-rating-6');
const q6Rating7 = document.getElementById('q6-rating-7');
const q6RatingNo = document.getElementById('q6-rating-no');

// Variables for Question 7 rating buttons
const q7Rating3 = document.getElementById('q7-rating-3');
const q7Rating4 = document.getElementById('q7-rating-4');
const q7Rating5 = document.getElementById('q7-rating-5');
const q7Rating6 = document.getElementById('q7-rating-6');
const q7Rating7 = document.getElementById('q7-rating-7');
const q7RatingNo = document.getElementById('q7-rating-no');

// Variables for Question 8 rating buttons
const q8Rating3 = document.getElementById('q8-rating-3');
const q8Rating4 = document.getElementById('q8-rating-4');
const q8Rating5 = document.getElementById('q8-rating-5');
const q8Rating6 = document.getElementById('q8-rating-6');
const q8Rating7 = document.getElementById('q8-rating-7');
const q8RatingNo = document.getElementById('q8-rating-no');

// Variables for Question 9 rating buttons
const q9Rating3 = document.getElementById('q9-rating-3');
const q9Rating4 = document.getElementById('q9-rating-4');
const q9Rating5 = document.getElementById('q9-rating-5');
const q9Rating6 = document.getElementById('q9-rating-6');
const q9Rating7 = document.getElementById('q9-rating-7');
const q9RatingNo = document.getElementById('q9-rating-no');

let q1 = 0;
let q2 = 0;
let q3 = 0;
let q4 = 0;
let q5 = 0;
let q6 = 0;
let q7 = 0;
let q8 = 0;
let q9 = 0;
 
// Comment textarea
const commentsTextarea = document.getElementById('comments');

commentsTextarea.addEventListener('change', function() {
    localStorage.setItem(teacher?.employee_id + 'cot_p_comment', commentsTextarea.value);
})

// Form buttons
const backBtn = document.getElementById('backBtn');
const submitBtn = document.getElementById('SubmitBtn');

// Function to handle rating selection
function selectRating(button, questionId, rating) {
    
    if (questionId === 'q1') {
        q1 = rating;
        // Save data to localStorage
        localStorage.setItem(teacher?.employee_id + 'p_q1', rating); 
    } else if (questionId === 'q2') {
        q2 = rating;
        // Save data to localStorage
        localStorage.setItem(teacher?.employee_id + 'p_q2', rating); 
    } else if (questionId === 'q3') {
        q3 = rating;
        // Save data to localStorage
        localStorage.setItem(teacher?.employee_id + 'p_q3', rating); 
    } else if (questionId === 'q4') {
        q4 = rating;
        // Save data to localStorage
        localStorage.setItem(teacher?.employee_id + 'p_q4', rating); 
    } else if (questionId === 'q5') {
        q5 = rating;
        // Save data to localStorage
        localStorage.setItem(teacher?.employee_id + 'p_q5', rating); 
    } else if (questionId === 'q6') {
        q6 = rating;
        // Save data to localStorage
        localStorage.setItem(teacher?.employee_id + 'p_q6', rating); 
    } else if (questionId === 'q7') {
        q7 = rating;
        // Save data to localStorage
        localStorage.setItem(teacher?.employee_id + 'p_q7', rating); 
    } else if (questionId === 'q8') {
        q8 = rating;
        // Save data to localStorage
        localStorage.setItem(teacher?.employee_id + 'p_q8', rating); 
    } else if (questionId === 'q9') {
        q9 = rating;
        // Save data to localStorage
        localStorage.setItem(teacher?.employee_id + 'p_q9', rating); 
    }

    // Get all buttons in the same question group
    const buttons = button.parentNode.querySelectorAll('.rating-button');
    
    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add 'active' class to the clicked button
    button.classList.add('active');
    
}

// Check if all questions have been answered
function validateForm() {
    const questions = document.querySelectorAll('.question-container');
    let allAnswered = true;

    questions.forEach((question, index) => {
        // Check if any button in the current question is active
        const isAnswered = question.querySelector('.rating-button.active');
        if (!isAnswered) {
            alert(`Question ${index + 1} is not answered.`);
            allAnswered = false;
        }
    });

    return allAnswered;
}

document.getElementById('backBtn').addEventListener('click', function() {
    window.history.back();
});


let evaluator = undefined;
let cot = undefined;
let teacher = undefined;
let cot_content = undefined;

async function getEvaluator() {
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/profile/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',

            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            
            evaluator = data.evaluator;
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

getEvaluator();


async function getCot() {
    try {
        
        const teacher_id = sessionStorage.getItem('teacher_id');
        const quarter = sessionStorage.getItem('quarter');

        const formData = new FormData();
        formData.append('teacher_id', teacher_id);
        formData.append('quarter', quarter);

        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/cot/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,

        });

        const data = await response.json();
        if (response.ok) {
            
            cot = data.cot;
            teacher = data.teacher;
            cot_content = data.cot.content;
 

            teacher && autoFill(teacher?.employee_id);

        } else {
            // window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

getCot();


async function updateCot() {
    try {

        // subject = request.POST.get('subject')
         
        // content = json.loads(request.body) 
        // evaluated_id = content['Teacher ID']
        // questions = content['Questions']
        // comments = content['Comments']
        // cot_id = content['COT ID']
        // quarter = content['Quarter']
        
        const teacher_id = sessionStorage.getItem('teacher_id');
        const quarter = sessionStorage.getItem('quarter');

        cot_content['Teacher ID'] = teacher_id;
        cot_content['Quarter'] = quarter; 
        cot_content['Observer ID'] = evaluator.employee_id;
        cot_content['Comments'] = commentsTextarea.value;
        cot_content['Questions']['1']['Selected'] = q1;
        cot_content['Questions']['2']['Selected'] = q2;
        cot_content['Questions']['3']['Selected'] = q3;
        cot_content['Questions']['4']['Selected'] = q4;
        cot_content['Questions']['5']['Selected'] = q5;
        cot_content['Questions']['6']['Selected'] = q6;
        cot_content['Questions']['7']['Selected'] = q7;
        cot_content['Questions']['8']['Selected'] = q8;
        cot_content['Questions']['9']['Selected'] = q9;

        const formData = new FormData();
        formData.append('subject', departmentSelect.value);
        formData.append('content', JSON.stringify(cot_content));
        formData.append('cot_form_id', cot.cot_form_id);


        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/update/cot/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,

        });

        const data = await response.json();
        if (response.ok) {
            
            window.location.href = 'cot_t1-3.html'; 
        } else {
            
            alert("Something went wrong.");
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


//submitting form for proficient
submitBtn.addEventListener('click', async function(event) {
    event.preventDefault(); 

    if (validateForm()) {
        const forms = {};
        
        //All questions
        const questions = document.querySelectorAll('.question-container');

        questions.forEach((questionContainer, index) => {
            const questionText = questionContainer.querySelector('.question').textContent.trim();
            const selectedButton = questionContainer.querySelector('.rating-button.active');
            
            // added to forms object
            if (selectedButton) {
                forms[index + 1] = {
                    question: questionText,
                    selectedRating: selectedButton.textContent
                };
            }
        });

        if (!departmentSelect.value){
            alert("Please select a subject.");
            return;
        }

        const department = String(document.getElementById('department').value); //subject selected
        const comment = String(document.getElementById('comments').value);
        
        
        //display forms
        
        updateCot();

        alert('Form submitted successfully!');
        setTimeout(()=>{
            window.location.href = 'evaluator_cot_form_proficient.html';
        }, 1000)
    } else {
        alert('Please answer all questions before submitting.');
    }
});


//logout func
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


// Form ID for submission
// const ratingForm = document.getElementById('ratingForm');

// Example of assigning event listeners
// For the "Back" button
// backButton.addEventListener('click', function() {
//     window.history.back();
// });
// For the "Submit" button


departmentSelect.addEventListener('change' , function() {
    // Save data to localStorage
    localStorage.setItem(teacher?.employee_id + 'p_department', departmentSelect.value); 
})

function autoFill(teacher_id) {
    // Retrieve data from localStorage
    const savedDepartment = localStorage.getItem(teacher_id +'p_department');
    if (savedDepartment) {
        departmentSelect.value = savedDepartment;
    }

    const p_q1 = localStorage.getItem(teacher_id + 'p_q1');
    const p_q2 = localStorage.getItem(teacher_id + 'p_q2');
    const p_q3 = localStorage.getItem(teacher_id +'p_q3');
    const p_q4 = localStorage.getItem(teacher_id + 'p_q4');
    const p_q5 = localStorage.getItem(teacher_id + 'p_q5');
    const p_q6 = localStorage.getItem(teacher_id + 'p_q6');
    const p_q7 = localStorage.getItem(teacher_id + 'p_q7');
    const p_q8 = localStorage.getItem(teacher_id + 'p_q8');
    const p_q9 = localStorage.getItem(teacher_id + 'p_q9');
    const p_comment = localStorage.getItem(teacher_id + 'cot_p_comment');

    if (p_q1) {
        q1 = p_q1;
        if (q1 == 3){
            q1Rating3.classList.add('active');
        } else if (q1 == 4){
            q1Rating4.classList.add('active');
        } else if (q1 == 5){
            q1Rating5.classList.add('active');
        } else if (q1 == 6){
            q1Rating6.classList.add('active');
        } else if (q1 == 7){
            q1Rating7.classList.add('active');
        } else if (q1 == 0){
            q1RatingNo.classList.add('active');
        }
    }

    if (p_q2) {
        q2 = p_q2;
        if (q2 == 3){
            q2Rating3.classList.add('active');
        } else if (q2 == 4){
            q2Rating4.classList.add('active');
        } else if (q2 == 5){
            q2Rating5.classList.add('active');
        } else if (q2 == 6){
            q2Rating6.classList.add('active');
        } else if (q2 == 7){
            q2Rating7.classList.add('active');
        } else if (q2 == 0){
            q2RatingNo.classList.add('active');
        }
    }

    if (p_q3) {
        q3 = p_q3;
        if (q3 == 3){
            q3Rating3.classList.add('active');
        } else if (q3 == 4){
            q3Rating4.classList.add('active');
        } else if (q3 == 5){
            q3Rating5.classList.add('active');
        } else if (q3 == 6){
            q3Rating6.classList.add('active');
        } else if (q3 == 7){
            q3Rating7.classList.add('active');
        } else if (q3 == 0){
            q3RatingNo.classList.add('active');
        }
    }

    if (p_q4) {
        q4 = p_q4;
        if (q4 == 3){
            q4Rating3.classList.add('active');
        } else if (q4 == 4){
            q4Rating4.classList.add('active');
        } else if (q4 == 5){
            q4Rating5.classList.add('active');
        } else if (q4 == 6){
            q4Rating6.classList.add('active');
        } else if (q4 == 7){
            q4Rating7.classList.add('active');
        } else if (q4 == 0){
            q4RatingNo.classList.add('active');
        }
    }

    if (p_q5) {
        q5 = p_q5;
        if (q5 == 3){
            q5Rating3.classList.add('active');
        } else if (q5 == 4){
            q5Rating4.classList.add('active');
        } else if (q5 == 5){
            q5Rating5.classList.add('active');
        } else if (q5 == 6){
            q5Rating6.classList.add('active');
        } else if (q5 == 7){
            q5Rating7.classList.add('active');
        } else if (q5 == 0){
            q5RatingNo.classList.add('active');
        }
    }


    if (p_q6) {
        q6 = p_q6;
        if (q6 == 3){
            q6Rating3.classList.add('active');
        } else if (q6 == 4){
            q6Rating4.classList.add('active');
        } else if (q6 == 5){
            q6Rating5.classList.add('active');
        } else if (q6 == 6){
            q6Rating6.classList.add('active');
        } else if (q6 == 7){
            q6Rating7.classList.add('active');
        } else if (q6 == 0){
            q6RatingNo.classList.add('active');
        }
    }

    if (p_q7) {
        q7 = p_q7;
        if (q7 == 3){
            q7Rating3.classList.add('active');
        } else if (q7 == 4){
            q7Rating4.classList.add('active');
        } else if (q7 == 5){
            q7Rating5.classList.add('active');
        } else if (q7 == 6){
            q7Rating6.classList.add('active');
        } else if (q7 == 7){
            q7Rating7.classList.add('active');
        } else if (q7 == 0){
            q7RatingNo.classList.add('active');
        }
    }

    if (p_q8) {
        q8 = p_q8;
        if (q8 == 3){
            q8Rating3.classList.add('active');
        } else if (q8 == 4){
            q8Rating4.classList.add('active');
        } else if (q8 == 5){
            q8Rating5.classList.add('active');
        } else if (q8 == 6){
            q8Rating6.classList.add('active');
        } else if (q8 == 7){
            q8Rating7.classList.add('active');
        } else if (q8 == 0){
            q8RatingNo.classList.add('active');
        }
    }

    if (p_q9) {
        q9 = p_q9;
        if (q9 == 3){
            q9Rating3.classList.add('active');
        } else if (q9 == 4){
            q9Rating4.classList.add('active');
        } else if (q9 == 5){
            q9Rating5.classList.add('active');
        } else if (q9 == 6){
            q9Rating6.classList.add('active');
        } else if (q9 == 7){
            q9Rating7.classList.add('active');
        } else if (q9 == 0){
            q9RatingNo.classList.add('active');
        }
    }

    if (p_comment) {
        commentsTextarea.value = p_comment;
    }


};


