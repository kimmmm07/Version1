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
  
} else {
  
}
