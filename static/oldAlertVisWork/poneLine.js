var formatDate = d3.time.format("%b %Y");

var chart = timeSeriesChart()
    .x(function(d) { return formatDate.parse(d.date); })
    .y1(function(d) { return +d.price; })
    .y0(function(d) {return +d.low; })
    .y(function(d) {return +d.line; })
    .cx(function(d) { return formatDate.parse(d.date); })
    .cy(function(d) {return +d.line; });

d3.csv("./sp500area01.csv", function(data) {
    //d3.csv("../sp500area02.csv", function(datatwo) {
        
        d3.select("#example")
            .datum(data)
            .call(chart);
        /*
        console.log(datatwo)
        setTimeout(function () {
            d3.select("#example")
                .datum(datatwo)
                .call(chart)
        }, 3000);
        */
    //})
});