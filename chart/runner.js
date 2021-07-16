// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // chart-1 (Runner)
  var data = google.visualization.arrayToDataTable([
    ['usefull or not', 'Percentage'],
    ['Will use this game again', 100],
    ['Will not use this game again', 0]
  ]);

  var options = {title: 'Whether it is useful or not?', legend:{position:'none'}, 
  slices: {
    0: { color: '00cc99' },
    1: { color: 'ff3300' }
  }};

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
  
  // chart-2 (Runner)
  var data2 = google.visualization.arrayToDataTable([
    ['Speaking Tone', 'Percentage', { role: 'style' }],
    ['Positive Tone', 60, '#00cc99'],
    ['Frusterated Tone', 20, '#996600'],
    ['Annoyed Tone', 20, '#996600'],
    ['Confident Tone', 40, '#e6e600']
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

  // cahrt-3 (Runner)
  var data3 = google.visualization.arrayToDataTable([
    ['Task', 'Percentage', { role: 'style' }],
    ['Easily could add credit card and bank account', 60, '#00cc99'],
    ['Had a hard time to find out how banking options work', 20, '#996600'],
    ['Feels frustrated connect to bank account', 20, '#996600'],
    ['Didn not understand connection between characters and roads', 60, '#00cc99'],
    ['Confused about results', 40, '#e6e600']
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




