// const loginForm = document.querySelector('form');
document.addEventListener('DOMContentLoaded', function() {
  const schoolLogoInput = document.getElementById('school-logo');
  const uploadLabel = document.querySelector('label[for="school-logo-upload"]');
  const uploadIcon = document.getElementById('upload-icon');

  schoolLogoInput.addEventListener('change', function() {
      const file = schoolLogoInput.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
              let img = uploadLabel.querySelector('img');

              if (img) {
                  img.src = e.target.result;
              } else {
                  img = document.createElement('img');
                  img.src = e.target.result;
                  img.style.maxWidth = '100px';
                  img.style.borderRadius = '50%';
                  uploadLabel.appendChild(img);
                  if (uploadIcon) {
                      uploadLabel.replaceChild(img, uploadIcon);
                  }
              }
          };
          reader.readAsDataURL(file);
      } 
  });
});


window.addEventListener('submit', async function(event) {
  event.preventDefault();
  const formData = new FormData();
  formData.append('name', document.getElementById('name').value);
  
  formData.append('school_id', document.getElementById('school-id').value);
  
  formData.append('school_name', document.getElementById('school-name').value);
  
  formData.append('school_address', document.getElementById('school-address').value);
  
  formData.append('school_type', document.getElementsByClassName('school-type-dropdown')[0].value); 
  
  formData.append('contact_number', document.getElementById('contact-info').value);
  
  formData.append('email_address', document.getElementById('email').value);
  
  formData.append('password', document.getElementById('password').value);
  
  formData.append('confirm_password', document.getElementById('confirm-password').value);
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById('confirm-password').value;
  if(password !== cpassword){
    this.alert("Password doesn't match.");
    return;
  }
  const form = document.querySelector('form');
  const schoolLogoInput = form.querySelector('#school-logo');
    if (schoolLogoInput.files.length > 0) {
        formData.append('school_logo', schoolLogoInput.files[0]);
    }

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
      window.location.href = 'index.html'; 
  } else {
      console.log("Error Data : ",data);
      this.alert("Something went wrong.");
  }
 });



