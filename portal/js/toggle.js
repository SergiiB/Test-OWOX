// var toggleElement = document.querySelector('.toggle');
// var menuElement = toggleElement.querySelector('.active')	

// toggleElement.addEventListener('click', function() {	
// 	menuElement.classList.toggle('open');
// });


$(document).ready(function () {	
	$('.toggle a').on('click', function () {
		var date = $(this).attr('data');

		$('.'+date)
			.toggle('open')
	});
});