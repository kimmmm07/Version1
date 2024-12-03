// Sidebar 12 Elements
const sidebar12 = document.getElementById('sidebar12');
const sidebarReturn12 = document.getElementById('sidebar-return12');
const returnBtn12 = document.getElementById('return-btn12');

// File Section 12 Elements
const fileSection12 = document.getElementById('file-section12');
const fileSectionTitle12 = document.getElementById('file-section-title12');
const fileUploadTime12 = document.getElementById('file-upload-time12');
const fileBtn12 = document.getElementById('file-btn12');

// Grade Section 12 Elements
const gradeSection12 = document.getElementById('grade-section12');
const gradeSectionTitle12 = document.getElementById('grade-section-title12');
const gradeList12 = document.getElementById('grade-list12');
const gradeItem12 = document.getElementById('grade-item-12');
const obj12Score = document.getElementById('obj12Score');
const score12 = document.getElementById('score12');
const maxScore12 = document.getElementById('max-score12');

window.addEventListener("load", function() {
  this.alert("asidad");
  const savedValue = localStorage.getItem("obj12_hp");
  if (savedValue) {
      document.getElementById("score12").value = savedValue; 
  }

  const inputElement = document.getElementById("score12");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj12_hp", inputValue);  
      });
  }
});