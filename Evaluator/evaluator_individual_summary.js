window.onload = function() {
    // Example SWOT data for different individuals
    const swotData = {
        'jessica': {
            strengths: "Strong content knowledge across curriculum areas and uses multiple languages effectively. Promotes respect.",
            weakness: "Needs to improve in fostering critical thinking and numeracy achievement.",
            opportunities: "Professional development in literacy, numeracy, and cultural sensitivity.",
            threats: "Meeting the diverse needs of students and addressing pressures for critical thinking."
        },
        'john': {
            strengths: "Excellent rapport with students, manages classroom discipline well.",
            weakness: "Lacks in utilizing technological tools for enhanced learning.",
            opportunities: "Technological upskilling and participation in global educational seminars.",
            threats: "Keeping up with fast-paced technological changes in the education system."
        },
        'maria': {
            strengths: "Creative teaching methods and active community engagement.",
            weakness: "Needs improvement in time management and setting clear objectives.",
            opportunities: "Leadership training and collaboration with international teaching networks.",
            threats: "Balancing personal development with teaching responsibilities."
        }
    };

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
                backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(255, 206, 86, 0.7)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
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

    // Handle Name Dropdown Change
    document.getElementById('choose-name-filter').addEventListener('change', function() {
        const selectedName = this.value;
        const swot = swotData[selectedName];
        
        document.getElementById('strengths').textContent = swot.strengths;
        document.getElementById('weakness').textContent = swot.weakness;
        document.getElementById('opportunities').textContent = swot.opportunities;
        document.getElementById('threats').textContent = swot.threats;
    });

    // Initialize SWOT content for first person
    const initialSwot = swotData['jessica'];
    document.getElementById('strengths').textContent = initialSwot.strengths;
    document.getElementById('weakness').textContent = initialSwot.weakness;
    document.getElementById('opportunities').textContent = initialSwot.opportunities;
    document.getElementById('threats').textContent = initialSwot.threats;
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
yesButton.addEventListener('click', function() {
    window.location.href = 'logout_page.html';  // Replace with actual logout URL
});
