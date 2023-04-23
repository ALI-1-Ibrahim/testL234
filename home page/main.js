// let fetchRes = fetch("../database/data.json");
//   // fetchRes is the promise to resolve
//   // it by using.then() method
//   fetchRes.then(res =>res.json()).then(d => {SH = d;})
// //   .catch(function(error) {
// //     console.log(error);
// // });

// var X = false/////////////////////////////////////////////////////////////
// var currentMarkers=[];
mapboxgl.setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  null,
  true // Lazy load the plugin
  );
var mapMarkers = [];
var prices = [];
var rooms = [];
var xyz = { "version": 8, "name": "Example: conditional labels", "metadata": { "mapbox:type": "default", "mapbox:origin": "streets-v11", "mapbox:sdk-support": { "android": "10.6.0", "ios": "10.6.0", "js": "2.9.0" }, "mapbox:autocomposite": true, "mapbox:groups": { "Transit, transit-labels": { "name": "Transit, transit-labels", "collapsed": false }, "Administrative boundaries, admin": { "name": "Administrative boundaries, admin", "collapsed": true }, "Land & water, built": { "name": "Land & water, built", "collapsed": true }, "Transit, bridges": { "name": "Transit, bridges", "collapsed": true }, "Buildings, building-labels": { "name": "Buildings, building-labels", "collapsed": true }, "Transit, surface": { "name": "Transit, surface", "collapsed": true }, "Land & water, land": { "name": "Land & water, land", "collapsed": true }, "Road network, bridges": { "name": "Road network, bridges", "collapsed": true }, "Road network, tunnels": { "name": "Road network, tunnels", "collapsed": true }, "Road network, road-labels": { "name": "Road network, road-labels", "collapsed": true }, "Buildings, built": { "name": "Buildings, built", "collapsed": true }, "Natural features, natural-labels": { "name": "Natural features, natural-labels", "collapsed": true }, "Road network, surface": { "name": "Road network, surface", "collapsed": true }, "Walking, cycling, etc., barriers-bridges": { "name": "Walking, cycling, etc., barriers-bridges", "collapsed": true }, "Place labels, place-labels": { "name": "Place labels, place-labels", "collapsed": true }, "Transit, ferries": { "name": "Transit, ferries", "collapsed": true }, "Transit, elevated": { "name": "Transit, elevated", "collapsed": true }, "Point of interest labels, poi-labels": { "name": "Point of interest labels, poi-labels", "collapsed": true }, "Walking, cycling, etc., tunnels": { "name": "Walking, cycling, etc., tunnels", "collapsed": true }, "Terrain, land": { "name": "Terrain, land", "collapsed": true }, "Road network, tunnels-case": { "name": "Road network, tunnels-case", "collapsed": true }, "Walking, cycling, etc., walking-cycling-labels": { "name": "Walking, cycling, etc., walking-cycling-labels", "collapsed": true }, "Walking, cycling, etc., surface": { "name": "Walking, cycling, etc., surface", "collapsed": true }, "Transit, built": { "name": "Transit, built", "collapsed": true }, "Road network, surface-icons": { "name": "Road network, surface-icons", "collapsed": true }, "Land & water, water": { "name": "Land & water, water", "collapsed": true }, "Transit, ferry-aerialway-labels": { "name": "Transit, ferry-aerialway-labels", "collapsed": true } } }, "center": [-73.79913017542174, 40.63350284980356], "zoom": 10.806185439181258, "bearing": 0, "pitch": 0, "fog": { "range": [0.5, 10], "color": "hsl(0, 0%, 100%)", "high-color": ["interpolate", ["exponential", 1.2], ["zoom"], 0, "hsl(207, 100%, 50%)", 8, "hsl(38, 63%, 84%)"], "space-color": ["interpolate", ["exponential", 1.2], ["zoom"], 5.5, "hsl(240, 46%, 11%)", 6, "hsl(199, 61%, 87%)"], "horizon-blend": ["interpolate", ["exponential", 1.2], ["zoom"], 5.5, 0.05, 6, 0.1], "star-intensity": ["interpolate", ["exponential", 1.2], ["zoom"], 5.5, 0.1, 6, 0] }, "sources": { "composite": { "url": "mapbox://mapbox.mapbox-bathymetry-v2,mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2", "type": "vector" } }, "sprite": "mapbox://sprites/mapbox-map-design/cl5uulddi002215l38x5mn5xf/7ynps4lwbi3v1xzo06ag5yhh5", "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf", "projection": { "name": "globe" }, "layers": [{ "id": "land", "type": "background", "layout": {}, "paint": { "background-color": ["interpolate", ["linear"], ["zoom"], 11, "rgba(29,41,53,0.9)", 13, "rgba(29,41,53,0.9)"] }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, land" } }, { "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, land" }, "maxzoom": 7, "type": "fill", "source": "composite", "id": "landcover", "paint": { "fill-color": ["match", ["get", "class"], "snow", "hsl(35, 14%, 100%)", "hsl(81, 38%, 81%)"], "fill-opacity": ["interpolate", ["exponential", 1.5], ["zoom"], 2, 0.3, 7, 0], "fill-antialias": false }, "source-layer": "landcover" }, { "minzoom": 5, "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, land" }, "filter": ["==", ["get", "class"], "national_park"], "type": "fill", "source": "composite", "id": "national-park", "paint": { "fill-color": "hsl(99, 57%, 75%)", "fill-opacity": ["interpolate", ["linear"], ["zoom"], 5, 0, 6, 0.5, 10, 0.5] }, "source-layer": "landuse_overlay" }, { "minzoom": 5, "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, land" }, "filter": ["all", [">=", ["to-number", ["get", "sizerank"]], 0], ["match", ["get", "class"], ["park", "airport", "glacier", "pitch", "sand", "facility"], true, "residential", ["step", ["zoom"], true, 12, false], "cemetery", true, "school", true, "hospital", true, "commercial_area", true, false], ["<=", ["-", ["to-number", ["get", "sizerank"]], ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0, 18, 14]], 14]], "type": "fill", "source": "composite", "id": "landuse", "paint": { "fill-color": ["interpolate", ["linear"], ["zoom"], 15, ["match", ["get", "class"], "park", "rgba(29,41,53,255)", "airport", "rgba(29,41,53,255)", "cemetery", "rgba(29,41,53,255)", "glacier", "rgba(29,41,53,255)", "hospital", "rgba(29,41,53,255)", "pitch", "rgba(29,41,53,255)", "sand", "rgba(29,41,53,255)", "school", "rgba(29,41,53,255)", "commercial_area", "rgba(29,41,53,255)", "residential", "rgba(29,41,53,255)", "rgba(29,41,53,255)"], 16, ["match", ["get", "class"], "park", "rgba(29,41,53,255)", "airport", "rgba(29,41,53,255)", "cemetery", "rgba(29,41,53,255)", "glacier", "rgba(29,41,53,255)", "hospital", "rgba(29,41,53,255)", "pitch", "rgba(29,41,53,255)", "sand", "rgba(29,41,53,255)", "school", "rgba(29,41,53,255)", "commercial_area", "rgba(29,41,53,255)", "rgba(29,41,53,255)"]], "fill-opacity": ["interpolate", ["linear"], ["zoom"], 5, ["match", ["get", "class"], "residential", 1, 0], 6, ["match", ["get", "class"], "glacier", 0.5, 1], 12, ["match", ["get", "class"], "glacier", 0.5, "residential", 0, 1]] }, "source-layer": "landuse" }, { "minzoom": 15, "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, land" }, "filter": ["==", ["get", "class"], "pitch"], "type": "line", "source": "composite", "id": "pitch-outline", "paint": { "line-color": "hsl(81, 33%, 84%)" }, "source-layer": "landuse" }, { "id": "waterway-shadow", "type": "line", "source": "composite", "source-layer": "waterway", "minzoom": 8, "layout": { "line-cap": ["step", ["zoom"], "butt", 11, "round"], "line-join": "round" }, "paint": { "line-color": "hsl(215, 84%, 69%)", "line-width": ["interpolate", ["exponential", 1.3], ["zoom"], 9, ["match", ["get", "class"], ["canal", "river"], 0.1, 0], 20, ["match", ["get", "class"], ["canal", "river"], 8, 3]], "line-translate": ["interpolate", ["exponential", 1.2], ["zoom"], 7, ["literal", [0, 0]], 16, ["literal", [-1, -1]]], "line-translate-anchor": "viewport", "line-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0, 8.5, 1] }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, water" } }, { "id": "water-shadow", "type": "fill", "source": "composite", "source-layer": "water", "minzoom": 7, "layout": {}, "paint": { "fill-color": "hsl(215, 84%, 69%)", "fill-translate": ["interpolate", ["exponential", 1.2], ["zoom"], 7, ["literal", [0, 0]], 16, ["literal", [-1, -1]]], "fill-translate-anchor": "viewport" }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, water" } }, { "id": "waterway", "type": "line", "source": "composite", "source-layer": "waterway", "minzoom": 8, "layout": { "line-cap": ["step", ["zoom"], "butt", 11, "round"], "line-join": "round" }, "paint": { "line-color": "#2d4051", "line-width": ["interpolate", ["exponential", 1.3], ["zoom"], 9, ["match", ["get", "class"], ["canal", "river"], 0.1, 0], 20, ["match", ["get", "class"], ["canal", "river"], 8, 3]], "line-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0, 8.5, 1] }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, water" } }, { "id": "water", "type": "fill", "source": "composite", "source-layer": "water", "layout": {}, "paint": { "fill-color": "#2d4051" }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, water" } }, { "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, water" }, "maxzoom": 8, "type": "fill", "source": "composite", "id": "water-depth", "paint": { "fill-color": ["interpolate", ["linear"], ["zoom"], 6, ["interpolate", ["linear"], ["get", "min_depth"], 0, "#2d4051", 200, "#2d4051", 7000, "#2d4051"], 8, ["interpolate", ["linear"], ["get", "min_depth"], 0, "#2d4051", 200, "#2d4051", 7000, "#2d4051"]] }, "source-layer": "depth" }, { "layout": {}, "metadata": { "mapbox:featureComponent": "terrain", "mapbox:group": "Terrain, land" }, "maxzoom": 16, "type": "fill", "source": "composite", "id": "hillshade", "paint": { "fill-color": ["match", ["get", "class"], "shadow", "hsl(56, 36%, 21%)", "hsl(35, 14%, 100%)"], "fill-opacity": ["interpolate", ["linear"], ["zoom"], 14, ["match", ["get", "level"], [67, 56], 0.06, [89, 78], 0.05, 0.12], 16, 0], "fill-antialias": false }, "source-layer": "hillshade" }, { "minzoom": 13, "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, built" }, "filter": ["all", ["==", ["get", "class"], "land"], ["==", ["geometry-type"], "Polygon"]], "type": "fill", "source": "composite", "id": "land-structure-polygon", "paint": { "fill-color": "hsl(35, 12%, 89%)" }, "source-layer": "structure" }, { "minzoom": 13, "layout": { "line-cap": "square" }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, built" }, "filter": ["all", ["==", ["get", "class"], "land"], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "land-structure-line", "paint": { "line-width": ["interpolate", ["exponential", 1.99], ["zoom"], 14, 0.75, 20, 40], "line-color": "hsl(35, 12%, 89%)" }, "source-layer": "structure" }, { "id": "aeroway-polygon", "type": "fill", "source": "composite", "source-layer": "aeroway", "minzoom": 11, "filter": ["all", ["match", ["get", "type"], ["runway", "taxiway", "helipad"], true, false], ["==", ["geometry-type"], "Polygon"]], "paint": { "fill-color": ["interpolate", ["linear"], ["zoom"], 15, "hsl(230, 23%, 82%)", 16, "hsl(230, 37%, 84%)"], "fill-opacity": ["interpolate", ["linear"], ["zoom"], 11, 0, 11.5, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, built" } }, { "id": "aeroway-line", "type": "line", "source": "composite", "source-layer": "aeroway", "minzoom": 9, "filter": ["==", ["geometry-type"], "LineString"], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 15, "hsl(230, 23%, 82%)", 16, "hsl(230, 37%, 84%)"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 9, ["match", ["get", "type"], "runway", 1, 0.5], 18, ["match", ["get", "type"], "runway", 80, 20]] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, built" } }, { "minzoom": 15, "layout": {}, "metadata": { "mapbox:featureComponent": "buildings", "mapbox:group": "Buildings, built" }, "filter": ["all", ["!=", ["get", "type"], "building:part"], ["==", ["get", "underground"], "false"]], "type": "fill", "source": "composite", "id": "building", "paint": { "fill-color": ["interpolate", ["linear"], ["zoom"], 15, "#1d2935", 16, "#1d2935"], "fill-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1], "fill-outline-color": "#1d2935" }, "source-layer": "building" }, { "minzoom": 15, "layout": {}, "metadata": { "mapbox:featureComponent": "buildings", "mapbox:group": "Buildings, built" }, "filter": ["all", ["==", ["get", "underground"], "true"], ["==", ["geometry-type"], "Polygon"]], "type": "fill", "source": "composite", "id": "building-underground", "paint": { "fill-color": "#1d2935", "fill-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 0.5] }, "source-layer": "building" }, { "minzoom": 13, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" }, "maxzoom": 14, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "tunnel-street-minor-low", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-color": "hsl(0, 0%, 100%)" }, "source-layer": "road" }, { "id": "tunnel-street-minor-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "hsl(230, 19%, 75%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-opacity": ["step", ["zoom"], 0, 14, 1], "line-dasharray": [3, 3] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" } }, { "id": "tunnel-primary-secondary-tertiary-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["primary", "secondary", "tertiary"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, ["match", ["get", "class"], "primary", 1, 0.75], 18, 2], "line-color": "hsl(230, 19%, 75%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, ["match", ["get", "class"], "primary", 0.75, 0.1], 18, ["match", ["get", "class"], "primary", 32, 26]], "line-dasharray": [3, 3] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" } }, { "id": "tunnel-major-link-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "hsl(0, 0%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-dasharray": [3, 3] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" } }, { "id": "tunnel-motorway-trunk-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 18, 2], "line-color": "hsl(230, 26%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-dasharray": [3, 3] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" } }, { "id": "tunnel-construction", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["==", ["get", "class"], "construction"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 2, 18, 18], "line-color": "hsl(230, 26%, 88%)", "line-dasharray": ["step", ["zoom"], ["literal", [0.4, 0.8]], 15, ["literal", [0.3, 0.6]], 16, ["literal", [0.2, 0.3]], 17, ["literal", [0.2, 0.25]], 18, ["literal", [0.15, 0.15]]] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" } }, { "minzoom": 14, "layout": {}, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., tunnels" }, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["==", ["get", "class"], "path"], ["!=", ["get", "type"], "steps"], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "tunnel-path", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 1, 18, 4], "line-color": "hsl(35, 26%, 95%)", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.75, 1]], 16, ["literal", [1, 0.75]], 17, ["literal", [1, 0.5]]] }, "source-layer": "road" }, { "id": "tunnel-steps", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["==", ["get", "type"], "steps"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 1, 16, 1.6, 18, 6], "line-color": "hsl(35, 26%, 95%)", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.75, 1]], 16, ["literal", [1, 0.75]], 17, ["literal", [0.3, 0.3]]] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., tunnels" } }, { "id": "tunnel-pedestrian", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["==", ["get", "class"], "pedestrian"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 18, 12], "line-color": "hsl(0, 0%, 100%)", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.5, 0.4]], 16, ["literal", [1, 0.2]]] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., tunnels" } }, { "id": "tunnel-major-link", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": ["match", ["get", "class"], "motorway_link", "hsl(26, 100%, 78%)", "hsl(46, 77%, 78%)"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" } }, { "id": "tunnel-street-minor", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-color": ["match", ["get", "class"], "street_limited", "hsl(35, 16%, 93%)", "hsl(0, 0%, 100%)"], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" } }, { "id": "tunnel-primary-secondary-tertiary", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["primary", "secondary", "tertiary"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, ["match", ["get", "class"], "primary", 0.75, 0.1], 18, ["match", ["get", "class"], "primary", 32, 26]], "line-color": "hsl(0, 0%, 100%)" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" } }, { "minzoom": 15, "layout": { "symbol-placement": "line", "icon-image": ["step", ["zoom"], "oneway-small", 18, "oneway-large"], "symbol-spacing": 200, "icon-rotation-alignment": "map" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" }, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["==", ["get", "oneway"], "true"], ["step", ["zoom"], ["match", ["get", "class"], ["primary", "secondary", "street", "street_limited", "tertiary"], true, false], 16, ["match", ["get", "class"], ["primary", "secondary", "tertiary", "street", "street_limited", "primary_link", "secondary_link", "tertiary_link", "service", "track"], true, false]]], "type": "symbol", "source": "composite", "id": "tunnel-oneway-arrow-blue", "paint": {}, "source-layer": "road" }, { "id": "tunnel-motorway-trunk", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-color": ["match", ["get", "class"], "motorway", "hsl(26, 100%, 78%)", "hsl(46, 77%, 78%)"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" } }, { "minzoom": 16, "layout": { "symbol-placement": "line", "icon-image": ["step", ["zoom"], "oneway-white-small", 18, "oneway-white-large"], "symbol-spacing": 200 }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" }, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["motorway", "motorway_link", "trunk", "trunk_link"], true, false], ["==", ["get", "oneway"], "true"]], "type": "symbol", "source": "composite", "id": "tunnel-oneway-arrow-white", "paint": {}, "source-layer": "road" }, { "id": "ferry", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 8, "filter": ["==", ["get", "type"], "ferry"], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 15, "hsl(205, 73%, 63%)", 17, "hsl(230, 73%, 63%)"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 20, 1], "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 13, ["literal", [12, 4]]] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, ferries" } }, { "id": "ferry-auto", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 8, "filter": ["==", ["get", "type"], "ferry_auto"], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 15, "hsl(205, 73%, 63%)", 17, "hsl(230, 73%, 63%)"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 20, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, ferries" } }, { "minzoom": 12, "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "class"], "path"], ["step", ["zoom"], ["!", ["match", ["get", "type"], ["steps", "sidewalk", "crossing"], true, false]], 16, ["!=", ["get", "type"], "steps"]], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-path-bg", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 2, 18, 7], "line-color": "#2c3d4f" }, "source-layer": "road" }, { "minzoom": 14, "layout": { "line-join": "round" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "type"], "steps"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-steps-bg", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 2, 17, 4.6, 18, 7], "line-opacity": 0.75, "line-color": "#2c3d4f" }, "source-layer": "road" }, { "minzoom": 14, "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "class"], "pedestrian"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-pedestrian-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 2, 18, 14.5], "line-color": "#2c3d4f" }, "source-layer": "road" }, { "minzoom": 12, "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "class"], "path"], ["step", ["zoom"], ["!", ["match", ["get", "type"], ["steps", "sidewalk", "crossing"], true, false]], 16, ["!=", ["get", "type"], "steps"]], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-path", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 13, 0.5, 14, 1, 15, 1, 18, 4], "line-color": "#2c3d4f", "line-dasharray": ["step", ["zoom"], ["literal", [4, 0.3]], 15, ["literal", [1.75, 0.3]], 16, ["literal", [1, 0.3]], 17, ["literal", [1, 0.25]]] }, "source-layer": "road" }, { "minzoom": 14, "layout": { "line-join": "round" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "type"], "steps"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-steps", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 1, 16, 1.6, 18, 6], "line-color": "#2c3d4f", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.75, 1]], 16, ["literal", [1, 0.75]], 17, ["literal", [0.3, 0.3]]] }, "source-layer": "road" }, { "minzoom": 12, "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "class"], "pedestrian"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-pedestrian", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 18, 12], "line-color": "#2c3d4f", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.5, 0.4]], 16, ["literal", [1, 0.2]]] }, "source-layer": "road" }, { "id": "road-pedestrian-polygon-fill", "type": "fill", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["match", ["get", "class"], ["path", "pedestrian"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["case", ["has", "layer"], [">=", ["get", "layer"], 0], true], ["==", ["geometry-type"], "Polygon"]], "paint": { "fill-color": ["interpolate", ["linear"], ["zoom"], 16, "#2c3d4f", 16.25, "#2c3d4f"], "fill-outline-color": "#2c3d4f" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" } }, { "id": "road-pedestrian-polygon-pattern", "type": "fill", "source": "composite", "source-layer": "road", "minzoom": 16, "filter": ["all", ["match", ["get", "class"], ["path", "pedestrian"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["case", ["has", "layer"], [">=", ["get", "layer"], 0], true], ["==", ["geometry-type"], "Polygon"]], "paint": { "fill-pattern": "pedestrian-polygon", "fill-opacity": ["interpolate", ["linear"], ["zoom"], 16, 0, 16.25, 1] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" } }, { "id": "golf-hole-line", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 16, "filter": ["==", ["get", "class"], "golf"], "paint": { "line-color": "hsl(99, 27%, 69%)" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" } }, { "id": "turning-feature-outline", "type": "circle", "source": "composite", "source-layer": "road", "minzoom": 15, "filter": ["all", ["match", ["get", "class"], ["turning_circle", "turning_loop"], true, false], ["==", ["geometry-type"], "Point"]], "paint": { "circle-radius": ["interpolate", ["linear"], ["zoom"], 15, 4.5, 16, 8, 18, 20], "circle-color": "hsl(0, 0%, 100%)", "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 15, 0.8, 16, 1.2, 18, 2], "circle-stroke-color": "#2c3d4f", "circle-pitch-alignment": "map" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" } }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "maxzoom": 14, "filter": ["all", ["step", ["zoom"], ["==", ["get", "class"], "track"], 14, ["match", ["get", "class"], ["track", "secondary_link", "tertiary_link", "service"], true, false]], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-minor-low", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, ["match", ["get", "class"], "track", 1, 0.5], 18, 12], "line-color": "hsl(0, 0%, 100%)" }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["step", ["zoom"], ["==", ["get", "class"], "track"], 14, ["match", ["get", "class"], ["track", "secondary_link", "tertiary_link", "service"], true, false]], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-minor-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, ["match", ["get", "class"], "track", 1, 0.5], 18, 12], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "source-layer": "road" }, { "minzoom": 11, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "maxzoom": 14, "filter": ["all", ["match", ["get", "class"], ["street", "street_limited", "primary_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-street-low", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": "#2c3d4f" }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["street", "street_limited", "primary_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-street-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "source-layer": "road" }, { "minzoom": 10, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["secondary", "tertiary"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-secondary-tertiary-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 0.75, 18, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.1, 18, 26] }, "source-layer": "road" }, { "minzoom": 10, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["==", ["get", "class"], "primary"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-primary-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 18, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32] }, "source-layer": "road" }, { "minzoom": 10, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-major-link-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-opacity": ["step", ["zoom"], 0, 11, 1] }, "source-layer": "road" }, { "minzoom": 5, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-motorway-trunk-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 18, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-opacity": ["step", ["zoom"], ["match", ["get", "class"], "motorway", 1, 0], 6, 1] }, "source-layer": "road" }, { "id": "road-construction", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "class"], "construction"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 2, 18, 18], "line-color": "#2c3d4f", "line-dasharray": ["step", ["zoom"], ["literal", [0.4, 0.8]], 15, ["literal", [0.3, 0.6]], 16, ["literal", [0.2, 0.3]], 17, ["literal", [0.2, 0.25]], 18, ["literal", [0.15, 0.15]]] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" } }, { "minzoom": 10, "layout": { "line-cap": ["step", ["zoom"], "butt", 13, "round"], "line-join": ["step", ["zoom"], "miter", 13, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-major-link", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": ["match", ["get", "class"], "motorway_link", "#2c3d4f", "#2c3d4f"] }, "source-layer": "road" }, { "id": "road-polygon", "type": "fill", "source": "composite", "source-layer": "road", "minzoom": 12, "filter": ["all", ["match", ["get", "class"], ["primary", "secondary", "tertiary", "primary_link", "secondary_link", "tertiary_link", "trunk", "trunk_link", "street", "street_limited", "track", "service"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "Polygon"]], "paint": { "fill-color": "#2d4051", "fill-outline-color": "#2d4051" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" } }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["step", ["zoom"], ["==", ["get", "class"], "track"], 14, ["match", ["get", "class"], ["track", "secondary_link", "tertiary_link", "service"], true, false]], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-minor", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, ["match", ["get", "class"], "track", 1, 0.5], 18, 12], "line-color": "#2c3d4f", "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["street", "street_limited", "primary_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-street", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": ["match", ["get", "class"], "street_limited", "#2c3d4f", "#2c3d4f"], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "source-layer": "road" }, { "minzoom": 8, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["secondary", "tertiary"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-secondary-tertiary", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.1, 18, 26], "line-color": "#2d4051" }, "source-layer": "road" }, { "minzoom": 6, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["==", ["get", "class"], "primary"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-primary", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-color": "#2d4051" }, "source-layer": "road" }, { "minzoom": 15, "layout": { "symbol-placement": "line", "icon-image": ["step", ["zoom"], "oneway-small", 18, "oneway-large"], "symbol-spacing": 200, "icon-rotation-alignment": "map" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["==", ["get", "oneway"], "true"], ["step", ["zoom"], ["match", ["get", "class"], ["primary", "secondary", "tertiary", "street", "street_limited"], true, false], 16, ["match", ["get", "class"], ["primary", "secondary", "tertiary", "street", "street_limited", "primary_link", "secondary_link", "tertiary_link", "service", "track"], true, false]], ["match", ["get", "structure"], ["none", "ford"], true, false]], "type": "symbol", "source": "composite", "id": "road-oneway-arrow-blue", "paint": {}, "source-layer": "road" }, { "minzoom": 5, "layout": { "line-cap": ["step", ["zoom"], "butt", 13, "round"], "line-join": ["step", ["zoom"], "miter", 13, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-motorway-trunk", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-color": ["step", ["zoom"], ["match", ["get", "class"], "motorway", "#2d4051", "#2d4051"], 6, ["match", ["get", "class"], "motorway", "#2d4051", "#2d4051"], 9, ["match", ["get", "class"], "motorway", "#2d4051", "hsl(46, 87%, 68%)"]] }, "source-layer": "road" }, { "id": "road-rail", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false]], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 13, "#2d4051", 16, "#2d4051"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 20, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, surface" } }, { "id": "road-rail-tracks", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false]], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 13, "#2d4051", 16, "#2d4051"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 4, 20, 8], "line-dasharray": [0.1, 15], "line-opacity": ["interpolate", ["linear"], ["zoom"], 13.75, 0, 14, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, surface" } }, { "minzoom": 16, "layout": { "icon-image": "level-crossing", "icon-allow-overlap": true }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface-icons" }, "filter": ["==", ["get", "class"], "level_crossing"], "type": "symbol", "source": "composite", "id": "level-crossing", "paint": {}, "source-layer": "road" }, { "minzoom": 16, "layout": { "symbol-placement": "line", "icon-image": ["step", ["zoom"], "oneway-white-small", 18, "oneway-white-large"], "symbol-spacing": 200 }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface-icons" }, "filter": ["all", ["==", ["get", "oneway"], "true"], ["match", ["get", "class"], ["motorway", "trunk", "motorway_link", "trunk_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false]], "type": "symbol", "source": "composite", "id": "road-oneway-arrow-white", "paint": {}, "source-layer": "road" }, { "id": "turning-feature", "type": "circle", "source": "composite", "source-layer": "road", "minzoom": 15, "filter": ["all", ["match", ["get", "class"], ["turning_circle", "turning_loop"], true, false], ["==", ["geometry-type"], "Point"]], "paint": { "circle-radius": ["interpolate", ["linear"], ["zoom"], 15, 4.5, 16, 8, 18, 20], "circle-color": "hsl(0, 0%, 100%)", "circle-pitch-alignment": "map" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface-icons" } }, { "minzoom": 14, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "class"], "path"], ["step", ["zoom"], ["!", ["match", ["get", "type"], ["steps", "sidewalk", "crossing"], true, false]], 16, ["!=", ["get", "type"], "steps"]], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-path-bg", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 2, 18, 7], "line-color": "hsl(230, 17%, 82%)" }, "source-layer": "road" }, { "id": "bridge-steps-bg", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "type"], "steps"], ["==", ["get", "structure"], "bridge"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 2, 17, 4.6, 18, 7], "line-opacity": 0.75, "line-color": "hsl(230, 17%, 82%)" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" } }, { "id": "bridge-pedestrian-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "class"], "pedestrian"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 2, 18, 14.5], "line-color": "hsl(230, 26%, 88%)" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" } }, { "minzoom": 14, "layout": {}, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "class"], "path"], ["!=", ["get", "type"], "steps"], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-path", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 1, 18, 4], "line-color": "hsl(0, 0%, 100%)", "line-dasharray": ["step", ["zoom"], ["literal", [4, 0.3]], 15, ["literal", [1.75, 0.3]], 16, ["literal", [1, 0.3]], 17, ["literal", [1, 0.25]]] }, "source-layer": "road" }, { "id": "bridge-steps", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "type"], "steps"], ["==", ["get", "structure"], "bridge"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 1, 16, 1.6, 18, 6], "line-color": "hsl(0, 0%, 100%)", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.75, 1]], 16, ["literal", [1, 0.75]], 17, ["literal", [0.3, 0.3]]] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" } }, { "id": "bridge-pedestrian", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "class"], "pedestrian"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 18, 12], "line-color": "hsl(0, 0%, 100%)", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.5, 0.4]], 16, ["literal", [1, 0.2]]] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" } }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "maxzoom": 14, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-street-minor-low", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-color": "hsl(0, 0%, 100%)" }, "source-layer": "road" }, { "id": "bridge-street-minor-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "hsl(230, 26%, 88%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "id": "bridge-primary-secondary-tertiary-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["primary", "secondary", "tertiary"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, ["match", ["get", "class"], "primary", 1, 0.75], 18, 2], "line-color": "hsl(230, 26%, 88%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, ["match", ["get", "class"], "primary", 0.75, 0.1], 18, ["match", ["get", "class"], "primary", 32, 26]], "line-opacity": ["step", ["zoom"], 0, 10, 1] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "id": "bridge-major-link-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["<=", ["get", "layer"], 1], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "hsl(230, 26%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "id": "bridge-motorway-trunk-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["<=", ["get", "layer"], 1], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 18, 2], "line-color": "hsl(230, 26%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "id": "bridge-construction", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "class"], "construction"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 2, 18, 18], "line-color": "hsl(230, 26%, 88%)", "line-dasharray": ["step", ["zoom"], ["literal", [0.4, 0.8]], 15, ["literal", [0.3, 0.6]], 16, ["literal", [0.2, 0.3]], 17, ["literal", [0.2, 0.25]], 18, ["literal", [0.15, 0.15]]] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "minzoom": 13, "layout": { "line-cap": "round" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["<=", ["get", "layer"], 1], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-major-link", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": ["match", ["get", "class"], "motorway_link", "hsl(26, 100%, 68%)", "hsl(46, 87%, 68%)"] }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-street-minor", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-color": ["match", ["get", "class"], "street_limited", "hsl(35, 16%, 93%)", "hsl(0, 0%, 100%)"], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["primary", "secondary", "tertiary"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-primary-secondary-tertiary", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, ["match", ["get", "class"], "primary", 0.75, 0.1], 18, ["match", ["get", "class"], "primary", 32, 26]], "line-color": "hsl(0, 0%, 100%)" }, "source-layer": "road" }, { "minzoom": 15, "layout": { "symbol-placement": "line", "icon-image": ["step", ["zoom"], "oneway-small", 18, "oneway-large"], "symbol-spacing": 200, "icon-rotation-alignment": "map" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "oneway"], "true"], ["step", ["zoom"], ["match", ["get", "class"], ["primary", "secondary", "tertiary", "street", "street_limited"], true, false], 16, ["match", ["get", "class"], ["primary", "secondary", "tertiary", "street", "street_limited", "primary_link", "secondary_link", "tertiary_link", "service", "track"], true, false]]], "type": "symbol", "source": "composite", "id": "bridge-oneway-arrow-blue", "paint": {}, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": "round" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["<=", ["get", "layer"], 1], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-motorway-trunk", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-color": ["match", ["get", "class"], "motorway", "hsl(26, 100%, 68%)", "hsl(46, 87%, 68%)"] }, "source-layer": "road" }, { "id": "bridge-major-link-2-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], [">=", ["get", "layer"], 2], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "hsl(230, 26%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "id": "bridge-motorway-trunk-2-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], [">=", ["get", "layer"], 2], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 18, 2], "line-color": "hsl(230, 26%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "minzoom": 13, "layout": { "line-cap": "round" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], [">=", ["get", "layer"], 2], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-major-link-2", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": ["match", ["get", "class"], "motorway_link", "hsl(26, 100%, 68%)", "hsl(46, 87%, 68%)"] }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], [">=", ["get", "layer"], 2], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-motorway-trunk-2", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-color": ["match", ["get", "class"], "motorway", "hsl(26, 100%, 68%)", "hsl(46, 87%, 68%)"] }, "source-layer": "road" }, { "minzoom": 16, "layout": { "symbol-placement": "line", "icon-image": "oneway-white-small", "symbol-spacing": 200 }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["motorway", "trunk", "motorway_link", "trunk_link"], true, false], ["==", ["get", "oneway"], "true"]], "type": "symbol", "source": "composite", "id": "bridge-oneway-arrow-white", "paint": {}, "source-layer": "road" }, { "id": "bridge-rail", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false]], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 13, "hsl(50, 19%, 81%)", 16, "hsl(230, 10%, 74%)"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 20, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, bridges" } }, { "id": "bridge-rail-tracks", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false]], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 13, "hsl(50, 19%, 81%)", 16, "hsl(230, 10%, 74%)"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 4, 20, 8], "line-dasharray": [0.1, 15], "line-opacity": ["interpolate", ["linear"], ["zoom"], 13.75, 0, 14, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, bridges" } }, { "id": "aerialway", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 12, "filter": ["==", ["get", "class"], "aerialway"], "paint": { "line-color": "hsl(230, 10%, 74%)", "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 20, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, elevated" } }, { "id": "admin-1-boundary-bg", "type": "line", "source": "composite", "source-layer": "admin", "minzoom": 7, "filter": ["all", ["==", ["get", "admin_level"], 1], ["==", ["get", "maritime"], "false"], ["match", ["get", "worldview"], ["all", "US"], true, false]], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 8, "hsl(35, 12%, 89%)", 16, "hsl(230, 49%, 90%)"], "line-width": ["interpolate", ["linear"], ["zoom"], 7, 3.75, 12, 5.5], "line-opacity": ["interpolate", ["linear"], ["zoom"], 7, 0, 8, 0.75], "line-dasharray": [1, 0], "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 8, 3] }, "metadata": { "mapbox:featureComponent": "admin-boundaries", "mapbox:group": "Administrative boundaries, admin" } }, { "id": "admin-0-boundary-bg", "type": "line", "source": "composite", "source-layer": "admin", "minzoom": 1, "filter": ["all", ["==", ["get", "admin_level"], 0], ["==", ["get", "maritime"], "false"], ["match", ["get", "worldview"], ["all", "US"], true, false]], "paint": { "line-width": ["interpolate", ["linear"], ["zoom"], 3, 3.5, 10, 8], "line-color": ["interpolate", ["linear"], ["zoom"], 6, "hsl(35, 12%, 89%)", 8, "hsl(230, 49%, 90%)"], "line-opacity": ["interpolate", ["linear"], ["zoom"], 3, 0, 4, 0.5], "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 10, 2] }, "metadata": { "mapbox:featureComponent": "admin-boundaries", "mapbox:group": "Administrative boundaries, admin" } }, { "minzoom": 2, "layout": {}, "metadata": { "mapbox:featureComponent": "admin-boundaries", "mapbox:group": "Administrative boundaries, admin" }, "filter": ["all", ["==", ["get", "admin_level"], 1], ["==", ["get", "maritime"], "false"], ["match", ["get", "worldview"], ["all", "US"], true, false]], "type": "line", "source": "composite", "id": "admin-1-boundary", "paint": { "line-dasharray": ["step", ["zoom"], ["literal", [2, 0]], 7, ["literal", [2, 2, 6, 2]]], "line-width": ["interpolate", ["linear"], ["zoom"], 7, 0.75, 12, 1.5], "line-opacity": ["interpolate", ["linear"], ["zoom"], 2, 0, 3, 1], "line-color": ["interpolate", ["linear"], ["zoom"], 3, "hsl(230, 15%, 77%)", 7, "hsl(230, 8%, 62%)"] }, "source-layer": "admin" }, { "minzoom": 1, "layout": {}, "metadata": { "mapbox:featureComponent": "admin-boundaries", "mapbox:group": "Administrative boundaries, admin" }, "filter": ["all", ["==", ["get", "admin_level"], 0], ["==", ["get", "disputed"], "false"], ["==", ["get", "maritime"], "false"], ["match", ["get", "worldview"], ["all", "US"], true, false]], "type": "line", "source": "composite", "id": "admin-0-boundary", "paint": { "line-color": "hsl(230, 8%, 51%)", "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.5, 10, 2], "line-dasharray": [10, 0] }, "source-layer": "admin" }, { "id": "admin-0-boundary-disputed", "type": "line", "source": "composite", "source-layer": "admin", "minzoom": 1, "filter": ["all", ["==", ["get", "disputed"], "true"], ["==", ["get", "admin_level"], 0], ["==", ["get", "maritime"], "false"], ["match", ["get", "worldview"], ["all", "US"], true, false]], "paint": { "line-color": "hsl(230, 8%, 51%)", "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.5, 10, 2], "line-dasharray": ["step", ["zoom"], ["literal", [3.25, 3.25]], 6, ["literal", [2.5, 2.5]], 7, ["literal", [2, 2.25]], 8, ["literal", [1.75, 2]]] }, "metadata": { "mapbox:featureComponent": "admin-boundaries", "mapbox:group": "Administrative boundaries, admin" } }, { "id": "building-number-label", "type": "symbol", "source": "composite", "source-layer": "housenum_label", "minzoom": 17, "layout": { "text-field": ["get", "house_num"], "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"], "text-padding": 4, "text-max-width": 7, "text-size": 9.5 }, "paint": { "text-color": "hsl(35, 2%, 68%)", "text-halo-color": "hsl(35, 7%, 90%)", "text-halo-width": 0.5 }, "metadata": { "mapbox:featureComponent": "buildings", "mapbox:group": "Buildings, building-labels" } }, { "minzoom": 16, "layout": { "text-field": ["get", "name"], "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"], "text-max-width": 7, "text-size": 11 }, "metadata": { "mapbox:featureComponent": "buildings", "mapbox:group": "Buildings, building-labels" }, "filter": ["all", ["==", ["get", "class"], "settlement_subdivision"], ["==", ["get", "type"], "block"]], "type": "symbol", "source": "composite", "id": "block-number-label", "paint": { "text-color": "hsl(35, 12%, 55%)", "text-halo-color": "hsl(35, 11%, 99%)", "text-halo-width": 0.5, "text-halo-blur": 0.5 }, "source-layer": "place_label" }, { "minzoom": 10, "layout": { "text-size": ["interpolate", ["linear"], ["zoom"], 10, ["match", ["get", "class"], ["motorway", "trunk", "primary", "secondary", "tertiary"], 10, ["motorway_link", "trunk_link", "primary_link", "secondary_link", "tertiary_link", "street", "street_limited"], 9, 6.5], 18, ["match", ["get", "class"], ["motorway", "trunk", "primary", "secondary", "tertiary"], 16, ["motorway_link", "trunk_link", "primary_link", "secondary_link", "tertiary_link", "street", "street_limited"], 14, 13]], "text-max-angle": 30, "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"], "symbol-placement": "line", "text-padding": 1, "text-rotation-alignment": "map", "text-pitch-alignment": "viewport", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-letter-spacing": 0.01 }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, road-labels" }, "filter": ["all", ["has", "name"], ["step", ["zoom"], ["match", ["get", "class"], ["motorway", "trunk", "primary", "secondary", "tertiary"], true, false], 12, ["match", ["get", "class"], ["motorway", "trunk", "primary", "secondary", "tertiary", "street", "street_limited"], true, false], 15, ["match", ["get", "class"], ["path", "pedestrian", "golf", "ferry", "aerialway"], false, true]]], "type": "symbol", "source": "composite", "id": "road-label", "paint": { "text-color": "hsl(0,0%, 0%)", "text-halo-color": ["match", ["get", "class"], ["motorway", "trunk"], "hsla(35, 19%, 100%, 0.75)", "hsl(35, 19%, 100%)"], "text-halo-width": 1, "text-halo-blur": 1 }, "source-layer": "road" }, { "minzoom": 15, "layout": { "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "icon-image": "intersection", "icon-text-fit": "both", "icon-text-fit-padding": [1, 2, 1, 2], "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 15, 9, 18, 12], "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, road-labels" }, "filter": ["all", ["==", ["get", "class"], "intersection"], ["has", "name"]], "type": "symbol", "source": "composite", "id": "road-intersection", "paint": { "text-color": "hsl(230, 57%, 64%)" }, "source-layer": "road" }, { "minzoom": 6, "layout": { "text-size": 9, "icon-image": ["concat", ["get", "shield"], "-", ["to-string", ["get", "reflen"]]], "icon-rotation-alignment": "viewport", "text-max-angle": 38, "symbol-spacing": ["interpolate", ["linear"], ["zoom"], 11, 400, 14, 600], "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"], "symbol-placement": ["step", ["zoom"], "point", 11, "line"], "text-rotation-alignment": "viewport", "text-field": ["get", "ref"], "text-letter-spacing": 0.05 }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, road-labels" }, "filter": ["all", ["has", "reflen"], ["<=", ["get", "reflen"], 6], ["match", ["get", "class"], ["pedestrian", "service"], false, true], ["step", ["zoom"], ["==", ["geometry-type"], "Point"], 11, [">", ["get", "len"], 5000], 12, [">", ["get", "len"], 2500], 13, [">", ["get", "len"], 1000], 14, true]], "type": "symbol", "source": "composite", "id": "road-number-shield", "paint": { "text-color": ["match", ["get", "shield_text_color"], "white", "hsl(0, 0%, 100%)", "yellow", "hsl(50, 100%, 70%)", "orange", "hsl(25, 100%, 75%)", "blue", "hsl(230, 57%, 44%)", "hsl(230, 18%, 13%)"] }, "source-layer": "road" }, { "minzoom": 14, "layout": { "text-field": ["get", "ref"], "text-size": 9, "icon-image": ["concat", "motorway-exit-", ["to-string", ["get", "reflen"]]], "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, road-labels" }, "filter": ["all", ["has", "reflen"], ["<=", ["get", "reflen"], 9]], "type": "symbol", "source": "composite", "id": "road-exit-shield", "paint": { "text-color": "hsl(0, 0%, 100%)", "text-translate": [0, 0] }, "source-layer": "motorway_junction" }, { "minzoom": 12, "layout": { "text-size": ["interpolate", ["linear"], ["zoom"], 10, ["match", ["get", "class"], "pedestrian", 9, 6.5], 18, ["match", ["get", "class"], "pedestrian", 14, 13]], "text-max-angle": 30, "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"], "symbol-placement": "line", "text-padding": 1, "text-rotation-alignment": "map", "text-pitch-alignment": "viewport", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-letter-spacing": 0.01 }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., walking-cycling-labels" }, "filter": ["step", ["zoom"], ["match", ["get", "class"], ["pedestrian"], true, false], 15, ["match", ["get", "class"], ["path", "pedestrian"], true, false]], "type": "symbol", "source": "composite", "id": "path-pedestrian-label", "paint": { "text-color": "hsl(0,0%, 0%)", "text-halo-color": "hsl(0, 0%, 100%)", "text-halo-width": 1, "text-halo-blur": 1 }, "source-layer": "road" }, { "minzoom": 16, "layout": { "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-size": 12 }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., walking-cycling-labels" }, "filter": ["==", ["get", "class"], "golf"], "type": "symbol", "source": "composite", "id": "golf-hole-label", "paint": { "text-halo-color": "hsl(99, 62%, 100%)", "text-halo-width": 0.5, "text-halo-blur": 0.5, "text-color": "hsl(105, 30%, 32%)" }, "source-layer": "road" }, { "minzoom": 15, "layout": { "text-size": ["interpolate", ["linear"], ["zoom"], 10, 6.5, 18, 13], "text-max-angle": 30, "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"], "symbol-placement": "line", "text-padding": 1, "text-rotation-alignment": "map", "text-pitch-alignment": "viewport", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-letter-spacing": 0.01 }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, ferry-aerialway-labels" }, "filter": ["match", ["get", "class"], "aerialway", true, "ferry", true, false], "type": "symbol", "source": "composite", "id": "ferry-aerialway-label", "paint": { "text-color": ["match", ["get", "class"], "ferry", "hsl(196, 48%, 50%)", "hsl(0,0%, 0%)"], "text-halo-color": ["match", ["get", "class"], "ferry", "hsl(196, 80%, 70%)", "hsl(35, 19%, 100%)"], "text-halo-width": 1, "text-halo-blur": 1 }, "source-layer": "road" }, { "minzoom": 13, "layout": { "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"], "text-max-angle": 30, "symbol-spacing": ["interpolate", ["linear", 1], ["zoom"], 15, 250, 17, 400], "text-size": ["interpolate", ["linear"], ["zoom"], 13, 12, 18, 18], "symbol-placement": "line", "text-pitch-alignment": "viewport", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]] }, "metadata": { "mapbox:featureComponent": "natural-features", "mapbox:group": "Natural features, natural-labels" }, "filter": ["all", ["match", ["get", "class"], ["canal", "river", "stream"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_canal", "disputed_river", "disputed_stream"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["==", ["geometry-type"], "LineString"]], "type": "symbol", "source": "composite", "id": "waterway-label", "paint": { "text-color": "hsl(196, 48%, 57%)", "text-halo-color": "hsla(35, 11%, 99%, 0.5)" }, "source-layer": "natural_label" }, { "minzoom": 4, "layout": { "text-size": ["step", ["zoom"], ["step", ["get", "sizerank"], 18, 5, 12], 17, ["step", ["get", "sizerank"], 18, 13, 12]], "text-max-angle": 30, "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "symbol-placement": "line-center", "text-pitch-alignment": "viewport" }, "metadata": { "mapbox:featureComponent": "natural-features", "mapbox:group": "Natural features, natural-labels" }, "filter": ["all", ["match", ["get", "class"], ["glacier", "landform"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_glacier", "disputed_landform"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["<=", ["get", "filterrank"], 2], ["==", ["geometry-type"], "LineString"]], "type": "symbol", "source": "composite", "id": "natural-line-label", "paint": { "text-halo-width": 0.5, "text-halo-color": "hsl(35, 19%, 100%)", "text-halo-blur": 0.5, "text-color": ["step", ["zoom"], ["step", ["get", "sizerank"], "hsl(26, 30%, 45%)", 5, "hsl(26, 35%, 35%)"], 17, ["step", ["get", "sizerank"], "hsl(26, 30%, 45%)", 13, "hsl(26, 35%, 35%)"]] }, "source-layer": "natural_label" }, { "minzoom": 4, "layout": { "text-size": ["step", ["zoom"], ["step", ["get", "sizerank"], 18, 5, 12], 17, ["step", ["get", "sizerank"], 18, 13, 12]], "icon-image": ["get", "maki"], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-offset": ["step", ["zoom"], ["step", ["get", "sizerank"], ["literal", [0, 0]], 5, ["literal", [0, 0.75]]], 17, ["step", ["get", "sizerank"], ["literal", [0, 0]], 13, ["literal", [0, 0.75]]]], "text-anchor": ["step", ["zoom"], ["step", ["get", "sizerank"], "center", 5, "top"], 17, ["step", ["get", "sizerank"], "center", 13, "top"]], "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]] }, "metadata": { "mapbox:featureComponent": "natural-features", "mapbox:group": "Natural features, natural-labels" }, "filter": ["all", ["match", ["get", "class"], ["dock", "glacier", "landform", "water_feature", "wetland"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_dock", "disputed_glacier", "disputed_landform", "disputed_water_feature", "disputed_wetland"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["<=", ["get", "filterrank"], 2], ["==", ["geometry-type"], "Point"]], "type": "symbol", "source": "composite", "id": "natural-point-label", "paint": { "icon-opacity": ["step", ["zoom"], ["step", ["get", "sizerank"], 0, 5, 1], 17, ["step", ["get", "sizerank"], 0, 13, 1]], "text-halo-color": "hsl(35, 19%, 100%)", "text-halo-width": 0.5, "text-halo-blur": 0.5, "text-color": ["step", ["zoom"], ["step", ["get", "sizerank"], "hsl(26, 30%, 45%)", 5, "hsl(26, 35%, 35%)"], 17, ["step", ["get", "sizerank"], "hsl(26, 30%, 45%)", 13, "hsl(26, 35%, 35%)"]] }, "source-layer": "natural_label" }, { "minzoom": 1, "layout": { "text-size": ["interpolate", ["linear"], ["zoom"], 0, ["*", ["-", 16, ["sqrt", ["get", "sizerank"]]], 1], 22, ["*", ["-", 22, ["sqrt", ["get", "sizerank"]]], 1]], "text-max-angle": 30, "text-letter-spacing": ["match", ["get", "class"], "ocean", 0.25, ["sea", "bay"], 0.15, 0], "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"], "symbol-placement": "line-center", "text-pitch-alignment": "viewport", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]] }, "metadata": { "mapbox:featureComponent": "natural-features", "mapbox:group": "Natural features, natural-labels" }, "filter": ["all", ["match", ["get", "class"], ["bay", "ocean", "reservoir", "sea", "water"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_bay", "disputed_ocean", "disputed_reservoir", "disputed_sea", "disputed_water"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["==", ["geometry-type"], "LineString"]], "type": "symbol", "source": "composite", "id": "water-line-label", "paint": { "text-color": ["match", ["get", "class"], ["bay", "ocean", "sea"], "hsl(196, 76%, 47%)", "hsl(196, 48%, 57%)"], "text-halo-color": "hsla(35, 11%, 99%, 0.5)" }, "source-layer": "natural_label" }, { "minzoom": 1, "layout": { "text-line-height": 1.3, "text-size": ["interpolate", ["linear"], ["zoom"], 0, ["*", ["-", 16, ["sqrt", ["get", "sizerank"]]], 1], 22, ["*", ["-", 22, ["sqrt", ["get", "sizerank"]]], 1]], "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"], "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-letter-spacing": ["match", ["get", "class"], "ocean", 0.25, ["bay", "sea"], 0.15, 0.01], "text-max-width": ["match", ["get", "class"], "ocean", 4, "sea", 5, ["bay", "water"], 7, 10] }, "metadata": { "mapbox:featureComponent": "natural-features", "mapbox:group": "Natural features, natural-labels" }, "filter": ["all", ["match", ["get", "class"], ["bay", "ocean", "reservoir", "sea", "water"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_bay", "disputed_ocean", "disputed_reservoir", "disputed_sea", "disputed_water"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["==", ["geometry-type"], "Point"]], "type": "symbol", "source": "composite", "id": "water-point-label", "paint": { "text-color": ["match", ["get", "class"], ["bay", "ocean", "sea"], "hsl(196, 76%, 47%)", "hsl(196, 48%, 57%)"], "text-halo-color": "hsla(35, 11%, 99%, 0.5)" }, "source-layer": "natural_label" }, { "minzoom": 6, "layout": { "text-size": ["step", ["zoom"], ["step", ["get", "sizerank"], 18, 5, 12], 17, ["step", ["get", "sizerank"], 18, 13, 12]], "icon-image": ["case", ["has", "maki_beta"], ["coalesce", ["image", ["get", "maki_beta"]], ["image", ["get", "maki"]]], ["image", ["get", "maki"]]], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-offset": ["step", ["zoom"], ["step", ["get", "sizerank"], ["literal", [0, 0]], 5, ["literal", [0, 0.75]]], 17, ["step", ["get", "sizerank"], ["literal", [0, 0]], 13, ["literal", [0, 0.75]]]], "text-anchor": ["step", ["zoom"], ["step", ["get", "sizerank"], "center", 5, "top"], 17, ["step", ["get", "sizerank"], "center", 13, "top"]], "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]] }, "metadata": { "mapbox:featureComponent": "point-of-interest-labels", "mapbox:group": "Point of interest labels, poi-labels" }, "filter": ["<=", ["get", "filterrank"], ["+", ["step", ["zoom"], 0, 16, 1, 17, 2], 3]], "type": "symbol", "source": "composite", "id": "poi-label", "paint": { "icon-opacity": ["step", ["zoom"], ["step", ["get", "sizerank"], 0, 5, 1], 17, ["step", ["get", "sizerank"], 0, 13, 1]], "text-halo-color": ["match", ["get", "class"], "park_like", "hsl(99, 62%, 100%)", "education", "hsl(50, 62%, 100%)", "medical", "hsl(340, 68%, 100%)", "hsl(35, 19%, 100%)"], "text-halo-width": 0.5, "text-halo-blur": 0.5, "text-color": ["step", ["zoom"], ["step", ["get", "sizerank"], ["match", ["get", "class"], "food_and_drink", "hsl(20, 42%, 58%)", "park_like", "hsl(105, 31%, 43%)", "education", "hsl(50, 40%, 40%)", "medical", "hsl(340, 30%, 52%)", "hsl(26, 30%, 45%)"], 5, ["match", ["get", "class"], "food_and_drink", "hsl(20, 74%, 41%)", "park_like", "hsl(105, 30%, 32%)", "education", "hsl(50, 100%, 20%)", "medical", "hsl(340, 39%, 42%)", "hsl(26, 35%, 35%)"]], 17, ["step", ["get", "sizerank"], ["match", ["get", "class"], "food_and_drink", "hsl(20, 42%, 58%)", "park_like", "hsl(105, 31%, 43%)", "education", "hsl(50, 40%, 40%)", "medical", "hsl(340, 30%, 52%)", "hsl(26, 30%, 45%)"], 13, ["match", ["get", "class"], "food_and_drink", "hsl(20, 74%, 41%)", "park_like", "hsl(105, 30%, 32%)", "education", "hsl(50, 100%, 20%)", "medical", "hsl(340, 39%, 42%)", "hsl(26, 35%, 35%)"]]] }, "source-layer": "poi_label" }, { "minzoom": 12, "layout": { "text-size": 12, "icon-image": ["get", "network"], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-justify": ["match", ["get", "stop_type"], "entrance", "left", "center"], "text-offset": ["match", ["get", "stop_type"], "entrance", ["literal", [1, 0]], ["literal", [0, 0.8]]], "text-anchor": ["match", ["get", "stop_type"], "entrance", "left", "top"], "text-field": ["step", ["zoom"], "", 14, ["match", ["get", "mode"], ["rail", "metro_rail"], ["coalesce", ["get", "name_en"], ["get", "name"]], ""], 16, ["match", ["get", "mode"], ["bus", "bicycle"], "", ["coalesce", ["get", "name_en"], ["get", "name"]]], 18, ["coalesce", ["get", "name_en"], ["get", "name"]]], "text-letter-spacing": 0.01, "text-max-width": ["match", ["get", "stop_type"], "entrance", 15, 9] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, transit-labels" }, "filter": ["step", ["zoom"], ["all", ["match", ["get", "mode"], "rail", true, "metro_rail", true, false], ["!=", ["get", "stop_type"], "entrance"]], 15, ["all", ["match", ["get", "mode"], "rail", true, "metro_rail", true, "ferry", true, "light_rail", true, false], ["!=", ["get", "stop_type"], "entrance"]], 16, ["all", ["match", ["get", "mode"], "bus", false, true], ["!=", ["get", "stop_type"], "entrance"]], 17, ["!=", ["get", "stop_type"], "entrance"], 19, true], "type": "symbol", "source": "composite", "id": "transit-label", "paint": { "text-halo-color": "hsl(35, 19%, 100%)", "text-color": ["match", ["get", "network"], "tokyo-metro", "hsl(180, 50%, 30%)", "mexico-city-metro", "hsl(25, 100%, 63%)", ["barcelona-metro", "delhi-metro", "hong-kong-mtr", "milan-metro", "osaka-subway"], "hsl(0, 90%, 47%)", ["boston-t", "washington-metro"], "hsl(230, 18%, 20%)", ["chongqing-rail-transit", "kiev-metro", "singapore-mrt", "taipei-metro"], "hsl(140, 90%, 25%)", "hsl(230, 48%, 44%)"], "text-halo-blur": 0.5, "text-halo-width": 0.5 }, "source-layer": "transit_stop_label" }, { "minzoom": 8, "layout": { "text-line-height": 1.1, "text-size": ["step", ["get", "sizerank"], 18, 9, 12], "icon-image": ["get", "maki"], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-offset": [0, 0.75], "text-rotation-alignment": "viewport", "text-anchor": "top", "text-field": ["case", ["has", "ref"], ["concat", ["get", "name"], "\n(", ["get", "ref"], ")"], ["get", "name"]], "text-letter-spacing": 0.01, "text-max-width": 9 }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, transit-labels" }, "filter": ["match", ["get", "class"], ["military", "civil"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_military", "disputed_civil"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], "type": "symbol", "source": "composite", "id": "airport-label", "paint": { "text-color": "hsl(230, 48%, 44%)", "text-halo-color": "hsl(230, 34%, 100%)", "text-halo-width": 1 }, "source-layer": "airport_label" }, { "minzoom": 10, "layout": { "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-transform": "uppercase", "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"], "text-letter-spacing": ["match", ["get", "type"], "suburb", 0.15, 0.1], "text-max-width": 7, "text-padding": 3, "text-size": ["interpolate", ["cubic-bezier", 0.5, 0, 1, 1], ["zoom"], 11, ["match", ["get", "type"], "suburb", 11, 10.5], 15, ["match", ["get", "type"], "suburb", 15, 14]] }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 15, "filter": ["all", ["match", ["get", "class"], "settlement_subdivision", ["match", ["get", "worldview"], ["all", "US"], true, false], "disputed_settlement_subdivision", ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["<=", ["get", "filterrank"], 4]], "type": "symbol", "source": "composite", "id": "settlement-subdivision-label", "paint": { "text-halo-color": "hsla(35, 19%, 100%, 0.75)", "text-halo-width": 1, "text-color": "hsl(230, 29%, 36%)", "text-halo-blur": 0.5 }, "source-layer": "place_label" }, { "minzoom": 2, "layout": { "text-line-height": 1.1, "text-size": ["interpolate", ["cubic-bezier", 0.2, 0, 0.9, 1], ["zoom"], 3, ["step", ["get", "symbolrank"], 12, 9, 11, 10, 10.5, 12, 9.5, 14, 8.5, 16, 6.5, 17, 4], 13, ["step", ["get", "symbolrank"], 23, 9, 21, 10, 19, 11, 17, 12, 16, 13, 15, 15, 13]], "text-radial-offset": ["step", ["zoom"], ["match", ["get", "capital"], 2, 0.6, 0.55], 8, 0], "icon-image": ["step", ["zoom"], ["case", ["==", ["get", "capital"], 2], "border-dot-13", ["step", ["get", "symbolrank"], "dot-11", 9, "dot-10", 11, "dot-9"]], 8, ""], "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"], "text-justify": "auto", "text-anchor": ["step", ["zoom"], ["get", "text_anchor"], 8, "center"], "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-max-width": 7 }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 13, "filter": ["all", ["<=", ["get", "filterrank"], 3], ["match", ["get", "class"], "settlement", ["match", ["get", "worldview"], ["all", "US"], true, false], "disputed_settlement", ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["step", ["zoom"], [">", ["get", "symbolrank"], 6], 4, [">=", ["get", "symbolrank"], 7], 6, [">=", ["get", "symbolrank"], 8], 7, [">=", ["get", "symbolrank"], 10], 10, [">=", ["get", "symbolrank"], 11], 11, [">=", ["get", "symbolrank"], 13], 12, [">=", ["get", "symbolrank"], 15]]], "type": "symbol", "source": "composite", "id": "settlement-minor-label", "paint": { "text-color": "hsl(230, 29%, 0%)", "text-halo-color": "hsl(35, 19%, 100%)", "text-halo-width": 1, "text-halo-blur": 1 }, "source-layer": "place_label" }, { "minzoom": 2, "layout": { "text-line-height": 1.1, "text-size": ["interpolate", ["cubic-bezier", 0.2, 0, 0.9, 1], ["zoom"], 3, ["step", ["get", "symbolrank"], 13, 6, 12], 6, ["step", ["get", "symbolrank"], 16, 6, 15, 7, 14], 8, ["step", ["get", "symbolrank"], 18, 9, 17, 10, 15], 15, ["step", ["get", "symbolrank"], 23, 9, 22, 10, 20, 11, 18, 12, 16, 13, 15, 15, 13]], "text-radial-offset": ["step", ["zoom"], ["match", ["get", "capital"], 2, 0.6, 0.55], 8, 0], "icon-image": ["step", ["zoom"], ["case", ["==", ["get", "capital"], 2], "border-dot-13", ["step", ["get", "symbolrank"], "dot-11", 9, "dot-10", 11, "dot-9"]], 8, ""], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-justify": ["step", ["zoom"], ["match", ["get", "text_anchor"], ["left", "bottom-left", "top-left"], "left", ["right", "bottom-right", "top-right"], "right", "center"], 8, "center"], "text-anchor": ["step", ["zoom"], ["get", "text_anchor"], 8, "center"], "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-max-width": 7 }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 15, "filter": ["all", ["<=", ["get", "filterrank"], 3], ["match", ["get", "class"], "settlement", ["match", ["get", "worldview"], ["all", "US"], true, false], "disputed_settlement", ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["step", ["zoom"], false, 2, ["<=", ["get", "symbolrank"], 6], 4, ["<", ["get", "symbolrank"], 7], 6, ["<", ["get", "symbolrank"], 8], 7, ["<", ["get", "symbolrank"], 10], 10, ["<", ["get", "symbolrank"], 11], 11, ["<", ["get", "symbolrank"], 13], 12, ["<", ["get", "symbolrank"], 15], 13, [">=", ["get", "symbolrank"], 11], 14, [">=", ["get", "symbolrank"], 15]]], "type": "symbol", "source": "composite", "id": "settlement-major-label", "paint": { "text-color": "hsl(230, 29%, 0%)", "text-halo-color": "hsl(35, 19%, 100%)", "text-halo-width": 1, "text-halo-blur": 1 }, "source-layer": "place_label" }, { "minzoom": 3, "layout": { "text-size": ["interpolate", ["cubic-bezier", 0.85, 0.7, 0.65, 1], ["zoom"], 4, ["step", ["get", "symbolrank"], 10, 6, 9.5, 7, 9], 9, ["step", ["get", "symbolrank"], 21, 6, 16, 7, 13]], "text-transform": "uppercase", "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"], "text-field": ["step", ["zoom"], ["step", ["get", "symbolrank"], ["coalesce", ["get", "name_en"], ["get", "name"]], 5, ["coalesce", ["get", "abbr"], ["get", "name_en"], ["get", "name"]]], 5, ["coalesce", ["get", "name_en"], ["get", "name"]]], "text-letter-spacing": 0.15, "text-max-width": 6 }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 9, "filter": ["match", ["get", "class"], "state", ["match", ["get", "worldview"], ["all", "US"], true, false], "disputed_state", ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], "type": "symbol", "source": "composite", "id": "state-label", "paint": { "text-color": "hsl(230, 29%, 0%)", "text-halo-color": "hsl(35, 19%, 100%)", "text-halo-width": 1 }, "source-layer": "place_label" }, { "minzoom": 1, "layout": { "icon-image": "", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-line-height": 1.1, "text-max-width": 6, "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-radial-offset": ["step", ["zoom"], 0.6, 8, 0], "text-justify": ["step", ["zoom"], ["match", ["get", "text_anchor"], ["left", "bottom-left", "top-left"], "left", ["right", "bottom-right", "top-right"], "right", "center"], 7, "auto"], "text-size": ["interpolate", ["cubic-bezier", 0.2, 0, 0.7, 1], ["zoom"], 1, ["step", ["get", "symbolrank"], 11, 4, 9, 5, 8], 9, ["step", ["get", "symbolrank"], 22, 4, 19, 5, 17]] }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 10, "filter": ["match", ["get", "class"], "country", ["match", ["get", "worldview"], ["all", "US"], true, false], "disputed_country", ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], "type": "symbol", "source": "composite", "id": "country-label", "paint": { "icon-opacity": ["step", ["zoom"], ["case", ["has", "text_anchor"], 1, 0], 7, 0], "text-color": "hsl(230, 29%, 0%)", "text-halo-color": ["interpolate", ["linear"], ["zoom"], 2, "hsla(35, 19%, 100%, 0.75)", 3, "hsl(35, 19%, 100%)"], "text-halo-width": 1.25 }, "source-layer": "place_label" }, { "minzoom": 0.75, "layout": { "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-line-height": 1.1, "text-max-width": 6, "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-size": ["interpolate", ["exponential", 0.5], ["zoom"], 0, 10, 2.5, 15], "text-transform": "uppercase", "text-letter-spacing": 0.05 }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 3, "filter": ["==", ["get", "class"], "continent"], "type": "symbol", "source": "composite", "id": "continent-label", "paint": { "text-color": "hsl(230, 29%, 0%)", "text-halo-color": ["interpolate", ["linear"], ["zoom"], 0, "hsla(35, 19%, 100%, 0.75)", 3, "hsl(35, 19%, 100%)"], "text-halo-width": 1.5, "text-opacity": ["interpolate", ["linear"], ["zoom"], 0, 0.8, 1.5, 0.5, 2.5, 0] }, "source-layer": "natural_label" }], "created": "2022-07-21T09:45:28.597Z", "modified": "2022-07-21T09:46:26.926Z", "id": "cl5uulddi002215l38x5mn5xf", "owner": "mapbox-map-design", "visibility": "public", "protected": false, "draft": false } // style URL for Mapbox Light

var slider_price = document.getElementById("Slider_Price");
var slider_room = document.getElementById("Slider_room");

// map
mapboxgl.accessToken = 'pk.eyJ1IjoibWF6ZW54ZWxnYXlhciIsImEiOiJjbDV3eDEwejAwZmU3M2NwaXU4YzY5dTE0In0.ywGQXbcUzmKG1zk8e8ZYyg';
const map = new mapboxgl.Map({
 container: 'map', // container ID
//  style: 'mapbox://styles/mapbox/streets-v12', // style URL
 center: [32.276847, 30.606981], // starting position [lng, lat][32.276847, 30.606981]
 zoom: 13, // starting zoom
 attributionControl: false
});


var locate = new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true},
  // When active the map will receive updates to the device's location as it changes.
  trackUserLocation: true,
  // Draw an arrow next to the location dot to indicate which direction the device is heading.
  showUserHeading: true
  })
  map.addControl(locate, 'bottom-right');
  map.addControl(new mapboxgl.NavigationControl(),'top-left');

  class Button23d {
    onAdd(map) {
        this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    // this._container.addEventListener('contextmenu', (e) => e.preventDefault());
    this._container.onclick = function() {
        if (document.getElementById("23d").checked) {
            document.getElementById("23d").checked = false;
            document.getElementById("togle23d").innerHTML = "<b>3d</b>";
        } else {
            document.getElementById("23d").checked = true;
            document.getElementById("togle23d").innerHTML = "<b>2d</b>";
        }
        
        if(document.getElementById("23d").checked){
            map.easeTo({bearing:-17.6,pitch: 60, duration: 500});
            
        // Insert the layer beneath any symbol layer.
        const layers = map.getStyle().layers;
        const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
        ).id;
  
        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        map.addLayer(
            {
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',
  
                    // Use an 'interpolate' expression to
                    // add a smooth transition effect to
                    // the buildings as the user zooms in.
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
            labelLayerId
        );
        }else{
            map.easeTo({bearing:0,pitch: 0, duration: 500});
  
            map.removeLayer('add-3d-buildings')
        }
    // });
    }
  
    this._container.innerHTML =
      '<div class="tools-box">' +
        '<input type="checkbox" id="23d" style="display: none;">'+
      '<button>' +
      '<span id="togle23d" class="mapboxgl-ctrl-icon my-image-button" aria-hidden="true" title="Description"  style="display: flex;align-items: center;justify-content: center;"><b>3d</b></span>' +
      '</button>' +
      '</div>';
  
    return this._container;
    }
  }
  map.addControl(new Button23d(), "bottom-right");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Filter {
  onAdd(map) {
      this._map = map;
  this._container = document.createElement('div');
  this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
  this._container.onclick = function() {
    document.getElementById('activef').checked=true;
  }

  this._container.innerHTML =
    '<div class="tools-box" style="z-index: 10;>' +
    '<label for="activef" class="menu-btnf">'+    
    '<button>' +
    '<span class="mapboxgl-ctrl-icon my-image-button" aria-hidden="true" title="Description"  style="display: flex;align-items: center;justify-content: center;"><i class="fa-solid fa-filter" style="color:black;"></i></span>' +
    '</button>' +
    '</div>';

  return this._container;
  }
}
map.addControl(new Filter(), "bottom-right");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const geocoder = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    // placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
    // bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
    // proximity: {
    //   longitude: -122.25948,
    //   latitude: 37.87221
    // } // Coordinates of UC Berkeley
  });

  map.addControl(geocoder);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var d = document.getElementById("div");

