// Sidebar elements
const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');
const homeIcon = document.getElementById('home-icon');
const settingsIcon = document.getElementById('settings-icon');

// Floating menu elements
const floatingMenu = document.getElementById('floating-menu');
const closeBtn = document.getElementById('close-btn');
const floatingMenuList = document.getElementById('floating-menu-list');
const schoolYearLink = document.getElementById('school-year-link');


// Main content
const kraTitle = document.getElementById('kra-title');
const studentInfo = document.getElementById('student-info');
const studentDropdown = document.getElementById('student-dropdown');
const userIcon = document.getElementById('user-icon');
const studentDropdownSelect = document.getElementById('student-dropdown-select');
const turnInStatus = document.getElementById('turn-in-status');

// File preview section
const filePreview = document.getElementById('file-preview');
const filePreviewImg = document.getElementById('file-preview-img');
const fileActions = document.getElementById('file-actions');
const threeDotsBtn = document.getElementById('three-dots-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const downloadBtn = document.getElementById('download-btn');
const printBtn = document.getElementById('print-btn');

// Sidebar1 (additional sidebar for files and grades)
const sidebar1 = document.getElementById('sidebar1');
const returnBtn = document.getElementById('return-btn');
const fileSection = document.getElementById('file-section');
const gradeSection = document.getElementById('grade-section');
const totalScoreSection = document.getElementById('total-score-section');
const privateCommentsSection = document.getElementById('private-comments-section');


const score = document.getElementById("score");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");
const score4 = document.getElementById("score4");


// Grade items and score
const gradeList = document.getElementById('grade-list');
const gradeItem1 = document.getElementById('grade-item-1');
const gradeItem2 = document.getElementById('grade-item-2');
const gradeItem3 = document.getElementById('grade-item-3');
const gradeItem4 = document.getElementById('grade-item-4');

// Total Score in Sidebar
const totalScore = document.getElementById('total-score');
const totalScoreValue = document.getElementById('total-score-value');

// Private comment section
const privateCommentsTextarea = document.getElementById('private-comments-textarea');
const postButton = document.getElementById('post-button');


const class_work_id = sessionStorage.getItem('kra_2_id');
console.log(class_work_id);
const teacher_id = sessionStorage.getItem('teacher_id');
console.log(teacher_id);
let teacher_name = undefined;




document.getElementById('three-dots-btn').addEventListener('click', function() {
  const menu = document.getElementById('dropdown-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Floating menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
  const floatingMenu = document.getElementById('floating-menu');
  floatingMenu.style.display = floatingMenu.style.display === 'block' ? 'none' : 'block';
});

function closeMenu() {
    document.getElementById('floating-menu').style.display = 'none';
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
            document.getElementById("teacher-name").textContent = teacher.fullname; 
            submitted = data.submitted;
            let content = submitted['0'].grade;
            console.log(teacher);
            console.log(submitted);

            const dateStr = String(submitted['0'].created_at); 
            const date = new Date(dateStr); 

            const url = 'https://bnahs.pythonanywhere.com'+submitted['0']['file'];
            console.log(url);
            const pdfContainer = document.getElementById('pdf-container');
            document.getElementById('file-btn').addEventListener('click', function(){
                window.open(url, '_blank');
            });
            const renderPDF = async (url) => {
            const pdfjsLib = window['pdfjs-dist/build/pdf'];
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js';
        
            const pdf = await pdfjsLib.getDocument(url).promise;
            for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
                const page = await pdf.getPage(pageNumber);
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                const viewport = page.getViewport({ scale: 1.5 });
        
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                pdfContainer.appendChild(canvas);
        
                await page.render({ canvasContext: context, viewport }).promise;
            }
            };
        
            renderPDF(url).catch(err => {
            pdfContainer.innerHTML = `<p>Failed to load PDF. Please try <a href="${url}">downloading it</a>.</p>`;
            });
            const options = {
            month: 'short', 
            day: '2-digit', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true
            };

            const formattedDate = date.toLocaleString('en-US', options);
            console.log(formattedDate);

            document.getElementById("file-upload-time").textContent = "Turned in on " +formattedDate;
         
            if(submitted['0'].is_checked === true){
                returnBtn.style.display = 'none';
                score1.value = content['5'].Score;
                score1.disabled = true;
                score2.value = content['6'].Score;
                score2.disabled = true;
                score3.value = content['7'].Score;
                score3.disabled = true;
                score4.value = content['8'].Score;
                score4.disabled = true;
                score.value = String(submitted[0]["Overall Score"]);
            }

        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getTeacherAttachments();



returnBtn.addEventListener('click', async function(){
    const rpms_id = submitted['0'].attachment_id;
    let content = submitted['0'].grade;
    console.log(rpms_id);
    console.log(content);
    if(!parseInt(score1.value) || parseInt(score1.value) > 7){
        alert("Grade should not be 0 and is lower or equal to the max score.");
        return;
    }
    if(!parseInt(score2.value) || parseInt(score2.value) > 7){
        alert("Grade should not be 0 and is lower or equal to the max score.");
        return;
    }
    if(!parseInt(score3.value) || parseInt(score3.value) > 7){
        alert("Grade should not be 0 and is lower or equal to the max score.");
        return;
    }
    if(!parseInt(score4.value) || parseInt(score4.value) > 7){
        alert("Grade should not be 0 and is lower or equal to the max score.");
        return;
    }
    content['5'].Score = String(score1.value);
    content['6'].Score = String(score2.value);
    content['7'].Score = String(score3.value);
    content['8'].Score = String(score4.value);
    console.log(content);
    score.value = String(parseInt(score1.value)+parseInt(score2.value)+parseInt(score3.value)+parseInt(score4.value));
    

    const formData = new FormData();
    formData.append('rpms_id', rpms_id);
    formData.append('content', JSON.stringify(content));
    formData.append('comment', String(document.getElementById('private-comments-textarea')));

    const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/check/rpms/attachment/',
        {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            }, 
            body: formData, 
            credentials: 'include', 
        }
    );


    const data = await response.json();
    if (response.ok) {
        console.log("Success Data : ",data);
        location.reload();
    } else {
        console.log("Error Data : ",data);
    }


});
