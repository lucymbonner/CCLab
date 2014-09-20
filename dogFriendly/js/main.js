//array of objects- each object a place 
//with constructors of title, type, description, location

//maybe click on map, make new marker, 
//form pops up for info to put into info bubble and lists

//
var barArray = [];
var foodArray = [];
var parkArray = [];
var shopArray = [];

var placeType = " ";
var newBarDescription = " ";


//update functions for each type of array list 
var updateBars = function(){
	$('#barList').empty();
	$(barArray).each(function(i){
		var newBarTitle = $('<div/>');
		newBarTitle.attr('id', i).addClass('placeTitle').html('<h3>' + this + '</h3>')
		// var newBarD = $('<div/>');
		// newBarD.addClass('placeDescription').html('<p>' + newBarDescription + '<p>')
		$('#barList').append(newBarTitle);
	});
};

var updateFoods = function(){
	$('#foodList').empty();
	$(foodArray).each(function(i){
		var newFoodTitle = $('<div/>');
		newFoodTitle.attr('id', i).addClass('placeTitle').html('<h3>' + this + '</h3>')
		$('#foodList').append(newFoodTitle);
	});
};

var updateParks = function(){
	$('#parkList').empty();
	$(parkArray).each(function(i){
		var newParkTitle = $('<div/>');
		newParkTitle.attr('id', i).addClass('placeTitle').html('<h3>' + this + '</h3>')
		$('#parkList').append(newParkTitle);
	});
};

var updateShops = function(){
	$('#shopList').empty();
	$(shopArray).each(function(i){
		var newShopTitle = $('<div/>');
		newShopTitle.attr('id', i).addClass('placeTitle').html('<h3>' + this + '</h3>')
		$('#shopList').append(newShopTitle);
	});
};

//new place to add to a list from the form
var savePlace = function(){
	placeType = $('#placeType').val();
	console.log(placeType);
	if (placeType == "bar") {
		var newBar = $('#placeTitle').val();
		barArray.push(newBar);
		$('#placeTitle').val('');
		$('#placeDescription').val('');
		updateBars();
		console.log(barArray);
	} else if (placeType == "food") {
		var newFood = $('#placeTitle').val();
		foodArray.push(newFood);
		$('#placeTitle').val('');
		$('#placeDescription').val('');
		updateFoods();
		console.log(foodArray);
	} else if (placeType == "park") {
		var newPark = $('#placeTitle').val();
		parkArray.push(newPark);
		$('#placeTitle').val('');
		$('#placeDescription').val('');
		updateParks();
		console.log(parkArray);
	} else if (placeType == "shop") {
		var newShop = $('#placeTitle').val();
		shopArray.push(newShop);
		$('#placeTitle').val('');
		$('#placeDescription').val('');
		updateShops();
		console.log(shopArray);
	};
	console.log('ran savePlace');
};


//MAPS MAP MAPS

//initialize map into the "map" div LEAFLET
var map = L.map('map').setView([40.71, -74.01], 12);

//add in street view tile layer MAPBOX
/*setting the URL template for the tile images (get yours at Mapbox), 
the attribution text and the maximum zoom level of the layer */
L.tileLayer('http://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>', 
    id: 'examples.map-i86nkdio'
}).addTo(map);

//geosearch plugin from smeijer
new L.Control.GeoSearch({
    provider: new L.GeoSearch.Provider.Google()
}).addTo(map);

//marker in LEAFLET
var marker = new L.marker([40.7356, -73.997]).addTo(map);
marker.bindPopup("<b>Bo\'s New School!</b><br>I am a puppy-friendly place.").openPopup();

//something to happen on click of marker (base code of alert) LEAFLET
// function onMapClick(e) {
// 	popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(map);
// }

function onMapClick(e) {
	console.log("mapClicked. e: ", e);

	var newMarker = new L.marker(e.latlng).addTo(map);
	// newMarker.bindPopup("<b>placeName</b><br>placeType");
};

var geoLayer = L.geoJson().addTo(map);
geoLayer.addData(geojsonFeature);

//each time to add a new place:
var newPlace = function(name, type){
	//track mouse location- click to add new place? 
	//form within popup that asks for name and type?
	//mouse location to lat, lng??
	function getLatLng(e) {
		mouseLatLng = e.latLng;

		console.log("LatLng: " + mouseLatLng);
	};

	//set string value for placeName and placeType
	placeName = (name);
	placeType = (type);

	//make new marker for the new location
	var makeMarker = function(lat, lng){
		var newMarker = L.marker([lat, -lng]).addTo(map);
		newMarker.bindPopup("<b>placeName</b><br>placeType");
	};
};


//init
var init = function() {
	console.log('Bobo');

	$('#addButton').on('click', function(e){
		e.preventDefault();
		savePlace();
	});

	//add click functions
	map.on('click',function(e){
		onMapClick(e);
	});
};

//load listener
$(document).ready(init);