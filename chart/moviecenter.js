// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // chart-1 (MovieCenter)
  var data = google.visualization.arrayToDataTable([
    ['usefull or not', 'Percentage'],
    ['Wants to use this app next time', 80],
    ['Desn not want to use this app anymore', 20]
  ]);

  var options = {
    title: 'Whill use it again or not?', 
    legend:{position:'none'}, 
    pieHole: 0.3,
    // slices: {  1: {offset: 0.2},          
    //       }
    slices: {
      0: { color: '009999' },
      1: { color: 'ff3300' }
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('moviechart1'));
  chart.draw(data, options);
  
  // chart-2 (MovieCenter)
  var data2 = google.visualization.arrayToDataTable([
    ['Speaking Tone', 'Percentage', { role: 'style' }],
    ['Positive Tone', 60, '#009999'],
    ['Frusterated Tone', 20, '#ff3300'],
    ['Annoyed Tone', 20, '#ff3300'],
    ['Confident Tone', 40, '#cccc00']
  ]);

  var options2 = {
    title: 'Speaking tone',
    hAxis: {
      title: 'Percentage',
      ticks: [0, 20, 40, 60, 80, 100]
    },
    legend:{position:'none'}
  };

  var chart2 = new google.visualization.BarChart(document.getElementById('moviechart2'));
  chart2.draw(data2, options2);

  // cahrt-3 (MovieCenter)
  var data3 = google.visualization.arrayToDataTable([
    ['Task', 'Percentage', { role: 'style' }],
    ['Easily could do a search and find new movies', 60, '#009999'],
    ['Had a hard time to use a filters and find movies', 20, '#ff3300'],
    ['Feels frustrated working with filters', 20, '#ff3300'],
    ['Did not understand how to add new paymen method', 40, '#cccc00'],
    ['Confused about booked tickets', 40, '#cccc00'],
    ['Wanted tocancel his purchases', 40, '#cccc00']
  ]);
  
    var options3 = {
      title: 'Pros and Cons',
      vAxis: {
        title: 'Percentage',
        ticks: [0, 25, 50, 75, 100]
      },
      legend:{position:'none'}
    };
  
    var chart3 = new google.visualization.ColumnChart(document.getElementById('moviechart3'));
    chart3.draw(data3, options3);

}




