// Sidebar 9 Elements
const sidebar9 = document.getElementById('sidebar9');
const sidebarReturn9 = document.getElementById('sidebar-return9');
const returnBtn9 = document.getElementById('return-btn9');

// File Section 9 Elements
const fileSection9 = document.getElementById('file-section9');
const fileSectionTitle9 = document.getElementById('file-section-title9');
const fileUploadTime9 = document.getElementById('file-upload-time9');
const fileBtn9 = document.getElementById('file-btn9');

// Grade Section 9 Elements
const gradeSection9 = document.getElementById('grade-section9');
const gradeSectionTitle9 = document.getElementById('grade-section-title9');
const gradeList9 = document.getElementById('grade-list9');
const gradeItem9 = document.getElementById('grade-item-9');
const obj9Score = document.getElementById('obj9Score');
const score9 = document.getElementById('score9');
const maxScore9 = document.getElementById('max-score9');

window.addEventListener("load", function() {
  this.alert("asidad");
  const savedValue = localStorage.getItem("obj9_hp");
  if (savedValue) {
      document.getElementById("score9").value = savedValue; 
  }

  const inputElement = document.getElementById("score9");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj9_hp", inputValue);  
      });
  }
});