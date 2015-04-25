function circleSeriesChart() {
	var margin = {top: 20, right: 20, bottom: 20, left: 20},
        width = 760,
        height = 120,
        xValue = function(d) { return d[0]; },
        yValue = function(d) { return d[1]; },
        yMinValue = function(d) { return d[2]; },
        yLineValue = function(d) { return d[3]; },
        yCircleValue = function(d) { return d[3]; },
        xScale = d3.time.scale(),
        yScale = d3.scale.linear()
        //circle = d3.selectAll('circle')

    function dotchart(selection) {
    	selection.each(function(data) {
    	}
    }
}