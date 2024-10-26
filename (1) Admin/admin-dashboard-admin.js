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