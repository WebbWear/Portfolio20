var ctx = document.getElementById('myBarChart').getContext('2d');

Chart.defaults.global.animation.duration = 4000;

var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['HTML ' + '\uf13b', 'CSS ' + '\uf38b', 'JavaScript ' + '\uf3b8', 'React ' + '\uf41b', 'Ruby ' + '\uf3a5', 'Photoshop', 'Illustrator'],
        datasets: [{
            label: 'My Skills',
            data: [9, 7, 6, 5, 3, 7, 5],
            

            backgroundColor: [
                'rgba(241, 101, 41, 0.5)',
                'rgba(38, 77, 228, 0.5)',
                'rgba(240, 219, 79, 0.5)',
                'rgba(97, 219, 251, 0.5)',
                'rgba(213, 31, 6, 0.5)',
                'rgba(139, 195, 252, 0.5)',
                'rgba(251, 176, 52, 0.5)'

            ],
            borderColor: [
                'rgba(241, 101, 41, 1)',
                'rgba(38, 77, 228, 1)',
                'rgba(240, 219, 79, 1)',
                'rgba(97, 219, 251, 1)',
                'rgba(213, 31, 6, 1)',
                'rgba(139, 195, 252, 1)',
                'rgba(251, 176, 52, 1)'

            ],
            borderWidth: 1
        }]
    },

    
    
    options: {
        legend: {
            display: true,
                plugins: {
                    deferred: {
                        // xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
                        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                        // delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
                      }
                  }
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    drawOnChartArea: false
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: 'rgba(93, 96, 99)',
                    fontFamily: "'FontAwesome', 'Raleway'",
                    fontSize: 20
                }
            }]
        },

        
        
    }
});

