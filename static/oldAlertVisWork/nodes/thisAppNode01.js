function node01() {

	var width = 400,
		height = 320,
		radius = Math.min(width, height) / 2;

	var formatPercent = d3.format(".0%");

	var color = d3.scale.ordinal()
		.domain(['positive', 'negative'])
		.range(['green', 'red']);

	var min = Math.min(width, height);
    var pie = d3.layout.pie().sort(null).value(function(d) { return d.percent; });

	var arc = d3.svg.arc()
		.outerRadius(min/2 * 0.9)
		.innerRadius(min/2 * 0.75);
		
	var svg = d3.select("#top-magnitude-node").append("svg")
		.attr("width", width)
		.attr("height", height)
	var svgG = svg.append("g")
		.attr("transform", "translate(" + width/2 + "," + height/2 + ")");

	d3.csv("static/oldAlertVisWork/nodes/data01.csv", function(error, data) {

		data.forEach(function(d) {
			d.percent = +d.percent;
		});

		var g = svgG.selectAll(".arc")
			.data(pie(data))
			.enter()
			.append("g")
			.attr("class", "arc");

		g.append("path")
			.attr("d", arc)
			.style("stroke", "#1f1f1f")
			.style("stroke-width", 4)
			.style("fill", function(d) {return color(d.data.sentiment); });

		g.append("text")
			.attr("transform", function(d) {return "translate(" + arc.centroid(d) + ")"; })
			.attr("dy", ".35em")
			.style("font-size", "10px")
			.style("text-anchor", "middle")
			.style('fill', 'white')
			.style('font-size', 14)
			.text(function(d) { return formatPercent(d.data.percent); });

		var circledata = [{'name':'circle', 'value': 12}];

		var radiusScale = d3.scale.linear()
			.domain([0, d3.max(circledata, function(d) {return d.value})])
			.range([10, 100]);

		var fillScale = d3.scale.linear()
			.domain([0, 10, 30, 50, 60, 80, 100])
			.range(['#4682b4', '#647aa3','#787292', '#866981','#926071', '#a24c51', '#a94141','#b22222']);

		// Filters
		g
            .append("defs")
            .append("filter")
            .attr("id", "inner-glow")
            .append("feGaussianBlur")
            .attr("in", "SourceGraphic")
            .attr("stdDeviation", 12);

		var circle = g.selectAll('circle.middlepart')
			.data(circledata)
			.enter().append('circle')
			.attr('class', 'middlepart')
			//.attr('r', function(d) {return radiusScale(d.value)})
			.attr('r', function(d) {return min/2 * 0.65})
			//.attr('fill', function(d) {return fillScale(d.value)})
			.attr('fill', '#fafafa')
			.attr('opacity', .4) //set opacity scale from 0.1 to 0.9
			.attr("filter", "url(#inner-glow)");
			//.attr("fill", 'red')
			//.attr('transform', 'translate(' + width/2 + ',' + (height/2 + 10) + ')');

		svg.append("text")
			.attr('x', 0)
			.attr('y', 61)
			.attr('class', 'magnitude-header')
			.style('opacity', 0.7)
			.text('5.2x')
	});
}
node01()