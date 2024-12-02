// Sidebar 2 Elements
const sidebar2 = document.getElementById('sidebar2');
const sidebarReturn2 = document.getElementById('sidebar-return2');
const returnBtn2 = document.getElementById('return-btn2');

// File Section 2 Elements
const fileSection2 = document.getElementById('file-section2');
const fileSectionTitle2 = document.getElementById('file-section-title2');
const fileUploadTime2 = document.getElementById('file-upload-time2');
const fileBtn2 = document.getElementById('file-btn2');

// Grade Section 2 Elements
const gradeSection2 = document.getElementById('grade-section2');
const gradeSectionTitle2 = document.getElementById('grade-section-title2');
const gradeList2 = document.getElementById('grade-list2');
const gradeItem2 = document.getElementById('grade-item-2');
const obj2Score = document.getElementById('obj2Score');
const score2 = document.getElementById('score2');  // This seems to be intended for score2, corrected here.
const maxScore2 = document.getElementById('max-score2');

window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj2");
  if (savedValue) {
      document.getElementById("score2").value = savedValue; 
  }

  const inputElement = document.getElementById("score2");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj2", inputValue);  
      });
  }
});