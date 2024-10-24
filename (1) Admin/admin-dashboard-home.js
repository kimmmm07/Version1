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

// Tenure Chart
const tenureCtx = document.getElementById('tenureChart').getContext('2d');
new Chart(tenureCtx, {
    type: 'pie',
    data: {
        labels: ['0-3 years', '3-5 years', '5+ years'],
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
    })
