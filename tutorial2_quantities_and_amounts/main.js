
     d3.csv("../../data/squirrelActivities.csv", d3.autoType).then(data => {
        var margin = {top: 10, right: 20, bottom: 30, left: 100},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    
    /** SCALES */
  // reference for d3.scales: https://github.com/d3/d3-scale
    var y = d3.scaleBand()
              .range([height, 1])
              .padding(0.5);
              
    
    var x = d3.scaleLinear()
              .range([0, width]);

              
    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
    
      // format the data
      data.forEach(function(d) {
        d.count = +d.count;
      });
    
      // Scale the range of the data in the domains
      x.domain([0, d3.max(data, function(d){ return d.count; })])
      y.domain(data.map(function(d) { return d.activity; }));
      //y.domain([0, d3.max(data, function(d) { return d.sales; })]);
    
      // append the rectangles for the bar chart
      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          //.attr("x", function(d) { return x(d.sales); })
          .attr("width", function(d) {return x(d.count); } )
          .attr("y", function(d) { return y(d.activity); })
          .attr("height", y.bandwidth())
          .attr("fill", "purple");
    
       // reference for d3.axis: https://github.com/d3/d3-axis
      // add the x Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x))
          .attr("class", "axis");
    
      // add the y Axis
      svg.append("g")
          .call(d3.axisLeft(y))
          .attr("class", "axis")
          .marginleft(20);
      });

