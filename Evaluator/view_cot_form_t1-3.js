// Modal logic
const logoutButton = document.getElementById('logoutLink');  // Logout button
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
yesButton.addEventListener('click', async function() {
    try {
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/logout/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data); 
            window.location.href = '../../get-started.html'; 
        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});

// Function to download the form as a PDF
document.getElementById('downloadPdf').addEventListener('click', function () {
    const formContent = document.querySelector('.container');

    // Use html2canvas to convert the HTML to canvas
    html2canvas(formContent).then(function (canvas) {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        
        // Add image to PDF
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adjust dimensions as needed
        
        // Save the generated PDF
        pdf.save('Teacher_Rating_Sheet.pdf');
    });
});


// Function to print the form
document.getElementById('printForm').addEventListener('click', function () {
    window.print();
});