// window.onload = function() {
// KRA Breakdown Bar Chart
var ctxKRA = document.getElementById('kraChart').getContext('2d');
// var kraChart = new Chart(ctxKRA, {
//     type: 'bar',
//     data: {
//         labels: ['KRA 1', 'KRA 2', 'KRA 3', 'KRA 4', 'Plus Factor', 'Total Score'],
//         datasets: [{
//             label: 'KRA Breakdown',
//             data: [3, 2, 4, 1, 5],
//             backgroundColor: 'rgba(88, 24, 196, 0.7)',
//             borderColor: 'rgba(88, 24, 196, 1)',
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 max: 100
//             }
//         }
//     }
// });

// Recommendation Pie Chart

var kraChart = undefined;

var ctxRecommendation = document.getElementById('recommendationChart').getContext('2d');
var recommendationChart =undefined;
// var recommendationChart = new Chart(ctxRecommendation, {
//     type: 'pie',
//     data: {
//         labels: ['Promotion', 'Termination', 'Retention'],
//         datasets: [{
//             data: [39.11, 28.02, 23.13],
//             backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
//             borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         plugins: {
//             legend: {
//                 display: false // Hides the default legend
//             },
//             tooltip: {
//                 callbacks: {
//                     label: function(context) {
//                         return context.label + ': ' + context.raw + '%'; // Adds percentage in tooltip
//                     }
//                 }
//             }
//         },
//         responsive: true,
//         maintainAspectRatio: true, // Ensures the pie chart keeps its size ratio
//     }
// });

//Tenure Chart


const ctx3 = document.getElementById('tenureChart').getContext('2d');
let tenureChart = undefined;


// let tenureChart = new Chart(ctx3, {
//     type: 'doughnut',
//     data: {
//         labels: ['0-3 years', '5+ years', '3-5 years'],
//         datasets: [{
//             label: 'Tenure',
//             data: [39.11, 28.03, 23.13],
//             backgroundColor: ['#6a41fc', '#ff6384', '#36a2eb']
//         }]
//     },
//     options: {
//         plugins: {
//             legend: {
//                 display: false // Hides the default legend
//             },
//             tooltip: {
//                 callbacks: {
//                     label: function(context) {
//                         return context.label + ': ' + context.raw + '%'; // Adds percentage in tooltip
//                     }
//                 }
//             }
//         },
//         responsive: true,
//         maintainAspectRatio: true, // Ensures the pie chart keeps its size ratio
//     }
// });




// Performance Line Chart
var ctxPerformance = document.getElementById('performanceChart').getContext('2d');
// var performanceChart = new Chart(ctxPerformance, {
//     type: 'line',
//     data: {
//         labels: ['Year 1', 'Year 2', 'Year 3'],
//         datasets: [{
//             label: 'Performance',
//             data: [60, 75, 80],
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//             fill: true
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 max: 5
//             }
//         }
//     }
// });

// };


// Modal logic

var performanceChart = undefined;


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








const totalTeacher = document.getElementById('totalTeacher');
const evaluationConducted = document.getElementById('evaluationConducted');
const totalPending = document.getElementById('totalPending');



async function fetchSummary() {
    try {
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/summary/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            
            
            totalTeacher.textContent = data.teacher_count;
            evaluationConducted.textContent = data.evaluated_teacher_count;
            totalPending.textContent = data.un_evaluated_teacher_count;
        } else {
            window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

fetchSummary();




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
                    display: false 
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
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/teachers/get/tenure/', {
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
            updateTenureChart(data.all)
            
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
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/teachers/get/recommendations/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
        });

        const data = await response.json();

        if (response.ok) {
            

            recommendation_data = data;
            updateRecommendationChart(data.all);
            
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


    performanceChart = new Chart(ctxPerformance, {
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
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/teachers/get/performance/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
        });

        const data = await response.json();

        if (response.ok) {
            

            performance_data = data;
            updatePerformanceChart(data.all)
            
        } else {
            
        }

        // Do something with the data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function updateKRAChart(data) {

    if (kraChart){
        kraChart.destroy();
    }

    kraChart = new Chart(ctxKRA, {
        type: 'bar',
        data: {
            labels: ['KRA 1', 'KRA 2', 'KRA 3', 'KRA 4', 'Plus Factor', 'Total Score'],
            datasets: [{
                label: 'KRA Breakdown',
                data: data['averages'],
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
                        return value.toFixed(2); 
                    },
                    color: 'gray' 
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        },
        plugins: [ChartDataLabels]
    });
    
}

async function fetchKRAs(){
    try {
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/teachers/get/kras/scores/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            
            updateKRAChart(data);
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}



fetchTenure();
fetchRecommendation();
fetchPerformance();
fetchKRAs();


const generateReport = document.getElementById("generateReport");

generateReport.addEventListener('click', function() {
    // Generate report logic here
    // school/generate/report/
    fetch('https://bnahs.pythonanywhere.com/api/school/generate/report/', {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'include',
    })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'school_report.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error:', error));
});

 
document.getElementById('downloadPdfBtn').addEventListener('click', function() {

}); 



