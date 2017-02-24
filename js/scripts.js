
//instantiate map into container with set view
var map = L.map('mapcontainer').setView([39.9526, -75.1652], 13);
//add carto light basemap
//var layer =  
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map);

//L.marker([39.933429, -75.159247]).addTo(map)
//   .bindPopup('TEST')




var food = [
	{
		name: 'Pat\'s King of Steaks',
		description: 'Best Philly Cheesesteak in the city!',
		coord: [39.933429, -75.159247],
	},
	{
		name: 'Reading Terminal Market',
		description: 'Indoor farmer\'s market with more than 80 food vendors',
		coord: [39.953434, -75.158998],
	},
	{
		name: 'Zahav',
		description: 'Modern Israeli restaurant',
		coord: [39.946421, -75.145221],
	},
]

//add in non-food markers

var institutions = [
	{
		name: 'The Franklin Institute',
		description: 'One of the oldest science museums in the country',
		coord: [39.958425, -75.173188],
	},
	{
		name: 'Philadelphia Zoo',
		description: '42-acre Victorian Zoo',
		coord: [39.976185, -75.194817],
	},
	//{
	//	name: 'Philadephia Museum of Art & Rodin Museum',
	//	description: 'Third largest art museum in the country'
	//	coord: [39.965377, -75.180910],
	//},
]


//create markers

var foodlayergroup = L.layerGroup();

food.forEach(function(data) {
	var thisMarker = L.marker(data.coord, {
		title: data.name,
	})
	thisMarker.bindPopup(data.name + ' - ' + data.description);

	//add the marker to the layergroup
	foodlayergroup.addLayer(thisMarker);
}) ;

var institutionlayergroup = L.layerGroup();

institutions.forEach(function(data) {
	var thisMarker = L.marker(data.coord, {
		title: data.name,
	})
	thisMarker.bindPopup(data.name + ' - ' + data.description);

	//add the marker to the layergroup
	institutionlayergroup.addLayer(thisMarker);
}) ;

foodlayergroup.addTo(map);
institutionlayergroup.addTo(map);


var types = {
  "Food": foodlayergroup,
  "Institutions": institutionlayergroup,
}

L.control.layers(null, types, {
  collapsed: false
}).addTo(map);