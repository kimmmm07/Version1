// Sidebar 3 Elements
const sidebar3 = document.getElementById('sidebar3');
const sidebarReturn3 = document.getElementById('sidebar-return3');
const returnBtn3 = document.getElementById('return-btn3');

// File Section 3 Elements
const fileSection3 = document.getElementById('file-section3');
const fileSectionTitle3 = document.getElementById('file-section-title3');
const fileUploadTime3 = document.getElementById('file-upload-time3');
const fileBtn3 = document.getElementById('file-btn3');

// Grade Section 3 Elements
const gradeSection3 = document.getElementById('grade-section3');
const gradeSectionTitle3 = document.getElementById('grade-section-title3');
const gradeList3 = document.getElementById('grade-list3');
const gradeItem3 = document.getElementById('grade-item-3');
const obj3Score = document.getElementById('obj3Score');
const score3 = document.getElementById('score3');
const maxScore3 = document.getElementById('max-score3');

window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj3");
  if (savedValue) {
      document.getElementById("score3").value = savedValue; 
  }

  const inputElement = document.getElementById("score3");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj3", inputValue);  
      });
  }
});