
//instantiate map into container with set view
var map = L.map('mapcontainer').setView([39.9526, -75.1652], 12);
//add carto light basemap
//var layer =  
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map);


//L.geoJSON(stations).addTo(map);


var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "deepskyblue",
    color: "cyan",
    weight: 1,
    opacity: .2,
    fillOpacity: 0.8
};


L.geoJson(stations, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
    },
}).bindPopup(function (layer) {
    return ' Total number of docks in kiosk: ' + layer.feature.properties.totalDocks +
     		' Docks currently available: ' + layer.feature.properties.docksAvailable + 
     		' Bikes currently available: ' + layer.feature.properties.bikesAvailable;  
}).addTo(map);

//L.geoJson(stations, {
//	onEachFeature: function (feature, layer) {
//		layer.on('click', function(){
//
//		})
//	}

//Add below back in if var geojsonMarkerOptions doesn't work
//L.geoJson(stations, {
//   pointToLayer: function (feature, latlng) {
//      return L.circleMarker(latlng, {
//        color: 'green',
//        fillColor: 'green',
//        fillOpacity: .5,
//        weight: 1,
//      }).setRadius(10);
//    },