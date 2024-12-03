// Sidebar 15 Elements
const sidebar15 = document.getElementById('sidebar15');
const sidebarReturn15 = document.getElementById('sidebar-return15');
const returnBtn15 = document.getElementById('return-btn15');

// File Section 15 Elements
const fileSection15 = document.getElementById('file-section15');
const fileSectionTitle15 = document.getElementById('file-section-title15');
const fileUploadTime15 = document.getElementById('file-upload-time15');
const fileBtn15 = document.getElementById('file-btn15');

// Grade Section 15 Elements
const gradeSection15 = document.getElementById('grade-section15');
const gradeSectionTitle15 = document.getElementById('grade-section-title15');
const gradeList15 = document.getElementById('grade-list15');
const gradeItem15 = document.getElementById('grade-item-15');
const plusfactorScoreScore = document.getElementById('plusfactorScore');
const score15 = document.getElementById('score15');
const maxScore15 = document.getElementById('max-score15');

window.addEventListener("load", function() {
  this.alert("asidad");
  const savedValue = localStorage.getItem("obj15_hp");
  if (savedValue) {
      document.getElementById("score15").value = savedValue; 
  }

  const inputElement = document.getElementById("score15");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj15_hp", inputValue);  
      });
  }
});