
// Sidebar elements
const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');
const homeIcon = document.getElementById('home-icon');
const settingsIcon = document.getElementById('settings-icon');

// Floating menu elements
const floatingMenu = document.getElementById('floating-menu');
const floatingMenuHeader = document.getElementById('floating-menu-header');
const closeMenuBtn = document.getElementById('close-menu-btn');
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

// Private comment and post button
const privateCommentsTextarea = document.getElementById('private-comments-textarea');
const postButton = document.getElementById('post-button');


const class_work_id = sessionStorage.getItem('kra_1_id');
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


// Download File
function downloadFile() {
    console.log("Download button clicked");
}

downloadBtn.addEventListener('click', downloadFile);


// Dropdown

// teacherDropdownSelect.addEventListener('change', function() {
//     console.log("Selected teacher: " + teacherDropdownSelect.value);
// });


postButton.addEventListener('click', function() {
    const comment = privateCommentsTextarea.value;
    console.log("Posted comment: " + comment);
});



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
            const teacher = data.teacher;
            document.getElementById("teacher-name").textContent = teacher.fullname; 
            const submitted = data.submitted;
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



returnBtn.addEventListener('click', async function(){
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

    score.value = String(parseInt(score1.value)+parseInt(score2.value)+parseInt(score3.value)+parseInt(score4.value));
    const totalScore = score.value;


});
