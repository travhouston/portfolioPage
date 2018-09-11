const weeklyTraffic = document.getElementById("traffic-chart").getContext('2d');
const trafficChart = new Chart(weeklyTraffic, {
    type: 'line',
    data: {
        labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
        datasets: [
            {
                data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
                backgroundColor: 'rgba(227,227,246, 0.7)',
                lineTension: 0,
                pointBorderColor: '#7477BE',
                pointRadius: 5,
                pointBorderWidth: 2,
                pointBackgroundColor: '#fff'
            }     
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    stepSize: 500,
                    beginAtZero:true
                }
            }],
        },
        legend: {
			display: false,
		}
    }
});


const dailyTraffic = document.getElementById("daily-traffic-chart").getContext('2d');
const dailyBarChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Votes',
            data: [50, 75, 150, 100, 200, 175, 75],
				backgroundColor: 'rgba(115,119,191,1)',
				borderColor: 'rgba(115, 119, 191,1)',
				borderWidth: 1
        }]
    },
    options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true,
					max: 250,
					stepSize: 50,
				}
			}],
		},
		legend: {
			display: false,
		}
	}
});


const mobileUsers = document.getElementById("mobile-users-chart").getContext('2d');
const mobileUsersDoughnut = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels: [
			"Phones",
			"Tablets",
			"Desktop"
		],
        datasets: [
            {
                data: [20,20,60],
                backgroundColor: [
                    '#73b0be',
                    '#7EBEA2',
                    '#7477BE'
                ]
            }
        ]
    },
    options: {
		legend: {
			position: 'right',
			labels: {
				boxWidth: 15,
				fontSize: 16
			}
        }
	}
});
