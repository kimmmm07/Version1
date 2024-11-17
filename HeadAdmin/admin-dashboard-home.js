// Statistics elements
const totalSchool = document.getElementById("totalSchool");
const totalTeacher = document.getElementById("totalTeacher");
const evaluationConducted = document.getElementById("evaluationConducted");
const totalPending = document.getElementById("totalPending");

// Dropdown elements for submission and distribution rates
const schoolDropdown = document.getElementById("schoolDropdown");
const schoolYearDropdown = document.getElementById("schoolYearDropdown");
const distributionSchoolDropdown = document.getElementById("distributionSchoolDropdown");
const distributionYearDropdown = document.getElementById("distributionYearDropdown");

// Canvas elements for charts 
const distributionChart = document.getElementById("distributionChart");
const RecommendationChart = document.getElementById("recommendationChart");
const tenureChart = document.getElementById("tenureChart");

// Recommendation chart labels
const promotionRate = document.getElementById("promotionRate");
const retentionRate = document.getElementById("retentionRate");
const terminationRate = document.getElementById("terminationRate");

// Tenure chart labels
const tenure0to3 = document.getElementById("tenure0to3");
const tenure3to5 = document.getElementById("tenure3to5");
const tenure5plus = document.getElementById("tenure5plus");

// Example of fetching data dynamically (for demonstration purposes)
// function updateStatistics() {
//     // Dummy data fetch simulation
//     totalSchool.textContent = "5";
//     totalTeacher.textContent = "200";
//     evaluationConducted.textContent = "150";
//     totalPending.textContent = "50";
// }

// // Call updateStatistics function on page load
// window.onload = updateStatistics;




const logoutButton = document.getElementById('logout-nav');
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




// Submission Rate Chart
const submissionRateCtx = document.getElementById('submissionRateChart').getContext('2d');
// new Chart(submissionRateCtx, {
//     type: 'bar',
//     data: {
//         labels: ['Benigno "Ninoy" Aquino High School', 'Upper Bicutan National High School', 'Taguig National High School', 'Signal Village National High School', 'President Diosdado Macapagal High School', 'Western Bicutan National High School'],
//         datasets: [{
//             label: 'Evaluation Submission Rate',
//             data: [100, 20, 50, 40, 60, 45],
//             backgroundColor: '#6a41fc',
//         }]
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//     }
// });

// Distribution of Ratings Chart



const distributionChartCtx = document.getElementById('distributionChart').getContext('2d');


// Recommendation Pie Chart
var ctxRecommendation = document.getElementById('recommendationChart').getContext('2d');


// const logout = document.getElementById("logout");
// logout.addEventListener('click', async function (event) {
//     try {
        
//         const response = await fetch('https://bnahs.pythonanywhere.com/api/user/logout/', {
//             method: 'POST',
//             headers: {
//                 'X-Requested-With': 'XMLHttpRequest',
                
//             },
//             credentials: 'include',
//         });

//         const data = await response.json();
//         if (response.ok) {
//             console.log("Success Data : ", data); 
//             window.location.href = '../../index.html'; 
//         } else {
//             console.log("Error Data : ", data);
//         }
//     } catch (error) {
//         console.error("Error during fetch:", error);
//     }
// });








async function fetchData1() {
    const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/schools/count//',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data = await response.json();
    if (response.ok) {
        console.log("Success Data : ",data);
        totalSchool.textContent = data.total_accepted_schools;

    } else {
        console.log("Error Data : ",data);
    }

}


fetchData1();



async function fetchData2() {
        
    const response1 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/teacher/evaluated/count/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data1 = await response1.json();
    if (response1.ok) {
        console.log("Success Data : ",data1); 
        evaluationConducted.textContent = data1.total_evaluation_conducted;
    } else {
        console.log("Error Data : ",data1);
    }
}

fetchData2();




async function  fetchData3() { 

    const response2 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/teacher/count/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data2 = await response2.json();
    if (response2.ok) {
        console.log("Success Data : ",data2); 
        totalTeacher.textContent = data2.total_teachers;
    } else {
        console.log("Error Data : ",data2);
    }

}

fetchData3();