// const Dark = document.cookie
//   .split('; ')
//   .find((row) => row.startsWith('Dark='))
//   ?.split('=')[1];
var r = document.querySelector(':root');

const Dark = localStorage.getItem("Dark");


const L = localStorage.getItem("lang");

var SH = {
  type: "FeatureCollection",
  features: [],
};

window.onload = function(){
var X = false;
  // const request = new XMLHttpRequest();

  // const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://ali-1-ibrahim.github.io/test252/database/data.json');
// xhr.responseType = 'json';
// xhr.onload = function(e) {
//   if (this.status == 200) {
//     console.log('response', this.response); // JSON response  
//     SH = this.response;
//   }
// };
// xhr.send();

fetch('https://ali-1-ibrahim.github.io/test1231/database/csvjson.json')
.then(function(response) {
  
console.log(response)

return response.json();

})
.then(function(d) {
  
  json = d;
  // console.log(json.price)
  
  // Math.max(...arr);
  // console.log(SH)
  for (i = 0; i < json.length; i++) {
    prices.push(json[i].price)
    rooms.push(json[i].number_of_reviews)
    // if (window.CP.shouldStopExecution(1)) {
    //   break;
    // }
    SH.features.push({
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [json[i].longitude, json[i].latitude]
      },
      "properties": {
        "id": json[i].id,
        "name": json[i].name,
        "host_id": json[i].host_id,
        "host_name": json[i].host_name,
        "neighbourhood_group": json[i].neighbourhood_group,
        "neighbourhood": json[i].neighbourhood,
        "latitude": json[i].latitude,
        "longitude": json[i].longitude,
        "room_type": json[i].room_type,
        "price": json[i].price,
        "minimum_nights": json[i].minimum_nights,
        "number_of_reviews": json[i].number_of_reviews,
        "last_review": json[i].last_review,
        "reviews_per_month": json[i].reviews_per_month,
        "calculated_host_listings_count": json[i].calculated_host_listings_count,
        "availability_365": json[i].availability_365,
        "imgs": json[i].imgs,
        'title': json[i].price,
      }
    });
  }
  maxprice = Math.max(...prices);
  minprice = Math.min(...prices);
document.getElementById("Slider_Price").max = Math.max(...prices);
document.getElementById("Slider_Price").min = Math.min(...prices);

var output1 = document.getElementById("demo1");
output1.innerHTML = slider_price.value;

slider_price.oninput = function() {
  output1.innerHTML = this.value;
}

maxprice = Math.max(...rooms);
minprice = Math.min(...rooms);
document.getElementById("Slider_room").max = Math.max(...rooms);
document.getElementById("Slider_room").min = Math.min(...rooms);

var output2 = document.getElementById("demo2");
output2.innerHTML = slider_price.value;

slider_room.oninput = function() {
  output2.innerHTML = this.value;
}

  // window.CP.exitedLoop(1);
  
});


  //document.getElementById("menu_addressssAndClose").src==""
  // document.getElementsByClassName("menu-btn")[0].addEventListener("click" , function(){
  //     if (document.getElementById("menu_addressssAndClose").src=="../imgs/menue.png") {
  //       setTimeout(() => {
        
  //         // 👇️ hides element (still takes up space on the page)
  //         document.getElementsByClassName("menu-btn")[0].innerHTML="X";
  //       }, 100);
  //     } else {
  //       setTimeout(() => {
        
  //         // 👇️ hides element (still takes up space on the page)
  //         document.getElementById("menu_addressssAndClose").src=="../imgs/menue.png";
  //       }, 100);
        
  //     }
  //   })
  //document.cookie = "Dark=true; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=../home page/main.html";

  if(L=='ar'){
    translate(L,'lng-tag');  
    document.body.dir="rtl" 
    // document.getElementsByClassName("mapboxgl-user-location-accuracy-circle")[0].style.dir="ltr" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    document.getElementsByClassName("XBTN")[0].style.right = '94%'
    // r.style.setProperty('--trensbefore', 'translate(-0.5px,-28px) skewY(20deg);');
    // r.style.setProperty('--transafter', 'translate(-7.5px,-28px) skewY(-20deg);');
    // document.getElementsByClassName("mapboxgl-user-location mapboxgl-marker mapboxgl-marker-anchor-center mapboxgl-user-location-show-heading")[0].dir = "ltr" 
    X = true; 
  }else{
    translate('en','lng-tag'); 
    document.body.dir="ltr" 
    // document.getElementsByClassName("mapboxgl-user-location-accuracy-circle")[0].style.dir="ltr" 

    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    document.getElementsByClassName("XBTN")[0].style.right = '2%'
    X = true; 

  }

  if (Dark=="true") {
    r.style.setProperty('--TitleParbackground-color', 'black');
    r.style.setProperty('--ATitleParbackground-color', 'black');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)');
    r.style.setProperty('--Apartment', '#151515');
    r.style.setProperty('--FontColor', 'white');
    r.style.setProperty('--ScrollThump','rgba(255,255,255,0.5)');
    r.style.setProperty('--ScrollTrack','rgba(255,255,255,0.3)');
    // r.style.setProperty('--IconColor','blue');
    r.style.setProperty('--menu','black');
    r.style.setProperty('--BodyBackground','gray');
    r.style.setProperty('--PreloaderBackground','black');

    map.setStyle(xyz);//mapbox://styles/mapbox/dark-v11
  } else {
    r.style.setProperty('--TitleParbackground-color', '#526DA1');
    r.style.setProperty('--ATitleParbackground-color', '#526DA1');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
    r.style.setProperty('--Apartment', '#eee');
    r.style.setProperty('--FontColor', '#526DA1');
    r.style.setProperty('--ScrollThump','rgba(0,0,0,0.5);');
    r.style.setProperty('--ScrollTrack','rgba(0,0,0,0.3);');
    // r.style.setProperty('--IconColor','white');
    r.style.setProperty('--menu','#526DA1');
    r.style.setProperty('--BodyBackground','white');
    r.style.setProperty('--PreloaderBackground','white');
    map.setStyle('mapbox://styles/mapbox/streets-v12');
  }
  var cDiv = d.children;
      for (var i = 0; i < cDiv.length; i++) {
          //cDiv[i].style.transition = "visibility 0s";
          // cDiv[i].style.visibility= "hidden";  //do styling here
          cDiv[i].setAttribute("class","m-fadeOut");
      }

      // document.body.style.flexDirection = "column";
      // document.body.style.alignItems = "center";
      // document.body.style.justifyContent= "center";
      // document.getElementById("PreLoader").style.display="none";//////////////////////////////////////////////////////////////////////////////////////////////
  // document.getElementsByClassName("circles")[0].style.display="none";
  
  var pic = localStorage.getItem("pic")
   
  if (pic == null) {
        document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    }
    else {
      
      document.getElementById("profilepic").src = pic;
    }
    if (X) {
      document.getElementById("PreLoader").style.display="none";//////////////////////////////////////////////////////////////////////////////////////////////
    }
   
}



