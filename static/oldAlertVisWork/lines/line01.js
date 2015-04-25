function line01() {

var data = [
    {"date":"21-Mar-12","close":602.50},
    {"date":"20-Mar-12","close":605.96},
    {"date":"19-Mar-12","close":601.10},
    {"date":"16-Mar-12","close":585.57},
    {"date":"15-Mar-12","close":585.56},
    {"date":"14-Mar-12","close":589.58},
    {"date":"13-Mar-12","close":568.10},
    {"date":"12-Mar-12","close":552.00},
    {"date":"9-Mar-12","close":545.17},
    {"date":"8-Mar-12","close":541.99},
    {"date":"7-Mar-12","close":530.69},
    {"date":"6-Mar-12","close":530.26},
    {"date":"5-Mar-12","close":533.16},
    {"date":"2-Mar-12","close":545.18},
    {"date":"1-Mar-12","close":544.47}
];

var datanew = [
    {"date":"1-May-12","close":582.13},
    {"date":"30-Apr-12","close":583.98},
    {"date":"27-Apr-12","close":603.00},
    {"date":"26-Apr-12","close":607.70},
    {"date":"25-Apr-12","close":610.00},
    {"date":"24-Apr-12","close":560.28},
    {"date":"23-Apr-12","close":571.70},
    {"date":"20-Apr-12","close":572.98},
    {"date":"19-Apr-12","close":587.44},
    {"date":"18-Apr-12","close":608.34},
    {"date":"17-Apr-12","close":609.70},
    {"date":"16-Apr-12","close":580.13},
    {"date":"13-Apr-12","close":605.23},
    {"date":"12-Apr-12","close":622.77},
    {"date":"11-Apr-12","close":626.20},
    {"date":"10-Apr-12","close":628.44},
    {"date":"9-Apr-12","close":636.23},
    {"date":"5-Apr-12","close":633.68},
    {"date":"4-Apr-12","close":624.31},
    {"date":"3-Apr-12","close":629.32},
    {"date":"2-Apr-12","close":618.63},
    {"date":"30-Mar-12","close":599.55},
    {"date":"29-Mar-12","close":609.86},
    {"date":"28-Mar-12","close":617.62},
    {"date":"27-Mar-12","close":614.48},
    {"date":"26-Mar-12","close":606.98},
    {"date":"23-Mar-12","close":596.05},
    {"date":"22-Mar-12","close":599.34}
];

var n = data.length;

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 330 - margin.left - margin.right,
    height = 140 - margin.top - margin.bottom;

var parseDate = d3.time.format("%d-%b-%y").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

var svg = d3.select("#line-one").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);

data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.close = +d.close;
});

datanew.forEach(function(d) {
    d.date = parseDate(d.date);
    d.close = +d.close;
});

//sort data by dates
data.sort(function(a, b){ return d3.ascending(a.date, b.date); });
datanew.sort(function(a, b){ return d3.ascending(a.date, b.date); });


x.domain(d3.extent(data, function(d) { return d.date; }));
y.domain(d3.extent(data, function(d) { return d.close; }));
//y.domain([400, d3.max(data, function(d) { return d.close + 20}) ])

/*
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
*/

// X Axis, have to do this method so can call a transition
var axis = svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(x.axis = d3.svg.axis().scale(x).ticks(2).orient("bottom"));
/*
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Price ($)");
*/

// Y Axis
var yaxsis = svg.append("g")
    .attr("class", "y axis")
    .call(y.axis = d3.svg.axis().scale(y).ticks(4).orient("left"));

var path = svg.append("g")
    .attr("clip-path", "url(#clip)")
    .append('path')
    .datum(data)
    .attr("class", "line")
    .attr("d", line);

tick()

function tick() {

    var duration = 2300;
    //verify dates are sorted, should be overkill but oh well
    data.sort(function(a, b){ return d3.ascending(a.date, b.date); });
    datanew.sort(function(a, b){ return d3.ascending(a.date, b.date); });

    //get first date from data queue
    var newobject = datanew.shift();

    //push each object on back of data
    data.push(newobject);

    //redo x domain
    x.domain(d3.extent(data, function(d) { return d.date; }));
    //and y domain, may want the min though to be historic low or zero
    y.domain(d3.extent(data, function(d) { return d.close; }));

    //redraw line
    svg.select(".line")
        .attr("d", line)
        .attr("transform", null);

    // slide the x-axis left
    axis.transition()
        .duration(duration)
        .ease("linear")
        .call(x.axis);
 
    // redraw the line (with the wrong interpolation)
    path.transition()
        .duration(duration)
        .ease("linear")
      //.attr("transform", "translate(" +  + ")")
      //need to translate one day to the left to keep up with the line
      //.attr("transform", "translate(" + '-200' + "," + '100' + ")")
      //.attr("transform", "translate(" + x(-1) + ")");
       //.attr("transform", "translate(" + x(now - (n - 1) * duration) + ")")
        .attr("d", line)
        .each("end", tick); 

    // Y Axis
    yaxsis.transition()
        .attr("class", "y axis")
        .ease("linear")
        .call(y.axis);

    // remove data point off the front
    data.shift();
}

}//end of wrapper function
line01()