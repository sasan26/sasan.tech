// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // chart-1 (PetShel)
  var data = google.visualization.arrayToDataTable([
    ['play again or not', 'Percentage'],
    ['Will play this game again', 8],
    ['Will not play this game anymore', 2]
  ]);

  var options = {title: 'Will play this game again or not?', legend:{position:'none'}, 
        slices: {
            0: { color: '33cccc' , offset: 0.1},
            1: { color: 'cc0066', offset: 0.2}
        },
        is3D: true
    };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
  
  // chart-2 (PetShel)
  var data2 = google.visualization.arrayToDataTable([
    ['Speaking Tone', 'Percentage', { role: 'style' }],
    ['Positive Tone', 80, '#33cccc'],
    ['Frusterated Tone', 20, '#cc0066'],
    ['Annoyed Tone', 20, '#cc0066'],
    ['Confident Tone', 60, '#33cccc']
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
    ['Easily could take a selfie', 60, '#33cccc'],
    ['Had a hard time to find the selfie button', 20, '#cc0066'],
    ['Feels frustrated to take a selfie', 20, '#cc0066'],
    ['Confused about scoring system', 40, '#ff9900'],
    ['Wanted to add new credit card to his/her account', 60, '#33cccc']
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




