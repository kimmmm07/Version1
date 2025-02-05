
let tenure_data = [ 32.11 , 23.13 , 28.02]; 
let recommendations = [39.11, 28.02, 23.13];
 
const chosser = document.getElementById('choose-proficiency')

// Create the charts using Chart.js
const ctx1 = document.getElementById('annualRatingChart').getContext('2d');
let annualRatingChart = undefined;
// Recommendation Pie Chart
var ctxRecommendation = document.getElementById('recommendationChart').getContext('2d');
let recommendationChart = undefined; 
//Tenure Chart
const ctx3 = document.getElementById('tenureChart').getContext('2d');
let tenureChart = undefined;

//Performance Chart
const ctx4 = document.getElementById('performanceChart').getContext('2d');
let performanceChart = undefined;

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
            
            window.location.href = '../../get-started.html'; 
        } else {
            
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

const chooseYearFilter = document.getElementById('choose-year-filter');

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
            
            // tenure_data[0] = data["0-3 years"];
            // tenure_data[1] = data["3-5 years"];
            // tenure_data[2] = data["5+ years"]; 

            tenures_data = data;
            user.evaluator.is_proficient && updateTenureChart(data.proficient);
            !user.evaluator.is_proficient && updateTenureChart(data.highly_proficient);
            
        } else {
            
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
            

            recommendation_data = data;
            user.evaluator.is_proficient && updateRecommendationChart(data.proficient);
            !user.evaluator.is_proficient && updateRecommendationChart(data.highly_proficient);
            
        } else {
            
        }

        // Do something with the data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


// 

const borderColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']; // Add more colors if needed


function updatePerformanceChart(data) {

    if (performanceChart){
        performanceChart.destroy();
    }

    const transformedData = data.map((item, index) => {
        return {
            label: item.name,
            data: item.data.values,
            borderColor: borderColors[index % borderColors.length], // Cycle through border colors
            fill: false
        };
    });


    performanceChart = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['Year 1', 'Year 2', 'Year 3'],
            datasets: transformedData
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

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
            

            performance_data = data;
            user.evaluator.is_proficient && updatePerformanceChart(data.proficient)
            !user.evaluator.is_proficient && updatePerformanceChart(data.highly_proficient)
            
        } else {
            
        }

        // Do something with the data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function updateAnnualRatingChart(data) {

    if (annualRatingChart){
        annualRatingChart.destroy();
    }

    annualRatingChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: data.names,
            datasets: [{
                label: 'Rating',
                data: data.ratings,
                backgroundColor: 'rgba(88, 24, 196, 0.7)',
                borderColor: 'rgba(88, 24, 196, 1)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: function(value, context) {
                        return value.toFixed(1); 
                    },
                    color: 'gray' 
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5
                }
            }
        },
        plugins: [ChartDataLabels]
    });
    
}

async function fetchAnnualRatings(){
    try {
        
        const formData = new FormData();
        school_year && formData.append('school_year', school_year);
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/school/get/teachers/annual/ratings/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData
        });

        const data = await response.json();
        if (response.ok) {
            
            
            user.evaluator.is_proficient && updateAnnualRatingChart(data.proficient);
            !user.evaluator.is_proficient && updateAnnualRatingChart(data.highly_proficient);

        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}






function populateYearDropdowns(){
    if (user.evaluator.is_proficient){
        for (let i = 0; i < p_school_years.length; i++) {
            const option = document.createElement("option");
            option.value = p_school_years[i];
            option.text = p_school_years[i];
            chooseYearFilter.appendChild(option);
        }
    } else {
        for (let i = 0; i < hp_school_years.length; i++) {
            const option = document.createElement("option");
            option.value = hp_school_years[i];
            option.text = hp_school_years[i];
            chooseYearFilter.appendChild(option);
        }
    }
}



let p_school_years = [];
let hp_school_years = [];
let school_year = null;
let user = null;

async function getIPCRFSchoolYears() {
    try {
         
        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/get/school/years/ipcrfs/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include', 
        });

        const data = await response.json();
        if (response.ok) {
            
            p_school_years = data.school_years.proficient;
            hp_school_years = data.school_years.highly_proficient; 

            // Populate the year dropdowns
            populateYearDropdowns();

        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}



chooseYearFilter.addEventListener("change", async function() {
    const selectedYear = this.value;
    
    if (selectedYear == "all") {
        school_year = null;
    } else {
        school_year = selectedYear;
    } 

    fetchAnnualRatings();

});




async function getUser(){
    try{
        const response = await fetch('https://bnahs.pythonanywhere.com/api/evaluator/profile/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',

            },
            credentials: 'include',
        });

        user = await response.json();
        if (response.ok) {
            
             

            await getIPCRFSchoolYears();
            
            fetchTenure();
            fetchRecommendation();
            fetchPerformance();
            fetchAnnualRatings();


        } else {
            window.location.href = '../../get-started.html'; 
            
        }
    } catch(error){
        console.error("Error during fetch:", error);
    }
}


getUser();











 