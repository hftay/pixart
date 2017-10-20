console.log("pixel");

$colorField = $('#color-field');
$brush = $('.brush');
$body = $('body');



$('#set-color').on('click', function(event){
	event.preventDefault();
	colorSpec = $colorField.val()
	$brush.prop("style").background = colorSpec;
	// console.log('color');
})

var createDivs = function (){
	for(i=0; i<1000; i++){
		$sqDiv = $('<div>').prop({ class: "square" });
		$body.append($sqDiv);
	}
};

createDivs();

$body.on("mouseover",function(event){
	$eventTarget = $(event.target)	
	if ($eventTarget.prop("class")==="square"){
		// $eventTarget.addClass("green");
		$eventTarget.prop("style").background = $colorField.val();

	}
})