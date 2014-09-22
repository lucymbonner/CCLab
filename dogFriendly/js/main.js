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
var newBar = " ";
var newFood = " ";
var newPark = " ";
var newShop = " ";

var newMarker;

//save lists to localStorage
var updateLocalStorageBars = function(){
	//stringify barArray and save it as barList in local storage
	var barListString = JSON.stringify(barArray);
	localStorage.setItem('barList', barListString);
};
var updateLocalStorageFood = function(){
	var foodListString = JSON.stringify(foodArray);
	localStorage.setItem('foodList', foodListString);
};
var updateLocalStorageParks = function(){
	var parkListString = JSON.stringify(parkArray);
	localStorage.setItem('parkList', parkListString);
};
var updateLocalStorageShops = function(){
	var parkListString = JSON.stringify(parkArray);
	localStorage.setItem('parkList', parkListString);
};

//update functions for each type of array list 
var updateBars = function(){
	$('#barList').empty();

	//check if there is a barList in localStorage
	var barListString = localStorage.getItem('barList');
	if (barListString){
		barArray = JSON.parse(barListString);
	};
	$(barArray).each(function(i){
		var newBarTitle = $('<div/>');
		newBarTitle.attr('id', i).addClass('placeTitle').html('<h3>' + this + '</h3>')
		$('#barList').append(newBarTitle);
	});
};

var updateFoods = function(){
	$('#foodList').empty();
	var foodListString = localStorage.getItem('foodList');
	if (foodListString){
		foodArray = JSON.parse(foodListString);
	};
	$(foodArray).each(function(i){
		var newFoodTitle = $('<div/>');
		newFoodTitle.attr('id', i).addClass('placeTitle').html('<h3>' + this + '</h3>')
		$('#foodList').append(newFoodTitle);
	});
};

var updateParks = function(){
	$('#parkList').empty();
	var parkListString = localStorage.getItem('parkList');
	if (parkListString){
		parkArray = JSON.parse(parkListString);
	};
	$(parkArray).each(function(i){
		var newParkTitle = $('<div/>');
		newParkTitle.attr('id', i).addClass('placeTitle').html('<h3>' + this + '</h3>')
		$('#parkList').append(newParkTitle);
	});
};

var updateShops = function(){
	$('#shopList').empty();
	var shopListString = localStorage.getItem('shopList');
	if (shopListString){
		shopArray = JSON.parse(shopListString);
	};
	$(shopArray).each(function(i){
		var newShopTitle = $('<div/>');
		newShopTitle.attr('id', i).addClass('placeTitle').html('<h3>' + this + '</h3>')
		$('#shopList').append(newShopTitle);
	});
};

//new place to add to a list from the form
var savePlace = function(){
	placeType = $('#placeType').val();
	placeDescription = $('#placeDescription').val();
	console.log(placeType);
	if (placeType == "bar") {
		newBar = $('#placeTitle').val();
		barArray.push(newBar);
		$('#placeTitle').val('');
		$('#placeDescription').val('');
		newMarker.bindPopup("<b>" + newBar + "</b><br>" + placeDescription);
		updateLocalStorageBars();
		updateBars();
		console.log(barArray);
	} else if (placeType == "food") {
		newFood = $('#placeTitle').val();
		foodArray.push(newFood);
		$('#placeTitle').val('');
		$('#placeDescription').val('');
		newMarker.bindPopup("<b>" + newFood + "</b><br>" + placeDescription);
		updateLocalStorageFood();
		updateFoods();
		console.log(foodArray);
	} else if (placeType == "park") {
		newPark = $('#placeTitle').val();
		parkArray.push(newPark);
		$('#placeTitle').val('');
		$('#placeDescription').val('');
		newMarker.bindPopup("<b>" + newPark + "</b><br>" + placeDescription);
		updateLocalStorageParks();
		updateParks();
		console.log(parkArray);
	} else if (placeType == "shop") {
		newShop = $('#placeTitle').val();
		shopArray.push(newShop);
		$('#placeTitle').val('');
		$('#placeDescription').val('');
		newMarker.bindPopup("<b>" + newShop + "</b><br>" + placeDescription);
		updateLocalStorageShops();
		updateShops();
		console.log(shopArray);
	};
	console.log('ran savePlace');
	dialog.dialog("close");
};

//form within a popup dialog box

function addPlace() {
      allFields.removeClass( "ui-state-error" );
      dialog.dialog("close");
      savePlace();
      // dialog.dialog("close");
};

var dialog = $("#form").dialog({
      autoOpen: false,
      // height: "300 !important", /*height does not work, gets overridden by "auto" in ui.js file */
      // minHeight: 300,
      // width: 400,
      minWidth: 350,
      modal: true,
    });
var form = dialog.find("form").on("submit", function(e) {
      e.preventDefault();
      savePlace();
      //dialog.dialog("close");
    });


//MAPS MAP MAPS

//initialize map into the "map" div LEAFLET
var map = L.map('map').setView([40.71, -74.01], 12);

//add in street view tile layer MAPBOX
L.tileLayer('http://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>', 
    id: 'examples.map-i86nkdio'
}).addTo(map);

//marker in LEAFLET
var markerSchool = new L.marker([40.736974, -73.992184]).addTo(map);
markerSchool.bindPopup("<b>Bo\'s New School!</b><br>D12 is a puppy-friendly place.").openPopup();
var markerHome = new L.marker([40.695, -73.93]).addTo(map);
markerHome.bindPopup("<b>Bo\'s House!</b><br>Bo lives here with Monroe.").openPopup();

function onMapClick(e) {
	console.log("mapClicked. e: ", e);
	newMarker = new L.marker(e.latlng).addTo(map);
	//popup dialog box with form
	dialog.dialog("open");
	// newMarker.bindPopup("<b>placeName</b><br>placeDescription");
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

	updateBars();
	updateFoods();
	updateParks();
	updateShops();
};

//load listener
$(document).ready(init);