// Sidebar 5 Elements
const sidebar5 = document.getElementById('sidebar5');
const sidebarReturn5 = document.getElementById('sidebar-return5');
const returnBtn5 = document.getElementById('return-btn5');

// File Section 5 Elements
const fileSection5 = document.getElementById('file-section5');
const fileSectionTitle5 = document.getElementById('file-section-title5');
const fileUploadTime5 = document.getElementById('file-upload-time5');
const fileBtn5 = document.getElementById('file-btn5');

// Grade Section 5 Elements
const gradeSection5 = document.getElementById('grade-section5');
const gradeSectionTitle5 = document.getElementById('grade-section-title5');
const gradeList5 = document.getElementById('grade-list5');
const gradeItem5 = document.getElementById('grade-item-5');
const obj5Score = document.getElementById('obj5Score');
const score5 = document.getElementById('score5');
const maxScore5 = document.getElementById('max-score5');

window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj5");
  if (savedValue) {
      document.getElementById("score5").value = savedValue; 
  }

  const inputElement = document.getElementById("score5");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj5", inputValue);  
      });
  }
});