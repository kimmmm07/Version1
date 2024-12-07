 
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



const selectorTeacher = document.getElementById('choose-name-filter');
const chooseYearFilter = document.getElementById('choose-year-filter');


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


let school_years = undefined;

let school_year = undefined;
function populateYearDropdowns(){
    chooseYearFilter.innerHTML = `<option value="all">Latest Academic Year</option>`;
    for (let i = 0; i < school_years.length; i++) {
        const option = document.createElement("option");
        option.value = school_years[i];
        option.text = school_years[i];
        chooseYearFilter.appendChild(option);
    } 
}

 
async function getrpmsSchoolYears() {
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
            console.log("Success Data : ", data);   

            school_years = [...new Set([...data.school_years.proficient, ...data.school_years.highly_proficient])];

            // Populate the year dropdowns
            populateYearDropdowns();

        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


getrpmsSchoolYears();


function addOption(selectId, value, text) {
    const select = document.getElementById(selectId);
    const option = document.createElement("option");
    option.value = value;
    option.text = text;
    select.appendChild(option);
}

async function  getTeachers() {
    try {
        
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/get/teachers/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data); 

            data.proficient.forEach(teacher => { 

                // Example usage
                // addOption("choose-name-filter", "jose", "Jose Rizal");
                addOption("choose-name-filter", teacher.employee_id, teacher.fullname);

            });

            data.highly_proficient.forEach(teacher => { 

                // Example usage
                // addOption("choose-name-filter", "jose", "Jose Rizal");
                addOption("choose-name-filter", teacher.employee_id, teacher.fullname);

            });

        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}

getTeachers();



async function  getRecommendations(selectedName) {
    try {
        const formData = new FormData();
        formData.append('teacher_id', selectedName);
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/summary/teacher/recommendation/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data);
            let result = data.result;
            
            document.getElementById('promotion').textContent = "Promotion : " + result.promotion_percentage.toFixed(2) + "%";
            document.getElementById('retention').textContent = "Retention : " + result.retention_percentage.toFixed(2) + "%";
            document.getElementById('termination').textContent = "Termination : " + result.termination_percentage.toFixed(2) + "%";
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
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}



async function getPerformance(selectedName) {
        // Performance Line Chart
        try {
            const formData = new FormData();
            formData.append('teacher_id', selectedName);
            const response = await fetch('https://bnahs.pythonanywhere.com/api/school/summary/teacher/tenure/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    
                },
                credentials: 'include',
                body: formData,
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log("Success Data : ", data);
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
                console.log("Error Data : ", data);
            }
        } catch (error) {
            console.error("Error during fetch:", error);
        }
}


async function getKRA(selectedName) {
    try {
        
        const formData = new FormData();
        formData.append('teacher_id', selectedName);
        school_year && formData.append('school_year', school_year);

        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/summary/teacher/kra/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data);  

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
                        data: data.averages,
                        backgroundColor: 'rgba(88, 24, 196, 0.7)',
                        borderColor: 'rgba(88, 24, 196, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });


        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }


}


async function getSwot(selectedName) {
    try {
        
        const formData = new FormData();
        formData.append('teacher_id', selectedName);
        const response = await fetch('https://bnahs.pythonanywhere.com/api/school/summary/teacher/swot/', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                
            },
            credentials: 'include',
            body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Success Data : ", data);
            strengths.textContent = data.strength;
            weaknesses.textContent = data.weakness;
            opportunities.textContent = data.opportunity;
            threats.textContent = data.threat;

        } else {
            console.log("Error Data : ", data);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}


selectorTeacher.addEventListener("change", async function() {
    const selectedName = this.value;
    if (selectedName == "None") {
        return;
    }

    getRecommendations(selectedName);
    getPerformance(selectedName);
    getKRA(selectedName);
    getSwot(selectedName);
}); 


chooseYearFilter.addEventListener("change", async function() {
    const selectedYear = this.value;
    
    if (selectedYear == "all") {
        school_year = null;
    } else {
        school_year = selectedYear;
    }

    const selectedName = selectorTeacher.value;
    if (selectedName == "None") {
        return;
    }

    getKRA(selectedName)

});



