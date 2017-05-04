$(document).ready(function(){



	$("#submit-btn").click(function(){
		event.preventDefault();
		citySelection();

	})

function citySelection() {

	var city = $("#city-type").val();
	var cityname = city.toLowerCase();

	if ( cityname == "new york" || cityname == "nyc" || cityname == "new york city" ) {	
	
		console.log("change to NYC Pic!")

	} else if ( cityname == "san francisco" || cityname == "sf" || cityname == "bay area" ) {
		
		console.log("change to SF pic");

	} else if ( cityname == "los angeles" || cityname == "la" || cityname == "lax" ) {
		
		console.log("change to LA pic");

	} else if ( cityname == "austin" || cityname == "atx" ) {
		
		console.log("change to austin pic");

	} else if ( cityname == "sydney" || cityname == "syd" ) {
		
		console.log("change to austin pic");	
	
	} else {
		console.log("try again!");

	}

}

});
	

		
		


