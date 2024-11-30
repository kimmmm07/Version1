window.addEventListener("load", function() {
  const savedValue = localStorage.getItem("obj3");
  if (savedValue) {
      document.getElementById("score1").value = savedValue; 
  }

  const inputElement = document.getElementById("score1");
  if (inputElement) {
      inputElement.addEventListener("input", function() {
          const inputValue = inputElement.value;
          localStorage.setItem("obj3", inputValue);  
      });
  }
});