//CSS
import "../node_modules/normalize.css/normalize.css"
import "../src/css/index.css"

import d3 from 'd3'
import topojson from 'topojson'

var width = 1580,
    height = 2000;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var zoom = 3000
var projection = d3.geo.mercator().translate([-1850-350.98*zoom, 8000+1072.02*zoom]).scale(5500+810*zoom);

var path = d3.geo.path()
    .projection(projection);

d3.json("json/map.topojson", function(error, json) {
    var featureCollection = topojson.feature(json, json.objects.map);
    svg.append("g")
        .selectAll('path')
        .data(featureCollection.features)
        .enter().append("path")
        .attr("d", path)
        .attr('class', function(d,i){
            if (d.id.indexOf('way') === -1) {
                return 'mappoint'
            }
            else {
                return 'mappath'
            }
    })
});
