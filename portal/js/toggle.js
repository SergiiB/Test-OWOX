$(document).ready(function () {	
	$('[data-bind="nextLevel"]').on('click', function(){
		var $parent = $(this).parent();

		$parent.find('> ul').toggle();
		$parent.find('.plus').first().toggleClass('minus');

		// if($parent.css('display') === 'none'){
		// 	$('.submenu ul').css('display', 'none');
		// }
	});
	$('.submenu > a').on('click', function(){
		$('.submenu > a').removeClass('active');
		var active = $(this).first();

		active.addClass('active');
		active.prev('.plus').toggle();

		if($('.submenu .b-link').hasClass('active'))
			$('li .submenu').children('.plus').toggleClass('prev');
	})
	$('.prev').on('click', function(){
		var $parent = $(this).parent();

		$parent.find('> ul').toggle();
		$('plus').removeClass('prev');
	})

});