function node_avg() {

var width = 160,
	height = 15;

var svg = d3.select('#avg-magnitude-node').append('svg')
    .attr('width', width)
    .attr('height', height);

var g = svg.append('g');

var data = [{'name':'circle', 'value': 5}]

var circle = g.selectAll('circle')
	.data(data)
	.enter()
	.append('circle')
	.attr('r', function(d) {return d.value})
	.attr('fill', 'grey')
	.attr('transform', 'translate(' + width/2 + ',' + height/2 + ')');

/*
function redraw(data) {
  
	var circle = group.selectAll('circle')
			.data(data)
		.enter().append('circle')
			.attr('r', function (d) { return d; })
			.attr('fill', 'orange')
			.attr('transform', 'translate(150,150)');

	d3.transition().select('circle')
		.ease('bounce').duration(400)
		.attr('r', function (d) { return d; });
}

setInterval(function() {
    var random = Math.floor(Math.random() * 150);
    
    redraw([random]);
  }, 1500);
*/
}
node_avg()