function init() {
    // initialize SVG components, variables
    var width = 500,
        height = 600,
        svg = d3.select('#google_map')
                .append("svg")
                .attr("width", '100%')
                .attr("height", 'auto'),
        projection = d3.geo.albersUsa()
                    .scale(1280)
                    .translate([width/2, height/2]),
        path = d3.geo.path()
                .projection(projection);

    // initialize d3 components
    var colors = d3.scale.linear()
                    .domain([0,100])
                    .range(['#A4D263', '#E8DB3A', '#E89C3A', '#E83D3A']);

    // load data... async 
    d3.csv('data/google-covid.csv', function(data) {
        // us geo json source: https://eric.clst.org/tech/usgeojson/
        d3.json('data/us-states.json', function(json) {

        })
    });
    

    // http://duspviz.mit.edu/d3-workshop/mapping-data-with-d3/ for time slider reference

}