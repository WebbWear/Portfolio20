var ctx = document.getElementById('myBarChart');

Chart.defaults.global.animation.duration = 4000;

var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['HTML ' + '\uf13b', 'CSS ' + '\uf38b', 'JavaScript ' + '\uf3b8', 'React ' + '\uf41b', 'Ruby on Rails ' + '\uf3a5', 'Photoshop ' + '\uf778','Illustrator'],
        datasets: [{
            label: 'My Skills',
            data: [19, 13, 12, 10, 5, 17, 10],
            

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        
        
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: 'rgba(93, 96, 99)',
                    fontFamily: "'FontAwesome', 'Raleway'",
                    fontSize: 20
                }
            }]
        }
        
    }
});