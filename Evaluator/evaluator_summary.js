
let tenure_data = [ 32.11 , 23.13 , 28.02]; 
let recommendations = [39.11, 28.02, 23.13];

// Function to update charts based on selected filters
document.getElementById('choose-year-filter').addEventListener('change', updateCharts);
const chosser = document.getElementById('choose-proficiency')

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

// Recommendation Pie Chart
var ctxRecommendation = document.getElementById('recommendationChart').getContext('2d');
let recommendationChart = undefined; 
//Tenure Chart
const ctx3 = document.getElementById('tenureChart').getContext('2d');
let tenureChart = undefined;

//Performance Chart
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



const tenure03 = document.getElementById('tenure-0-3');
const tenure05 = document.getElementById('tenure-5-plus');
const tenure35 = document.getElementById('tenure-3-5');

const promotionRate = document.getElementById('promotion') ;
const retentionRate = document.getElementById('retention') ;
const terminationRate = document.getElementById('termination') ;


let tenures_data = undefined;
let annual_ratings_data = undefined;
let recommendation_data = undefined;
let performance_data = undefined;


function updateTenureChart(data) {
    if (tenureChart){
        tenureChart.destroy();
    }

    tenure03.textContent = "0-3 years: " + data["0-3 years"].toFixed(2) + "%";
    tenure05.textContent = "5+ years: " + data["5+ years"].toFixed(2) + "%";
    tenure35.textContent = "3-5 years: " + data["3-5 years"].toFixed(2) + "%"; 

    tenureChart =new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['0-3 years', '5+ years', '3-5 years'],
            datasets: [{
                label: 'Tenure',
                data: [data['0-3 years'].toFixed(2), data['5+ years'].toFixed(2), data['3-5 years'].toFixed(2)],
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

}

async function fetchTenure() {
    
    
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/teachers/tenure/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Success Data : ", data); 
            // tenure_data[0] = data["0-3 years"];
            // tenure_data[1] = data["3-5 years"];
            // tenure_data[2] = data["5+ years"]; 

            tenures_data = data;
            updateTenureChart(data.all)
            
        } else {
            console.log("Error Data : ", data); 
        }

        // Do something with the data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



function updateRecommendationChart(data) {
    promotionRate.textContent = "Promotion : " + data.number_of_promotion_by_percentage.toFixed(2) + "%";
    retentionRate.textContent = "Retention : " + data.number_of_retention_by_percentage.toFixed(2) + "%";
    terminationRate.textContent = "Termination : " + data.number_of_termination_by_percentage.toFixed(2) + "%";
    
    if (recommendationChart){
        recommendationChart.destroy();
    }

    recommendationChart = new Chart(ctxRecommendation, {
        type: 'pie',
        data: {
            labels: ['Promotion', 'Termination', 'Retention'],
            datasets: [{
                data: [
                    data['number_of_promotion_by_percentage'] , 
                    data['number_of_termination_by_percentage'] ,
                    data['number_of_retention_by_percentage']
                ],
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
    
}

async function fetchRecommendation() {
    
    
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/teachers/recommendations/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Success Data : ", data);

            recommendation_data = data;
            updateRecommendationChart(data.all);
            
        } else {
            console.log("Error Data : ", data); 
        }

        // Do something with the data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



async function fetchPerformance() {
    
    
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/teachers/performance/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Success Data : ", data); 
            
            
        } else {
            console.log("Error Data : ", data); 
        }

        // Do something with the data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function fetchAnnualRatings(){

}



fetchTenure();
fetchRecommendation();
fetchPerformance();
fetchAnnualRatings();



chosser.addEventListener('change', function() {
    if (chosser.value == "all"){
        updateTenureChart(tenures_data.all);
        updateRecommendationChart(recommendation_data.all);
    } else if (chosser.value == "proficient"){
        updateTenureChart(tenures_data.proficient);
        updateRecommendationChart(recommendation_data.proficient);
    } else if (chosser.value == "highlyproficient"){
        updateTenureChart(tenures_data.highly_proficient);
        updateRecommendationChart(recommendation_data.highly_proficient);
    }
});