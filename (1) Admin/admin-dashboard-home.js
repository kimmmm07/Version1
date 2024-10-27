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




// Submission Rate Chart
const submissionRateCtx = document.getElementById('submissionRateChart').getContext('2d');
new Chart(submissionRateCtx, {
    type: 'bar',
    data: {
        labels: ['Benigno "Ninoy" Aquino High School', 'Upper Bicutan National High School', 'Taguig National High School', 'Signal Village National High School', 'President Diosdado Macapagal High School', 'Western Bicutan National High School'],
        datasets: [{
            label: 'Evaluation Submission Rate',
            data: [100, 20, 50, 40, 60, 45],
            backgroundColor: '#6a41fc',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

// Distribution of Ratings Chart
const distributionChartCtx = document.getElementById('distributionChart').getContext('2d');
new Chart(distributionChartCtx, {
    type: 'bar',
    data: {
        labels: ['Benigno "Ninoy" Aquino High School', 'Upper Bicutan National High School', 'Taguig National High School', 'Signal Village National High School', 'President Diosdado Macapagal High School', 'Western Bicutan National High School'],
        datasets: [{
            label: 'Distribution of Ratings',
            data: [5, 1, 2, 3, 4, 2],
            backgroundColor: '#6a41fc',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

// Recommendations Chart
const recommendationCtx = document.getElementById('recommendationChart').getContext('2d');
new Chart(recommendationCtx, {
    type: 'pie',
    data: {
        labels: ['Promotion', 'Termination', 'Retention'],
        datasets: [{
            data: [39.11, 28.06, 23.13],
            backgroundColor: ['#6a41fc', '#ff6384', '#36a2eb'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});


const logout = document.getElementById("logout");
logout.addEventListener('click', async function (event) {
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
            window.location.href = '../../index.html'; 
        } else {
            console.log("Error Data : ", data);
            alert("Login Failed.")
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});

window.addEventListener('load', async function() { 
    const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/schools/count//',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data = await response.json();
    if (response.ok) {
        console.log("Success Data : ",data);
        this.document.getElementById("total-school").textContent = data.total_schools;
    } else {
        console.log("Error Data : ",data);
    }

    const response1 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/teacher/evaluated/count/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data1 = await response1.json();
    if (response1.ok) {
        console.log("Success Data : ",data1);
        this.document.getElementById("evaluation-conducted").textContent = data1.total_evaluation_conducted;
    } else {
        console.log("Error Data : ",data1);
    }

    const response2 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/teacher/count/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data2 = await response2.json();
    if (response2.ok) {
        console.log("Success Data : ",data2);
        this.document.getElementById("total-teacher").textContent = data2.total_teachers;
    } else {
        console.log("Error Data : ",data2);
    }

    const response3 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/teacher/evaluation/pending/count/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data3 = await response3.json();
    if (response3.ok) {
        console.log("Success Data : ",data3);
        this.document.getElementById("total-pending").textContent = data3.total_pending_evaluation;
    } else {
        console.log("Error Data : ",data3);
    }

    const response4 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/submission/rate/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data4 = await response4.json();
    if (response4.ok) {
        console.log("Success Data : ",data4);
    } else {
        console.log("Error Data : ",data4);
    }

    const response5 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/teachers/tenure/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data5 = await response5.json();
    if (response5.ok) {
        console.log("Success Data : ",data5);

        // Tenure Chart
        const tenureCtx = document.getElementById('tenureChart').getContext('2d');
        new Chart(tenureCtx, {
            type: 'pie',
            data: {
                labels: ['0-3 years', '3-5 years', '5+ years'],
                datasets: [{
                    data: [
                        data5["0-3 years"],
                        data5["3-5 years"],
                        data5["5+ years"]
                    ],
                    backgroundColor: ['#6a41fc', '#ff6384', '#36a2eb'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    } else {
        console.log("Error Data : ",data5);
    }
});




