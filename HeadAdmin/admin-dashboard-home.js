// Statistics elements
const totalSchool = document.getElementById("totalSchool");
const totalTeacher = document.getElementById("totalTeacher");
const evaluationConducted = document.getElementById("evaluationConducted");
const totalPending = document.getElementById("totalPending");
 

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
            
            window.location.href = '../../get-started.html'; 
        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
});




// Submission Rate Chart
const submissionRateCtx = document.getElementById('submissionRateChart').getContext('2d'); 

const distributionChartCtx = document.getElementById('distributionChart').getContext('2d');


// Recommendation Pie Chart
var ctxRecommendation = document.getElementById('recommendationChart').getContext('2d');

 




async function fetchData1() {
    const response = await fetch('https://bnahs.pythonanywhere.com/api/admin/schools/count//',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data = await response.json();
    if (response.ok) {
        
        totalSchool.textContent = data.total_accepted_schools;

    } else {
        window.location.href = '../../get-started.html'; 
        
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
        
        evaluationConducted.textContent = data1.total_evaluation_conducted;
    } else {
        window.location.href = '../../get-started.html'; 
        
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
        
        totalTeacher.textContent = data2.total_teachers;
    } else {
        window.location.href = '../../get-started.html'; 
        
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
        
        totalPending.textContent = data3.total_pending_evaluation;

    } else {
        window.location.href = '../../get-started.html'; 
        
    }
}


fetchData4();


const schoolYearSelect = document.getElementById('schoolYearDropdown');

function addOption(year) {


    // Create a new option element
    var option = document.createElement('option');

    // Set the value and text of the new option
    option.value = year;
    option.text = year;

    // Add the new option to the select element
    schoolYearSelect.appendChild(option); 
}


let school_years = null;

async function getIPCRFSchoolYears() {
    try {
         
        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/get/school/years/ipcrfs/all/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include', 
        });

        if (response.ok) { 
            const data = await response.json();
            
            if (!school_years){
                school_years = [...new Set([...data.school_years.proficient, ...data.school_years.highly_proficient])];
                schoolYearSelect.innerHTML = `<option value="all">All School Year</option> `;
                school_years.forEach(year => {
                    addOption(year);
                });

            }

        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


let school_year = null;
let ratingChart1 = null;
let ratingChart2 = null;

async function fetchData5() {

    await getIPCRFSchoolYears();


    const formData = new FormData();
    school_year && formData.append('school_year', school_year);
    const response4 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/submission/rate/',
        {
            method: 'POST',
            credentials: 'include',
            body: formData
        }
    );

    const data4 = await response4.json();
    if (response4.ok) {
        
        const labels = data4.data.labels;
        

        if (ratingChart1){
            ratingChart1.destroy()
            ratingChart2.destroy()
            
        }

            ratingChart1 = new Chart(submissionRateCtx, {
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
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        formatter: function(value, context) {
                            return value.toFixed(3); 
                        },
                        color: 'gray' 
                    }
                },
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
            },
            plugins: [ChartDataLabels]
        });
        
        ratingChart2 = new Chart(distributionChartCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Distribution of Ratings',
                    data: data4.data.values_100,  // Your actual data
                    backgroundColor: '#6a41fc',
                }]
            },
            options: {plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: function(value, context) {
                        return value.toFixed(3); 
                    },
                    color: 'gray' 
                }
            },
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
            },
            plugins: [ChartDataLabels]
        });
        



    } else {
        
    }

}


fetchData5();

schoolYearSelect.addEventListener('change' , async function (){
    const selectedYear = this.value;
    
    if (selectedYear == "all") {
        school_year = null;
    } else {
        school_year = selectedYear;
    } 
    fetchData5();
});



async function fetchData6() {
    
    const response5 = await fetch('https://bnahs.pythonanywhere.com/api/admin/school/teachers/tenure/',
        {
            method: 'GET',
            credentials: 'include'
        }
    );

    const data5 = await response5.json();
    if (response5.ok) {
        
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
        
    }
}

fetchData7();
 