//1
$(function() {
	console.log("Let's get ready to party with jQuery!");
});

//2
$('article img').addClass('image-center');

//3
$('article p').last().remove();

//4
$('#title').css('font-size', Math.floor(Math.random() * 100));

//5
$('ol').append('<li>This is an li</li>');

//6
$('aside').empty();
$('aside').append('<p>Sorry for the previous existence of a list in this location</p>');

//7
$('.form-control').on('keyup', function() {
	let red = $('.form-control').eq(0).val();
	let green = $('.form-control').eq(1).val();
	let blue = $('.form-control').eq(2).val();

	$('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
});

//8
$('article img').on('click', function() {
	$(this).remove();
});
