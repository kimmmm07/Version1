// Sidebar 11 Elements
const sidebar11 = document.getElementById('sidebar11');
const sidebarReturn11 = document.getElementById('sidebar-return11');
const returnBtn11 = document.getElementById('return-btn11');

// File Section 11 Elements
const fileSection11 = document.getElementById('file-section11');
const fileSectionTitle11 = document.getElementById('file-section-title11');
const fileUploadTime11 = document.getElementById('file-upload-time11');
const fileBtn11 = document.getElementById('file-btn11');

// Grade Section 11 Elements
const gradeSection11 = document.getElementById('grade-section11');
const gradeSectionTitle11 = document.getElementById('grade-section-title11');
const gradeList11 = document.getElementById('grade-list11');
const gradeItem11 = document.getElementById('grade-item-11');
const obj11Score = document.getElementById('obj11Score');
const score11 = document.getElementById('score11');
const maxScore11 = document.getElementById('max-score11');


window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj11");
  if (savedValue) {
      document.getElementById("score11").value = savedValue; 
  }

  const inputElement = document.getElementById("score11");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj11", inputValue);  
      });
  }
});