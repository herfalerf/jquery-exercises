$('#submit-button').on('click', function() {
	console.log('click');
	let movie = $('#movie-title').val();
	let rating = $('#movie-rating').val();
	console.log(movie);

	$('table tbody').append(
		$('<tr/>').append(
			$('<td>' + movie + '</td>'),
			$('<td>' + rating + '</td>'),
			$('<button> remove </button>').on('click', function() {
				$(this).parent().remove();
			})
		)
	);

	$(form)[0].reset();
});
