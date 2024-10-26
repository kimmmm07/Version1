// const loginForm = document.querySelector('form');
window.addEventListener('load', async function(event) {
  alert("asd");
  const formData = new FormData();
  formData.append('name', 'John Doe');
  formData.append('school_id', '12345');
  formData.append('school_name', 'Sample High School');
  formData.append('school_address', '123 Sample Street, Sample City, Sample State, 12345');
  formData.append('school_type', 'Public');
  formData.append('contact_number', '+1-234-567-890');
  formData.append('email_address', 'badorkian@gmail.com');
  formData.append('password', 'SecurePassword123');
  formData.append('confirm_password', 'SecurePassword123');
  formData.append('school_logo','');
  
  const response = await fetch('https://bnahs.pythonanywhere.com/api/register/school/',
      {
          method: 'POST',
          headers: {
              'X-Requested-With': 'XMLHttpRequest',
          }, 
          body: formData, 
          credentials: 'include', 
      }
  );
  
  
  const data = await response.json();
  if (response.ok) {
      console.log("Success Data : ",data);
  } else {
      console.log("Error Data : ",data);
  }
 });

