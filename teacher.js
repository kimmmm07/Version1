

// const response = await fetch('https://bnahs.pythonanywhere.com/api/register_teacher/',
//   {
//       method: 'POST',
//       headers: {
//           'X-Requested-With': 'XMLHttpRequest',
//       }, 
//       body: formData, 
//       credentials: 'include', 
//   }
// );


// const data = await response.json();
// if (response.ok) {
//   console.log("Success Data : ",data);
// } else {
//   console.log("Error Data : ",data);
// }



// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== '') {
//       const cookies = document.cookie.split(';');
//       for (let i = 0; i < cookies.length; i++) {
//           const cookie = cookies[i].trim();
//           if (cookie.substring(0, name.length + 1) === (name + '=')) {
//               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//               break;
//           }
//       }
//   }
//   return cookieValue;
// }

window.addEventListener('load', async function() {
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const formData = new FormData();
    formData.append('employee_id', '12345');
    formData.append('password', 'password123');

    const response = await fetch('https://bnahs.pythonanywhere.com/api/login_teacher/', {
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': getCookie('csrftoken')
        },
        credentials: 'include',
        body: formData,
    });

    const data = await response.json();
    if (response.ok) {
        console.log("Success Data : ",data);
        
    } else {
        console.log("Error Data : ",data);
        alert("Login Failed.");
    }
    
// const formData = new FormData();
// formData.append('role', 'Teacher');
// formData.append('school_id', '12345');
// formData.append('employee_id', '54321');
// formData.append('first_name', 'John');
// formData.append('middle_name', 'Rezo');
// formData.append('last_name', 'Doe');
// formData.append('email_address', 'johndoe@me.com');
// formData.append('position', 'Teacher I');
// formData.append('job_started', '2021-08-08');
// formData.append('grade_level', 'Junior High School');
// formData.append('department', 'Science');
// formData.append('password', 'password123');
// formData.append('confirm_password', 'password123');

// const response = await fetch('https://bnahs.pythonanywhere.com/api/school/register/people/',
//     {
//         method: 'POST',
//         headers: {
//             'X-Requested-With': 'XMLHttpRequest',
//         }, 
//         body: formData, 
//         credentials: 'include', 
//     }
// );


// const data = await response.json();
// if (response.ok) {
//     console.log("Success Data : ",data);
// } else {
//     console.log("Error Data : ",data);
// }


//   const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher_dashboard/',
//     {
//         method: 'GET',
//         credentials: 'include'
//     }
//   );
  
//   const data = await response.json();
//   if (response.ok) {
//     console.log("Success Data : ",data);
//   } else {
//     console.log("Error Data : ",data);
//   }

//   const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher_profile/',
//     {
//         method: 'GET',
//         credentials: 'include'
//     }
//   );
  
//   const data = await response.json();
//   if (response.ok) {
//     console.log("Success Data : ",data);
//   } else {
//     console.log("Error Data : ",data);
//   }

//   const formData = new FormData();
//   formData.append('role', 'Teacher');
//   formData.append('school_id', '12345');
//   formData.append('employee_id', '22313');
//   formData.append('first_name', 'Juan');
//   formData.append('middle_name', 'Dela');
//   formData.append('last_name', 'Cruz');
//   formData.append('email_address', 'juandc@me.com');
//   formData.append('position', 'Teacher II');
//   formData.append('job_started', 'AUGUST 20, 2021');
//   formData.append('grade_level', 'Junior High School');
//   formData.append('department', 'Science');
//   formData.append('password', 'password123');
//   formData.append('confirm_password', 'password123');

//   const response = await fetch('https://bnahs.pythonanywhere.com/api/register_teacher/',
//       {
//           method: 'POST',
//           headers: {
//               'X-Requested-With': 'XMLHttpRequest',
//           }, 
//           body: formData, 
//           credentials: 'include', 
//       }
//   );


//   const data = await response.json();
//   if (response.ok) {
//       console.log("Success Data : ",data);
//   } else {
//       console.log("Error Data : ",data);
//   }


   });

// const formData = new FormData();
// formData.append('employee_id', '12345');
// formData.append('password', 'password123');

// const response = await fetch('https://bnahs.pythonanywhere.com/api/login_teacher/', {
//   method: 'POST',
//   headers: {
//       'X-Requested-With': 'XMLHttpRequest',
//       'X-CSRFToken': getCookie('csrftoken')
//   },
//   credentials: 'include',
//   body: formData,
// });

// const data = await response.json();
// if (response.ok) {
//   console.log("Success Data : ",data);
//   window.location.href = 'register.html'; 
// } else {
//   console.log("Error Data : ",data);
// }



// ================================ FETCH DASHBOARD TEACHER ACCOUNT ================================




// // ================================ FETCH DASHBOARD TEACHER ACCOUNT ================================

// const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher_dashboard/',
//   {
//       method: 'GET',
//       credentials: 'include'
//   }
// );

// const data = await response.json();
// if (response.ok) {
//   console.log("Success Data : ",data);
// } else {
//   console.log("Error Data : ",data);
// }


// // ================================ FETCH EVALUATION TEACHER ACCOUNT ================================

// const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher_evaluation/',
//   {
//       method: 'GET',
//       credentials: 'include'
//   }
// );

// const data = await response.json();
// if (response.ok) {
//   console.log("Success Data : ",data);
// } else {
//   console.log("Error Data : ",data);
// }

// // ================================ FETCH EVALUATION TEACHER ACCOUNT ================================

// const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher_evaluation/',
//   {
//       method: 'GET',
//       credentials: 'include'
//   }
// );

// const data = await response.json();
// if (response.ok) {
//   console.log("Success Data : ",data);
// } else {
//   console.log("Error Data : ",data);
// }


// // ================================ FETCH FORM TEACHER ACCOUNT ================================

// const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher_form/',
//   {
//       method: 'GET',
//       credentials: 'include'
//   }
// );

// const data = await response.json();
// if (response.ok) {
//   console.log("Success Data : ",data);
// } else {
//   console.log("Error Data : ",data);
// }



// // ================================ FETCH SUMMARY TEACHER ACCOUNT ================================

// const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher_report/',
//   {
//       method: 'GET',
//       credentials: 'include'
//   }
// );

// const data = await response.json();
// if (response.ok) {
//   console.log("Success Data : ",data);
// } else {
//   console.log("Error Data : ",data);
// }




// // ================================ FETCH PROFILE TEACHER ACCOUNT ================================





