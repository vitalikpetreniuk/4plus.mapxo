$('.burger').on('click', function () {
	$(this).toggleClass('_active');
	$('.menu').toggleClass('_active');
	$('body').toggleClass('_lock');
})