async function  fetchData4() {

    const response3 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/teacher/evaluation/pending/count/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data3 = await response3.json();
    if (response3.ok) {
        console.log("Success Data : ",data3);
        totalPending.textContent = data3.total_pending_evaluation;

    } else {
        console.log("Error Data : ",data3);
    }
}


fetchData4();






async function fetchData5() {

    const response4 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/submission/rate/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data4 = await response4.json();
    if (response4.ok) {
        console.log("Success Data : ",data4);
        const labels = data4.data.labels;
        console.log("Labels : ",labels);
        new Chart(submissionRateCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Distribution of Ratings',
                    data: data4.data.values,  // Your actual data
                    backgroundColor: '#6a41fc',
                }]
            },
            options: { 
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true,  // Ensure y-axis starts at 0
                        max: 5.0,  // Manually set the maximum value to 5
                        ticks: {
                            // Ensure that ticks are displayed correctly up to 5
                            stepSize: 1.0  // Adjust this based on your preferred tick interval
                        }
                    }
                }
            }
        });
        
        new Chart(distributionChartCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Distribution of Ratings',
                    data: data4.data.values_100,  // Your actual data
                    backgroundColor: '#6a41fc',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,  // Ensure y-axis starts at 0
                        min: 0,  // Minimum value for y-axis
                        max: 100,  // Maximum value for y-axis
                        ticks: {
                            stepSize: 10  // Adjust this based on your preferred tick interval
                        }
                    }
                }
            }
        });
        



    } else {
        console.log("Error Data : ",data4);
    }

}


fetchData5();




async function fetchData6() {
    
    const response5 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/teachers/tenure/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data5 = await response5.json();
    if (response5.ok) {
        console.log("Success Data : ",data5);
        tenure0to3.textContent = data5['0-3 years'].toFixed(2) + '%';
        tenure3to5.textContent = data5['3-5 years'].toFixed(2) + '%';;
        tenure5plus.textContent = data5['5+ years'].toFixed(2) + '%';

        const ctx3 = tenureChart.getContext('2d');
        new Chart(ctx3, {
            type: 'doughnut',
            data: {
                labels: ['0-3 years', '5+ years', '3-5 years'],
                datasets: [{
                    label: 'Tenure',
                    data: [data5['0-3 years'].toFixed(2), data5['5+ years'].toFixed(2),  data5['3-5 years'].toFixed(2) ],
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
        
    } else {
        console.log("Error Data : ",data5);
    }
}


fetchData6();



async function fetchData7() {
    
    const response6 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/teachers/recommendations/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data6 = await response6.json();
    if (response6.ok) {
        console.log("Success Data : ",data6);
        promotionRate.textContent =data6['promotion'].toFixed(2) + '%' ;
        terminationRate.textContent =data6['termination'].toFixed(2) + '%';
        retentionRate.textContent =data6['retention'].toFixed(2) + '%'; 


        new Chart(ctxRecommendation, {
            type: 'pie',
            data: {
                labels: ['Promotion', 'Termination', 'Retention'],
                datasets: [{
                    data: [data6['promotion'].toFixed(2), data6['termination'].toFixed(2), data6['retention'].toFixed(2)],
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
        

    } else {
        console.log("Error Data : ",data6);
    }
}

fetchData7();


// window.addEventListener('load', async function() { 



//         //Tenure Chart
//     const ctx3 = document.getElementById('tenureChart').getContext('2d');
//     const tenureChart = new Chart(ctx3, {
//         type: 'doughnut',
//         data: {
//             labels: ['0-3 years', '5+ years', '3-5 years'],
//             datasets: [{
//                 label: 'Tenure',
//                 data: [39.11, 28.03, 23.13],
//                 backgroundColor: ['#6a41fc', '#ff6384', '#36a2eb']
//             }]
//         },
//         options: {
//             plugins: {
//                 legend: {
//                     display: false // Hides the default legend
//                 },
//                 tooltip: {
//                     callbacks: {
//                         label: function(context) {
//                             return context.label + ': ' + context.raw + '%'; // Adds percentage in tooltip
//                         }
//                     }
//                 }
//             },
//             responsive: true,
//             maintainAspectRatio: true, // Ensures the pie chart keeps its size ratio
//         }
//     });
// });




