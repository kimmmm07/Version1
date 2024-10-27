const logoutButton = document.getElementById('logout-nav');  // Logout button
const logoutModal = document.getElementById('logoutModal');
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Show modal when logout is clicked
logoutButton.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default logout behavior
    logoutModal.classList.remove('hidden');  // Show modal by removing 'hidden' class
});

// Hide modal when "No" is clicked
noButton.addEventListener('click', function() {
    logoutModal.classList.add('hidden');  // Hide modal by adding 'hidden' class
});

// Redirect when "Yes" is clicked
yesButton.addEventListener('click', function() {
    window.location.href = 'index.html';  // Replace with actual logout URL
});






window.addEventListener('load', async function() { 
  const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/schools/',
      {
          method: 'GET',
          credentials: 'include'
      }
  );

  const data = await response.json();
  if (response.ok) {
      console.log("Success Data : ",data);
  } else {
      console.log("Error Data : ",data);
  }

  const response1 = await fetch('https://bnahs.pythonanywhere.com/api/admin/schools/search/',
      {
          method: 'GET',
          credentials: 'include'
      }
  );

  const data1 = await response1.json();
  if (response1.ok) {
      console.log("Success Data : ",data1);
  } else {
      console.log("Error Data : ",data1);
  }
});