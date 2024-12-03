// Sidebar 13 Elements
const sidebar13 = document.getElementById('sidebar13');
const sidebarReturn13 = document.getElementById('sidebar-return13');
const returnBtn13 = document.getElementById('return-btn13');

// File Section 13 Elements
const fileSection13 = document.getElementById('file-section13');
const fileSectionTitle13 = document.getElementById('file-section-title13');
const fileUploadTime13 = document.getElementById('file-upload-time13');
const fileBtn13 = document.getElementById('file-btn13');

// Grade Section 13 Elements
const gradeSection13 = document.getElementById('grade-section13');
const gradeSectionTitle13 = document.getElementById('grade-section-title13');
const gradeList13 = document.getElementById('grade-list13');
const gradeItem13 = document.getElementById('grade-item-13');
const obj13Score = document.getElementById('obj13Score');
const score13 = document.getElementById('score13');
const maxScore13 = document.getElementById('max-score13');


window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj13");
  if (savedValue) {
      document.getElementById("score13").value = savedValue; 
  }

  const inputElement = document.getElementById("score13");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj13", inputValue);  
      });
  }
});