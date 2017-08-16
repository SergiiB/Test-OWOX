$(document).ready(function () {	
	$('[data-bind="nextLevel"]').on('click', function(){
		var $parent = $(this).parent();

		$parent.find('> ul').toggle();
		$parent.find('[data-bind="nextLevel"]').first().toggleClass('minus');
	});
	$('.submenu > a').on('click', function(){
		$('a').removeClass('active');
		var active = $(this).first();

		active.addClass('active');
		active.prev('[data-bind="nextLevel"]').toggle();

		if($('.submenu > a').hasClass('active'))
			$('.submenu > .plus').parent().children().first('.plus').toggleClass('prev');
	})
	$('.prev').on('click', function(){
		var $parent = $(this).parent();

		$parent.find('> ul').toggle();
		$('.plus').removeClass('prev');
	})

});