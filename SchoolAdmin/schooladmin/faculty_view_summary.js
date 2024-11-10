window.onload = function() {
// KRA Breakdown Bar Chart
var ctxKRA = document.getElementById('kraChart').getContext('2d');
var kraChart = new Chart(ctxKRA, {
    type: 'bar',
    data: {
        labels: ['KRA 1', 'KRA 2', 'KRA 3', 'KRA 4', 'Plus Factor'],
        datasets: [{
            label: 'KRA Breakdown',
            data: [3, 2, 4, 1, 5],
            backgroundColor: 'rgba(88, 24, 196, 0.7)',
            borderColor: 'rgba(88, 24, 196, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 5
            }
        }
    }
});

// Recommendation Pie Chart
var ctxRecommendation = document.getElementById('recommendationChart').getContext('2d');
var recommendationChart = new Chart(ctxRecommendation, {
    type: 'pie',
    data: {
        labels: ['Promotion', 'Termination', 'Retention'],
        datasets: [{
            data: [39.11, 28.02, 23.13],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false // Hides the default legend
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.raw + '%'; // Adds percentage in tooltip
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: true, // Ensures the pie chart keeps its size ratio
    }
});

//Tenure Chart
const ctx3 = document.getElementById('tenureChart').getContext('2d');
const tenureChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['0-3 years', '5+ years', '3-5 years'],
        datasets: [{
            label: 'Tenure',
            data: [39.11, 28.03, 23.13],
            backgroundColor: ['#6a41fc', '#ff6384', '#36a2eb']
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false // Hides the default legend
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.raw + '%'; // Adds percentage in tooltip
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: true, // Ensures the pie chart keeps its size ratio
    }
});

// Performance Line Chart
var ctxPerformance = document.getElementById('performanceChart').getContext('2d');
var performanceChart = new Chart(ctxPerformance, {
    type: 'line',
    data: {
        labels: ['Year 1', 'Year 2', 'Year 3'],
        datasets: [{
            label: 'Performance',
            data: [60, 75, 80],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

};

    
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