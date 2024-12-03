// Sidebar 10 Elements
const sidebar10 = document.getElementById('sidebar10');
const sidebarReturn10 = document.getElementById('sidebar-return10');
const returnBtn10 = document.getElementById('return-btn10');

// File Section 10 Elements
const fileSection10 = document.getElementById('file-section10');
const fileSectionTitle10 = document.getElementById('file-section-title10');
const fileUploadTime10 = document.getElementById('file-upload-time10');
const fileBtn10 = document.getElementById('file-btn10');

// Grade Section 10 Elements
const gradeSection10 = document.getElementById('grade-section10');
const gradeSectionTitle10 = document.getElementById('grade-section-title10');
const gradeList10 = document.getElementById('grade-list10');
const gradeItem10 = document.getElementById('grade-item-10');
const obj10Score = document.getElementById('obj10Score');
const score10 = document.getElementById('score10');
const maxScore10 = document.getElementById('max-score10');

window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj10");
  if (savedValue) {
      document.getElementById("score10").value = savedValue; 
  }

  const inputElement = document.getElementById("score10");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj10", inputValue);  
      });
  }
});