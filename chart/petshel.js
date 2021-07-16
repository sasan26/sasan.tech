// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // chart-1 (PetShel)
  var data = google.visualization.arrayToDataTable([
    ['usefull or not', 'Percentage'],
    ['Thinks this app is useful', 6],
    ['Does not think this app is useful', 4]
  ]);

  var options = {title: 'Whether it is useful or not?', legend:{position:'none'}, 
  slices: {
    0: { color: '009999' },
    1: { color: 'ff3300' }
  }};

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
  
  // chart-2 (PetShel)
  var data2 = google.visualization.arrayToDataTable([
    ['Speaking Tone', 'Percentage', { role: 'style' }],
    ['Positive Tone', 60, '#009999'],
    ['Frusterated Tone', 20, '#ff3300'],
    ['Annoyed Tone', 20, '#ff3300'],
    ['Confident Tone', 40, '#b3b300']
  ]);

  var options2 = {
    title: 'Speaking tone',
    hAxis: {
      title: 'Percentage',
      ticks: [0, 20, 40, 60, 80, 100]
    },
    legend:{position:'none'}
  };

  var chart2 = new google.visualization.BarChart(document.getElementById('piechart2'));
  chart2.draw(data2, options2);

  // cahrt-3 (PetShel)
  var data3 = google.visualization.arrayToDataTable([
    ['Task', 'Percentage', { role: 'style' }],
    ['Easily could do a search and find new locations', 40, '#ff3300'],
    ['Had a hard time to find a listed location', 60, '#b3b300'],
    ['Feels frustrated share current location on map', 40, '#ff3300'],
    ['Did not understand connection between locations and message system', 40, '#ff3300'],
    ['Confused about donation prosses', 40, '#ff3300'],
    ['Wanted to update his post', 80, '#009999']
  ]);
  
    var options3 = {
      title: 'Pros and Cons',
      vAxis: {
        title: 'Percentage',
        ticks: [0, 25, 50, 75, 100]
      },
      legend:{position:'none'}
    };
  
    var chart3 = new google.visualization.ColumnChart(document.getElementById('piechart3'));
    chart3.draw(data3, options3);

}




