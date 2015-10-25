# Otaniemi-Map
Map of Otaniemi by data from OpenStreetMap, visualised by d3.js, topojson(GeoJSON to topoJSON) and osmtogeojson(osm.xml to GeoJSON)

### Transfer .opm.xml -> geoJSON -> topoJSON
1. Go to the OpenStreetMap, export an area as map.osm.xml.
2. install osmtogeojson by `npm install osmtogeojson -g`
3. `osmtogeojson map.osm.xml > map.geojson`
4. install topojson by `npm install topojson -g`
5. `topojson map.geojson > map.topojson`

### Developments
1. cd to the root of this project
2. `npm install`
3. make sure you have installed `webpack` and `webpack-dev-server` globally. If not, `npm install webpack -g` and `npm install webpack-dev-server -g`
4. `wepack-dev-server`
5. open browser and go to `http://localhost:8080/webpack-dev-server`
6. edit the files in `./src` to see if the web page changed.
7. `webpack` to pack all the files into `bundle.js` 