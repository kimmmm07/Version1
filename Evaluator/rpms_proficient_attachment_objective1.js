// File Section 1 Elements
const fileSection1 = document.getElementById('file-section1');
const fileSectionTitle1 = document.getElementById('file-section-title1');
const fileUploadTime1 = document.getElementById('file-upload-time1');
const fileBtn1 = document.getElementById('file-btn1');

// Grade Section 1 Elements
const gradeSection1 = document.getElementById('grade-section1');
const gradeSectionTitle1 = document.getElementById('grade-section-title1');
const gradeList1 = document.getElementById('grade-list1');
const gradeItem1 = document.getElementById('grade-item-1');
const obj1Score = document.getElementById('obj1Score');
const score1 = document.getElementById('score1');
const maxScore1 = document.getElementById('max-score1');


window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj1");
  if (savedValue) {
      document.getElementById("score1").value = savedValue; 
  }

  const inputElement = document.getElementById("score1");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj1", inputValue);  
      });
  }
});