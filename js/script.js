// var $mainHeader = $('#main-header');
// $mainHeader.html('Hello');//changes the text in main header

$('#random-gif-btn').click(function(){
	$.get( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat&rating=pg", function( data ) {
  		var img = '<img src=" ' + data.data.image_url + ' ">'
  		$('#random-gif-container').html(img);
	});
});

// image_url