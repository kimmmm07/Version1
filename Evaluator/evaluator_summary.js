// Function to update charts based on selected filters
document.getElementById('choose-year-filter').addEventListener('change', updateCharts);
document.getElementById('choose-proficiency').addEventListener('change', updateCharts);

function updateCharts() {
    const year = document.getElementById('choose-year-filter').value;
    const proficiency = document.getElementById('choose-proficiency').value;

    // Example Data (Modify as needed)
    const annualRatingData = {
        '2023-2024': [5, 2, 3, 3, 4, 3],
        '2022-2023': [4, 3, 2, 4, 5, 3]
    };

    const recommendationData = {
        '2023-2024': [39.11, 28.03, 23.13],
        '2022-2023': [40, 30, 30]
    };

    const tenureData = {
        '2023-2024': [39.11, 28.03, 23.13],
        '2022-2023': [50, 20, 30]
    };

    const performanceData = {
        '2023-2024': [60, 80, 90, 100],
        '2022-2023': [70, 85, 75, 95]
    };

    // Update the charts with new data
    annualRatingChart.data.datasets[0].data = annualRatingData[year];
    recommendationChart.data.datasets[0].data = recommendationData[year];
    tenureChart.data.datasets[0].data = tenureData[year];
    performanceChart.data.datasets[0].data = performanceData[year];
    
    // Refresh charts
    annualRatingChart.update();
    recommendationChart.update();
    tenureChart.update();
    performanceChart.update();
}

// Create the charts using Chart.js
const ctx1 = document.getElementById('annualRatingChart').getContext('2d');
const annualRatingChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Jessica', 'Emily', 'Benjamin', 'Olivia', 'Daniel', 'Sophia'],
        datasets: [{
            label: 'Rating',
            data: [5, 2, 3, 3, 4, 3],
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

const ctx2 = document.getElementById('recommendationChart').getContext('2d');
const recommendationChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Promotion', 'Termination', 'Retention'],
        datasets: [{
            label: 'Recommendation',
            data: [39.11, 28.03, 23.13],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    }
});

const ctx3 = document.getElementById('tenureChart').getContext('2d');
const tenureChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['0-3 years', '3-5 years', '5+ years'],
        datasets: [{
            label: 'Tenure',
            data: [39.11, 28.03, 23.13],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    }
});

const ctx4 = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['Year 1', 'Year 2', 'Year 3'],
        datasets: [{
            label: 'Jessica',
            data: [70, 80, 90],
            borderColor: '#FF6384',
            fill: false
        }, {
            label: 'Emily',
            data: [50, 60, 70],
            borderColor: '#36A2EB',
            fill: false
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
yesButton.addEventListener('click', function() {
    window.location.href = 'logout_page.html';  // Replace with actual logout URL
});