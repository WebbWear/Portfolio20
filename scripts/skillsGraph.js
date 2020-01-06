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
            display: false,
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
        }
        
    }
});

// Below is supposed to fire when scroll into view
// used code from example http://jsfiddle.net/TSmDV/197/

// var inView = false;

//     function isScrolledIntoView(elem)
//     {
//         var docViewTop = $(window).scrollTop();
//         var docViewBottom = docViewTop + $(window).height();
    
//         var elemTop = $(elem).offset().top;
//         var elemBottom = elemTop + $(elem).height();
    
//         return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
//     }
    
//     $(window).scroll(function() {
//         if (isScrolledIntoView('#myBarChart')) {
//             if (inView) { return; }
//             inView = true;
//             new Chart(
//                 document.getElementById("myBarChart").getContext("2d"),
//                 {type: 'horizontalBar', data: data });
//         } else {
//             inView = false;  
//         }
//     });