//marker icon
//var im = document.createElement("img")
// window.onload = function() {
    
//     im.setAttribute('id','fa');
//     im.setAttribute('src','../imgs/icon.png');
//     im.setAttribute('width','32px');
//     im.setAttribute('height','32px');
//     im.style.cursor = "pointer";
    
//     document.body.appendChild(im);
// };

//marker to map
var zoom = map.getZoom(); //zoom level

//var d = document.getElementById("div");

var addresss = document.getElementById("addresss");
var pricee = document.getElementById("pricee");
var roomss = document.getElementById("roomss");
var ApartmentImagess = document.getElementById("ApartmentImages");
var x = document.getElementById("XBTN");

map.on('load', function () {
 
  map.loadImage(
    '../imgs/icon.png',
    (error, image) => {
    if (error) throw error;
    map.addImage('custom-marker', image);
    // Add a GeoJSON source with 2 points
        map.addSource('places', {
      // This GeoJSON contains features that include an "icon"
      // property. The value of the "icon" property corresponds
      // to an image in the Mapbox Streets style's sprite.
      'type': 'geojson',
      'data': SH
    });

    // Add a layer showing the places.
    map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
      'icon-image': 'custom-marker',
      'icon-size': 0.15,
    // get the title name from the source's "title" property
    'text-field': ['get', 'title'],
    'text-font': [
    'Open Sans Semibold',
    'Arial Unicode MS Bold'
    ]
    // 'text-halo-color':'white'
    ,
    'text-offset': [0, 1.25],
    // 'text-anchor': 'top',
    'icon-allow-overlap': true,
    'text-allow-overlap': true,
    // 'icon-ignore-placement': true,
    // 'text-ignore-placement': true,
    },
    paint: {
      "text-color": Dark=="true"?"white":"#526DA1"
    }
    });
    }
    );

