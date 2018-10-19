const traffic = document.getElementById("trafficChart");
const daily = document.getElementById("dailyChart");
const users = document.getElementById("usersChart");

// CHART DATA
const hourlyLables = ['9am', '10pm', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
const hourlyData = [10, 40, 95, 70, 36, 29, 30, 87, 67];
const dailyLables = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];
const dailyData = [345, 568, 483, 748, 867, 629, 292];
const weeklyLables = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3',];
const weeklyData = [1754, 2035, 1590, 2658, 3786, 3045, 4019];
const monthlyLables = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const monthlyData = [4203, 5783, 4977, 6234, 7001, 6820, 7689, 8003, 7035, 6894, 7954, 8567];

// TRAFFIC CHART

let trafficChart = new Chart(traffic, {
    type: 'line',
    data: {
        labels: hourlyLables,
        datasets: [{
            label: '',
            data: hourlyData,
            backgroundColor: [
                'rgba(224, 212, 186, 0.6)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(55, 41,25,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {display: false},
    } 
}) 

// DAILY CHART

let dailyChart = new Chart(daily, { 
    type: 'bar',
    data: {
        labels: dailyLables,
        datasets: [{
            label: '',
            data: dailyData,
            backgroundColor: [
                'rgba(224, 212, 186, 0.6)',
                'rgba(224, 212, 186, 0.6)',
                'rgba(224, 212, 186, 0.6)',
                'rgba(224, 212, 186, 0.6)',
                'rgba(224, 212, 186, 0.6)',
                'rgba(224, 212, 186, 0.6)',
                'rgba(224, 212, 186, 0.6)',
            ],
            borderColor: [
                'rgba(55, 41,25,1)',
                'rgba(55, 41,25,1)',
                'rgba(55, 41,25,1)',
                'rgba(55, 41,25,1)',
                'rgba(55, 41,25,1)',
                'rgba(55, 41,25,1)',
                'rgba(55, 41,25,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {display: false},
    } 
})

// USERS CHART

let usersChart = new Chart(users, {
    type: 'doughnut',
    data: {
            datasets: [{
                data: [70, 20, 10],
                backgroundColor: [
                    'rgba(54, 41, 25, 0.8)',
                    'rgba(224, 212, 186, 0.6)',
                    'rgb(209, 115, 0, 0.6)'
                ],
                borderColor: [
                    'rgba(55, 41,25,1)',
                    'rgba(55, 41,25,1)',
                    'rgba(55, 41,25,1)',
                ],
                borderWidth: 1
                }],
                labels: [
                    'Phones',
                    'Tablets',
                    'Desktop'
                ],
    },
    options: {
        legend: {
            position: 'right',
            labels: {
                padding: 30
            },
        },
        layout: {
            padding: {
              left: 0,
              right: 10,
              top: 0,
              bottom: 20
            }
        }   
    }
}) 