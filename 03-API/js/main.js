APIKey = "7404bb15ba340fb3";

var city = "";
var state = "";
//empty quotes indicates it will be a string

//loadWeather
var loadWeather = function(response){

	if(response.response.error){
		alert(response.response.error.description);
		return;
	};

	var thisCity = response.current_observation.display_location.city;
	var temp = response.current_observation.temp_f + "°";
	var weather = response.current_observation.weather;
	var icon = response.current_observation.icon_url;

	// console.log(thisCity + ". " + temp + ". " + weather + ". " + icon);

	$('.temperature').text(temp);
	$('.weather').text(weather);
	$('.currentCity').val(thisCity);
	$('.weatherIcon').html('<img src="' + icon + '"">');

};


//get weather function
var getWeather = function(){

	//"restful" api is one that you can just call from and get a response
	var thisURL = "http://api.wunderground.com/api/" + APIKey +"/conditions/q/" + state + "/" + city + ".json";

	//ajax takes all the info we want, goes to the website, and brings it all back
	$.ajax({
		url : thisURL,
		dataType : "jsonp",
		success : function(response){
			loadWeather(response);
		} //doesnt need a comma bc its the last value in the key/value pair

	});
};

//set location function
var setLocation = function(){

	//define current city: value of the div class called currentCity
	//what you typed into it as the city
	city = $('.currentCity').val();
	if(city == null || city ==""){
		alert("You need to enter a city!");
		return;
	};


	state = $('.currentState').val();

	console.log("you want the weather for " + city + ", " + state);

	getWeather();

};


//init
var init = function(){
	console.log("yo, homes. what\'s the weather?");

	$("#submit").click(function(e){
		e.preventDefault();
		setLocation();
	});
};

$(document).ready(function(){
	init();
});