// try{
// SH.forEach(({address,price,rooms,location,neighbourhood,imgs,latitude,longitude,number_of_reviews})=>{
 
    
  // var im = document.createElement("img")
  //   im.setAttribute('id','fa');
  //   im.setAttribute('src','../imgs/icon.png');
  //   im.setAttribute('width','32px');
  //   im.setAttribute('height','32px');
  //   // im.setAttribute('z-index','500');
  //   im.style.cursor = "pointer";
    
  //   // var m = new mapboxgl.Marker(im).setLngLat(location).addTo(map)._element.id = location;
  //   var m = new mapboxgl.Marker(im).setLngLat([longitude,latitude]).addTo(map)._element.id = [longitude,latitude];
  //   mapMarkers.push([longitude,latitude]);
  //   // currentMarkers.push(m);


  //   if (map.getZoom() >= 12) {
          
  //     im.style.display = "block";
  // } else {
  //   im.style.display = "none";
  // }
    //m._element.id = location;
    // map.on('zoom', () => {
    
    //     // document.getElementById("fa").width = Math.round(map.getZoom()*2);
    //     // document.getElementById("fa").height = Math.round(map.getZoom()*2);
    //     if (map.getZoom() >= 12) {
          
    //       im.style.display = "block";
    //   } else {
    //     im.style.display = "none";
    //   }
    //     console.log(map.getZoom());
    // });
    
    map.on('click', 'places', (e) => {
      // map.on('click', function(e) {
      //   var coordinates = e.lngLat;
      // for (let i = 0; i < SH.length; i++) {
      //   addresss.innerHTML = address;
      //   pricee.innerHTML = price;
      //   roomss.innerHTML = rooms;
      //   var cDivimgs = ApartmentImagess.children;
 
      // }
      // addresss.innerHTML = address;
      // pricee.innerHTML = price;
      // roomss.innerHTML = rooms;

      addresss.innerHTML = e.features[0].properties.neighbourhood;
      pricee.innerHTML = e.features[0].properties.price;
      roomss.innerHTML = e.features[0].properties.number_of_reviews;
      // var cDivimgs = ApartmentImagess.children;
      // for (var g = 0; g < cDivimgs.length; g++) {
      //   //cDiv[g].style.transition = "visibility 0s";
      //   // cDiv[g].style.visibility= "hidden";  //do styling here
      //   cDivimgs[g].remove();
      // }
            ApartmentImagess.innerHTML="";
            // console.log(e.features[0].properties.imgs)
           var images = e.features[0].properties.imgs.replace(/[\[\]']+/g,'').replaceAll('"', '').split(",");
           console.log(images)
      for (let j = 0; j < images.length; j++) {
        // console.log(imgs.length);
        // console.log(j);
        var img = document.createElement("img");
        // var dvi = document.createElement("div")
        img.setAttribute('src',images[j])
        img.setAttribute('width','100%');//500px
        img.setAttribute('height','100%');//200px
        img.style.padding="10px"
        // dvi.innerHTML = "lk;k"
        // dvi.style.backgroundColor = "blue";
        // dvi.style.padding = "10px";
        
        // dvi.setAttribute("width","200px");
        // dvi.setAttribute("height","10px")
        
        ApartmentImagess.appendChild(img);
        // ApartmentImagess.appendChild(dvi);
        //ApartmentImagess.innerHTML = "<img srs = \'"++"\>'";
        
      }
      // });
      
      // if (d.style.display === "none") {
      //   d.style.display = "block";
      // } else {
      //   d.style.display = "none";
      // }

      // if (d.style.width="0") {
      //   d.style.width="570px";
      // } else {
      //   d.style.width="0px";
      // }
      //x.style.display = "block";
      document.getElementById("div").style.transition = "width 0.5s,height 0.5s";
      addresss.style.transition = "width 0.5s";
      pricee.style.transition = "width 0.5s";
      roomss.style.transition = "width 0.5s";
      
      function responsive(x) {
        if (x.matches) { // If media query matches
          document.getElementById("div").style.width="570px";//570
          document.getElementById("div").style.height="570px";//500//570
          addresss.style.width="482px";
          pricee.style.width="176px";
          roomss.style.width="176px";
          ApartmentImagess.style.height='50%';
          
          } else {
          document.getElementById("div").style.width="270px";//570
          document.getElementById("div").style.height="420px";//500//570
          addresss.style.width="182px";
          pricee.style.width="56px";
          roomss.style.width="56px";
          ApartmentImagess.style.height='35%';
          if (L=='ar') {
            document.getElementsByClassName("XBTN")[0].style.right = '86%'
          }
        }
      }

      var x = window.matchMedia("(min-width: 600px)")
      responsive(x) 
      // x.addListener(responsive)
      //document.getElementById("div").style.top = screen.height + "px";
      //addresss.display="block";
      var cDiv = d.children;
      for (var i = 0; i < cDiv.length; i++) {
          //cDiv[i].style.transition = "visibility 10s";
          //cDiv[i].style.visibility= "visible";  //do styling here
          cDiv[i].setAttribute("class","m-fadeIn");
      }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
cord = [e.features[0].properties.longitude,e.features[0].properties.latitude];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    

    // })

// });


  })

// }catch(err) {
  
  
// // window.location.reload();
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


map.addSource('single-point', {
  'type': 'geojson',
  'data': {
    'type': 'FeatureCollection',
    'features': []
  }
});

map.addLayer({
  'id': 'point',
  'source': 'single-point',
  'type': 'circle',
  'paint': {
    'circle-radius': 10,
    'circle-color': '#448ee4'
  }
});

// Listen for the `result` event from the Geocoder // `result` event is triggered when a user makes a selection
//  Add a marker at the result's coordinates
geocoder.on('result', (event) => {
  map.getSource('single-point').setData(event.result.geometry);
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
map.on('mouseenter', 'places', () => {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'places', () => {
  map.getCanvas().style.cursor = '';
  });
  map.on('zoom', () => {
    
        // document.getElementById("fa").width = Math.round(map.getZoom()*2);
        // document.getElementById("fa").height = Math.round(map.getZoom()*2);
        if (map.getZoom() >= 12) {
          
          map.setLayoutProperty('places', 'visibility', 'visible');
      } else {
        map.setLayoutProperty('places', 'visibility', 'none');
      }
        console.log(map.getZoom());
    });
    
});
//new mapboxgl.Marker().setLngLat([32.276847, 30.606981]).addTo(map);
// new mapboxgl.Marker().setLngLat([32.274186,30.607398]).addTo(map);
// new mapboxgl.Marker().setLngLat([32.277946,30.609672]).addTo(map);
// new mapboxgl.Marker(im).setLngLat(SH[0].location).addTo(map);
// new mapboxgl.Marker(im).setLngLat(SH[1].location).addTo(map);

// new mapboxgl.Marker(im).setLngLat(SH[2].location).addTo(map);

// Set an event listener
// map.on('click', (e) => {
//     new mapboxgl.Marker(im)
// .setLngLat([32.276847, 30.606981])
// .addTo(map);
// });

// hide and show the icon with zooming
// var zoom = map.getZoom(); //zoom level
// map.on('zoom', () => {
//     // document.getElementById("fa").width = Math.round(map.getZoom()*2);
//     // document.getElementById("fa").height = Math.round(map.getZoom()*2);
//     if (map.getZoom() >= 12) {
      
//       document.getElementById("fa").style.display = "block";
//   } else {
//     document.getElementById("fa").style.display = "none";
//   }
//     console.log(map.getZoom());
// });

//marker click
// document.getElementsByClassName("fa").addEventListener("click" , function(){
//     var x = document.getElementsByClassName("div");
//     if (d.style.display === "none") {
//       d.style.display = "block";
//     } else {
//       d.style.display = "none";
//     }
//   })

  //hide and show marker in menu clicking
  //document.getElementsByClassName("menu-btn")[0].addEventListener("click" , function(){
  //   if (im.style.display === "none") {
  //     setTimeout(() => {
      
  //       // 👇️ hides element (still takes up space on the page)
  //       im.style.display = "block";
  //     }, 100);
  //   } else {
  //     setTimeout(() => {
      
  //       // 👇️ hides element (still takes up space on the page)
  //       im.style.display = "none";
  //     }, 100);
      
  //   }
  // })
  
// map.on('boxzoomstart', (e) => {
// console.log('event type:', e.type);
// // event type: boxzoomstart
// });
// document.getElementById('bu').addEventListener('click' , myFunction)

// function myFunction() {
//     console.log(map.getZoom());

// }



// CLOSE FUNCTION
function Xbtn(elm) {
 //document.getElementById(elm.addresssentNode.id).style.display="none"
 //x.style.display = "none";
 d.style.height="0px";
 d.style.width="0px";
 addresss.style.width="0px";
pricee.style.width="0px";
roomss.style.width="0px";
  // console.log("ali");
  var cDiv = d.children;
      for (var i = 0; i < cDiv.length; i++) {
          //cDiv[i].style.transition = "visibility 0s";
          // cDiv[i].style.visibility= "hidden";  //do styling here
          cDiv[i].setAttribute("class","m-fadeOut");
      }
  var cDivimgs = ApartmentImagess.children; //ملهاش لازمة
  for (var g = 0; g < cDivimgs.length; g++) {
    //cDiv[g].style.transition = "visibility 0s";
    // cDiv[g].style.visibility= "hidden";  //do styling here
    cDivimgs[g].remove();
}
// document.getElementById("32.274186,30.607398").remove();
}
















   

// // create a function to make a directions request
// async function getRoute(end) {
//   // make a directions request using cycling profile
//   // an arbitrary start will always be the same
//   // only the end or destination will change
//   const query = await fetch(
//     `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
//     { method: 'GET' }
//   );
//   const json = await query.json();
//   const data = json.routes[0];
//   const route = data.geometry.coordinates;
//   const geojson = {
//     type: 'Feature',
//     properties: {},
//     geometry: {
//       type: 'LineString',
//       coordinates: route
//     }
//   };
//   // if the route already exists on the map, we'll reset it using setData
//   if (map.getSource('route')) {
//     map.getSource('route').setData(geojson);
//   }
//   // otherwise, we'll make a new request
//   else {
//     map.addLayer({
//       id: 'route',
//       type: 'line',
//       source: {
//         type: 'geojson',
//         data: geojson
//       },
//       layout: {
//         'line-join': 'round',
//         'line-cap': 'round'
//       },
//       paint: {
//         'line-color': '#3887be',
//         'line-width': 5,
//         'line-opacity': 0.75
//       }
//     });
//   }
//   // add turn instructions here at the end
// }














 
//   function GetToMe() {
    
//   Xbtn();
//   // locate.trigger();
//   setInterval(() => {
//     id = navigator.geolocation.getCurrentPosition(showPosition);
// // console.log(id)
    
// function showPosition(position) {
//     pos = position.coords;
//     start = [pos.longitude,pos.latitude]
//     getRoute(start);
//     map.addLayer({
//       id: 'point',
//       type: 'circle',
//       source: {
//         type: 'geojson',
//         data: {
//           type: 'FeatureCollection',
//           features: [
//             {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'Point',
//                 coordinates: start
//               }
//             }
//           ]
//         }
//       },
//       paint: {
//         'circle-radius': 10,
//         'circle-color': '#3887be'
//       }
//     });
// }
// }, 2000);
// // getRoute(start);

//   // Add starting point to the map
  
//   // this is where the code from the next step will go
//   map.on('click', (event) => {
//     const end = {
//       type: 'FeatureCollection',
//       features: [
//         {
//           type: 'Feature',
//           properties: {},
//           geometry: {
//             type: 'Point',
//             coordinates: cord
//           }
//         }
//       ]
//     };
//     if (map.getLayer('end')) {
//       map.getSource('end').setData(end);
//     } else {
//       map.addLayer({
//         id: 'end',
//         type: 'circle',
//         source: {
//           type: 'geojson',
//           data: {
//             type: 'FeatureCollection',
//             features: [
//               {
//                 type: 'Feature',
//                 properties: {},
//                 geometry: {
//                   type: 'Point',
//                   coordinates: cord
//                 }
//               }
//             ]
//           }
//         },
//         paint: {
//           'circle-radius': 10,
//           'circle-color': '#f30'
//         }
//       });
//     }
//     getRoute(cord);
//   });
  
// // });



// }


// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "text/plain");
// myHeaders.append("Retry-After", "3600");

// var start = [32.282272,30.610130];

// create a function to make a directions request


var loc = new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true},
  // When active the map will receive updates to the device's location as it changes.
  trackUserLocation: true,
  // Draw an arrow next to the location dot to indicate which direction the device is heading.
  showUserHeading: true
  })
  map.addControl(loc, 'bottom-left');

