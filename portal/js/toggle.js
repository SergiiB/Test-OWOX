$(document).ready(function () {	
	$('[data-bind="nextLevel"]').on('click', function(){
		var $parent = $(this).parent();

		$parent.find('> ul').toggle();
		if($parent.find('> ul').length > 0){
			$parent.find('.plus').first().toggleClass('minus');
		}

		if($parent.find('> ul').css('display') === 'none'){
			$parent.find('ul').css('display', 'none');
			$parent.find('.plus').removeClass('minus');
		}
	});
	$('.submenu > a').on('click', function(){
		$('.submenu > a').removeClass('active');
		var active = $(this).first();

		active.addClass('active');
		active.prev('.plus').toggle();

		$(this).parent().parent().find('> li:not(:has(a.active))').hide();
		$(this).parent().find('> ul').show();
		$(this).parent().find(' li').show();
	})
});