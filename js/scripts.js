
//instantiate map into container with set view
var map = L.map('mapcontainer').setView([39.9526, -75.1652], 12);
//add carto light basemap
//var layer =  
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map);


//L.geoJSON(stations).addTo(map);


//L.geoJson(stations, {
//	style: function (feature) {
//      var customRadius;
//      if (feature.properties.totalDocks == 10) {
//      	customRadius = '10';
//      }
//    }
//}


L.geoJson(stations, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        color: 'green',
        fillColor: 'green',
        fillOpacity: .5,
        weight: 1,
      }).setRadius(10);
    },
}).bindPopup(function (layer) {
    return layer.feature.properties.name;  //for some reason this will work for name but not totalDocks
}).addTo(map);

//L.geoJson(stations, {
//	onEachFeature: function (feature, layer) {
//		layer.on('click', function(){
//
//		})
//	}