async function getRoute(end) {

  // X=true
try{
  myInterval = setInterval(() => {
    // id = navigator.geolocation.getCurrentPosition(showPosition);
// console.log(id)
    
// async function showPosition(position) {
//     pos = position.coords;
//     start = [pos.longitude,pos.latitude]


loc.on('geolocate', async function(e) {
  var lon = e.coords.longitude;
  var lat = e.coords.latitude
   
  start = [lon, lat];
  // console.log(start);

  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET'}
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.getSource('route')) {
    map.getSource('route').setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });
  }
  // add turn instructions here at the end
  const instructions = document.getElementById('instructions');
const steps = data.legs[0].steps;

let tripInstructions = '';
for (const step of steps) {
  tripInstructions += `<li>${step.maneuver.instruction}</li>`;
}
instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(data.duration / 60)} min 🚶🏾 </strong></p><ol>${tripInstructions}</ol>`;
// }

console.log("fljhfjhjlh");

});
}, 2000)
map.setLayoutProperty('route', 'visibility', 'visible');
loc._geolocateButton.click();

document.getElementsByClassName('XBTN')[0].style.display='block';
}


catch(err){
  console.log("llllllllllllllj")
  getRoute(cord);
}
} //getrout


// map.on('load', () => {

  // this is where the code from the next step will go
  function GetToMe(){
  // map.on('click', (event) => {
    // const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
    // 
    Xbtn()
    getRoute(cord);

    document.getElementById('instructions').style.display='block';
  // });
  }
// });


function StopGps() {
  clearInterval(myInterval);
  loc.trigger();
  // map.removeLayer('route');
  map.setLayoutProperty('route', 'visibility', 'none');
  // map.removeSource('geojson');
  document.getElementsByClassName('XBTN')[0].style.display='none';
  document.getElementById('instructions').innerHTML='LOODING...';
  document.getElementById('instructions').style.display='none';
  
}

async function relode(){
  Xbtn()

  map.removeLayer('places');
  map.removeSource('places');
  map.removeImage('custom-marker')
  var SH = {
    type: "FeatureCollection",
    features: [],
  };
 await fetch('../database/csvjson.json')
.then(function(response) {
  
console.log(response)

return response.json();

})
.then(function(d) {
  
  json = d;
  // console.log(SH)
  for (i = 0; i < json.length; i++) {
    // if (window.CP.shouldStopExecution(1)) {
    //   break;
    // }
    SH.features.push({
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [json[i].longitude, json[i].latitude]
      },
      "properties": {
        "id": json[i].id,
        "name": json[i].name,
        "host_id": json[i].host_id,
        "host_name": json[i].host_name,
        "neighbourhood_group": json[i].neighbourhood_group,
        "neighbourhood": json[i].neighbourhood,
        "latitude": json[i].latitude,
        "longitude": json[i].longitude,
        "room_type": json[i].room_type,
        "price": json[i].price,
        "minimum_nights": json[i].minimum_nights,
        "number_of_reviews": json[i].number_of_reviews,
        "last_review": json[i].last_review,
        "reviews_per_month": json[i].reviews_per_month,
        "calculated_host_listings_count": json[i].calculated_host_listings_count,
        "availability_365": json[i].availability_365,
        "imgs": json[i].imgs,
        'title': json[i].price,
      }
    });
  }
  
  // window.CP.exitedLoop(1);
  
});
 
map.loadImage(
  'https://raw.githubusercontent.com/ALI-1-Ibrahim/test252/main/imgs/icon.png',
  (error, image) => {
  if (error) throw error;
  map.addImage('custom-marker', image);
  // Add a GeoJSON source with 2 points
      map.addSource('places', {
    // This GeoJSON contains features that include an "icon"
    // property. The value of the "icon" property corresponds
    // to an image in the Mapbox Streets style's sprite.
    'type': 'geojson',
    'data': SH
  });

  // Add a layer showing the places.
  map.addLayer({
  'id': 'places',
  'type': 'symbol',
  'source': 'places',
  'layout': {
    'icon-image': 'custom-marker',
    'icon-size': 0.15,
  // get the title name from the source's "title" property
  'text-field': ['get', 'title'],
  'text-font': [
  'Open Sans Semibold',
  'Arial Unicode MS Bold'
  ]
  // 'text-halo-color':'white'
  ,
  'text-offset': [0, 1.25],
  'text-anchor': 'top',
  'icon-allow-overlap': true,
  'text-allow-overlap': true,
  // 'icon-ignore-placement': true,
  // 'text-ignore-placement': true,
  },
  paint: {
    "text-color": Dark=="true"?"white":"#526DA1"
  }
  });
  }
  );

// try{
// SH.forEach(({address,price,rooms,location,neighbourhood,imgs,latitude,longitude,number_of_reviews})=>{

  
// var im = document.createElement("img")
//   im.setAttribute('id','fa');
//   im.setAttribute('src','../imgs/icon.png');
//   im.setAttribute('width','32px');
//   im.setAttribute('height','32px');
//   // im.setAttribute('z-index','500');
//   im.style.cursor = "pointer";
  
//   // var m = new mapboxgl.Marker(im).setLngLat(location).addTo(map)._element.id = location;
//   var m = new mapboxgl.Marker(im).setLngLat([longitude,latitude]).addTo(map)._element.id = [longitude,latitude];
//   mapMarkers.push([longitude,latitude]);
//   // currentMarkers.push(m);


//   if (map.getZoom() >= 12) {
        
//     im.style.display = "block";
// } else {
//   im.style.display = "none";
// }
  //m._element.id = location;
  // map.on('zoom', () => {
  
  //     // document.getElementById("fa").width = Math.round(map.getZoom()*2);
  //     // document.getElementById("fa").height = Math.round(map.getZoom()*2);
  //     if (map.getZoom() >= 12) {
        
  //       im.style.display = "block";
  //   } else {
  //     im.style.display = "none";
  //   }
  //     console.log(map.getZoom());
  // });
  
  map.on('click', 'places', (e) => {
    // map.on('click', function(e) {
    //   var coordinates = e.lngLat;
    // for (let i = 0; i < SH.length; i++) {
    //   addresss.innerHTML = address;
    //   pricee.innerHTML = price;
    //   roomss.innerHTML = rooms;
    //   var cDivimgs = ApartmentImagess.children;

    // }
    // addresss.innerHTML = address;
    // pricee.innerHTML = price;
    // roomss.innerHTML = rooms;

    addresss.innerHTML = e.features[0].properties.neighbourhood;
    pricee.innerHTML = e.features[0].properties.price;
    roomss.innerHTML = e.features[0].properties.number_of_reviews;
    // var cDivimgs = ApartmentImagess.children;
    // for (var g = 0; g < cDivimgs.length; g++) {
    //   //cDiv[g].style.transition = "visibility 0s";
    //   // cDiv[g].style.visibility= "hidden";  //do styling here
    //   cDivimgs[g].remove();
    // }
          ApartmentImagess.innerHTML="";
          // console.log(e.features[0].properties.imgs)
         var images = e.features[0].properties.imgs.replace(/[\[\]']+/g,'').replaceAll('"', '').split(",");
         console.log(images)
    for (let j = 0; j < images.length; j++) {
      // console.log(imgs.length);
      // console.log(j);
      var img = document.createElement("img");
      // var dvi = document.createElement("div")
      img.setAttribute('src',images[j])
      img.setAttribute('width','100%');//500px
      img.setAttribute('height','100%');//200px
      img.style.padding="10px"
      // dvi.innerHTML = "lk;k"
      // dvi.style.backgroundColor = "blue";
      // dvi.style.padding = "10px";
      
      // dvi.setAttribute("width","200px");
      // dvi.setAttribute("height","10px")
      
      ApartmentImagess.appendChild(img);
      // ApartmentImagess.appendChild(dvi);
      //ApartmentImagess.innerHTML = "<img srs = \'"++"\>'";
      
    }
    // });
    
    // if (d.style.display === "none") {
    //   d.style.display = "block";
    // } else {
    //   d.style.display = "none";
    // }

    // if (d.style.width="0") {
    //   d.style.width="570px";
    // } else {
    //   d.style.width="0px";
    // }
    //x.style.display = "block";
    document.getElementById("div").style.transition = "width 0.5s,height 0.5s";
    addresss.style.transition = "width 0.5s";
    pricee.style.transition = "width 0.5s";
    roomss.style.transition = "width 0.5s";
    
    function responsive(x) {
      if (x.matches) { // If media query matches
        document.getElementById("div").style.width="570px";//570
        document.getElementById("div").style.height="570px";//500//570
        addresss.style.width="482px";
        pricee.style.width="176px";
        roomss.style.width="176px";
        ApartmentImagess.style.height='50%';
        
        } else {
        document.getElementById("div").style.width="270px";//570
        document.getElementById("div").style.height="420px";//500//570
        addresss.style.width="182px";
        pricee.style.width="56px";
        roomss.style.width="56px";
        ApartmentImagess.style.height='35%';
        if (L=='ar') {
          document.getElementsByClassName("XBTN")[0].style.right = '86%'
        }
      }
    }

    var x = window.matchMedia("(min-width: 600px)")
    responsive(x) 
    // x.addListener(responsive)
    //document.getElementById("div").style.top = screen.height + "px";
    //addresss.display="block";
    var cDiv = d.children;
    for (var i = 0; i < cDiv.length; i++) {
        //cDiv[i].style.transition = "visibility 10s";
        //cDiv[i].style.visibility= "visible";  //do styling here
        cDiv[i].setAttribute("class","m-fadeIn");
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
cord = [e.features[0].properties.longitude,e.features[0].properties.latitude];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  // })

// });
})



console.log("relooode")
}

// locate.addEventListener(click,function () {
//       document.getElementsByClassName("mapboxgl-user-location mapboxgl-marker mapboxgl-marker-anchor-center mapboxgl-user-location-show-heading")[0].dir = "ltr" 

// })

// locate.on('click', (e) => {
//   document.getElementsByClassName("mapboxgl-user-location mapboxgl-marker mapboxgl-marker-anchor-center mapboxgl-user-location-show-heading")[0].dir = "ltr" 
//   // event type: boxzoomstart
//   console.log("fjkafjhfjhdsjlfhsdjlkfhsdfjhsdjkfh")
//   });



// ////////////////////////////////slider function//////////////////////////////////// //
// var max = Math.max(...prices)
// console.log(prices)
// console.log(typeof prices)

// document.getElementById("Slider_Price").max = Math.max(...prices);
// var output = document.getElementById("demo");
// output.innerHTML = slider_price.value;

// slider_price.oninput = function() {
//   output.innerHTML = this.value;
  
//   console.log(typeof Math.max(...prices))
// }


























async function filter(){
  document.getElementById('activef').checked=false;

  map.removeLayer('places');
  map.removeSource('places');
  map.removeImage('custom-marker')
  var SH = {
    type: "FeatureCollection",
    features: [],
  };
 await fetch('../database/csvjson.json')
.then(function(response) {
  
console.log(response)

return response.json();

})
.then(function(d) {
  
  json = d;
  // console.log(SH)
  for (i = 0; i < json.length; i++) {
    if (json[i].price<=slider_price.value) {
      SH.features.push({
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [json[i].longitude, json[i].latitude]
        },
        "properties": {
          "id": json[i].id,
          "name": json[i].name,
          "host_id": json[i].host_id,
          "host_name": json[i].host_name,
          "neighbourhood_group": json[i].neighbourhood_group,
          "neighbourhood": json[i].neighbourhood,
          "latitude": json[i].latitude,
          "longitude": json[i].longitude,
          "room_type": json[i].room_type,
          "price": json[i].price,
          "minimum_nights": json[i].minimum_nights,
          "number_of_reviews": json[i].number_of_reviews,
          "last_review": json[i].last_review,
          "reviews_per_month": json[i].reviews_per_month,
          "calculated_host_listings_count": json[i].calculated_host_listings_count,
          "availability_365": json[i].availability_365,
          "imgs": json[i].imgs,
          'title': json[i].price,
        }
      });
    }
    // if (window.CP.shouldStopExecution(1)) {
    //   break;
    // }
   
  }
  
  // window.CP.exitedLoop(1);
  
});
 
map.loadImage(
  'https://raw.githubusercontent.com/ALI-1-Ibrahim/test252/main/imgs/icon.png',
  (error, image) => {
  if (error) throw error;
  map.addImage('custom-marker', image);
  // Add a GeoJSON source with 2 points
      map.addSource('places', {
    // This GeoJSON contains features that include an "icon"
    // property. The value of the "icon" property corresponds
    // to an image in the Mapbox Streets style's sprite.
    'type': 'geojson',
    'data': SH
  });

  // Add a layer showing the places.
  map.addLayer({
  'id': 'places',
  'type': 'symbol',
  'source': 'places',
  'layout': {
    'icon-image': 'custom-marker',
    'icon-size': 0.15,
  // get the title name from the source's "title" property
  'text-field': ['get', 'title'],
  'text-font': [
  'Open Sans Semibold',
  'Arial Unicode MS Bold'
  ]
  // 'text-halo-color':'white'
  ,
  'text-offset': [0, 1.25],
  'text-anchor': 'top',
  'icon-allow-overlap': true,
  'text-allow-overlap': true,
  // 'icon-ignore-placement': true,
  // 'text-ignore-placement': true,
  },
  paint: {
    "text-color": Dark=="true"?"white":"#526DA1"
  }
  });
  }
  );

// try{
// SH.forEach(({address,price,rooms,location,neighbourhood,imgs,latitude,longitude,number_of_reviews})=>{

  
// var im = document.createElement("img")
//   im.setAttribute('id','fa');
//   im.setAttribute('src','../imgs/icon.png');
//   im.setAttribute('width','32px');
//   im.setAttribute('height','32px');
//   // im.setAttribute('z-index','500');
//   im.style.cursor = "pointer";
  
//   // var m = new mapboxgl.Marker(im).setLngLat(location).addTo(map)._element.id = location;
//   var m = new mapboxgl.Marker(im).setLngLat([longitude,latitude]).addTo(map)._element.id = [longitude,latitude];
//   mapMarkers.push([longitude,latitude]);
//   // currentMarkers.push(m);


//   if (map.getZoom() >= 12) {
        
//     im.style.display = "block";
// } else {
//   im.style.display = "none";
// }
  //m._element.id = location;
  // map.on('zoom', () => {
  
  //     // document.getElementById("fa").width = Math.round(map.getZoom()*2);
  //     // document.getElementById("fa").height = Math.round(map.getZoom()*2);
  //     if (map.getZoom() >= 12) {
        
  //       im.style.display = "block";
  //   } else {
  //     im.style.display = "none";
  //   }
  //     console.log(map.getZoom());
  // });
  
  map.on('click', 'places', (e) => {
    // map.on('click', function(e) {
    //   var coordinates = e.lngLat;
    // for (let i = 0; i < SH.length; i++) {
    //   addresss.innerHTML = address;
    //   pricee.innerHTML = price;
    //   roomss.innerHTML = rooms;
    //   var cDivimgs = ApartmentImagess.children;

    // }
    // addresss.innerHTML = address;
    // pricee.innerHTML = price;
    // roomss.innerHTML = rooms;

    addresss.innerHTML = e.features[0].properties.neighbourhood;
    pricee.innerHTML = e.features[0].properties.price;
    roomss.innerHTML = e.features[0].properties.number_of_reviews;
    // var cDivimgs = ApartmentImagess.children;
    // for (var g = 0; g < cDivimgs.length; g++) {
    //   //cDiv[g].style.transition = "visibility 0s";
    //   // cDiv[g].style.visibility= "hidden";  //do styling here
    //   cDivimgs[g].remove();
    // }
          ApartmentImagess.innerHTML="";
          // console.log(e.features[0].properties.imgs)
         var images = e.features[0].properties.imgs.replace(/[\[\]']+/g,'').replaceAll('"', '').split(",");
         console.log(images)
    for (let j = 0; j < images.length; j++) {
      // console.log(imgs.length);
      // console.log(j);
      var img = document.createElement("img");
      // var dvi = document.createElement("div")
      img.setAttribute('src',images[j])
      img.setAttribute('width','100%');//500px
      img.setAttribute('height','100%');//200px
      img.style.padding="10px"
      // dvi.innerHTML = "lk;k"
      // dvi.style.backgroundColor = "blue";
      // dvi.style.padding = "10px";
      
      // dvi.setAttribute("width","200px");
      // dvi.setAttribute("height","10px")
      
      ApartmentImagess.appendChild(img);
      // ApartmentImagess.appendChild(dvi);
      //ApartmentImagess.innerHTML = "<img srs = \'"++"\>'";
      
    }
    // });
    
    // if (d.style.display === "none") {
    //   d.style.display = "block";
    // } else {
    //   d.style.display = "none";
    // }

    // if (d.style.width="0") {
    //   d.style.width="570px";
    // } else {
    //   d.style.width="0px";
    // }
    //x.style.display = "block";
    document.getElementById("div").style.transition = "width 0.5s,height 0.5s";
    addresss.style.transition = "width 0.5s";
    pricee.style.transition = "width 0.5s";
    roomss.style.transition = "width 0.5s";
    
    function responsive(x) {
      if (x.matches) { // If media query matches
        document.getElementById("div").style.width="570px";//570
        document.getElementById("div").style.height="570px";//500//570
        addresss.style.width="482px";
        pricee.style.width="176px";
        roomss.style.width="176px";
        ApartmentImagess.style.height='50%';
        
        } else {
        document.getElementById("div").style.width="270px";//570
        document.getElementById("div").style.height="420px";//500//570
        addresss.style.width="182px";
        pricee.style.width="56px";
        roomss.style.width="56px";
        ApartmentImagess.style.height='35%';
        if (L=='ar') {
          document.getElementsByClassName("XBTN")[0].style.right = '86%'
        }
      }
    }

    var x = window.matchMedia("(min-width: 600px)")
    responsive(x) 
    // x.addListener(responsive)
    //document.getElementById("div").style.top = screen.height + "px";
    //addresss.display="block";
    var cDiv = d.children;
    for (var i = 0; i < cDiv.length; i++) {
        //cDiv[i].style.transition = "visibility 10s";
        //cDiv[i].style.visibility= "visible";  //do styling here
        cDiv[i].setAttribute("class","m-fadeIn");
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
cord = [e.features[0].properties.longitude,e.features[0].properties.latitude];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  // })

// });
})



console.log("relooode") 
}
