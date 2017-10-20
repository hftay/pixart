console.log("pixel");

var $colorField = $('#color-field');
var $brush = $('.brush');
var $body = $('body');

$('#set-color').on('click', function(event){
	event.preventDefault();
	var colorSpec = $colorField.val()
	$brush.prop("style").background = colorSpec;
	// console.log('color');

$body.on("mouseover",function(event){
	var $eventTarget = $(event.target)	
	if ($eventTarget.prop("class")==="square"){
		// $eventTarget.addClass("green");
		$eventTarget.prop("style").background = $colorField.val();

	}
})

})

var createDivs = function (){
	for(i=0; i<1000; i++){
		var $sqDiv = $('<div>').prop({ class: "square" });
		$body.append($sqDiv);
	}
};

createDivs();



// ----------------OMDB AJAX STAMP TOOL --------------//

var $movieName = $('#movie-name');
var $poster = $('.poster');

$('#get-poster').on('click', function(event){
	event.preventDefault();

	var options = {
		url: "http://omdbapi.com/",
		method: 'get',
		data: { apikey: '2f6435d9', t: $movieName.val()}
	}

	var appendSearchResult = function(resp){
		image_url = resp["Poster"];
		console.log(resp["Poster"]);
		$poster.css('background-image', "url("+image_url+")" );

		
	}

	$.ajax(options).done(appendSearchResult);


	$body.on("mouseover",function(event){
	var $eventTarget = $(event.target)	
	if ($eventTarget.prop("class")==="square"){
		// $eventTarget.addClass("green");
		$eventTarget.prop("style").background = $poster.prop("style").backgroundImage;

	}
})

});









