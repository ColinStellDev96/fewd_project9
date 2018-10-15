const traffic = document.getElementById("trafficChart");

// TRAFFIC CHART

const hourlyLables = ['1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm'];
const hourlyData = [10, 40, 95, 70, 15, 5, 30, 55, 60, 20];
const dailyLables = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];
const dailyData = [345, 568, 483, 748, 867, 629, 292];
const weeklyLables = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3',];
const weeklyData = [1754, 2035, 1590, 2658, 3786, 3045, 4019];
const monthlyLables = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const monthlyData = [4203, 5783, 4977, 6234, 7001, 6820, 7689, 8003, 7035, 6894, 7954, 8567];

let trafficChart = new Chart(traffic, {
    type: 'line',
    data: {
        labels: monthlyLables,
        datasets: [{
            data: monthlyData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
}) 