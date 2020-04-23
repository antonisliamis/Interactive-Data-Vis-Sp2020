const width = window.innerWidth * 0.9,
height = window.innerHeight * 0.7,
margin = { top: 20, bottom: 50, left: 150, right: 40 },
radius = 4.5,
paddingInner = 0.2;


let svgMap;
let svgGraph;
let xScale;
let yScale;
let xAxis;
let yAxis;
let projection;
let path;
let tooltip;
let x, y;


let state = {
    geojson: null,
    tedData: [],
   selectedYear: "2015",
};

Promise.all([
    d3.json("countries.geo.json"),
    d3.csv("ted.csv", d => ({
      year: d.year,
      country: d.country,
      population: +d.population,
      lat: +d.latitude,
      long: +d.longitude,
      city: d.city,
      growth: d.growth,
      gdp_per_capita: +d.gdp_per_capita,
      hdi: +d.hdi,
      ted_total_per_city:+d.ted_total_per_city
    })),
]).then(([geojson, tedData]) => {
    state.geojson = geojson;
    state.tedData = tedData;
    init();
   
});



function init() {

    const selectElement = d3.select("#dropdown").on("change", function() {
      state.selectedYear = this.value;
      draw();
    });

    selectElement
      .selectAll("option")
      .data([
        ...Array.from(new Set(state.tedData.map(d => d.year))),
      ])
      .join("option")
      .attr("value", d => d)
      .text(d => d);

    selectElement.property("value", "2015");

    projection = d3.geoNaturalEarth1().fitSize([width, height], state.geojson);
    path = d3.geoPath().projection(projection);

    svgMap = d3
      .select("#d3-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svgMap
      .selectAll(".world")
      .data(state.geojson.features)
      .join("path")
      .attr("d", path)
      .attr("class", "world");


    tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .attr("width", 600)
      .attr("height", 600)
      .style("position", "absolute")
      .style("opacity", 0);

      //<--  INI MAP / Graph ->


      // append the svg object to the body of the page
   svgGraph  = d3.select("#d3-container2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

  
// Add X axis
x = d3.scaleLinear()
// .domain([0, 166726])
.domain(d3.extent(state.tedData, d => d.gdp_per_capita))
.range([ 0, width ]);

svgGraph.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x))
.append("text")
.attr("class", "axis-label")
.attr("x", "50%")
.attr("dy", "3em")
.text("GDP_per_capita");

// Add Y axis
y = d3.scaleLinear()
// .domain([0, 1])
.domain(d3.extent(state.tedData, d => d.hdi))
.range([ height, 0]);

svgGraph.append("g")
.call(d3.axisLeft(y))
.append("text")
.attr("class", "axis-label")
.attr("y", "50%")
.attr("dx", "-3em")
.attr("writing-mode", "vertical-rl")
.text("HDI (Human Development Index");

  
      draw()
      // drawGraph();
}

function draw() {

  let filteredData;
  if (state.selectedYear !== null) {
    filteredData = state.tedData.filter(d => d.year === state.selectedYear);
  }

  svgMap
    .selectAll(".circle")
    .data(filteredData, d => d.year)
    .join(
      enter =>
        enter
          .append("circle")
          .attr("class", "circle")
          .attr("r", radius)
          .attr("cx", function(d) {
            return projection([d.long, d.lat])[0];
          })
          .attr("cy", function(d) {
            return projection([d.long, d.lat])[1];
          })
          .attr("fill", d => {
          return "red"
          })
          .attr("r", d => Math.sqrt(d.ted_total_per_city*0.9))
          //.attr("r", d => Math.sqrt(d.population*0.000008))
          .on("mouseover", d => {

           tooltip
          .html("Country: " + d.country
           +"<br/> City: " + "<strong>" + d.city + "<strong>"
           + "<br/> Ted Talks Frequency:" +"<strong>"+ d.ted_total_per_city + "<strong>" 
           +"<br/> Level of Economic Growth: " + d.growth
          + "<br/> Population:" + d.population 
          
         )
          .transition()
          .duration(200)
          .style("opacity", 1)
        })

          .on("mouseout", d => {
            tooltip
            .transition()
            .duration(100)
            .style("opacity", 0)
          })
          .on("mousemove", d => {
            d3.select(".tooltip")
            .style("left", (d3.event.pageX+10) + "px")
            .style("top", (d3.event.pageY+10) + "px")
          }),
      update => update,
      exit =>
          exit.call(exit =>
            exit 
              .transition()
              .duration(500)
              .attr("cx", width)
              .remove()
          )
    )
    .call(
      selection =>
        selection
          .transition()
          .duration(500)
          .attr("cy", function(d) {
            return projection([d.long, d.lat])[1];
          }),
    );



    //<- DRAW Map / Graph ->



// Add dots
dot = svgGraph
.selectAll(".dot")
.data(filteredData, d => d.country) // use `d.name` as the `key` to match between HTML and data elements
.join(
  enter =>
    // enter selections -- all data elements that don't have a `.dot` element attached to them yet
    enter
      .append("circle")
      .attr("class", "dot") // Note: this is important so we can identify it in future updates
      .attr("stroke", "red")
      .attr("opacity", 0.75)
      .attr("fill", d => {
          return "red";
      })
      .attr("r", radius)
      .attr("cy", d => margin.top)
      .attr("cx", d => x(d.gdp_per_capita))
      .on("mouseover", d => {
        console.log("123: " + d);
        tooltip
        .html("Country: " + "<strong>" + d.country + "</strong>"
        +"<br/> City: " + "<strong>" + d.city + "</strong>"
        +"<br/> Level of Economic Growth: " +  + d.growth
        + "<br/>" + "Population: "   + d.population 
        + "<br/>" + "HDI:" +"<strong>"  + d.hdi + "<strong>"
        +"<br/>"+ "GDP_per_capita:" +"<strong>"+d.gdp_per_capita + "</strong>")
        .transition()
        .duration(200)
        .style("opacity", 1)
      })
      .on("mouseout", d => {
        tooltip
        .transition()
        .duration(100)
        .style("opacity", 0)
      })
      .on("mousemove", d => {
        d3.select(".tooltip")
        .style("left", (d3.event.pageX+10) + "px")
        .style("top", (d3.event.pageY+10) + "px")
      })
      .call(enter =>
        enter
          .transition() // initialize transition
          .delay(d => 5 *15) // delay on each element
          .attr("cy", d => y(d.hdi))
          .duration(250) // 250 ms
          .attr("r", 7)
          .transition()
          .duration(300)
          .ease(d3.easeBounce)
          .transition()
          .duration(400)
          .attr("r", 5)
      ),
  update =>
    update.call(update =>
      // update selections -- all data elements that match with a `.dot` element
      update
        .transition()
        .duration(250)
        .attr("stroke", "yellow")
    ),
  exit =>
    exit.call(exit =>
      // exit selections -- all the `.dot` element that no longer match to HTML elements
      exit
        .transition()
        .delay(d => 5 * 15)
        .duration(250)
        .attr("r", 7)
        .transition()
        .duration(250)
        .attr("fill", "#D3D3D3")
        .transition()
        .duration(300)
        .attr("r", 5)
        .attr("cy", height)
        .delay(d => 50 *15)
        .remove()
    )
);
  
}

