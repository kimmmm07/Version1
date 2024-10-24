const response = await fetch('https://bnahs.pythonanywhere.com/api/user/logout/',
  {
      method: 'POST',
      headers: {
          'X-Requested-With': 'XMLHttpRequest',
      }, 
      credentials: 'include', 
  }
);


const data = await response.json();
if (response.ok) {
  console.log("Success Data : ",data);
} else {
  console.log("Error Data : ",data);
}
