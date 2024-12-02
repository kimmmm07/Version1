// Sidebar 14 Elements
const sidebar14 = document.getElementById('sidebar14');
const sidebarReturn14 = document.getElementById('sidebar-return14');
const returnBtn14 = document.getElementById('return-btn14');

// File Section 14 Elements
const fileSection14 = document.getElementById('file-section14');
const fileSectionTitle14 = document.getElementById('file-section-title14');
const fileUploadTime14 = document.getElementById('file-upload-time14');
const fileBtn14 = document.getElementById('file-btn14');

// Grade Section 14 Elements
const gradeSection14 = document.getElementById('grade-section14');
const gradeSectionTitle14 = document.getElementById('grade-section-title14');
const gradeList14 = document.getElementById('grade-list14');
const gradeItem14 = document.getElementById('grade-item-14');
const obj14Score = document.getElementById('obj14Score');
const score14 = document.getElementById('score14');
const maxScore14 = document.getElementById('max-score14');

window.addEventListener("load", function() {
  this.alert("asidad");
  const savedValue = localStorage.getItem("obj14_hp");
  if (savedValue) {
      document.getElementById("score14").value = savedValue; 
  }

  const inputElement = document.getElementById("score14");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj14_hp", inputValue);  
      });
  }
});