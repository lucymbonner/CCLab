

//initialize map into the "map" div LEAFLET
var map = L.map('map').setView([51.505, -0.09], 13);

//add in street view tile layer MAPBOX
/*setting the URL template for the tile images (get yours at Mapbox), 
the attribution text and the maximum zoom level of the layer */
L.tileLayer('http://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>', 
    id: 'examples.map-i86nkdio'
}).addTo(map);

//marker in LEAFLET
var marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup("<b>Bo\'s world!</b><br>I am a puppy-friendly place.").openPopup();

//something to happen on click of marker (base code of alert)
function onMapClick(e) {
	popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);


//GOOGLEMAPS
// var mapOptions = {
//           center: { lat: 40.6928, lng: -73.9903},
//           zoom: 12
//         };
// var map = new google.maps.Map(document.getElementById('map'), mapOptions);

// var placeMarker = function(location){

// // function placeMarker(location) {
//   var marker = new google.maps.Marker({
//       position: location,
//       map: map
//  	});

//   console.log("placeMarker called!");

//   map.setCenter(location);

// };

//code for putting info in InfoWindows on 5 markers
// var message = ["This","is","the","secret","message"];
//   var infowindow = new google.maps.InfoWindow(
//       { content: message[number],
//         size: new google.maps.Size(50,50)
//       });
//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.open(map,marker);
//   });





//init
var init = function() {
	console.log('Bobo');

	//add click functions
	// google.maps.event.addListener(map, 'click', function(event) {
 //    	placeMarker(event.latLng);
 //  	});
};

//load listener
$(document).ready(init);