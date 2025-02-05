// Header Section
const container = document.getElementById('container');
const header = document.getElementById('header');
const pageTitle = document.getElementById('page-title');

// Tabs Section
const tabs = document.getElementById('tabs');
const viewSummaryLink = document.getElementById('view-summary-link');

// Filters Section
const filters = document.getElementById('filters');
const filterBox = document.getElementById('filter-box');
const chooseYearFilter = document.getElementById('choose-year-filter');
const yearOption = document.getElementById('year-option');

// Analytics Grid
const analyticsGrid = document.getElementById('analytics-grid');

// KRA Breakdown Section
const kraBreakdown = document.getElementById('kra-breakdown');
const kraTitle = document.getElementById('kra-title');
// const kraChart = document.getElementById('kraChart');
const kraDescription = document.getElementById('kra-description');

// Recommendation Section
const recommendation = document.getElementById('recommendation');
const recommendationTitle = document.getElementById('recommendation-title');
const recommendationContent = document.getElementById('recommendation-content');
// const recommendationChart = document.getElementById('recommendationChart');
const recommendationLabels = document.getElementById('recommendation-labels');
const promotionLabel = document.getElementById('promotionLabel');
const retentionLabel = document.getElementById('retentionLabel');
const terminationLabel = document.getElementById('terminationLabel');

// Performance Section
const performance = document.getElementById('performance');
const performanceTitle = document.getElementById('performance-title');
// const performanceChart = document.getElementById('performanceChart');

// SWOT Analysis Section
const swotAnalysis = document.getElementById('swot-analysis');
const swotTitle = document.getElementById('swot-title');
const swotContent = document.getElementById('swot-content');
const strengthsTitle = document.getElementById('strengths-title');
// const strengths = document.getElementById('strengths');
const weaknessTitle = document.getElementById('weakness-title');
const weakness = document.getElementById('weakness');
const opportunitiesTitle = document.getElementById('opportunities-title');
// const opportunities = document.getElementById('opportunities');
const threatsTitle = document.getElementById('threats-title');
// const threats = document.getElementById('threats');





// const selectorTeacher = document.getElementById('choose-name-filter');



// Recommendation Pie Chart
var ctxRecommendation = document.getElementById('recommendationChart').getContext('2d');
var ctxPerformance = document.getElementById('performanceChart').getContext('2d');
var ctxKRA = document.getElementById('kraChart').getContext('2d');

let recommendationChart = undefined;
let performanceChart = undefined;
let kraChart = undefined;


const strengths= document.getElementById('strengths');
const weaknesses = document.getElementById('weakness');
const opportunities= document.getElementById('opportunities');
const threats= document.getElementById('threats');





// function addOption(selectId, value, text) {
//     const select = document.getElementById(selectId);
//     const option = document.createElement("option");
//     option.value = value;
//     option.text = text;
//     select.appendChild(option);
// }




async function  getRecommendations() {
    try {
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/recommendations/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include', 
        });

        const data = await response.json();
        if (response.ok) {
            
            let result = data.result;
            
            document.getElementById('promotionLabel').textContent = "Promotion : " + result.promotion_percentage.toFixed(2) + "%";
            document.getElementById('retentionLabel').textContent = "Retention : " + result.retention_percentage.toFixed(2) + "%";
            document.getElementById('terminationLabel').textContent = "Termination : " + result.termination_percentage.toFixed(2) + "%";
            // <li id="promotion"> Promotion: 39.11%</li>
            // <li     id="retention"> Retention: 23.13%</li>
            // <li     id="termination"> Termination: 28.02%</li>

            if (recommendationChart) {
                recommendationChart.destroy();
            }

            recommendationChart = new Chart(ctxRecommendation, {
                type: 'pie',
                data: {
                    labels: ['Promotion', 'Termination', 'Retention'],
                    datasets: [{
                        data: [result.promotion_percentage, result.termination_percentage, result.retention_percentage],
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
            window.location.href = '../../get-started.html'; 
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

getRecommendations();

async function getPerformance() {
        // Performance Line Chart
        try {
            const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/performance/', {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    
                },
                credentials: 'include', 
            });
    
            const data = await response.json();
            if (response.ok) {
                
                let result = data.result;

                if (performanceChart) {
                    performanceChart.destroy();
                }

                performanceChart = new Chart(ctxPerformance, {
                    type: 'line',
                    data: {
                        labels: result.labels,
                        datasets: [{
                            label: 'Performance',
                            data: result.values,
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
            } else {
                window.location.href = '../../get-started.html'; 
                
            }
        } catch (error) {
            console.error("Error during fetch:", error);
        }
}

getPerformance();



async function getSwot() {
    try {
         
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/swot/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include', 
        });

        const data = await response.json();
        if (response.ok) {
            
            strengths.textContent = data.strength;
            weaknesses.textContent = data.weakness;
            opportunities.textContent = data.opportunity;
            threats.textContent = data.threat;

        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getSwot();

// selectorTeacher.addEventListener("change", async function() {
//     const selectedName = this.value;
//     if (selectedName == "None") {
//         return;
//     }

//     getRecommendations(selectedName);
//     getPerformance(selectedName);
//     getKRA(selectedName);
//     getSwot(selectedName);
// }); 


function populateYearDropdowns(){
    if (user.user.is_proficient){
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

async function getKRASchoolYears() {
    try {
         
        const response = await fetch('https://bnahs.pythonanywhere.com/api/user/get/school/years/rpms/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include', 
        });

        const data = await response.json();
        if (response.ok) {
            
            p_school_years = data.school_years.proficient;
            hp_school_years = data.school_years.high_proficient; 

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
    getKRA()

});



async function getUser(){
    try{
        const response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/profile/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',

            },
            credentials: 'include',
        });

        user = await response.json();
        if (response.ok) {
            
            getKRASchoolYears();

        } else {
            
        }
    } catch(error){
        console.error("Error during fetch:", error);
    }
}


getUser();


async function getKRA() {
    try {
        
        const formData = new FormData();
        formData.append('school_year', school_year);
        let response = null;
        if (school_year){ 
            response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/kba/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    
                },
                body: formData,
                credentials: 'include', 
            });
        } else { 
            response = await fetch('https://bnahs.pythonanywhere.com/api/teacher/kba/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    
                },
                credentials: 'include', 
            });
        }

        const data = await response.json();
        if (response.ok) {
            

            if (kraChart){
                kraChart.destroy();
            }
                // KRA Breakdown Bar Chart
            kraChart = new Chart(ctxKRA, {
                type: 'bar',
                data: {
                    labels: data.kra,
                    datasets: [{
                        label: 'KRA Breakdown',
                        data: data.scores,
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
                                return value; 
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


        } else {
            
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }


}

getKRA();



















