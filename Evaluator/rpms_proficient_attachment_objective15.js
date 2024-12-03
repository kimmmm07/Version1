// Sidebar 15 Elements
const sidebar15 = document.getElementById('sidebar15');
const sidebarReturn15 = document.getElementById('sidebar-return15');
const returnBtn15 = document.getElementById('return-btn15');

// File Section 15 Elements
const fileSection15 = document.getElementById('file-section15');
const fileSectionTitle15 = document.getElementById('file-section-title15');
const fileUploadTime15 = document.getElementById('file-upload-time15');
const fileBtn15 = document.getElementById('file-btn15');

// Grade Section 15 Elements
const gradeSection15 = document.getElementById('grade-section15');
const gradeSectionTitle15 = document.getElementById('grade-section-title15');
const gradeList15 = document.getElementById('grade-list15');
const gradeItem15 = document.getElementById('grade-item-15');
const plusfactorScoreScore = document.getElementById('plusfactorScore');
const score15 = document.getElementById('score15');
const maxScore15 = document.getElementById('max-score15');


let realScore = 1;

window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj15");
  if (savedValue) {
      document.getElementById("score15").value = savedValue; 
  }

  const inputElement = document.getElementById("score15");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
        realScore = inputElement.value; 
        localStorage.setItem("obj15", realScore);  
      });
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




        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

getTeacherAttachments();






async function sendAnswer() {
    try{
        const formData = new FormData();
        let grade = submitted.grade;
        grade['15']['Score'] = realScore;
        console.log(grade);
        
        formData.append('rpms_id', submitted.attachment_id);
        formData.append('content', JSON.stringify(grade));
        formData.append('index', "1");

        const comment = document.getElementById('private-comments-textarea').value;
        formData.append('comment', comment);


        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/check/rpms/attachment/', {
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
        }

    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


returnBtn15.addEventListener('click', async() => {
    await sendAnswer();
    setTimeout(() => {
        window.location.href = 'rpms_proficient_tw_plusfactor.html';
    })
});


