console.log("pixel");

$colorField = $('#color-field');
$brush = $('.brush');


$('#set-color').on('click', function(event){
	event.preventDefault();
	colorSpec = $colorField.val()
	$brush.prop("style").background = colorSpec;
	// console.log('color');
})