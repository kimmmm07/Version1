//Grades

// Report Table Titles
const objective1Title = document.getElementById("objective1Title");
const objective2Title = document.getElementById("objective2Title");
const objective3Title = document.getElementById("objective3Title");
const objective4Title = document.getElementById("objective4Title");
const objective5Title = document.getElementById("objective5Title");
const objective6Title = document.getElementById("objective6Title");
const objective7Title = document.getElementById("objective7itle");
const objective8Title = document.getElementById("objective8Title");
const objective9Title = document.getElementById("objective9Title");
const objective10Title = document.getElementById("objective10Title");
const objective11Title = document.getElementById("objective11Title");
const objective12itle = document.getElementById("objective12Title");
const objective13Title = document.getElementById("objective13Title");
const objective14Title = document.getElementById("objective14itle");
const objective15Title = document.getElementById("objective15Title");

// Report Table Scores
const objective1Score = document.getElementById("objective1Score");
const objective2Score = document.getElementById("objective2Score");
const objective3Score = document.getElementById("objective3Score");
const objective4Score = document.getElementById("objective4Score");
const objective5Score = document.getElementById("objective4Score");
const objective6Score = document.getElementById("objective6Score");
const objective7Score = document.getElementById("objective7Score");
const objective8Score = document.getElementById("objective8Score");
const objective9Score = document.getElementById("objective9Score");
const objective10Score = document.getElementById("objective10Score");
const objective11Score = document.getElementById("objective11Score");
const objective12Score = document.getElementById("objective12Score");
const objective13Score = document.getElementById("objective13Score");
const objective14Score = document.getElementById("objective14Score");
const objective15Score = document.getElementById("objective15Score");

// Report Table Total Scores
const kra1totalScore = document.getElementById("kra1totalScore");
const kra2totalScore = document.getElementById("kra2totalScore");
const kra3totalScore = document.getElementById("kra3totalScore");
const kra4totalScore = document.getElementById("kra4totalScore");
const plusfactortotalScore = document.getElementById("plusfactortotalScore");


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








const class_work_id = sessionStorage.getItem('plus_factor_id');
console.log(class_work_id);
const teacher_id = sessionStorage.getItem('teacher_id');
console.log(teacher_id);
let teacher_name = undefined;




let teacher = undefined;
let submitted = undefined;
 

async function getTeacherAttachments() {
    try {

        const formData = new FormData();
        formData.append('class_work_id ', class_work_id);
        formData.append('teacher_id', teacher_id);


        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/rpms/folder/classwork/attachments/', {
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
            teacher = data.teacher;
            submitted = data.submitted?.[0];
            
            console.log(teacher);
            console.log(submitted);

            if (submitted?.file_is_checked){
                objective15Score.innerHTML = `<span id="objective15">${submitted.grade['15']['Score']}/2</span>`;
            }

            if (submitted?.is_checked){
                plusfactortotalScore.innerHTML = `<span id="objective15">${submitted.grade['15']['Score']}/2</span>`; 
            }

        } else {
            window.location.href = '../../get-started.html'; 
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

getTeacherAttachments();
























