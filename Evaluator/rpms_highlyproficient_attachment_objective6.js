// Sidebar 6 Elements
const sidebar6 = document.getElementById('sidebar6');
const sidebarReturn6 = document.getElementById('sidebar-return6');
const returnBtn6 = document.getElementById('return-btn6');

// File Section 6 Elements
const fileSection6 = document.getElementById('file-section6');
const fileSectionTitle6 = document.getElementById('file-section-title6');
const fileUploadTime6 = document.getElementById('file-upload-time6');
const fileBtn6 = document.getElementById('file-btn6');

// Grade Section 6 Elements
const gradeSection6 = document.getElementById('grade-section6');
const gradeSectionTitle6 = document.getElementById('grade-section-title6');
const gradeList6 = document.getElementById('grade-list6');
const gradeItem6 = document.getElementById('grade-item-6');
const obj6Score = document.getElementById('obj6Score');
const score6 = document.getElementById('score6');
const maxScore6 = document.getElementById('max-score6');

window.addEventListener("load", function() {
  this.alert("asidad");
  const savedValue = localStorage.getItem("obj6_hp");
  if (savedValue) {
      document.getElementById("score6").value = savedValue; 
  }

  const inputElement = document.getElementById("score6");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj6_hp", inputValue);  
      });
  }
});