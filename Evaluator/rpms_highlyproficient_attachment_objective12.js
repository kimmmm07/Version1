window.addEventListener("load", function() {
  this.alert("asidad");
  const savedValue = localStorage.getItem("obj12_hp");
  if (savedValue) {
      document.getElementById("score1").value = savedValue; 
  }

  const inputElement = document.getElementById("score1");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj12_hp", inputValue);  
      });
  }
});