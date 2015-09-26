//for line chart on stats page
  

		var randomScalingFactor = function(){ return Math.round(Math.random()*40)};
		
		var lineChartData = {
			labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
			datasets : [
				{
					label: "Furpiles",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "Bystander Wounds",
					fillColor : "rgba(119,8,21,0.2)",
					strokeColor : "rgba(119,8,21,.4)",
					pointColor : "rgba(119,8,21,.4)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(119,8,21,.4)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "Hours of Interrupted Sleep",
					fillColor : "rgba(34,34,210,0.2)",
					strokeColor : "rgba(34,34,210,.4)",
					pointColor : "rgba(34,34,210,.4)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(34,34,210,.4)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
			]

		};

	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true,
		});
	};
	
// add legend

var options = {
  legendTemplate : '<ul>'
                  +'<% for (var i=0; i<datasets.length; i++) { %>'
                    +'<li>'
                    +'<span style=\"background-color:<%=datasets[i].lineColor%>\"></span>'
                    +'<% if (datasets[i].label) { %><%= datasets[i].label %><% } %>'
                  +'</li>'
                +'<% } %>'
              +'</ul>'
  };

 //don't forget to pass options in when creating new Chart
  var lineChart = new Chart(element).Line(data, options);

  //then you just need to generate the legend
  var legend = lineChart.generateLegend();

  //and append it to your page somewhere
  $('#legendDiv').append(legend);



