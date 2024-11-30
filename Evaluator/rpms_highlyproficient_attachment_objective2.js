window.addEventListener("load", function() {
  this.alert("asidad");
  const savedValue = localStorage.getItem("obj2_hp");
  if (savedValue) {
      document.getElementById("score1").value = savedValue; 
  }

  const inputElement = document.getElementById("score1");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj2_hp", inputValue);  
      });
  }
});