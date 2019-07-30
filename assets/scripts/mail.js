$(document).ready(function() {
	var submitted=false;

	$('#post-submit-msg').hide();

	$('.form').on('submit', function(e) {
	  $('.form').fadeOut(1000);
	  // $('.form').prepend('I have received your message...');
	  $('#post-submit-msg').fadeIn(2000);
	});

});