// Sidebar 7 Elements
const sidebar7 = document.getElementById('sidebar7');
const sidebarReturn7 = document.getElementById('sidebar-return7');
const returnBtn7 = document.getElementById('return-btn7');

// File Section 7 Elements
const fileSection7 = document.getElementById('file-section7');
const fileSectionTitle7 = document.getElementById('file-section-title7');
const fileUploadTime7 = document.getElementById('file-upload-time7');
const fileBtn7 = document.getElementById('file-btn7');

// Grade Section 7 Elements
const gradeSection7 = document.getElementById('grade-section7');
const gradeSectionTitle7 = document.getElementById('grade-section-title7');
const gradeList7 = document.getElementById('grade-list7');
const gradeItem7 = document.getElementById('grade-item-7');
const obj7Score = document.getElementById('obj7Score');
const score7 = document.getElementById('score7');
const maxScore7 = document.getElementById('max-score7');

window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj7");
  if (savedValue) {
      document.getElementById("score7").value = savedValue; 
  }

  const inputElement = document.getElementById("score7");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj7", inputValue);  
      });
  }
});