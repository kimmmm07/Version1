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

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (!form) {
        console.error("Form element not found.");
        return;
    }
  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData();
    
    const name = String(document.getElementById('name').value);
    const school_id = String(document.getElementById('school-id').value);
    const school_name = String(document.getElementById('school-name').value);
    const school_address = String(document.getElementById('school-address').value);
    const school_type = String(document.querySelector('.school-type-dropdown').value);
    const contact_number = String(document.getElementById('contact-info').value);
    const email = String(document.getElementById('email').value);
    const password = String(document.getElementById('password').value);
    const cpassword = String(document.getElementById('confirm-password').value);
  
    formData.append('name', name);
    formData.append('school_id', school_id);
    formData.append('school_name', school_name);
    formData.append('school_address', school_address);
    formData.append('school_type', school_type); 
    formData.append('contact_number', contact_number);
    formData.append('email_address', email);
    formData.append('password', password);
    formData.append('confirm_password', cpassword);
  
    if (password !== cpassword) {
        window.alert("Password doesn't match.");
        return;
    }
  
    const schoolLogoInput = document.querySelector('#school-logo');
    if (schoolLogoInput && schoolLogoInput.files.length > 0) {
        formData.append('school_logo', schoolLogoInput.files[0]);
    }
  
    console.log(formData);
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/register/school/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: formData,
            credentials: 'include',
        });
  
        const data = await response.json();
        if (response.ok) {
            alert("School Registered.");
            window.location.href = 'get-started.html';
        } else {
            console.log("Error Data:", data);
            window.alert("Something went wrong.");
        }
    } catch (error) {
        console.error("Fetch error:", error);
        window.alert("Network error occurred.");
    }
  });
});





