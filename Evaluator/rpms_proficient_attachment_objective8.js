// Sidebar 8 Elements
const sidebar8 = document.getElementById('sidebar8');
const sidebarReturn8 = document.getElementById('sidebar-return8');
const returnBtn8 = document.getElementById('return-btn8');

// File Section 8 Elements
const fileSection8 = document.getElementById('file-section8');
const fileSectionTitle8 = document.getElementById('file-section-title8');
const fileUploadTime8 = document.getElementById('file-upload-time8');
const fileBtn8 = document.getElementById('file-btn8');

// Grade Section 8 Elements
const gradeSection8 = document.getElementById('grade-section8');
const gradeSectionTitle8 = document.getElementById('grade-section-title8');
const gradeList8 = document.getElementById('grade-list8');
const gradeItem8 = document.getElementById('grade-item-8');
const obj8Score = document.getElementById('obj8Score');
const score8 = document.getElementById('score8');
const maxScore8 = document.getElementById('max-score8');

window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj8");
  if (savedValue) {
      document.getElementById("score8").value = savedValue; 
  }

  const inputElement = document.getElementById("score8");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj8", inputValue);  
      });
  }
});