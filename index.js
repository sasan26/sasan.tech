$(document).ready(function(){

  $("#contactBtn").click(function(){

    $('.toast').toast('show');

  });

  $("#closeContact").click(function(){

    $('.toast').toast('hide');

  });

  
  $(window).resize(function(){
    drawChart();
  });
});


