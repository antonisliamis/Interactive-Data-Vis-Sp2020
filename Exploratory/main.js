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


let state = {
    geojson: null,
    worldCupData: null,
   selectedYear: "2009",
};

Promise.all([
    d3.json("world.geojson"),
    d3.csv("ted.csv", d => ({
      year: d.year,
      country: d.country,
      population: +d.population,
      lat: +d.latitude,
      long: +d.longitude,
      city: d.city,
      growth: d.growth,
      gdp_per_capita: d.gdp_per_capita    
    })),
]).then(([geojson, worldCupData]) => {
    state.geojson = geojson;
    state.worldCupData = worldCupData;
    init();
});

function init() {

    const selectElement = d3.select("#dropdown").on("change", function() {
      state.selectedYear = this.value;
      draw();
      //TODO
    });

    selectElement
      .selectAll("option")
      .data([
        ...Array.from(new Set(state.worldCupData.map(d => d.year))),
      ])
      .join("option")
      .attr("value", d => d)
      .text(d => d);

    selectElement.property("value", "2009");

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

    svgGraph = d3
      .select("#d3-container2")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("position", "relative");
      //GRAPH-ONE
    xScale = d3
      .scaleLinear()
      .domain([0, d3.max(state.worldCupData, d => d.year)]) //!
      .range([margin.left, width - margin.right]);

    yScale = d3
      .scaleBand()
      .domain(state.worldCupData.map(d => d.gdp_per_capita))
      .range([margin.top, height - margin.bottom])
      .paddingInner(paddingInner);

    xAxis = d3.axisBottom(xScale);  
    yAxis = d3.axisLeft(yScale);

    svgGraph
      .append("g")
      .attr("class", "axis x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .append("text")
      .attr("class", "axis-label")
      .attr("x", "50%")
      .attr("dy", "3em")
      .text("Countries Globally");

    svgGraph
      .append("g")
      .attr("class", "axis y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis)
      .append("text")
      .attr("class", "axis-label")
      .attr("y", "50%")
      .attr("dx", "-6em")
      .attr("writing-mode", "vertical-rl")
      .text("GDP PER CAPITA");

    tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .attr("width", 600)
      .attr("height", 600)
      .style("position", "absolute")
      .style("opacity", 0);

      //<-- MAP


      //CHART2 ->


          svg = d3
          .select("#d3-container2")
          .append("svg")
          .attr("width", width)
          .attr("height", height);
  
    // add the xAxis
    svg
      .append("g")
      .attr("class", "axis x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .append("text")
      .attr("class", "axis-label")
      .attr("x", "50%")
      .attr("dy", "3em")
      .text("Year");
  
    // add the yAxis
    svg
      .append("g")
      .attr("class", "axis y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis)
      .append("text")
      .attr("class", "axis-label")
      .attr("y", "50%")
      .attr("dx", "-3em")
      .attr("writing-mode", "vertical-rl")
      .text("Economic complexity index-(ECI");
  

      
      draw()
}

function draw() {

  let filteredData;
  if (state.selectedYear !== null) {
    filteredData = state.worldCupData.filter(d => d.year === state.selectedYear);
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
          .attr("r", d => Math.sqrt(d.population*0.000008))
          .on("mouseover", d => {

            tooltip
            .html("Country: " + "<strong>" + d.country + "</strong>"
            +"<br/> City: " + "<strong>" + d.city + "</strong>"
            +"<br/> Level of Economic Growth: " + "<strong>" + d.growth + "</strong>"
            + "<br/>" + "Population: "   + d.population )
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

   
}

