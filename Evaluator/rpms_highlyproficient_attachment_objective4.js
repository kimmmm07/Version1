// Sidebar 4 Elements
const sidebar4 = document.getElementById('sidebar4');
const sidebarReturn4 = document.getElementById('sidebar-return4');
const returnBtn4 = document.getElementById('return-btn4');

// File Section 4 Elements
const fileSection4 = document.getElementById('file-section4');
const fileSectionTitle4 = document.getElementById('file-section-title4');
const fileUploadTime4 = document.getElementById('file-upload-time4');
const fileBtn4 = document.getElementById('file-btn4');

// Grade Section 4 Elements
const gradeSection4 = document.getElementById('grade-section4');
const gradeSectionTitle4 = document.getElementById('grade-section-title4');
const gradeList4 = document.getElementById('grade-list4');
const gradeItem4 = document.getElementById('grade-item-4');
const obj4Score = document.getElementById('obj4Score');
const score4 = document.getElementById('score4');
const maxScore4 = document.getElementById('max-score4');

window.addEventListener("load", function() {
  this.alert("asidad");
  const savedValue = localStorage.getItem("obj4_hp");
  if (savedValue) {
      document.getElementById("score4").value = savedValue; 
  }

  const inputElement = document.getElementById("score4");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj4_hp", inputValue);  
      });
  }
});